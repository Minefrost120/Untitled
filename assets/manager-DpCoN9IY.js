const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/playerCsv-U-RERKxG.js","assets/index-CPu46q6F.js","assets/preload-helper-CLcXU_4U.js","assets/clubs-7SsSOggh.js","assets/sharedSquads-BOOy-0mA.js","assets/index-TI-_EKr0.css","assets/actions-sYwMFo7s.js","assets/matchday-Bcvbo2Cb.js","assets/state-CxSbi2oE.js","assets/names-Dh4vq0Mk.js","assets/realSquads-v4Z_bKqE.js","assets/dom-DLtXQ2KP.js","assets/save-M8U-SSU2.js"])))=>i.map(i=>d[i]);
import{_ as va}from"./preload-helper-CLcXU_4U.js";import{C as g,a as O,f as ja,b as V,M as Ua,o as aa,m as S,c as Q,t as T,w as Ks,d as Ss,e as Ga,L as ia,g as W,h as zs,i as Is}from"./clubs-7SsSOggh.js";import{n as Cs,c as E,a as ca,F as Pa,b as Ya,t as Ea,f as Ka,e as za,P as Js,d as Ma,M as Wa,B as Qa,D as Xa,g as Za,W as as,h as Qs,T as Ms,w as Ts,s as Ra,r as Xs,i as Zs,j as at,m as st,k as tt,l as et,o as nt,p as it}from"./state-CxSbi2oE.js";import{l as oa,w as da,s as ct,I as js,t as ss,y as ra,a as ka,d as fa,b as ot,p as xa,C as Aa,A as lt,c as dt,e as As,S as rt,f as ts,g as pt,h as Ns,u as Ps,i as ut,j as vt,k as ht,m as mt,n as $a,r as bt,o as ft,q as gt,v as $t,x as Ha,z as yt,B as _a,D as wt,F as es,E as kt,G as Es,H as Os,J as Ls,K as Rs,L as Fs,M as xt,N as ns,O as Fa,P as St,Q as It,R as is,T as Ct,U as cs,V as Mt,W as Tt,X as jt,Y as At,Z as Nt,_ as os}from"./matchday-Bcvbo2Cb.js";import{NATION_LIST as Pt,registerNations as ls}from"./names-Dh4vq0Mk.js";import{listSlots as ha,loadImportedSquadPool as Et,saveImportedSquads as Ot,clearImportedSquads as Lt,saveCareer as Rt}from"./save-M8U-SSU2.js";import{setSharedSquads as Da}from"./sharedSquads-BOOy-0mA.js";import{e as i,c as j,b as ta,f as Ds,p as F,a as C,d as K,g as Ft,$ as ds}from"./dom-DLtXQ2KP.js";import{managerAvatar as Dt,PERSONALITIES as qt,OUTFITS as rs,loadCareerPrefs as ma,renderTitle as Bt,renderSaveSlots as Ut,renderCareerHistory as Wt,renderCareerSettings as Ht,renderManagerLiveTitle as _t,saveCareerPrefs as Vt,renderCreator as Gt,EXPERIENCES as Yt,MANAGER_TEMPLATES as Kt,MANAGERIAL_PHILOSOPHIES as zt}from"./create-AhBvIEnz.js";import"./realSquads-v4Z_bKqE.js";const X=n=>n.manager.clubId,Oa=(n,a)=>n.clubs[a];function ps(n,a){switch(a){case"home":return hs(n);case"squad":return Xt(n);case"tactics":return Zt(n);case"competitions":return ae(n);case"calendar":return le(n);case"news":return ee(n);default:return hs(n)}}function la(n,a,{showDate:s=!0}={}){const t=n.comps[a.compId],e=X(n),c=a.home===e,o=c?a.away:a.home,d=a.played?a.score:null,r=a.home===e||a.away===e?"hl":"";let l="";if(d){const u=c?d[0]:d[1],v=c?d[1]:d[0];l=u>v?"w":u===v?"d":"l"}return`<tr class="click ${r}" data-act="open-fixture" data-fixture="${i(a.id)}">
    <td class="tiny dim">${s?i(V(a.date)):""}</td>
    <td>${i(t?.short||"")}</td>
    <td><span class="dim">${c?"vs":"@"}</span> ${j(o,"tiny")} ${i(g[o].name)}</td>
    <td class="num">${d?`<b>${d[0]}–${d[1]}</b>`:`<span class="dim">${i(Va())}</span>`}</td>
    <td class="ctr">${d?`<span class="pill ${l}">${l.toUpperCase()}</span>`:""}</td>
  </tr>`}function Va(n){return"15:00"}function Ja(n,a,{limit:s=0,compact:t=!1}={}){const e=n.comps[a];if(!e)return'<p class="dim small">No table.</p>';const c=Ea(e.table).slice(0,s||void 0),o=X(n);return`<table class="tbl">
    <thead><tr><th>#</th><th>Club</th>${t?"":'<th class="num">P</th>'}<th class="num">GD</th><th class="num">Pts</th>${t?"":"<th>Form</th>"}</tr></thead>
    <tbody>${c.map((d,r)=>{const l=r+1,u=Jt(a,l,c.length);return`<tr class="${d.id===o?"hl":""} ${u}">
        <td class="num dim">${l}</td>
        <td><div class="row" style="gap:7px">${j(d.id,"tiny")}<span>${i(g[d.id].name)}</span></div></td>
        ${t?"":`<td class="num dim">${d.p}</td>`}
        <td class="num ${d.gd>0?"up":d.gd<0?"down":"dim"}">${d.gd>0?"+":""}${d.gd}</td>
        <td class="num"><b>${d.pts}</b></td>
        ${t?"":`<td>${Ds(d.form)}</td>`}
      </tr>`}).join("")}</tbody>
  </table>`}function Jt(n,a,s){const t=O[n];return t?a<=(t.europeanSpots||0)?"uefa":t.relegation&&a>s-t.relegation?"rel":"":""}function Qt(n){const a=n.jobOffers||[];return`
  <div class="page-head"><div><h1>Unemployed</h1><p>You are without a club. Review the offers on the table.</p></div></div>
  <div class="card">
    <div class="card-head"><h3>Job offers</h3></div>
    ${a.length?a.map(s=>`
      <div class="offer-row">
        <div class="row" style="gap:10px">${j(s.clubId)}<div><b>${i(g[s.clubId].name)}</b><div class="tiny dim">${i(O[g[s.clubId].leagueId].name)} · Rep ${g[s.clubId].reputation}</div></div></div>
        <div class="row"><span class="small">${S(s.wage)}/wk</span><button class="btn primary sm" data-act="take-job" data-club="${i(s.clubId)}">Accept</button></div>
      </div>`).join(""):'<p class="dim small">No offers yet. Advance time to see what becomes available.</p>'}
  </div>`}function qs(n){const a=[["squad","Squad"],["formations","Formations"],["tactics","Tactics"],["roles","Roles"],["instructions","Instructions"]],s=n.tab==="squad"||!n.tab?"squad":n.tab;return`<div class="subnav">${a.map(([t,e])=>`<button class="${s===t?"on":""}" data-act="stab" data-tab="${t}">${e}</button>`).join("")}</div>`}const us=[["Pace","pace"],["Shooting","shoot"],["Passing","pass"],["Dribbling","dribble"],["Defending","defend"],["Physical","physical"]];function Xt(n){const a=n.db,s=X(a),t=Oa(a,s),e=za(a,s),c=Ka(t.tactics),o=E(a,s),d=g[s],r=(n.playerFilter||"").toLowerCase(),l=n.playerPos||"",u=n.playerSort||"ovr",v={ovr:($,I)=>I.ovr-$.ovr,age:($,I)=>$.dob-I.dob,name:($,I)=>C($).localeCompare(C(I)),fitness:($,I)=>(I.fitness||0)-($.fitness||0),number:($,I)=>($.number||99)-(I.number||99)},p=o.filter($=>!r||C($).toLowerCase().includes(r)||$.pos.toLowerCase().includes(r)).filter($=>!l||$.pos===l||($.secondaryPositions||[]).includes(l)).sort(v[u]||v.ovr),f=n.compareSel&&a.players[n.compareSel]?n.compareSel:e.xi[0]?.playerId||p[0]?.id,m=f?a.players[f]:null,h=$=>Math.floor((a.day-$.dob)/365.25),y=$=>`${($.first||"")[0]||""}${($.last||"")[0]||""}`.toUpperCase()||"??",M=($=26)=>`
    <svg class="fs-kit" viewBox="0 0 60 66" width="${$}" height="${Math.round($*1.1)}" aria-hidden="true">
      <path d="M22 4 L14 8 L4 20 L14 27 L18 23 L18 60 L42 60 L42 23 L46 27 L56 20 L46 8 L38 4 Z"
        fill="${d.primary}" stroke="${d.secondary}" stroke-width="2.5" />
      <path d="M24 4 Q30 12 36 4" fill="none" stroke="${d.secondary}" stroke-width="3" />
      <path d="M18 44 L42 44" stroke="${d.secondary}" stroke-width="1.6" opacity=".55" />
    </svg>`,k=e.xi.map(($,I)=>{const P=c[I],H=a.players[$.playerId],Y=50+(P?.x??0)/34*42,Ys=P?.pos==="GK"?92:8+(1-(P?.d??0))*76;return`<div class="slot fs-node ${f===$.playerId?"sel":""}" draggable="true" data-slot="${I}"
      data-player="${i($.playerId)}" data-act="compare" data-id="${i($.playerId)}" data-kind="xi"
      style="left:${Y}%;top:${Ys}%">
      <div class="fs-node-card">
        <span class="fs-node-pos">${i(P?.pos||H?.pos||"")}</span>
        ${M(20)}
        <b class="fs-node-ovr">${H?H.ovr:"—"}</b>
        <span class="fs-node-name">${H?i(H.displayName||H.last):"—"}</span>
      </div>
    </div>`}).join(""),A=new Set(e.xi.map($=>$.playerId)),q=new Set(e.bench),x=o.filter($=>!A.has($.id)).filter($=>!r||C($).toLowerCase().includes(r)||$.pos.toLowerCase().includes(r)).filter($=>!l||$.pos===l||($.secondaryPositions||[]).includes(l)).sort(v[u]||v.ovr).map($=>$.id),L=x.map($=>{const I=a.players[$];if(!I)return"";const P=q.has($);return`<div class="bench-chip fs-sub ${f===$?"sel":""} ${P?"":"is-reserve"}"
      ${P?'draggable="true"':'title="Reserve — select to view; bench players can be dragged onto the pitch"'}
      data-player="${i($)}" data-act="compare" data-id="${i($)}" data-kind="bench">
      <span class="fs-sub-avatar" style="border-color:${d.secondary}">${y(I)}</span>
      <div class="fs-sub-body">
        <div class="fs-sub-line"><span class="fs-pos">${i(I.pos)}</span><b>${I.ovr}</b></div>
        <span class="fs-sub-name">${i(I.displayName||I.last)}</span>
        <i class="fs-sub-bar"><b style="width:${Math.round(I.fitness??100)}%"></b></i>
      </div>
    </div>`}).join(""),ua=$=>Math.round(o.reduce((I,P)=>I+(P.attrs?.[$]??P.ovr),0)/Math.max(1,o.length)),ea=$=>$>=75?"#1fd06b":$>=60?"#ff9f2e":"#ff4d5a",w=($,I)=>`<div class="fs-row fs-row-stars">
      <span class="fs-stars">${[1,2,3,4,5].map(P=>`<i class="${P<=$?"on":""}">★</i>`).join("")}</span>
      <span class="fs-label">${I}</span>
    </div>`,B=m?us.map(([,$])=>m.attrs?.[$]??m.ovr):[0,0,0,0,0,0],_=($,I,P)=>{const H=(-120+I*60)*Math.PI/180,Y=Math.max(10,$)/100*P;return[110+Math.cos(H)*Y,110+Math.sin(H)*Y]},na=$=>[0,1,2,3,4,5].map(I=>_(100,I,$).join(",")).join(" "),Vs=m?`<div class="fs-radar">
        <svg viewBox="0 0 220 220" aria-hidden="true">
          ${[82,58,34].map($=>`<polygon points="${na($)}" fill="none" stroke="rgba(255,255,255,.13)" stroke-width="1" />`).join("")}
          ${[0,1,2,3,4,5].map($=>{const[I,P]=_(100,$,82);return`<line x1="110" y1="110" x2="${I}" y2="${P}" stroke="rgba(255,255,255,.09)" stroke-width="1" />`}).join("")}
          <polygon points="${B.map(($,I)=>_($,I,82).join(",")).join(" ")}"
            fill="rgba(214,231,255,.16)" stroke="#e8f1ff" stroke-width="2" stroke-linejoin="round" />
        </svg>
        ${["Pace","Shooting","Passing","Dribbling","Defending","Physical"].map(($,I)=>`<span class="fs-axis fs-axis-${I}">${$}</span>`).join("")}
      </div>`:"",Gs=m?`
    <div class="fs-detail">
      <header class="fs-detail-head">
        <span class="fs-avatar" style="background:linear-gradient(150deg, ${d.primary}, ${d.primary}77)">${y(m)}</span>
        <div class="fs-detail-id">
          <span class="fs-pos">${i(m.pos)}</span>
          <b class="fs-detail-ovr">${m.ovr}</b>
          <span class="fs-detail-name">${i(C(m))}</span>
          <i class="fs-detail-bar"><b style="width:${Math.round(m.fitness??100)}%"></b></i>
        </div>
      </header>
      ${Vs}
      <div class="fs-compare">
        <h3>PLAYER INFO COMPARISON</h3>
        ${us.map(([$,I])=>{const P=m.attrs?.[I]??m.ovr,H=ua(I),Y=P-H;return`<div class="fs-row">
            <i class="fs-attr"><b style="width:${P}%;background:${ea(P)}"></b></i>
            <span class="fs-val">${P}<em class="${Y<0?"neg":""}">${Y>=0?"+":""}${Y}</em></span>
            <span class="fs-label">${$}</span>
          </div>`}).join("")}
        ${w(m.skillMoves??3,"Skill Moves")}
        ${w(m.weakFoot??3,"Weak Foot")}
        <div class="fs-row"><span class="fs-val fs-val-text">${i(m.foot||"Right")}</span><span class="fs-label">Foot</span></div>
        <div class="fs-row"><span class="fs-val">${i(h(m))}</span><span class="fs-label">Age</span></div>
        <div class="fs-row"><span class="fs-val fs-val-text">${i(m.contract?.until??"—")}</span><span class="fs-label">Contract</span></div>
        <div class="fs-row"><span class="fs-val fs-val-text">${S(m.value||0)}</span><span class="fs-label">Value</span></div>
        <div class="fs-actions">
          <button class="f-ghost" data-act="player" data-id="${i(m.id)}">Player profile</button>
          <button class="f-ghost" data-act="shortlist" data-id="${i(m.id)}">${(a.shortlist||[]).includes(m.id)?"Shortlisted":"Shortlist"}</button>
        </div>
      </div>
      <div class="fs-dots"><i class="on"></i><i></i><i></i><i></i><i></i></div>
    </div>`:'<div class="fs-detail fs-empty">Select a player to see their profile.</div>';return`
  <div class="fs-topstrip" data-act="stab" data-tab="tactics" role="button" tabindex="0">
    <span class="fs-plan-key">L2</span>
    <b>EDIT GAME PLANS</b>
    <i></i>
    <span>${i(Wa[t.tactics.mentality]?.label??"Balanced")}</span>
    <span class="fs-edit-cue">EDIT ›</span>
  </div>
  ${qs(n)}
  <div class="squad-filterbar">
    <span class="tiny dim">FILTER SQUAD</span>
    <select class="sel" data-change="squad-pos">
      <option value="">All positions</option>
      ${["GK","RB","CB","LB","CDM","CM","CAM","RM","LM","RW","LW","ST"].map($=>`<option value="${$}" ${l===$?"selected":""}>${$}</option>`).join("")}
    </select>
    <select class="sel" data-change="squad-sort">
      ${[["ovr","Overall"],["age","Age"],["name","Name"],["fitness","Fitness"],["number","Shirt number"]].map(([$,I])=>`<option value="${$}" ${u===$?"selected":""}>Sort: ${I}</option>`).join("")}
    </select>
    <span class="small dim">${p.length} players</span>
  </div>
  <div class="fs-grid">
    <section class="fs-left">
      <div class="fs-pitch-wrap">
        <div class="fs-pitch-head">
          <span>${i(Pa[t.tactics.formation].name)}</span>
          <span>${Ya(a,s)} OVR</span>
        </div>
        <div class="fs-pitch">
          <div class="fs-pitch-lines"></div>
          <div class="fs-pitch-box top"></div>
          <div class="fs-pitch-box bot"></div>
          <div class="fs-pitch-circle"></div>
          ${k}
        </div>
      </div>
      <div class="fs-subs">
        <div class="fs-subs-head">
          <b>SUBSTITUTES</b><span class="fs-subcount">${x.length}</span><span class="fs-scrollcue" title="Scroll for the rest of the squad">⇅</span>
          <input class="inp fs-search" placeholder="Search" data-input="player-search" value="${i(n.playerFilter||"")}" />
          <button class="f-ghost fs-autopick" data-act="auto-pick">AUTO PICK</button>
        </div>
        <div class="fs-subs-grid">${L||'<p class="dim small">No substitutes available.</p>'}</div>
        <div class="fs-setpieces">
          <button class="f-ghost" data-act="set-captain">Captain: ${i(a.players[t.tactics.captain]?.displayName||a.players[t.tactics.captain]?.last||"—")}</button>
          <button class="f-ghost" data-act="set-penalties">Pens: ${i(a.players[t.tactics.penalties]?.displayName||a.players[t.tactics.penalties]?.last||"—")}</button>
          <button class="f-ghost" data-act="set-freekicks">FK: ${i(a.players[t.tactics.freeKicks]?.displayName||a.players[t.tactics.freeKicks]?.last||"—")}</button>
          <button class="f-ghost" data-act="set-corners">Corners: ${i(a.players[t.tactics.corners]?.displayName||a.players[t.tactics.corners]?.last||"—")}</button>
          <button class="f-ghost" data-act="set-longfk">Long FK: ${i(a.players[t.tactics.longFreeKicks]?.displayName||a.players[t.tactics.longFreeKicks]?.last||"—")}</button>
        </div>
      </div>
    </section>
    ${Gs}
  </div>
  <div class="fs-hints">
    <span><i>◉</i>Click to select</span>
    <span><i>⇄</i>Drag to swap</span>
    <span><i>⇅</i>Scroll the squad</span>
  </div>`}function Zt(n){const a=n.db,s=X(a),e=Oa(a,s).tactics,c=Pa[e.formation],o=Ka(e),d=za(a,s),r=n.tab||"formations",l=o.map((h,y)=>{const M=a.players[d.xi[y]?.playerId],k=50+h.x/34*44,A=(1-h.d)*88+6;return`<div class="slot" style="left:${k}%;top:${A}%;cursor:default">
      <div class="badge" style="width:28px;height:28px;font-size:11px;background:linear-gradient(160deg,${g[s].primary},${g[s].primary}bb)">${M?M.ovr:"—"}</div>
      <div class="nm" style="font-size:8px">${M?i(M.displayName||M.last):h.pos}</div>
    </div>`}).join(""),u=(h,y,M,k)=>`
    <div class="field">
      <label class="lbl">${h}</label>
      <div class="seg2">${M.map(([A,q])=>`<button data-act="tactic" data-key="${y}" data-val="${A}" class="${k===A?"on":""}">${q}</button>`).join("")}</div>
    </div>`,v=`<div class="f-panel">
    <div class="f-panel-h"><h3>Player roles</h3><span class="tiny dim">${i(c.name)}</span></div>
    <div class="tbl-wrap" style="max-height:520px">
      <table class="tbl"><thead><tr><th>Player</th><th>Pos</th><th>Role</th></tr></thead><tbody>
        ${d.xi.map(h=>{const y=a.players[h.playerId];if(!y)return"";const M=Js[y.pos]||["Central Midfielder"],k=e.instructions?.[y.id]?.role||M[0];return`<tr>
            <td>${i(y.displayName||y.last)} <span class="tiny dim">${y.ovr}</span></td>
            <td>${F(y.pos)}</td>
            <td><select class="sel" style="padding:4px 6px;font-size:11px" data-change="role" data-player="${i(y.id)}">
              ${M.map(A=>`<option ${k===A?"selected":""}>${A}</option>`).join("")}
            </select></td>
          </tr>`}).join("")}
      </tbody></table>
    </div>
  </div>`,p=`<div class="f-panel">
    <div class="f-panel-h"><h3>Team instructions</h3><span class="tiny dim">${i(Ma(e))}</span></div>
    <div class="grid g2">
      <div>
        ${u("Mentality","mentality",Object.entries(Wa).map(([h,y])=>[h,y.label]),e.mentality)}
        ${u("Build-up","buildUp",Object.entries(Qa).map(([h,y])=>[h,y.label]),e.buildUp)}
        ${u("Defensive line","line",Object.entries(Xa).map(([h,y])=>[h,y.label]),e.line)}
      </div>
      <div>
        ${u("Pressing","pressing",Object.entries(Za).map(([h,y])=>[h,y.label]),e.pressing)}
        ${u("Width","width",Object.entries(as).map(([h,y])=>[h,y.label]),e.width)}
        <div class="field">
          <label class="lbl">Tempo · ${e.tempo??55}</label>
          <input type="range" min="20" max="95" value="${e.tempo??55}" data-change="tempo" style="width:100%"/>
        </div>
        <div class="seg2">
          <button data-act="tactic" data-key="offsideTrap" data-val="${e.offsideTrap?"0":"1"}" class="${e.offsideTrap?"on":""}">Offside trap</button>
        </div>
      </div>
    </div>
  </div>`,b=`<div class="squad-grid">
    <div class="pitch-card">
      <div class="pitch" style="aspect-ratio:.78">
        <div class="lines"></div><div class="box top"></div><div class="box bot"></div>
        ${l}
      </div>
      <div style="margin-top:10px">
        <label class="lbl">Formation</label>
        <div class="seg2">${Qs.map(h=>`<button data-act="tactic" data-key="formation" data-val="${h.id}" class="${e.formation===h.id?"on":""}">${h.name}</button>`).join("")}</div>
        <p class="note" style="margin-top:8px">${i(c.desc)}</p>
      </div>
    </div>
    <div class="f-panel">
      <div class="f-panel-h"><h3>Formation detail</h3><span class="tiny dim">${i(c.name)}</span></div>
      <div class="kv"><span>Style</span><b>${i(Ma(e))}</b></div>
      <div class="kv"><span>Lineup</span><b>${d.xi.length} selected</b></div>
      <div class="kv"><span>Bench</span><b>${d.bench.length}</b></div>
      <div class="kv"><span>Captain</span><b>${i(a.players[e.captain]?.displayName||a.players[e.captain]?.last||"—")}</b></div>
      <p class="note">Changing the formation moves every player into the matching slot. Individual positions can be adjusted on the Squad tab by dragging players.</p>
      <button class="f-cta wide" data-act="auto-pick">Auto-pick best XI</button>
    </div>
  </div>`,f=`<div class="f-panel" style="margin-bottom:12px">
    <div class="f-panel-h"><h3>Tactical presets</h3></div>
    <div class="grid g3" style="gap:8px">
      ${Ms.map(h=>`<button class="btn sm" style="justify-content:flex-start;text-align:left;flex-direction:column;align-items:flex-start;gap:2px;padding:9px 11px;height:auto" data-act="apply-preset" data-preset="${h.id}">
        <span style="font-size:11px">${h.name}</span>
        <span style="font-size:9px;opacity:.6;text-transform:none;letter-spacing:0;font-weight:400">${h.desc}</span>
      </button>`).join("")}
    </div>
  </div>
  <div class="f-panel">
    <div class="f-panel-h"><h3>Current approach</h3><span class="tiny dim">${i(Ma(e))}</span></div>
    <div class="grid g3">
      <div class="kv"><span>Mentality</span><b>${i(Wa[e.mentality]?.label||"—")}</b></div>
      <div class="kv"><span>Build-up</span><b>${i(Qa[e.buildUp]?.label||"—")}</b></div>
      <div class="kv"><span>Pressing</span><b>${i(Za[e.pressing]?.label||"—")}</b></div>
      <div class="kv"><span>Defensive line</span><b>${i(Xa[e.line]?.label||"—")}</b></div>
      <div class="kv"><span>Width</span><b>${i(as[e.width]?.label||"—")}</b></div>
      <div class="kv"><span>Tempo</span><b>${e.tempo??55}</b></div>
    </div>
    <button class="f-ghost wide" data-act="stab" data-tab="instructions">Edit instructions</button>
  </div>`,m=r==="formations"?b:r==="roles"?v:r==="instructions"?p:f;return`
  ${qs(n)}
  <div class="squad-top">
    <div><h1>Tactics</h1><div class="meta">${i(c.name)} · ${i(Ma(e))}</div></div>
    <button class="f-ghost" data-act="auto-pick">Auto-pick XI</button>
  </div>
  ${m}`}function ae(n){const a=n.db,s=X(a),t=g[s],e=n.tab||"league",c=t?.leagueId||"premier-league",o=a.comps[c],d=o?Ea(o.table):[],r=ca(a,s),l=r.filter(f=>!f.played).slice(0,8),u=r.filter(f=>f.played).slice(-8).reverse(),v=`<div class="seg2" style="margin-bottom:14px">
    <button data-act="tab" data-tab="league" class="${e==="league"?"on":""}">${i(O[c].name)}</button>
    <button data-act="tab" data-tab="cups" class="${e==="cups"?"on":""}">Domestic Cups</button>
    <button data-act="tab" data-tab="europe" class="${e==="europe"?"on":""}">Europe</button>
    <button data-act="tab" data-tab="stats" class="${e==="stats"?"on":""}">Player Stats</button>
  </div>`;if(e==="league")return oe(n);if(e==="legacy-league"){const m=a.comps[c].rounds,h=d.length?Math.max(...d.map(y=>y.p))/2:0;return`
      <div class="page-head"><div><h1>Competitions</h1><p>${i(O[c].name)} · Matchday ${h} of ${m.length}</p></div></div>
      ${v}
      <div class="grid g2" style="align-items:start">
        <div class="card" style="padding:0">
          <div class="tbl-wrap" style="max-height:640px">${Ja(a,c)}</div>
        </div>
        <div>
          <div class="card" style="margin-bottom:12px">
            <div class="card-head"><h3>Your fixtures</h3></div>
            <table class="tbl"><tbody>${l.map(y=>la(a,y)).join("")||'<tr><td class="dim small">No fixtures remaining</td></tr>'}</tbody></table>
          </div>
          <div class="card">
            <div class="card-head"><h3>Recent results</h3></div>
            <table class="tbl"><tbody>${u.map(y=>la(a,y)).join("")||'<tr><td class="dim small">No results yet</td></tr>'}</tbody></table>
          </div>
        </div>
      </div>`}if(e==="cups"){const f=Object.values(Ga).filter(m=>m.type==="cup");return`
      <div class="page-head"><div><h1>Domestic Cups</h1><p>Knockout football — one bad night ends the run</p></div></div>
      ${v}
      <div class="grid g2" style="align-items:start">
        ${f.map(m=>{const h=a.comps[m.id];if(!h)return"";const y=s&&h.teamIds.includes(s),M=ca(a,s).filter(k=>k.compId===m.id);return`<div class="card">
            <div class="card-head"><h3>${i(m.name)}</h3>${h.winner?j(h.winner,"tiny"):""}</div>
            ${y?`<div class="small dim" style="margin-bottom:8px">${M.length?M.map(k=>{const A=k.home===s?k.away:k.home;return`<div class="row spread" style="padding:4px 0"><span>${i(h.rounds[k.round]?.name)} · ${k.home===s?"vs":"@"} ${i(g[A].short)}</span><span>${k.played?`<b>${k.score[0]}–${k.score[1]}</b>`:i(V(k.date))}</span></div>`}).join(""):"<span>Not in this competition</span>"}</div>`:'<div class="tiny dim" style="margin-bottom:8px">Not entered</div>'}
            <div class="tbl-wrap" style="max-height:220px">
              <table class="tbl"><thead><tr><th>Round</th><th>Status</th></tr></thead><tbody>
                ${h.rounds.map(k=>{const A=a.fixtures.filter(x=>x.compId===m.id&&x.round===k.index),q=A.filter(x=>x.played).length;return`<tr><td>${i(k.name)}</td><td class="tiny dim">${A.length?`${q}/${A.length} played`:k.materialised?"awaiting draw":"pending"}</td></tr>`}).join("")}
              </tbody></table>
            </div>
            ${h.winner?`<div class="row" style="margin-top:9px">${j(h.winner)}<div><div class="small" style="font-weight:600">${i(g[h.winner].name)}</div><div class="tiny dim">Winners</div></div></div>`:""}
          </div>`}).join("")}
      </div>`}if(e==="europe")return`
      <div class="page-head"><div><h1>European Football</h1><p>Group stage and knockout rounds</p></div></div>
      ${v}
      <div class="grid g2" style="align-items:start">
        ${["champions-league","europa-league"].map(f=>{const m=a.comps[f];if(!m)return"";const h=s&&m.teamIds.includes(s),y=m.groups?.find(M=>M.teamIds.includes(s));return`<div class="card">
            <div class="card-head"><h3>${i(m.name)}</h3>${m.winner?j(m.winner,"tiny"):""}</div>
            ${h&&y?`<div class="small" style="margin-bottom:8px">Group ${i(y.name)}</div><div class="tbl-wrap" style="max-height:230px">${se(a,y)}</div>`:'<p class="tiny dim">Your club is not in this competition.</p>'}
            <div class="row" style="margin-top:10px;gap:6px;flex-wrap:wrap">
              ${m.groups?.length?`<button class="btn sm" data-act="euro-groups" data-comp="${f}">All groups</button>`:""}
              <button class="btn sm" data-act="euro-bracket" data-comp="${f}">Knockout bracket</button>
            </div>
          </div>`}).join("")}
      </div>`;const p=ss(a,c,"goals",15),b=ss(a,c,"assists",15);return`
    <div class="page-head"><div><h1>Player Statistics</h1><p>${i(O[c].name)} ${a.season}/${String(a.season+1).slice(2)}</p></div></div>
    ${v}
    <div class="grid g2" style="align-items:start">
      <div class="card">
        <div class="card-head"><h3>Top scorers</h3></div>
        <table class="tbl"><thead><tr><th>#</th><th>Player</th><th>Club</th><th class="num">Gls</th><th class="num">Apps</th><th class="num">Rating</th></tr></thead>
        <tbody>${p.map((f,m)=>`<tr class="click" data-act="player" data-id="${i(f.playerId)}"><td class="dim">${m+1}</td><td>${i(f.name)} ${F(f.pos)}</td><td class="tiny dim">${i(g[f.clubId]?.short||"")}</td><td class="num"><b>${f.value}</b></td><td class="num dim">${f.apps}</td><td class="num">${f.rating}</td></tr>`).join("")||'<tr><td colspan="6" class="dim small">No goals scored yet</td></tr>'}</tbody></table>
      </div>
      <div class="card">
        <div class="card-head"><h3>Top assists</h3></div>
        <table class="tbl"><thead><tr><th>#</th><th>Player</th><th>Club</th><th class="num">Ast</th><th class="num">Apps</th><th class="num">Rating</th></tr></thead>
        <tbody>${b.map((f,m)=>`<tr class="click" data-act="player" data-id="${i(f.playerId)}"><td class="dim">${m+1}</td><td>${i(f.name)} ${F(f.pos)}</td><td class="tiny dim">${i(g[f.clubId]?.short||"")}</td><td class="num"><b>${f.value}</b></td><td class="num dim">${f.apps}</td><td class="num">${f.rating}</td></tr>`).join("")||'<tr><td colspan="6" class="dim small">No assists yet</td></tr>'}</tbody></table>
      </div>
    </div>`}function se(n,a){return`<table class="tbl"><thead><tr><th>#</th><th>Club</th><th class="num">P</th><th class="num">GD</th><th class="num">Pts</th></tr></thead>
  <tbody>${Ea(a.table).map((t,e)=>`<tr class="${e<2?"hl":""}"><td class="dim">${e+1}</td><td><div class="row" style="gap:6px">${j(t.id,"tiny")}<span class="small">${i(g[t.id].short)}</span></div></td><td class="num dim">${t.p}</td><td class="num ${t.gd>0?"up":t.gd<0?"down":""}">${t.gd}</td><td class="num"><b>${t.pts}</b></td></tr>`).join("")}</tbody></table>`}function te(n){const a=n.season;n.season;const s=[[T(a,9,1),"International break"],[T(a,10,6),"International break"],[T(a,11,10),"International break"],[T(a+1,3,23),"International break"]];return[{label:"Summer window closes",day:T(a,9,1)},{label:"Winter window opens",day:T(a+1,1,1)},{label:"Winter window closes",day:T(a+1,2,2)},{label:"Season ends",day:T(a+1,5,31)},...s.map(([t,e])=>({label:e,day:t}))].filter(t=>t.day>=n.day-5).sort((t,e)=>t.day-e.day).slice(0,7)}function vs(n,a,s){const t=[],e=Ss(a),c=n.byDate.get(e)||[],o=c.filter(l=>l.home===s||l.away===s);for(const l of o){const u=n.comps[l.compId],v=l.home===s?l.away:l.home;t.push({cls:u.type==="cup"?"cup":u.type==="continental"?"euro":"match",text:`${u.type==="league"?"":u.short+" "}${l.home===s?"v":"@"} ${g[v].short}${l.played?` ${l.score[0]}-${l.score[1]}`:""}`,tag:u.short})}for(const l of c)l.home===s||l.away===s||l.round===0&&n.comps[l.compId]?.type;const d=n.season;a===T(d,9,1)&&t.push({cls:"transfer",text:"Summer window closes",tag:"DL"}),a===T(d+1,1,1)&&t.push({cls:"transfer",text:"Winter window opens",tag:"DL"}),a===T(d+1,2,2)&&t.push({cls:"transfer",text:"Winter window closes",tag:"DL"});const r=[[T(d,9,1),T(d,9,9)],[T(d,10,6),T(d,10,14)],[T(d,11,10),T(d,11,18)],[T(d+1,3,23),T(d+1,3,31)]];return r.some(([l,u])=>a>=l&&a<=u)&&t.push({cls:"break",text:"International break",tag:"INT"}),!o.length&&a>T(d,7,1)&&a<T(d+1,6,1)&&!r.some(([l,u])=>a>=l&&a<=u)&&t.push({cls:"",text:"Training",tag:"TR"}),a===T(d+1,5,31)&&t.push({cls:"cup",text:"Season ends",tag:"END"}),t}function ee(n){const a=n.db,s=n.tab||"all",t=a.news.filter(e=>s==="all"||e.type===s).slice(0,80);return`
  <div class="page-head"><div><h1>News &amp; Media</h1><p>Everything happening in your save</p></div></div>
  <div class="seg2" style="margin-bottom:14px">
    ${["all","match","transfer","injury","board","youth","contract","manager"].map(e=>`<button data-act="tab" data-tab="${e}" class="${s===e?"on":""}">${e}</button>`).join("")}
  </div>
  <div class="card">
    ${t.length?t.map(e=>`<div class="news-item ${e.read?"":"unread"} click" data-act="open-news" data-id="${i(e.id)}">
      <div class="meta"><span>${i(Q(e.date))}</span><span>${i(e.type)}</span>${e.clubId?`<span>${i(g[e.clubId]?.short||"")}</span>`:""}</div>
      <h4>${i(e.headline)}</h4>
      <p>${i(e.body)}</p>
    </div>`).join(""):'<p class="dim small">No items in this filter.</p>'}
  </div>`}function ne(n){const a=n.db,s=a.manager,t=s.clubId,e=t?a.clubs[t].trophies||[]:[],c=s.record,o=[...new Set([...(s.history||[]).map(d=>d.clubId),t].filter(Boolean))];return`
  <div class="page-head"><div><h1>Manager Profile</h1><p>${i(s.first)} ${i(s.last)} · ${i(s.nat)} · ${i(s.experience||"semi-pro")}</p></div></div>
  <div class="grid g3" style="align-items:start">
    <div class="card">
      <div class="card-head"><h3>Reputation</h3></div>
      <div class="metric"><span class="big-num">${s.reputation}</span><small>/100</small></div>
      <div style="margin-top:9px">${ta(s.reputation,"blue")}</div>
      <div class="kv" style="margin-top:12px"><span>Matches</span><b>${c.played}</b></div>
      <div class="kv"><span>Won</span><b class="up">${c.won}</b></div>
      <div class="kv"><span>Drawn</span><b>${c.drawn}</b></div>
      <div class="kv"><span>Lost</span><b class="down">${c.lost}</b></div>
      <div class="kv"><span>Win rate</span><b>${c.played?Math.round(c.won/c.played*100):0}%</b></div>
      <div class="kv"><span>Seasons completed</span><b>${(s.history||[]).length}</b></div>
      <div class="kv"><span>Clubs managed</span><b>${o.length}</b></div>
      <div class="kv"><span>Trophies</span><b>${e.length}</b></div>
      <div class="kv"><span>Tactical identity</span><b>${i(s.philosophy||"balanced")}</b></div>
      <div class="kv"><span>Preferred formation</span><b>${i(s.preferredFormation||"4-2-3-1")}</b></div>
      <div class="kv"><span>Coaching</span><b>${i(s.coachingPhilosophy||"development")}</b></div>
      <div class="kv"><span>Status</span><b>${i(s.status)}</b></div>
      <div style="margin-top:10px"><button class="btn wide" data-act="nav" data-screen="history">Career history centre</button></div>
    </div>
    <div class="card">
      <div class="card-head"><h3>Honours</h3></div>
      ${e.length?e.slice().reverse().map(d=>`<div class="trophy-row"><span class="cup">🏆</span><div><div>${i(d.name)}</div><div class="tiny dim">${d.season}/${String(d.season+1).slice(2)}</div></div></div>`).join(""):'<p class="dim small">No trophies yet.</p>'}
    </div>
    <div class="card">
      <div class="card-head"><h3>Job security</h3></div>
      ${t?`
        <div class="kv"><span>Club</span><b>${i(g[t].name)}</b></div>
        <div class="kv"><span>Board confidence</span><b>${Math.round(a.clubs[t].board.confidence)}%</b></div>
        <div class="kv"><span>Contract until</span><b>${s.contractUntil}</b></div>
        <div class="kv"><span>Wage</span><b>${W(s.wage)}/wk</b></div>
        <div style="height:10px"></div>
        <button class="btn wide" data-act="job-market">Browse job market</button>
        <button class="btn wide danger" style="margin-top:8px" data-act="resign">Resign</button>
      `:'<p class="dim small">You are currently unemployed.</p><button class="btn primary wide" data-act="job-market">Browse jobs</button>'}
    </div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="card-head"><h3>Season history</h3></div>
    ${s.history.length?`<table class="tbl"><thead><tr><th>Season</th><th>Club</th><th>League</th><th class="num">Pos</th><th>Trophies</th><th>Verdict</th></tr></thead><tbody>
      ${s.history.slice().reverse().map(d=>`<tr><td>${d.season}/${String(d.season+1).slice(2)}</td><td>${i(d.club)}</td><td class="dim">${i(d.league||"")}</td><td class="num">${d.position||"—"}</td><td class="tiny">${(d.trophies||[]).join(", ")||"—"}</td><td class="tiny dim">${i(d.verdict||(d.reason==="sacked"?"Sacked":""))}</td></tr>`).join("")}
    </tbody></table>`:'<p class="dim small">No completed seasons yet.</p>'}
  </div>`}function ie(n){const a=n.db;return`
  <div class="page-head"><div><h1>Career History</h1><p>${a.history.length} completed season${a.history.length===1?"":"s"}</p></div></div>
  ${a.history.length?a.history.slice().reverse().map(s=>`
    <div class="card" style="margin-bottom:12px">
      <div class="card-head"><h3>${s.season}/${String(s.season+1).slice(2)}</h3><span class="small dim">${i(s.verdict?.verdict||"")}</span></div>
      <div class="grid g2">
        <div>
          <div class="tiny dim" style="text-transform:uppercase;letter-spacing:.14em;margin-bottom:5px">League winners</div>
          ${ia.map(t=>{const e=s.leagues?.[t.id]?.champion;return`<div class="kv"><span>${i(t.name)}</span><b>${e?i(g[e].name):"—"}</b></div>`}).join("")}
        </div>
        <div>
          <div class="tiny dim" style="text-transform:uppercase;letter-spacing:.14em;margin-bottom:5px">Cups</div>
          ${Object.entries(s.cups||{}).map(([t,e])=>`<div class="kv"><span>${i(Ga[t]?.name||t)}</span><b>${e?i(g[e].name):"—"}</b></div>`).join("")}
          <div class="tiny dim" style="text-transform:uppercase;letter-spacing:.14em;margin:10px 0 5px">Awards</div>
          ${(s.awards||[]).filter(t=>t.type==="player-of-season").slice(0,3).map(t=>`<div class="kv"><span>${i(O[t.leagueId]?.short||"")} POTY</span><b>${i(t.name)}</b></div>`).join("")||'<span class="tiny dim">—</span>'}
        </div>
      </div>
      ${s.retired?.length?`<div class="tiny dim" style="margin-top:10px">Retirements: ${s.retired.slice(0,6).map(t=>i(t.name)).join(", ")}${s.retired.length>6?` +${s.retired.length-6}`:""}</div>`:""}
    </div>`).join(""):'<div class="card"><p class="dim small">Complete a season to build your career history.</p></div>'}
  <div class="card"><div class="card-head"><h3>Manager record</h3></div>
    <div class="grid g4">
      <div><div class="tiny dim">Matches</div><div class="big-num">${a.manager.record.played}</div></div>
      <div><div class="tiny dim">Won</div><div class="big-num up">${a.manager.record.won}</div></div>
      <div><div class="tiny dim">Drawn</div><div class="big-num">${a.manager.record.drawn}</div></div>
      <div><div class="tiny dim">Lost</div><div class="big-num down">${a.manager.record.lost}</div></div>
    </div>
  </div>`}function ce(n){const a=n.db,s=a.seasonSummary||{},t=s.archive||{},e=ia.map(d=>({l:d,data:t.leagues?.[d.id]})).filter(d=>d.data),c=Object.entries(t.cups||{}),o=(t.awards||[]).filter(d=>d.type==="player-of-season");return`
  <div class="page-head">
    <div><h1>Season ${a.season}/${String(a.season+1).slice(2)} Review</h1><p>${i(s.verdict?.verdict||"The season is complete.")}</p></div>
  </div>
  <div class="grid g2" style="align-items:start">
    <div class="card">
      <div class="card-head"><h3>League champions</h3></div>
      ${e.map(({l:d,data:r})=>`<div class="row spread" style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05)">
        <div class="row" style="gap:8px">${j(r.champion,"tiny")}<span class="small">${i(d.name)}</span></div>
        <b class="small">${r.champion?i(g[r.champion].short):"—"}</b>
      </div>`).join("")}
      <div class="card-head" style="margin-top:14px"><h3>Cup winners</h3></div>
      ${c.map(([d,r])=>`<div class="row spread" style="padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05)">
        <span class="small">${i(Ga[d]?.name||d)}</span>
        <b class="small">${r?i(g[r].name):"—"}</b>
      </div>`).join("")}
    </div>
    <div>
      <div class="card">
        <div class="card-head"><h3>Your season</h3></div>
        <div class="kv"><span>Final position</span><b>${t.managerPosition||"—"}</b></div>
        <div class="kv"><span>Trophies</span><b>${(t.userTrophies||[]).map(d=>d.name).join(", ")||"—"}</b></div>
        <div class="kv"><span>Board confidence</span><b>${Math.round(a.clubs[a.manager.clubId]?.board.confidence||0)}%</b></div>
        <div class="kv"><span>Prize money</span><b>${S(t.finances?.income?.prize||0)}</b></div>
        <div class="kv"><span>Players retiring</span><b>${t.retired?.length||0}</b></div>
        <div style="height:12px"></div>
        <button class="btn primary wide" data-act="next-season">Continue to next season →</button>
      </div>
      <div class="card" style="margin-top:12px">
        <div class="card-head"><h3>Awards</h3></div>
        ${o.slice(0,8).map(d=>`<div class="kv"><span>${i(O[d.leagueId]?.short)} Player of the Season</span><b>${i(d.name)}</b></div>`).join("")||'<p class="dim small">No awards.</p>'}
      </div>
    </div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="card-head"><h3>Final tables</h3></div>
    <div class="grid g2">
      ${e.slice(0,2).map(({l:d,data:r})=>`<div>
        <div class="tiny dim" style="text-transform:uppercase;letter-spacing:.14em;margin-bottom:6px">${i(d.name)}</div>
        <table class="tbl"><tbody>${(r.table||[]).slice(0,8).map((l,u)=>`<tr class="${l.id===a.manager.clubId?"hl":""}"><td class="num dim">${u+1}</td><td>${i(g[l.id].short)}</td><td class="num">${l.pts}</td></tr>`).join("")}</tbody></table>
      </div>`).join("")}
    </div>
  </div>`}function oe(n){const a=n.db,s=X(a),t=g[s],e=t?.leagueId||"premier-league",c=O[e],o=a.comps[e],d=o?Ea(o.table):[],r=d.length?Math.round(Math.max(...d.map(k=>k.p))):0,l=o?.rounds?.length||0,u=n.tab||"league",v=ca(a,s),p=v.filter(k=>!k.played).slice(0,6),b=v.filter(k=>k.played).slice(-6).reverse(),f=Oa(a,s),m=oa(a,s),h=Math.max(1,Math.min(5,Math.round((t.reputation-55)/9))),y=["league","cups","europe","stats"],M={league:c.short||c.name,cups:"Cups",europe:"Europe",stats:"Player stats"};return`
    <div class="ea-head">
      <div>
        <div class="crumbs">Competitions</div>
        <h1>${i(c.name)}</h1>
        <div class="sub">Matchday ${r} of ${l} · Season ${a.season}/${String(a.season+1).slice(2)}</div>
      </div>
      <div class="row" style="gap:8px">
        <span class="ea-btn ghost" style="cursor:default">${m?aa(m):"—"} · ${f.form?.join(" ")||""}</span>
        <button class="ea-btn ghost" data-act="nav" data-screen="calendar">Calendar</button>
      </div>
    </div>
    <div class="cal-months">
      ${y.map(k=>`<button class="${u===k?"on":""}" data-act="tab" data-tab="${k}">${i(M[k])}</button>`).join("")}
    </div>
    <div class="comp-split" style="margin-top:18px">
      <aside class="comp-clubcard">
        <div class="crest-xl">${j(s)}</div>
        <h2>${i(t.name)}</h2>
        <div class="stars">${"★".repeat(h)}</div>
        <div class="lg">${i(c.name)}</div>
      </aside>
      <div class="gtn-panel" style="padding:4px 8px 8px">
        <div class="tbl-wrap" style="max-height:640px">${Ja(a,e)}</div>
      </div>
    </div>
    <div class="grid g2" style="margin-top:18px;align-items:start">
      <div class="card">
        <div class="card-head"><h3>Your fixtures</h3></div>
        <table class="tbl"><tbody>${p.map(k=>la(a,k)).join("")||'<tr><td class="dim small">No fixtures remaining</td></tr>'}</tbody></table>
      </div>
      <div class="card">
        <div class="card-head"><h3>Recent results</h3></div>
        <table class="tbl"><tbody>${b.map(k=>la(a,k)).join("")||'<tr><td class="dim small">No results yet</td></tr>'}</tbody></table>
      </div>
    </div>`}function le(n){const a=n.db,s=X(a),t=n.calendarMonth||(()=>{const h=ja(a.day);return{y:h.y,m:h.m}})(),e=T(t.y,t.m,1),c=Ks(e)%7,o=new Date(Date.UTC(t.y,t.m,0)).getUTCDate();new Date(Date.UTC(t.y,t.m-1,0)).getUTCDate();const d=[];for(let h=c;h>0;h--)d.push(T(t.y,t.m,1)-h);for(let h=1;h<=o;h++)d.push(T(t.y,t.m,h));for(;d.length%7;)d.push(d[d.length-1]+1);const r=da(a.day,a.season),l=a.clubs[s]||{},u=l.schedule||{before:"rest",after:"recovery"},v=l.trainingIntensity||"balanced",p=te(a),b=r.open?"Transfer Window Opened":p[0]?.label||"Season in progress",f=d.map(h=>{const y=ja(h),M=y.m===t.m,k=(a.byDate.get(Ss(h))||[]).find(w=>w.home===s||w.away===s),A=vs(a,h,s),q=A.find(w=>w.cls==="train"),x=A.find(w=>w.cls!=="train"&&!(k&&w.cls!=="match"&&w.cls!=="cup"&&w.cls!=="euro")),L=h===a.day,ua=n.selectedDay===h,ea=k?k.home===s?k.away:k.home:null;return`<button class="cal-cell ${M?"":"out"} ${L?"today":""} ${ua?"sel":""} ${h<a.day?"past":""}" data-act="pick-day" data-day="${h}">
      <span class="d">${y.d}</span>
      ${k?`<span class="fx"><span class="cr">${j(ea,"tiny")}</span><span class="lbl">${k.played?`${k.score[0]}-${k.score[1]}`:k.home===s?"vs":"@"} ${i(g[ea].short)}</span></span>`:""}
      ${q?`<span class="evt" title="${i(q.text)}">▮ Training</span>`:""}
      ${x?`<span class="evt">${i(x.text)}</span>`:""}
    </button>`}).join(""),m=n.selectedDay?vs(a,n.selectedDay,s):[];return`
  <div class="cal-page">
    <div class="cal-main">
      <div class="cal-top">
        <h1>Calendar</h1>
        <div class="cal-nav">
          <button class="ea-btn ghost sm" data-act="cal-prev">←</button>
          <button class="ea-btn ghost sm" data-act="cal-next">→</button>
          <button class="ea-btn primary sm" data-act="sim-menu">Simulate</button>
        </div>
      </div>
      <div class="cal-monthbar">
        ${[6,7,8,9,10,11,0,1,2,3,4,5].map(h=>{const y=h>=6?a.season:a.season+1;return`<button class="${t.m===h+1&&t.y===y?"on":""}" data-act="cal-month" data-m="${h+1}" data-y="${y}">${Ua[h]}</button>`}).join("")}
      </div>
      <div class="cal-week">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(h=>`<span>${h}</span>`).join("")}</div>
      <div class="cal-board">${f}</div>
      <div class="cal-actions">
        <button class="ea-btn primary" data-act="advance">Advance one day</button>
        <button class="ea-btn ghost" data-act="sim-date">Sim to date</button>
        <button class="ea-btn ghost" data-act="sim-season">Sim to end of season</button>
      </div>
    </div>

    <aside class="cal-rail">
      <div class="year">${t.y}</div>
      <div class="mon">${Ua[t.m-1]}</div>
      <div class="rail-event">${i(b)}</div>

      <div class="rail-block">
        <div class="rh">◈ Schedule rules</div>
        <button class="rule" data-act="cal-rule" data-rule="before">
          <span>Before match</span><b>${u.before==="rest"?"Rest day":"Training"}</b><i>◂ ▸</i>
        </button>
        <button class="rule" data-act="cal-rule" data-rule="after">
          <span>After match</span><b>${u.after==="recovery"?"Recovery day":"Training"}</b><i>◂ ▸</i>
        </button>
        <button class="rule" data-act="nav" data-screen="training">
          <span>Weekly plan</span><b>${i(js[v]?.label||"Balanced")}</b><i>▸</i>
        </button>
      </div>

      <div class="rail-block">
        <div class="rh">Key dates</div>
        ${p.map(h=>`<div class="krow"><span>${i(h.label)}</span><b>${i(V(h.day))}</b></div>`).join("")}
      </div>

      <div class="rail-block">
        <div class="rh">${n.selectedDay?i(Q(n.selectedDay)):"Select a day"}</div>
        ${n.selectedDay?m.length?m.map(h=>`<div class="krow"><span>${i(h.text)}</span><b>${i(h.tag||"")}</b></div>`).join(""):'<p class="dim small">Nothing scheduled.</p>':'<p class="dim small">Pick a day on the board to see fixtures, training and deadlines.</p>'}
        ${n.selectedDay&&n.selectedDay>a.day?`<button class="ea-btn primary wide" style="margin-top:10px" data-act="sim-to-selected" data-day="${n.selectedDay}">Simulate to ${i(V(n.selectedDay))}</button>`:""}
      </div>
    </aside>
  </div>`}function qa(n,a,s){const t=Math.max(0,Math.min(100,Math.round(a)));return`<div class="f-ring">
    <div class="dial" style="--p:${t};--tone:${s}"><span>${t}</span></div>
    <small>${n}</small>
  </div>`}function hs(n){const a=n.db,s=X(a);if(!s)return Qt(a);const t=g[s],e=Oa(a,s),c=O[t.leagueId],o=Cs(a,s),d=oa(a,s),r=da(a.day,a.season),l=E(a,s),u=ja(a.day),v=new Date(a.day*864e5).toLocaleDateString("en-GB",{weekday:"short",timeZone:"UTC"}).toUpperCase(),p=e.board.objectives?.length?e.board.objectives:ct(a,s),b=w=>Math.round(l.reduce((B,_)=>B+(_[w]||0),0)/Math.max(1,l.length)),f=b("fitness"),m=b("sharpness"),h=b("morale"),y=ca(a,s).filter(w=>w.played),M=y.slice(-4).reverse(),k=ca(a,s).filter(w=>!w.played).slice(0,5),A=a.news.slice(0,5),q=Pa[e.tactics.formation]?.name||e.tactics.formation,x=o?a.comps[o.compId]:null,L=Array.isArray(e.form)&&e.form.length?e.form:y.slice(-5).map(w=>{const B=w.home===s,_=B?w.score[0]:w.score[1],na=B?w.score[1]:w.score[0];return _>na?"W":_===na?"D":"L"}),ua=o?`
    <section class="f-hero" data-act="pre-match" data-fixture="${i(o.id)}">
      <div class="f-hero-scene"><span class="pitchline"></span><span class="crowd"></span></div>
      <div class="f-hero-inner">
        <div class="f-hero-comp">${i(x?.name||"Fixture")} · ${o.home===s?"Home":"Away"}</div>
        <div class="f-hero-match">
          <div class="f-side">
            ${j(o.home)}
            <span class="nm">${i(g[o.home].name)}</span>
          </div>
          <div class="f-vs">
            <div class="f-when">${i(V(o.date))} · ${i(Va())}</div>
            <div class="f-vs-word">VS</div>
            <div class="f-venue">${i(g[o.home].stadium)}</div>
          </div>
          <div class="f-side">
            ${j(o.away)}
            <span class="nm">${i(g[o.away].name)}</span>
          </div>
        </div>
        <div class="f-hero-foot">
          <span class="f-tag">Next match</span>
          <div class="f-hero-btns">
            <button class="f-cta" data-act="pre-match" data-fixture="${i(o.id)}">Match preview</button>
            <button class="f-ghost" data-act="nav" data-screen="calendar">Calendar</button>
            <button class="f-ghost" data-act="advance">Advance</button>
          </div>
        </div>
      </div>
    </section>`:`
    <section class="f-hero empty">
      <div class="f-hero-inner">
        <div class="f-hero-comp">Season complete</div>
        <h2 style="font-family:var(--display);font-size:30px;margin:8px 0 4px">No fixtures scheduled</h2>
        <p class="small dim">Advance to the end of the season to continue.</p>
        <button class="f-cta" data-act="advance">Advance</button>
      </div>
    </section>`,ea=`
    <div class="f-rings">
      ${qa("Fitness",f,"#39e07a")}
      ${qa("Sharpness",m,"#ffc043")}
      ${qa("Morale",h,"#ffc043")}
    </div>`;return`
  <div class="central">
    <div class="central-main">
      ${ua}

      <div class="f-tiles">
        ${[["Training day","training","⚒","Plan the week"],["Standings","competitions","▤",`${d?aa(d):"—"} in ${i(c.short||c.name)}`],["Weekly schedule","calendar","▦",r.open?`Window open · ${r.daysLeft}d`:"Fixtures & training"],["Objectives","office","◎",`${p.length} board targets`],["News","news","✉",`${A.length} stories`]].map(([w,B,_,na])=>`
          <button class="f-tile" data-act="nav" data-screen="${B}">
            <span class="ic">${_}</span>
            <span class="tx"><b>${w}</b><span>${na}</span></span>
          </button>`).join("")}
      </div>

      <div class="two-col">
        <div class="f-panel">
          <div class="f-panel-h"><h3>Latest news</h3><button class="f-link" data-act="nav" data-screen="news">All news</button></div>
          ${A.length?A.slice(0,3).map(w=>`
            <button class="f-newsrow" data-act="open-news" data-id="${i(w.id)}">
              <span class="tag">${i(w.type||"News")}</span>
              <span class="tx">${i(w.headline)}</span>
              <span class="dt">${i(V(w.date))}</span>
            </button>`).join(""):'<p class="dim small">No news yet. Advance a day.</p>'}
        </div>

        <div class="f-panel">
          <div class="f-panel-h"><h3>Board confidence</h3><button class="f-link" data-act="nav" data-screen="office">Office</button></div>
          <div class="f-conf">
            <div class="score ${e.board.confidence>60?"up":e.board.confidence<35?"down":"mid"}">${Math.round(e.board.confidence)}<small>%</small></div>
            <div class="barwrap">${ta(e.board.confidence,e.board.confidence<35?"bad":"warn")}
              <p class="tiny dim">Target: ${i(e.board.objectiveLabel||"—")} · currently ${d?aa(d):"—"}</p>
            </div>
          </div>
          <div class="f-obj">
            ${p.slice(0,3).map(w=>`<div class="row"><span>${i(w.label)}</span><span class="pill ${w.status==="on-track"?"w":w.status==="at-risk"?"d":w.status==="failing"?"l":""}">${(w.status||"active").replace("-"," ")}</span></div>`).join("")}
          </div>
        </div>
      </div>

      <div class="two-col">
        <div class="f-panel">
          <div class="f-panel-h"><h3>League table</h3><button class="f-link" data-act="nav" data-screen="competitions">Full table</button></div>
          <div class="f-table">${Ja(a,t.leagueId,{limit:6,compact:!0})}</div>
        </div>
        <div class="f-panel">
          <div class="f-panel-h"><h3>Upcoming fixtures</h3><button class="f-link" data-act="nav" data-screen="calendar">Calendar</button></div>
          ${k.map(w=>la(a,w)).join("")||'<p class="dim small">No fixtures remaining.</p>'}
        </div>
      </div>

      <div class="two-col">
        <div class="f-panel">
          <div class="f-panel-h"><h3>Recent results</h3><button class="f-link" data-act="nav" data-screen="competitions">Competitions</button></div>
          ${M.map(w=>la(a,w)).join("")||'<p class="dim small">No matches played yet.</p>'}
        </div>
        <div class="f-panel">
          <div class="f-panel-h"><h3>Competition overview</h3><button class="f-link" data-act="nav" data-screen="competitions">Open</button></div>
          <div class="f-comp-row"><span>${i(c.name)}</span><b>${d?aa(d):"—"}</b></div>
          ${Object.values(a.comps).filter(w=>w.type!=="league"&&(w.participants?.includes?.(s)||w.clubIds?.includes?.(s))).slice(0,3).map(w=>`<div class="f-comp-row"><span>${i(w.name)}</span><b class="dim">In competition</b></div>`).join("")}
          <div class="f-comp-row"><span>Squad value</span><b>${S(l.reduce((w,B)=>w+(B.value||0),0))}</b></div>
          <div class="f-comp-row"><span>Average age</span><b>${(l.reduce((w,B)=>w+Math.floor((a.day-B.dob)/365.25),0)/Math.max(1,l.length)).toFixed(1)}</b></div>
        </div>
      </div>
    </div>

    <aside class="central-side">
      <div class="f-panel f-training">
        <div class="f-panel-h"><h3>Training day</h3><span class="tiny dim">${Ua[u.m-1]} ${u.y}</span></div>
        <div class="f-dayrow">
          <b>${u.d}</b>
          <div><span>${v}</span><em>Training day</em></div>
          <i>▮</i>
        </div>
        <div class="f-default">${i(t.name)} default<br><b>${i(q)}</b></div>
        ${ea}
        <button class="f-cta wide" data-act="advance">Simulate training</button>
      </div>

      <div class="f-panel">
        <div class="f-panel-h"><h3>Next match</h3></div>
        ${o?`
          <div class="f-mini-match">
            <div class="mg">${j(o.home,"sm")}<span>${i(g[o.home].short)}</span></div>
            <div class="mm">v</div>
            <div class="mg">${j(o.away,"sm")}<span>${i(g[o.away].short)}</span></div>
          </div>
          <div class="kv"><span>Competition</span><b>${i(x?.name||"—")}</b></div>
          <div class="kv"><span>Date</span><b>${i(Q(o.date))}</b></div>
          <div class="kv"><span>Kick-off</span><b>${i(Va())}</b></div>
          <div class="kv"><span>Venue</span><b>${i(g[o.home].stadium)}</b></div>
          <div class="kv"><span>Form</span><b>${Ds(L)}</b></div>
          <button class="f-cta wide" data-act="pre-match" data-fixture="${i(o.id)}">Match preview</button>
        `:'<p class="dim small">No fixture scheduled.</p>'}
      </div>

      <div class="f-panel">
        <div class="f-panel-h"><h3>Squad snapshot</h3><button class="f-link" data-act="section" data-section="squad">Squad</button></div>
        <div class="kv"><span>Players</span><b>${l.length}</b></div>
        <div class="kv"><span>Average overall</span><b>${Ya(a,s)}</b></div>
        <div class="kv"><span>Injured</span><b class="${l.some(w=>w.injury)?"down":""}">${l.filter(w=>w.injury).length}</b></div>
        <div class="kv"><span>Expiring contracts</span><b>${l.filter(w=>(w.contract?.until??0)<=a.season+1).length}</b></div>
        <button class="f-ghost wide" data-act="nav" data-screen="tactics">Tactics &amp; roles</button>
      </div>
    </aside>
  </div>`}const de=["Dave","Kev","Sarah","Mo","Jen","Tom","Priya","Ade","Liam","Chloe","Ravi","Niamh","Callum","Ella"],re=["B","87","T","Smithy","M","P","G","K","J","D","X","O"],pe=[{name:"Sam Whitlock",handle:"samwhitlock",outlet:"The Touchline"},{name:"Marta Vieira",handle:"martavieira",outlet:"Football Daily"},{name:"Dan Okoro",handle:"danokoro",outlet:"Kick Off"},{name:"Leo Marsh",handle:"leomarsh",outlet:"Press Box"}],ue=[{name:"Gary Holt",handle:"garyholt",outlet:"Match Panel"},{name:"Nina Costa",handle:"ninacosta",outlet:"The Analysis Desk"},{name:"Rob Kelsey",handle:"robkelsey",outlet:"Touchline TV"}],ve=[{name:"Fabien Rossi",handle:"fabienrossi",outlet:"Transfer Desk"},{name:"Amara Bello",handle:"amarabello",outlet:"Window Watch"}],he={"premier-league":{name:"Premier League",handle:"premierleague"},"la-liga":{name:"LaLiga",handle:"laliga"},bundesliga:{name:"Bundesliga",handle:"bundesliga"},"serie-a":{name:"Serie A",handle:"seriea"},"ligue-1":{name:"Ligue 1",handle:"ligue1"},eredivisie:{name:"Eredivisie",handle:"eredivisie"},"liga-portugal":{name:"Liga Portugal",handle:"ligaportugal"},championship:{name:"EFL Championship",handle:"eflchampionship"}};function Bs(n){return n.social||(n.social={posts:[],seen:{},scanned:n.day-1,likes:{},reposts:{}}),n.social.posts=n.social.posts||[],n.social.seen=n.social.seen||{},n.social.likes=n.social.likes||{},n.social.reposts=n.social.reposts||{},n.social}function J(n,a){return a[Math.floor(n()*a.length)%a.length]}function ga(n,a,s){const t=J(a,de),e=J(a,re),c=g[s];return{kind:"fan",name:`${t} ${e}`.trim(),handle:`${t.toLowerCase()}${c?c.short.toLowerCase().replace(/[^a-z]/g,""):"fc"}${Math.floor(a()*90+10)}`,clubId:s}}function Z(n){const a=J(n,pe);return{kind:"journalist",name:a.name,handle:a.handle,verified:!0,outlet:a.outlet}}function Us(n){const a=J(n,ue);return{kind:"pundit",name:a.name,handle:a.handle,verified:!0,outlet:a.outlet}}function ms(n){const a=J(n,ve);return{kind:"reporter",name:a.name,handle:a.handle,verified:!0,outlet:a.outlet}}function me(n,a){const s=g[a];return s?{kind:"club",name:s.name,handle:s.short.toLowerCase().replace(/[^a-z]/g,""),clubId:a,verified:!0}:Z(()=>.2)}function Ws(n,a,s){return a+zs(n)%(s-a)}function be(n,a,s,t){const e=[],c=2+Math.floor(a()*3),o=s.author.clubId||n.manager.clubId;for(let d=0;d<c;d++){const r=d===0&&a()>.6?Z(a):ga(n,a,o),l={win:["Massive three points.","Best performance of the season.","We are going all the way.","That second half was superb."],loss:["Not good enough.","The board needs to act.","Same mistakes every week.","We were asleep for the first 20 minutes."],draw:["Two points dropped.","A point is better than nothing.","We need to be more clinical."],neutral:["Interesting.","Here we go again.","Window is going to be busy.","Big few weeks coming up."],transfer:["Here we go!","Exactly the profile we needed.","That fee is far too high.","Announce it already."],youth:["Academy is doing bits.","Give him a start.","This is what we want to see."]};e.push({id:`${s.id}-c${d}`,author:r,text:J(a,l[t]||l.neutral),likes:Ws(s.id+d,2,220)})}return e}function R(n,a,s){const t=Bs(n),e=`sp${n.social.posts.length+1}-${n.day}`,c=Ws(e+s.text,45,s.author.kind==="club"?26e3:9e3),o={id:e,day:n.day,author:s.author,text:s.text,tags:s.tags||[],tone:s.tone||"neutral",likes:c,reposts:Math.floor(c/7),comments:[],playerId:s.playerId||null,clubId:s.clubId||s.author.clubId||null,kind:s.kind||"news"};return o.comments=be(n,a,o,o.tone),t.posts.unshift(o),t.posts.length>180&&(t.posts.length=180),o}function fe(n,a=Math.random){const s=Bs(n),t=(n.news||[]).filter(e=>e.day>=s.scanned-1);for(const e of t){const c=e.id||`${e.day}:${e.headline}`;if(s.seen[c])continue;s.seen[c]=!0;const o=e.type||"news",d=/won|win|victory|beat|thrash|champion|promot/i.test(e.headline)?"win":/lost|defeat|sack|relegat|injur|reject/i.test(e.headline)?"loss":/draw|held/i.test(e.headline)?"draw":o==="transfer"||o==="rumour"?"transfer":o==="youth"?"youth":"neutral",r=e.clubId||n.manager.clubId;o==="match"?(R(n,a,{author:me(n,r),text:e.headline,tags:[`#${g[r]?.short||"FC"}`],tone:d,clubId:r,kind:"match"}),e.playerId&&R(n,a,{author:ga(n,a,r),text:e.body||e.headline,tags:[],tone:d,clubId:r,kind:"fan"}),a()>.45&&R(n,a,{author:Us(a),text:`${e.headline} ${e.body||""}`.trim(),tags:["#Matchday"],tone:d,clubId:r,kind:"pundit"})):o==="transfer"?(R(n,a,{author:ms(a),text:`BREAKING: ${e.headline}. ${e.body||""}`.trim(),tags:["#TransferNews"],tone:"transfer",clubId:r,playerId:e.playerId,kind:"transfer"}),R(n,a,{author:ga(n,a,r),text:J(a,["Announce him.","This is the signing we needed.","Please be true.","Not sure about this one."]),tags:[],tone:"transfer",clubId:r,kind:"fan"})):o==="rumour"?R(n,a,{author:ms(a),text:e.headline,tags:["#RumourMill","#TransferNews"],tone:"transfer",clubId:r,playerId:e.playerId,kind:"transfer"}):o==="injury"?R(n,a,{author:Z(a),text:`${e.headline}. ${e.body||""}`.trim(),tags:["#InjuryNews"],tone:"loss",clubId:r,playerId:e.playerId,kind:"injury"}):o==="youth"?R(n,a,{author:Z(a),text:e.headline,tags:["#Academy"],tone:"youth",clubId:r,playerId:e.playerId,kind:"youth"}):o==="press"?(R(n,a,{author:Z(a),text:`${e.headline}. ${e.body||""}`.trim(),tags:["#PressConference"],tone:"neutral",clubId:r,kind:"news"}),R(n,a,{author:ga(n,a,r),text:J(a,["Bold words. Now show it on the pitch.","Finally some honesty from the manager.","Talk is cheap.","That answer will not please everyone."]),tags:[],tone:"neutral",clubId:r,kind:"fan"})):o==="manager"?R(n,a,{author:Z(a),text:`${e.headline}. ${e.body||""}`.trim(),tags:["#ManagerNews"],tone:d,clubId:r,kind:"manager"}):R(n,a,{author:Z(a),text:e.headline,tags:[],tone:d,clubId:r,kind:"news"})}return s.scanned=n.day,s.posts.length||ge(n,a),s}function ge(n,a){const s=n.manager.clubId;if(!s)return;const t=g[s],e=O[t.leagueId];R(n,a,{author:{...he[t.leagueId]||{name:e.name,handle:"league"},kind:"competition",verified:!0},text:`${e.name} matchday is coming. ${t.short} are back in action soon.`,tags:[`#${t.short}`],tone:"neutral",clubId:s,kind:"ambient"}),R(n,a,{author:Us(a),text:`Early prediction: ${t.name} finish in the top half this season. Plenty of work still to do.`,tags:["#SeasonPreview"],tone:"neutral",clubId:s,kind:"ambient"}),R(n,a,{author:ga(n,a,s),text:"New season, same hope. Up the club.",tags:[],tone:"neutral",clubId:s,kind:"fan"})}function $e(n,a,s=Math.random){fe(n,s);const t=n.social,e=a.socialFilter||"all",c=n.manager.clubId;let o=t.posts;return e==="club"&&(o=o.filter(d=>d.clubId===c||d.author.clubId===c)),e==="fans"&&(o=o.filter(d=>d.author.kind==="fan")),e==="transfers"&&(o=o.filter(d=>d.kind==="transfer"||d.tags.includes("#RumourMill"))),e==="pundits"&&(o=o.filter(d=>d.author.kind==="pundit"||d.author.kind==="journalist")),{posts:o,social:t,filter:e}}function ye(n){const a={};for(const s of n.social?.posts||[])for(const t of s.tags||[])a[t]=(a[t]||0)+1;return Object.entries(a).sort((s,t)=>t[1]-s[1]).slice(0,6).map(([s,t])=>({tag:s,posts:t}))}const G=n=>n.manager.clubId,ba=(n,a)=>n.clubs?.[a]?.name||g[a]?.name||n.clubs?.[a]?.short||"Club",Hs=(n,a)=>n.clubs?.[a]?.stadium||g[a]?.stadium||"Academy pitch",La=n=>{const a=String(n||"?").trim().split(/\s+/);return((a[0]?.[0]||"")+(a[1]?.[0]||"")).toUpperCase()||"?"},we=n=>({GK:"#f6c453",CB:"#74a7ff",LB:"#74a7ff",RB:"#74a7ff",CDM:"#58e0b0",CM:"#58e0b0",CAM:"#b88cff",LW:"#ff9d7a",RW:"#ff9d7a",ST:"#ff7a7a"})[n]||"#58e0b0";function Sa(n,a=""){const s=we(n.pos);return`<span class="ac-face ${a}" style="--face-tone:${s}">${La(C(n))}<i>${i(n.pos||"")}</i></span>`}function sa(n){const a=Is(Math.round((Number(n)||0)/20),1,5);return`<span class="ac-stars">${[1,2,3,4,5].map(s=>`<i class="${s<=a?"on":""}">★</i>`).join("")}</span>`}function bs(n,a){return ka(n,a).age}function ya(n,a){return(n.scoutAssignments||[]).find(s=>s.scoutId===a&&!s.done)||null}function z(n){return`${n.first||""} ${n.last||""}`.trim()||"Scout"}function wa(n,a){return Is((n.day-a.started)/Math.max(1,a.duration)*100,0,100)}function Ia(n,a){const s=Math.max(0,a.started+a.duration-n.day);return s<=0?"Report ready":s<7?`${s} day${s===1?"":"s"} left`:`${Math.ceil(s/7)} week${Math.ceil(s/7)===1?"":"s"} left`}function Ta(n,a,s,t=""){return`<div class="ea-head ac-head">
    <div>
      <div class="crumbs">Youth Academy</div>
      <h1>${i(a)}</h1>
      <div class="sub">${i(s)}</div>
    </div>
    <div class="ac-head-right">${t}</div>
  </div>`}function ke(n,a){return`<div class="ac-tabs">${[["hub","Academy"],["squad","Youth Squad"],["staff","Youth Staff"],["network","Scout Network"],["cup","Tournaments"]].map(([t,e])=>`<button type="button" class="${a===t?"on":""}" data-act="academy-tab" data-tab="${t}">${e}</button>`).join("")}</div>`}function fs(n,{hire:a=!1,club:s=null,db:t=null}={}){const e=!a&&s?ya(s,n.id):null,c=e?`${e.nation} · ${Ia(t,e)}`:a?"Available to hire":"Scout Available",o=e?`${e.instruction||"Any"} assignment in progress`:a?"Hire an additional scout to cover more ground in finding potential young talent.":"Scout is available for a new mission.";return`<div class="ac-scout-card ${e?"busy":""} ${a?"hire":""}" ${a?`data-act="academy-hire-scout" data-id="${i(n.id)}"`:`data-act="academy-scout" data-id="${i(n.id)}"`}>
    <div class="ac-scout-name">${i(z(n))}</div>
    <div class="ac-scout-stats">
      <div><span>Experience</span>${sa(n.experience)}</div>
      <div><span>Judgement</span>${sa(n.judgement)}</div>
    </div>
    <div class="ac-scout-status">${a?"HIRE SCOUT":i(c)}</div>
    <div class="ac-scout-glyph">${a?"<b>+</b>🔭":"🔭"}</div>
    <div class="ac-scout-note">${i(o)}</div>
    ${a?`<div class="ac-scout-hire-foot"><b>Hire</b><span>${n.wage?`${Math.round(n.wage/1e3)}k/wk`:""}</span></div>`:""}
  </div>`}function _s(n,a,{compare:s=!1}={}){const t=ka(n,a),e=fa(n);return`<div class="ac-player-row" role="button" tabindex="0" data-act="academy-player" data-id="${i(n.id)}">
    <span class="ac-row-face">${Sa(n)}</span>
    <span class="ac-row-name"><b>${i(C(n))}</b><em>${i(n.nat)} · ${t.age}y · ${i(t.growthLabel)}</em></span>
    <span class="ac-row-pos">${F(n.pos)}</span>
    <span class="ac-row-ovr">${K(n.ovr)}</span>
    <span class="ac-row-pot"><b>${i(xa(n))}</b><em>${i(e.plan.label)}</em></span>
    <span class="ac-row-dev"><i style="width:${Math.round(e.progress)}%"></i></span>
    ${s?`<button type="button" class="ac-row-add" data-act="academy-compare" data-id="${i(n.id)}" title="Add to comparison">⇄</button>`:""}
  </div>`}function xe(n,a,s,t){const e=ka(n,t);return`<div class="ac-report-card">
    <div class="ac-report-top">${Sa(n,"lg")}<div><div class="tiny dim">SCOUT REPORT · ${i(a.nation)}</div><h3>${i(C(n))}</h3><div class="ac-report-meta">${F(n.pos)} ${i(n.nat)} · ${e.age}y · ${e.height}cm · ${i(e.foot)} foot</div></div></div>
    <div class="ac-report-stats">
      <div><span>OVR</span><b>${n.ovr}</b></div>
      <div><span>Potential</span><b>${i(xa(n))}</b></div>
      <div><span>Fee</span><b>£${Math.round((Math.max(42,n.pot)-40)**2*900/1e3)}k</b></div>
    </div>
    <div class="ac-report-actions">
      <button type="button" class="ac-btn ghost" data-act="academy-report" data-assignment="${i(a.id)}" data-index="${s}">Full report</button>
      <button type="button" class="ac-btn" data-act="academy-reject" data-assignment="${i(a.id)}" data-index="${s}">Reject</button>
      <button type="button" class="ac-btn primary" data-act="academy-sign" data-assignment="${i(a.id)}" data-index="${s}">Sign to Academy</button>
    </div>
  </div>`}function Se(n){const a=n.db,s=G(a),t=ra(a,s),e=a.clubs[s],c=Ns(a),o=c.cup.ties||[],r=Ps(a)[0]||null||o.find(h=>!h.played&&(h.home===s||h.away===s))||null,l=r?r.home===s?r.away:r.home:null,u=r?Math.max(0,r.date-a.day):null,v=o.filter(h=>h.played&&(h.home===s||h.away===s)).slice(-3).reverse(),p=vt(t.prospects),b=t.scouts,f=b.filter(h=>!ya(e,h.id)).length,m=Object.values(a.players||{}).filter(h=>h.loan&&(h.loan.from===s||h.loan.parentClubId===s));return`
    <div class="ac-hub">
      <div class="ac-hub-main">
        <section class="ac-hero-card ac-tournament">
          <div class="ac-card-kicker">YOUTH TOURNAMENT</div>
          <div class="ac-card-head"><h2>${i(c.cup.name||"FC 27 Youth Cup")}</h2><span class="ac-chip">${c.cup.winner?"COMPLETE":"LIVE"}</span></div>
          <div class="ac-tournament-body">
            <div class="ac-fixture">
              <div class="ac-fixture-team">${j(s)}<b>${i(e.short)}</b></div>
              <div class="ac-fixture-vs">VS</div>
              <div class="ac-fixture-team">${l?j(l):'<span class="ac-empty-crest">?</span>'}<b>${l?i(g[l]?.short||l):"TBC"}</b></div>
            </div>
            <div class="ac-fixture-meta">
              <div><span>STAGE</span><b>${c.cup.winner?"Winner":["Quarter-final","Semi-final","Final"][c.cup.round]||"Group stage"}</b></div>
              <div><span>NEXT FIXTURE</span><b>${r?u>0?`${u} day${u===1?"":"s"}`:"Ready to play":"Awaiting draw"}</b></div>
              <div><span>VENUE</span><b>${i(c.cup.stadium||`${Hs(a,s)} academy pitch`)}</b></div>
            </div>
          </div>
          <div class="ac-card-actions">
            <button type="button" class="ac-btn ghost" data-act="academy-tab" data-tab="cup">View tournament</button>
            <button type="button" class="ac-btn primary" data-act="academy-enter-cup">${r?"Enter tournament":"Open dashboard"}</button>
          </div>
          ${v.length?`<div class="ac-recent"><span>RECENT RESULTS</span>${v.map(h=>{const y=h.home===s,M=y?h.hg:h.ag,k=y?h.ag:h.hg;return`<div class="ac-recent-row"><b class="${M>k?"up":M<k?"down":""}">${M}–${k}</b><em>${i(g[y?h.away:h.home]?.short||"")}</em></div>`}).join("")}</div>`:""}
        </section>

        <section class="ac-hero-card">
          <div class="ac-card-kicker">YOUTH SQUAD</div>
          <div class="ac-card-head"><h2>Academy squad</h2><span class="ac-chip">${p.count}/${ht}</span></div>
          <div class="ac-squad-metrics">
            <div><span>Academy players</span><b>${p.count}</b></div>
            <div><span>Highest rated</span><b>${p.highestRated?`${p.highestRated.ovr} <em>${i(C(p.highestRated))}</em>`:"—"}</b></div>
            <div><span>Highest potential</span><b>${p.highestPotential?i(C(p.highestPotential)):"—"}</b></div>
            <div><span>Average overall</span><b>${p.averageOvr||"—"}</b></div>
          </div>
          <div class="ac-squad-list">
            ${t.prospects.slice(0,5).map(h=>_s(h,a)).join("")||'<p class="ac-empty">No academy players yet. Send a scout out to find the next generation.</p>'}
          </div>
          <div class="ac-card-actions"><button type="button" class="ac-btn ghost" data-act="academy-tab" data-tab="squad">Open youth squad</button><button type="button" class="ac-btn" data-act="academy-tab" data-tab="staff">Manage scouts</button></div>
        </section>
      </div>

      <aside class="ac-hub-side">
        <section class="ac-side-card">
          <div class="ac-card-kicker">YOUTH SCOUTS</div>
          <div class="ac-card-head"><h2>Scout network</h2><span class="ac-chip">${b.length}/3</span></div>
          ${b.length?b.map(h=>{const y=ya(e,h.id);return`<button type="button" class="ac-scout-line" data-act="academy-scout" data-id="${i(h.id)}">
              <span class="ac-scout-line-face">${La(z(h))}</span>
              <span class="ac-scout-line-copy"><b>${i(z(h))}</b><em>${y?`${y.nation} · ${Ia(a,y)}`:"Available for a new mission"}</em></span>
              ${sa(h.judgement)}
            </button>`}).join(""):'<p class="ac-empty">No scouts employed.</p>'}
          <button type="button" class="ac-new-network" data-act="academy-tab" data-tab="staff"><span>＋</span> New Scouting Network</button>
          <div class="ac-side-foot"><span>${f} available</span><span>${(e.scoutAssignments||[]).filter(h=>h.done&&h.reports?.length).reduce((h,y)=>h+y.reports.length,0)} reports waiting</span></div>
        </section>

        ${m.length?`<section class="ac-side-card">
          <div class="ac-card-kicker">LOAN WATCH</div>
          <div class="ac-card-head"><h2>Out on loan</h2><span class="ac-chip">${m.length}</span></div>
          <div class="ac-squad-list">${m.map(h=>`<button type="button" class="ac-scout-line" data-act="academy-player" data-id="${i(h.id)}">
            ${Sa(h)}
            <span class="ac-scout-line-copy"><b>${i(C(h))}</b><em>${i(g[h.loan.clubId]?.short||h.loan.clubId)} · until ${h.loan.until}</em></span>
            ${K(h.ovr)}
          </button>`).join("")}</div>
          <p class="ac-note">Academy players on loan remain contracted to ${i(ba(a,s))} and rejoin the youth squad when the loan ends.</p>
        </section>`:""}
        <section class="ac-side-card">
          <div class="ac-card-kicker">ACADEMY STATUS</div>
          <div class="ac-kv"><span>Academy level</span><b>${t.facilities}/5</b></div>
          <div class="ac-kv"><span>Youth form</span><b>${t.wins}W ${t.draws}D ${t.losses}L</b></div>
          <div class="ac-kv"><span>Development plans</span><b>${t.prospects.filter(h=>h.devPlan&&h.devPlan!=="balanced").length} active</b></div>
          <div class="ac-kv"><span>Scouting budget</span><b>${Math.round((e.budget?.balance||0)/1e6)}M</b></div>
          <p class="ac-note">Scout judgement and academy facilities affect how precise a player's potential assessment is. Better staff see a narrower range.</p>
        </section>
      </aside>
    </div>`}function Ie(n){const a=n.db,s=G(a),t=ra(a,s),e=n.academyFilter||{},c=String(n.academySearch||"").toLowerCase();let o=t.prospects.slice();e.pos&&(o=o.filter(l=>l.pos===e.pos||(l.secondaryPositions||[]).includes(e.pos))),e.min&&(o=o.filter(l=>l.ovr>=Number(e.min))),e.potential&&(o=o.filter(l=>(l.potentialEstimate||l.pot)>=Number(e.potential))),c&&(o=o.filter(l=>`${C(l)} ${l.nat} ${l.pos}`.toLowerCase().includes(c)));const d=e.sort||"potential";o.sort((l,u)=>d==="ovr"?u.ovr-l.ovr:d==="age"?bs(l,a)-bs(u,a):d==="name"?C(l).localeCompare(C(u)):d==="dev"?fa(u).progress-fa(l).progress:(u.potentialEstimate||u.pot)-(l.potentialEstimate||l.pot));const r=(n.academyCompare||[]).map(l=>a.players[l]).filter(Boolean);return`
    <section class="ac-panel">
      <div class="ac-panel-head"><div><div class="ac-card-kicker">YOUTH SQUAD</div><h2>Youth squad</h2></div><span class="ac-chip">${o.length} of ${t.prospects.length}</span></div>
      <div class="ac-toolbar">
        <label class="ac-search"><span>⌕</span><input type="search" placeholder="Search players" value="${i(n.academySearch||"")}" data-input="academy-search"/></label>
        <select class="ac-select" data-change="academy-filter" data-key="pos"><option value="">All positions</option>${["GK","CB","LB","RB","CDM","CM","CAM","LW","RW","ST"].map(l=>`<option value="${l}" ${e.pos===l?"selected":""}>${l}</option>`).join("")}</select>
        <select class="ac-select" data-change="academy-filter" data-key="min"><option value="">Any OVR</option>${[50,55,60,65,70,75].map(l=>`<option value="${l}" ${Number(e.min)===l?"selected":""}>OVR ${l}+</option>`).join("")}</select>
        <select class="ac-select" data-change="academy-filter" data-key="potential"><option value="">Any potential</option>${[65,70,75,80,85].map(l=>`<option value="${l}" ${Number(e.potential)===l?"selected":""}>POT ${l}+</option>`).join("")}</select>
        <select class="ac-select" data-change="academy-filter" data-key="sort"><option value="potential" ${d==="potential"?"selected":""}>Sort: potential</option><option value="ovr" ${d==="ovr"?"selected":""}>Sort: overall</option><option value="age" ${d==="age"?"selected":""}>Sort: age</option><option value="dev" ${d==="dev"?"selected":""}>Sort: development</option><option value="name" ${d==="name"?"selected":""}>Sort: name</option></select>
      </div>
      <div class="ac-table-head"><span>Player</span><span>Pos</span><span>OVR</span><span>Potential</span><span>Plan</span><span></span></div>
      <div class="ac-player-list">
        ${o.length?o.map(l=>_s(l,a,{compare:!0})).join(""):'<div class="ac-empty">No academy players match those filters.</div>'}
      </div>
      ${r.length?`<div class="ac-compare">
        <div class="ac-panel-head"><div><div class="ac-card-kicker">PLAYER COMPARISON</div><h3>${r.map(l=>i(C(l))).join(" vs ")}</h3></div><button type="button" class="ac-btn ghost" data-act="academy-clear-compare">Clear</button></div>
        <div class="ac-compare-grid">
          ${Aa.map(([l,u])=>`<div class="ac-compare-row"><span>${u}</span>${r.map(v=>`<b>${v.attrs?.[l]??"—"}</b>`).join("")}</div>`).join("")}
          <div class="ac-compare-row"><span>Overall</span>${r.map(l=>`<b>${l.ovr}</b>`).join("")}</div>
          <div class="ac-compare-row"><span>Potential</span>${r.map(l=>`<b>${i(xa(l))}</b>`).join("")}</div>
          <div class="ac-compare-row"><span>Plan</span>${r.map(l=>`<b>${i(fa(l).plan.label)}</b>`).join("")}</div>
        </div>
      </div>`:""}
    </section>`}function Ce(n){const a=n.db,s=G(a),t=a.clubs[s],e=ra(a,s),c=As(a,s),o=(t.scoutAssignments||[]).filter(d=>!d.done);return`
    <section class="ac-panel">
      <div class="ac-panel-head"><div><div class="ac-card-kicker">YOUTH STAFF</div><h2>Scout network</h2><p>Scouts find the players. Judgement decides how much of the report you can trust.</p></div><span class="ac-chip">${e.scouts.length}/3 employed</span></div>
      <div class="ac-scout-grid">
        ${e.scouts.map(d=>fs(d,{club:t,db:a})).join("")}
        ${Array.from({length:Math.max(0,3-e.scouts.length)},(d,r)=>c[r]?fs(c[r],{hire:!0}):"").join("")}
      </div>
      <div class="ac-card-actions"><button type="button" class="ac-new-network" data-act="academy-tab" data-tab="network"><span>＋</span> New Scouting Network</button></div>

      <div class="ac-panel-head ac-subhead"><div><div class="ac-card-kicker">IN PROGRESS</div><h3>Active assignments</h3></div><span class="ac-chip">${o.length}</span></div>
      ${o.length?`<div class="ac-assignment-list">${o.map(d=>{const r=wa(a,d);return`<div class="ac-assignment" data-act="academy-tab" data-tab="network">
          <div class="ac-assignment-top"><div><b>${i(d.nation)}</b><span>${i(d.instruction||d.focus||"Any Position")} · ${i(d.scoutName||"Scout")}</span></div><b>${Math.round(r)}%</b></div>
          ${ta(r,"blue")}
          <div class="ac-assignment-foot"><span>${Ia(a,d)}</span><span>${d.duration} day trip</span></div>
        </div>`}).join("")}</div>`:'<div class="ac-empty">No scouts travelling. Send one from the Scout Network.</div>'}
    </section>`}function Me(n){const a=n.db,s=G(a),t=a.clubs[s],e=ra(a,s),c=As(a,s),o=(t.scoutAssignments||[]).filter(b=>!b.done),d=(t.scoutAssignments||[]).filter(b=>b.done&&b.reports?.length),r=n.academyScoutId||n.scoutId||"",l=n.academyScoutNation||n.scoutNation||"Any",u=n.academyScoutFocus||n.scoutFocus||"Any",v=n.academyScoutDuration||n.scoutDuration||"medium",p=e.scouts;return`
    <div class="ac-network">
      <section class="ac-panel">
        <div class="ac-panel-head"><div><div class="ac-card-kicker">SCOUT NETWORK</div><h2>Send a scout</h2><p>Pick a country, instruction and trip length. Better scouts and longer trips return stronger reports.</p></div><span class="ac-chip">${p.filter(b=>!ya(t,b.id)).length} available</span></div>
        <div class="ac-form-grid">
          <label><span>Scout</span><select class="ac-select" data-change="academy-scout-select"><option value="">First available</option>${p.map(b=>`<option value="${i(b.id)}" ${r===b.id?"selected":""}>${i(z(b))} · Judgement ${Math.round(b.judgement/20)}★</option>`).join("")}</select></label>
          <label><span>Country</span><select class="ac-select" data-change="academy-scout-nation"><option value="Any" ${l==="Any"?"selected":""}>Any country</option>${rt.map(b=>`<optgroup label="${i(b.region)}">${b.nations.map(f=>`<option value="${i(f)}" ${l===f?"selected":""}>${i(f)}</option>`).join("")}</optgroup>`).join("")}</select></label>
          <label><span>Instruction</span><select class="ac-select" data-change="academy-scout-focus">${Object.entries(ts).map(([b,f])=>`<option value="${i(b)}" ${u===b?"selected":""}>${i(f.label)}</option>`).join("")}</select></label>
        </div>
        <div class="ac-duration-row">${pt.map(b=>`<button type="button" class="${v===b.id?"on":""}" data-act="academy-scout-duration" data-id="${b.id}"><b>${i(b.label)}</b><span>£${Math.round(b.cost/1e3)}k</span></button>`).join("")}</div>
        <button type="button" class="ac-btn primary wide" data-act="academy-start-scouting">Send scout</button>
        <p class="ac-note">The report will list ${u==="Any"?"prospects from any position":i(ts[u]?.label||u)}. The academy's facilities and the scout's judgement determine the accuracy of the potential assessment.</p>
      </section>

      <section class="ac-panel">
        <div class="ac-panel-head"><div><div class="ac-card-kicker">SCOUT MARKET</div><h2>Hire a scout</h2></div><span class="ac-chip">${c.length} available</span></div>
        <div class="ac-market-list">${c.length?c.slice(0,4).map(b=>`<div class="ac-market-row"><span class="ac-scout-line-face">${La(z(b))}</span><div><b>${i(z(b))}</b><span>${i(b.nat)} · Experience ${sa(b.experience)} · Judgement ${sa(b.judgement)}</span></div><div><b>${Math.round(b.wage/1e3)}k/wk</b><button type="button" class="ac-btn" data-act="academy-hire-scout" data-id="${i(b.id)}">Hire</button></div></div>`).join(""):'<div class="ac-empty">Every available scout is already employed.</div>'}</div>
      </section>

      <section class="ac-panel">
        <div class="ac-panel-head"><div><div class="ac-card-kicker">INCOMING REPORTS</div><h2>Scout reports</h2><p>Sign directly to the academy or open the full report before deciding.</p></div><span class="ac-chip">${d.reduce((b,f)=>b+f.reports.length,0)}</span></div>
        ${d.length?d.map(b=>`<div class="ac-report-block"><div class="ac-report-block-head"><b>${i(b.nation)}</b><span>${i(b.instruction||b.focus||"Any Position")} · ${i(b.scoutName||"Scout")} · ${b.reports.length} candidate${b.reports.length===1?"":"s"}</span></div><div class="ac-report-grid">${b.reports.map((f,m)=>xe(f,b,m,a)).join("")}</div></div>`).join(""):'<div class="ac-empty">No completed reports. Send a scout and advance the calendar.</div>'}
      </section>

      <section class="ac-panel">
        <div class="ac-panel-head"><div><div class="ac-card-kicker">TRAVELLING</div><h2>Active trips</h2></div><span class="ac-chip">${o.length}</span></div>
        ${o.length?`<div class="ac-assignment-list">${o.map(b=>`<div class="ac-assignment"><div class="ac-assignment-top"><div><b>${i(b.nation)}</b><span>${i(b.instruction||"Any Position")} · ${i(b.scoutName||"Scout")}</span></div><b>${Math.round(wa(a,b))}%</b></div>${ta(wa(a,b),"blue")}<div class="ac-assignment-foot"><span>${Ia(a,b)}</span><span>${b.duration} day trip</span></div></div>`).join("")}</div>`:'<div class="ac-empty">No scouts travelling.</div>'}
      </section>
    </div>`}function Te(n){const a=n.db,s=G(a),t=n.academyReport,c=(a.clubs[s].scoutAssignments||[]).find(r=>r.id===t?.assignmentId),o=c?.reports?.[Number(t?.index)];if(!o)return'<div class="ac-panel"><p class="ac-empty">That report is no longer available.</p><button class="ac-btn" data-act="academy-back">Back to reports</button></div>';const d=ka(o,a);return`
    <div class="ac-detail">
      <button type="button" class="ac-back" data-act="academy-back">← Back to scouting reports</button>
      <div class="ac-profile-hero ac-prospect-hero">
        <div class="ac-profile-art">${Sa(o,"xl")}<div class="ac-profile-glow"></div></div>
        <div class="ac-profile-title"><div class="ac-card-kicker">SCOUT REPORT · ${i(c.nation)}</div><h1>${i(C(o))}</h1><div class="ac-profile-tags">${F(o.pos)} <span>${i(o.nat)}</span><span>${d.age} years</span><span>${d.height}cm · ${d.weight}kg</span></div><div class="ac-profile-rating"><b>${o.ovr}</b><span>OVR</span><em>${i(xa(o))} potential</em></div></div>
      </div>
      <div class="ac-profile-grid">
        <section class="ac-panel"><div class="ac-panel-head"><div class="ac-card-kicker">SCOUT ASSESSMENT</div><h3>${i(c.scoutName||"Scout")}'s view</h3></div><p class="ac-assessment">“${i(dt(o))}”</p><div class="ac-kv"><span>Preferred foot</span><b>${i(d.foot)} · ${d.weakFoot}★ weak foot</b></div><div class="ac-kv"><span>Skill moves</span><b>${d.skillMoves}★</b></div><div class="ac-kv"><span>Secondary positions</span><b>${d.secondaryPositions.length?d.secondaryPositions.map(i).join(", "):"—"}</b></div><div class="ac-kv"><span>Potential confidence</span><b>${Math.round((o.potentialConfidence||.5)*100)}%</b></div><div class="ac-kv"><span>Compensation</span><b>£${Math.round((Math.max(42,o.pot)-40)**2*900).toLocaleString()}</b></div></section>
        <section class="ac-panel"><div class="ac-panel-head"><div class="ac-card-kicker">ATTRIBUTES</div><h3>Current profile</h3></div><div class="ac-attr-list">${Aa.map(([r,l])=>`<div class="ac-attr"><span>${l}</span><div class="ac-attr-track"><i style="width:${o.attrs?.[r]||0}%"></i></div><b>${o.attrs?.[r]??"—"}</b></div>`).join("")}</div><div class="ac-playstyles">${(d.playStyles||[]).map(r=>`<span>${i(r)}</span>`).join("")}</div></section>
      </div>
      <div class="ac-detail-actions"><button type="button" class="ac-btn" data-act="academy-reject" data-assignment="${i(c.id)}" data-index="${t.index}">Reject prospect</button><button type="button" class="ac-btn primary" data-act="academy-sign" data-assignment="${i(c.id)}" data-index="${t.index}">Sign to Academy</button></div>
    </div>`}function je(n,a){const s=n.db;G(s);const t=ka(a,s),e=fa(a),c=a.loanListed?ot(s,a.id):[];return`
    <div class="ac-detail">
      <button type="button" class="ac-back" data-act="academy-tab" data-tab="squad">← Back to youth squad</button>
      <div class="ac-profile-hero">
        <div class="ac-profile-art">${Sa(a,"xl")}<div class="ac-profile-glow"></div></div>
        <div class="ac-profile-title"><div class="ac-card-kicker">ACADEMY PLAYER · ${i(a.squadRole||"Academy")}</div><h1>${i(C(a))}</h1><div class="ac-profile-tags">${F(a.pos)} <span>${i(a.nat)}</span><span>${t.age} years</span><span>${t.height}cm · ${t.weight}kg</span><span>${i(t.foot)} foot</span></div><div class="ac-profile-rating"><b>${a.ovr}</b><span>OVR</span><em>${i(xa(a))} potential</em></div></div>
      </div>
      <div class="ac-profile-grid">
        <section class="ac-panel"><div class="ac-panel-head"><div class="ac-card-kicker">PLAYER PROFILE</div><h3>Attributes</h3></div><div class="ac-attr-list">${Aa.map(([o,d])=>`<div class="ac-attr"><span>${d}</span><div class="ac-attr-track"><i style="width:${a.attrs?.[o]||0}%"></i></div><b>${a.attrs?.[o]??"—"}</b></div>`).join("")}</div><div class="ac-kv"><span>Weak foot / skills</span><b>${t.weakFoot}★ / ${t.skillMoves}★</b></div><div class="ac-kv"><span>Secondary positions</span><b>${t.secondaryPositions.length?t.secondaryPositions.map(i).join(", "):"—"}</b></div><div class="ac-kv"><span>Growth profile</span><b>${i(t.growthLabel)}</b></div><div class="ac-playstyles">${(t.playStyles||[]).map(o=>`<span>${i(o)}</span>`).join("")}</div></section>
        <section class="ac-panel ac-plan-panel"><div class="ac-panel-head"><div><div class="ac-card-kicker">DEVELOPMENT PLAN</div><h3>${i(e.plan.label)}</h3></div><span class="ac-chip">${i(e.status)}</span></div><p class="ac-plan-desc">${i(e.plan.desc)}</p><select class="ac-select wide" data-change="academy-plan" data-player="${i(a.id)}">${Object.values(lt).map(o=>`<option value="${o.id}" ${a.devPlan===o.id?"selected":""}>${i(o.label)}</option>`).join("")}</select>${a.devPlan==="custom"?`<div class="ac-custom-attrs">${Aa.map(([o,d])=>`<button type="button" class="${(a.customPlan||[]).includes(o)?"on":""}" data-act="academy-custom-attr" data-player="${i(a.id)}" data-attr="${o}">${d}</button>`).join("")}</div>`:""}<div class="ac-plan-progress"><div><span>Current</span><b>${a.ovr} OVR</b></div><div><span>Target</span><b>${e.targetOvr} OVR</b></div><div><span>Estimated</span><b>${e.etaWeeks} weeks</b></div></div><div class="ac-plan-bar"><i style="width:${Math.round(e.progress)}%"></i></div><div class="ac-plan-foot"><span>${Math.round(e.progress)}% of target</span><span>${i(e.plan.group)} plan</span></div><div class="ac-changes">${e.changes.map(o=>`<div><span>${i(o.label)}</span><b>${o.from} <em>→ ${o.to}</em></b><small>${o.emphasis>0?`+${o.emphasis}% focus`:"balanced"}</small></div>`).join("")}</div><p class="ac-note">Progress is shaped by minutes, coaching, facilities and the player's own growth profile — the target is an estimate, not a guarantee.</p></section>
      </div>
      <div class="ac-detail-actions">
        ${a.youth?`<button type="button" class="ac-btn" data-act="academy-promote" data-id="${i(a.id)}">Promote to Senior Team</button>`:""}
        ${a.loanListed?`<button type="button" class="ac-btn" data-act="academy-loan-list" data-id="${i(a.id)}">Refresh loan offers</button>`:`<button type="button" class="ac-btn" data-act="academy-loan-list" data-id="${i(a.id)}">Place on loan list</button>`}
        <button type="button" class="ac-btn danger" data-act="academy-release" data-id="${i(a.id)}">Release from academy</button>
      </div>
      ${c.length?`<section class="ac-panel ac-loan-offers"><div class="ac-panel-head"><div><div class="ac-card-kicker">LOAN OFFERS</div><h3>Clubs interested</h3></div><span class="ac-chip">${c.length}</span></div>${c.map(o=>`<div class="ac-loan-offer"><div class="row" style="gap:8px">${j(o.clubId,"tiny")}<div><b>${i(g[o.clubId]?.name||o.clubId)}</b><span>${o.role} · ${o.wageShare}% wages · £${Math.round(o.fee/1e3)}k fee</span></div></div><div class="row"><button class="ac-btn ghost" data-act="academy-loan-reject" data-id="${i(a.id)}" data-club="${i(o.clubId)}">Reject</button><button class="ac-btn primary" data-act="academy-loan-accept" data-id="${i(a.id)}" data-club="${i(o.clubId)}">Accept loan</button></div></div>`).join("")}</section>`:""}
      <section class="ac-panel"><div class="ac-panel-head"><div class="ac-card-kicker">SQUAD STATUS</div><h3>Career record</h3></div><div class="ac-kv"><span>Academy since</span><b>${a.academySince||"—"}</b></div><div class="ac-kv"><span>Contract</span><b>${a.contract?`${a.contract.until} · £${Math.round((a.contract.wage||0)/1e3)}k/wk`:"Scholarship"}</b></div><div class="ac-kv"><span>Loan</span><b>${a.loan?`${i(g[a.loan.clubId]?.short||a.loan.clubId)} until ${a.loan.until}`:"Not on loan"}</b></div><div class="ac-kv"><span>Youth Cup</span><b>${a.youthCupApps||0} apps · ${a.youthCupGoals||0} goals</b></div><div class="ac-kv"><span>Development</span><b>${a.growthLog?.length?`${a.growthLog.length} growth steps logged`:"Just getting started"}</b></div></section>
    </div>`}function Ae(n,a){const s=n.db,t=G(s),e=s.clubs[t],c=ya(e,a.id);return`
    <div class="ac-detail">
      <button type="button" class="ac-back" data-act="academy-tab" data-tab="staff">← Back to youth staff</button>
      <div class="ac-profile-hero ac-scout-hero"><div class="ac-profile-art"><span class="ac-face xl" style="--face-tone:#58e0b0">${La(z(a))}<i>SCOUT</i></span></div><div class="ac-profile-title"><div class="ac-card-kicker">YOUTH SCOUT</div><h1>${i(z(a))}</h1><div class="ac-profile-tags"><span>${i(a.nat)}</span><span>Capacity ${a.capacity||1} assignment</span></div><div class="ac-scout-detail-stars"><div><span>Experience</span>${sa(a.experience)}</div><div><span>Judgement</span>${sa(a.judgement)}</div></div></div></div>
      <div class="ac-profile-grid"><section class="ac-panel"><div class="ac-panel-head"><div class="ac-card-kicker">ASSIGNMENT</div><h3>${c?`${i(c.nation)} · ${i(c.instruction||"Any Position")}`:"Available"}</h3></div>${c?`<div class="ac-kv"><span>Progress</span><b>${Math.round(wa(s,c))}%</b></div><div class="ac-kv"><span>Time remaining</span><b>${Ia(s,c)}</b></div><div class="ac-plan-bar"><i style="width:${Math.round(wa(s,c))}%"></i></div>`:'<p class="ac-note">This scout is available for a new mission.</p>'}<button type="button" class="ac-btn primary wide" data-act="academy-tab" data-tab="network">Assign to a country</button></section><section class="ac-panel"><div class="ac-panel-head"><div class="ac-card-kicker">SCOUT PROFILE</div><h3>Reputation</h3></div><div class="ac-kv"><span>Judgement</span><b>${a.judgement}/100</b></div><div class="ac-kv"><span>Experience</span><b>${a.experience}/100</b></div><div class="ac-kv"><span>Weekly wage</span><b>£${Math.round((a.wage||0)/1e3)}k</b></div><div class="ac-kv"><span>Hired</span><b>${a.hired||"—"}</b></div><button type="button" class="ac-btn danger wide" data-act="academy-fire-scout" data-id="${i(a.id)}">Dismiss scout</button></section></div>
    </div>`}function Ne(n){const a=n.db,s=G(a),t=ra(a,s),e=Ns(a),c=e.cup;c.ties;const o=Ps(a)[0]||null,d=ut(a,s,t.prospects),r=Ka({formation:d.formation});new Map(t.prospects.map(v=>[v.id,v]));const l=o?o.home===s?o.away:o.home:null,u=(v,p=null)=>`<option value="">—</option>${t.prospects.filter(f=>!p||(p==="GK"?f.pos==="GK":f.pos!=="GK")).map(f=>`<option value="${i(f.id)}" ${v===f.id?"selected":""}>${i(C(f))} · ${f.pos} · ${f.ovr}</option>`).join("")}`;return`
    <div class="ac-cup">
      <section class="ac-hero-card ac-tournament">
        <div class="ac-card-kicker">TOURNAMENT DASHBOARD</div>
        <div class="ac-card-head"><h2>${i(c.name||"FC 27 Youth Cup")}</h2><span class="ac-chip">${c.winner?"COMPLETE":"LIVE"}</span></div>
        <div class="ac-tournament-body">
          <div class="ac-fixture"><div class="ac-fixture-team">${j(s)}<b>${i(a.clubs[s].short)}</b></div><div class="ac-fixture-vs">VS</div><div class="ac-fixture-team">${l?j(l):'<span class="ac-empty-crest">?</span>'}<b>${l?i(g[l]?.short||l):"TBC"}</b></div></div>
          <div class="ac-fixture-meta"><div><span>STAGE</span><b>${c.winner?"Complete":["Quarter-final","Semi-final","Final"][c.round]||"Group stage"}</b></div><div><span>NEXT FIXTURE</span><b>${o?o.date-a.day>0?`${o.date-a.day} days`:"Ready to play":"No fixture"}</b></div><div><span>STADIUM</span><b>${i(c.stadium||`${Hs(a,s)} academy pitch`)}</b></div></div>
        </div>
        <div class="ac-card-actions">${o?`<button type="button" class="ac-btn primary" data-act="play-youth-tie" data-id="${i(o.id)}">Play match</button><button type="button" class="ac-btn" data-act="sim-youth-tie" data-id="${i(o.id)}">Simulate</button>`:c.winner?'<span class="ac-chip">Tournament complete</span>':'<span class="ac-chip">Awaiting other results</span>'}</div>
      </section>

      <div class="ac-cup-grid">
        <section class="ac-panel"><div class="ac-panel-head"><div><div class="ac-card-kicker">BRACKET</div><h2>Road to the final</h2></div><span class="ac-chip">${t.prospects.length} prospects</span></div><div class="ac-bracket">${e.rounds.map(v=>`<div class="ac-round"><div class="ac-round-title">${i(v.name)}</div>${v.ties.length?v.ties.map(p=>{const b=p.home===s||p.away===s,f=!p.played&&p.date<=a.day;return`<div class="ac-tie ${b?"mine":""}"><div class="ac-tie-team ${p.winner===p.home?"win":""}">${i(g[p.home]?.short||p.home)}</div><div class="ac-tie-score">${p.played?`${p.hg}–${p.ag}`:V(p.date)}</div><div class="ac-tie-team ${p.winner===p.away?"win":""}">${i(g[p.away]?.short||p.away)}</div>${b&&f?`<div class="ac-tie-actions"><button data-act="play-youth-tie" data-id="${i(p.id)}">Play</button><button data-act="sim-youth-tie" data-id="${i(p.id)}">Sim</button></div>`:""}${p.scorers?.length?`<div class="ac-tie-scorers">${p.scorers.slice(0,3).map(m=>`⚽ ${m.minute}' ${i(m.name)}`).join(" · ")}</div>`:""}</div>`}).join(""):'<p class="ac-empty">Awaiting draw.</p>'}</div>`).join("")}</div></section>
        <section class="ac-panel"><div class="ac-panel-head"><div><div class="ac-card-kicker">TOURNAMENT AWARDS</div><h2>Player statistics</h2></div></div>${e.scorers.length?e.scorers.map((v,p)=>`<div class="ac-stat-row"><span>${p+1}. ${i(v.name)}</span><b>${v.goals} goal${v.goals===1?"":"s"}</b></div>`).join(""):'<p class="ac-empty">No goals scored yet.</p>'}<div class="ac-kv"><span>Player of the tournament</span><b>${c.playerOfTournament&&a.players[c.playerOfTournament]?i(C(a.players[c.playerOfTournament])):"—"}</b></div><div class="ac-kv"><span>Winner</span><b>${c.winner?i(g[c.winner]?.name||c.winner):"—"}</b></div>${c.history?.length?`<div class="ac-history">${c.history.slice(-4).reverse().map(v=>`<div><span>${v.season}/${String(v.season+1).slice(2)}</span><b>${i(g[v.winner]?.name||v.winner)}</b></div>`).join("")}</div>`:""}${c.winner===s?`<div class="ac-trophy"><div class="ac-trophy-icon">🏆</div><b>YOUTH CUP WINNERS</b><span>${c.season}/${String(c.season+1).slice(2)}</span></div>`:""}</section>
      </div>

      <section class="ac-panel ac-lineup-panel"><div class="ac-panel-head"><div><div class="ac-card-kicker">MATCHDAY SQUAD</div><h2>Starting XI &amp; bench</h2><p>Pick the academy XI and formation. Every change is stored with the career save.</p></div><div class="row"><select class="ac-select" data-change="academy-formation">${Object.keys(Pa).map(v=>`<option value="${v}" ${d.formation===v?"selected":""}>${v}</option>`).join("")}</select><button type="button" class="ac-btn ghost" data-act="academy-auto-xi">Auto pick</button></div></div><div class="ac-lineup-grid">${r.map((v,p)=>`<label class="ac-lineup-slot"><span>${v.pos}${v.role?` · ${v.role}`:""}</span><select class="ac-select" data-change="academy-xi" data-slot="${p}">${u(d.xi[p],v.pos)}</select></label>`).join("")}</div><div class="ac-bench"><span>BENCH</span>${Array.from({length:7},(v,p)=>`<select class="ac-select" data-change="academy-bench" data-slot="${p}">${u(d.bench[p])}</select>`).join("")}</div><p class="ac-note">Prospects not in the XI or bench can still be scouted and developed; tournament minutes accelerate their growth.</p></section>
    </div>`}function Pe(n){const a=n.db,s=G(a);if(!s)return'<div class="ac-panel"><p class="ac-empty">Take a manager job to open the academy.</p></div>';const t=a.clubs[s],e=ra(a,s),c=n.academyView,o=n.academyTab||"hub";if(c==="player"){const r=a.players[n.academyPlayerId];if(r)return`<div class="ac-shell">${Ta(n,"Player profile",`${C(r)} · ${ba(a,s)}`,`<span class="ac-chip">${i(r.pos)} · ${r.ovr} OVR</span>`)}${je(n,r)}</div>`}if(c==="report")return`<div class="ac-shell">${Ta(n,"Scouting report",`${ba(a,s)} · Youth Academy`,'<span class="ac-chip">SCOUT NETWORK</span>')}${Te(n)}</div>`;if(c==="scout"){const r=(t.scouts||[]).find(l=>l.id===n.academyScoutId);if(r)return`<div class="ac-shell">${Ta(n,"Scout profile",`${ba(a,s)} · Youth Staff`,'<span class="ac-chip">YOUTH STAFF</span>')}${Ae(n,r)}</div>`}const d=o==="squad"?Ie(n):o==="staff"?Ce(n):o==="network"?Me(n):o==="cup"?Ne(n):Se(n);return`<div class="ac-shell">
    ${Ta(n,"Academy",`${ba(a,s)} · Youth sector · Level ${e.facilities} facilities`,`<span class="ac-head-stat"><b>${e.prospects.length}</b><span>PROSPECTS</span></span><span class="ac-head-stat"><b>${e.scouts.length}</b><span>SCOUTS</span></span>`)}
    ${ke(n,o)}
    ${d}
  </div>`}const pa=n=>n.manager.clubId,Ca=(n,a)=>n.clubs[a];function Ee(n,a){switch(a){case"transfers":return Oe(n);case"office":return gs(n);case"youth":return Ke(n);case"training":return Re(n);case"club":return Fe(n);case"manager":return ne(n);case"history":return ie(n);case"season-end":return ce(n);case"customise":return Ue(n);case"social":return He(n);case"settings":return _e(n);case"live":return Ve(n);case"market":return Ge(n);case"world":return ze(n);default:return gs(n)}}function Oe(n){const a=n.db,s=pa(a),t=Ca(a,s),e=n.tab||"hub",c=da(a.day,a.season),o=n.transferFilters||(n.transferFilters={pos:"",minOvr:70,maxValue:6e7,maxAge:33,leagueId:""}),d=kt(a),r=`
    <div class="grid g4" style="margin-bottom:14px">
      <div class="card tight"><div class="card-head"><h3>Transfer budget</h3></div><div class="big-num" style="font-size:26px">${S(t.budget.transfer)}</div></div>
      <div class="card tight"><div class="card-head"><h3>Wage budget</h3></div><div class="big-num" style="font-size:26px">${W(Ts(a,s))}</div><div class="tiny dim">of ${W(t.budget.wage)}/wk</div></div>
      <div class="card tight"><div class="card-head"><h3>Spent</h3></div><div class="big-num" style="font-size:26px">${S(d?.spent||0)}</div></div>
      <div class="card tight"><div class="card-head"><h3>Received</h3></div><div class="big-num" style="font-size:26px">${S(d?.received||0)}</div></div>
    </div>`,l=`<div class="subnav">
    ${[["hub","Transfer hub"],["search","Search"],["shortlist","Shortlist"],["sent","Sent offers"],["received",`Received${a.incomingBids?.filter(v=>v.status==="open").length?` (${a.incomingBids.filter(v=>v.status==="open").length})`:""}`],["listed","Transfer listed"],["history","History"]].map(([v,p])=>`<button data-act="tab" data-tab="${v}" class="${e===v?"on":""}">${p}</button>`).join("")}
  </div>
  ${c.open?"":'<div class="card" style="margin-bottom:12px;border-color:rgba(255,176,32,.35)"><div class="small amber">The transfer window is closed. Deals can be agreed but not completed until it reopens.</div></div>'}
  ${Es(a)?`<div class="card" style="margin-bottom:12px;border-color:rgba(255,80,80,.45)"><div class="small" style="color:#ff8b8b">${i(Os(a))}</div><div class="tiny dim">The board has blocked incoming transfers. Outgoing deals are still allowed.</div></div>`:""}`;if(e==="hub")return Be(n);if(e==="search")return qe(n);let u="";if(e==="search"){const v=Ls(a,{pos:o.pos||"",minOvr:Number(o.minOvr)||0,maxValue:Number(o.maxValue)||1/0,maxAge:Number(o.maxAge)||45,leagueId:o.leagueId||"",limit:50});u=`
      <div class="card" style="margin-bottom:12px">
        <div class="grid g4" style="gap:10px">
          <div><label class="lbl">Position</label>
            <select class="sel" data-change="f-pos">
              <option value="">Any</option>
              ${["GK","CB","LB","RB","CDM","CM","CAM","LW","RW","ST"].map(p=>`<option ${o.pos===p?"selected":""}>${p}</option>`).join("")}
            </select>
          </div>
          <div><label class="lbl">Min overall · ${o.minOvr}</label><input type="range" min="50" max="92" value="${o.minOvr}" data-change="f-ovr" style="width:100%"/></div>
          <div><label class="lbl">Max value</label>
            <select class="sel" data-change="f-value">
              ${[5,10,20,40,60,100,200,500].map(p=>`<option value="${p*1e6}" ${Number(o.maxValue)===p*1e6?"selected":""}>£${p}M</option>`).join("")}
            </select>
          </div>
          <div><label class="lbl">League</label>
            <select class="sel" data-change="f-league">
              <option value="">Any</option>
              ${ia.map(p=>`<option value="${p.id}" ${o.leagueId===p.id?"selected":""}>${i(p.name)}</option>`).join("")}
            </select>
          </div>
        </div>
      </div>
      <div class="card" style="padding:0">
        <div class="tbl-wrap" style="max-height:calc(100vh - 330px)">
          <table class="tbl"><thead><tr><th>Player</th><th>Pos</th><th class="num">OVR</th><th class="num">Age</th><th>Club</th><th class="num">Value</th><th class="num">Wage</th><th></th></tr></thead>
          <tbody>${v.map(({player:p,value:b,age:f})=>{const m=p.clubId?g[p.clubId]:null,h=p.clubId?Rs(a,p,p.clubId):0;return`<tr class="click" data-act="player" data-id="${i(p.id)}">
              <td><b>${i(C(p))}</b><div class="tiny dim">${i(p.nat)}${p.transferStatus==="listed"?" · listed":""}</div></td>
              <td>${F(p.pos)}</td>
              <td class="num">${K(p.ovr)}</td>
              <td class="num dim">${f}</td>
              <td>${m?`<div class="row" style="gap:6px">${j(m.id,"tiny")}<span class="tiny">${i(m.short)}</span></div>`:'<span class="tiny dim">Free agent</span>'}</td>
              <td class="num">${S(b)}</td>
              <td class="num tiny dim">${S(Fs(a,p,s))}</td>
              <td><button class="btn sm primary" data-act="approach" data-id="${i(p.id)}">${p.clubId?S(h):"Sign"}</button></td>
            </tr>`}).join("")||'<tr><td colspan="8" class="dim small">No players match those filters.</td></tr>'}</tbody></table>
        </div>
      </div>`}else if(e==="shortlist")u=`<div class="card" style="padding:0"><div class="tbl-wrap">
      <table class="tbl"><thead><tr><th>Player</th><th>Pos</th><th class="num">OVR</th><th class="num">Age</th><th>Club</th><th class="num">Value</th><th></th></tr></thead>
      <tbody>${(a.shortlist||[]).map(p=>a.players[p]).filter(Boolean).map(p=>`<tr><td><b>${i(C(p))}</b></td><td>${F(p.pos)}</td><td class="num">${K(p.ovr)}</td><td class="num dim">${Math.floor((a.day-p.dob)/365.25)}</td><td class="tiny">${p.clubId?i(g[p.clubId].short):"Free"}</td><td class="num">${S($a(a,p))}</td><td><button class="btn sm primary" data-act="approach" data-id="${i(p.id)}">Approach</button></td></tr>`).join("")||'<tr><td colspan="7" class="dim small">Shortlist is empty — add players from Search or a player profile.</td></tr>'}</tbody></table>
    </div></div>`;else if(e==="negotiations"||e==="sent"){const v=(a.negotiations||[]).filter(p=>p.status==="open");u=`<div class="card">${v.length?v.map(p=>{const b=a.players[p.playerId],f=p.fromClubId?g[p.fromClubId].name:"Free agent";return`<div class="offer-row">
        <div><b>${i(C(b))}</b> <span class="tiny dim">${b.pos} ${b.ovr}</span><div class="tiny dim">${i(f)} · asking ${S(p.askingPrice)}</div></div>
        <div class="row"><span class="tiny dim">${p.rounds} round${p.rounds===1?"":"s"}</span><button class="btn sm primary" data-act="open-negotiation" data-neg="${i(p.id)}">Continue</button></div>
      </div>`}).join(""):'<p class="dim small">No active negotiations.</p>'}</div>`}else if(e==="offers"||e==="received"){const v=(a.incomingBids||[]).filter(p=>p.status==="open");u=`<div class="card">${v.length?v.map(p=>{const b=a.players[p.playerId];return b?`<div class="offer-row">
        <div class="row" style="gap:9px">${j(p.clubId,"tiny")}<div><b>${i(C(b))}</b> <span class="tiny dim">${b.pos} ${b.ovr}</span><div class="tiny dim">${i(g[p.clubId].name)} · ${S(p.fee)}${p.clause?' · <span style="color:#ffb020">release clause triggered</span>':""}</div></div></div>
        <div class="row">${p.clause?"":`<button class="btn sm danger" data-act="reject-bid" data-bid="${i(p.clubId+":"+p.playerId)}">Reject</button>`}<button class="btn sm primary" data-act="accept-bid" data-bid="${i(p.clubId+":"+p.playerId)}">${p.clause?"Confirm exit":"Accept"}</button></div>
      </div>`:""}).join(""):'<p class="dim small">No bids at the moment. Clubs will bid for your best players during transfer windows.</p>'}</div>`}else e==="squad"||e==="listed"?u=`<div class="card" style="padding:0"><div class="tbl-wrap">
      <table class="tbl"><thead><tr><th>Player</th><th>Pos</th><th class="num">OVR</th><th class="num">Age</th><th class="num">Value</th><th>Contract</th><th>Status</th><th></th></tr></thead>
      <tbody>${E(a,s).sort((p,b)=>b.ovr-p.ovr).map(p=>`<tr class="click" data-act="player" data-id="${i(p.id)}">
        <td><b>${i(C(p))}</b></td><td>${F(p.pos)}</td><td class="num">${K(p.ovr)}</td>
        <td class="num dim">${Math.floor((a.day-p.dob)/365.25)}</td><td class="num">${S($a(a,p))}</td>
        <td><span class="pill ${p.contract&&p.contract.until<=a.season+1?"l":"d"}">${p.contract?p.contract.until:"—"}</span></td>
        <td class="tiny dim">${p.transferStatus==="listed"?"Listed":p.transferStatus==="requested"?"Wants out":""}</td>
        <td class="row" style="gap:4px">
          <button class="btn sm" data-act="list-player" data-id="${i(p.id)}">${p.transferStatus==="listed"?"Unlist":"List"}</button>
          <button class="btn sm danger" data-act="release-player" data-id="${i(p.id)}">Release</button>
        </td></tr>`).join("")}</tbody></table>
    </div></div>`:u=`<div class="card" style="padding:0"><div class="tbl-wrap" style="max-height:calc(100vh - 300px)">
      <table class="tbl"><thead><tr><th>Date</th><th>Player</th><th>From</th><th>To</th><th class="num">Fee</th><th>Type</th></tr></thead>
      <tbody>${(a.transfers||[]).slice(0,60).map(p=>{const b=a.players[p.playerId];return`<tr><td class="tiny dim">${i(V(p.date))}</td><td>${b?i(C(b)):"—"}</td><td class="tiny">${p.from?i(g[p.from]?.short||""):"Free"}</td><td class="tiny">${i(g[p.to]?.short||"")}</td><td class="num">${p.fee?S(p.fee):"—"}</td><td class="tiny dim">${i(p.kind)}</td></tr>`}).join("")||'<tr><td colspan="6" class="dim small">No transfers yet this save.</td></tr>'}</tbody></table>
    </div></div>`;return`<div class="page-head"><div><h1>Transfer Market</h1><p>${c.open?`Window open · ${c.daysLeft} days remaining`:"Window closed"}</p></div>
    <div class="row"><button class="btn" data-act="free-agents">Free agents</button></div></div>
    ${r}${l}${u}`}function gs(n){const a=n.db,s=pa(a),t=Ca(a,s),e=g[s],c=mt(a,s).slice(0,8),o=Ts(a,s),d=t.board.objectives||[],r=t.budget,l=Object.entries(r.income).reduce((x,[,L])=>x+L,0),u=Object.entries(r.expenses).reduce((x,[,L])=>x+L,0),v=n.tab||"overview",p=[["overview","Overview"],["board","Board"],["finances","Finances"],["contracts","Contracts"],["facilities","Facilities"],["staff","Staff"],["stats","Statistics"]],b=`<div class="f-kpis">
    <div class="f-panel tight"><span>Board confidence</span><b class="${t.board.confidence>60?"up":t.board.confidence<35?"down":""}">${Math.round(t.board.confidence)}%</b></div>
    <div class="f-panel tight"><span>Club balance</span><b>${S(r.balance)}</b></div>
    <div class="f-panel tight"><span>Wage bill</span><b>${W(o)}</b></div>
    <div class="f-panel tight"><span>Squad value</span><b>${S(E(a,s).reduce((x,L)=>x+$a(a,L),0))}</b></div>
  </div>`,f=`<div class="f-panel">
    <div class="f-panel-h"><h3>Board objectives</h3><span class="tiny dim">${i(O[e.leagueId].name)}</span></div>
    ${d.map(x=>`<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05)">
      <div class="row spread"><span class="small" style="font-weight:600">${i(x.label)}</span>
      <span class="pill ${x.status==="on-track"?"w":x.status==="at-risk"?"d":x.status==="failing"?"l":""}">${(x.status||"active").replace("-"," ")}</span></div>
      <div class="tiny dim" style="margin-top:3px">${i(x.detail||"")}${x.progress!==void 0?` · current ${typeof x.progress=="number"&&x.progress>1e3?S(x.progress):x.progress}`:""}</div>
      <div class="objective-meta"><span>${i(x.priority||"Medium")} priority</span><span>${x.deadline?i(Q(x.deadline)):"Season end"}</span><span>Reward: ${i(x.reward||"Board confidence")}</span><span>Risk: ${i(x.consequence||"Board pressure")}</span></div>
    </div>`).join("")||'<p class="dim small">No objectives.</p>'}
    <div class="tiny dim" style="margin-top:10px">Target: ${i(t.board.objectiveLabel||"—")} · currently ${aa(oa(a,s))}</div>
    <div style="margin-top:10px">${ta(t.board.confidence,t.board.confidence<35?"bad":"warn")}</div>
  </div>`,m=`<div class="f-panel">
    <div class="f-panel-h"><h3>Finances</h3><span class="tiny dim">${S(l-u)} net</span></div>
    <div class="kv"><span>Matchday income</span><b>${S(r.income.matchday)}</b></div>
    <div class="kv"><span>Broadcast</span><b>${S(r.income.tv)}</b></div>
    <div class="kv"><span>Prize money</span><b>${S(r.income.prize)}</b></div>
    <div class="kv"><span>Player sales</span><b>${S(r.income.transfersIn)}</b></div>
    <div class="kv"><span>Wages paid</span><b class="down">${S(r.expenses.wages)}</b></div>
    <div class="kv"><span>Transfers paid</span><b class="down">${S(r.expenses.transfersOut)}</b></div>
    <div class="kv"><span>Net transfer spend</span><b class="${r.expenses.transfersOut>r.income.transfersIn?"down":"up"}">${S(r.expenses.transfersOut-r.income.transfersIn)}</b></div>
    <div class="kv"><span>Squad market value</span><b>${S(E(a,s).reduce((x,L)=>x+$a(a,L),0))}</b></div>
    <div class="kv"><span>Transfer budget</span><b>${S(r.transfer)}</b></div>
    <div class="kv"><span>Wage budget</span><b>${W(r.wage)}/wk</b></div>
    <div class="kv"><span>Total player wages</span><b>${W(o)}/wk</b></div>
  </div>`,h=`<div class="f-panel">
    <div class="f-panel-h"><h3>Contracts expiring</h3><span class="tiny dim">${c.length} players</span></div>
    ${c.length?`<table class="tbl"><thead><tr><th>Player</th><th>Pos</th><th class="num">OVR</th><th class="num">Age</th><th class="num">Wage</th><th class="num">Demand</th><th>Expires</th><th></th></tr></thead>
      <tbody>${c.map(x=>`<tr class="click" data-act="player" data-id="${i(x.id)}">
        <td><b>${i(C(x))}</b></td><td>${F(x.pos)}</td><td class="num">${K(x.ovr)}</td>
        <td class="num dim">${Math.floor((a.day-x.dob)/365.25)}</td>
        <td class="num">${W(x.contract?.wage||0)}</td>
        <td class="num amber">${W(bt(a,x,s))}</td>
        <td class="tiny dim">${x.contract?.until??"—"}</td>
        <td><button class="btn sm primary" data-act="renew" data-id="${i(x.id)}">Renew</button></td>
      </tr>`).join("")}</tbody></table>`:'<p class="dim small">No contracts expiring soon.</p>'}
  </div>`,y=`<div class="f-panel">
    <div class="f-panel-h"><h3>Facilities</h3></div>
    ${["training","youth","medical"].map(x=>`<div class="kv"><span>${x.charAt(0).toUpperCase()+x.slice(1)}</span><b>Level ${t.facilities[x]}</b></div>`).join("")}
    <button class="f-ghost wide" data-act="upgrade-facility">Invest in facilities (${S(8e6)})</button>
    <div class="f-panel-h" style="margin-top:18px"><h3>Club</h3></div>
    <div class="kv"><span>Stadium</span><b>${i(e.stadium)}</b></div>
    <div class="kv"><span>Capacity</span><b>${e.capacity.toLocaleString()}</b></div>
    <div class="kv"><span>Reputation</span><b>${e.reputation}</b></div>
    <button class="f-ghost wide" data-act="nav" data-screen="club">Club info</button>
  </div>`,M=`<div class="two-col">
    ${f}
    <div class="f-panel">
      <div class="f-panel-h"><h3>Club snapshot</h3><button class="f-link" data-act="nav" data-screen="news">Inbox</button></div>
      <div class="kv"><span>League position</span><b>${aa(oa(a,s))}</b></div>
      <div class="kv"><span>Objectives</span><b>${d.length}</b></div>
      <div class="kv"><span>Expiring contracts</span><b>${c.length}</b></div>
      <div class="kv"><span>Facilities</span><b>Training ${t.facilities.training} · Youth ${t.facilities.youth} · Medical ${t.facilities.medical}</b></div>
      <p class="note">Board reviews happen monthly and at the end of the season.</p>
      <button class="f-ghost wide" data-act="nav" data-screen="news">Open inbox</button>
    </div>
  </div>`,k=Ye(a,s),A=Le(a,s),q=v==="board"?f:v==="finances"?m:v==="contracts"?h:v==="facilities"?y:v==="staff"?k:v==="stats"?A:M;return`
  <div class="ea-head"><div><div class="crumbs">Office</div><h1>Manager office</h1><div class="sub">${i(e.name)} · ${i(O[e.leagueId].name)}</div></div></div>
  <div class="subnav">${p.map(([x,L])=>`<button data-act="stab" data-tab="${x}" class="${v===x?"on":""}">${L}</button>`).join("")}</div>
  ${b}
  ${q}`}function Le(n,a){const s=g[a],t=n.comps[s.leagueId],e=t?.table?.[a]||{p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0},o=ca(n,a).filter(v=>!v.played||!v.score?!1:(v.home===a?v.score[1]:v.score[0])===0).length,r=E(n,a).map(v=>{const b=Object.values(v.stats?.season||{}).reduce((f,m)=>({apps:f.apps+(m.apps||0),goals:f.goals+(m.goals||0),assists:f.assists+(m.assists||0),minutes:f.minutes+(m.minutes||0),cleanSheets:f.cleanSheets+(m.cleanSheets||0),yellow:f.yellow+(m.yellow||0),red:f.red+(m.red||0),ratingSum:f.ratingSum+(m.ratingSum||0),ratingCount:f.ratingCount+(m.ratingCount||0)}),{apps:0,goals:0,assists:0,minutes:0,cleanSheets:0,yellow:0,red:0,ratingSum:0,ratingCount:0});return{...v,...b,avgRating:b.ratingCount?b.ratingSum/b.ratingCount:0}}).sort((v,p)=>p.apps-v.apps||p.goals-v.goals),l=r.slice().sort((v,p)=>p.goals-v.goals||p.assists-v.assists).slice(0,10),u=n.manager.record||{played:0,won:0,drawn:0,lost:0};return`<div class="grid g2" style="align-items:start">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Team statistics</h3><span class="tiny dim">${i(t?.name||"")}</span></div>
      <div class="kv"><span>League position</span><b>${aa(oa(n,a))}</b></div>
      <div class="kv"><span>Points</span><b>${e.pts}</b></div>
      <div class="kv"><span>Wins / draws / losses</span><b>${e.w} / ${e.d} / ${e.l}</b></div>
      <div class="kv"><span>Goals scored / conceded</span><b>${e.gf} / ${e.ga}</b></div>
      <div class="kv"><span>Clean sheets</span><b>${o}</b></div>
      <div class="kv"><span>Matches played</span><b>${e.p}</b></div>
      <div class="kv"><span>Avg rating (squad)</span><b>${r.some(v=>v.avgRating)?(r.reduce((v,p)=>v+p.avgRating,0)/r.filter(v=>v.avgRating).length).toFixed(2):"—"}</b></div>
    </div>
    <div class="f-panel">
      <div class="f-panel-h"><h3>Manager statistics</h3><span class="tiny dim">All competitions</span></div>
      <div class="kv"><span>Matches managed</span><b>${u.played}</b></div>
      <div class="kv"><span>Won</span><b class="up">${u.won}</b></div>
      <div class="kv"><span>Drawn</span><b>${u.drawn}</b></div>
      <div class="kv"><span>Lost</span><b class="down">${u.lost}</b></div>
      <div class="kv"><span>Win percentage</span><b>${u.played?Math.round(u.won/u.played*100):0}%</b></div>
      <div class="kv"><span>Trophies</span><b>${(n.clubs[a].trophies||[]).length}</b></div>
      <div class="kv"><span>Seasons completed</span><b>${(n.history||[]).length}</b></div>
      <div class="kv"><span>Reputation</span><b>${n.manager.reputation}</b></div>
    </div>
    <div class="f-panel" style="grid-column:1/-1">
      <div class="f-panel-h"><h3>Player statistics</h3><button class="f-link" data-act="nav" data-screen="competitions">Competitions</button></div>
      <div class="tbl-wrap" style="max-height:420px"><table class="tbl"><thead><tr><th>Player</th><th>Pos</th><th class="num">Apps</th><th class="num">Goals</th><th class="num">Assists</th><th class="num">Minutes</th><th class="num">Rating</th><th class="num">CS</th><th class="num">YC</th><th class="num">RC</th></tr></thead>
        <tbody>${l.map(v=>`<tr class="click" data-act="player" data-id="${i(v.id)}"><td><b>${i(C(v))}</b></td><td>${F(v.pos)}</td><td class="num">${v.apps}</td><td class="num">${v.goals}</td><td class="num">${v.assists}</td><td class="num">${v.minutes}</td><td class="num">${v.avgRating?v.avgRating.toFixed(2):"—"}</td><td class="num">${v.cleanSheets}</td><td class="num">${v.yellow}</td><td class="num">${v.red}</td></tr>`).join("")||'<tr><td class="dim small" colspan="10">No appearances yet.</td></tr>'}</tbody></table></div>
    </div>
  </div>`}function Re(n){const a=n.db,s=pa(a),t=wt(a,s),e=E(a,s).sort((o,d)=>d.ovr-o.ovr),c=a.clubs[s];return`
  <div class="page-head"><div><h1>Training</h1><p>Fitness ${t.avgFitness}% · Sharpness ${t.avgSharpness}% · ${t.injured} injured</p></div></div>
  <div class="grid g2" style="align-items:start;margin-bottom:14px">
    <div class="card">
      <div class="card-head"><h3>Weekly intensity</h3></div>
      <div class="seg2">
        ${Object.entries(js).map(([o,d])=>`<button data-act="training-intensity" data-val="${o}" class="${c.trainingIntensity===o?"on":""}">${d.label}</button>`).join("")}
      </div>
      <p class="note" style="margin-top:9px">${i(t.intensity.note)}</p>
    </div>
    <div class="card">
      <div class="card-head"><h3>Team focus</h3></div>
      <div class="seg2">
        ${Object.entries(es).map(([o,d])=>`<button data-act="training-focus" data-val="${o}" class="${c.trainingFocus===o?"on":""}">${d.label}</button>`).join("")}
      </div>
      <p class="note" style="margin-top:9px">${i(t.focus.note)}</p>
    </div>
  </div>
  <div class="card" style="padding:0">
    <div class="tbl-wrap" style="max-height:calc(100vh - 380px)">
      <table class="tbl"><thead><tr><th>Player</th><th>Pos</th><th class="num">OVR</th><th>Fitness</th><th>Sharpness</th><th>Morale</th><th>Individual focus</th></tr></thead>
      <tbody>${e.map(o=>`<tr class="click" data-act="player" data-id="${i(o.id)}">
        <td><b>${i(C(o))}</b>${o.injury?' <span class="tiny down">INJ</span>':""}</td>
        <td>${F(o.pos)}</td>
        <td class="num">${K(o.ovr)}</td>
        <td style="min-width:80px">${Ft(o)}<span class="tiny dim">${Math.round(o.fitness)}%</span></td>
        <td style="min-width:80px">${ta(o.sharpness,"blue")}<span class="tiny dim">${Math.round(o.sharpness)}%</span></td>
        <td><span class="pill ${o.morale>65?"w":o.morale<35?"l":"d"}">${Math.round(o.morale)}</span></td>
        <td>
          <select class="sel" style="padding:4px 6px;font-size:11px" data-change="player-focus" data-player="${i(o.id)}">
            <option value="">Club focus</option>
            ${Object.entries(es).map(([d,r])=>`<option value="${d}" ${o.trainingFocus===d?"selected":""}>${r.label}</option>`).join("")}
          </select>
        </td>
      </tr>`).join("")}</tbody></table>
    </div>
  </div>`}function Fe(n){const a=n.db,s=pa(a),t=g[s],e=Ca(a,s),c=O[t.leagueId],o=E(a,s).sort((r,l)=>r.number-l.number),d=(e.trophies||[]).reduce((r,l)=>{const u=r.find(v=>v.name===l.name);return u?u.count++:r.push({name:l.name,count:1}),r},[]);return`
  <div class="page-head"><div><h1>${i(t.name)}</h1><p>${i(c.name)} · Founded ${t.founded} · ${i(t.stadium)}</p></div></div>
  <div class="grid g3" style="align-items:start">
    <div class="card">
      <div class="row" style="gap:12px;margin-bottom:12px">${j(s)}<div><div style="font-family:var(--display);font-size:20px;text-transform:uppercase">${i(t.short)}</div><div class="tiny dim">Reputation ${t.reputation}</div></div></div>
      <div class="kv"><span>Stadium</span><b>${i(t.stadium)}</b></div>
      <div class="kv"><span>Capacity</span><b>${e.stadiumCapacity.toLocaleString()}</b></div>
      <button class="f-ghost wide" data-act="expand-stadium" ${e.stadiumCapacity>=9e4?"disabled":""}>${e.stadiumCapacity>=9e4?"Stadium fully expanded":"Expand stadium +5,000 (£15M)"}</button>
      <div class="kv"><span>League</span><b>${i(c.name)}</b></div>
      <div class="kv"><span>Squad overall</span><b>${Ya(a,s)}</b></div>
      <div class="kv"><span>Squad size</span><b>${E(a,s).length}</b></div>
      <div class="kv"><span>Average age</span><b>${Math.round(E(a,s).reduce((r,l)=>r+(a.day-l.dob)/365.25,0)/Math.max(1,E(a,s).length))}</b></div>
      <div class="kv"><span>Ticket price</span><b>${S(e.ticketPrice)}</b></div>
      <div class="field" style="margin-top:6px"><label class="lbl">Matchday ticket price</label>
        <select class="sel" data-change="set-ticket-price">
          ${[20,30,40,50,60,70,80,90,100,110,120].map(r=>`<option value="${r}" ${Math.round(e.ticketPrice)===r?"selected":""}>£${r}</option>`).join("")}
        </select>
      </div>
      <p class="tiny dim" style="margin:0 0 8px">Higher prices raise revenue per seat but reduce attendance.</p>
      <div class="set-row" style="margin-top:8px"><div><b>Club captain</b><span>Morale boost for the armband</span></div>
        <select class="sel" data-change="set-captain">
          ${o.slice().sort((r,l)=>l.ovr-r.ovr).map(r=>`<option value="${i(r.id)}" ${(e.captainId||e.tactics?.captain||o[0]?.id)===r.id?"selected":""}>${i(C(r))}</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><h3>Honours</h3></div>
      ${d.length?d.map(r=>`<div class="trophy-row"><span class="cup">🏆</span><div style="flex:1">${i(r.name)}</div><b>×${r.count}</b></div>`).join(""):'<p class="dim small">No honours won in this save.</p>'}
    </div>
    <div class="card">
      <div class="card-head"><h3>Club colours</h3></div>
      <div class="row" style="gap:8px;margin-bottom:12px">
        <div style="width:52px;height:52px;border-radius:8px;background:${t.primary};border:1px solid rgba(255,255,255,.2)"></div>
        <div style="width:52px;height:52px;border-radius:8px;background:${t.secondary};border:1px solid rgba(255,255,255,.2)"></div>
        <div style="width:52px;height:52px;border-radius:8px;background:${t.gk};border:1px solid rgba(255,255,255,.2)"></div>
      </div>
      <div class="kv"><span>Primary</span><b>${t.primary}</b></div>
      <div class="kv"><span>Secondary</span><b>${t.secondary}</b></div>
      <div class="card-head" style="margin-top:14px"><h3>Board</h3></div>
      <div class="kv"><span>Confidence</span><b>${Math.round(e.board.confidence)}%</b></div>
      <div class="kv"><span>Supporter mood</span><b>${Math.round(e.fanMood??55)}%</b></div>
      <div class="kv"><span>Objective</span><b class="tiny">${i(e.board.objectiveLabel)}</b></div>
      ${(a.pressHistory||[]).length?`<div class="tiny dim" style="margin-top:10px">Last press line: “${i(a.pressHistory[a.pressHistory.length-1].quote)}”</div>`:""}
    </div>
  </div>
  <div class="card" style="margin-top:14px;padding:0">
    <div class="card-head" style="padding:14px 16px 0"><h3>Squad numbers</h3></div>
    <div class="tbl-wrap" style="max-height:340px">
      <table class="tbl"><thead><tr><th class="num">#</th><th>Player</th><th>Pos</th><th class="num">OVR</th><th class="num">Age</th><th>Nation</th></tr></thead>
      <tbody>${o.map(r=>`<tr class="click" data-act="player" data-id="${i(r.id)}">
        <td class="num dim">${r.number}</td><td>${i(C(r))}${(e.captainId||e.tactics?.captain)===r.id?' <span class="pill">C</span>':""}</td><td>${F(r.pos)}</td>
        <td class="num">${K(r.ovr)}</td><td class="num dim">${Math.floor((a.day-r.dob)/365.25)}</td><td class="tiny dim">${i(r.nat)}</td>
      </tr>`).join("")}</tbody></table>
    </div>
  </div>`}function Na(n){const a=String(n||"?").trim().split(/\s+/);return((a[0]?.[0]||"")+(a[1]?.[0]||"")).toUpperCase()||"?"}function De(n){const a=parseInt(String(n||"#223").slice(1),16),s=a>>16&255,t=a>>8&255,e=a&255;return(.299*s+.587*t+.114*e)/255>.62?"#0a0c0e":"#fff"}function $s(n){return String(n||"").replace(/[^A-Za-z]/g,"").slice(0,3).toUpperCase()}function qe(n){const a=n.db,s=pa(a),t=Ca(a,s),e=da(a.day,a.season),c=n.transferFilters||(n.transferFilters={pos:"",minOvr:70,maxValue:6e7,maxAge:33,leagueId:""}),o=Ls(a,{pos:c.pos||"",minOvr:Number(c.minOvr)||0,maxValue:Number(c.maxValue)||1/0,maxAge:Number(c.maxAge)||45,leagueId:c.leagueId||"",limit:60}),d=n.gtnSel&&o.some(m=>m.player.id===n.gtnSel)?n.gtnSel:o[0]?.player.id,r=o.find(m=>m.player.id===d),l=r?.player,u=r?.age,p=`
    <div class="gtn-panel">
      <div class="gtn-bar">
        ${[["","All"],["ATT","Att"],["MID","Mid"],["DEF","Def"],["GK","Gk"]].map(([m,h])=>`<button class="chip ${(c.pos||"")===m?"on":""}" data-act="gtn-pos" data-pos="${m}">${h}</button>`).join("")}
        <span class="spacer"></span>
        <select data-change="f-ovr" title="Minimum overall">
          ${[60,65,70,75,80,85].map(m=>`<option value="${m}" ${Number(c.minOvr)===m?"selected":""}>OVR ${m}+</option>`).join("")}
        </select>
        <select data-change="f-value" title="Maximum value">
          ${[10,20,40,60,100,200,500].map(m=>`<option value="${m*1e6}" ${Number(c.maxValue)===m*1e6?"selected":""}>£${m}M</option>`).join("")}
        </select>
        <select data-change="f-league" title="League">
          <option value="">All leagues</option>
          ${ia.map(m=>`<option value="${m.id}" ${c.leagueId===m.id?"selected":""}>${i(m.short||m.name)}</option>`).join("")}
        </select>
      </div>
      <div class="gtn-grid">
        ${o.length?o.map(({player:m,age:h})=>{const y=m.clubId?g[m.clubId]:null;return`<button class="gtn-card ${m.id===d?"on":""}" data-act="gtn-select" data-id="${i(m.id)}">
            <span class="face">${Na(C(m))}</span>
            <span class="info">
              <span class="nm">${i(C(m))}</span>
              <span class="nat"><span class="flagchip">${$s(m.nat)}</span>${i((m.nat||"").toUpperCase())}</span>
              <span class="meta">Age ${h} · ${i(m.pos)}</span>
            </span>
            ${y?`<span class="clubchip" style="background:${y.primary};color:${De(y.primary)}">${i(y.short.slice(0,3))}</span>`:""}
            <span class="ovr ${m.ovr>=82?"hi":""}">${m.ovr}</span>
          </button>`}).join(""):'<div class="gtn-empty">No players match those filters.</div>'}
      </div>
    </div>`,b=l?[["Pace","pace"],["Shooting","shoot"],["Passing","pass"],["Dribbling","dribble"],["Defending","defend"],["Physical","physical"]].map(([m,h])=>{const y=l.attrs?.[h]??l.ovr,M=Math.min(99,y+Math.max(0,(l.pot??l.ovr)-l.ovr));return`<div class="gtn-attr">
      <span class="k">${m}</span>
      <span class="t"><i style="width:${y}%"></i></span>
      <span class="v">${y} <em>- ${M}</em></span>
    </div>`}).join(""):"",f=l?`
    <div class="gtn-panel gtn-detail">
      <div class="hero">
        <div class="portrait">${Na(C(l))}</div>
        <div class="who">
          <div class="posline">${i(l.pos)}${l.alt?` · ${i(l.alt)}`:""} · OVR ${l.ovr}</div>
          <div class="nm">${i(C(l))}</div>
          <div class="flagrow">
            <span class="flagchip">${$s(l.nat)}</span>
            ${i((l.nat||"").toUpperCase())}
          </div>
          <div class="factrow">
            <div><span>Potential</span><b>${l.pot??l.ovr}</b></div>
            <div><span>Age</span><b>${u}</b></div>
            <div><span>Height</span><b>${l.height?`${l.height}cm`:"—"}</b></div>
            <div><span>Pref. foot</span><b>${i(l.foot||"Right")}</b></div>
          </div>
        </div>
      </div>
      <div class="scout">Found by your scouting network · ${l.clubId?i(g[l.clubId].name):"Free agent"} · ${S(r.value)}</div>
      <div class="gtn-attrs">
        <div class="h">Summary</div>
        ${b}
      </div>
      <div class="gtn-attrs" style="padding-top:0">
        <div class="h">Financial</div>
        <div class="gtn-attr"><span class="k">Asking price</span><span class="t"></span><span class="v">${l.clubId?S(Rs(a,l,l.clubId)):"Free"}</span></div>
        <div class="gtn-attr"><span class="k">Wage</span><span class="t"></span><span class="v">${S(Fs(a,l,s))}</span></div>
        <div class="gtn-attr"><span class="k">Contract</span><span class="t"></span><span class="v">${l.contract?l.contract.until:"—"}</span></div>
      </div>
      <div class="actions">
        <button class="ea-btn" data-act="player" data-id="${i(l.id)}">Full profile</button>
        <button class="ea-btn primary" data-act="approach" data-id="${i(l.id)}">${l.clubId?"Make approach":"Offer contract"}</button>
      </div>
    </div>`:'<div class="gtn-panel gtn-empty">Select a player to see the scouting report.</div>';return`
    <div class="ea-head">
      <div>
        <div class="crumbs">Transfers</div>
        <h1>Global Transfer Network</h1>
        <div class="sub">${e.open?`Window open · closes in ${e.daysLeft} day${e.daysLeft===1?"":"s"}`:"Window closed · deals can be agreed but not completed"}</div>
      </div>
      <div class="row" style="gap:8px">
        <button class="ea-btn ghost" data-act="free-agents">Free agents</button>
        <button class="ea-btn ghost" data-act="tab" data-tab="shortlist">Shortlist</button>
        <button class="ea-btn ghost" data-act="tab" data-tab="negotiations">Negotiations</button>
        <button class="ea-btn ghost" data-act="tab" data-tab="offers">Bids</button>
        <span class="ea-btn primary" style="cursor:default">${S(t.budget.transfer)}</span>
      </div>
    </div>
    <div class="gtn">${p}${f}</div>
    <p class="note" style="margin-top:12px">${o.length} players in the network · filtered by OVR ${c.minOvr}+ and value up to ${S(Number(c.maxValue)||0)}</p>`}function Be(n){const a=n.db,s=pa(a),t=Ca(a,s),e=da(a.day,a.season),c=(a.shortlist||[]).map(u=>a.players[u]).filter(Boolean),o=(a.negotiations||[]).filter(u=>u.status==="open"),d=(a.incomingBids||[]).filter(u=>u.status==="open"),r=(a.transfers||[]).slice(0,6),l=r.filter(u=>u.to===s).reduce((u,v)=>u+(v.fee||0),0);return`
  <div class="ea-head">
    <div>
      <div class="crumbs">Transfers</div>
      <h1>Transfer hub</h1>
      <div class="sub">${e.open?`Window open · closes in ${e.daysLeft} day${e.daysLeft===1?"":"s"}`:"Window closed · deals can be agreed but not completed"}</div>
    </div>
    <div class="row" style="gap:8px">
      <button class="f-ghost" data-act="free-agents">Free agents</button>
      <button class="f-cta" data-act="tab" data-tab="search">Search players</button>
    </div>
  </div>

  ${Es(a)?`<div class="card" style="margin-bottom:12px;border-color:rgba(255,80,80,.45)"><div class="small" style="color:#ff8b8b">${i(Os(a))}</div><div class="tiny dim">Incoming transfers are blocked until the embargo lifts. Outgoing deals are still allowed.</div></div>`:""}

  <div class="f-kpis">
    <div class="f-panel tight"><span>Transfer budget</span><b>${S(t.budget.transfer)}</b></div>
    <div class="f-panel tight"><span>Wage budget</span><b>${W(t.budget.wage)}</b></div>
    <div class="f-panel tight"><span>Spent this season</span><b>${S(l)}</b></div>
    <div class="f-panel tight"><span>Shortlisted</span><b>${c.length}</b></div>
  </div>

  <div class="two-col">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Shortlist</h3><button class="f-link" data-act="tab" data-tab="shortlist">Open</button></div>
      ${c.length?c.slice(0,5).map(u=>`
        <button class="f-newsrow" data-act="approach" data-id="${i(u.id)}">
          <span class="tag">${i(u.pos)}</span>
          <span class="tx">${i(C(u))}</span>
          <span class="dt">${S($a(a,u))}</span>
        </button>`).join(""):'<p class="dim small">Nobody shortlisted yet. Add players from Search or a player profile.</p>'}
    </div>

    <div class="f-panel">
      <div class="f-panel-h"><h3>Active negotiations</h3><button class="f-link" data-act="tab" data-tab="sent">All offers</button></div>
      ${o.length?o.slice(0,5).map(u=>{const v=a.players[u.playerId];return v?`<button class="f-newsrow" data-act="open-negotiation" data-neg="${i(u.id)}">
          <span class="tag">${i(v.pos)}</span>
          <span class="tx">${i(C(v))}</span>
          <span class="dt">${S(u.askingPrice)}</span>
        </button>`:""}).join(""):'<p class="dim small">No negotiations in progress.</p>'}
    </div>
  </div>

  <div class="two-col" style="margin-top:12px">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Bids received</h3><button class="f-link" data-act="tab" data-tab="received">Open</button></div>
      ${d.length?d.slice(0,5).map(u=>{const v=a.players[u.playerId];return v?`<div class="f-newsrow">
          <span class="tag">${i(g[u.clubId].short)}</span>
          <span class="tx">${i(C(v))}</span>
          <span class="dt">${S(u.fee)}</span>
        </div>`:""}).join(""):'<p class="dim small">No incoming bids. Clubs bid for your players during windows.</p>'}
    </div>

    <div class="f-panel">
      <div class="f-panel-h"><h3>Recent transfers</h3><button class="f-link" data-act="tab" data-tab="history">Full history</button></div>
      ${r.length?r.map(u=>{const v=a.players[u.playerId];return`<div class="f-newsrow">
          <span class="tag">${i(V(u.date))}</span>
          <span class="tx">${i(v?C(v):"Player")} · ${i(g[u.from]?.short||"FA")} → ${i(g[u.to]?.short||"FA")}</span>
          <span class="dt">${u.fee?S(u.fee):"Free"}</span>
        </div>`}).join(""):'<p class="dim small">No transfers completed yet.</p>'}
    </div>
  </div>`}function Ue(n){const a=n.db,s=a.manager,t=s.clubId||a.manager.clubId,e=t?g[t]:null,c=n.tab||"manager",o=[["manager","Manager"],["clothing","Clothing"],["profile","Profile"],["career","Career"],["club","Club"]],d=s.appearance||(s.appearance={}),r=[["skin","Skin tone"],["hair","Hair style"],["hairColor","Hair colour"],["face","Face"],["facialHair","Facial hair"],["eyebrows","Eyebrows"],["build","Build"],["accessory","Accessory"]],l=d.outfit||"suit-black",u=c==="manager"?`
    <div class="squad-grid">
      <div class="f-panel" style="text-align:center">
        <div style="display:grid;place-items:center;min-height:300px">${Dt(s,210)}</div>
        <div class="pname" style="font-family:var(--display);font-size:20px;text-transform:uppercase">${i(s.first)} ${i(s.last)}</div>
        <div class="pmeta tiny dim">${i(s.nat)} · ${i(qt[s.personality]?.label||"")}</div>
        <div class="seg2" style="margin-top:10px">
          <button data-act="m-gender" data-val="male" class="${s.gender==="male"?"on":""}">Male</button>
          <button data-act="m-gender" data-val="female" class="${s.gender==="female"?"on":""}">Female</button>
        </div>
      </div>
      <div class="f-panel">
        <div class="grid g2">
          <div class="field"><label class="lbl">First name</label><input class="inp" data-change="m-first" value="${i(s.first)}"/></div>
          <div class="field"><label class="lbl">Surname</label><input class="inp" data-change="m-last" value="${i(s.last)}"/></div>
        </div>
        <div class="field"><label class="lbl">Nationality</label>
          <select class="sel" data-change="m-nat">
            ${Pt.map(v=>`<option ${s.nat===v?"selected":""}>${i(v)}</option>`).join("")}
          </select>
        </div>
        <div class="cr-label">Appearance</div>
        <div class="cr-look">
          ${r.map(([v,p])=>`<button class="cr-look-row" data-act="m-appearance" data-kind="${v}">
            <span class="k">${p}</span><span class="v">${i(We(d,v))}</span><span class="go">▸</span>
          </button>`).join("")}
        </div>
      </div>
    </div>`:c==="clothing"?`
    <div class="f-panel">
      <div class="f-panel-h"><h3>Touchline clothing</h3><span class="tiny dim">${i(rs[l]?.label||"")}</span></div>
      <div class="grid g3">
        ${Object.entries(rs).map(([v,p])=>`
          <button class="cr-persona-card ${l===v?"on":""}" data-act="m-outfit" data-value="${v}">
            <b>${i(p.label)}</b>
            <span style="display:flex;gap:4px;margin-top:6px">
              <i style="width:22px;height:22px;background:${p.shirt};border:1px solid #ffffff22"></i>
              <i style="width:22px;height:22px;background:${p.accent};border:1px solid #ffffff22"></i>
              <i style="width:22px;height:22px;background:${p.tie};border:1px solid #ffffff22"></i>
            </span>
          </button>`).join("")}
      </div>
      <p class="note" style="margin-top:12px">Your outfit is used on the touchline, in the manager profile and in the pre-match team sheet.</p>
    </div>`:c==="profile"?`
    <div class="two-col">
      <div class="f-panel">
        <div class="f-panel-h"><h3>Reputation</h3></div>
        <div class="f-conf"><div class="score">${s.reputation}</div><div class="barwrap">${ta(s.reputation,"blue")}<p class="tiny dim">Manager reputation out of 100</p></div></div>
        <div class="kv"><span>Matches</span><b>${s.record.played}</b></div>
        <div class="kv"><span>Won</span><b class="up">${s.record.won}</b></div>
        <div class="kv"><span>Drawn</span><b>${s.record.drawn}</b></div>
        <div class="kv"><span>Lost</span><b class="down">${s.record.lost}</b></div>
        <div class="kv"><span>Win rate</span><b>${s.record.played?Math.round(s.record.won/s.record.played*100):0}%</b></div>
      </div>
      <div class="f-panel">
        <div class="f-panel-h"><h3>Honours</h3></div>
        ${(t?a.clubs[t].trophies||[]:[]).length?(a.clubs[t].trophies||[]).slice().reverse().map(v=>`<div class="kv"><span>${i(v.name)}</span><b>${v.season}/${String(v.season+1).slice(2)}</b></div>`).join(""):'<p class="dim small">No trophies yet.</p>'}
        <div class="f-panel-h" style="margin-top:16px"><h3>Job security</h3></div>
        <div class="kv"><span>Board confidence</span><b>${t?Math.round(a.clubs[t].board.confidence)+"%":"—"}</b></div>
        <div class="kv"><span>Contract until</span><b>${s.contractUntil||"—"}</b></div>
        <div class="kv"><span>Wage</span><b>${W(s.wage||0)}/wk</b></div>
      </div>
    </div>`:c==="career"?`
    <div class="two-col">
      <div class="f-panel">
        <div class="f-panel-h"><h3>Career</h3></div>
        <div class="kv"><span>Season</span><b>${a.season}/${String(a.season+1).slice(2)}</b></div>
        <div class="kv"><span>Date</span><b>${i(Q(a.day))}</b></div>
        <div class="kv"><span>Club</span><b>${e?i(e.name):"Unemployed"}</b></div>
        <div class="kv"><span>Seasons completed</span><b>${a.history.length}</b></div>
        <button class="f-cta wide" data-act="save">Save career</button>
        <button class="f-ghost wide" data-act="quit">Quit to main menu</button>
      </div>
      <div class="f-panel">
        <div class="f-panel-h"><h3>Settings</h3><span class="tiny dim">Fixed at creation</span></div>
        <div class="kv"><span>Difficulty</span><b>${i(a.settings.difficulty)}</b></div>
        <div class="kv"><span>Match mode</span><b>${i(a.settings.matchMode)}</b></div>
        <div class="kv"><span>Match length</span><b>${Math.round((a.settings.matchLength||180)/60)} min</b></div>
        <div class="kv"><span>Currency</span><b>${i(a.settings.currency)}</b></div>
        <div class="kv"><span>Auto-save</span><b>${a.settings.autoSave?"On":"Off"}</b></div>
        <p class="note">These settings are stored in the save file.</p>
      </div>
    </div>`:`
    <div class="two-col">
      <div class="f-panel">
        <div class="f-panel-h"><h3>Club</h3></div>
        ${e?`
          <div class="row" style="gap:12px;margin-bottom:10px">${j(e.id)}<div>
            <div class="pname" style="font-family:var(--display);font-size:20px;text-transform:uppercase">${i(e.name)}</div>
            <div class="tiny dim">${i(O[e.leagueId].name)}</div>
          </div></div>
          <div class="kv"><span>Stadium</span><b>${i(e.stadium)}</b></div>
          <div class="kv"><span>Capacity</span><b>${e.capacity.toLocaleString()}</b></div>
          <div class="kv"><span>Reputation</span><b>${e.reputation}</b></div>
          <div class="kv"><span>Colours</span><b><i style="display:inline-block;width:14px;height:14px;background:${e.primary};margin-right:4px"></i><i style="display:inline-block;width:14px;height:14px;background:${e.secondary}"></i></b></div>
          <button class="f-ghost wide" data-act="nav" data-screen="club">Open club info</button>
        `:'<p class="dim small">No club.</p>'}
      </div>
      <div class="f-panel">
        <div class="f-panel-h"><h3>Facilities</h3></div>
        ${t?["training","youth","medical"].map(v=>`<div class="kv"><span>${v.charAt(0).toUpperCase()+v.slice(1)}</span><b>Level ${a.clubs[t].facilities[v]}</b></div>`).join(""):""}
        <button class="f-ghost wide" data-act="nav" data-screen="office">Manage in Office</button>
      </div>
    </div>`;return`
  <div class="ea-head">
    <div><div class="crumbs">Customise</div><h1>Manager &amp; club</h1><div class="sub">${i(s.first)} ${i(s.last)} · ${e?i(e.name):"Free agent"}</div></div>
  </div>
  <div class="subnav">${o.map(([v,p])=>`<button data-act="stab" data-tab="${v}" class="${c===v?"on":""}">${p}</button>`).join("")}</div>
  ${u}`}function We(n,a){const s={skin:["Light","Fair","Olive","Tan","Brown","Deep"],hair:["Short","Buzz","Curly","Long","Fade","Bald"],hairColor:["Black","Dark brown","Brown","Blonde","Jet","Grey"],face:["Angular","Round","Square","Narrow"],facialHair:["None","Stubble","Beard","Goatee","Moustache"],eyebrows:["Natural","Arched","Straight","Thick","Thin"],build:["Slim","Average","Athletic"],accessory:["None","Glasses","Watch","Scarf"]},t={hair:["short","buzz","curly","long","fade","bald"],face:["angular","round","square","narrow"],facialHair:["none","stubble","beard","goatee","moustache"],eyebrows:["natural","arched","straight","thick","thin"],build:["slim","average","athletic"],accessory:["none","glasses","watch","scarf"]},e=n[a];if(typeof e=="number")return(s[a]||[])[e]||"—";const c=(t[a]||[]).indexOf(e);return c>=0?s[a][c]:s[a]?.[0]||"—"}function He(n){const a=n.db,{posts:s,filter:t}=$e(a,n),e=a.manager.clubId,c=g[e],o=ye(a),d=[["all","For you"],["club","My club"],["fans","Fans"],["transfers","Transfers"],["pundits","Pundits"]],r=n.socialOpen,l=u=>u.kind==="club"&&g[u.clubId]?j(u.clubId,"tiny"):`<span class="s-initials">${Na(u.name)}</span>`;return`
  <div class="ea-head">
    <div><div class="crumbs">Social</div><h1>Social feed</h1><div class="sub">${c?i(c.name):"Football"} · ${i(Q(a.day))} · reactions from your career</div></div>
    <div class="row" style="gap:8px"><button class="ea-btn ghost" data-act="press-open">Press conference</button><span class="pill w">${s.length} posts</span></div>
  </div>
  <div class="subnav">${d.map(([u,v])=>`<button data-act="social-filter" data-filter="${u}" class="${t===u?"on":""}">${v}</button>`).join("")}</div>
  <div class="social-grid">
    <div class="social-feed">
      ${s.length?s.map(u=>{const v=r===u.id;return`<article class="s-post ${v?"open":""}">
          <div class="s-av">${l(u.author)}</div>
          <div class="s-main">
            <div class="s-head">
              <b>${i(u.author.name)}</b>
              ${u.author.verified?'<span class="s-v" title="Verified">✓</span>':""}
              <span class="s-handle">@${i(u.author.handle)}</span>
              <span class="s-time">${i(V(u.day))}</span>
            </div>
            ${u.author.outlet?`<div class="s-outlet">${i(u.author.outlet)}</div>`:""}
            <p class="s-text">${i(u.text)}</p>
            ${u.tags.length?`<div class="s-tags">${u.tags.map(p=>`<button data-act="social-tag" data-tag="${i(p)}">${i(p)}</button>`).join("")}</div>`:""}
            <div class="s-actions">
              <button data-act="social-like" data-id="${i(u.id)}" class="${u.liked?"on":""}">${u.liked?"♥":"♡"} ${(u.likes+(u.liked?1:0)).toLocaleString()}</button>
              <button data-act="social-open" data-id="${i(u.id)}">💬 ${u.comments.length}</button>
              <button data-act="social-repost" data-id="${i(u.id)}" class="${u.reposted?"on":""}">⇄ ${(u.reposts+(u.reposted?1:0)).toLocaleString()}</button>
            </div>
            ${v?`<div class="s-comments">
              ${u.comments.map(p=>`<div class="s-comment"><div class="s-av sm">${l(p.author)}</div><div><b>${i(p.author.name)}</b> ${p.author.verified?'<span class="s-v">✓</span>':""} <span class="s-handle">@${i(p.author.handle)}</span><p>${i(p.text)}</p></div></div>`).join("")}
              <div class="s-comment-note">Comments are generated from the career world; replying is not available.</div>
            </div>`:""}
          </div>
        </article>`}).join(""):'<div class="card"><p class="dim small">No posts yet. Advance the career and the feed will react to results, transfers and board news.</p></div>'}
    </div>
    <aside class="social-rail">
      <div class="f-panel">
        <div class="f-panel-h"><h3>Trending</h3></div>
        ${o.length?o.map(u=>`<button class="s-trend" data-act="social-tag" data-tag="${i(u.tag)}"><b>${i(u.tag)}</b><span>${u.posts} post${u.posts===1?"":"s"}</span></button>`).join(""):'<p class="dim small">No trends yet.</p>'}
      </div>
      <div class="f-panel">
        <div class="f-panel-h"><h3>Who to follow</h3></div>
        ${["Sam Whitlock","Fabien Rossi","Nina Costa"].map((u,v)=>`<div class="s-follow"><span class="s-av sm"><span class="s-initials">${Na(u)}</span></span><div><b>${u}</b><span class="s-handle">@${u.toLowerCase().replace(/[^a-z]/g,"")}</span></div><span class="s-v">✓</span></div>`).join("")}
      </div>
      <div class="f-panel">
        <div class="f-panel-h"><h3>Feed source</h3></div>
        <p class="tiny dim">Posts are generated from match reports, transfer news, injuries, youth promotions, board decisions and manager changes already in your save. Likes and reposts are stored with the career.</p>
      </div>
    </aside>
  </div>`}function _e(n){const a=n.db,s=a.settings||{};a.settings;const t=(c,o,d)=>`<div class="set-row"><div><b>${c}</b>${d?`<span>${d}</span>`:""}</div>${o}</div>`,e=(c,o,d)=>t(d,`<button class="set-toggle ${o?"on":""}" data-act="set-toggle" data-key="${c}">${o?"ON":"OFF"}</button>`);return`
  <div class="ea-head"><div><div class="crumbs">Settings</div><h1>Career settings</h1><div class="sub">Changes apply to this save immediately</div></div></div>
  <div class="two-col">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Match</h3></div>
      ${t("Difficulty",`<select class="sel" data-change="set-difficulty">${["amateur","semi-pro","professional","world class","legendary"].map(c=>`<option value="${c}" ${s.difficulty===c?"selected":""}>${c}</option>`).join("")}</select>`)}
      ${t("Half length",`<select class="sel" data-change="set-half">${[2,3,4,5,6,8,10].map(c=>`<option value="${c}" ${Math.round((s.matchLength||180)/60)===c?"selected":""}>${c} min</option>`).join("")}</select>`)}
      ${t("Injuries",`<button class="set-toggle ${s.injuries!==!1?"on":""}" data-act="set-toggle" data-key="injuries">${s.injuries!==!1?"ON":"OFF"}</button>`)}
      ${t("Referee strictness",`<select class="sel" data-change="set-referee">${["lenient","standard","strict"].map(c=>`<option value="${c}" ${(s.referee||"standard")===c?"selected":""}>${c}</option>`).join("")}</select>`,"Strict referees show more cards")}
      ${t("Weather effects",`<button class="set-toggle ${s.weatherEffects!==!1?"on":""}" data-act="set-toggle" data-key="weatherEffects">${s.weatherEffects!==!1?"ON":"OFF"}</button>`,"Rain, wind and snow reduce expected goals")}
      <p class="note">These feed the match simulation: half length sets the simulated clock, difficulty scales the opposition, injuries control whether knocks are generated, and conditions alter goals and cards in simulated matches.</p>
    </div>
    <div class="f-panel">
      <div class="f-panel-h"><h3>Career</h3></div>
      ${e("autoSave",s.autoSave!==!1,"Auto-save")}
      ${e("unexpectedEvents",s.unexpectedEvents!==!1,"Unexpected Events")}
      ${t("Event frequency",`<select class="sel" data-change="set-event-frequency">${["low","normal","high"].map(c=>`<option value="${c}" ${(s.eventFrequency||"normal")===c?"selected":""}>${c}</option>`).join("")}</select>`)}
      ${t("Event impact",`<select class="sel" data-change="set-event-impact">${["low","normal","high"].map(c=>`<option value="${c}" ${(s.eventImpact||"normal")===c?"selected":""}>${c}</option>`).join("")}</select>`)}
      ${t("Transfer difficulty",`<select class="sel" data-change="set-transfer">${["easy","normal","hard"].map(c=>`<option value="${c}" ${s.transferDifficulty===c?"selected":""}>${c}</option>`).join("")}</select>`,"How readily clubs accept below-valuation offers")}
      <div class="set-row"><div><b>Save career</b><span>Writes to this slot</span></div><button class="f-ghost" data-act="save">Save now</button></div>
      <div class="set-row"><div><b>Export save</b><span>Download the career as JSON</span></div><button class="f-ghost" data-act="export-career">Export</button></div>
    </div>
  </div>
  <div class="two-col" style="margin-top:12px">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Finances</h3><span class="tiny dim">Custom options labelled</span></div>
      ${e("unlimitedMoney",!!s.unlimitedMoney,"Unlimited Money (CUSTOM)")}
      <p class="note">Unlimited Money removes transfer and wage limits for this save. It is a custom option added for you, not an FC 26 setting.</p>
      <p class="note">Performance bonuses promised in transfer offers are paid at season end: 40% at 20 appearances, 35% at 8 goals, and 25% at 12 clean sheets. Unmet targets pay nothing.</p>
      ${t("Financial takeover",`<button class="f-ghost" data-act="takeover" ${s.takeoverUsed?"disabled":""}>${s.takeoverUsed?"Already used":"Inject £120M"}</button>`,"One-off investment added to the club balance and transfer budget")}
    </div>
    <div class="f-panel">
      <div class="f-panel-h"><h3>Manager</h3></div>
      <div class="set-row"><div><b>${i(a.manager.first)} ${i(a.manager.last)}</b><span>${i(a.manager.nat)} · ${i(a.manager.personality||"tactician")}</span></div><button class="f-ghost" data-act="section" data-section="customise">Customise</button></div>
      <div class="set-row"><div><b>World &amp; history</b><span>Other leagues, champions and top scorers</span></div><button class="f-ghost" data-act="nav" data-screen="world">Open</button></div>
      <div class="set-row"><div><b>Club information</b><span>Stadium, facilities, colours</span></div><button class="f-ghost" data-act="section" data-section="club">Open</button></div>
      <div class="set-row"><div><b>History</b><span>Past seasons and trophies</span></div><button class="f-ghost" data-act="nav" data-screen="history">Open</button></div>
    </div>
  </div>`}function Ve(n){const a=n.db;Ha(a);const s=yt(a),t=s&&!s.completed&&!s.failed?s:null,e=s?.completed?"complete":s?.failed?"failed":t?"active":"none",c=e==="complete"?"w":e==="failed"?"l":e==="active"?"d":"",o=l=>`<div class="ml-objective ${l.status}">
    <div class="ml-objective-main"><b>${i(l.label)}</b><span>${l.type==="position"?`Current: ${l.progress||"—"}`:l.type==="points"?`Current: ${l.progress||0}`:l.type==="promoted"?`${l.progress||0}/${l.target} promoted`:l.type==="domestic"?`${l.progress||0}/${l.target} in squad`:l.type==="graduateApps"?`${l.progress||0}/${l.target} appearances`:l.type==="cup"||l.type==="league"?l.status==="complete"?"Won":l.status==="failed"?"Eliminated":"In progress":`${l.progress||0}/${l.target}`}</span></div>
    <span class="pill ${l.status==="complete"?"w":l.status==="failed"?"l":"d"}">${i(l.status)}</span>
  </div>`,d=s?`<div class="ml-active" style="--ml:${s.colour||"#41d6ff"}">
    <div class="ml-active-top">
      <div><span class="tag">${i(s.category)} challenge · ${e.toUpperCase()}</span><h2>${i(s.title)}</h2><p>${i(s.definition?.story||"")}</p></div>
      <div class="ml-progress-ring"><b>${Math.round(s.progress*100)}%</b><span>Objectives</span></div>
    </div>
    <div class="ml-progress"><i style="width:${Math.round(s.progress*100)}%"></i></div>
    <div class="ml-active-meta">
      <span><b>${s.daysLeft}</b> days left</span>
      <span><b>${i(g[s.clubId]?.name||"")}</b> Club</span>
      <span><b>${S(s.reward?.transfer||0)}</b> Reward</span>
      <span><b>${s.reward?.reputation||0}</b> Reputation</span>
    </div>
    <div class="ml-objectives">${s.objectives.map(o).join("")}</div>
    ${e==="complete"?'<div class="ml-result win">Challenge complete. The reward has been paid into the career.</div>':e==="failed"?'<div class="ml-result fail">Challenge ended. Your career continues normally.</div>':'<button class="ea-btn ghost" data-act="challenge-abandon">Abandon challenge</button>'}
  </div>`:"",r=`<div class="ml-grid">
    ${_a.map(l=>`<article class="ml-card ${s?.id===l.id?"active":""}" style="--ml:${l.colour}">
      <div class="ml-card-top"><span>${i(l.category)}</span><b>${i(l.difficulty)}</b></div>
      <h3>${i(l.title)}</h3>
      <p>${i(l.subtitle)}</p>
      <div class="ml-club">${j(l.clubId,"tiny")} ${i(g[l.clubId]?.name||"")}</div>
      <div class="ml-conditions">${l.conditions.map(u=>`<span>${i(u)}</span>`).join("")}</div>
      <div class="ml-objective-list">${l.objectives.map(u=>`<span>${i(u.label)}</span>`).join("")}</div>
      ${!t&&s?.id!==l.id||s?.completed||s?.failed?l.clubId===a.manager.clubId?`<button class="ea-btn primary wide" data-act="challenge-start" data-challenge="${i(l.id)}">Start in this career</button>`:`<button class="ea-btn ghost wide" disabled>Requires ${i(g[l.clubId]?.name||"another club")}</button>`:""}
    </article>`).join("")}
  </div>`;return`
  <div class="ea-head">
    <div><div class="crumbs">Manager Live</div><h1>Manager Live</h1><div class="sub">One-season challenges inside your save · ${i(Q(a.day))}</div></div>
    <span class="pill ${c}">${e==="none"?"No active challenge":e}</span>
  </div>
  ${d}
  <div class="card-head" style="margin:24px 0 10px"><h3>Challenge catalogue</h3><span class="tiny dim">${_a.length} scenarios</span></div>
  ${r}
  <p class="note" style="margin-top:14px">Starting a challenge applies its rules to this career immediately. Points deductions and budget changes are reversed if you abandon before completion. Existing saves without a challenge are unaffected.</p>`}function Ge(n){const a=n.db,s=a.manager,t=s.clubId,e=t?g[t]:null,c=gt(a),o=!!t;$t(a);const d=(a.managerMoves||[]).slice(-5).reverse(),r=l=>Math.max(4,Math.min(96,Math.round(60-(l-s.reputation)*5+(s.record.won-s.record.lost)*.6)));return`
  <div class="ea-head">
    <div><div class="crumbs">Manager market</div><h1>Manager market</h1><div class="sub">${o?`Currently at ${i(e.name)}`:"Unemployed and available"}</div></div>
  </div>
  <div class="two-col">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Your standing</h3></div>
      <div class="kv"><span>Reputation</span><b>${s.reputation}</b></div>
      <div class="kv"><span>Record</span><b>${s.record.won}W ${s.record.drawn}D ${s.record.lost}L</b></div>
      <div class="kv"><span>Status</span><b>${o?"Employed":"Available"}</b></div>
      ${o?`<div class="kv"><span>Job security</span><b>${Math.round(a.clubs[t].board.confidence)}%</b></div>`:""}
      <p class="note">Clubs approach managers whose reputation matches their level. Applying to a club far above your standing will be rejected.</p>
    </div>
    <div class="f-panel">
      <div class="f-panel-h"><h3>Recent moves</h3></div>
      ${d.length?d.map(l=>`<div class="kv"><span>${i(g[l.clubId]?.short||l.clubId)}</span><b>${i(l.in)}</b></div>`).join(""):'<p class="dim small">No managerial changes yet this season.</p>'}
      <div class="f-panel-h" style="margin-top:14px"><h3>Vacancies</h3><span class="tiny dim">${c.length} clubs</span></div>
      ${c.length?c.map(l=>{const u=g[l.clubId],v=r(u.reputation);return`<div class="job-row">
          <div class="row" style="gap:8px">${j(u.id,"tiny")}<div><b>${i(u.name)}</b><span class="tiny dim">${i(O[u.leagueId].name)} · ${i(u.stadium)} · rep ${u.reputation}</span></div></div>
          <div class="row" style="gap:8px"><span class="pill ${v>55?"w":v>25?"d":"l"}">${v}% likely</span>
          <button class="btn sm primary" data-act="apply-job" data-club="${i(l.clubId)}">${o?"Apply":"Take job"}</button></div>
        </div>`}).join(""):'<p class="dim small">No vacancies at your level right now.</p>'}
    </div>
  </div>`}function Ye(n,a){const s=xt(n,a),t=e=>e?`${e}/5`:"—";return`<div class="two-col">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Coaching staff</h3><span class="tiny dim">${s.coaches.length}/4 · ${W(s.weeklyWages)}/wk</span></div>
      ${s.coaches.length?s.coaches.map(e=>`<div class="job-row">
        <div><b>${i(ns(e))}</b><span class="tiny dim">${i(Fa[e.department].label)} · ${i(e.nat)} · quality ${e.quality}/5</span></div>
        <button class="btn sm danger" data-act="fire-coach" data-id="${i(e.id)}">Dismiss</button>
      </div>`).join(""):'<p class="dim small">No coaches employed. Development runs at the base rate until you hire specialists.</p>'}
      <div class="health-grid" style="margin-top:12px">
        ${Object.entries(Fa).map(([e,c])=>`<div class="health"><span>${c.label}</span><b>${t(s.quality[e])}</b><i>${i(c.note)}</i></div>`).join("")}
      </div>
    </div>
    <div class="f-panel">
      <div class="f-panel-h"><h3>Available coaches</h3></div>
      ${s.market.length?s.market.slice(0,6).map(e=>`<div class="job-row">
        <div><b>${i(ns(e))}</b><span class="tiny dim">${i(Fa[e.department].label)} · quality ${e.quality}/5 · ${i(e.nat)}</span></div>
        <div class="row" style="gap:8px"><span class="tiny dim">${S(e.fee)} fee<br/>${W(e.wage)}/wk</span><button class="btn sm primary" data-act="hire-coach" data-id="${i(e.id)}">Hire</button></div>
      </div>`).join(""):'<p class="dim small">No candidates at your level right now.</p>'}
      <p class="note">Coaches raise the development multiplier for every player in their department, including your academy.</p>
    </div>
  </div>`}function Ke(n){return Pe(n)}function ze(n){const a=n.db,s=ft(a),t=a.historyStats||[],e=c=>{const o=a.comps?.[c];if(!o?.table)return"";const d=Object.values(o.table).sort((r,l)=>l.points-r.points||l.gf-l.ga-(r.gf-r.ga)).slice(0,8);return`<div class="f-panel">
      <div class="f-panel-h"><h3>${i(O[c].name)}</h3><span class="tiny dim">${a.season}/${String(a.season+1).slice(2)}</span></div>
      ${d.map((r,l)=>`<div class="kv"><span>${l+1}. ${i(g[r.clubId]?.short||r.clubId)}</span><b>${r.points} pts</b></div>`).join("")}
    </div>`};return`
  <div class="ea-head"><div><div class="crumbs">Season</div><h1>World &amp; history</h1><div class="sub">Deeper Simulation tracks ${s.length} league${s.length===1?"":"s"}${a.settings?.deeperLeagues?.length?"":" · choose more in career creation"}</div></div></div>
  <div class="two-col">
    <div class="f-panel">
      <div class="f-panel-h"><h3>Tracked leagues</h3></div>
      ${s.map(c=>`<div class="kv"><span>${i(O[c].name)}</span><b>${a.settings?.deeperLeagues?.includes(c)?"Deeper":"Home"}</b></div>`).join("")}
      <p class="note">Every league is simulated with real fixtures and tables. Deeper Simulation additionally stores final tables, champions and top scorers for the leagues you selected.</p>
      ${a.settings?.deeperLeagues?.length?"":'<p class="tiny dim">Start a new career and pick up to five leagues in the Settings step to build a multi-league history.</p>'}
    </div>
    <div class="f-panel">
      <div class="f-panel-h"><h3>Champions by season</h3></div>
      ${t.length?t.slice(0,8).map(c=>`<div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05)">
        <div class="row spread"><b class="small">${c.season}/${String(c.season+1).slice(2)}</b></div>
        ${c.leagues.map(o=>`<div class="kv"><span>${i(O[o.leagueId]?.short||o.leagueId)}</span><b>${i(g[o.champion]?.name||"—")}</b></div>`).join("")}
      </div>`).join(""):'<p class="dim small">No completed seasons recorded yet. Finish a season to build the archive.</p>'}
    </div>
  </div>
  <div class="world-grid" style="margin-top:12px">${s.map(e).join("")}</div>
  ${t.some(c=>c.leagues.some(o=>o.topScorers?.length))?`<div class="f-panel" style="margin-top:12px"><div class="f-panel-h"><h3>Historical top scorers</h3></div>
    ${t.slice(0,4).map(c=>`<div style="margin-bottom:10px"><div class="tiny dim">${c.season}/${String(c.season+1).slice(2)}</div>${c.leagues.flatMap(o=>o.topScorers.slice(0,3)).map(o=>`<div class="kv"><span>${i(o.name)}</span><b>${o.goals}</b></div>`).join("")}</div>`).join("")}
  </div>`:""}`}const N=n=>`${n.first} ${n.last}`,ys={low:.035,normal:.08,high:.16};function Je(n,a){return a[Math.floor(n()*a.length)%a.length]}function D(n){const a=n.manager.clubId;return a?{clubId:a,club:g[a],state:n.clubs[a]}:null}const Qe=[{id:"homesick",when(n){const a=D(n);return a&&E(n,a.clubId).find(s=>s.nation&&s.nation!==a.club.nation&&s.morale<68)},build(n,a){const s=D(n),t=E(n,s.clubId).filter(e=>e.nation!==s.club.nation&&e.morale<68)[0];return{id:`ev-homesick-${t.id}`,category:"Player",title:"Homesick",body:`${N(t)} has told your staff he is struggling to settle in ${s.club.name}. His agent says the family has not adapted and a move home is being considered.`,subject:N(t),options:[{label:"Give him compassionate leave",effects:{playerMorale:14,morale:2,confidence:-2},outcome:`${N(t)} is grateful for the support. The dressing room noticed.`},{label:"Tell him to focus on football",effects:{playerMorale:-12,morale:-2,confidence:1},outcome:`${N(t)} has gone quiet around the training ground.`},{label:"Promise to review it in the window",effects:{playerMorale:4,confidence:-1},outcome:`${N(t)} accepts the conversation, for now.`}]}}},{id:"injury-risk",when(n){const a=D(n);return a&&E(n,a.clubId).find(s=>s.fitness<78&&s.ovr>72)},build(n,a){const s=D(n),t=E(n,s.clubId).filter(e=>e.fitness<78&&e.ovr>72).sort((e,c)=>c.ovr-e.ovr)[0];return{id:`ev-injury-${t.id}`,category:"Medical",title:"Injury warning",body:`The medical team report tightness in ${N(t)}'s hamstring. Playing him risks a longer absence.`,subject:N(t),options:[{label:"Rest him this week",effects:{playerFitness:18,playerMorale:2,confidence:-1},outcome:`${N(t)} has recovered fully.`},{label:"Manage his minutes",effects:{playerFitness:8,playerMorale:-2},outcome:`${N(t)} will feature in short bursts.`},{label:"He starts anyway",effects:{playerFitness:-22,playerMorale:-6,confidence:1},outcome:`${N(t)} played through it, but the medical staff are concerned.`}]}}},{id:"transfer-request",when(n){const a=D(n);return a&&E(n,a.clubId).find(s=>s.morale<52&&s.ovr>76)},build(n){const a=D(n),s=E(n,a.clubId).filter(t=>t.morale<52&&t.ovr>76).sort((t,e)=>e.ovr-t.ovr)[0];return{id:`ev-request-${s.id}`,category:"Squad",title:"Transfer request",body:`${N(s)} has asked to leave. He believes he is not playing enough and wants to speak to other clubs.`,subject:N(s),options:[{label:"Accept the request",effects:{playerMorale:6,confidence:-2,listPlayer:s.id},outcome:`${N(s)} is officially transfer listed.`},{label:"Reject it and back him",effects:{playerMorale:-8,confidence:2},outcome:`${N(s)} has stayed, but the relationship is strained.`},{label:"Offer a new contract",effects:{playerMorale:18,budgetCost:2e6,confidence:-1},outcome:`${N(s)} has signed improved terms.`}]}}},{id:"board-review",when(n){const a=D(n);return a&&a.state.board.confidence<55},build(n){return D(n),{id:"ev-board-review",category:"Board",title:"Board review",body:"The board have met to discuss the season. A majority want to tighten the budget; others believe a new signing would lift the club.",options:[{label:"Accept a small transfer cut",effects:{transferBudget:-.08,confidence:4},outcome:"The board appreciate the pragmatism."},{label:"Fight for one more signing",effects:{transferBudget:.06,confidence:-3},outcome:"You have won the argument, for now."},{label:"Ask them to back the academy",effects:{youthInvestment:1,confidence:1,budgetCost:3e6},outcome:"The academy budget has increased."}]}}},{id:"fan-unrest",when(n){const a=D(n);return a&&a.state.form?.filter(s=>s==="L").length>=2},build(n){return D(n),{id:"ev-fans",category:"Supporters",title:"Supporters demand answers",body:"A supporters' group has released a statement criticising recent performances and asking for clarity on the club's direction.",options:[{label:"Meet them face to face",effects:{morale:3,confidence:2},outcome:"The supporters group praised the honesty of the meeting."},{label:"Issue a short club statement",effects:{confidence:0,reputation:-1},outcome:"The statement was received without enthusiasm."},{label:"Ignore it and prepare for the next game",effects:{confidence:-2,morale:-2},outcome:"The story ran for another week."}]}}},{id:"youth-interest",when(n){const a=D(n);return a&&(n.youth?.[a.clubId]||[]).length>0},build(n){const a=D(n),s=(n.youth[a.clubId]||[]).find(e=>!n.players[e]?.promoted),t=s?n.players[s]:null;return t?{id:`ev-youth-${t.id}`,category:"Academy",title:"Academy prospect watched",body:`Scouts from a rival club watched ${N(t)} in the youth team. Your coaches believe he is ready to train with the first team.`,subject:N(t),options:[{label:"Promote him to the senior squad",effects:{youthProgress:t.id,confidence:1,morale:3},outcome:`${N(t)} has been promoted.`},{label:"Keep him in the academy for now",effects:{youthDevelopment:t.id,confidence:-1},outcome:`${N(t)} continues his development with the youth team.`},{label:"Offer him a new academy deal",effects:{youthDevelopment:t.id,budgetCost:5e5,morale:1},outcome:`${N(t)} has signed a new scholarship.`}]}:null}}];function Xe(n,a=Math.random){const s=n.settings||{};if(s.unexpectedEvents===!1)return null;if(n.pendingEvent)return n.pendingEvent;if(n.day<(n.lastEventDay||0)+4)return null;const t=ys[s.eventFrequency||"normal"]??ys.normal;if(a()>t)return null;const e=Qe.filter(d=>{try{return!!d.when(n)}catch{return!1}});if(!e.length)return null;const c=Je(a,e),o=c.build(n,a);return o?(o.templateId=c.id,o.day=n.day,n.pendingEvent=o,n.lastEventDay=n.day,o):null}function Ze(n,a){const s=n.pendingEvent;if(!s)return null;const t=s.options[a];if(!t)return null;const e=D(n),c=t.effects||{},o={low:.5,normal:1,high:1.6}[n.settings?.eventImpact||"normal"]??1,d=e?.clubId;if(e){const r=e.state;if(c.morale){r.morale=Math.max(0,Math.min(100,(r.morale||60)+c.morale*o));for(const l of E(n,d))l.morale=Math.max(0,Math.min(100,l.morale+c.morale*o*.6))}if(c.confidence&&(r.board.confidence=Math.max(0,Math.min(100,r.board.confidence+c.confidence*o))),c.transferBudget&&(r.budget.transfer=Math.max(0,Math.round(r.budget.transfer*(1+c.transferBudget*o)))),c.budgetCost&&(r.budget.balance=Math.max(0,r.budget.balance-c.budgetCost),r.budget.transfer=Math.max(0,r.budget.transfer-c.budgetCost)),c.reputation&&(n.manager.reputation=Math.max(0,Math.min(100,n.manager.reputation+c.reputation*o))),c.playerMorale&&s.subject){const l=E(n,d).find(u=>N(u)===s.subject);l&&(l.morale=Math.max(0,Math.min(100,l.morale+c.playerMorale*o)),l.managerRelationship=Math.max(0,Math.min(100,(l.managerRelationship??55)+c.playerMorale*o)))}if(c.playerFitness&&s.subject){const l=E(n,d).find(u=>N(u)===s.subject);l&&(l.fitness=Math.max(10,Math.min(100,l.fitness+c.playerFitness*o)))}if(c.youthProgress){const l=n.players[c.youthProgress];l&&(l.youthPitchTime=(l.youthPitchTime||0)+1,l.ovr=Math.min(99,l.ovr+1))}if(c.youthDevelopment){const l=n.players[c.youthDevelopment];l&&(l.pot=Math.min(99,l.pot+1))}if(c.youthInvestment&&(r.facilities.youth=Math.min(5,r.facilities.youth+1)),c.listPlayer){const l=n.players[c.listPlayer];l&&(l.transferStatus="listed")}e.clubId&&St(n,{type:"manager",importance:2,clubId:e.clubId,headline:`${s.title}: ${t.outcome||t.label}`,body:s.body})}return It(n,{type:"event",importance:2,headline:s.title,body:`${t.outcome||t.label}`,playerId:null}),n.events=n.events||[],n.events.unshift({day:s.day||n.day,title:s.title,choice:t.label,outcome:t.outcome||""}),n.events.length>40&&(n.events.length=40),n.pendingEvent=null,{event:s,option:t}}const ws=new Set(["academy-sign","academy-reject","academy-promote","academy-release","academy-loan-list","academy-loan-accept","academy-loan-reject","loan-list","senior-loan-accept","senior-loan-reject","shortlist","set-squad-role","apply-squad-role","set-shirt-number","apply-shirt-number","list-player","confirm-release","submit-renew","academy-custom-attr","academy-hire-scout","academy-fire-scout","academy-start-scouting","academy-auto-xi","academy-formation","academy-enter-cup","academy-xi","academy-bench","academy-plan","academy-scout-duration","play-youth-tie","sim-youth-tie","release-youth"]),Ba=[{id:"central",label:"Central",screen:"home"},{id:"squad",label:"Squad",screen:"squad"},{id:"tactics",label:"Tactics",screen:"tactics"},{id:"transfers",label:"Transfers",screen:"transfers"},{id:"youth",label:"Youth",screen:"youth"},{id:"season",label:"Season",screen:"competitions"},{id:"office",label:"Office",screen:"office"},{id:"social",label:"Social",screen:"social"},{id:"market",label:"Market",screen:"market"},{id:"live",label:"Manager Live",screen:"live"},{id:"club",label:"Club",screen:"club"},{id:"settings",label:"Settings",screen:"settings"}],an={home:"central",calendar:"central",news:"central",training:"central",squad:"squad",tactics:"tactics",transfers:"transfers",youth:"youth",competitions:"season",office:"office",manager:"office",history:"office",social:"social",settings:"settings",market:"market",live:"live",club:"club",customise:"settings"},sn={squad:"squad",tactics:"tactics",transfers:"hub",office:"overview",settings:"career",youth:null,season:null,social:null,market:null,live:null,club:null,central:null};class tn{constructor({root:a,engine:s,onExit:t=null}){this.root=a,this.engine=s,this.onExit=t,this.db=null,this.screen="home",this.section="central",this.tab=null,this.compareSel=null,this.lineupSel=null,this.modal=null,this.busy=!1,this.slots=[],this.creator=null,this.pendingFixture=null,this.lastFixture=null,this.calendarMonth=null,this.selectedDay=null,this.prefs=ma(),this.bind()}bind(){this.root.addEventListener("click",a=>this.onClick(a)),this.root.addEventListener("change",a=>this.onChange(a)),this.root.addEventListener("input",a=>this.onInput(a)),document.addEventListener("keydown",a=>{if(a.key==="Escape"){if(this.modal)return this.closeModal();this.db&&this.section!=="central"&&this.goSection("central")}})}async boot(){this.slots=await ha();try{const a=await Et();a?.squads&&(Ra(a.squads),Da(a.squads),ls(a.nations))}catch{}this.showTitle()}showTitle(){this.db=null,this.screen="title",this.root.classList.remove("hidden"),this.root.innerHTML=Bt(this.slots,{imported:et(),bundled:nt()})}importSquads(){const a=document.createElement("input");a.type="file",a.accept=".csv,text/csv",a.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(a),a.addEventListener("change",async()=>{const s=a.files&&a.files[0];if(a.remove(),!!s){this.toast(`Reading ${s.name}…`);try{const t=await s.text(),{parsePlayerSquads:e}=await va(async()=>{const{parsePlayerSquads:r}=await import("./playerCsv-U-RERKxG.js");return{parsePlayerSquads:r}},__vite__mapDeps([0,1,2,3,4,5])),{squads:c,nations:o,stats:d}=e(t);if(!d.clubs){this.toast(`No clubs in that file matched the ${Object.keys(g).length} in this game`,"bad");return}await Ot(c,o),Ra(c),Da(c),ls(o),this.toast(`${d.players.toLocaleString()} players · ${d.clubs} clubs · ${d.nations} nations imported${d.womenSkipped?` · ${d.womenSkipped} women's rows kept separate`:""}`),this.showTitle()}catch(t){this.toast(`Import failed: ${t.message}`,"bad")}}}),a.click()}async removeImportedSquads(){await Lt(),Ra(null),Da(null),this.toast("Imported squads removed — generated squads restored"),this.showTitle()}exitApp(){try{typeof this.onExit=="function"&&this.onExit()}catch(a){console.warn("[manager] exit failed",a)}}async showLoad(){this.slots=await ha(),this.root.innerHTML=Ut(this.slots,{mode:"load"})}startCreator(){this.creator={step:0,manager:{first:"Alex",last:"Morgan",gender:"male",nat:"England",dob:T(1982,3,14),reputation:48,preferredFormation:"4-2-3-1",philosophy:"balanced",playingStyle:"possession",coachingPhilosophy:"development",experience:"semi-pro",appearance:{skin:2,hair:"short",hairColor:0,face:"angular",build:"average",outfit:"suit-black",accessory:"none",facialHair:"none",eyebrows:"natural"},personality:"tactician"},templateId:"custom",clubId:"arsenal",leagueId:"premier-league",clubCountry:"England",clubSearch:"",search:"",slot:null,settings:{...this.prefs||ma(),financialTakeover:!1,unlimitedMoney:!1}},this.renderCreator()}async showCareerHistory(){this.slots=await ha(),this.root.innerHTML=Wt(this.slots)}async showCareerSettings(){this.slots=await ha(),this.prefs=ma(),this.root.innerHTML=Ht(this.prefs,this.slots)}async showManagerLiveTitle(){this.slots=await ha(),this.root.innerHTML=_t(_a,this.slots)}startChallenge(a){const s=is(a);s&&(this.startCreator(),this.creator.challenge=s.id,this.creator.challengeTitle=s.title,this.creator.leagueId=g[s.clubId].leagueId,this.creator.clubCountry=g[s.clubId].nation,this.creator.clubId=s.clubId,this.renderCreator())}updatePrefs(a,s){this.prefs={...this.prefs||ma(),[a]:s},Vt(this.prefs),this.showCareerSettings()}cyclePref(a){const s=this.prefs||ma(),e={difficulty:["amateur","semi-pro","professional","world class","legendary"],matchLength:[120,180,240,300,360,480],eventFrequency:["low","normal","high"],eventImpact:["low","normal","high"]}[a];if(!e)return;const c=e.indexOf(s[a]);this.updatePrefs(a,e[(c+1)%e.length])}renderCreator(){this.root.innerHTML=Gt(this.creator)}mount(a){this.db=a,this.screen="home",this.tab=null,this.pendingFixture=null,this.calendarMonth=(()=>{const s=ja(a.day);return{y:s.y,m:s.m}})(),Xs(a),this.render(),this.maybePendingMatch()}openEventModal(a){this.openModal(`
      <div class="ev-head"><span class="ev-tag">${i(a.category||"Career")}</span><h2>${i(a.title)}</h2></div>
      <p class="small" style="line-height:1.55;color:#c9d8e8">${i(a.body)}</p>
      <div class="ev-options">
        ${a.options.map((s,t)=>`<button class="ev-option" data-act="event-choice" data-index="${t}"><b>${i(s.label)}</b></button>`).join("")}
      </div>
      <p class="tiny dim" style="margin-top:10px">Consequences are applied immediately. Unexpected Events can be changed in Settings.</p>
    `)}exportCareer(){try{const a=exportCareerFile(this.db),s=new Blob([a],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(s),t.download=`career-${this.db.season}.json`,t.click(),URL.revokeObjectURL(t.href),this.toast?.("Career exported")}catch{this.toast?.("Could not export this career")}}maybePendingMatch(){if(!this.db?.manager.clubId)return;const a=Ct(this.db);a&&!this.pendingFixture&&(this.pendingFixture=a,cs(this,a))}render(){const a=this.db;if(!a)return;const s=a.manager.clubId,t=g[s],e=a.clubs[s];oa(a,s),t&&O[t.leagueId],s&&Cs(a,s);const c=da(a.day,a.season),o=Mt(a),d=this.section||"central",r=Ba.map(l=>`<button class="f-tab ${d===l.id?"on":""}" data-act="section" data-section="${l.id}">${l.label}</button>`).join("");this.root.innerHTML=`
      <div class="career">
        <header class="f-top">
          <div class="f-club" data-act="nav" data-screen="club">
            ${t?j(s):'<div class="crest">—</div>'}
            <div class="t">
              <b>${t?i(t.name):"Unemployed"}</b>
              <div class="f-manager-name">${i(a.manager.first)} ${i(a.manager.last)}</div>
              <div class="pips">
                ${[0,1,2].map(l=>`<i class="${e&&e.board.confidence>=20+l*30?"on":""}"></i>`).join("")}
              </div>
            </div>
          </div>
          <div class="f-right">
            <button class="f-pill" data-act="nav" data-screen="news"><span>Inbox</span>${o?`<b>${o>9?"9+":o}</b>`:""}</button>
            <button class="f-pill" data-act="nav" data-screen="calendar"><span>Calendar</span></button>
            <button class="f-pill lime" data-act="advance"><span>Advance</span></button>
            <button class="f-icon" data-act="save" title="Save career">⤓</button>
            <button class="f-icon" data-act="menu" title="Menu">☰</button>
          </div>
        </header>
        <nav class="f-nav">
          <div class="f-tabs">${r}</div>
          <div class="f-meta">
            <span>${i(Q(a.day))}</span>
            <span>Season ${a.season}/${String(a.season+1).slice(2)}</span>
            <span>${c.open?`Window ${c.daysLeft}d`:"Window closed"}</span>
          </div>
        </nav>
        <nav class="f-bottom">
          ${[["central","Central","◈"],["squad","Squad","▤"],["transfers","Transfers","⇄"],["social","Social","◎"],["more","More","☰"]].map(([l,u,v])=>`<button data-act="${l==="more"?"nav-more":"section"}" ${l!=="more"?`data-section="${l}"`:""} class="${d===l?"on":""}"><i>${v}</i><span>${u}</span></button>`).join("")}
        </nav>
        ${this.navOpen?`<div class="f-more" data-act="nav-close">
          <div class="f-more-panel">
            <div class="f-more-h"><b>All sections</b><button data-act="nav-close">Close</button></div>
            <div class="f-more-grid">
              ${Ba.map(l=>`<button data-act="section" data-section="${l.id}" class="${d===l.id?"on":""}">${l.label}</button>`).join("")}
              <button data-act="section" data-section="customise">Customise</button>
            </div>
          </div>
        </div>`:""}
        <div class="c-body">
          <div class="c-main" id="cMain">
            ${this.renderCurrent()}
          </div>
        </div>
        <footer class="f-hints">
          <span><b>Click</b>Select</span>
          <span><b>Esc</b>Back</span>
          <span><b>Advance</b>Simulates one day</span>
          <span class="grow"></span>
          <span>FC 27 · Manager Career</span>
        </footer>
        <div class="toasts" id="toasts"></div>
        ${this.modal?this.modal.html:""}
      </div>
    `,this.bindPitch()}renderCurrent(){this.db;try{return this.screen==="squad"||this.screen==="tactics"?ps(this,this.tab==="squad"||!this.tab?"squad":"tactics"):["home","competitions","calendar","news"].includes(this.screen)?ps(this,this.screen):Ee(this,this.screen)}catch(a){return console.error(a),`<div class="card"><h3 style="color:#ff8f99">Screen error</h3><p class="small dim">${i(a.message)}</p></div>`}}rerender(){if(!this.db)return;const a=document.getElementById("cMain");if(!a)return this.render();a.innerHTML=this.renderCurrent(),this.bindPitch()}goto(a){this.screen=a,this.section=an[a]||this.section||"central",this.tab=a==="squad"?"squad":null,this.render(),document.getElementById("cMain")?.scrollTo(0,0)}goSection(a){const s=Ba.find(t=>t.id===a);s&&(this.lineupSel=null,this.section=a,this.screen=s.screen,this.tab=sn[a]??null,this.navOpen=!1,this.render(),document.getElementById("cMain")?.scrollTo(0,0))}toast(a,s="ok"){const t=document.getElementById("toasts");if(!t)return;const e=document.createElement("div");e.className="toast",s==="bad"&&(e.style.borderLeftColor="#ff4d5e"),e.innerHTML=i(a),t.appendChild(e),setTimeout(()=>e.remove(),4200)}openModal(a,{wide:s=!1}={}){this.root.querySelectorAll(".c-modal").forEach(e=>e.remove()),this.modal={html:`<div class="c-modal" data-act="modal-bg"><div class="box ${s?"wide":""}">${a}</div></div>`};const t=this.root.querySelector(".career");t&&t.insertAdjacentHTML("beforeend",this.modal.html)}closeModal(){this.modal=null,this.root.querySelectorAll(".c-modal").forEach(a=>a.remove())}onClick(a){const s=a.target.closest("[data-act]");if(!s)return;const t=s.dataset.act;if(t==="modal-bg"&&a.target===s)return this.closeModal();if(s.tagName==="INPUT"||s.tagName==="SELECT")return;const e={...s.dataset};if(t==="nav")return this.goto(e.screen);if(t==="section")return this.goSection(e.section);if(t==="nav-more"){this.navOpen=!this.navOpen,this.render();return}if(t==="event-choice"){const c=Ze(this.db,Number(e.index));this.closeModal(),this.render(),c&&this.toast(c.option.outcome||c.option.label);return}if(t==="nav-close"){this.navOpen=!1,this.render();return}if(t==="close-modal")return this.closeModal();if(t==="save")return this.save();if(t==="menu"||t==="quit")return this.confirmQuit();if(t==="exit-app")return this.exitApp();if(t==="advance")return this.advance();if(t==="sim-menu")return this.simMenu();if(t==="to-title")return this.showTitle();if(t==="load-screen")return this.showLoad();if(t==="new-career")return this.startCreator();if(t==="quick-match")return this.quickMatch();if(t==="career-history")return this.showCareerHistory();if(t==="career-settings")return this.showCareerSettings();if(t==="manager-live-title")return this.showManagerLiveTitle();if(t==="challenge-begin")return this.startChallenge(e.challenge);if(t==="pref-toggle")return this.updatePrefs(e.key,!this.prefs?.[e.key]);if(t==="pref-cycle")return this.cyclePref(e.key);if(this.creator&&t.startsWith("c-"))return this.creatorAction(t,e,s);if(t==="continue"||t==="load-slot"||t==="delete-slot")return this.careerAction(t,e,s,a);if(t==="import-squads")return this.importSquads();if(this.db)return this.careerAction(t,e,s,a)}onChange(a){const s=a.target.closest("[data-change]");if(s){if(this.creator)return this.creatorChange(s);this.careerChange(s)}}onInput(a){const s=a.target.closest("[data-input]");if(!s)return;const t=s.dataset.input;if(t==="search"&&(this.searchTerm=s.value,this.screen==="transfers"&&this.rerender()),t==="player-search"&&(this.playerFilter=s.value,this.screen==="squad"&&this.rerender()),t==="club-search"&&this.creator){this.creator.clubSearch=s.value;const e=s.selectionStart??s.value.length;this.renderCreator();const c=this.root.querySelector('[data-input="club-search"]');c&&(c.focus(),c.setSelectionRange(e,e))}if(t==="academy-search"&&(this.academySearch=s.value,this.screen==="youth")){const e=s.selectionStart??s.value.length;this.rerender();const c=this.root.querySelector('[data-input="academy-search"]');c&&(c.focus(),c.setSelectionRange(e,e))}}creatorAction(a,s){const t=this.creator;if(t.challenge&&["c-club","c-league","c-country","c-custom-toggle","c-custom-create"].includes(a)){const e=is(t.challenge)?.clubId;return a==="c-club"&&s.club===e?void 0:this.toast("The challenge club is locked for this scenario","bad")}if(a==="c-back")return t.step===0?this.showTitle():(t.step--,this.renderCreator());if(a==="c-next")return t.step===0&&(!t.manager.first.trim()||!t.manager.last.trim())?this.toast("Enter your first and last name","bad"):t.step===1&&!t.clubId?this.toast("Choose a club"):(t.step++,this.renderCreator());if(a==="c-club")return t.clubId=s.club,t.leagueId=g[s.club].leagueId,this.renderCreator();if(a==="c-league")return t.leagueId=s.league,t.clubCountry=g[t.clubId]?.leagueId===s.league?t.clubCountry:O[s.league]?.nation||t.clubCountry,t.clubId=null,t.clubSearch="",this.renderCreator();if(a==="c-country"){t.clubCountry=s.country;const e=ia.find(c=>c.nation===s.country);return e&&(t.leagueId=e.id),t.clubId=null,this.renderCreator()}if(a==="c-setting"){t.settings=t.settings||{};const e=s.key;return["unexpectedEvents","financialTakeover","unlimitedMoney"].includes(e)&&(t.settings[e]=!t.settings[e]),e==="eventFrequency"&&(t.settings.eventFrequency={low:"normal",normal:"high",high:"low"}[t.settings.eventFrequency||"normal"]),e==="eventImpact"&&(t.settings.eventImpact={low:"normal",normal:"high",high:"low"}[t.settings.eventImpact||"normal"]),this.renderCreator()}if(a==="c-custom-toggle")return t.showCustom=!t.showCustom,this.renderCreator();if(a==="c-custom-colour")return t.customDraft=t.customDraft||{},t.customDraft[s.key]=s.value,t.customClub&&(t.customClub[s.key]=s.value),this.renderCreator();if(a==="c-custom-create"){const e=r=>document.getElementById(r)?.value?.trim(),c=e("ccName"),o=e("ccShort");if(!c||!o)return this.toast("Enter a club name and short name","bad");const d={name:c,short:o,stadium:e("ccStadium")||`${c} Stadium`,capacity:Number(e("ccCapacity")||28e3),reputation:Math.max(48,Math.min(86,Number(e("ccRep")||66))),primary:t.customDraft?.primary||"#c8102e",secondary:t.customDraft?.secondary||"#ffffff",gk:t.customDraft?.gk||"#8ef2c0",stadiumColor:t.customDraft?.stadiumColor||"#22313f",nickname:e("ccNickname")||"",rivalId:e("ccRival")||null,replacementClubId:e("ccReplace")||null,leagueId:t.leagueId,founded:2026,id:Zs(c)};return at(d),t.customClub=d,t.clubId=d.id,t.showCustom=!1,this.renderCreator()}if(a==="c-deeper"){const e=t.settings.deeperLeagues||[],c=e.indexOf(s.league);return c>=0?e.splice(c,1):e.length<5&&e.push(s.league),t.settings.deeperLeagues=e,this.renderCreator()}if(a==="c-aesthetic"){const e=t.manager.appearance,c={skin:["skin",6],hair:["hair",6],hairColor:["hairColor",6],face:["face",4],facialHair:["facialHair",5],eyebrows:["eyebrows",5],build:["build",3],outfit:["outfit",5],accessory:["accessory",4]},[o,d]=c[s.kind]||[];if(!o)return;if(o==="skin"||o==="hairColor")e[o]=(e[o]+1)%d;else{const l={hair:["short","buzz","curly","long","fade","bald"],face:["angular","round","square","narrow"],facialHair:["none","stubble","beard","goatee","moustache"],eyebrows:["natural","arched","straight","thick","thin"],build:["slim","average","athletic"],outfit:["suit-black","suit-navy","polo-club","tracksuit","coat"],accessory:["none","glasses","watch","scarf"]}[o];e[o]=l[(l.indexOf(e[o])+1)%l.length]}return this.renderCreator()}if(a==="c-personality")return t.manager.personality=s.val,this.renderCreator();if(a==="c-gender")return t.manager.gender=s.val,this.renderCreator();if(a==="c-nation")return t.manager.nat=s.val,this.renderCreator();if(a==="c-begin")return this.createAndStart()}creatorChange(a){const s=this.creator,t=a.dataset.change;if(t==="first"&&(s.manager.first=a.value),t==="last"&&(s.manager.last=a.value),t==="dob"){const[e,c,o]=a.value.split("-").map(Number);e&&(s.manager.dob=T(e,c,o))}if(t==="nat-select"&&(s.manager.nat=a.value,this.renderCreator()),t==="reputation"&&(s.manager.reputation=Number(a.value),this.renderCreator()),t==="experience"&&(s.manager.experience=a.value,s.manager.reputation=Yt[a.value]?.rep||s.manager.reputation,this.renderCreator()),["preferredFormation","philosophy","playingStyle","coachingPhilosophy"].includes(t)&&(s.manager[t]=a.value,this.renderCreator()),t==="club-country"){s.clubCountry=a.value;const e=ia.find(c=>c.nation===a.value);e&&(s.leagueId=e.id),s.clubId=null,this.renderCreator()}if(t==="manager-template"){const e=Kt.find(c=>c.id===a.value);if(!e)return;s.templateId=e.id,s.manager={...s.manager,first:e.first,last:e.last,nat:e.nat,gender:e.gender,reputation:e.reputation,preferredFormation:e.preferredFormation,philosophy:e.philosophy,playingStyle:e.playingStyle,coachingPhilosophy:e.coachingPhilosophy,experience:e.experience,appearance:{...s.manager.appearance||{},...e.appearance}},this.renderCreator()}t==="league-search"&&(s.search=a.value,this.renderCreator())}async createAndStart(){const a=this.creator,s=st({...a.manager,first:a.manager.first.trim()||"Alex",last:a.manager.last.trim()||"Morgan",reputation:Number(a.manager.reputation)||48}),t=tt({manager:s,clubId:a.clubId,seed:Date.now()%1e9,settings:a.settings||{},customClubs:a.customClub?[a.customClub]:[]});t.settings={...t.settings,...a.settings||{}},a.settings?.unexpectedEvents===void 0&&(t.settings.unexpectedEvents=!0),a.settings?.financialTakeover&&(t.clubs[a.clubId].budget.transfer+=12e7,t.clubs[a.clubId].budget.balance+=12e7,t.settings.takeoverUsed=!0);const e=t.clubs[a.clubId].tactics,c=zt[s.philosophy],o=Ms.find(d=>d.id===c?.preset);o&&Object.assign(e,o.values),e.formation=s.preferredFormation||e.formation,t.clubs[a.clubId].lineup=null,za(t,a.clubId),this.creator=null,a.challenge&&Tt(t,a.challenge),Ha(t),this.mount(t),await this.save(!0),this.toast(`Welcome to ${g[a.clubId].name}${a.challenge?" — challenge active":""}`)}async careerAction(a,s,t,e){const c=this.db;c?.manager?.clubId;const d=(await va(()=>import("./actions-sYwMFo7s.js"),__vite__mapDeps([6,2,3,7,8,9,10,4,11,12]))).ACTIONS[a];if(d)try{const r=await d(this,c,s,t,e);return ws.has(a)&&await this.save(!0),r}catch(r){console.error(a,r),this.toast(`${a} failed: ${r.message}`,"bad");return}console.warn("unhandled action",a)}careerChange(a){const s=this.db,t=a.dataset.change;va(()=>import("./actions-sYwMFo7s.js"),__vite__mapDeps([6,2,3,7,8,9,10,4,11,12])).then(async({CHANGES:e})=>{const c=e[t];if(c)try{await c(this,s,a),ws.has(t)&&await this.save(!0)}catch(o){console.error(t,o),this.toast(`${t} failed: ${o.message}`,"bad")}})}async advance(){if(this.busy)return;const a=this.db;if(!a.manager.clubId)return this.toast("You are unemployed — take a job to continue","bad"),this.openJobMarket();this.busy=!0;try{const s=jt(a);if(s.seasonEnd)return await this.save(!0),this.busy=!1,this.showSeasonEnd();if(s.pending){this.pendingFixture=s.pending,this.render(),cs(this,s.pending),await this.save(!0),this.busy=!1;return}this.afterAdvance(s),await this.save(!0),this.maybePendingMatch()}finally{this.busy=!1}}afterAdvance(a){const s=this.db;this.render();const t=Xe(s);t&&this.openEventModal(t);for(const c of a.notes||[])this.toast(c.text);const e=(a.results||[]).filter(({fixture:c})=>c.home===s.manager.clubId||c.away===s.manager.clubId);e.length&&(this.lastFixture=e[0],At(this,e[0])),s.clubs[s.manager.clubId]?.board.confidence<12&&this.toast("The board are discussing your position","bad")}async resolveMatch(a,s){const t=this.db,e=Nt(t,a,s);Ha(t),this.pendingFixture=null,this.closeModal(),this.render();for(const c of e.notes||[])this.toast(c.text);return e}showSeasonEnd(){this.screen="season-end",this.render()}simMenu(){this.db,this.openModal(`
      <h2>Simulate</h2>
      <div class="sub">Advance time through the calendar. Every fixture is calculated — nothing is skipped.</div>
      <div class="grid g2">
        <button class="btn wide" data-act="sim-days" data-days="1">1 day</button>
        <button class="btn wide" data-act="sim-days" data-days="7">1 week</button>
        <button class="btn wide" data-act="sim-days" data-days="30">1 month</button>
        <button class="btn wide" data-act="sim-date">Sim to date…</button>
      </div>
      <div style="height:10px"></div>
      <button class="btn primary wide" data-act="sim-season">Sim to end of season</button>
      <p class="note" style="margin-top:10px">Sim to end of season plays out every remaining league, cup and European fixture, processes transfers, contract renewals, injuries, suspensions and player development until the final day.</p>
      <div class="actions"><button class="btn ghost" data-act="close-modal">Cancel</button></div>
    `)}openJobMarket(){va(async()=>{const{openJobs:a}=await import("./actions-sYwMFo7s.js");return{openJobs:a}},__vite__mapDeps([6,2,3,7,8,9,10,4,11,12])).then(({openJobs:a})=>a(this,this.db))}async save(a=!1){if(!this.db)return;const s=await Rt(this.db);a||(s.ok?this.toast("Career saved"):this.toast(`Save failed: ${s.error}`,"bad"))}confirmQuit(){this.openModal(`
      <h2>Leave career?</h2>
      <div class="sub">Save your progress before returning to the main menu.</div>
      <div class="actions">
        <button class="btn ghost" data-act="close-modal">Cancel</button>
        <button class="btn" data-act="to-title">Leave without saving</button>
        <button class="btn primary" data-act="save-quit">Save &amp; leave</button>
      </div>
    `)}quickMatch(){this.root.classList.add("hidden"),this.engine?.showQuickMatch&&this.engine.showQuickMatch()}bindPitch(){const a=ds(".slot",this.root);if(!a.length)return;let s=null;a.forEach(t=>{t.addEventListener("dragstart",e=>{s=t.dataset.player,e.dataTransfer.setData("text/plain",t.dataset.player||""),e.dataTransfer.effectAllowed="move"}),t.addEventListener("dragover",e=>{e.preventDefault(),t.classList.add("drop")}),t.addEventListener("dragleave",()=>t.classList.remove("drop")),t.addEventListener("drop",e=>{e.preventDefault(),t.classList.remove("drop");const c=e.dataTransfer.getData("text/plain")||s;this.swapPlayers(c,t.dataset.player,Number(t.dataset.slot))})}),ds(".bench-chip",this.root).forEach(t=>{t.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",t.dataset.player)})})}async swapPlayers(a,s,t){if(!a||!this.db)return;const{swapLineup:e}=await va(async()=>{const{swapLineup:c}=await import("./actions-sYwMFo7s.js");return{swapLineup:c}},__vite__mapDeps([6,2,3,7,8,9,10,4,11,12]));e(this,this.db,a,s,t)}}const en={GK:"GK",DEF:"DEF",MID:"MID",ATT:"ATT"},nn={GK:"GK",DEF:"CB",MID:"CM",ATT:"ST"};function ks(n){const s=(Array.isArray(n?.lineup)?n.lineup:Array.isArray(n?.players)?n.players:[]).map((t,e)=>({...t,id:t.careerId??t.id??`${n?.id??"team"}-${e}`,careerId:t.careerId??t.id??null,name:t.name??t.fullName??`Player ${e+1}`,position:t.position??t.pos??nn[t.slotRole]??"CM",role:en[t.slotRole]??t.role,rating:Number(t.rating)||Number(n?.rating)||75,number:t.number??e+1}));return{...n,id:n?.id??n?.short??"team",players:s,lineup:s,squad:Array.isArray(n?.squad)&&n.squad.length?n.squad:s.map(t=>t.name),bench:Array.isArray(n?.bench)?n.bench:[],formation:n?.formation??"4-3-3",rating:Number(n?.rating)||75}}function U(n,a,s){const t=n?.[a];return Array.isArray(t)&&Number(t[s])||0}function xs(n){if(!n)return n;const a=e=>Array.isArray(e)?[e[1],e[0]]:e,s=e=>{if(!e)return e;const c={...e};return(e.team===0||e.team===1)&&(c.team=1-e.team),e.side==="home"?c.side="away":e.side==="away"&&(c.side="home"),c},t={};for(const[e,c]of Object.entries(n.stats||{}))t[e]=a(c);return{...n,score:a(n.score),possession:a(n.possession),possessionPct:Number.isFinite(Number(n.possessionPct))?100-Number(n.possessionPct):n.possessionPct,stats:t,teams:a(n.teams),players:(n.players||[]).map(e=>({...e,team:e.team===0?1:0})),matchEvents:(n.matchEvents||[]).map(s),events:(n.events||[]).map(s),substitutions:(n.substitutions||[]).map(s)}}function bn(n){const a=Array.isArray(n?.score)?n.score.slice(0,2):[0,0],s=n?.stats??{},t=Array.isArray(n?.possession)?n.possession:[50,50],e=Array.isArray(n?.events)?n.events:[],c={};for(const o of n?.players??[]){const d=o?.careerId;if(!d)continue;const r=Number(o?.stat?.minutes)||0;if(!r)continue;const l={...it(),...o.stat};l.apps=1,l.minutes=r,l.ratingSum=Number(o?.stat?.ratingSum)||Number(l.ratingSum)||0,l.ratingCount=Number(o?.stat?.ratingCount)||1,l.rating=l.ratingCount?Math.round(l.ratingSum/l.ratingCount*100)/100:l.rating,c[d]=l}return{goals:[Number(a[0])||0,Number(a[1])||0],events:e.map(o=>({...o})),stats:{possession:[Math.round(Number(t[0])||50),Math.round(Number(t[1])||50)],shots:[U(s,"shots",0),U(s,"shots",1)],onTarget:[U(s,"onTarget",0),U(s,"onTarget",1)],corners:[U(s,"corners",0),U(s,"corners",1)],fouls:[U(s,"fouls",0),U(s,"fouls",1)],offsides:[U(s,"offsides",0),U(s,"offsides",1)],xg:[U(s,"xg",0),U(s,"xg",1)]},playerStats:c,injuries:[],substitutions:e.filter(o=>o?.type==="sub"),engine:!0}}function fn({root:n,runMatch:a,onExit:s=()=>{}}){let t=null;const e={playMatch:async(o={})=>{const d=t?.db?.manager?.clubId,r=!d||o.home?.id===d,l=await a({home:ks(r?o.home:o.away),away:ks(r?o.away:o.home),halfSeconds:o.halfSeconds??180,difficulty:o.difficulty??"normal",context:{mode:"manager",userIsHome:r}});return r?l:xs(l)},playYouthMatch:async({tieId:o,homeClubId:d,awayClubId:r,halfSeconds:l=120,difficulty:u="normal"}={})=>{const v=t?.db;if(!v||!d||!r)return null;const p=d===v.manager.clubId,b=await a({home:os(v,p?d:r),away:os(v,p?r:d),halfSeconds:l,difficulty:u,context:{mode:"youth",tieId:o,userIsHome:p}});return p?b:xs(b)},showQuickMatch:()=>s("kickoff")};t=new tn({root:n,onExit:()=>s(),engine:e});let c=!1;return{app:t,async open(o="title"){return c||(c=!0,await t.boot()),o==="load"?await t.showLoad():o==="title"&&t.showTitle(),t},get hasCareer(){return!!t.db}}}export{ks as adaptCareerTeam,bn as careerResultFromMatch,fn as createManagerMode};
