document.documentElement.lang='he';document.documentElement.dir='rtl';
/* ---------- icons ---------- */
const IP={
home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
cal:'<rect x="3" y="5" width="18" height="16" rx="4"/><path d="M8 3v4M16 3v4M3 10h18"/>',
wallet:'<path d="M5 7V6a2 2 0 0 1 2-2h10v3"/><rect x="3" y="7" width="18" height="13" rx="4"/><circle cx="16.5" cy="13.5" r="1.4"/>',
drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
note:'<path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4M9 13h6M9 17h4"/>',
folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
paw:'<circle cx="6.5" cy="10" r="1.8"/><circle cx="10" cy="6.5" r="1.8"/><circle cx="14" cy="6.5" r="1.8"/><circle cx="17.5" cy="10" r="1.8"/><path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.7 1.6 2.6 3.2 2l2.3-.7 2.3.7c1.6.6 3.2-.3 3.2-2C17.5 15.2 15 12 12 12z"/>',
prev:'<path d="m9 6 6 6-6 6"/>',next:'<path d="m15 6-6 6 6 6"/>',
x:'<path d="M6 6l12 12M18 6 6 18"/>',
trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
pin:'<path d="M9 3h6l-1 6 4 4H6l4-4z"/><path d="M12 13v8"/>',
upload:'<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
file:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',
img:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
face:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 9.5v1.5M15 9.5v1.5M12 9.5V13h-1M9.5 16a4 4 0 0 0 5 0"/>',
finger:'<path d="M12 11v4M8.5 7.5A5 5 0 0 1 17 11v2M7 11a5 5 0 0 1 .5-2.2M7 14v-3M9.5 19.5A9 9 0 0 0 10 15v-4a2 2 0 0 1 4 0v1M14 15v2a9 9 0 0 1-.6 3M17 16a13 13 0 0 1-.5 3"/>',
logout:'<path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3M14 17l5-5-5-5M19 12H8"/>',
check:'<path d="m5 12 5 5 9-10"/>',
arrive:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',depart:'<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
grid:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
up:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'
};
const ic=(n,extra='')=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true" ${extra}>${IP[n]||''}</svg>`;

/* ---------- helpers ---------- */
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const P=s=>{const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const add=(s,n)=>{const d=P(s);d.setDate(d.getDate()+n);return iso(d)};
const diff=(a,b)=>Math.round((P(b)-P(a))/864e5);
const TODAY=iso(new Date());
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>'₪'+Math.round(n).toLocaleString('he-IL');
const fmt=(s,o)=>new Intl.DateTimeFormat('he-IL',o).format(P(s));
const dShort=s=>fmt(s,{day:'numeric',month:'short'});
const dLong=s=>fmt(s,{weekday:'long',day:'numeric',month:'long'});
const monthTitle=(y,m)=>new Intl.DateTimeFormat('he-IL',{month:'long',year:'numeric'}).format(new Date(y,m,1));
const mShort=m=>new Intl.DateTimeFormat('he-IL',{month:'short'}).format(new Date(2026,m,1));
const uid=()=>Math.random().toString(36).slice(2,10);
const TONES=['lav','sun','mint'];
const toneBg=t=>`var(--${t})`, toneInk=t=>`var(--${t}-ink)`, toneStrong=t=>`var(--${t}-strong)`;

/* ---------- seed (example data) ---------- */
function seed(){
  let r=7;const rnd=()=>{r=(r*16807)%2147483647;return r/2147483647};
  const dogs=[['באדי','גולדן רטריבר'],['לונה','פודל טוי'],['רקסי','רועה גרמני'],['מיקה','שיצו'],["צ'ופר",'לברדור'],['נלה','ביגל'],['טופי','מלטז'],['שוקו','קוקר ספניאל'],['בל','בורדר קולי'],["ג'ינג'ר",'שיבא אינו'],['אוסקר','בולדוג צרפתי'],['קיווי','האסקי']];
  const owners=['נועה לוי','דני כהן','שירה אברהם','יוסי מזרחי','מאיה פרץ','עומר ביטון','תמר שלום','איתי דהן'];
  const B=[];
  const mk=(i,ci,co,price,note='')=>B.push({id:uid(),dog:dogs[i%dogs.length][0],breed:dogs[i%dogs.length][1],owner:owners[i%owners.length],phone:'05'+(2+i%7)+'-'+(1000000+Math.floor(rnd()*8999999)).toString().slice(0,7),checkIn:ci,checkOut:co,price,notes:note,tone:TONES[i%3]});
  // history: last ~10 months
  for(let back=300;back>14;back-=Math.floor(2+rnd()*4)){
    const ci=add(TODAY,-back), len=2+Math.floor(rnd()*6);
    mk(Math.floor(rnd()*12),ci,add(ci,len),[150,160,170,180][Math.floor(rnd()*4)]);
  }
  // current & upcoming
  mk(0,add(TODAY,-2),add(TODAY,3),170,'אוכל פעמיים ביום, אוהב טיולים ארוכים');
  mk(1,TODAY,add(TODAY,4),160,'רגישה לעוף — רק מזון שהבעלים הביאו');
  mk(3,add(TODAY,-4),TODAY,150,'');
  mk(2,add(TODAY,1),add(TODAY,6),180,'כדור תולעים ביום שלישי');
  mk(5,add(TODAY,-1),add(TODAY,2),160,'');
  mk(4,add(TODAY,5),add(TODAY,9),170,'');
  mk(9,add(TODAY,3),add(TODAY,10),180,'לא להוציא יחד עם כלבים גדולים');
  mk(6,add(TODAY,8),add(TODAY,12),150,'');
  mk(10,add(TODAY,12),add(TODAY,15),170,'');
  const E=[];
  for(let mo=9;mo>=0;mo--){
    const d=new Date();d.setDate(1);d.setMonth(d.getMonth()-mo);
    const ds=n=>iso(new Date(d.getFullYear(),d.getMonth(),Math.min(n,28)));
    if(mo===0 && new Date().getDate()<5) continue;
    E.push({id:uid(),type:'biz',cat:'מזון ופינוקים',desc:'הזמנת מזון חודשית',amount:1100+Math.round(rnd()*400),date:ds(3)});
    E.push({id:uid(),type:'biz',cat:'חשמל ומים',desc:'חשבון דו-חודשי',amount:380+Math.round(rnd()*220),date:ds(12)});
    E.push({id:uid(),type:'biz',cat:'ניקיון ותחזוקה',desc:'חומרי ניקוי',amount:200+Math.round(rnd()*120),date:ds(18)});
    E.push({id:uid(),type:'personal',cat:'סופר',desc:'קניות לבית',amount:850+Math.round(rnd()*450),date:ds(7)});
    E.push({id:uid(),type:'personal',cat:'רכב ודלק',desc:'תדלוק',amount:320+Math.round(rnd()*180),date:ds(15)});
    if(rnd()>.5)E.push({id:uid(),type:'personal',cat:'בילויים',desc:'יציאה עם חברות',amount:180+Math.round(rnd()*250),date:ds(21)});
    if(rnd()>.6)E.push({id:uid(),type:'biz',cat:'וטרינר',desc:'ביקור חירום',amount:350+Math.round(rnd()*300),date:ds(24)});
    if(rnd()>.55)E.push({id:uid(),type:'income',cat:'רחצה וטיפוח',desc:'רחצות לכלבי לקוחות',amount:240+Math.round(rnd()*260),date:ds(20)});
  }
  return {
    v:1,example:true,loggedIn:false,user:'',bookings:B,expenses:E,capacity:8,
    cycle:{starts:[add(TODAY,-96),add(TODAY,-68),add(TODAY,-39),add(TODAY,-11)],periodLen:5},
    notes:[
      {id:uid(),title:'לקנות השבוע',body:'שקי מזון גור ×2\nחטיפי שיניים\nשקיות איסוף',tone:'sun',pinned:true,date:add(TODAY,-1)},
      {id:uid(),title:'רעיון לאינסטגרם',body:'סרטון "יום בפנסיון" — בוקר, משחק בחצר, מנוחת צהריים',tone:'lav',pinned:false,date:add(TODAY,-3)},
      {id:uid(),title:'לבדוק',body:'מחיר גדר נוספת לחצר הקטנה',tone:'mint',pinned:false,date:add(TODAY,-6)},
      {id:uid(),title:'מחירון חגים',body:'סוכות ופסח: ₪200 ללילה\nהזמנה מראש עם מקדמה 30%',tone:'lav',pinned:true,date:add(TODAY,-10)}
    ],
    docs:[
      {id:uid(),name:'פנקס חיסונים - באדי.pdf',size:420000,type:'application/pdf',folder:'dogs',date:add(TODAY,-4)},
      {id:uid(),name:'טופס קבלת כלב לפנסיון.pdf',size:180000,type:'application/pdf',folder:'contracts',date:add(TODAY,-30)},
      {id:uid(),name:'חשבונית מזון - ספק.pdf',size:96000,type:'application/pdf',folder:'receipts',date:add(TODAY,-8)},
      {id:uid(),name:'ביטוח עסק 2026.pdf',size:640000,type:'application/pdf',folder:'contracts',date:add(TODAY,-60)},
      {id:uid(),name:'תעודת חיסון כלבת - לונה.jpg',size:310000,type:'image/jpeg',folder:'dogs',date:add(TODAY,-1)}
    ],
    settings:{arrive:true,depart:true,cycle:true,pay:false,bio:true}
  };
}
const FOLDERS=[{id:'dogs',name:'כלבים וחיסונים',tone:'mint'},{id:'contracts',name:'חוזים וטפסים',tone:'lav'},{id:'receipts',name:'קבלות וחשבוניות',tone:'sun'},{id:'personal',name:'אישי',tone:'lav'}];
const CATS={biz:['מזון ופינוקים','חשמל ומים','ניקיון ותחזוקה','וטרינר','ציוד','ביטוח','שיווק','אחר'],personal:['סופר','רכב ודלק','בילויים','ביגוד','בריאות','בית','אחר'],income:['רחצה וטיפוח','אילוף','הסעות','אחר']};

const FONTS=[
 {id:'balloon',name:'בלונים',d:'Fredoka',b:'Rubik'},
 {id:'round',name:'עגול ורך',d:'Varela Round',b:'Rubik'},
 {id:'fredoka',name:'שובב ועגול',d:'Fredoka',b:'Fredoka'},
 {id:'heebo',name:'נקי ומודרני',d:'Heebo',b:'Heebo'},
 {id:'secular',name:'נועז',d:'Secular One',b:'Assistant'},
 {id:'plex',name:'מקצועי',d:'IBM Plex Sans Hebrew',b:'IBM Plex Sans Hebrew'},
 {id:'noto',name:'מינימלי',d:'Noto Sans Hebrew',b:'Noto Sans Hebrew'},
 {id:'suez',name:'אלגנטי',d:'Suez One',b:'Alef'},
 {id:'frank',name:'קלאסי',d:'Frank Ruhl Libre',b:'Assistant'},
 {id:'karantina',name:'פוסטר',d:'Karantina',b:'Rubik'},
 {id:'amatic',name:'כתב יד',d:'Amatic SC',b:'Varela Round'}
];
const FAM={'Varela Round':'Varela+Round','Rubik':'Rubik:wght@400;500;600;700','Fredoka':'Fredoka:wght@400;500;600;700','Heebo':'Heebo:wght@400;500;600;700','Secular One':'Secular+One','Assistant':'Assistant:wght@400;600;700','IBM Plex Sans Hebrew':'IBM+Plex+Sans+Hebrew:wght@400;500;600;700','Noto Sans Hebrew':'Noto+Sans+Hebrew:wght@400;500;600;700','Suez One':'Suez+One','Alef':'Alef:wght@400;700','Frank Ruhl Libre':'Frank+Ruhl+Libre:wght@500;700','Karantina':'Karantina:wght@700','Amatic SC':'Amatic+SC:wght@700'};
const loadedF=new Set(['Varela Round','Rubik','Fredoka','Frank Ruhl Libre']);
function loadFonts(list){const need=list.filter(n=>!loadedF.has(n));if(!need.length)return;need.forEach(n=>loadedF.add(n));const l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?'+need.map(n=>'family='+FAM[n]).join('&')+'&display=swap';document.head.appendChild(l)}
function loadAllFonts(){loadFonts(Object.keys(FAM))}
function applyFont(){const f=FONTS.find(x=>x.id===(S.settings.font||'balloon'))||FONTS[0];loadFonts([f.d,f.b]);const r=document.documentElement.style;r.setProperty('--f-display',`"${f.d}","Rubik",system-ui,sans-serif`);r.setProperty('--f-body',`"${f.b}",system-ui,-apple-system,"Segoe UI",Arial,sans-serif`)}
const KEY='miriz-v1';
let S;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!S||S.v!==1)S=seed();
function seedPlanner(){return{events:[
 {id:uid(),title:'פגישה עם ספק המזון',date:add(TODAY,-1),time:'12:00',place:'בפנסיון',notes:''},
 {id:uid(),title:'ארוחת ערב אצל ההורים',date:TODAY,time:'20:00',place:'רחובות',notes:''},
 {id:uid(),title:'תור לרופא שיניים',date:add(TODAY,2),time:'10:30',place:'',notes:''},
 {id:uid(),title:'יום הולדת לנועה',date:add(TODAY,5),time:'',place:'',notes:'לקנות מתנה'},
 {id:uid(),title:'צילומים לאינסטגרם',date:add(TODAY,3),time:'17:00',place:'החצר הגדולה',notes:''}],
 tasks:[
 {id:uid(),title:'להזמין שקי מזון',date:TODAY,done:false},
 {id:uid(),title:'לשלוח חשבונית לדני',date:TODAY,done:true},
 {id:uid(),title:'לנקות את החצר הקטנה',date:add(TODAY,1),done:false},
 {id:uid(),title:'לקנות פינוקים לחגים',date:add(TODAY,4),done:false}]}}
function migrate(){if(!S.events){const pp=seedPlanner();S.events=pp.events;S.tasks=pp.tasks}S.bookings.forEach(b=>{if(b.tax===undefined)b.tax=(b.id.charCodeAt(1)%3)!==0});S.expenses.forEach(e=>{if(e.type==='income'&&e.tax===undefined)e.tax=(e.id.charCodeAt(1)%2)===0})}
migrate();
applyFont();
function save(){let ok=true;try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){ok=false}if(Cloud.user){Cloud.save(S);return true}return ok}
const docUrls={};
const docSrc=d=>d.data||docUrls[d.id]||'';
async function refreshDocUrls(){
  if(!Cloud.user)return;
  const need=S.docs.filter(d=>d.path&&!docUrls[d.id]);if(!need.length)return;
  try{const r=await Cloud.urls(need.map(d=>d.path));r.forEach((x,i)=>{if(x.signedUrl)docUrls[need[i].id]=x.signedUrl});if(S.loggedIn&&ui.view==='docs')render()}catch(e){}
}
const dropFiles=docs=>Cloud.remove(docs.filter(d=>d.path).map(d=>d.path));
/* pull this user's state from Supabase; a brand-new account starts with the example data */
async function pull(){
  const row=await Cloud.load(),was=S.loggedIn;
  if(row)S=row.data;
  else{const m=Cloud.user.user_metadata||{};S=seed();S.user=m.name||Cloud.user.email.split('@')[0];Cloud.save(S)}
  S.loggedIn=was;migrate();applyFont();
  for(const k in docUrls)delete docUrls[k];
  try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}
}
const now=new Date();
const ui={view:'home',calMode:'week',popOpen:null,popReturn:null,taxF:'all',calY:now.getFullYear(),calM:now.getMonth(),sel:TODAY,finMode:'month',finY:now.getFullYear(),finM:now.getMonth(),finFilter:'all',docFolder:'all',cycY:now.getFullYear(),cycM:now.getMonth(),showPw:false};
try{const h=location.hash.slice(1);if(['home','calendar','finance','cycle','notes','docs'].includes(h))ui.view=h;if(h==='icon'){ui.view='settings';ui.scrollIcon=true}}catch(e){}

/* ---------- derived ---------- */
const nights=b=>Math.max(0,diff(b.checkIn,b.checkOut));
const total=b=>nights(b)*b.price;
const staying=d=>S.bookings.filter(b=>b.checkIn<=d&&d<b.checkOut);
const arriving=d=>S.bookings.filter(b=>b.checkIn===d);
const leaving=d=>S.bookings.filter(b=>b.checkOut===d);
const inMonth=(s,y,m)=>{const d=P(s);return d.getFullYear()===y&&d.getMonth()===m};
function monthFin(y,m,tf=ui.taxF){
  const ok=x=>tf==='all'||(tf==='tax')===!!x.tax;
  const inc=S.bookings.filter(b=>inMonth(b.checkIn,y,m)&&ok(b)).reduce((a,b)=>a+total(b),0);
  const ex=S.expenses.filter(e=>inMonth(e.date,y,m));
  const other=ex.filter(e=>e.type==='income'&&ok(e)).reduce((a,e)=>a+e.amount,0);
  const biz=ex.filter(e=>e.type==='biz').reduce((a,e)=>a+e.amount,0);
  const per=ex.filter(e=>e.type==='personal').reduce((a,e)=>a+e.amount,0);
  return {income:inc+other,board:inc,other,biz,per,net:inc+other-biz};
}
function cycleInfo(){
  const st=[...S.cycle.starts].sort();
  const L=S.cycle.periodLen||5;
  if(!st.length)return {none:true,L};
  const lens=[];for(let i=1;i<st.length;i++)lens.push(diff(st[i-1],st[i]));
  const recent=lens.slice(-6);
  const avg=recent.length?Math.round(recent.reduce((a,b)=>a+b,0)/recent.length):28;
  const last=st[st.length-1];
  const day=diff(last,TODAY)+1;
  let next=add(last,avg);
  const late=diff(next,TODAY);
  const ovu=add(next,-14);
  return {st,lens,avg,last,day,next,late,ovu,fertA:add(ovu,-5),fertB:add(ovu,1),L,inPeriod:day<=L,until:diff(TODAY,next)};
}
function alerts(){
  const a=[],st=S.settings,tm=add(TODAY,1);
  if(st.arrive){arriving(TODAY).forEach(b=>a.push({tone:'mint',icon:'arrive',t:`${b.dog} מגיע/ה היום`,s:`${b.owner} · ${nights(b)} לילות`}));
    arriving(tm).forEach(b=>a.push({tone:'lav',icon:'arrive',t:`מחר מגיע/ה ${b.dog}`,s:`${b.breed} · ${b.owner}`}));}
  if(st.depart)leaving(TODAY).forEach(b=>a.push({tone:'sun',icon:'depart',t:`${b.dog} חוזר/ת הביתה היום`,s:`לגבות ${money(total(b))} מ${b.owner}`}));
  const c=cycleInfo();
  if(st.cycle&&!c.none&&c.until>=0&&c.until<=3)a.push({tone:'lav',icon:'drop',t:c.until===0?'המחזור צפוי להתחיל היום':`המחזור צפוי בעוד ${c.until} ימים`,s:dLong(c.next)});
  (S.events||[]).filter(e=>e.date===TODAY).forEach(e=>a.push({tone:'sun',icon:'cal',t:`היום: ${e.title}`,s:e.time?`בשעה ${e.time}`:'כל היום'}));
  {const open=(S.tasks||[]).filter(t=>t.date===TODAY&&!t.done).length;if(open)a.push({tone:'lav',icon:'check',t:open===1?'משימה פתוחה אחת להיום':`${open} משימות פתוחות להיום`,s:'אפשר לסמן מהבית או מהיומן'})}
  if(st.pay&&P(TODAY).getDay()===4)a.push({tone:'sun',icon:'wallet',t:'תזכורת: לעדכן הוצאות השבוע',s:'כספים'});
  return a;
}

/* ---------- views ---------- */
const NAV=[['home','בית','home'],['calendar','יומן','cal'],['finance','כספים','wallet'],['cycle','מחזור','drop'],['notes','פתקים','note']];
const navOn=(k,v)=>v===k||(k==='notes'&&v==='docs');
const shelfSeg=cur=>`<div class="seg" role="group" aria-label="פתקים או מסמכים" style="justify-self:start">${[['notes','פתקים'],['docs','מסמכים']].map(([k,l])=>`<button data-act="go" data-v="${k}" aria-pressed="${cur===k}">${l}</button>`).join('')}</div>`;
const TITLES={home:'',calendar:'יומן',finance:'כספים',cycle:'מעקב מחזור',notes:'פתקים',docs:'מסמכים',settings:'הגדרות'};
const LOGO="logo.svg";
const brandHTML=`<img class="logo" src="${LOGO}" alt=""><span class="bl">miriz</span>`;

function greeting(){const h=new Date().getHours();return h<5?'לילה טוב':h<12?'בוקר טוב':h<17?'צהריים טובים':h<21?'ערב טוב':'לילה טוב'}

function dogRow(b,extra='',full=false){
  if(full)return `<button class="row" data-act="editBooking" data-id="${b.id}">
    <span class="avatar" style="background:${toneBg(b.tone)};color:${toneInk(b.tone)}">${esc(b.dog[0])}</span>
    <span class="grow"><span class="title" style="display:block">${esc(b.dog)} <span class="muted small" style="font-weight:400">· ${esc(b.breed)}</span></span>
    <span class="sub" style="display:block">${esc(b.owner)}${b.phone?' · <span dir="ltr">'+esc(b.phone)+'</span>':''}</span>
    ${b.notes?`<span class="sub" style="display:block;white-space:normal;color:var(--lav-ink)">${esc(b.notes)}</span>`:''}</span>${extra}</button>`;
  return `<button class="row" data-act="editBooking" data-id="${b.id}">
    <span class="avatar" style="background:${toneBg(b.tone)};color:${toneInk(b.tone)}">${esc(b.dog[0])}</span>
    <span class="grow"><span class="title" style="display:block">${esc(b.dog)} <span class="muted small" style="font-weight:400">· ${esc(b.breed)}</span></span>
    <span class="sub" style="display:block">${dShort(b.checkIn)} – ${dShort(b.checkOut)} · ${esc(b.owner)}</span></span>${extra}</button>`;
}

function dayData(d){
  const st=staying(d),arr=arriving(d),lv=leaving(d),stay=st.filter(b=>b.checkIn!==d);
  const events=(S.events||[]).filter(e=>e.date===d).sort((a,b)=>(a.time||'00')<(b.time||'00')?-1:1);
  const tasks=(S.tasks||[]).filter(t=>t.date===d).sort((a,b)=>a.done-b.done);
  const tx=[...arr.map(b=>({t:`פנסיון · ${b.dog}`,s:`${nights(b)} לילות`,amount:total(b),inc:true})),...S.expenses.filter(e=>e.date===d).map(e=>({t:e.desc||e.cat,s:e.type==='biz'?'עסק':e.type==='personal'?'אישי':'הכנסה נוספת',amount:e.amount,inc:e.type==='income',id:e.id}))];
  const c=cycleInfo();let cyc='';
  if(!c.none){if(c.st.some(x=>diff(x,d)>=0&&diff(x,d)<c.L))cyc='יום ווסת';else if(d>=TODAY&&diff(c.next,d)>=0&&diff(c.next,d)<c.L)cyc='ווסת צפויה';else if(d===c.ovu)cyc='ביוץ משוער';else if(d>=c.fertA&&d<=c.fertB)cyc='חלון פוריות'}
  return {st,arr,lv,stay,events,tasks,tx,cyc};
}
const evRow=e=>`<button class="row" data-act="editEvent" data-id="${e.id}"><span class="avatar" style="background:var(--sun);color:var(--sun-ink)">${ic('cal')}</span><span class="grow"><span class="title" style="display:block">${esc(e.title)}</span><span class="sub" style="display:block">${e.time?esc(e.time):'כל היום'}${e.place?' · '+esc(e.place):''}</span></span></button>`;
const tkRow=t=>`<div class="row task ${t.done?'done':''}"><button class="chk" data-act="toggleTask" data-id="${t.id}" aria-pressed="${!!t.done}" aria-label="${t.done?'סימון כלא בוצע':'סימון כבוצע'}">${t.done?ic('check'):''}</button><button class="grow tk-t" data-act="editTask" data-id="${t.id}"><span class="title" style="display:block">${esc(t.title)}</span></button></div>`;

function vHome(){
  const x=dayData(TODAY);
  const f=monthFin(now.getFullYear(),now.getMonth(),'all');
  const pm=new Date(now.getFullYear(),now.getMonth()-1,1);const fp=monthFin(pm.getFullYear(),pm.getMonth(),'all');
  const c=cycleInfo();
  const cyc=c.none?'אין נתונים':c.inPeriod?`יום ${c.day} של הווסת`:c.until>0?`בעוד ${c.until} ימים`:c.until===0?'צפוי היום':`איחור של ${-c.until} ימים`;
  const box=(tone,icon,title,names)=>`<div class="row" style="background:var(--${tone}-soft)"><span class="avatar" style="background:var(--${tone});color:var(--${tone}-ink)">${ic(icon)}</span><span class="grow"><span class="title" style="display:block">${title}</span><span class="sub" style="display:block">${names||'—'}</span></span></div>`;
  return `
  <div class="grid g-3">
    <div class="stat t-mint"><span class="lbl">${ic('up')} הכנסות החודש</span><span class="val num bl">${money(f.income)}</span><span class="meta">${fp.income?`${f.income>=fp.income?'+':''}${Math.round((f.income-fp.income)/fp.income*100)}% מהחודש שעבר`:'—'}</span></div>
    <div class="stat t-sun"><span class="lbl">${ic('wallet')} רווח נקי החודש</span><span class="val num bl">${money(f.net)}</span><span class="meta">הוצאות עסק ${money(f.biz)}</span></div>
    <div class="stat t-lav"><span class="lbl">${ic('drop')} המחזור הבא</span><span class="val bl" style="font-size:24px">${cyc}</span><span class="meta">${c.none?'':dLong(c.next)}</span></div>
  </div>
  <div class="quick">
    <button class="btn btn-primary" data-act="newBooking">${ic('plus')} הזמנה חדשה</button>
    <button class="btn btn-sun" data-act="addKind" data-k="event" data-d="${TODAY}">${ic('cal')} אירוע</button>
    <button class="btn btn-soft" data-act="addKind" data-k="task" data-d="${TODAY}">${ic('check')} משימה</button>
    <button class="btn btn-mint" data-act="newExpense">${ic('wallet')} הוצאה / הכנסה</button>
  </div>
  <div class="grid g-main">
    <section class="card">
      <div class="card-head"><h2>היום שלי</h2><span class="quick"><button class="btn btn-soft btn-sm" data-act="openDay" data-d="${TODAY}">כל פרטי היום</button><button class="btn btn-soft btn-sm" data-act="openWeek">השבוע</button></span></div>
      <h3 class="sub-h">${ic('cal')} אירועים</h3>
      <div class="list">${x.events.map(evRow).join('')||'<div class="empty">אין אירועים היום</div>'}</div>
      <h3 class="sub-h">${ic('check')} משימות</h3>
      <div class="list">${x.tasks.map(tkRow).join('')||'<div class="empty">אין משימות להיום</div>'}</div>
    </section>
    <section class="card">
      <div class="card-head"><h2>הפנסיון היום · <span class="num">${x.st.length}/${S.capacity}</span></h2></div>
      <div class="list">
        ${box('mint','arrive',`${x.arr.length} מגיעים`,x.arr.map(b=>esc(b.dog)).join(', '))}
        ${box('sun','depart',`${x.lv.length} יוצאים`,x.lv.map(b=>esc(b.dog)).join(', '))}
        ${box('lav','paw',`${x.st.length} בפנסיון עכשיו`,x.st.map(b=>esc(b.dog)).join(', '))}
      </div>
    </section>
  </div>`;
}

const calNav=label=>`<div class="cal-nav"><button class="round-btn" data-act="calStep" data-n="-1" aria-label="הקודם">${ic('prev')}</button><h2>${label}</h2><button class="round-btn" data-act="calStep" data-n="1" aria-label="הבא">${ic('next')}</button></div>`;

function vCalendar(){
  const mode=ui.calMode==='month'?'month':'week';
  const seg=`<div class="seg" role="group" aria-label="תצוגת יומן">${[['week','שבוע'],['month','חודש']].map(([k,l])=>`<button data-act="calMode" data-v="${k}" aria-pressed="${mode===k}">${l}</button>`).join('')}</div>`;
  return `<div class="card-head" style="margin:0">${seg}<span class="quick"><button class="btn btn-soft btn-sm" data-act="calToday">היום</button><button class="btn btn-primary btn-sm" data-act="addPick" data-d="${ui.sel}">${ic('plus')} הוספה</button></span></div>
  ${mode==='week'?vWeek(ui.sel):vMonth()}`;
}

const DAYN=['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
const BLOBS=['62% 38% 55% 45% / 48% 58% 42% 52%','42% 58% 38% 62% / 55% 40% 60% 45%','55% 45% 62% 38% / 40% 55% 45% 60%','38% 62% 45% 55% / 60% 45% 55% 40%','58% 42% 40% 60% / 45% 62% 38% 55%','45% 55% 58% 42% / 58% 38% 62% 42%','50% 50% 38% 62% / 42% 60% 40% 58%'];
const BTONES=['sun','mint','lav','mint-2','sun-2','mint','lav-2'];
function vWeek(anchor){
  const ws=add(anchor,-P(anchor).getDay()),we=add(ws,6);
  let days='';
  for(let i=0;i<7;i++){
    const d=add(ws,i),x=dayData(d),t=BTONES[i],h=t.split('-')[0];
    const items=[...x.events.map(e=>`<li class="it ev">${e.time?`<b class="num">${esc(e.time)}</b>`:''}<span>${esc(e.title)}</span></li>`),
      ...x.tasks.map(k=>`<li class="it tk ${k.done?'done':''}">${ic('check')}<span>${esc(k.title)}</span></li>`),
      ...x.arr.map(b=>`<li class="it dg">${ic('arrive')}<span>${esc(b.dog)}</span></li>`),...x.lv.map(b=>`<li class="it dg">${ic('depart')}<span>${esc(b.dog)}</span></li>`)];
    days+=`<button class="bday ${d===TODAY?'is-today':''}" data-act="openDay" data-d="${d}" style="--blob:${BLOBS[i]};background:var(--${t});color:var(--${h}-ink)" aria-label="${dLong(d)}: ${x.events.length} אירועים, ${x.tasks.length} משימות, ${x.arr.length} כלבים מגיעים">
      <span class="bd-top"><span class="bd-name">${DAYN[i]} :</span><span class="bd-date num">${P(d).getDate()}.${P(d).getMonth()+1}</span></span>
      ${items.length?`<ul>${items.slice(0,4).join('')}${items.length>4?`<li class="more">ועוד ${items.length-4}</li>`:''}</ul>`:'<span class="bd-quiet">יום פנוי</span>'}
      <span class="bd-foot">${d===TODAY?'היום · ':''}${x.st.length} בפנסיון</span></button>`;
  }
  const wn=(S.weekNotes||{})[ws]||'';
  return `<section class="planner">
    <span class="deco petal" style="top:-18px;right:16%;transform:rotate(-30deg)"></span><span class="deco petal" style="top:40px;right:9%;transform:rotate(25deg);width:30px;height:58px"></span>
    <span class="deco loop" style="top:150px;left:30%;width:220px;height:230px"></span><span class="deco loop" style="bottom:-40px;left:4%;width:260px;height:200px"></span>
    <span class="deco dot" style="bottom:260px;left:7%"></span><span class="deco dot" style="bottom:236px;left:4%;transform:rotate(40deg)"></span>
    <div class="pl-head"><h2 class="pl-title bl">השבוע שלי</h2><p class="pl-sub">אירועים | משימות | פנסיון</p>${calNav(`${dShort(ws)} – ${dShort(we)}`)}</div>
    <div class="pl-grid">${days}
      <div class="pl-notes"><label for="weekNote" class="pl-notes-l">פתקים לשבוע :</label><textarea id="weekNote" data-week="${ws}" placeholder="משהו לזכור השבוע…">${esc(wn)}</textarea></div>
    </div>
    <div class="legend pl-legend"><span><i class="sp" style="background:var(--sun-strong)"></i>אירוע</span><span><i class="sp" style="background:var(--lav-strong)"></i>משימה</span><span><i class="sp" style="background:var(--mint-strong)"></i>כלב</span><span>לחיצה על יום פותחת את הפרטים</span></div>
  </section>`;
}

function vMonth(){
  const y=ui.calY,m=ui.calM,first=new Date(y,m,1),start=new Date(y,m,1-first.getDay());
  let cells='';
  for(let i=0;i<42;i++){
    const dt=new Date(start);dt.setDate(start.getDate()+i);const s=iso(dt);
    if(i===35&&dt.getMonth()!==m)break;
    const x=dayData(s),n=x.st.length,full=n>=S.capacity;
    const marks=[...x.events.slice(0,3).map(()=>'<b class="e"></b>'),...x.tasks.filter(t=>!t.done).slice(0,2).map(()=>'<b class="t"></b>'),...x.arr.slice(0,3).map(()=>'<b class="g"></b>')];
    cells+=`<button class="day ${dt.getMonth()!==m?'out':''} ${s===TODAY?'today':''}" data-act="openDay" data-d="${s}" aria-label="${dLong(s)}: ${x.events.length} אירועים, ${x.tasks.length} משימות, ${n} כלבים">
      <span class="dn num">${dt.getDate()}</span>
      ${x.events[0]?`<span class="cell-ev">${esc(x.events[0].title)}</span>`:''}
      <span class="marks">${marks.join('')}</span>
      ${n?`<span class="occ-n num ${full?'full':''}">${ic('paw')}${n}</span>`:''}</button>`;
  }
  const mb=S.bookings.filter(b=>inMonth(b.checkIn,y,m)),me=(S.events||[]).filter(e=>inMonth(e.date,y,m));
  return `<section class="card">
    <div class="card-head">${calNav(monthTitle(y,m))}<span class="chips"><span class="pill" style="background:var(--sun-soft);color:var(--sun-ink)">${me.length} אירועים</span><span class="pill" style="background:var(--mint-soft);color:var(--mint-ink)">${mb.length} הזמנות</span></span></div>
    <div class="wk"><span>א׳</span><span>ב׳</span><span>ג׳</span><span>ד׳</span><span>ה׳</span><span>ו׳</span><span>ש׳</span></div>
    <div class="cal">${cells}</div>
    <div class="legend"><span><i class="sp" style="background:var(--sun-strong)"></i>אירוע</span><span><i class="sp" style="background:var(--lav-strong)"></i>משימה</span><span><i class="sp" style="background:var(--mint-strong)"></i>כלב מגיע</span><span><i class="sp" style="background:var(--ink)"></i>היום</span><span>${ic('paw','style="width:15px;height:15px"')} כלבים בפנסיון</span><span>לחיצה על יום פותחת את הפרטים</span></div>
  </section>`;
}

function dayPop(d){
  const x=dayData(d);ui.popOpen=d;
  const pill=(bg,fg,t)=>`<span class="pill" style="background:var(--${bg});color:var(--${fg})">${t}</span>`;
  const sec=(t,tone,icon,inner)=>`<section class="pop-sec"><h3 class="sub-h"><span class="avatar" style="width:34px;height:34px;background:var(--${tone});color:var(--${tone}-ink)">${ic(icon)}</span>${t}</h3><div class="list">${inner}</div></section>`;
  const dogs=[...x.arr.map(b=>dogRow(b,pill('mint','mint-ink','מגיע'),true)),...x.lv.map(b=>dogRow(b,pill('sun','sun-ink','יוצא · '+money(total(b))),true)),...x.stay.map(b=>dogRow(b,pill('lav','lav-ink',`עוד ${diff(d,b.checkOut)} ימים`),true))];
  const inc=x.arr.reduce((a,b)=>a+total(b),0),col=x.lv.reduce((a,b)=>a+total(b),0);
  let body='';
  body+=sec('אירועים','sun','cal',x.events.map(evRow).join('')||'<div class="empty">אין אירועים</div>');
  body+=sec('משימות','lav','check',x.tasks.map(tkRow).join('')||'<div class="empty">אין משימות</div>');
  body+=sec(`פנסיון · ${x.st.length}/${S.capacity}`,'mint','paw',dogs.join('')||'<div class="empty">אין כלבים ביום הזה</div>');
  if(x.tx.length)body+=sec('כסף','mint','wallet',x.tx.map(t=>`<div class="row"><span class="grow"><span class="title" style="display:block">${esc(t.t)}</span><span class="sub" style="display:block">${esc(t.s)}</span></span><span class="num ${t.inc?'amt-in':'amt-out'}">${t.inc?'+':'−'}${money(t.amount)}</span></div>`).join(''));
  sh.innerHTML=`<div class="sheet-head pop-head">${`<div class="cal-nav"><button class="round-btn" data-act="dayStep" data-n="-1" aria-label="היום הקודם">${ic('prev')}</button><h2>${dLong(d)}</h2><button class="round-btn" data-act="dayStep" data-n="1" aria-label="היום הבא">${ic('next')}</button></div>`}<button class="round-btn" data-act="closeDay" aria-label="סגירה">${ic('x')}</button></div>
  <div class="chips" style="margin-bottom:18px">${d===TODAY?pill('ink','mint','היום'):''}${x.cyc?pill('lav','lav-ink',x.cyc):''}${inc?pill('mint-soft','mint-ink','נכנס '+money(inc)):''}${col?pill('sun-soft','sun-ink','לגבות '+money(col)):''}</div>
  ${body}
  <div class="pop-add">
    <button class="btn btn-primary btn-block" data-act="addPick" data-d="${d}">${ic('plus')} הוספה ליום הזה</button>
    <div class="add-pick" id="addPick" hidden><button class="btn btn-sun" data-act="addKind" data-k="event" data-d="${d}">${ic('cal')} אירוע</button><button class="btn btn-soft" data-act="addKind" data-k="task" data-d="${d}">${ic('check')} משימה</button><button class="btn btn-mint" data-act="addKind" data-k="dog" data-d="${d}">${ic('paw')} הזמנת כלב</button></div>
  </div>`;
  sw.hidden=false;blobify(sh);gloss2(sh);
}
function gloss2(r){r.querySelectorAll('.bl').forEach(e=>e.dataset.t=e.textContent)}

function chartSVG(y){
  const data=[...Array(12)].map((_,m)=>monthFin(y,m));
  const max=Math.max(1000,...data.map(d=>Math.max(d.income,d.biz)));
  const step=Math.pow(10,Math.floor(Math.log10(max)))/(max/Math.pow(10,Math.floor(Math.log10(max)))>5?1:2);
  const top=Math.ceil(max/step)*step;
  const W=640,H=230,L=48,R=8,T=12,Bm=28,cw=(W-L-R)/12,bw=Math.min(16,cw/3);
  const yv=v=>T+(H-T-Bm)*(1-v/top);
  let g='';
  for(let v=0;v<=top;v+=step){g+=`<line class="gl" x1="${L}" x2="${W-R}" y1="${yv(v)}" y2="${yv(v)}"/><text x="${L-6}" y="${yv(v)+4}" text-anchor="end">${v>=1000?(v/1000)+'K':v}</text>`}
  data.forEach((d,m)=>{
    const cx=L+cw*m+cw/2,selM=ui.finMode==='month'&&m===ui.finM;
    if(selM)g+=`<rect x="${L+cw*m+2}" y="${T}" width="${cw-4}" height="${H-T-Bm+20}" rx="10" fill="var(--lav-soft)"/>`;
    g+=`<rect data-act="pickMonth" data-m="${m}" x="${cx-bw-1}" y="${yv(d.income)}" width="${bw}" height="${Math.max(0,H-Bm-yv(d.income))}" rx="5" fill="var(--mint-strong)"><title>${mShort(m)}: הכנסות ${money(d.income)}</title></rect>`;
    g+=`<rect data-act="pickMonth" data-m="${m}" x="${cx+1}" y="${yv(d.biz)}" width="${bw}" height="${Math.max(0,H-Bm-yv(d.biz))}" rx="5" fill="var(--sun-strong)"><title>${mShort(m)}: הוצאות עסק ${money(d.biz)}</title></rect>`;
    g+=`<text x="${cx}" y="${H-8}" text-anchor="middle" style="${selM?'fill:var(--lav-ink);font-weight:600':''}">${mShort(m)}</text>`;
  });
  return `<div class="chart-wrap" dir="ltr"><svg class="chart" viewBox="0 0 ${W} ${H}" style="width:100%;min-width:520px;height:auto" role="img" aria-label="הכנסות מול הוצאות עסק לפי חודשים ${y}">${g}</svg></div>`;
}

const taxSeg=on=>`<button type="button" data-act="taxSet" data-v="1" aria-pressed="${on}">עם מס</button><button type="button" data-act="taxSet" data-v="0" aria-pressed="${!on}">בלי מס</button>`;
const taxPill=on=>`<span class="pill" style="background:var(--${on?'lav-soft':'sun-soft'});color:var(--${on?'lav-ink':'sun-ink'})">${on?'עם מס':'בלי מס'}</span>`;
function vFinance(){
  const y=ui.finY,m=ui.finM,isM=ui.finMode==='month';
  const sum=tf=>{if(isM)return monthFin(y,m,tf);const o={income:0,board:0,other:0,biz:0,per:0,net:0};for(let i=0;i<12;i++){const x=monthFin(y,i,tf);for(const k in o)o[k]+=x[k]}return o};
  const tf=ui.taxF,f=sum(tf),fT=sum('tax'),fN=sum('notax');
  const inP=s=>isM?inMonth(s,y,m):P(s).getFullYear()===y;
  let tx=[...S.bookings.filter(b=>inP(b.checkIn)).map(b=>({id:b.id,kind:'booking',type:'income',date:b.checkIn,t:`פנסיון · ${b.dog}`,s:`${nights(b)} לילות × ${money(b.price)}`,amount:total(b),tax:b.tax})),
          ...S.expenses.filter(e=>inP(e.date)).map(e=>({id:e.id,kind:'exp',type:e.type,date:e.date,t:e.desc||e.cat,s:`${e.cat} · ${e.type==='biz'?'עסק':e.type==='personal'?'אישי':'הכנסה נוספת'}`,amount:e.amount,tax:e.tax}))];
  const fl=ui.finFilter;
  if(fl!=='all')tx=tx.filter(t=>t.type===fl);
  if(tf!=='all')tx=tx.filter(t=>t.type!=='income'||(tf==='tax')===!!t.tax);
  tx.sort((a,b)=>a.date<b.date?1:-1);
  const label=isM?monthTitle(y,m):String(y);
  const chip=(v,l)=>`<button class="chip" data-act="finFilter" data-v="${v}" aria-pressed="${fl===v}">${l}</button>`;
  return `
  <div class="card-head" style="margin:0">
    <div class="seg" role="group" aria-label="תצוגה"><button data-act="finMode" data-v="month" aria-pressed="${isM}">חודשי</button><button data-act="finMode" data-v="year" aria-pressed="${!isM}">שנתי</button></div>
    <div class="seg" role="group" aria-label="סינון הכנסות לפי מס">${[['all','כל ההכנסות'],['tax','עם מס'],['notax','בלי מס']].map(([k,l])=>`<button data-act="taxF" data-v="${k}" aria-pressed="${tf===k}">${l}</button>`).join('')}</div>
    <div class="cal-nav"><button class="round-btn" data-act="finMove" data-n="-1" aria-label="הקודם">${ic('prev')}</button><h2 style="font-size:20px">${label}</h2><button class="round-btn" data-act="finMove" data-n="1" aria-label="הבא">${ic('next')}</button></div>
    <button class="btn btn-primary btn-sm" data-act="newExpense">${ic('plus')} הוספת תנועה</button>
  </div>
  <div class="grid g-4">
    <div class="stat t-mint"><span class="lbl">הכנסות${tf==='tax'?' עם מס':tf==='notax'?' בלי מס':''}</span><span class="val num bl">${money(f.income)}</span><span class="meta">${tf==='all'?`עם מס ${money(fT.income)} · בלי מס ${money(fN.income)}`:`פנסיון ${money(f.board)}${f.other?` · נוספות ${money(f.other)}`:''}`}</span></div>
    <div class="stat t-sun"><span class="lbl">הוצאות העסק</span><span class="val num bl">${money(f.biz)}</span><span class="meta">${f.income?Math.round(f.biz/f.income*100)+'% מההכנסות':'—'}</span></div>
    <div class="stat t-lav"><span class="lbl">רווח נקי (עסק)</span><span class="val num bl">${money(f.net)}</span><span class="meta">הכנסות פחות הוצאות עסק</span></div>
    <div class="stat t-surface"><span class="lbl muted">הוצאות אישיות</span><span class="val num bl">${money(f.per)}</span><span class="meta muted">נשאר אחרי הכול: ${money(f.net-f.per)}</span></div>
  </div>
  <section class="card">
    <div class="card-head"><h2>${y} לפי חודשים</h2><div class="legend" style="margin:0"><span><i class="sp" style="background:var(--mint-strong)"></i>הכנסות</span><span><i class="sp" style="background:var(--sun-strong)"></i>הוצאות עסק</span></div></div>
    ${chartSVG(y)}
    <p class="muted small" style="margin:8px 0 0">לחיצה על חודש בגרף פותחת את הפירוט שלו</p>
  </section>
  <section class="card">
    <div class="card-head"><h2>תנועות · ${label}</h2><div class="chips">${chip('all','הכול')}${chip('income','הכנסות')}${chip('biz','עסק')}${chip('personal','אישי')}</div></div>
    <div class="list">${tx.length?tx.slice(0,isM?200:60).map(t=>`<button class="row" data-act="${t.kind==='booking'?'editBooking':'editExpense'}" data-id="${t.id}">
      <span class="avatar" style="width:40px;height:40px;background:${t.type==='income'?'var(--mint)':t.type==='biz'?'var(--sun)':'var(--lav)'};color:${t.type==='income'?'var(--mint-ink)':t.type==='biz'?'var(--sun-ink)':'var(--lav-ink)'}">${ic(t.kind==='booking'?'paw':t.type==='income'?'up':'wallet')}</span>
      <span class="grow"><span class="title" style="display:block">${esc(t.t)}</span><span class="sub" style="display:block">${dShort(t.date)} · ${esc(t.s)}</span></span>${t.type==='income'?taxPill(t.tax):''}
      <span class="num ${t.type==='income'?'amt-in':'amt-out'}">${t.type==='income'?'+':'−'}${money(t.amount)}</span></button>`).join(''):'<div class="empty">אין תנועות בתקופה הזו</div>'}
      ${!isM&&tx.length>60?`<p class="muted small">מוצגות 60 התנועות האחרונות. לפירוט מלא עברי לתצוגה חודשית.</p>`:''}</div>
  </section>`;
}

function vCycle(){
  const c=cycleInfo();
  if(c.none)return `<section class="card ring-box"><h2>עוד אין נתונים</h2><p class="muted">סמני את היום הראשון של המחזור האחרון כדי להתחיל</p><button class="btn btn-primary" data-act="logPeriod">סימון תחילת מחזור</button></section>`;
  const prog=Math.min(1,c.day/c.avg),R=96,C=2*Math.PI*R;
  const y=ui.cycY,m=ui.cycM,first=new Date(y,m,1),start=new Date(y,m,1-first.getDay());
  const isPer=s=>c.st.some(x=>diff(x,s)>=0&&diff(x,s)<c.L);
  const preds=[c.next,add(c.next,c.avg)];
  const isPred=s=>s>TODAY&&preds.some(x=>diff(x,s)>=0&&diff(x,s)<c.L);
  let cells='';
  for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);const s=iso(d);if(i===35&&d.getMonth()!==m)break;
    const cls=isPer(s)?'per':isPred(s)?'pred':s===c.ovu?'ovu':(s>=c.fertA&&s<=c.fertB)?'fert':'';
    cells+=`<button class="md ${d.getMonth()!==m?'out':''} ${cls} ${s===TODAY?'today':''}" data-act="cycDay" data-d="${s}" aria-label="${dLong(s)}">${d.getDate()}</button>`}
  const status=c.inPeriod?`יום ${c.day} של הווסת`:c.until>0?`המחזור הבא בעוד ${c.until} ימים`:c.until===0?'המחזור צפוי להתחיל היום':`איחור של ${-c.until} ימים`;
  const fertNow=TODAY>=c.fertA&&TODAY<=c.fertB;
  return `
  <div class="grid g-main">
    <section class="card ring-box">
      <div class="ring"><svg viewBox="0 0 220 220" aria-hidden="true"><circle cx="110" cy="110" r="${R}" fill="none" stroke="var(--lav-soft)" stroke-width="18"/><circle cx="110" cy="110" r="${R}" fill="none" stroke="var(--lav-strong)" stroke-width="18" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-prog)}"/></svg>
        <div class="c"><span class="muted small">יום במחזור</span><b class="num bl">${c.day}</b><span class="muted small">מתוך ~${c.avg}</span></div></div>
      <h2>${status}</h2>
      <p class="muted" style="margin:0">${fertNow?'את בחלון הפוריות המשוער':`הווסת הבאה משוערת ל${dLong(c.next)}`}</p>
      <div class="quick" style="justify-content:center"><button class="btn btn-primary" data-act="logPeriod" data-d="${TODAY}">${ic('drop')} המחזור התחיל היום</button><button class="btn btn-soft" data-act="logPeriodPick">תאריך אחר</button></div>
    </section>
    <section class="card">
      <div class="card-head"><div class="cal-nav"><button class="round-btn" data-act="cycMove" data-n="-1" aria-label="החודש הקודם">${ic('prev')}</button><h2 style="font-size:18px;width:160px">${monthTitle(y,m)}</h2><button class="round-btn" data-act="cycMove" data-n="1" aria-label="החודש הבא">${ic('next')}</button></div></div>
      <div class="wk"><span>א׳</span><span>ב׳</span><span>ג׳</span><span>ד׳</span><span>ה׳</span><span>ו׳</span><span>ש׳</span></div>
      <div class="mcal">${cells}</div>
      <div class="legend"><span><i class="sp" style="background:var(--lav-strong)"></i>ווסת</span><span><i class="sp" style="background:var(--lav-2)"></i>צפי</span><span><i class="sp" style="background:var(--mint)"></i>חלון פוריות</span><span><i class="sp" style="background:var(--mint-strong)"></i>ביוץ משוער</span><span><i class="sp" style="background:var(--sun-strong)"></i>היום</span></div>
      <p class="muted small" style="margin:10px 0 0">לחיצה על יום מסמנת אותו כתחילת מחזור</p>
    </section>
  </div>
  <div class="grid g-3">
    <div class="stat t-lav"><span class="lbl">אורך מחזור ממוצע</span><span class="val num bl">${c.avg} ימים</span><span class="meta">לפי ${c.lens.length?Math.min(6,c.lens.length)+' מחזורים אחרונים':'ברירת מחדל'}</span></div>
    <div class="stat t-sun"><span class="lbl">אורך ווסת</span><span class="val num bl">${c.L} ימים</span><span class="meta"><button class="btn btn-sm" style="background:var(--surface);color:var(--sun-ink);min-height:34px;margin-top:4px" data-act="perLen">שינוי</button></span></div>
    <div class="stat t-mint"><span class="lbl">חלון פוריות משוער</span><span class="val bl" style="font-size:22px">${dShort(c.fertA)} – ${dShort(c.fertB)}</span><span class="meta">הערכה בלבד, לא אמצעי מניעה</span></div>
  </div>
  <section class="card">
    <div class="card-head"><h2>היסטוריה</h2></div>
    <div class="list">${[...c.st].reverse().map((s,i,a)=>{const nx=i>0?a[i-1]:null;return `<div class="row"><span class="avatar" style="width:40px;height:40px;background:var(--lav);color:var(--lav-ink)">${ic('drop')}</span><span class="grow"><span class="title" style="display:block">${dLong(s)}</span><span class="sub" style="display:block">${nx?`אורך מחזור: ${diff(s,nx)} ימים`:'המחזור הנוכחי'}</span></span><button class="round-btn" data-act="delPeriod" data-d="${s}" aria-label="מחיקת ${dShort(s)}">${ic('trash')}</button></div>`}).join('')}</div>
  </section>`;
}

function vNotes(){
  const ns=[...S.notes].sort((a,b)=>(b.pinned-a.pinned)||(a.date<b.date?1:-1));
  return `${shelfSeg('notes')}<div class="card-head" style="margin:0"><p class="muted" style="margin:0">${ns.length} פתקים</p><button class="btn btn-primary btn-sm" data-act="newNote">${ic('plus')} פתק חדש</button></div>
  ${ns.length?`<div class="notes">${ns.map(n=>`<button class="note" data-act="editNote" data-id="${n.id}" style="background:${toneBg(n.tone)};color:${toneInk(n.tone)}">
    ${n.title?`<h3>${esc(n.title)}</h3>`:''}<p>${esc(n.body)}</p>
    <span class="foot"><span>${dShort(n.date)}</span>${n.pinned?`<span aria-label="מוצמד">${ic('pin','style="width:16px;height:16px"')}</span>`:''}</span></button>`).join('')}</div>`:'<div class="empty">עוד אין פתקים. לחצי על "פתק חדש" כדי לרשום משהו.</div>'}`;
}

function fileIcon(d){const src=docSrc(d);if(src&&d.type.startsWith('image/'))return `<img src="${esc(src)}" alt="">`;return ic(d.type.startsWith('image/')?'img':'file')}
const kb=n=>n>1048576?(n/1048576).toFixed(1)+' MB':Math.max(1,Math.round(n/1024))+' KB';
function vDocs(){
  const fd=ui.docFolder;
  const list=S.docs.filter(d=>fd==='all'||d.folder===fd).sort((a,b)=>a.date<b.date?1:-1);
  const fbtn=(id,name,tone,count)=>`<button class="folder" data-act="docFolder" data-v="${id}" aria-pressed="${fd===id}" style="background:${toneBg(tone)};color:${toneInk(tone)}">${ic(id==='all'?'grid':'folder','style="width:28px;height:28px"')}<span><span class="n" style="display:block">${name}</span><span class="small num">${count} קבצים</span></span></button>`;
  return `${shelfSeg('docs')}<div class="folders">${fbtn('all','כל המסמכים','sun',S.docs.length)}${FOLDERS.map(f=>fbtn(f.id,f.name,f.tone,S.docs.filter(d=>d.folder===f.id).length)).join('')}</div>
  <section class="card">
    <div class="card-head"><h2>${fd==='all'?'כל המסמכים':FOLDERS.find(f=>f.id===fd).name}</h2><button class="btn btn-primary btn-sm" data-act="upload">${ic('upload')} העלאת קובץ</button></div>
    ${list.length?`<div class="files">${list.map(d=>`<button class="file" data-act="openDoc" data-id="${d.id}"><span class="thumb" style="color:var(--lav-strong)">${fileIcon(d)}</span><span style="min-width:0"><span class="title" style="display:block;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(d.name)}</span><span class="sub small muted num" style="display:block">${dShort(d.date)} · ${kb(d.size)}</span></span></button>`).join('')}</div>`:
    `<div class="drop">${ic('upload','style="width:32px;height:32px"')}<strong>התיקייה ריקה</strong><span class="small">אפשר להעלות צילום חיסון, חוזה, קבלה או כל מסמך אחר</span><button class="btn btn-primary btn-sm" data-act="upload">בחירת קובץ</button></div>`}
  </section>`;
}

function vSettings(){loadAllFonts();
  const t=(k,l,s)=>`<label class="tog"><span><strong style="display:block">${l}</strong><span class="muted small">${s}</span></span><span class="switch"><input type="checkbox" id="set-${k}" data-set="${k}" ${(k==='bio'&&Cloud.on?Lock.has():S.settings[k])?'checked':''}><span></span></span></label>`;
  return `<div class="grid g-main">
  <section class="card"><div class="card-head"><h2>התראות לטלפון</h2></div>
    ${t('arrive','הגעת כלב','יום לפני ובבוקר ההגעה')}
    ${t('depart','יציאת כלב ותשלום','בבוקר היציאה, עם הסכום לגבייה')}
    ${t('cycle','תזכורת מחזור','3 ימים לפני המועד המשוער')}
    ${t('pay','עדכון הוצאות','תזכורת שבועית ביום חמישי')}
    ${ui.pushOn?`<p class="muted small" style="margin:14px 0 0">${ic('check','style="width:18px;height:18px;vertical-align:-4px"')} המכשיר הזה מקבל התראה כל בוקר ב-8 עם מה שיש היום</p>
    <div class="actions" style="margin-top:10px"><button class="btn btn-soft btn-sm" data-act="testPush">${ic('bell')} שליחת התראת ניסיון</button><button class="btn btn-ghost btn-sm" data-act="disablePush">כיבוי במכשיר הזה</button></div>`
    :`<button class="btn btn-soft btn-block" style="margin-top:14px" data-act="enablePush">${ic('bell')} הפעלת התראות במכשיר הזה</button>`}
  </section>
  <div class="grid" style="align-content:start">
  <section class="card"><div class="card-head"><h2>כניסה ואבטחה</h2></div>
    ${t('bio','כניסה עם Face ID / טביעת אצבע','במקום להקליד סיסמה בכל פעם')}
    <div class="row" style="margin-top:10px"><span class="avatar" style="background:var(--lav);color:var(--lav-ink)">${esc((S.user||'מ')[0])}</span><span class="grow"><span class="title" style="display:block">${esc(S.user||'miriz')}</span><span class="sub" style="display:block" dir="auto">${Cloud.user?esc(Cloud.username):'מחוברת'}</span></span><button class="btn btn-danger btn-sm" data-act="logout">${ic('logout')} יציאה</button></div>
  </section>
  <section class="card"><div class="card-head"><h2>הפנסיון</h2></div>
    <div class="field"><label for="cap">מספר מקומות בפנסיון</label><input class="input num" id="cap" type="number" min="1" max="60" value="${S.capacity}" data-cap></div>
    <div class="actions"><button class="btn btn-ghost btn-sm" data-act="resetEmpty">${ic('trash')} מחיקת כל הנתונים</button><button class="btn btn-ghost btn-sm" data-act="resetDemo">טעינת נתוני דוגמה</button></div>
  </section></div></div>
  <section class="card" id="iconCard"><div class="card-head"><h2>אייקון האפליקציה</h2><span class="muted small">ככה miriz תיראה במסך הבית</span></div>
    <div class="icon-show">
      <div class="phone" aria-label="תצוגה של מסך הבית בטלפון">
        <div class="ph-time num">9:41</div>
        ${['תמונות','מצלמה','לוח שנה','מפות','הודעות','שעון','מזג אוויר'].map((n,i)=>`<span class="app-ic"><i style="background:${['#F7A3F4','#2E2A44','#fff','#7FD9A8','#6EE07A','#1E0B5C','#5BB8FF'][i]}"></i>${n}</span>`).join('')}
        <span class="app-ic me"><i style="background-image:url(${LOGO})"></i>miriz</span>
        <div class="dock">${['#6EE07A','#5BB8FF','#F7A3F4'].map(c=>`<i style="background:${c}"></i>`).join('')}<i class="me" style="background-image:url(${LOGO})"></i></div>
      </div>
      <div class="icon-big"><i style="background-image:url(${LOGO})"></i><span class="muted small">האייקון בגודל מלא</span></div>
    </div>
  </section>
  <section class="card"><div class="card-head"><h2>גופן</h2><span class="muted small">הבחירה חלה על כל האפליקציה</span></div>
    <div class="fonts">${FONTS.map(f=>`<button class="font-opt" data-act="setFont" data-v="${f.id}" aria-pressed="${(S.settings.font||'balloon')===f.id}"><span class="fn">${f.name}</span><span class="fd" style="font-family:'${f.d}',sans-serif">השבוע שלי</span><span class="fb" style="font-family:'${f.b}',sans-serif">לונה מגיעה מחר · ₪6,940</span><span class="fb" style="font-size:12px">${f.d}${f.d!==f.b?' + '+f.b:''}</span></button>`).join('')}</div>
  </section>`;
}

const VIEWS={home:vHome,calendar:vCalendar,finance:vFinance,cycle:vCycle,notes:vNotes,docs:vDocs,settings:vSettings};

/* ---------- login ---------- */
function vLogin(){
  const cloud=Cloud.on,locked=cloud&&!!Cloud.user;
  const bioBtns=cloud?locked&&Lock.has():S.settings.bio;
  return `<div class="login">
    <span class="blob" style="width:340px;height:340px;background:var(--sun-strong);top:-90px;right:-80px"></span>
    <span class="blob" style="width:260px;height:260px;background:var(--sun);bottom:-70px;left:-60px"></span>
    <span class="blob" style="width:200px;height:200px;background:var(--mint);bottom:18%;right:-70px"></span>
    <form class="login-card" data-form="login" novalidate>
      <div class="brand">${brandHTML}</div>
      <h1 class="bl">${locked&&S.user?`היי ${esc(S.user)}`:'ברוכה הבאה'}</h1>
      <p class="sub">הפנסיון, הכסף והיומן שלך במקום אחד</p>
      <div class="field"><label for="lu">שם משתמש</label><input class="input" id="lu" name="u" autocomplete="username" autocapitalize="none" value="${esc(cloud?(locked?Cloud.username:''):S.user)}" required></div>
      <div class="field"><label for="lp">סיסמה</label><div class="pw"><input class="input" id="lp" name="p" type="${ui.showPw?'text':'password'}" autocomplete="current-password" required><button type="button" data-act="togglePw" aria-label="${ui.showPw?'הסתרת הסיסמה':'הצגת הסיסמה'}">${ic('eye')}</button></div></div>
      <div class="err" id="lerr" hidden></div>
      <button class="btn btn-primary btn-block" type="submit">כניסה</button>
      ${bioBtns?`<div class="divider">או</div>
      <div class="bio-row"><button type="button" class="btn btn-soft bio" data-act="bio" data-k="face">${ic('face')}Face ID</button><button type="button" class="btn btn-mint bio" data-act="bio" data-k="finger">${ic('finger')}טביעת אצבע</button></div>`:''}
      ${cloud?'':`<p class="hint">מצב מקומי: הנתונים נשמרים רק במכשיר הזה</p>`}
    </form></div>`;
}

/* ---------- render ---------- */
const root=document.getElementById('root');
const BLOBSEL='.stat,.note,.folder,.bday,.card,.banner,.login-card,.drop,.btn,.chip,.pill,.font-opt,.file,.row,.seg,.nav-btn,.calc,.warn,.empty,.day,.seg button,.avatar,.round-btn,.icon-btn,.no,.thumb,.sw,.scan-ring,.tabbar .ic';
function blobify(rt){(rt||document).querySelectorAll(BLOBSEL).forEach(el=>{if(!('bg' in el.dataset))el.dataset.bg=el.style.background||'';el.style.background=el.dataset.bg;el.style.setProperty('--c',getComputedStyle(el).backgroundColor);el.style.background='transparent'})}
function gloss(){root.querySelectorAll('.bl').forEach(e=>e.dataset.t=e.textContent);blobify(root)}
function render(){_render();gloss();if(ui.scrollIcon&&S.loggedIn){ui.scrollIcon=false;requestAnimationFrame(()=>{const c=document.getElementById('iconCard');c&&c.scrollIntoView({block:'center'})})}}
function _render(){
  if(!S.loggedIn){root.innerHTML=vLogin();return}
  const v=ui.view,al=alerts().length;
  const navBtns=NAV.map(([k,l,i])=>`<button class="nav-btn" data-act="go" data-v="${k}" ${navOn(k,v)?'aria-current="page"':''}>${ic(i)}${l}</button>`).join('');
  const title=v==='home'?`${greeting()}${S.user?', '+esc(S.user):''}`:TITLES[v];
  root.innerHTML=`<div class="shell"><div class="bg-deco" aria-hidden="true"><span class="loop" style="width:300px;height:280px;top:22%;left:-90px"></span><span class="loop" style="width:240px;height:260px;bottom:-60px;left:34%"></span><span class="loop" style="width:200px;height:180px;top:-50px;left:46%"></span><span class="dot" style="bottom:18%;left:3%"></span><span class="dot" style="bottom:15%;left:6%;transform:rotate(40deg)"></span><span class="dot" style="bottom:21%;left:7%;transform:rotate(-30deg)"></span></div>
    <aside class="side"><div class="brand">${brandHTML}</div>${navBtns}</aside>
    <main class="main"><div class="wrap">
      <div class="top"><div><div class="brand m-brand">${brandHTML}</div><h1 class="bl">${title}</h1>${v==='home'?`<div class="date">${dLong(TODAY)}</div>`:''}</div>
        <div class="top-actions"><button class="icon-btn" data-act="go" data-v="settings" aria-label="הגדרות" ${v==='settings'?'aria-current="page" style="background:var(--mint)"':''}>${ic('gear')}</button><button class="icon-btn" data-act="alerts" aria-label="התראות (${al})">${ic('bell')}${al?`<span class="dot num">${al}</span>`:''}</button></div></div>
      ${S.example&&v==='home'?`<div class="banner"><span>מוצגים נתוני דוגמה כדי שתראי איך הכול עובד.</span><span class="quick"><button class="btn btn-sm" style="background:var(--surface);color:var(--sun-ink)" data-act="resetEmpty">להתחיל מאפס</button><button class="btn btn-ghost btn-sm" style="color:var(--sun-ink)" data-act="keepDemo">להשאיר</button></span></div>`:''}
      ${VIEWS[v]()}
    </div></main>
    <nav class="tabbar" aria-label="ניווט ראשי">${NAV.map(([k,l,i])=>`<button data-act="go" data-v="${k}" ${navOn(k,v)?'aria-current="page"':''}><span class="ic">${ic(i)}</span>${l}</button>`).join('')}</nav>
  </div>`;
}

/* ---------- sheet & toast ---------- */
const sw=document.getElementById('sheetWrap'),sh=document.getElementById('sheet');
function openSheet(title,body){sh.style.transform='';sh.innerHTML=`<button type="button" class="grabber" data-act="closeSheet" aria-label="סגירה"></button><div class="sheet-head"><h2>${title}</h2><button class="round-btn" data-act="closeSheet" aria-label="סגירה">${ic('x')}</button></div>${body}`;sw.hidden=false;blobify(sh);setTimeout(()=>{const f=sh.querySelector('input:not([type=hidden]),textarea');f&&f.focus({preventScroll:true})},60)}
function closeSheet(){sw.hidden=true;sh.innerHTML='';ui.popOpen=null;if(ui.popReturn){const d=ui.popReturn;ui.popReturn=null;dayPop(d)}}
let tt;function toast(msg){document.querySelectorAll('.toast').forEach(t=>t.remove());const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=msg;document.body.appendChild(t);clearTimeout(tt);tt=setTimeout(()=>t.remove(),4000)}
function commit(msg){S.example=S.example;if(!save())toast('לא הצלחתי לשמור במכשיר הזה');else if(msg)toast(msg);render()}

/* ---------- forms ---------- */
function bookingForm(b,dflt){
  const n=!b;b=b||{dog:'',breed:'',owner:'',phone:'',checkIn:dflt||TODAY,checkOut:add(dflt||TODAY,3),price:170,notes:'',tone:'lav'};
  openSheet(n?'הזמנה חדשה':`${esc(b.dog)}`,`<form class="form" data-form="booking" data-id="${n?'':b.id}">
    <div class="two"><div class="field"><label for="bd">שם הכלב</label><input class="input" id="bd" name="dog" value="${esc(b.dog)}" required></div>
    <div class="field"><label for="bb">גזע</label><input class="input" id="bb" name="breed" value="${esc(b.breed)}"></div></div>
    <div class="two"><div class="field"><label for="bo">שם הבעלים</label><input class="input" id="bo" name="owner" value="${esc(b.owner)}"></div>
    <div class="field"><label for="bp">טלפון</label><input class="input num" id="bp" name="phone" type="tel" dir="ltr" style="text-align:right" value="${esc(b.phone)}"></div></div>
    <div class="two"><div class="field"><label for="bi">הגעה</label><input class="input" id="bi" name="checkIn" type="date" value="${b.checkIn}" required></div>
    <div class="field"><label for="bx">יציאה</label><input class="input" id="bx" name="checkOut" type="date" value="${b.checkOut}" required></div></div>
    <div class="field"><label for="bpr">מחיר ללילה (₪)</label><input class="input num" id="bpr" name="price" type="number" min="0" step="5" value="${b.price}"></div>
    <div class="field"><label>חישוב מס</label><div class="seg" role="group" aria-label="חישוב מס" style="justify-self:start">${taxSeg(b.tax!==false)}</div><input type="hidden" name="tax" value="${b.tax!==false?1:0}"></div>
    <div class="calc num" id="bcalc"></div><div class="warn" id="bwarn" hidden></div>
    <div class="field"><label for="bn">הערות (אוכל, תרופות, הרגלים)</label><textarea class="input" id="bn" name="notes">${esc(b.notes)}</textarea></div>
    <div class="field"><label>צבע ביומן</label><div class="swatches">${TONES.map(t=>`<button type="button" class="sw" data-act="tone" data-v="${t}" aria-pressed="${b.tone===t}" aria-label="${t}" style="background:${toneStrong(t)}"></button>`).join('')}</div><input type="hidden" name="tone" value="${b.tone}"></div>
    <div class="err" id="berr" hidden></div>
    <div class="actions">${n?'':`<button type="button" class="btn btn-danger" data-act="delBooking" data-id="${b.id}">${ic('trash')} מחיקה</button>`}<span class="r"><button type="button" class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary" type="submit">${n?'הוספה ליומן':'שמירה'}</button></span></div>
  </form>`);
  updCalc();
}
function updCalc(){
  const f=sh.querySelector('[data-form=booking]');if(!f)return;
  const ci=f.checkIn.value,co=f.checkOut.value,pr=+f.price.value||0,id=f.dataset.id;
  const el=document.getElementById('bcalc'),w=document.getElementById('bwarn');
  if(!ci||!co||co<=ci){el.textContent='תאריך היציאה צריך להיות אחרי ההגעה';w.hidden=true;return}
  const n=diff(ci,co);el.textContent=`${n} לילות · סה״כ ${money(n*pr)}`;
  let peak=0,pd=null;for(let d=ci;d<co;d=add(d,1)){const c=S.bookings.filter(b=>b.id!==id&&b.checkIn<=d&&d<b.checkOut).length+1;if(c>peak){peak=c;pd=d}}
  if(peak>S.capacity){w.hidden=false;w.textContent=`שימי לב: ב${dShort(pd)} יהיו ${peak} כלבים, מעל ${S.capacity} המקומות`}else w.hidden=true;
}
function expenseForm(e){
  const n=!e;e=e||{type:'biz',cat:CATS.biz[0],desc:'',amount:'',date:TODAY};
  const opts=t=>CATS[t].map(c=>`<option ${c===e.cat?'selected':''}>${c}</option>`).join('');
  openSheet(n?'תנועה חדשה':'עריכת תנועה',`<form class="form" data-form="expense" data-id="${n?'':e.id}">
    <div class="seg" role="group" aria-label="סוג" style="justify-self:start">${[['biz','הוצאת עסק'],['personal','הוצאה אישית'],['income','הכנסה נוספת']].map(([k,l])=>`<button type="button" data-act="expType" data-v="${k}" aria-pressed="${e.type===k}">${l}</button>`).join('')}</div>
    <input type="hidden" name="type" value="${e.type}">
    <div class="field" id="taxField" ${e.type==='income'?'':'hidden'}><label>חישוב מס</label><div class="seg" role="group" aria-label="חישוב מס" style="justify-self:start">${taxSeg(e.tax!==false)}</div><input type="hidden" name="tax" value="${e.tax!==false?1:0}"></div>
    <div class="two"><div class="field"><label for="ea">סכום (₪)</label><input class="input num" id="ea" name="amount" type="number" min="0" step="1" inputmode="decimal" value="${e.amount}" required></div>
    <div class="field"><label for="edt">תאריך</label><input class="input" id="edt" name="date" type="date" value="${e.date}" required></div></div>
    <div class="field"><label for="ec">קטגוריה</label><select class="input" id="ec" name="cat">${opts(e.type)}</select></div>
    <div class="field"><label for="ed">תיאור</label><input class="input" id="ed" name="desc" value="${esc(e.desc)}" placeholder="לדוגמה: שק מזון 15 ק״ג"></div>
    <div class="err" id="eerr" hidden></div>
    <div class="actions">${n?'':`<button type="button" class="btn btn-danger" data-act="delExpense" data-id="${e.id}">${ic('trash')} מחיקה</button>`}<span class="r"><button type="button" class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary" type="submit">שמירה</button></span></div>
  </form>`);
}
function noteForm(nt){
  const n=!nt;nt=nt||{title:'',body:'',tone:'sun',pinned:false};
  openSheet(n?'פתק חדש':'עריכת פתק',`<form class="form" data-form="note" data-id="${n?'':nt.id}">
    <div class="field"><label for="nt">כותרת</label><input class="input" id="nt" name="title" value="${esc(nt.title)}"></div>
    <div class="field"><label for="nb">תוכן</label><textarea class="input" id="nb" name="body" style="min-height:150px">${esc(nt.body)}</textarea></div>
    <div class="field"><label>צבע</label><div class="swatches">${TONES.map(t=>`<button type="button" class="sw" data-act="tone" data-v="${t}" aria-pressed="${nt.tone===t}" aria-label="${t}" style="background:${toneBg(t)}"></button>`).join('')}</div><input type="hidden" name="tone" value="${nt.tone}"></div>
    <label class="tog" style="border:0;padding:4px"><span><strong>הצמדה למעלה</strong></span><span class="switch"><input type="checkbox" name="pinned" id="npin" ${nt.pinned?'checked':''}><span></span></span></label>
    <div class="actions">${n?'':`<button type="button" class="btn btn-danger" data-act="delNote" data-id="${nt.id}">${ic('trash')} מחיקה</button>`}<span class="r"><button type="button" class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary" type="submit">שמירה</button></span></div>
  </form>`);
}
function eventForm(e,d){
  const n=!e;e=e||{title:'',date:d||TODAY,time:'',place:'',notes:''};
  openSheet(n?'אירוע חדש':'עריכת אירוע',`<form class="form" data-form="event" data-id="${n?'':e.id}">
    <div class="field"><label for="evt">מה האירוע?</label><input class="input" id="evt" name="title" value="${esc(e.title)}" placeholder="לדוגמה: ארוחת ערב אצל ההורים" required></div>
    <div class="two"><div class="field"><label for="evd">תאריך</label><input class="input" id="evd" name="date" type="date" value="${e.date}" required></div>
    <div class="field"><label for="evh">שעה (לא חובה)</label><input class="input" id="evh" name="time" type="time" value="${esc(e.time)}"></div></div>
    <div class="field"><label for="evp">מקום</label><input class="input" id="evp" name="place" value="${esc(e.place)}"></div>
    <div class="field"><label for="evn">הערות</label><textarea class="input" id="evn" name="notes">${esc(e.notes)}</textarea></div>
    <div class="err" id="everr" hidden></div>
    <div class="actions">${n?'':`<button type="button" class="btn btn-danger" data-act="delEvent" data-id="${e.id}">${ic('trash')} מחיקה</button>`}<span class="r"><button type="button" class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary" type="submit">${n?'הוספה ליומן':'שמירה'}</button></span></div>
  </form>`);
}
function taskForm(t,d){
  const n=!t;t=t||{title:'',date:d||TODAY,done:false};
  openSheet(n?'משימה חדשה':'עריכת משימה',`<form class="form" data-form="task" data-id="${n?'':t.id}">
    <div class="field"><label for="tkt">מה צריך לעשות?</label><input class="input" id="tkt" name="title" value="${esc(t.title)}" placeholder="לדוגמה: להזמין שקי מזון" required></div>
    <div class="field"><label for="tkd">ליום</label><input class="input" id="tkd" name="date" type="date" value="${t.date}" required></div>
    <label class="tog" style="border:0;padding:4px"><span><strong>בוצע</strong></span><span class="switch"><input type="checkbox" name="done" id="tkdone" ${t.done?'checked':''}><span></span></span></label>
    <div class="err" id="tkerr" hidden></div>
    <div class="actions">${n?'':`<button type="button" class="btn btn-danger" data-act="delTask" data-id="${t.id}">${ic('trash')} מחיקה</button>`}<span class="r"><button type="button" class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary" type="submit">שמירה</button></span></div>
  </form>`);
}
function showErr(id,msg){const e=document.getElementById(id);e.textContent=msg;e.hidden=false}

document.addEventListener('submit',ev=>{
  const f=ev.target;ev.preventDefault();const fd=Object.fromEntries(new FormData(f));const id=f.dataset.id;
  switch(f.dataset.form){
    case 'login':
      if(!Cloud.on){
        if(!fd.u.trim()||!fd.p){showErr('lerr','צריך למלא שם משתמש וסיסמה');return}
        S.user=fd.u.trim();S.loggedIn=true;save();render();break;}
      login(f,fd);break;
    case 'booking':{
      if(!fd.dog.trim())return showErr('berr','חסר שם הכלב');
      if(!fd.checkIn||!fd.checkOut||fd.checkOut<=fd.checkIn)return showErr('berr','תאריך היציאה צריך להיות אחרי תאריך ההגעה');
      const o={dog:fd.dog.trim(),breed:fd.breed.trim(),owner:fd.owner.trim(),phone:fd.phone.trim(),checkIn:fd.checkIn,checkOut:fd.checkOut,price:+fd.price||0,notes:fd.notes,tone:fd.tone,tax:fd.tax==='1'};
      if(id)Object.assign(S.bookings.find(b=>b.id===id),o);else S.bookings.push({id:uid(),...o});
      ui.sel=o.checkIn;const d=P(o.checkIn);if(ui.view==='calendar'){ui.calY=d.getFullYear();ui.calM=d.getMonth()}
      closeSheet();commit(id?'ההזמנה עודכנה':`${o.dog} נוסף/ה ליומן`);break;}
    case 'expense':{
      if(!(+fd.amount>0))return showErr('eerr','צריך סכום גדול מאפס');
      const o={type:fd.type,cat:fd.cat,desc:fd.desc.trim(),amount:+fd.amount,date:fd.date};if(o.type==='income')o.tax=fd.tax==='1';
      if(id)Object.assign(S.expenses.find(e=>e.id===id),o);else S.expenses.push({id:uid(),...o});
      closeSheet();commit('נשמר');break;}
    case 'note':{
      if(!fd.title.trim()&&!fd.body.trim()){closeSheet();return}
      const o={title:fd.title.trim(),body:fd.body,tone:fd.tone,pinned:!!fd.pinned,date:TODAY};
      if(id)Object.assign(S.notes.find(n=>n.id===id),o);else S.notes.push({id:uid(),...o});
      closeSheet();commit('הפתק נשמר');break;}
    case 'date':{
      if(!fd.d)return;if(!S.cycle.starts.includes(fd.d))S.cycle.starts.push(fd.d);closeSheet();commit('נשמר');break;}
    case 'event':{
      if(!fd.title.trim())return showErr('everr','חסר שם לאירוע');
      const o={title:fd.title.trim(),date:fd.date,time:fd.time||'',place:fd.place.trim(),notes:fd.notes};S.events=S.events||[];
      if(id)Object.assign(S.events.find(e=>e.id===id),o);else S.events.push({id:uid(),...o});
      closeSheet();commit(id?'האירוע עודכן':'האירוע נוסף ליומן');break;}
    case 'task':{
      if(!fd.title.trim())return showErr('tkerr','חסר מה לעשות');
      const o={title:fd.title.trim(),date:fd.date,done:!!fd.done};S.tasks=S.tasks||[];
      if(id)Object.assign(S.tasks.find(t=>t.id===id),o);else S.tasks.push({id:uid(),...o});
      closeSheet();commit(id?'המשימה עודכנה':'המשימה נוספה');break;}
    case 'perlen':{S.cycle.periodLen=Math.max(1,Math.min(10,+fd.n||5));closeSheet();commit('עודכן');break;}
  }
});
document.addEventListener('input',ev=>{
  const t=ev.target;
  if(t.closest('[data-form=booking]'))updCalc();
  if(t.id==='weekNote'){S.weekNotes=S.weekNotes||{};S.weekNotes[t.dataset.week]=t.value;save()}
  if(t.dataset.cap!==undefined){const v=+t.value;if(v>0){S.capacity=v;save()}}
});
document.addEventListener('change',ev=>{
  const t=ev.target;
  if(t.dataset.set==='bio'&&Cloud.on){bioSetting(t);return}
  if(t.dataset.set){S.settings[t.dataset.set]=t.checked;save();toast(t.checked?'הופעל':'כובה')}
  if(t.dataset.cap!==undefined)render();
});

/* ---------- auth ---------- */
const AUTH_ERR={'Invalid login credentials':'שם משתמש או סיסמה לא נכונים'};
async function login(f,fd){
  const name=(fd.u||'').trim(),pw=fd.p||'';
  if(!name||!pw)return showErr('lerr','צריך למלא שם משתמש וסיסמה');
  const btn=f.querySelector('[type=submit]');btn.disabled=true;
  try{
    if(Cloud.user&&Cloud.username!==name.toLowerCase())await signOutLocal();
    await Cloud.signIn(name,pw);
    await pull();S.loggedIn=true;ui.showPw=false;render();refreshDocUrls();
  }catch(e){btn.disabled=false;showErr('lerr',AUTH_ERR[e&&e.message]||'משהו השתבש, אפשר לנסות שוב')}
}
async function signOutLocal(){
  await Cloud.signOut();
  try{localStorage.removeItem(KEY)}catch(e){}
  S=seed();migrate();applyFont();S.loggedIn=false;
}
async function bioSetting(t){
  if(!t.checked){Lock.clear();toast('כובה');return}
  try{
    if(!await Lock.available())throw 0;
    await Lock.register(S.user);toast('מעכשיו אפשר להיכנס עם Face ID / טביעת אצבע');
  }catch(e){t.checked=false;toast('המכשיר הזה לא תומך בכניסה ביומטרית')}
}

/* ---------- push notifications ---------- */
const pushOK=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
const b64key=s=>{const b=atob((s+'='.repeat((4-s.length%4)%4)).replace(/-/g,'+').replace(/_/g,'/'));return Uint8Array.from(b,c=>c.charCodeAt(0))};
async function pushSub(){if(!pushOK())return null;const reg=await navigator.serviceWorker.getRegistration();return reg?reg.pushManager.getSubscription():null}
async function enablePush(){
  if(!Cloud.user)return toast('התראות לטלפון עובדות אחרי כניסה לחשבון');
  if(!pushOK()){
    const ios=/iPhone|iPad|iPod/.test(navigator.userAgent);
    return toast(ios?'באייפון צריך קודם להוסיף את miriz למסך הבית (שיתוף ← הוספה למסך הבית) ולפתוח משם':'הדפדפן הזה לא תומך בהתראות');
  }
  const perm=await Notification.requestPermission();
  if(perm!=='granted')return toast('ההתראות חסומות. אפשר לאשר אותן בהגדרות הטלפון ← miriz');
  try{
    const reg=await navigator.serviceWorker.ready;
    const sub=await reg.pushManager.getSubscription()||await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64key(Cloud.vapidKey)});
    await Cloud.savePush(sub.toJSON());
    ui.pushOn=true;render();toast('התראות הופעלו. אפשר לשלוח התראת ניסיון');
  }catch(e){toast('לא הצלחתי להפעיל התראות, אפשר לנסות שוב')}
}
async function disablePush(){
  try{const sub=await pushSub();if(sub){await Cloud.removePush(sub.endpoint);await sub.unsubscribe()}}catch(e){}
  ui.pushOn=false;render();toast('ההתראות כובו במכשיר הזה');
}

/* ---------- actions ---------- */
async function bio(kind){
  if(Cloud.on){try{await Lock.verify()}catch(e){toast('הזיהוי לא הצליח, אפשר להיכנס עם סיסמה');return}}
  const box=document.createElement('div');box.className='scan';box.setAttribute('role','status');
  box.innerHTML=`<div class="scan-box"><div class="scan-ring">${ic(kind==='face'?'face':'finger')}</div><strong>${kind==='face'?'מזהה פנים…':'מניחה אצבע…'}</strong></div>`;
  document.body.appendChild(box);
  setTimeout(()=>{const r=box.querySelector('.scan-ring');r.classList.add('ok');r.innerHTML=ic('check');box.querySelector('strong').textContent='זוהית בהצלחה'},1300);
  setTimeout(()=>{box.remove();S.loggedIn=true;if(!S.user)S.user='מיריז';save();render()},2000);
}
const fin=document.getElementById('fileIn');
fin.addEventListener('change',async()=>{
  const files=[...fin.files];fin.value='';let dropped=0;
  if(Cloud.user){
    toast(files.length>1?`מעלה ${files.length} קבצים…`:'מעלה…');let failed=0;
    for(const f of files){
      const d={id:uid(),name:f.name,size:f.size,type:f.type||'application/octet-stream',folder:ui.docFolder==='all'?'personal':ui.docFolder,date:TODAY};
      if(f.size>25*1048576){failed++;continue}
      try{d.path=await Cloud.upload(d.id,f)}catch(e){failed++;continue}
      S.docs.push(d);
    }
    save();render();refreshDocUrls();
    const ok=files.length-failed;
    toast(failed?`${failed} קבצים לא הועלו (עד 25MB לקובץ)`:ok>1?`הועלו ${ok} קבצים`:'הקובץ הועלה');
    return;
  }
  for(const f of files){
    const d={id:uid(),name:f.name,size:f.size,type:f.type||'application/octet-stream',folder:ui.docFolder==='all'?'personal':ui.docFolder,date:TODAY};
    if(f.size<=1.5*1048576){d.data=await new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(fr.result);fr.onerror=()=>r(null);fr.readAsDataURL(f)})}
    S.docs.push(d);
    if(!save()){delete d.data;dropped++;save()}
  }
  render();toast(dropped?'נשמר, אבל בלי תצוגה מקדימה כי אין מספיק מקום במכשיר':files.length>1?`הועלו ${files.length} קבצים`:'הקובץ הועלה');
});

document.addEventListener('click',ev=>{
  const el=ev.target.closest('[data-act]');if(!el)return;
  const a=el.dataset.act,id=el.dataset.id,v=el.dataset.v;
  switch(a){
    case 'go':ui.view=v;closeSheet();try{history.replaceState(null,'','#'+v)}catch(e){}render();window.scrollTo(0,0);break;
    case 'closeSheet':closeSheet();break;
    case 'togglePw':{const u=document.getElementById('lu').value,p=document.getElementById('lp').value;ui.showPw=!ui.showPw;render();document.getElementById('lu').value=u;const lp=document.getElementById('lp');lp.value=p;lp.focus();break;}
    case 'bio':bio(el.dataset.k);break;
    case 'logout':closeSheet();if(Cloud.on){signOutLocal().then(render)}else{S.loggedIn=false;save();render()}break;
    case 'alerts':{const al=alerts();openSheet('התראות',`<div class="list">${al.map(a=>`<div class="row"><span class="avatar" style="background:${toneBg(a.tone)};color:${toneInk(a.tone)}">${ic(a.icon)}</span><span class="grow"><span class="title" style="display:block">${esc(a.t)}</span><span class="sub" style="display:block">${esc(a.s)}</span></span></div>`).join('')||'<div class="empty">אין התראות חדשות</div>'}</div><button class="btn btn-soft btn-block" style="margin-top:14px" data-act="go" data-v="settings">הגדרות התראות</button>`);break;}
    case 'newBooking':bookingForm(null,el.dataset.d||(ui.view==='calendar'?ui.sel:TODAY));break;
    case 'editBooking':if(ui.popOpen)ui.popReturn=ui.popOpen;bookingForm(S.bookings.find(b=>b.id===id));break;
    case 'delBooking':if(el.dataset.confirm){S.bookings=S.bookings.filter(b=>b.id!==id);closeSheet();commit('ההזמנה נמחקה')}else{el.dataset.confirm=1;el.innerHTML=ic('trash')+' ללחוץ שוב למחיקה'}break;
    case 'tone':{const f=el.closest('form');f.tone.value=v;f.querySelectorAll('.sw').forEach(s=>s.setAttribute('aria-pressed',s===el));break;}
    case 'openDay':ui.popReturn=null;ui.sel=el.dataset.d||TODAY;dayPop(ui.sel);break;
    case 'openWeek':ui.view='calendar';ui.calMode='week';ui.sel=TODAY;try{history.replaceState(null,'','#calendar')}catch(e){}render();window.scrollTo(0,0);break;
    case 'closeDay':ui.popReturn=null;closeSheet();break;
    case 'dayStep':dayPop(add(ui.popOpen,+el.dataset.n));break;
    case 'addPick':{const ap=document.getElementById('addPick');if(ap&&!sw.hidden){ap.hidden=!ap.hidden;break}
      const d=el.dataset.d||TODAY;openSheet('מה להוסיף?',`<p class="muted" style="margin:0 0 14px">${dLong(d)}</p><div class="add-pick"><button class="btn btn-sun" data-act="addKind" data-k="event" data-d="${d}">${ic('cal')} אירוע</button><button class="btn btn-soft" data-act="addKind" data-k="task" data-d="${d}">${ic('check')} משימה</button><button class="btn btn-mint" data-act="addKind" data-k="dog" data-d="${d}">${ic('paw')} הזמנת כלב</button></div>`);break;}
    case 'addKind':{const d=el.dataset.d||TODAY,k=el.dataset.k;ui.popReturn=ui.popOpen||null;ui.popOpen=null;
      if(k==='event')eventForm(null,d);else if(k==='task')taskForm(null,d);else bookingForm(null,d);break;}
    case 'editEvent':if(ui.popOpen)ui.popReturn=ui.popOpen;eventForm(S.events.find(e=>e.id===id));break;
    case 'editTask':if(ui.popOpen)ui.popReturn=ui.popOpen;taskForm(S.tasks.find(t=>t.id===id));break;
    case 'toggleTask':{const t=S.tasks.find(t=>t.id===id);t.done=!t.done;save();const po=ui.popOpen;render();if(po)dayPop(po);toast(t.done?'סומן כבוצע':'סומן כלא בוצע');break;}
    case 'delEvent':if(el.dataset.confirm){S.events=S.events.filter(e=>e.id!==id);closeSheet();commit('האירוע נמחק')}else{el.dataset.confirm=1;el.innerHTML=ic('trash')+' ללחוץ שוב למחיקה'}break;
    case 'delTask':if(el.dataset.confirm){S.tasks=S.tasks.filter(t=>t.id!==id);closeSheet();commit('המשימה נמחקה')}else{el.dataset.confirm=1;el.innerHTML=ic('trash')+' ללחוץ שוב למחיקה'}break;
    case 'calMode':ui.calMode=v;if(v==='month'){const d=P(ui.sel);ui.calY=d.getFullYear();ui.calM=d.getMonth()}render();break;
    case 'calStep':{const n=+el.dataset.n;if(ui.calMode!=='month')ui.sel=add(ui.sel,7*n);else{const d=new Date(ui.calY,ui.calM+n,1);ui.calY=d.getFullYear();ui.calM=d.getMonth()}render();break;}
    case 'calToday':ui.calY=now.getFullYear();ui.calM=now.getMonth();ui.sel=TODAY;render();break;
    case 'finMode':ui.finMode=v;render();break;
    case 'finMove':{if(ui.finMode==='year')ui.finY+= +el.dataset.n;else{const d=new Date(ui.finY,ui.finM+ +el.dataset.n,1);ui.finY=d.getFullYear();ui.finM=d.getMonth()}render();break;}
    case 'pickMonth':ui.finMode='month';ui.finM=+el.dataset.m;render();break;
    case 'finFilter':ui.finFilter=v;render();break;
    case 'taxF':ui.taxF=v;render();break;
    case 'setFont':S.settings.font=v;applyFont();save();render();toast('הגופן עודכן');break;
    case 'taxSet':{const f=el.closest('form');f.tax.value=v;el.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===el));break;}
    case 'newExpense':expenseForm();break;
    case 'editExpense':expenseForm(S.expenses.find(e=>e.id===id));break;
    case 'delExpense':if(el.dataset.confirm){S.expenses=S.expenses.filter(e=>e.id!==id);closeSheet();commit('נמחק')}else{el.dataset.confirm=1;el.innerHTML=ic('trash')+' ללחוץ שוב למחיקה'}break;
    case 'expType':{const f=el.closest('form');f.type.value=v;el.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===el));f.querySelector('#taxField').hidden=v!=='income';f.cat.innerHTML=CATS[v].map(c=>`<option>${c}</option>`).join('');break;}
    case 'logPeriod':{const d=el.dataset.d||TODAY;if(S.cycle.starts.includes(d)){toast('התאריך כבר מסומן');break}S.cycle.starts.push(d);commit('סומן. התחזית עודכנה');break;}
    case 'logPeriodPick':openSheet('תחילת מחזור',`<form class="form" data-form="date"><div class="field"><label for="pd">היום הראשון של המחזור</label><input class="input" id="pd" name="d" type="date" max="${TODAY}" value="${TODAY}"></div><div class="actions"><span class="r"><button type="button" class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary">שמירה</button></span></div></form>`);break;
    case 'cycDay':{const d=el.dataset.d;if(d>TODAY){toast('אפשר לסמן רק תאריכים שכבר עברו');break}
      if(S.cycle.starts.includes(d)){toast('התאריך כבר מסומן כתחילת מחזור');break}
      openSheet('לסמן תחילת מחזור?',`<p style="margin:0 0 16px">${dLong(d)}</p><div class="actions"><span class="r"><button class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary" data-act="logPeriod" data-d="${d}" onclick="closeSheet()">סימון</button></span></div>`);break;}
    case 'cycMove':{const d=new Date(ui.cycY,ui.cycM+ +el.dataset.n,1);ui.cycY=d.getFullYear();ui.cycM=d.getMonth();render();break;}
    case 'delPeriod':if(el.dataset.confirm){S.cycle.starts=S.cycle.starts.filter(s=>s!==el.dataset.d);commit('נמחק')}else{el.dataset.confirm=1;el.style.background='var(--sun)';el.setAttribute('aria-label','ללחוץ שוב למחיקה');toast('ללחוץ שוב כדי למחוק')}break;
    case 'perLen':openSheet('אורך הווסת',`<form class="form" data-form="perlen"><div class="field"><label for="pl">מספר ימים</label><input class="input num" id="pl" name="n" type="number" min="1" max="10" value="${S.cycle.periodLen}"></div><div class="actions"><span class="r"><button type="button" class="btn btn-ghost" data-act="closeSheet">ביטול</button><button class="btn btn-primary">שמירה</button></span></div></form>`);break;
    case 'newNote':noteForm();break;
    case 'editNote':noteForm(S.notes.find(n=>n.id===id));break;
    case 'delNote':if(el.dataset.confirm){S.notes=S.notes.filter(n=>n.id!==id);closeSheet();commit('הפתק נמחק')}else{el.dataset.confirm=1;el.innerHTML=ic('trash')+' ללחוץ שוב למחיקה'}break;
    case 'docFolder':ui.docFolder=v;render();break;
    case 'upload':fin.click();break;
    case 'openDoc':{const d=S.docs.find(x=>x.id===id),src=docSrc(d);
      const prev=src&&d.type.startsWith('image/')?`<img src="${esc(src)}" alt="${esc(d.name)}" style="width:100%;border-radius:20px;margin-bottom:14px">`:`<div class="drop" style="margin-bottom:14px">${ic('file','style="width:40px;height:40px"')}<span class="small">${src?'תצוגה מקדימה זמינה לתמונות':d.path?'טוען…':'קובץ דוגמה, אין תוכן לתצוגה'}</span></div>`;
      openSheet(esc(d.name),`${prev}<p class="muted small num" style="margin:0 0 14px">${dLong(d.date)} · ${kb(d.size)}</p>
      <div class="field"><label for="mv">תיקייה</label><select class="input" id="mv" data-move="${d.id}">${FOLDERS.map(f=>`<option value="${f.id}" ${f.id===d.folder?'selected':''}>${f.name}</option>`).join('')}</select></div>
      <div class="actions"><button class="btn btn-danger" data-act="delDoc" data-id="${d.id}">${ic('trash')} מחיקה</button><span class="r">${src?`<a class="btn btn-soft" href="${esc(src)}" target="_blank" rel="noopener" download="${esc(d.name)}">פתיחה</a>`:''}<button class="btn btn-primary" data-act="closeSheet">סגירה</button></span></div>`);
      document.getElementById('mv').onchange=e=>{d.folder=e.target.value;save();render();toast('הועבר')};break;}
    case 'delDoc':if(el.dataset.confirm){dropFiles(S.docs.filter(d=>d.id===id));S.docs=S.docs.filter(d=>d.id!==id);closeSheet();commit('הקובץ נמחק')}else{el.dataset.confirm=1;el.innerHTML=ic('trash')+' ללחוץ שוב למחיקה'}break;
    case 'enablePush':enablePush();break;
    case 'disablePush':disablePush();break;
    case 'testPush':Cloud.testPush().then(n=>toast(n?'נשלחה התראת ניסיון':'לא נמצא מכשיר רשום, אפשר להפעיל שוב')).catch(()=>toast('השליחה נכשלה, אפשר לנסות שוב'));break;
    case 'keepDemo':S.example=false;commit();break;
    case 'resetEmpty':if(el.dataset.confirm){dropFiles(S.docs);const u=S.user,st=S.settings;S={...seed(),bookings:[],expenses:[],notes:[],docs:[],events:[],tasks:[],cycle:{starts:[],periodLen:5},example:false,loggedIn:true,user:u,settings:st};commit('הכול נמחק. אפשר להתחיל')}else{el.dataset.confirm=1;el.textContent='ללחוץ שוב לאישור';}break;
    case 'resetDemo':{dropFiles(S.docs);const u=S.user;S=seed();migrate();S.loggedIn=true;S.user=u;commit('נתוני הדוגמה נטענו');break;}
  }
});
document.addEventListener('click',()=>setTimeout(()=>{if(!sw.hidden)blobify(sh)},0));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!sw.hidden)closeSheet()});
/* swipe down to dismiss a sheet, starting from its top edge or when scrolled to the top */
{let y0=null,dy=0;
sh.addEventListener('touchstart',e=>{const fromTop=e.touches[0].clientY-sh.getBoundingClientRect().top<64;if(sh.scrollTop>0&&!fromTop)return;y0=e.touches[0].clientY;dy=0;sh.classList.add('dragging')},{passive:true});
sh.addEventListener('touchmove',e=>{if(y0===null)return;dy=Math.max(0,e.touches[0].clientY-y0);sh.style.transform=dy?`translateY(${dy}px)`:''},{passive:true});
sh.addEventListener('touchend',()=>{if(y0===null)return;y0=null;sh.classList.remove('dragging');if(dy>110)closeSheet();else sh.style.transform=''});}
window.addEventListener('cloud-error',()=>toast('לא הצלחתי לסנכרן, אנסה שוב בעוד רגע'));
document.addEventListener('visibilitychange',async()=>{
  if(!Cloud.user)return;
  if(document.hidden){Cloud.flush();return}
  // back on screen: pick up changes made on another device
  if(!S.loggedIn||Cloud.dirty||!sw.hidden)return;
  const before=Cloud.stamp;
  try{const row=await Cloud.load();if(row&&row.updated_at!==before){S=row.data;S.loggedIn=true;migrate();applyFont();render();refreshDocUrls()}}catch(e){}
});
async function boot(){
  if(!Cloud.on){render();return}
  S.loggedIn=false;root.innerHTML='<div class="login"></div>';
  try{
    if(await Cloud.session()){await pull();S.loggedIn=!Lock.has()}
    else S=Object.assign(seed(),{loggedIn:false});
  }catch(e){S.loggedIn=!!Cloud.user&&!Lock.has();toast('אין חיבור כרגע, מוצגים הנתונים השמורים במכשיר')}
  migrate();render();refreshDocUrls();
  if(pushOK()){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
    pushSub().then(sub=>{if(sub&&Cloud.user){ui.pushOn=true;Cloud.savePush(sub.toJSON()).catch(()=>{});if(S.loggedIn&&ui.view==='settings')render()}}).catch(()=>{});
  }
}
boot();
