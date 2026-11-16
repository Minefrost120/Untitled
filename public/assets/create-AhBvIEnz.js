import{L as f,C as v,a as w,m as x}from"./clubs-7SsSOggh.js";import{h as D,Q as k,K as C}from"./state-CxSbi2oE.js";import{NATION_LIST as H}from"./names-Dh4vq0Mk.js";import{c as h,e as a}from"./dom-DLtXQ2KP.js";import"./realSquads-v4Z_bKqE.js";import"./preload-helper-CLcXU_4U.js";import"./sharedSquads-BOOy-0mA.js";const O=["#f6d7bd","#e8b996","#c68a5f","#9a6238","#6b4325","#432a18"],Q=["#1b1512","#3b2a1c","#6b4a2a","#b98f4f","#101010","#8d8d8d"],N="uf27-manager-career-prefs",M={newcomer:{label:"Newcomer",rep:38,desc:"A first step into senior management."},"semi-pro":{label:"Semi-Professional",rep:48,desc:"Experience in the lower leagues."},proven:{label:"Proven Manager",rep:62,desc:"Promotions and cup runs on the CV."},elite:{label:"Elite Manager",rep:76,desc:"A serial winner with a global reputation."}},E={balanced:{label:"Balanced",style:"balanced",preset:"control"},gegenpress:{label:"Gegenpressing",style:"high-press",preset:"gegenpress"},"tiki-taka":{label:"Tiki-Taka",style:"possession",preset:"tiki-taka"},"wing-play":{label:"Wing Play",style:"direct",preset:"wing-play"},counter:{label:"Counter Attack",style:"counter",preset:"counter"},"park-the-bus":{label:"Park the Bus",style:"defensive",preset:"park-the-bus"}},T={possession:"Possession",direct:"Direct","high-press":"High Press",counter:"Counter",balanced:"Balanced"},A={development:"Youth Development",tactical:"Tactical Detail",discipline:"Discipline","man-management":"Man Management"},R=[{id:"custom",name:"Start from scratch",first:"Alex",last:"Morgan",nat:"England",gender:"male",reputation:48,preferredFormation:"4-2-3-1",philosophy:"balanced",playingStyle:"possession",coachingPhilosophy:"development",experience:"semi-pro",appearance:{skin:2,hair:"short",hairColor:0,face:"angular",build:"average",outfit:"suit-black",accessory:"none",facialHair:"none",eyebrows:"natural"}},{id:"guardiola",name:"Pep Guardiola",first:"Pep",last:"Guardiola",nat:"Spain",gender:"male",reputation:82,preferredFormation:"4-3-3",philosophy:"tiki-taka",playingStyle:"possession",coachingPhilosophy:"tactical",experience:"elite",appearance:{skin:4,hair:"bald",hairColor:0,face:"narrow",build:"slim",outfit:"suit-navy",accessory:"none",facialHair:"stubble",eyebrows:"straight"}},{id:"ancelotti",name:"Carlo Ancelotti",first:"Carlo",last:"Ancelotti",nat:"Italy",gender:"male",reputation:84,preferredFormation:"4-2-3-1",philosophy:"balanced",playingStyle:"balanced",coachingPhilosophy:"man-management",experience:"elite",appearance:{skin:1,hair:"short",hairColor:5,face:"round",build:"average",outfit:"suit-black",accessory:"watch",facialHair:"none",eyebrows:"natural"}},{id:"klopp",name:"Jürgen Klopp",first:"Jürgen",last:"Klopp",nat:"Germany",gender:"male",reputation:80,preferredFormation:"4-3-3",philosophy:"gegenpress",playingStyle:"high-press",coachingPhilosophy:"man-management",experience:"elite",appearance:{skin:1,hair:"short",hairColor:2,face:"round",build:"athletic",outfit:"tracksuit",accessory:"watch",facialHair:"stubble",eyebrows:"thick"}},{id:"mourinho",name:"José Mourinho",first:"José",last:"Mourinho",nat:"Portugal",gender:"male",reputation:79,preferredFormation:"4-2-3-1",philosophy:"counter",playingStyle:"counter",coachingPhilosophy:"discipline",experience:"elite",appearance:{skin:1,hair:"short",hairColor:5,face:"angular",build:"slim",outfit:"coat",accessory:"none",facialHair:"none",eyebrows:"straight"}},{id:"arteta",name:"Mikel Arteta",first:"Mikel",last:"Arteta",nat:"Spain",gender:"male",reputation:72,preferredFormation:"4-3-3",philosophy:"tiki-taka",playingStyle:"possession",coachingPhilosophy:"tactical",experience:"proven",appearance:{skin:1,hair:"short",hairColor:0,face:"narrow",build:"slim",outfit:"suit-black",accessory:"none",facialHair:"stubble",eyebrows:"natural"}},{id:"tuchel",name:"Thomas Tuchel",first:"Thomas",last:"Tuchel",nat:"Germany",gender:"male",reputation:74,preferredFormation:"3-4-3",philosophy:"gegenpress",playingStyle:"high-press",coachingPhilosophy:"tactical",experience:"proven",appearance:{skin:1,hair:"buzz",hairColor:2,face:"angular",build:"average",outfit:"coat",accessory:"glasses",facialHair:"stubble",eyebrows:"thick"}},{id:"simeone",name:"Diego Simeone",first:"Diego",last:"Simeone",nat:"Argentina",gender:"male",reputation:76,preferredFormation:"4-4-2",philosophy:"counter",playingStyle:"counter",coachingPhilosophy:"discipline",experience:"proven",appearance:{skin:2,hair:"short",hairColor:0,face:"square",build:"athletic",outfit:"suit-black",accessory:"watch",facialHair:"none",eyebrows:"straight"}},{id:"hayes",name:"Emma Hayes",first:"Emma",last:"Hayes",nat:"England",gender:"female",reputation:70,preferredFormation:"4-2-3-1",philosophy:"balanced",playingStyle:"high-press",coachingPhilosophy:"man-management",experience:"proven",appearance:{skin:1,hair:"long",hairColor:3,face:"round",build:"average",outfit:"club-polo",accessory:"none",facialHair:"none",eyebrows:"arched"}},{id:"wiegman",name:"Sarina Wiegman",first:"Sarina",last:"Wiegman",nat:"Holland",gender:"female",reputation:72,preferredFormation:"4-3-3",philosophy:"wing-play",playingStyle:"direct",coachingPhilosophy:"tactical",experience:"proven",appearance:{skin:1,hair:"short",hairColor:3,face:"round",build:"average",outfit:"suit-navy",accessory:"none",facialHair:"none",eyebrows:"natural"}}];function V(){try{return{difficulty:"professional",matchLength:180,autoSave:!0,unexpectedEvents:!0,eventFrequency:"normal",eventImpact:"normal",...JSON.parse(localStorage.getItem(N)||"{}")}}catch{return{difficulty:"professional",matchLength:180,autoSave:!0,unexpectedEvents:!0,eventFrequency:"normal",eventImpact:"normal"}}}function X(t){try{localStorage.setItem(N,JSON.stringify(t))}catch{}}const I={"suit-black":{label:"Black suit",shirt:"#0e1116",accent:"#e9eef4",tie:"#1d232c"},"suit-navy":{label:"Navy suit",shirt:"#131d33",accent:"#dbe4f2",tie:"#2a3f66"},"polo-club":{label:"Club polo",shirt:"#123a2a",accent:"#eaf6ef",tie:"#1f6b4d"},tracksuit:{label:"Tracksuit",shirt:"#1c2430",accent:"#c6ff45",tie:"#2c3a4c"},coat:{label:"Touchline coat",shirt:"#23282e",accent:"#d5dde6",tie:"#333c46"}},S={tactician:{label:"Tactician",desc:"Tactical flexibility earns respect in the dressing room.",bonus:"Tactics"},motivator:{label:"Motivator",desc:"Players run through walls for you. Morale recovers faster.",bonus:"Morale"},disciplinarian:{label:"Disciplinarian",desc:"Standards are non-negotiable. Cards are fewer, respect is earned.",bonus:"Discipline"},wheelerDealer:{label:"Wheeler Dealer",desc:"A gift for the market. Better prices on transfers.",bonus:"Transfers"},youthAdvocate:{label:"Youth Advocate",desc:"Academy prospects develop faster under your watch.",bonus:"Youth"}};function P(t,n=210){const s=t.appearance||{},i=O[s.skin??2],c=Q[s.hairColor??0],e=I[s.outfit]||I["suit-black"],r=s.build==="slim"?[42,86]:s.build==="athletic"?[52,104]:[48,96],[d]=r,u=s.hair||"short",p=t.gender==="female",b=p||u==="long",g=s.eyebrows||"natural",$=g==="thick"?4:g==="thin"?2:3,o=g==="arched"?94:96,l=s.facialHair||"none";return`
  <svg viewBox="0 0 200 260" width="${n}" height="${n*1.3}" style="overflow:visible">
    <defs>
      <linearGradient id="mgrBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1b3346"/><stop offset="1" stop-color="#0b141d"/>
      </linearGradient>
      <linearGradient id="mgrSuit" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${e.shirt}"/><stop offset="1" stop-color="${e.shirt}ee"/>
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="248" rx="62" ry="10" fill="#000" opacity=".35"/>
    <!-- torso -->
    <path d="M${100-d} 258 L${100-d+4} 150 Q100 128 ${100+d-4} 150 L${100+d} 258 Z" fill="url(#mgrSuit)"/>
    <!-- shirt / collar -->
    <path d="M84 146 L100 176 L116 146 Q100 136 84 146 Z" fill="${e.accent}" opacity=".92"/>
    <path d="M100 176 L94 200 L100 246 L106 200 Z" fill="${e.tie}" opacity=".85"/>
    <!-- lapels -->
    <path d="M84 146 L100 176 L86 214 L74 158 Z" fill="#000" opacity=".22"/>
    <path d="M116 146 L100 176 L114 214 L126 158 Z" fill="#000" opacity=".22"/>
    <!-- neck -->
    <rect x="91" y="126" width="18" height="26" rx="7" fill="${i}"/>
    <!-- head -->
    <ellipse cx="100" cy="102" rx="${p?26:28}" ry="32" fill="${i}"/>
    <!-- ears -->
    <ellipse cx="72" cy="104" rx="5" ry="7" fill="${i}"/>
    <ellipse cx="128" cy="104" rx="5" ry="7" fill="${i}"/>
    <!-- hair -->
    ${u==="bald"?"":b?`<path d="M70 100 Q68 62 100 60 Q132 62 130 100 L130 140 Q122 120 118 96 Q100 84 82 96 Q78 120 70 140 Z" fill="${c}"/>`:u==="buzz"?`<path d="M72 96 Q74 64 100 62 Q126 64 128 96 Q118 78 100 78 Q82 78 72 96 Z" fill="${c}"/>`:u==="curly"?`<path d="M68 100 Q64 60 100 58 Q136 60 132 100 Q124 80 112 82 Q100 70 88 82 Q76 80 68 100 Z" fill="${c}"/><circle cx="76" cy="80" r="9" fill="${c}"/><circle cx="124" cy="80" r="9" fill="${c}"/>`:u==="fade"?`<path d="M74 92 Q76 62 100 60 Q124 62 126 92 Q116 74 100 74 Q84 74 74 92 Z" fill="${c}"/>`:`<path d="M70 98 Q70 58 100 56 Q130 58 130 98 Q122 76 100 76 Q78 76 70 98 Z" fill="${c}"/>`}
    <!-- brows + eyes -->
    <rect x="84" y="${o}" width="12" height="${$}" rx="1.5" fill="#2a2019" opacity=".82"/>
    <rect x="104" y="${o}" width="12" height="${$}" rx="1.5" fill="#2a2019" opacity=".82"/>
    <circle cx="90" cy="104" r="2.6" fill="#1c2530"/>
    <circle cx="110" cy="104" r="2.6" fill="#1c2530"/>
    <!-- nose + mouth -->
    <path d="M100 106 L97 116 L103 116" stroke="#00000033" stroke-width="2" fill="none" stroke-linecap="round"/>
    ${l==="moustache"?`<path d="M88 120 Q100 116 112 120 Q108 124 100 122 Q92 124 88 120 Z" fill="${c}" opacity=".92"/>`:""}
    ${l==="goatee"?`<path d="M92 122 Q100 118 108 122 L107 136 Q100 141 93 136 Z" fill="${c}" opacity=".92"/>`:""}
    ${l==="beard"||l==="stubble"?`<path d="M78 108 Q80 134 100 140 Q120 134 122 108 Q116 130 100 132 Q84 130 78 108 Z" fill="${c}" opacity="${l==="beard"?".9":".38"}"/>`:""}
    <path d="M92 124 Q100 ${128+(t.personality==="motivator"?2:0)} 108 124" stroke="#7b3a34" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    ${s.accessory==="glasses"?'<g stroke="#c9d6e2" stroke-width="2" fill="none" opacity=".9"><rect x="80" y="98" width="18" height="12" rx="3"/><rect x="102" y="98" width="18" height="12" rx="3"/><path d="M98 104 H102"/></g>':""}
    ${s.accessory==="scarf"?'<path d="M78 150 Q100 168 122 150 L124 162 Q100 180 76 162 Z" fill="#c6ff45" opacity=".85"/>':""}
    ${s.accessory==="watch"?'<rect x="128" y="196" width="9" height="5" rx="2" fill="#d8dee6"/>':""}
  </svg>`}function m(t,n,s,i,c=""){return`<button class="title-card" data-act="${t}" ${c}>
    <span class="tag">${n}</span>
    <h3>${s}</h3>
    <p>${i}</p>
  </button>`}function ee(t,{imported:n=null,bundled:s=null}={}){const i=t[0];return`
  <div class="title-screen title-screen-career">
    <div class="bg-lines"></div>
    <div class="title-inner">
      <button class="btn sm title-back" data-act="exit-app">&larr; BACK</button>
      <div class="title-headline">
        <div>
          <p class="brand"><small>Manager Career</small>FC <em>27</em><br>MANAGER</p>
          <p class="sub">Take charge of a club, build a squad, and live every matchday. Full 3D football, a complete transfer market, academies, contracts and a living ${f.length}-league, ${Object.keys(v).length}-club football world.</p>
        </div>
        <div class="title-season-stamp"><small>Season</small><b>26/27</b><span>Manager Career</span></div>
      </div>

      ${i?`<div class="continue-hero">
        <div class="continue-badge">${h(i.clubId)}</div>
        <div class="continue-main">
          <span class="tag">Last played · ${i.lastPlayed||new Date(i.updatedAt).toLocaleDateString()}</span>
          <h2>Continue your career</h2>
          <div class="continue-sub">${a(i.club)} · ${a(i.manager)}</div>
          <div class="continue-meta">
            <span><b>${i.season}/${String(i.season+1).slice(2)}</b> Season</span>
            <span><b>${i.position?`${i.position}${L(i.position)}`:"—"}</b> ${a(i.league||"League")}</span>
            <span><b>${i.points??"—"}</b> Points</span>
            <span><b>${a(i.date)}</b> Current date</span>
          </div>
          <div class="continue-record">${i.record?`${i.record.played} played · ${i.record.won} won · ${i.record.drawn} drawn · ${i.record.lost} lost`:"No matches played"}</div>
        </div>
        <div class="continue-actions">
          <button class="ea-btn primary" data-act="continue">Continue Career</button>
          <button class="ea-btn ghost" data-act="load-screen">All saves</button>
        </div>
      </div>`:`<div class="continue-hero empty">
        <div class="continue-main">
          <span class="tag">No saves yet</span>
          <h2>Start your first career</h2>
          <div class="continue-sub">Create a manager, choose a club and take on a full season.</div>
          <div class="continue-actions"><button class="ea-btn primary" data-act="new-career">New Career</button></div>
        </div>
      </div>`}

      <div class="title-grid title-grid-career">
        <div style="display:flex;flex-direction:column;gap:10px">
          ${m("new-career","Start here","New Career","Create your manager, set a philosophy and pick a club.")}
          ${m("load-screen","Saved games","Load Career",t.length?`${t.length} independent career${t.length>1?"s":""} on this device.`:"No careers saved yet.")}
          ${m("career-history","Your record","Career History","Every save, season, club and achievement on this device.")}
        </div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${m("manager-live-title","Scenarios","Manager Live","Six one-season challenges with their own conditions, objectives and rewards.")}
          ${m("career-settings","Preferences","Career Settings","Defaults for new careers and save management.")}
          ${m("quick-match","3D engine","Quick Match","Jump straight into a single 11 v 11 match with full controls.")}
          <div class="title-card squad-card" data-act="import-squads" role="button" tabindex="0">
            <span class="tag">${n?"Loaded":s?"Included":"Optional"}</span>
            <h3 style="font-size:14px">Squad pool</h3>
            <p>${n?`${n.players.toLocaleString()} real players across ${n.clubs} clubs. New careers use them. Tap to replace.`:s?`${s.players.toLocaleString()} real players across ${s.clubs} clubs — men's football only. Tap to replace with a newer export.`:"Load an FC player export (CSV) to play with real squads instead of generated ones."}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`}function L(t){const n=t%100;return n>=11&&n<=13?"th":["th","st","nd","rd"][t%10]||"th"}function ae(t){const n=t.reduce((e,r)=>e+(r.seasons||1),0),s=t.reduce((e,r)=>e+(r.trophies||0),0),i=t.reduce((e,r)=>e+(r.record?.played||0),0),c=t.reduce((e,r)=>e+(r.record?.won||0),0);return`
  <div class="title-screen">
    <div class="bg-lines"></div>
    <div class="title-inner">
      <button class="btn sm title-back" data-act="to-title">&larr; BACK</button>
      <p class="brand" style="font-size:44px"><small>Records</small>CAREER HISTORY</p>
      <p class="sub">Every career on this device is independent. Open a save from here or continue its story from the main menu.</p>
      <div class="history-summary">
        <div><b>${t.length}</b><span>Careers</span></div>
        <div><b>${n}</b><span>Seasons</span></div>
        <div><b>${i}</b><span>Matches</span></div>
        <div><b>${i?Math.round(c/i*100):0}%</b><span>Win rate</span></div>
        <div><b>${s}</b><span>Trophies</span></div>
      </div>
      <div class="history-list">
        ${t.length?t.map(e=>`<button class="history-row" data-act="load-slot" data-slot="${a(e.id)}">
          ${h(e.clubId)}
          <div class="history-club"><b>${a(e.club)}</b><span>${a(e.manager)} · ${a(e.league||"")}</span></div>
          <div class="history-stat"><b>${e.season}/${String(e.season+1).slice(2)}</b><span>Season</span></div>
          <div class="history-stat"><b>${e.position?`${e.position}${L(e.position)}`:"—"}</b><span>Position</span></div>
          <div class="history-stat"><b>${e.record?`${e.record.won}W ${e.record.drawn}D ${e.record.lost}L`:"—"}</b><span>Record</span></div>
          <div class="history-stat"><b>${e.trophies||0}</b><span>Trophies</span></div>
          <div class="history-date">${new Date(e.updatedAt).toLocaleDateString()}<span>Last played</span></div>
        </button>`).join(""):'<div class="card"><p class="dim small">No careers to show yet. Create one from the main menu.</p></div>'}
      </div>
      <div class="row" style="gap:10px;margin-top:14px"><button class="ea-btn primary" data-act="new-career">New Career</button><button class="ea-btn ghost" data-act="to-title">Back</button></div>
    </div>
  </div>`}function te(t,n){const s=(c,e,r,d,u)=>`<div class="pref-row">
    <div><b>${c}</b>${d?`<span>${d}</span>`:""}</div>
    <button class="ea-btn ghost sm" data-act="pref-cycle" data-key="${r}">${a(e)}</button>
  </div>`,i=(c,e,r,d)=>`<div class="pref-row">
    <div><b>${c}</b>${d?`<span>${d}</span>`:""}</div>
    <button class="set-toggle ${e?"on":""}" data-act="pref-toggle" data-key="${r}">${e?"ON":"OFF"}</button>
  </div>`;return`
  <div class="title-screen">
    <div class="bg-lines"></div>
    <div class="title-inner">
      <button class="btn sm title-back" data-act="to-title">&larr; BACK</button>
      <p class="brand" style="font-size:44px"><small>Preferences</small>CAREER SETTINGS</p>
      <p class="sub">These defaults apply when you create a new career. Existing saves keep their own settings and are never overwritten from here.</p>
      <div class="prefs-grid">
        <div class="prefs-panel">
          <div class="cr-label">New career defaults</div>
          ${s("Difficulty",t.difficulty,"difficulty","Match simulation difficulty")}
          ${s("Match length",`${Math.round(t.matchLength/60)} min halves`,"matchLength","Length of playable 3D matches")}
          ${i("Auto-save",t.autoSave,"autoSave","Save after matches and key actions")}
          ${i("Unexpected events",t.unexpectedEvents,"unexpectedEvents","Decision events during the season")}
          ${s("Event frequency",t.eventFrequency,"eventFrequency","How often decisions appear")}
          ${s("Event impact",t.eventImpact,"eventImpact","How strongly decisions affect the club")}
        </div>
        <div class="prefs-panel">
          <div class="cr-label">Saved careers</div>
          <div class="kv"><span>Careers on device</span><b>${n.length}</b></div>
          <div class="kv"><span>Latest save</span><b>${n[0]?a(n[0].club):"—"}</b></div>
          <div class="kv"><span>Latest date</span><b>${n[0]?a(n[0].date):"—"}</b></div>
          <p class="note">Deleting a save is permanent. Export a career from its in-game settings before deleting it if you want a backup.</p>
          <button class="ea-btn ghost wide" data-act="load-screen">Manage saves</button>
          <button class="ea-btn primary wide" data-act="new-career">Create new career</button>
        </div>
      </div>
    </div>
  </div>`}function se(t,n){return`
  <div class="title-screen manager-live-screen">
    <div class="bg-lines"></div>
    <div class="title-inner">
      <button class="btn sm title-back" data-act="to-title">&larr; BACK</button>
      <div class="ml-hero">
        <div><p class="brand" style="font-size:44px"><small>Challenges</small>MANAGER LIVE</p>
        <p class="sub">One-season scenarios with their own starting conditions, objectives, restrictions and rewards. Every challenge runs inside the normal career database.</p></div>
        <div class="ml-live-badge"><i></i> LIVE</div>
      </div>
      <div class="ml-grid">
        ${t.map(s=>`<article class="ml-card" style="--ml:${s.colour||"#41d6ff"}">
          <div class="ml-card-top"><span>${a(s.category)}</span><b>${a(s.difficulty)}</b></div>
          <h3>${a(s.title)}</h3>
          <p>${a(s.subtitle)}</p>
          <div class="ml-club">${h(s.clubId,"tiny")} ${a(v[s.clubId]?.name||"")}</div>
          <div class="ml-conditions">${s.conditions.map(i=>`<span>${a(i)}</span>`).join("")}</div>
          <button class="ea-btn primary wide" data-act="challenge-begin" data-challenge="${a(s.id)}">Start challenge</button>
        </article>`).join("")}
      </div>
      <p class="note" style="margin-top:16px">Starting a Manager Live challenge opens the normal manager creator with its club preselected. ${n.length?"Your existing careers are untouched.":""}</p>
    </div>
  </div>`}function ie(t,{mode:n="load"}={}){return`
    <div class="title-screen">
      <div class="bg-lines"></div>
      <div class="title-inner">
        <p class="brand" style="font-size:44px"><small>Select</small>LOAD CAREER</p>
        <div style="height:18px"></div>
        ${t.length?t.map(i=>`
      <div class="save-slot" data-act="load-slot" data-slot="${a(i.id)}">
        ${h(i.clubId)}
        <div class="t">
          <b>${a(i.club)}</b>
          <span>${a(i.manager)} · ${i.season}/${String(i.season+1).slice(2)} · ${a(i.date)} · ${i.position?`${i.position}${L(i.position)}`:"—"} · Rep ${i.reputation}</span>
        </div>
        <div class="small dim">${i.lastPlayed||new Date(i.updatedAt).toLocaleDateString()}</div>
        <button class="btn sm danger" data-act="delete-slot" data-slot="${a(i.id)}">Delete</button>
      </div>`).join(""):'<div class="card"><p class="dim small">No saved careers yet.</p></div>'}
        <div style="height:14px"></div>
        <button class="btn" data-act="to-title">← Back</button>
      </div>
    </div>`}const j={skin:["Light","Fair","Olive","Tan","Brown","Deep"],hairColor:["Black","Dark brown","Brown","Blonde","Jet","Grey"],hair:["Short","Buzz","Curly","Long","Fade","Bald"],face:["Angular","Round","Square","Narrow"],facialHair:["None","Stubble","Beard","Goatee","Moustache"],eyebrows:["Natural","Arched","Straight","Thick","Thin"],build:["Slim","Average","Athletic"],outfit:["Black suit","Navy suit","Club polo","Tracksuit","Touchline coat"],accessory:["None","Glasses","Watch","Scarf"]},B={hair:["short","buzz","curly","long","fade","bald"],face:["angular","round","square","narrow"],facialHair:["none","stubble","beard","goatee","moustache"],eyebrows:["natural","arched","straight","thick","thin"],build:["slim","average","athletic"],outfit:["suit-black","suit-navy","polo-club","tracksuit","coat"],accessory:["none","glasses","watch","scarf"]};function U(t,n){const s=t.appearance||{},i=j[n]||[],c=s[n];if(typeof c=="number")return i[c]||i[0]||"—";const e=(B[n]||[]).indexOf(c);return e>=0?i[e]:i[0]||"—"}function le(t){const n=t.step,s=t.manager,i=["Manager","Club","Settings","Confirm"];t.settings=t.settings||{unexpectedEvents:!0,eventFrequency:"normal",eventImpact:"normal",financialTakeover:!1,unlimitedMoney:!1};let c="";if(n===0)c=`
      <div class="cr-split">
        <div class="cr-portrait">
          <div class="figure">${P(s,190)}</div>
          <div class="nm">${a(s.first||"First")} ${a(s.last||"Last")}</div>
          <div class="meta">${a(s.nat)} · ${a(S[s.personality].label)}</div>
          <div class="seg2" style="margin-top:12px">
            <button data-act="c-gender" data-val="male" class="${s.gender==="male"?"on":""}">Male</button>
            <button data-act="c-gender" data-val="female" class="${s.gender==="female"?"on":""}">Female</button>
          </div>
        </div>
        <div class="cr-form">
          <div class="grid g2">
            <div class="field"><label class="lbl">First name</label><input class="inp" data-change="first" value="${a(s.first)}" placeholder="Alex"/></div>
            <div class="field"><label class="lbl">Surname</label><input class="inp" data-change="last" value="${a(s.last)}" placeholder="Morgan"/></div>
          </div>
          <div class="grid g2">
            <div class="field"><label class="lbl">Nationality</label>
              <select class="sel" data-change="nat-select">
                ${H.map(e=>`<option value="${a(e)}" ${s.nat===e?"selected":""}>${a(e)}</option>`).join("")}
              </select>
            </div>
            <div class="field"><label class="lbl">Date of birth</label>
              <input class="inp" type="date" data-change="dob" value="${G(s.dob)}" min="1955-01-01" max="1998-12-31"/>
            </div>
          </div>

          <div class="cr-label">Start from a real manager</div>
          <select class="sel" data-change="manager-template">
            ${R.map(e=>`<option value="${e.id}" ${(t.templateId||"custom")===e.id?"selected":""}>${a(e.name)}</option>`).join("")}
          </select>
          <p class="note" style="margin-top:6px">Real-manager profiles fill in the identity below. You can edit every detail afterwards.</p>

          <div class="cr-label">Managerial identity</div>
          <div class="grid g2">
            <div class="field"><label class="lbl">Experience</label>
              <select class="sel" data-change="experience">
                ${Object.entries(M).map(([e,r])=>`<option value="${e}" ${s.experience===e?"selected":""}>${a(r.label)}</option>`).join("")}
              </select>
            </div>
            <div class="field"><label class="lbl">Reputation</label>
              <select class="sel" data-change="reputation">
                ${[38,46,48,54,62,70,78,86].map(e=>`<option value="${e}" ${Number(s.reputation)===e?"selected":""}>${e} · ${e>=76?"World class":e>=62?"Established":e>=48?"Respected":"Unknown"}</option>`).join("")}
              </select>
            </div>
            <div class="field"><label class="lbl">Preferred formation</label>
              <select class="sel" data-change="preferredFormation">
                ${D.map(e=>`<option value="${e.id}" ${s.preferredFormation===e.id?"selected":""}>${a(e.name)}</option>`).join("")}
              </select>
            </div>
            <div class="field"><label class="lbl">Tactical philosophy</label>
              <select class="sel" data-change="philosophy">
                ${Object.entries(E).map(([e,r])=>`<option value="${e}" ${s.philosophy===e?"selected":""}>${a(r.label)}</option>`).join("")}
              </select>
            </div>
            <div class="field"><label class="lbl">Preferred playing style</label>
              <select class="sel" data-change="playingStyle">
                ${Object.entries(T).map(([e,r])=>`<option value="${e}" ${s.playingStyle===e?"selected":""}>${a(r)}</option>`).join("")}
              </select>
            </div>
            <div class="field"><label class="lbl">Coaching philosophy</label>
              <select class="sel" data-change="coachingPhilosophy">
                ${Object.entries(A).map(([e,r])=>`<option value="${e}" ${s.coachingPhilosophy===e?"selected":""}>${a(r)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="cr-label">Appearance</div>
          <div class="cr-look">
            ${["skin","hair","hairColor","face","facialHair","eyebrows","build","outfit","accessory"].map(e=>`
              <button class="cr-look-row" data-act="c-aesthetic" data-kind="${e}">
                <span class="k">${{hairColor:"Hair colour",facialHair:"Facial hair"}[e]||e.charAt(0).toUpperCase()+e.slice(1)}</span>
                <span class="v">${a(U(s,e))}</span>
                <span class="go">▸</span>
              </button>`).join("")}
          </div>

          <div class="cr-label">Personality</div>
          <div class="cr-persona">
            ${Object.entries(S).map(([e,r])=>`
              <button class="cr-persona-card ${s.personality===e?"on":""}" data-act="c-personality" data-val="${e}">
                <b>${r.label}</b>
                <span>${a(r.desc)}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`;else if(n===1){const e=w[t.leagueId],r=e.clubIds.map(l=>v[l]).sort((l,y)=>y.reputation-l.reputation),d=String(t.clubSearch||"").trim().toLowerCase(),u=r.filter(l=>!d||l.name.toLowerCase().includes(d)||l.short.toLowerCase().includes(d)||l.nation.toLowerCase().includes(d)),p=t.clubId?v[t.clubId]:null,b=p?w[p.leagueId]:null,g=[...new Set(f.map(l=>l.nation))].sort(),$=f.filter(l=>l.nation===(t.clubCountry||e.nation)),o=t.customClub;c=`
      <div class="cr-custom">
        <div class="row spread">
          <div><div class="cr-label" style="margin:0">Create your club</div><span class="tiny dim">Enter an existing league with your own badge, kit and stadium</span></div>
          <button class="ea-btn ${t.showCustom?"primary":"ghost"}" data-act="c-custom-toggle">${t.showCustom?"Close":"Create club"}</button>
        </div>
        ${t.showCustom?`<div class="cr-custom-form">
          <div class="grid g2">
            <div class="field"><label class="lbl">Club name</label><input class="inp" id="ccName" value="${a(o?.name||"")}" placeholder="Harbour City"/></div>
            <div class="field"><label class="lbl">Short name / badge text</label><input class="inp" id="ccShort" maxlength="6" value="${a(o?.short||"")}" placeholder="HAR"/></div>
            <div class="field"><label class="lbl">Nickname</label><input class="inp" id="ccNickname" value="${a(o?.nickname||"")}" placeholder="The Dockers"/></div>
            <div class="field"><label class="lbl">Rival club</label>
              <select class="sel" id="ccRival">
                <option value="">No rival</option>
                ${f.flatMap(l=>l.clubIds.map(y=>v[y])).filter(Boolean).sort((l,y)=>l.name.localeCompare(y.name)).map(l=>`<option value="${a(l.id)}" ${o?.rivalId===l.id?"selected":""}>${a(l.name)}</option>`).join("")}
              </select>
            </div>
          </div>
          <div class="grid g2">
            <div class="field"><label class="lbl">Stadium</label><input class="inp" id="ccStadium" value="${a(o?.stadium||"")}" placeholder="Docklands Park"/></div>
            <div class="field"><label class="lbl">Capacity</label><input class="inp" id="ccCapacity" type="number" step="1000" value="${o?.capacity||28e3}"/></div>
            <div class="field"><label class="lbl">Reputation (48–86)</label><input class="inp" id="ccRep" type="number" min="48" max="86" value="${o?.reputation||66}"/></div>
            <div class="field"><label class="lbl">Replacement club</label>
              <select class="sel" id="ccReplace">
                ${r.map(l=>`<option value="${a(l.id)}" ${o?.replacementClubId===l.id?"selected":""}>${a(l.name)} · rep ${l.reputation}</option>`).join("")}
              </select>
            </div>
          </div>
          <div class="cr-label" style="margin-top:10px">Badge &amp; kits</div>
          <div class="grid g3">
            <div class="field"><label class="lbl">Primary / home</label>
              <div class="cr-swatches">${k.map(l=>`<button class="cr-swatch ${o?.primary===l?"on":""}" data-act="c-custom-colour" data-key="primary" data-value="${l}" style="background:${l}"></button>`).join("")}</div>
            </div>
            <div class="field"><label class="lbl">Secondary / trim</label>
              <div class="cr-swatches">${k.map(l=>`<button class="cr-swatch ${(o?.secondary||"#ffffff")===l?"on":""}" data-act="c-custom-colour" data-key="secondary" data-value="${l}" style="background:${l}"></button>`).join("")}</div>
            </div>
            <div class="field"><label class="lbl">Goalkeeper kit</label>
              <div class="cr-swatches">${k.map(l=>`<button class="cr-swatch ${(o?.gk||"#8ef2c0")===l?"on":""}" data-act="c-custom-colour" data-key="gk" data-value="${l}" style="background:${l}"></button>`).join("")}</div>
            </div>
          </div>
          <div class="grid g2">
            <div class="field"><label class="lbl">Stadium colour</label>
              <div class="cr-swatches">${k.map(l=>`<button class="cr-swatch ${(o?.stadiumColor||"#22313f")===l?"on":""}" data-act="c-custom-colour" data-key="stadiumColor" data-value="${l}" style="background:${l}"></button>`).join("")}</div>
            </div>
            <div class="field"><label class="lbl">Starting league</label><div class="small" style="padding-top:10px">${a(w[t.leagueId]?.name||"")}</div></div>
          </div>
          <div class="row" style="gap:10px;margin-top:8px">
            <button class="ea-btn primary" data-act="c-custom-create">Use this club</button>
            ${o?`<span class="pill w">${a(o.name)} selected</span>`:'<span class="tiny dim">The replacement club drops out of the selected league and your club takes its place.</span>'}
          </div>
        </div>`:""}
        ${o?`<div class="cr-confirm" style="margin-bottom:12px"><div class="cr-card"><div class="row" style="gap:12px">
          <div class="crest" style="background:${o.primary};color:${o.secondary};width:44px;height:44px;display:grid;place-items:center;font-family:var(--display);border-radius:6px">${a(o.short)}</div>
          <div><div class="nm">${a(o.name)}</div><div class="small dim">${a(o.stadium)} · ${o.capacity.toLocaleString()} · rep ${o.reputation}</div></div>
        </div></div></div>`:""}
      ${p?`<div class="club-preview">
        ${h(p.id)}
        <div class="club-preview-main">
          <span class="tag">Selected club</span>
          <h3>${a(p.name)}</h3>
          <p>${a(b?.name)} · ${a(p.nation)} · ${a(p.stadium)} (${p.capacity.toLocaleString()})</p>
          <div class="club-preview-grid">
            <div><b>${p.reputation}</b><span>Reputation</span></div>
            <div><b>${Math.max(60,Math.min(90,Math.round(p.reputation*.92)))}</b><span>Projected squad</span></div>
            <div><b>${x(C(p,p.leagueId))}</b><span>Transfer budget</span></div>
            <div><b>${x(Math.round(C(p,p.leagueId)*.18))}/wk</b><span>Wage budget (est.)</span></div>
          </div>
          <div class="club-preview-foot"><span>Board: <b>${F(p,b)}</b></span><span>Current manager: <b>You</b></span></div>
        </div>
      </div>`:""}
      <div class="club-filters">
        <select class="sel" data-change="club-country">
          ${g.map(l=>`<option value="${a(l)}" ${(t.clubCountry||e.nation)===l?"selected":""}>${a(l)}</option>`).join("")}
        </select>
        <input class="inp" data-input="club-search" value="${a(t.clubSearch||"")}" placeholder="Search clubs, countries or codes"/>
      </div>
      <div class="cr-leagues">
        ${$.map(l=>`<button class="chip ${t.leagueId===l.id?"on":""}" data-act="c-league" data-league="${l.id}">${a(l.short)}</button>`).join("")}
      </div>
      <div class="cr-league-name">${a(e.name)} · ${u.length} club${u.length===1?"":"s"}${d?` matching “${a(t.clubSearch)}”`:""}</div>
      <div class="cr-clubs">
        ${u.length?u.map(l=>`
          <button class="cr-club ${t.clubId===l.id?"on":""}" data-act="c-club" data-club="${l.id}">
            ${h(l.id)}
            <span class="t">
              <b>${a(l.name)}</b>
              <span>${a(l.nation)} · Rep ${l.reputation} · ${l.capacity.toLocaleString()}</span>
            </span>
          </button>`).join(""):'<p class="dim small">No clubs match that search in this league.</p>'}
      </div>`}else if(n===2){const e=t.settings,r=(d,u,p,b)=>`<button class="cr-setting ${p?"on":""}" data-act="c-setting" data-key="${d}">
      <span><b>${u}</b>${b?`<i>${b}</i>`:""}</span><em>${p?"ON":"OFF"}</em></button>`;c=`
      <div class="cr-settings">
        <div class="cr-card">
          <div class="cr-label">Career</div>
          ${r("unexpectedEvents","Unexpected Events",e.unexpectedEvents,"Decision points during the season")}
          <button class="cr-setting" data-act="c-setting" data-key="eventFrequency"><span><b>Event frequency</b><i>How often decisions appear</i></span><em>${e.eventFrequency.toUpperCase()}</em></button>
          <button class="cr-setting" data-act="c-setting" data-key="eventImpact"><span><b>Event impact</b><i>How strongly choices affect the club</i></span><em>${e.eventImpact.toUpperCase()}</em></button>
        </div>
        <div class="cr-card">
          <div class="cr-label">Deeper Simulation</div>
          <p class="tiny dim" style="margin:0 0 8px">Track up to five additional leagues across seasons (tables, champions, top scorers). Your own league is always tracked.</p>
          <div class="cr-deeper">
            ${f.filter(d=>d.id!==t.leagueId).map(d=>`<button class="chip ${(e.deeperLeagues||[]).includes(d.id)?"on":""}" data-act="c-deeper" data-league="${d.id}">${a(d.short)}</button>`).join("")}
          </div>
          <span class="tiny dim">${(e.deeperLeagues||[]).length}/5 selected</span>
        </div>
        <div class="cr-card">
          <div class="cr-label">Finances</div>
          ${r("financialTakeover","Financial takeover",e.financialTakeover,"One-off £120M investment at the start")}
          ${r("unlimitedMoney","Unlimited Money (CUSTOM)",e.unlimitedMoney,"Custom option: removes transfer and wage limits")}
          <p class="note" style="margin-top:8px">Unexpected Events, financial takeover and Unlimited Money are game options. Unlimited Money is a custom addition, not an FC 26 setting.</p>
        </div>
      </div>`}else{const e=v[t.clubId],r=w[e.leagueId];c=`
      ${t.challenge?`<div class="challenge-banner"><span>Manager Live</span><b>${a(t.challengeTitle||"Challenge")}</b><em>Objectives and conditions will be applied when the career starts.</em></div>`:""}
      <div class="cr-confirm">
        <div class="cr-card">
          <div class="cr-label">Your manager</div>
          <div class="row" style="gap:14px">
            <div class="cr-mini">${P(s,78)}</div>
            <div>
              <div class="nm">${a(s.first)} ${a(s.last)}</div>
              <div class="small dim">${a(s.nat)} · ${q(s.dob)} years old</div>
              <div class="small" style="margin-top:6px;color:var(--ea-lime)">${a(S[s.personality].label)}</div>
              <div class="tiny dim" style="margin-top:3px">${a(S[s.personality].desc)}</div>
            </div>
          </div>
          <div class="cr-kv"><span>Experience</span><b>${a(M[s.experience]?.label||"Semi-Professional")}</b></div>
          <div class="cr-kv"><span>Reputation</span><b>${s.reputation}</b></div>
          <div class="cr-kv"><span>Preferred formation</span><b>${a(s.preferredFormation)}</b></div>
          <div class="cr-kv"><span>Tactical philosophy</span><b>${a(E[s.philosophy]?.label||"Balanced")}</b></div>
          <div class="cr-kv"><span>Playing style</span><b>${T[s.playingStyle]||"Possession"}</b></div>
          <div class="cr-kv"><span>Coaching philosophy</span><b>${A[s.coachingPhilosophy]||"Youth Development"}</b></div>
        </div>
        <div class="cr-card">
          <div class="cr-label">Your club</div>
          <div class="row" style="gap:14px">
            ${h(e.id)}
            <div>
              <div class="nm">${a(e.name)}</div>
              <div class="small dim">${a(r.name)} · ${a(e.stadium)} (${e.capacity.toLocaleString()})</div>
            </div>
          </div>
          <div class="cr-kv"><span>Reputation</span><b>${e.reputation}</b></div>
          <div class="cr-kv"><span>Transfer budget</span><b>${x(C(e,e.leagueId))}</b></div>
          <div class="cr-kv"><span>Board expectation</span><b>${F(e,r)}</b></div>
        </div>
        <div class="cr-card">
          <div class="cr-label">Career options</div>
          <div class="cr-kv"><span>Unexpected events</span><b>${t.settings.unexpectedEvents?"On":"Off"} · ${t.settings.eventFrequency}</b></div>
          <div class="cr-kv"><span>Financial takeover</span><b>${t.settings.financialTakeover?"Yes":"No"}</b></div>
          <div class="cr-kv"><span>Unlimited Money</span><b>${t.settings.unlimitedMoney?"On (custom)":"Off"}</b></div>
        </div>
      </div>
      <p class="note" style="margin-top:14px">Squads come from the shared FC27 player pool; clubs the export doesn't cover get generated players. Every player has a full profile: attributes, potential, contract, wage, personality and development path.</p>`}return`
  <div class="creator-screen">
    <header class="cr-head">
      <div class="cr-title">
        <div class="crumbs">New career</div>
        <h1>Create your manager</h1>
      </div>
      <div class="cr-steps">
        ${i.map((e,r)=>`<span class="${r===n?"on":r<n?"done":""}"><b>${r+1}</b>${e}</span>`).join("")}
      </div>
    </header>
    <div class="cr-body">${c}</div>
    <footer class="cr-foot">
      <button class="ea-btn ghost" data-act="c-back">Back</button>
      <div class="cr-foot-info">Step ${n+1} of 4 · ${i[n]}</div>
      ${n<3?'<button class="ea-btn primary" data-act="c-next">Continue</button>':'<button class="ea-btn primary" data-act="c-begin">Start career</button>'}
    </footer>
    <div class="toasts" id="toasts"></div>
  </div>`}function F(t,n){const c=n.clubIds.slice().sort((e,r)=>v[r].reputation-v[e].reputation).indexOf(t.id)/Math.max(1,n.clubIds.length-1);return c<.1?"Win the league":c<.25?"Top 3 finish":c<.45?"Qualify for Europe":c<.7?"Top half":"Avoid relegation"}function G(t){const n=new Date(t*864e5);return`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}-${String(n.getUTCDate()).padStart(2,"0")}`}function q(t){const n=new Date,s=new Date(t*864e5);let i=n.getUTCFullYear()-s.getUTCFullYear();return n.getUTCMonth()<s.getUTCMonth()&&i--,i}export{A as COACHING_PHILOSOPHIES,M as EXPERIENCES,E as MANAGERIAL_PHILOSOPHIES,R as MANAGER_TEMPLATES,I as OUTFITS,S as PERSONALITIES,T as PLAYING_STYLES,V as loadCareerPrefs,P as managerAvatar,ae as renderCareerHistory,te as renderCareerSettings,le as renderCreator,se as renderManagerLiveTitle,ie as renderSaveSlots,ee as renderTitle,X as saveCareerPrefs};
