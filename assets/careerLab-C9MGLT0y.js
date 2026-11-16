import{s as Wt,e as ya,C as pt,h as qt,i as Kt,g as Ke,N as be,t as ht,u as Xe,q as ye,d as Ee,A as ca,j as ut,l as _e,I as Xt,G as ne,v as _t}from"./index-CPu46q6F.js";import{L as ja,C as ga,K as ie,N as Zt,b6 as zt,b7 as Qt,b8 as Jt,b9 as as,ba as es,bb as ts,bc as U,bd as ss,be as ns,U as re,bf as Ze,bg as is,bh as rs,a3 as W,a4 as B,bi as _,a2 as ia,bj as Wa,bk as b,ar as Na,b2 as na,bl as Te,a0 as wa,bm as qa,bn as mt,am as bt,aG as vt,bo as Ka,bp as Ba,bq as A,b4 as Ae,br as Ha,aN as Ga,aF as Fa,bs as ft,bt as Se,bu as $t,v as Ca,bv as ze,V as ls,bw as gt,bx as yt,by as ve,bz as Et,p as Sa,a_ as fe,bA as Tt,bB as At,bC as Qe,ag as os,bD as St,bE as cs,bF as ds,aJ as Je,bG as ps,bH as hs,aM as us,aI as le,bI as ms,bJ as bs,bK as vs,bL as fs,ap as $s,aH as gs,bM as ys,bN as Es}from"./selectors-CoZTNvxC.js";import{x as Xa,w as Nt,s as at,y as et,o as Ts,z as oe,C as As,A as Ss,B as Ns,D as Cs,H as Rs,E as ws,F as Is,G as Os,I as ks,J as La,K as Ms,L as Ls,M as Ps,N as Ds,u as xs}from"./shop-CRX46fCk.js";import"./preload-helper-CLcXU_4U.js";import"./clubs-7SsSOggh.js";import"./sharedSquads-BOOy-0mA.js";const tt={firstName:"Alex",lastName:"Voss",knownAs:"",nationality:"AUR",position:"ST",secondaryPosition:"",preferredFoot:"right",heightCm:180,weightKg:74,clubId:"riverton",scenario:"academy",appearance:{...Wt}};function ce(i={}){return{...tt,...i,appearance:{...tt.appearance,...i.appearance??{}}}}function Ra(i){return pt.find(a=>a.id===i)??null}function da(i){return ga.find(a=>a.id===i)??null}function st(i){const a=da(i);return a?ja.find(e=>e.id===a.leagueId)??null:null}function Fs(){return ja.map(i=>({...i,clubs:i.clubIds.map(a=>da(a)).filter(Boolean)}))}function Us(i){return ya.find(a=>a.id===i?.squadRole)?.label??"Academy Prospect"}function de(i){return Ra(i?.scenario)?.startOverall??60}function pe(i){return Ra(i?.scenario)?.age??17}function Bs(i){return{firstName:String(i.firstName??"").trim(),lastName:String(i.lastName??"").trim(),knownAs:String(i.knownAs??"").trim(),nationality:i.nationality,position:i.position,secondaryPositions:i.secondaryPosition?[i.secondaryPosition]:[],preferredFoot:i.preferredFoot,heightCm:Number(i.heightCm),weightKg:Number(i.weightKg),clubId:i.clubId,scenario:i.scenario,appearance:{...i.appearance}}}function Ua(i,a){const e=[],t=n=>{n&&!e.includes(n)&&e.push(n)};if(i==="identity"||i==="review"){ie(a.firstName)||t("First name must be 1–24 letters."),ie(a.lastName)||t("Last name must be 1–24 letters."),a.knownAs&&!ie(a.knownAs)&&t("Known-as name is invalid."),qt.includes(a.nationality)||t("Choose a nationality."),Kt.includes(a.preferredFoot)||t("Choose a preferred foot.");const n=Number(a.heightCm);(!Number.isInteger(n)||n<155||n>210)&&t("Height must be between 155 and 210 cm.");const o=Number(a.weightKg);(!Number.isInteger(o)||o<50||o>110)&&t("Weight must be between 50 and 110 kg.")}if((i==="position"||i==="review")&&(Ke.includes(a.position)||t("Choose a primary position."),a.secondaryPosition&&(Ke.includes(a.secondaryPosition)||t("Choose a valid secondary position."),a.secondaryPosition===a.position&&t("Secondary position must be different from your primary position."))),i==="appearance"||i==="review")for(const n of Zt(a.appearance))t(n);return(i==="background"||i==="review")&&(Ra(a.scenario)||t("Choose a career background.")),(i==="club"||i==="review")&&(da(a.clubId)||t("Choose a club.")),e}function Hs(i){return Ua("review",i)}const Gs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},J=i=>String(i??"").replace(/[&<>"']/g,a=>Gs[a]),Z=(i,a)=>/^#[0-9a-f]{3,8}$/i.test(String(i??""))?i:a;function va(i,a){return i.find(e=>e.id===a)??i[0]}function Ya({appearance:i={},position:a="ST",club:e=null,name:t="Your player",accent:n="#c6ff45"}={}){const o=va(zt,i.facePreset),c=va(Qt,i.skinTone),p=va(Jt,i.hairColor),h=va(as,i.eyeColor),v=va(es,i.bodyType),d=va(ts,i.shirtFit),f=U("boots",i.boots)??{id:"velocity-strike-fg",base:"#d7ff5e"},y=U("accessory",i.accessory)??{id:"none",base:"#d9b84a"},g=ss.some($=>$.id===i.hairStyle)?i.hairStyle:"short-fade",S=ns.some($=>$.id===i.facialHair)?i.facialHair:"clean",I=["natural","arched","bold","straight"].includes(i.eyebrows)?i.eyebrows:"natural",O=Number(v?.scale??1)*Number(d?.scale??1),L=Z(n,"#c6ff45"),q=[`--pc-skin:${Z(c.base,"#cf8d63")}`,`--pc-skin-shadow:${Z(c.shadow,"#a96d4a")}`,`--pc-hair:${Z(p.base,"#2a1c14")}`,`--pc-hair-light:${Z(p.light,"#493225")}`,`--pc-eye:${Z(h.base,"#4b2e1e")}`,`--pc-kit:${Z(e?.primary,"#1d3526")}`,`--pc-kit-2:${Z(e?.secondary,"#ffffff")}`,`--pc-boot:${Z(f.base,"#d7ff5e")}`,`--pc-accessory:${Z(y.base,"#d9b84a")}`,`--pc-accent:${L}`,`--pc-body-scale:${Number.isFinite(O)?O:1}`,`--pc-face-x:${Number(o?.scaleX??1)}`,`--pc-face-y:${Number(o?.scaleY??1)}`].join(";");return`
    <div class="pc-avatar" data-hair="${J(g)}" data-facial="${J(S)}" data-eyebrows="${J(I)}" data-face="${J(o?.id??"preset-01")}" data-accessory="${J(y.id)}" data-wrist="${i.wristTape===!0}" data-gloves="${i.gloves===!0}" data-socks="${i.socks==="low"?"low":"high"}" data-boots="${J(f.id)}" style="${q}">
      <svg viewBox="0 0 420 628" role="img" aria-label="Preview of ${J(t)}">
        <defs>
          <radialGradient id="pcHalo" cx="50%" cy="34%" r="68%">
            <stop offset="0%" stop-color="${L}" stop-opacity=".19" />
            <stop offset="52%" stop-color="${L}" stop-opacity=".06" />
            <stop offset="100%" stop-color="#030906" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="pcKitShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity=".08" />
            <stop offset="100%" stop-color="#000000" stop-opacity=".22" />
          </linearGradient>
        </defs>
        <circle cx="210" cy="222" r="194" fill="url(#pcHalo)" />
        <g class="pc-avatar-orbit" fill="none">
          <circle cx="210" cy="230" r="158" stroke="${L}" stroke-opacity=".16" stroke-dasharray="2 9" />
          <circle cx="210" cy="230" r="122" stroke="rgba(255,255,255,.07)" />
          <path d="M28 337C96 280 138 258 210 258C282 258 324 280 392 337" stroke="${L}" stroke-opacity=".13" />
        </g>
        <text class="pc-avatar-ghost" x="210" y="418" text-anchor="middle">${J(a)}</text>
        <g class="pc-lower" aria-hidden="true">
          <path class="pc-shorts" d="M120 486C148 474 178 468 210 468C242 468 272 474 300 486L308 538C284 550 258 556 230 556L216 534L210 528L204 534L190 556C162 556 136 550 112 538Z" />
          <path class="pc-shorts-trim" d="M120 486L132 538L148 534L136 478Z" />
          <path class="pc-shorts-trim" d="M300 486L288 538L272 534L284 478Z" />
          <path class="pc-leg" d="M158 532C156 566 158 600 164 620H200C202 600 202 566 200 532Z" />
          <path class="pc-leg" d="M220 532C218 566 218 600 220 620H256C262 600 264 566 262 532Z" />
          <g class="pc-sock-group pc-sock-high">
            <path class="pc-sock" d="M160 566H198V606H160Z" />
            <path class="pc-sock-band" d="M160 566H198V574H160Z" />
            <path class="pc-sock" d="M222 566H260V606H222Z" />
            <path class="pc-sock-band" d="M222 566H260V574H222Z" />
          </g>
          <g class="pc-sock-group pc-sock-low">
            <path class="pc-sock" d="M158 588H198V606H158Z" />
            <path class="pc-sock-band" d="M158 588H198V594H158Z" />
            <path class="pc-sock" d="M222 588H262V606H222Z" />
            <path class="pc-sock-band" d="M222 588H262V594H222Z" />
          </g>
          <path class="pc-boot" d="M152 600H200L206 612C207 617 203 620 197 620H150C144 620 142 615 146 610Z" />
          <path class="pc-boot" d="M220 600H268L274 610C278 615 276 620 270 620H223C217 620 213 617 214 612Z" />
          <path class="pc-boot-sole" d="M148 616H204M216 616H272" />
        </g>
        <g class="pc-torso" aria-hidden="true">
          <path class="pc-kit-body" d="M66 520C74 420 112 362 158 332L262 332C308 362 346 420 354 520Z" />
          <path class="pc-kit-shade" d="M66 520C74 420 112 362 158 332L262 332C308 362 346 420 354 520Z" />
          <path class="pc-kit-trim" d="M158 332C178 367 242 367 262 332L280 341C256 387 164 387 140 341Z" />
          <path class="pc-kit-trim" d="M74 464C64 488 58 508 54 520H94C98 494 106 474 116 460Z" opacity=".8" />
          <path class="pc-kit-trim" d="M346 464C356 488 362 508 366 520H326C322 494 314 474 304 460Z" opacity=".8" />
          <path class="pc-kit-line" d="M112 395C146 380 174 372 210 372C246 372 274 380 308 395" />
          <path class="pc-kit-line" d="M103 450C142 434 176 426 210 426C244 426 278 434 317 450" opacity=".32" />
          <path class="pc-kit-line" d="M94 500C136 484 172 476 210 476C248 476 284 484 326 500" opacity=".2" />
          <path class="pc-crest" d="M138 408L154 414L152 438L146 444L140 438Z" />
          <text class="pc-crest-text" x="145" y="432" text-anchor="middle">${J(e?.short??"FC")}</text>
        </g>
        <g class="pc-hands" aria-hidden="true">
          <ellipse class="pc-hand" cx="82" cy="497" rx="13" ry="18" />
          <ellipse class="pc-hand" cx="338" cy="497" rx="13" ry="18" />
        </g>
        <g class="pc-wrist-tape" aria-hidden="true">
          <rect x="68" y="475" width="26" height="8" rx="4" transform="rotate(-8 81 479)" />
          <rect x="326" y="475" width="26" height="8" rx="4" transform="rotate(8 339 479)" />
        </g>
        <g class="pc-gloves" aria-hidden="true">
          <ellipse cx="82" cy="498" rx="14" ry="19" />
          <ellipse cx="338" cy="498" rx="14" ry="19" />
          <path class="pc-glove-line" d="M71 493C77 489 87 489 93 493M71 501C77 497 87 497 93 501" />
        </g>
        <path class="pc-armband" d="M94 430C88 444 84 458 82 471L104 473C106 459 111 445 119 432Z" aria-hidden="true" />
        <path class="pc-neck" d="M183 285L185 326C196 339 224 339 235 326L237 285Z" aria-hidden="true" />
        <g class="pc-face-frame">
          <ellipse class="pc-ear" cx="132" cy="211" rx="13" ry="24" aria-hidden="true" />
          <ellipse class="pc-ear" cx="288" cy="211" rx="13" ry="24" aria-hidden="true" />
          <ellipse class="pc-face-head" cx="210" cy="201" rx="77" ry="92" aria-hidden="true" />
          <path class="pc-head-highlight" d="M160 123C184 99 230 96 258 120" aria-hidden="true" />
          <g class="pc-hair pc-hair-fade" aria-hidden="true">
            <path d="M132 190C127 119 160 80 210 80C260 80 293 119 288 190C272 159 249 145 210 145C171 145 148 159 132 190Z" />
            <path d="M132 190C132 216 137 233 146 244L154 196Z" opacity=".55" />
            <path d="M288 190C288 216 283 233 274 244L266 196Z" opacity=".55" />
          </g>
          <g class="pc-hair pc-hair-buzz" aria-hidden="true">
            <path d="M139 190C134 129 166 98 210 98C254 98 286 129 281 190C265 158 243 149 210 149C177 149 155 158 139 190Z" />
          </g>
          <g class="pc-hair pc-hair-curls" aria-hidden="true">
            <path d="M132 181C126 120 160 75 210 75C260 75 294 120 288 181C270 154 250 143 210 143C170 143 150 154 132 181Z" />
            <circle cx="140" cy="141" r="18" /><circle cx="158" cy="108" r="20" /><circle cx="192" cy="88" r="21" />
            <circle cx="228" cy="88" r="21" /><circle cx="263" cy="108" r="20" /><circle cx="280" cy="141" r="18" />
            <circle cx="284" cy="174" r="14" /><circle cx="136" cy="174" r="14" />
          </g>
          <g class="pc-hair pc-hair-long" aria-hidden="true">
            <path d="M132 181C126 118 160 72 210 72C260 72 294 118 288 181C268 153 246 143 210 143C174 143 152 153 132 181Z" />
            <path d="M132 174C120 216 122 268 138 304C151 330 176 336 184 318C162 284 152 234 158 192Z" />
            <path d="M288 174C300 216 298 268 282 304C269 330 244 336 236 318C258 284 268 234 262 192Z" />
          </g>
          <g class="pc-hair pc-hair-bald" aria-hidden="true">
            <ellipse cx="210" cy="122" rx="47" ry="14" opacity=".18" fill="#ffffff" />
          </g>
          <g class="pc-brows pc-brows-natural" aria-hidden="true">
            <path class="pc-brow" d="M164 188C174 181 188 180 198 187" />
            <path class="pc-brow" d="M222 187C232 180 246 181 256 188" />
          </g>
          <g class="pc-brows pc-brows-arched" aria-hidden="true">
            <path class="pc-brow" d="M164 190C174 181 188 179 198 184" />
            <path class="pc-brow" d="M222 184C232 179 246 181 256 190" />
          </g>
          <g class="pc-brows pc-brows-bold" aria-hidden="true">
            <path class="pc-brow" d="M163 189C174 180 189 179 199 186" />
            <path class="pc-brow" d="M221 186C231 179 246 180 257 189" />
          </g>
          <g class="pc-brows pc-brows-straight" aria-hidden="true">
            <path class="pc-brow" d="M164 188L198 186" />
            <path class="pc-brow" d="M222 186L256 188" />
          </g>
          <g class="pc-face" aria-hidden="true">
            <ellipse class="pc-eye" cx="184" cy="204" rx="8" ry="5.5" />
            <ellipse class="pc-eye" cx="236" cy="204" rx="8" ry="5.5" />
            <circle class="pc-eye-glint" cx="187" cy="202" r="2.4" />
            <circle class="pc-eye-glint" cx="239" cy="202" r="2.4" />
            <path class="pc-nose" d="M210 205C207 219 203 229 210 234C215 237 220 234 222 231" />
            <path class="pc-cheek" d="M156 226C163 237 172 243 182 245" />
            <path class="pc-cheek" d="M264 226C257 237 248 243 238 245" />
          </g>
          <g class="pc-facial pc-facial-stubble" aria-hidden="true">
            <path d="M140 218C145 268 172 294 210 294C248 294 275 268 280 218C271 257 247 272 210 272C173 272 149 257 140 218Z" opacity=".22" />
          </g>
          <g class="pc-facial pc-facial-beard" aria-hidden="true">
            <path d="M140 214C144 270 172 300 210 300C248 300 276 270 280 214C270 249 248 267 210 267C172 267 150 249 140 214Z" />
            <path d="M194 242C200 238 220 238 226 242C221 249 199 249 194 242Z" opacity=".9" />
          </g>
          <g class="pc-facial pc-facial-goatee" aria-hidden="true">
            <path d="M194 258C201 270 219 270 226 258C223 284 197 284 194 258Z" />
            <path d="M197 242C203 238 217 238 223 242C218 248 202 248 197 242Z" opacity=".9" />
          </g>
          <path class="pc-mouth" d="M192 251C201 257 219 257 228 250" aria-hidden="true" />
        </g>
      </svg>
    </div>
  `}const Ys={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u=i=>String(i??"").replace(/[&<>"']/g,a=>Ys[a]),Pa=(i,a)=>/^#[0-9a-f]{3,8}$/i.test(String(i??""))?i:a;function Da(i){const a=String(i.knownAs??"").trim(),e=`${String(i.firstName??"").trim()} ${String(i.lastName??"").trim()}`.trim();return a||e||"YOUR PLAYER"}function Vs(i){return`${String(i.firstName??"").trim()} ${String(i.lastName??"").trim()}`.trim()||"New player"}function nt(i){return Ee[i.nationality]??be[0]}function he(i){return ye[i]?.label??i??"—"}function js(i){return da(i)?.short??"FC"}function it(i){return ht.find(a=>a.id===i)?.label??"Right"}function Ws(i){return ya.find(a=>a.id===i)?.label??"Academy Prospect"}const H=[{id:"identity",label:"IDENTITY",title:"WHO ARE YOU?",copy:"The name, nation and physical profile defenders will learn to fear."},{id:"position",label:"POSITION",title:"OWN YOUR ROLE",copy:"Your position shapes your attributes, overall rating and the path into the first team."},{id:"appearance",label:"APPEARANCE",title:"LOOK THE PART",copy:"Build the silhouette that walks out of the tunnel on matchday."},{id:"background",label:"BACKGROUND",title:"CHOOSE YOUR START",copy:"Every career begins somewhere. Pick the starting point that fits your story."},{id:"club",label:"CLUB",title:"FIND A HOME",copy:`${ga.length} real clubs across ${ja.length} divisions. Choose the badge and the battle.`},{id:"review",label:"REVIEW",title:"READY TO SIGN",copy:"Check the details. Once you sign, the football world starts writing back."}];class qs{constructor({mount:a,onCancel:e=null,onSubmit:t=null}){if(!a)throw new Error("PlayerCreator needs a mount element.");this.mount=a,this.onCancel=e,this.onSubmit=t,this.draft=ce(),this.stepIndex=0,this.error="",this.busy=!1,this.leagueFilter="all",this.bound=!1,this.mode="create",this.editContext=null,this.editSubmit=null,this.bind()}open(){this.mode="create",this.editContext=null,this.editSubmit=null,this.draft=ce(),this.stepIndex=0,this.error="",this.busy=!1,this.leagueFilter="all",this.render(),requestAnimationFrame(()=>this.mount.querySelector("#pcFirstName")?.focus())}openAppearance({player:a,club:e,scenarioId:t="academy",age:n=null,onSubmit:o=null}={}){if(!a)throw new Error("openAppearance needs a player.");this.mode="edit",this.editSubmit=o,this.editContext={player:a,club:e??null,age:n},this.draft=ce({firstName:a.identity?.firstName??"",lastName:a.identity?.lastName??"",knownAs:a.identity?.knownAs&&a.identity.knownAs!==a.identity.lastName&&a.identity.knownAs!==a.identity.firstName?a.identity.knownAs:"",nationality:a.identity?.nationality??"AUR",position:a.identity?.positions?.primary??"ST",secondaryPosition:a.identity?.positions?.secondary?.[0]??"",preferredFoot:a.identity?.preferredFoot??"right",heightCm:a.identity?.heightCm??180,weightKg:a.identity?.weightKg??74,clubId:a.clubId??e?.id??"riverton",scenario:t,appearance:re(a.appearance)}),this.stepIndex=2,this.error="",this.busy=!1,this.leagueFilter="all",this.render(),requestAnimationFrame(()=>this.mount.querySelector(".pc-step-title")?.focus({preventScroll:!0}))}close(){this.mode="create",this.editContext=null,this.editSubmit=null,this.busy=!1,this.error="",this.mount.innerHTML=""}bind(){this.bound||(this.bound=!0,this.mount.addEventListener("click",a=>this.handleClick(a)),this.mount.addEventListener("input",a=>this.handleInput(a)),this.mount.addEventListener("change",a=>this.handleInput(a)),this.mount.addEventListener("submit",a=>{a.preventDefault(),this.mode==="edit"||this.step.id==="review"?this.submit():this.next()}),this.mount.addEventListener("keydown",a=>{a.key!=="Enter"||a.defaultPrevented||a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||!(a.target instanceof HTMLInputElement)||this.step.id==="review"||(a.preventDefault(),this.next())}))}get step(){return H[this.stepIndex]??H[0]}render({focus:a=null,preserveScroll:e=!!a}={}){const t=this.step,n=this.mount.querySelector(".pc-main")?.scrollTop??0;this.mount.innerHTML=`
      <form class="pc-shell" data-step="${u(t.id)}" data-mode="${u(this.mode)}" novalidate>
        ${this.headerMarkup()}
        <div class="pc-body ${this.mode==="edit"?"pc-body-edit":""}">
          ${this.railMarkup()}
          <main class="pc-main">
            <header class="pc-step-head">
              <div class="pc-step-kicker"><span>${this.mode==="edit"?"APPEARANCE EDIT":`STEP ${String(this.stepIndex+1).padStart(2,"0")}`}</span><i></i><span>${this.mode==="edit"?"YOUR PLAYER":u(t.label)}</span></div>
              <h2 tabindex="-1" class="pc-step-title">${u(this.mode==="edit"?"MAKE IT YOURS":t.title)}</h2>
              <p>${u(this.mode==="edit"?"Change the face, hair and kit details. Every choice updates the live avatar and saves to this career.":t.copy)}</p>
            </header>
            <div class="pc-step-content">${this.stepMarkup(t.id)}</div>
            <p class="pc-error" role="alert">${u(this.error)}</p>
          </main>
          ${this.previewMarkup()}
        </div>
        ${this.footerMarkup()}
      </form>
    `,(a||e)&&requestAnimationFrame(()=>{const o=this.mount.querySelector(".pc-main");o&&e&&(o.scrollTop=n),(a?this.mount.querySelector(a):null)?.focus({preventScroll:!0})})}headerMarkup(){return`
      <header class="pc-head">
        <div class="pc-brand">
          <span class="pc-brand-mark"><b>FC</b><i>27</i></span>
          <span class="pc-brand-copy"><small>ULTIMATE FOOTBALL CLUB</small><b>${this.mode==="edit"?"APPEARANCE EDITOR":"PLAYER CREATION"}</b></span>
        </div>
        <div class="pc-head-meta"><span>${this.mode==="edit"?"EDIT PLAYER":"NEW CAREER"}</span><i></i>            <span>PLAYER CAREER</span>
</div>
        <button class="pc-close" type="button" data-pc-action="close" aria-label="${this.mode==="edit"?"Close appearance editor":"Close player creation"}">×</button>
      </header>
    `}railMarkup(){return this.mode==="edit"?"":`
      <aside class="pc-rail" aria-label="Creation steps">
        <div class="pc-rail-head"><span>THE BUILD</span><b>${String(this.stepIndex+1).padStart(2,"0")} / ${String(H.length).padStart(2,"0")}</b></div>
        <ol class="pc-step-list">
          ${H.map((a,e)=>`
              <li>
                <button class="pc-step-btn ${e===this.stepIndex?"is-active":""} ${e<this.stepIndex?"is-complete":""}"
                  type="button" data-pc-step="${e}" ${e===this.stepIndex?'aria-current="step"':""}>
                  <span class="pc-step-num">${String(e+1).padStart(2,"0")}</span>
                  <span class="pc-step-copy"><b>${u(a.label)}</b><small>${u(a.copy)}</small></span>
                  <i class="pc-step-dot"></i>
                </button>
              </li>`).join("")}
        </ol>
        <div class="pc-rail-progress">
          <span>PROGRESS</span><b>${Math.round((this.stepIndex+1)/H.length*100)}%</b>
          <i><em style="width:${(this.stepIndex+1)/H.length*100}%"></em></i>
        </div>
        <p class="pc-rail-note">Every choice is checked on this device and written into the career save.</p>
      </aside>
    `}stepMarkup(a){switch(a){case"identity":return this.identityMarkup();case"position":return this.positionMarkup();case"appearance":return this.appearanceMarkup();case"background":return this.backgroundMarkup();case"club":return this.clubMarkup();case"review":return this.reviewMarkup();default:return""}}identityMarkup(){const a=this.draft.nationality;return`
      <section class="pc-section">
        <div class="pc-section-head"><span>01 · THE PERSON</span><b>Names travel with you through every club, contract and headline.</b></div>
        <div class="pc-field-grid">
          <label class="pc-field">
            <span>FIRST NAME</span>
            <input id="pcFirstName" class="pc-input" data-pc-field="firstName" value="${u(this.draft.firstName)}" maxlength="24" autocomplete="given-name" placeholder="Alex" />
          </label>
          <label class="pc-field">
            <span>LAST NAME</span>
            <input id="pcLastName" class="pc-input" data-pc-field="lastName" value="${u(this.draft.lastName)}" maxlength="24" autocomplete="family-name" placeholder="Voss" />
          </label>
          <label class="pc-field pc-field-wide">
            <span>KNOWN AS <i>OPTIONAL</i></span>
            <input class="pc-input" data-pc-field="knownAs" value="${u(this.draft.knownAs)}" maxlength="24" autocomplete="nickname" placeholder="Leave blank to use your last name" />
          </label>
        </div>
      </section>
      <section class="pc-section">
        <div class="pc-section-head"><span>02 · THE ORIGIN</span><b>Your nationality and preferred foot shape the player beneath the badge.</b></div>
        <div class="pc-field-grid">
          <label class="pc-field">
            <span>NATIONALITY</span>
            <select class="pc-select" data-pc-field="nationality">
              ${[...new Set(be.map(e=>e.region))].map(e=>`
                <optgroup label="${u(e)}">
                  ${be.filter(t=>t.region===e).map(t=>`<option value="${t.code}" ${t.code===a?"selected":""}>${u(t.name)} · ${u(t.short)}</option>`).join("")}
                </optgroup>`).join("")}
            </select>
          </label>
          <div class="pc-field">
            <span>PREFERRED FOOT</span>
            <div class="pc-segment" role="group" aria-label="Preferred foot">
              ${ht.map(e=>`<button type="button" class="${this.draft.preferredFoot===e.id?"is-selected":""}" data-pc-foot="${e.id}" aria-pressed="${this.draft.preferredFoot===e.id}">${u(e.label)}</button>`).join("")}
            </div>
          </div>
        </div>
      </section>
      <section class="pc-section">
        <div class="pc-section-head"><span>03 · THE FRAME</span><b>Height and weight affect how your player moves and contests the ball.</b></div>
        <div class="pc-physical-grid">
          <label class="pc-range-field">
            <span>HEIGHT <output data-pc-output="heightCm">${u(this.draft.heightCm)} CM</output></span>
            <input type="range" min="155" max="210" step="1" value="${u(this.draft.heightCm)}" data-pc-field="heightCm" data-pc-range />
            <i><b>155</b><b>210</b></i>
          </label>
          <label class="pc-range-field">
            <span>WEIGHT <output data-pc-output="weightKg">${u(this.draft.weightKg)} KG</output></span>
            <input type="range" min="50" max="110" step="1" value="${u(this.draft.weightKg)}" data-pc-field="weightKg" data-pc-range />
            <i><b>50</b><b>110</b></i>
          </label>
        </div>
      </section>
    `}positionMarkup(){return`
      <section class="pc-section">
        <div class="pc-section-head"><span>01 · PRIMARY ROLE</span><b>Pick the position that will define your first season.</b></div>
        <div class="pc-position-groups">
          ${["Goalkeeper","Defence","Midfield","Attack"].map(e=>`
            <div class="pc-position-group">
              <span class="pc-position-group-label">${u(e)}</span>
              <div class="pc-position-grid">
                ${Xe.filter(t=>t.line===e).map(t=>`<button type="button" class="pc-position-card ${this.draft.position===t.id?"is-selected":""}" data-pc-position="${t.id}" aria-pressed="${this.draft.position===t.id}">
                      <b>${u(t.id)}</b><span>${u(t.label)}</span>
                    </button>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </section>
      <section class="pc-section">
        <div class="pc-section-head"><span>02 · SECOND ROLE</span><b>One optional secondary position gives your manager another way to use you.</b></div>
        <label class="pc-field pc-field-narrow">
          <span>SECONDARY POSITION <i>OPTIONAL</i></span>
          <select class="pc-select" data-pc-field="secondaryPosition">
            <option value="">No secondary position</option>
            ${Xe.filter(e=>e.id!==this.draft.position).map(e=>`<option value="${e.id}" ${this.draft.secondaryPosition===e.id?"selected":""}>${u(e.id)} · ${u(e.label)}</option>`).join("")}
          </select>
        </label>
        <div class="pc-note"><span>+</span><p>Your primary position decides your starting attributes and overall. The secondary role is stored in your player profile for later squad planning.</p></div>
      </section>
    `}appearanceMarkup(){return`
      <section class="pc-section">
        <div class="pc-section-head"><span>THE LOOK</span><b>Your avatar updates live. Every detail is stored in the player record.</b></div>
        <div class="pc-appearance-groups">
          ${[...new Set(Ze.map(e=>e.section))].map((e,t)=>`
            <div class="pc-appearance-section">
              <div class="pc-appearance-section-head"><span>${String(t+1).padStart(2,"0")} · ${u(e)}</span><i></i></div>
              ${Ze.filter(n=>n.section===e).map(n=>`
                  <div class="pc-appearance-group">
                    <span class="pc-appearance-label">${u(n.label)}</span>
                    <div class="pc-appearance-options">
                      ${n.options.map(o=>{const c=is(n,this.draft.appearance[n.key])&&(n.kind==="boolean"?o.value===this.draft.appearance[n.key]:o.id===this.draft.appearance[n.key]);return n.kind==="swatch"?`<button type="button" class="pc-swatch-choice ${c?"is-selected":""}" data-pc-appearance="${n.key}" data-pc-value="${o.id}" aria-pressed="${c}" aria-label="${u(o.label)}">
                            <i style="--swatch:${Pa(o.base??o.light,"#6d533f")}"></i><span>${u(o.label)}</span>
                          </button>`:`<button type="button" class="pc-text-choice ${c?"is-selected":""}" data-pc-appearance="${n.key}" data-pc-value="${o.id}" aria-pressed="${c}">${u(o.label)}</button>`}).join("")}
                    </div>
                  </div>`).join("")}
            </div>`).join("")}
        </div>
      </section>
      <div class="pc-note"><span>+</span><p>Face shape, eyes, brows, hair, kit and details are all editable here — and again from the career hub after you sign.</p></div>
    `}backgroundMarkup(){return`
      <section class="pc-section">
        <div class="pc-section-head"><span>THE STARTING POINT</span><b>Background sets your age, rating and squad role. The rest is written on the pitch.</b></div>
        <div class="pc-scenario-grid">
          ${pt.map((a,e)=>`<button type="button" class="pc-scenario-card ${this.draft.scenario===a.id?"is-selected":""}" data-pc-scenario="${a.id}" aria-pressed="${this.draft.scenario===a.id}">
              <span class="pc-scenario-index">${String(e+1).padStart(2,"0")}</span>
              <span class="pc-scenario-short">${u(a.short??a.label)}</span>
              <b>${u(a.label)}</b>
              <p>${u(a.description??"Write your own path into the game.")}</p>
              <span class="pc-scenario-meta"><i>AGE ${a.age}</i><i>OVR ${a.startOverall}</i><i>${u(Us(a))}</i></span>
            </button>`).join("")}
        </div>
      </section>
      <div class="pc-note"><span>i</span><p>Academy prospects start raw and hungry. Established professionals skip the queue. Veteran careers begin with a reputation and a point to prove.</p></div>
    `}clubMarkup(){const a=Fs(),e=this.leagueFilter,t=e==="all"?a:a.filter(n=>n.id===e);return`
      <section class="pc-section">
        <div class="pc-section-head"><span>THE BADGE</span><b>Every club owns a different pressure. Choose where your story begins.</b></div>
        <div class="pc-club-filters" role="group" aria-label="Filter clubs by division">
          <button type="button" class="${e==="all"?"is-selected":""}" data-pc-filter="all">ALL ${ga.length}</button>
          ${ja.map(n=>`<button type="button" class="${e===n.id?"is-selected":""}" data-pc-filter="${n.id}">${u(n.short)}</button>`).join("")}
        </div>
        <div class="pc-club-groups">
          ${t.map(n=>`
            <div class="pc-club-group">
              <div class="pc-club-group-head"><span>${u(n.name)}</span><b>${u(n.short)} · ${n.clubs.length} CLUBS</b></div>
              <div class="pc-club-grid">
                ${n.clubs.map(o=>`
                  <button type="button" class="pc-club-card ${this.draft.clubId===o.id?"is-selected":""}" data-pc-club="${o.id}" aria-pressed="${this.draft.clubId===o.id}" style="--club:${Pa(o.primary,"#1d3526")};--club-ink:${Pa(o.secondary,"#ffffff")}">
                    <span class="pc-club-crest">${u(o.short)}</span>
                    <span class="pc-club-copy"><b>${u(o.name)}</b><small>${u(o.city)} · ${u(n.short)}</small></span>
                    <span class="pc-club-rating">${o.rating}</span>
                  </button>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </section>
      <div class="pc-note"><span>+</span><p>Club rating is the overall strength of the squad you are walking into. A bigger badge means a harder fight for minutes.</p></div>
    `}reviewMarkup(){const a=da(this.draft.clubId)??ga[0],e=st(a.id),t=Ra(this.draft.scenario);return`
      <div class="pc-review-hero">
        <div><span>READY FOR THE FIRST DAY</span><h3>${u(Da(this.draft))}</h3><p>${u(he(this.draft.position))} · ${u(a.name)} · ${u(e?.name??"FC27 football")}</p></div>
        <div class="pc-review-ovr"><b>${de(this.draft)}</b><span>START OVR</span></div>
      </div>
      <div class="pc-review-grid">
        <article class="pc-review-block">
          <div class="pc-review-block-head"><span>IDENTITY</span><button type="button" data-pc-edit="identity">EDIT</button></div>
          <dl><dt>NAME</dt><dd>${u(Vs(this.draft))}</dd><dt>KNOWN AS</dt><dd>${u(this.draft.knownAs||"Not set")}</dd><dt>NATIONALITY</dt><dd>${u(nt(this.draft).name)}</dd><dt>AGE</dt><dd>${pe(this.draft)}</dd><dt>POTENTIAL</dt><dd>89–99</dd><dt>FRAME</dt><dd>${u(this.draft.heightCm)} cm · ${u(this.draft.weightKg)} kg</dd><dt>FOOT</dt><dd>${u(it(this.draft.preferredFoot))}</dd></dl>
        </article>
        <article class="pc-review-block">
          <div class="pc-review-block-head"><span>ROLE</span><button type="button" data-pc-edit="position">EDIT</button></div>
          <dl><dt>PRIMARY</dt><dd>${u(this.draft.position)} · ${u(he(this.draft.position))}</dd><dt>SECONDARY</dt><dd>${u(this.draft.secondaryPosition||"None")}</dd><dt>STARTING POINT</dt><dd>${u(t?.label??"Custom")}</dd><dt>SQUAD ROLE</dt><dd>${u(Ws(t?.squadRole))}</dd></dl>
        </article>
        <article class="pc-review-block">
          <div class="pc-review-block-head"><span>CLUB</span><button type="button" data-pc-edit="club">EDIT</button></div>
          <dl><dt>CLUB</dt><dd>${u(a.name)}</dd><dt>CITY</dt><dd>${u(a.city)}</dd><dt>DIVISION</dt><dd>${u(e?.name??"—")}</dd><dt>CLUB RATING</dt><dd>${a.rating}</dd></dl>
        </article>
        <article class="pc-review-block">
          <div class="pc-review-block-head"><span>APPEARANCE</span><button type="button" data-pc-edit="appearance">EDIT</button></div>
          <dl>
            <dt>FACE</dt><dd>${u(U("facePreset",this.draft.appearance.facePreset)?.label??"—")} · ${u(U("eyeColor",this.draft.appearance.eyeColor)?.label??"—")} eyes</dd>
            <dt>SKIN</dt><dd>${u(U("skinTone",this.draft.appearance.skinTone)?.label??"—")}</dd>
            <dt>HAIR</dt><dd>${u(U("hairStyle",this.draft.appearance.hairStyle)?.label??"—")} · ${u(U("hairColor",this.draft.appearance.hairColor)?.label??"—")}</dd>
            <dt>FACIAL</dt><dd>${u(U("facialHair",this.draft.appearance.facialHair)?.label??"—")} · ${u(U("eyebrows",this.draft.appearance.eyebrows)?.label??"—")} brows</dd>
            <dt>BUILD</dt><dd>${u(U("bodyType",this.draft.appearance.bodyType)?.label??"—")}</dd>
            <dt>KIT</dt><dd>${u(U("boots",this.draft.appearance.boots)?.label??"—")} · ${u(U("socks",this.draft.appearance.socks)?.label??"—")} socks</dd>
            <dt>DETAILS</dt><dd>${u(U("accessory",this.draft.appearance.accessory)?.label??"None")}${this.draft.appearance.wristTape?" · Tape":""}${this.draft.appearance.gloves?" · Gloves":""}</dd>
          </dl>
        </article>
      </div>
      <div class="pc-note"><span>i</span><p>On signing, the engine generates the full football world, your contract, squad number, teammates, agent and first-season calendar around these choices.</p></div>
    `}previewMarkup(){const a=this.mode==="edit",e=da(this.draft.clubId)??ga[0],t=st(e.id),n=Ra(this.draft.scenario),o=nt(this.draft).name,c=a?this.editContext?.age??pe(this.draft):pe(this.draft),p=a?this.editContext?.player?.overall??de(this.draft):de(this.draft),h=U("boots",this.draft.appearance.boots)??{label:"Boots",base:"#d7ff5e"},v=U("shirtFit",this.draft.appearance.shirtFit)??{label:"Fitted"},d=U("socks",this.draft.appearance.socks)??{label:"High"},f=U("accessory",this.draft.appearance.accessory)??{label:"None"};return`
      <aside class="pc-preview" aria-label="Live player preview">
        <div class="pc-preview-top"><span>LIVE PLAYER</span><i>${u(js(e.id))} · ${a?"CAREER KIT":"NEW SIGNING"}</i></div>
        ${Ya({appearance:this.draft.appearance,position:this.draft.position,club:e,name:Da(this.draft)})}
        <div class="pc-preview-id">
          <span>${u(e.name)} · ${u(t?.short??"AFC")}</span>
          <h3>${u(Da(this.draft))}</h3>
          <p>${u(he(this.draft.position))} <i>·</i> ${u(o)} <i>·</i> ${c} years</p>
        </div>
        <div class="pc-preview-stats">
          <span><small>${a?"OVR":"START OVR"}</small><b>${p}</b></span>
          <span><small>HEIGHT</small><b>${u(this.draft.heightCm)}<i>cm</i></b></span>
          <span><small>FOOT</small><b>${u(it(this.draft.preferredFoot))}</b></span>
        </div>
        <div class="pc-preview-kit">
          <span><i style="--swatch:${Pa(h.base,"#d7ff5e")}"></i>${u(h.label)}</span>
          <span>${u(v.label)} fit</span>
          <span>${u(d.label)} socks</span>
          <span>${u(f.label)}</span>
        </div>
        <div class="pc-preview-scenario"><span>${u(n?.short??"CUSTOM")}</span><p>${u(n?.label??"Career ready")}</p></div>
        <p class="pc-preview-note">${a?"Saved to this career when you confirm.":"Squad number and contract are assigned when you sign."}</p>
      </aside>
    `}avatarMarkup(){const a=da(this.draft.clubId)??ga[0];return Ya({appearance:this.draft.appearance,position:this.draft.position,club:a,name:Da(this.draft)})}footerMarkup(){if(this.mode==="edit")return`
        <footer class="pc-foot pc-foot-edit">
          <button class="pc-foot-back" type="button" data-pc-action="close" ${this.busy?"disabled":""}>CANCEL</button>
          <button class="pc-foot-reset" type="button" data-pc-action="reset" ${this.busy?"disabled":""}>RESET</button>
          <div class="pc-foot-edit-note"><span>APPEARANCE</span><i>Changes are saved to this career.</i></div>
          <button class="pc-foot-next pc-foot-save" type="submit" data-pc-submit ${this.busy?"disabled":""}>${this.busy?"SAVING…":"SAVE APPEARANCE"} <span>→</span></button>
        </footer>
      `;const a=this.stepIndex===0,e=this.stepIndex===H.length-1;return`
      <footer class="pc-foot">
        <button class="pc-foot-back" type="button" data-pc-action="back" ${a?"disabled":""}>← BACK</button>
        <div class="pc-foot-progress">
          <span>STEP <b>${this.stepIndex+1}</b> OF ${H.length}</span>
          <i><em style="width:${(this.stepIndex+1)/H.length*100}%"></em></i>
        </div>
        ${e?`<button class="pc-foot-next pc-foot-create" type="submit" data-pc-submit ${this.busy?"disabled":""}>${this.busy?"BUILDING WORLD…":"SIGN & BEGIN CAREER"} <span>→</span></button>`:'<button class="pc-foot-next" type="button" data-pc-action="next">CONTINUE <span>→</span></button>'}
      </footer>
    `}handleClick(a){if(this.busy)return;this.clearError();const e=a.target.closest("[data-pc-action]");if(e){const f=e.dataset.pcAction;f==="close"?this.cancel():f==="reset"?this.resetAppearance():f==="back"?this.previous():f==="next"&&this.next();return}const t=a.target.closest("[data-pc-step]");if(t){this.goToStep(Number(t.dataset.pcStep));return}const n=a.target.closest("[data-pc-foot]");if(n){this.draft.preferredFoot=n.dataset.pcFoot,this.render({focus:`[data-pc-foot="${this.draft.preferredFoot}"]`});return}const o=a.target.closest("[data-pc-position]");if(o){const f=o.dataset.pcPosition;this.draft.position=f,this.draft.secondaryPosition===f&&(this.draft.secondaryPosition=""),this.render({focus:`[data-pc-position="${f}"]`});return}const c=a.target.closest("[data-pc-appearance]");if(c){const f=c.dataset.pcAppearance,y=c.dataset.pcValue,g=rs(f),S=g?.options.find(I=>I.id===y);if(!g||!S)return;this.draft.appearance[f]=g.kind==="boolean"?S.value:S.id,this.render({focus:`[data-pc-appearance="${f}"][data-pc-value="${y}"]`});return}const p=a.target.closest("[data-pc-scenario]");if(p){this.draft.scenario=p.dataset.pcScenario,this.render({focus:`[data-pc-scenario="${this.draft.scenario}"]`});return}const h=a.target.closest("[data-pc-club]");if(h){this.draft.clubId=h.dataset.pcClub,this.render({focus:`[data-pc-club="${this.draft.clubId}"]`});return}const v=a.target.closest("[data-pc-filter]");if(v){this.leagueFilter=v.dataset.pcFilter,this.render({focus:`[data-pc-filter="${this.leagueFilter}"]`});return}const d=a.target.closest("[data-pc-edit]");if(d){const f=H.findIndex(y=>y.id===d.dataset.pcEdit);f>=0&&this.goToStep(f)}}handleInput(a){const e=a.target,t=e?.dataset?.pcField;if(t){if(this.clearError(),t==="heightCm"||t==="weightKg"){const n=Number(e.value);if(!Number.isFinite(n))return;this.draft[t]=Math.round(n);const o=this.mount.querySelector(`[data-pc-output="${t}"]`);o&&(o.textContent=`${this.draft[t]} ${t==="heightCm"?"CM":"KG"}`)}else this.draft[t]=e.value,t==="position"&&this.draft.secondaryPosition===e.value&&(this.draft.secondaryPosition="");this.refreshPreview()}}refreshPreview(){const a=this.mount.querySelector(".pc-preview");if(!a)return;const e=document.createElement("div");e.innerHTML=this.previewMarkup();const t=e.firstElementChild;t&&a.replaceWith(t)}resetAppearance(){this.busy||this.mode!=="edit"||!this.editContext||(this.draft.appearance=re(this.editContext.player.appearance),this.error="",this.render({preserveScroll:!0}))}cancel(){this.busy||this.onCancel?.()}goToStep(a){this.busy||!Number.isInteger(a)||a<0||a>=H.length||(this.stepIndex=a,this.error="",this.render(),requestAnimationFrame(()=>this.mount.querySelector(".pc-step-title")?.focus({preventScroll:!0})))}next(){if(this.busy)return;const a=Ua(this.step.id,this.draft);if(a.length){this.setError(a[0]);return}this.stepIndex<H.length-1&&this.goToStep(this.stepIndex+1)}previous(){this.busy||this.stepIndex>0&&this.goToStep(this.stepIndex-1)}clearError(){if(!this.error)return;this.error="";const a=this.mount.querySelector(".pc-error");a&&(a.textContent="")}setError(a){this.error=a??"";const e=this.mount.querySelector(".pc-error");e&&(e.textContent=this.error);const t=this.mount.querySelector(".pc-main");t&&t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}async submit(){if(this.busy)return;if(this.mode==="edit"){const e=Ua("appearance",this.draft);if(e.length){this.setError(e[0]);return}this.busy=!0,this.error="",this.render({preserveScroll:!0});try{await new Promise(n=>requestAnimationFrame(n));const t=await this.editSubmit?.(re(this.draft.appearance));t&&t.ok===!1&&(this.busy=!1,this.error=t.message??"The appearance could not be saved.",this.render())}catch(t){this.busy=!1,this.error=t?.message??"The appearance could not be saved.",this.render()}return}for(let e=0;e<H.length;e+=1){const t=H[e],n=Ua(t.id,this.draft);if(n.length){this.stepIndex=e,this.error=n[0],this.render(),requestAnimationFrame(()=>this.mount.querySelector(".pc-step-title")?.focus({preventScroll:!0}));return}}const a=Hs(this.draft);if(a.length){this.setError(a[0]);return}this.busy=!0,this.error="",this.render({preserveScroll:!0});try{await new Promise(t=>requestAnimationFrame(t));const e=await this.onSubmit?.(Bs(this.draft));e&&e.ok===!1&&(this.busy=!1,this.error=e.message??"The career could not be created.",this.render())}catch(e){this.busy=!1,this.error=e?.message??"The career could not be created.",this.render()}}}const Ks={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},r=i=>String(i??"").replace(/[&<>"']/g,a=>Ks[a]),j=(i,a)=>/^#[0-9a-f]{3,8}$/i.test(String(i??""))?i:a,Ct=(i,a,e)=>Math.max(a,Math.min(e,Number(i)||0)),Rt=Object.freeze([{id:"central",label:"CENTRAL"},{id:"mypro",label:"MY PRO"},{id:"agent",label:"AGENT"},{id:"season",label:"SEASON"},{id:"social",label:"SOCIAL"},{id:"shop",label:"SHOP"},{id:"customise",label:"CUSTOMISE"}]),rt=[{id:"growth",label:"PLAYER GROWTH",icon:"growth"},{id:"attributes",label:"ATTRIBUTES",icon:"attributes"},{id:"skills",label:"SKILL POINTS",icon:"skill"},{id:"personality",label:"PERSONALITY",icon:"personality"},{id:"perks",label:"PERKS",icon:"perk"},{id:"info",label:"PLAYER INFO",icon:"info"},{id:"progress",label:"CAREER PROGRESS",icon:"progress"},{id:"stats",label:"STATISTICS",icon:"stats"}],ue=[{id:"calendar",label:"CALENDAR",icon:"calendar"},{id:"table",label:"LEAGUE TABLE",icon:"table"},{id:"player",label:"PLAYER STATS",icon:"stats"},{id:"team",label:"TEAM STATS",icon:"team"},{id:"leagues",label:"OTHER LEAGUES",icon:"leagues"},{id:"competition",label:"COMPETITION",icon:"trophy"}],Xs=[{id:"overview",label:"KIT & GEAR",icon:"kit"},{id:"boots",label:"EDIT BOOTS",icon:"boot"},{id:"accessories",label:"ACCESSORIES",icon:"accessory"},{id:"settings",label:"SETTINGS",icon:"settings"}],$e=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],wt=["SUN","MON","TUE","WED","THU","FRI","SAT"],lt={growth:'<path d="M4 17l5-5 3 3 7-8"/><path d="M14 7h5v5"/>',attributes:'<path d="M5 19V9M12 19V5M19 19v-7"/>',skill:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',personality:'<circle cx="12" cy="8" r="3.2"/><path d="M5 20c.6-4 3.1-6 7-6s6.4 2 7 6"/>',perk:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v7M12 7h.01"/>',progress:'<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',stats:'<path d="M4 20h16M7 16V8M12 16V4M17 16v-6"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',table:'<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M3 14h18M9 9v11M15 9v11"/>',team:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.3"/><path d="M3 20c.4-4 2.5-6 6-6s5.6 2 6 6M14 20c.2-2.6 1.5-4 3.5-4 2.2 0 3.3 1.4 3.5 4"/>',leagues:'<path d="M4 5h16v14H4zM4 9h16M8 5v14M16 5v14"/>',trophy:'<path d="M8 4h8v5a4 4 0 01-8 0zM8 6H5v2a4 4 0 004 4M16 6h3v2a4 4 0 01-4 4M12 13v5M8 21h8M9 18h6"/>',kit:'<path d="M8 4l4 2 4-2 4 4-3 3v9H7v-9L4 8z"/>',boot:'<path d="M5 16c2-1 4-4 5-7l4 2c1 4 3 5 5 6l1 3H5zM4 20h17"/>',accessory:'<path d="M6 9h12l1 10H5zM9 9V7a3 3 0 016 0v2"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',play:'<path d="M7 4l12 8-12 8z"/>',arrow:'<path d="M5 12h14M14 7l5 5-5 5"/>',ball:'<circle cx="12" cy="12" r="9"/><path d="M12 7.5l4 3-1.5 4.5h-5L8 10.5zM12 3v4.5M21 12l-5-.5M17 19l-2.5-4M7 19l2.5-4M3 12l5-.5"/>',chat:'<path d="M4 5h11v8H8l-4 3zM14 10h6v8h-3l-3 2z"/>',contract:'<path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h6M9 16h6"/>',search:'<circle cx="10" cy="10" r="6"/><path d="M15 15l5 5"/>',briefcase:'<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V5h6v3M3 13h18"/>',home:'<path d="M4 11l8-7 8 7v9H4zM9 20v-6h6v6"/>',badge:'<path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>'};function R(i){return`<svg class="f23-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${lt[i]??lt.arrow}</svg>`}function G(i,a=""){const e=j(i?.colors?.primary??i?.color,"#23204f"),t=j(i?.colors?.secondary,"#ffffff");return`<span class="f23-crest ${a}" style="--crest:${e};--crest-ink:${t}">${r(i?.shortName??i?.short??"—")}</span>`}function Ne(i,a){return i?.userIsHome!==void 0?!!i.userIsHome:i?.homeClubId===a}function _a(i){const a=i?.identity?.positions?.primary??"ST";return ye[a]?.label??a}function Ce(i){return Ee[i?.identity?.nationality]?.name??"—"}function _s(i){const a=t=>Number(i?.attributes?.[t]??50),e=t=>Math.round(t.reduce((n,o)=>n+a(o),0)/t.length);return{maverick:e(["finishing","shotPower","dribbling","acceleration"]),virtuoso:e(["ballControl","shortPassing","vision","curve"]),heartbeat:e(["stamina","interceptions","aggression","reactions"])}}function Za(i){const a=_s(i),e=Object.entries(a).sort((n,o)=>o[1]-n[1])[0];return{label:{maverick:"MAVERICK",virtuoso:"VIRTUOSO",heartbeat:"HEARTBEAT"}[e?.[0]]??"VIRTUOSO",key:e?.[0]??"virtuoso",scores:a}}function It(i){const a=Ha(i),e=ya.find(t=>t.id===a?.squadRole)?.label??a?.squadRole??"—";return{contract:a,role:e}}function ge(i){const e=String(i?.kickoff??"15:00").match(/(\d{1,2}):(\d{2})/);return e?`${e[1].padStart(2,"0")}:${e[2]}`:"15:00"}function Ot(i){const a=Number(i);if(!Number.isInteger(a)||a<=0)return"—";const e=a%100;return e>=11&&e<=13?`${a}th`:`${a}${a%10===1?"st":a%10===2?"nd":a%10===3?"rd":"th"}`}function V(i,a,e="",t=""){return`<div class="f23-stat ${t}"><span>${r(i)}</span><b>${r(a)}</b>${e?`<small>${r(e)}</small>`:""}</div>`}function aa(i,a=""){return`<div class="f23-progress ${a}"><i style="width:${Ct(i,0,100)}%"></i></div>`}function pa(i,a,e,t=""){return`<header class="f23-page-head">
    <div><span class="f23-kicker">${r(i)}</span><h2>${r(a)}</h2></div>
    <div class="f23-page-note">${e}${t}</div>
  </header>`}function kt(i,a,e,t=""){return`<div class="f23-tile-row ${t}" role="tablist" aria-label="${r(i)} sections">
    ${a.map(n=>`<button class="f23-tile ${e===n.id?"is-active":""}" type="button" role="tab" aria-selected="${e===n.id?"true":"false"}" data-action="f23-tab" data-group="${r(i)}" data-tab="${r(n.id)}">
          <span class="f23-tile-icon">${R(n.icon)}</span>
          <b>${r(n.label)}</b>
        </button>`).join("")}
  </div>`}function fa(i,a,e="arrow",t=""){return`<button class="f23-tile f23-tile-jump" type="button" data-action="f23-jump" data-target="${r(a)}">
    <span class="f23-tile-icon">${R(e)}</span>
    <b>${r(i)}</b>${t?`<small>${r(t)}</small>`:""}
  </button>`}function Re(i,{compact:a=!1}={}){const e=Array.isArray(i?.objectives)?i.objectives:[];return e.length?`<div class="f23-objectives ${a?"is-compact":""}">
    ${e.map(t=>`<div class="f23-objective ${r(t.status)}">
          <div class="f23-objective-head">
            <span>${r(t.title)}</span>
            <b>${r(t.progressLabel)}</b>
          </div>
          ${aa(t.progressPct,t.status==="achieved"?"is-done":"")}
          <div class="f23-objective-foot"><small>${r(t.detail??"")}</small><em>+${r(t.reward?.xp??0)} XP</em></div>
        </div>`).join("")}
  </div>`:'<p class="f23-muted">The board has not set objectives for this season.</p>'}function Zs(i,{activePage:a="central"}={}){const e=W(i),t=B(i),n=_(i),o=Xa(e),c=Za(e),p=Number(e?.overall??0);return`<div class="f23-command">
    <div class="f23-command-player">
      ${G(t,"is-large")}
      <div class="f23-command-name">
        <span>${r(_a(e))} · ${r(t?.shortName??"—")}</span>
        <b>${r(ia(e))}</b>
        <small>${r(i.career.season.label)} · ${r(i.career.phase.replace("-"," ").toUpperCase())}</small>
      </div>
      <div class="f23-command-ovr" style="--f23-ovr:${Wa(p)}"><b>${r(p)}</b><span>OVR</span></div>
    </div>
    <div class="f23-command-meta">
      <span class="f23-persona">${r(c.label)}</span>
      <span><small>SKILL POINTS</small><b>${r(e?.development?.skillPoints??0)}</b></span>
      <span><small>BANK</small><b>${b(i.finances?.balance??0,{compact:!0})}</b></span>
      <span><small>LEVEL</small><b>${r(o.level)}</b></span>
    </div>
  </div>
  <div class="f23-navbar">
    <span class="f23-bumper" aria-hidden="true">L1</span>
    <nav class="f23-nav" aria-label="Player career sections">
      ${Rt.map(h=>`<button class="f23-nav-tab ${a===h.id?"is-active":""}" type="button" data-action="career-page" data-page="${r(h.id)}" ${a===h.id?'aria-current="page"':""}>${r(h.label)}</button>`).join("")}
    </nav>
    <span class="f23-bumper" aria-hidden="true">R1</span>
    <span class="f23-nav-context">${r(n?.short??"—")} · ${r(i.career.season.label)}</span>
  </div>`}function zs(i,a){const e=B(i),t=Te(i,{limit:12}),n=i.career.date,o=Array.from({length:7},(c,p)=>{const h=ls(n,p),v=new Date(`${h}T00:00:00Z`),d=t.find(I=>I.date===h)??null,f=d?na(i,d):null,y=wt[v.getUTCDay()]??"—",g=($e[v.getUTCMonth()]??"").slice(0,3),S=d?"MATCH":v.getUTCDay()===1?"TRAIN":v.getUTCDay()===3||v.getUTCDay()===5?"RECOVERY":"REST";return{date:h,weekday:y,day:v.getUTCDate(),month:g,fixture:d,opponent:f,kind:S,today:p===0}});return`<section class="f23-week-strip" aria-label="Next seven days">
    <div class="f23-week-head">
      <div><span class="f23-kicker">NEXT 7 DAYS</span><b>${r(A(n))}</b><small>${r(e?.shortName??"PLAYER CAREER")} · one day per second</small></div>
      <button class="f23-sim-btn ${a?"is-running":""}" type="button" data-action="central-sim" aria-label="${a?"Stop calendar simulation":"Simulate one day at a time"}">${a?"STOP":"SIM"}</button>
    </div>
    <div class="f23-week-days">
      ${o.map(c=>`<div class="f23-week-day ${c.today?"is-today":""} ${c.fixture?"is-match":c.kind==="TRAIN"?"is-training":"is-rest"}">
            ${c.today?'<span class="f23-week-today">TODAY</span>':""}
            <span class="f23-week-weekday">${r(c.weekday)}</span>
            <b>${r(c.day)}</b>
            <small>${r(c.month)}</small>
            ${c.fixture?`<span class="f23-week-fixture">${c.opponent?G(c.opponent):""}<em>${r(Ne(c.fixture,e?.id)?"H":"A")}</em></span>`:`<span class="f23-week-kind">${r(c.kind)}</span>`}
          </div>`).join("")}
    </div>
  </section>`}function Qs(i,{weekSimRunning:a=!1}={}){const e=W(i),t=B(i),n=_(i),o=Na(i),c=na(i,o),p=Te(i,{limit:4}),h=wa(i)??[],v=qa(i),d=mt(i,{limit:4}),f=bt(i),y=vt(i),g=Ka(i),S=h.find(N=>N.clubId===t?.id)??null,I=h.slice(0,5),O=S&&!I.some(N=>N.clubId===S.clubId),L=Za(e),q=!!o?.international,$=q?i.world.nationalTeams?.[o.teamId]??t:t,C=o?Ne(o,t?.id)?"HOME":"AWAY":"—",K=!!Ba(i).academy?"PLAY ACADEMY MATCH":q?"PLAY INTERNATIONAL":"PLAY MATCH",P=o?`${o.competitionName??n?.name??"League"} · ${o.roundName??`Round ${o.round??"—"}`}`:"Advance the calendar to the next fixture.";return`<section class="f23-page f23-central-page span-2" data-career-page="central" id="f23-central" aria-label="Central dashboard">
    ${pa("PLAYER CAREER","Central",`<span>${r(A(i.career.date))}</span><b>${r(L.label)}</b>`)}

    ${zs(i,a)}

    <div class="f23-central-layout">
      <article class="f23-next-match ${o?"":"is-empty"}" id="f23-central-match">
        <div class="f23-next-match-top">
          <span>${o?"NEXT FIXTURE":"NO FIXTURE"} · ${r(C)}</span>
          <small>${r(o?.kickoff?ge(o):"—")}</small>
        </div>
        <div class="f23-next-match-main">
          <div class="f23-match-team">
            ${G($,"is-hero")}
            <b>${r($?.shortName??$?.short??"—")}</b>
          </div>
          <div class="f23-match-vs">
            <span>MATCHDAY</span>
            <b>VS</b>
            <small>${r(o?.date?A(o.date):"—")}</small>
          </div>
          <div class="f23-match-team is-opponent">
            ${c?G(c,"is-hero"):'<span class="f23-crest is-hero">—</span>'}
            <b>${r(c?.shortName??"TBC")}</b>
          </div>
        </div>
        <div class="f23-next-match-bottom">
          <div><b>${r(c?.name??"Opponent to be confirmed")}</b><small>${r(P)}</small></div>
          <div class="f23-match-actions">
            <button class="f23-primary" type="button" data-action="play-match" ${o?"":"disabled"}>
              ${R("play")} ${o?K:"NO FIXTURE"}
            </button>
            <button class="f23-mini-btn" type="button" data-action="sim-match" ${o?"":"disabled"}>
              SIM
            </button>
          </div>
        </div>
        <div class="f23-match-stamp">
          <span>FORM</span><b>${r(g.record)}</b>
          <span>LAST RATING</span><b>${g.rating?g.rating.toFixed(2):"—"}</b>
        </div>
      </article>

      <aside class="f23-panel f23-path-card" id="f23-central-objectives">
        <div class="f23-panel-head"><div><span>SEASON OBJECTIVES</span><b>${r(v.achieved)} / ${r(v.objectives.length)}</b></div><span class="f23-small-chip">BOARD ${r(v.board?.confidence??0)}%</span></div>
        ${Re(v,{compact:!0})}
        <button class="f23-text-link" type="button" data-action="f23-tab" data-group="mypro" data-tab="progress">VIEW YOUR PATH ${R("arrow")}</button>
      </aside>
    </div>

    <div class="f23-central-grid">
      <article class="f23-panel f23-training" id="f23-central-training">
        <div class="f23-panel-head"><div><span>TRAINING</span><b>${r(f.filter(N=>N.available).length)} READY</b></div><span class="f23-small-chip">${r(e?.condition?.fitness??100)} FITNESS</span></div>
        <div class="f23-list-stack">
          ${f.map(N=>`<div class="f23-list-row ${N.available?"":"is-muted"}">
                <span class="f23-row-icon">${R("growth")}</span>
                <div><b>${r(N.label)}</b><small>${r(N.groupLabel)} · +${r(N.xpGain)} XP</small></div>
                <button class="f23-mini-btn" type="button" data-action="train" data-drill-id="${r(N.id)}" ${N.available?"":"disabled"}>${N.available?"TRAIN":"LOCKED"}</button>
              </div>`).join("")}
        </div>
      </article>

      <article class="f23-panel f23-activities" id="f23-central-activities">
        <div class="f23-panel-head"><div><span>ACTIVITIES</span><b>${y.doneToday?"PLAN DONE":"ONE PER DAY"}</b></div><span class="f23-small-chip">${r(y.wellbeing)} WELLBEING</span></div>
        <div class="f23-list-stack">
          ${y.activities.slice(0,4).map(N=>`<div class="f23-list-row ${N.available?"":"is-muted"}">
                <span class="f23-row-icon">${R("personality")}</span>
                <div><b>${r(N.label)}</b><small>${r(N.tag)} · ${N.cost?b(N.cost):"FREE"}</small></div>
                <button class="f23-mini-btn" type="button" data-action="daily-activity" data-activity-id="${r(N.id)}" ${N.available?"":"disabled"}>${N.available?"GO":"—"}</button>
              </div>`).join("")}
        </div>
      </article>

      <article class="f23-panel f23-standings-card" id="f23-central-standings">
        <div class="f23-panel-head"><div><span>LEAGUE STANDINGS</span><b>${r(n?.short??"—")}</b></div><span class="f23-small-chip">${S?`${Ot(S.position)} PLACE`:"PRE-SEASON"}</span></div>
        <div class="f23-mini-table">
          <div class="f23-mini-table-head"><span>#</span><span>CLUB</span><span>P</span><span>GD</span><span>PTS</span></div>
          ${[...I,...O?[S]:[]].map((N,ra)=>`${O&&ra===I.length?'<div class="f23-table-gap">···</div>':""}
                <div class="f23-mini-table-row ${N.clubId===t?.id?"is-you":""}">
                  <span>${r(N.position)}</span><b>${G(N.club)}${r(N.club?.shortName??"—")}</b>
                  <span>${r(N.played)}</span><span>${N.goalDifference>0?"+":""}${r(N.goalDifference)}</span><strong>${r(N.points)}</strong>
                </div>`).join("")}
        </div>
      </article>

      <article class="f23-panel f23-news-card" id="f23-central-news">
        <div class="f23-panel-head"><div><span>LATEST NEWS</span><b>${r(d.length)} STORIES</b></div><span class="f23-small-chip">CAREER WIRE</span></div>
        <div class="f23-news-list">
          ${d.length?d.map(N=>`<div class="f23-news-row"><span>${r(N.type?.replace(":"," ").toUpperCase()??"NEWS")}</span><b>${r(N.title??"Career update")}</b><small>${r(N.body??N.detail??"")}</small></div>`).join(""):'<p class="f23-muted">No new stories yet. Your first matchday will put you in the headlines.</p>'}
        </div>
      </article>

      <article class="f23-panel f23-fixtures-card" id="f23-central-fixtures">
        <div class="f23-panel-head"><div><span>UPCOMING FIXTURES</span><b>${r(p.length)} LISTED</b></div><span class="f23-small-chip">ALL COMPETITIONS</span></div>
        <div class="f23-fixture-list">
          ${p.length?p.map(N=>{const ra=na(i,N),za=N.userIsHome??N.homeClubId===t?.id;return`<div class="f23-fixture-row">
                      <span class="f23-fixture-date">${r(A(N.date).replace(/\s\d{4}$/,""))}</span>
                      ${ra?G(ra):""}
                      <div><b>${r(ra?.name??"TBC")}</b><small>${r(N.competitionName)} · ${za?"H":"A"}</small></div>
                      <span class="f23-fixture-time">${r(ge(N))}</span>
                    </div>`}).join(""):'<p class="f23-muted">No more fixtures this season.</p>'}
        </div>
      </article>
    </div>

    <div class="f23-tile-row f23-central-tiles" aria-label="Central shortcuts">
      ${fa("TRAINING","f23-central-training","growth","Improve your pro")}
      ${fa("ACTIVITIES","f23-central-activities","personality","Build your life")}
      ${fa("STANDINGS","f23-central-standings","table","Track the table")}
      ${fa("NEWS","f23-central-news","info","Latest stories")}
      ${fa("FIXTURES","f23-central-fixtures","calendar","Next matches")}
      ${fa("OBJECTIVES","f23-central-objectives","progress","Board targets")}
    </div>
  </section>`}function Js(i,{spendable:a=!1}={}){return`<div class="f23-attribute-groups">
    ${i.filter(e=>e.id!=="goalkeeping"||(i.find(t=>t.id==="goalkeeping")?.values??[]).some(t=>t.value>0)).map(e=>`<section class="f23-attribute-group">
          <div class="f23-attribute-group-head"><b>${r(e.label)}</b><span>${r(Math.round(e.values.reduce((t,n)=>t+Number(n.value||0),0)/Math.max(1,e.values.length)))}</span></div>
          ${e.values.map(({key:t,value:n})=>`<div class="f23-attribute-row">
                <span>${r(ca[t]?.label??t)}</span>
                <div class="f23-attribute-track"><i style="width:${Ct(n,0,99)}%"></i></div>
                <b>${r(n)}</b>
                ${a?`<button class="f23-point-btn" type="button" data-action="upgrade-attribute" data-key="${r(t)}" ${n>=99?"disabled":""} aria-label="Spend one point on ${r(ca[t]?.label??t)}">+</button>`:""}
              </div>`).join("")}
        </section>`).join("")}
  </div>`}function Va(i){const a=i??{};return{apps:Number(a.appearances)||0,starts:Number(a.starts)||0,minutes:Number(a.minutes)||0,goals:Number(a.goals)||0,assists:Number(a.assists)||0,rating:Qe(a)?Qe(a).toFixed(2):"—",motm:Number(a.motm)||0,yellow:Number(a.yellowCards)||0,red:Number(a.redCards)||0,chances:Number(a.chancesCreated)||0,saves:Number(a.saves)||0}}function an(i,a){const e=W(i),t=B(i),n=_(i),o=It(i),c=Xa(e),p=gt(e),h=Number(e?.development?.skillPoints??0),v=yt(i),d=Za(e),f=qa(i),y=Ba(i),g=ve(i),S=Ka(i),I=Et(i,{limit:5}),O=Va(e?.stats?.season),L=Va(e?.stats?.career);if(a==="attributes")return`<div class="f23-panel f23-tab-panel">
      <div class="f23-panel-head"><div><span>ATTRIBUTES</span><b>${r(e?.overall)} OVR / ${r(e?.potential)} POT</b></div><span class="f23-small-chip">${r(h)} SKILL POINTS</span></div>
      ${Js(p,{spendable:h>0&&e?.overall<e?.potential})}
    </div>`;if(a==="skills"){const $=h>0&&e?.overall<e?.potential,C=p.flatMap(T=>T.values).filter(T=>Number(T.value)<99).sort((T,K)=>T.value-K.value).slice(0,12);return`<div class="f23-panel f23-tab-panel f23-skill-panel">
      <div class="f23-panel-head"><div><span>SKILL POINTS</span><b>${r(h)} AVAILABLE</b></div><span class="f23-small-chip">${r(c.xp)} / ${r(c.needed)} XP TO NEXT</span></div>
      <div class="f23-skill-hero"><div class="f23-skill-number">${r(h)}</div><div><b>DEVELOPMENT POINTS</b><p>Earn XP from matches, training and level-ups. Spend a point to permanently raise an attribute.</p>${aa(c.ratio*100)}</div></div>
      ${$?`<div class="f23-skill-list">${C.map(T=>`<div class="f23-skill-row"><span>${r(ca[T.key]?.label??T.key)}</span><b>${r(T.value)}</b><button class="f23-point-btn" type="button" data-action="upgrade-attribute" data-key="${r(T.key)}">+</button></div>`).join("")}</div>`:`<p class="f23-muted">${h>0?"You have reached your potential. Spend points on a new specialist path or keep them for next season.":"No points available. Keep playing and training to earn more."}</p>`}
    </div>`}if(a==="personality"){const $=[["maverick","MAVERICK","Seek stardom. Chase goals and glory.","finishing"],["virtuoso","VIRTUOSO","Skillful and intelligent. Technique changes matches.","ballControl"],["heartbeat","HEARTBEAT","The heartbeat of the team. Lead by example.","stamina"]];return`<div class="f23-panel f23-tab-panel">
      <div class="f23-panel-head"><div><span>PERSONALITY</span><b>${r(d.label)}</b></div><span class="f23-small-chip">CAREER IDENTITY</span></div>
      <p class="f23-lede">Your decisions on and off the pitch shape how the game sees you. Your attributes are leaning towards a ${r(d.label.toLowerCase())}.</p>
      <div class="f23-persona-grid">
        ${$.map(([C,T,K,P])=>`<article class="f23-persona-card ${d.key===C?"is-active":""}">
              <span>${r(C)}</span><h3>${r(T)}</h3><p>${r(K)}</p>
              <div class="f23-persona-score"><b>${r(d.scores[C])}</b><small>${r(ca[P]?.label??P)} influence</small></div>
              ${aa(d.scores[C])}
            </article>`).join("")}
      </div>
    </div>`}if(a==="perks")return`<div class="f23-panel f23-tab-panel">
      <div class="f23-panel-head"><div><span>PERKS &amp; SPECIALIST PATHS</span><b>${r(v.filter($=>$.unlocked).length)} UNLOCKED</b></div><span class="f23-small-chip">${r(h)} POINTS</span></div>
      <div class="f23-perk-grid">
        ${v.map($=>`<article class="f23-perk-card ${$.unlocked?"is-unlocked":""}">
              <span>${$.unlocked?"ACTIVE":$.available?`${r($.cost)} POINTS`:r($.reason)}</span>
              <h3>${r($.label)}</h3><p>${r($.description)}</p>
              <div class="f23-perk-boosts">${$.boosts.map(C=>`<div><small>${r(C.label)}</small><b>${$.unlocked?`+${r(C.amount)}`:`${r(C.value)} → ${r(C.next)}`}</b></div>`).join("")}</div>
              ${$.unlocked?'<span class="f23-owned">PERMANENT · ACTIVE</span>':`<button class="f23-mini-btn" type="button" data-action="unlock-playstyle" data-playstyle-id="${r($.id)}" ${$.available?"":"disabled"}>${$.available?"UNLOCK":"LOCKED"}</button>`}
            </article>`).join("")}
      </div>
    </div>`;if(a==="info"){const $=e?.identity??{},C=[["FULL NAME",ia(e)],["POSITION",`${_a(e)} · ${$.positions?.secondary??"—"}`],["NATIONALITY",Ce(e)],["AGE",`${Sa(e,i.career.date)} YEARS`],["HEIGHT / WEIGHT",`${$.heightCm??"—"} CM · ${$.weightKg??"—"} KG`],["PREFERRED FOOT",String($.preferredFoot??"right").toUpperCase()],["SQUAD NUMBER",`#${e?.squadNumber??"—"}`],["CLUB",t?.name??"—"],["LEAGUE",n?.name??"—"],["CONTRACT",o.role],["WAGE",`${b(o.contract?.weeklyWage??0)} / WEEK`],["MARKET VALUE",b(e?.marketValue??0,{compact:!0})],["AGENT",Se(i)?.identity?.displayName??"—"],["MANAGER",fe(i)?.identity?.displayName??"—"]];return`<div class="f23-panel f23-tab-panel">
      <div class="f23-panel-head"><div><span>PLAYER INFORMATION</span><b>${r(ia(e))}</b></div><span class="f23-small-chip">${r(t?.shortName??"—")} · #${r(e?.squadNumber??"—")}</span></div>
      <div class="f23-fact-grid">${C.map(([T,K])=>`<div><span>${r(T)}</span><b>${r(K)}</b></div>`).join("")}</div>
    </div>`}if(a==="progress")return`<div class="f23-tab-panel f23-progress-panel">
      <div class="f23-panel">
        <div class="f23-panel-head"><div><span>CAREER PROGRESS</span><b>${r(y.stageLabel??y.stage??"SENIOR CAREER")}</b></div><span class="f23-small-chip">${r(g.complete?"SEASON COMPLETE":"IN PROGRESS")}</span></div>
        <div class="f23-progress-stats">
          ${V("APPEARANCES",S.played,"all competitions")}
          ${V("RECORD",S.record,"career matches")}
          ${V("GOALS / ASSISTS",`${S.goals} / ${S.assists}`,"from match reports")}
          ${V("AVERAGE RATING",S.rating?S.rating.toFixed(2):"—","rated matches")}
        </div>
        <div class="f23-goal-strip"><span>BOARD CONFIDENCE</span><b>${r(f.board?.confidence??0)}%</b>${aa(f.board?.confidence??0)}</div>
      </div>
      <div class="f23-panel">
        <div class="f23-panel-head"><div><span>SEASON OBJECTIVES</span><b>${r(f.achieved)} / ${r(f.objectives.length)}</b></div><span class="f23-small-chip">BOARD TARGET TOP ${r(f.board?.targetPosition??"—")}</span></div>
        ${Re(f)}
      </div>
      <div class="f23-panel">
        <div class="f23-panel-head"><div><span>RECENT MATCHES</span><b>${r(I.length)} SHOWN</b></div><span class="f23-small-chip">FORM GUIDE</span></div>
        <div class="f23-history-list">${I.length?I.map($=>`<div class="f23-history-row"><span class="f23-result ${r($.result.toLowerCase())}">${r($.result)}</span>${G($.opponent)}<div><b>${r($.opponent?.name??"Opponent")}</b><small>${r(A($.date))} · ${r($.venue)}</small></div><strong>${r($.scoreline)}</strong><small>${$.playerRating?Number($.playerRating).toFixed(1):"—"}</small></div>`).join(""):'<p class="f23-muted">No matches played yet.</p>'}</div>
      </div>
    </div>`;if(a==="stats")return`<div class="f23-tab-panel f23-stats-panel">
      <div class="f23-panel">
        <div class="f23-panel-head"><div><span>PLAYER STATISTICS</span><b>${r(i.career.season.label)}</b></div><span class="f23-small-chip">${r(e?.overall)} OVR</span></div>
        <div class="f23-stat-grid">${[["APPEARANCES",O.apps,"this season"],["STARTS",O.starts,"starting XI"],["MINUTES",O.minutes,"played"],["GOALS",O.goals,"this season"],["ASSISTS",O.assists,"this season"],["AVERAGE RATING",O.rating,"match rating"],["MOTM",O.motm,"awards"],["CHANCES CREATED",O.chances,"this season"]].map(([$,C,T])=>V($,C,T)).join("")}</div>
      </div>
      <div class="f23-panel">
        <div class="f23-panel-head"><div><span>CAREER TOTALS</span><b>ALL SEASONS</b></div><span class="f23-small-chip">${r(L.apps)} APP</span></div>
        <div class="f23-stat-grid">${[["APPEARANCES",L.apps,"career"],["GOALS",L.goals,"career"],["ASSISTS",L.assists,"career"],["AVERAGE RATING",L.rating,"career"],["MOTM",L.motm,"career"],["YELLOW CARDS",L.yellow,"career"]].map(([$,C,T])=>V($,C,T)).join("")}</div>
      </div>
      <div class="f23-panel">
        <div class="f23-panel-head"><div><span>RECENT FORM</span><b>LAST ${r(I.length)}</b></div><span class="f23-small-chip">MATCH BY MATCH</span></div>
        <div class="f23-history-list">${I.length?I.map($=>`<div class="f23-history-row"><span class="f23-result ${r($.result.toLowerCase())}">${r($.result)}</span>${G($.opponent)}<div><b>${r($.opponent?.name??"Opponent")}</b><small>${r(A($.date))} · ${r($.competitionShort??"")}</small></div><strong>${r($.scoreline)}</strong><small>${$.playerRating?Number($.playerRating).toFixed(1):"—"}</small></div>`).join(""):'<p class="f23-muted">No matches played yet.</p>'}</div>
      </div>
    </div>`;const q=p.flatMap($=>$.values).sort(($,C)=>C.value-$.value).slice(0,6);return`<div class="f23-tab-panel f23-growth-panel">
    <div class="f23-panel f23-growth-hero">
      <div class="f23-growth-orb" style="--f23-ovr:${Wa(e?.overall)}"><b>${r(e?.overall)}</b><span>OVR</span></div>
      <div class="f23-growth-copy"><span>PLAYER GROWTH</span><h3>${r(e?.potential-e?.overall)} OVR TO POTENTIAL</h3><p>Level up, train and perform to close the gap. Growth is permanent and capped by potential.</p>
        <div class="f23-xp-line"><span>LEVEL ${r(c.level)}</span><b>${r(c.xp)} / ${r(c.needed)} XP</b></div>${aa(c.ratio*100)}
      </div>
      <div class="f23-growth-side">${V("POTENTIAL",e?.potential??"—","ceiling")}${V("SKILL POINTS",h,"available")}</div>
    </div>
    <div class="f23-panel">
      <div class="f23-panel-head"><div><span>TOP ATTRIBUTES</span><b>${r(d.label)}</b></div><span class="f23-small-chip">DEVELOPMENT SNAPSHOT</span></div>
      <div class="f23-top-attributes">${q.map(({key:$,value:C})=>`<div class="f23-top-attribute"><span>${r(ca[$]?.label??$)}</span><b>${r(C)}</b>${aa(C)}</div>`).join("")}</div>
      <button class="f23-text-link" type="button" data-action="f23-tab" data-group="mypro" data-tab="attributes">VIEW ALL ATTRIBUTES ${R("arrow")}</button>
    </div>
  </div>`}function en(i,a="growth"){const e=W(i),t=B(i),n=_(i),o=It(i),c=Xa(e),p=Za(e),h=rt.some(d=>d.id===a)?a:"growth",v=Ya({appearance:e?.appearance??{},position:e?.identity?.positions?.primary??"ST",club:{primary:t?.colors?.primary,secondary:t?.colors?.secondary,short:t?.shortName},name:ia(e),accent:"#65e6ff"});return`<section class="f23-page f23-mypro-page span-2" data-career-page="mypro" id="f23-mypro" aria-label="My Pro">
    ${pa("MY PRO","My Career",`<span>${r(p.label)}</span><b>${r(t?.shortName??"—")} · ${r(n?.short??"—")}</b>`)}
    <div class="f23-mypro-stage">
      <div class="f23-mypro-info">
        <span class="f23-kicker">${r(_a(e))} · ${r(Ce(e))} · #${r(e?.squadNumber??"—")}</span>
        <h2>${r(Ae(e))}</h2>
        <p>${r(t?.name??"—")} · ${r(o.role)}</p>
        <div class="f23-mypro-metrics">
          <div><b style="color:${Wa(e?.overall)}">${r(e?.overall)}</b><span>OVR</span></div>
          <div><b>${r(e?.potential??"—")}</b><span>POT</span></div>
          <div><b>${r(c.level)}</b><span>LEVEL</span></div>
        </div>
        <div class="f23-mypro-contract"><span>CONTRACT</span><b>${b(o.contract?.weeklyWage??0)} / wk</b><small>Expires ${r(A(o.contract?.endDate))}</small></div>
      </div>
      <div class="f23-mypro-model" aria-hidden="true"><span class="f23-model-ring"></span>${v}</div>
      <div class="f23-mypro-watermark">${r(e?.identity?.positions?.primary??"ST")}</div>
    </div>
    ${kt("mypro",rt,h)}
    <div class="f23-tab-content">${an(i,h)}</div>
    <div class="f23-section-links">
      <button class="f23-text-link" type="button" data-action="f23-jump" data-target="f23-squad-hub">SQUAD HUB ${R("team")}</button>
      <button class="f23-text-link" type="button" data-action="slots">ALL CAREERS ${R("arrow")}</button>
      <button class="f23-text-link" type="button" data-action="f23-jump" data-target="f23-mypro-training">TRAINING GROUND ${R("growth")}</button>
    </div>
  </section>`}function tn(i,a){const e=i.career.date,t=a??{year:Number(e.slice(0,4)),month:Number(e.slice(5,7))-1},n=t.year,o=t.month,p=new Date(Date.UTC(n,o,1)).getUTCDay(),h=new Date(Date.UTC(n,o+1,0)).getUTCDate();B(i);const v=St(i).filter(y=>y.date?.startsWith(`${n}-${String(o+1).padStart(2,"0")}`)),d=new Map;for(const y of v)d.has(y.date)||d.set(y.date,[]),d.get(y.date).push(y);const f=[];for(let y=0;y<42;y+=1){const g=y-p+1,S=new Date(Date.UTC(n,o,g)),I=S.toISOString().slice(0,10);f.push({date:I,day:S.getUTCDate(),inMonth:g>=1&&g<=h,weekday:S.getUTCDay(),fixtures:d.get(I)??[],isToday:I===e,isPast:I<e})}return{year:n,month:o,days:f}}function sn(i,a,e){const t=B(i),n=_(i),o=Na(i),c=tn(i,a),p=e??i.career.date,h=St(i).find(g=>g.date===p),v=h?na(i,h):null,d=Ca(i.career.date,p)>0,f=`${$e[c.month]} ${c.year}`,y=A(p);return`<div class="f23-calendar-layout">
    <div class="f23-calendar-main f23-panel">
      <div class="f23-calendar-top">
        <div><span class="f23-kicker">MONTH VIEW</span></div>
        <div class="f23-calendar-controls">
          <button type="button" data-action="f23-calendar-month" data-delta="-1" aria-label="Previous month">←</button>
          <b>${r(f)}</b>
          <button type="button" data-action="f23-calendar-month" data-delta="1" aria-label="Next month">→</button>
        </div>
      </div>
      <div class="f23-cal-weekdays">${wt.map(g=>`<span>${g}</span>`).join("")}</div>
      <div class="f23-cal-grid">
        ${c.days.map(g=>`<button type="button" class="f23-cal-day ${g.inMonth?"":"is-outside"} ${g.isToday?"is-today":""} ${p===g.date?"is-selected":""} ${g.isPast?"is-past":""}" data-action="f23-calendar-day" data-date="${r(g.date)}" aria-label="${r(A(g.date))}">
              <span class="f23-cal-number">${g.day}</span>
              ${g.fixtures.length?`<span class="f23-cal-event f23-cal-match">${G(na(i,g.fixtures[0]))}<b>${r(g.isSelected?"":"MATCH")}</b></span>`:""}
              ${!g.fixtures.length&&g.weekday===1?'<span class="f23-cal-event f23-cal-training">TRAIN</span>':""}
              ${!g.fixtures.length&&(g.weekday===3||g.weekday===5)?'<span class="f23-cal-dot"></span>':""}
              ${g.isToday?'<span class="f23-cal-today">TODAY</span>':""}
            </button>`).join("")}
      </div>
      <div class="f23-calendar-legend"><span><i class="is-match"></i>MATCH</span><span><i class="is-training"></i>TRAINING</span><span><i class="is-rest"></i>RECOVERY</span><span><i class="is-today"></i>TODAY</span></div>
    </div>

    <aside class="f23-calendar-side">
      <div class="f23-calendar-month-card">
        <span>${r(String(c.year))}</span>
        <b>${r($e[c.month])}</b>
        <p>Transfer window ${i.career.date<`${c.year}-09-01`?"open":"closed"} · ${r(n?.name??"Player Career")}</p>
      </div>
      <div class="f23-panel f23-day-card">
        <div class="f23-panel-head"><div><span>SELECTED DATE</span><b>${r(y)}</b></div><span class="f23-small-chip">${r(p===i.career.date?"TODAY":"SCHEDULE")}</span></div>
        ${h?`<div class="f23-day-fixture">${G(v,"is-large")}<div><span>${r(h.competitionName)}</span><b>${r(v?.name??"Opponent")}</b><small>${r(Ne(h,t?.id)?"HOME":"AWAY")} · ${r(ge(h))}</small></div></div>`:`<div class="f23-day-empty">${R("calendar")}<b>NO FIXTURE</b><p>Use this day to train, recover or handle career business.</p></div>`}
        <button class="f23-primary f23-wide" type="button" data-action="f23-simulate" data-date="${r(p)}" ${d?"":"disabled"}>${d?`SIMULATE TO ${r(y.toUpperCase())}`:"SELECT A FUTURE DATE"}</button>
        ${o?'<button class="f23-mini-btn f23-wide" type="button" data-action="sim-match">SIMULATE NEXT MATCH</button>':""}
        <small class="f23-cal-note">The calendar advances one day at a time and stops before a matchday you still need to play. Simulate the fixture to let the AI play it out and keep the calendar moving.</small>
      </div>
      <div class="f23-panel f23-schedule-rules">
        <span class="f23-kicker">SCHEDULE RULES</span>
        <div><span>BEFORE MATCH</span><b>REST DAY</b></div>
        <div><span>AFTER MATCH</span><b>RECOVERY DAY</b></div>
        <div><span>WEEKLY PLAN</span><b>INTERMITTENT TRAINING</b></div>
        <p>${o?`Next fixture: ${r(na(i,o)?.name??"TBC")} · ${r(A(o.date))}`:"No fixture scheduled."}</p>
      </div>
    </aside>
  </div>`}function nn(i){const a=B(i),e=wa(i)??[];return`<div class="f23-panel f23-table-panel">
    <div class="f23-panel-head"><div><span>LEAGUE TABLE</span><b>${r(_(i)?.name??"—")}</b></div><span class="f23-small-chip">${r(e.reduce((t,n)=>Math.max(t,n.played),0)||"PRE-SEASON")}</span></div>
    <div class="f23-full-table">
      <div class="f23-full-table-head"><span>#</span><span>CLUB</span><span>P</span><span>W</span><span>D</span><span>L</span><span>GF</span><span>GA</span><span>GD</span><span>PTS</span></div>
      ${e.map(t=>`<div class="f23-full-table-row ${t.clubId===a?.id?"is-you":""}">
            <span>${r(t.position)}</span><b>${G(t.club)}${r(t.club?.name??"—")}</b>
            <span>${r(t.played)}</span><span>${r(t.won)}</span><span>${r(t.drawn)}</span><span>${r(t.lost)}</span>
            <span>${r(t.goalsFor)}</span><span>${r(t.goalsAgainst)}</span><span>${t.goalDifference>0?"+":""}${r(t.goalDifference)}</span>
            <strong>${r(t.points)}</strong>
          </div>`).join("")}
    </div>
  </div>`}function rn(i){const a=W(i),e=Va(a?.stats?.season),t=Va(a?.stats?.career);return`<div class="f23-tab-panel f23-stats-panel">
    <div class="f23-panel"><div class="f23-panel-head"><div><span>PLAYER STATS</span><b>${r(i.career.season.label)}</b></div><span class="f23-small-chip">${r(a?.overall)} OVR</span></div>
      <div class="f23-stat-grid">${[["APPS",e.apps,"this season"],["GOALS",e.goals,"this season"],["ASSISTS",e.assists,"this season"],["RATING",e.rating,"average"],["MINUTES",e.minutes,"played"],["MOTM",e.motm,"awards"]].map(([n,o,c])=>V(n,o,c)).join("")}</div>
    </div>
    <div class="f23-panel"><div class="f23-panel-head"><div><span>CAREER TOTALS</span><b>ALL TIME</b></div><span class="f23-small-chip">${r(t.apps)} APP</span></div><div class="f23-stat-grid">${[["APPS",t.apps,"career"],["GOALS",t.goals,"career"],["ASSISTS",t.assists,"career"],["RATING",t.rating,"career"],["MOTM",t.motm,"career"],["CARDS",`${t.yellow} / ${t.red}`,"Y / R"]].map(([n,o,c])=>V(n,o,c)).join("")}</div></div>
  </div>`}function ln(i){const a=B(i),e=(wa(i)??[]).find(c=>c.clubId===a?.id),t=Number(e?.played)||0,n=Number(e?.points)||0,o=Ka(i);return`<div class="f23-tab-panel f23-stats-panel">
    <div class="f23-panel"><div class="f23-panel-head"><div><span>TEAM STATS</span><b>${r(a?.name??"—")}</b></div><span class="f23-small-chip">${r(_(i)?.short??"—")}</span></div>
      <div class="f23-stat-grid">${[["POSITION",e?Ot(e.position):"—","league"],["PLAYED",t,"matches"],["POINTS",n,`${t?(n/t).toFixed(2):"0.00"} PPG`],["GOALS FOR",e?.goalsFor??0,`${t?((e?.goalsFor??0)/t).toFixed(1):"0.0"} per game`],["GOALS AGAINST",e?.goalsAgainst??0,"conceded"],["GOAL DIFFERENCE",e?.goalDifference??0,"this season"],["FORM",e?.form?.join(" · ")||"—","last five"],["MATCH RATING",o.rating?o.rating.toFixed(2):"—","player average"]].map(([c,p,h])=>V(c,p,h)).join("")}</div>
    </div>
    <div class="f23-panel"><div class="f23-panel-head"><div><span>SEASON RECORD</span><b>${r(o.record)}</b></div><span class="f23-small-chip">ALL COMPS</span></div>
      <div class="f23-record-bars"><div><span>WINS</span><b>${o.wins}</b>${aa(o.wins/Math.max(1,o.played)*100,"is-green")}</div><div><span>DRAWS</span><b>${o.draws}</b>${aa(o.draws/Math.max(1,o.played)*100)}</div><div><span>LOSSES</span><b>${o.losses}</b>${aa(o.losses/Math.max(1,o.played)*100,"is-red")}</div></div>
      <div class="f23-stat-grid f23-stat-grid-small">${V("GOALS",o.goals,"scored")}${V("ASSISTS",o.assists,"provided")}</div>
    </div>
  </div>`}function on(i){const a=Object.values(i.world.leagues??{});return`<div class="f23-panel f23-leagues-panel"><div class="f23-panel-head"><div><span>OTHER LEAGUES</span><b>${r(a.length)} COMPETITIONS</b></div><span class="f23-small-chip">WORLD FOOTBALL</span></div>
    <div class="f23-league-grid">${a.map(e=>{const t=os(i,e.id)??[];return`<article class="f23-league-card"><div><span>${r(e.country??"DOMESTIC")}</span><h3>${r(e.name)}</h3><small>${r(e.clubIds?.length??0)} clubs · ${r(e.short??"")}</small></div><div class="f23-league-leader">${t[0]?.club?G(t[0].club,"is-large"):""}<div><span>LEADER</span><b>${r(t[0]?.club?.name??"Season pending")}</b><small>${t[0]?`${t[0].points} pts`:"—"}</small></div></div></article>`}).join("")}</div></div>`}function cn(i){const a=_(i),e=qa(i),t=Ga(i),n=wa(i)??[];return`<div class="f23-tab-panel f23-competition-grid">
    <div class="f23-panel"><div class="f23-panel-head"><div><span>COMPETITION INFORMATION</span><b>${r(a?.name??"—")}</b></div><span class="f23-small-chip">${r(a?.short??"—")}</span></div>
      <div class="f23-fact-grid">${[["SEASON",i.career.season.label],["DATES",`${A(i.career.season.startDate)} → ${A(i.career.season.endDate)}`],["CLUBS",n.length],["MATCHDAYS",n.reduce((o,c)=>Math.max(o,c.played),0)||"PRE-SEASON"],["BOARD TARGET",`TOP ${e.board?.targetPosition??"—"}`],["CONFIDENCE",`${e.board?.confidence??0}%`],["TRANSFER WINDOW",t.window.open?`${t.window.label} OPEN`:"CLOSED"],["NEXT WINDOW",A(t.window.nextOpenDate)]].map(([o,c])=>`<div><span>${r(o)}</span><b>${r(c)}</b></div>`).join("")}</div>
    </div>
    <div class="f23-panel"><div class="f23-panel-head"><div><span>BOARD EXPECTATIONS</span><b>${r(e.board?.targetPosition?`TOP ${e.board.targetPosition}`:"—")}</b></div><span class="f23-small-chip">SEASON</span></div>${Re(e)}</div>
  </div>${dn(i)}`}function dn(i){B(i);const a=Na(i),e=cs(i),t=ds(i);return`<div class="f23-tab-panel f23-cup-board">
    <div class="f23-panel">
      <div class="f23-panel-head"><div><span>CUPS &amp; CONTINENTAL</span><b>${r(e.length)} COMPETITIONS</b></div><span class="f23-small-chip">KNOCKOUT FOOTBALL</span></div>
      <div class="f23-cup-grid">
        ${e.map(n=>{const o=n.nextFixture?na(i,n.nextFixture):null,c=n.userWon?"WINNERS":n.nextFixture?`NEXT · ${o?.shortName??"TBC"}`:n.eliminated?"ELIMINATED":n.userIn?"IN PROGRESS":"NOT INVOLVED",p=n.competition?.currentRound??0,h=n.competition?.totalRounds??0;return`<article class="f23-cup-card ${n.userWon?"is-winner":""}">
              <div class="f23-cup-card-top"><span>${r(n.short)}</span><b>${r(c)}</b></div>
              <div class="f23-cup-card-main">
                <h3>${r(n.name)}</h3>
                <small>${r(n.type==="continental"?"CONTINENTAL":"DOMESTIC CUP")}${h?` · ROUND ${p}/${h}`:""}</small>
                ${n.nextFixture?`<p>${A(n.nextFixture.date)} · ${r(n.nextFixture.roundName??"Knockout")} · ${r(o?.name??"TBC")}</p>`:`<p>${n.winnerClub?`Won by ${r(n.winnerClub.name)}`:n.userIn?"Awaiting the next round draw.":"Your club is not in this competition."}</p>`}
              </div>
              ${n.userWon?`<div class="f23-cup-badge">${R("trophy")} TROPHY WON</div>`:""}
            </article>`}).join("")}
      </div>
    </div>
    <div class="f23-panel">
      <div class="f23-panel-head"><div><span>INTERNATIONAL TOURNAMENTS</span><b>WORLD STAGE</b></div><span class="f23-small-chip">SUMMER FOOTBALL</span></div>
      <div class="f23-international-grid">
        ${t.map(n=>{const o=n.competition,c=n.winnerTeam,p=n.campaign,h=n.nextFixture,v=!!(h&&a?.id===h.id),d=p?.stage==="qualifying"?"QUALIFYING PLAY-OFF":p?.stage==="finals"?`KNOCKOUT · ${h?.roundName??"NEXT ROUND"}`:p?.stage==="eliminated"?"ELIMINATED":p?.stage==="champion"?"CHAMPIONS":"NOT PLAYED";return`<article class="f23-international-card ${p?"is-playable":""}">
              <div class="f23-international-top"><span>${r(n.region??"GLOBAL")}</span><b>${r(o?.editionYear??"—")}</b></div>
              <h3>${r(n.name)}</h3>
              <p>${c?`${r(c.name)} lifted the trophy${n.runnerUpTeam?` · beat ${r(n.runnerUpTeam.name)}`:""}.`:p?h?`${r(d)} · ${A(h.date)} · ${r(n.nextOpponent?.name??"TBC")}`:p.completed?`${r(d)} · the tournament has been decided.`:"Awaiting the next international window.":n.activeEdition?"The tournament has not been played yet this season.":`Next edition scheduled for ${r(n.editionYear??"—")}.`}</p>
              ${c?`<span class="f23-international-winner">${R("trophy")} ${r(c.name)}</span>`:p&&h?`<div class="f23-international-actions">${v?`<button class="f23-mini-btn" type="button" data-action="play-match">${R("play")} PLAY</button><button class="f23-mini-btn" type="button" data-action="sim-match">SIM</button>`:`<small>Next: ${A(h.date)} · ${r(h.roundName??"International")}</small>`}</div>`:p?'<span class="f23-small-chip">CAMPAIGN COMPLETE</span>':n.activeEdition?`<button class="f23-mini-btn" type="button" data-action="international-sim" data-competition-id="${r(n.competition?.id??"")}">SIMULATE TOURNAMENT</button>`:`<span class="f23-small-chip">NEXT ${r(n.editionYear??"—")}</span>`}
            </article>`}).join("")}
      </div>
      <p class="fine-print">If your nation is in a tournament, its qualification play-off and knockout fixtures appear on the career calendar. Other tournaments can be simulated from here; your national team's winner medal is added to the career trophy cabinet.</p>
    </div>
  </div>`}function pn(i,a,e,t){return a==="table"?nn(i):a==="player"?rn(i):a==="team"?ln(i):a==="leagues"?on(i):a==="competition"?cn(i):sn(i,e,t)}function hn(i,{activeTab:a="calendar",calendarCursor:e=null,selectedDate:t=null}={}){const n=_(i),o=ue.some(p=>p.id===a)?a:"calendar",c=ue.find(p=>p.id===o)?.label??"CALENDAR";return`<section class="f23-page f23-season-page span-2" data-career-page="season" id="f23-season" aria-label="Season">
    ${pa("SEASON",c,`<span>${r(n?.name??"—")}</span><b>${r(i.career.season.label)}</b>`,"")}
    ${kt("season",ue,o)}
    <div class="f23-tab-content">${pn(i,o,e,t)}</div>
  </section>`}function un(i,a){const e=W(i),t=B(i),n=Tt(i),o=At(i),c=a==="boots"?"boots":a==="accessories"?"accessory":null;if(c){const p=n.filter(h=>h.slot===c);return`<div class="f23-panel f23-tab-panel">
      <div class="f23-panel-head"><div><span>${c==="boots"?"EDIT BOOTS":"EDIT ACCESSORIES"}</span><b>${r(o[c]?.name??"NONE EQUIPPED")}</b></div><span class="f23-small-chip">${r(p.length)} ${p.length===1?"ITEM":"ITEMS"}</span></div>
      <div class="f23-gear-grid">${p.length?p.map(h=>`<article class="f23-gear-card ${o[c]?.id===h.id?"is-equipped":""}">
                  <div class="f23-gear-art">${R(c==="boots"?"boot":"accessory")}</div>
                  <div><h3>${r(h.name)}</h3><p>${r(h.rarity??"Standard")} · ${r(h.slot)}</p></div>
                  <button class="f23-mini-btn" type="button" data-action="equip-item" data-item-id="${r(h.id)}" ${o[c]?.id===h.id?"disabled":""}>${o[c]?.id===h.id?"EQUIPPED":"EQUIP"}</button>
                </article>`).join(""):`<p class="f23-muted">No ${c==="boots"?"boots":"accessories"} in your inventory yet.</p>`}</div>
    </div>`}return a==="settings"?`<div class="f23-panel f23-tab-panel f23-settings-panel">
      <div class="f23-panel-head"><div><span>SETTINGS</span><b>CAREER SETTINGS</b></div><span class="f23-small-chip">CHANGES APPLY IMMEDIATELY</span></div>
      <div class="f23-setting-row"><div><b>DIFFICULTY</b><small>Affects match simulation and opposition quality.</small></div><div class="f23-choice-group">${ut.map(p=>`<button type="button" class="${i.settings.difficulty===p.id?"is-active":""}" data-action="f23-setting" data-setting="difficulty" data-value="${r(p.id)}">${r(p.label)}</button>`).join("")}</div></div>
      <div class="f23-setting-row"><div><b>MATCH FORMAT</b><small>Every career half is fixed at 1:30 of real time.</small></div><div class="f23-choice-group"><button type="button" class="is-active" disabled>1:30 HALVES</button></div></div>
      <div class="f23-setting-row"><div><b>AUTOSAVE</b><small>Save the career after every eligible action.</small></div><div class="f23-choice-group"><button type="button" class="${i.settings.autoSave?"is-active":""}" data-action="f23-setting" data-setting="autoSave" data-value="true">ON</button><button type="button" class="${i.settings.autoSave?"":"is-active"}" data-action="f23-setting" data-setting="autoSave" data-value="false">OFF</button></div></div>
      <div class="f23-settings-footer"><span>Save ID ${r(i.meta.saveId)} · schema ${r(i.meta.schemaVersion??"—")}</span><button class="f23-primary" type="button" data-action="save-now">SAVE CAREER</button></div>
    </div>`:`<div class="f23-tab-panel f23-kit-panel">
    <div class="f23-panel f23-kit-card">
      <div class="f23-panel-head"><div><span>KIT &amp; GEAR</span><b>${r(Ae(e))}</b></div><span class="f23-small-chip">${r(t?.shortName??"—")} · #${r(e?.squadNumber??"—")}</span></div>
      <div class="f23-kit-display">
        <div class="f23-kit-shirt" style="--kit:${j(t?.colors?.primary,"#23204f")};--kit-2:${j(t?.colors?.secondary,"#ffffff")}"><span>${r(t?.shortName??"FC")}</span><b>${r(e?.squadNumber??"—")}</b></div>
        <div class="f23-kit-list">
          <div><span>BOOTS</span><b>${r(o.boots?.name??"Club issue")}</b><button class="f23-text-link" type="button" data-action="f23-tab" data-group="customise" data-tab="boots">CHANGE ${R("arrow")}</button></div>
          <div><span>ACCESSORY</span><b>${r(o.accessory?.name??"None")}</b><button class="f23-text-link" type="button" data-action="f23-tab" data-group="customise" data-tab="accessories">CHANGE ${R("arrow")}</button></div>
          <div><span>APPEARANCE</span><b>Hair, face, body and kit fit</b><button class="f23-text-link" type="button" data-action="appearance">EDIT APPEARANCE ${R("arrow")}</button></div>
        </div>
      </div>
    </div>
    <div class="f23-panel"><div class="f23-panel-head"><div><span>PLAYER PROFILE</span><b>${r(ia(e))}</b></div><span class="f23-small-chip">EDITABLE</span></div><div class="f23-fact-grid">${[["POSITION",_a(e)],["NATIONALITY",Ce(e)],["AGE",`${Sa(e,i.career.date)}`],["HEIGHT / WEIGHT",`${e?.identity?.heightCm??"—"} CM · ${e?.identity?.weightKg??"—"} KG`],["PREFERRED FOOT",String(e?.identity?.preferredFoot??"right").toUpperCase()],["SQUAD NUMBER",`#${e?.squadNumber??"—"}`]].map(([p,h])=>`<div><span>${r(p)}</span><b>${r(h)}</b></div>`).join("")}</div><button class="f23-text-link" type="button" data-action="rename">EDIT PRO ${R("arrow")}</button></div>
  </div>`}function mn(i,a=!1){if(!a)return`<section class="f23-panel f23-admin-panel f23-admin-lock" id="f23-admin" aria-label="Admin menu locked">
      <div class="f23-panel-head"><div><span>ADMIN MENU</span><b>LOCKED</b></div><span class="f23-small-chip">ACCESS CODE REQUIRED</span></div>
      <p class="f23-admin-intro">The sandbox tools are protected. Enter the admin access code to unlock unlimited money, skill points and attribute grants for this session.</p>
      <div class="f23-admin-code-row">
        <input id="adminCode" class="f23-admin-code" type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="ACCESS CODE" aria-label="Admin access code" />
        <button class="f23-admin-btn is-unlock" type="button" data-action="admin-unlock">UNLOCK ${R("arrow")}</button>
      </div>
      <div class="f23-admin-warning">The code is not stored in the career save. Locking again requires a reload.</div>
    </section>`;const e=W(i),t=[["money","+ £1,000,000","Top up the bank"],["skillPoints","+ 50 SKILL POINTS","Buy every attribute"],["attributes","MAX ATTRIBUTES","Set every stat to 99"],["potential","MAX POTENTIAL","Raise the ceiling"],["fitness","FULL FITNESS","Reset fitness and form"],["confidence","MAX CONFIDENCE","Win over the manager"],["xp","+ 10,000 XP","Level up fast"]];return`<section class="f23-panel f23-admin-panel" id="f23-admin" aria-label="Admin menu">
    <div class="f23-panel-head"><div><span>ADMIN MENU</span><b>SANDBOX CHEATS</b></div><span class="f23-small-chip">SAVED WITH CAREER</span></div>
    <p class="f23-admin-intro">Testing tools for this career. Grants are unlimited and save immediately. Current bank <b>${b(i.finances?.balance??0)}</b> · <b>${r(e?.development?.skillPoints??0)}</b> skill points.</p>
    <div class="f23-admin-grid">
      ${t.map(([n,o,c])=>`<button class="f23-admin-btn" type="button" data-action="admin-grant" data-grant="${n}">
            <b>${r(o)}</b><small>${r(c)}</small>
          </button>`).join("")}
      <button class="f23-admin-btn is-max" type="button" data-action="admin-grant" data-grant="everything">
        <b>MAX EVERYTHING</b><small>Money, stats, fitness and confidence</small>
      </button>
    </div>
    <div class="f23-admin-warning">Admin changes are permanent for this save. Use them for testing or a sandbox career.</div>
  </section>`}function bn(i,a="overview",e=!1){const t=Xs.some(n=>n.id===a)?a:"overview";return`<section class="f23-page f23-customise-page span-2" data-career-page="customise" id="f23-customise" aria-label="Customise">
    ${pa("CUSTOMISE","Customise","<span>PLAYER &amp; CAREER</span><b>LOOK SHARP</b>")}
    <div class="f23-customise-tiles">
      <button class="f23-action-tile" type="button" data-action="rename"><span>${R("personality")}</span><b>EDIT PRO</b><small>Name, shirt and identity</small></button>
      <button class="f23-action-tile" type="button" data-action="appearance"><span>${R("kit")}</span><b>EDIT APPEARANCE</b><small>Face, hair, body and kit</small></button>
      <button class="f23-action-tile ${t==="boots"?"is-active":""}" type="button" data-action="f23-tab" data-group="customise" data-tab="boots"><span>${R("boot")}</span><b>EDIT BOOTS</b><small>Equip your match boots</small></button>
      <button class="f23-action-tile ${t==="accessories"?"is-active":""}" type="button" data-action="f23-tab" data-group="customise" data-tab="accessories"><span>${R("accessory")}</span><b>EDIT ACCESSORIES</b><small>Tape, gloves and more</small></button>
      <button class="f23-action-tile ${t==="settings"?"is-active":""}" type="button" data-action="f23-tab" data-group="customise" data-tab="settings"><span>${R("settings")}</span><b>SETTINGS</b><small>Difficulty and autosave</small></button>
      <button class="f23-action-tile" type="button" data-action="save-now"><span>${R("progress")}</span><b>SAVE CAREER</b><small>Write changes to device</small></button>
    </div>
    <div class="f23-tab-content">${un(i,t)}</div>
    ${mn(i,e)}
  </section>`}function vn(i,a="wire"){const e=i.career.social?.accounts??{},t=at(a)??et[0],n=e[t.id]??null,o=(i.career.social?.posts??[]).slice().sort((v,d)=>d.at.localeCompare(v.at)||d.id.localeCompare(v.id)).slice(0,20),c=Object.values(e).reduce((v,d)=>v+(Number(d.followers)||0),0),p=Object.values(e).reduce((v,d)=>v+(Number(d.posts)||0),0),h=Object.values(e).reduce((v,d)=>v+(Number(d.likes)||0),0);return`<section class="f23-page f23-social-page span-2" data-career-page="social" id="f23-social" aria-label="Social media">
    ${pa("OFF THE PITCH","Social","<span>BUILD YOUR BRAND</span><b>POST ANYTHING</b>")}
    <div class="f23-social-hero">
      <div><span class="f23-kicker">YOUR AUDIENCE</span><b>${r(c.toLocaleString("en-GB"))}</b><small>FOLLOWERS ACROSS ${r(Object.keys(e).length)} ACCOUNTS</small></div>
      <div><span class="f23-kicker">POSTS</span><b>${r(p)}</b><small>PUBLISHED</small></div>
      <div><span class="f23-kicker">ENGAGEMENT</span><b>${r(h.toLocaleString("en-GB"))}</b><small>LIKES RECEIVED</small></div>
    </div>
    <div class="f23-social-platforms">
      ${et.map(v=>{const d=e[v.id];return`<button class="f23-social-platform ${v.id===t.id?"is-active":""}" type="button" data-action="social-platform" data-platform="${r(v.id)}" style="--social:${j(v.color,"#56c7f2")}">
          <span>${r(v.short)}</span>
          <b>${d?`@${r(d.handle)}`:"OPEN ACCOUNT"}</b>
          <small>${d?`${d.followers.toLocaleString("en-GB")} followers`:v.description}</small>
        </button>`}).join("")}
    </div>
    <div class="f23-social-layout">
      <div class="f23-panel f23-social-compose">
        <div class="f23-panel-head"><div><span>${r(t.name.toUpperCase())}</span><b>${n?`@${r(n.handle)}`:"NO ACCOUNT"}</b></div><span class="f23-small-chip">${n?`${n.followers.toLocaleString("en-GB")} FOLLOWERS`:"CREATE ONE"}</span></div>
        ${n?`<div class="f23-social-account-line"><span>${n.verified?"VERIFIED":"PLAYER ACCOUNT"}</span><b>${r(n.displayName??n.handle)}</b><small>${r(t.description)}</small></div>
              <textarea id="socialPostText" class="f23-social-textarea" maxlength="280" rows="4" placeholder="Say anything. The feed is yours."></textarea>
              <div class="f23-social-compose-actions"><small>280 characters · posted immediately</small><button class="f23-primary" type="button" data-action="social-post" data-platform="${r(t.id)}">POST ${R("arrow")}</button></div>`:`<p class="f23-social-open-copy">${r(t.description)} Open an account for ${r(t.name)} and start building your following.</p>
              <div class="f23-social-open-row"><input id="socialHandleInput" class="f23-social-input" type="text" maxlength="20" autocomplete="off" placeholder="@yourhandle" aria-label="Social handle" /><button class="f23-primary" type="button" data-action="social-create" data-platform="${r(t.id)}">OPEN ${r(t.short)} ${R("arrow")}</button></div>
              <small class="fine-print">3–20 letters, numbers or underscores.</small>`}
      </div>
      <div class="f23-panel f23-social-feed">
        <div class="f23-panel-head"><div><span>YOUR FEED</span><b>${r(o.length)} POSTS</b></div><span class="f23-small-chip">LIVE TIMELINE</span></div>
        <div class="f23-social-posts">
          ${o.length?o.map(v=>{const d=at(v.platformId);return`<article class="f23-social-post" style="--social:${j(d?.color,"#56c7f2")}">
                    <div class="f23-social-post-head"><span>${r(d?.short??"SOCIAL")}</span><b>@${r(v.handle)}</b><small>DAY ${r(v.day)}</small></div>
                    <p>${r(v.text)}</p>
                    <div class="f23-social-post-stats"><span>♥ ${r(v.likes)}</span><span>◌ ${r(v.comments)}</span><span>↗ ${r(v.reposts)}</span><span>+${r(v.followersGained)} followers</span></div>
                  </article>`}).join(""):'<div class="f23-social-empty">No posts yet. Open an account and say something.</div>'}
        </div>
      </div>
    </div>
  </section>`}function fn(i){const a=Ts(i),e=Number(i.finances?.balance)||0,t=W(i),n=Nt(i),o=[...new Set(oe.map(d=>d.category))],c=new Set(n.houses.map(d=>d.houseId)),p=new Set(n.brands.map(d=>d.brandId)),h=Object.values(i.world?.clubs??{}).sort((d,f)=>(Number(f.reputation)||0)-(Number(d.reputation)||0)||d.name.localeCompare(f.name)).slice(0,6),v=n.activeAgent?.agentId??null;return`<section class="f23-page f23-shop-page span-2" data-career-page="shop" id="f23-shop" aria-label="Shop and portfolio">
    ${pa("SPEND YOUR EARNINGS","Shop",`<span>BANK ${b(e)}</span><b>CLUB STORE</b>`)}
    <div class="f23-shop-wallet">
      <div><span class="f23-kicker">AVAILABLE BALANCE</span><b>${b(e)}</b><small>Wages, bonuses and matchday income</small></div>
      <div><span class="f23-kicker">PORTFOLIO VALUE</span><b>${b(n.totalInvested,{compact:!0})}</b><small>${r(n.houses.length)} homes · ${r(n.clubs.length)} club stakes · ${r(n.brands.length)} brands</small></div>
      <div><span class="f23-kicker">WEEKLY NET</span><b class="${n.weekly.net>=0?"is-positive":"is-negative"}">${b(n.weekly.net)}</b><small>Rent, dividends, royalties and retainers</small></div>
      <div><span class="f23-kicker">FITNESS</span><b>${r(t?.condition?.fitness??100)}%</b><small>Ready for the next fixture</small></div>
    </div>

    <div class="f23-panel f23-shop-section">
      <div class="f23-panel-head"><div><span>PROPERTY</span><b>HOUSES &amp; ESTATES</b></div><span class="f23-small-chip">RENTAL INCOME</span></div>
      <div class="f23-asset-grid">
        ${Rs.map(d=>{const f=c.has(d.id),y=ws(d.price),g=Is(d.price),S=e>=d.price;return`<article class="f23-asset-card ${f?"is-owned":""}">
            <div class="f23-asset-art" style="--asset:${j(d.color,"#7d8ca3")}">${R("home")}</div>
            <div class="f23-asset-copy"><span>${r(d.bedrooms)} BED · ${r(d.city)}</span><h3>${r(d.name)}</h3><p>${r(d.description)}</p></div>
            <div class="f23-asset-finance"><span>RENT <b>${b(y)}</b></span><span>UPKEEP <b>${b(g)}</b></span><span>NET <b>${b(y-g)}/wk</b></span></div>
            <div class="f23-asset-buy"><b>${b(d.price)}</b><button class="f23-mini-btn" type="button" data-action="shop-buy-house" data-house-id="${r(d.id)}" ${f||!S?"disabled":""}>${f?"OWNED":S?"BUY HOME":"NEED MORE"}</button></div>
          </article>`}).join("")}
      </div>
    </div>

    <div class="f23-panel f23-shop-section">
      <div class="f23-panel-head"><div><span>REPRESENTATION</span><b>AGENTS</b></div><span class="f23-small-chip">TRANSFER NETWORK</span></div>
      <div class="f23-asset-grid f23-asset-grid-wide">
        ${Os.map(d=>{const f=v===d.id,y=e>=d.fee;return`<article class="f23-asset-card ${f?"is-owned":""}">
            <div class="f23-asset-art f23-asset-art-agent" style="--asset:${j(d.color,"#4f8f7a")}">${r(d.name.split(/\s+/).map(g=>g[0]).slice(0,2).join(""))}</div>
            <div class="f23-asset-copy"><span>${r(d.tier)} · ${r(d.agency)}</span><h3>${r(d.name)}</h3><p>${r(d.description)}</p></div>
            <div class="f23-asset-finance"><span>FEE <b>${b(d.fee)}</b></span><span>RETAINER <b>${b(d.retainer)}/wk</b></span><span>NETWORK <b>+${r(d.networkBonus)}</b></span></div>
            <div class="f23-asset-buy"><b>${f?"REPRESENTING YOU":`${r(d.nationality)} · AGE ${r(d.age)}`}</b><button class="f23-mini-btn" type="button" data-action="shop-hire-agent" data-agent-id="${r(d.id)}" ${f||!y?"disabled":""}>${f?"ACTIVE":y?"HIRE AGENT":"NEED MORE"}</button></div>
          </article>`}).join("")}
      </div>
    </div>

    <div class="f23-panel f23-shop-section">
      <div class="f23-panel-head"><div><span>OWNERSHIP</span><b>CLUBS</b></div><span class="f23-small-chip">WEEKLY DIVIDENDS</span></div>
      <div class="f23-asset-grid f23-asset-grid-wide">
        ${h.map(d=>{const f=ks(d),y=n.clubs.find(S=>S.clubId===d.id)?.stakePct??0,g=d.id===i.career?.clubId;return`<article class="f23-asset-card ${y?"is-owned":""}">
            <div class="f23-asset-art f23-asset-art-club" style="--asset:${j(d.colors?.primary??d.color,"#2c3b4a")}">${G(d,"is-large")}</div>
            <div class="f23-asset-copy"><span>${r(d.city??"—")}${g?" · YOUR CLUB":""}</span><h3>${r(d.name)}</h3><p>Valuation ${b(f,{compact:!0})} · you own ${r(y)}%</p></div>
            <div class="f23-asset-finance"><span>1% <b>${b(La(d,1),{compact:!0})}</b></span><span>5% <b>${b(La(d,5),{compact:!0})}</b></span><span>10% <b>${b(La(d,10),{compact:!0})}</b></span></div>
            <div class="f23-asset-buy f23-asset-buy-stakes">
              ${[1,5,10].map(S=>{const I=La(d,S);return`<button class="f23-mini-btn" type="button" data-action="shop-buy-club" data-club-id="${r(d.id)}" data-stake-pct="${r(S)}" ${e<I?"disabled":""}>${r(S)}% · ${b(I,{compact:!0})}</button>`}).join("")}
            </div>
          </article>`}).join("")}
      </div>
    </div>

    <div class="f23-panel f23-shop-section">
      <div class="f23-panel-head"><div><span>COMMERCIAL</span><b>BRANDS</b></div><span class="f23-small-chip">ROYALTIES</span></div>
      <div class="f23-asset-grid f23-asset-grid-wide">
        ${Ms.map(d=>{const f=p.has(d.id),y=Ls(d.price),g=e>=d.price;return`<article class="f23-asset-card ${f?"is-owned":""}">
            <div class="f23-asset-art f23-asset-art-brand" style="--asset:${j(d.color,"#3d6ea8")}">${Mt(d.name,"#ffffff")}</div>
            <div class="f23-asset-copy"><span>${r(d.sector)}</span><h3>${r(d.name)}</h3><p>${r(d.description)}</p></div>
            <div class="f23-asset-finance"><span>PRICE <b>${b(d.price)}</b></span><span>ROYALTY <b>${b(y)}/wk</b></span></div>
            <div class="f23-asset-buy"><b>${b(d.price,{compact:!0})}</b><button class="f23-mini-btn" type="button" data-action="shop-buy-brand" data-brand-id="${r(d.id)}" ${f||!g?"disabled":""}>${f?"OWNED":g?"BUY BRAND":"NEED MORE"}</button></div>
          </article>`}).join("")}
      </div>
    </div>

    <div class="f23-panel f23-shop-section f23-partner-wall">
      <div class="f23-panel-head"><div><span>SPONSOR MARKET</span><b>${r(ze.length)} REAL BRANDS</b></div><span class="f23-small-chip">LIVE OFFERS IN AGENT</span></div>
      <div class="f23-brand-wall">
        ${ze.map(d=>`<span class="f23-brand-wall-item" style="--brand:${j(d.color,"#ffffff")}"><b>${r(d.name)}</b><small>${r(d.tier)} · ${r(d.sector)}</small></span>`).join("")}
      </div>
      <p class="fine-print">Brands approach based on your overall and media reach. Signing terms run from one to three years and pay a weekly fee plus performance bonuses.</p>
    </div>

    <div class="f23-panel f23-shop-section f23-create-section">
      <div class="f23-panel-head"><div><span>CREATE YOUR OWN</span><b>BUILD A HOME OR LAUNCH A BRAND</b></div><span class="f23-small-chip">CUSTOM</span></div>
      <div class="f23-create-grid">
        <article class="f23-create-card">
          <h3>Design your own home</h3>
          <p>Choose a name, city and build budget. Bigger homes earn more rent but carry higher upkeep.</p>
          <label>HOME NAME<input id="f23-custom-house-name" maxlength="32" placeholder="e.g. The Glass House" /></label>
          <label>CITY<input id="f23-custom-house-city" maxlength="24" placeholder="e.g. Lisbon" /></label>
          <label>BUILD BUDGET<input id="f23-custom-house-budget" type="number" min="${As}" max="${Ss}" step="10000" value="1500000" /></label>
          <button class="f23-mini-btn" type="button" data-action="shop-build-house">BUILD HOME</button>
        </article>
        <article class="f23-create-card">
          <h3>Launch your own brand</h3>
          <p>Pick a sector and a launch budget. Your label pays a weekly royalty and appears in your portfolio.</p>
          <label>BRAND NAME<input id="f23-custom-brand-name" maxlength="28" placeholder="e.g. No. 10 Studio" /></label>
          <label>SECTOR<select id="f23-custom-brand-sector">${Ps.map(d=>`<option value="${r(d)}">${r(d)}</option>`).join("")}</select></label>
          <label>BRAND COLOUR<input id="f23-custom-brand-color" type="color" value="#3d6ea8" /></label>
          <label>LAUNCH BUDGET<input id="f23-custom-brand-budget" type="number" min="${Ns}" max="${Cs}" step="10000" value="500000" /></label>
          <button class="f23-mini-btn" type="button" data-action="shop-launch-brand">LAUNCH BRAND</button>
        </article>
      </div>
    </div>

    <div class="f23-panel f23-shop-section f23-portfolio-section">
      <div class="f23-panel-head"><div><span>PORTFOLIO</span><b>EVERYTHING YOU OWN</b></div><span class="f23-small-chip">WEEKLY ${b(n.weekly.net)}</span></div>
      <div class="f23-portfolio-grid">
        <div><span class="f23-kicker">HOMES</span>${n.houses.length?n.houses.map(d=>`<p><b>${r(d.name)}</b><small>${b(d.weeklyNet)}/wk net</small></p>`).join(""):'<p class="f23-asset-empty">No homes yet.</p>'}</div>
        <div><span class="f23-kicker">CLUB STAKES</span>${n.clubs.length?n.clubs.map(d=>`<p><b>${r(d.clubName)} · ${r(d.stakePct)}%</b><small>${b(d.weeklyDividend)}/wk</small></p>`).join(""):'<p class="f23-asset-empty">No club stakes yet.</p>'}</div>
        <div><span class="f23-kicker">BRANDS</span>${n.brands.length?n.brands.map(d=>`<p><b>${r(d.name)}</b><small>${b(d.weeklyIncome)}/wk</small></p>`).join(""):'<p class="f23-asset-empty">No brands yet.</p>'}</div>
        <div><span class="f23-kicker">AGENT</span>${n.activeAgent?`<p><b>${r(n.activeAgent.name)}</b><small>${r(n.activeAgent.agency)} · ${b(n.activeAgent.weeklyRetainer)}/wk</small></p>`:'<p class="f23-asset-empty">No upgraded agent.</p>'}</div>
      </div>
    </div>

    ${o.map(d=>`<div class="f23-panel f23-shop-section">
          <div class="f23-panel-head"><div><span>${r(d)}</span><b>${r(oe.filter(f=>f.category===d).length)} ITEMS</b></div><span class="f23-small-chip">CLUB SHOP</span></div>
          <div class="f23-shop-grid">
            ${oe.filter(f=>f.category===d).map(f=>{const y=Ds(f),g=f.kind==="item"&&a.has(f.templateId),S=e>=f.price;return`<article class="f23-shop-card ${g?"is-owned":""}">
                  <div class="f23-shop-art" style="--shop:${j(y?.color??"#c6ff45","#c6ff45")}">${R(f.kind==="item"?y?.slot==="boots"?"boot":y?.slot==="gloves"?"accessory":"kit":"skill")}</div>
                  <div class="f23-shop-copy"><span>${r(y?.rarity??(f.repeatable?"BOOST":"GEAR"))}</span><h3>${r(f.name)}</h3><p>${r(f.blurb)}</p></div>
                  <div class="f23-shop-buy"><b>${b(f.price)}</b><button class="f23-mini-btn" type="button" data-action="shop-buy" data-item-id="${r(f.id)}" ${g||!S?"disabled":""}>${g?"OWNED":S?"BUY":"TOO EXPENSIVE"}</button></div>
                </article>`}).join("")}
          </div>
        </div>`).join("")}
    <p class="fine-print">Purchases are saved instantly. Cosmetic items appear in CUSTOMISE → BOOTS or ACCESSORIES, where they can be equipped. Property, clubs, brands and agents pay out in the weekly portfolio settlement.</p>
  </section>`}function Mt(i,a="#f4f4f4",e=""){return`<span class="f23-brand-mark ${e}" style="--brand:${j(a,"#f4f4f4")}">${r(i)}</span>`}function $n(i,a){const e=Math.max(0,Ca(i,a)),t=Math.floor(e/365),n=Math.floor(e%365/30.44);return t<=0&&n<=0?`${e} day${e===1?"":"s"} remaining`:`${t}yr ${n}mth remaining`}function gn(i){const a=W(i),e=B(i),t=Ha(i),n=Ga(i),o=Fa(i),c=ft(i),p=Nt(i),v=Se(i)?.identity?.displayName??"Your agent",f=$t(i)?.displayName??"Your manager",y=(n.activeOffers??[]).slice(0,3),g=y.map(T=>T.club).filter(Boolean),S=c.active?.[0]??null,I=S?null:c.offers?.[0]??null,O=S??I,L=t?Math.max(0,Ca(i.career.date,t.endDate)):0,q=S?.remainingMonths!==void 0?`${S.yearsRemaining}yr ${S.remainingMonths}mth remaining`:"",$=t?$n(i.career.date,t.endDate):"No contract",C=g.length?g:(n.offers??[]).slice(0,3).map(T=>T.club).filter(Boolean);return`<section class="f23-page f23-agent-page span-2" data-career-page="agent" id="f23-agent" aria-label="Agent">
    ${pa("CAREER REPRESENTATION","Agent",`<span>${r(v)}</span><b>${r(e?.shortName??"PLAYER")} · ${r(i.career.season.label)}</b>`,'<button class="f23-mini-btn" type="button" data-action="career-page" data-page="shop">OPEN SHOP</button>')}
    <div class="f23-agent-status">
      <span class="f23-agent-portrait">${Ya({appearance:a?.appearance??{},position:a?.identity?.positions?.primary??"ST",club:{primary:e?.colors?.primary,secondary:e?.colors?.secondary,short:e?.shortName},name:ia(a),accent:"#65e6ff"})}</span>
      <div><span class="f23-kicker">${r(ia(a))}</span><b>${r(e?.name??"Free agent")}</b></div>
      <div class="f23-agent-status-meta"><span>NETWORK <b>${r(n.networkTrust??n.trust??50)}</b></span><span>OFFERS <b>${r(y.length)}</b></span><span>BANK <b>${b(i.finances?.balance??0,{compact:!0})}</b></span></div>
    </div>
    <div class="f23-agent-grid">
      <article class="f23-agent-card f23-agent-card-clubs">
        <header><h3>Player Agent</h3><span class="f23-agent-chip">${r(n.agentNetworkBonus>0?`+${n.agentNetworkBonus} NETWORK`:"REPRESENTATION")}</span></header>
        <p>Clubs Made Aware of Your Interest</p>
        <div class="f23-agent-clubs">
          ${C.length?C.map(T=>`<div class="f23-agent-club">${G(T,"is-large")}<span>${r(T.shortName??T.name)}</span></div>`).join(""):`<div class="f23-agent-club-empty">${R("search")}<span>No clubs yet</span></div>`}
        </div>
        ${y.length?`<div class="f23-agent-offer-list">${y.map(T=>`<div class="f23-agent-offer-row">
                    <span>${r(T.club?.shortName??"CLUB")}</span>
                    <b>${b(T.weeklyWage,{compact:!0})}/wk</b>
                    <button class="f23-mini-btn" type="button" data-action="transfer-review" data-offer-id="${r(T.id)}">REVIEW</button>
                  </div>`).join("")}</div>`:`<span class="f23-agent-awaiting">Awaiting Response</span>
               <button class="f23-mini-btn f23-agent-action" type="button" data-action="transfer-request" ${n.canRequest?"":"disabled"}>${n.canRequest?"ASK AGENT FOR OFFERS":r(n.reason??"WINDOW CLOSED")}</button>`}
        <div class="f23-agent-dots" aria-hidden="true"><span class="is-active"></span><span></span><span></span><span></span><span></span></div>
      </article>
      <article class="f23-agent-card f23-agent-card-chat">
        <header><h3>Chat With The Manager</h3><span class="f23-agent-chip">${r(f)}</span></header>
        <div class="f23-agent-chat-icon">${R("chat")}${R("chat")}</div>
        <p>Visit your manager’s office &amp; discuss transfers, loan requests, playtime, your contract &amp; captaincy.</p>
        <button class="f23-mini-btn f23-agent-action" type="button" data-action="career-page" data-page="mypro">OPEN MANAGER CHAT</button>
        <span class="f23-small-chip">MATCHDAY CONVERSATIONS</span>
      </article>
      <article class="f23-agent-card f23-agent-card-contract">
        <header><h3>My Contract</h3><span class="f23-agent-chip">${r(t?.status?.toUpperCase()??"NO DEAL")}</span></header>
        <div class="f23-agent-contract-icon">${R("contract")}</div>
        <span class="f23-agent-label">Current Deal</span>
        ${t?`<div class="f23-agent-deal"><b>${b(t.weeklyWage)} <small>p/w</small></b><span>${r($)}</span></div>
               <div class="f23-agent-deal-meta"><span>${r(e?.shortName??"CLUB")}</span><span>${r(t.endDate??"—")}</span></div>`:'<div class="f23-agent-deal"><b>No contract</b><span>Your agent is working on it.</span></div>'}
        ${o?.available?`<button class="f23-mini-btn f23-agent-action" type="button" data-action="contract-accept">SIGN RENEWAL · ${b(o.weeklyWage,{compact:!0})}/wk</button>`:`<span class="f23-agent-note">${r(o?.reason??"Renewal talks are not open yet.")}</span>`}
        <div class="f23-agent-dots" aria-hidden="true"><span class="is-active"></span><span></span><span></span></div>
      </article>
      <article class="f23-agent-card f23-agent-card-sponsor">
        <header><h3>Sponsors</h3><span class="f23-agent-chip">${r(c.active?.length?`${c.active.length}/${c.maxActive} ACTIVE`:"COMMERCIAL")}</span></header>
        ${O?`<div class="f23-agent-sponsor-mark">${Mt(O.name,O.color,"is-large")}</div>
               <div class="f23-agent-deal"><b>${b(O.weeklyPay)} <small>p/w</small></b><span>${r(S?q:`${O.durationYears??Math.round((O.durationWeeks??52)/52)}yr deal`)}</span></div>
               <div class="f23-agent-deal-meta"><span>${r(O.tier??"BRAND")}</span><span>${r(O.sector??"PARTNER")}</span></div>
               ${S?`<span class="f23-small-chip">SIGNED · ${b(S.signingBonus,{compact:!0})} BONUS</span>`:`<button class="f23-mini-btn f23-agent-action" type="button" data-action="sponsor-sign" data-offer-id="${r(O.id)}">SIGN ${b(O.signingBonus,{compact:!0})} BONUS</button>`}`:`<div class="f23-agent-sponsor-empty">${R("briefcase")}<span>No live sponsor offers</span><small>Build your profile and media reach to attract brands.</small></div>`}
        <div class="f23-agent-dots" aria-hidden="true"><span class="is-active"></span><span></span><span></span></div>
      </article>
    </div>
    <div class="f23-agent-footer">
      <div class="f23-agent-portfolio-head"><span class="f23-kicker">YOUR PORTFOLIO</span><b>${b(p.totalInvested,{compact:!0})} invested</b></div>
      <div class="f23-agent-portfolio-stats">
        <span><small>HOMES</small><b>${r(p.houses.length)}</b></span>
        <span><small>CLUB STAKES</small><b>${r(p.clubs.length)}</b></span>
        <span><small>BRANDS</small><b>${r(p.brands.length)}</b></span>
        <span><small>WEEKLY NET</small><b class="${p.weekly.net>=0?"is-positive":"is-negative"}">${b(p.weekly.net,{compact:!0})}</b></span>
      </div>
      <button class="f23-sim-btn" type="button" data-action="career-page" data-page="shop">SHOP</button>
    </div>
    ${L===0&&t?'<p class="fine-print">Your contract has expired. Renewal talks are urgent.</p>':""}
  </section>`}const yn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},s=i=>String(i??"").replace(/[&<>"']/g,a=>yn[a]),$a=Rt;function oa(i,a="#1d2b27"){return/^#[0-9a-f]{3,8}$/i.test(String(i??""))?i:a}function xa(i){const a=Number(i)||0;return a<=0?"—":a<1024?`${a} B`:a<1024*1024?`${Math.round(a/102.4)/10} KB`:`${Math.round(a/104857.6)/10} MB`}function me(i){if(!i)return"not saved";const a=new Date(i).getTime();if(!Number.isFinite(a))return"unknown";const e=Date.now()-a;return e<45e3?"just now":e<36e5?`${Math.max(1,Math.round(e/6e4))} min ago`:e<864e5?`${Math.round(e/36e5)} hr ago`:new Date(i).toLocaleDateString("en-GB",{day:"numeric",month:"short"})}function En(i){if(!i)return"—";const a=new Date(i);return Number.isNaN(a.getTime())?"—":a.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}function Tn(i,a){if(!i)return"";const t=Array.isArray(a.table)?a.table:[],n=[...(i.honours??[]).map(o=>`<span class="season-honour trophy">${s(o.label)}</span>`),...(i.awards??[]).map(o=>`<span class="season-honour award" title="${s(o.detail??"")}">${s(o.label)}</span>`)];return`<section class="career-panel span-2 season-review-panel" data-career-page="central">
    <div class="panel-head">
      <h3>Season review</h3>
      <span class="hint">${s(i.season)} COMPLETE · ${s(i.played)} MATCHES</span>
    </div>
    <div class="season-review-hero">
      <div class="season-finish">
        <span>FINAL LEAGUE POSITION</span>
        <b>${s(Ea(i.position))}</b>
        <small>${s(i.won)}W ${s(i.drawn)}D ${s(i.lost)}L · ${s(i.points)} PTS · ${s(i.goalDifference>=0?"+":"")}${s(i.goalDifference)} GD</small>
      </div>
      <div class="season-champion">
        <span>${i.championName?"LEAGUE CHAMPIONS":"SEASON COMPLETE"}</span>
        <b>${s(i.championName??"No final table")}</b>
        <small>${s(i.leagueName)} · ${s(i.clubName)} finished ${s(Ea(i.position))}${i.movement==="promoted"?' · <strong class="season-movement promoted">PROMOTED</strong>':i.movement==="relegated"?' · <strong class="season-movement relegated">RELEGATED</strong>':""}</small>
      </div>
      <div class="season-player">
        <span>YOUR CAMPAIGN</span>
        <b>${s(i.user.goals)} G · ${s(i.user.assists)} A</b>
        <small>${s(i.user.appearances)} APP · ${s(i.user.minutes)} MIN · ${i.user.rating?`${i.user.rating.toFixed(2)} AVG`:"NO RATING"}</small>
      </div>
    </div>
    <div class="season-review-body">
      <div class="season-table-wrap">
        <div class="season-table-head"><span>#</span><span>CLUB</span><span>P</span><span>GD</span><span>PTS</span></div>
        <div class="season-table">
          ${t.map(o=>`<div class="season-table-row ${o.clubId===i.clubId?"is-user":""}">
                <span>${s(o.position)}</span>
                <b>${s(o.club?.name??o.clubId)}</b>
                <span>${s(o.played)}</span>
                <span>${s(o.goalDifference>=0?"+":"")}${s(o.goalDifference)}</span>
                <strong>${s(o.points)}</strong>
              </div>`).join("")}
        </div>
      </div>
      <div class="season-honours-block">
        <span class="season-kicker">HONOURS &amp; AWARDS</span>
        <div class="season-honour-list">
          ${n.length?n.join(""):'<span class="season-honour none">No silverware this season</span>'}
        </div>
        <p class="fine-print">The final table, your season statistics and any honours are archived when you start the next campaign.</p>
      </div>
    </div>
    <div class="season-review-actions">
      <button class="btn btn-primary" type="button" data-action="next-season" ${a.canStartNext?"":"disabled"}>
        START ${s(a.nextSeasonLabel)} SEASON →
      </button>
      <span class="inline-note">Archiving resets season stats, board targets and the fixture list. Career totals and match history stay.</span>
    </div>
  </section>`}function An(i){const a=Array.isArray(i.history)?i.history:[];if(!a.length)return"";const e=Array.isArray(i.trophies)?i.trophies:[],t=Array.isArray(i.awards)?i.awards:[];return`<section class="career-panel span-2 season-history-panel" data-career-page="central">
    <div class="panel-head">
      <h3>Honours &amp; past seasons</h3>
      <span class="hint">${s(a.length)} SEASON${a.length===1?"":"S"} · ${s(e.length)} TROPH${e.length===1?"Y":"IES"}</span>
    </div>
    <div class="season-honour-list">
      ${e.length?e.slice(0,6).map(n=>`<span class="season-honour trophy">${s(n.season)} · ${s(n.label)}</span>`).join(""):'<span class="season-honour none">No trophies yet</span>'}
      ${t.slice(0,4).map(n=>`<span class="season-honour award">${s(n.season)} · ${s(n.label)}</span>`).join("")}
    </div>
    <div class="season-history-list">
      ${a.slice(0,5).map(n=>`<div class="season-history-row">
        <div><b>${s(n.season)}</b><small>${s(n.clubName??"—")} · ${s(n.leagueName??"—")}${n.movement==="promoted"?" · PROMOTED":n.movement==="relegated"?" · RELEGATED":""}${n.development?.user?.changes?.length?` · OVR ${s(n.development.user.overallBefore)} → ${s(n.development.user.overallAfter)}`:""}</small></div>
        <div><span>FINISH</span><b>${s(Ea(n.position))}</b></div>
        <div><span>POINTS</span><b>${s(n.points??0)}</b></div>
        <div><span>PLAYER</span><b>${s(n.user?.goals??0)} G · ${s(n.user?.assists??0)} A</b></div>
        <div class="season-history-champion"><span>CHAMPION</span><b>${s(n.championName??"—")}</b></div>
        ${n.development?.user?.changes?.length?`<div class="season-development-line">
              <span>PHYSICAL DECLINE</span>
              <b>${n.development.user.changes.map(o=>`${s(ca[o.key]?.label??o.key)} ${s(o.from)} → ${s(o.to)}`).join(" · ")}</b>
            </div>`:""}
        ${n.development?.turnover&&(n.development.turnover.playersRetired||n.development.turnover.youthIntake)?`<div class="season-turnover-line">
              <span>SQUAD TURNOVER</span>
              <b>${s(n.development.turnover.playersRetired)} retired · ${s(n.development.turnover.youthIntake)} academy graduates</b>
            </div>`:""}
      </div>`).join("")}
    </div>
    <p class="fine-print">Every completed season is kept here with its final table finish, player totals and honours.</p>
  </section>`}function M(i,a,e="",t=""){return`<div class="stat-tile ${t}"><span>${s(i)}</span><b>${s(a)}</b>${e?`<small>${s(e)}</small>`:""}</div>`}function ot(i,a,e){const t=Math.max(0,Math.min(100,Math.round(Number(a)||0)));return`<div class="media-meter"><div><span>${s(i)}</span><b>${s(t)}</b></div><div class="media-meter-track"><i style="width:${t}%"></i></div><small>${s(e)}</small></div>`}function ct(i={}){const a={media:"MEDIA",supporter:"FANS",morale:"MORALE",journalistTrust:"PRESS TRUST",journalistAffinity:"PRESS RAPPORT",managerTrust:"MANAGER TRUST",managerRespect:"MANAGER RESPECT"};return Object.entries(i).filter(([,e])=>Number(e?.delta)!==0).map(([e,t])=>`${a[e]??e.toUpperCase()} ${t.delta>0?"+":""}${t.delta}`).join(" · ")}function Y(i,a=""){const e=oa(i?.colors?.primary??i?.color,"#1d2b27"),t=oa(i?.colors?.secondary,"#ffffff");return`<span class="mini-crest ${a}" style="--crest:${e};--crest-ink:${t}">${s(i?.shortName??i?.short??"—")}</span>`}function Ea(i){const a=Number(i);if(!Number.isInteger(a)||a<=0)return"—";const e=a%100;return e>=11&&e<=13?`${a}th`:`${a}${a%10===1?"st":a%10===2?"nd":a%10===3?"rd":"th"}`}function dt(i=[]){return[...Array(Math.max(0,5-i.length)).fill(null),...i.slice(-5)].map(e=>e?`<span class="form-dot ${e.toLowerCase()}" title="${s(e)}">${s(e)}</span>`:'<span class="form-dot empty" aria-hidden="true">·</span>').join("")}function Sn(i,a=!1){return i.values.map(({key:e,value:t})=>{const n=t>=82?"elite":t>=72?"good":t>=60?"ok":"low",o=ca[e]?.label??e,c=t>=99;return`<div class="attr-row ${a?"has-action":""}"><span>${s(o)}</span><div class="attr-bar"><i class="${n}" style="width:${Math.max(2,Math.min(100,Number(t)||0))}%"></i></div><b>${s(t)}</b>${a?`<button class="attr-spend" type="button" data-action="upgrade-attribute" data-key="${s(e)}" aria-label="Spend one point on ${s(o)}" ${c?"disabled":""} title="${c?"Attribute maxed":"Spend 1 development point"}">+</button>`:""}</div>`}).join("")}class Nn{constructor({engine:a,screens:e,storage:t,onPlayMatch:n=null,onSimulateMatch:o=null}){if(this.engine=a,this.screens=e,this.storage=t,this.onPlayMatch=n,this.onSimulateMatch=o,this.mounted=!1,this.view="slots",this.activePage="central",this.confirmDeleteId=null,this.confirmDeleteCareer=!1,this.confirmReload=!1,this.fifaTabs={mypro:"growth",season:"calendar",customise:"overview"},this.fifaSocialPlatform="wire",this.adminUnlocked=!1,this.fifaCalendar=null,this.fifaSelectedDate=null,this.fifaPadState={left:!1,right:!1,up:!1,down:!1,accept:!1},this.pendingRecovery=null,this.lastLoadError=null,this.toastTimer=null,this.confirmTimer=null,this.lastSavedBytes=null,this.lastSavedFor=null,this.lastSaves=[],this.lastVerify=null,this.centralSimTimer=null,this.unsubscribers=[],this.el={career:document.getElementById("career"),back:document.getElementById("careerBack"),slots:document.getElementById("careerSlots"),hub:document.getElementById("careerHub"),warnings:document.getElementById("careerWarnings"),headerSub:document.getElementById("careerHeaderSub"),storageChip:document.getElementById("careerStorageChip"),statusChip:document.getElementById("careerStatusChip"),toast:document.getElementById("careerToast"),createModal:document.getElementById("createCareerModal"),playerCreator:document.getElementById("playerCreator"),renameModal:document.getElementById("renamePlayerModal"),renameForm:document.getElementById("renamePlayerForm"),renameError:document.getElementById("renamePlayerError"),renameFirstName:document.getElementById("renameFirstName"),renameLastName:document.getElementById("renameLastName"),renameKnownAs:document.getElementById("renameKnownAs"),matchReportModal:document.getElementById("matchReportModal"),matchReportBody:document.getElementById("matchReportBody"),contractModal:document.getElementById("contractModal"),contractModalBody:document.getElementById("contractModalBody"),contractModalActions:document.getElementById("contractModalActions"),transferModal:document.getElementById("transferModal"),transferModalBody:document.getElementById("transferModalBody"),transferModalActions:document.getElementById("transferModalActions"),mediaModal:document.getElementById("mediaModal"),mediaModalBody:document.getElementById("mediaModalBody"),mediaModalActions:document.getElementById("mediaModalActions")},!this.el.career)throw new Error("Career screen is missing from the document.");if(!this.el.playerCreator)throw new Error("Player creation mount is missing from the document.");this.creator=new qs({mount:this.el.playerCreator,onCancel:()=>this.closeCreate(),onSubmit:c=>this.createCareer(c)}),this.bind()}bind(){this.el.career.addEventListener("click",a=>this.handleClick(a)),this.el.renameForm.addEventListener("submit",a=>this.handleRenameSubmit(a)),this.el.createModal.addEventListener("mousedown",a=>{a.target===this.el.createModal&&this.closeCreate()}),this.el.renameModal.addEventListener("mousedown",a=>{a.target===this.el.renameModal&&this.closeRename()}),this.el.matchReportModal.addEventListener("mousedown",a=>{a.target===this.el.matchReportModal&&this.closeMatchReport()}),this.el.contractModal.addEventListener("mousedown",a=>{a.target===this.el.contractModal&&this.closeContractTalks()}),this.el.transferModal.addEventListener("mousedown",a=>{a.target===this.el.transferModal&&this.closeTransferOffer()}),this.el.mediaModal.addEventListener("mousedown",a=>{a.target===this.el.mediaModal&&this.closeMediaPress()}),this.el.hub.addEventListener("keydown",a=>{a.key==="Enter"&&a.target?.id==="adminCode"&&(a.preventDefault(),this.unlockAdmin())}),document.addEventListener("keydown",a=>{!this.mounted||a.key!=="Escape"||(this.el.createModal.classList.contains("hidden")?this.el.renameModal.classList.contains("hidden")?this.el.matchReportModal.classList.contains("hidden")?this.el.contractModal.classList.contains("hidden")?this.el.transferModal.classList.contains("hidden")?this.el.mediaModal.classList.contains("hidden")||this.closeMediaPress():this.closeTransferOffer():this.closeContractTalks():this.closeMatchReport():this.closeRename():this.closeCreate())}),document.addEventListener("keydown",a=>this.handleCareerKey(a)),this.startGamepadNavigation(),this.unsubscribers.push(this.engine.subscribe(a=>this.handleEngineChange(a)),this.engine.on("save",a=>this.handleEngineSave(a)),this.engine.on("error",a=>{this.mounted&&(a?.message&&this.toast(a.message,"error"),this.refreshHeader())}))}onEnter(){this.mounted=!0,this.view=this.engine.active?"hub":"slots",this.render()}onExit(){this.stopCentralSim({render:!1}),this.mounted=!1,this.closeCreate(),this.closeRename(),this.closeMatchReport(),this.closeContractTalks(),this.closeTransferOffer(),this.closeMediaPress(),this.pendingRecovery=null,this.confirmDeleteId=null,this.confirmDeleteCareer=!1,this.confirmReload=!1,clearTimeout(this.confirmTimer),this.hideToast()}refresh(){this.render()}openSlots(){this.mounted&&(this.stopCentralSim({render:!1}),this.view="slots",this.confirmDeleteId=null,this.confirmDeleteCareer=!1,this.render(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.el.slots.querySelector(".saves-panel")?.scrollIntoView({block:"start",behavior:"auto"})})}))}openNewCareer(){this.mounted&&(this.view="slots",this.render(),this.openCreate())}handleEngineChange(a){this.mounted&&(a?.source==="created"||a?.source==="loaded"||a?.source==="reloaded"||a?.source==="recovered"?(this.stopCentralSim({render:!1}),this.view="hub",this.pendingRecovery=null,this.lastLoadError=null,this.confirmReload=!1,this.lastSavedBytes=null,this.lastSavedFor=null,this.adminUnlocked=!1):(a?.source==="closed"||a?.source==="deleted")&&(this.stopCentralSim({render:!1}),this.view="slots",this.adminUnlocked=!1,this.confirmDeleteCareer=!1,this.confirmDeleteId=null),this.render())}handleEngineSave(a){this.mounted&&(Number.isFinite(a?.summary?.bytes)&&(this.lastSavedBytes=a.summary.bytes,this.lastSavedFor=this.engine.activeSaveId),this.refreshHeader())}render(){this.mounted&&(this.engine.active||(this.view="slots",this.confirmDeleteCareer=!1),this.el.slots.classList.toggle("hidden",this.view!=="slots"),this.el.hub.classList.toggle("hidden",this.view!=="hub"),this.view==="hub"&&this.engine.active?this.renderHub():this.renderSlots(),this.refreshHeader())}refreshHeader(){const a=this.engine.getStatus(),e=this.engine.getState();if(this.el.storageChip.textContent=this.storage.durable?"DEVICE SAVE":"SESSION ONLY",this.el.storageChip.classList.toggle("warn",!this.storage.durable),e){const t=B(e),n=e.world.players[e.career.playerId]?.identity?.positions?.primary;this.el.headerSub.textContent=`${t?.shortName??"—"} · ${e.career.season.label} · ${n??"—"}`,a.dirty?(this.el.statusChip.textContent="UNSAVED CHANGES",this.el.statusChip.classList.add("warn")):(this.el.statusChip.textContent=a.lastSavedAt?`SAVED ${En(a.lastSavedAt)}`:"SAVED",this.el.statusChip.classList.remove("warn"))}else this.el.headerSub.textContent="CAREER DATA",this.el.statusChip.textContent="NO CAREER OPEN",this.el.statusChip.classList.remove("warn")}renderAlerts(a=[]){const e=[];this.storage.durable||e.push({tone:"warn",title:"Session-only storage",body:this.storage.warning??"Careers will not survive a page reload in this browser."});const t=this.engine.getStatus();t.lastError&&e.push({tone:"danger",title:"Save problem",body:t.lastError});for(const n of[...new Set(a)])e.push({tone:"warn",title:"Storage notice",body:n});this.pendingRecovery&&e.push({tone:"danger",title:"This career is damaged",body:"The primary save failed its checksum. A verified backup from the previous save is available.",action:{label:"RECOVER BACKUP",action:"recover",saveId:this.pendingRecovery.saveId}}),this.el.warnings.innerHTML=e.map(n=>`<div class="career-alert ${n.tone}">
          <div><strong>${s(n.title)}</strong><p>${s(n.body)}</p></div>
          ${n.action?`<button class="btn btn-small" data-action="${s(n.action.action)}" data-save-id="${s(n.action.saveId)}">${s(n.action.label)}</button>`:""}
        </div>`).join("")}renderSlots(){const{saves:a,warnings:e}=this.engine.listSaves();this.lastSaves=a,this.renderAlerts(e);const t=a.reduce((o,c)=>o+(Number(c.bytes)||0),0),n=a.length?a.map(o=>this.saveCard(o)).join(""):`<div class="empty-careers">
          <div class="empty-mark">+</div>
          <h3>No careers yet</h3>
          <p>Create a player to generate the complete football world: hundreds of clubs, thousands of players, fixtures, contacts and a contract.</p>
          <button class="btn btn-primary" data-action="new">CREATE YOUR FIRST CAREER</button>
        </div>`;this.el.slots.innerHTML=`
      <div class="slots-hero">
        <div class="slots-hero-copy">
          <div class="eyebrow">PLAYER CREATION · CAREER DATA</div>
          <h2>Build a player.<br /><em>Commit a world.</em></h2>
          <p>
            Five choices and a final review shape your footballer: identity, position, appearance,
            background and club. Behind the save sits a complete football world — a contract, a squad,
            a city network and a calendar. Create your player, then prove the world survives a reload.
          </p>
          <div class="slots-hero-actions">
            <button class="btn btn-primary btn-lg" data-action="new">+ NEW CAREER</button>
            <button class="btn" data-action="refresh">REFRESH DATA</button>
          </div>
          <div class="foundation-stamp">
            <span class="live-dot"></span>
            SAVE ENGINE ONLINE · CHECKSUMMED · MULTI-SLOT
          </div>
        </div>
        <div class="slots-metrics">
          ${M("CAREER SAVES",String(a.length),"on this device")}
          ${M("DATA USED",xa(t),"compressed saves")}
          ${M("STORAGE",this.storage.durable?"DEVICE":"SESSION",this.storage.durable?"survives reload":"this tab only",this.storage.durable?"":"warn")}
          ${M("SAVE SCHEMA",`v${_e}`,"checksum verified")}
        </div>
      </div>

      <div class="career-panel saves-panel">
        <div class="panel-head">
          <h3>Career saves</h3>
          <span class="hint" id="saveCount">${a.length} SAVED</span>
        </div>
        <div class="save-grid" id="saveGrid">${n}</div>
      </div>

      <div class="foundation-grid">
        <article class="foundation-card">
          <span>FOUNDATION READY</span>
          <h4>Every save is a full career</h4>
          <p>Create, rename, set a shirt number, advance the calendar, collect wages and equipment, then reload the exact same world.</p>
        </article>
        <article class="foundation-card">
          <span>PROTECTED</span>
          <h4>Compression + checksums</h4>
          <p>Careers compress to roughly one tenth of their raw size. A rotated backup means one bad write cannot end a career.</p>
        </article>
        <article class="foundation-card">
          <span>CREATION READY</span>
          <h4>Six steps. One player.</h4>
          <p>Identity, position, appearance, background, club and review are live. The creator writes directly into the same career save and world shown below.</p>
        </article>
      </div>
    `}saveCard(a){const e=a.id===this.engine.activeSaveId,t=this.confirmDeleteId===a.id,n=oa(a.clubColors?.primary,"#28573f"),o=oa(a.clubColors?.secondary,"#ffffff");return`<article class="save-card ${e?"active":""}" data-save-card="${s(a.id)}">
      <div class="save-crest" style="--crest:${n};--crest-ink:${o}">${s(a.clubShort??"—")}</div>
      <div class="save-main">
        <div class="save-kicker">${s(a.position??"—")} · #${s(a.squadNumber??"—")} · ${s(a.age??"—")} YRS · ${s(a.nationalityName??a.nationality??"—")}</div>
        <h3>${s(a.playerName??a.name)}</h3>
        <p class="save-club">${s(a.clubName??"Unknown club")} · ${s(a.season??"—")}</p>
        <div class="save-chips">
          <span class="ovr-chip">${s(a.overall??"—")} OVR</span>
          <span class="potential-chip">POT ${s(a.potential??"—")}</span>
          <span>${xa(a.bytes)}</span>
          <span>${s(a.date?A(a.date):"")}</span>
        </div>
        <div class="save-updated">Updated ${s(me(a.updatedAt))}${e?" · <b>open career</b>":""}</div>
      </div>
      <div class="save-actions">
        <button class="btn btn-primary btn-small" type="button" data-action="${e?"resume":"load"}" data-save-id="${s(a.id)}">${e?"RESUME":"LOAD"}</button>
        <button class="btn btn-small btn-danger-ghost" type="button" data-action="delete" data-save-id="${s(a.id)}">${t?"CONFIRM DELETE":"DELETE"}</button>
      </div>
    </article>`}renderHub(){this.renderAlerts();const a=this.engine.getState(),e=W(a),t=B(a),n=_(a),o=Ha(a),c=Fa(a),p=Ga(a),h=p.activeOffers,v=vt(a),d=v.doneToday?`PLAN SET · ${v.wellbeing} WELLBEING`:`ONE ACTIVITY · ${v.wellbeing} WELLBEING`,f=p.window.open?`${p.window.shortLabel} · ${p.window.daysRemaining} DAY${p.window.daysRemaining===1?"":"S"}`:"WINDOW CLOSED",y=e?.identity?.positions?.primary??"—",g=ye[y]?.label??y,S=Ee[e?.identity?.nationality],I=Sa(e,a.career.date),O=o?Math.max(0,Ca(a.career.date,o.endDate)):0,L=ya.find(l=>l.id===o?.squadRole)?.label??o?.squadRole??"—",q=e?.nationalTeamId?a.world.nationalTeams[e.nationalTeamId]?.name:null,$=Xa(e),C=xs(a),T=Na(a),K=na(a,T),P=a.career.matchHistory?.length?a.career.matchHistory[a.career.matchHistory.length-1]:null,N=P?a.world.clubs[P.homeClubId===t.id?P.awayClubId:P.homeClubId]:null,ra=P?P.homeClubId===t.id?P.homeGoals:P.awayGoals:0,za=P?P.homeClubId===t.id?P.awayGoals:P.homeGoals:0,we=Et(a,{limit:5}),z=Ka(a),Lt=z.rating?z.rating.toFixed(2):"—",k=Je(a),E=ps(a),x=hs(a),F=ft(a),X=qa(a),Ta=ve(a),Ie=Ta.summary,la=X.board,D=us(a),m=Ba(a),Q=D.team,ha=D.nextTournamentFixture??D.nextFixture,Oe=D.recent??[],ke=k.journalist?.name??"The Touchline",Pt=ke.split(" ").map(l=>l[0]).slice(0,2).join(""),Ia=$t(a),Qa=fe(a),Me=Qa?le(a,Qa.id):null,ua=Se(a),Le=ua?le(a,ua.id):null,Oa=ua?.identity?.displayName??ua?.identity?.firstName??"Your agent",Dt=Oa.split(/\s+/).map(l=>l[0]).slice(0,2).join("").toUpperCase(),Ja=F.active?.[0]??null,Pe=Te(a,{limit:4}),ae=ms(a),De=Tt(a),xe=At(a),ee=mt(a,{limit:3}),xt=(a.career.notifications??[]).filter(l=>!l.read).length,Fe=bs(a,10),Ft=gt(e),ma=e.development?.skillPoints??0,te=ma>0&&e.overall<e.potential,Ue=bt(a),Ut=Ue.filter(l=>l.available).length,se=yt(a),Bt=se.filter(l=>l.unlocked).length,Ht=Math.round(Number(e.condition?.fitness??100)),Aa=wa(a)??[],ea=Aa.find(l=>l.clubId===t.id)??null,ta=Aa.reduce((l,w)=>Math.max(l,w.played),0),Be=h.map(l=>l.club).filter(Boolean),He=(Be.length?Be:Aa.map(l=>l.club).filter(Boolean)).slice(0,3),ka=X.tablePosition??ea?.position??null,Ge=ta&&ka?`${Ea(ka)} in the table`:"Pre-season",Ye=Math.max(0,Math.round(O/30.44)),Gt=o?`${Math.floor(Ye/12)}y ${Ye%12}m remaining`:"No contract",Yt=Qa?.identity?.displayName??Ia?.displayName??"Club manager",Ve=c?.status==="renewed"?"New Contract Secured":"Earn New Contract",ba=vs(a),je=ut.find(l=>l.id===a.settings.difficulty)?.label??a.settings.difficulty;Ta.complete||`${X.achieved}${X.objectives.length}`,`${ae.length}`,p.window.open,this.syncSaveBytes();const Ma=e?.identity?.knownAs,Vt=Ma&&Ma!==e?.identity?.lastName&&Ma!==e?.identity?.firstName,jt=ia(e),We=T?`${T.userIsHome??T.homeClubId===t.id?"vs":"at"} ${K?.name??"TBC"}`:"No fixture scheduled",qe=T?`${A(T.date)} · ${T.competitionName} · ${T.roundName??`Round ${T.round}`}`:"Advance the calendar to the season start.";this.el.hub.classList.toggle("is-calendar-simming",!!this.centralSimTimer),this.el.hub.innerHTML=`
${Zs(a,{activePage:this.activePage})}
      <div class="hub-dashboard f23-legacy-dashboard ${this.activePage==="central"?"":"hidden"}">
      <section class="hub-hero">
        <div class="hub-identity">
          <div class="ovr-orb" style="--ovr:${Wa(e.overall)}">
            <b>${s(e.overall)}</b><span>OVR</span>
          </div>
          <div class="hub-name">
            <div class="eyebrow">${s(y)} · ${s(S?.name??"—")} · #${s(e.squadNumber??"—")} · ${s(I)} YRS</div>
            <h2>${s(jt)}${Vt?` <em>“${s(Ma)}”</em>`:""}</h2>
            <p>
              ${Y(t)}
              <strong>${s(t.name)}</strong>
              <span>${s(n?.name??"—")}</span>
              <span>${s(a.career.season.label)}</span>
            </p>
          </div>
        </div>
        <div class="hub-actions">
          <button class="btn btn-small" type="button" data-action="slots">ALL CAREERS</button>
          <button class="btn btn-small" type="button" data-action="rename">EDIT PROFILE</button>
          <button class="btn btn-small" type="button" data-action="appearance">EDIT APPEARANCE</button>
          <button class="btn btn-primary btn-small" type="button" data-action="save-now">SAVE NOW</button>
        </div>
      </section>

      <section class="central-actions" aria-label="Career actions">
        <article class="central-card central-agent">
          <div class="central-card-head">
            <span class="central-card-icon">A</span>
            <div><small>PLAYER AGENT</small><h3>${s(Oa)}</h3></div>
            <span class="central-card-badge">${h.length} LIVE</span>
          </div>
          <div class="central-crest-row">
            ${He.length?He.map(l=>Y(l,"central-crest")).join(""):'<span class="central-empty-crest">NO CLUBS YET</span>'}
          </div>
          <p>${h.length?"Clubs have made their interest known. Review the offers before the window moves on.":"Your agent is working the phones. Keep performing and the right club will call."}</p>
          <div class="central-card-foot"><span>${s(f)}</span><button class="central-link" type="button" data-action="career-page" data-page="agent">AGENT OFFICE →</button></div>
        </article>

        <article class="central-card central-manager">
          <div class="central-card-head">
            <span class="central-card-icon">C</span>
            <div><small>CHAT WITH THE MANAGER</small><h3>${s(Yt)}</h3></div>
            <span class="central-card-badge">${s(Me?.trust??"—")} TRUST</span>
          </div>
          <div class="central-chat-preview"><span>MANAGER</span><p>“${Me?.trust>=60?"You have earned my trust. Keep setting the standard for the group.":"Show me you can handle the pressure. The next team sheet is earned, not given."}”</p></div>
          <p>Visit your manager's office to discuss transfers, loans, playing time and captaincy.</p>
          <div class="central-card-foot"><span>${s(x.moraleLabel)} · SQUAD MORALE ${s(x.morale)}</span><button class="central-link" type="button" data-action="career-page" data-page="central">MANAGER OFFICE →</button></div>
        </article>

        <article class="central-card central-contract">
          <div class="central-card-head">
            <span class="central-card-icon">§</span>
            <div><small>MY CONTRACT</small><h3>${b(o?.weeklyWage??0)} <em>/ wk</em></h3></div>
            <span class="central-card-badge">${s(c.statusLabel??"CURRENT DEAL")}</span>
          </div>
          <div class="central-contract-row">
            <div><span>REMAINING</span><b>${s(Gt)}</b></div>
            <div><span>SQUAD ROLE</span><b>${s(L)}</b></div>
          </div>
          <p>Deal expires ${A(o?.endDate)}. ${c.available?"The agent has an extension ready to review.":"Keep performing to strengthen your position at the table."}</p>
          <div class="central-card-foot"><span>${s(c.agentName??Oa)}</span>${c.available?'<button class="central-link" type="button" data-action="contract-talks">OPEN TALKS →</button>':'<button class="central-link" type="button" data-action="career-page" data-page="central">VIEW CONTRACT →</button>'}</div>
        </article>

        <article class="central-card central-sponsors">
          <div class="central-card-head">
            <span class="central-card-icon">S</span>
            <div><small>SPONSORS</small><h3>${s(Ja?.name??"No active deal")}</h3></div>
            <span class="central-card-badge">${F.active.length}/${F.maxActive} ACTIVE</span>
          </div>
          <div class="central-sponsor-row">
            <div><span>SPONSOR INCOME</span><b>${b(F.weeklySponsorIncome,{compact:!0})} <em>/ wk</em></b></div>
            <div><span>ON THE TABLE</span><b>${F.offers.length} <em>offers</em></b></div>
          </div>
          <p>${F.offers.length?"Brands are ready to talk. Sign a deal to add weekly income to your contract.":"No offers right now. Keep your profile rising and the brands will find you."}</p>
          <div class="central-card-foot"><span>${Ja?`${s(Ja.weeksRemaining)} weeks left`:"NO DEAL"}</span><button class="central-link" type="button" data-action="career-page" data-page="central">SPONSOR DESK →</button></div>
        </article>
      </section>

      <section class="central-path-strip">
        <div class="central-path-copy">
          <span>YOUR PATH · ${s(a.career.season.label)}</span>
          <h3>${s(Ve)}</h3>
          <p>${X.achieved} of ${X.objectives.length} targets met. The board expects a top-${s(la?.targetPosition??10)} finish.</p>
        </div>
        <div class="central-path-meter">
          <div><span>BOARD CONFIDENCE</span><b>${s(la?.confidence??0)}%</b></div>
          <div class="central-path-track"><i style="width:${Math.max(0,Math.min(100,la?.confidence??0))}%"></i></div>
          <small>${ta?`Currently ${s(Ge)}`:"Season not started"}</small>
        </div>
        <button class="central-path-button" type="button" data-action="career-page" data-page="mypro">VIEW YOUR PATH →</button>
      </section>

      <div class="hub-metrics">
        ${M("POSITION",y,g)}
        ${M("POTENTIAL",String(e.potential),fs(e.potential).label)}
        ${M("MARKET VALUE",b(e.marketValue,{compact:!0}),"estimated")}
        ${M("WEEKLY WAGE",b(o?.weeklyWage??0,{compact:!0}),"contract")}
        ${M("BANK BALANCE",b(a.finances.balance,{compact:!0}),"personal")}
        ${M("LEVEL",String($.level),`${e.development.skillPoints} development pts`)}
      </div>

      <section class="matchday-strip ${T?"":"empty"}">
        <div class="matchday-crest-wrap">
          ${T&&K?Y(K,"matchday-crest"):'<span class="mini-crest matchday-crest empty">—</span>'}
        </div>
        <div class="matchday-copy">
          <div class="eyebrow">MATCHDAY · ${s(a.career.phase.replace("-"," ").toUpperCase())}</div>
          <h3>${s(We)}</h3>
          <p>${s(qe)}${T?` · ${T.userIsHome??T.homeClubId===t.id?"HOME":"AWAY"}`:""}</p>
          ${P?`<small class="matchday-last">LAST · <b>${s(P.result)} ${ra}–${za}</b> vs ${s(N?.shortName??"—")}${P.playerRating?` · RATING ${Number(P.playerRating).toFixed(1)}`:""}</small>`:'<small class="matchday-last">Your first competitive fixture is waiting.</small>'}
        </div>
        <div class="matchday-action">
          <button class="btn btn-primary" type="button" data-action="play-match" ${T?"":"disabled"}>${T?m.academy?"PLAY ACADEMY MATCH":"PLAY MATCH":"NO FIXTURE"}</button>
          <button class="btn btn-sim" type="button" data-action="sim-match" ${T?"":"disabled"}>SIMULATE MATCH</button>
          <small>3D MATCH · 1:30 HALVES · ${s(je)}</small>
        </div>
      </section>
      </div>

      <div class="hub-grid" data-active-page="${s(this.activePage)}">
        ${Qs(a,{weekSimRunning:!!this.centralSimTimer})}
        ${en(a,this.fifaTabs.mypro)}
        ${gn(a)}
        ${hn(a,{activeTab:this.fifaTabs.season,calendarCursor:this.fifaCalendar,selectedDate:this.fifaSelectedDate})}
        ${vn(a,this.fifaSocialPlatform)}
        ${fn(a)}
        ${bn(a,this.fifaTabs.customise,this.adminUnlocked)}
        ${Ta.complete&&Ie?Tn(Ie,Ta):""}
        ${An(Ta)}

        <section class="career-panel span-2 match-history-panel" data-career-page="season">
          <div class="panel-head">
            <h3>Match history</h3>
            <span class="hint">${s(z.played)} MATCH${z.played===1?"":"ES"} · ${s(z.record)}</span>
          </div>
          <div class="history-summary">
            ${M("ARCHIVE",String(z.played),"completed matches")}
            ${M("RECORD",z.record,"all competitions")}
            ${M("GOALS / ASSISTS",`${z.goals} / ${z.assists}`,"from match reports")}
            ${M("AVERAGE RATING",Lt,"across the archive")}
          </div>
          <div class="match-history-list">
            ${we.length?we.map(l=>{const w=l.result==="W"?"win":l.result==="D"?"draw":"loss";return`<button class="match-history-row" type="button" data-action="view-match-report" data-match-id="${s(l.id)}" aria-label="Open report for ${s(l.opponent?.name??"opponent")} on ${s(A(l.date))}">
                        <span class="history-result ${w}">${s(l.result)}</span>
                        <span class="history-opponent">
                          ${Y(l.opponent,"history-crest")}
                          <span><b>${s(l.opponent?.name??"Opponent")}</b><small>${s(l.venue)} · ${s(l.competitionShort)} · R${s(l.round)}</small></span>
                        </span>
                        <span class="history-score"><b>${s(l.scoreline)}</b><small>${s(A(l.date))}</small></span>
                        <span class="history-rating"><b>${l.playerRating?Number(l.playerRating).toFixed(1):"—"}</b><small>RATING</small></span>
                        <span class="history-arrow" aria-hidden="true">→</span>
                      </button>`}).join(""):'<div class="empty-row">No completed matches yet. Your first fixture will appear here after full time.</div>'}
          </div>
          <p class="fine-print">Every completed match is archived with its scoreline, player rating and team statistics. Open any row to revisit the full-time report.</p>
        </section>

        <section class="career-panel span-2 media-panel ${k.available?"has-press":""}" data-career-page="season">
          <div class="panel-head">
            <h3>Media &amp; supporters</h3>
            <span class="hint">${k.available?"PRESS WAITING":`${s(k.conferenceCount)} CONFERENCE${k.conferenceCount===1?"":"S"}`}</span>
          </div>
          <div class="media-desk-grid">
            <div class="press-desk-card">
              <div class="press-journalist">
                <span class="press-avatar">${s(Pt)}</span>
                <div><b>${s(ke)}</b><small>${s(k.outlet)} · TRUST ${s(k.journalist?.trust??"—")}</small></div>
                <span class="press-state ${k.available?"live":""}">${s(k.available?"READY":"FILED")}</span>
              </div>
              ${k.question?`<div class="press-question-block">
                      <span class="press-context">${s(k.question.contextLabel)}</span>
                      <p class="press-question">“${s(k.question.prompt)}”</p>
                      <small class="press-detail">${s(k.question.detail)}</small>
                    </div>`:'<p class="press-question press-question-empty">Your first press conference opens after your next completed match.</p>'}
              ${k.available?`<div class="press-actions">
                      <button class="btn btn-primary btn-small" type="button" data-action="media-press">STEP TO THE MIC</button>
                      <button class="btn btn-small" type="button" data-action="media-skip">SKIP DUTIES</button>
                    </div>`:k.lastConference?`<div class="press-filed-story">
                        <span>LAST ANSWER · ${s(k.lastConference.responseLabel)}</span>
                        <b>${s(k.lastConference.headline)}</b>
                        <small>“${s(k.lastConference.quote)}”</small>
                      </div>`:""}
            </div>
            <div class="media-side">
              <div class="media-meters">
                ${ot("MEDIA REACH",k.reputation.media,"back-page presence")}
                ${ot("FAN SUPPORT",k.reputation.supporter,"the terraces")}
              </div>
              <div class="media-news-list">
                <div class="mini-heading">LATEST STORIES</div>
                ${k.news.length?k.news.map(l=>`<div class="media-story ${s(l.tone??"neutral")}">
                            <span>${s(l.outlet??k.outlet)} · ${s(A(l.date))}</span>
                            <b>${s(l.title)}</b>
                          </div>`).join(""):'<div class="empty-row">No headlines yet. Give the press something to write about.</div>'}
              </div>
            </div>
          </div>
          <p class="fine-print">Every completed match opens one press conference. Answers change media reach, supporter mood, your manager and the journalist who writes your story.</p>
        </section>

        <section class="career-panel span-2 international-panel ${s(D.status)}" data-career-page="central">
          <div class="panel-head">
            <h3>International duty</h3>
            <span class="hint">${Q?`${s(Q.short)} · ${s(D.statusLabel)}`:"NOT AVAILABLE"}</span>
          </div>
          ${Q?`<div class="intl-hero">
                  <span class="intl-badge" style="--nation:${oa(Q.color,"#4fe3ff")}">${s(Q.short)}</span>
                  <div class="intl-team-copy">
                    <span>NATIONAL TEAM</span>
                    <b>${s(Q.name)}</b>
                    <small>${s(Q.coachName)} · ${s(Q.rating)} OVR</small>
                  </div>
                  <div class="intl-coach-meter">
                    <div><span>COACH TRUST</span><b>${s(D.coachTrust)}</b></div>
                    <div class="intl-meter-track"><i style="width:${Math.max(0,Math.min(100,D.coachTrust))}%"></i></div>
                  </div>
                </div>
                <div class="intl-grid">
                  <div class="intl-metrics">
                    <div><span>CAPS</span><b>${s(D.caps)}</b></div>
                    <div><span>GOALS</span><b>${s(D.goals)}</b></div>
                    <div><span>ASSISTS</span><b>${s(D.assists)}</b></div>
                    <div><span>AVG RATING</span><b>${D.avgRating?D.avgRating.toFixed(1):"—"}</b></div>
                    <div><span>AVG SQUAD CAPS</span><b>${s(D.team?.averageCaps??0)}</b><small>${s(D.team?.squadSize??23)}-man pool</small></div>
                  </div>
                  <div class="intl-next">
                    <div class="mini-heading">NEXT INTERNATIONAL</div>
                    ${ha?`<div class="intl-next-row">
                            <span class="intl-venue">${s(ha.venueLabel)}</span>
                            <div><b>vs ${s(ha.opponentName)}</b><small>${s(A(ha.date))} · ${s(ha.competitionName)} · ${s(ha.daysUntil)} days</small></div>
                          </div>`:'<div class="empty-row">The international calendar is complete for this season.</div>'}
                  </div>
                  <div class="intl-actions">
                    ${D.canReport?`<button class="btn btn-primary btn-small" type="button" data-action="international-report">${D.status==="withdrawn"?"RETURN TO CAMP":"REPORT FOR DUTY"}</button>`:""}
                    ${D.canWithdraw?'<button class="btn btn-small" type="button" data-action="international-withdraw">WITHDRAW FROM CAMP</button>':""}
                    ${D.eligible?D.calledUp?'<span class="intl-camp-chip">IN CAMP · READY FOR THE NEXT WINDOW</span>':"":`<span class="intl-lock">${s(D.reason??"Not selected for the national squad.")}</span>`}
                  </div>
                </div>
                ${Oe.length?`<div class="intl-recent"><div class="mini-heading">RECENT CAPS</div>${Oe.map(l=>`<div class="intl-result-row ${l.missed?"missed":""}">
                            <span>${s(A(l.date))}</span>
                            <b>${s(Q.short)} ${l.missed?"—":`${s(l.teamGoals)}–${s(l.opponentGoals)}`} ${s(l.opponentShort)}</b>
                            <small>${l.missed?s(l.missedLabel??"MISSED"):`RATING ${Number(l.playerRating).toFixed(1)}${l.goals?` · ${l.goals}G`:""}`}</small>
                          </div>`).join("")}</div>`:""}
                <p class="fine-print">Internationals resolve automatically when the calendar reaches each fixture. Report for duty to be eligible; withdrawing protects club fitness but costs coach trust.</p>`:'<div class="empty-row">No national team is available for this nationality. The international pathway opens when a national pool exists.</div>'}
        </section>

        <section class="career-panel span-2 pathway-panel ${s(m.academy?"is-academy":m.stage==="loan"?"is-loan":"is-senior")}" data-career-page="central">
          <div class="panel-head">
            <h3>Academy &amp; pathway</h3>
            <span class="hint">${s(m.stage==="loan"?"SENIOR LOAN":m.levelLabel.toUpperCase())} · ${s(m.academy?"YOUTH MATCHES LIVE":m.stage==="loan"?"LOAN SPELL":"SENIOR PATHWAY")}</span>
          </div>
          <div class="pathway-hero">
            <span class="pathway-badge">${s(m.academy?m.level.short:m.stage==="loan"?"LOAN":"XI")}</span>
            <div class="pathway-hero-copy">
              <span>${s(m.academy?"ACADEMY PATHWAY":m.stage==="loan"?"SENIOR LOAN":"FIRST-TEAM PATHWAY")}</span>
              <b>${s(m.levelLabel)}</b>
              <small>${m.academy?`${s(m.parentClub?.name??"Your club")} · ${s(m.stats?.appearances??0)} apps · ${m.stats?.averageRating?Number(m.stats.averageRating).toFixed(1):"—"} avg`:m.stage==="loan"?`${s(m.currentClub?.name??"Loan club")} · parent club ${s(m.parentClub?.name??"—")}`:`${s(m.currentClub?.name??"Your club")} · ${s(m.currentClub?.rating??"—")} OVR`}</small>
            </div>
            <div class="pathway-confidence">
              <div><span>MANAGER CONFIDENCE</span><b>${s(m.managerConfidence)}</b></div>
              <div class="pathway-meter-track"><i style="width:${Math.max(0,Math.min(100,m.managerConfidence))}%"></i></div>
              <small>${s(m.academy?"Academy staff":"First-team staff")} · ${m.academy?m.stats?.appearances?"BUILDING YOUR CASE":"AWAITING FIRST APPEARANCE":m.debut?"DEBUT MADE":"WAITING FOR DEBUT"}${m.firstTeamTraining&&!m.academy?" · FIRST-TEAM TRAINING":""}</small>
            </div>
          </div>

          <div class="pathway-grid">
            <div class="pathway-next-card">
              <div class="mini-heading">NEXT ${m.academy?"ACADEMY":"PATHWAY"} FIXTURE</div>
              ${m.nextFixture?`<div class="pathway-next-row">
                      <div class="pathway-fixture-club">${Y(m.opponent,"pathway-crest")}</div>
                      <div><b>${s(m.nextFixture.userIsHome??m.nextFixture.homeClubId===(m.academy?m.parentClubId:m.currentClub?.id)?"vs":"at")} ${s(m.opponent?.name??m.nextFixture.awayName??"Opponent")}</b><small>${s(A(m.nextFixture.date))} · ${s(m.nextFixture.competitionName)} · ${s(m.nextFixture.roundName??`Round ${m.nextFixture.round}`)}</small></div>
                      <button class="btn btn-primary btn-small" type="button" data-action="play-match">PLAY MATCH</button>
                    </div>`:'<div class="empty-row">No pathway fixture is scheduled.</div>'}
              <div class="pathway-mini-stats">
                <div><span>APPEARANCES</span><b>${s(m.stats?.appearances??0)}</b></div>
                <div><span>GOALS</span><b>${s(m.stats?.goals??0)}</b></div>
                <div><span>ASSISTS</span><b>${s(m.stats?.assists??0)}</b></div>
                <div><span>AVG RATING</span><b>${m.stats?.averageRating?Number(m.stats.averageRating).toFixed(1):"—"}</b></div>
              </div>
            </div>
            <div class="pathway-feedback-card">
              <div class="mini-heading">MANAGER FEEDBACK</div>
              ${m.feedback?`<b>${s(m.feedback.title)}</b><p>${s(m.feedback.body)}</p><small>${s(A(m.feedback.date))}</small>`:'<div class="empty-row">No feedback yet. Play a fixture to be assessed.</div>'}
              ${m.academy?`<div class="pathway-criteria ${m.promotion?.canPromote?"ready":""}">
                      <span>${m.promotion?.canPromote?"PROMOTION READY":`NEXT STEP · ${s(m.promotion?.next==="u21"?"U21":"FIRST TEAM")}`}</span>
                      <p>${s(m.promotion?.reason??"")}</p>
                      ${m.promotion?.canPromote?'<button class="btn btn-primary btn-small" type="button" data-action="pathway-promote">ACCEPT PROMOTION</button>':""}
                    </div>`:""}
            </div>
          </div>

          ${m.academy?`<div class="pathway-table">
                  <div class="mini-heading">${s(m.level?.competitionName??"Academy table")}</div>
                  <div class="pathway-table-head"><span>#</span><span>CLUB</span><span>PL</span><span>GD</span><span>PTS</span></div>
                  ${(m.table??[]).slice(0,8).map(l=>`<div class="pathway-table-row ${l.clubId===m.parentClubId?"you":""}">
                    <span>${s(l.position)}</span><span>${s(l.club?.name??l.clubId)} ${s(m.level?.short??"")}</span><span>${s(l.played)}</span><span>${l.goalDifference>=0?"+":""}${s(l.goalDifference)}</span><span>${s(l.points)}</span>
                  </div>`).join("")}
                </div>`:""}

          <div class="pathway-actions">
            ${m.stage==="loan"?`<div class="pathway-loan-live"><span>ON LOAN</span><b>${s(m.loan?.clubName??m.currentClub?.name??"Loan club")}</b><small>Until ${s(A(m.loan?.endDate))} · ${m.loan?.permanentOption?"permanent option available":"no permanent option"}</small></div>
                    ${m.loan?.permanentOption?'<button class="btn btn-small" type="button" data-action="pathway-negotiate-permanent">NEGOTIATE CONTRACT</button><button class="btn btn-primary btn-small" type="button" data-action="pathway-sign-permanent">SIGN PERMANENTLY</button>':""}
                    <button class="btn btn-small" type="button" data-action="pathway-return">RETURN TO PARENT CLUB</button>`:`<button class="btn btn-small" type="button" data-action="pathway-loan-request" ${m.canRequestLoan?"":"disabled"}>ASK FOR A LOAN</button>
                    <span class="inline-note">${m.canRequestLoan?m.loanRecommended?"The staff recommend regular senior football — review loan offers.":"Regular senior football can accelerate your development.":m.stage==="u17"?"Finish the U17 academy before requesting a senior loan.":"A loan offer is already active."}</span>`}
          </div>

          ${(m.loanOffers??[]).filter(l=>l.status==="active").length?`<div class="loan-offers">
                  <div class="mini-heading">AVAILABLE LOAN MOVES</div>
                  ${(m.loanOffers??[]).filter(l=>l.status==="active").map(l=>`<div class="loan-offer">
                    <div><b>${s(l.clubName)}</b><small>${s(l.clubRating)} OVR · ${s(l.interest)}% interest · until ${s(A(l.endDate))}</small></div>
                    <div class="loan-offer-actions"><button class="btn btn-small" type="button" data-action="pathway-loan-negotiate" data-offer-id="${s(l.id)}">NEGOTIATE</button><button class="btn btn-primary btn-small" type="button" data-action="pathway-loan-accept" data-offer-id="${s(l.id)}">JOIN LOAN</button><button class="btn btn-small" type="button" data-action="pathway-loan-reject" data-offer-id="${s(l.id)}">DECLINE</button></div>
                  </div>`).join("")}
                </div>`:""}
          <p class="fine-print">${m.academy?"Academy matches are played in the 3D engine with only your player under direct control. Selection, substitutions and manager confidence all affect your route to the first team.":"The first-team manager selects the XI. If you are left out, you start on the bench and can enter as a substitute. Loans and permanent moves are decided by your performances."}</p>
        </section>

        <section class="career-panel span-2 rivalry-panel" data-career-page="central">
          <div class="panel-head">
            <h3>Rival watch</h3>
            <span class="hint">${E.available?`${s(E.metricShort)} · ${s(E.status.toUpperCase())}`:"SEASON DUEL"}</span>
          </div>
          ${E.available?`<div class="rival-hero">
                  <div class="rival-crest">${Y({shortName:E.rival.clubShort,colors:E.rival.clubColors},"rival-club-crest")}</div>
                  <div class="rival-copy">
                    <span>YOUR RIVAL THIS SEASON</span>
                    <b>${s(E.rival.name)}</b>
                    <small>${s(E.rival.clubName)} · ${s(E.rival.positionLabel)} · ${s(E.rival.overall)} OVR · ${s(E.rival.age)} YRS</small>
                  </div>
                  <div class="rival-gap ${s(E.status)} ">
                    <span>${s(E.metricShort)}</span>
                    <b>${s(E.userValue)} <i>vs</i> ${s(E.rivalValue)}</b>
                    <small>${E.gap>0?"+":""}${s(E.gap)} ${s((E.gap===1||E.gap===-1,"difference"))}</small>
                  </div>
                </div>
                <div class="rival-bars">
                  <div class="rival-bar-row">
                    <span>YOU</span>
                    <div class="rival-track"><i class="you" style="width:${E.userBar}%"></i></div>
                    <b>${s(E.userValue)}</b>
                  </div>
                  <div class="rival-bar-row rival">
                    <span>${s(E.rival.clubShort)}</span>
                    <div class="rival-track"><i style="width:${E.rivalBar}%"></i></div>
                    <b>${s(E.rivalValue)}</b>
                  </div>
                </div>
                <div class="rival-status-row">
                  <span class="rival-status ${s(E.status)}">${E.claimed?"CHALLENGE WON":E.status==="ahead"?"AHEAD OF YOUR RIVAL":E.status==="behind"?"TRAILING YOUR RIVAL":E.status==="level"?"LEVEL WITH YOUR RIVAL":`QUALIFY · ${E.user.appearances}/${E.minAppearances} APPS`}</span>
                  <small>${E.claimed?`Settled ${A(E.claimedAt?.slice(0,10))}`:"The race stays open all season. Claim the reward when you are ahead after "+E.minAppearances+" appearances."}</small>
                </div>
                ${E.claimable?`<div class="rival-claim"><div><b>RIVALRY REWARD READY</b><small>${E.reward.xp} XP · ${b(E.reward.bonus)} · +${E.reward.board} board confidence</small></div><button class="btn btn-primary btn-small" type="button" data-action="rival-claim">CLAIM REWARD</button></div>`:E.claimed?`<div class="rival-claim claimed"><b>REWARD CLAIMED</b><small>${E.reward.xp} XP · ${b(E.reward.bonus)} · +${E.reward.board} board confidence</small></div>`:`<div class="rival-claim muted"><b>${E.status==="behind"||E.status==="level"?"KEEP CLOSING THE GAP":"BUILD YOUR CASE"}</b><small>${E.reward.xp} XP · ${b(E.reward.bonus)} · +${E.reward.board} board confidence</small></div>`}
                ${E.history.length?`<div class="rival-history"><div class="mini-heading">RECENT RIVAL WATCH</div>${E.history.map(l=>`<div class="rival-history-row">
                            <span>${s(A(l.date))}</span>
                            <b>YOU ${l.user.goals}G ${l.user.assists}A${l.user.rating?` · ${Number(l.user.rating).toFixed(1)}`:""}</b>
                            <small>${s(E.rival.name)} ${l.rival.goals}G ${l.rival.assists}A · ${s(l.rival.rating)}</small>
                          </div>`).join("")}</div>`:""}
                <p class="fine-print">${s(E.rival.name)} plays for ${s(E.rival.clubName)}. This personal duel runs alongside the league table and does not change club results.</p>`:'<div class="empty-row">A rival will be identified when your career has a club and a season.</div>'}
        </section>

        <section class="career-panel span-2 dressing-room-panel" data-career-page="central">
          <div class="panel-head">
            <h3>Dressing room</h3>
            <span class="hint">SQUAD MORALE ${s(x.morale)} · ${s(x.moraleLabel)}</span>
          </div>
          <div class="dressing-morale-row">
            <div class="dressing-morale-copy">
              <span>THE ROOM</span>
              <b>${s(x.moraleLabel)}</b>
              <small>Team talks and conversations shape the mood around the club.</small>
            </div>
            <div class="dressing-morale-track"><i style="width:${Math.max(0,Math.min(100,x.morale))}%"></i></div>
            <div class="dressing-morale-value"><b>${s(x.morale)}</b><span>/ 100</span></div>
          </div>
          ${x.boost?`<div class="team-talk-boost"><span>NEXT MATCH · ${s(x.boost.opponentName)}</span><b>${s(x.boost.label)}</b><small>RATING ${x.boost.rating>=0?"+":""}${Number(x.boost.rating).toFixed(2)}</small></div>`:""}
          <div class="team-talk-block">
            <div class="mini-heading">${x.fixture?`NEXT FIXTURE · ${s(x.opponent?.name??"TBC")}`:"NO FIXTURE TO PREPARE FOR"}</div>
            <div class="team-talk-grid">
              ${x.options.map(l=>`<button class="team-talk-option ${l.id} ${l.available?"":"is-locked"}" type="button" data-action="team-talk" data-talk-id="${s(l.id)}" ${l.available?"":"disabled"} title="${s(l.reason??l.detail)}">
                    <span>${s(l.label)}</span>
                    <small>${s(l.detail)}</small>
                    <em>${l.rating>=0?"+":""}${Number(l.rating).toFixed(2)} RATING${l.volatile?" · RISK":""}</em>
                  </button>`).join("")}
            </div>
            <small class="dressing-note">${x.options[0]?.reason?s(x.options[0].reason):"Your next team talk is ready."}</small>
          </div>
          <div class="dressing-contacts">
            <div class="mini-heading">PEOPLE AROUND YOU</div>
            ${x.contacts.map(l=>`<div class="dressing-contact ${l.role}">
                  <div class="dressing-contact-head"><div><b>${s(l.name)}</b><small>${s(l.roleLabel)} · TRUST ${l.trust} · AFFINITY ${l.affinity}</small></div><span class="contact-trust-pill">${l.trust>=70?"TRUSTED":l.trust>=50?"WORKING":"COLD"}</span></div>
                  <div class="dressing-contact-actions">${l.approaches.map(w=>`<button class="btn btn-small" type="button" data-action="relationship-talk" data-npc-id="${s(l.id)}" data-approach="${s(w.id)}" ${w.available?"":"disabled"} title="${s(w.reason??w.detail)}">${s(w.label)}</button>`).join("")}</div>
                </div>`).join("")}
          </div>
          <p class="fine-print">Team talks affect the next fixture and squad morale. Conversations build trust one person at a time; nobody wants the same speech every day.</p>
        </section>

        <section class="career-panel span-2 commercial-panel" data-career-page="central">
          <div class="panel-head">
            <h3>Finances &amp; sponsors</h3>
            <span class="hint">${F.active.length}/${F.maxActive} ACTIVE · ${b(F.weeklySponsorIncome,{compact:!0})} / WEEK</span>
          </div>
          <div class="commercial-metrics">
            ${M("BANK BALANCE",b(F.balance,{compact:!0}),"personal account")}
            ${M("WEEKLY WAGE",b(F.weeklyWage,{compact:!0}),"club contract")}
            ${M("SPONSOR INCOME",b(F.weeklySponsorIncome,{compact:!0}),"per week")}
            ${M("SPONSOR EARNINGS",b(F.lifetimeEarned,{compact:!0}),"lifetime")}
          </div>
          <div class="commercial-columns">
            <div class="commercial-offers">
              <div class="mini-heading">OFFERS ON THE TABLE</div>
              ${F.offers.length?F.offers.map(l=>`<div class="sponsor-offer" style="--brand:${oa(l.color,"#c6ff45")}">
                        <div class="sponsor-offer-head"><div><span>${s(l.tier)} · ${s(l.sector)}</span><b>${s(l.name)}</b><small>${s(l.tagline)}</small></div><strong>${b(l.weeklyPay,{compact:!0})}<small>/ WEEK</small></strong></div>
                        <div class="sponsor-offer-terms"><span>SIGNING ${b(l.signingBonus,{compact:!0})}</span><span>${s(l.durationWeeks)} WEEKS</span><span>${s(l.requirementsLabel)}</span><span>EXPIRES IN ${s(l.expiresInDays)}D</span></div>
                        <div class="sponsor-offer-actions"><button class="btn btn-primary btn-small" type="button" data-action="sponsor-sign" data-offer-id="${s(l.id)}">SIGN</button><button class="btn btn-small" type="button" data-action="sponsor-decline" data-offer-id="${s(l.id)}">DECLINE</button></div>
                      </div>`).join(""):'<div class="empty-row">No offers right now. Keep performing and the brands will find you.</div>'}
            </div>
            <div class="commercial-active">
              <div class="mini-heading">ACTIVE DEALS</div>
              ${F.active.length?F.active.map(l=>`<div class="sponsor-active" style="--brand:${oa(l.color,"#4fe3ff")}"><div><b>${s(l.name)}</b><small>${b(l.weeklyPay,{compact:!0})} / week · ${s(l.weeksRemaining)} weeks left</small></div><strong>${b(l.earned,{compact:!0})}<small>EARNED</small></strong></div>`).join(""):'<div class="empty-row">No active deals. Sign an offer to start earning.</div>'}
            </div>
          </div>
          <div class="finance-ledger"><div class="mini-heading">RECENT MONEY</div>${F.ledger.slice(0,6).map(l=>`<div class="finance-ledger-row"><span>${s(l.description??l.type)}</span><small>${s(A(l.at?.slice(0,10)))}</small><b class="${l.positive?"positive":"negative"}">${l.positive?"+":""}${b(l.amount,{compact:!0})}</b></div>`).join("")}</div>
          <p class="fine-print">Sponsorship payments and match bonuses go into the same finances ledger as wages and lifestyle spending. Offers expire if you leave them too long.</p>
        </section>

        <section id="f23-legacy-path" class="career-panel span-2 path-panel" data-career-page="mypro">
          <header class="path-masthead">
            <div class="path-masthead-copy">
              <div class="path-kicker"><span>YOUR PATH</span><i>·</i><span>${s(a.career.season.label)}</span></div>
              <h3>${s(Ve)}</h3>
              <p>${c.available?"Your current deal is on the table. Keep hitting the targets and the club will come to terms.":"Build your case for the next contract with every appearance, result and performance."}</p>
              <div class="path-club-line">
                ${Y(t)}
                <b>${s(t.name)}</b>
                <span>${s(n?.name??"—")}</span>
                <span>${s(Ge)}</span>
              </div>
            </div>
            <div class="path-board">
              <span>BOARD TARGET</span>
              <b>TOP ${s(la?.targetPosition??10)}</b>
              <small>${s(la?.confidence??0)}% CONFIDENCE</small>
            </div>
          </header>

          <div class="path-body">
            <div class="path-objectives">
              <div class="path-section-head">
                <span>SEASON OBJECTIVES</span>
                <b>${s(X.achieved)} / ${s(X.objectives.length)} COMPLETE</b>
              </div>
              ${X.available&&la?X.objectives.map(l=>`<div class="path-step ${s(l.status)}">
                        <span class="path-step-mark" aria-hidden="true">${l.status==="achieved"?"✓":l.status==="failed"?"×":l.kind==="league-position"?"T":l.kind==="appearances"?"A":"R"}</span>
                        <div class="path-step-copy">
                          <b>${s(l.title)}</b>
                          <small>${s(l.detail)}</small>
                          <div class="path-step-track"><i style="width:${Math.max(0,Math.min(100,l.kind==="league-position"&&!ta?0:l.progressPct))}%"></i></div>
                        </div>
                        <div class="path-step-meta">
                          <b>${s(l.kind==="league-position"&&!ta?`Pre-season · target top ${l.target}`:l.progressLabel)}</b>
                          <small>+${s(l.reward?.xp??0)} XP · ${b(l.reward?.bonus??0,{compact:!0})}</small>
                        </div>
                      </div>`).join(""):`<div class="empty-row">${s(X.reason??"The board has not set objectives for this season.")}</div>`}
            </div>

            <aside class="path-agent">
              <div class="path-agent-head">
                <span class="path-agent-avatar">${s(Dt)}</span>
                <div><b>${s(Oa)}</b><small>PLAYER AGENT · TRUST ${s(Le?.trust??"—")}</small></div>
              </div>
              <div class="path-agent-messages">
                <p><b>CONTRACT</b>${c.available?`Your deal has ${s(c.daysRemaining??0)} days left. The club is ready to talk terms.`:`Your deal runs to ${s(A(o?.endDate))}. Keep performing and I will open talks at the right time.`}</p>
                <p><b>BOARD</b>They expect a top-${s(la?.targetPosition??10)} finish. ${ta&&ka?`You are ${s(Ea(ka))} right now.`:"The table starts now."}</p>
                <p><b>NEWS</b>${s(ee[0]?.title??"No new messages. Keep your head down and work.")}</p>
              </div>
              <button class="central-link path-agent-link" type="button" data-action="career-page" data-page="agent">OPEN AGENT OFFICE →</button>
            </aside>
          </div>

          <p class="fine-print">The league target is judged at the final whistle of the season. Appearance and rating targets can be secured as soon as they are met.</p>
        </section>

        <section id="f23-career-state" class="career-panel span-2 overview-panel" data-career-page="central">
          <div class="panel-head">
            <h3>Career state</h3>
            <span class="phase-pill ${s(a.career.phase)}">${s(a.career.phase.replace("-"," "))}</span>
          </div>
          <div class="status-grid">
            <div><span>DATE</span><b>${s(A(a.career.date))}</b><small>Day ${s(a.career.dayIndex)} of the career</small></div>
            <div><span>SEASON</span><b>${s(a.career.season.label)}</b><small>${s(a.career.season.daysRemaining)} days remaining</small></div>
            <div class="status-wide"><span>NEXT MATCH</span><b>${s(We)}</b><small>${s(qe)}</small></div>
            <div><span>CONTRACT</span><b>${s(A(o?.endDate))}</b><small>${s(O)} days · ${s(L)}</small></div>
            <div><span>MANAGER</span><b>${s(Ia?.displayName??"—")}</b><small>${s(Ia?.style??"—")} · ${s(Ia?.formation??"—")}</small></div>
            <div><span>INTERNATIONAL</span><b>${s(q??"Not selected")}</b><small>${s(q?"Senior squad pool":"Build reputation to earn a call-up")}</small></div>
            <div><span>DIFFICULTY</span><b>${s(je)}</b><small>1:30 halves · autosave ${a.settings.autoSave?"on":"off"}</small></div>
            <div><span>AGENT</span><b>${s(ua?.identity?.displayName??"—")}</b><small>Trust ${s(Le?.trust??"—")} / 100</small></div>
          </div>
          <div class="xp-line">
            <div class="xp-head"><span>DEVELOPMENT · LEVEL ${s($.level)}</span><span>${s($.xp)} / ${s($.needed)} XP</span></div>
            <div class="xp-track"><i style="width:${Math.round($.ratio*100)}%"></i></div>
          </div>
          <div class="hub-inline-actions">
            <button class="btn btn-small" type="button" data-action="grant-xp">+900 DEVELOPMENT XP</button>
            <button class="btn btn-small" type="button" data-action="advance" data-days="1">+1 DAY</button>
            <button class="btn btn-small" type="button" data-action="advance" data-days="7">+7 DAYS</button>
            <button class="btn btn-small" type="button" data-action="advance" data-days="30">+30 DAYS</button>
            <span class="inline-note">Calendar actions are immediate and autosaved.</span>
          </div>
        </section>

        <section class="career-panel span-2 contract-panel ${s(c.status??"")}" data-career-page="central">
          <div class="panel-head">
            <h3>Contract &amp; agent</h3>
            <span class="hint">${s(c.statusLabel??"—")}</span>
          </div>
          <div class="contract-strip">
            <div><span>CURRENT DEAL</span><b>${b(o?.weeklyWage??0)} / wk</b><small>${s(A(o?.endDate))} · ${s((o?.squadRole??"—").replace("-"," "))}</small></div>
            <div><span>EXPIRY</span><b>${s(c.daysRemaining??0)} days</b><small>${s(c.statusLabel??"—")} · ${c.status==="renewed"?"talks reopen in final year":c.available?"renew to extend":"talks closed"}</small></div>
            <div><span>AGENT TRUST</span><b>${s(c.trust??0)} / 100</b><small>${s(c.agentName??"No agent")}</small></div>
            <div class="contract-offer-cell"><span>NEXT OFFER</span><b>${c.available?`${b(c.weeklyWage)} / wk`:"—"}</b><small>${c.available?`${s(c.termYears)} years · ${s(c.raisePct)}% raise`:s(c.reason??"Talks closed")}</small></div>
          </div>
          <div class="contract-panel-actions">
            <button class="btn btn-primary btn-small" type="button" data-action="contract-talks" ${c.available?"":"disabled"}>${c.available?"OPEN CONTRACT TALKS":"TALKS CLOSED"}</button>
            <span>${s(c.available?"Review the offer, push for better terms, or sign the extension.":c.reason??"Renewal talks are not open.")}</span>
          </div>
          <p class="fine-print">Renewal talks include a signing bonus. Each push improves the terms but costs agent trust; the agent will stop after ${s(c.maxRounds??3)} pushes.</p>
        </section>

        <section class="career-panel span-2 transfer-panel ${h.length?"has-offers":""}" data-career-page="central">
          <div class="panel-head">
            <h3>Transfer market</h3>
            <span class="hint">${s(f)}</span>
          </div>
          <div class="transfer-strip">
            <div><span>WINDOW</span><b>${s(p.window.shortLabel)}</b><small>${p.window.open?`Closes ${A(p.window.endDate)}`:`Opens ${A(p.window.nextOpenDate)}`}</small></div>
            <div><span>LIVE OFFERS</span><b>${s(h.length)}</b><small>${p.transferCount?`${p.transferCount} completed move${p.transferCount===1?"":"s"}`:"No completed moves"}</small></div>
            <div><span>YOUR CLUB</span><b>${s(t?.shortName??"—")}</b><small>${s(t?.name??"—")}</small></div>
            <div class="transfer-action-cell">
              <button class="btn btn-primary btn-small" type="button" data-action="transfer-request" ${p.canRequest?"":"disabled"}>ASK FOR OFFERS</button>
              <small>${s(p.reason??(p.window.open?`${p.window.daysRemaining} days left to act`:"The market is closed"))}</small>
            </div>
          </div>
          ${h.length?`<div class="transfer-offers">${h.map(l=>`<article class="transfer-card">
                      <div class="transfer-card-top">
                        <div class="transfer-club">${Y(l.club,"transfer-crest")}<div><b>${s(l.club?.name??"Interested club")}</b><small>${s(l.leagueName)} · ${s(l.club?.rating??"—")} OVR${l.fromAcademyLevel??(m.academy?m.stage:null)?` · ${s((l.fromAcademyLevel??m.stage).toUpperCase())} EXIT`:""}</small></div></div>
                        <span class="transfer-interest">${s(l.interest??0)}% INTEREST</span>
                      </div>
                      <div class="transfer-terms">
                        <div><span>WAGE</span><b>${b(l.weeklyWage)}</b><small>${l.wageRise>=0?"+":""}${s(l.wageRisePct??0)}%</small></div>
                        <div><span>FEE</span><b>${b(l.fee,{compact:!0})}</b><small>to ${s(t?.shortName??"your club")}</small></div>
                        <div><span>SIGNING BONUS</span><b>${b(l.signingBonus)}</b><small>on completion</small></div>
                        <div><span>CONTRACT</span><b>${s(l.termYears)} yrs</b><small>${s(ya.find(w=>w.id===l.squadRole)?.label??l.squadRole)}</small></div>
                      </div>
                      <div class="transfer-card-foot"><small>Expires ${A(l.expiresDate)}</small><button class="btn btn-small" type="button" data-action="transfer-review" data-offer-id="${s(l.id)}">REVIEW OFFER</button></div>
                    </article>`).join("")}</div>`:`<div class="transfer-empty">
                  <b>No live transfer offers</b>
                  <span>${p.window.open?"Ask your agent to sound out interested clubs. Offers expire quickly once they arrive.":`The next window opens on ${A(p.window.nextOpenDate)}.`}</span>
                </div>`}
          ${p.recentTransfers.length?`<div class="transfer-history-line"><span>LAST MOVE</span><b>${s(p.recentTransfers[0].fromClub?.shortName??"—")} → ${s(p.recentTransfers[0].toClub?.shortName??"—")}</b><small>${A(p.recentTransfers[0].date)} · ${b(p.recentTransfers[0].fee,{compact:!0})}</small></div>`:""}
          <p class="fine-print">Offers are only valid during a transfer window. Accepting moves your club, contract, squad and home city; your match history stays with you.</p>
        </section>

        <section class="career-panel span-2 lifestyle-panel" data-career-page="central">
          <div class="panel-head">
            <h3>Daily life</h3>
            <span class="hint">${s(d)}</span>
          </div>
          <div class="wellbeing-strip">
            ${[["fitness","FITNESS"],["sharpness","SHARPNESS"],["morale","MORALE"],["form","FORM"]].map(([l,w])=>`<div class="wellbeing-cell"><span>${s(w)}</span><b>${s(v.condition[l])}</b><div class="wellbeing-bar"><i style="width:${Math.max(2,Math.min(100,v.condition[l]))}%"></i></div></div>`).join("")}
          </div>
          <div class="lifestyle-grid">
            ${v.activities.map(l=>`<article class="lifestyle-card ${l.available?"":"is-locked"} ${v.doneToday&&v.lastActivityId===l.id?"is-done":""}">
                  <div class="lifestyle-card-top"><span class="lifestyle-tag">${s(l.tag)}</span><span class="lifestyle-cost">${l.cost?b(l.cost):"FREE"}</span></div>
                  <h4>${s(l.label)}</h4>
                  <p>${s(l.detail)}</p>
                  <div class="lifestyle-effects">${l.effects.map(w=>`<span>+${s(w.value)} ${s(w.label)}</span>`).join("")}</div>
                  <small class="lifestyle-people">${s(l.locationName)}${l.relationshipNpcs.length?` · ${s(l.relationshipLabel)} +${s(l.relationshipGain)} × ${s(l.relationshipNpcs.length)}`:""}</small>
                  ${l.available?"":`<small class="lifestyle-reason">${s(l.reason)}</small>`}
                  <button class="btn btn-small" type="button" data-action="daily-activity" data-activity-id="${s(l.id)}" ${l.available?"":"disabled"}>${l.available?"DO ACTIVITY":v.doneToday?"DONE TODAY":v.matchday?"MATCHDAY":"UNAVAILABLE"}</button>
                </article>`).join("")}
          </div>
          <p class="fine-print">One off-pitch activity per day. Daily life changes condition, relationships and cash; training and matchday fitness still matter.</p>
          ${v.history.length?`<div class="lifestyle-history"><span>RECENT</span>${v.history.map(l=>`<b>${s(l.label)}</b><small>${A(l.date)}</small>`).join("")}</div>`:""}
        </section>

        <section id="f23-mypro-training" class="career-panel span-2 training-panel" data-career-page="mypro">
          <div class="panel-head">
            <h3>Training ground</h3>
            <span class="hint">${s(Ut)} READY · ${s(Ht)} FITNESS</span>
          </div>
          <div class="training-grid">
            ${Ue.map((l,w)=>`<article class="training-card ${l.available?"":"is-locked"}">
                  <div class="training-top">
                    <span class="training-index">0${w+1}</span>
                    <span class="training-state">${l.available?"READY":s(l.reason)}</span>
                  </div>
                  <h4>${s(l.label)}</h4>
                  <p>${s(l.detail)}</p>
                  <div class="training-target">
                    <span>TARGET · ${s(l.groupLabel)}</span>
                    <b>${s(l.targetLabel)}</b>
                    <em>${l.targetValue===null?"—":`${s(l.targetValue)} → ${Math.min(99,l.targetValue+1)}`}</em>
                  </div>
                  <div class="training-meta"><span>−${s(l.fitnessCost)} FITNESS</span><span>+${s(l.xpGain)} XP</span></div>
                  ${l.specialist?`<small class="training-perk">${s(l.specialist)} · −2 FITNESS +10 XP</small>`:""}
                  <button class="btn btn-small" type="button" data-action="train" data-drill-id="${s(l.id)}" ${l.available?"":"disabled"}>${l.available?"TRAIN":"UNAVAILABLE"}</button>
                </article>`).join("")}
          </div>
          <p class="fine-print">One drill per calendar day. Sessions cost fitness and require at least 25 fitness. Growth is permanent but capped by potential and 99.</p>
        </section>

        <section class="career-panel span-2 specialist-panel" data-career-page="mypro">
          <div class="panel-head">
            <h3>Specialist paths</h3>
            <span class="hint">${s(Bt)} / ${s(se.length)} UNLOCKED · ${s(ma)} POINT${ma===1?"":"S"}</span>
          </div>
          <div class="specialist-grid">
            ${se.map((l,w)=>`<article class="specialist-card ${l.unlocked?"is-unlocked":""} ${l.available?"":"is-locked"}">
                  <div class="specialist-top">
                    <span class="specialist-index">0${w+1}</span>
                    <span class="specialist-state">${l.unlocked?"UNLOCKED":l.available?`${s(l.cost)} POINTS`:s(l.reason)}</span>
                  </div>
                  <h4>${s(l.label)}</h4>
                  <p>${s(l.description)}</p>
                  <div class="specialist-boosts">
                    ${l.boosts.map(sa=>`<div><span>${s(sa.label)}</span><b>${l.unlocked?s(sa.value):`${s(sa.value)} → ${s(sa.next)}`}</b></div>`).join("")}
                  </div>
                  <small class="specialist-effect">${s(l.effect)}</small>
                  <small class="specialist-match">${s(l.matchEffect)}</small>
                  ${l.unlocked?'<span class="specialist-owned">PERMANENT · ACTIVE</span>':`<button class="btn btn-small" type="button" data-action="unlock-playstyle" data-playstyle-id="${s(l.id)}" ${l.available?"":"disabled"}>${l.available?`UNLOCK · ${s(l.cost)} PTS`:"LOCKED"}</button>`}
                </article>`).join("")}
          </div>
          <p class="fine-print">Paths cost development points and permanently add their attribute package plus a training-session bonus. Growth is capped by potential.</p>
        </section>

        <section class="career-panel span-2 standings-panel" data-career-page="season">
          <div class="panel-head">
            <h3>League table</h3>
            <span class="hint">${s(n?.short??"—")} · ${s(a.career.season.label)} · ${ta?`MATCHDAY ${s(ta)}`:"PRE-SEASON"}</span>
          </div>
          <div class="standings-snapshot">
            <div><span>YOUR POSITION</span><b>${ta?s(Ea(ea?.position)):"—"}</b><small>of ${s(Aa.length)}</small></div>
            <div><span>POINTS</span><b>${s(ea?.points??0)}</b><small>${s(ea?.played??0)} played</small></div>
            <div><span>RECORD</span><b>${s(ea?.won??0)}–${s(ea?.drawn??0)}–${s(ea?.lost??0)}</b><small>W–D–L</small></div>
            <div class="standing-form"><span>FORM</span><div class="form-row">${dt(ea?.form??[])}</div><small>LAST FIVE</small></div>
          </div>
          <div class="standings-wrap">
            <table class="standings-table">
              <thead>
                <tr><th>#</th><th>CLUB</th><th>P</th><th class="col-w">W</th><th class="col-d">D</th><th class="col-l">L</th><th class="col-gd">GD</th><th>PTS</th><th>FORM</th></tr>
              </thead>
              <tbody>
                ${Aa.map(l=>`<tr class="${l.clubId===t.id?"is-you":""}">
                      <td class="standing-pos">${s(l.position)}</td>
                      <td class="standing-club">${Y(l.club,"table-crest")}<span class="table-club-name">${s(l.club?.name??"—")}</span><span class="table-club-short">${s(l.club?.shortName??"—")}</span>${l.clubId===t.id?'<b class="you-tag">YOU</b>':""}</td>
                      <td>${s(l.played)}</td>
                      <td class="col-w">${s(l.won)}</td>
                      <td class="col-d">${s(l.drawn)}</td>
                      <td class="col-l">${s(l.lost)}</td>
                      <td class="col-gd">${l.goalDifference>0?"+":""}${s(l.goalDifference)}</td>
                      <td class="standing-points">${s(l.points)}</td>
                      <td><div class="form-row">${dt(l.form)}</div></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
          <p class="fine-print">Every club in ${s(n?.name??"the league")}. Results update after each matchday.</p>
        </section>

        <section class="career-panel integrity-panel" data-career-page="customise">
          <div class="panel-head"><h3>Data integrity</h3><span class="hint">LIVE CHECK</span></div>
          <div class="integrity-status ${C.valid?"ok":"bad"}">
            <span class="live-dot"></span>
            <b>${C.valid?"CAREER DATA VALID":"INTEGRITY ERRORS"}</b>
          </div>
          <div class="integrity-counts">
            <span>${s(C.checks.clubs)} clubs</span>
            <span>${s(C.checks.players)} players</span>
            <span>${s(C.checks.fixtures)} fixtures</span>
            <span>${s(C.checks.npcs)} contacts</span>
          </div>
          ${C.valid?"":`<ul class="validation-errors">${C.errors.slice(0,4).map(l=>`<li><b>${s(l.path)}</b> ${s(l.message)}</li>`).join("")}</ul>`}
          <div class="tech-list">
            <div><span>SAVE ID</span><code>${s(a.meta.saveId)}</code></div>
            <div><span>SCHEMA</span><b>v${_e} · zlib</b></div>
            <div><span>SAVE SIZE</span><b>${s(xa(this.lastSavedBytes))}</b></div>
            <div><span>STORAGE</span><b>${s(this.storage.durable?"DEVICE":"SESSION")}</b></div>
            <div><span>LAST SAVE</span><b>${s(me(this.engine.getStatus().lastSavedAt))}</b></div>
            <div><span>UPDATED</span><b>${s(me(a.meta.updatedAt))}</b></div>
          </div>
          <div class="panel-buttons">
            <button class="btn btn-small" type="button" data-action="verify">RUN FULL CHECK</button>
            <button class="btn btn-small" type="button" data-action="reload">RELOAD FROM DISK</button>
          </div>
          <p class="fine-print">Every render validates the career. The envelope is checksummed and compressed before it touches storage.</p>
        </section>

        <section class="career-panel world-panel" data-career-page="customise">
          <div class="panel-head"><h3>World</h3><span class="hint">${s(ba.leagues)} LEAGUES</span></div>
          <div class="mini-stats">
            ${M("CLUBS",String(ba.clubs),"across the pyramid")}
            ${M("PLAYERS",String(ba.players),"full squad")}
            ${M("FIXTURES",String(ba.fixtures),"this season")}
            ${M("CONTACTS",String(ba.npcs),"in your world")}
          </div>
          <div class="fixture-list">
            <div class="mini-heading">UPCOMING</div>
            ${Pe.length?Pe.map(l=>{const w=l.userIsHome??l.homeClubId===t.id,sa=a.world.clubs[w?l.awayClubId:l.homeClubId]??a.world.nationalTeams?.[l.opponentTeamId]??null;return`<div class="fixture-row">
                        <span class="fixture-venue">${w?"H":"A"}</span>
                        <div><b>${s(sa?.name??"TBC")}</b><small>${s(A(l.date))} · ${s(l.competitionName)}</small></div>
                        <span class="fixture-round">R${s(l.round)}</span>
                      </div>`}).join(""):'<div class="empty-row">No fixtures remaining — advance the calendar.</div>'}
          </div>
        </section>

        <section class="career-panel span-2 attributes-panel" data-career-page="mypro">
          <div class="panel-head">
            <h3>Player development</h3>
            <span class="hint">${s(ma)} PTS · ${s(e.playstyles?.length??0)} PLAYSTYLE${(e.playstyles?.length??0)===1?"":"S"} · ${s(Object.keys(e.attributes).length)} ATTRIBUTES</span>
          </div>
          <div class="development-strip ${te?"active":""}">
            <div><span>DEVELOPMENT POINTS</span><b>${s(ma)}</b><small>1 point = +1 attribute</small></div>
            <div><span>OVERALL / POTENTIAL</span><b>${s(e.overall)} <em>/ ${s(e.potential)}</em></b><small>${s(e.overall>=e.potential?"Potential reached":`${e.potential-e.overall} OVR room`)}</small></div>
            <p>${te?"Spend a point on any attribute below. Changes are permanent and autosaved.":ma>0?"You have reached your potential; development points can no longer raise attributes.":"Earn XP from matches and level ups to earn 3 development points per level."}</p>
          </div>
          <div class="attr-groups">
            ${Ft.map(l=>`<div class="attr-group"><div class="attr-group-head"><h4>${s(l.label)}</h4><span>${s(Math.round(l.values.reduce((w,sa)=>w+sa.value,0)/l.values.length))}</span></div>${Sn(l,te)}</div>`).join("")}
          </div>
          <p class="fine-print">Attributes are stored as position-weighted ratings. Each upgrade spends one development point and is capped by your potential.</p>
        </section>

        <section id="f23-squad-hub" class="career-panel squad-panel" data-career-page="mypro">
          <div class="panel-head"><h3>Squad</h3><span class="hint">${s(ae.length)} REGISTERED</span></div>
          <div class="squad-list">
            ${ae.map(l=>`<div class="squad-row ${l.isUser?"you":""}">
                  <span class="squad-number">${s(l.squadNumber??"—")}</span>
                  <div><b>${s(Ae(l))}</b><small>${s(l.identity.positions.primary)} · ${s(Sa(l,a.career.date))} yrs</small></div>
                  <span class="squad-ovr">${s(l.overall)}</span>
                </div>`).join("")}
          </div>
        </section>

        <section class="career-panel inventory-panel" data-career-page="customise">
          <div class="panel-head"><h3>Inventory</h3><span class="hint">${s(De.length)} ITEMS</span></div>
          <div class="equipped-strip">
            ${Xt.map(l=>{const w=xe[l.id];return`<div class="${w?"filled":""}"><span>${s(l.label)}</span><b>${s(w?.name??"Empty")}</b></div>`}).join("")}
          </div>
          <div class="inventory-list">
            ${De.map(l=>`<div class="inventory-row">
                  <div><b>${s(l.name)}</b><small>${s(l.slot)} · ${s(l.rarity)}</small></div>
                  ${xe[l.slot]?.id===l.id?'<span class="equipped-chip">EQUIPPED</span>':`<button class="btn btn-small" type="button" data-action="equip-item" data-item-id="${s(l.id)}">EQUIP</button>`}
                </div>`).join("")}
          </div>
          <div class="inventory-add">
            <select id="itemTemplateSelect" aria-label="Equipment to add">
              ${Object.values($s).map(l=>`<option value="${l.id}">${s(l.name)} · ${s(l.slot)}</option>`).join("")}
            </select>
            <button class="btn btn-small" type="button" data-action="add-item">ADD ITEM</button>
          </div>
          <p class="fine-print">Cosmetic only. No hidden attribute bonuses.</p>
        </section>

        <section class="career-panel controls-panel" data-career-page="customise">
          <div class="panel-head"><h3>Foundation controls</h3><span class="hint">TEST SURFACE</span></div>
          <p class="panel-copy">
            These controls prove the data layer. Matchday results, training, transfers, daily life, media
            duties, international duty and board objectives are live; more career systems arrive in their
            own phases — every one of them uses this same career engine.
          </p>
          <div class="control-block">
            <label for="shirtNumberInput">SQUAD NUMBER</label>
            <div class="inline-field">
              <input id="shirtNumberInput" type="number" min="1" max="99" step="1" value="${s(e.squadNumber??1)}" />
              <button class="btn btn-small" type="button" data-action="set-number">SET NUMBER</button>
            </div>
          </div>
          <div class="control-block">
            <span>SQUAD ROLE</span>
            <b>${s(L)}</b>
            <small>${s(o?.status??"—")} contract · ${s(o?.bonuses?.signing?b(o.bonuses.signing):"—")} signing bonus</small>
          </div>
          <div class="control-actions">
            <button class="btn btn-small" type="button" data-action="rename">EDIT PLAYER</button>
            <button class="btn btn-small" type="button" data-action="save-now">SAVE NOW</button>
            <button class="btn btn-small" type="button" data-action="verify">VERIFY DATA</button>
          </div>
          <div class="danger-zone">
            <button class="btn btn-small btn-danger-ghost" type="button" data-action="delete-career">
              ${this.confirmDeleteCareer?"CONFIRM DELETE CAREER":"DELETE CAREER"}
            </button>
            <span>${this.confirmDeleteCareer?"Click again to permanently remove this save.":"Deletes the save from this device."}</span>
          </div>
        </section>

        <section class="career-panel contacts-panel" data-career-page="central">
          <div class="panel-head">
            <h3>Contacts</h3>
            <span class="hint">${s(xt)} UNREAD</span>
          </div>
          <div class="contact-list">
            ${[ua,fe(a),...gs(a).filter(l=>l.identity.role==="teammate"&&l.clubId===a.career.clubId)].filter(Boolean).slice(0,6).map(l=>{const w=le(a,l.id);return`<div class="contact-row">
                  <div class="contact-avatar">${s(`${l.identity.firstName[0]??""}${l.identity.lastName[0]??""}`)}</div>
                  <div><b>${s(l.identity.displayName)}</b><small>${s(ys(l))} · trust ${s(w?.trust??"—")}</small></div>
                </div>`}).join("")}
          </div>
          <div class="notification-list">
            <div class="mini-heading">RECENT MESSAGES</div>
            ${ee.length?ee.map(l=>`<div class="notification-row ${l.read?"":"unread"}">
                        <span>${l.read?"":"<i></i>"}${s(l.title)}</span>
                        <small>${s(l.body)}</small>
                      </div>`).join(""):'<div class="empty-row">No messages yet.</div>'}
          </div>
        </section>

        <section class="career-panel span-2 log-panel" data-career-page="customise">
          <div class="panel-head"><h3>Career event log</h3><span class="hint">NEWEST FIRST · CAPPED AT 100</span></div>
          <div class="log-list">
            ${Fe.length?Fe.map(l=>`<div class="log-row">
                        <span class="log-day">D${s(l.day)}</span>
                        <span class="log-type">${s(l.type)}</span>
                        <p>${s(l.message)}</p>
                      </div>`).join(""):'<div class="empty-row">No events recorded.</div>'}
          </div>
        </section>
      </div>

      <div class="hub-footer-note">
        <span>${s(ne.title)} · ${s(ne.version)} · ${s(ne.build)}</span>
        <span>${ba.leagues} leagues, generated squads · Season 2026/27.</span>
      </div>
    `}syncSaveBytes(){const a=this.engine.activeSaveId;if(!a){this.lastSavedBytes=null,this.lastSavedFor=null;return}if(this.lastSavedFor===a&&this.lastSavedBytes!==null)return;const e=this.engine.listSaves().saves.find(t=>t.id===a);this.lastSavedBytes=e?.bytes??null,this.lastSavedFor=a}handleClick(a){const e=a.target.closest("[data-close]");if(e){e.dataset.close==="create"&&this.closeCreate(),e.dataset.close==="rename"&&this.closeRename(),e.dataset.close==="match-report"&&this.closeMatchReport(),e.dataset.close==="contract"&&this.closeContractTalks(),e.dataset.close==="transfer"&&this.closeTransferOffer(),e.dataset.close==="media"&&this.closeMediaPress();return}const t=a.target.closest("[data-action]");if(!t||t.disabled)return;a.preventDefault();const n=t.dataset.action,o=t.dataset.saveId;switch(n){case"close":this.closeScreen();break;case"slots":this.view="slots",this.render();break;case"new":this.openCreate();break;case"refresh":this.render(),this.toast("Data refreshed from device storage.","info");break;case"load":this.loadSave(o);break;case"resume":this.view="hub",this.render();break;case"delete":this.deleteSave(o);break;case"recover":this.recoverSave(o);break;case"rename":this.openRename();break;case"appearance":this.openAppearance();break;case"view-match-report":this.openMatchReport(t.dataset.matchId);break;case"contract-talks":this.openContractTalks();break;case"contract-push":this.pushContractTerms();break;case"contract-accept":this.signContractRenewal();break;case"transfer-request":this.requestTransferOffers();break;case"transfer-review":this.openTransferOffer(t.dataset.offerId);break;case"transfer-accept":this.acceptTransferOffer(t.dataset.offerId);break;case"transfer-reject":this.rejectTransferOffer(t.dataset.offerId);break;case"media-press":this.openMediaPress();break;case"media-answer":this.answerMediaPress(t.dataset.responseId);break;case"media-skip":this.skipMediaPress();break;case"international-report":this.reportForInternational();break;case"international-withdraw":this.withdrawFromInternational();break;case"daily-activity":this.doDailyActivity(t.dataset.activityId);break;case"team-talk":this.deliverTeamTalk(t.dataset.talkId);break;case"relationship-talk":this.talkToContact(t.dataset.npcId,t.dataset.approach);break;case"rival-claim":this.claimRivalry();break;case"sponsor-sign":this.signSponsorship(t.dataset.offerId);break;case"sponsor-decline":this.declineSponsorship(t.dataset.offerId);break;case"set-number":this.setSquadNumber();break;case"grant-xp":this.runAction("player.grantXp",{amount:900,reason:"foundation-control"},"Development XP added.");break;case"upgrade-attribute":this.upgradeAttribute(t.dataset.key);break;case"train":this.train(t.dataset.drillId);break;case"unlock-playstyle":this.unlockPlaystyle(t.dataset.playstyleId);break;case"advance":{const c=Number(t.dataset.days)||1;this.advanceDays(c);break}case"next-season":this.startNextSeason();break;case"play-match":this.playNextMatch();break;case"sim-match":this.simulateNextMatch();break;case"central-sim":this.toggleCentralSim();break;case"admin-grant":this.adminGrant(t.dataset.grant);break;case"admin-unlock":this.unlockAdmin();break;case"social-platform":this.selectSocialPlatform(t.dataset.platform);break;case"social-create":this.openSocialAccount(t.dataset.platform);break;case"social-post":this.publishSocialPost(t.dataset.platform);break;case"shop-buy":this.buyShopItem(t.dataset.itemId);break;case"shop-buy-house":this.runPortfolioAction("shop.buyHouse",{houseId:t.dataset.houseId},"Home purchased.");break;case"shop-build-house":this.runPortfolioAction("shop.buildHouse",{name:document.getElementById("f23-custom-house-name")?.value??"",city:document.getElementById("f23-custom-house-city")?.value??"",investment:document.getElementById("f23-custom-house-budget")?.value??""},"Custom home built.");break;case"shop-hire-agent":this.runPortfolioAction("shop.hireAgent",{agentId:t.dataset.agentId},"Agent hired.");break;case"shop-buy-club":this.runPortfolioAction("shop.buyClubStake",{clubId:t.dataset.clubId,stakePct:t.dataset.stakePct},"Club stake purchased.");break;case"shop-buy-brand":this.runPortfolioAction("shop.buyBrand",{brandId:t.dataset.brandId},"Brand acquired.");break;case"shop-launch-brand":this.runPortfolioAction("shop.launchBrand",{name:document.getElementById("f23-custom-brand-name")?.value??"",sector:document.getElementById("f23-custom-brand-sector")?.value??"FASHION",color:document.getElementById("f23-custom-brand-color")?.value??"#3d6ea8",investment:document.getElementById("f23-custom-brand-budget")?.value??""},"Brand launched.");break;case"international-sim":this.simulateInternational(t.dataset.competitionId);break;case"pathway-promote":this.runAction("pathway.promote",{},"Promotion accepted. Your pathway has moved up.");break;case"pathway-loan-request":this.runAction("pathway.requestLoan",{},"Loan offers are on the table.");break;case"pathway-loan-accept":this.runAction("pathway.acceptLoan",{offerId:t.dataset.offerId},"Loan move completed.");break;case"pathway-loan-reject":this.runAction("pathway.rejectLoan",{offerId:t.dataset.offerId},"Loan offer declined.");break;case"pathway-loan-negotiate":this.runAction("pathway.negotiateLoan",{offerId:t.dataset.offerId},"Loan terms improved.");break;case"pathway-negotiate-permanent":this.runAction("pathway.negotiatePermanent",{},"Permanent contract terms improved.");break;case"pathway-sign-permanent":this.runAction("pathway.signPermanent",{},"The loan move is now permanent.");break;case"pathway-return":this.runAction("pathway.returnLoan",{},"You have returned to your parent club.");break;case"career-page":this.setCareerPage(t.dataset.page);break;case"f23-tab":this.setFifaTab(t.dataset.group,t.dataset.tab);break;case"f23-jump":this.jumpToFifaSection(t.dataset.target);break;case"f23-calendar-month":this.shiftFifaCalendar(Number(t.dataset.delta)||0);break;case"f23-calendar-day":this.selectFifaDate(t.dataset.date);break;case"f23-simulate":this.simulateToSelectedDate(t.dataset.date);break;case"f23-setting":this.updateFifaSetting(t.dataset.setting,t.dataset.value);break;case"add-item":this.addItem();break;case"equip-item":this.runAction("inventory.equip",{itemId:t.dataset.itemId},"Item equipped.");break;case"save-now":this.saveNow();break;case"reload":this.reloadFromDisk();break;case"verify":this.verifyData();break;case"delete-career":this.deleteActiveCareer();break}}createCareer(a){try{const e=this.engine.createCareer({profile:a,settings:{autoSave:!0}});return e.ok?(this.lastSavedBytes=e.summary?.bytes??null,this.lastSavedFor=e.saveId,this.closeCreate(),this.view="hub",this.activePage="central",this.toast(`Career created — ${e.summary?.clubName??"welcome to the club"}.`,"success"),this.render(),{ok:!0}):{ok:!1,message:e.message??"The career could not be created."}}catch(e){return{ok:!1,message:e?.message??"The career could not be created."}}}handleRenameSubmit(a){a.preventDefault();const e=this.engine.dispatch("player.rename",{firstName:this.el.renameFirstName.value.trim(),lastName:this.el.renameLastName.value.trim(),knownAs:this.el.renameKnownAs.value.trim()});if(!e.ok){this.el.renameError.textContent=e.message??"The name could not be saved.";return}this.closeRename(),this.toast("Player profile updated.","success"),this.render()}openCreate(){this.el.createModal.querySelector(".career-creator-card")?.setAttribute("aria-label","Create your player"),this.showModal(this.el.createModal),this.creator.open()}openAppearance(){const a=this.engine.getState();if(!a)return;const e=W(a);if(!e)return;const t=B(a);this.el.createModal.querySelector(".career-creator-card")?.setAttribute("aria-label","Edit player appearance"),this.showModal(this.el.createModal),this.creator.openAppearance({player:e,club:t,scenarioId:a.career.origin?.scenarioId??"academy",age:Sa(e,a.career.date),onSubmit:n=>this.saveAppearance(n)})}saveAppearance(a){const e=this.engine.dispatch("player.updateAppearance",{appearance:a});return e.ok?(this.closeCreate(),this.toast("Appearance and kit updated.","success"),this.render(),{ok:!0}):{ok:!1,message:e.message??"The appearance could not be saved."}}closeCreate(){this.hideModal(this.el.createModal),this.el.createModal.querySelector(".career-creator-card")?.setAttribute("aria-label","Create your player"),this.creator.close()}openRename(){const a=this.engine.getState()?W(this.engine.getState()):null;a&&(this.el.renameError.textContent="",this.el.renameFirstName.value=a.identity.firstName,this.el.renameLastName.value=a.identity.lastName,this.el.renameKnownAs.value=a.identity.knownAs&&a.identity.knownAs!==a.identity.lastName?a.identity.knownAs:"",this.showModal(this.el.renameModal),setTimeout(()=>this.el.renameFirstName.focus(),40))}closeRename(){this.hideModal(this.el.renameModal)}openMatchReport(a){const e=this.engine.getState();if(!e)return;const t=Es(e,a);if(!t){this.toast("That match report could not be found.","error");return}const n=t.result==="W"?"WIN":t.result==="D"?"DRAW":"DEFEAT",o=t.opponent?.name??"Opponent",c=document.getElementById("matchReportTitle");c&&(c.textContent=`${t.playerClub?.name??"Career club"} vs ${o}`);const p=t.stats?`<div class="match-report" aria-label="Archived match statistics">
          <div class="match-report-head">
            <div class="report-team home"><i class="report-swatch"></i><b>${s(t.playerClub?.shortName??"—")}</b></div>
            <span>TEAM STATS</span>
            <div class="report-team away"><b>${s(t.opponent?.shortName??"—")}</b><i class="report-swatch"></i></div>
          </div>
          <div class="report-rows">
            ${_t({stats:t.stats,possession:t.stats.possession}).map(h=>`<div class="report-row">
                  <div class="report-row-head"><b>${h.homeText}</b><span>${h.label}</span><b>${h.awayText}</b></div>
                  <div class="report-bars"><div class="home"><i style="width:${h.homeBar}%"></i></div><div class="away"><i style="width:${h.awayBar}%"></i></div></div>
                </div>`).join("")}
          </div>
        </div>`:'<p class="archive-missing">Detailed team statistics were not recorded for this match.</p>';this.el.matchReportBody.innerHTML=`
      <div class="archive-report-head">
        <div class="archive-competition">${s(t.competitionName)} · Round ${s(t.round)} · ${s(t.venue)}</div>
        <div class="archive-scoreline">
          <div class="archive-side">
            ${Y(t.playerClub,"archive-crest")}
            <strong>${s(t.playerClub?.shortName??"—")}</strong>
          </div>
          <div class="archive-result">
            <span class="result-verdict ${t.result==="W"?"win":t.result==="D"?"draw":"defeat"}">${s(n)}</span>
            <b>${s(t.scoreline)}</b>
          </div>
          <div class="archive-side">
            ${Y(t.opponent,"archive-crest")}
            <strong>${s(o)}</strong>
          </div>
        </div>
        <p class="archive-meta">${s(A(t.date))} · ${s(t.playerClub?.name??"—")} vs ${s(o)}${t.motm?'<span class="motm-badge">★ MAN OF THE MATCH</span>':""}</p>
      </div>
      ${p}
      <div class="career-result-summary archive-player-summary">
        <div class="career-result-context">YOUR PERFORMANCE</div>
        <div class="career-result-grid">
          <div><span>RATING</span><b>${t.playerRating?Number(t.playerRating).toFixed(1):"—"}</b></div>
          <div><span>GOALS</span><b>${s(t.goals??0)}</b></div>
          <div><span>ASSISTS</span><b>${s(t.assists??0)}</b></div>
          <div><span>MINUTES</span><b>${s(t.minutes??0)}</b></div>
        </div>
      </div>
    `,this.showModal(this.el.matchReportModal)}closeMatchReport(){this.hideModal(this.el.matchReportModal)}openMediaPress(){const a=this.engine.getState();if(!a)return;const e=Je(a);if(!e.available||!e.question){this.toast(e.reason??"Media duties are not open.","info");return}this.renderMediaPress(e),this.showModal(this.el.mediaModal)}renderMediaPress(a){if(!a?.question){this.closeMediaPress();return}const e=a.journalist?.name??a.outlet,t=e.split(" ").map(n=>n[0]).slice(0,2).join("");this.el.mediaModalBody.innerHTML=`
      <div class="media-journalist-line">
        <span class="press-avatar">${s(t)}</span>
        <div><b>${s(e)}</b><small>${s(a.outlet)} · PRESS TRUST ${s(a.journalist?.trust??"—")} / 100</small></div>
        <span class="press-context">${s(a.question.contextLabel)}</span>
      </div>
      <div class="media-question-slide">
        <span class="eyebrow">POST-MATCH · ${s(a.lastMatch?.opponent?.shortName??"PRESS ROOM")}</span>
        <p>“${s(a.question.prompt)}”</p>
        <small>${s(a.question.detail)}</small>
      </div>
      <div class="media-answer-list">
        ${a.question.responses.map(n=>`<article class="media-answer-card">
              <div class="media-answer-head"><span>${s(n.label)}</span><small>${s(n.tone)}</small></div>
              <p>“${s(n.quote)}”</p>
              <div class="media-answer-effects">${n.effects.map(o=>`<span class="${o.value>0?"positive":"negative"}">${o.value>0?"+":""}${s(o.value)} ${s(o.label)}</span>`).join("")}</div>
              <button class="btn btn-small" type="button" data-action="media-answer" data-response-id="${s(n.id)}">GIVE THIS ANSWER</button>
            </article>`).join("")}
      </div>
    `,this.el.mediaModalActions.innerHTML=`
      <button class="btn" type="button" data-action="media-skip">SKIP MEDIA DUTIES</button>
    `}closeMediaPress(){this.el.mediaModal&&this.hideModal(this.el.mediaModal)}answerMediaPress(a){if(!a)return;const e=this.engine.dispatch("media.respond",{responseId:a});if(!e.ok){this.toast(e.message??"The answer could not be filed.","error");return}const t=e.events.find(n=>n.type==="media:conference");this.closeMediaPress(),this.render(),this.toast(`Answer filed${t?` · ${ct(t.effects)}`:""} · “${t?.headline??"Story published"}”.`,"success")}skipMediaPress(){const a=this.engine.dispatch("media.skip",{});if(!a.ok){this.toast(a.message??"The press room could not be left.","error");return}const e=a.events.find(t=>t.type==="media:conference-skipped");this.closeMediaPress(),this.render(),this.toast(`No comment${e?` · ${ct(e.effects)}`:""} · “${e?.headline??"A story was written"}”.`,"info")}reportForInternational(){if(!this.engine.getState())return;const e=this.engine.dispatch("international.report",{});if(!e.ok){this.toast(e.message??"The national call-up could not be accepted.","error");return}const t=e.events.find(n=>n.type==="international:call-up");this.render(),this.toast(`Reported for duty${t?` · ${t.teamName} · coach trust ${t.coachTrust}`:""}.`,"success")}withdrawFromInternational(){if(!this.engine.getState())return;const e=this.engine.dispatch("international.withdraw",{});if(!e.ok){this.toast(e.message??"The international withdrawal could not be completed.","error");return}const t=e.events.find(n=>n.type==="international:withdrawal");this.render(),this.toast(`Withdrew from camp${t?` · ${t.teamName} · coach trust ${t.coachTrust}`:""}.`,"info")}openContractTalks(){const a=this.engine.getState();if(!a)return;const e=Fa(a);if(!e.available){this.toast(e.reason??"Renewal talks are not open.","info");return}this.renderContractTalks(),this.showModal(this.el.contractModal)}renderContractTalks(){const a=this.engine.getState();if(!a)return;const e=Fa(a),t=Ha(a);if(!e.available||!t){this.closeContractTalks();return}const n=e.rounds===0?"You have earned the right to talk about your future. This is a strong opening offer.":e.rounds<e.maxRounds?"I can take this back to the club once more. It will cost us some goodwill.":"This is as far as I can take it. The club will not move again.",o=e.rounds>=e.maxRounds?"FINAL OFFER":e.trust<e.trustFloor?"AGENT REFUSES":"PUSH FOR BETTER TERMS";this.el.contractModalBody.innerHTML=`
      <div class="contract-agent-line">
        <span class="contract-avatar">${s((e.agentName||"A").split(" ").map(c=>c[0]).slice(0,2).join(""))}</span>
        <div><b>${s(e.agentName)}</b><small>AGENT · TRUST ${s(e.trust)} / 100 · ${s(e.rounds)} / ${s(e.maxRounds)} PUSHES</small></div>
      </div>
      <p class="contract-quote">“${s(n)}”</p>
      <div class="contract-offer-grid">
        <div><span>CURRENT WAGE</span><b>${b(t.weeklyWage)}</b><small>until ${s(A(t.endDate))}</small></div>
        <div class="contract-offer-highlight"><span>PROPOSED WAGE</span><b>${b(e.weeklyWage)}</b><small>${e.raise>=0?"+":""}${e.raisePct}% · ${s(e.termYears)} years</small></div>
        <div><span>SIGNING BONUS</span><b>${b(e.signingBonus)}</b><small>paid on signing</small></div>
        <div><span>NEW END DATE</span><b>${s(A(e.endDate))}</b><small>goal ${b(e.goalBonus)} · apps ${b(e.appearanceBonus)}</small></div>
      </div>
      <p class="contract-note">${e.canPush?`Each push spends ${s(e.pushCost)} agent trust and improves the club's terms.`:e.rounds>=e.maxRounds?"The agent has made their final offer. Sign it or walk away.":`Agent trust is below ${s(e.trustFloor)}. They will not push the club any further.`}</p>
      <p class="contract-expiry">Current deal expires in ${s(e.daysRemaining)} days · ${s(e.statusLabel)}</p>
    `,this.el.contractModalActions.innerHTML=`
      <button class="btn btn-primary" type="button" data-action="contract-accept">SIGN RENEWAL</button>
      <button class="btn" type="button" data-action="contract-push" ${e.canPush?"":"disabled"}>${s(o)}</button>
    `}closeContractTalks(){this.hideModal(this.el.contractModal)}signContractRenewal(){const a=this.engine.dispatch("contract.renew",{});if(!a.ok){this.toast(a.message??"The renewal could not be signed.","error");return}const e=a.events.find(t=>t.type==="contract:renewed");this.closeContractTalks(),this.render(),this.toast(`Contract renewed${e?` · ${e.termYears} years · ${b(e.weeklyWage)} per week`:""}.`,"success")}pushContractTerms(){const a=this.engine.dispatch("contract.negotiate",{});if(!a.ok){this.toast(a.message??"The agent will not push for better terms.","error");return}const e=a.events.find(t=>t.type==="contract:renewal-pushed");this.renderContractTalks(),this.toast(`Agent pushed the club${e?` · trust ${e.trustBefore} → ${e.trustAfter}`:""}.`,"info")}requestTransferOffers(){const a=this.engine.dispatch("transfer.request",{});if(!a.ok){this.toast(a.message??"Your agent could not find an offer.","error");return}const e=a.events.find(n=>n.type==="transfer:offers-received"),t=(e?.offers??[]).map(n=>n.clubName).filter(Boolean);this.render(),this.toast(`Agent found ${e?.count??0} interested club${e?.count===1?"":"s"}${t.length?`: ${t.join(", ")}`:""}. Review the offers.`,"success")}openTransferOffer(a){const e=this.engine.getState();if(!e)return;const t=Ga(e),n=t.offers.find(o=>o.id===a&&o.active);if(!n){this.toast("That transfer offer is no longer available.","info");return}this.renderTransferOffer(n,t),this.showModal(this.el.transferModal)}renderTransferOffer(a,e){const t=this.engine.getState();if(!t)return;const n=_(t),o=Ba(t),c=a.fromAcademyLevel??(o.academy?o.stage:null),p=ya.find(d=>d.id===a.squadRole)?.label??a.squadRole,h=a.interest>=80?"They have watched you closely and want you at the centre of the project.":a.interest>=65?"They see a real first-team opportunity and are ready to back it with a contract.":"They believe there is more to come from you and want you in their squad.",v=document.getElementById("transferModalTitle");v&&(v.textContent=`${a.club?.name??"Club"} offer`),this.el.transferModalBody.innerHTML=`
      <div class="transfer-route">
        <div class="transfer-route-club">
          ${Y(e.currentClub,"transfer-modal-crest")}
          <span>FROM</span>
          <b>${s(e.currentClub?.name??"Current club")}</b>
          <small>${s(n?.name??"—")}</small>
        </div>
        <span class="transfer-route-arrow" aria-hidden="true">→</span>
        <div class="transfer-route-club to">
          ${Y(a.club,"transfer-modal-crest")}
          <span>TO</span>
          <b>${s(a.club?.name??"Interested club")}</b>
          <small>${s(a.leagueName)} · ${s(a.club?.rating??"—")} OVR${c?` · ${s(c.toUpperCase())} ACADEMY EXIT`:""}</small>
        </div>
      </div>
      <p class="transfer-quote">“${s(h)}”</p>
      <div class="transfer-offer-grid">
        <div><span>CURRENT WAGE</span><b>${b(e.currentWage)}</b><small>per week</small></div>
        <div class="transfer-offer-highlight"><span>PROPOSED WAGE</span><b>${b(a.weeklyWage)}</b><small>${a.wageRise>=0?"+":""}${s(a.wageRisePct)}% · per week</small></div>
        <div><span>TRANSFER FEE</span><b>${b(a.fee,{compact:!0})}</b><small>paid by ${s(a.club?.shortName??"the club")}</small></div>
        <div><span>SIGNING BONUS</span><b>${b(a.signingBonus)}</b><small>paid on completion</small></div>
        <div><span>CONTRACT</span><b>${s(a.termYears)} years</b><small>until ${s(A(a.endDate))} · ${s(p)}</small></div>
        <div><span>MANAGER</span><b>${s(a.managerName)}</b><small>${s(a.club?.formation??"—")} · ${s(a.club?.city??"—")}</small></div>
      </div>
      ${c?`<p class="transfer-academy-note"><b>${s(c.toUpperCase())} ACADEMY EXIT</b> Accepting this move ends your ${s(c.toUpperCase())} academy pathway and puts you in the new club's senior squad, with first-team fixtures from the next matchday.</p>`:""}
      <p class="transfer-note">Accepting changes your club, contract, squad number, manager and home city immediately. Your match history, attributes and development stay with you.</p>
      <p class="transfer-expiry">Offer interest ${s(a.interest??0)}% · expires ${s(A(a.expiresDate))} · window closes ${s(A(e.window.endDate))}</p>
    `,this.el.transferModalActions.innerHTML=`
      <button class="btn btn-primary" type="button" data-action="transfer-accept" data-offer-id="${s(a.id)}">ACCEPT &amp; SIGN</button>
      <button class="btn" type="button" data-action="transfer-reject" data-offer-id="${s(a.id)}">DECLINE OFFER</button>
    `}closeTransferOffer(){this.hideModal(this.el.transferModal)}acceptTransferOffer(a){if(!a)return;const e=this.engine.dispatch("transfer.accept",{offerId:a});if(!e.ok){this.toast(e.message??"The transfer could not be completed.","error"),this.closeTransferOffer(),this.render();return}const t=e.events.find(n=>n.type==="transfer:completed");this.closeTransferOffer(),this.render(),this.toast(`Transfer complete${t?` · ${t.toClubName} · ${t.termYears} years`:""}.`,"success")}rejectTransferOffer(a){if(!a)return;const e=this.engine.dispatch("transfer.reject",{offerId:a});if(!e.ok){this.toast(e.message??"The offer could not be declined.","error"),this.closeTransferOffer(),this.render();return}const t=e.events.find(n=>n.type==="transfer:rejected");this.closeTransferOffer(),this.render(),this.toast(`Declined ${t?.clubName??"the offer"}.`,"info")}showModal(a){a.classList.remove("hidden"),a.setAttribute("aria-hidden","false")}hideModal(a){a.classList.add("hidden"),a.setAttribute("aria-hidden","true")}closeScreen(){if(!this.el.createModal.classList.contains("hidden")){this.closeCreate();return}if(!this.el.renameModal.classList.contains("hidden")){this.closeRename();return}if(!this.el.matchReportModal.classList.contains("hidden")){this.closeMatchReport();return}if(!this.el.contractModal.classList.contains("hidden")){this.closeContractTalks();return}if(!this.el.transferModal.classList.contains("hidden")){this.closeTransferOffer();return}if(!this.el.mediaModal.classList.contains("hidden")){this.closeMediaPress();return}if(this.stopCentralSim({render:!1}),this.engine.active){const a=this.engine.flush("leave-screen");if(!a.ok){this.toast(a.message??"The career could not be saved.","error");return}}this.screens.back()}loadSave(a){if(!a)return;const e=this.engine.loadCareer(a);if(!e.ok){this.lastLoadError=e,this.pendingRecovery=e.backupAvailable?{saveId:a}:null,this.view="slots",this.toast(e.message??"Career could not be loaded.","error"),this.render();return}this.view="hub",this.activePage="central",this.pendingRecovery=null,this.lastLoadError=null,this.lastSavedBytes=null,this.lastSavedFor=null,this.toast("Career loaded from device storage.","success"),this.render()}recoverSave(a){if(!a)return;const e=this.engine.recoverBackup(a);if(!e.ok){this.toast(e.message??"The backup could not be recovered.","error");return}this.pendingRecovery=null,this.view="hub",this.toast(e.warning??"Backup recovered.","success"),this.render()}deleteSave(a){if(!a)return;if(this.confirmDeleteId!==a){this.confirmDeleteId=a,clearTimeout(this.confirmTimer),this.confirmTimer=setTimeout(()=>{this.confirmDeleteId=null,this.mounted&&this.render()},5e3),this.render(),this.toast("Press delete again to confirm.","info");return}clearTimeout(this.confirmTimer),this.confirmDeleteId=null;const e=this.engine.deleteCareer(a);if(!e.ok){this.toast(e.message??"Career could not be deleted.","error"),this.render();return}this.lastSavedBytes=this.engine.activeSaveId===a?null:this.lastSavedBytes,this.toast("Career deleted from this device.","success"),this.render()}deleteActiveCareer(){const a=this.engine.activeSaveId;if(!a)return;if(!this.confirmDeleteCareer){this.confirmDeleteCareer=!0,clearTimeout(this.confirmTimer),this.confirmTimer=setTimeout(()=>{this.confirmDeleteCareer=!1,this.mounted&&this.render()},5e3),this.render(),this.toast("Press delete career again to confirm.","info");return}clearTimeout(this.confirmTimer),this.confirmDeleteCareer=!1;const e=this.engine.deleteCareer(a);if(!e.ok){this.toast(e.message??"Career could not be deleted.","error");return}this.view="slots",this.lastSavedBytes=null,this.lastSavedFor=null,this.toast("Career deleted from this device.","success"),this.render()}setCareerPage(a){if(!$a.some(n=>n.id===a))return;if(this.activePage=a,a==="season"&&!this.fifaCalendar){const n=this.engine.getState()?.career?.date;n&&(this.fifaCalendar={year:Number(n.slice(0,4)),month:Number(n.slice(5,7))-1})}const e=this.el.hub.querySelector(".hub-grid");e&&(e.dataset.activePage=a);const t=this.el.hub.querySelector(".hub-dashboard");t&&t.classList.toggle("hidden",a!=="central"),this.el.hub.querySelectorAll('[data-action="career-page"]').forEach(n=>{const o=n.dataset.page===a;n.classList.toggle("active",o),n.classList.toggle("is-active",o),o?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),this.scrollToFifaPage(a)}scrollToFifaPage(a,e="smooth"){const t=this.el.hub.querySelector(`.f23-page[data-career-page="${a}"]`);if(!t)return;const n=this.el.career.getBoundingClientRect(),o=this.el.career.scrollTop+t.getBoundingClientRect().top-n.top-112;this.el.career.scrollTo({top:Math.max(0,o),behavior:e})}setFifaTab(a,e){!a||!e||!this.fifaTabs[a]||(this.fifaTabs[a]=e,this.activePage!==a&&(this.activePage=a),this.renderHub(),requestAnimationFrame(()=>this.scrollToFifaPage(a)))}jumpToFifaSection(a){if(!a)return;const e=document.getElementById(a);if(!e)return;const t=this.el.career.getBoundingClientRect(),n=this.el.career.scrollTop+e.getBoundingClientRect().top-t.top-112;this.el.career.scrollTo({top:Math.max(0,n),behavior:"smooth"})}shiftFifaCalendar(a){if(!a)return;const e=this.engine.getState();if(!e?.career)return;const t=this.fifaCalendar??{year:Number(e.career.date.slice(0,4)),month:Number(e.career.date.slice(5,7))-1},n=new Date(Date.UTC(t.year,t.month+a,1));this.fifaCalendar={year:n.getUTCFullYear(),month:n.getUTCMonth()},this.renderHub()}selectFifaDate(a){a&&(this.fifaSelectedDate=a,this.fifaCalendar={year:Number(a.slice(0,4)),month:Number(a.slice(5,7))-1},this.renderHub())}simulateToSelectedDate(a){const e=this.engine.getState();if(!e?.career||!a)return;let t=Ca(e.career.date,a);if(t<=0){this.toast("Select a future date to simulate forward.","info");return}let n=0,o=0;for(;t>0&&o<16;){const c=Math.min(30,t),p=this.engine.dispatch("career.advanceDays",{days:c});if(!p.ok){this.toast(p.message??"The calendar could not advance to that date.","error");break}n+=c,t-=c,o+=1}if(n>0){const c=this.engine.getState();this.fifaCalendar={year:Number(c.career.date.slice(0,4)),month:Number(c.career.date.slice(5,7))-1},this.toast(`Simulated ${n} day${n===1?"":"s"} to ${A(c.career.date)}.`,"success"),this.renderHub()}}updateFifaSetting(a,e){if(!a)return;let t=e;a==="matchLengthMinutes"&&(t=Number(e)),a==="autoSave"&&(t=e==="true");const n=this.engine.dispatch("career.updateSettings",{[a]:t});if(!n.ok){this.toast(n.message??"That setting could not be changed.","error");return}this.renderHub()}cycleFifaPage(a){const e=$a.findIndex(n=>n.id===this.activePage),t=$a[(e+a+$a.length)%$a.length];t&&this.setCareerPage(t.id)}handleCareerKey(a){if(!this.mounted||this.view!=="hub"||this.el.career.classList.contains("hidden")||a.defaultPrevented||a.altKey||a.ctrlKey||a.metaKey)return;const e=String(a.target?.tagName??"").toLowerCase();["input","textarea","select"].includes(e)||a.target?.isContentEditable||(a.key==="q"||a.key==="Q"||a.key==="["?(a.preventDefault(),this.cycleFifaPage(-1)):a.key==="e"||a.key==="E"||a.key==="]"?(a.preventDefault(),this.cycleFifaPage(1)):["1","2","3","4"].includes(a.key)&&(a.preventDefault(),this.setCareerPage($a[Number(a.key)-1].id)))}startGamepadNavigation(){if(this.fifaPadTimer||typeof window>"u"||!navigator.getGamepads)return;const a=(e,t)=>e.some(n=>!!n?.buttons?.[t]?.pressed);this.fifaPadTimer=window.setInterval(()=>{if(!this.mounted||this.view!=="hub"||this.el.career.classList.contains("hidden"))return;const e=[...navigator.getGamepads()].filter(Boolean);if(!e.length)return;const t=a(e,14),n=a(e,15),o=a(e,0);if(t&&!this.fifaPadState.left&&this.cycleFifaPage(-1),n&&!this.fifaPadState.right&&this.cycleFifaPage(1),o&&!this.fifaPadState.accept){const c=document.activeElement;c&&c!==document.body&&this.el.hub.contains(c)&&c.click()}this.fifaPadState={...this.fifaPadState,left:t,right:n,accept:o}},130)}playNextMatch(){if(!this.onPlayMatch){this.toast("Matchday is not available in this session.","error");return}try{const a=this.onPlayMatch(),e=t=>{t&&t.ok===!1&&this.toast(t.message??"The match could not be started.","error")};a&&typeof a.then=="function"?a.then(e,t=>this.toast(t?.message??"The match could not be started.","error")):e(a)}catch(a){this.toast(a?.message??"The match could not be started.","error")}}toggleCentralSim(){if(this.centralSimTimer){this.stopCentralSim();return}!this.engine.getState()||this.activePage!=="central"||(this.centralSimTimer=window.setInterval(()=>this.centralSimTick(),1e3),this.renderHub(),this.toast("Simulating one day per second. Tap STOP to pause.","info"))}centralSimTick(){if(!this.mounted||this.view!=="hub"||this.activePage!=="central"){this.stopCentralSim({render:!1});return}const a=this.engine.dispatch("career.advanceDays",{days:1});if(!a.ok){const t=this.engine.getState(),n=t?Na(t):null;if(!!(n&&t.career?.date&&n.date<=t.career.date&&this.onSimulateMatch)){this.stopCentralSim({render:!1}),Promise.resolve().then(()=>this.onSimulateMatch()).then(c=>{c?.ok?(this.renderHub(),this.toast("Match simulated — the calendar keeps rolling.","success"),this.mounted&&this.view==="hub"&&(this.centralSimTimer=window.setInterval(()=>this.centralSimTick(),1e3))):(this.toast(c?.message??"The matchday could not be simulated.","error"),this.renderHub())}).catch(c=>{this.toast(c?.message??"The matchday could not be simulated.","error"),this.renderHub()});return}this.stopCentralSim({render:!1}),this.toast(a.message??"The calendar stopped at the next fixture.","info"),this.renderHub();return}this.renderHub();const e=this.el.career.querySelector(".f23-week-strip");e&&(e.classList.add("is-advancing"),window.setTimeout(()=>e.classList.remove("is-advancing"),460))}stopCentralSim({render:a=!0}={}){this.centralSimTimer&&(window.clearInterval(this.centralSimTimer),this.centralSimTimer=null),a&&this.mounted&&this.renderHub()}unlockAdmin(){const a=this.el.hub.querySelector("#adminCode");if(String(a?.value??"").trim()!=="4141"){a&&(a.value="",a.focus()),this.toast("Incorrect admin code.","error");return}this.adminUnlocked=!0,this.renderHub(),this.toast("Admin sandbox unlocked for this session.","success")}selectSocialPlatform(a){a&&(this.fifaSocialPlatform=a,this.renderHub())}openSocialAccount(a){const e=a||this.fifaSocialPlatform,t=this.el.hub.querySelector("#socialHandleInput"),n=this.engine.dispatch("social.openAccount",{platformId:e,handle:t?.value??""});if(!n.ok){this.toast(n.message??"The account could not be opened.","error");return}const o=n.events?.find(c=>c.type==="career:social-account-opened")?.account;this.toast(`Account opened — @${o?.handle??"player"}.`,"success"),this.renderHub()}publishSocialPost(a){const e=a||this.fifaSocialPlatform,t=this.el.hub.querySelector("#socialPostText"),n=this.engine.dispatch("social.post",{platformId:e,text:t?.value??""});if(!n.ok){this.toast(n.message??"The post could not be published.","error");return}this.toast("Posted to your feed.","success"),this.renderHub()}buyShopItem(a){const e=this.engine.dispatch("shop.purchase",{itemId:a});if(!e.ok){this.toast(e.message??"That purchase could not be completed.","error");return}const t=e.events?.find(n=>n.type==="shop:purchased");this.toast(`${t?.name??"Purchase"} added${t?.purchased?" to your inventory":""}.`,"success"),this.renderHub()}runPortfolioAction(a,e,t){const n=this.engine.dispatch(a,e);if(!n.ok){this.toast(n.message??"That portfolio action could not be completed.","error");return}this.toast(n.events?.find(o=>o.message)?.message??t,"success"),this.renderHub()}simulateInternational(a){const e=this.engine.dispatch("competition.simulateInternational",{competitionId:a});if(!e.ok){this.toast(e.message??"The tournament could not be simulated.","error");return}const t=e.events?.find(n=>n.type==="competition:international-complete");this.toast(`${t?.winnerTeam?.name??"Winner"} won the ${t?.competition?.name??"tournament"}.`,"success"),this.renderHub()}adminGrant(a){if(!a)return;const e=this.engine.dispatch("career.adminGrant",{grant:a});if(!e.ok){this.toast(e.message??"That admin grant could not be applied.","error");return}const t=e.events?.find(n=>n.type==="career:admin-grant")?.message;this.toast(t??"Admin grant applied.","success"),this.renderHub()}simulateNextMatch(){if(!this.onSimulateMatch){this.toast("Match simulation is not available in this session.","error");return}try{const a=t=>{if(!t||t.ok===!1){this.toast(t?.message??"The match could not be simulated.","error");return}const n=t.event?.match??null,o=t.event?.appearance??n??null,c=n?.notes?.find(v=>String(v).startsWith("Penalties ")),p=`${t.event?.scoreline??"Full time"}${c?` · ${c}`:""}`,h=o?.didPlay?`You played ${o.minutes??0} mins · ${n?.goals??0}G ${n?.assists??0}A${n?.playerRating?` · rating ${Number(n.playerRating).toFixed(1)}`:""}`:"You stayed on the bench — the manager did not use you.";this.toast(`SIMULATED · ${p} · ${h}`,"success"),this.renderHub()},e=this.onSimulateMatch();e&&typeof e.then=="function"?e.then(a,t=>{this.toast(t?.message??"The match could not be simulated.","error")}):a(e)}catch(a){this.toast(a?.message??"The match could not be simulated.","error")}}runAction(a,e,t){const n=this.engine.dispatch(a,e);return n.ok?(t&&this.toast(t,"success"),!0):(this.toast(n.message??"That action could not be completed.","error"),!1)}advanceDays(a){const e=this.engine.dispatch("career.advanceDays",{days:a});if(!e.ok){this.toast(e.message??"The calendar could not advance.","error");return}const t=e.events.find(c=>c.type==="finance:wage"),n=e.events.find(c=>c.type==="career:matchday"),o=`${a} day${a===1?"":"s"} advanced${t?" · wages paid":""}${n?" · matchday added":""}.`;this.toast(o,"success")}startNextSeason(){const a=this.engine.getState(),e=a?ve(a).nextSeasonLabel:"the next season",t=this.engine.dispatch("career.nextSeason",{});if(!t.ok){this.toast(t.message??"The next season could not be started.","error");return}const n=t.events.find(v=>v.type==="career:season-rolled-over"),o=n?.summary?.development?.user,c=o?.changes?.length?` · OVR ${o.overallBefore} → ${o.overallAfter}`:"",p=Number(n?.preSeasonOffers)||0,h=p?` · ${p} pre-season offer${p===1?"":"s"}`:"";this.render(),this.toast(n?`${n.fromSeason} archived · ${n.toSeason} season is ready${c}${h}.`:`${e} season is ready.`,"success")}unlockPlaystyle(a){const e=this.engine.dispatch("player.unlockPlaystyle",{playstyleId:a});if(!e.ok){this.toast(e.message??"That specialist path could not be unlocked.","error");return}const t=e.events.find(c=>c.type==="player:playstyle-unlocked");if(!t)return;const n=t.boosts.map(c=>`${c.label} ${c.from} → ${c.to}`).join(", "),o=t.overallTo!==t.overallFrom?` · OVR ${t.overallFrom} → ${t.overallTo}`:"";this.toast(`${t.label} unlocked: ${n}${o}. ${t.skillPoints} development point${t.skillPoints===1?"":"s"} left.`,"success")}train(a){const e=this.engine.dispatch("career.train",{drillId:a});if(!e.ok){this.toast(e.message??"The training session could not be completed.","error");return}const t=e.events.find(c=>c.type==="career:training");if(!t)return;const n=t.overallTo!==t.overallFrom?` · OVR ${t.overallFrom} → ${t.overallTo}`:"",o=t.levels?` · LEVEL ${t.level}`:"";this.toast(`${t.drillLabel}: ${t.label} ${t.from} → ${t.to}${n}. Fitness ${Math.round(t.fitnessBefore)} → ${Math.round(t.fitnessAfter)}${o}.`,"success")}doDailyActivity(a){if(!a)return;const e=this.engine.dispatch("career.dailyActivity",{activityId:a});if(!e.ok){this.toast(e.message??"That daily-life activity could not be completed.","error");return}const t=e.events.find(o=>o.type==="career:daily-activity");if(!t)return;const n=Object.entries(t.effects).filter(([,o])=>o.delta!==0).map(([o,c])=>`${o} ${Math.round(c.before)} → ${Math.round(c.after)}`).join(" · ");this.render(),this.toast(`${t.label}${n?` · ${n}`:""}${t.cost?` · ${b(t.cost)}`:""}.`,"success")}deliverTeamTalk(a){if(!a)return;const e=this.engine.dispatch("career.teamTalk",{talkId:a});if(!e.ok){this.toast(e.message??"That team talk could not be delivered.","error");return}const t=e.events.find(n=>n.type==="career:team-talk");t&&this.toast(`${t.label} · squad morale ${t.moraleBefore} → ${t.moraleAfter} · next match rating ${t.ratingDelta>=0?"+":""}${Number(t.ratingDelta).toFixed(2)}.`,"success")}talkToContact(a,e){if(!a||!e)return;const t=this.engine.dispatch("relationship.talk",{npcId:a,approachId:e});if(!t.ok){this.toast(t.message??"That conversation could not happen.","error");return}const n=t.events.find(c=>c.type==="career:relationship-talk");if(!n)return;const o=[n.before.trust!==n.after.trust?`trust ${n.before.trust} → ${n.after.trust}`:"",n.before.affinity!==n.after.affinity?`affinity ${n.before.affinity} → ${n.after.affinity}`:"",n.before.respect!==n.after.respect?`respect ${n.before.respect} → ${n.after.respect}`:""].filter(Boolean);this.toast(`${n.label} with ${n.npcName}${o.length?` · ${o.join(" · ")}`:""}.`,"success")}claimRivalry(){const a=this.engine.dispatch("rival.claim",{});if(!a.ok){this.toast(a.message??"The rivalry reward cannot be claimed yet.","error");return}const e=a.events.find(t=>t.type==="career:rivalry-claimed");e&&this.toast(`Rivalry won against ${e.rivalName} · +${e.reward.xp} XP · ${b(e.reward.bonus)}.`,"success")}signSponsorship(a){if(!a)return;const e=this.engine.dispatch("sponsorship.sign",{offerId:a});if(!e.ok){this.toast(e.message??"That sponsorship could not be signed.","error");return}const t=e.events.find(n=>n.type==="career:sponsorship-signed");t&&this.toast(`${t.name} signed · ${b(t.signingBonus)} bonus · ${b(t.weeklyPay)} per week.`,"success")}declineSponsorship(a){if(!a)return;const e=this.engine.dispatch("sponsorship.decline",{offerId:a});if(!e.ok){this.toast(e.message??"That sponsorship offer could not be declined.","error");return}const t=e.events.find(n=>n.type==="career:sponsorship-declined");t&&this.toast(`${t.name} offer declined.`,"info")}upgradeAttribute(a){const e=this.engine.dispatch("player.upgradeAttribute",{key:a});if(!e.ok){this.toast(e.message??"That upgrade could not be completed.","error");return}const t=e.events.find(o=>o.type==="player:attribute-upgraded");if(!t)return;const n=t.overallTo!==t.overallFrom?` · OVR ${t.overallFrom} → ${t.overallTo}`:"";this.toast(`${t.label} ${t.from} → ${t.to}${n}. ${t.skillPoints} development point${t.skillPoints===1?"":"s"} left.`,"success")}setSquadNumber(){const a=this.el.hub.querySelector("#shirtNumberInput"),e=Number(a?.value);if(!Number.isInteger(e)||e<1||e>99){this.toast("Choose a whole number between 1 and 99.","error");return}this.runAction("player.setNumber",{number:e},`Squad number set to ${e}.`)}addItem(){const e=this.el.hub.querySelector("#itemTemplateSelect")?.value;e&&this.runAction("inventory.addItem",{templateId:e},"Equipment added to your inventory.")}saveNow(){const a=this.engine.flush("manual");if(!a.ok){this.toast(a.message??"The career could not be saved.","error");return}this.lastSavedBytes=a.bytes,this.lastSavedFor=this.engine.activeSaveId,this.toast(`Career saved · ${xa(a.bytes)}.`,"success"),this.render()}reloadFromDisk(){if(!this.engine.active)return;if(this.engine.getStatus().dirty&&!this.confirmReload){this.confirmReload=!0,clearTimeout(this.confirmTimer),this.confirmTimer=setTimeout(()=>{this.confirmReload=!1,this.mounted&&this.render()},5e3),this.render(),this.toast("Unsaved changes — press reload again to discard them.","info");return}this.confirmReload=!1;const a=this.engine.reloadActive();if(!a.ok){this.lastLoadError=a,this.pendingRecovery=a.backupAvailable?{saveId:this.engine.activeSaveId}:null,this.toast(a.message??"The career could not be reloaded.","error"),this.render();return}this.lastSavedBytes=null,this.lastSavedFor=null,this.toast("Reloaded from the last saved state.","success"),this.render()}verifyData(){const a=this.engine.verify();if(this.lastVerify=a,!a.ok){this.toast("Integrity check found problems. See the data panel.","error"),this.render();return}const e=a.validation.checks;this.toast(`Integrity verified — ${e.clubs} clubs, ${e.players} players, ${e.fixtures} fixtures, ${e.npcs} contacts.`,"success"),this.render()}toast(a,e="info"){this.el.toast&&(this.el.toast.textContent=a,this.el.toast.className=`career-toast show ${e}`,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.el.toast&&(this.el.toast.className="career-toast")},e==="error"?5200:3400))}hideToast(){clearTimeout(this.toastTimer),this.el.toast&&(this.el.toast.className="career-toast")}}function Mn(i){const a=new Nn(i);return{onEnter:()=>a.onEnter(),onExit:()=>a.onExit(),refresh:()=>a.refresh(),openNewCareer:()=>a.openNewCareer(),openSlots:()=>a.openSlots(),loadSave:e=>a.loadSave(e),lab:a}}export{Nn as CareerLab,Mn as initCareerLab};
