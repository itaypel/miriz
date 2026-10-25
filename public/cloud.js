/* ---------- Supabase: auth, per-user state, document files ---------- */
const Cloud=(()=>{
  const cfg=window.MIRIZ_CONFIG||{};
  const on=!!(cfg.supabaseUrl&&cfg.supabaseAnonKey&&window.supabase);
  const sb=on?window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey,{auth:{persistSession:true,autoRefreshToken:true}}):null;
  const BUCKET='docs';
  let user=null,pending=null,timer=null,busy=null,stamp=null;
  // Supabase signs in with email + a 6+ char password; the app uses a username and a short code
  const DOMAIN='users.miriz.vercel.app';
  const email=name=>`${name.trim().toLowerCase()}@${DOMAIN}`;
  const secret=code=>`miriz#${code}`;
  const strip=s=>{const o={...s};delete o.loggedIn;return o};
  const fail=e=>window.dispatchEvent(new CustomEvent('cloud-error',{detail:e}));

  async function flush(){
    clearTimeout(timer);timer=null;
    if(busy)await busy;
    if(!pending||!user)return;
    const data=strip(pending);pending=null;
    const updated_at=new Date().toISOString();
    busy=sb.from('app_state').upsert({user_id:user.id,data,updated_at}).then(({error})=>{
      if(error)throw error;stamp=updated_at;
    }).catch(e=>{if(!pending)pending=data;timer=setTimeout(flush,5000);fail(e)}).finally(()=>{busy=null});
    return busy;
  }

  return {
    on,
    get user(){return user},
    get dirty(){return !!(pending||busy)},
    get stamp(){return stamp},
    get username(){return user?user.email.split('@')[0]:''},
    async session(){const {data}=await sb.auth.getSession();user=data.session?.user||null;return user},
    async signIn(name,code){
      const {data,error}=await sb.auth.signInWithPassword({email:email(name),password:secret(code)});if(error)throw error;
      user=data.user;return user;
    },
    async signOut(){await flush().catch(()=>{});await sb.auth.signOut().catch(()=>{});user=null;stamp=null},
    async load(){
      const {data,error}=await sb.from('app_state').select('data,updated_at').eq('user_id',user.id).maybeSingle();
      if(error)throw error;if(data)stamp=data.updated_at;return data;
    },
    save(state){pending=state;clearTimeout(timer);timer=setTimeout(flush,700)},
    flush,
    async upload(id,file){
      const path=`${user.id}/${id}`;
      const {error}=await sb.storage.from(BUCKET).upload(path,file,{contentType:file.type||'application/octet-stream',upsert:true});
      if(error)throw error;return path;
    },
    async urls(paths){const {data,error}=await sb.storage.from(BUCKET).createSignedUrls(paths,86400);if(error)throw error;return data},
    async remove(paths){if(paths.length&&user)await sb.storage.from(BUCKET).remove(paths).catch(()=>{})},
    /* push notifications: this device's subscription lives in push_subscriptions */
    vapidKey:cfg.vapidPublicKey||'',
    async savePush(sub){
      const {error}=await sb.from('push_subscriptions').upsert({endpoint:sub.endpoint,user_id:user.id,keys:sub.keys});if(error)throw error;
    },
    async removePush(endpoint){await sb.from('push_subscriptions').delete().eq('endpoint',endpoint)},
    async testPush(){
      const {data}=await sb.auth.getSession();
      const r=await fetch('/api/push-test',{method:'POST',headers:{Authorization:`Bearer ${data.session?.access_token||''}`}});
      if(!r.ok)throw new Error('push-test '+r.status);return (await r.json()).sent;
    }
  };
})();

/* ---------- device lock: Face ID / fingerprint through WebAuthn ---------- */
const Lock=(()=>{
  const KEY='miriz-bio';
  const rand=n=>crypto.getRandomValues(new Uint8Array(n));
  const b64=buf=>btoa(String.fromCharCode(...new Uint8Array(buf)));
  const unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
  const get=()=>{try{return localStorage.getItem(KEY)}catch(e){return null}};
  return {
    has:()=>!!get(),
    async available(){
      try{return !!(window.PublicKeyCredential&&await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())}catch(e){return false}
    },
    async register(name){
      const cred=await navigator.credentials.create({publicKey:{
        challenge:rand(32),rp:{name:'miriz'},
        user:{id:rand(16),name:name||'miriz',displayName:name||'miriz'},
        pubKeyCredParams:[{type:'public-key',alg:-7},{type:'public-key',alg:-257}],
        authenticatorSelection:{authenticatorAttachment:'platform',userVerification:'required',residentKey:'discouraged'},
        timeout:60000}});
      localStorage.setItem(KEY,b64(cred.rawId));
    },
    async verify(){
      await navigator.credentials.get({publicKey:{
        challenge:rand(32),allowCredentials:[{type:'public-key',id:unb64(get())}],
        userVerification:'required',timeout:60000}});
    },
    clear(){try{localStorage.removeItem(KEY)}catch(e){}}
  };
})();
