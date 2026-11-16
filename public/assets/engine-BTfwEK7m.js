var zh=Object.defineProperty,Nh=(n,e,t)=>e in n?zh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Uh=(n,e,t)=>Nh(n,e+"",t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kn="169",Oh=0,vo=1,Fh=2,Hl=1,Bh=2,xi=3,Mi=0,Vt=1,Ut=2,Di=0,Sa=1,xo=2,_o=3,yo=4,Hh=5,ji=100,Gh=101,Vh=102,Wh=103,Xh=104,Kh=200,qh=201,Yh=202,jh=203,an=204,sn=205,$h=206,Zh=207,Jh=208,Qh=209,ec=210,tc=211,ic=212,ac=213,sc=214,rn=0,nn=1,on=2,Ea=3,ln=4,hn=5,cn=6,un=7,Gl=0,rc=1,nc=2,Ii=0,oc=1,lc=2,hc=3,cc=4,uc=5,dc=6,pc=7,Vl=300,Aa=301,Ca=302,dn=303,pn=304,ir=306,Ws=1e3,_i=1001,fn=1002,Gt=1003,fc=1004,rs=1005,Qt=1006,cr=1007,Pi=1008,bi=1009,Wl=1010,Xl=1011,Qa=1012,qn=1013,ea=1014,li=1015,es=1016,Yn=1017,jn=1018,Ra=1020,Kl=35902,ql=1021,Yl=1022,ni=1023,jl=1024,$l=1025,Ta=1026,La=1027,$n=1028,Zn=1029,Zl=1030,Jn=1031,Qn=1033,Us=33776,Os=33777,Fs=33778,Bs=33779,mn=35840,gn=35841,vn=35842,xn=35843,_n=36196,yn=37492,Mn=37496,bn=37808,Sn=37809,Tn=37810,wn=37811,En=37812,An=37813,Cn=37814,Rn=37815,Ln=37816,Pn=37817,Dn=37818,In=37819,kn=37820,zn=37821,Hs=36492,Nn=36494,Un=36495,Jl=36283,On=36284,Fn=36285,Bn=36286,mc=3200,gc=3201,Ql=0,vc=1,Li="",At="srgb",zi="srgb-linear",eo="display-p3",ar="display-p3-linear",Xs="linear",nt="srgb",Ks="rec709",qs="p3",na=7680,Mo=519,xc=512,_c=513,yc=514,eh=515,Mc=516,bc=517,Sc=518,Tc=519,Hn=35044,bo="300 es",yi=2e3,Ys=2001;class Da{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ur=Math.PI/180,Gn=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function wc(n,e){return(n%e+e)%e}function dr(n,e,t){return(1-t)*n+t*e}function Na(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,a,s,r,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c)}set(e,t,i,a,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],v=i[8],x=a[0],m=a[3],g=a[6],y=a[1],_=a[4],b=a[7],C=a[2],w=a[5],E=a[8];return s[0]=r*x+o*y+l*C,s[3]=r*m+o*_+l*w,s[6]=r*g+o*b+l*E,s[1]=c*x+h*y+u*C,s[4]=c*m+h*_+u*w,s[7]=c*g+h*b+u*E,s[2]=f*x+d*y+v*C,s[5]=f*m+d*_+v*w,s[8]=f*g+d*b+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,f=o*l-h*s,d=c*s-r*l,v=t*u+i*f+a*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(a*c-h*i)*x,e[2]=(o*i-a*r)*x,e[3]=f*x,e[4]=(h*t-a*l)*x,e[5]=(a*s-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pr.makeScale(e,t)),this}rotate(e){return this.premultiply(pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new He;function th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ec(){const n=js("canvas");return n.style.display="block",n}const So={};function Gs(n){n in So||(So[n]=!0,console.warn(n))}function Ac(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Cc(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rc(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const To=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wo=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ua={[zi]:{transfer:Xs,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[At]:{transfer:nt,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ar]:{transfer:Xs,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(wo),fromReference:n=>n.applyMatrix3(To)},[eo]:{transfer:nt,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(wo),fromReference:n=>n.applyMatrix3(To).convertLinearToSRGB()}},Lc=new Set([zi,ar]),Qe={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Lc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ua[e].toReference,a=Ua[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ua[n].primaries},getTransfer:function(n){return n===Li?Xs:Ua[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ua[e].luminanceCoefficients)}};function wa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oa;class Pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oa===void 0&&(oa=js("canvas")),oa.width=e.width,oa.height=e.height;const i=oa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=wa(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wa(t[i]/255)*255):t[i]=wa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dc=0;class ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(mr(a[r].image)):s.push(mr(a[r]))}else s=mr(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function mr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ic=0;class Dt extends Da{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=_i,a=_i,s=Qt,r=Pi,o=ni,l=bi,c=Dt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=ts(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case fn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case fn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Vl;Dt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,a=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const r=e.elements,o=r[0],l=r[4],c=r[8],h=r[1],u=r[5],f=r[9],d=r[2],v=r[6],x=r[10];if(Math.abs(l-h)<.01&&Math.abs(c-d)<.01&&Math.abs(f-v)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(o+u+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(o+1)/2,y=(u+1)/2,_=(x+1)/2,b=(l+h)/4,C=(c+d)/4,w=(f+v)/4;return g>y&&g>_?g<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(g),a=b/i,s=C/i):y>_?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=b/a,s=w/a):_<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(_),i=C/s,a=w/s),this.set(i,a,s,t),this}let m=Math.sqrt((v-f)*(v-f)+(c-d)*(c-d)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(v-f)/m,this.y=(c-d)/m,this.z=(h-l)/m,this.w=Math.acos((o+u+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kc extends Da{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ih(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends kc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ah extends Dt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zc extends Dt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],u=i[a+3];const f=s[r+0],d=s[r+1],v=s[r+2],x=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==v){let m=1-o;const g=l*f+c*d+h*v+u*x,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,g*y);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const b=o*y;if(l=l*m+f*b,c=c*m+d*b,h=h*m+v*b,u=u*m+x*b,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],u=s[r],f=s[r+1],d=s[r+2],v=s[r+3];return e[t]=o*v+h*u+l*d-c*f,e[t+1]=l*v+h*f+c*u-o*d,e[t+2]=c*v+h*d+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),u=o(s/2),f=l(i/2),d=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"YZX":this._x=f*h*u+c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u-f*d*v;break;case"XZY":this._x=f*h*u-c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-a)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-c)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(r-a)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*i+t*this._x,this._y=d*a+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=a*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),h=2*(o*t-s*a),u=2*(s*i-r*t);return this.x=t+l*c+r*u-o*h,this.y=i+l*h+o*c-s*u,this.z=a+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gr.copy(this).projectOnVector(e),this.sub(gr)}reflect(e){return this.sub(gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new P,Eo=new is;class ia{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ti):ti.fromBufferAttribute(s,r),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ns.copy(i.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),os.subVectors(this.max,Oa),la.subVectors(e.a,Oa),ha.subVectors(e.b,Oa),ca.subVectors(e.c,Oa),Ti.subVectors(ha,la),wi.subVectors(ca,ha),Fi.subVectors(la,ca);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Fi.z,Fi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Fi.z,0,-Fi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Fi.y,Fi.x,0];return!vr(t,la,ha,ca,os)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,la,ha,ca,os))?!1:(ls.crossVectors(Ti,wi),t=[ls.x,ls.y,ls.z],vr(t,la,ha,ca,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new P,new P,new P,new P,new P,new P,new P,new P],ti=new P,ns=new ia,la=new P,ha=new P,ca=new P,Ti=new P,wi=new P,Fi=new P,Oa=new P,os=new P,ls=new P,Bi=new P;function vr(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){Bi.fromArray(n,s);const o=a.x*Math.abs(Bi.x)+a.y*Math.abs(Bi.y)+a.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=i.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nc=new ia,Fa=new P,xr=new P;class aa{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nc.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Fa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(xr)),this.expandByPoint(Fa.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new P,_r=new P,hs=new P,Ei=new P,yr=new P,cs=new P,Mr=new P;class to{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){_r.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(_r);const s=e.distanceTo(t)*.5,r=-this.direction.dot(hs),o=Ei.dot(this.direction),l=-Ei.dot(hs),c=Ei.lengthSq(),h=Math.abs(1-r*r);let u,f,d,v;if(h>0)if(u=r*l-o,f=r*o-l,v=s*h,u>=0)if(f>=-v)if(f<=v){const x=1/h;u*=x,f*=x,d=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(_r).addScaledVector(hs,f),d}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),a=fi.dot(fi)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,a,s){yr.subVectors(t,e),cs.subVectors(i,e),Mr.crossVectors(yr,cs);let r=this.direction.dot(Mr),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(cs.crossVectors(Ei,cs));if(l<0)return null;const c=o*this.direction.dot(yr.cross(Ei));if(c<0||l+c>r)return null;const h=-o*Ei.dot(Mr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,i,a,s,r,o,l,c,h,u,f,d,v,x,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c,h,u,f,d,v,x,m)}set(e,t,i,a,s,r,o,l,c,h,u,f,d,v,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=s,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=v,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ua.setFromMatrixColumn(e,0).length(),s=1/ua.setFromMatrixColumn(e,1).length(),r=1/ua.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=r*h,d=r*u,v=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+v*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=v+d*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,v=c*h,x=c*u;t[0]=f+x*o,t[4]=v*o-d,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=d*o-v,t[6]=x+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,v=c*h,x=c*u;t[0]=f-x*o,t[4]=-r*u,t[8]=v+d*o,t[1]=d+v*o,t[5]=r*h,t[9]=x-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*h,d=r*u,v=o*h,x=o*u;t[0]=l*h,t[4]=v*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,d=r*c,v=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=v*u+d,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+v,t[10]=f-x*u}else if(e.order==="XZY"){const f=r*l,d=r*c,v=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=r*h,t[9]=d*u-v,t[2]=v*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uc,e,Oc)}lookAt(e,t,i){const a=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Ai.crossVectors(i,Kt),Ai.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Ai.crossVectors(i,Kt)),Ai.normalize(),us.crossVectors(Kt,Ai),a[0]=Ai.x,a[4]=us.x,a[8]=Kt.x,a[1]=Ai.y,a[5]=us.y,a[9]=Kt.y,a[2]=Ai.z,a[6]=us.z,a[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],v=i[2],x=i[6],m=i[10],g=i[14],y=i[3],_=i[7],b=i[11],C=i[15],w=a[0],E=a[4],L=a[8],k=a[12],M=a[1],S=a[5],I=a[9],z=a[13],O=a[2],$=a[6],V=a[10],Z=a[14],Y=a[3],ne=a[7],xe=a[11],Ce=a[15];return s[0]=r*w+o*M+l*O+c*Y,s[4]=r*E+o*S+l*$+c*ne,s[8]=r*L+o*I+l*V+c*xe,s[12]=r*k+o*z+l*Z+c*Ce,s[1]=h*w+u*M+f*O+d*Y,s[5]=h*E+u*S+f*$+d*ne,s[9]=h*L+u*I+f*V+d*xe,s[13]=h*k+u*z+f*Z+d*Ce,s[2]=v*w+x*M+m*O+g*Y,s[6]=v*E+x*S+m*$+g*ne,s[10]=v*L+x*I+m*V+g*xe,s[14]=v*k+x*z+m*Z+g*Ce,s[3]=y*w+_*M+b*O+C*Y,s[7]=y*E+_*S+b*$+C*ne,s[11]=y*L+_*I+b*V+C*xe,s[15]=y*k+_*z+b*Z+C*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],v=e[3],x=e[7],m=e[11],g=e[15];return v*(+s*l*u-a*c*u-s*o*f+i*c*f+a*o*d-i*l*d)+x*(+t*l*d-t*c*f+s*r*f-a*r*d+a*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*r*u+i*r*d+s*o*h-i*c*h)+g*(-a*o*h-t*l*u+t*o*f+a*r*u-i*r*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],v=e[12],x=e[13],m=e[14],g=e[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*g+o*f*g,_=v*f*c-h*m*c-v*l*d+r*m*d+h*l*g-r*f*g,b=h*x*c-v*u*c+v*o*d-r*x*d-h*o*g+r*u*g,C=v*u*l-h*x*l-v*o*f+r*x*f+h*o*m-r*u*m,w=t*y+i*_+a*b+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(x*f*s-u*m*s-x*a*d+i*m*d+u*a*g-i*f*g)*E,e[2]=(o*m*s-x*l*s+x*a*c-i*m*c-o*a*g+i*l*g)*E,e[3]=(u*l*s-o*f*s-u*a*c+i*f*c+o*a*d-i*l*d)*E,e[4]=_*E,e[5]=(h*m*s-v*f*s+v*a*d-t*m*d-h*a*g+t*f*g)*E,e[6]=(v*l*s-r*m*s-v*a*c+t*m*c+r*a*g-t*l*g)*E,e[7]=(r*f*s-h*l*s+h*a*c-t*f*c-r*a*d+t*l*d)*E,e[8]=b*E,e[9]=(v*u*s-h*x*s-v*i*d+t*x*d+h*i*g-t*u*g)*E,e[10]=(r*x*s-v*o*s+v*i*c-t*x*c-r*i*g+t*o*g)*E,e[11]=(h*o*s-r*u*s-h*i*c+t*u*c+r*i*d-t*o*d)*E,e[12]=C*E,e[13]=(h*x*a-v*u*a+v*i*f-t*x*f-h*i*m+t*u*m)*E,e[14]=(v*o*a-r*x*a-v*i*l+t*x*l+r*i*m-t*o*m)*E,e[15]=(r*u*a-h*o*a+h*i*l-t*u*l-r*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,f=s*c,d=s*h,v=s*u,x=r*h,m=r*u,g=o*u,y=l*c,_=l*h,b=l*u,C=i.x,w=i.y,E=i.z;return a[0]=(1-(x+g))*C,a[1]=(d+b)*C,a[2]=(v-_)*C,a[3]=0,a[4]=(d-b)*w,a[5]=(1-(f+g))*w,a[6]=(m+y)*w,a[7]=0,a[8]=(v+_)*E,a[9]=(m-y)*E,a[10]=(1-(f+x))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=ua.set(a[0],a[1],a[2]).length();const r=ua.set(a[4],a[5],a[6]).length(),o=ua.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const l=1/s,c=1/r,h=1/o;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=c,ii.elements[5]*=c,ii.elements[6]*=c,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,t.setFromRotationMatrix(ii),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=yi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-a),u=(t+e)/(t-e),f=(i+a)/(i-a);let d,v;if(o===yi)d=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Ys)d=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=yi){const l=this.elements,c=1/(t-e),h=1/(i-a),u=1/(r-s),f=(t+e)*c,d=(i+a)*h;let v,x;if(o===yi)v=(r+s)*u,x=-2*u;else if(o===Ys)v=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ua=new P,ii=new tt,Uc=new P(0,0,0),Oc=new P(1,1,1),Ai=new P,us=new P,Kt=new P,Ao=new tt,Co=new is;class hi{constructor(e=0,t=0,i=0,a=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],u=a[2],f=a[6],d=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ct(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ao,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Co.setFromEuler(this),this.setFromQuaternion(Co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fc=0;const Ro=new P,da=new is,mi=new tt,ds=new P,Ba=new P,Bc=new P,Hc=new is,Lo=new P(1,0,0),Po=new P(0,1,0),Do=new P(0,0,1),Io={type:"added"},Gc={type:"removed"},pa={type:"childadded",child:null},br={type:"childremoved",child:null};class gt extends Da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new P,t=new hi,i=new is,a=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tt},normalMatrix:{value:new He}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(Lo,e)}rotateY(e){return this.rotateOnAxis(Po,e)}rotateZ(e){return this.rotateOnAxis(Do,e)}translateOnAxis(e,t){return Ro.copy(e).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lo,e)}translateY(e){return this.translateOnAxis(Po,e)}translateZ(e){return this.translateOnAxis(Do,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ds.copy(e):ds.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ba,ds,this.up):mi.lookAt(ds,Ba,this.up),this.quaternion.setFromRotationMatrix(mi),a&&(mi.extractRotation(a.matrixWorld),da.setFromRotationMatrix(mi),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Io),pa.child=e,this.dispatchEvent(pa),pa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gc),br.child=e,this.dispatchEvent(br),br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Io),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,Bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Hc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),d=r(e.animations),v=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new P,gi=new P,Sr=new P,vi=new P,fa=new P,ma=new P,ko=new P,Tr=new P,wr=new P,Er=new P,Ar=new ut,Cr=new ut,Rr=new ut;class ri{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ai.subVectors(e,t),a.cross(ai);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){ai.subVectors(a,t),gi.subVectors(i,t),Sr.subVectors(e,t);const r=ai.dot(ai),o=ai.dot(gi),l=ai.dot(Sr),c=gi.dot(gi),h=gi.dot(Sr),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,v=(r*h-o*l)*f;return s.set(1-d-v,v,d)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(r,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,a,s,r){return Ar.setScalar(0),Cr.setScalar(0),Rr.setScalar(0),Ar.fromBufferAttribute(e,t),Cr.fromBufferAttribute(e,i),Rr.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Ar,s.x),r.addScaledVector(Cr,s.y),r.addScaledVector(Rr,s.z),r}static isFrontFacing(e,t,i,a){return ai.subVectors(i,t),gi.subVectors(e,t),ai.cross(gi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),ai.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;fa.subVectors(a,i),ma.subVectors(s,i),Tr.subVectors(e,i);const l=fa.dot(Tr),c=ma.dot(Tr);if(l<=0&&c<=0)return t.copy(i);wr.subVectors(e,a);const h=fa.dot(wr),u=ma.dot(wr);if(h>=0&&u<=h)return t.copy(a);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(fa,r);Er.subVectors(e,s);const d=fa.dot(Er),v=ma.dot(Er);if(v>=0&&d<=v)return t.copy(s);const x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ma,o);const m=h*v-d*u;if(m<=0&&u-h>=0&&d-v>=0)return ko.subVectors(s,a),o=(u-h)/(u-h+(d-v)),t.copy(a).addScaledVector(ko,o);const g=1/(m+x+f);return r=x*g,o=f*g,t.copy(i).addScaledVector(fa,r).addScaledVector(ma,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Lr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Qe.workingColorSpace){if(e=wc(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Lr(r,s,e+1/3),this.g=Lr(r,s,e),this.b=Lr(r,s,e-1/3)}return Qe.toWorkingColorSpace(this,a),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Qe.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ct(Pt.r*255,0,255))*65536+Math.round(Ct(Pt.g*255,0,255))*256+Math.round(Ct(Pt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,a=Pt.g,s=Pt.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(a-s)/u+(a<s?6:0);break;case a:l=(s-i)/u+2;break;case s:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=At){Qe.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,a=Pt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(ps);const i=dr(Ci.h,ps.h,t),a=dr(Ci.s,ps.s,t),s=dr(Ci.l,ps.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ye;Ye.NAMES=rh;let Vc=0;class sa extends Da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Sa,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=an,this.blendDst=sn,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sa&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==an&&(i.blendSrc=this.blendSrc),this.blendDst!==sn&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==na&&(i.stencilFail=this.stencilFail),this.stencilZFail!==na&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==na&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yt extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new P,fs=new pe;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hn,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hn&&(e.usage=this.usage),e}}class nh extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oh extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class it extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wc=0;const $t=new tt,Pr=new gt,ga=new P,qt=new ia,Ha=new ia,wt=new P;class Mt extends Da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?oh:nh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(qt.min,Ha.min),qt.expandByPoint(wt),wt.addVectors(qt.max,Ha.max),qt.expandByPoint(wt)):(qt.expandByPoint(Ha.min),qt.expandByPoint(Ha.max))}qt.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)wt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(wt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(ga.fromBufferAttribute(e,c),wt.add(ga)),a=Math.max(a,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new P,l[L]=new P;const c=new P,h=new P,u=new P,f=new pe,d=new pe,v=new pe,x=new P,m=new P;function g(L,k,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,k),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,k),v.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),v.sub(f);const S=1/(d.x*v.y-v.x*d.y);isFinite(S)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(S),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(S),o[L].add(x),o[k].add(x),o[M].add(x),l[L].add(m),l[k].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,k=y.length;L<k;++L){const M=y[L],S=M.start,I=M.count;for(let z=S,O=S+I;z<O;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new P,b=new P,C=new P,w=new P;function E(L){C.fromBufferAttribute(a,L),w.copy(C);const k=o[L];_.copy(k),_.sub(C.multiplyScalar(C.dot(k))).normalize(),b.crossVectors(w,k);const M=b.dot(l[L])<0?-1:1;r.setXYZW(L,_.x,_.y,_.z,M)}for(let L=0,k=y.length;L<k;++L){const M=y[L],S=M.start,I=M.count;for(let z=S,O=S+I;z<O;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const a=new P,s=new P,r=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(a,s),h.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),u.subVectors(a,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let g=0;g<h;g++)f[v++]=c[d++]}return new Wt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new tt,Hi=new to,ms=new aa,No=new P,gs=new P,vs=new P,xs=new P,Dr=new P,_s=new P,Uo=new P,ys=new P;class le extends gt{constructor(e=new Mt,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){_s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Dr.fromBufferAttribute(u,e),r?_s.addScaledVector(Dr,h):_s.addScaledVector(Dr.sub(t),h))}t.add(_s)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(ms.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ms,No)===null||Hi.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(zo.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(zo),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){const m=f[v],g=r[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,C=_;b<C;b+=3){const w=o.getX(b),E=o.getX(b+1),L=o.getX(b+2);a=Ms(this,g,e,i,c,h,u,w,E,L),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=v,g=x;m<g;m+=3){const y=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);a=Ms(this,r,e,i,c,h,u,y,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){const m=f[v],g=r[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,C=_;b<C;b+=3){const w=b,E=b+1,L=b+2;a=Ms(this,g,e,i,c,h,u,w,E,L),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=v,g=x;m<g;m+=3){const y=m,_=m+1,b=m+2;a=Ms(this,r,e,i,c,h,u,y,_,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Xc(n,e,t,i,a,s,r,o){let l;if(e.side===Vt?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===Mi,o),l===null)return null;ys.copy(o),ys.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:n}}function Ms(n,e,t,i,a,s,r,o,l,c){n.getVertexPosition(o,gs),n.getVertexPosition(l,vs),n.getVertexPosition(c,xs);const h=Xc(n,e,t,i,gs,vs,xs,Uo);if(h){const u=new P;ri.getBarycoord(Uo,gs,vs,xs,u),a&&(h.uv=ri.getInterpolatedAttribute(a,o,l,c,u,new pe)),s&&(h.uv1=ri.getInterpolatedAttribute(s,o,l,c,u,new pe)),r&&(h.normal=ri.getInterpolatedAttribute(r,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};ri.getNormal(gs,vs,xs,f.normal),h.face=f,h.barycoord=u}return h}class _t extends Mt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,i,t,e,r,s,0),v("z","y","x",1,-1,i,t,-e,r,s,1),v("x","z","y",1,1,e,i,t,a,r,2),v("x","z","y",1,-1,e,i,-t,a,r,3),v("x","y","z",1,-1,e,t,i,a,s,4),v("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function v(x,m,g,y,_,b,C,w,E,L,k){const M=b/E,S=C/L,I=b/2,z=C/2,O=w/2,$=E+1,V=L+1;let Z=0,Y=0;const ne=new P;for(let xe=0;xe<V;xe++){const Ce=xe*S-z;for(let Ge=0;Ge<$;Ge++){const je=Ge*M-I;ne[x]=je*y,ne[m]=Ce*_,ne[g]=O,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[g]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ge/E),u.push(1-xe/L),Z+=1}}for(let xe=0;xe<L;xe++)for(let Ce=0;Ce<E;Ce++){const Ge=f+Ce+$*xe,je=f+Ce+$*(xe+1),J=f+(Ce+1)+$*(xe+1),ae=f+(Ce+1)+$*xe;l.push(Ge,je,ae),l.push(je,J,ae),Y+=6}o.addGroup(d,Y,k),d+=Y,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Pa(n[t]);for(const a in i)e[a]=i[a]}return e}function Kc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const qc={clone:Pa,merge:zt};var Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new P,Oo=new pe,Fo=new pe;class si extends hh{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gn*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Oo,Fo),t.subVectors(Fo,Oo)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const va=-90,xa=1;class $c extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new si(va,xa,e,t);a.layers=this.layers,this.add(a);const s=new si(va,xa,e,t);s.layers=this.layers,this.add(s);const r=new si(va,xa,e,t);r.layers=this.layers,this.add(r);const o=new si(va,xa,e,t);o.layers=this.layers,this.add(o);const l=new si(va,xa,e,t);l.layers=this.layers,this.add(l);const c=new si(va,xa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ch extends Dt{constructor(e,t,i,a,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Aa,super(e,t,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zc extends ta{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new ch(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new _t(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Di});s.uniforms.tEquirect.value=t;const r=new le(a,s),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Qt),new $c(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const Ir=new P,Jc=new P,Qc=new He;class qi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Ir.subVectors(i,t).cross(Jc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ir),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qc.getNormalMatrix(e),a=this.coplanarPoint(Ir).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new aa,bs=new P;class io{constructor(e=new qi,t=new qi,i=new qi,a=new qi,s=new qi,r=new qi){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],h=a[5],u=a[6],f=a[7],d=a[8],v=a[9],x=a[10],m=a[11],g=a[12],y=a[13],_=a[14],b=a[15];if(i[0].setComponents(l-s,f-c,m-d,b-g).normalize(),i[1].setComponents(l+s,f+c,m+d,b+g).normalize(),i[2].setComponents(l+r,f+h,m+v,b+y).normalize(),i[3].setComponents(l-r,f-h,m-v,b-y).normalize(),i[4].setComponents(l-o,f-u,m-x,b-_).normalize(),t===yi)i[5].setComponents(l+o,f+u,m+x,b+_).normalize();else if(t===Ys)i[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(bs.x=a.normal.x>0?e.max.x:e.min.x,bs.y=a.normal.y>0?e.max.y:e.min.y,bs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uh(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function eu(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],x=u[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}class Rt extends Mt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,u=e/o,f=t/l,d=[],v=[],x=[],m=[];for(let g=0;g<h;g++){const y=g*f-r;for(let _=0;_<c;_++){const b=_*u-s;v.push(b,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const _=y+c*g,b=y+c*(g+1),C=y+1+c*(g+1),w=y+1+c*g;d.push(_,b,w),d.push(b,C,w)}this.setIndex(d),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.widthSegments,e.heightSegments)}}var tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:tu,alphahash_pars_fragment:iu,alphamap_fragment:au,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:nu,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:hu,batching_vertex:cu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:pu,iridescence_fragment:fu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:xu,clipping_planes_vertex:_u,color_fragment:yu,color_pars_fragment:Mu,color_pars_vertex:bu,color_vertex:Su,common:Tu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:Au,displacementmap_vertex:Cu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Lu,colorspace_fragment:Pu,colorspace_pars_fragment:Du,envmap_fragment:Iu,envmap_common_pars_fragment:ku,envmap_pars_fragment:zu,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:qu,envmap_vertex:Uu,fog_vertex:Ou,fog_pars_vertex:Fu,fog_fragment:Bu,fog_pars_fragment:Hu,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:Ku,lights_toon_fragment:Yu,lights_toon_pars_fragment:ju,lights_phong_fragment:$u,lights_phong_pars_fragment:Zu,lights_physical_fragment:Ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:ed,lights_fragment_maps:td,lights_fragment_end:id,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:nd,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:hd,map_particle_pars_fragment:cd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:pd,morphcolor_vertex:fd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:vd,normal_fragment_begin:xd,normal_fragment_maps:_d,normal_pars_fragment:yd,normal_pars_vertex:Md,normal_vertex:bd,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Ad,opaque_fragment:Cd,packing:Rd,premultiplied_alpha_fragment:Ld,project_vertex:Pd,dithering_fragment:Dd,dithering_pars_fragment:Id,roughnessmap_fragment:kd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Ud,shadowmap_vertex:Od,shadowmask_pars_fragment:Fd,skinbase_vertex:Bd,skinning_pars_vertex:Hd,skinning_vertex:Gd,skinnormal_vertex:Vd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:Kd,tonemapping_pars_fragment:qd,transmission_fragment:Yd,transmission_pars_fragment:jd,uv_pars_fragment:$d,uv_pars_vertex:Zd,uv_vertex:Jd,worldpos_vertex:Qd,background_vert:ep,background_frag:tp,backgroundCube_vert:ip,backgroundCube_frag:ap,cube_vert:sp,cube_frag:rp,depth_vert:np,depth_frag:op,distanceRGBA_vert:lp,distanceRGBA_frag:hp,equirect_vert:cp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:pp,meshbasic_vert:fp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:_p,meshnormal_vert:yp,meshnormal_frag:Mp,meshphong_vert:bp,meshphong_frag:Sp,meshphysical_vert:Tp,meshphysical_frag:wp,meshtoon_vert:Ep,meshtoon_frag:Ap,points_vert:Cp,points_frag:Rp,shadow_vert:Lp,shadow_frag:Pp,sprite_vert:Dp,sprite_frag:Ip},ce={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},oi={basic:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:zt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:zt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:zt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:zt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:zt([ce.lights,ce.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};oi.physical={uniforms:zt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ss={r:0,b:0,g:0},Vi=new hi,kp=new tt;function zp(n,e,t,i,a,s,r){const o=new Ye(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function v(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1;const b=v(y);b===null?g(o,l):b&&b.isColor&&(g(b,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,_){const b=v(_);b&&(b.isCubeTexture||b.mapping===ir)?(h===void 0&&(h=new le(new _t(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Pa(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Vi.copy(_.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(Vi)),h.material.toneMapped=Qe.getTransfer(b.colorSpace)!==nt,(u!==b||f!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new le(new Rt(2,2),new ki({name:"BackgroundMaterial",uniforms:Pa(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,_){y.getRGB(Ss,lh(n)),i.buffers.color.setClear(Ss.r,Ss.g,Ss.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(o,l)},render:x,addToRenderList:m}}function Np(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,r=!1;function o(M,S,I,z,O){let $=!1;const V=u(z,I,S);s!==V&&(s=V,c(s.object)),$=d(M,z,I,O),$&&v(M,z,I,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,b(M,S,I,z),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,S,I){const z=I.wireframe===!0;let O=i[M.id];O===void 0&&(O={},i[M.id]=O);let $=O[S.id];$===void 0&&($={},O[S.id]=$);let V=$[z];return V===void 0&&(V=f(l()),$[z]=V),V}function f(M){const S=[],I=[],z=[];for(let O=0;O<t;O++)S[O]=0,I[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,S,I,z){const O=s.attributes,$=S.attributes;let V=0;const Z=I.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const ne=O[Y];let xe=$[Y];if(xe===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ne===void 0||ne.attribute!==xe||xe&&ne.data!==xe.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function v(M,S,I,z){const O={},$=S.attributes;let V=0;const Z=I.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let ne=$[Y];ne===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));const xe={};xe.attribute=ne,ne&&ne.data&&(xe.data=ne.data),O[Y]=xe,V++}s.attributes=O,s.attributesNum=V,s.index=z}function x(){const M=s.newAttributes;for(let S=0,I=M.length;S<I;S++)M[S]=0}function m(M){g(M,0)}function g(M,S){const I=s.newAttributes,z=s.enabledAttributes,O=s.attributeDivisors;I[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),O[M]!==S&&(n.vertexAttribDivisor(M,S),O[M]=S)}function y(){const M=s.newAttributes,S=s.enabledAttributes;for(let I=0,z=S.length;I<z;I++)S[I]!==M[I]&&(n.disableVertexAttribArray(I),S[I]=0)}function _(M,S,I,z,O,$,V){V===!0?n.vertexAttribIPointer(M,S,I,O,$):n.vertexAttribPointer(M,S,I,z,O,$)}function b(M,S,I,z){x();const O=z.attributes,$=I.getAttributes(),V=S.defaultAttributeValues;for(const Z in $){const Y=$[Z];if(Y.location>=0){let ne=O[Z];if(ne===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const xe=ne.normalized,Ce=ne.itemSize,Ge=e.get(ne);if(Ge===void 0)continue;const je=Ge.buffer,J=Ge.type,ae=Ge.bytesPerElement,ve=J===n.INT||J===n.UNSIGNED_INT||ne.gpuType===qn;if(ne.isInterleavedBufferAttribute){const de=ne.data,Re=de.stride,Ae=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Y.locationSize;Ve++)g(Y.location+Ve,de.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<Y.locationSize;Ve++)m(Y.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ve=0;Ve<Y.locationSize;Ve++)_(Y.location+Ve,Ce/Y.locationSize,J,xe,Re*ae,(Ae+Ce/Y.locationSize*Ve)*ae,ve)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)g(Y.location+de,ne.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);n.bindBuffer(n.ARRAY_BUFFER,je);for(let de=0;de<Y.locationSize;de++)_(Y.location+de,Ce/Y.locationSize,J,xe,Ce*ae,Ce/Y.locationSize*de*ae,ve)}}else if(V!==void 0){const xe=V[Z];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(Y.location,xe);break;case 3:n.vertexAttrib3fv(Y.location,xe);break;case 4:n.vertexAttrib4fv(Y.location,xe);break;default:n.vertexAttrib1fv(Y.location,xe)}}}}y()}function C(){L();for(const M in i){const S=i[M];for(const I in S){const z=S[I];for(const O in z)h(z[O].object),delete z[O];delete S[I]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const S=i[M.id];for(const I in S){const z=S[I];for(const O in z)h(z[O].object),delete z[O];delete S[I]}delete i[M.id]}function E(M){for(const S in i){const I=i[S];if(I[M.id]===void 0)continue;const z=I[M.id];for(const O in z)h(z[O].object),delete z[O];delete I[M.id]}}function L(){k(),r=!0,s!==a&&(s=a,c(s.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Up(n,e,t){let i;function a(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];t.update(f,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)r(c[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x];for(let x=0;x<f.length;x++)t.update(v,i,f[x])}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Op(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(E){return!(E!==ni&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==bi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==li&&!L)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:C,maxSamples:w}}function Fp(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new qi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||a;return a=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!a||v===null||v.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,_=y*4;let b=g.clippingState||null;l.value=b,b=h(v,f,_,d);for(let C=0;C!==_;++C)b[C]=t[C];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const g=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,b=d;_!==x;++_,b+=4)r.copy(u[_]).applyMatrix4(y,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Bp(n){let e=new WeakMap;function t(r,o){return o===dn?r.mapping=Aa:o===pn&&(r.mapping=Ca),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===dn||o===pn)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Zc(l.height);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dh extends hh{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ba=4,Bo=[.125,.215,.35,.446,.526,.582],$i=20,kr=new dh,Ho=new Ye;let zr=null,Nr=0,Ur=0,Or=!1;const Yi=(1+Math.sqrt(5))/2,_a=1/Yi,Go=[new P(-Yi,_a,0),new P(Yi,_a,0),new P(-_a,0,Yi),new P(_a,0,Yi),new P(0,Yi,-_a),new P(0,Yi,_a),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){zr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,Nr,Ur),this._renderer.xr.enabled=Or,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Aa||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:es,format:ni,colorSpace:zi,depthBuffer:!1},a=Wo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hp(s)),this._blurMaterial=Gp(s,e,t)}return a}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,i,a){const s=new si(90,1,t,i),r=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ho),l.toneMapping=Ii,l.autoClear=!1;const u=new yt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),f=new le(new _t,u);let d=!1;const v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,d=!0):(u.color.copy(Ho),d=!0);for(let x=0;x<6;x++){const m=x%3;m===0?(s.up.set(0,r[x],0),s.lookAt(o[x],0,0)):m===1?(s.up.set(0,0,r[x]),s.lookAt(0,o[x],0)):(s.up.set(0,r[x],0),s.lookAt(0,0,o[x]));const g=this._cubeSize;Ts(a,m*g,x>2?g:0,g,g),l.setRenderTarget(a),d&&l.render(f,s),l.render(e,s)}f.geometry.dispose(),f.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Aa||e.mapping===Ca;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new le(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,kr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Go[(a-s-1)%Go.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[a],c),f=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$i-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):$i;m>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const g=[];let y=0;for(let E=0;E<$i;++E){const L=E/x,k=Math.exp(-L*L/2);g.push(k),E===0?y+=k:E<m&&(y+=2*k)}for(let E=0;E<g.length;E++)g[E]=g[E]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const b=this._sizeLods[a],C=3*b*(a>_-ba?a-_+ba:0),w=4*(this._cubeSize-b);Ts(t,C,w,3*b,2*b),l.setRenderTarget(t),l.render(u,kr)}}function Hp(n){const e=[],t=[],i=[];let a=n;const s=n-ba+1+Bo.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>n-ba?l=Bo[r-n+ba-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,v=6,x=3,m=2,g=1,y=new Float32Array(x*v*d),_=new Float32Array(m*v*d),b=new Float32Array(g*v*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,L=w>2?0:-1,k=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(k,x*v*w),_.set(f,m*v*w);const M=[w,w,w,w,w,w];b.set(M,g*v*w)}const C=new Mt;C.setAttribute("position",new Wt(y,x)),C.setAttribute("uv",new Wt(_,m)),C.setAttribute("faceIndex",new Wt(b,g)),e.push(C),a>ba&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wo(n,e,t){const i=new ta(n,e,t);return i.texture.mapping=ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Gp(n,e,t){const i=new Float32Array($i),a=new P(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Xo(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ko(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===dn||l===pn,h=l===Aa||l===Ca;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Vo(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&a(d)?(t===null&&(t=new Vo(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Wp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Gs("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Xp(n,e,t,i){const a={},s=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,g=x.length;m<g;m++)e.remove(x[m])}f.removeEventListener("dispose",r),delete a[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const v in d){const x=d[v];for(let m=0,g=x.length;m<g;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,v=u.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let _=0,b=y.length;_<b;_+=3){const C=y[_+0],w=y[_+1],E=y[_+2];f.push(C,w,w,E,E,C)}}else if(v!==void 0){const y=v.array;x=v.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const C=_+0,w=_+1,E=_+2;f.push(C,w,w,E,E,C)}}else return;const m=new(th(f)?oh:nh)(f,1);m.version=x;const g=s.get(u);g&&e.remove(g),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Kp(n,e,t){let i;function a(f){i=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*r),t.update(d,i,1)}function c(f,d,v){v!==0&&(n.drawElementsInstanced(i,d,s,f*r,v),t.update(d,i,v))}function h(f,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,v);let x=0;for(let m=0;m<v;m++)x+=d[m];t.update(x,i,1)}function u(f,d,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/r,d[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,v);let g=0;for(let y=0;y<v;y++)g+=d[y];for(let y=0;y<x.length;y++)t.update(g,i,x[y])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Yp(n,e,t){const i=new WeakMap,a=new ut;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let d=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",d)};f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*w*4*u),L=new ah(E,C,w,u);L.type=li,L.needsUpdate=!0;const k=b*4;for(let M=0;M<u;M++){const S=g[M],I=y[M],z=_[M],O=C*w*4*M;for(let $=0;$<S.count;$++){const V=$*k;v===!0&&(a.fromBufferAttribute(S,$),E[O+V+0]=a.x,E[O+V+1]=a.y,E[O+V+2]=a.z,E[O+V+3]=0),x===!0&&(a.fromBufferAttribute(I,$),E[O+V+4]=a.x,E[O+V+5]=a.y,E[O+V+6]=a.z,E[O+V+7]=0),m===!0&&(a.fromBufferAttribute(z,$),E[O+V+8]=a.x,E[O+V+9]=a.y,E[O+V+10]=a.z,E[O+V+11]=z.itemSize===4?a.w:1)}}f={count:u,texture:L,size:new pe(C,w)},i.set(o,f),o.addEventListener("dispose",d)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function jp(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return u}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class ph extends Dt{constructor(e,t,i,a,s,r,o,l,c,h=Ta){if(h!==Ta&&h!==La)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ta&&(i=ea),i===void 0&&h===La&&(i=Ra),super(null,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fh=new Dt,qo=new ph(1,1),mh=new ah,gh=new zc,vh=new ch,Yo=[],jo=[],$o=new Float32Array(16),Zo=new Float32Array(9),Jo=new Float32Array(4);function Ia(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Yo[a];if(s===void 0&&(s=new Float32Array(a),Yo[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sr(n,e){let t=jo[e];t===void 0&&(t=new Int32Array(e),jo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $p(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function Jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function ef(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,i))return;Jo.set(i),n.uniformMatrix2fv(this.addr,!1,Jo),St(t,i)}}function tf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,i))return;Zo.set(i),n.uniformMatrix3fv(this.addr,!1,Zo),St(t,i)}}function af(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,i))return;$o.set(i),n.uniformMatrix4fv(this.addr,!1,$o),St(t,i)}}function sf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function lf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function df(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(qo.compareFunction=eh,s=qo):s=fh,t.setTexture2D(e||s,a)}function pf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||gh,a)}function ff(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||vh,a)}function mf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||mh,a)}function gf(n){switch(n){case 5126:return $p;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return ef;case 35675:return tf;case 35676:return af;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return nf;case 35669:case 35673:return of;case 5125:return lf;case 36294:return hf;case 36295:return cf;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return mf}}function vf(n,e){n.uniform1fv(this.addr,e)}function xf(n,e){const t=Ia(e,this.size,2);n.uniform2fv(this.addr,t)}function _f(n,e){const t=Ia(e,this.size,3);n.uniform3fv(this.addr,t)}function yf(n,e){const t=Ia(e,this.size,4);n.uniform4fv(this.addr,t)}function Mf(n,e){const t=Ia(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bf(n,e){const t=Ia(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sf(n,e){const t=Ia(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tf(n,e){n.uniform1iv(this.addr,e)}function wf(n,e){n.uniform2iv(this.addr,e)}function Ef(n,e){n.uniform3iv(this.addr,e)}function Af(n,e){n.uniform4iv(this.addr,e)}function Cf(n,e){n.uniform1uiv(this.addr,e)}function Rf(n,e){n.uniform2uiv(this.addr,e)}function Lf(n,e){n.uniform3uiv(this.addr,e)}function Pf(n,e){n.uniform4uiv(this.addr,e)}function Df(n,e,t){const i=this.cache,a=e.length,s=sr(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||fh,s[r])}function If(n,e,t){const i=this.cache,a=e.length,s=sr(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||gh,s[r])}function kf(n,e,t){const i=this.cache,a=e.length,s=sr(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||vh,s[r])}function zf(n,e,t){const i=this.cache,a=e.length,s=sr(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||mh,s[r])}function Nf(n){switch(n){case 5126:return vf;case 35664:return xf;case 35665:return _f;case 35666:return yf;case 35674:return Mf;case 35675:return bf;case 35676:return Sf;case 5124:case 35670:return Tf;case 35667:case 35671:return wf;case 35668:case 35672:return Ef;case 35669:case 35673:return Af;case 5125:return Cf;case 36294:return Rf;case 36295:return Lf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return zf}}class Uf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gf(t.type)}}class Of{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nf(t.type)}}class Ff{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Qo(n,e){n.seq.push(e),n.map[e.id]=e}function Bf(n,e,t){const i=n.name,a=i.length;for(Fr.lastIndex=0;;){const s=Fr.exec(i),r=Fr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Qo(t,c===void 0?new Uf(o,n,e):new Of(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Ff(o),Qo(t,h)),t=h}}}class Vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);Bf(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function el(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hf=37297;let Gf=0;function Vf(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function Wf(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===qs&&t===Ks?i="LinearDisplayP3ToLinearSRGB":e===Ks&&t===qs&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case ar:return[i,"LinearTransferOETF"];case At:case eo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function tl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Vf(n.getShaderSource(e),r)}else return a}function Xf(n,e){const t=Wf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kf(n,e){let t;switch(e){case oc:t="Linear";break;case lc:t="Reinhard";break;case hc:t="Cineon";break;case cc:t="ACESFilmic";break;case dc:t="AgX";break;case pc:t="Neutral";break;case uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ws=new P;function qf(){Qe.getLuminanceCoefficients(ws);const n=ws.x.toFixed(4),e=ws.y.toFixed(4),t=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function jf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $f(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Ya(n){return n!==""}function il(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vn(n){return n.replace(Zf,Qf)}const Jf=new Map;function Qf(n,e){let t=Be[e];if(t===void 0){const i=Jf.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vn(t)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(n){return n.replace(em,tm)}function tm(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function rl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function im(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function am(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Aa:case Ca:e="ENVMAP_TYPE_CUBE";break;case ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ca:e="ENVMAP_MODE_REFRACTION";break}return e}function rm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case rc:e="ENVMAP_BLENDING_MIX";break;case nc:e="ENVMAP_BLENDING_ADD";break}return e}function nm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function om(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=im(t),c=am(t),h=sm(t),u=rm(t),f=nm(t),d=Yf(t),v=jf(s),x=a.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ya).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ya).join(`
`),g.length>0&&(g+=`
`)):(m=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),g=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Kf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Xf("linearToOutputTexel",t.outputColorSpace),qf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),r=Vn(r),r=il(r,t),r=al(r,t),o=Vn(o),o=il(o,t),o=al(o,t),r=sl(r),o=sl(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=y+m+r,b=y+g+o,C=el(a,a.VERTEX_SHADER,_),w=el(a,a.FRAGMENT_SHADER,b);a.attachShader(x,C),a.attachShader(x,w),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function E(S){if(n.debug.checkShaderErrors){const I=a.getProgramInfoLog(x).trim(),z=a.getShaderInfoLog(C).trim(),O=a.getShaderInfoLog(w).trim();let $=!0,V=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,x,C,w);else{const Z=tl(a,C,"vertex"),Y=tl(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+Z+`
`+Y)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||O==="")&&(V=!1);V&&(S.diagnostics={runnable:$,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:g}})}a.deleteShader(C),a.deleteShader(w),L=new Vs(a,x),k=$f(a,x)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let k;this.getAttributes=function(){return k===void 0&&E(this),k};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(x,Hf)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}let lm=0;class hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cm(e),t.set(e,i)),i}}class cm{constructor(e){this.id=lm++,this.code=e,this.usedTimes=0}}function um(n,e,t,i,a,s,r){const o=new sh,l=new hm,c=new Set,h=[],u=a.logarithmicDepthBuffer,f=a.reverseDepthBuffer,d=a.vertexTextures;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,I,z,O){const $=z.fog,V=O.geometry,Z=M.isMeshStandardMaterial?z.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),ne=Y&&Y.mapping===ir?Y.image.height:null,xe=x[M.type];M.precision!==null&&(v=a.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const Ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ge=Ce!==void 0?Ce.length:0;let je=0;V.morphAttributes.position!==void 0&&(je=1),V.morphAttributes.normal!==void 0&&(je=2),V.morphAttributes.color!==void 0&&(je=3);let J,ae,ve,de;if(xe){const Ft=oi[xe];J=Ft.vertexShader,ae=Ft.fragmentShader}else J=M.vertexShader,ae=M.fragmentShader,l.update(M),ve=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const Re=n.getRenderTarget(),Ae=O.isInstancedMesh===!0,Ve=O.isBatchedMesh===!0,Xe=!!M.map,Ne=!!M.matcap,U=!!Y,Tt=!!M.aoMap,Ke=!!M.lightMap,qe=!!M.bumpMap,Te=!!M.normalMap,G=!!M.displacementMap,se=!!M.emissiveMap,R=!!M.metalnessMap,T=!!M.roughnessMap,W=M.anisotropy>0,Q=M.clearcoat>0,ee=M.dispersion>0,K=M.iridescence>0,_e=M.sheen>0,oe=M.transmission>0,fe=W&&!!M.anisotropyMap,ke=Q&&!!M.clearcoatMap,ie=Q&&!!M.clearcoatNormalMap,Me=Q&&!!M.clearcoatRoughnessMap,Le=K&&!!M.iridescenceMap,ze=K&&!!M.iridescenceThicknessMap,be=_e&&!!M.sheenColorMap,$e=_e&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,at=!!M.specularColorMap,F=!!M.specularIntensityMap,ge=oe&&!!M.transmissionMap,j=oe&&!!M.thicknessMap,te=!!M.gradientMap,me=!!M.alphaMap,ue=M.alphaTest>0,st=!!M.alphaHash,ft=!!M.extensions;let Ot=Ii;M.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const Je={shaderID:xe,shaderType:M.type,shaderName:M.name,vertexShader:J,fragmentShader:ae,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:Ve,batchingColor:Ve&&O._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&O.instanceColor!==null,instancingMorph:Ae&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:zi,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:Ne,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:ne,aoMap:Tt,lightMap:Ke,bumpMap:qe,normalMap:Te,displacementMap:d&&G,emissiveMap:se,normalMapObjectSpace:Te&&M.normalMapType===vc,normalMapTangentSpace:Te&&M.normalMapType===Ql,metalnessMap:R,roughnessMap:T,anisotropy:W,anisotropyMap:fe,clearcoat:Q,clearcoatMap:ke,clearcoatNormalMap:ie,clearcoatRoughnessMap:Me,dispersion:ee,iridescence:K,iridescenceMap:Le,iridescenceThicknessMap:ze,sheen:_e,sheenColorMap:be,sheenRoughnessMap:$e,specularMap:Ue,specularColorMap:at,specularIntensityMap:F,transmission:oe,transmissionMap:ge,thicknessMap:j,gradientMap:te,opaque:M.transparent===!1&&M.blending===Sa&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:ue,alphaHash:st,combine:M.combine,mapUv:Xe&&m(M.map.channel),aoMapUv:Tt&&m(M.aoMap.channel),lightMapUv:Ke&&m(M.lightMap.channel),bumpMapUv:qe&&m(M.bumpMap.channel),normalMapUv:Te&&m(M.normalMap.channel),displacementMapUv:G&&m(M.displacementMap.channel),emissiveMapUv:se&&m(M.emissiveMap.channel),metalnessMapUv:R&&m(M.metalnessMap.channel),roughnessMapUv:T&&m(M.roughnessMap.channel),anisotropyMapUv:fe&&m(M.anisotropyMap.channel),clearcoatMapUv:ke&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(M.sheenRoughnessMap.channel),specularMapUv:Ue&&m(M.specularMap.channel),specularColorMapUv:at&&m(M.specularColorMap.channel),specularIntensityMapUv:F&&m(M.specularIntensityMap.channel),transmissionMapUv:ge&&m(M.transmissionMap.channel),thicknessMapUv:j&&m(M.thicknessMap.channel),alphaMapUv:me&&m(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Te||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Xe||me),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ut,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function y(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(S,M),b(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),M.push(o.mask)}function C(M){const S=x[M.type];let I;if(S){const z=oi[S];I=qc.clone(z.uniforms)}else I=M.uniforms;return I}function w(M,S){let I;for(let z=0,O=h.length;z<O;z++){const $=h[z];if($.cacheKey===S){I=$,++I.usedTimes;break}}return I===void 0&&(I=new om(n,S,M,s),h.push(I)),I}function E(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function L(M){l.remove(M)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:C,acquireProgram:w,releaseProgram:E,releaseShaderCache:L,programs:h,dispose:k}}function dm(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function a(r,o,l){n.get(r)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ol(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(u,f,d,v,x,m){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},n[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=v,g.renderOrder=u.renderOrder,g.z=x,g.group=m),e++,g}function o(u,f,d,v,x,m){const g=r(u,f,d,v,x,m);d.transmission>0?i.push(g):d.transparent===!0?a.push(g):t.push(g)}function l(u,f,d,v,x,m){const g=r(u,f,d,v,x,m);d.transmission>0?i.unshift(g):d.transparent===!0?a.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||pm),i.length>1&&i.sort(f||nl),a.length>1&&a.sort(f||nl)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:h,sort:c}}function fm(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new ol,n.set(i,[r])):a>=s.length?(r=new ol,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function mm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function gm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vm=0;function xm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _m(n){const e=new mm,t=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const a=new P,s=new tt,r=new tt;function o(c){let h=0,u=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,v=0,x=0,m=0,g=0,y=0,_=0,b=0,C=0,w=0,E=0;c.sort(xm);for(let k=0,M=c.length;k<M;k++){const S=c[k],I=S.color,z=S.intensity,O=S.distance,$=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=I.r*z,u+=I.g*z,f+=I.b*z;else if(S.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(S.sh.coefficients[V],z);E++}else if(S.isDirectionalLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Z=S.shadow,Y=t.get(S);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=S.shadow.matrix,y++}i.directional[d]=V,d++}else if(S.isSpotLight){const V=e.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(I).multiplyScalar(z),V.distance=O,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,i.spot[x]=V;const Z=S.shadow;if(S.map&&(i.spotLightMap[C]=S.map,C++,Z.updateMatrices(S),S.castShadow&&w++),i.spotLightMatrix[x]=Z.matrix,S.castShadow){const Y=t.get(S);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=$,b++}x++}else if(S.isRectAreaLight){const V=e.get(S);V.color.copy(I).multiplyScalar(z),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=V,m++}else if(S.isPointLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const Z=S.shadow,Y=t.get(S);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,i.pointShadow[v]=Y,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=S.shadow.matrix,_++}i.point[v]=V,v++}else if(S.isHemisphereLight){const V=e.get(S);V.skyColor.copy(S.color).multiplyScalar(z),V.groundColor.copy(S.groundColor).multiplyScalar(z),i.hemi[g]=V,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==g||L.numDirectionalShadows!==y||L.numPointShadows!==_||L.numSpotShadows!==b||L.numSpotMaps!==C||L.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,L.directionalLength=d,L.pointLength=v,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=g,L.numDirectionalShadows=y,L.numPointShadows=_,L.numSpotShadows=b,L.numSpotMaps=C,L.numLightProbes=E,i.version=vm++)}function l(c,h){let u=0,f=0,d=0,v=0,x=0;const m=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const _=c[g];if(_.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),u++}else if(_.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),r.identity(),s.copy(_.matrixWorld),s.premultiply(m),r.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function ll(n){const e=new _m(n),t=[],i=[];function a(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function r(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function ym(n){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new ll(n),e.set(a,[o])):s>=r.length?(o=new ll(n),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Mm extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wm(n,e,t){let i=new io;const a=new pe,s=new pe,r=new ut,o=new Mm({depthPacking:gc}),l=new bm,c={},h=t.maxTextureSize,u={[Mi]:Vt,[Vt]:Mi,[Ut]:Ut},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Sm,fragmentShader:Tm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Mt;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new le(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let g=this.type;this.render=function(w,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const k=n.getRenderTarget(),M=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Di),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=g!==xi&&this.type===xi,O=g===xi&&this.type!==xi;for(let $=0,V=w.length;$<V;$++){const Z=w[$],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const ne=Y.getFrameExtents();if(a.multiply(ne),s.copy(Y.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/ne.x),a.x=s.x*ne.x,Y.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/ne.y),a.y=s.y*ne.y,Y.mapSize.y=s.y)),Y.map===null||z===!0||O===!0){const Ce=this.type!==xi?{minFilter:Gt,magFilter:Gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ta(a.x,a.y,Ce),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const xe=Y.getViewportCount();for(let Ce=0;Ce<xe;Ce++){const Ge=Y.getViewport(Ce);r.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),I.viewport(r),Y.updateMatrices(Z,Ce),i=Y.getFrustum(),b(E,L,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===xi&&y(Y,L),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(k,M,S)};function y(w,E){const L=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ta(a.x,a.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,L,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,L,d,x,null)}function _(w,E,L,k){let M=null;const S=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)M=S;else if(M=L.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=M.uuid,z=E.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let $=O[z];$===void 0&&($=M.clone(),O[z]=$,E.addEventListener("dispose",C)),M=$}if(M.visible=E.visible,M.wireframe=E.wireframe,k===xi?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=L}return M}function b(w,E,L,k,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===xi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const I=e.update(w),z=w.material;if(Array.isArray(z)){const O=I.groups;for(let $=0,V=O.length;$<V;$++){const Z=O[$],Y=z[Z.materialIndex];if(Y&&Y.visible){const ne=_(w,Y,k,M);w.onBeforeShadow(n,w,E,L,I,ne,Z),n.renderBufferDirect(L,null,I,ne,w,Z),w.onAfterShadow(n,w,E,L,I,ne,Z)}}}else if(z.visible){const O=_(w,z,k,M);w.onBeforeShadow(n,w,E,L,I,O,null),n.renderBufferDirect(L,null,I,O,w,null),w.onAfterShadow(n,w,E,L,I,O,null)}}const S=w.children;for(let I=0,z=S.length;I<z;I++)b(S[I],E,L,k,M)}function C(w){w.target.removeEventListener("dispose",C);for(const E in c){const L=c[E],k=w.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}const Em={[rn]:nn,[on]:cn,[ln]:un,[Ea]:hn,[nn]:rn,[cn]:on,[un]:ln,[hn]:Ea};function Am(n){function e(){let F=!1;const ge=new ut;let j=null;const te=new ut(0,0,0,0);return{setMask:function(me){j!==me&&!F&&(n.colorMask(me,me,me,me),j=me)},setLocked:function(me){F=me},setClear:function(me,ue,st,ft,Ot){Ot===!0&&(me*=ft,ue*=ft,st*=ft),ge.set(me,ue,st,ft),te.equals(ge)===!1&&(n.clearColor(me,ue,st,ft),te.copy(ge))},reset:function(){F=!1,j=null,te.set(-1,0,0,0)}}}function t(){let F=!1,ge=!1,j=null,te=null,me=null;return{setReversed:function(ue){ge=ue},setTest:function(ue){ue?ve(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ue){j!==ue&&!F&&(n.depthMask(ue),j=ue)},setFunc:function(ue){if(ge&&(ue=Em[ue]),te!==ue){switch(ue){case rn:n.depthFunc(n.NEVER);break;case nn:n.depthFunc(n.ALWAYS);break;case on:n.depthFunc(n.LESS);break;case Ea:n.depthFunc(n.LEQUAL);break;case ln:n.depthFunc(n.EQUAL);break;case hn:n.depthFunc(n.GEQUAL);break;case cn:n.depthFunc(n.GREATER);break;case un:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ue}},setLocked:function(ue){F=ue},setClear:function(ue){me!==ue&&(n.clearDepth(ue),me=ue)},reset:function(){F=!1,j=null,te=null,me=null}}}function i(){let F=!1,ge=null,j=null,te=null,me=null,ue=null,st=null,ft=null,Ot=null;return{setTest:function(Je){F||(Je?ve(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Je){ge!==Je&&!F&&(n.stencilMask(Je),ge=Je)},setFunc:function(Je,Ft,di){(j!==Je||te!==Ft||me!==di)&&(n.stencilFunc(Je,Ft,di),j=Je,te=Ft,me=di)},setOp:function(Je,Ft,di){(ue!==Je||st!==Ft||ft!==di)&&(n.stencilOp(Je,Ft,di),ue=Je,st=Ft,ft=di)},setLocked:function(Je){F=Je},setClear:function(Je){Ot!==Je&&(n.clearStencil(Je),Ot=Je)},reset:function(){F=!1,ge=null,j=null,te=null,me=null,ue=null,st=null,ft=null,Ot=null}}}const a=new e,s=new t,r=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,v=!1,x=null,m=null,g=null,y=null,_=null,b=null,C=null,w=new Ye(0,0,0),E=0,L=!1,k=null,M=null,S=null,I=null,z=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=V>=2);let Y=null,ne={};const xe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Ge=new ut().fromArray(xe),je=new ut().fromArray(Ce);function J(F,ge,j,te){const me=new Uint8Array(4),ue=n.createTexture();n.bindTexture(F,ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<j;st++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ge+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ue}const ae={};ae[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),r.setClear(0),ve(n.DEPTH_TEST),s.setFunc(Ea),Ke(!1),qe(vo),ve(n.CULL_FACE),U(Di);function ve(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function de(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Re(F,ge){return h[F]!==ge?(n.bindFramebuffer(F,ge),h[F]=ge,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ae(F,ge){let j=f,te=!1;if(F){j=u.get(ge),j===void 0&&(j=[],u.set(ge,j));const me=F.textures;if(j.length!==me.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,st=me.length;ue<st;ue++)j[ue]=n.COLOR_ATTACHMENT0+ue;j.length=me.length,te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,te=!0);te&&n.drawBuffers(j)}function Ve(F){return d!==F?(n.useProgram(F),d=F,!0):!1}const Xe={[ji]:n.FUNC_ADD,[Gh]:n.FUNC_SUBTRACT,[Vh]:n.FUNC_REVERSE_SUBTRACT};Xe[Wh]=n.MIN,Xe[Xh]=n.MAX;const Ne={[Kh]:n.ZERO,[qh]:n.ONE,[Yh]:n.SRC_COLOR,[an]:n.SRC_ALPHA,[ec]:n.SRC_ALPHA_SATURATE,[Jh]:n.DST_COLOR,[$h]:n.DST_ALPHA,[jh]:n.ONE_MINUS_SRC_COLOR,[sn]:n.ONE_MINUS_SRC_ALPHA,[Qh]:n.ONE_MINUS_DST_COLOR,[Zh]:n.ONE_MINUS_DST_ALPHA,[tc]:n.CONSTANT_COLOR,[ic]:n.ONE_MINUS_CONSTANT_COLOR,[ac]:n.CONSTANT_ALPHA,[sc]:n.ONE_MINUS_CONSTANT_ALPHA};function U(F,ge,j,te,me,ue,st,ft,Ot,Je){if(F===Di){v===!0&&(de(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),F!==Hh){if(F!==x||Je!==L){if((m!==ji||_!==ji)&&(n.blendEquation(n.FUNC_ADD),m=ji,_=ji),Je)switch(F){case Sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFunc(n.ONE,n.ONE);break;case _o:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _o:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,y=null,b=null,C=null,w.set(0,0,0),E=0,x=F,L=Je}return}me=me||ge,ue=ue||j,st=st||te,(ge!==m||me!==_)&&(n.blendEquationSeparate(Xe[ge],Xe[me]),m=ge,_=me),(j!==g||te!==y||ue!==b||st!==C)&&(n.blendFuncSeparate(Ne[j],Ne[te],Ne[ue],Ne[st]),g=j,y=te,b=ue,C=st),(ft.equals(w)===!1||Ot!==E)&&(n.blendColor(ft.r,ft.g,ft.b,Ot),w.copy(ft),E=Ot),x=F,L=!1}function Tt(F,ge){F.side===Ut?de(n.CULL_FACE):ve(n.CULL_FACE);let j=F.side===Vt;ge&&(j=!j),Ke(j),F.blending===Sa&&F.transparent===!1?U(Di):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),a.setMask(F.colorWrite);const te=F.stencilWrite;r.setTest(te),te&&(r.setMask(F.stencilWriteMask),r.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),r.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){k!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),k=F)}function qe(F){F!==Oh?(ve(n.CULL_FACE),F!==M&&(F===vo?n.cullFace(n.BACK):F===Fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),M=F}function Te(F){F!==S&&($&&n.lineWidth(F),S=F)}function G(F,ge,j){F?(ve(n.POLYGON_OFFSET_FILL),(I!==ge||z!==j)&&(n.polygonOffset(ge,j),I=ge,z=j)):de(n.POLYGON_OFFSET_FILL)}function se(F){F?ve(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function R(F){F===void 0&&(F=n.TEXTURE0+O-1),Y!==F&&(n.activeTexture(F),Y=F)}function T(F,ge,j){j===void 0&&(Y===null?j=n.TEXTURE0+O-1:j=Y);let te=ne[j];te===void 0&&(te={type:void 0,texture:void 0},ne[j]=te),(te.type!==F||te.texture!==ge)&&(Y!==j&&(n.activeTexture(j),Y=j),n.bindTexture(F,ge||ae[F]),te.type=F,te.texture=ge)}function W(){const F=ne[Y];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(F){Ge.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ge.copy(F))}function be(F){je.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function $e(F,ge){let j=l.get(ge);j===void 0&&(j=new WeakMap,l.set(ge,j));let te=j.get(F);te===void 0&&(te=n.getUniformBlockIndex(ge,F.name),j.set(F,te))}function Ue(F,ge){const j=l.get(ge).get(F);o.get(ge)!==j&&(n.uniformBlockBinding(ge,j,F.__bindingPointIndex),o.set(ge,j))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,ne={},h={},u=new WeakMap,f=[],d=null,v=!1,x=null,m=null,g=null,y=null,_=null,b=null,C=null,w=new Ye(0,0,0),E=0,L=!1,k=null,M=null,S=null,I=null,z=null,Ge.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),r.reset()}return{buffers:{color:a,depth:s,stencil:r},enable:ve,disable:de,bindFramebuffer:Re,drawBuffers:Ae,useProgram:Ve,setBlending:U,setMaterial:Tt,setFlipSided:Ke,setCullFace:qe,setLineWidth:Te,setPolygonOffset:G,setScissorTest:se,activeTexture:R,bindTexture:T,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Le,updateUBOMapping:$e,uniformBlockBinding:Ue,texStorage2D:ke,texStorage3D:ie,texSubImage2D:K,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:ze,viewport:be,reset:at}}function hl(n,e,t,i){const a=Cm(i);switch(t){case ql:return n*e;case jl:return n*e;case $l:return n*e*2;case $n:return n*e/a.components*a.byteLength;case Zn:return n*e/a.components*a.byteLength;case Zl:return n*e*2/a.components*a.byteLength;case Jn:return n*e*2/a.components*a.byteLength;case Yl:return n*e*3/a.components*a.byteLength;case ni:return n*e*4/a.components*a.byteLength;case Qn:return n*e*4/a.components*a.byteLength;case Us:case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gn:case xn:return Math.max(n,16)*Math.max(e,8)/4;case mn:case vn:return Math.max(n,8)*Math.max(e,8)/2;case _n:case yn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sn:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tn:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wn:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case En:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case An:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cn:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rn:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ln:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pn:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dn:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case In:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kn:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zn:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hs:case Nn:case Un:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jl:case On:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fn:case Bn:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cm(n){switch(n){case bi:case Wl:return{byteLength:1,components:1};case Qa:case Xl:case es:return{byteLength:2,components:1};case Yn:case jn:return{byteLength:2,components:4};case ea:case qn:case li:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Rm(n,e,t,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,T){return d?new OffscreenCanvas(R,T):js("canvas")}function x(R,T,W){let Q=1;const ee=se(R);if((ee.width>W||ee.height>W)&&(Q=W/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*ee.width),_e=Math.floor(Q*ee.height);u===void 0&&(u=v(K,_e));const oe=T?v(K,_e):u;return oe.width=K,oe.height=_e,oe.getContext("2d").drawImage(R,0,0,K,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+_e+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Gt&&R.minFilter!==Qt}function g(R){n.generateMipmap(R)}function y(R,T,W,Q,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=T;if(T===n.RED&&(W===n.FLOAT&&(K=n.R32F),W===n.HALF_FLOAT&&(K=n.R16F),W===n.UNSIGNED_BYTE&&(K=n.R8)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.R8UI),W===n.UNSIGNED_SHORT&&(K=n.R16UI),W===n.UNSIGNED_INT&&(K=n.R32UI),W===n.BYTE&&(K=n.R8I),W===n.SHORT&&(K=n.R16I),W===n.INT&&(K=n.R32I)),T===n.RG&&(W===n.FLOAT&&(K=n.RG32F),W===n.HALF_FLOAT&&(K=n.RG16F),W===n.UNSIGNED_BYTE&&(K=n.RG8)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RG8UI),W===n.UNSIGNED_SHORT&&(K=n.RG16UI),W===n.UNSIGNED_INT&&(K=n.RG32UI),W===n.BYTE&&(K=n.RG8I),W===n.SHORT&&(K=n.RG16I),W===n.INT&&(K=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RGB8UI),W===n.UNSIGNED_SHORT&&(K=n.RGB16UI),W===n.UNSIGNED_INT&&(K=n.RGB32UI),W===n.BYTE&&(K=n.RGB8I),W===n.SHORT&&(K=n.RGB16I),W===n.INT&&(K=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),W===n.UNSIGNED_INT&&(K=n.RGBA32UI),W===n.BYTE&&(K=n.RGBA8I),W===n.SHORT&&(K=n.RGBA16I),W===n.INT&&(K=n.RGBA32I)),T===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),T===n.RGBA){const _e=ee?Xs:Qe.getTransfer(Q);W===n.FLOAT&&(K=n.RGBA32F),W===n.HALF_FLOAT&&(K=n.RGBA16F),W===n.UNSIGNED_BYTE&&(K=_e===nt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(R,T){let W;return R?T===null||T===ea||T===Ra?W=n.DEPTH24_STENCIL8:T===li?W=n.DEPTH32F_STENCIL8:T===Qa&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ea||T===Ra?W=n.DEPTH_COMPONENT24:T===li?W=n.DEPTH_COMPONENT32F:T===Qa&&(W=n.DEPTH_COMPONENT16),W}function b(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Qt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){const T=R.target;T.removeEventListener("dispose",C),E(T),T.isVideoTexture&&h.delete(T)}function w(R){const T=R.target;T.removeEventListener("dispose",w),k(T)}function E(R){const T=i.get(R);if(T.__webglInit===void 0)return;const W=R.source,Q=f.get(W);if(Q){const ee=Q[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(R),Object.keys(Q).length===0&&f.delete(W)}i.remove(R)}function L(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const W=R.source,Q=f.get(W);delete Q[T.__cacheKey],r.memory.textures--}function k(R){const T=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ee=0;ee<T.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=R.textures;for(let Q=0,ee=W.length;Q<ee;Q++){const K=i.get(W[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(W[Q])}i.remove(R)}let M=0;function S(){M=0}function I(){const R=M;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),M+=1,R}function z(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function O(R,T){const W=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(W,R,T);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function $(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){je(W,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function V(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){je(W,R,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function Z(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){J(W,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}const Y={[Ws]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[fn]:n.MIRRORED_REPEAT},ne={[Gt]:n.NEAREST,[fc]:n.NEAREST_MIPMAP_NEAREST,[rs]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[cr]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},xe={[xc]:n.NEVER,[Tc]:n.ALWAYS,[_c]:n.LESS,[eh]:n.LEQUAL,[yc]:n.EQUAL,[Sc]:n.GEQUAL,[Mc]:n.GREATER,[bc]:n.NOTEQUAL};function Ce(R,T){if(T.type===li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qt||T.magFilter===cr||T.magFilter===rs||T.magFilter===Pi||T.minFilter===Qt||T.minFilter===cr||T.minFilter===rs||T.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Y[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Y[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Y[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ne[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gt||T.minFilter!==rs&&T.minFilter!==Pi||T.type===li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ge(R,T){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",C));const Q=T.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const K=z(T);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ee[K].usedTimes++;const _e=ee[R.__cacheKey];_e!==void 0&&(ee[R.__cacheKey].usedTimes--,_e.usedTimes===0&&L(T)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return W}function je(R,T,W){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const ee=Ge(R,T),K=T.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+W);const _e=i.get(K);if(K.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);const oe=Qe.getPrimaries(Qe.workingColorSpace),fe=T.colorSpace===Li?null:Qe.getPrimaries(T.colorSpace),ke=T.colorSpace===Li||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ie=x(T.image,!1,a.maxTextureSize);ie=G(T,ie);const Me=s.convert(T.format,T.colorSpace),Le=s.convert(T.type);let ze=y(T.internalFormat,Me,Le,T.colorSpace,T.isVideoTexture);Ce(Q,T);let be;const $e=T.mipmaps,Ue=T.isVideoTexture!==!0,at=_e.__version===void 0||ee===!0,F=K.dataReady,ge=b(T,ie);if(T.isDepthTexture)ze=_(T.format===La,T.type),at&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,ze,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ze,ie.width,ie.height,0,Me,Le,null));else if(T.isDataTexture)if($e.length>0){Ue&&at&&t.texStorage2D(n.TEXTURE_2D,ge,ze,$e[0].width,$e[0].height);for(let j=0,te=$e.length;j<te;j++)be=$e[j],Ue?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,be.width,be.height,Me,Le,be.data):t.texImage2D(n.TEXTURE_2D,j,ze,be.width,be.height,0,Me,Le,be.data);T.generateMipmaps=!1}else Ue?(at&&t.texStorage2D(n.TEXTURE_2D,ge,ze,ie.width,ie.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Me,Le,ie.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ie.width,ie.height,0,Me,Le,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ue&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ze,$e[0].width,$e[0].height,ie.depth);for(let j=0,te=$e.length;j<te;j++)if(be=$e[j],T.format!==ni)if(Me!==null)if(Ue){if(F)if(T.layerUpdates.size>0){const me=hl(be.width,be.height,T.format,T.type);for(const ue of T.layerUpdates){const st=be.data.subarray(ue*me/be.data.BYTES_PER_ELEMENT,(ue+1)*me/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ue,be.width,be.height,1,Me,st,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,ie.depth,Me,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ze,be.width,be.height,ie.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,ie.depth,Me,Le,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,ze,be.width,be.height,ie.depth,0,Me,Le,be.data)}else{Ue&&at&&t.texStorage2D(n.TEXTURE_2D,ge,ze,$e[0].width,$e[0].height);for(let j=0,te=$e.length;j<te;j++)be=$e[j],T.format!==ni?Me!==null?Ue?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(n.TEXTURE_2D,j,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,be.width,be.height,Me,Le,be.data):t.texImage2D(n.TEXTURE_2D,j,ze,be.width,be.height,0,Me,Le,be.data)}else if(T.isDataArrayTexture)if(Ue){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ze,ie.width,ie.height,ie.depth),F)if(T.layerUpdates.size>0){const j=hl(ie.width,ie.height,T.format,T.type);for(const te of T.layerUpdates){const me=ie.data.subarray(te*j/ie.data.BYTES_PER_ELEMENT,(te+1)*j/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,Me,Le,me)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,Le,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ie.width,ie.height,ie.depth,0,Me,Le,ie.data);else if(T.isData3DTexture)Ue?(at&&t.texStorage3D(n.TEXTURE_3D,ge,ze,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,Le,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ie.width,ie.height,ie.depth,0,Me,Le,ie.data);else if(T.isFramebufferTexture){if(at)if(Ue)t.texStorage2D(n.TEXTURE_2D,ge,ze,ie.width,ie.height);else{let j=ie.width,te=ie.height;for(let me=0;me<ge;me++)t.texImage2D(n.TEXTURE_2D,me,ze,j,te,0,Me,Le,null),j>>=1,te>>=1}}else if($e.length>0){if(Ue&&at){const j=se($e[0]);t.texStorage2D(n.TEXTURE_2D,ge,ze,j.width,j.height)}for(let j=0,te=$e.length;j<te;j++)be=$e[j],Ue?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me,Le,be):t.texImage2D(n.TEXTURE_2D,j,ze,Me,Le,be);T.generateMipmaps=!1}else if(Ue){if(at){const j=se(ie);t.texStorage2D(n.TEXTURE_2D,ge,ze,j.width,j.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Le,ie)}else t.texImage2D(n.TEXTURE_2D,0,ze,Me,Le,ie);m(T)&&g(Q),_e.__version=K.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function J(R,T,W){if(T.image.length!==6)return;const Q=Ge(R,T),ee=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);const K=i.get(ee);if(ee.version!==K.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const _e=Qe.getPrimaries(Qe.workingColorSpace),oe=T.colorSpace===Li?null:Qe.getPrimaries(T.colorSpace),fe=T.colorSpace===Li||_e===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,ie=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!ke&&!ie?Me[te]=x(T.image[te],!0,a.maxCubemapSize):Me[te]=ie?T.image[te].image:T.image[te],Me[te]=G(T,Me[te]);const Le=Me[0],ze=s.convert(T.format,T.colorSpace),be=s.convert(T.type),$e=y(T.internalFormat,ze,be,T.colorSpace),Ue=T.isVideoTexture!==!0,at=K.__version===void 0||Q===!0,F=ee.dataReady;let ge=b(T,Le);Ce(n.TEXTURE_CUBE_MAP,T);let j;if(ke){Ue&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,$e,Le.width,Le.height);for(let te=0;te<6;te++){j=Me[te].mipmaps;for(let me=0;me<j.length;me++){const ue=j[me];T.format!==ni?ze!==null?Ue?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ue.width,ue.height,ze,be,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,$e,ue.width,ue.height,0,ze,be,ue.data)}}}else{if(j=T.mipmaps,Ue&&at){j.length>0&&ge++;const te=se(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,$e,te.width,te.height)}for(let te=0;te<6;te++)if(ie){Ue?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,ze,be,Me[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,$e,Me[te].width,Me[te].height,0,ze,be,Me[te].data);for(let me=0;me<j.length;me++){const ue=j[me].image[te].image;Ue?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,ue.width,ue.height,ze,be,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,$e,ue.width,ue.height,0,ze,be,ue.data)}}else{Ue?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,be,Me[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,$e,ze,be,Me[te]);for(let me=0;me<j.length;me++){const ue=j[me];Ue?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,ze,be,ue.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,$e,ze,be,ue.image[te])}}}m(T)&&g(n.TEXTURE_CUBE_MAP),K.__version=ee.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ae(R,T,W,Q,ee,K){const _e=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),fe=y(W.internalFormat,_e,oe,W.colorSpace);if(!i.get(T).__hasExternalTextures){const ke=Math.max(1,T.width>>K),ie=Math.max(1,T.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,fe,ke,ie,T.depth,0,_e,oe,null):t.texImage2D(ee,K,fe,ke,ie,0,_e,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),qe(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,i.get(W).__webglTexture,0,Ke(T)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,i.get(W).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(R,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){const Q=T.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,K=_(T.stencilBuffer,ee),_e=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ke(T);qe(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,K,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,K,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,K,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,R)}else{const Q=T.textures;for(let ee=0;ee<Q.length;ee++){const K=Q[ee],_e=s.convert(K.format,K.colorSpace),oe=s.convert(K.type),fe=y(K.internalFormat,_e,oe,K.colorSpace),ke=Ke(T);W&&qe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,fe,T.width,T.height):qe(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const W=i.get(T.depthTexture).__webglTexture,Q=Ke(T);if(T.depthTexture.format===Ta)qe(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(T.depthTexture.format===La)qe(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Re(R){const T=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=Q}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");de(T.__webglFramebuffer,R)}else if(W){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),ve(T.__webglDepthbuffer[Q],R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ve(T.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(R,T,W){const Q=i.get(R);T!==void 0&&ae(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Re(R)}function Ve(R){const T=R.texture,W=i.get(R),Q=i.get(T);R.addEventListener("dispose",w);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,r.memory.textures++),K){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let fe=0;fe<T.mipmaps.length;fe++)W.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else W.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)W.__webglFramebuffer[oe]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(_e)for(let oe=0,fe=ee.length;oe<fe;oe++){const ke=i.get(ee[oe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),r.memory.textures++)}if(R.samples>0&&qe(R)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const fe=ee[oe];W.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);const ke=s.convert(fe.format,fe.colorSpace),ie=s.convert(fe.type),Me=y(fe.internalFormat,ke,ie,fe.colorSpace,R.isXRRenderTarget===!0),Le=Ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,W.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)ae(W.__webglFramebuffer[oe][fe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ae(W.__webglFramebuffer[oe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(T)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,fe=ee.length;oe<fe;oe++){const ke=ee[oe],ie=i.get(ke);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Ce(n.TEXTURE_2D,ke),ae(W.__webglFramebuffer,R,ke,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(ke)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Ce(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)ae(W.__webglFramebuffer[fe],R,T,n.COLOR_ATTACHMENT0,oe,fe);else ae(W.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,oe,0);m(T)&&g(oe),t.unbindTexture()}R.depthBuffer&&Re(R)}function Xe(R){const T=R.textures;for(let W=0,Q=T.length;W<Q;W++){const ee=T[W];if(m(ee)){const K=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ee).__webglTexture;t.bindTexture(K,_e),g(K),t.unbindTexture()}}}const Ne=[],U=[];function Tt(R){if(R.samples>0){if(qe(R)===!1){const T=R.textures,W=R.width,Q=R.height;let ee=n.COLOR_BUFFER_BIT;const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(R),oe=T.length>1;if(oe)for(let fe=0;fe<T.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let fe=0;fe<T.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);const ke=i.get(T[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,ee,n.NEAREST),l===!0&&(Ne.length=0,U.length=0,Ne.push(n.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ne.push(K),U.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<T.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);const ke=i.get(T[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ke(R){return Math.min(a.maxSamples,R.samples)}function qe(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(R){const T=r.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function G(R,T){const W=R.colorSpace,Q=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==zi&&W!==Li&&(Qe.getTransfer(W)===nt?(Q!==ni||ee!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Ae,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=qe}function Lm(n,e){function t(i,a=Li){let s;const r=Qe.getTransfer(a);if(i===bi)return n.UNSIGNED_BYTE;if(i===Yn)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jn)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wl)return n.BYTE;if(i===Xl)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===qn)return n.INT;if(i===ea)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===ql)return n.ALPHA;if(i===Yl)return n.RGB;if(i===ni)return n.RGBA;if(i===jl)return n.LUMINANCE;if(i===$l)return n.LUMINANCE_ALPHA;if(i===Ta)return n.DEPTH_COMPONENT;if(i===La)return n.DEPTH_STENCIL;if(i===$n)return n.RED;if(i===Zn)return n.RED_INTEGER;if(i===Zl)return n.RG;if(i===Jn)return n.RG_INTEGER;if(i===Qn)return n.RGBA_INTEGER;if(i===Us||i===Os||i===Fs||i===Bs)if(r===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mn||i===gn||i===vn||i===xn)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_n||i===yn||i===Mn)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_n||i===yn)return r===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bn||i===Sn||i===Tn||i===wn||i===En||i===An||i===Cn||i===Rn||i===Ln||i===Pn||i===Dn||i===In||i===kn||i===zn)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===En)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===An)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ln)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===In)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zn)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hs||i===Nn||i===Un)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hs)return r===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nn)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Un)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jl||i===On||i===Fn||i===Bn)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===On)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Pm extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dm={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,km=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Dt,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ki({vertexShader:Im,fragmentShader:km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new Rt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nm extends Da{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,v=null;const x=new zm,m=t.getContextAttributes();let g=null,y=null;const _=[],b=[],C=new pe;let w=null;const E=new si;E.layers.enable(1),E.viewport=new ut;const L=new si;L.layers.enable(2),L.viewport=new ut;const k=[E,L],M=new Pm;M.layers.enable(1),M.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=_[J];return ae===void 0&&(ae=new Br,_[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=_[J];return ae===void 0&&(ae=new Br,_[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=_[J];return ae===void 0&&(ae=new Br,_[J]=ae),ae.getHandSpace()};function z(J){const ae=b.indexOf(J.inputSource);if(ae===-1)return;const ve=_[ae];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||r),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",$);for(let J=0;J<_.length;J++){const ae=b[J];ae!==null&&(b[J]=null,_[J].disconnect(ae))}S=null,I=null,x.reset(),e.setRenderTarget(g),d=null,f=null,u=null,a=null,y=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",O),a.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),a.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,t,ae),a.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ta(d.framebufferWidth,d.framebufferHeight,{format:ni,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,ve=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?La:Ta,ve=m.stencil?Ra:ea);const Re={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=new XRWebGLBinding(a,t),f=u.createProjectionLayer(Re),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ta(f.textureWidth,f.textureHeight,{format:ni,type:bi,depthTexture:new ph(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),je.setContext(a),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(J){for(let ae=0;ae<J.removed.length;ae++){const ve=J.removed[ae],de=b.indexOf(ve);de>=0&&(b[de]=null,_[de].disconnect(ve))}for(let ae=0;ae<J.added.length;ae++){const ve=J.added[ae];let de=b.indexOf(ve);if(de===-1){for(let Ae=0;Ae<_.length;Ae++)if(Ae>=b.length){b.push(ve),de=Ae;break}else if(b[Ae]===null){b[Ae]=ve,de=Ae;break}if(de===-1)break}const Re=_[de];Re&&Re.connect(ve)}}const V=new P,Z=new P;function Y(J,ae,ve){V.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const de=V.distanceTo(Z),Re=ae.projectionMatrix.elements,Ae=ve.projectionMatrix.elements,Ve=Re[14]/(Re[10]-1),Xe=Re[14]/(Re[10]+1),Ne=(Re[9]+1)/Re[5],U=(Re[9]-1)/Re[5],Tt=(Re[8]-1)/Re[0],Ke=(Ae[8]+1)/Ae[0],qe=Ve*Tt,Te=Ve*Ke,G=de/(-Tt+Ke),se=G*-Tt;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(se),J.translateZ(G),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Re[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const R=Ve+G,T=Xe+G,W=qe-se,Q=Te+(de-se),ee=Ne*Xe/T*R,K=U*Xe/T*R;J.projectionMatrix.makePerspective(W,Q,ee,K,R,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ne(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ae=J.near,ve=J.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),M.near=L.near=E.near=ae,M.far=L.far=E.far=ve,(S!==M.near||I!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,I=M.far);const de=J.parent,Re=M.cameras;ne(M,de);for(let Ae=0;Ae<Re.length;Ae++)ne(Re[Ae],de);Re.length===2?Y(M,E,L):M.projectionMatrix.copy(E.projectionMatrix),xe(J,M,de)};function xe(J,ae,ve){ve===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gn*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Ce=null;function Ge(J,ae){if(h=ae.getViewerPose(c||r),v=ae,h!==null){const ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let de=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Ae=0;Ae<ve.length;Ae++){const Ve=ve[Ae];let Xe=null;if(d!==null)Xe=d.getViewport(Ve);else{const U=u.getViewSubImage(f,Ve);Xe=U.viewport,Ae===0&&(e.setRenderTargetTextures(y,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(y))}let Ne=k[Ae];Ne===void 0&&(Ne=new si,Ne.layers.enable(Ae),Ne.viewport=new ut,k[Ae]=Ne),Ne.matrix.fromArray(Ve.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ve.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ae===0&&(M.matrix.copy(Ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(Ne)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ae=u.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(e,Ae,a.renderState)}}for(let ve=0;ve<_.length;ve++){const de=b[ve],Re=_[ve];de!==null&&Re!==void 0&&Re.update(de,ae,c||r)}Ce&&Ce(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const je=new uh;je.setAnimationLoop(Ge),this.setAnimationLoop=function(J){Ce=J},this.dispose=function(){}}}const Wi=new hi,Um=new tt;function Om(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,lh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function a(m,g,y,_,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(s(m,g),v(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Vt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Vt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),_=y.envMap,b=y.envMapRotation;_&&(m.envMap.value=_,Wi.copy(b),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Wi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=_*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Fm(n,e,t,i){let a={},s={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const b=_.program;i.uniformBlockBinding(y,b)}function c(y,_){let b=a[y.id];b===void 0&&(v(y),b=h(y),a[y.id]=b,y.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(y,C);const w=e.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function h(y){const _=u();y.__bindingPointIndex=_;const b=n.createBuffer(),C=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=a[y.id],b=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,E=b.length;w<E;w++){const L=Array.isArray(b[w])?b[w]:[b[w]];for(let k=0,M=L.length;k<M;k++){const S=L[k];if(d(S,w,k,C)===!0){const I=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let O=0;for(let $=0;$<z.length;$++){const V=z[$],Z=x(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,I+O,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,_,b,C){const w=y.value,E=_+"_"+b;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const L=C[E];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[E]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function v(y){const _=y.uniforms;let b=0;const C=16;for(let E=0,L=_.length;E<L;E++){const k=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,S=k.length;M<S;M++){const I=k[M],z=Array.isArray(I.value)?I.value:[I.value];for(let O=0,$=z.length;O<$;O++){const V=z[O],Z=x(V),Y=b%C,ne=Y%Z.boundary,xe=Y+ne;b+=ne,xe!==0&&C-xe<Z.storage&&(b+=C-xe),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=Z.storage}}}const w=b%C;return w>0&&(b+=C-w),y.__size=b,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const b=r.indexOf(_.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function g(){for(const y in a)n.deleteBuffer(a[y]);r=[],a={},s={}}return{bind:l,update:c,dispose:g}}class Cg{constructor(e={}){const{canvas:t=Ec(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const d=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=Ii,this.toneMappingExposure=1;const _=this;let b=!1,C=0,w=0,E=null,L=-1,k=null;const M=new ut,S=new ut;let I=null;const z=new Ye(0);let O=0,$=t.width,V=t.height,Z=1,Y=null,ne=null;const xe=new ut(0,0,$,V),Ce=new ut(0,0,$,V);let Ge=!1;const je=new io;let J=!1,ae=!1;const ve=new tt,de=new tt,Re=new P,Ae=new ut,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Ne(){return E===null?Z:1}let U=i;function Tt(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kn}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ue,!1),U===null){const H="webgl2";if(U=Tt(H,A),U===null)throw Tt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ke,qe,Te,G,se,R,T,W,Q,ee,K,_e,oe,fe,ke,ie,Me,Le,ze,be,$e,Ue,at,F;function ge(){Ke=new Wp(U),Ke.init(),Ue=new Lm(U,Ke),qe=new Op(U,Ke,e,Ue),Te=new Am(U),qe.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),G=new qp(U),se=new dm,R=new Rm(U,Ke,Te,se,qe,Ue,G),T=new Bp(_),W=new Vp(_),Q=new eu(U),at=new Np(U,Q),ee=new Xp(U,Q,G,at),K=new jp(U,ee,Q,G),ze=new Yp(U,qe,R),ie=new Fp(se),_e=new um(_,T,W,Ke,qe,at,ie),oe=new Om(_,se),fe=new fm,ke=new ym(Ke),Le=new zp(_,T,W,Te,K,f,l),Me=new wm(_,K,qe),F=new Fm(U,G,qe,Te),be=new Up(U,Ke,G),$e=new Kp(U,Ke,G),G.programs=_e.programs,_.capabilities=qe,_.extensions=Ke,_.properties=se,_.renderLists=fe,_.shadowMap=Me,_.state=Te,_.info=G}ge();const j=new Nm(_,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize($,V,!1))},this.getSize=function(A){return A.set($,V)},this.setSize=function(A,H,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,V=H,t.width=Math.floor(A*Z),t.height=Math.floor(H*Z),X===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set($*Z,V*Z).floor()},this.setDrawingBufferSize=function(A,H,X){$=A,V=H,Z=X,t.width=Math.floor(A*X),t.height=Math.floor(H*X),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,H,X,q){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,H,X,q),Te.viewport(M.copy(xe).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,H,X,q){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,H,X,q),Te.scissor(S.copy(Ce).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(A){Te.setScissorTest(Ge=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(A=!0,H=!0,X=!0){let q=0;if(A){let B=!1;if(E!==null){const re=E.texture.format;B=re===Qn||re===Jn||re===Zn}if(B){const re=E.texture.type,ye=re===bi||re===ea||re===Qa||re===Ra||re===Yn||re===jn,Se=Le.getClearColor(),we=Le.getClearAlpha(),Ie=Se.r,De=Se.g,Pe=Se.b;ye?(d[0]=Ie,d[1]=De,d[2]=Pe,d[3]=we,U.clearBufferuiv(U.COLOR,0,d)):(v[0]=Ie,v[1]=De,v[2]=Pe,v[3]=we,U.clearBufferiv(U.COLOR,0,v))}else q|=U.COLOR_BUFFER_BIT}H&&(q|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),ke.dispose(),se.dispose(),T.dispose(),W.dispose(),K.dispose(),at.dispose(),F.dispose(),_e.dispose(),j.dispose(),j.removeEventListener("sessionstart",lo),j.removeEventListener("sessionend",ho),Ui.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=G.autoReset,H=Me.enabled,X=Me.autoUpdate,q=Me.needsUpdate,B=Me.type;ge(),G.autoReset=A,Me.enabled=H,Me.autoUpdate=X,Me.needsUpdate=q,Me.type=B}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const H=A.target;H.removeEventListener("dispose",st),ft(H)}function ft(A){Ot(A),se.remove(A)}function Ot(A){const H=se.get(A).programs;H!==void 0&&(H.forEach(function(X){_e.releaseProgram(X)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,X,q,B,re){H===null&&(H=Ve);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Se=Ph(A,H,X,q,B);Te.setMaterial(q,ye);let we=X.index,Ie=1;if(q.wireframe===!0){if(we=ee.getWireframeAttribute(X),we===void 0)return;Ie=2}const De=X.drawRange,Pe=X.attributes.position;let et=De.start*Ie,ht=(De.start+De.count)*Ie;re!==null&&(et=Math.max(et,re.start*Ie),ht=Math.min(ht,(re.start+re.count)*Ie)),we!==null?(et=Math.max(et,0),ht=Math.min(ht,we.count)):Pe!=null&&(et=Math.max(et,0),ht=Math.min(ht,Pe.count));const dt=ht-et;if(dt<0||dt===1/0)return;at.setup(B,q,Se,X,we);let vt,lt=be;if(we!==null&&(vt=Q.get(we),lt=$e,lt.setIndex(vt)),B.isMesh)q.wireframe===!0?(Te.setLineWidth(q.wireframeLinewidth*Ne()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(B.isLine){let Ee=q.linewidth;Ee===void 0&&(Ee=1),Te.setLineWidth(Ee*Ne()),B.isLineSegments?lt.setMode(U.LINES):B.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else B.isPoints?lt.setMode(U.POINTS):B.isSprite&&lt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ee=B._multiDrawStarts,It=B._multiDrawCounts,Oi=B._multiDrawCount,ei=we?Q.get(we).bytesPerElement:1,ra=se.get(q).currentProgram.getUniforms();for(let Xt=0;Xt<Oi;Xt++)ra.setValue(U,"_gl_DrawID",Xt),lt.render(Ee[Xt]/ei,It[Xt])}else if(B.isInstancedMesh)lt.renderInstances(et,dt,B.count);else if(X.isInstancedBufferGeometry){const Ee=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,It=Math.min(X.instanceCount,Ee);lt.renderInstances(et,dt,It)}else lt.render(et,dt)};function Je(A,H,X){A.transparent===!0&&A.side===Ut&&A.forceSinglePass===!1?(A.side=Vt,A.needsUpdate=!0,ss(A,H,X),A.side=Mi,A.needsUpdate=!0,ss(A,H,X),A.side=Ut):ss(A,H,X)}this.compile=function(A,H,X=null){X===null&&(X=A),m=ke.get(X),m.init(H),y.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),A!==X&&A.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const q=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const re=B.material;if(re)if(Array.isArray(re))for(let ye=0;ye<re.length;ye++){const Se=re[ye];Je(Se,X,B),q.add(Se)}else Je(re,X,B),q.add(re)}),y.pop(),m=null,q},this.compileAsync=function(A,H,X=null){const q=this.compile(A,H,X);return new Promise(B=>{function re(){if(q.forEach(function(ye){se.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){B(A);return}setTimeout(re,10)}Ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ft=null;function di(A){Ft&&Ft(A)}function lo(){Ui.stop()}function ho(){Ui.start()}const Ui=new uh;Ui.setAnimationLoop(di),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(A){Ft=A,j.setAnimationLoop(A),A===null?Ui.stop():Ui.start()},j.addEventListener("sessionstart",lo),j.addEventListener("sessionend",ho),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(H),H=j.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,H,E),m=ke.get(A,y.length),m.init(H),y.push(m),de.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),je.setFromProjectionMatrix(de),ae=this.localClippingEnabled,J=ie.init(this.clippingPlanes,ae),x=fe.get(A,g.length),x.init(),g.push(x),j.enabled===!0&&j.isPresenting===!0){const re=_.xr.getDepthSensingMesh();re!==null&&nr(re,H,-1/0,_.sortObjects)}nr(A,H,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Y,ne),Xe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Xe&&Le.addToRenderList(x,A),this.info.render.frame++,J===!0&&ie.beginShadows();const X=m.state.shadowsArray;Me.render(X,A,H),J===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,B=x.transmissive;if(m.setupLights(),H.isArrayCamera){const re=H.cameras;if(B.length>0)for(let ye=0,Se=re.length;ye<Se;ye++){const we=re[ye];uo(q,B,A,we)}Xe&&Le.render(A);for(let ye=0,Se=re.length;ye<Se;ye++){const we=re[ye];co(x,A,we,we.viewport)}}else B.length>0&&uo(q,B,A,H),Xe&&Le.render(A),co(x,A,H);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(_,A,H),at.resetDefaultState(),L=-1,k=null,y.pop(),y.length>0?(m=y[y.length-1],J===!0&&ie.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function nr(A,H,X,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||je.intersectsSprite(A)){q&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const re=K.update(A),ye=A.material;ye.visible&&x.push(A,re,ye,X,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||je.intersectsObject(A))){const re=K.update(A),ye=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ae.copy(re.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(ye)){const Se=re.groups;for(let we=0,Ie=Se.length;we<Ie;we++){const De=Se[we],Pe=ye[De.materialIndex];Pe&&Pe.visible&&x.push(A,re,Pe,X,Ae.z,De)}}else ye.visible&&x.push(A,re,ye,X,Ae.z,null)}}const B=A.children;for(let re=0,ye=B.length;re<ye;re++)nr(B[re],H,X,q)}function co(A,H,X,q){const B=A.opaque,re=A.transmissive,ye=A.transparent;m.setupLightsView(X),J===!0&&ie.setGlobalState(_.clippingPlanes,X),q&&Te.viewport(M.copy(q)),B.length>0&&as(B,H,X),re.length>0&&as(re,H,X),ye.length>0&&as(ye,H,X),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function uo(A,H,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ta(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?es:bi,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const B=m.state.transmissionRenderTarget[q.id],re=q.viewport||M;B.setSize(re.z,re.w);const ye=_.getRenderTarget();_.setRenderTarget(B),_.getClearColor(z),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&Le.render(X);const Se=_.toneMapping;_.toneMapping=Ii;const we=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),J===!0&&ie.setGlobalState(_.clippingPlanes,q),as(A,X,q),R.updateMultisampleRenderTarget(B),R.updateRenderTargetMipmap(B),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let De=0,Pe=H.length;De<Pe;De++){const et=H[De],ht=et.object,dt=et.geometry,vt=et.material,lt=et.group;if(vt.side===Ut&&ht.layers.test(q.layers)){const Ee=vt.side;vt.side=Vt,vt.needsUpdate=!0,po(ht,X,q,dt,vt,lt),vt.side=Ee,vt.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(B),R.updateRenderTargetMipmap(B))}_.setRenderTarget(ye),_.setClearColor(z,O),we!==void 0&&(q.viewport=we),_.toneMapping=Se}function as(A,H,X){const q=H.isScene===!0?H.overrideMaterial:null;for(let B=0,re=A.length;B<re;B++){const ye=A[B],Se=ye.object,we=ye.geometry,Ie=q===null?ye.material:q,De=ye.group;Se.layers.test(X.layers)&&po(Se,H,X,we,Ie,De)}}function po(A,H,X,q,B,re){A.onBeforeRender(_,H,X,q,B,re),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(_,H,X,q,A,re),B.transparent===!0&&B.side===Ut&&B.forceSinglePass===!1?(B.side=Vt,B.needsUpdate=!0,_.renderBufferDirect(X,H,q,B,A,re),B.side=Mi,B.needsUpdate=!0,_.renderBufferDirect(X,H,q,B,A,re),B.side=Ut):_.renderBufferDirect(X,H,q,B,A,re),A.onAfterRender(_,H,X,q,B,re)}function ss(A,H,X){H.isScene!==!0&&(H=Ve);const q=se.get(A),B=m.state.lights,re=m.state.shadowsArray,ye=B.state.version,Se=_e.getParameters(A,B.state,re,H,X),we=_e.getProgramCacheKey(Se);let Ie=q.programs;q.environment=A.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(A.isMeshStandardMaterial?W:T).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",st),Ie=new Map,q.programs=Ie);let De=Ie.get(we);if(De!==void 0){if(q.currentProgram===De&&q.lightsStateVersion===ye)return mo(A,Se),De}else Se.uniforms=_e.getUniforms(A),A.onBeforeCompile(Se,_),De=_e.acquireProgram(Se,we),Ie.set(we,De),q.uniforms=Se.uniforms;const Pe=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),mo(A,Se),q.needsLights=Ih(A),q.lightsStateVersion=ye,q.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=De,q.uniformsList=null,De}function fo(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Vs.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function mo(A,H){const X=se.get(A);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Ph(A,H,X,q,B){H.isScene!==!0&&(H=Ve),R.resetTextureUnits();const re=H.fog,ye=q.isMeshStandardMaterial?H.environment:null,Se=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:zi,we=(q.isMeshStandardMaterial?W:T).get(q.envMap||ye),Ie=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,ht=!!X.morphAttributes.color;let dt=Ii;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(dt=_.toneMapping);const vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=vt!==void 0?vt.length:0,Ee=se.get(q),It=m.state.lights;if(J===!0&&(ae===!0||A!==k)){const jt=A===k&&q.id===L;ie.setState(q,A,jt)}let Oi=!1;q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==It.state.version||Ee.outputColorSpace!==Se||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==we||q.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Ie||Ee.vertexTangents!==De||Ee.morphTargets!==Pe||Ee.morphNormals!==et||Ee.morphColors!==ht||Ee.toneMapping!==dt||Ee.morphTargetsCount!==lt)&&(Oi=!0):(Oi=!0,Ee.__version=q.version);let ei=Ee.currentProgram;Oi===!0&&(ei=ss(q,H,B));let ra=!1,Xt=!1,or=!1;const pt=ei.getUniforms(),Si=Ee.uniforms;if(Te.useProgram(ei.program)&&(ra=!0,Xt=!0,or=!0),q.id!==L&&(L=q.id,Xt=!0),ra||k!==A){qe.reverseDepthBuffer?(ve.copy(A.projectionMatrix),Cc(ve),Rc(ve),pt.setValue(U,"projectionMatrix",ve)):pt.setValue(U,"projectionMatrix",A.projectionMatrix),pt.setValue(U,"viewMatrix",A.matrixWorldInverse);const jt=pt.map.cameraPosition;jt!==void 0&&jt.setValue(U,Re.setFromMatrixPosition(A.matrixWorld)),qe.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,Xt=!0,or=!0)}if(B.isSkinnedMesh){pt.setOptional(U,B,"bindMatrix"),pt.setOptional(U,B,"bindMatrixInverse");const jt=B.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),pt.setValue(U,"boneTexture",jt.boneTexture,R))}B.isBatchedMesh&&(pt.setOptional(U,B,"batchingTexture"),pt.setValue(U,"batchingTexture",B._matricesTexture,R),pt.setOptional(U,B,"batchingIdTexture"),pt.setValue(U,"batchingIdTexture",B._indirectTexture,R),pt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(U,"batchingColorTexture",B._colorsTexture,R));const lr=X.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&ze.update(B,X,ei),(Xt||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,pt.setValue(U,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Si.envMap.value=we,Si.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Si.envMapIntensity.value=H.environmentIntensity),Xt&&(pt.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&Dh(Si,or),re&&q.fog===!0&&oe.refreshFogUniforms(Si,re),oe.refreshMaterialUniforms(Si,q,Z,V,m.state.transmissionRenderTarget[A.id]),Vs.upload(U,fo(Ee),Si,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vs.upload(U,fo(Ee),Si,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(U,"center",B.center),pt.setValue(U,"modelViewMatrix",B.modelViewMatrix),pt.setValue(U,"normalMatrix",B.normalMatrix),pt.setValue(U,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const jt=q.uniformsGroups;for(let hr=0,kh=jt.length;hr<kh;hr++){const go=jt[hr];F.update(go,ei),F.bind(go,ei)}}return ei}function Dh(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ih(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,H,X){se.get(A.texture).__webglTexture=H,se.get(A.depthTexture).__webglTexture=X;const q=se.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const X=se.get(A);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,X=0){E=A,C=H,w=X;let q=!0,B=null,re=!1,ye=!1;if(A){const Se=se.get(A);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Se.__hasExternalTextures)R.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Se.__boundDepthTexture!==De){if(De!==null&&se.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);const Ie=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[H])?B=Ie[H][X]:B=Ie[H],re=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?B=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[X]:B=Ie,M.copy(A.viewport),S.copy(A.scissor),I=A.scissorTest}else M.copy(xe).multiplyScalar(Z).floor(),S.copy(Ce).multiplyScalar(Z).floor(),I=Ge;if(Te.bindFramebuffer(U.FRAMEBUFFER,B)&&q&&Te.drawBuffers(A,B),Te.viewport(M),Te.scissor(S),Te.setScissorTest(I),re){const Se=se.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,X)}else if(ye){const Se=se.get(A.texture),we=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,X||0,we)}L=-1},this.readRenderTargetPixels=function(A,H,X,q,B,re,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){Te.bindFramebuffer(U.FRAMEBUFFER,Se);try{const we=A.texture,Ie=we.format,De=we.type;if(!qe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&X>=0&&X<=A.height-B&&U.readPixels(H,X,q,B,Ue.convert(Ie),Ue.convert(De),re)}finally{const we=E!==null?se.get(E).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(A,H,X,q,B,re,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){const we=A.texture,Ie=we.format,De=we.type;if(!qe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-q&&X>=0&&X<=A.height-B){Te.bindFramebuffer(U.FRAMEBUFFER,Se);const Pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(H,X,q,B,Ue.convert(Ie),Ue.convert(De),0);const et=E!==null?se.get(E).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,et);const ht=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ac(U,ht,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Pe),U.deleteSync(ht),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,X=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(A.image.width*q),re=Math.floor(A.image.height*q),ye=H!==null?H.x:0,Se=H!==null?H.y:0;R.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ye,Se,B,re),Te.unbindTexture()},this.copyTextureToTexture=function(A,H,X=null,q=null,B=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],H=arguments[2],B=arguments[3]||0,X=null);let re,ye,Se,we,Ie,De;X!==null?(re=X.max.x-X.min.x,ye=X.max.y-X.min.y,Se=X.min.x,we=X.min.y):(re=A.image.width,ye=A.image.height,Se=0,we=0),q!==null?(Ie=q.x,De=q.y):(Ie=0,De=0);const Pe=Ue.convert(H.format),et=Ue.convert(H.type);R.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const ht=U.getParameter(U.UNPACK_ROW_LENGTH),dt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vt=U.getParameter(U.UNPACK_SKIP_PIXELS),lt=U.getParameter(U.UNPACK_SKIP_ROWS),Ee=U.getParameter(U.UNPACK_SKIP_IMAGES),It=A.isCompressedTexture?A.mipmaps[B]:A.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Ie,De,re,ye,Pe,et,It.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Ie,De,It.width,It.height,Pe,It.data):U.texSubImage2D(U.TEXTURE_2D,B,Ie,De,re,ye,Pe,et,It),U.pixelStorei(U.UNPACK_ROW_LENGTH,ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ee),B===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,H,X=null,q=null,B=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,A=arguments[2],H=arguments[3],B=arguments[4]||0);let re,ye,Se,we,Ie,De,Pe,et,ht;const dt=A.isCompressedTexture?A.mipmaps[B]:A.image;X!==null?(re=X.max.x-X.min.x,ye=X.max.y-X.min.y,Se=X.max.z-X.min.z,we=X.min.x,Ie=X.min.y,De=X.min.z):(re=dt.width,ye=dt.height,Se=dt.depth,we=0,Ie=0,De=0),q!==null?(Pe=q.x,et=q.y,ht=q.z):(Pe=0,et=0,ht=0);const vt=Ue.convert(H.format),lt=Ue.convert(H.type);let Ee;if(H.isData3DTexture)R.setTexture3D(H,0),Ee=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)R.setTexture2DArray(H,0),Ee=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const It=U.getParameter(U.UNPACK_ROW_LENGTH),Oi=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ei=U.getParameter(U.UNPACK_SKIP_PIXELS),ra=U.getParameter(U.UNPACK_SKIP_ROWS),Xt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,we),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De),A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ee,B,Pe,et,ht,re,ye,Se,vt,lt,dt.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,B,Pe,et,ht,re,ye,Se,vt,dt.data):U.texSubImage3D(Ee,B,Pe,et,ht,re,ye,Se,vt,lt,dt),U.pixelStorei(U.UNPACK_ROW_LENGTH,It),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Oi),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ei),U.pixelStorei(U.UNPACK_SKIP_ROWS,ra),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt),B===0&&H.generateMipmaps&&U.generateMipmap(Ee),Te.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){C=0,w=0,E=null,Te.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===ar?"display-p3":"srgb"}}class so{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=i}clone(){return new so(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rg extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bm extends Dt{constructor(e=null,t=1,i=1,a,s,r,o,l,c=Gt,h=Gt,u,f){super(null,r,o,l,c,h,a,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl extends Wt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ya=new tt,ul=new tt,Es=[],dl=new ia,Hm=new tt,Ga=new le,Va=new aa;class Gm extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,Hm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ia),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ya),dl.copy(e.boundingBox).applyMatrix4(ya),this.boundingBox.union(dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new aa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ya),Va.copy(e.boundingSphere).applyMatrix4(ya),this.boundingSphere.union(Va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=a[r+o]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ga.geometry=this.geometry,Ga.material=this.material,Ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),e.ray.intersectsSphere(Va)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,ya),ul.multiplyMatrices(i,ya),Ga.matrixWorld=ul,Ga.raycast(e,Es);for(let r=0,o=Es.length;r<o;r++){const l=Es[r];l.instanceId=s,l.object=this,t.push(l)}Es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bm(new Float32Array(a*this.count),a,this.count,$n,li));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=a*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $s extends sa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zs=new P,Js=new P,pl=new tt,Wa=new to,As=new aa,Hr=new P,fl=new P;class Wn extends gt{constructor(e=new Mt,t=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)Zs.fromBufferAttribute(t,a-1),Js.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Zs.distanceTo(Js);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(a),As.radius+=s,e.ray.intersectsSphere(As)===!1)return;pl.copy(a).invert(),Wa.copy(e.ray).applyMatrix4(pl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let v=f,x=d-1;v<x;v+=c){const m=h.getX(v),g=h.getX(v+1),y=Cs(this,e,Wa,l,m,g);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(d-1),x=h.getX(f),m=Cs(this,e,Wa,l,v,x);m&&t.push(m)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let v=f,x=d-1;v<x;v+=c){const m=Cs(this,e,Wa,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=Cs(this,e,Wa,l,d-1,f);v&&t.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Cs(n,e,t,i,a,s){const r=n.geometry.attributes.position;if(Zs.fromBufferAttribute(r,a),Js.fromBufferAttribute(r,s),t.distanceSqToSegment(Zs,Js,Hr,fl)>i)return;Hr.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(Hr);if(!(o<e.near||o>e.far))return{distance:o,point:fl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const ml=new P,gl=new P;class Vm extends Wn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)ml.fromBufferAttribute(t,a),gl.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+ml.distanceTo(gl);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xh extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vl=new tt,Xn=new to,Rs=new aa,Ls=new P;class Wm extends gt{constructor(e=new Mt,t=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(a),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;vl.copy(a).invert(),Xn.copy(e.ray).applyMatrix4(vl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let d=u,v=f;d<v;d++){const x=c.getX(d);Ls.fromBufferAttribute(h,x),xl(Ls,x,l,a,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let d=u,v=f;d<v;d++)Ls.fromBufferAttribute(h,d),xl(Ls,d,l,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function xl(n,e,t,i,a,s,r){const o=Xn.distanceSqToPoint(n);if(o<t){const l=new P;Xn.closestPointToPoint(n,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ni extends Dt{constructor(e,t,i,a,s,r,o,l,c){super(e,t,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const h=i[a],u=i[a+1]-h,f=(r-h)/u;return(a+f)/(s-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const s=this.getPoint(i),r=this.getPoint(a),o=t||(s.isVector2?new pe:new P);return o.copy(r).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,a=[],s=[],r=[],o=new P,l=new tt;for(let d=0;d<=e;d++){const v=d/e;a[d]=this.getTangentAt(v,new P)}s[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(a[0].x),u=Math.abs(a[0].y),f=Math.abs(a[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(a[d-1],a[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ct(a[d-1].dot(a[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,v))}r[d].crossVectors(a[d],s[d])}if(t===!0){let d=Math.acos(Ct(s[0].dot(s[e]),-1,1));d/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(a[v],d*v)),r[v].crossVectors(a[v],s[v])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ro extends ci{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){const i=t,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xm extends ro{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function no(){let n=0,e=0,t=0,i=0;function a(s,r,o,l){n=s,e=o,t=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,u){let f=(r-s)/c-(o-s)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+u)+(l-o)/u;f*=h,d*=h,a(r,o,f,d)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const Ps=new P,Gr=new no,Vr=new no,Wr=new no;class Km extends ci{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new P){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=a[(o-1)%s]:(Ps.subVectors(a[0],a[1]).add(a[0]),c=Ps);const u=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?h=a[(o+2)%s]:(Ps.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Gr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,x,m),Vr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,x,m),Wr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(Gr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Vr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Wr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Gr.calc(l),Vr.calc(l),Wr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new P().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _l(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+r)*l+(-3*t+3*i-2*s-r)*o+s*n+t}function qm(n,e){const t=1-n;return t*t*e}function Ym(n,e){return 2*(1-n)*n*e}function jm(n,e){return n*n*e}function ja(n,e,t,i){return qm(n,e)+Ym(n,t)+jm(n,i)}function $m(n,e){const t=1-n;return t*t*t*e}function Zm(n,e){const t=1-n;return 3*t*t*n*e}function Jm(n,e){return 3*(1-n)*n*n*e}function Qm(n,e){return n*n*n*e}function $a(n,e,t,i,a){return $m(n,e)+Zm(n,t)+Jm(n,i)+Qm(n,a)}class _h extends ci{constructor(e=new pe,t=new pe,i=new pe,a=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new pe){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set($a(e,a.x,s.x,r.x,o.x),$a(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class e0 extends ci{constructor(e=new P,t=new P,i=new P,a=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new P){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set($a(e,a.x,s.x,r.x,o.x),$a(e,a.y,s.y,r.y,o.y),$a(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yh extends ci{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t0 extends ci{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mh extends ci{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ja(e,a.x,s.x,r.x),ja(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i0 extends ci{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ja(e,a.x,s.x,r.x),ja(e,a.y,s.y,r.y),ja(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bh extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],h=a[r>a.length-2?a.length-1:r+1],u=a[r>a.length-3?a.length-1:r+2];return i.set(_l(o,l.x,c.x,h.x,u.x),_l(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new pe().fromArray(a))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:Xm,CatmullRomCurve3:Km,CubicBezierCurve:_h,CubicBezierCurve3:e0,EllipseCurve:ro,LineCurve:yh,LineCurve3:t0,QuadraticBezierCurve:Mh,QuadraticBezierCurve3:i0,SplineCurve:bh});class a0 extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new yl[a.type]().fromJSON(a))}return this}}class s0 extends a0{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new yh(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new Mh(this.currentPoint.clone(),new pe(e,t),new pe(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,r){const o=new _h(this.currentPoint.clone(),new pe(e,t),new pe(i,a),new pe(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new bh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,r),this}absarc(e,t,i,a,s,r){return this.absellipse(e,t,i,i,a,s,r),this}ellipse(e,t,i,a,s,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,a,s,r,o,l),this}absellipse(e,t,i,a,s,r,o,l){const c=new ro(e,t,i,a,s,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rr extends Mt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=Ct(a,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],h=1/t,u=new P,f=new pe,d=new P,v=new P,x=new P;let m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,v.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(v)}for(let y=0;y<=t;y++){const _=i+y*h*a,b=Math.sin(_),C=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*b,u.y=e[w].y,u.z=e[w].x*C,r.push(u.x,u.y,u.z),f.x=y/t,f.y=w/(e.length-1),o.push(f.x,f.y);const E=l[3*w+0]*b,L=l[3*w+1],k=l[3*w+0]*C;c.push(E,L,k)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const b=_+y*e.length,C=b,w=b+e.length,E=b+e.length+1,L=b+1;s.push(C,w,L),s.push(E,L,w)}this.setIndex(s),this.setAttribute("position",new it(r,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.points,e.segments,e.phiStart,e.phiLength)}}class Za extends rr{constructor(e=1,t=1,i=4,a=8){const s=new s0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new Za(e.radius,e.length,e.capSegments,e.radialSegments)}}class ka extends Mt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new P,h=new pe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*a;c.x=e*Math.cos(d),c.y=e*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Et extends Mt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const h=[],u=[],f=[],d=[];let v=0;const x=[],m=i/2;let g=0;y(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function y(){const b=new P,C=new P;let w=0;const E=(t-e)/i;for(let L=0;L<=s;L++){const k=[],M=L/s,S=M*(t-e)+e;for(let I=0;I<=a;I++){const z=I/a,O=z*l+o,$=Math.sin(O),V=Math.cos(O);C.x=S*$,C.y=-M*i+m,C.z=S*V,u.push(C.x,C.y,C.z),b.set($,E,V).normalize(),f.push(b.x,b.y,b.z),d.push(z,1-M),k.push(v++)}x.push(k)}for(let L=0;L<a;L++)for(let k=0;k<s;k++){const M=x[k][L],S=x[k+1][L],I=x[k+1][L+1],z=x[k][L+1];e>0&&(h.push(M,S,z),w+=3),t>0&&(h.push(S,I,z),w+=3)}c.addGroup(g,w,0),g+=w}function _(b){const C=v,w=new pe,E=new P;let L=0;const k=b===!0?e:t,M=b===!0?1:-1;for(let I=1;I<=a;I++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),v++;const S=v;for(let I=0;I<=a;I++){const z=I/a*l+o,O=Math.cos(z),$=Math.sin(z);E.x=k*$,E.y=m*M,E.z=k*O,u.push(E.x,E.y,E.z),f.push(0,M,0),w.x=O*.5+.5,w.y=$*.5*M+.5,d.push(w.x,w.y),v++}for(let I=0;I<a;I++){const z=C+I,O=S+I;b===!0?h.push(O,O+1,z):h.push(O+1,O,z),L+=3}c.addGroup(g,L,b===!0?1:2),g+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends Mt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/a,d=new P,v=new pe;for(let x=0;x<=a;x++){for(let m=0;m<=i;m++){const g=s+m/i*r;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/t+1)/2,v.y=(d.y/t+1)/2,h.push(v.x,v.y)}u+=f}for(let x=0;x<a;x++){const m=x*(i+1);for(let g=0;g<i;g++){const y=g+m,_=y,b=y+i+1,C=y+i+2,w=y+1;o.push(_,b,w),o.push(b,C,w)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Nt extends Mt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],v=[],x=[],m=[];for(let g=0;g<=i;g++){const y=[],_=g/i;let b=0;g===0&&r===0?b=.5/t:g===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(a+w*s)*Math.sin(r+_*o),u.y=e*Math.cos(r+_*o),u.z=e*Math.sin(a+w*s)*Math.sin(r+_*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+b,1-_),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){const _=h[g][y+1],b=h[g][y],C=h[g+1][y],w=h[g+1][y+1];(g!==0||r>0)&&d.push(_,b,w),(g!==i-1||l<Math.PI)&&d.push(b,C,w)}this.setIndex(d),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xt extends sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sh extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class r0 extends Sh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xr=new tt,Ml=new P,bl=new P;class n0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),Xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o0 extends n0{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sl extends Sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new o0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kn);const N={halfLength:52.5,halfWidth:34,goalHalfWidth:3.66,goalHeight:2.44,boxHalfWidth:20.16,boxDepth:16.5,sixHalfWidth:9.16,sixDepth:5.5,circleRadius:9.15,penaltyDist:11},D=(n,e,t)=>n<e?e:n>t?t:n,We=(n,e,t)=>n+(e-n)*t,ot=(n,e)=>n+Math.random()*(e-n),he=(n,e,t,i)=>Math.hypot(n-t,e-i);function l0(n,e,t,i,a,s){const r=t-n,o=i-e,l=a-n,c=s-e,h=r*r+o*o||1,u=D((l*r+c*o)/h,0,1);return Math.hypot(a-(n+r*u),s-(e+o*u))}const Ds={"4-3-3":[{role:"GK",x:0,d:.035,number:1},{role:"DEF",x:21,d:.21,number:2},{role:"DEF",x:7,d:.165,number:5},{role:"DEF",x:-7,d:.165,number:6},{role:"DEF",x:-21,d:.21,number:3},{role:"MID",x:0,d:.34,number:4},{role:"MID",x:14,d:.45,number:8},{role:"MID",x:-14,d:.45,number:14},{role:"ATT",x:24,d:.68,number:7},{role:"ATT",x:0,d:.755,number:9},{role:"ATT",x:-24,d:.68,number:11}],"4-4-2":[{role:"GK",x:0,d:.035,number:1},{role:"DEF",x:21,d:.2,number:2},{role:"DEF",x:7,d:.155,number:5},{role:"DEF",x:-7,d:.155,number:6},{role:"DEF",x:-21,d:.2,number:3},{role:"MID",x:24,d:.52,number:7},{role:"MID",x:7,d:.42,number:4},{role:"MID",x:-7,d:.42,number:8},{role:"MID",x:-24,d:.52,number:11},{role:"ATT",x:5,d:.75,number:9},{role:"ATT",x:-5,d:.75,number:10}],"4-2-3-1":[{role:"GK",x:0,d:.035,number:1},{role:"DEF",x:21,d:.2,number:2},{role:"DEF",x:7,d:.155,number:5},{role:"DEF",x:-7,d:.155,number:6},{role:"DEF",x:-21,d:.2,number:3},{role:"MID",x:4,d:.33,number:4},{role:"MID",x:-4,d:.33,number:8},{role:"MID",x:20,d:.55,number:7},{role:"MID",x:0,d:.58,number:10},{role:"MID",x:-20,d:.55,number:11},{role:"ATT",x:0,d:.77,number:9}],"3-5-2":[{role:"GK",x:0,d:.035,number:1},{role:"DEF",x:16,d:.19,number:2},{role:"DEF",x:0,d:.155,number:5},{role:"DEF",x:-16,d:.19,number:6},{role:"MID",x:25,d:.5,number:7},{role:"MID",x:9,d:.36,number:4},{role:"MID",x:0,d:.3,number:8},{role:"MID",x:-9,d:.36,number:14},{role:"MID",x:-25,d:.5,number:11},{role:"ATT",x:7,d:.74,number:9},{role:"ATT",x:-7,d:.74,number:10}]},Tl=["Luca","Mateo","Idris","Noah","Elias","Jonas","Rafa","Kenji","Omar","Felix","Dario","Samir","Tobias","Nico","Andre","Yuto","Milos","Hugo","Emre","Iker","Levi","Marco","Aden","Kai","Theo","Rui","Sven","Amir","Caleb","Dani","Joel","Finn","Arda","Bruno","Diego","Ethan","Mika","Oscar","Pavel","Ruben","Sami","Tariq","Vitor","Wes","Yannick","Zane","Abel","Bilal","Cesar","Dev","Enzo","Fabio","Gio","Hakim","Ismael","Jude","Karim","Lorenzo","Malik","Nils"],Is=["Adler","Bakker","Brennan","Costa","Dumont","Eriksen","Ferrari","Gomez","Haas","Ibrahim","Jansen","Keller","Lombardi","Moreau","Novak","Okafor","Petrov","Quinn","Rossi","Silva","Tavares","Ueda","Vidal","Walsh","Yilmaz","Zimmer","Castillo","Diallo","Esposito","Fontaine","Grimaldi","Hughes","Ivanov","Jensen","Kovac","Larsen","Mendes","Nakamura","Ortega","Pereira","Ramos","Sorensen","Toure","Ulrich","Vargas","Weber","Yates","Zanetti","Adeyemi","Bianchi","Campbell","Dvorak","Egan","Fischer","Gallardo","Hansen","Ishida","Jovic","Keane","Lindqvist","Marchetti","Nunez","Oduya","Palmer","Reyes","Schmidt","Tanaka","Vega","Wright"],h0=[1,2,3,4,5,6,8,9,10,11,14,15,16,17,18,19,20,21];function c0(n,e){const t=[];return["GK","GK","DEF","DEF","DEF","DEF","DEF","DEF","MID","MID","MID","MID","MID","MID","ATT","ATT","ATT","ATT"].forEach((i,a)=>{const s=D(e+a%5-2+(i==="ATT"?1:0),62,92);t.push({id:`p${n}-${a}`,name:`${Tl[(n*7+a*5)%Tl.length]} ${Is[(n*13+a*7)%Is.length]}`,short:Is[(n*13+a*7)%Is.length],number:h0[a],role:i,rating:Math.round(s)})}),t}function u0(n){let e=2166136261;const t=String(n);for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e>>>0}function d0(n={},e=n.role||"MID"){const t=u0(`${n.id||n.name||"player"}|${e}|${n.rating||80}`),i=Xe=>{const Ne=Math.sin((t+Xe*131)*1e-4)*1e4;return Ne-Math.floor(Ne)},a=D(n.rating??80,55,95),s={GK:{pace:-12,shooting:-24,passing:-8,tackling:-14,physical:7,control:-8},DEF:{pace:-1,shooting:-10,passing:-5,tackling:9,physical:8,control:-3},MID:{pace:1,shooting:1,passing:8,tackling:3,physical:1,control:7},ATT:{pace:7,shooting:10,passing:-2,tackling:-8,physical:2,control:6}}[e]||{},r=(Xe,Ne=12)=>D(Math.round(a+(i(Xe.length*17+Xe.charCodeAt(0))-.5)*Ne+(s[Xe]||0)),42,97),o=r("pace",16),l=r("acceleration",15),c=r("control",14),h=r("passing",15),u=r("shooting",18),f=r("tackling",17),d=r("physical",16),v=r("stamina",14),x=D(Math.round((c+l)/2+(i(31)-.5)*22),35,97),m=r("vision",16),g=r("composure",17),y=r("crossing",17),_=D(Math.round(a+(i(41)-.5)*16),45,98),b=D(Math.round(u+(i(43)-.5)*14),38,97),C=D(Math.round(u+(i(47)-.5)*18),35,96),w=D(Math.round((u+d)/2+(i(59)-.5)*14),38,96),E=D(Math.round(h+(i(61)-.5)*10),42,97),L=D(Math.round(h+(i(67)-.5)*16),38,97),k=D(Math.round(c+(i(71)-.5)*14),38,97),M=D(Math.round((c+d)/2+(i(73)-.5)*16),38,97),S=D(Math.round((l+c)/2+(i(79)-.5)*12),38,97),I=D(Math.round((g+l)/2+(i(83)-.5)*14),40,97),z=D(Math.round((d+Math.max(o,65))/2+(i(89)-.5)*14),38,96),O=D(Math.round((f+m)/2+(i(97)-.5)*14),35,97),$=D(Math.round(f+(i(101)-.5)*14),35,97),V=D(Math.round(f+(i(103)-.5)*12),35,97),Z=D(Math.round(f+(i(107)-.5)*16),35,97),Y=D(Math.round((f+d)/2+(i(109)-.5)*12),35,97),ne=D(Math.round((m+f)/2+(i(113)-.5)*12),35,97),xe=D(Math.round((m+I)/2+(i(127)-.5)*12),35,97),Ce=D(Math.round((g+I)/2+(i(131)-.5)*12),35,97),Ge=e==="ATT"?.72:e==="MID"?.48:e==="DEF"?.34:.22,je=D(Math.round((d+Ge*100)/2+(i(137)-.5)*18),20,96),J=D(Math.round(100-Ge*55+(i(139)-.5)*22),25,97),ae=D(Math.round((v+d)/2+(i(149)-.5)*14),30,97),ve=D(Math.round((g+Math.max(a,60))/2+(i(151)-.5)*14),30,97),de=i(157)<.24?"left":"right",Re=D(Math.round(1+i(163)*4),1,5),Ae=D(Math.round(Ge*100+(i(53)-.5)*34+(e==="ATT"?8:0)),12,96),Ve=Ae>70?"INDIVIDUALIST":Ae<38?"TEAM FIRST":c>h+4?"TECHNICAL":"BALANCED";return{pace:o,acceleration:l,speed:Math.round((o+l)/2),control:c,passing:h,shooting:u,tackling:f,physical:d,stamina:v,flair:x,vision:m,composure:g,crossing:y,reflex:_,finishing:b,longShots:C,heading:w,shortPassing:E,longPassing:L,dribbling:k,balance:M,agility:S,reactions:I,jumping:z,defAwareness:O,interceptions:$,standingTackle:V,slidingTackle:Z,marking:Y,positioning:ne,anticipation:xe,concentration:Ce,aggression:je,teamwork:J,workRate:ae,leadership:ve,preferredFoot:de,weakFoot:Re,ego:Ae,personality:Ve}}const p0=[{id:"riverton",name:"Riverton FC",short:"RIV",primary:"#e02b36",secondary:"#ffffff",shorts:"#f4f4f4",socks:"#e02b36",rating:84,formation:"4-3-3"},{id:"azure",name:"Azure City",short:"AZC",primary:"#56c7f2",secondary:"#0b2a4a",shorts:"#ffffff",socks:"#2e8fc0",rating:86,formation:"4-2-3-1"},{id:"capital",name:"Capital Athletic",short:"CAP",primary:"#1b2a63",secondary:"#f0c24a",shorts:"#1b2a63",socks:"#f0c24a",rating:85,formation:"4-3-3"},{id:"verde",name:"Verde FC",short:"VRD",primary:"#17a05a",secondary:"#ffffff",shorts:"#ffffff",socks:"#17a05a",rating:82,formation:"4-4-2"},{id:"nero",name:"Nero Milano",short:"NER",primary:"#1b1c21",secondary:"#e03a3a",shorts:"#1b1c21",socks:"#e03a3a",rating:83,formation:"4-2-3-1"},{id:"solar",name:"Solar FC",short:"SOL",primary:"#f2c518",secondary:"#17181c",shorts:"#17181c",socks:"#f2c518",rating:81,formation:"3-5-2"},{id:"harbor",name:"Harbor Rovers",short:"HBR",primary:"#f2742c",secondary:"#12314f",shorts:"#12314f",socks:"#f2742c",rating:80,formation:"4-4-2"},{id:"northgate",name:"Northgate FC",short:"NTH",primary:"#7a3bd0",secondary:"#ffffff",shorts:"#ffffff",socks:"#7a3bd0",rating:79,formation:"4-3-3"}];p0.map((n,e)=>{const t=c0(e,n.rating);return{...n,gk:"#8ef2c0",squad:t}});const ks=[{id:"close",label:"CLOSE",factor:.8},{id:"normal",label:"NORMAL",factor:1},{id:"wide",label:"WIDE",factor:1.24}],wl=[{id:"clear",label:"CLEAR",grip:1,brightness:1.05},{id:"night",label:"NIGHT",grip:1,brightness:.82},{id:"rain",label:"RAIN",grip:.87,brightness:.78},{id:"heavyrain",label:"HEAVY RAIN",grip:.8,brightness:.68},{id:"snow",label:"SNOW",grip:.78,brightness:.9}],Th=[[{name:"ADIDAS",tag:"OWN THE PITCH",style:"speed",bg:"#090a0b",fg:"#ffffff",accent:"#e6ff38",category:"FOOTBALL"},{name:"NIKE",tag:"PLAY FEARLESS",style:"speed",bg:"#0b0c0e",fg:"#ffffff",accent:"#c8ff2e",category:"SPORT"},{name:"PUMA",tag:"FAST BY NATURE",style:"speed",bg:"#0a0b0c",fg:"#ffffff",accent:"#ff4b3e",category:"SPORT"},{name:"NEW BALANCE",tag:"RUN YOUR GAME",style:"speed",bg:"#101a2c",fg:"#ffffff",accent:"#ff6a56",category:"SPORT"},{name:"UNDER ARMOUR",tag:"EARN IT",style:"speed",bg:"#090c0e",fg:"#ffffff",accent:"#ff3d35",category:"TRAINING"},{name:"REEBOK",tag:"TRAIN HARD",style:"energy",bg:"#071012",fg:"#ffffff",accent:"#34e0cf",category:"FITNESS"},{name:"EA SPORTS",tag:"PLAY THE MOMENT",style:"tech",bg:"#080b0d",fg:"#ffffff",accent:"#ff3b30",category:"GAMING"},{name:"CASTROL",tag:"POWER THE DRIVE",style:"speed",bg:"#07130c",fg:"#ffffff",accent:"#6cff58",category:"PERFORMANCE"},{name:"PUMA ENERGY",tag:"ENERGY THAT MOVES",style:"energy",bg:"#0b0b0c",fg:"#ffffff",accent:"#ffcf32",category:"ENERGY"},{name:"GILLETTE",tag:"SHARP EVERY DAY",style:"speed",bg:"#08141e",fg:"#ffffff",accent:"#5fc8ff",category:"CARE"},{name:"ALLIANZ",tag:"READY FOR TOMORROW",style:"band",bg:"#0b1c2b",fg:"#ffffff",accent:"#85c6ff",category:"PARTNER"}],[{name:"COCA-COLA",tag:"TASTE THE MOMENT",style:"wave",bg:"#a51424",fg:"#ffffff",accent:"#ffffff",category:"REFRESH"},{name:"PEPSI",tag:"LIVE LOUD",style:"wave",bg:"#0a2b68",fg:"#ffffff",accent:"#62d6ff",category:"REFRESH"},{name:"GATORADE",tag:"FUEL THE FIGHT",style:"energy",bg:"#131313",fg:"#ffffff",accent:"#ff7a18",category:"SPORTS DRINK"},{name:"RED BULL",tag:"CHASE THE EDGE",style:"energy",bg:"#101b36",fg:"#ffffff",accent:"#ff3b30",category:"ENERGY"},{name:"MONSTER ENERGY",tag:"UNLEASH THE BEAST",style:"energy",bg:"#070b08",fg:"#ffffff",accent:"#7dff4a",category:"ENERGY"},{name:"HEINEKEN",tag:"REFRESH THE GAME",style:"wave",bg:"#052b1b",fg:"#ffffff",accent:"#3edc84",category:"REFRESH"},{name:"MCDONALD'S",tag:"MAKE IT YOURS",style:"food",bg:"#1a1713",fg:"#ffffff",accent:"#ffc72c",category:"FOOD"},{name:"KFC",tag:"HOT & FRESH",style:"food",bg:"#a00b17",fg:"#ffffff",accent:"#ffffff",category:"FOOD"},{name:"BURGER KING",tag:"FLAME GRILLED",style:"food",bg:"#291a0e",fg:"#ffffff",accent:"#f5a623",category:"FOOD"},{name:"MARRIOTT",tag:"STAY BRILLIANT",style:"band",bg:"#0b1b2b",fg:"#ffffff",accent:"#c7a86b",category:"HOTELS"},{name:"AIRBNB",tag:"STAY DIFFERENT",style:"wave",bg:"#2a0e16",fg:"#ffffff",accent:"#ff5a5f",category:"TRAVEL"}],[{name:"SAMSUNG",tag:"SEE BEYOND",style:"tech",bg:"#061529",fg:"#ffffff",accent:"#5fbcff",category:"TECHNOLOGY"},{name:"SONY",tag:"CREATE MORE",style:"tech",bg:"#070b10",fg:"#ffffff",accent:"#67e8ff",category:"TECHNOLOGY"},{name:"PLAYSTATION",tag:"PRESS PLAY",style:"tech",bg:"#071027",fg:"#ffffff",accent:"#6b8cff",category:"GAMING"},{name:"XBOX",tag:"POWER YOUR PLAY",style:"tech",bg:"#07130a",fg:"#ffffff",accent:"#7dff52",category:"GAMING"},{name:"MICROSOFT",tag:"BUILD WHAT'S NEXT",style:"tech",bg:"#0b0d11",fg:"#ffffff",accent:"#f2c94c",category:"TECHNOLOGY"},{name:"GOOGLE PIXEL",tag:"CAPTURE MORE",style:"tech",bg:"#0d1112",fg:"#ffffff",accent:"#66d9ff",category:"MOBILE"},{name:"APPLE",tag:"MADE TO CREATE",style:"minimal",bg:"#0a0a0b",fg:"#ffffff",accent:"#e8e8e8",category:"TECHNOLOGY"},{name:"LENOVO",tag:"DO MORE",style:"tech",bg:"#26090d",fg:"#ffffff",accent:"#ff4a4a",category:"TECHNOLOGY"},{name:"HP",tag:"BUILT TO PERFORM",style:"tech",bg:"#061a2e",fg:"#ffffff",accent:"#4db7ff",category:"TECHNOLOGY"},{name:"INTEL",tag:"POWER THE NEXT",style:"tech",bg:"#071525",fg:"#ffffff",accent:"#75c8ff",category:"TECHNOLOGY"},{name:"ORACLE",tag:"DATA DRIVEN",style:"tech",bg:"#21080b",fg:"#ffffff",accent:"#ff4b4b",category:"CLOUD"}],[{name:"VISA",tag:"EVERYWHERE YOU GO",style:"band",bg:"#0b1c3a",fg:"#ffffff",accent:"#f5d04c",category:"PAYMENTS"},{name:"MASTERCARD",tag:"PAY YOUR WAY",style:"band",bg:"#141414",fg:"#ffffff",accent:"#ff9a3c",category:"PAYMENTS"},{name:"DHL",tag:"FAST FORWARD",style:"band",bg:"#f2c200",fg:"#151515",accent:"#c8102e",category:"LOGISTICS"},{name:"FEDEX",tag:"DELIVER MORE",style:"band",bg:"#2b1540",fg:"#ffffff",accent:"#ff7a00",category:"LOGISTICS"},{name:"EMIRATES",tag:"FLY BEYOND",style:"sky",bg:"#5a0d18",fg:"#ffffff",accent:"#e9c46a",category:"AIRLINE"},{name:"QATAR AIRWAYS",tag:"FLY FURTHER",style:"sky",bg:"#3a0d1b",fg:"#ffffff",accent:"#c9a86a",category:"AIRLINE"},{name:"SPOTIFY",tag:"SOUND ON",style:"sound",bg:"#07120b",fg:"#ffffff",accent:"#65ff8f",category:"AUDIO"},{name:"AMAZON",tag:"PACK MORE IN",style:"band",bg:"#0c0e10",fg:"#ffffff",accent:"#ff9900",category:"DELIVERY"},{name:"UBER",tag:"MOVE YOUR WAY",style:"speed",bg:"#0b0b0b",fg:"#ffffff",accent:"#ffffff",category:"MOBILITY"},{name:"VODAFONE",tag:"CONNECTED",style:"wave",bg:"#4a0d12",fg:"#ffffff",accent:"#ff3b30",category:"NETWORK"},{name:"LEGO",tag:"BUILD IMAGINATION",style:"blocks",bg:"#b5121b",fg:"#ffffff",accent:"#ffd800",category:"PLAY"}]],El=Th.flat(),Ja=4,Ji=512,wh=128,Qi=Ji*Ja,Zi=wh,f0=.93,m0=.665,Al=3.8,g0=3.2,v0=4.25,Cl=.42,Rl=.62,x0=8.3,Eh='"Barlow Condensed", "Arial Narrow", Arial, sans-serif',Kr="Inter, Arial, sans-serif";function Ah(n){const e=String(n||"#000000").replace("#",""),t=e.length===3?e.split("").map(a=>a+a).join(""):e,i=Number.parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function Ht(n,e){const{r:t,g:i,b:a}=Ah(n);return`rgba(${t},${i},${a},${e})`}function _0(n,e){const{r:t,g:i,b:a}=Ah(n),s=r=>Math.max(0,Math.min(255,Math.round(r*(1+e))));return`rgb(${s(t)},${s(i)},${s(a)})`}function y0(n,e,t,i,a=800,s=!1){let r=t;for(;r>24;){if(n.font=`${s?"italic ":""}${a} ${r}px ${Eh}`,n.measureText(e).width<=i)return r;r-=2}return r}function M0(n,e,t,i,a,s){const r=e+i,o=t+a*.5;if(n.save(),n.beginPath(),n.rect(e,t,i,a),n.clip(),s.style==="speed"){n.globalAlpha=.2,n.fillStyle=s.accent;for(let l=0;l<4;l++)n.beginPath(),n.moveTo(r-176+l*25,t),n.lineTo(r-115+l*25,t),n.lineTo(r-214+l*25,t+a),n.lineTo(r-275+l*25,t+a),n.closePath(),n.fill();n.globalAlpha=.13,n.strokeStyle=s.accent,n.lineWidth=2,n.beginPath(),n.moveTo(r-120,t),n.lineTo(r-56,t+a),n.moveTo(r-98,t),n.lineTo(r-34,t+a),n.stroke()}else if(s.style==="energy"){const l=n.createRadialGradient(r-65,o,2,r-65,o,i*.34);l.addColorStop(0,Ht(s.accent,.52)),l.addColorStop(1,Ht(s.accent,0)),n.fillStyle=l,n.fillRect(e,t,i,a),n.globalAlpha=.22,n.fillStyle=s.accent;for(let c=0;c<3;c++)n.beginPath(),n.moveTo(r-105+c*21,t+12),n.lineTo(r-82+c*21,t+12),n.lineTo(r-132+c*21,t+a-12),n.lineTo(r-155+c*21,t+a-12),n.closePath(),n.fill()}else if(s.style==="wave"){n.strokeStyle=Ht(s.accent,.25),n.lineWidth=9;for(let l=0;l<3;l++)n.beginPath(),n.arc(r-65,o,42+l*22,-Math.PI*.72,Math.PI*.72),n.stroke();n.globalAlpha=.12,n.fillStyle=s.accent,n.beginPath(),n.ellipse(r-78,o,112,47,-.2,0,Math.PI*2),n.fill()}else if(s.style==="tech"){n.strokeStyle=Ht(s.accent,.16),n.lineWidth=1;for(let l=r-190;l<r;l+=18)n.beginPath(),n.moveTo(l,t+10),n.lineTo(l,t+a-10),n.stroke();for(let l=t+14;l<t+a;l+=18)n.beginPath(),n.moveTo(r-190,l),n.lineTo(r-10,l),n.stroke();n.fillStyle=Ht(s.accent,.5);for(let l=0;l<12;l++){const c=r-175+l%6*28,h=t+71+Math.floor(l/6)*28;n.fillRect(c,h,3,3)}}else if(s.style==="band")n.globalAlpha=.2,n.fillStyle=s.accent,n.beginPath(),n.moveTo(r-166,t),n.lineTo(r-96,t),n.lineTo(r-220,t+a),n.lineTo(r-290,t+a),n.closePath(),n.fill(),n.globalAlpha=.75,n.fillRect(r-178,t+24,54,3),n.fillRect(r-194,t+38,88,2),n.fillRect(r-160,t+50,34,2);else if(s.style==="sky"){n.strokeStyle=Ht(s.accent,.28),n.lineWidth=8;for(let l=0;l<4;l++)n.beginPath(),n.arc(r-82,t+a+34,62+l*24,Math.PI,Math.PI*2),n.stroke();n.globalAlpha=.12,n.fillStyle=s.accent,n.beginPath(),n.arc(r-84,t+36,17,0,Math.PI*2),n.fill()}else if(s.style==="sound")n.fillStyle=Ht(s.accent,.3),[24,55,38,72,48,64,32,58].forEach((l,c)=>{n.fillRect(r-175+c*20,o-l/2,8,l)}),n.fillStyle=Ht(s.accent,.68),n.fillRect(r-175,t+18,84,2);else if(s.style==="food"){n.fillStyle=Ht(s.accent,.17);for(let l=0;l<3;l++)n.beginPath(),n.arc(r-84,t+35+l*28,34+l*4,0,Math.PI*2),n.fill();n.globalAlpha=.7,n.fillStyle=s.accent,n.fillRect(r-170,t+28,72,4),n.fillRect(r-170,t+43,47,3)}else if(s.style==="blocks"){const l=[s.accent,"#ffffff",s.accent];for(let c=0;c<9;c++)n.globalAlpha=.22+c%3*.08,n.fillStyle=l[c%l.length],n.fillRect(r-168+c%3*44,t+22+Math.floor(c/3)*31,36,23)}else s.style==="minimal"&&(n.strokeStyle=Ht(s.accent,.25),n.lineWidth=2,n.beginPath(),n.arc(r-82,o,61,0,Math.PI*2),n.stroke(),n.fillStyle=Ht(s.accent,.32),n.beginPath(),n.arc(r-82,o,24,0,Math.PI*2),n.fill(),n.fillStyle=Ht(s.accent,.7),n.fillRect(r-178,t+25,54,2));n.restore()}function b0(n,e,t,i,a,s){const r=n.createLinearGradient(e,t,e+i,t+a);r.addColorStop(0,s.bg),r.addColorStop(.62,s.bg),r.addColorStop(1,_0(s.bg,-.48)),n.fillStyle=r,n.fillRect(e,t,i,a),M0(n,e,t,i,a,s),n.save(),n.beginPath(),n.rect(e,t,i,a),n.clip(),n.globalAlpha=.72,n.fillStyle=s.fg,n.font=`700 11px ${Kr}`,n.letterSpacing="2px",n.fillText(s.category,e+24,t+23),n.letterSpacing="0px";const o=s.style==="speed"||s.style==="energy",l=y0(n,s.name,57,i-175,800,o);n.font=`${o?"italic ":""}800 ${l}px ${Eh}`,n.fillStyle=s.fg,n.shadowColor="rgba(0,0,0,0.38)",n.shadowBlur=7,n.shadowOffsetY=2,n.fillText(s.name,e+23,t+81),n.shadowColor="transparent",n.shadowBlur=0,n.shadowOffsetY=0;let c=16;n.font=`600 ${c}px ${Kr}`;const h=i-60;for(;c>11&&n.measureText(s.tag).width>h;)c-=1,n.font=`600 ${c}px ${Kr}`;n.fillStyle=Ht(s.fg,.8),n.fillText(s.tag,e+24,t+105),n.fillStyle=s.accent,n.fillRect(e+24,t+113,58,3),n.fillStyle=Ht(s.fg,.34),n.fillRect(e+93,t+114,26,1),n.restore(),n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(e,t,3,a),n.fillRect(e+i-2,t,2,a),n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(e+3,t+2,i-6,1),n.fillStyle="rgba(0,0,0,0.32)",n.fillRect(e+3,t+a-3,i-6,3)}function qr(n){const e=n.canvas.getContext("2d");e.clearRect(0,0,Qi,Zi);const t=[];for(let i=0;i<Ja;i++){const a=n.brands[(n.setIndex*Ja+i)%n.brands.length];t.push(a.name),b0(e,i*Ji,0,Ji,wh,a)}for(let i=2;i<Zi;i+=4)e.fillStyle="rgba(0,0,0,0.045)",e.fillRect(0,i,Qi,1);for(let i=0;i<Qi;i+=8)e.fillStyle="rgba(255,255,255,0.016)",e.fillRect(i,0,1,Zi);for(let i=1;i<Ja;i++)e.fillStyle="rgba(0,0,0,0.62)",e.fillRect(i*Ji-2,0,4,Zi),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(i*Ji+2,0,1,Zi);n.shown=t,n.texture.needsUpdate=!0}function S0(n,e,t=0){const i=[],a=[],s=[],r=n/e,o=-n/2,l=f0/2,c=1.4/Qi,h=1.4/Zi;for(let f=0;f<e;f++){const d=o+f*r,v=d+r,x=(f+t)%Ja,m=x*Ji/Qi+c,g=(x+1)*Ji/Qi-c,y=h,_=1-h,b=f*4;i.push(d,-l,0,v,-l,0,v,l,0,d,l,0),a.push(m,y,g,y,g,_,m,_),s.push(b,b+1,b+2,b,b+2,b+3)}const u=new Mt;return u.setAttribute("position",new it(i,3)),u.setAttribute("uv",new it(a,2)),u.setIndex(s),u.computeVertexNormals(),u}function T0(n,{anisotropy:e=8}={}){var t;const i=(_,b)=>{const C=document.createElement("canvas");return C.width=_,C.height=b,[C,C.getContext("2d")]},a=new ct;a.name="led-perimeter-ads",n.add(a);const s=Th.map((_,b)=>{const[C]=i(Qi,Zi),w=new Ni(C);w.colorSpace=At,w.wrapS=_i,w.wrapT=_i,w.minFilter=Pi,w.magFilter=Qt,w.anisotropy=Math.max(2,e),w.needsUpdate=!0;const E=new xt({map:w,emissiveMap:w,emissive:16777215,emissiveIntensity:.92,color:16777215,roughness:.3,metalness:.12}),L={index:b,brands:_,canvas:C,texture:w,material:E,setIndex:0,phase:"hold",phaseT:0,nextSwap:6.2+b*2.15,fade:1,shown:[]};return qr(L),L}),r=N.halfWidth+Al,o=N.halfLength+Al,l=g0,c=[{id:"west",ax:-r,az:-o+l,bx:-r,bz:o-l,group:0},{id:"nw",ax:-r,az:o-l,bx:-r+l,bz:o,group:0,corner:!0},{id:"north",ax:-r+l,az:o,bx:r-l,bz:o,group:2},{id:"ne",ax:r-l,az:o,bx:r,bz:o-l,group:1,corner:!0},{id:"east",ax:r,az:o-l,bx:r,bz:-o+l,group:1},{id:"se",ax:r,az:-o+l,bx:r-l,bz:-o,group:1,corner:!0},{id:"south",ax:r-l,az:-o,bx:-r+l,bz:-o,group:3},{id:"sw",ax:-r+l,az:-o,bx:-r,bz:-o+l,group:0,corner:!0}],h=new _t(1,1,1),u=new xt({color:330505,roughness:.42,metalness:.46}),f=new Gm(h,u,c.length);f.name="led-cabinets",f.castShadow=!0,f.receiveShadow=!0,f.instanceMatrix.setUsage(Hn),a.add(f);const d=new gt;let v=0;c.forEach((_,b)=>{const C=_.bx-_.ax,w=_.bz-_.az,E=Math.hypot(C,w),L=(_.ax+_.bx)/2,k=(_.az+_.bz)/2,M=w/E,S=-C/E,I=Math.atan2(M,S),z=Math.max(1,Math.round(E/v0)),O=_.corner&&(_.group===0||_.group===1)?1:0,$=s[_.group],V=S0(E,z,O),Z=new le(V,$.material);Z.name=`led-${_.id}`,Z.position.set(L+M*.02,m0,k+S*.02),Z.rotation.y=I,Z.castShadow=!1,Z.receiveShadow=!1,a.add(Z),$.meshes??($.meshes=[]),$.meshes.push(Z),v+=z,d.position.set(L-M*.13,.57,k-S*.13),d.rotation.set(0,I,0),d.scale.set(E+.08,1.14,.24),d.updateMatrix(),f.setMatrixAt(b,d.matrix)}),f.instanceMatrix.needsUpdate=!0;const x={time:0,weather:"clear",baseBrightness:.92,groups:s,panels:v,boards:c.length,brands:El.length};function m(_){x.weather=_?.id||"clear",x.weather==="night"?x.baseBrightness=1.03:x.weather==="heavyrain"||x.weather==="rain"?x.baseBrightness=.99:x.weather==="snow"?x.baseBrightness=.94:x.baseBrightness=.9}function g(_,b){const C=1+Math.sin(x.time*.72+_.index*1.7)*.018;_.fade=b,_.material.color.setScalar(.16+.84*b),_.material.emissiveIntensity=x.baseBrightness*b*C}function y(_){const b=Math.min(Math.max(Number(_)||0,0),.1);x.time+=b;for(const C of s)if(C.phase==="hold")g(C,1),x.time>=C.nextSwap&&(C.phase="out",C.phaseT=0);else if(C.phase==="out"){C.phaseT+=b;const w=Math.max(0,1-C.phaseT/Cl);g(C,w),C.phaseT>=Cl&&(C.setIndex=(C.setIndex+1)%C.brands.length,qr(C),C.phase="in",C.phaseT=0)}else{C.phaseT+=b;const w=Math.min(1,C.phaseT/Rl);g(C,w),C.phaseT>=Rl&&(C.phase="hold",C.phaseT=0,C.fade=1,C.nextSwap=x.time+x0,g(C,1))}}return(t=document.fonts)!=null&&t.ready&&document.fonts.ready.then(()=>{for(const _ of s)qr(_)}).catch(()=>{}),m({id:"clear"}),{root:a,groups:s,state:x,brands:El,setLighting:m,update:y}}const Yt=20,Qs=120,er=128;function oo(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function w0(){const n=Qs*Yt,e=er*Yt,[t,i]=oo(n,e),a=m=>(m+Qs/2)*Yt,s=m=>(m+er/2)*Yt;i.fillStyle="#0f4526",i.fillRect(0,0,n,e);const r=a(-34),o=s(-52.5),l=N.halfWidth*2*Yt,c=N.halfLength*2*Yt;i.fillStyle="#1d7138",i.fillRect(r,o,l,c);const h=18,u=c/h;for(let m=0;m<h;m+=2)i.fillStyle="rgba(255,255,255,0.042)",i.fillRect(r,o+m*u,l,u);for(let m=0;m<26;m++){const g=r+Math.random()*l,y=o+Math.random()*c,_=60+Math.random()*220,b=i.createRadialGradient(g,y,0,g,y,_);b.addColorStop(0,"rgba(52,92,38,0.18)"),b.addColorStop(1,"rgba(52,92,38,0)"),i.fillStyle=b,i.beginPath(),i.ellipse(g,y,_,_*.6,Math.random()*Math.PI,0,Math.PI*2),i.fill()}for(let m=0;m<24e3;m++){const g=Math.random()*n,y=Math.random()*e;i.fillStyle=Math.random()<.5?"rgba(210,255,200,0.045)":"rgba(0,20,0,0.05)",i.fillRect(g,y,2,2)}i.strokeStyle="rgba(255,255,255,0.92)",i.fillStyle="rgba(255,255,255,0.92)",i.lineWidth=3.4;const f=(m,g,y,_)=>{i.beginPath(),i.moveTo(a(m),s(g)),i.lineTo(a(y),s(_)),i.stroke()},d=(m,g,y=.34)=>{i.beginPath(),i.arc(a(m),s(g),y*Yt,0,Math.PI*2),i.fill()},v=(m,g,y,_)=>{i.strokeRect(a(Math.min(m,y)),s(Math.min(g,_)),Math.abs(y-m)*Yt,Math.abs(_-g)*Yt)};v(-34,-52.5,N.halfWidth,N.halfLength),f(-34,0,N.halfWidth,0),i.beginPath(),i.arc(a(0),s(0),N.circleRadius*Yt,0,Math.PI*2),i.stroke(),d(0,0,.3);for(const m of[-1,1]){const g=m*N.halfLength;v(-20.16,g,N.boxHalfWidth,g-m*N.boxDepth),v(-9.16,g,N.sixHalfWidth,g-m*N.sixDepth);const y=g-m*N.penaltyDist;d(0,y,.3);const _=Math.abs(N.penaltyDist-N.boxDepth),b=Math.asin(Math.min(1,_/N.circleRadius));i.beginPath(),m===-1?i.arc(a(0),s(y),N.circleRadius*Yt,b,Math.PI-b):i.arc(a(0),s(y),N.circleRadius*Yt,Math.PI+b,Math.PI*2-b),i.stroke(),f(-3.66,g,N.goalHalfWidth,g)}for(const m of[-1,1])for(const g of[-1,1]){const y=m*N.halfWidth,_=g*N.halfLength;i.beginPath();const b=Math.atan2(g,m);i.arc(a(y),s(_),1*Yt,b-Math.PI/2,b+Math.PI/2),i.stroke()}const x=new Ni(t);return x.colorSpace=At,x.anisotropy=8,x}function E0(n){const[e,t]=oo(1024,256),i=t.createLinearGradient(0,0,0,256);i.addColorStop(0,"#0a1512"),i.addColorStop(1,"#152622"),t.fillStyle=i,t.fillRect(0,0,1024,256);const a=n&&n.length?n:["#e6e0d2","#a7b8c9","#c25a4a"];for(let r=8;r<256;r+=13){t.fillStyle="rgba(0,0,0,0.28)",t.fillRect(0,r+9,1024,4);for(let o=4;o<1024;o+=9)Math.random()<.18||(t.globalAlpha=.45+Math.random()*.5,t.fillStyle=a[Math.random()*a.length|0],t.fillRect(o+Math.random()*3,r+Math.random()*2,3.4,4.6))}t.globalAlpha=1;const s=new Ni(e);return s.colorSpace=At,s.wrapS=s.wrapT=Ws,s.repeat.set(4,1),s}function A0(n){const[e,t]=oo(1024,256);t.clearRect(0,0,1024,256),t.fillStyle="rgba(3,12,9,0.9)",t.fillRect(0,30,1024,196),t.strokeStyle="rgba(198,255,69,0.5)",t.lineWidth=3,t.strokeRect(10,40,1004,176),t.fillStyle="#c6ff45",t.font='800 92px "Barlow Condensed", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(`${n} STADIUM`,512,116),t.fillStyle="rgba(255,255,255,0.55)",t.font="700 26px Inter, Arial, sans-serif",t.fillText("FC MOBILE",512,188);const i=new Ni(e);return i.colorSpace=At,i.anisotropy=4,i}function Ll(n,e){const t=e*N.halfLength,i=.075,a=new xt({color:16251903,roughness:.35,metalness:.1}),s=new Et(i,i,N.goalHeight,10),r=new Et(i,i,N.goalHalfWidth*2,10);for(const x of[-1,1]){const m=new le(s,a);m.position.set(x*N.goalHalfWidth,N.goalHeight/2,t),m.castShadow=!0,n.add(m)}const o=new le(r,a);o.rotation.z=Math.PI/2,o.position.set(0,N.goalHeight,t),n.add(o);const l=2.2,c=t+e*l,h=[],u=(x,m,g,y,_,b)=>h.push(x,m,g,y,_,b),f=.28;for(let x=-3.66;x<=N.goalHalfWidth+.001;x+=f)u(x,0,c,x,N.goalHeight,c),u(x,N.goalHeight,t,x,N.goalHeight,c);for(let x=0;x<=N.goalHeight+.001;x+=f){u(-3.66,x,c,N.goalHalfWidth,x,c);for(const m of[-1,1])u(m*N.goalHalfWidth,x,t,m*N.goalHalfWidth,x,c)}for(let x=t;Math.abs(x-t)<=l+.001;x+=e*f){for(const m of[-1,1])u(m*N.goalHalfWidth,0,x,m*N.goalHalfWidth,N.goalHeight,x);u(-3.66,N.goalHeight,x,N.goalHalfWidth,N.goalHeight,x)}const d=new Mt;d.setAttribute("position",new it(h,3));const v=new Vm(d,new $s({color:16777215,transparent:!0,opacity:.24}));return v.userData.goalSide=e,v.userData.ripple=null,n.add(v),v}function C0(n){const e=new ct,t=new xt({color:661268,roughness:.9}),i=new xt({color:793111,roughness:.8,metalness:.1}),a=[{pos:[0,-64],yaw:0},{pos:[0,64],yaw:Math.PI},{pos:[-52,0],yaw:Math.PI/2},{pos:[52,0],yaw:-Math.PI/2}];for(const s of a){const r=new ct;r.position.set(s.pos[0],0,s.pos[1]),r.rotation.y=s.yaw;const o=new le(new _t(138,2.6,2.4),t);o.position.set(0,1.3,-.6),o.receiveShadow=!0,r.add(o);const l=new le(new Rt(138,10),new xt({roughness:.95,emissive:2243123,emissiveIntensity:.22}));l.rotation.x=-1.2,l.position.set(0,5.4,0),l.name="lowerCrowd",r.add(l);const c=new le(new Rt(138,11),new xt({roughness:.95,emissive:2243123,emissiveIntensity:.18}));c.rotation.x=-1.24,c.position.set(0,14.4,-3.6),c.name="upperCrowd",r.add(c);const h=new le(new _t(138,1.1,.6),i);h.position.set(0,12.2,-1.2),r.add(h);const u=new le(new _t(140,.35,16),i);u.position.set(0,21.4,-5.2),u.rotation.x=.06,r.add(u);for(const f of[-1,1]){const d=new le(new _t(.5,21,.5),i);d.position.set(f*68,10.5,-5),r.add(d)}e.add(r)}return n.add(e),e}function R0(n){const e=new ct,t=new xt({color:1450271,roughness:.8}),i=new xt({color:16777215,emissive:15990752,emissiveIntensity:2.2,roughness:.3});for(const a of[-1,1])for(const s of[-1,1]){const r=a*62,o=s*76,l=new le(new Et(.22,.34,30,8),t);l.position.set(r,15,o),e.add(l);const c=new le(new _t(7,1.5,.5),t);c.position.set(r,30,o),e.add(c);const h=new le(new Rt(6.4,1.1),i);h.position.set(r,30,o+(s<0?.3:-.3)),h.rotation.y=s<0?0:Math.PI,e.add(h)}return n.add(e),e}function L0(n){const e=new ct,t=new xt({color:398352,roughness:1});for(let i=0;i<34;i++){const a=6+Math.random()*10,s=8+Math.random()*26,r=6+Math.random()*10,o=new le(new _t(a,s,r),t),l=i/34*Math.PI*2+Math.random()*.1,c=150+Math.random()*90;o.position.set(Math.cos(l)*c,s/2-1,Math.sin(l)*c),o.rotation.y=Math.random()*Math.PI,e.add(o)}return n.add(e),e}function P0(n){const e=new Float32Array(4500);for(let s=0;s<1500;s++)e[s*3]=(Math.random()-.5)*150,e[s*3+1]=Math.random()*42,e[s*3+2]=(Math.random()-.5)*110;const t=new Mt;t.setAttribute("position",new Wt(e,3));const i=new xh({color:12376063,size:.14,transparent:!0,opacity:.5,depthWrite:!1}),a=new Wm(t,i);return a.visible=!1,n.add(a),{points:a,positions:e,count:1500}}function Lg(n){n.background=new Ye(397582),n.fog=new so(397582,110,260);const e=new r0(14085375,1323297,1.55);n.add(e);const t=new Sl(16774370,2.1);t.position.set(-38,66,-26),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-62,t.shadow.camera.right=62,t.shadow.camera.top=62,t.shadow.camera.bottom=-62,t.shadow.camera.far=160,t.shadow.bias=-4e-4,n.add(t);const i=new Sl(10471679,.75);i.position.set(46,40,52),n.add(i);const a=new xt({map:w0(),roughness:.94,metalness:0}),s=new le(new Rt(Qs,er),a);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);const r=new le(new Rt(440,440),new xt({color:529935,roughness:1}));r.rotation.x=-Math.PI/2,r.position.y=-.06,r.receiveShadow=!0,n.add(r);const o=C0(n);R0(n),L0(n);const l={[-1]:Ll(n,-1),1:Ll(n,1)};n.userData.goalNets=l,n.userData.rippleGoal=(E,L=1)=>{const k=l[E];k&&(k.userData.ripple={t:0,dur:.72,force:Math.max(.35,Math.min(1.8,L))})};const c=T0(n),h=new yt({transparent:!0,depthWrite:!1}),u=new le(new Rt(44,11),h);u.position.set(0,24,-74),n.add(u);const f=new Et(.035,.035,1.55,6),d=new xt({color:15266538,roughness:.5}),v=new yt({color:13041477,side:Ut}),x=new Rt(.55,.34);for(const E of[-1,1])for(const L of[-1,1]){const k=E*N.halfWidth,M=L*N.halfLength,S=new le(f,d);S.position.set(k,.775,M),n.add(S);const I=new le(x,v);I.position.set(k+E*.28,1.35,M),n.add(I)}const m=new xt({color:727574,roughness:.7}),g=new xt({color:1849907,roughness:.25,metalness:.2,transparent:!0,opacity:.7});for(const E of[-1,1]){const L=new ct,k=new le(new _t(.3,2.2,9),g);k.position.set(E*.15,1.1,0),L.add(k);const M=new le(new _t(1.8,.16,9.4),m);M.position.set(0,2.3,0),L.add(M);const S=new le(new _t(1.4,.4,8.4),m);S.position.set(0,.5,0),L.add(S),L.position.set(E*(N.halfWidth+6.4),0,6),n.add(L)}const y=P0(n),_=new le(new Rt(Qs,er),new xt({color:15266547,roughness:.92,transparent:!0,opacity:0,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.012,_.visible=!1,n.add(_);const b={theme:null,weather:"clear",crowdTextures:[],signTexture:null,time:0};function C(E,L){var k,M,S;b.weather=L.id;const I=E0(E.crowd),z=A0(E.name);for(const Y of b.crowdTextures)(k=Y.dispose)==null||k.call(Y);(S=(M=b.signTexture)==null?void 0:M.dispose)==null||S.call(M),b.crowdTextures=[I],b.signTexture=z,c.setLighting(L),o.traverse(Y=>{Y.isMesh&&(Y.name==="lowerCrowd"||Y.name==="upperCrowd")&&(Y.material.map=I,Y.material.needsUpdate=!0)}),h.map=z,h.needsUpdate=!0;const O=L.brightness??1,$=L.id==="rain"||L.id==="heavyrain",V=L.id==="snow",Z=L.id==="night"||$;L.id==="night"?(n.background.setHex(133390),n.fog.color.setHex(133390),n.fog.near=90,n.fog.far=220,e.intensity=.72,t.intensity=1.35,i.intensity=.5):L.id==="heavyrain"?(n.background.setHex(198924),n.fog.color.setHex(198924),n.fog.near=38,n.fog.far=138,e.intensity=.72,t.intensity=.95,i.intensity=.38):L.id==="rain"?(n.background.setHex(331280),n.fog.color.setHex(331280),n.fog.near=55,n.fog.far=165,e.intensity=.9,t.intensity=1.1,i.intensity=.45):V?(n.background.setHex(1582890),n.fog.color.setHex(1582890),n.fog.near=52,n.fog.far=180,e.intensity=1.38,t.intensity=1.55,i.intensity=.7):(n.background.setHex(397582),n.fog.color.setHex(397582),n.fog.near=110,n.fog.far=260,e.intensity=1.55*O,t.intensity=2.1*O,i.intensity=.75),t.color.setHex(Z?14543359:V?15267071:16774370),a.roughness=L.id==="heavyrain"?.38:$?.52:V?.78:.94,a.metalness=$?.12:0,a.color.setHex(V?14280676:16777215),_.visible=V,_.material.opacity=V?.22:0,y.points.visible=$||V,y.points.material.color.setHex(V?16777215:L.id==="heavyrain"?11061226:12376063),y.points.material.size=V?.32:L.id==="heavyrain"?.18:.14,y.points.material.opacity=V?.78:L.id==="heavyrain"?.66:.5,b.precip=V?"snow":$?"rain":"none",b.theme=E}function w(E){b.time+=E,c.update(E);for(const k of Object.values(l)){const M=k.userData.ripple;if(!M)continue;M.t+=E;const S=M.t/M.dur;if(S>=1){k.position.set(0,0,0),k.scale.set(1,1,1),k.material.opacity=.24,k.userData.ripple=null;continue}const I=(1-S)*(1-S);k.position.z=k.userData.goalSide*Math.sin(M.t*34)*.2*I*M.force,k.position.x=Math.sin(M.t*21+.8)*.06*I*M.force,k.scale.y=1+Math.sin(M.t*27)*.012*I*M.force,k.material.opacity=.24+.2*I}if(y.points.visible){const k=y.positions,M=b.precip==="snow",S=b.weather==="heavyrain",I=M?2.4:S?34:22,z=M?.9:S?6.2:3.2;for(let O=0;O<y.count;O++)k[O*3+1]-=(I+O%7*(M?.24:2))*E,k[O*3]+=(z+Math.sin(b.time*.7+O)*(M?.32:.5))*E,k[O*3+1]<0&&(k[O*3+1]=M?22+Math.random()*10:38+Math.random()*6,k[O*3]=(Math.random()-.5)*150,k[O*3+2]=(Math.random()-.5)*110);y.points.geometry.attributes.position.needsUpdate=!0}const L=.98+Math.sin(b.time*2.3)*.01+Math.sin(b.time*7.1)*.008;n.traverse(k=>{k.isMesh&&k.material&&k.material.emissive&&k.material.emissiveIntensity>1.5&&(k.material.emissiveIntensity=2.2*L)})}return{pitch:s,setTheme:C,update:w,state:b,ads:c}}const Yr=new Map,jr=new Map;function Ze(n,e){return Yr.has(n)||Yr.set(n,e()),Yr.get(n)}const Pl=["#f3d4bd","#e7bea0","#d9a67f","#c5895e","#a86a42","#8d5432","#6d3e24","#4b2a18","#efc6a5","#b77b52"],Dl=["#0d0b09","#1a1210","#2a1a12","#42281a","#5d3a20","#8a6038","#c19a5b","#d8c7a4","#7f7f7f"],Il=["#f4f4f1","#f4f4f1","#111214","#111214","#cf2f3c","#2f5fce","#d6dbe3","#e2b74b","#1f9a67"],D0=6;function rt(n,e={}){const t=`${n}|${e.rough??.78}|${e.emissive??""}|${e.side??"f"}`;return jr.has(t)||jr.set(t,new xt({color:n,roughness:e.rough??.78,metalness:0,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??0,side:e.side==="double"?Ut:Mi})),jr.get(t)}const Jt=.18,$r=new Map;function I0(n,e="#ffffff",t="rgba(0,0,0,0.55)"){const i=`${n}|${e}|${t}`;if(!$r.has(i)){const a=document.createElement("canvas");a.width=96,a.height=112;const s=a.getContext("2d");s.clearRect(0,0,96,112),s.font='900 78px "Barlow Condensed", Arial, sans-serif',s.textAlign="center",s.textBaseline="middle",s.lineWidth=9,s.strokeStyle=t,s.strokeText(String(n),48,60),s.fillStyle=e,s.fillText(String(n),48,60);const r=new Ni(a);r.colorSpace=At,$r.set(i,r)}return $r.get(i)}const Zr=new Map;function k0(n,e){const t=`${n.id}|${e?"gk":"field"}`;if(!Zr.has(t)){const i=document.createElement("canvas");i.width=96,i.height=112;const a=i.getContext("2d"),s=e?n.gk||"#8ef2c0":n.primary,r=e?"#0b1512":n.secondary||"#ffffff";a.clearRect(0,0,96,112),a.beginPath(),a.moveTo(48,6),a.lineTo(84,19),a.lineTo(79,63),a.quadraticCurveTo(70,91,48,105),a.quadraticCurveTo(26,91,17,63),a.lineTo(12,19),a.closePath(),a.fillStyle=s,a.fill(),a.lineWidth=5,a.strokeStyle=r,a.stroke(),a.strokeStyle="rgba(255,255,255,0.28)",a.lineWidth=2,a.beginPath(),a.moveTo(20,28),a.lineTo(76,28),a.stroke(),a.fillStyle=r,a.beginPath();for(let l=0;l<5;l++){const c=-Math.PI/2+l/5*Math.PI*2,h=48+Math.cos(c)*8,u=40+Math.sin(c)*8;l===0?a.moveTo(h,u):a.lineTo(h,u);const f=c+Math.PI/5;a.lineTo(48+Math.cos(f)*3.6,40+Math.sin(f)*3.6)}a.closePath(),a.fill(),a.fillStyle=r,a.font='800 27px "Barlow Condensed", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n.short||"FC").slice(0,3).toUpperCase(),48,77);const o=new Ni(i);o.colorSpace=At,Zr.set(t,o)}return Zr.get(t)}function kl(n){let e=2166136261;const t=String(n);for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e>>>0}function z0(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}const Jr=new Map,Qr=new Map;function N0(n,e){const t=`${n}|${e?1:0}`;if(!Jr.has(t)){const i=document.createElement("canvas");i.width=128,i.height=128;const a=i.getContext("2d");a.clearRect(0,0,128,128),a.fillStyle="rgba(95,54,35,0.07)",a.beginPath(),a.ellipse(64,72,42,48,0,0,Math.PI*2),a.fill();const s=n===1?56:54;for(const o of[45,83])a.fillStyle="rgba(238,226,212,0.92)",a.beginPath(),a.ellipse(o,s,8.8,4.1,0,0,Math.PI*2),a.fill(),a.fillStyle="#3b2a1e",a.beginPath(),a.ellipse(o+(o<64?1:-1),s,4.6,4.2,0,0,Math.PI*2),a.fill(),a.fillStyle="#15100c",a.beginPath(),a.arc(o+(o<64?1:-1),s,1.9,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,255,255,0.45)",a.beginPath(),a.arc(o-1.5,s-1.4,1.1,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(42,27,18,0.85)",a.lineWidth=1.5,a.beginPath(),a.moveTo(o-9,s-1.2),a.quadraticCurveTo(o,s-5.2,o+9,s-1.2),a.stroke();a.strokeStyle="rgba(40,26,17,0.9)",a.lineWidth=3.5,a.lineCap="round",a.beginPath(),n===2?(a.moveTo(33,42),a.quadraticCurveTo(45,38,57,42),a.moveTo(71,42),a.quadraticCurveTo(83,38,95,42)):n===3?(a.moveTo(33,43),a.lineTo(56,40),a.moveTo(72,40),a.lineTo(95,43)):(a.moveTo(34,43),a.quadraticCurveTo(45,39,57,42),a.moveTo(71,42),a.quadraticCurveTo(83,39,94,43)),a.stroke(),a.strokeStyle="rgba(98,58,40,0.38)",a.lineWidth=2.8,a.beginPath(),a.moveTo(64,58),a.quadraticCurveTo(59,71,63,76),a.quadraticCurveTo(66,78,69,75),a.stroke(),e&&(a.fillStyle="rgba(35,24,17,0.2)",a.beginPath(),a.ellipse(64,96,34,22,0,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(40,26,18,0.3)",a.lineWidth=4,a.beginPath(),a.moveTo(52,86),a.quadraticCurveTo(64,83,76,86),a.stroke()),a.strokeStyle="rgba(100,52,46,0.8)",a.lineWidth=2.2,a.beginPath(),a.moveTo(55,89),a.quadraticCurveTo(64,n===4?94:92,73,89),a.stroke(),a.strokeStyle="rgba(255,230,220,0.22)",a.lineWidth=1.1,a.beginPath(),a.moveTo(56,90.2),a.quadraticCurveTo(64,92.6,72,90.2),a.stroke();const r=new Ni(i);r.colorSpace=At,Jr.set(t,r)}return Jr.get(t)}function U0(n,e){const t=`${n}|${e?1:0}`;return Qr.has(t)||Qr.set(t,new yt({map:N0(n,e),transparent:!0,alphaTest:.02,depthWrite:!1,toneMapped:!1})),Qr.get(t)}function O0(n,e,t){const i=new ct,a=rt(t,{rough:.95}),s=new le(Ze("hairCap3",()=>new Nt(.132,16,10,0,Math.PI*2,0,Math.PI*.46)),a);s.position.set(0,.022,-.006),s.rotation.x=-.12,s.castShadow=!0,e===1?(s.scale.set(1.005,.82,1.005),s.position.y=.036):e===4?(s.scale.set(1,.74,1),s.position.y=.055):e===2&&s.scale.set(1.02,1,1.02),i.add(s);const r=Ze("sideburn3",()=>new _t(.022,.072,.04));for(const o of[-1,1]){const l=new le(r,a);l.position.set(o*.112,-.012,.045),l.rotation.z=o*.08,i.add(l)}if(e===0||e===1||e===2||e===3||e===5){const o=new le(Ze("hairFringe3",()=>new Nt(.082,10,6)),a);o.position.set(0,.083,.09),o.scale.set(1.18,.34,.52),o.rotation.x=-.18,o.castShadow=!0,i.add(o)}if(e===2){const o=Ze("hairTuft3",()=>new Nt(.048,8,6));for(const[l,c,h]of[[0,.128,-.01],[.062,.108,.008],[-.062,.108,.008],[.047,.092,-.066],[-.047,.092,-.066]]){const u=new le(o,a);u.position.set(l,c,h),u.castShadow=!0,i.add(u)}}else if(e===3){const o=new le(Ze("hairBack3",()=>new Nt(.108,10,8)),a);o.position.set(0,-.025,-.072),o.scale.set(.88,1.5,.55),o.castShadow=!0,i.add(o)}else if(e===5){const o=new le(Ze("hairQuiff3",()=>new Nt(.052,8,6)),a);o.position.set(0,.142,.042),o.scale.set(1.35,.78,.9),o.rotation.x=-.2,o.castShadow=!0,i.add(o)}n.add(i)}function Ch(n,e,t=0,i=0){var a;const s=kl(`${n.id}|${t}|${i}|${e?"gk":"field"}`),r=z0(s),o=Number(((a=String(t).match(/(\d+)$/))==null?void 0:a[1])??0),l=kl(n.id)%11,c=Pl[(o*3+i+l)%Pl.length],h=Dl[(o*5+i*2+l)%Dl.length],u=(o+i*3+l)%D0,f=(o*2+i+l)%6,d=(o+i+l)%5===0,v=Il[(o*4+i*2+l)%Il.length],x=r()<(e?.88:.12),m=.96+r()*.08,g=.96+r()*.08+(e?.015:0),y=e?n.gk||"#8ef2c0":n.primary,_=e?"#e9fff7":n.secondary||"#ffffff",b=e?"#0b1512":n.shorts||n.primary,C=e?n.gk||"#8ef2c0":n.socks||n.primary,w=e||x?y:_,E=["#ffffff","#f4f4f4"].includes(b.toLowerCase())?y:_,L=["#f4f4f1","#d6dbe3"].includes(v)?"#aeb5bc":"#171819",k=new ct;k.scale.set(g*m,g,g*m),k.userData.appearance={skin:c,hairColor:h,hairStyle:u,bootColor:v,longSleeve:x,height:g,build:m,jerseyColor:y,trimColor:_,shortsColor:b,shortsStripeColor:E};const M=new ct;k.add(M);const S=new le(Ze("neck2",()=>new Et(.058,.065,.1,10)),rt(c,{rough:.68}));S.position.y=1.56,S.castShadow=!0,M.add(S);const I=new le(Ze("jerseyBody3",()=>new rr([new pe(.195,0),new pe(.21,.08),new pe(.232,.2),new pe(.245,.32),new pe(.241,.39),new pe(.216,.45),new pe(.15,.485),new pe(.07,.5)],20)),rt(y,{rough:.82}));I.position.y=1.06,I.scale.z=.72,I.castShadow=!0,M.add(I);const z=new le(Ze("hem3",()=>new Et(.2,.2,.028,14,1,!0)),rt(_,{rough:.86}));z.position.y=1.064,z.scale.z=.72,M.add(z);const O=new le(Ze("collar2",()=>new Et(.094,.112,.038,12,1,!0)),rt(_,{rough:.75}));O.position.y=1.552,O.scale.z=.82,M.add(O);const $=new le(Ze("crestPlane",()=>new Rt(.062,.078)),new yt({map:k0(n,e),transparent:!0,alphaTest:.08,depthWrite:!1,toneMapped:!1}));if($.position.set(-.105,1.39,.182),M.add($),i){const ee=new yt({map:I0(i,_||"#ffffff"),transparent:!0,depthWrite:!1,toneMapped:!1}),K=new le(Ze("numPlane2",()=>new Rt(.27,.31)),ee);K.position.set(0,1.33,-.182),K.rotation.y=Math.PI,M.add(K)}const V=new le(Ze("shortsWaist2",()=>new Et(.228,.242,.18,12)),rt(b,{rough:.86}));V.position.y=1.015,V.scale.z=.82,V.castShadow=!0,M.add(V);const Z=new le(Ze("waistband2",()=>new Et(.238,.238,.028,12)),rt(_,{rough:.8}));Z.position.y=1.1,Z.scale.z=.82,M.add(Z);const Y=Ze("shortsLeg4",()=>new Et(.132,.112,.2,12));for(const ee of[-1,1]){const K=new le(Y,rt(b,{rough:.86}));K.position.set(ee*.115,.855,0),K.castShadow=!0,M.add(K)}const ne=Ze("shortsStripe4",()=>new _t(.016,.16,.022));for(const ee of[-1,1]){const K=new le(ne,rt(E,{rough:.86}));K.position.set(ee*.23,.855,0),M.add(K)}const xe=Ze("sleeveCap4",()=>new Nt(.092,12,8)),Ce=Ze("sleeve4",()=>new Et(.092,.069,.19,12)),Ge=Ze("arm3",()=>new Za(.06,.34,4,8)),je=Ze("hand3",()=>new Nt(.055,8,6)),J=Ze("cuff3",()=>new Et(.061,.061,.026,8)),ae=ee=>{const K=new ct;K.position.set(ee*.232,1.48,0),K.rotation.z=ee*.045;const _e=new le(xe,rt(w,{rough:.82}));_e.position.y=.012,_e.scale.set(1,.55,.94),_e.castShadow=!0,K.add(_e);const oe=new le(Ce,rt(w,{rough:.82}));oe.position.y=-.075,oe.castShadow=!0,K.add(oe);const fe=new le(Ge,rt(x||e?y:c,{rough:.72}));if(fe.position.y=-.32,fe.castShadow=!0,K.add(fe),x||e){const ie=new le(J,rt(_,{rough:.76}));ie.position.y=-.555,K.add(ie)}else{const ie=new le(J,rt(y,{rough:.8}));ie.position.y=-.16,K.add(ie)}const ke=new le(je,rt(e?"#f4f6f2":c,{rough:e?.5:.7}));return ke.position.y=-.59,e&&ke.scale.set(1.25,1.15,1.25),ke.castShadow=!0,K.add(ke),M.add(K),K},ve=ae(1),de=ae(-1),Re=Ze("thigh4",()=>new Za(.095,.18,4,8)),Ae=Ze("sock3",()=>new Za(.075,.27,4,8)),Ve=Ze("sockCuff3",()=>new Et(.083,.083,.044,8)),Xe=Ze("bootUpper3",()=>new Nt(.087,10,8)),Ne=Ze("bootSole3",()=>new _t(.16,.026,.29)),U=Ze("bootLace3",()=>new _t(.062,.012,.1)),Tt=ee=>{const K=new ct;K.position.set(ee*.105,.9,0);const _e=new le(Re,rt(c,{rough:.7}));_e.position.y=-.16,_e.castShadow=!0,K.add(_e);const oe=new le(Ae,rt(C,{rough:.88}));oe.position.y=-.585,oe.castShadow=!0,K.add(oe);const fe=new le(Ve,rt(_,{rough:.82}));fe.position.y=-.382,K.add(fe);const ke=new ct;ke.position.set(0,-.85,.02);const ie=new le(Xe,rt(v,{rough:.48}));ie.position.set(0,.005,.045),ie.scale.set(.9,.55,1.58),ie.castShadow=!0,ke.add(ie);const Me=new le(Ne,rt(L,{rough:.66}));Me.position.set(0,-.032,.04),Me.castShadow=!0,ke.add(Me);const Le=new le(U,rt(L,{rough:.8}));return Le.position.set(0,.05,.065),Le.rotation.x=-.18,ke.add(Le),K.add(ke),M.add(K),K},Ke=Tt(1),qe=Tt(-1),Te=new ct;Te.position.y=1.7,M.add(Te);const G=new le(Ze("head3",()=>new Nt(.127,18,14)),rt(c,{rough:.64}));G.scale.set(.94,1.07,.97),G.castShadow=!0,Te.add(G);const se=new le(Ze("jaw3",()=>new Nt(.103,14,10)),rt(c,{rough:.67}));se.position.set(0,-.06,.035),se.scale.set(.9,.56,.86),se.castShadow=!0,Te.add(se);const R=Ze("ear3",()=>new Nt(.027,8,6));for(const ee of[-1,1]){const K=new le(R,rt(c,{rough:.7}));K.position.set(ee*.117,-.005,.008),K.scale.set(.62,.9,.72),Te.add(K)}const T=new le(Ze("nose3",()=>new Nt(.022,8,6)),rt(c,{rough:.66}));T.position.set(0,-.012,.119),T.scale.set(.8,1.05,1.05),Te.add(T);const W=new le(Ze("facePlane3",()=>new Rt(.172,.184)),U0(f,d));W.position.set(0,-.008,.127),W.renderOrder=2,Te.add(W),O0(Te,u,h);const Q=new le(Ze("blobShadow",()=>new ka(.52,18)),new yt({color:0,transparent:!0,opacity:.32,depthWrite:!1}));return Q.rotation.x=-Math.PI/2,Q.position.y=.02,k.add(Q),{root:k,body:M,armL:ve,armR:de,legL:Ke,legR:qe,torso:I,head:Te}}function Rh(n,e,t,i){const a=Math.min(1,t/7)*.85,s=Math.sin(e);n.legL.rotation.x=s*a,n.legR.rotation.x=-s*a,n.armL.rotation.x=-s*a*.8,n.armR.rotation.x=s*a*.8,n.body.position.y=Math.abs(Math.cos(e))*.035*Math.min(1,t/5),n.body.rotation.z=Math.sin(e)*.03*Math.min(1,t/6),i?(n.body.rotation.x+=(-1.15-n.body.rotation.x)*.3,n.body.position.y=-.5):(n.body.rotation.x+=(0-n.body.rotation.x)*.25,n.body.position.y+=(Math.abs(Math.cos(e))*.035*Math.min(1,t/5)-n.body.position.y)*.3)}function F0(){const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#f7f9f7",e.fillRect(0,0,256,256),e.fillStyle="#15181a";const t=[[128,46,30],[54,110,26],[202,110,26],[92,196,28],[172,196,28],[128,128,22]];for(const[o,l,c]of t){e.beginPath();for(let h=0;h<5;h++){const u=-Math.PI/2+h/5*Math.PI*2,f=o+Math.cos(u)*c,d=l+Math.sin(u)*c;h===0?e.moveTo(f,d):e.lineTo(f,d)}e.closePath(),e.fill()}e.strokeStyle="rgba(0,0,0,0.28)",e.lineWidth=3,e.strokeRect(0,0,256,256);const i=new Ni(n);i.colorSpace=At;const a=new ct,s=new le(new Nt(Jt,24,18),new xt({map:i,roughness:.55,metalness:.05}));s.castShadow=!0,a.add(s);const r=new le(new ka(Jt*.9,16),new yt({color:0,transparent:!0,opacity:.3,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.02,a.add(r),{root:a,ball:s,shadow:r}}function zl(){const n=new le(new za(.58,.72,32),new yt({color:13041477,transparent:!0,opacity:.92,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.035,n}function B0(n=13041477){const e=new ct,t=new le(new za(1.15,1.5,48),new yt({color:n,transparent:!0,opacity:.85,depthWrite:!1,side:Ut}));t.rotation.x=-Math.PI/2,t.position.y=.05,e.add(t);const i=new le(new Et(1.24,1.42,2.4,32,1,!0),new yt({color:n,transparent:!0,opacity:.09,depthWrite:!1,side:Ut}));i.position.y=1.2,e.add(i);const a=new le(new Rt(.16,.16),new yt({color:n,transparent:!0,opacity:.9,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.06,e.add(a),{root:e,ring:t,beam:i}}function H0(n=16757760,e=2.6){const t=new ct,i=new le(new ka(e,40),new yt({color:n,transparent:!0,opacity:.18,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.035,t.add(i);const a=new le(new za(e-.12,e,48),new yt({color:n,transparent:!0,opacity:.9,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.045,t.add(a),{root:t,disc:i,ring:a}}function G0(n){Object.assign(n.prototype,{thinkAI(e,t){if(!e.active||e.frozen)return;if(e.decisionTimer-=t,e.controlled)return this.thinkControlled(e,t,this.input);if(e.controlled2)return this.thinkControlled(e,t,this.input2||this.input);if(e.isGK)return this.thinkGK(e,t);const i=this.ball;return i.owner===e?this.thinkCarrier(e):i.owner&&i.owner.team===e.team?this.thinkSupport(e):this.thinkDefend(e)},tacticsFor(e){var t;return((t=this.teams[e])==null?void 0:t.tactics)||{mentality:"balanced",pressing:"mid"}},thinkControlled(e,t,i=this.input){if(e.stun>.05||e.slide>0){e.mvx=0,e.mvz=0,e.sprinting=!1;return}const a=this.ball.owner===e,s=this.controlBasis(),r=i?.move||{x:0,y:0};let o=s.rx*r.x+s.fx*r.y,l=s.rz*r.x+s.fz*r.y;const c=Math.hypot(o,l);c>1&&(o/=c,l/=c);const h=i?.has("sprint")&&c>.2&&e.stamina>4,u=(h?e.sprintSpeed:e.speed)*(a?.96:1),f=.82+.18*(e.stamina/Math.max(1,e.staminaMax||100)),d=u*f;e.mvx=o*d,e.mvz=l*d,e.sprinting=h},thinkCarrier(e,t){var i;const a=this.setPiece||this.refereeSetPiece;if(a&&this.ball.owner===e&&!e.controlled){if(this.aiSetPieceHold>0&&this.keeperPrediction)return;const g=this.players.find(b=>b.active&&b.team!==e.team&&b.isGK),y=this.attackDir[e.team]*N.halfLength,_=Math.hypot(e.pos.x,y-e.pos.z);if(a.type==="penalty"){this.shootAI(e,this.chooseShotAim(e,g));return}if(a.type==="freekick"&&_<34){this.shootAI(e,this.chooseShotAim(e,g));return}}if((i=this.intelThinkCarrier)!=null&&i.call(this,e,t))return;const s=this.attackDir[e.team],r=s*N.halfLength,o=this.nearestOpponentDist(e),l=Math.hypot(e.pos.x,r-e.pos.z);this.tacticsFor(e.team).mentality;const c=e.attrs||{},h=(e.ego??55)/100,u=this.inAttackingBox(e),f=this.players.find(g=>g.team!==e.team&&g.active&&g.isGK),d=Math.abs(Math.atan2(0-e.pos.x,r-e.pos.z));if(this.aiSetPieceHold>0&&this.keeperPrediction&&!e.controlled){e.mvx=0,e.mvz=0,e.sprinting=!1;return}if(e.decisionTimer<=0){e.decisionTimer=.14+(1-(c.composure??70)/100)*.16+Math.random()*.12;const g=this.shotValue(e,o,d),y=this.choosePassTarget(e,o),_=y?this.passOptionValue(e,y):-1,b=l<35&&Math.abs(e.pos.x)<30,C=u?.44:l<24?.68:.9;if(b&&g>C&&(g>_+.1||h>.64))return this.shootAI(e,this.chooseShotAim(e,f));if(y&&(o<5.2||_>g+.2||Math.random()<.055))return this.passTo(e,y.player,{through:y.through,cross:y.cross,risk:y.risk});const w=(c.flair??60)/100*(.06+h*.12);if(o>2.2&&o<7.5&&Math.random()<w&&!u)return this.aiSkillMove(e)}let v=e.pos.x,x=r-s*(u?1.5:7);const m=this.nearestOpponent(e);if(m&&he(e.pos.x,e.pos.z,m.pos.x,m.pos.z)<6.5){const g=e.pos.x-m.pos.x,y=e.pos.z-m.pos.z,_=Math.hypot(g,y)||1;v+=g/_*3.5,x+=y/_*1.2}Math.abs(e.baseX)>20&&e.pos.z*s<N.halfLength-22&&(v=Math.sign(e.baseX)*(N.halfWidth-5),x=e.pos.z+s*4),this.steer(e,v,x,.98,o<5||l<28)},thinkSupport(e,t){var i;if((i=this.intelThinkSupport)!=null&&i.call(this,e,t))return;const a=this.attackDir[e.team],s=this.ball,r=this.homePos(e),o=this.tacticsFor(e.team),l=o.mentality==="attack"?5:o.mentality==="defend"?-4:0,c=D((s.z*a+N.halfLength)/(N.halfLength*2),0,1),h=Math.sign(s.x||1),u=e.attrs||{};e.decisionTimer<=0&&(e.decisionTimer=.35+Math.random()*.35);let f=r.x,d=r.z+a*l;const v=e.role,x=Math.abs(e.baseX)>17;if(v==="ATT"){const g=this.nearestOpponentTo(e,18),y=this.opponentBacklineZ(e.team),_=c>.48&&s.owner&&Math.abs(s.z-e.pos.z)<38;f=e.baseX*.7+(s.x-e.baseX)*.2,d=_?Math.min(a*(N.halfLength-7),y+a*3.2):r.z+a*2.8,g&&(f+=(e.pos.x-g.pos.x)*.22,d+=a*1.4),c>.68&&(d=a*(N.halfLength-8+e.number%3*1.2))}else if(v==="MID"){const g=x?e.baseX*.9:e.baseX*.45+h*10;f=We(e.baseX,g,.35)+(s.x-e.baseX)*.18,d=s.z-a*(x?4.5:2.2+c*2.6)+a*(x?2:0),Math.abs(e.baseX)>16&&c>.55&&(d=s.z+a*7)}else{const g=x&&c>.5&&h===Math.sign(e.baseX);f=g?Math.sign(e.baseX)*(N.halfWidth-5.5):e.baseX*.7+(s.x-e.baseX)*.18,d=g?s.z+a*7:r.z+(s.z-r.z)*.2+a*l*.6}he(e.pos.x,e.pos.z,s.x,s.z)<7&&!x&&(f+=(e.pos.x<s.x?-1:1)*5.5),Math.abs(f-e.pos.x)<.35&&Math.abs(d-e.pos.z)<.35&&(f+=Math.sin((e.number+1)*2.1+this.time*.3)*1.4,d+=Math.cos((e.number+1)*1.7+this.time*.27)*1.1),f=D(f,-34+2.5,N.halfWidth-2.5),d=D(d,-52.5+3,N.halfLength-3);const m=c>.55&&(v==="ATT"||v==="MID")&&e.stamina>19&&(u.pace??70)>62;this.steer(e,f,d,v==="ATT"?.96:.88,m)},thinkDefend(e,t){var i;if((i=this.intelThinkDefend)!=null&&i.call(this,e,t))return;const a=this.ball,s=this.attackDir[e.team],r=this.homePos(e),o=he(e.pos.x,e.pos.z,a.x,a.z),l=this.tacticsFor(e.team),c=l.pressing||"mid",h=l.mentality==="defend"?-3.5:l.mentality==="attack"?3.5:0,u=e.attrs||{};if(e.secondDefTimer>0){const y=a.owner&&a.owner.team!==e.team?a.owner:null;if(!a.owner||y){const _=y?y.pos.x:a.x,b=y?y.pos.z:a.z;this.steer(e,_,b,1,!0),y&&o<2.2&&e.tackleTimer<=0&&Math.random()<this.diff.tackle*.11&&this.tryTackle(e);return}e.secondDefTimer=0}const f=this.players.filter(y=>y.team===e.team&&!y.isGK&&y.active).sort((y,_)=>he(y.pos.x,y.pos.z,a.x,a.z)-he(_.pos.x,_.pos.z,a.x,a.z)).indexOf(e),d=a.owner,v=d&&d.team!==e.team;if(f===0){a.z+a.vz*.16;const y=d?d.pos:{x:a.x,z:a.z};this.steer(e,y.x,y.z,1,!0),d&&o<2&&e.tackleTimer<=0&&Math.random()<this.diff.tackle*.09&&this.tryTackle(e);return}if(f===1&&v&&o<29){const y=d;this.steer(e,y.pos.x*.72,y.pos.z-s*(c==="high"?4.5:6.2),.95,o<13);return}const x=D((a.z*s+N.halfLength)/(N.halfLength*2),0,1);let m=r.x+(a.x-r.x)*.2,g=r.z-s*(3.5+x*4.2-h);if(e.role==="DEF"){const y=this.nearestOpponentTo(e,16);if(y&&!y.isGK){const _=this.ball.owner&&this.ball.owner.team!==e.team;m=We(m,y.pos.x,_?.62:.42),g=We(g,y.pos.z-s*(_?1.5:.5),_?.62:.42),Math.abs(y.pos.z-this.ownGoalZ(e.team))<25&&(g=We(g,y.pos.z-s*1.2,.68))}c==="high"&&x<.67&&(m=We(m,a.x,.24),g=We(g,a.z-s*2,.18))}else if(e.role==="MID"){const y=this.nearestOpponentTo(e,11);y&&(m=We(m,y.pos.x,.35),g=We(g,y.pos.z-s*1.1,.35))}else g=r.z+(a.z-r.z)*.12;m=D(m,-32,N.halfWidth-2),g=D(g,-52.5+2.5,N.halfLength-2.5),this.steer(e,m,g,.82,f<4&&o<22&&(u.pace??70)>60)},thinkGK(e,t){const i=this.ball,a=this.attackDir[e.team],s=-a*N.halfLength;if(.55+((e.attrs||{}).reflex??70)/280,i.owner===e){if(e.mvx=0,e.mvz=0,e.gkHold-=t,e.gkHold<=0){const h=this.findPassTarget(e,!1,!1);h?this.passTo(e,h):this.kickBall(e,Math.sin(e.facing),Math.cos(e.facing),28,7)}return}if(e.gkDive>0&&e.diveTargetX!=null&&(e.diveTimer||0)>0){e.diveTimer-=t,this.steer(e,e.diveTargetX,s+a*1.15,1.22,!0),e.gkDive=Math.max(0,e.gkDive-t),e.diveTimer<=0&&(e.diveTargetX=null,e.diveTimer=0);return}const r=Math.abs(i.z-s),o=he(i.x,i.z,0,s);let l=D(i.x*(o<26?.3:.5),-4.9,4.9),c=s+a*1.65;if((!i.owner||i.owner.team!==e.team)&&r<30){const h=he(e.pos.x,e.pos.z,i.x,i.z);if(o<16&&h<o+4&&e.stamina>10){this.steer(e,i.x,i.z,1,!0);return}const u=D(1.65+(26-r)*.2,1.65,7);c=s+a*u,l=D(i.x*(.38+(26-r)*.005),-5.4,5.4)}this.steer(e,l,c,.92,!1),e.gkDive=Math.max(0,(e.gkDive||0)-t)},inAttackingBox(e){const t=this.attackDir[e.team]*N.halfLength;return Math.abs(t-e.pos.z)<N.boxDepth&&Math.abs(e.pos.x)<N.boxHalfWidth},opponentBacklineZ(e){const t=this.attackDir[e],i=this.players.filter(a=>a.team!==e&&a.active&&a.role==="DEF");return i.length?i.reduce((a,s)=>a+s.pos.z,0)/i.length:t*(N.halfLength-20)},shotValue(e,t,i){const a=this.attackDir[e.team]*N.halfLength,s=Math.hypot(e.pos.x,a-e.pos.z),r=e.attrs||{},o=this.players.find(h=>h.team!==e.team&&h.active&&h.isGK),l=o?Math.abs(o.pos.x-e.pos.x):0;let c=.26+(1-D(s/38,0,1))*.48;return c+=((r.shooting??70)-70)*.008,c+=((e.ego??50)-50)*.002,c-=D(t-1.2,0,5)*.055,c+=l>2.5?.05:0,this.inAttackingBox(e)&&(c+=.18),i>1.2&&(c-=.04),c},chooseShotAim(e,t){var i;const a=this.attackDir[e.team],s=a*N.halfLength,r=t?Math.sign(t.pos.x||1):0,o=r===1?-1:r===-1?1:Math.random()<.5?-1:1,l=(((i=e.attrs)==null?void 0:i.shooting)??72)/100;return{x:o*(N.goalHalfWidth-.35-Math.random()*(1.4-l*.7)),z:s+a*.3}},choosePassTarget(e,t){var i;const a=this.attackDir[e.team],s=[];for(const r of this.players){if(!r.active||r.team!==e.team||r===e||r.isGK)continue;const o=he(e.pos.x,e.pos.z,r.pos.x,r.pos.z);if(o<3.2||o>46)continue;const l=this.laneClearance(e.pos.x,e.pos.z,r.pos.x,r.pos.z,e.team),c=this.nearestOpponentAt(r.pos.x,r.pos.z,e.team),h=(r.pos.z-e.pos.z)*a,u=l<2.2||c<1.4,f=h>7&&l>2.5&&c>3.5&&r.role!=="DEF",d=Math.abs(e.pos.x)>21&&e.pos.z*a>N.halfLength-24&&r.role!=="DEF";let v=h*.74+Math.min(l,12)*1.05+Math.min(c,10)*.6-o*.12;f&&(v+=5+h*.32),d&&(v+=4),r.role==="ATT"&&(v+=2.4),u&&(v-=6.5),o<7&&(v-=2),h<-10&&(v-=8),t<3&&h<-4&&(v-=5),v+=((((i=e.attrs)==null?void 0:i.vision)??70)-70)*.02,v>0&&s.push({player:r,score:v,through:f,cross:d,risk:u})}return s.sort((r,o)=>o.score-r.score),s[0]||null},passOptionValue(e,t){const i=t.player,a=this.attackDir[e.team]*N.halfLength,s=he(e.pos.x,e.pos.z,0,a)-he(i.pos.x,i.pos.z,0,a);return D(.36+s*.013+(t.through?.16:0)+(t.cross?.09:0)-(t.risk?.18:0),0,.98)},findPassTarget(e,t=!1,i=!1,a=null){var s;const r=[],o=this.attackDir[e.team],l=!!a&&Math.hypot(a.x,a.z)>.15;for(const c of this.players){if(!c.active||c.team!==e.team||c===e||c.isGK&&!i)continue;const h=he(e.pos.x,e.pos.z,c.pos.x,c.pos.z);if(h<3.2||h>52)continue;const u=this.laneClearance(e.pos.x,e.pos.z,c.pos.x,c.pos.z,e.team),f=this.nearestOpponentAt(c.pos.x,c.pos.z,e.team),d=(c.pos.z-e.pos.z)*o;let v=Math.min(u,13)*1.2+Math.min(f,11)*1.35+d*1.05-h*.16;if(t&&(v+=d*.5+(c.role==="ATT"?6:0)+Math.min(f,11)*.8),l){const x=(c.pos.x-e.pos.x)/(h||1),m=(c.pos.z-e.pos.z)/(h||1),g=x*a.x+m*a.z;if(g<.18)continue;v+=g*30}u<1.9&&(v-=10),f<1.2&&(v-=5),c.isGK&&(v-=34),d<-8&&(v-=6),v+=Math.random()*.5,r.push({t:c,score:v})}return r.sort((c,h)=>h.score-c.score),((s=r[0])==null?void 0:s.t)||null},laneClearance(e,t,i,a,s){let r=15;for(const o of this.players){if(!o.active||o.team===s)continue;const l=l0(e,t,i,a,o.pos.x,o.pos.z);l<r&&(r=l)}return r},passTo(e,t,i={}){var a,s,r,o,l,c;if(!(t!=null&&t.active))return;const h=this.attackDir[e.team],u=!!i.through,f=!!i.cross,d=u?.52:.2;let v=t.pos.x+t.vel.x*d,x=t.pos.z+t.vel.z*d+(u?h*6.5:0);v=D(v,-33,N.halfWidth-1),x=D(x,-52.5+1.5,N.halfLength-1.5),f&&(v=t.pos.x*.15+(t.role==="ATT"?t.pos.x*.2:0),x=h*(N.halfLength-11));let m=v-e.pos.x,g=x-e.pos.z;const y=Math.hypot(m,g)||1;m/=y,g/=y;const _=(((a=e.attrs)==null?void 0:a.passing)??e.rating)/100,b=(((s=e.attrs)==null?void 0:s.vision)??70)/100,C=(((r=e.attrs)==null?void 0:r.balance)??70)/100,w=(((o=e.attrs)==null?void 0:o.weakFoot)??3)/5,E=this.nearestOpponentDist(e),L=((l=e.intel)==null?void 0:l.familiarity)??1,k=this.diff.passError*(1.34-_*.48-b*.12)*(1+D(E-1.4,0,5)*.045)*(1.22-C*.16-w*.04)/Math.max(.62,L)*(e.isGK?1.6:1),M=(Math.random()-.5)*k,S=Math.atan2(m,g)+M;e.intel&&(e.intel.followTimer=u?.55:.9);const I=D(9.5+y*.66+(u?4:0),11,29),z=f?6.4:u?1.2:0,O=e===this.controlled||e===this.controlled2;this.stats.passes[e.team]++,this.lastPass={team:e.team,player:e,timer:3.2},this.passTarget=t,this.passTimer=3.5,this.kickBall(e,Math.sin(S),Math.cos(S),I,z,{curve:(((c=e.attrs)==null?void 0:c.flair)??60)>75&&f?(Math.random()-.5)*.55:0}),O&&i.switch!==!1&&(this.duel&&e.team===1?this.setControl(t,1):e.team===0&&this.autoControl&&this.setControl(t,0))},chooseShotAim(e,t){var i;const a=this.attackDir[e.team],s=a*N.halfLength,r=t?Math.sign(t.pos.x||1):0,o=r===1?-1:r===-1?1:Math.random()<.5?-1:1,l=(((i=e.attrs)==null?void 0:i.shooting)??72)/100;return{x:o*(N.goalHalfWidth-.32-Math.random()*(1.5-l*.8)),z:s+a*.2}},shootAI(e,t=null){var i;const a=this.attackDir[e.team]*N.halfLength,s=e.pos.x>=0?-1:1,r=e.attrs||{},o=(r.finishing??r.shooting??70)/100,l=(r.composure??70)/100,c=(r.balance??70)/100,h=this.nearestOpponentDist(e),u=((i=e.intel)==null?void 0:i.familiarity)??1,f=Math.hypot(e.pos.x,a-e.pos.z),d=this.players.find(w=>w.team!==e.team&&w.active&&w.isGK),v=d?Math.abs(d.pos.x-e.pos.x):3;let x=t?.x??s*(.5+Math.random()*2.7);d&&v<1.2&&(x=(d.pos.x>=0?-1:1)*(N.goalHalfWidth-.45-Math.random()*.8)),x=D(x,-3.66+.3,N.goalHalfWidth-.3);const m=f<13,g=f>24,y=!m&&(l>.76||(r.flair??60)>78)&&v<1.6&&Math.random()<.12,_=!y&&!g&&(r.curve??60)>68&&(r.flair??60)>66&&Math.random()<.28,b=D(.5+o*.3+(g?.12:0)+Math.random()*.16,.5,y||_?.82:.99),C=this.diff.shotError*(t?.85:1.35)*(1.45-o*.42-l*.2-c*.12)*(1+D(h-1.5,0,5)*.05)/Math.max(.65,u);this.shootAt(e,x,a,b,C,{chip:y,curve:_||(r.flair??60)>78?(Math.random()-.5)*(_?.55:.3):0})},aiSkillMove(e){if(e.skillTimer>0||e.stamina<8||e.kickCooldown>0)return!1;const t=e.attrs||{};if(Math.random()>.55+(t.flair??60)/250)return!1;const i=this.attackDir[e.team],a=Math.random()<.5?-1:1,s=8.2+(t.flair??60)*.025;e.vel.x=a*s,e.vel.z=i*(7+Math.random()*3),e.facing=Math.atan2(e.vel.x,e.vel.z),e.skillTimer=.38,e.spinTime=.34,e.stamina=Math.max(0,e.stamina-4.5);const r=this.ball;return r.owner===e&&(r.x=e.pos.x+Math.sin(e.facing)*.85,r.z=e.pos.z+Math.cos(e.facing)*.85,r.vx=e.vel.x,r.vz=e.vel.z),this.audio.click(),!0},drillOnPossession(){}})}const V0={shooting:{target:5,maxAttempts:8},passing:{target:8,time:60,attempts:!1},dribbling:{target:6,time:60,attempts:!1},defending:{target:3,maxAttempts:5},freekick:{target:3,maxAttempts:6},crossing:{target:3,maxAttempts:6},firsttouch:{target:8,maxAttempts:10},corner:{target:3,maxAttempts:6},delivery:{target:3,maxAttempts:6},penalty:{target:3,maxAttempts:5},onevone:{target:3,maxAttempts:6},control:{target:8,time:45,attempts:!1},technique:{target:5,time:45,attempts:!1}},W0={shooting:"GOALS",passing:"PASSES",dribbling:"GATES",defending:"WINS",freekick:"GOALS",crossing:"CROSSES",firsttouch:"CONTROLS",corner:"CORNERS",delivery:"DELIVERIES",penalty:"GOALS",onevone:"GOALS",control:"PASSES",technique:"GATES"};function X0(n){Object.assign(n.prototype,{setupDrill(e){var t,i;this.drillDef=e,this.mode="training",this.state="drill",this.clock=0,this.score=[0,0],this.half=1,this.possession=[0,0],(i=(t=this.extraGroup).clear)==null||i.call(t),this.drillGroup=new ct,this.extraGroup.add(this.drillGroup),this.autoControl=!1,this.autoSwitch=!1,this.inputLocked=!1;const a=V0[e.id]||{target:3,maxAttempts:5};this.drillState={id:e.id,progress:0,target:a.target,attempts:0,maxAttempts:a.maxAttempts||0,timeLeft:a.time||0,lock:0,resolved:!1,done:!1,phase:"aim",out:!1,flightTimer:0,repTimer:0,finishAfter:!1,gate:null,zone:null,wall:[],wallHome:[],oppTimer:0,looseTimer:0},this.hideAllDrillPlayers(),this.setupDrillScenario(e.id),this.updateDrillHud(),this.hud.banner(e.name,e.objective.toUpperCase(),1900),this.audio.whistle(!1)},hideAllDrillPlayers(){for(const e of this.players)e.frozen=!1,this.setPlayerActive(e,!1);this.setControl(null)},activateDrillPlayer(e){e&&(this.setPlayerActive(e,!0),e.frozen=!1,e.stamina=100,e.stun=0,e.slide=0,e.kickCooldown=0,e.vel.x=0,e.vel.z=0,e.visual.body.rotation.x=0,e.ringTimer=0)},place(e,t,i,a=null){e&&(e.pos.x=D(t,-34+.8,N.halfWidth-.8),e.pos.z=D(i,-52.5+1,N.halfLength-1),e.vel.x=0,e.vel.z=0,e.mvx=0,e.mvz=0,e.stun=0,e.slide=0,e.kickCooldown=0,a!==null&&(e.facing=a))},drillPlayer(e,t,i=[]){const a=this.players.filter(r=>r.team===e&&r.active===!1&&!r.isGK&&!i.includes(r)),s=a.filter(r=>r.role===t);return(s.length?s:a)[0]||null},drillKeeper(e){return this.players.find(t=>t.team===e&&t.isGK)||null},setupDrillScenario(e){const t=this.drillState;if(e==="corner"&&this.setupCornerDrill){this.setupCornerDrill();return}if(e==="shooting"||e==="freekick"||e==="penalty"){const i=this.drillPlayer(0,"ATT"),a=this.drillKeeper(1);if(this.activateDrillPlayer(i),this.activateDrillPlayer(a),t.shooter=i,t.keeper=a,e==="freekick"){const s=[];for(let r=0;r<4;r++){const o=this.drillPlayer(1,"DEF",s);o&&(o.frozen=!0,this.activateDrillPlayer(o),s.push(o))}t.wall=s}this.setControl(i),this.resetShotDrill(),this.hud.hint(e==="freekick"?"AIM WITH THE STICK · TAP SHOOT · BEAT THE WALL":e==="penalty"?"PICK YOUR CORNER · TAP SHOOT":"AIM WITH THE STICK · TAP SHOOT")}else if(e==="crossing"||e==="corner"||e==="delivery"){const i=this.drillPlayer(0,"MID"),a=this.drillPlayer(0,"ATT",[i]),s=this.drillKeeper(1),r=this.drillPlayer(1,"DEF");[i,a,s,r].forEach(o=>this.activateDrillPlayer(o)),a&&(a.frozen=!0),r&&(r.frozen=!0),s&&(t.keeper=s),t.winger=i,t.striker=a,t.wall=[r].filter(Boolean),this.setControl(i),this.resetCrossDrill(),this.hud.hint(e==="corner"?"SWING IT IN FROM THE FLAG · FIND THE TARGET ZONE":e==="delivery"?"DRIVE IT IN FROM WIDE · FIND THE TARGET ZONE":"AIM AT THE TARGET ZONE · PASS TO THE STRIKER")}else if(e==="defending"){const i=this.drillPlayer(0,"DEF"),a=this.drillKeeper(0),s=this.drillPlayer(1,"ATT");[i,a,s].forEach(r=>this.activateDrillPlayer(r)),t.defender=i,t.keeper=a,t.striker=s,this.setControl(i),this.resetDefendDrill(),this.hud.hint("CHASE · TACKLE · WIN THE BALL BACK")}else if(e==="onevone"){const i=this.drillPlayer(0,"ATT"),a=this.drillPlayer(1,"DEF"),s=this.drillKeeper(1);[i,a,s].forEach(r=>this.activateDrillPlayer(r)),t.attacker=i,t.defender=a,t.keeper=s,this.setControl(i),this.resetOneVOne(),this.hud.hint("BEAT YOUR MAN · GET YOUR SHOT AWAY")}else if(e==="passing"||e==="control"){const i=this.drillPlayer(0,"MID");this.activateDrillPlayer(i),t.passer=i,t.mates=[];const a=[[-20,-14],[17,-16],[0,-25],[-16,6],[16,8]];for(const[s,r]of a){const o=this.drillPlayer(0,"MID",[i,...t.mates]);o&&(this.activateDrillPlayer(o),this.place(o,s,r,Math.PI),t.mates.push(o))}for(let s=0;s<2;s++){const r=this.drillPlayer(1,"MID");r&&(this.activateDrillPlayer(r),e==="control"?this.place(r,s?8:-8,s?-13:-7,Math.PI):(r.frozen=!0,this.place(r,s?7:-6,s?-16:-9,Math.PI)))}this.place(i,0,-3,Math.PI),this.giveBall(i),this.setControl(i),t.basePasses=this.stats.passesCompleted[0],this.hud.hint(e==="control"?"KEEP IT UNDER PRESSURE · COMPLETE 8 PASSES":"PASS AND MOVE · COMPLETE 8 PASSES")}else if(e==="dribbling"||e==="technique"){const i=this.drillPlayer(0,"MID");if(this.activateDrillPlayer(i),t.passer=i,this.place(i,0,4,Math.PI),this.giveBall(i),this.setControl(i),t.obstacles=[],e==="technique")for(let a=0;a<2;a++){const s=this.drillPlayer(1,"DEF",t.obstacles);s&&(this.activateDrillPlayer(s),s.frozen=!0,this.place(s,a?7:-7,a?-9:-15,0),t.obstacles.push(s))}this.spawnGate(),this.hud.hint(e==="technique"?"QUICK FEET · SLALOM THROUGH THE GATES":"KEEP THE BALL CLOSE · RUN THROUGH THE GATES")}else if(e==="firsttouch"){const i=this.drillPlayer(0,"MID");this.activateDrillPlayer(i),t.passer=i,this.place(i,0,0,Math.PI),this.setControl(i),this.launchTouchBall(),this.hud.hint("CONTROL THE BALL · STAY CALM")}},resetShotDrill(){const e=this.drillState;if(!e.shooter)return;const t=e.id==="freekick",i=e.id==="penalty",a=t||i?0:ot(-5,5),s=i?-52.5+N.penaltyDist:t?-31:ot(-33,-28);if(this.place(e.shooter,a,s,Math.PI),this.giveBall(e.shooter),this.setControl(e.shooter),e.keeper&&this.place(e.keeper,a*.12,-52.5+1.6,0),t){const r=s-9.15;e.wall.forEach((o,l)=>{const c=(l-(e.wall.length-1)/2)*1.15;this.place(o,D(a+c,-.5,.5)+(l-1.5)*.55,r,0),o.frozen=!0,o.vel.x=0,o.vel.z=0})}e.phase="aim",e.resolved=!1,e.out=!1,e.flightTimer=0,e.lock=0,this.inputLocked=!1},resetCrossDrill(){const e=this.drillState;if(!e.winger)return;e.zone&&(this.drillGroup.remove(e.zone.root),e.zone=null);const t=e.id==="corner",i=e.id==="delivery",a=t?3:i?8:0,s=-52.5+(t?7:10),r=t?N.halfWidth-2:i?25:26,o=t?-52.5+1.5:i?-24:-46;e.zone=H0(16757760,2.8),e.zone.root.position.set(a,0,s),this.drillGroup.add(e.zone.root),e.zoneX=a,e.zoneZ=s,this.place(e.winger,r,o,Math.atan2(a-r,s-o)),this.giveBall(e.winger),this.setControl(e.winger),e.striker&&(this.place(e.striker,a,s,Math.PI),e.striker.frozen=!0),e.keeper&&this.place(e.keeper,0,-52.5+1.6,0),e.wall[0]&&(this.place(e.wall[0],a-4.5,s+1,0),e.wall[0].frozen=!0),e.phase="aim",e.resolved=!1,e.out=!1,e.flightTimer=0,e.lock=0,this.inputLocked=!1},resetDefendDrill(){const e=this.drillState;!e.striker||!e.defender||(this.place(e.striker,ot(-4,4),-18,0),this.giveBall(e.striker),this.place(e.defender,0,2,Math.PI),this.setControl(e.defender),e.keeper&&this.place(e.keeper,0,N.halfLength-2,Math.PI),e.phase="defend",e.resolved=!1,e.out=!1,e.repTimer=13,e.lock=0,this.inputLocked=!1)},resetOneVOne(){const e=this.drillState;e.attacker&&(this.place(e.attacker,ot(-5,5),5,Math.PI),this.giveBall(e.attacker),this.setControl(e.attacker),e.defender&&this.place(e.defender,ot(-4,4),-5,0),e.keeper&&this.place(e.keeper,0,-52.5+1.6,Math.PI),e.phase="attack",e.repTimer=15,e.flightTimer=0,e.resolved=!1,e.out=!1,e.lock=0,this.inputLocked=!1)},resetTouchDrill(){const e=this.drillState;e.passer&&(this.place(e.passer,0,0,Math.PI),this.launchTouchBall(),e.phase="flight",e.resolved=!1,e.out=!1,e.repTimer=4.2,e.flightTimer=0,e.lock=0,this.inputLocked=!1)},launchTouchBall(){const e=this.drillState.passer;if(!e)return;const t=ot(0,Math.PI*2),i=ot(15,22);let a=e.pos.x+Math.sin(t)*i,s=e.pos.z+Math.cos(t)*i;a=D(a,-32,N.halfWidth-2),s=D(s,-52.5+2,N.halfLength-2);const r=this.ball;r.owner=null,r.x=a,r.z=s,r.y=2.4,r.vx=0,r.vz=0,r.vy=0,r.ignore=null,r.ignoreTimer=0;const o=e.pos.x-a,l=e.pos.z-s,c=Math.hypot(o,l)||1,h=ot(16,21),u=c/h,f=(1-2.4+.5*18*u*u)/Math.max(.2,u);r.vx=o/c*h,r.vz=l/c*h,r.vy=D(f,1,12),this.lastTouch={team:0,player:null}},spawnGate(){const e=this.drillState,t=this.controlled;if(!t)return;e.gate&&(this.drillGroup.remove(e.gate.root),e.gate=null);let i=t.pos.x,a=t.pos.z,s=0;do{const o=Math.random()<.8,l=ot(10,24),c=o?Math.PI+ot(-.75,.75):ot(0,Math.PI*2);i=D(t.pos.x+Math.sin(c)*l,-34+3.5,N.halfWidth-3.5),a=D(t.pos.z+Math.cos(c)*l,-52.5+5,N.halfLength-5),s++}while(he(i,a,t.pos.x,t.pos.z)<8&&s<24);const r=B0(13041477);r.root.position.set(i,0,a),this.drillGroup.add(r.root),e.gate={root:r.root,x:i,z:a,ring:r.ring,beam:r.beam}},resetPassingBall(){const e=this.drillState,t=this.controlled&&this.controlled.active?this.controlled:e.passer;t&&(this.place(t,D(t.pos.x,-30,N.halfWidth-4),D(t.pos.z,-52.5+4,N.halfLength-4),Math.PI),this.giveBall(t),this.setControl(t),e.out=!1,e.oppTimer=0)},updateDrill(e){var t;const i=this.drillState;if(!(!i||i.done)){if(["passing","dribbling","control","technique"].includes(this.drillState.id)&&(i.timeLeft=Math.max(0,i.timeLeft-e),i.timeLeft<=0)){this.finishDrill();return}if(i.lock>0){if(i.lock-=e,this.inputLocked=!0,i.lock<=0){if(this.inputLocked=!1,i.finishAfter){this.finishDrill();return}this.resetDrillScenario()}this.updateDrillHud();return}if(this.inputLocked=!1,this.simulate(e),i.lock>0||i.done){this.updateDrillHud();return}switch(i.id){case"shooting":case"freekick":case"penalty":this.monitorShotDrill(e);break;case"crossing":case"delivery":this.monitorCrossDrill(e);break;case"corner":this.corner||(t=this.resetCornerDrill)==null||t.call(this);break;case"defending":this.monitorDefendDrill(e);break;case"onevone":this.monitorOneVOne(e);break;case"passing":case"control":this.monitorPassDrill(e);break;case"dribbling":case"technique":this.monitorDribbleDrill(e);break;case"firsttouch":this.monitorTouchDrill(e);break}this.updateDrillHud()}},monitorShotDrill(e){const t=this.drillState,i=this.ball;if(t.phase==="aim"){i.owner!==t.shooter&&(t.phase="flight",t.flightTimer=0);return}if(t.flightTimer+=e,t.out){t.out=!1,this.drillResolve(!1);return}if(i.owner&&i.owner.team!==0){this.drillResolve(!1);return}if(!i.owner&&Math.hypot(i.vx,i.vz)<1.1&&i.y<=.02&&t.flightTimer>.35){this.drillResolve(!1);return}t.flightTimer>5&&this.drillResolve(!1)},monitorCrossDrill(e){const t=this.drillState,i=this.ball;if(t.phase==="aim"){i.owner!==t.winger&&(t.phase="flight",t.flightTimer=0);return}if(t.flightTimer+=e,t.out){t.out=!1,this.drillResolve(!1);return}if(he(i.x,i.z,t.zoneX,t.zoneZ)<3&&this.lastTouch.team===0&&!i.owner){this.drillResolve(!0,"GREAT BALL");return}if(i.owner&&i.owner.team===0&&i.owner!==t.winger){if(he(i.owner.pos.x,i.owner.pos.z,t.zoneX,t.zoneZ)<3.5){this.drillResolve(!0,"GREAT BALL");return}this.drillResolve(!1);return}if(i.owner&&i.owner.team!==0){this.drillResolve(!1);return}if(!i.owner&&Math.hypot(i.vx,i.vz)<1.1&&i.y<=.02&&t.flightTimer>.4){this.drillResolve(!1);return}t.flightTimer>5&&this.drillResolve(!1)},monitorDefendDrill(e){const t=this.drillState;if(t.repTimer-=e,this.ball.owner&&this.ball.owner.team===0){this.drillResolve(!0,"BALL WON");return}if(t.out){t.out=!1,this.drillResolve(!1);return}t.repTimer<=0&&this.drillResolve(!1)},monitorOneVOne(e){const t=this.drillState,i=this.ball;if(t.repTimer-=e,t.out){t.out=!1,this.drillResolve(!1,"OUT");return}if(i.owner&&i.owner.team===1){this.drillResolve(!1,"TACKLED");return}if(i.owner)t.flightTimer=0;else if(t.flightTimer+=e,t.flightTimer>5||Math.hypot(i.vx,i.vz)<1.2&&i.y<.2&&t.flightTimer>1.4){this.drillResolve(!1,"MISSED");return}t.repTimer<=0&&this.drillResolve(!1,"TIME")},monitorPassDrill(){const e=this.drillState,t=this.ball.owner;if(e.out){e.out=!1,this.resetPassingBall();return}t&&t.team===0?(t!==this.controlled&&this.setControl(t),e.oppTimer=0):t&&t.team===1?(e.oppTimer+=.016,e.oppTimer>1.8&&(this.resetPassingBall(),e.oppTimer=0)):!t&&Math.hypot(this.ball.vx,this.ball.vz)<.6?(e.looseTimer+=.016,e.looseTimer>2.4&&(this.resetPassingBall(),e.looseTimer=0)):e.looseTimer=0,e.progress=Math.min(e.target,Math.max(0,this.stats.passesCompleted[0]-e.basePasses)),e.progress>=e.target&&this.finishDrill()},monitorDribbleDrill(e){const t=this.drillState;t.out&&(t.out=!1,this.controlled&&this.giveBall(this.controlled));const i=this.ball.owner;if(i&&i.team!==0&&this.controlled&&this.giveBall(this.controlled),i?t.looseTimer=0:(t.looseTimer=(t.looseTimer||0)+e,t.looseTimer>1&&this.controlled&&(this.giveBall(this.controlled),t.looseTimer=0)),t.gate||this.spawnGate(),t.gate&&i===this.controlled&&he(this.controlled.pos.x,this.controlled.pos.z,t.gate.x,t.gate.z)<1.7){if(t.progress++,this.audio.click(),this.hud.banner("GATE",`${t.progress} / ${t.target}`,700,"goal"),t.progress>=t.target){this.finishDrill();return}this.spawnGate()}},monitorTouchDrill(e){const t=this.drillState;t.repTimer-=e;const i=this.ball;if(t.out){t.out=!1,this.drillResolve(!1,"MISSED");return}if(i.owner===this.controlled){this.drillResolve(!0,"GREAT TOUCH");return}if(i.owner){this.drillResolve(!1,"MISSED");return}const a=Math.hypot(i.vx,i.vz);(t.repTimer<=0||a<1.2&&i.y<.1&&t.flightTimer>.4)&&this.drillResolve(!1,"MISSED")},drillGoal(e){const t=this.drillState;if(!t||t.done)return;const i=t.id;["shooting","freekick","crossing","corner","delivery","penalty","onevone"].includes(i)?this.drillResolve(e===0,"GOAL"):i==="defending"?this.drillResolve(e===0,e===0?"BALL WON":"CONCEDED"):this.drillResolve(!1)},drillBallOut(){const e=this.drillState;if(!e||e.done||e.resolved)return;e.out=!0;const t=this.ball;t.x=D(t.x,-34+.6,N.halfWidth-.6),t.z=D(t.z,-52.5+.7,N.halfLength-.7),t.vx=0,t.vz=0,t.vy=0},drillResolve(e,t=""){const i=this.drillState;!i||i.resolved||i.done||(i.resolved=!0,e&&i.progress++,i.attempts++,i.lock=e?1.25:1,this.inputLocked=!0,this.charging=!1,this.charge=0,e?(this.audio.click(),t==="GOAL"&&this.audio.goal(),this.hud.banner(t||"GREAT",`${i.progress} / ${i.target}`,1e3,"goal")):(this.audio.miss(),this.hud.banner(t||"MISSED",`${i.progress} / ${i.target}`,800,"final")),i.finishAfter=i.progress>=i.target||i.maxAttempts>0&&i.attempts>=i.maxAttempts,this.updateDrillHud())},resetDrillScenario(){const e=this.drillState;if(!(!e||e.done)){if(e.id==="corner"&&this.resetCornerDrill){this.resetCornerDrill(),e.resolved=!1,e.out=!1,e.flightTimer=0,e.finishAfter||(e.lock=0),this.updateDrillHud();return}["shooting","freekick","penalty"].includes(e.id)?this.resetShotDrill():["crossing","corner","delivery"].includes(e.id)?this.resetCrossDrill():e.id==="defending"?this.resetDefendDrill():e.id==="onevone"?this.resetOneVOne():e.id==="firsttouch"?this.resetTouchDrill():["dribbling","technique"].includes(e.id)?(this.controlled&&this.giveBall(this.controlled),e.id==="technique"&&this.spawnGate(),this.inputLocked=!1):["passing","control"].includes(e.id)&&(this.resetPassingBall(),this.inputLocked=!1),e.resolved=!1,e.out=!1,e.flightTimer=0,e.finishAfter||(e.lock=0),this.updateDrillHud()}},finishDrill(){var e,t;const i=this.drillState;if(!i||i.done)return;i.done=!0,this.state="drillDone",this.inputLocked=!0;const a=i.progress>=i.target;this.drillResult={id:i.id,name:((e=this.drillDef)==null?void 0:e.name)||"DRILL",progress:i.progress,target:i.target,attempts:i.attempts,maxAttempts:i.maxAttempts,success:a},this.hud.banner(a?"DRILL COMPLETE":"DRILL OVER",`${i.progress} / ${i.target}`,2200,a?"goal":"final"),this.audio.whistle(!0),(t=this.onFinish)==null||t.call(this,this)},updateDrillHud(){var e;const t=this.drillState;if(!t)return;let i="";["passing","dribbling","control","technique"].includes(t.id)?i=`${Math.ceil(t.timeLeft)}s`:t.maxAttempts&&(i=`${Math.min(t.attempts,t.maxAttempts)}/${t.maxAttempts}`),this.drillHud={name:((e=this.drillDef)==null?void 0:e.name)||"DRILL",goal:`${W0[t.id]||"PROGRESS"} ${t.progress}/${t.target}`,time:i,progress:t.target?t.progress/t.target:0}},updateDrillVisuals(e){const t=this.drillState;if(t){if(this.drillAnim=(this.drillAnim||0)+e,t.gate){const i=1+Math.sin(this.drillAnim*4)*.06;t.gate.ring.scale.setScalar(i),t.gate.ring.material.opacity=.65+Math.sin(this.drillAnim*4)*.2,t.gate.beam.material.opacity=.06+Math.sin(this.drillAnim*3)*.03}if(t.zone){const i=1+Math.sin(this.drillAnim*3.4)*.05;t.zone.ring.scale.setScalar(i),t.zone.ring.material.opacity=.65+Math.sin(this.drillAnim*3.4)*.25}if(t.wall)for(const i of t.wall)i.vel.x=0,i.vel.z=0,i.mvx=0,i.mvz=0}},disposeDrill(){this.drillGroup&&(this.drillGroup.traverse(e=>{var t,i,a,s;e.isMesh&&((i=(t=e.geometry)==null?void 0:t.dispose)==null||i.call(t),Array.isArray(e.material)?e.material.forEach(r=>{var o;return(o=r.dispose)==null?void 0:o.call(r)}):(s=(a=e.material)==null?void 0:a.dispose)==null||s.call(a))}),this.extraGroup.remove(this.drillGroup),this.drillGroup=null),this.drillState=null,this.drillHud=null}})}const zs=18,K0=1.65,q0=2,Y0=1.2,j0=.8,$0=.64,Z0=.7,J0=9,Nl=6.5,Xa={inswing:{label:"INSWING",height:2.05,speed:20.5,curve:1},outswing:{label:"OUTSWING",height:1.95,speed:20,curve:-1},driven:{label:"DRIVEN",height:1.25,speed:26,curve:.18},loop:{label:"HIGH",height:2.85,speed:15.5,curve:.45},low:{label:"LOW",height:.55,speed:28,curve:.22},short:{label:"SHORT",height:0,speed:11,curve:0}},Ka={near:{label:"NEAR POST",bias:.04,depth:5.4},far:{label:"FAR POST",bias:.94,depth:5.9},centre:{label:"CENTRE",bias:.5,depth:8.4},edge:{label:"EDGE OF BOX",bias:.45,depth:18.2},crowd:{label:"CROWD THE BOX",bias:.5,depth:7.6},short:{label:"SHORT",bias:.12,depth:7.2}};function Lh(n){let e=2166136261;const t=String(n);for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return(e>>>0)/4294967296}function Zt(n,e){return n?D(48+Math.round(Lh(`${n.id}|${e}`)*46)*.62+n.rating*.38,45,96):60}function Q0(n){return 1-Math.pow(1-D(n,0,1),3)}function eg(n){const e=n.prototype.thinkAI,t=n.prototype.scoreGoal,i=n.prototype.catchBall;Object.assign(n.prototype,{cornerUserCanAim(){return(this.autoControl!==!1||this.mode==="training")&&this.mode!=="spectate"&&this.mode!=="highlights"},beginCorner(a,s,r,o={}){var l,c;this.corner&&this.finishCorner("restart");const h=this.attackDir[a]*N.halfLength,u=Math.sign(h)||1,f=Math.sign(s)||1,d=-u,v={team:a,side:u,sideX:f,inward:d,goalZ:h,ballX:f*(N.halfWidth-.34),ballZ:h-u*.34,phase:"setup",phaseTime:0,liveTime:0,time:0,training:!!o.training,delivery:"inswing",tactic:o.tactic||(o.training,"near"),aim:{nx:0,power:.66,curve:0},aimTarget:null,roster:new Map,attackers:[],defenders:[],markers:[],taker:null,shortOption:null,shortDefender:null,keeper:null,receiver:null,userAim:!1,aiPlan:null,drag:null,previewTimer:0,aimVisible:!1,delivered:!1,deliveredAt:-1,flightT:1,zoneReached:!1,touched:!1,settleTimer:0,looseTimer:0,result:"",scorer:null,lastAerialAt:-10,placed:!1,gkPlan:null,oneTwo:!1,shortAt:-1,shortReceiver:null,done:!1};this.corner=v,this.state="corner",this.stateTimer=0,this.restartType="corner",this.charging=!1,this.charge=0,this.passTarget=null,this.lastShot=null,this.replayActive=!1,this.hud.showReplay(!1);const x=this.ball;x.owner=null,x.x=v.ballX,x.z=v.ballZ,x.y=0,x.vx=0,x.vz=0,x.vy=0,x.curve=null,x.ignore=null,x.ignoreTimer=0;for(const m of this.players)m.active&&(m.cornerRole=null,m.aerialCooldown=0,m.actionName=null,m.actionT=0,m.actionDur=0,m.stun=0,m.slide=0,m.vel.x=0,m.vel.z=0,m.mvx=0,m.mvz=0);this.assignCornerPlayers(a,f),this.hud.el.hud.classList.add("corner-mode"),this.hud.el.hud.classList.remove("corner-live"),this.cornerUserAim=this.cornerUserCanAim()&&(this.onlineRole==="host"?a===0:this.onlineRole==="guest"?!1:this.duel||a===0),v.userAim=this.cornerUserAim,this.prepareCornerDom(a),this.updateCornerAim(),this.updateCornerAimVisual(!0),this.hud.banner("CORNER",`${this.teams[a].short}${o.training?" · TRAINING":""}`,1450),this.hud.commentary(`Corner for ${this.teams[a].name}.`),(c=(l=this.audio)==null?void 0:l.cornerCrowd)==null||c.call(l),this.mode!=="spectate"&&this.mode!=="highlights"?this.duel?this.setControl(v.taker,a===1?1:0):a===0?this.setControl(v.taker):this.setControl(this.nearestPlayerToBall(0,!1)):this.setControl(null)},takeBest(a,s){if(!a.length)return null;let r=0,o=-1/0;for(let l=0;l<a.length;l++){const c=s(a[l]);c>o&&(o=c,r=l)}return a.splice(r,1)[0]},assignCornerPlayers(a,s){var r,o,l,c;const h=this.corner,u=this.players.filter(G=>G.active&&G.team===a&&!G.isGK),f=this.players.filter(G=>G.active&&G.team!==a&&!G.isGK),d=this.players.find(G=>G.active&&G.team!==a&&G.isGK)||null,v=G=>Zt(G,"cross")*.6+G.rating*.4+(Math.abs(G.baseX)>15?5:0),x=G=>Zt(G,"aerial")*.62+G.rating*.38,m=G=>Zt(G,"pace")*.6+G.rating*.4,g=[...u],y=this.takeBest(g,v),_=[...g],b=this.takeBest(_,G=>m(G)*.6+G.rating*.4-he(G.pos.x,G.pos.z,h.ballX,h.ballZ)*.35),C=this.takeBest(g,G=>x(G)+m(G)*.35),w=this.takeBest(g,x),E=this.takeBest(g,G=>m(G)*.65+x(G)*.35),L=this.takeBest(g,G=>G.rating*.7+Zt(G,"shot")*.3),k=this.takeBest(g,G=>Zt(G,"shot")*.7+G.rating*.3),M=g.shift()||null,S=g.shift()||null,I=[...g],z=(G,se,R={})=>{if(!G)return null;const T={role:se,p:G,seed:Lh(G.id),...R};return h.roster.set(G,T),G.cornerRole=se,T},O=G=>{const se=h.goalZ,R=h.inward;switch(G.role){case"taker":G.stand={x:h.ballX-h.sideX*2.25,z:h.ballZ+R*.75},G.start={x:h.ballX-h.sideX*.9,z:h.ballZ+R*.9};break;case"short":G.stand={x:h.ballX-h.sideX*4.6,z:h.ballZ+R*5.2},G.run={x:h.ballX-h.sideX*7.5,z:h.ballZ+R*6.2};break;case"near":G.stand={x:h.sideX*5.4,z:se+R*8.4},G.run={x:h.sideX*3.15,z:se+R*4.5},G.runDepth=4.5,G.delay=.12;break;case"far":G.stand={x:-h.sideX*5.6,z:se+R*9.6},G.run={x:-h.sideX*3.35,z:se+R*5.2},G.runDepth=5.2,G.delay=.48;break;case"central":G.stand={x:h.sideX*.5,z:se+R*10.8},G.run={x:h.sideX*.25,z:se+R*6.1},G.runDepth=6.1,G.delay=.28;break;case"rebound":G.stand={x:-h.sideX*9.8,z:se+R*15.5},G.run={x:-h.sideX*4.2,z:se+R*10.5},G.delay=.4;break;case"edge":G.stand={x:h.sideX*1.4,z:se+R*20.5},G.run={x:h.sideX*.4,z:se+R*17},G.delay=.2;break;case"crowd":G.stand={x:h.sideX*(6.4+G.seed*3),z:se+R*(7.2+G.seed*3.2)},G.run={x:h.sideX*(1+G.seed*3),z:se+R*(4.8+G.seed)},G.runDepth=5.4,G.delay=.36;break;case"safety":G.stand={x:h.sideX*(5+G.seed*9),z:se+R*(30+G.seed*7)};break;default:G.stand={x:p.pos.x,z:p.pos.z}}},$=z(y,"taker");if($&&O($),y){h.taker=y;const G=$.start||$.stand;y.pos.x=G.x,y.pos.z=G.z,y.vel.x=0,y.vel.z=0,y.facing=Math.atan2(h.ballX,h.ballZ),y.kickCooldown=0,y.frozen=!1}const V=z(b,"short");V&&(h.shortOption=b,O(V));for(const[G,se]of[[C,"near"],[w,"central"],[E,"far"],[L,"rebound"],[k,"edge"],[M,"safety"],[S,"safety"]]){const R=z(G,se);R&&O(R)}I.forEach((G,se)=>{const R=z(G,"crowd",{index:se});R&&O(R)}),h.attackers=[...h.roster.values()].filter(G=>G.p.team===a&&!G.p.isGK),d&&(z(d,"gk"),d.frozen=!1,h.keeper=d);const Z=[...f],Y=this.takeBest(Z,G=>G.rating+(G.role==="DEF"?8:0)),ne=this.takeBest(Z,G=>G.rating+(G.role==="DEF"?8:0)),xe=this.takeBest(Z,G=>G.rating+(G.role==="DEF"?8:0)),Ce=this.takeBest(Z,G=>G.rating),Ge=this.takeBest(Z,G=>G.rating),je=this.takeBest(Z,G=>m(G)-(G.role==="MID"?3:0)),J=this.takeBest(Z,G=>(G.role==="DEF"?6:0)+G.rating*.6),ae=this.takeBest(Z,G=>Zt(G,"shot")*.4+G.rating*.6),ve=Z.shift()||null,de=[...Z],Re=G=>{var se;const R=h.goalZ,T=h.inward;switch(G.role){case"mark":G.stand=((se=G.mark)==null?void 0:se.stand)||{x:0,z:R+T*8};break;case"zonal":G.stand={x:G.side*3.6*h.sideX,z:R+T*G.depth};break;case"post":G.stand={x:h.sideX*3.05,z:R+T*1.1};break;case"shortdef":G.stand={x:h.ballX-h.sideX*5.6,z:h.ballZ+T*6.4};break;case"edgedef":G.stand={x:h.sideX*.6,z:R+T*19.5};break;case"highdef":G.stand={x:h.sideX*4,z:R+T*31};break;case"gk":G.stand={x:0,z:R+T*1.5};break;default:G.stand={x:0,z:R+T*10}}},Ae=z(Y,"mark",{mark:h.roster.get(C)||null}),Ve=z(ne,"mark",{mark:h.roster.get(w)||null}),Xe=z(xe,"mark",{mark:h.roster.get(E)||null}),Ne=z(Ce,"zonal",{side:1,depth:7.2}),U=z(Ge,"zonal",{side:-1,depth:7.8}),Tt=z(je,"shortdef"),Ke=z(J,"post"),qe=z(ae,"edgedef"),Te=z(ve,"highdef");for(const G of[Ae,Ve,Xe,Ne,U,Tt,Ke,qe,Te])G&&Re(G);for(const G of de){const se=z(G,"zonal",{side:G.pos.x>=0?1:-1,depth:8.5+G.pos.x%3});se&&Re(se)}h.defenders=[...h.roster.values()].filter(G=>G.p.team!==a&&!G.p.isGK),h.markers=h.defenders.filter(G=>G.mark),h.keeperRole=d?h.roster.get(d):null,h.receiver=((r=h.roster.get(w))==null?void 0:r.p)||((o=h.roster.get(C))==null?void 0:o.p)||((l=h.roster.get(E))==null?void 0:l.p)||y;for(const G of h.roster.values()){const se=G.p;if(!se||!se.active||se===h.taker)continue;const R=G.stand;if(!R)continue;let T=R.x,W=R.z;se.team!==a&&!se.isGK&&(c=G.mark)!=null&&c.stand&&(T=G.mark.stand.x*.97,W=G.mark.stand.z-h.inward*1.05),se.pos.x=D(T,-34+.8,N.halfWidth-.8),se.pos.z=D(W,-52.5+.8,N.halfLength-.8),se.vel.x=0,se.vel.z=0,se.mvx=0,se.mvz=0,se.facing=Math.atan2(h.ballX-se.pos.x,h.ballZ-se.pos.z)}},selectCornerDelivery(a){var s,r;const o=this.corner;!o||!o.userAim||!Xa[a]||o.phase!=="aim"&&o.phase!=="preview"||(o.delivery=a,a==="short"?o.tactic="short":o.tactic==="short"&&(o.tactic="near"),o.phase="aim",o.phaseTime=0,o.previewTimer=0,this.updateCornerAim(),this.updateCornerAimVisual(!0),this.syncCornerChips(),(r=(s=this.audio)==null?void 0:s.click)==null||r.call(s))},selectCornerTactic(a){var s,r;const o=this.corner;!o||!o.userAim||!Ka[a]||o.phase!=="aim"&&o.phase!=="preview"||(o.tactic=a,a==="short"?o.delivery="short":o.delivery==="short"&&(o.delivery="inswing"),o.phase="aim",o.phaseTime=0,o.previewTimer=0,this.updateCornerAim(),this.updateCornerAimVisual(!0),this.syncCornerChips(),(r=(s=this.audio)==null?void 0:s.click)==null||r.call(s))},updateCornerAim(){const a=this.corner;if(!a)return;const s=Ka[a.tactic]||Ka.centre,r=D(a.aim.power,.12,1),o=D(a.aim.nx,-1,1);if(a.tactic==="short"){const d=a.shortOption;a.aimTarget={x:d?d.pos.x:a.ballX-a.sideX*4.4,z:d?d.pos.z:a.ballZ+a.inward*4.8};return}const l=D(s.bias+o*.62,0,1),c=a.sideX*5.4,h=-a.sideX*6.4;let u=We(c,h,l);a.tactic==="edge"&&(u=a.sideX*.8+o*5.5),a.tactic==="crowd"&&(u=a.sideX*1.2+o*6.2);const f=D(s.depth+(r-.64)*6.4,3.4,21);a.aimTarget={x:D(u,-20.16+1.6,N.boxHalfWidth-1.6),z:a.goalZ+a.inward*f}},cornerKickSolution(a,s,r,o,l){const c=Xa[r]||Xa.inswing,h=this.corner,u=s.x-a.x,f=s.z-a.z,d=Math.max(2,Math.hypot(u,f)),v=c.speed*(.84+D(o,.1,1)*.5),x=D(d/Math.max(8,v),.45,2.25),m=u/d,g=f/d,y=g,_=-m,b=0-s.x,C=h.goalZ-s.z,w=y*b+_*C>=0?1:-1,E=D((c.curve||0)+(l||0)*.8,-1.5,1.5)*4*w,L=.08,k=d*L/(1-Math.exp(-L*x));let M=c.height;h.tactic==="edge"&&(M=Math.min(M,1.35)),o<.26&&(M=Math.max(.45,M*.75));const S=(M-Jt+.5*zs*x*x)/x;return{vx:m*k+y*(-E/x),vz:g*k+_*(-E/x),vy:D(S,1.2,20),curve:{x:y*(2*E)/(x*x),z:_*(2*E)/(x*x)},T:x,speed:v,dist:d}},updateCorner(a){const s=this.corner;if(s){if(s.time+=a,s.phaseTime+=a,this.state!=="corner"){this.finishCorner(this.state==="goal"?"goal":"dead");return}for(const r of this.players)r.active&&(r.aerialCooldown=Math.max(0,(r.aerialCooldown||0)-a));s.phase==="setup"?this.updateCornerSetup(a):s.phase==="aim"?this.updateCornerAimPhase(a):s.phase==="preview"?this.updateCornerPreviewPhase(a):s.phase==="runup"?this.updateCornerRunup(a):(s.phase==="delivery"||s.phase==="short")&&this.updateCornerLive(a),this.corner&&(this.updateCornerAimVisual(!1),this.updateCornerHud())}},cornerIdleAI(a,s=!0){const r=this.corner;for(const o of this.players)if(o.active){if(s&&o===r.taker){o.mvx=0,o.mvz=0,o.vel.x*=.82,o.vel.z*=.82,o.speedNow=0;continue}this.thinkCornerAI(o,a),this.stepPlayer(o,a)}this.faceCornerSetPiece()},faceCornerSetPiece(){const a=this.corner;if(!a||!a.taker)return;const s=a.aimTarget||{x:0,z:a.goalZ+a.inward*8};a.taker.facing=Math.atan2(s.x-a.taker.pos.x,s.z-a.taker.pos.z)},updateCornerSetup(a){const s=this.corner;this.cornerIdleAI(a),!s.placed&&s.phaseTime>.5&&(s.placed=!0,this.setCornerAction(s.taker,"place",.85)),s.phaseTime>=K0&&this.beginCornerAim()},beginCornerAim(){const a=this.corner;a&&(a.phase="aim",a.phaseTime=0,a.aimVisible=!0,this.hud.el.hud.classList.add("corner-mode"),this.hud.el.hud.classList.remove("corner-live"),a.userAim?(this.duel?this.setControl(a.taker,a.team===1?1:0):this.setControl(a.taker),this.setSwipeCornerEnabled(!0),this.hud.hint("SWIPE TO CROSS · PICK A DELIVERY")):(a.aiPlan=this.planAiCorner(),this.applyAiCornerPlan(a.aiPlan)),this.showCornerChrome(),this.updateCornerAim(),this.updateCornerAimVisual(!0),this.syncCornerChips())},updateCornerAimPhase(a){this.cornerIdleAI(a),!this.corner.userAim&&this.corner.phaseTime>=Y0&&this.lockCornerAim(!0)},lockCornerAim(a=!1){var s,r;const o=this.corner;if(!(!o||o.phase!=="aim"&&o.phase!=="preview")){if(a){const l=o.aiPlan||this.planAiCorner();this.applyAiCornerPlan(l)}o.phase="preview",o.phaseTime=0,o.previewTimer=a?j0:q0,o.aimVisible=!0,this.setSwipeCornerEnabled(!1),this.updateCornerAim(),this.updateCornerAimVisual(!0),(r=(s=this.audio)==null?void 0:s.click)==null||r.call(s),this.updateCornerHud()}},updateCornerPreviewPhase(a){const s=this.corner;this.cornerIdleAI(a),s.previewTimer-=a,s.previewTimer<=0&&this.beginCornerRunup()},cancelCornerAim(){var a,s;const r=this.corner;!r||!r.userAim||r.phase!=="preview"||(r.phase="aim",r.phaseTime=0,r.previewTimer=0,r.aimVisible=!0,this.setSwipeCornerEnabled(!0),(s=(a=this.audio)==null?void 0:a.click)==null||s.call(a),this.updateCornerAimVisual(!0),this.updateCornerHud())},beginCornerRunup(){var a,s;const r=this.corner;!r||!r.taker||(r.phase="runup",r.phaseTime=0,r.aimVisible=!1,r.inputLocked=!0,r.runFrom={x:r.taker.pos.x,z:r.taker.pos.z},r.runTo={x:r.ballX-r.sideX*.22,z:r.ballZ+r.inward*.16},this.setSwipeCornerEnabled(!1),this.updateCornerAimVisual(!1),this.hud.hint(""),(s=(a=this.audio)==null?void 0:a.crowdHush)==null||s.call(a))},updateCornerRunup(a){const s=this.corner,r=s.taker;if(this.cornerIdleAI(a),!r){this.launchCornerDelivery();return}const o=D(s.phaseTime/$0,0,1),l=Q0(o);r.pos.x=We(s.runFrom.x,s.runTo.x,l),r.pos.z=We(s.runFrom.z,s.runTo.z,l),r.vel.x=0,r.vel.z=0,r.speedNow=4.5+o*5,r.runPhase+=a*(7+o*9),r.facing=Math.atan2(s.aimTarget.x-r.pos.x,s.aimTarget.z-r.pos.z),o>=1&&(s.delivery==="short"||s.tactic==="short"?this.launchShortCorner():this.launchCornerDelivery())},launchCornerDelivery(){const a=this.corner;if(!a||!a.taker)return;const s=a.aimTarget||{x:0,z:a.goalZ+a.inward*8};this.launchCornerCross(a.taker,s,a.delivery,a.aim.power,a.aim.curve,{fromCorner:!0})},launchCornerCross(a,s,r,o,l,c={}){var h,u,f,d;const v=this.corner;if(!v||!a)return;const x=c.fromCorner?{x:v.ballX,z:v.ballZ}:{x:a.pos.x,z:a.pos.z},m=this.cornerKickSolution(x,s,r,o,l),g=this.ball;g.owner=null,g.x=x.x,g.z=x.z,g.y=Jt,g.vx=m.vx,g.vz=m.vz,g.vy=m.vy,g.curve=m.curve,g.ignore=a,g.ignoreTimer=.36,a.kickCooldown=.36,this.lastTouch={team:a.team,player:a},this.setCornerAction(a,"kick",.32),(u=(h=this.audio)==null?void 0:h.kick)==null||u.call(h,.55+o*.45),(d=(f=this.audio)==null?void 0:f.crowdSurge)==null||d.call(f,.55),v.phase="delivery",v.phaseTime=0,v.liveTime=0,v.delivered=!0,v.deliveredAt=this.time,v.flightT=m.T,v.zoneReached=!1,v.touched=!1,v.settleTimer=0,v.result="",v.aimTarget={...s},v.kickSolution=m,v.gkPlan=this.planCornerKeeper(s),v.aimVisible=!1,v.inputLocked=!1,this.updateCornerAimVisual(!1),this.hud.el.hud.classList.remove("corner-mode"),this.hideCornerChrome(),this.duel?(this.setControl(this.nearestPlayerToBall(0,!1),0),this.setControl(this.nearestPlayerToBall(1,!1),1)):a.team===0&&v.userAim?v.receiver&&v.receiver.active?this.setControl(v.receiver):this.setControl(this.nearestPlayerToBall(0,!1)):a.team!==0&&this.setControl(this.nearestPlayerToBall(0,!1)),this.hud.commentary(r==="low"?"Driven low into the box!":r==="loop"?"High ball hanging in the air.":r==="driven"?"Whipped in with pace!":"Cross comes in.")},launchShortCorner(){var a,s,r,o;const l=this.corner,c=l.taker,h=l.shortOption;if(!c||!h){this.launchCornerDelivery();return}const u=this.ball;u.owner=null,u.x=l.ballX,u.z=l.ballZ,u.y=Jt;const f=h.pos.x-u.x,d=h.pos.z-u.z,v=Math.hypot(f,d)||1,x=9.5+D(l.aim.power,.15,1)*5;u.vx=f/v*x,u.vz=d/v*x,u.vy=.4,u.curve=null,u.ignore=c,u.ignoreTimer=.26,c.kickCooldown=.3,this.passTarget=h,this.passTimer=3.2,this.lastPass={team:c.team,player:c,timer:2.8},this.stats.passes[l.team]++,this.lastTouch={team:c.team,player:c},this.setCornerAction(c,"kick",.3),(s=(a=this.audio)==null?void 0:a.kick)==null||s.call(a,.4),(o=(r=this.audio)==null?void 0:r.call)==null||o.call(r),l.phase="short",l.phaseTime=0,l.liveTime=0,l.delivered=!0,l.deliveredAt=this.time,l.shortAt=this.time,l.shortReceiver=h,l.result="",l.touched=!1,l.aimVisible=!1,l.inputLocked=!1,this.updateCornerAimVisual(!1),this.hud.el.hud.classList.remove("corner-mode"),this.hideCornerChrome(),this.setSwipeCornerEnabled(!1),this.duel?(this.setControl(this.nearestPlayerToBall(0,!1),0),this.setControl(this.nearestPlayerToBall(1,!1),1),this.hud.el.hud.classList.add("corner-live")):c.team===0&&l.userAim?(this.setControl(h),this.hud.hint("SHORT CORNER · DRIBBLE OR CROSS"),this.hud.el.hud.classList.add("corner-live")):this.setControl(this.nearestPlayerToBall(0,!1)),this.hud.commentary("Short corner taken — the box is still loading.")},updateCornerLive(a){var s,r;const o=this.corner;if(!o)return;o.liveTime+=a,o.phaseTime+=a;const l=this.controlled;if(l&&this.input.pressed.has("shoot")&&!this.ball.owner&&this.ball.y>.7&&this.ball.y<2.9&&he(l.pos.x,l.pos.z,this.ball.x,this.ball.z)<2.4&&(this.input.consume("shoot"),this.resolveCornerAerial(l,[],!0)),o.phase==="delivery"&&this.tryCornerAerial(),this.corner!==o||(this.simulate(a),this.corner!==o))return;if(this.state!=="corner"){this.finishCorner(this.state==="goal"?"goal":"dead");return}const c=this.ball;o.phase==="delivery"&&(!o.zoneReached&&o.liveTime>.2&&he(c.x,c.z,o.aimTarget.x,o.aimTarget.z)<3.2&&c.y>.15&&c.y<3.2&&(o.zoneReached=!0,o.result||(o.result="delivered"),(r=(s=this.audio)==null?void 0:s.crowdSurge)==null||r.call(s,.8),this.hud.commentary("Good ball into the danger area!")),o.gkPlan||(o.gkPlan=this.planCornerKeeper(o.aimTarget)));const h=c.owner;h?(o.touched||(o.touched=!0,o.result||(o.result=h.team===o.team?"retained":"cleared")),o.phase==="short"?(h.team!==o.team?(o.settleTimer+=a,o.settleTimer>.55&&this.finishCorner("lost")):o.settleTimer=0,o.liveTime>Nl&&this.finishCorner("short-timeout")):(o.settleTimer+=a,o.settleTimer>Z0&&this.finishCorner("settled"))):(o.settleTimer=0,o.phase==="delivery"&&o.liveTime>o.flightT+4.2&&this.finishCorner("timeout"),o.phase==="short"&&o.liveTime>Nl&&this.finishCorner("short-timeout")),o.liveTime>J0&&this.finishCorner("timeout")},aiShortCross(a){const s=this.corner;if(!s||s.phase!=="short"||this.ball.owner!==a)return;const r=this.bestCornerTarget(),o=s.delivery==="short"?"inswing":s.delivery==="driven"?"driven":"inswing";this.launchCornerCross(a,r,o,.72,s.aim.curve,{fromCorner:!1}),s.aimTarget={...r},this.hud.commentary("Cross comes in from the short corner!")},bestCornerTarget(){const a=this.corner;let s=null,r=-1/0;for(const c of a.attackers){if(!c.p.active||c.p===a.taker||!["near","central","far","crowd"].includes(c.role))continue;const h=Zt(c.p,"aerial")+(c.role==="central"?6:0)-Math.abs(c.p.pos.x)*.4;h>r&&(r=h,s=c.p)}const o=s||a.receiver||a.taker,l=D((o.pos.z-a.goalZ)*a.inward+.8,3.4,10.5);return{x:D(o.pos.x+ot(-1.2,1.2),-7.5,7.5),z:a.goalZ+a.inward*l}},cornerShortCross(){const a=this.corner;if(!a||a.phase!=="short")return;const s=this.ball.owner;if(!s||s.team!==a.team)return;const r=this.bestCornerTarget();this.launchCornerCross(s,r,"inswing",.72,a.aim.curve,{fromCorner:!1}),a.aimTarget={...r},this.hud.hint("")},tryCornerAerial(){const a=this.corner,s=this.ball;if(!a||a.phase!=="delivery"||s.owner||a.liveTime<.12||this.time-a.lastAerialAt<.3||s.y<.55||s.y>2.95||Math.hypot(s.vx,s.vz)<2)return;const r=[];for(const l of this.players){if(!l.active||l.isGK||l===s.ignore||l.aerialCooldown>0||l.stun>.1)continue;const c=he(l.pos.x,l.pos.z,s.x,s.z),h=l.isGK?1.8:1.55;if(c>h)continue;const u=l.isGK?2.95:2.9;if(s.y>u||!((s.x-l.pos.x)*s.vx+(s.z-l.pos.z)*s.vz>-2))continue;const f=l.team===a.team,d=Zt(l,"aerial")/100+(f?.06:0)-c*.22+(l.cornerRole==="central"||l.cornerRole==="near"?.08:0)-(l.isGK?.2:0);r.push({p:l,d:c,score:d,attacking:f})}if(!r.length)return;r.sort((l,c)=>c.score-l.score);const o=r[0].p;for(const l of r)l.p!==o&&l.d<2.1&&(l.p.aerialCooldown=.8,this.setCornerAction(l.p,"jump",.65));a.lastAerialAt=this.time,o.aerialCooldown=.85,this.resolveCornerAerial(o,r,!1)},resolveCornerAerial(a,s,r=!1){var o,l;const c=this.corner;if(!c)return;this.ball;const h=Zt(a,"aerial"),u=this.nearestOpponentDist(a),f=D(.34+h/190+(a.controlled?.12:0)-u*.035+(r?.5:0),.17,.94);if(!r&&Math.random()>f){this.setCornerAction(a,"jump",.65),(l=(o=this.audio)==null?void 0:o.thud)==null||l.call(o,.35);return}if(c.touched=!0,a.team!==c.team){this.clearCornerBall(a);return}this.finishCornerAerial(a)},clearCornerBall(a){var s,r,o,l;const c=this.corner,h=this.ball,u=Math.sign(a.pos.x||c.sideX)||1,f=14+Zt(a,"aerial")*.06;h.x=a.pos.x+u*.35,h.z=a.pos.z+c.inward*.35,h.y=Math.max(1.35,h.y),h.vx=u*f*.72,h.vz=c.inward*f*.95,h.vy=3.2+Math.random()*2.2,h.curve=null,h.ignore=a,h.ignoreTimer=.3,this.lastTouch={team:a.team,player:a},this.setCornerAction(a,"header",.55),(r=(s=this.audio)==null?void 0:s.header)==null||r.call(s,.8),(l=(o=this.audio)==null?void 0:o.crowdSurge)==null||l.call(o,.35),(!c.result||c.result==="delivered")&&(c.result="cleared"),this.hud.commentary(`${a.name} heads it clear!`)},finishCornerAerial(a){var s,r,o,l;const c=this.corner,h=this.ball,u=Zt(a,"aerial"),f=this.nearestOpponentDist(a),d=h.y;let v="jumping";d<1.2&&a.speedNow>4.2?v="diving":d<1.55&&Math.random()<.35?v=Math.random()<.5?"volley":"halfvolley":d<1.95&&(v="standing"),d>1.7&&u>82&&Math.random()<.1&&(v="bicycle"),a.cornerRole==="near"&&v!=="diving"&&Math.random()<.28&&(v="flick");const x=N.goalHalfWidth-.45;let m=-Math.sign(a.pos.x||1)*ot(.9,x),g=ot(.55,2.05);v==="flick"&&(m=-Math.sign(a.pos.x||1)*ot(2.2,x),g=ot(.45,1.55)),v==="bicycle"&&(m=-Math.sign(a.pos.x||1)*ot(1.2,x),g=ot(.5,1.85));const y=D(.22+u/160+a.rating/520-f*.05-(v==="bicycle"?.2:0),.12,.9),_=1-y;m+=ot(-1,1)*_*7,g+=ot(-1,1)*_*2.2,m=D(m,-x-1.6,x+1.6);const b=(v==="bicycle"?23:v==="diving"?21:v==="volley"?25:v==="flick"?17:22)+u*.05,C=Math.hypot(m-h.x,c.goalZ-h.z),w=D(C/b,.22,.85),E=D(h.y+(v==="volley"?-.2:.06),.55,2.3);h.x=a.pos.x+Math.sin(a.facing)*.34,h.z=a.pos.z+Math.cos(a.facing)*.34,h.y=E;const L=m-h.x,k=c.goalZ-h.z,M=Math.hypot(L,k)||1;h.vx=L/M*b,h.vz=k/M*b,h.vy=D((g-E+.5*zs*w*w)/w,-2.5,12),h.curve=null,h.ignore=a,h.ignoreTimer=.28,this.stats.shots[a.team]++;const S=D(y*D(1-f/12,.25,1),.02,.85);this.stats.xg[a.team]+=S,this.lastShot={team:a.team,player:a,time:this.time,quality:S,header:!0},this.lastTouch={team:a.team,player:a},this.setCornerAction(a,v,.7),(r=(s=this.audio)==null?void 0:s.header)==null||r.call(s,1),(l=(o=this.audio)==null?void 0:o.crowdSurge)==null||l.call(o,1);const I={bicycle:"Bicycle kick!",diving:"Diving header!",volley:"Volleyed at goal!",halfvolley:"Half-volley!",flick:"Flicked towards goal!",standing:"Header at goal!",jumping:"Up and at it!"};this.hud.commentary(`${a.name} — ${I[v]||"Header!"}`),c.result="shot",c.scorer=a,c.headerType=v},planCornerKeeper(a){var s;const r=this.corner;if(!r.keeper)return null;const o=he(0,r.goalZ,a.x,a.z),l=D(((s=this.diff)==null?void 0:s.gk)??.9,.5,1.2),c=Math.random()<D(.2+l*.25-o*.006,.08,.45);return{claim:c,punch:c&&Math.random()<.42,depth:c?D(6-o*.12,1.8,4.2):1.4+Math.random()*.5,delay:.12+Math.random()*.22}},thinkCornerGK(a,s){var r;const o=this.corner,l=this.ball;if(l.owner===a){a.mvx=0,a.mvz=0;return}const c=o.gkPlan;let h=D((((r=o.aimTarget)==null?void 0:r.x)||0)*.2,-2.4,2.4),u=o.goalZ+o.inward*1.55,f=!1;if(o.phase==="delivery"||o.phase==="short"){const d=(l.z-o.goalZ)*o.inward,v=this.projectCornerBallAtDepth(D(d,1,14));v&&(h=D(v.x*.55,-3.2,3.2)),d<20&&(h=D(l.x+l.vx*.2,-3.3,3.3),u=o.goalZ+o.inward*(c!=null&&c.claim?c.depth:1.7),f=d<14),l.y>1.3&&o.liveTime-(c?.delay||0)>.2&&d<12&&(f=!0)}this.steer(a,h,u,.95,f)},projectCornerBallAtDepth(a){const s=this.corner,r=this.ball;if(!s)return null;const o=s.goalZ+s.inward*a;if(Math.abs(r.vz)<.4)return null;const l=(o-r.z)/r.vz;if(!Number.isFinite(l)||l<0||l>3)return null;const c=r.curve||{x:0};return{x:D(r.x+r.vx*l+.5*c.x*l*l,-34,N.halfWidth),z:o,y:r.y+r.vy*l-.5*zs*l*l,t:l}},thinkCornerAI(a,s){const r=this.corner;if(!r||!a.active||a.frozen)return;const o=r.roster.get(a);if(!o)return;if(a.isGK){this.thinkCornerGK(a,s);return}if(a.stun>.05||a.slide>0){a.mvx=0,a.mvz=0;return}const l=this.ball,c=r.phase;let h=a.pos.x,u=a.pos.z,f=!1,d=.9;if(a===r.taker){if(c==="setup"||c==="aim"||c==="preview"){this.steer(a,o.stand.x,o.stand.z,.6,!1);return}if(c==="runup")return;if(c==="short"&&l.owner===a){r.oneTwo=!0,this.aiShortCross(a);return}if(c==="short"){this.steer(a,r.sideX*8,r.goalZ+r.inward*17,.8,!1);return}this.steer(a,r.sideX*10,r.goalZ+r.inward*20,.75,!1);return}if(a.team===r.team)if(o.role==="short")if(c==="short"&&l.owner===a){const v=this.nearestOpponentDist(a);if(this.time-r.shortAt>1.15||v<1.15){this.aiShortCross(a);return}h=r.sideX*15,u=r.goalZ+r.inward*11,f=!0,d=1}else h=o.stand.x,u=o.stand.z,d=.75;else if(c==="setup")h=o.stand.x,u=o.stand.z,f=!0,d=1;else if(c==="aim"||c==="preview")h=o.stand.x+Math.sin(r.time*1.4+o.seed*8)*.35,u=o.stand.z+Math.cos(r.time*1.2+o.seed*5)*.28,d=.42;else if(c==="delivery"||c==="short")if(o.role==="safety")h=o.stand.x,u=o.stand.z,d=.7;else if(o.role==="edge"){const v=l.z*r.inward>r.goalZ*r.inward+14;h=v?r.sideX*.6:o.stand.x,u=v?r.goalZ+r.inward*16.5:o.stand.z,d=.85}else if(o.role==="rebound")h=l.owner?-r.sideX*3.5:o.run.x,u=l.owner?r.goalZ+r.inward*11:o.run.z,d=.9;else if(r.liveTime>=(o.delay||0)){const v=o.run||o.stand,x=r.aimTarget||v;let m=x.x,g=x.z;o.role==="near"?(m+=r.sideX*.9,g+=r.inward*.75):o.role==="far"?(m-=r.sideX*1.15,g+=r.inward*.55):o.role==="central"?g+=r.inward*.12:o.role==="crowd"&&(m+=r.sideX*(.35+o.seed*1.5),g+=r.inward*(.25+o.seed*.9));const y=D(r.liveTime/Math.max(.55,r.flightT*.72),0,1);h=We(v.x,D(m,-34+1.2,N.halfWidth-1.2),y),u=We(v.z,D(g,-52.5+.8,N.halfLength-.8),y),f=!0,d=1,!l.owner&&l.y<.75&&(l.z-r.goalZ)*r.inward<15&&(h=l.x,u=l.z)}else h=o.stand.x,u=o.stand.z,d=.55;else h=o.stand.x,u=o.stand.z;else if(o.role==="mark"&&o.mark&&o.mark.p.active){const v=o.mark.p;if(h=v.pos.x*.9,u=v.pos.z-r.inward*1.05,r.phase==="delivery"&&r.liveTime>.2){const x=this.projectCornerBallAtDepth(D((v.pos.z-r.goalZ)*r.inward,2,12));x&&(h=We(h,x.x,.28),u=We(u,v.pos.z,.5))}d=.95,f=r.phase==="delivery"}else if(o.role==="shortdef")r.phase==="short"&&l.owner&&l.owner.team===r.team?(h=l.x,u=l.z,f=!0,d=1):(h=o.stand.x,u=o.stand.z,d=.9);else if(o.role==="post")h=o.stand.x,u=o.stand.z,d=.85;else if(o.role==="edgedef"){const v=l.z*r.inward>r.goalZ*r.inward+12;h=v?l.x*.8:o.stand.x,u=v?r.goalZ+r.inward*17:o.stand.z,d=.9}else o.role==="zonal"?(h=o.stand.x+D(l.x*.16,-2.2,2.2),u=o.stand.z,!l.owner&&l.y<.8&&he(a.pos.x,a.pos.z,l.x,l.z)<7&&(h=l.x,u=l.z,f=!0),d=.85):(h=o.stand.x,u=o.stand.z,d=.7);h=D(h,-34+1.2,N.halfWidth-1.2),u=D(u,-52.5+.8,N.halfLength-.8),this.steer(a,h,u,d,f)},faceCornerTakerToBall(){const a=this.corner;!a||!a.taker||(a.taker.facing=Math.atan2(a.ballX-a.taker.pos.x,a.ballZ-a.taker.pos.z))},planAiCorner(){const a=this.corner,s={near:.3,far:.26,centre:.22,edge:.12,crowd:.1};let r="near",o=Math.random();for(const u of Object.keys(s))if(o-=s[u],o<=0){r=u;break}const l=a.attackers.find(u=>u.role==="central");l&&Zt(l.p,"aerial")>86&&(r="centre");const c={inswing:.34,outswing:.2,driven:.16,loop:.14,low:.1,short:.06};let h="inswing";o=Math.random();for(const u of Object.keys(c))if(o-=c[u],o<=0){h=u;break}return r==="edge"&&(h=Math.random()<.5?"driven":"low"),r==="crowd"&&(h=Math.random()<.3?"loop":"inswing"),a.attackers.find(u=>u.role==="short"),{tactic:r,delivery:h,power:h==="short"?ot(.45,.7):ot(.6,.92),nx:ot(-.42,.42),curve:ot(-.22,.22)}},applyAiCornerPlan(a){const s=this.corner;!s||!a||(s.tactic=a.tactic,s.delivery=a.delivery,s.aim.power=a.power,s.aim.nx=a.nx,s.aim.curve=a.curve,this.updateCornerAim(),this.updateCornerAimVisual(!0),this.syncCornerChips())},updateCornerCamera(a){const s=this.corner,r=this.camera;if(!s)return;const o=(r.aspect||1)>=1.2,l=this.ball;let c,h,u;if(s.phase==="delivery"||s.phase==="short"){const d=D(s.liveTime/Math.max(.75,s.flightT),0,1.5),v=D(l.x,-34,N.halfWidth),x=D(l.z,-52.5,N.halfLength),m=s.goalZ+s.inward*8;h=new P(We(v,0,.52),D(1.55+l.y*.24,1.55,3.4),We(x,m,.48)),c=new P(s.sideX*(N.halfWidth+15),22.5-Math.min(1.5,d*1.2),s.goalZ+s.side*8),u=(o?47:50)-Math.min(2.2,d*1.8)}else{const d=s.aimTarget||{x:0,z:s.goalZ+s.inward*8},v=o?16.5:15.5,x=o?8.8:10.2,m=o?.22:.28,g=o?.3:.36;c=new P(s.ballX+s.sideX*v,x,s.ballZ+s.side*v*.34+s.inward*2.4),h=new P(We(s.ballX,d.x,m),1.15,We(s.ballZ,d.z,g)),u=o?s.phase==="runup"?44:46:s.phase==="runup"?48:50}Math.abs(r.fov-u)>.05&&(r.fov+=(u-r.fov)*(1-Math.exp(-4.4*a)),r.updateProjectionMatrix());const f=s.phase==="delivery"||s.phase==="short"?5.2:3.4;this.camPos.lerp(c,1-Math.exp(-f*a)),this.camLook.lerp(h,1-Math.exp(-(f+1.6)*a)),r.position.copy(this.camPos),r.up.set(0,1,0),r.lookAt(this.camLook)},ensureCornerVisuals(){if(this.cornerVisual)return this.cornerVisual;const a=new ct;a.visible=!1,this.scene.add(a);const s=13041477,r=new yt({color:s,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,side:Ut}),o=new le(new za(.62,.82,40),r);o.rotation.x=-Math.PI/2,o.renderOrder=9,a.add(o);const l=new le(new ka(.58,32),new yt({color:s,transparent:!0,opacity:.16,depthTest:!1,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.01,l.renderOrder=8,a.add(l);const c=new le(new Et(.055,.03,2.1,10),new yt({color:s,transparent:!0,opacity:.35,depthWrite:!1}));c.position.y=1.05,a.add(c);const h=new Mt;h.setAttribute("position",new Wt(new Float32Array(32*3),3));const u=new Wn(h,new $s({color:s,transparent:!0,opacity:.7,depthTest:!1}));u.renderOrder=7,this.scene.add(u);const f=new Mt;f.setAttribute("position",new Wt(new Float32Array(6),3));const d=new Wn(f,new $s({color:s,transparent:!0,opacity:.4,depthTest:!1}));return d.renderOrder=7,this.scene.add(d),this.cornerVisual={group:a,ring:o,disc:l,beam:c,mat:r,line:u,lineGeo:h,drop:d,dropGeo:f},this.cornerVisual},updateCornerAimVisual(a){const s=this.corner,r=this.ensureCornerVisuals(),o=!!(s&&s.aimVisible&&(s.phase==="aim"||s.phase==="preview")&&s.aimTarget);if(r.group.visible=o,r.line.visible=o,r.drop.visible=o,!o)return;const l=s.aimTarget,c=1+Math.sin(this.time*4.6)*.06;r.group.position.set(l.x,.03,l.z),r.ring.scale.setScalar(c),r.ring.rotation.z=this.time*.7,r.mat.opacity=.7+Math.sin(this.time*4.2)*.2;const h=this.cornerKickSolution({x:s.ballX,z:s.ballZ},l,s.delivery,s.aim.power,s.aim.curve),u=[],f=31;for(let v=0;v<=f;v++){const x=v/f*h.T*1.04,m=s.ballX+h.vx*x+.5*h.curve.x*x*x,g=s.ballZ+h.vz*x+.5*h.curve.z*x*x,y=Jt+h.vy*x-.5*zs*x*x;u.push(new P(m,Math.max(.03,y),g))}r.lineGeo.setFromPoints(u),r.lineGeo.attributes.position.needsUpdate=!0;const d=r.dropGeo.attributes.position;d.setXYZ(0,l.x,.03,l.z),d.setXYZ(1,l.x,2,l.z),d.needsUpdate=!0},setCornerAction(a,s,r){a&&(a.actionName=s,a.actionDur=r,a.actionT=r)},updateCornerVisuals(a){for(const s of this.players){if(!s.active)continue;if(s.actionT>0&&(s.actionT=Math.max(0,s.actionT-a)),!s.actionName||s.actionT<=0){s.actionName&&s.actionT<=0&&(s.actionName=null);continue}const r=s.visual,o=D(1-s.actionT/Math.max(.001,s.actionDur),0,1),l=Math.sin(o*Math.PI),c=D(o*7,0,1),h=(u,f,d)=>{u.rotation[f]+=d*c};switch(s.actionName){case"place":r.root.position.y-=.2*l,h(r.body,"x",.72*l),h(r.armL,"x",.35*l),h(r.armR,"x",.35*l);break;case"jump":{r.root.position.y+=.6*l,h(r.armL,"x",-2.1*l),h(r.armR,"x",-2.1*l),h(r.armL,"z",.35*l),h(r.armR,"z",-.35*l),h(r.legL,"x",.5*l),h(r.legR,"x",-.5*l),h(r.body,"x",.18*l);break}case"standing":case"header":case"flick":{r.root.position.y+=.32*l,h(r.body,"x",.55*l),h(r.head,"x",.5*l),h(r.armL,"x",.9*l),h(r.armR,"x",.9*l),h(r.legL,"x",.25*l),h(r.legR,"x",-.25*l);break}case"diving":{r.root.position.y+=.38*l,h(r.body,"x",1.05*l),h(r.armL,"x",1.2*l),h(r.armR,"x",1.2*l),h(r.legL,"x",-.5*l),h(r.legR,"x",-.8*l);break}case"bicycle":{r.root.position.y+=.95*l,h(r.body,"x",2.3*l),h(r.legL,"x",1.1*l),h(r.legR,"x",1.5*l),h(r.armL,"x",1.4*l),h(r.armR,"x",1.4*l);break}case"volley":case"halfvolley":{r.root.position.y+=.22*l,h(r.body,"x",-.18*l),h(r.legR,"x",-1.5*l),h(r.legL,"x",.4*l),h(r.armL,"x",.7*l),h(r.armR,"x",-.4*l);break}case"catch":{r.root.position.y-=.12*l,h(r.body,"x",.35*l),h(r.armL,"x",-2.3*l),h(r.armR,"x",-2.3*l),h(r.armL,"z",.3*l),h(r.armR,"z",-.3*l),h(r.legL,"x",.2*l),h(r.legR,"x",.2*l);break}case"punch":{r.root.position.y+=.18*l,h(r.armR,"x",-2.6*l),h(r.armL,"x",-1.2*l),h(r.body,"x",-.12*l),h(r.legL,"x",.3*l),h(r.legR,"x",-.2*l);break}case"kick":{r.root.position.y+=.04*l,h(r.legR,"x",-1.35*l),h(r.legL,"x",.25*l),h(r.armL,"x",.8*l),h(r.armR,"x",-.45*l),h(r.body,"x",.06*l);break}case"celebrate":{r.root.position.y+=.34*Math.abs(Math.sin(o*Math.PI*3)),h(r.armL,"x",-2.6),h(r.armR,"x",-2.6),h(r.armL,"z",.3),h(r.armR,"z",-.3),h(r.body,"z",Math.sin(o*Math.PI*4)*.08);break}}}},celebrateCorner(a,s){let r=0;s&&this.setCornerAction(s,"celebrate",2.2);for(const o of this.players)if(!(!o.active||o.team!==a||o===s)){if(r>=3)break;this.setCornerAction(o,"celebrate",1.7+r*.2),r++}},cacheCornerDom(){if(this.cornerDom)return this.cornerDom;const a=s=>document.getElementById(s);return this.cornerDom={wrap:a("corner"),title:a("cnTitle"),status:a("cnStatus"),pause:a("cnPause"),deliveries:a("cnDeliveries"),tactics:a("cnTactics"),swipe:a("cnSwipe"),guide:a("cnGuide"),readout:a("cnReadout"),aimLabel:a("cnAimLabel"),deliveryLabel:a("cnDeliveryLabel"),powerBar:a("cnPowerBar"),powerVal:a("cnPowerVal"),curveBar:a("cnCurveBar"),curveVal:a("cnCurveVal"),heightBar:a("cnHeightBar"),heightVal:a("cnHeightVal"),cancel:a("cnCancel"),take:a("cnTake"),cross:a("cnCross"),actions:a("cnActions")},this.cornerDom},prepareCornerDom(a){const s=this.cacheCornerDom();if(!s.wrap)return;s.wrap.classList.remove("hidden","defending","live","dragging"),s.wrap.classList.add("corner-ui"),s.title&&(s.title.textContent=this.teams[a].name.toUpperCase()),s.guide&&s.guide.classList.remove("hide");const r=this.corner;s.wrap&&s.wrap.classList.toggle("defending",!(r!=null&&r.userAim)),this.syncCornerChips(),this.bindCornerDom(),r&&this.showCornerChrome()},bindCornerDom(){var a,s,r,o,l,c;if(this.cornerDomBound)return;const h=this.cacheCornerDom();h.swipe&&(this.cornerDomBound=!0,this._onCornerDown=u=>this.cornerPointerDown(u),this._onCornerMove=u=>this.cornerPointerMove(u),this._onCornerUp=u=>this.cornerPointerUp(u),this._onCornerCancel=()=>this.cornerPointerCancel(),this._cornerNoMenu=u=>u.preventDefault(),this._cornerHandlers={deliveries:u=>{const f=u.target.closest("[data-delivery]");f&&this.selectCornerDelivery(f.dataset.delivery)},tactics:u=>{const f=u.target.closest("[data-tactic]");f&&this.selectCornerTactic(f.dataset.tactic)},cancel:()=>this.cancelCornerAim(),take:()=>{const u=this.corner;u&&(u.phase==="aim"?this.lockCornerAim(!1):u.phase==="preview"&&this.beginCornerRunup())},cross:()=>this.cornerShortCross(),pause:()=>{var u;return(u=document.getElementById("pauseBtn"))==null?void 0:u.click()}},h.swipe.addEventListener("pointerdown",this._onCornerDown),h.swipe.addEventListener("pointermove",this._onCornerMove),h.swipe.addEventListener("pointerup",this._onCornerUp),h.swipe.addEventListener("pointercancel",this._onCornerCancel),h.swipe.addEventListener("contextmenu",this._cornerNoMenu),(a=h.deliveries)==null||a.addEventListener("click",this._cornerHandlers.deliveries),(s=h.tactics)==null||s.addEventListener("click",this._cornerHandlers.tactics),(r=h.cancel)==null||r.addEventListener("click",this._cornerHandlers.cancel),(o=h.take)==null||o.addEventListener("click",this._cornerHandlers.take),(l=h.cross)==null||l.addEventListener("click",this._cornerHandlers.cross),(c=h.pause)==null||c.addEventListener("click",this._cornerHandlers.pause),this._cornerKey=u=>this.cornerKey(u),window.addEventListener("keydown",this._cornerKey))},cornerKey(a){const s=this.corner;if(!s||!s.userAim||s.phase!=="aim"&&s.phase!=="preview")return;let r=!0;switch(a.code){case"ArrowLeft":case"KeyA":s.aim.nx=D(s.aim.nx-.12,-1,1);break;case"ArrowRight":case"KeyD":s.aim.nx=D(s.aim.nx+.12,-1,1);break;case"ArrowUp":case"KeyW":s.aim.power=D(s.aim.power+.06,.12,1);break;case"ArrowDown":case"KeyS":s.aim.power=D(s.aim.power-.06,.12,1);break;case"Space":case"Enter":s.phase==="aim"?this.lockCornerAim(!1):this.beginCornerRunup();break;case"Escape":this.cancelCornerAim();break;default:r=!1}r&&(a.preventDefault(),s.phase==="preview"&&(s.phase="aim",s.phaseTime=0,s.previewTimer=0,this.setSwipeCornerEnabled(!0)),this.updateCornerAim(),this.updateCornerAimVisual(!0),this.updateCornerHud())},setSwipeCornerEnabled(a){var s,r,o;const l=this.cornerDom;l&&((s=l.swipe)==null||s.classList.toggle("enabled",!!a),(o=l.guide)==null||o.classList.toggle("show",!!a&&((r=this.corner)==null?void 0:r.phase)==="aim"))},showCornerChrome(){var a,s,r,o,l,c,h;const u=this.cornerDom,f=this.corner;if(!u||!f)return;const d=f.userAim&&(f.phase==="aim"||f.phase==="preview");(a=u.deliveries)==null||a.classList.toggle("hidden",!d),(s=u.tactics)==null||s.classList.toggle("hidden",!d),(r=u.readout)==null||r.classList.toggle("hidden",!f.userAim&&f.phase!=="aim"&&f.phase!=="preview"),(o=u.cancel)==null||o.classList.toggle("hidden",!(d&&f.phase==="preview")),(l=u.take)==null||l.classList.toggle("hidden",!d),(c=u.cross)==null||c.classList.add("hidden"),(h=u.wrap)==null||h.classList.toggle("live",f.phase==="delivery"||f.phase==="short"),d&&this.setSwipeCornerEnabled(!0)},hideCornerChrome(){var a,s,r,o,l,c,h,u,f;const d=this.cornerDom;d&&((a=d.deliveries)==null||a.classList.add("hidden"),(s=d.tactics)==null||s.classList.add("hidden"),(r=d.readout)==null||r.classList.add("hidden"),(o=d.cancel)==null||o.classList.add("hidden"),(l=d.take)==null||l.classList.add("hidden"),(c=d.cross)==null||c.classList.add("hidden"),(h=d.guide)==null||h.classList.remove("show"),(u=d.wrap)==null||u.classList.add("live"),(f=d.wrap)==null||f.classList.remove("dragging"))},syncCornerChips(){var a,s;const r=this.cornerDom,o=this.corner;!r||!o||((a=r.deliveries)==null||a.querySelectorAll("[data-delivery]").forEach(l=>{l.classList.toggle("active",l.dataset.delivery===o.delivery)}),(s=r.tactics)==null||s.querySelectorAll("[data-tactic]").forEach(l=>{l.classList.toggle("active",l.dataset.tactic===o.tactic)}),r.wrap&&r.wrap.classList.toggle("defending",!o.userAim))},updateCornerHud(){const a=this.corner,s=this.cornerDom;if(!a||!s)return;const r=s.status;if(r){let d="",v="";a.phase==="setup"?d="PLAYERS INTO THE BOX":a.phase==="aim"?d=a.userAim?"SWIPE TO CROSS":"THEY ARE SETTING UP":a.phase==="preview"?(d=a.userAim?`AIM LOCKED · ${Math.max(0,a.previewTimer).toFixed(1)}s`:"BALL ON ITS WAY",v="live"):a.phase==="runup"?d="RUN UP":a.phase==="delivery"?d="BALL IN THE BOX":a.phase==="short"&&(d="SHORT CORNER"),a.team!==0&&(a.phase==="aim"||a.phase==="preview"||a.phase==="runup")&&(d="DEFEND THE BOX"),r.textContent=d,r.className=`cn-status ${v}`}const o=s.wrap;if(!o)return;const l=a.phase==="short"&&this.ball.owner&&this.ball.owner.team===a.team&&(a.team===0||a.training);o.classList.toggle("short-live",!!l),s.cross&&s.cross.classList.toggle("hidden",!l),s.cross&&(s.cross.disabled=!l);const c=a.userAim&&(a.phase==="aim"||a.phase==="preview");if(s.deliveries&&s.deliveries.classList.toggle("hidden",!c),s.tactics&&s.tactics.classList.toggle("hidden",!c),s.take&&s.take.classList.toggle("hidden",!c),s.cancel&&s.cancel.classList.toggle("hidden",!(c&&a.phase==="preview")),s.readout&&s.readout.classList.toggle("hidden",!(a.phase==="aim"||a.phase==="preview")),s.guide&&(s.guide.classList.toggle("show",c&&a.phase==="aim"&&!a.drag),s.guide.classList.toggle("hide",!c||a.phase!=="aim"||!!a.drag)),s.swipe&&s.swipe.classList.toggle("enabled",!!(a.userAim&&(a.phase==="aim"||a.phase==="preview"))),a.aimTarget&&s.aimLabel){const d=(a.aimTarget.z-a.goalZ)*a.inward,v=a.aimTarget.x*a.sideX;s.aimLabel.textContent=a.tactic==="short"?"SHORT OPTION":d>14?"EDGE OF BOX":v>2.6?"NEAR POST":v<-2.2?"FAR POST":"CENTRE"}const h=Xa[a.delivery]||Xa.inswing;s.deliveryLabel&&(s.deliveryLabel.textContent=`${(Ka[a.tactic]||Ka.centre).label} · ${h.label}`);const u=Math.round(a.aim.power*100);if(s.powerBar&&(s.powerBar.style.width=`${u}%`),s.powerVal&&(s.powerVal.textContent=`${u}%`),s.curveBar&&(s.curveBar.style.left=`${50+D(a.aim.curve,-1,1)*46}%`),s.curveVal){const d=Math.round(Math.abs(a.aim.curve)*100);s.curveVal.textContent=Math.abs(a.aim.curve)<.06?"STRAIGHT":`${a.aim.curve<0?"L":"R"} ${d}`}const f=h.height||.6;s.heightBar&&(s.heightBar.style.width=`${D(f/3*100,8,100)}%`),s.heightVal&&(s.heightVal.textContent=f>0?`${f.toFixed(1)}m`:"PASS"),o&&o.classList.toggle("defending",!a.userAim)},cornerPointerDown(a){var s,r,o,l,c,h,u,f,d;const v=this.corner;if(!(!v||!v.userAim||v.phase!=="aim"&&v.phase!=="preview")&&!(a.button!=null&&a.button!==0)){(r=(s=this.audio)==null?void 0:s.init)==null||r.call(s),(l=(o=this.audio)==null?void 0:o.resume)==null||l.call(o),v.phase==="preview"&&(v.phase="aim",v.phaseTime=0,v.previewTimer=0,this.setSwipeCornerEnabled(!0)),v.drag={id:a.pointerId,sx:a.clientX,sy:a.clientY,x:a.clientX,y:a.clientY,points:[[a.clientX,a.clientY]]},(h=(c=this.cornerDom)==null?void 0:c.wrap)==null||h.classList.add("dragging");try{(d=(f=(u=this.cornerDom)==null?void 0:u.swipe)==null?void 0:f.setPointerCapture)==null||d.call(f,a.pointerId)}catch{}a.cancelable&&a.preventDefault()}},cornerPointerMove(a){const s=this.corner;if(!s||!s.drag||a.pointerId!==s.drag.id)return;s.drag.x=a.clientX,s.drag.y=a.clientY,s.drag.points.push([a.clientX,a.clientY]),s.drag.points.length>40&&s.drag.points.shift();const r=s.drag.x-s.drag.sx,o=s.drag.sy-s.drag.y,l=Math.max(150,Math.min(window.innerWidth*.3,340)),c=Math.hypot(r,Math.max(0,o)),h=D(c/l,.12,1),u=D(r/(l*.92),-1,1);let f=0;const d=s.drag.points,v=Math.hypot(r,-o);if(d.length>3&&v>28){let x=0,m=0;for(let g=1;g<d.length-1;g++){const y=d[g][0]-s.drag.sx,_=d[g][1]-s.drag.sy,b=(r*_- -o*y)/v;Math.abs(b)>x&&(x=Math.abs(b),m=Math.sign(b)||1)}f=D(x/(v*.2)*m,-1,1)}s.aim.nx=u,s.aim.power=h,s.aim.curve=f,this.updateCornerAim(),this.updateCornerAimVisual(!0),this.updateCornerHud(),a.cancelable&&a.preventDefault()},cornerPointerUp(a){var s,r;const o=this.corner;if(!(!o||!o.drag||a.pointerId!==o.drag.id)){if(o.drag=null,(r=(s=this.cornerDom)==null?void 0:s.wrap)==null||r.classList.remove("dragging"),o.aim.power<.16){this.hud.hint("SWIPE FURTHER FOR POWER");return}this.lockCornerAim(!1),a!=null&&a.cancelable&&a.preventDefault()}},cornerPointerCancel(){var a,s;const r=this.corner;r&&(r.drag=null,(s=(a=this.cornerDom)==null?void 0:a.wrap)==null||s.classList.remove("dragging"))},hideCornerUI(){var a,s,r,o;const l=this.cornerDom;l&&((a=l.wrap)==null||a.classList.add("hidden"),(s=l.wrap)==null||s.classList.remove("dragging","defending","live","short-live"),(r=l.swipe)==null||r.classList.remove("enabled"),(o=l.guide)==null||o.classList.remove("show"),this.hud.el.hud.classList.remove("corner-mode","corner-live"),this.cornerVisual&&(this.cornerVisual.group.visible=!1,this.cornerVisual.line.visible=!1,this.cornerVisual.drop.visible=!1))},finishCorner(a="done"){var s;const r=this.corner;if(!(!r||r.done)){if(r.done=!0,this.inputLocked=!1,this.mode==="training"&&this.drillState&&!this.drillState.resolved){const o=["goal","shot","delivered","retained"].includes(r.result),l=r.result==="goal"?"GOAL":r.result==="shot"?"SHOT AWAY":r.result==="delivered"?"GREAT BALL":r.result==="retained"?"KEPT IT":r.result==="cleared"?"CLEARED":"MISSED";this.drillResolve(o,l)}for(const o of this.players)o.cornerRole=null,o.aerialCooldown=0;this.hideCornerUI(),this.hud.hint(""),this.corner=null,this.restartType=null,this.mode==="training"&&this.state==="corner"?this.state="drill":this.state==="corner"&&(this.state="play",this.stateTimer=0,(s=this.onState)==null||s.call(this,"play"),this.duel?(this.setControl(this.nearestPlayerToBall(0,!1),0),this.setControl(this.nearestPlayerToBall(1,!1),1)):(!this.controlled||!this.controlled.active)&&this.setControl(this.nearestPlayerToBall(0,!1))),a==="goal"&&this.hud.hint("")}},disposeCorner(){var a,s,r,o,l,c,h,u,f,d,v,x,m,g,y,_,b,C,w,E,L,k,M;this.cornerDomBound=!1,this.hideCornerUI(),this.corner=null;const S=this.cornerDom,I=this._cornerHandlers;S&&(this._onCornerDown&&((a=S.swipe)==null||a.removeEventListener("pointerdown",this._onCornerDown)),this._onCornerMove&&((s=S.swipe)==null||s.removeEventListener("pointermove",this._onCornerMove)),this._onCornerUp&&((r=S.swipe)==null||r.removeEventListener("pointerup",this._onCornerUp)),this._onCornerCancel&&((o=S.swipe)==null||o.removeEventListener("pointercancel",this._onCornerCancel)),this._cornerNoMenu&&((l=S.swipe)==null||l.removeEventListener("contextmenu",this._cornerNoMenu)),I&&((c=S.deliveries)==null||c.removeEventListener("click",I.deliveries),(h=S.tactics)==null||h.removeEventListener("click",I.tactics),(u=S.cancel)==null||u.removeEventListener("click",I.cancel),(f=S.take)==null||f.removeEventListener("click",I.take),(d=S.cross)==null||d.removeEventListener("click",I.cross),(v=S.pause)==null||v.removeEventListener("click",I.pause))),this._cornerHandlers=null,this.cornerVisual&&(this.scene.remove(this.cornerVisual.group),this.scene.remove(this.cornerVisual.line),this.scene.remove(this.cornerVisual.drop),(m=(x=this.cornerVisual.lineGeo)==null?void 0:x.dispose)==null||m.call(x),(_=(y=(g=this.cornerVisual.line)==null?void 0:g.material)==null?void 0:y.dispose)==null||_.call(y),(C=(b=this.cornerVisual.dropGeo)==null?void 0:b.dispose)==null||C.call(b),(L=(E=(w=this.cornerVisual.drop)==null?void 0:w.material)==null?void 0:E.dispose)==null||L.call(E),(M=(k=this.cornerVisual.group).traverse)==null||M.call(k,z=>{var O,$,V,Z;z.isMesh&&(($=(O=z.geometry)==null?void 0:O.dispose)==null||$.call(O),Array.isArray(z.material)?z.material.forEach(Y=>{var ne;return(ne=Y.dispose)==null?void 0:ne.call(Y)}):(Z=(V=z.material)==null?void 0:V.dispose)==null||Z.call(V))}),this.cornerVisual=null),this._cornerKey&&(window.removeEventListener("keydown",this._cornerKey),this._cornerKey=null)},setupCornerDrill(){this.hideAllDrillPlayers();const a=this.players.filter(l=>l.team===0&&!l.isGK).slice(0,10),s=this.players.filter(l=>l.team===1&&!l.isGK).slice(0,10),r=this.players.find(l=>l.team===1&&l.isGK);[r,...a,...s].forEach(l=>this.activateDrillPlayer(l));const o=-52.5;a.forEach((l,c)=>{this.place(l,D(-16+c*3.4,-24,24),o+9+c%4*3.1,0)}),s.forEach((l,c)=>{this.place(l,D(-15+c*3.3,-22,22),o+5+c%4*2.4,Math.PI)}),r&&this.place(r,0,o+1.7,0),this.setControl(a[0]||null),this.beginCorner(0,(Math.random()<.5?1:-1)*(N.halfWidth-1),o+1,{training:!0}),this.hud.hint("SWIPE TO SWING IT IN · FIND A TEAMMATE IN THE BOX")},resetCornerDrill(){!this.drillState||this.drillState.done||(this.beginCorner(0,(Math.random()<.5?1:-1)*(N.halfWidth-1),-52.5+1,{training:!0}),this.hud.hint("SWIPE TO SWING IT IN · FIND A TEAMMATE IN THE BOX"))}}),n.prototype.thinkAI=function(a,s){var r;return this.corner&&!a.controlled&&(r=this.corner.roster)!=null&&r.has(a)?this.thinkCornerAI(a,s):e.call(this,a,s)},n.prototype.scoreGoal=function(a){var s,r,o;const l=this.corner;l&&l.phase!=="setup"&&(l.result="goal",l.scorer=((s=this.lastTouch)==null?void 0:s.player)||l.scorer,this.celebrateCorner(a,l.scorer),this.hud.commentary(l.headerType?`${((r=l.scorer)==null?void 0:r.name)||"The striker"} powers in a corner header!`:`GOAL from the corner! ${((o=l.scorer)==null?void 0:o.name)||""}`,"goal")),t.call(this,a),l&&this.corner===l&&this.finishCorner("goal")},n.prototype.catchBall=function(a){var s,r;const o=this.corner;i.call(this,a),o&&this.corner===o&&(this.ball.owner===a?(o.result||(o.result="claimed"),this.setCornerAction(a,"catch",.7)):(o.result||(o.result="punched"),this.setCornerAction(a,"punch",.55),(r=(s=this.audio)==null?void 0:s.punch)==null||r.call(s)),this.hud.commentary(a.team===0?`${a.name} claims it!`:"The keeper comes and takes it."))}}const Ns=.38,tg={id:"match-referee",short:"REF",primary:"#171a1e",secondary:"#c6ff45",shorts:"#171a1e",socks:"#171a1e",gk:"#171a1e"},ig={late:"LATE CHALLENGE",slide:"SLIDING CHALLENGE",trip:"TRIP",push:"PUSH FROM BEHIND",shirt:"SHIRT PULL",shoulder:"SHOULDER BARGE",dangerous:"DANGEROUS TACKLE",twoFooted:"TWO-FOOTED CHALLENGE",handball:"HANDBALL",professional:"PROFESSIONAL FOUL",goalkeeper:"GOALKEEPER FOUL",aerial:"AERIAL CHALLENGE"},ag={late:.52,slide:.5,trip:.42,push:.38,shirt:.44,shoulder:.3,dangerous:.84,twoFooted:.95,handball:.5,professional:.64,goalkeeper:.5,aerial:.45};function sg(n){let e=2166136261;const t=String(n);for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e>>>0}function en(n,e,t=0,i=1){const a=Math.hypot(n,e);return a<1e-4?{x:t,z:i}:{x:n/a,z:e/a}}function qa(n,e,t,i){return Math.atan2(t-n,i-e)}class rg{constructor(e){this.match=e,this.active=!1,this.phase=null,this.phaseIndex=-1,this.phaseTime=0,this.queue=[],this.foul=null,this.advantage=null,this.setPiece=null,this.cooldown=0,this.intensity=0,this.contacts=new Map,this.contactCooldowns=new Map,this.lastAerialAt=-99,this.lastAerialPair="",this.replay=null,this.replayFrames=[],this.liveSnapshot=null,this.camSnap=!1,this.refVisible=!0,this.hideRef=!1,this.pendingDecision=null,this.confrontation=null,this.ref={pos:{x:-34+4.5,z:0},facing:0,phase:0,speed:0,target:null,action:"watch"},this.ui=this.cacheUI(),this.visual=Ch(tg,!1,"match-referee",0),this.visual.root.position.set(this.ref.pos.x,0,this.ref.pos.z),this.visual.root.rotation.y=this.ref.facing,e.scene.add(this.visual.root);const t=new le(new Et(.066,.066,.055,10),new xt({color:13041477,roughness:.6}));t.position.y=-.13,this.visual.armL.add(t),this.cardMesh=new le(new Rt(.17,.25),new yt({color:16765503,side:Ut,toneMapped:!1})),this.cardMesh.position.set(0,-.66,.03),this.cardMesh.rotation.y=.12,this.cardMesh.visible=!1,this.visual.armR.add(this.cardMesh),this.initPlayers(),this.bindUI(),this.updateVisual(0)}cacheUI(){return{root:document.getElementById("refUI"),phase:document.getElementById("refPhase"),skip:document.getElementById("refSkip"),decision:document.getElementById("refDecision"),decisionTitle:document.getElementById("refDecisionTitle"),decisionSub:document.getElementById("refDecisionSub"),decisionIcon:document.getElementById("refDecisionIcon"),card:document.getElementById("refCardPop"),cardSwatch:document.getElementById("refCardSwatch"),cardTitle:document.getElementById("refCardTitle"),cardName:document.getElementById("refCardName"),var:document.getElementById("refVar"),varText:document.getElementById("refVarText"),varResult:document.getElementById("refVarResult"),advantage:document.getElementById("refAdvantage"),advantageText:document.getElementById("refAdvantageText"),replay:document.getElementById("refReplay"),replayAngle:document.getElementById("refReplayAngle")}}bindUI(){this.ui.skip&&this.ui.skip.addEventListener("click",e=>{e.preventDefault(),this.skip()})}initPlayers(){for(const e of this.match.players)e.refReady||(e.refReady=!0,e.refTemper=.25+sg(e.id)%69/100,e.refFouls=0,e.refYellow=0,e.refCard=null,e.refLastFoul=-99,e.refPose=null,e.refPoseTime=0,e.refPoseDuration=0)}updateLive(e){if(this.cooldown=Math.max(0,this.cooldown-e),this.updateSetPiece(e),this.updateAdvantage(e),!this.active){const t=this.liveRefTarget();this.moveRef(t,5.2,e)}}liveRefTarget(){const e=this.match.ball,t=e.x>=0?-1:1;let i=e.x*.52+t*8.4,a=e.z-4.2;return(this.match.state==="restart"||this.match.state==="kickoff")&&(i=e.x*.42+t*5.8,a=e.z-2.2),i=D(i,-34+3.2,N.halfWidth-3.2),a=D(a,-52.5+3.2,N.halfLength-3.2),{x:i,z:a}}moveRef(e,t,i){var a;if(!e)return;const s=this.ref;let r=e.x-s.pos.x,o=e.z-s.pos.z;const l=Math.hypot(r,o);s.speed=l>.08?Math.min(t,l/Math.max(i,.001)):0;let c=s.pos.x,h=s.pos.z;if(l>.01){const u=Math.min(l,t*i);c+=r/l*u,h+=o/l*u,s.facing=Math.atan2(r,o),s.phase+=u/Math.max(i,.001)*2.15*i}for(let u=0;u<2;u++)for(const f of this.match.players){if(!f.active||f===((a=this.foul)==null?void 0:a.victim))continue;const d=he(c,h,f.pos.x,f.pos.z),v=f.isGK?1.35:1.02;if(d<v&&d>1e-4){const x=(v-d)/Math.max(1,2-u);c+=(c-f.pos.x)/d*x,h+=(h-f.pos.z)/d*x}}s.pos.x=D(c,-34+1.2,N.halfWidth-1.2),s.pos.z=D(h,-52.5+1.2,N.halfLength-1.2)}updateVisual(e){const t=this.visual;if(t.root.visible=this.refVisible&&!this.hideRef,!t.root.visible)return;t.root.position.set(this.ref.pos.x,0,this.ref.pos.z),t.root.rotation.y=this.ref.facing,Rh(t,this.ref.phase,this.ref.speed,!1);const i=this.ref.action;if(i==="run"||i==="watch"||!i){this.cardMesh.visible=!1;return}i==="whistle"?(t.armR.rotation.x=-2.2,t.armR.rotation.z=-.14,t.body.rotation.x=-.04):i==="point"?(t.armR.rotation.x=-1.62,t.armR.rotation.z=-.38,t.armL.rotation.x=.25):i==="card"?(t.armR.rotation.x=-2.52,t.armR.rotation.z=-.18,t.armL.rotation.x=.3,t.body.rotation.x=-.02):i==="advantage"?(t.armL.rotation.x=-1.32,t.armR.rotation.x=-1.32,t.armL.rotation.z=.8,t.armR.rotation.z=-.8):i==="var"?(t.armL.rotation.x=-1.46,t.armR.rotation.x=-1.46,t.armL.rotation.z=-.48,t.armR.rotation.z=.48):i==="separate"&&(t.armL.rotation.x=-1.12,t.armR.rotation.x=-1.12,t.armL.rotation.z=.9,t.armR.rotation.z=-.9)}assessTackle(e,t,i={}){if(!e||!t||this.match.mode==="training"||this.active||this.advantage||this.cooldown>0||this.match.corner||!e.active||!t.active||i.wonBall)return!1;const a=i.distance??he(e.pos.x,e.pos.z,t.pos.x,t.pos.z);if(a>(i.slide?1.32:1.08))return!1;const s=i.speed??Math.hypot(e.vel.x,e.vel.z),r=this.isFromBehind(e,t),o=this.challengeType(e,t,{...i,distance:a,speed:s,fromBehind:r}),l=this.buildFoul(e,t,{...i,distance:a,speed:s,fromBehind:r,type:o,ballFirst:!!i.wonBall});return!l||l.noFoul?!1:(this.startFoul(l),!0)}challengeType(e,t,i){return i.type?i.type:e.isGK?"goalkeeper":i.slide?i.twoFooted||i.speed>9.45&&i.fromBehind&&e.refTemper>.76?"twoFooted":i.speed>8.95&&!i.fromBehind&&e.refTemper>.86?"dangerous":i.fromBehind?"slide":"late":this.isDOGSO(t,e)&&i.speed>2.8?"professional":i.fromBehind&&i.speed>3.5?"push":i.fromBehind?"shirt":t.shield>0?"push":"trip"}buildFoul(e,t,i={}){var a;if(!e||!t||e.team===t.team)return null;const s=this.match.ball,r=i.type||this.challengeType(e,t,i),o=i.distance??he(e.pos.x,e.pos.z,t.pos.x,t.pos.z),l=i.speed??Math.hypot(e.vel.x,e.vel.z),c=i.fromBehind??this.isFromBehind(e,t),h=!!(i.ballFirst||i.wonBall),u=i.contact??o<=(i.slide?1.25:1.05),f=i.late??(!h&&(r==="late"||r==="slide")),d=!!i.high||r==="aerial"||r==="dangerous",v=i.ballDistance??he(e.pos.x,e.pos.z,s.x,s.z),x=(((a=e.attrs)==null?void 0:a.decisions)??70)/100;let m=.1;h||(m+=.14+D(v,0,2.4)*.11),c&&(m+=.16),l>5.4&&(m+=.09),l>8.2&&(m+=.08),f&&(m+=.1),d&&(m+=.14),i.slide&&(m+=.06),i.twoFooted&&(m+=.42),t.shield>0&&(m+=.06),i.contactTime>.45&&(m+=.1),m-=(x-.7)*.18,m=D(m,0,.98);let g=!u||h&&!f&&!d&&!i.twoFooted;r==="shoulder"&&!c&&l<6.2&&(g=!0),m<(i.slide?.55:.62)&&!d&&(g=!0),i.forceFoul&&(g=!1);let y=ag[r]??.42;c&&(y+=.05),l>6.4&&(y+=.06),d&&(y+=.12),f&&(y+=.04),h&&(y-=.12),i.contactTime>.6&&(y+=.04),i.twoFooted&&(y+=.2),y=D(y,.18,.99);const _=i.spot||{x:t.pos.x,z:t.pos.z},b=this.inOwnBox(e.team,_.x,_.z),C=b&&r!=="handball"?!0:b,w=this.isDOGSO(t,e);let E=null,L=!1;r==="twoFooted"||r==="dangerous"||y>=.9?E="red":(y>=.72||r==="professional"||r==="shirt"&&c||r==="goalkeeper"&&l>6)&&(E="yellow"),w&&(C?E=["trip","slide","late","goalkeeper"].includes(r)&&y<.82?"yellow":"red":E="red"),!E&&e.refFouls>=3&&this.match.clock-e.refLastFoul<12&&(E="yellow"),E==="yellow"&&e.refYellow>=1&&(E="red",L=!0);const k=ig[r]||"FOUL",M=!E&&!C&&y>=.5&&y<.68,S=y>=.56||!!E||C||w,I=!C&&!E&&y<.78&&this.isPromising(t),z=!!this.match.replaysEnabled&&S,O=this.match.mode==="spectate"&&!!this.match.replaysEnabled&&(C||E==="red");return{offender:e,victim:t,type:r,label:k,risk:m,speed:l,distance:o,fromBehind:c,ballFirst:h,late:f,high:d,severity:y,spot:{x:D(_.x,-33,N.halfWidth-1),z:D(_.z,-52.5+1,N.halfLength-1)},inBox:b,penalty:C,dogso:w,card:E,secondYellow:L,warning:M,important:S,noFoul:g,advantage:!!I,replay:z,var:!!O,confrontation:!1,advantageSucceeded:!1}}checkGoalkeeperHandling(e){if(this.match.mode==="training"||!(e!=null&&e.active)||this.active||this.advantage||this.cooldown>0||this.match.corner||this.inOwnBox(e.team,e.pos.x,e.pos.z))return!1;const t=this.match.ball,i=he(e.pos.x,e.pos.z,t.x,t.z);if(i>1.85||t.y<.35||t.y>2.45)return!1;const a=Math.hypot(t.vx,t.vz);if(a<4.2)return!1;const s=this.match.nearestOpponent(e);if(!s)return!1;const r=this.buildFoul(e,s,{type:"goalkeeper",distance:i,speed:a,fromBehind:!1,high:!0,contact:!0,spot:{x:t.x,z:t.z},forceFoul:!0});return!r||r.noFoul?!1:(this.startFoul(r),!0)}handleFoul(e,t,i={}){if(this.match.mode==="training")return!1;if(!e||!t||this.active)return!0;const a=this.buildFoul(e,t,{...i,type:i.type||this.challengeType(e,t,i),forceFoul:i.forceFoul??!0});return a?a.noFoul?(this.match.hud.commentary(`${e.name} gets a touch on the ball — play on.`),!0):(this.startFoul(a),!0):!0}startFoul(e){if(!e||this.active||this.cooldown>0||this.match.corner)return!1;const t=e.offender;if((this.match.stats.fouls[t.team]||0)>=4&&!e.penalty){const i=e.victim;return i!=null&&i.active&&this.match.setPossession(i),this.match.hud.commentary(`${t.name} catches ${i?.name||"his man"} — advantage played.`),this.cooldown=.9,!1}return e.offender.refFouls=(e.offender.refFouls||0)+1,e.offender.refLastFoul=this.match.clock,this.match.stats.fouls[t.team]++,this.intensity+=.55+e.severity,this.foul=e,this.match.addEvent("foul",`Foul — ${t.name} (${this.match.teams[t.team].short})`,this.match.clock,"foul"),this.match.hud.commentary(`${e.label} by ${t.name}. The referee stops play.`),e.card&&(e.card==="yellow"?(e.offender.refYellow=(e.offender.refYellow||0)+1,e.offender.refYellow>=2&&(e.card="red",e.secondYellow=!0)):e.secondYellow&&(e.offender.refYellow=(e.offender.refYellow||0)+1),e.offender.refCard=e.card),e.advantage&&this.shouldPlayAdvantage(e)?(this.beginAdvantage(e),!0):(this.beginSequence(e),!0)}shouldPlayAdvantage(e){return e.penalty||e.card==="red"||e.severity>.8?!1:this.isPromising(e.victim)}isPromising(e){const t=this.match.ball,i=t.owner;if(!i||i.team!==e.team)return!1;const a=this.match.targetGoalZ(e.team),s=Math.hypot(i.pos.x,i.pos.z-a);if(s>46)return!1;const r=this.match.attackDir[e.team];if((i.pos.z-t.z)*r<-8)return!1;let o=0;for(const l of this.match.players){if(!l.active||l.team===e.team||l.isGK)continue;const c=(l.pos.z-i.pos.z)*r;c>0&&c<s&&Math.abs(l.pos.x-i.pos.x)<8&&o++}return o<=2}isDOGSO(e,t){if(e.isGK||t.isGK)return!1;const i=this.match.targetGoalZ(e.team),a=Math.hypot(e.pos.x,e.pos.z-i);if(a>30)return!1;const s=this.match.attackDir[e.team],r=en(0-e.pos.x,i-e.pos.z,0,s);let o=0;for(const l of this.match.players){if(!l.active||l.team===e.team||l.isGK)continue;const c=l.pos.x-e.pos.x,h=l.pos.z-e.pos.z,u=c*r.x+h*r.z;u<=.2||u>=a-.5||Math.abs(c*r.z-h*r.x)<4.5&&o++}return o===0}inOwnBox(e,t,i){const a=this.match.attackDir[e],s=-a*N.halfLength,r=(i-s)*a;return r>=-.1&&r<=N.boxDepth&&Math.abs(t)<=N.boxHalfWidth}isFromBehind(e,t){const i=Math.sin(t.facing),a=Math.cos(t.facing),s=en(e.pos.x-t.pos.x,e.pos.z-t.pos.z);return i*s.x+a*s.z<-.22}updateContacts(e){if(this.active||this.advantage||this.cooldown>0||this.match.state!=="play"||this.match.mode==="training"||this.match.corner)return;const t=this.match.players.filter(s=>s.active),i=this.match.ball,a=new Set;for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){const o=t[s],l=t[r];if(o.team===l.team)continue;const c=he(o.pos.x,o.pos.z,l.pos.x,l.pos.z);if(c>1.14)continue;const h=Math.min(he(o.pos.x,o.pos.z,i.x,i.z),he(l.pos.x,l.pos.z,i.x,i.z));if(h>5.2)continue;const u=o.id<l.id?`${o.id}|${l.id}`:`${l.id}|${o.id}`;a.add(u);const f=this.contacts.get(u)||{time:0};f.time+=e,this.contacts.set(u,f);const d=i.owner;if(d&&(d===o||d===l)){const v=d,x=d===o?l:o,m=Math.hypot(x.vel.x,x.vel.z),g=this.isFromBehind(x,v);if(f.time>.42&&g&&m>1.8&&v.speedNow>1.5&&c<1.02){if(this.scanContact(x,v,{type:"shirt",distance:c,speed:m,fromBehind:!0,contactTime:f.time,forceFoul:!0}),this.active)return}else if(f.time>.12&&m>3.7&&g&&c<1.03){if(this.scanContact(x,v,{type:"push",distance:c,speed:m,fromBehind:!0,contactTime:f.time}),this.active)return}else if(f.time>.12&&m>6.1&&!g&&c<.98&&(this.scanContact(x,v,{type:"shoulder",distance:c,speed:m,fromBehind:!1,contactTime:f.time}),this.active))return}else if(!d&&i.y>1.35&&i.y<3.2&&h<2.4&&i.vy<2.5){const v=`aerial|${u}`;if(this.match.time-this.lastAerialAt>1.25&&this.lastAerialPair!==v&&Math.abs(o.pos.z-l.pos.z)<1.2){this.lastAerialAt=this.match.time,this.lastAerialPair=v;const x=this.isFromBehind(o,l)?o:l,m=x===o?l:o;if(this.scanContact(x,m,{type:"aerial",distance:c,speed:Math.hypot(x.vel.x,x.vel.z),fromBehind:this.isFromBehind(x,m),high:!0,contactTime:.2,spot:{x:i.x,z:i.z}}),this.active)return}}}if(!i.owner&&i.y>.82&&i.y<1.82&&Math.hypot(i.vx,i.vz)>6.5)for(const s of t){if(s.isGK)continue;const r=he(s.pos.x,s.pos.z,i.x,i.z);if(r>1.04)continue;const o=i.x-s.pos.x,l=i.z-s.pos.z,c=o*Math.cos(s.facing)-l*Math.sin(s.facing);if(Math.abs(c)<.16||Math.abs(c)>.62||this.match.lastTouch.team===s.team)continue;const h=this.match.nearestOpponent(s);if(h){if(this.scanContact(s,h,{type:"handball",distance:r,speed:Math.hypot(i.vx,i.vz),fromBehind:!1,high:!0,contact:!0,spot:{x:i.x,z:i.z},forceFoul:!0}),this.active)return;break}}for(const s of this.contacts.keys())a.has(s)||this.contacts.delete(s)}scanContact(e,t,i){if(this.active||this.cooldown>0)return;const a=`${e.id}|${t.id}|${i.type}`,s=this.contactCooldowns.get(a)||-99;if(this.match.time-s<1.4)return;this.contactCooldowns.set(a,this.match.time);const r=this.buildFoul(e,t,i);!r||r.noFoul||this.startFoul(r)}beginAdvantage(e){var t,i,a,s;this.foul=null,this.advantage={foul:e,team:e.victim.team,timer:2.6,start:this.match.time,startDistance:this.distanceToGoal(e.victim.team,this.match.ball.x,this.match.ball.z),lastOwner:this.match.ball.owner,played:!1},this.ref.action="advantage",this.showUI(!0),this.showAdvantage(`Advantage — ${this.match.teams[e.victim.team].short}`),this.setPhaseLabel("ADVANTAGE"),(t=this.ui.decision)==null||t.classList.add("hidden"),(i=this.ui.card)==null||i.classList.add("hidden"),this.match.hud.banner("ADVANTAGE",`${this.match.teams[e.victim.team].short} · PLAY ON`,1500,"info"),this.match.hud.commentary(`Advantage played for ${this.match.teams[e.victim.team].short}.`),(s=(a=this.match.audio).crowdSurge)==null||s.call(a,.25)}updateAdvantage(e){var t;const i=this.advantage;if(!i)return;i.timer-=e;const a=this.match.ball,s=a.owner,r=i.startDistance-this.distanceToGoal(i.team,a.x,a.z),o=s&&s.team===i.team&&r>8.2||((t=this.match.lastShot)==null?void 0:t.team)===i.team&&this.match.time-i.start<1.8||s&&s.team===i.team&&i.timer<=0&&r>2.2;if(s&&s.team!==i.team){this.advantage=null,this.hideAdvantage(),this.foul=i.foul,this.beginSequence(i.foul,{fromAdvantage:!0});return}if(o){this.advantage=null,this.hideAdvantage(),this.ref.action="watch",this.showUI(!1),this.match.hud.banner("ADVANTAGE PLAYED","PLAY CONTINUES",1300,"info"),this.match.hud.commentary("Good advantage — the attack continues."),this.foul=null,this.cooldown=1.4;return}i.timer<=0&&(this.advantage=null,this.hideAdvantage(),this.ref.action="watch",this.showUI(!1),this.foul=i.foul,this.beginSequence(i.foul,{fromAdvantage:!0}))}distanceToGoal(e,t,i){const a=this.match.targetGoalZ(e);return Math.hypot(t,i-a)}beginSequence(e,t={}){var i,a,s,r,o,l,c;if(this.active)return;this.active=!0,this.foul=e,this.phase=null,this.phaseIndex=-1,this.phaseTime=0,this.camSnap=!0,this.confrontation=null,this.replay=null,this.liveSnapshot=this.snapshot(),this.replayFrames=(this.match.replayFrames||[]).slice(-58),this.match.inputLocked=!0,this.match.charging=!1,this.match.charge=0,(a=(i=this.match).setControl)==null||a.call(i,null);const h=this.match.ball;h.owner=null,h.x=e.spot.x,h.z=e.spot.z,h.y=0,h.vx=0,h.vz=0,h.vy=0,h.curve=null,(s=this.match.hud.el.hud)==null||s.classList.add("referee-mode"),this.match.hud.showReplay(!1),this.match.hud.hint(""),(o=(r=this.match.hud).hideBanner)==null||o.call(r),this.showUI(!0),this.hidePanels(),this.setPhaseLabel("INCIDENT"),this.refVisible=!0,this.hideRef=!1,this.ref.action="run",this.cardMesh.visible=!1,this.match.audio.whistle(!1),(c=(l=this.match.audio).crowdHush)==null||c.call(l);const u=((e.offender.refTemper||.5)+(e.victim.refTemper||.5))/2,f=Math.min(.18,.025+e.severity*.09+(e.card==="red"?.04:0)+u*.025);e.confrontation=!e.penalty&&e.important&&Math.random()<f;const d=[];d.push({name:"incident",dur:e.important?.5:.34}),d.push({name:"approach",dur:e.important?.78:.56}),d.push({name:"decision",dur:1.12}),d.push({name:"reaction",dur:e.important?.9:.7}),e.replay&&d.push({name:"replay",dur:2.05}),e.var&&d.push({name:"var",dur:1.55}),e.confrontation&&d.push({name:"confront",dur:1.15}),d.push({name:"transition",dur:.68}),this.queue=d,this.enterNextPhase(),t.fromAdvantage&&this.match.hud.commentary("The advantage did not develop — we come back to the foul.")}enterNextPhase(){if(this.active){if(this.phaseIndex++,this.phaseIndex>=this.queue.length){this.finishSequence();return}this.phase=this.queue[this.phaseIndex],this.phaseTime=0,this.onPhaseEnter(this.phase.name)}}onPhaseEnter(e){var t,i,a,s,r,o,l,c,h,u,f,d,v,x,m,g;const y=this.foul;y&&(e==="incident"?(this.setPhaseLabel("INCIDENT"),this.setDecision("WHISTLE","Referee has stopped play","whistle"),this.ref.action="run",this.camSnap=!0,this.hideRef=!1,this.audioRef("whistle")):e==="approach"?(this.setPhaseLabel("REFEREE APPROACHING"),this.ref.action="run",this.refVisible=!0,this.hideRef=!1,this.camSnap=!0):e==="decision"?(this.setPhaseLabel("DECISION"),this.ref.action=y.card?"card":"point",this.refVisible=!0,this.hideRef=!1,this.camSnap=!0,this.showDecision(),this.showCard(y.card,y.offender,y.secondYellow),this.refVisible=!0,this.ref.action=y.card?"card":"point",this.match.audio.whistle(!1),y.card?((i=(t=this.match.audio).card)==null||i.call(t,y.card),(s=(a=this.match.audio).crowdSurge)==null||s.call(a,y.card==="red"?.55:.22)):(o=(r=this.match.audio).crowdSurge)==null||o.call(r,.12),this.match.hud.commentary(this.decisionCommentary(y)),this.applyReactions(!1)):e==="reaction"?(this.setPhaseLabel("PLAYER REACTION"),this.camSnap=!0,this.ref.action=y.card?"card":"point",this.applyReactions(!0)):e==="replay"?(this.setPhaseLabel("REPLAY"),this.refVisible=!1,this.hideRef=!0,this.showReplay(!0),this.beginReplay(),(c=(l=this.match.audio).crowdHush)==null||c.call(l)):e==="var"?(this.setPhaseLabel("VAR REVIEW"),this.refVisible=!0,this.hideRef=!1,this.ref.action="var",this.replay=null,this.showReplay(!1),this.restoreSnapshot(),this.camSnap=!0,this.showVAR(),(u=(h=this.match.audio).varReview)==null||u.call(h),(d=(f=this.match.audio).crowdHush)==null||d.call(f),this.ui.varResult.textContent=""):e==="confront"?(this.setPhaseLabel("CONFRONTATION"),this.refVisible=!0,this.hideRef=!1,this.ref.action="separate",this.camSnap=!0,this.setupConfrontation(),(x=(v=this.match.audio).confrontation)==null||x.call(v),(g=(m=this.match.audio).crowdSurge)==null||g.call(m,.28)):e==="transition"&&(this.setPhaseLabel(y.penalty?"PENALTY":"SET PIECE"),this.ref.action="point",this.refVisible=!0,this.hideRef=!1,this.replay=null,this.restoreSnapshot(),this.showReplay(!1),this.hideRef=!1,this.camSnap=!0))}update(e){var t,i,a,s,r,o;if(!this.active)return;this.phaseTime+=e,((t=this.phase)==null?void 0:t.name)==="replay"&&this.updateReplay(e),((i=this.phase)==null?void 0:i.name)==="var"&&this.phaseTime>.88&&(this.ui.varResult.textContent=(a=this.foul)!=null&&a.penalty?"PENALTY CONFIRMED":"ON-FIELD DECISION CONFIRMED"),((s=this.phase)==null?void 0:s.name)==="confront"&&this.updateConfrontation(e);const l=this.sequenceRefTarget();this.moveRef(l,((r=this.phase)==null?void 0:r.name)==="confront"?3.2:5.4,e),this.phaseTime>=(((o=this.phase)==null?void 0:o.dur)||.5)&&this.enterNextPhase()}sequenceRefTarget(){var e;const t=this.foul;if(!t)return this.liveRefTarget();const i=t.spot,a=i.x>=0?1:-1,s=this.match.attackDir[t.victim.team];return((e=this.phase)==null?void 0:e.name)==="confront"&&this.confrontation?{x:this.confrontation.mid.x+a*1.8,z:this.confrontation.mid.z-s*1.2}:{x:D(i.x+a*2.35,-32,N.halfWidth-2),z:D(i.z-s*1.7,-52.5+2,N.halfLength-2)}}updateSetPieceCamera(e){var t;const i=this.setPiece;if(!i||this.match.state!=="restart")return!1;const a=this.match,s=((t=i.taker)==null?void 0:t.team)??0,r=a.attackDir[s],o=a.targetGoalZ(s),l=a.ball,c=l.x>=0?1:-1,h=new P,u=new P;return i.type==="penalty"?(h.set(l.x+c*.8,4.6,l.z-r*8.2),u.set(0,1,o)):(h.set(l.x+c*4.2,4.4,l.z-r*8.8),u.set(l.x+c*.8,1.15,o)),a.camPos.lerp(h,1-Math.exp(-3.8*e)),a.camLook.lerp(u,1-Math.exp(-4.2*e)),a.camera.position.copy(a.camPos),a.camera.up.set(0,1,0),a.camera.lookAt(a.camLook),a.camera.fov+=(37-a.camera.fov)*(1-Math.exp(-4*e)),a.camera.updateProjectionMatrix(),!0}updateCamera(e){if(!this.active)return!1;const t=this.match,i=this.currentCameraShot(),a=this.camSnap?10.5:4.8;return this.camSnap?(t.camPos.copy(i.pos),t.camLook.copy(i.look),this.camSnap=!1):(t.camPos.lerp(i.pos,1-Math.exp(-a*e)),t.camLook.lerp(i.look,1-Math.exp(-a*1.2*e))),t.camera.position.copy(t.camPos),t.camera.up.set(0,1,0),t.camera.lookAt(t.camLook),t.camera.fov+=(i.fov-t.camera.fov)*(1-Math.exp(-6*e)),t.camera.updateProjectionMatrix(),!0}currentCameraShot(){var e;const t=this.match,i=this.foul,a=(i?.spot.x||1)>=0?1:-1,s=i?t.attackDir[i.victim.team]:1,r=i?.spot||{x:0,z:0};new P(r.x,1.1,r.z);const o=((e=this.phase)==null?void 0:e.name)||"incident",l=o==="reaction"?i?.victim:i?.offender,c=this.ref.pos;if(o==="replay"&&this.replay){const h=this.replay.angle||0;return h===0?{pos:new P(r.x+a*15,9.5,r.z-s*11),look:new P(r.x,.9,r.z),fov:31}:h===1?{pos:new P(r.x+a*4.2,2.25,r.z-s*3.5),look:new P(r.x,.9,r.z),fov:28}:h===2?{pos:new P(r.x+a*10,3.1,r.z+s*1.8),look:new P(r.x,.85,r.z),fov:30}:{pos:new P(c.x-a*.5,1.9,c.z-s*.35),look:new P(r.x,1,r.z),fov:26}}return o==="incident"?{pos:new P(r.x+a*4.5,1.95,r.z-s*3.8),look:new P(r.x,.95,r.z),fov:27}:o==="reaction"&&l?{pos:new P(l.pos.x+a*3.2,1.75,l.pos.z-s*2.4),look:new P(l.pos.x,1.15,l.pos.z),fov:25}:o==="var"?{pos:new P(c.x+a*4.8,2.15,c.z-s*2.6),look:new P(c.x,1.2,c.z),fov:28}:o==="confront"&&this.confrontation?{pos:new P(this.confrontation.mid.x+a*3.5,1.9,this.confrontation.mid.z-s*2.5),look:new P(this.confrontation.mid.x,1.2,this.confrontation.mid.z),fov:27}:o==="transition"?{pos:new P(r.x+a*8,8.5,r.z-s*10),look:new P(r.x,.8,r.z),fov:34}:{pos:new P(c.x+a*3.8,2,c.z-s*2.2),look:new P(c.x,1.15,c.z),fov:29}}beginReplay(){var e,t,i;let a=this.replayFrames;(!a||a.length<8)&&(a=this.snapshotAsFrames()),this.replay={frames:a,clock:0,duration:1.9,angle:-1,angleNames:["BROADCAST","TACKLE CLOSE-UP","SIDE ANGLE","REFEREE VIEW"]},this.match.hud.showReplay(!1),(e=this.ui.decision)==null||e.classList.add("hidden"),(t=this.ui.card)==null||t.classList.add("hidden"),(i=this.ui.replay)==null||i.classList.remove("hidden"),this.ui.replayAngle.textContent="BROADCAST",this.setReplayAngle(0)}setReplayAngle(e){this.replay&&(this.replay.angle=e,this.ui.replayAngle&&(this.ui.replayAngle.textContent=this.replay.angleNames[e]||"BROADCAST"))}updateReplay(e){const t=this.replay;if(!t)return;t.clock+=e;const i=D(t.clock/t.duration,0,1),a=Math.min(t.frames.length-1,Math.floor(i*(t.frames.length-1)));this.applyFrame(t.frames[a]);const s=Math.min(3,Math.floor(i*4));s!==t.angle&&(this.setReplayAngle(s),this.camSnap=!0)}applyFrame(e){if(!e)return;this.match.ball.x=e.ball.x,this.match.ball.z=e.ball.z,this.match.ball.y=e.ball.y;const t=new Map;for(const i of e.players)t.set(i.id,i);for(const i of this.match.players){const a=t.get(i.id);!a||!i.active||(i.pos.x=a.x,i.pos.z=a.z,i.facing=a.facing,i.runPhase=a.phase,i.speedNow=a.speed,i.slide=a.slide)}}snapshot(){const e=this.match.players.filter(t=>t.active).map(t=>({id:t.id,x:t.pos.x,z:t.pos.z,facing:t.facing,phase:t.runPhase,speed:t.speedNow,slide:t.slide}));return{ball:{x:this.match.ball.x,z:this.match.ball.z,y:this.match.ball.y},players:e}}snapshotAsFrames(){const e=this.liveSnapshot||this.snapshot();return Array.from({length:8},()=>({ball:{...e.ball},players:e.players.map(t=>({...t}))}))}restoreSnapshot(){const e=this.liveSnapshot;if(!e)return;this.match.ball.x=e.ball.x,this.match.ball.z=e.ball.z,this.match.ball.y=e.ball.y;const t=new Map(e.players.map(i=>[i.id,i]));for(const i of this.match.players){const a=t.get(i.id);!a||!i.active||(i.pos.x=a.x,i.pos.z=a.z,i.facing=a.facing,i.runPhase=a.phase,i.speedNow=a.speed,i.slide=a.slide)}}applyReactions(e=!1){const t=this.foul;if(!t)return;const i=t.type==="slide"||t.type==="twoFooted"||t.severity>.78;this.setPose(t.victim,i?"down":"appeal",e?1.7:1.3),this.setPose(t.offender,"argue",e?1.55:1.3);const a=this.match.players.filter(s=>s.active&&s.team===t.victim.team&&s!==t.victim).sort((s,r)=>he(s.pos.x,s.pos.z,t.victim.pos.x,t.victim.pos.z)-he(r.pos.x,r.pos.z,t.victim.pos.x,t.victim.pos.z)).slice(0,e?2:1);for(const s of a)this.setPose(s,"appeal",e?1.25:.9)}setPose(e,t,i){e&&(e.refPose=t,e.refPoseDuration=i,e.refPoseTime=i)}applyPoses(e){for(const t of this.match.players){if(!t.active||!t.refPose)continue;if(t.refPoseTime-=e,t.refPoseTime<=0){t.refPose=null,t.refPoseTime=0;continue}const i=t.visual;i&&(t.refPose==="down"?(i.body.rotation.x=-1.22,i.body.position.y=-.4,i.armL.rotation.x=-.8,i.armR.rotation.x=-.8,i.legL.rotation.x=.35,i.legR.rotation.x=-.25):t.refPose==="appeal"?(i.armL.rotation.x=-2.15,i.armR.rotation.x=-2.1,i.armL.rotation.z=.28,i.armR.rotation.z=-.28,i.body.rotation.x=-.04):t.refPose==="argue"?(i.armL.rotation.x=-1.2,i.armR.rotation.x=-1.25,i.armL.rotation.z=.75,i.armR.rotation.z=-.75,i.body.rotation.x=-.08):t.refPose==="confront"?(i.armL.rotation.x=-1,i.armR.rotation.x=-1,i.armL.rotation.z=.58,i.armR.rotation.z=-.58,i.body.rotation.x=-.12):t.refPose==="separate"&&(i.armL.rotation.x=-1.35,i.armR.rotation.x=-1.35,i.armL.rotation.z=.95,i.armR.rotation.z=-.95))}}setupConfrontation(){const e=this.foul;if(!e)return;const t=e.offender;let i=e.victim;if((!i.active||i===t)&&(i=this.match.players.find(d=>d.active&&d.team===e.victim.team&&d!==t)),!t.active||!i)return;const a={x:(t.pos.x+i.pos.x)/2,z:(t.pos.z+i.pos.z)/2},s=i.pos.x-t.pos.x,r=i.pos.z-t.pos.z,o=Math.hypot(s,r)||1,l=s/o*.62,c=r/o*.62,h={x:a.x-l,z:a.z-c},u={x:a.x+l,z:a.z+c},f=this.match.players.filter(d=>d.active&&d.team===e.victim.team&&d!==e.victim&&d!==i).sort((d,v)=>he(d.pos.x,d.pos.z,a.x,a.z)-he(v.pos.x,v.pos.z,a.x,a.z)).slice(0,2);this.confrontation={a:t,b:i,mid:a,targetA:h,targetB:u,startA:{...t.pos},startB:{...i.pos},mates:f.map((d,v)=>({p:d,start:{...d.pos},target:{x:a.x+(v===0?-1.25:1.25),z:a.z+(v===0?-.5:.5)}})),t:0},this.setPose(t,"confront",1.2),this.setPose(i,"confront",1.2);for(const d of this.confrontation.mates)this.setPose(d.p,"separate",1.1)}updateConfrontation(e){const t=this.confrontation;if(!t)return;t.t+=e;const i=1-Math.exp(-7*e);for(const[a,s,r]of[[t.a,t.startA,t.targetA],[t.b,t.startB,t.targetB]])a.pos.x+=(r.x-s.x)*i,a.pos.z+=(r.z-s.z)*i,a.facing=qa(a.pos.x,a.pos.z,t.a===a?t.b.pos.x:t.a.pos.x,t.a===a?t.b.pos.z:t.a.pos.z),a.vel.x=0,a.vel.z=0;for(const a of t.mates)a.p.pos.x+=(a.target.x-a.start.x)*i,a.p.pos.z+=(a.target.z-a.start.z)*i,a.p.vel.x=0,a.p.vel.z=0}onKickoff(){this.contacts.clear(),this.confrontation=null,this.hidePanels(),this.showUI(!1),this.setPiece=null,this.advantage=null,this.ref.action="watch"}finishSequence(){var e,t;if(!this.active)return;const i=this.foul;this.active=!1,this.phase=null,this.queue=[],this.phaseIndex=-1,this.phaseTime=0,this.match.inputLocked=!1,this.hideRef=!1,this.refVisible=!0,this.replay=null,this.confrontation=null,(e=this.match.hud.el.hud)==null||e.classList.remove("referee-mode"),this.match.hud.showReplay(!1),this.match.hud.hint(""),this.hidePanels(),this.showUI(!1),this.cardMesh.visible=!1,this.ref.action="watch",(t=this.match.hud.el.hud)==null||t.classList.remove("referee-mode"),i&&(i.card==="red"&&this.commitRed(i),i.card&&this.match.addEvent("card",`${i.card==="red"?"RED":"YELLOW"} — ${i.offender.name}`,this.match.clock,"card"),i.penalty?this.setupPenalty(i):this.setupFreeKick(i),this.foul=null,this.liveSnapshot=null,this.replayFrames=[],this.cooldown=2.25)}commitRed(e){const t=e.offender;t.active&&(t.refRed=!0,t.refCard="red",t.active=!1,t.visual.root.visible=!1,t.controlled=!1,this.match.controlled===t&&this.match.setControl(null),this.match.ball.owner===t&&(this.match.ball.owner=null),this.match.addEvent("red",`Red card — ${t.name}`,this.match.clock,"card"),this.match.hud.commentary(`${t.name} is sent off.`))}setupFreeKick(e){var t;const i=this.match,a=e.victim.team,s=e.spot;let r=i.careerFreeKickTaker?.active&&i.careerFreeKickTaker.team===a&&!i.careerFreeKickTaker.isGK?i.careerFreeKickTaker:e.victim.active&&!e.victim.isGK?e.victim:i.players.filter(x=>x.active&&x.team===a&&!x.isGK).sort((x,m)=>he(x.pos.x,x.pos.z,s.x,s.z)-he(m.pos.x,m.pos.z,s.x,s.z))[0];if(r||(r=i.players.find(x=>x.active&&x.team===a)),!r)return;const o=i.targetGoalZ(a),l=i.attackDir[a],c=Math.atan2(0-s.x,o-s.z);r.pos.x=s.x-Math.sin(c)*Ns,r.pos.z=s.z-Math.cos(c)*Ns,r.facing=c,r.vel.x=0,r.vel.z=0,r.stun=0,r.slide=0,r.kickCooldown=0,i.state="restart",i.stateTimer=1.22,i.restartType="freekick",i.pendingTaker=r,i.ball.owner=null,i.ball.x=s.x,i.ball.z=s.z,i.ball.y=0,i.ball.vx=0,i.ball.vz=0,i.ball.vy=0,i.ball.curve=null,i.lastTouch={team:a,player:r},i.charging=!1,i.charge=0,i.duel?i.setControl(r,a===1?1:0):a===0&&i.autoControl&&i.setControl(r);const h=en(0-s.x,o-s.z,0,l),u={x:s.x+h.x*9.15,z:s.z+h.z*9.15},f={x:-h.z,z:h.x},d=i.players.filter(x=>x.active&&x.team!==a&&!x.isGK&&x!==e.offender).sort((x,m)=>he(x.pos.x,x.pos.z,u.x,u.z)-he(m.pos.x,m.pos.z,u.x,u.z)).slice(0,4),v=d.map((x,m)=>{const g=(m-(d.length-1)/2)*.78,y=D(u.x+f.x*g,-33,N.halfWidth-1),_=D(u.z+f.z*g,-52.5+1,N.halfLength-1);return x.facing=qa(y,_,s.x,s.z),x.pos.x=y,x.pos.z=_,x.vel.x=0,x.vel.z=0,x.mvx=0,x.mvz=0,{p:x,x:y,z:_,facing:x.facing}});this.setPiece={type:"freekick",taker:r,wall:v,hold:!0,life:4.5},i.refereeSetPiece=this.setPiece,i.setPiece=this.setPiece,Math.hypot(s.x,o-s.z)<34&&((t=i.setupKeeperPrediction)==null||t.call(i,"freekick",1-a,r)),a===0&&i.autoControl&&i.hud.hint("FREE KICK — AIM AND SHOOT"),this.refPathCamera(s,a),i.hud.banner("FREE KICK",`${i.teams[a].short} · ${e.label}`,1700,"info"),i.hud.commentary(`${i.teams[a].name} have a free kick.`),i.audio.whistle(!1)}setupPenalty(e){var t,i,a;const s=this.match,r=e.victim.team,o=s.attackDir[r],l=o*N.halfLength,c=0,h=l-o*N.penaltyDist,u=s.careerPenaltyTaker?.active&&s.careerPenaltyTaker.team===r&&!s.careerPenaltyTaker.isGK?s.careerPenaltyTaker:s.players.filter(m=>m.active&&m.team===r&&!m.isGK).sort((m,g)=>{var y,_,b,C;const w=(((y=m.attrs)==null?void 0:y.shooting)??70)*1.35+(((_=m.attrs)==null?void 0:_.composure)??70)*1.5+(m.ego??50)*.15+m.rating*.2;return(((b=g.attrs)==null?void 0:b.shooting)??70)*1.35+(((C=g.attrs)==null?void 0:C.composure)??70)*1.5+(g.ego??50)*.15+g.rating*.2-w})[0];if(!u)return;const f=s.players.find(m=>m.active&&m.team!==r&&m.isGK),d=Math.atan2(0-c,l-h);u.pos.x=c-Math.sin(d)*Ns,u.pos.z=h-Math.cos(d)*Ns,u.facing=d,u.vel.x=0,u.vel.z=0,u.stun=0,u.slide=0,s.state="restart",s.stateTimer=1.35,s.restartType="penalty",s.pendingTaker=u,s.ball.owner=null,s.ball.x=c,s.ball.z=h,s.ball.y=0,s.ball.vx=0,s.ball.vz=0,s.ball.vy=0,s.ball.curve=null,s.lastTouch={team:r,player:u},s.charging=!1,s.charge=0,f&&(f.pos.x=0,f.pos.z=l-o*.55,f.facing=qa(f.pos.x,f.pos.z,c,h),f.vel.x=0,f.vel.z=0);const v=[],x=s.players.filter(m=>m.active&&m!==u&&m!==f);x.forEach((m,g)=>{const y=-28+(g+.5)/Math.max(1,x.length)*56,_=l-o*(N.boxDepth+2.4);m.pos.x=D(y,-34+1.5,N.halfWidth-1.5),m.pos.z=D(_,-52.5+2,N.halfLength-2),m.facing=qa(m.pos.x,m.pos.z,c,h),m.vel.x=0,m.vel.z=0,m.mvx=0,m.mvz=0,v.push({p:m,x:m.pos.x,z:m.pos.z,facing:m.facing})}),f&&(f.pos.x=0,f.pos.z=l-o*.55,f.facing=qa(f.pos.x,f.pos.z,c,h)),this.setPiece={type:"penalty",taker:u,gk:f,gkZ:l-o*.55,gkFacing:f?.facing??0,positions:v,hold:!0,life:5},s.refereeSetPiece=this.setPiece,s.setPiece=this.setPiece,(t=s.setupKeeperPrediction)==null||t.call(s,"penalty",1-r,u),s.duel?s.setControl(u,r===1?1:0):r===0&&s.autoControl&&s.setControl(u),this.refPathCamera({x:c,z:h},r),s.hud.banner("PENALTY",`${s.teams[r].short} · ${e.label}`,1900,"goal"),s.hud.commentary(`PENALTY to ${s.teams[r].name}!`),s.hud.hint("PENALTY — TAP SHOOT"),(a=(i=s.audio).crowdSurge)==null||a.call(i,.5),s.audio.whistle(!1)}refPathCamera(e,t){const i=this.match,a=e.x>=0?1:-1,s=i.attackDir[t],r=e.x+a*8.5,o=e.z-s*8.5;i.camPos.set(r,8.2,o),i.camLook.set(e.x,1.1,e.z+s*8)}updateSetPiece(e){const t=this.setPiece;if(t){if(t.hold&&this.match.state==="play"){const i=this.match.ball;(i.owner!==t.taker||Math.hypot(i.vx,i.vz)>2.4)&&(t.hold=!1,t.life=1.1,this.match.hud.hint(""))}t.hold||(t.life-=e,t.life<=0&&(this.setPiece=null,this.match.refereeSetPiece=null,this.match.setPiece=null))}}holdSetPiece(){var e;const t=this.setPiece;if(!(!(t!=null&&t.hold)||this.match.state!=="play")){if(t.type==="freekick")for(const i of t.wall)i.p.active&&(i.p.pos.x=i.x,i.p.pos.z=i.z,i.p.facing=i.facing,i.p.vel.x=0,i.p.vel.z=0,i.p.mvx=0,i.p.mvz=0);else if(t.positions){for(const i of t.positions)i.p.active&&(i.p.pos.x=i.x,i.p.pos.z=i.z,i.p.facing=i.facing,i.p.vel.x=0,i.p.vel.z=0,i.p.mvx=0,i.p.mvz=0);(e=t.gk)!=null&&e.active&&(t.gk.pos.x=0,t.gk.pos.z=t.gkZ,t.gk.facing=t.gkFacing,t.gk.vel.x=0,t.gk.vel.z=0,t.gk.mvx=0,t.gk.mvz=0)}}}showUI(e){this.ui.root&&(this.ui.root.classList.toggle("hidden",!e),this.ui.skip&&this.ui.skip.classList.toggle("hidden",!this.active))}setPhaseLabel(e){this.ui.phase&&(this.ui.phase.textContent=e)}hidePanels(){var e,t,i,a;(e=this.ui.decision)==null||e.classList.add("hidden"),(t=this.ui.card)==null||t.classList.add("hidden"),(i=this.ui.var)==null||i.classList.add("hidden"),(a=this.ui.replay)==null||a.classList.add("hidden"),this.hideAdvantage()}setDecision(e,t,i="●"){this.ui.decision&&(this.ui.decision.classList.remove("hidden"),this.ui.decisionTitle.textContent=e,this.ui.decisionSub.textContent=t,this.ui.decisionIcon&&(this.ui.decisionIcon.textContent=i))}showDecision(){var e,t;const i=this.foul;if(!i)return;const a=i.penalty?"PENALTY":"FREE KICK",s=i.card==="red"||i.card==="yellow"?"■":"●",r=i.warning?`${this.match.teams[i.victim.team].short} · ${i.label} · WORD WITH ${i.offender.name.toUpperCase()}`:`${this.match.teams[i.victim.team].short} · ${i.label}`;this.setDecision(a,r,s),(e=this.ui.decision)==null||e.classList.toggle("red",i.card==="red"),(t=this.ui.decision)==null||t.classList.toggle("yellow",i.card==="yellow")}showCard(e,t,i=!1){!e||!this.ui.card||(this.ui.card.classList.remove("hidden"),this.ui.cardSwatch.className=`ref-card-swatch ${e}`,this.ui.cardTitle.textContent=i?"SECOND YELLOW":e==="red"?"RED CARD":"YELLOW CARD",this.ui.cardName.textContent=`${t.name} · #${t.number} · ${this.match.teams[t.team].short}`,this.ui.card.classList.toggle("red",e==="red"),this.ui.card.classList.toggle("yellow",e==="yellow"),this.cardMesh.visible=!0,this.cardMesh.material.color.set(e==="red"?16726861:16765503))}showVAR(){var e;this.ui.var&&(this.ui.var.classList.remove("hidden"),this.ui.varText.textContent=(e=this.foul)!=null&&e.penalty?"CHECKING PENALTY":"CHECKING RED CARD",this.ui.varResult.textContent="")}showReplay(e){var t;(t=this.ui.replay)==null||t.classList.toggle("hidden",!e)}showAdvantage(e){this.ui.advantage&&(this.ui.advantage.classList.remove("hidden"),this.ui.advantageText&&(this.ui.advantageText.textContent=e))}hideAdvantage(){var e;(e=this.ui.advantage)==null||e.classList.add("hidden")}decisionCommentary(e){const t=this.match.teams[e.victim.team].short,i=e.card?` ${e.card==="red"?e.secondYellow?"Second yellow — red card.":"Red card.":"Yellow card."}`:"",a=e.warning?` The referee has a word with ${e.offender.name}.`:"";return`${e.penalty?"Penalty":"Free kick"} to ${t} — ${e.label.toLowerCase()}.${i}${a}`}audioRef(e){e==="whistle"&&this.match.audio.whistle(!1)}skip(){this.active&&this.finishSequence()}dispose(){var e,t;this.active=!1,this.advantage=null,this.setPiece=null,this.showUI(!1),this.match.scene.remove(this.visual.root),(e=this.ui.root)==null||e.classList.add("hidden"),(t=this.match.hud.el.hud)==null||t.classList.remove("referee-mode")}}function ng(n){n.prototype.setupReferee=function(){this.mode==="training"||this.referee||(this.referee=new rg(this))},n.prototype.disposeReferee=function(){var e;(e=this.referee)==null||e.dispose(),this.referee=null}}const og=18,lg=14,hg=15,cg=6;function ug(n){const e=n.prototype.setRestart;Object.assign(n.prototype,{setRestart(t,i,a,s){if(t==="goalkick"||t==="throwin"){this.beginRestart(t,i,a,s);return}e.call(this,t,i,a,s)},beginRestart(t,i,a,s){var r,o;if((r=this.referee)!=null&&r.active||this.corner)return;const l=t==="goalkick",c=this.attackDir[i];let h=l?this.players.find(x=>x.team===i&&x.active&&x.isGK):this.nearestRestartTaker(i,a,s);if(h||(h=this.nearestPlayerToBall(i,!0)),!h)return;const u=l?1:Math.sign(a)||1,f=l?0:u*N.halfWidth,d=l?-c*(N.halfLength-N.sixDepth+.55):D(s,-52.5+1.6,N.halfLength-1.6),v=l?.22:1.72;this.hideRestartUI(),document.body.classList.add("restart-active"),this.state="restart",this.stateTimer=0,this.restartType=t,this.pendingTaker=null,this.charging=!1,this.charge=0,this.passTarget=null,this.passTimer=0,this.restartPass=null,this.lastShot=null,this.replayActive=!1,this.celebration=null,this.ball.owner=h,this.ball.x=f,this.ball.z=d,this.ball.y=v,this.ball.vx=0,this.ball.vz=0,this.ball.vy=0,this.ball.curve=null,this.ball.spin=0,this.ball.ignore=null,this.ball.ignoreTimer=0,this.lastTouch={team:i,player:h},l?(h.pos.x=0,h.pos.z=d-c*.95,h.facing=c>0?0:Math.PI):(h.pos.x=u*(N.halfWidth+.35),h.pos.z=d,h.facing=-u*Math.PI*.5),h.vel.x=0,h.vel.z=0,h.mvx=0,h.mvz=0,h.speedNow=0,h.stun=0,h.slide=0,h.restartAnim=0,h.throwAnim=0,h.kickAnim=0,h.kickCooldown=0,h.restartSpot={x:h.pos.x,z:h.pos.z},this.restart={type:t,team:i,taker:h,time:0,duration:l?2:1.6,ballX:f,ballZ:d,ballY:v,target:null,targets:[],ai:!1,remote:!1,controllable:!0,done:!1,mode:"short"},this.positionRestartPlayers(t,i,f,d,h),this.restart.targets=this.restartTargets(h),this.restart.ai=!this.restartUserControls(i),this.restart.remote=this.onlineRole==="host"&&i===1,this.restart.controllable=!this.restart.remote||this.onlineRole==="guest",this.restart.mode=this.restart.ai?this.chooseRestartMode(this.restart):"short",this.restart.target=this.chooseRestartTarget(h,this.restart.mode)||this.restart.targets[0]||null,this.restartUserControls(i)&&this.setControl(h,this.duel&&i===1?1:0),this.restartUserControls(i)&&!this.restart.remote?this.showRestartUI():(this.hideRestartUI(),this.hud.hint(this.restart.remote?"OPPONENT RESTART · WAITING FOR THEIR BALL":"")),this.hud.banner(l?"GOAL KICK":"THROW-IN",`${this.teams[i].short}${this.restart.remote?" · ONLINE":""}`,1250,"info"),this.hud.commentary(l?`${this.teams[i].name} restart from their goalkeeper.`:`Throw-in to ${this.teams[i].name}.`),this.audio.whistle(!1),(o=this.onState)==null||o.call(this,this.state)},restartUserControls(t){return this.mode==="training"||this.mode==="spectate"||this.mode==="highlights"?!1:this.onlineRole==="host"?!0:this.onlineRole==="guest"?!1:this.mode==="duel"?!0:t===0&&this.autoControl},nearestRestartTaker(t,i,a){let s=null,r=1/0;for(const o of this.players){if(!o.active||o.team!==t||o.isGK)continue;const l=he(o.pos.x,o.pos.z,i,a);l<r&&(r=l,s=o)}return s},restartTargets(t){var i,a,s,r;const o=[];if(!t)return o;for(const h of this.players){if(!h.active||h.team!==t.team||h===t||h.isGK)continue;const u=((i=h.restartSpot)==null?void 0:i.x)??h.pos.x,f=((a=h.restartSpot)==null?void 0:a.z)??h.pos.z,d=he(t.pos.x,t.pos.z,u,f);if(d<2.8)continue;let v=99;for(const m of this.players){if(!m.active||m.team===t.team)continue;const g=((s=m.restartSpot)==null?void 0:s.x)??m.pos.x,y=((r=m.restartSpot)==null?void 0:r.z)??m.pos.z;v=Math.min(v,he(u,f,g,y))}const x=(f-t.pos.z)*this.attackDir[t.team];o.push({player:h,x:u,z:f,d,forward:x,open:D(v-1.1,0,10),label:`${String(h.name).split(" ").slice(-1)[0].toUpperCase()} ${h.role}`})}o.sort((h,u)=>h.d-u.d);const l=o.slice(0,cg),c=o[o.length-1];return c&&!l.includes(c)&&l.length&&(l[l.length-1]=c),l},chooseRestartMode(t){var i;if(!t)return"short";const a=this.attackDir[t.team],s=(i=t.targets)!=null&&i.length?t.targets:this.restartTargets(t.taker),r=s.some(u=>u.d>23),o=this.rngFor(t.taker);if(t.type==="throwin")return t.ballZ*a>N.halfLength-28&&r&&o<.62||r&&o<.18?"long":"short";const l=this.players.filter(u=>u.active&&u.team!==t.team&&he(u.pos.x,u.pos.z,t.ballX,t.ballZ)<30).length,c=this.score[t.team]<this.score[1-t.team]&&this.clock>65,h=s.some(u=>u.d<26&&u.open>4.5);return c&&o<.72||!h&&o<.82||l>=3&&o<.62||r&&o<.3?"long":"short"},rngFor(t){const i=Math.sin(((t?.number??0)+1)*91.7+this.time*.37)*1e4;return i-Math.floor(i)},chooseRestartTarget(t,i="short"){var a;if(!t)return null;const s=this.restartTargets(t);if(!s.length)return null;const r=((a=this.restart)==null?void 0:a.type)==="throwin",o=i==="long"?32:r?9:17,l=i==="long"?.12:.25,c=i==="long"?.18:.08,h=this.rngFor(t);let u=null,f=-1/0;for(const d of s){const v=Math.abs(d.x)>N.halfWidth-3?-1.2:0,x=i==="short"&&Math.abs(d.x)<8?.55:0,m=d.open*1.5+D(d.forward,-12,35)*c-Math.abs(d.d-o)*l+v+x+h*.3;m>f&&(f=m,u=d)}return u},placeRestartPlayer(t,i,a,s,r){const o={x:D(i,-32.9,N.halfWidth-1.1),z:D(a,-51.3,N.halfLength-1.2)};t.restartSpot=o,t.pos.x+=(o.x-t.pos.x)*.55,t.pos.z+=(o.z-t.pos.z)*.55,t.vel.x=0,t.vel.z=0,t.mvx=0,t.mvz=0,t.speedNow=0,t.stun=0,t.slide=0,t.restartAnim=0,t.throwAnim=0,t.kickAnim=0,t.facing=Math.atan2(s-t.pos.x,r-t.pos.z)},positionRestartPlayers(t,i,a,s,r){const o=t==="goalkick",l=this.attackDir[i],c=1-i,h=-l*N.halfLength,u=-this.attackDir[c]*N.halfLength,f=Math.sign(a)||1,d=this.players.filter(_=>_.active&&_.team===i&&_!==r&&!_.isGK),v=this.players.filter(_=>_.active&&_.team===c&&!_.isGK),x=this.players.find(_=>_.active&&_.team===i&&_.isGK&&_!==r);if(x){const _=h-Math.sign(h)*1.8;this.placeRestartPlayer(x,0,_,a,s),x.pos.x=x.restartSpot.x,x.pos.z=x.restartSpot.z}const m=this.players.find(_=>_.active&&_.team===c&&_.isGK);if(m){const _=u-Math.sign(u)*1.8;this.placeRestartPlayer(m,0,_,a,s),m.pos.x=m.restartSpot.x,m.pos.z=m.restartSpot.z}if(o){for(const _ of d){const b=Math.abs(_.baseX);let C=_.baseX,w;_.baseDepth<.32?(C=b>15?Math.sign(_.baseX)*22:D(_.baseX*.8,-13,13),w=h+l*(b>15?21:15)):_.baseDepth<.63?(C=b>14?Math.sign(_.baseX)*22:D(_.baseX*.72,-12,12),w=h+l*(b>14?30:34)):(C=b>15?Math.sign(_.baseX)*24:D(_.baseX*.6,-4,4),w=h+l*(b>15?42:48)),this.placeRestartPlayer(_,C,w,a,s)}for(const _ of v){const b=Math.abs(_.baseX);let C;_.role==="ATT"||_.baseDepth>.65?C=h+l*(b>14?22:27):_.role==="MID"||_.baseDepth>.35?C=h+l*(b>14?36:40):C=h+l*52,this.placeRestartPlayer(_,D(_.baseX*.82,-31,N.halfWidth-3),C,a,s)}return}const g=[...d].sort((_,b)=>he(_.pos.x,_.pos.z,a,s)-he(b.pos.x,b.pos.z,a,s)),y=[];g.forEach((_,b)=>{let C;if(b===0)C={x:f*(N.halfWidth-3.1),z:s-l*1.2};else if(b===1)C={x:f*(N.halfWidth-4.8),z:s+l*7.5};else if(b===2)C={x:f*10.5,z:s+l*3.2};else if(b===3)C={x:f*12.5,z:s+l*15};else if(b===4)C={x:f*5,z:s-l*8};else{const w=this.homePos(_);C={x:w.x*.55+f*8*.45,z:w.z*.4+s*.6}}this.placeRestartPlayer(_,C.x,C.z,a,s),y.push(_.restartSpot)}),[...v].sort((_,b)=>he(_.pos.x,_.pos.z,a,s)-he(b.pos.x,b.pos.z,a,s)).forEach((_,b)=>{let C;if(b===0)C={x:f*(N.halfWidth-1.25),z:s+.2};else if(b===1)C={x:f*(N.halfWidth-3.6),z:s-l*2.8};else{const w=y[(b-2)%Math.max(1,y.length)]||{x:0,z:s},E=Math.sign(u-w.z)||1;C={x:w.x-f*.35,z:w.z+E*1.8}}this.placeRestartPlayer(_,C.x,C.z,a,s)})},updateRestartShape(t){const i=this.restart;if(i){for(const a of this.players){if(!a.active||a===i.taker)continue;const s=a.restartSpot;if(s){if(a.isGK){a.mvx=0,a.mvz=0,a.sprinting=!1,a.facing=Math.atan2(i.ballX-a.pos.x,i.ballZ-a.pos.z);continue}he(a.pos.x,a.pos.z,s.x,s.z)>.7?this.steer(a,s.x,s.z,.76,!1):(a.mvx=0,a.mvz=0,a.sprinting=!1),this.stepPlayer(a,t),a.facing=a.speedNow>.35?Math.atan2(a.vel.x,a.vel.z):Math.atan2(i.ballX-a.pos.x,i.ballZ-a.pos.z)}}this.resolveCollisions(),i.taker&&(i.taker.mvx=0,i.taker.mvz=0,i.taker.speedNow=0)}},updateRestart(t){var i;const a=this.restart;if(!a||a.done)return!1;a.time+=t,this.input.sample(),(i=this.input2)==null||i.sample(),this.updateRestartShape(t);const s=!a.ai;if(s&&!a.remote){const r=a.team===1&&this.duel?this.input2:this.input;if(r!=null&&r.consume("switch")&&this.cycleRestartTarget(),r!=null&&r.consume("pass"))return this.takeRestart(!1,"short"),!0;if(r!=null&&r.consume("shoot"))return this.takeRestart(!1,"long"),!0}if(!s&&a.time>=a.duration+.55){const r=this.chooseRestartMode(a),o=this.chooseRestartTarget(a.taker,r);return this.takeRestart(!0,r,o),!0}if(s&&a.time>=(a.remote?hg:lg)){const r=this.chooseRestartMode(a),o=this.chooseRestartTarget(a.taker,r);return this.takeRestart(!0,r,o),!0}return!1},cycleRestartTarget(){var t;const i=this.restart;if(!((t=i?.targets)!=null&&t.length))return;const a=Math.max(0,i.targets.indexOf(i.target));i.target=i.targets[(a+1)%i.targets.length],this.updateRestartUI(),this.audio.click()},restartAimPoint(t,i,a,s){const r=this.attackDir[t.team];if(i!=null&&i.player){const o=i.player,l=a==="throwin"?.28:.34;return{x:D(o.pos.x+o.vel.x*l,-34+1.2,N.halfWidth-1.2),z:D(o.pos.z+o.vel.z*l+r*(s==="long"?1.7:.7),-52.5+1.4,N.halfLength-1.4)}}return{x:D(t.pos.x*.3,-29,N.halfWidth-5),z:D(t.pos.z+r*(a==="goalkick"?40:20),-52.5+2,N.halfLength-2)}},restartFlight(t,i,a,s){const r=i.x-this.restart.ballX,o=i.z-this.restart.ballZ,l=Math.hypot(r,o)||1,c=a==="goalkick"?.22:1.72,h=a==="goalkick"?.28:.9;let u;a==="throwin"?u=s==="long"?D(l/1.2,12,22):D(l/.55,11,18):s==="long"?u=D(l/1.35,22,37):u=D(l/.62,14,30);const f=l/u,d=D((h-c+.5*og*f*f)/f,-1.5,a==="throwin"?13:16);return{dx:r,dz:o,distance:l,speed:u,vy:d}},takeRestart(t=!1,i="short",a=null){var s,r,o,l,c;const h=this.restart;if(!h||h.done)return;if(this.onlineRole==="guest"&&h.remote&&h.controllable){(l=(s=this.onlineSession)==null?void 0:s.send)!=null&&l.call(s,"restart",{target:((o=(r=h.target)==null?void 0:r.player)==null?void 0:o.id)??null,mode:i==="long"?"long":"short"})?(this._onlineRestartSent=!0,this.hideRestartUI(),this.hud.hint("RESTART SENT · WAITING")):this.hud.hint("CONNECTION LOST · RESTART UNAVAILABLE");return}const u=h.taker;if(!(u!=null&&u.active)){this.restart=null,this.restartType=null,this.state="play";return}const f=i==="long"?"long":"short";let d=a||h.target||null;const v=d!=null&&d.player?he(u.pos.x,u.pos.z,d.player.pos.x,d.player.pos.z):0;f==="long"&&(!d||v<18)?d=this.chooseRestartTarget(u,"long")||d:f==="short"&&v>26&&(d=this.chooseRestartTarget(u,"short")||d),t&&!d&&(d=this.chooseRestartTarget(u,f));const x=this.restartAimPoint(u,d,h.type,f),m=this.restartFlight(u,x,h.type,f),g=h.type==="goalkick"?.22:1.72,y=m.dx/m.distance,_=m.dz/m.distance,b=this.rngFor(u),C=h.type==="throwin"?(b-.5)*.14:f==="long"?(b-.5)*.1:0;h.done=!0,this.hideRestartUI(),this.pendingTaker=null,this.stats.passes[h.team]++,this.kickBall(u,y,_,m.speed,m.vy,{originX:h.ballX,originZ:h.ballZ,originY:g,curve:C}),h.type==="throwin"?(u.throwAnim=.95,u.restartAnim=0,u.kickAnim=0):(u.kickAnim=.7,u.restartAnim=0,u.throwAnim=0),d!=null&&d.player?(this.passTarget=d.player,this.passTimer=2.8,this.restartPass={target:d.player,timer:2.8},this.lastPass={team:h.team,player:u,timer:3.2}):(this.passTarget=null,this.passTimer=0,this.restartPass=null),this.state="play",this.stateTimer=0,this.restart=null,this.restartType=null,this.ball.ignore=u,this.ball.ignoreTimer=.32,(c=this.onState)==null||c.call(this,this.state);const w=this.duel&&!this.onlineRole;if(this.mode!=="spectate"&&this.mode!=="highlights"){if(w){const L=h.team===0&&d!=null&&d.player?d.player:this.nearestPlayerToBall(0,!1),k=h.team===1&&d!=null&&d.player?d.player:this.nearestPlayerToBall(1,!1);L&&this.setControl(L,0),k&&this.setControl(k,1)}else if(h.team===0&&this.autoControl){const L=d?.player||this.nearestPlayerToBall(0,!1);L&&this.setControl(L,0)}else if(this.onlineRole==="host"&&h.team===1){const L=d?.player||this.nearestPlayerToBall(1,!1);L&&this.setControl(L,1)}}const E=h.type==="goalkick"?`${u.name} ${f==="long"?"launches it long":"plays it short"}.`:`${u.name} ${f==="long"?"launches the long throw":"takes the short throw"}.`;this.hud.commentary(E),this.audio.click(),this.hud.hint("")},tryRestartReception(t){const i=this.restartPass;if(!i)return!1;if(this.state!=="play"||this.passTarget!==i.target||this.passTimer<=0)return this.restartPass=null,!1;const a=i.target;if(!(a!=null&&a.active)||a.kickCooldown>0||a.stun>.1||a.slide>0)return!1;const s=he(a.pos.x,a.pos.z,t.x,t.z);if(s>2||t.y>2.1||t.vy>2.5)return!1;let r=1/0;for(const o of this.players)!o.active||o.team===a.team||(r=Math.min(r,he(o.pos.x,o.pos.z,t.x,t.z)));return r<s-.05?!1:(t.vx*=.3,t.vz*=.3,t.vy=0,t.y=0,this.setPossession(a),this.restartPass=null,!0)},applyRemoteRestart(t){var i;if(this.onlineRole!=="host"||this.state!=="restart"||!((i=this.restart)!=null&&i.remote))return!1;const a=t?.mode==="long"?"long":"short",s=this.restart.targets.find(r=>{var o;return((o=r.player)==null?void 0:o.id)===t?.target})||this.restart.target||null;return this.takeRestart(!1,a,s),!0},syncOnlineRestart(t){var i;if(this.onlineRole!=="guest")return;if(!t){(i=this.restart)!=null&&i.remote&&(this.restart=null,this.restartType=null,this._onlineRestartSig=null,this._onlineRestartSent=!1,this.hideRestartUI());return}if(this.state!=="restart")return;const a=new Map(this.players.map(c=>[c.id,c])),s=a.get(t.tk);if(!s)return;const r=(Array.isArray(t.tg)?t.tg:[]).map(c=>{const h=a.get(c?.[0]);return h?{player:h,label:c[1]||h.name,d:Number(c[2])||0,forward:Number(c[3])||0,x:h.pos.x,z:h.pos.z,open:0}:null}).filter(Boolean),o=`${t.t}:${t.tm}:${t.tk}:${Math.round(t.bx*10)}:${Math.round(t.bz*10)}:${r.map(c=>c.player.id).join(",")}`;if(o===this._onlineRestartSig)return;const l=r.find(c=>c.player.id===t.sl)||r[0]||null;this.restart={type:t.t==="goalkick"?"goalkick":"throwin",team:t.tm,taker:s,time:0,duration:t.t==="goalkick"?2:1.6,ballX:t.bx,ballZ:t.bz,ballY:t.t==="throwin"?1.72:.22,target:l,targets:r,ai:!1,remote:!0,controllable:t.tm===1,done:!1,mode:"short"},this.restartType=this.restart.type,this._onlineRestartSig=o,this._onlineRestartSent=!1,this.restart.controllable?(this.showRestartUI(),this.hud.banner(t.t==="goalkick"?"GOAL KICK":"THROW-IN",this.teams[t.tm].short,900,"info")):this.hideRestartUI()},updateRestartCamera(t){if(!this.restart)return!1;const i=this.restart,a=this.attackDir[i.team],s=i.type==="goalkick",r=Math.sign(i.ballX)||1,o=(this.camera.aspect||1)>=1.2,l=s?new P(2,7.2,i.ballZ-a*9.5):new P(i.ballX-r*2.2,6.2,i.ballZ-a*8.4),c=s?new P(0,.55,i.ballZ+a*13):new P(i.ballX-r*1.6,1.4,i.ballZ+a*7);this.camPos.lerp(l,1-Math.exp(-3.6*t)),this.camLook.lerp(c,1-Math.exp(-4.4*t)),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook);const h=s?o?43:50:o?44:55;return Math.abs(this.camera.fov-h)>.05&&(this.camera.fov+=(h-this.camera.fov)*(1-Math.exp(-5*t)),this.camera.updateProjectionMatrix()),!0},showRestartUI(){const t=document.getElementById("restartUI"),i=this.restart;if(!t||!i)return;t.classList.remove("hidden"),document.body.classList.add("restart-active");const a=i.type==="goalkick";document.getElementById("restartKicker").textContent=a?"GOAL KICK":"THROW-IN",document.getElementById("restartTitle").textContent=this.teams[i.team].name.toUpperCase(),document.getElementById("restartPrompt").textContent=a?"SELECT A TARGET · SHORT PASS OR LONG KICK":"SELECT A TARGET · SHORT OR LONG THROW";const s=document.getElementById("restartShort"),r=document.getElementById("restartLong");s&&(s.innerHTML=`${a?"SHORT PASS":"SHORT THROW"}<small>LOW · SAFE</small>`,s.disabled=!1,s.onclick=()=>this.takeRestart(!1,"short")),r&&(r.innerHTML=`${a?"LONG KICK":"LONG THROW"}<small>LOFTED · POWER</small>`,r.disabled=!1,r.onclick=()=>this.takeRestart(!1,"long"));const o=document.getElementById("restartTargets");if(o){o.innerHTML="";for(const l of i.targets){const c=document.createElement("button");c.type="button",c.className="restart-target",c.innerHTML=`<b>${l.label}</b><span>${Math.round(l.d)}m</span>`,c.addEventListener("click",()=>{this.restart&&(this.restart.target=l,this.updateRestartUI(),this.audio.click())}),l===i.target&&c.classList.add("active"),o.appendChild(c)}i.targets.length||(o.innerHTML='<div class="restart-target"><b>NO SHORT OPTION</b><span>PLAY LONG</span></div>')}this.updateRestartUI()},updateRestartUI(){const t=this.restart;if(!t)return;const i=document.getElementById("restartTargets");i&&[...i.children].forEach((a,s)=>a.classList.toggle("active",t.targets[s]===t.target))},hideRestartUI(){var t;(t=document.getElementById("restartUI"))==null||t.classList.add("hidden"),document.body.classList.remove("restart-active")},updateCelebration(t){const i=this.celebration;if(!i)return;i.time+=t;const a=i.scorer;if(a!=null&&a.active){for(const s of this.players){if(!s.active)continue;const r=s.team===i.team,o=r?{x:a.pos.x+Math.sin((s.number||1)*2.3)*2.4,z:a.pos.z+Math.cos((s.number||1)*2.3)*2.4}:{x:s.pos.x,z:s.pos.z};if(r){const l=o.x-s.pos.x,c=o.z-s.pos.z,h=Math.hypot(l,c);h>1.2&&(s.pos.x+=l/h*Math.min(6.2,h)*t,s.pos.z+=c/h*Math.min(6.2,h)*t,s.facing=Math.atan2(l,c)),s.celebration=1,s.vel.x*=.4,s.vel.z*=.4}else s.celebration=0,s.vel.x*=.9,s.vel.z*=.9}if(i.time>i.duration){this.celebration=null;for(const s of this.players)s.celebration=0}}},updateCelebrationCamera(t){const i=this.celebration;if(!i)return!1;const a=i.scorer,s=new P(a.pos.x,1.25,a.pos.z),r=13,o=i.time*.55+.8,l=new P(s.x+Math.sin(o)*r,7.8+i.time*.22,s.z+Math.cos(o)*r);return this.camPos.lerp(l,1-Math.exp(-2.4*t)),this.camLook.lerp(s,1-Math.exp(-3.4*t)),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook),!0}})}function dg(n){Object.assign(n.prototype,{updateMatchFlow(e){this.managementTimer=(this.managementTimer??1.4)-e,this.atmosphereTimer=(this.atmosphereTimer??2.5)-e,this.managementTimer<=0&&(this.managementTimer=4.2,this.updateTacticalAI(),this.considerAISubstitutions()),this.atmosphereTimer<=0&&(this.atmosphereTimer=2.4+Math.random()*2.2,this.updateCrowdAtmosphere())},aiManagedTeam(e){return this.mode==="spectate"||this.mode==="highlights"?!0:this.mode==="duel"?!1:e!==0},updateTacticalAI(){var e;const t=this.clock;for(let i=0;i<2;i++){if(!this.aiManagedTeam(i)||!this.teams[i])continue;const a=(e=this.chooseAdaptiveTactics)==null?void 0:e.call(this,i);if(a){this.setTactics(i,a);continue}const s=this.score[i]-this.score[1-i],r=t>=68,o=t>=82;let l=s>0?r?"defend":"balanced":s<0?"attack":"balanced";o&&s<0&&(l="attack"),o&&s>0&&(l="defend");let c=s<0&&t>55?"high":s>0&&t>65?"low":"mid";t>75&&s===0&&(c="high"),this.setTactics(i,{mentality:l,pressing:c})}},considerAISubstitutions(){var e;if(!(this.clock<48))for(let t=0;t<2;t++){if(!this.aiManagedTeam(t)||this.subsUsed[t]>=3||(((e=this.aiSubCooldown)==null?void 0:e[t])??0)>this.clock)continue;const i=this.players.filter(r=>r.active&&r.team===t&&!r.isGK);if(!i.length)continue;const a=i.filter(r=>r.stamina<58).sort((r,o)=>r.stamina-o.stamina)[0];if(!a)continue;const s=this.bench[t].filter(r=>!r.active&&!r.isGK).sort((r,o)=>{const l=r.role===a.role?8:0;return o.rating+o.stamina*.12+l-(r.rating+r.stamina*.12+l)})[0];s&&this.substitute(t,a.id,s.id)&&(this.aiSubCooldown=this.aiSubCooldown||[0,0],this.aiSubCooldown[t]=this.clock+10+Math.random()*5,this.hud.commentary(`${this.teams[t].short} make a change: ${s.name} replaces ${a.name}.`))}},updateCrowdAtmosphere(){var e,t,i,a,s,r;const o=this.ball,l=this.players.filter(c=>c.active).some(c=>Math.abs(o.z-this.attackDir[c.team]*N.halfLength)<24);this.lastShot&&this.time-this.lastShot.time<8?(t=(e=this.audio).crowdSurge)==null||t.call(e,.55):l&&Math.random()<.42?(a=(i=this.audio).crowdSurge)==null||a.call(i,.22):Math.random()<.14&&((r=(s=this.audio).rampCrowd)==null||r.call(s,.1,2.6))}})}function pg(n){Object.assign(n.prototype,{duelTeamForPlayer(a){return a===1?1:0},setupDuelHud(){var a,s;if(!this.duel)return;const r=document.querySelector(".team-p1"),o=document.querySelector(".team-p2");if(this.onlineRole){this.hud.el.hud.classList.remove("duel-mode"),this.hud.el.hud.classList.add("online-mode"),this.hud.setContext(this.onlineRole==="host"?"ONLINE 1V1 · YOU ARE HOME":"ONLINE 1V1 · YOU ARE AWAY"),r&&(r.textContent=`${this.onlineRole==="host"?"YOU":"RIVAL"} · ${this.teams[0].short}`),o&&(o.textContent=`${this.onlineRole==="host"?"RIVAL":"YOU"} · ${this.teams[1].short}`),(a=document.getElementById("duelP2"))==null||a.classList.add("hidden");return}this.hud.el.hud.classList.add("duel-mode"),this.hud.setContext("ONLINE 1V1 · PRIVATE PARTY"),r&&(r.textContent=`P1 · ${this.teams[0].short}`),o&&(o.textContent=`P2 · ${this.teams[1].short}`),(s=document.getElementById("duelP2"))==null||s.classList.remove("hidden")},teardownDuelHud(){var a;this.hud.el.hud.classList.remove("duel-mode","online-mode"),(a=document.getElementById("duelP2"))==null||a.classList.add("hidden")},duelPossession(a){this.duel&&this.setControl(a,a===1?1:0)},getDuelControlled(a){return a===1?this.controlled2:this.controlled},duelAutoSwitch(){this.duel&&(this.autoSwitchLooseBall(0,0),this.autoSwitchLooseBall(1,1))}});const e=n.prototype.setupKickoff,t=n.prototype.dispose,i=n.prototype.simulate;n.prototype.setupKickoff=function(a){if(e.call(this,a),!this.duel)return;this.setupDuelHud();const s=this.nearestPlayerToBall(0,!1),r=this.nearestPlayerToBall(1,!1);s&&this.setControl(s,0),r&&this.setControl(r,1)},n.prototype.dispose=function(){var a;(a=this.teardownDuelHud)==null||a.call(this),t.call(this)},n.prototype.simulate=function(a){i.call(this,a),this.duel&&(this.controlled||this.setControl(this.nearestPlayerToBall(0,!1),0),this.controlled2||this.setControl(this.nearestPlayerToBall(1,!1),1))}}const fg=["TOP LEFT","TOP CENTRE","TOP RIGHT","MIDDLE LEFT","MIDDLE CENTRE","MIDDLE RIGHT","BOTTOM LEFT","BOTTOM CENTRE","BOTTOM RIGHT"];let tr=null;function Ul(){const n=document.getElementById("keeperGoal");!n||n.dataset.bound==="1"||(n.dataset.bound="1",n.addEventListener("click",e=>{const t=e.target.closest(".keeper-zone");t&&tr?.chooseKeeperZone(Number(t.dataset.zone))}))}function mg(n){Ul(),Object.assign(n.prototype,{keeperUserDefends(e){return this.mode==="spectate"||this.mode==="highlights"||this.mode==="training"?!1:this.onlineRole==="host"?e===0:this.onlineRole==="guest"?!1:this.duel?e===0||e===1:e===0},setupKeeperPrediction(e,t,i){var a;if(!this.keeperUserDefends(t))return;(a=this.clearKeeperPrediction)==null||a.call(this),Ul();const s=this.duel&&t===1?"P2":"P1";this.keeperPrediction={type:e,defendingTeam:t,taker:i,zone:null,locked:!1,shot:!1,started:this.time},tr=this;const r=document.getElementById("keeperUI");if(!r)return;document.getElementById("keeperKicker").textContent=`GOALKEEPER · ${s} · ${e==="penalty"?"PENALTY":"FREE KICK"}`,document.getElementById("keeperPick").textContent="TAP A ZONE BEFORE THE SHOT",r.querySelectorAll(".keeper-zone").forEach(l=>l.classList.remove("selected")),r.classList.remove("hidden");const o=document.getElementById("keeperTimer");o&&(o.style.animation="none",o.offsetWidth,o.style.animation="keeper-drain 9s linear forwards"),this.aiSetPieceHold=1.35,clearTimeout(this._keeperTimer),this._keeperTimer=setTimeout(()=>{this.keeperPrediction&&!this.keeperPrediction.shot&&this.hideKeeperPredictionUI()},9e3)},chooseKeeperZone(e){var t,i;const a=this.keeperPrediction;if(!a||a.shot||a.locked||!Number.isInteger(e)||e<0||e>8)return;a.zone=e,a.locked=!0;const s=document.getElementById("keeperUI");s?.querySelectorAll(".keeper-zone").forEach(o=>{o.classList.toggle("selected",Number(o.dataset.zone)===e)});const r=document.getElementById("keeperPick");r&&(r.textContent=`LOCKED · ${fg[e]}`),this.aiSetPieceHold>0&&(this.aiSetPieceHold=Math.min(this.aiSetPieceHold,.35)),(i=(t=this.audio)==null?void 0:t.click)==null||i.call(t)},hideKeeperPredictionUI(){var e;(e=document.getElementById("keeperUI"))==null||e.classList.add("hidden"),tr=null},clearKeeperPrediction(){clearTimeout(this._keeperTimer),this.hideKeeperPredictionUI(),this.keeperPrediction=null},shotZone(e,t){const i=e<-1.22?0:e>N.goalHalfWidth/3?2:1;return(t>N.goalHeight*.68?0:t<N.goalHeight*.34?2:1)*3+i},aiKeeperZone(e,t){var i;const a=(((i=e.attrs)==null?void 0:i.reflex)??e.rating)/100,s=D(.28+this.diff.gk*.26+a*.28,.3,.84);if(Math.random()<s)return t;const r=Math.floor(t/3),o=t%3,l=o===0?Math.random()<.55?0:1:o===2?Math.random()<.55?2:1:Math.random()<.5?0:2;return(Math.random()<.72?r:Math.random()<.5?Math.max(0,r-1):Math.min(2,r+1))*3+l},registerKeeperShot(e,t){const i=this.players.find(v=>v.active&&v.team!==e.team&&v.isGK);if(!i)return;const a=this.shotZone(t.x,t.y),s=this.keeperPrediction;let r=null,o=0;s&&s.defendingTeam===i.team&&!s.shot?(s.shot=!0,r=s.zone??this.aiKeeperZone(i,a)):r=this.aiKeeperZone(i,a);const l=a%3,c=Math.floor(a/3),h=r%3,u=Math.floor(r/3),f=Math.abs(l-h)+Math.abs(c-u);o=f===0?1:f===1?.52:0;const d=(h-1)*N.goalHalfWidth*.62;i.diveDir=h-1,i.diveTargetX=D(d,-3.66+.3,N.goalHalfWidth-.3),i.diveTimer=.72,i.gkDive=Math.max(i.gkDive||0,.72),i.keeperReadQuality=o,this.hideKeeperPredictionUI(),this.keeperPrediction=null,this.aiSetPieceHold=0}})}const Ol=[{id:"stadium",duration:4.2},{id:"walkout",duration:5.4},{id:"lineup",duration:5.6}],gg={cup:"CLUB CUP",match:"LEAGUE MATCH",spectate:"LEAGUE MATCH",highlights:"LEAGUE MATCH",duel:"ONLINE 1V1",training:"TRAINING"};function Xi(n){return String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function kt(n){return document.getElementById(n)}function vg(n){const e=n.prototype.update;Object.assign(n.prototype,{startMatchday(){var t,i;if(this.mode==="training"||this.matchday)return!1;this._matchdayDone=!1;const a=Ol[0];this.matchday={index:0,phase:a.id,t:0,duration:a.duration,active:!0,skipped:!1},this.mdSavedState=this.state,this.ownGoalZ(0);const s=-52.5+2.6;for(const r of this.players){if(!r.active)continue;const o=r.number||1,l=r.team===0?-1:1,c=this.players.filter(f=>f.active&&f.team===r.team&&(f.number||0)<o).length,h=Math.floor(c/4),u=c%4;r.mdFrom={x:l*(2.2+u*1.5),z:s-h*2.1},r.mdTo=null,r.pos.x=r.mdFrom.x,r.pos.z=r.mdFrom.z,r.vel.x=0,r.vel.z=0,r.mvx=0,r.mvz=0,r.facing=0,r.speedNow=0}return this.renderMatchday(),(t=kt("matchday"))==null||t.classList.remove("hidden"),document.body.classList.add("matchday-active"),(i=this.onState)==null||i.call(this,"matchday"),!0},matchdaySkip(){var t;(t=this.matchday)!=null&&t.active&&this.finishMatchday(!0)},advanceMatchday(t){const i=this.matchday;if(i!=null&&i.active){if(i.t+=t,i.phase==="walkout"){const a=D(i.t/i.duration,0,1),s=a*a*(3-2*a);for(const r of this.players){if(!r.active||!r.mdFrom)continue;const o=this.matchdayKickoffSpot(r);r.pos.x=r.mdFrom.x+(o.x-r.mdFrom.x)*s,r.pos.z=r.mdFrom.z+(o.z-r.mdFrom.z)*s,r.facing=Math.atan2(o.x-r.mdFrom.x,o.z-r.mdFrom.z)||0,r.speedNow=s>.02&&s<.98?4.5:0,r.runPhase+=t*9}}if(i.t>=i.duration){i.index++;const a=Ol[i.index];if(!a){this.finishMatchday(!1);return}i.phase=a.id,i.t=0,i.duration=a.duration,this.renderMatchday()}this.updateMatchdayCamera(t)}},matchdayKickoffSpot(t){const i=this.homePos(t),a=this.ownGoalZ(t.team);return{x:i.x*.94,z:a+(i.z-a)*.55}},updateMatchdayCamera(t){const i=this.matchday,a=this.camera,s=D(i.t/Math.max(.001,i.duration),0,1);let r,o,l;if(i.phase==="stadium"){const h=-1.15+s*.5,u=62-s*16;r=new P(Math.sin(h)*u,41-s*13,Math.cos(h)*u),o=new P(0,1.5,0),l=46}else if(i.phase==="walkout"){const h=-45.5+s*10;r=new P(18-s*6,5.4+s*1.6,h-8),o=new P(0,1.2,h+6),l=52}else r=new P(30-s*6,24+s*3,-26+s*14),o=new P(0,1.1,2),l=48;const c=1-Math.exp(-3.6*t);this.camPos.lerp(r,c),this.camLook.lerp(o,c),a.position.copy(this.camPos),a.up.set(0,1,0),a.lookAt(this.camLook),Math.abs(a.fov-l)>.05&&(a.fov+=(l-a.fov)*(1-Math.exp(-5*t)),a.updateProjectionMatrix())},renderMatchday(){var t,i,a,s,r;const o=this.matchday,l=kt("matchday");if(!l||!o)return;const c=(t=this.teams)==null?void 0:t[0],h=(i=this.teams)==null?void 0:i[1],u=gg[this.mode]||"LEAGUE MATCH",f=((a=this.presentation)==null?void 0:a.stadiumName)||((s=this.presentation)==null?void 0:s.stadium)||"emirates",d=String(f).replace(/[-_]/g," ").replace(/\b\w/g,m=>m.toUpperCase()),v=kt("mdStage"),x=kt("mdCards");if(v&&(v.textContent=o.phase==="stadium"?"WELCOME":o.phase==="walkout"?"PLAYER WALKOUT":"STARTING LINEUPS"),kt("mdCompetition")&&(kt("mdCompetition").textContent=u),kt("mdStadium")&&(kt("mdStadium").textContent=String(d).toUpperCase()),kt("mdHome")&&(kt("mdHome").textContent=c?.name||c?.short||"HOME",kt("mdHome").style.borderColor=c?.primary||"#c6ff45"),kt("mdAway")&&(kt("mdAway").textContent=h?.name||h?.short||"AWAY",kt("mdAway").style.borderColor=h?.primary||"#ff5566"),x&&(x.innerHTML="",o.phase==="lineup"))for(const m of[0,1]){const g=(r=this.teams)==null?void 0:r[m],y=this.players.filter(C=>C.active&&C.team===m).sort((C,w)=>C.isGK?-1:w.isGK?1:(C.role||"").localeCompare(w.role||"")),_=y.reduce((C,w)=>!C||w.rating>C.rating?w:C,null),b=document.createElement("div");b.className="md-card",b.innerHTML=`<h3 style="border-color:${Xi(g?.primary||"#fff")}">${Xi(g?.name||"")}<span>${Xi(g?.formation||"")}</span></h3><ul>${y.map(C=>`<li><b>${Xi(C.number)}</b><span>${Xi(C.name)}</span><i>${C.isGK?"GK":Xi(C.role||"")}</i><u>${Xi(C.rating)}${C===_?" · C":""}</u></li>`).join("")}</ul>`,x.appendChild(b)}l.dataset.phase=o.phase},finishMatchday(t=!1){var i,a,s,r;if(this.matchday){this.matchday=null,this._matchdayDone=!0,(i=kt("matchday"))==null||i.classList.add("hidden"),document.body.classList.remove("matchday-active");for(const o of this.players)o.mdFrom=null,o.mdTo=null,o.speedNow=0,o.mvx=0,o.mvz=0,o.vel.x=0,o.vel.z=0;this.setupKickoff(this.kickoffTeam??0),this.camPos.set(46,34,2),this.camLook.set(0,.6,-1),(a=this.onState)==null||a.call(this,this.state),t||(r=(s=this.audio)==null?void 0:s.whistle)==null||r.call(s,!1)}}}),n.prototype.update=function(t){var i,a,s,r;const o=Math.min(Math.max(t,1e-4),.05);if(!this._matchdayDone&&!this.matchday&&this.mode!=="training"&&this.state==="kickoff"&&this.time>.001&&this.startMatchday(),(i=this.matchday)!=null&&i.active){this.time+=o,this.advanceMatchday(o),(a=this.updateVisuals)==null||a.call(this,o),(r=(s=this.hud)==null?void 0:s.sync)==null||r.call(s,this);return}return e.call(this,t)},document.addEventListener("click",t=>{var i,a,s,r,o;if(!((a=(i=t.target)==null?void 0:i.closest)!=null&&a.call(i,"#mdSkip")))return;const l=(r=(s=window.__tdfc)==null?void 0:s.state)==null?void 0:r.match;(o=l?.matchday)!=null&&o.active&&l.matchdaySkip()}),document.addEventListener("keydown",t=>{var i,a,s;if(!t||t.key!=="Escape"&&t.key!==" "&&t.key!=="Enter")return;const r=(a=(i=window.__tdfc)==null?void 0:i.state)==null?void 0:a.match;(s=r?.matchday)!=null&&s.active&&(t.preventDefault(),r.matchdaySkip())})}const xg={attack:.5,width:0,behind:.3,support:.5,cross:.2,inside:0,press:.5,track:.5,mark:.4,cover:.2,aggr:.45,risk:.45,recycle:.2,hold:.3,pass:.5,through:.25,shot:.25,dribble:.25,box:"support"},Oe=(n,e,t,i={})=>({...xg,...i,id:n,label:e,group:t}),Fe={traditional_gk:Oe("traditional_gk","Traditional Goalkeeper","GK",{attack:.05,press:.1,hold:.9,pass:.3,risk:.18,box:"keeper"}),sweeper_keeper:Oe("sweeper_keeper","Sweeper Keeper","GK",{attack:.18,press:.3,cover:.8,pass:.55,risk:.38,box:"keeper"}),ball_playing_gk:Oe("ball_playing_gk","Ball-Playing Goalkeeper","GK",{attack:.12,press:.2,cover:.5,pass:.8,risk:.3,box:"keeper"}),defender_cb:Oe("defender_cb","Defender","CB",{attack:.25,press:.45,mark:.72,cover:.6,hold:.75,pass:.42,box:"hold"}),stopper_cb:Oe("stopper_cb","Stopper","CB",{attack:.28,press:.78,mark:.78,cover:.35,aggr:.72,hold:.45,box:"hold"}),ball_playing_defender:Oe("ball_playing_defender","Ball-Playing Defender","CB",{attack:.42,press:.4,mark:.52,cover:.58,pass:.8,risk:.58,hold:.45,box:"support"}),cover_defender:Oe("cover_defender","Cover Defender","CB",{attack:.18,press:.3,mark:.35,cover:.9,hold:.9,box:"hold"}),aggressive_defender:Oe("aggressive_defender","Aggressive Defender","CB",{attack:.32,press:.85,mark:.7,cover:.3,aggr:.88,risk:.65,box:"hold"}),fullback:Oe("fullback","Fullback","FB",{attack:.48,width:.8,support:.65,cross:.45,press:.48,mark:.55,track:.7,box:"recycle"}),attacking_wingback:Oe("attacking_wingback","Attacking Wingback","FB",{attack:.72,width:.95,behind:.55,support:.7,cross:.8,press:.6,track:.6,mark:.35,risk:.62,box:"far"}),inverted_wingback:Oe("inverted_wingback","Inverted Wingback","FB",{attack:.55,width:-.5,support:.8,inside:.7,cross:.3,press:.55,mark:.55,pass:.72,box:"edge"}),falseback:Oe("falseback","Falseback","FB",{attack:.46,width:-.35,support:.8,inside:.6,cross:.3,press:.5,mark:.5,pass:.76,box:"edge"}),defensive_wingback:Oe("defensive_wingback","Defensive Wingback","FB",{attack:.4,width:.7,support:.55,cross:.35,press:.4,mark:.68,track:.8,box:"recycle"}),holding_midfielder_dm:Oe("holding_midfielder_dm","Holding Midfielder","DM",{attack:.34,support:.65,press:.5,mark:.62,cover:.8,hold:.8,pass:.7,box:"edge"}),ball_winning_midfielder:Oe("ball_winning_midfielder","Ball-Winning Midfielder","DM",{attack:.3,support:.6,press:.9,mark:.7,cover:.65,aggr:.82,box:"edge"}),deep_lying_playmaker_dm:Oe("deep_lying_playmaker_dm","Deep-Lying Playmaker","DM",{attack:.42,support:.9,press:.35,cover:.8,pass:.92,risk:.62,box:"edge"}),half_back:Oe("half_back","Half-Back","DM",{attack:.22,support:.6,press:.3,mark:.55,cover:.95,hold:.9,box:"edge"}),defensive_anchor:Oe("defensive_anchor","Defensive Anchor","DM",{attack:.18,support:.55,press:.25,mark:.5,cover:.95,hold:.95,pass:.6,box:"edge"}),box_to_box:Oe("box_to_box","Box-to-Box Midfielder","CM",{attack:.6,behind:.55,support:.7,press:.65,track:.7,pass:.62,box:"center"}),playmaker_cm:Oe("playmaker_cm","Playmaker","CM",{attack:.58,support:.9,press:.35,cover:.55,pass:.9,through:.65,risk:.62,box:"edge"}),deep_lying_playmaker_cm:Oe("deep_lying_playmaker_cm","Deep-Lying Playmaker","CM",{attack:.44,support:.95,press:.3,cover:.65,pass:.88,risk:.58,box:"edge"}),mezzala:Oe("mezzala","Mezzala","CM",{attack:.67,width:.35,behind:.55,support:.7,inside:.5,pass:.7,dribble:.55,box:"edge"}),roaming_playmaker_cm:Oe("roaming_playmaker_cm","Roaming Playmaker","CM",{attack:.64,width:.2,support:.9,press:.4,pass:.88,risk:.68,box:"edge"}),holding_midfielder_cm:Oe("holding_midfielder_cm","Holding Midfielder","CM",{attack:.32,support:.7,press:.45,cover:.75,hold:.8,pass:.66,box:"edge"}),advanced_playmaker:Oe("advanced_playmaker","Advanced Playmaker","AM",{attack:.8,support:.9,press:.35,pass:.9,through:.7,risk:.7,box:"edge"}),shadow_striker:Oe("shadow_striker","Shadow Striker","AM",{attack:.9,behind:.8,press:.55,shot:.78,pass:.6,box:"center"}),classic_no10:Oe("classic_no10","Classic Number 10","AM",{attack:.78,support:.92,press:.22,pass:.9,through:.75,risk:.82,hold:.55,box:"edge"}),roaming_playmaker_am:Oe("roaming_playmaker_am","Roaming Playmaker","AM",{attack:.74,width:.25,support:.88,press:.4,pass:.84,risk:.7,box:"edge"}),traditional_winger:Oe("traditional_winger","Traditional Winger","W",{attack:.88,width:.95,behind:.65,cross:.92,pass:.58,box:"cutback"}),inside_forward:Oe("inside_forward","Inside Forward","W",{attack:.94,width:.35,inside:.82,behind:.62,shot:.9,cross:.4,dribble:.62,box:"far"}),inverted_winger:Oe("inverted_winger","Inverted Winger","W",{attack:.87,width:.3,inside:.85,behind:.5,shot:.7,pass:.65,dribble:.7,box:"far"}),wide_playmaker:Oe("wide_playmaker","Wide Playmaker","W",{attack:.7,width:.75,support:.9,pass:.9,cross:.62,risk:.62,box:"cutback"}),wide_midfielder:Oe("wide_midfielder","Wide Midfielder","W",{attack:.6,width:.85,support:.7,track:.75,cross:.6,press:.45,box:"far"}),poacher:Oe("poacher","Poacher","ST",{attack:.98,behind:.85,support:.22,press:.3,shot:.96,pass:.4,box:"near"}),advanced_forward:Oe("advanced_forward","Advanced Forward","ST",{attack:.98,behind:.92,support:.35,press:.58,shot:.86,pass:.48,box:"far"}),false_nine:Oe("false_nine","False Nine","ST",{attack:.76,behind:.32,support:.8,outside:!0,shot:.62,pass:.78,box:"support"}),target_forward:Oe("target_forward","Target Forward","ST",{attack:.9,behind:.25,support:.5,press:.45,shot:.8,pass:.42,box:"center",hold:.7}),complete_forward:Oe("complete_forward","Complete Forward","ST",{attack:.95,behind:.65,support:.58,press:.6,shot:.88,pass:.68,dribble:.6,box:"near"}),pressing_forward:Oe("pressing_forward","Pressing Forward","ST",{attack:.9,behind:.6,press:.95,track:.6,shot:.76,pass:.55,box:"near"}),deep_lying_forward:Oe("deep_lying_forward","Deep-Lying Forward","ST",{attack:.8,behind:.25,support:.82,press:.35,shot:.68,pass:.75,box:"support"})},Ma={balanced:{id:"balanced",label:"Balanced",width:1,length:1,line:0,press:1,tempo:1,risk:1,direct:.5,support:1,compact:1,counter:.5,cross:.5},possession:{id:"possession",label:"Possession",width:1,length:.95,line:.08,press:.9,tempo:.82,risk:.82,direct:.25,support:1.2,compact:.95,counter:.35,cross:.45},tikitaka:{id:"tikitaka",label:"Tiki-Taka",width:.94,length:.88,line:.16,press:1.05,tempo:.74,risk:.72,direct:.15,support:1.38,compact:.9,counter:.3,cross:.3},counter:{id:"counter",label:"Counter-Attack",width:1.02,length:1.08,line:-.38,press:.72,tempo:1.25,risk:1.12,direct:.82,support:.78,compact:1.05,counter:1.35,cross:.55},direct:{id:"direct",label:"Direct Football",width:1.08,length:1.05,line:.06,press:.95,tempo:1.26,risk:1.14,direct:.92,support:.74,compact:1,counter:.6,cross:.62},wing_play:{id:"wing_play",label:"Wing Play",width:1.3,length:1,line:.12,press:1,tempo:1.04,risk:1.04,direct:.55,support:1.06,compact:.95,counter:.55,cross:1.35},gegenpressing:{id:"gegenpressing",label:"Gegenpressing",width:1,length:1,line:.48,press:1.42,tempo:1.2,risk:1.14,direct:.56,support:1,compact:.95,counterPress:1.45,cross:.5},high_press:{id:"high_press",label:"High Press",width:1,length:1.05,line:.55,press:1.32,tempo:1.12,risk:1.05,direct:.62,support:1,compact:.95,counterPress:1.1,cross:.5},mid_block:{id:"mid_block",label:"Mid-Block",width:.95,length:.9,line:.04,press:.95,tempo:.95,risk:.9,direct:.56,support:.9,compact:1.1,counter:.7,cross:.45},low_block:{id:"low_block",label:"Low Block",width:.88,length:.78,line:-.55,press:.55,tempo:.84,risk:.76,direct:.6,support:.75,compact:1.22,counter:.8,cross:.4},long_ball:{id:"long_ball",label:"Long Ball",width:1.04,length:1.12,line:.18,press:.82,tempo:1.22,risk:1.16,direct:1,support:.78,compact:1,counter:.55,cross:.55},high_line:{id:"high_line",label:"High Defensive Line",width:1,length:1,line:.62,press:1.08,tempo:1,risk:1,direct:.5,support:1.06,compact:.92,counter:.5,cross:.48},defensive:{id:"defensive",label:"Defensive",width:.9,length:.8,line:-.35,press:.52,tempo:.8,risk:.7,direct:.62,support:.7,compact:1.18,counter:.75,cross:.4}};Object.values(Ma).map(({id:n,label:e})=>({id:n,label:e}));const _g={riverton:"balanced",azure:"possession",capital:"direct",verde:"wing_play",nero:"counter",solar:"tikitaka",harbor:"low_block",northgate:"high_press"},yg={GK:{possession:"ball_playing_gk",tikitaka:"ball_playing_gk",gegenpressing:"sweeper_keeper",high_press:"sweeper_keeper",high_line:"sweeper_keeper",low_block:"traditional_gk",defensive:"traditional_gk"},CB:{possession:"ball_playing_defender",tikitaka:"ball_playing_defender",gegenpressing:"stopper_cb",high_press:"stopper_cb",counter:"cover_defender",low_block:"cover_defender",defensive:"cover_defender",direct:"defender_cb",long_ball:"defender_cb",high_line:"cover_defender"},FB:{wing_play:"attacking_wingback",gegenpressing:"attacking_wingback",high_press:"attacking_wingback",possession:"inverted_wingback",tikitaka:"inverted_wingback",counter:"fullback",low_block:"defensive_wingback",defensive:"defensive_wingback",direct:"fullback"},DM:{possession:"deep_lying_playmaker_dm",tikitaka:"deep_lying_playmaker_dm",gegenpressing:"ball_winning_midfielder",high_press:"ball_winning_midfielder",counter:"holding_midfielder_dm",low_block:"half_back",defensive:"defensive_anchor",direct:"holding_midfielder_dm"},CM:{possession:"playmaker_cm",tikitaka:"playmaker_cm",gegenpressing:"box_to_box",high_press:"box_to_box",wing_play:"mezzala",counter:"box_to_box",low_block:"holding_midfielder_cm",defensive:"holding_midfielder_cm",direct:"box_to_box"},AM:{possession:"advanced_playmaker",tikitaka:"advanced_playmaker",direct:"shadow_striker",long_ball:"shadow_striker",low_block:"roaming_playmaker_am",defensive:"roaming_playmaker_am"},W:{wing_play:"traditional_winger",possession:"wide_playmaker",tikitaka:"wide_playmaker",counter:"inside_forward",direct:"wide_midfielder",long_ball:"wide_midfielder",low_block:"wide_midfielder",defensive:"wide_midfielder",gegenpressing:"inside_forward",high_press:"inside_forward"},ST:{direct:"target_forward",long_ball:"target_forward",counter:"advanced_forward",gegenpressing:"pressing_forward",high_press:"pressing_forward",possession:"false_nine",tikitaka:"false_nine",low_block:"deep_lying_forward",defensive:"deep_lying_forward"}};function Mg(n){return _g[n?.id]||"balanced"}function bg(n){return n.isGK||n.role==="GK"?"GK":n.role==="DEF"?Math.abs(n.baseX)>=15?"FB":"CB":n.role==="MID"?Math.abs(n.baseX)>=20&&n.baseDepth<.46?"FB":Math.abs(n.baseX)>=18?"W":n.baseDepth<=.36?"DM":n.baseDepth>=.52?"AM":"CM":n.role==="ATT"?Math.abs(n.baseX)>=15?"W":"ST":"CM"}function Sg(n,e){const t=n.attrs||{},i=(a,s=70)=>t[a]??s;return e==="GK"?i("passing")>=78&&i("vision")>=70?Fe.ball_playing_gk:i("pace")>=66||i("control")>=76?Fe.sweeper_keeper:Fe.traditional_gk:e==="CB"?i("passing")>=80?Fe.ball_playing_defender:i("pace")>=80?Fe.cover_defender:i("physical")>=82&&i("aggression",55)>=70?Fe.stopper_cb:(i("tackling")>=80,Fe.defender_cb):e==="FB"?i("crossing")>=78&&i("pace")>=78?Fe.attacking_wingback:i("passing")>=80&&i("control")>=76?Fe.inverted_wingback:i("tackling")>=78&&i("pace")<72?Fe.defensive_wingback:i("passing")>=84?Fe.falseback:Fe.fullback:e==="DM"?i("passing")>=82&&i("vision")>=78?Fe.deep_lying_playmaker_dm:i("tackling")>=80?Fe.ball_winning_midfielder:i("physical")>=80?Fe.defensive_anchor:i("control")>=78?Fe.half_back:Fe.holding_midfielder_dm:e==="CM"?i("vision")>=82&&i("passing")>=80?Fe.playmaker_cm:i("stamina")>=80&&i("physical")>=72?Fe.box_to_box:i("passing")>=80&&i("tackling")>=70?Fe.deep_lying_playmaker_cm:i("control")>=78&&i("pace")>=75?Fe.mezzala:i("vision")>=80&&i("flair")>=75?Fe.roaming_playmaker_cm:Fe.holding_midfielder_cm:e==="AM"?i("shooting")>=80?Fe.shadow_striker:i("passing")>=80&&i("vision")>=78?Fe.advanced_playmaker:i("flair")>=80?Fe.classic_no10:Fe.roaming_playmaker_am:e==="W"?i("crossing")>=80&&i("pace")>=78?Fe.traditional_winger:i("shooting")>=78&&i("control")>=74?Fe.inside_forward:i("control")>=80?Fe.inverted_winger:i("passing")>=80&&i("vision")>=78?Fe.wide_playmaker:Fe.wide_midfielder:i("shooting")>=82&&i("pace")>=80?Fe.poacher:i("physical")>=80?Fe.target_forward:i("passing")>=80&&i("vision")>=78?Fe.false_nine:i("stamina")>=80&&i("aggression",55)>=70?Fe.pressing_forward:i("shooting")>=78&&i("passing")>=72?Fe.complete_forward:i("passing")>=74?Fe.deep_lying_forward:Fe.advanced_forward}function Tg(n,e,t){var i;const a=(i=yg[n])==null?void 0:i[t],s=a&&Fe[a];return s?.group===n?s:e}function wg(n){const e=n.attrs||{},t=(o,l=70)=>e[o]??l,i=String(n.id??n.name??n.number??"x");let a=2166136261;for(let o=0;o<i.length;o++)a^=i.charCodeAt(o),a=Math.imul(a,16777619);const s=o=>{const l=Math.sin(((a>>>0)%1e5+o*977)*1e-4)*1e4;return(l-Math.floor(l)-.5)*9},r=n.ego??50;return[["creative",t("vision")*.55+t("passing")*.45],["aggressive",t("aggression",55)*.6+t("physical")*.4],["composed",t("composure")*.7+t("concentration",70)*.3],["risk-taking",r*.5+t("flair")*.5],["defensive-minded",n.isGK?96:t("tackling")*.5+t("defAwareness",70)*.5],["hard-working",t("stamina")*.5+t("workRate",70)*.5],["technical",t("control")*.5+t("dribbling",70)*.5],["unpredictable",t("flair")*.7+(100-t("composure"))*.3],["selfless",t("teamwork",70)*.6+(100-r)*.4],["confident",t("composure")*.45+t("finishing",t("shooting",70))*.55],["disciplined",t("teamwork",70)*.5+t("concentration",70)*.5],["flair",t("flair")*.6+t("agility",70)*.4],["press-resistant",t("balance",70)*.5+t("control")*.5],["leader",t("leadership",70)*.7+t("composure")*.3]].map(([o,l])=>[o,l+s(o.length+o.charCodeAt(0))]).sort((o,l)=>l[1]-o[1]).filter(([,o])=>o>=76).slice(0,3).map(([o])=>o)}function Eg(n){const e=n.prototype.buildPlayers,t=n.prototype.setFormation,i=n.prototype.substitute,a=n.prototype.setTactics;Object.assign(n.prototype,{intelDefaultStyle(s){var r;return Mg((r=this.teams)==null?void 0:r[s])},intelPlan(s){var r,o,l;if(!((r=this.teams)!=null&&r[s]))return Ma.balanced;const c=this.time||0;this._intelPlans=this._intelPlans||[null,null];const h=this._intelPlans[s];if(h&&c-h.at<.4)return h;const u=this.teams[s].tactics||{},f=Ma[u.style]?u.style:this.intelDefaultStyle(s),d=Ma[f]||Ma.balanced,v=(((o=this.score)==null?void 0:o[s])||0)-(((l=this.score)==null?void 0:l[1-s])||0),x=this.clock||0,m=x>=68,g=x>=82,y=u.mentality||"balanced",_=u.pressing||"mid",b=y==="attack",C=y==="defend",w=this.players?this.players.filter(I=>I.active&&I.team===s&&!I.isGK).reduce((I,z)=>I+z.stamina/Math.max(1,z.staminaMax||100),0)/Math.max(1,this.players.filter(I=>I.active&&I.team===s&&!I.isGK).length):1,E=m?v<0?1.22:v>0?.82:1.08:1,L=D(d.risk*E+(b?.12:0)-(C?.1:0),.45,1.6),k=D(d.line+(b?.18:0)-(C?.24:0)+(g&&v<0?.16:0),-1,1),M=D(d.press*(_==="high"?1.24:_==="low"?.62:1)*(g&&v>0?.82:1),.3,1.8),S={...d,team:s,style:f,at:c,mentality:y,pressing:_,risk:L,line:k,press:M,width:D(d.width*(b?1.07:C?.92:1),.72,1.45),length:D(d.length*(b?1.05:C?.9:1),.68,1.3),support:D(d.support*(w<.35?.9:1),.68,1.45),compact:D(d.compact*(C?1.12:1),.75,1.4),tempo:D(d.tempo*(w<.3?.86:1),.65,1.4),fatigue:w,late:m,veryLate:g,diff:v};return this._intelPlans[s]=S,S},intelInvalidate(s=null){this._intelPlans&&(s==null?this._intelPlans=[null,null]:this._intelPlans[s]=null)},refreshPlayerIntel(s){var r,o,l,c,h,u;if(!(s!=null&&s.active)&&!(s!=null&&s.isBench))return;const f=bg(s),d=((r=s.intel)==null?void 0:r.group)===f&&(o=s.intel)!=null&&o.preferredRole&&s.intel.preferredRole.group===f?s.intel.preferredRole:Sg(s,f),v=this.intelPlan(s.team),x=Tg(f,d,v.style),m=s.outOfPosition??(((l=s.data)==null?void 0:l.role)&&s.data.role!==s.role&&s.data.role!=="GK"&&s.role!=="GK"),g=x.id===d.id?1:m?.58:.78;s.intel={preferredRole:d,role:x,group:f,familiarity:g,traits:wg(s),followTimer:((c=s.intel)==null?void 0:c.followTimer)||0,tackleTimer:((h=s.intel)==null?void 0:h.tackleTimer)||0,lastAction:((u=s.intel)==null?void 0:u.lastAction)||null}},refreshIntelSquad(s=null){var r,o,l;if(!this.players)return;const c=s==null?[...this.players,...((r=this.bench)==null?void 0:r[0])||[],...((o=this.bench)==null?void 0:o[1])||[]]:[...this.players.filter(h=>h.team===s),...((l=this.bench)==null?void 0:l[s])||[]];for(const h of c)this.refreshPlayerIntel(h)},intelHasTrait(s,r){var o,l;return!!((l=(o=s.intel)==null?void 0:o.traits)!=null&&l.includes(r))},intelEffectiveSpeed(s){return .72+.28*(s.stamina/Math.max(1,s.staminaMax||100))},intelShotQuality(s,r=null){const o=s.attrs||{},l=this.attackDir[s.team]*N.halfLength,c=Math.hypot(s.pos.x,l-s.pos.z),h=Math.atan2(Math.abs(s.pos.x),Math.max(.8,Math.abs(l-s.pos.z))),u=this.players.find(b=>b.active&&b.team!==s.team&&b.isGK),f=u?Math.abs((u.pos.x||0)-s.pos.x):0,d=r??this.nearestOpponentDist(s),v=(o.finishing??o.shooting??70)/100,x=(o.composure??70)/100,m=(o.balance??70)/100,g=(this.intelHasTrait(s,"composed")?.025:0)+(this.intelHasTrait(s,"confident")?.02:0)-(this.intelHasTrait(s,"selfless")?.015:0),y=Math.abs(h)<.35&&o.weakFoot<=2?.025:0;let _=.16+(1-D(c/36,0,1))*.55+(1-D(h/1.25,0,1))*.18+(v-.7)*.35+(x-.7)*.18+(m-.7)*.12-D(d-1.1,0,5)*.045+(f>2.5?.04:0)+g+y;return this.inAttackingBox(s)&&(_+=.14),_=D(_,.02,.97),{quality:_,xg:_*.28,dGoal:c,angle:h,pressure:d}},intelPassOptions(s){var r,o,l;const c=this.intelPlan(s.team),h=(r=s.intel)==null?void 0:r.role,u=s.attrs||{},f=this.attackDir[s.team],d=[];for(const v of this.players){if(!v.active||v.team!==s.team||v===s||v.isGK)continue;const x=he(s.pos.x,s.pos.z,v.pos.x,v.pos.z);if(x<3.1||x>52)continue;const m=this.laneClearance(s.pos.x,s.pos.z,v.pos.x,v.pos.z,s.team),g=this.nearestOpponentAt(v.pos.x,v.pos.z,s.team),y=(v.pos.z-s.pos.z)*f,_=Math.sign(v.pos.x-s.pos.x),b=this.inAttackingBox(v),C=_!==0&&Math.sign(v.pos.x||1)!==Math.sign(s.pos.x||1)&&Math.abs(v.pos.x-s.pos.x)>17,w=Math.abs(s.pos.x)>21,E=s.pos.z*f>N.halfLength-28,L=w&&E&&b&&(h?.cross??.5)>.3,k=y>6&&m>2.15&&g>2.3&&(h?.through??.25)+(this.intelHasTrait(s,"creative")?.2:0)>.32,M=C&&x>19&&(u.vision??70)>66,S=m<1.9||g<1.35,I=(o=v.intel)==null?void 0:o.role,z=I?.group==="ST"||I?.group==="W"||I?.group==="AM";let O=.16+Math.min(m,12)*.055+Math.min(g,11)*.035+D(y,-20,34)*.012-x*.0035;x<18&&(O+=c.support*.06),z&&y>0&&(O+=.025),k&&(O+=.12+(h?.through??.25)*.12),L&&(O+=.08+c.cross*.1),M&&(O+=.035+(u.vision??70)/100*.04),S&&(O-=.16+(c.risk-1)*.06),y<-10&&c.direct>.7&&(O-=.11),b&&s.pos.z*f>N.halfLength-18&&Ag(v.pos.x)&&(O+=.04);const $=((l=s.intel)==null?void 0:l.familiarity)??1;O*=.9+$*.1,O=D(O,0,1.15),d.push({player:v,d:x,lane:m,open:g,forward:y,through:k,cross:L,switchPlay:M,risk:S,value:O,inBox:b})}return d.sort((v,x)=>x.value-v.value||x.forward-v.forward),d},intelCarryTarget(s,r=99){var o,l;const c=this.attackDir[s.team],h=c*N.halfLength,u=(o=s.intel)==null?void 0:o.role,f=this.nearestOpponent(s);let d=s.pos.x*.65,v=h-c*(this.inAttackingBox(s)?1.7:5);if(Math.abs(u?.width??0)>.55&&s.pos.z*c<N.halfLength-20?d=Math.sign(s.baseX||s.pos.x||1)*(N.halfWidth-5):(u?.inside??0)>.45&&(d+=(s.pos.x<0?1:-1)*4.5),((l=s.intel)==null?void 0:l.group)==="W"&&s.pos.z*c>N.halfLength-24&&(d=(s.pos.x>=0?-1:1)*7.5,v=h-c*9),f&&r<7){const x=s.pos.x-f.pos.x,m=s.pos.z-f.pos.z,g=Math.hypot(x,m)||1;d+=x/g*(u?.hold>.5?2.6:1.8),v+=m/g*1.2}return{x:D(d,-34+2.4,N.halfWidth-2.4),z:D(v,-52.5+2,N.halfLength-2)}},intelThinkCarrier(s){s.intel||this.refreshPlayerIntel(s);const r=this.ball;if(r.owner!==s)return!1;const o=this.intelPlan(s.team),l=s.intel.role,c=s.attrs||{},h=this.nearestOpponentDist(s),u=this.attackDir[s.team],f=u*N.halfLength;this.ownGoalZ(s.team);const d=this.inAttackingBox(s),v=Math.hypot(s.pos.x,f-s.pos.z),x=(c.decisions??70)/100,m=this.intelEffectiveSpeed(s);if(s.decisionTimer>0){const z=this.intelCarryTarget(s,h);return this.steer(s,z.x,z.z,.92,o.tempo>1.05&&h<7&&s.stamina>16),!0}s.decisionTimer=D(.2+(1-x)*.26+(1-m)*.18+(1-s.intel.familiarity)*.12,.14,.62);const g=this.intelPassOptions(s)[0]||null,y=this.intelShotQuality(s,h),_=this.intelHasTrait(s,"risk-taking"),b=this.intelHasTrait(s,"selfless"),C=(l.shot??.25)+(_?.07:0)-(b?.04:0)+(o.risk-1)*.08+s.stamina/Math.max(1,s.staminaMax||100)*.03;let w=y.quality*(.78+C);d&&(w+=.06);const E=g?.value??0,L=s.pos.z*u<-52.5+28&&h<2.4&&v>42,k=s.pos.z*u<-52.5+26,M=this.intelDribbleSpace(s);let S=.1+(l.dribble??.25)*.35+(c.control??70)/100*.15+M*.18-D(h-1.1,0,6)*.035+(_?.035:0);if(L&&(E<.7||h<1.5)){s.intel.lastAction="clear";const z=Math.sign(r.x||1);return this.kickBall(s,z*.12,u,29,6.5),!0}if(w>.42&&w>E+(b?.1:.02)&&(d||v<30))return s.intel.lastAction="shoot",this.shootAI(s,this.chooseShotAim(s,this.players.find(z=>z.team!==s.team&&z.isGK))),!0;if(g&&(g.value>.44||h<2.5&&g.risk===!1)&&(g.value>w+.02||h<2.1||o.direct>.7&&g.forward>7||g.through&&(c.vision??70)>67))return s.intel.lastAction=g.cross?"cross":g.through?"through":"pass",this.passTo(s,g.player,{through:g.through,cross:g.cross}),!0;if(h<2.25&&(l.hold>.4||this.intelHasTrait(s,"press-resistant"))&&s.shield<=0){s.intel.lastAction="shield",s.shield=.45;const z=this.nearestOpponent(s);if(z){const O=s.pos.x-z.pos.x,$=s.pos.z-z.pos.z,V=Math.hypot(O,$)||1;this.steer(s,s.pos.x+O/V*2.2,s.pos.z+$/V*1.2,.7,!1)}return!0}if(!k&&M>.45&&S>w+.03&&h<7&&h>2.1&&(c.flair??60)>72&&this.time-(s.intel.lastSkillAt||-10)>2.4&&(s.intel.lastSkillAt=this.time,this.aiSkillMove(s)))return s.intel.lastAction="skill",!0;s.intel.lastAction="carry";const I=this.intelCarryTarget(s,h);return this.steer(s,I.x,I.z,.94,M>.4&&o.tempo>.95&&s.stamina>14),!0},intelDribbleSpace(s){const r=this.attackDir[s.team],o={x:s.pos.x+Math.sin(s.facing||r)*5,z:s.pos.z+Math.cos(s.facing||r)*5},l=this.nearestOpponentAt(o.x,o.z,s.team);return D((l-1.2)/7,0,1)},intelOnsideLimit(s){const r=this.time||0;this._intelOnside=this._intelOnside||[null,null];const o=this._intelOnside[s];if(o&&r-o.at<.18)return o.z;const l=this.attackDir[s],c=this.players.filter(x=>x.active&&x.team!==s&&!x.isGK).sort((x,m)=>(m.pos.z-x.pos.z)*l),h=c[1]||c[0],u=this.ball.z*l,f=h?h.pos.z*l:-l*N.halfLength,d=Math.max(u,f)-.45,v=D(d,-52.5+3,N.halfLength-3);return this._intelOnside[s]={at:r,z:v},v},intelTeamShape(s){const r=this.time||0;this._intelShape=this._intelShape||[null,null];const o=this._intelShape[s];if(o&&r-o.at<.25)return o;let l=0,c=0;for(const u of this.players||[])!u.active||u.team!==s||u.isGK||(l+=this.homePos(u).z,c++);const h={at:r,meanSlot:c?l/c:0};return this._intelShape[s]=h,h},intelSupportTarget(s,r,o=1/60){const l=this.attackDir[s.team],c=this.ball,h=this.homePos(s),u=s.intel.role,f=s.intel.group,d=Math.sign(c.x||1),v=N.halfLength,x=c.z*l,m=D((x+v)/(v*2),0,1),g=this.opponentBacklineZ(s.team),y=x>v-26,_=x>v-18,b=D(N.halfWidth-5.5-r.width*2.2,17,28),C=this.intelTeamShape(s.team),w=D(c.z-C.meanSlot,-20,20)*.62;let E=s.baseX,L=h.z+l*w+l*(u.attack-.45)*6;const k=D(1-he(s.pos.x,s.pos.z,c.x,c.z)/44,0,1);if(E=We(E,c.x*.5,k*.18),L=We(L,c.z-l*8,k*.22),f==="FB"?E=Math.sign(s.baseX||d)*b:f==="W"?E=Math.sign(s.baseX||d)*b*.94:f==="CB"&&(E=D(E,-12,12)),f==="ST"){const z=(s.number%2===0?1:-1)*d;_?u.id==="false_nine"||u.id==="deep_lying_forward"?(E=D(d*6,-10,10),L=c.z-l*5):u.id==="target_forward"?(E=D(d*2.5,-7,7),L=l*(N.halfLength-7.5)):(E=D(z*(u.box==="far"?5.8:3.2),-7,7),L=l*(N.halfLength-(u.box==="far"?7.3:8.8))):(E=D(s.baseX+d*3,-14,14),L+=l*(y?4.5:1.5))}else f==="W"?y&&(u.inside>.55||u.box==="far")?(E=D((s.baseX>0?-1:1)*(6.5+s.number%3*1.6),-12,12),L=l*(N.halfLength-(u.box==="far"?8:11))):y&&(E=D(Math.sign(s.baseX||d)*(b-2),-31,N.halfWidth-3),L=Math.max(L*l,x+4)*l):f==="AM"?_?(E=D(d*4.8,-9,9),L=l*(N.halfLength-12)):(E=D(s.baseX*.72+d*4,-14,14),L+=l*2.5):f==="FB"?y&&Math.sign(s.baseX||d)===d&&u.attack>.55&&(L=Math.max(L*l,x+2)*l):f==="DM"?L=Math.min(L*l,x-5)*l:f==="CM"&&(L=Math.min(L*l,x-3)*l);const M=he(s.pos.x,s.pos.z,c.x,c.z);let S=0;for(const z of this.players)!z.active||z===s||z.team!==s.team||z.isGK||he(z.pos.x,z.pos.z,c.x,c.z)<M&&S++;S<2&&M<22&&(E=We(E,c.x+d*5,.45),L=We(L,c.z-l*3.5,.45)),s===c.owner&&u.attack>.7&&(L+=l*2.5);const I=this.intelOnsideLimit(s.team);L*l>I&&u.behind<.85&&(L=I/l);for(const z of this.players){if(!z.active||z===s||z.team!==s.team)continue;const O=E-z.pos.x,$=L-z.pos.z,V=Math.hypot(O,$);if(V<6&&V>.001){const Z=(6-V)*.5;E+=O/V*Z,L+=$/V*Z}}return s.intel.followTimer>0&&((c.z-l*1.2)*l>L*l&&(L=c.z-l*1.2),s.intel.followTimer=Math.max(0,s.intel.followTimer-o)),{x:D(E,-31,N.halfWidth-3),z:D(L,-v+3.5,v-3.5),progress:m,line:g}},intelThinkSupport(s,r=1/60){s.intel||this.refreshPlayerIntel(s);const o=this.ball;if(!o.owner||o.owner.team!==s.team)return!1;const l=this.intelPlan(s.team),c=this.intelSupportTarget(s,l,r),h=s.intel.role,u=c.progress,f=h.behind>.55&&u>.45||u>.62&&h.group!=="CB"||s.intel.followTimer>0,d=this.intelEffectiveSpeed(s);return this.steer(s,c.x,c.z,h.attack>.72?.98:.88,f&&s.stamina>14&&d>.5),!0},intelShouldSlide(s,r,o){var l;if(!r||!s.intel||o<1.3||o>2.5||s.slide>0||s.stun>.05||s.stamina<12)return!1;const c=this.time||0;if(c-(s.intel.lastSlideAt??-20)<3.4)return!1;const h=s.attrs||{},u=(h.slidingTackle??h.tackling??70)/100,f=(h.aggression??55)/100,d=(h.decisions??70)/100,v=((l=s.intel.role)==null?void 0:l.aggr)??.5,x=this.attackDir[s.team],m=r.pos.z*x<-52.5+34?.18:0,g=Math.abs(r.pos.x-s.pos.x),y=Math.hypot(s.vel.x,s.vel.z)>3.6?.05:0,_=D(.12+u*.52+f*.2+v*.16+m+y-g*.045-(d-.7)*.12,.08,.7);return Math.random()>_?!1:(s.intel.lastSlideAt=c,!0)},intelDefensiveLine(s,r){const o=this.ownGoalZ(s),l=this.attackDir[s],c=this.ball,h=31+(r.line||0)*9,u=D((c.z-(o+l*h))*.12,-4.5,4.5);return D(o+l*(h+u),-52.5+8,N.halfLength-8)},intelMarkFor(s,r,o){var l;const c=(l=s.intel)==null?void 0:l.group;let h=null,u=1/0;for(const f of this.players){if(!f.active||f.team===s.team||f.isGK)continue;const d=he(s.pos.x,s.pos.z,f.pos.x,f.pos.z);if(d>(c==="FB"?25:20))continue;const v=Math.abs(f.pos.x)>17,x=c==="FB"?v?0:7:c==="CB"?f.role==="ATT"?0:4:c==="DM"?f.role==="MID"?0:3:1,m=d*.45+x+Math.abs(f.pos.z-o)*.04;m<u&&(u=m,h=f)}return h},intelThinkDefend(s,r=1/60){var o;s.intel||this.refreshPlayerIntel(s),s.intel.tackleTimer=Math.max(0,(s.intel.tackleTimer||0)-r);const l=this.ball,c=this.intelPlan(s.team),h=this.attackDir[s.team],u=s.intel.role,f=l.owner,d=this.players.filter(k=>k.active&&k.team===s.team&&!k.isGK).sort((k,M)=>he(k.pos.x,k.pos.z,l.x,l.z)-he(M.pos.x,M.pos.z,l.x,l.z)).indexOf(s),v=this.intelDefensiveLine(s.team,c),x=this.ownGoalZ(s.team),m=Math.sign(l.x||1),g=Math.abs(l.x)>16,y=-h*1.35;let _=s.pos.x,b=v;if(!f){const k=he(s.pos.x,s.pos.z,l.x,l.z),M=D(k/Math.max(6.5,s.speed||8),0,.9),S=l.x+l.vx*M,I=l.z+l.vz*M;if(d===0)return this.steer(s,S,I,1.02,k>3.2),!0;if(k<5.5)return this.steer(s,S,I,1,k>1.6),!0;if(d===1&&k<12)return this.steer(s,We(s.pos.x,l.x,.42),We(s.pos.z,l.z,.36)+y,.96,k<9),!0}if(s.secondDefTimer>0&&f&&f.team!==s.team){const k=he(s.pos.x,s.pos.z,f.pos.x,f.pos.z);return _=We(s.pos.x,f.pos.x,.72),b=We(s.pos.z,f.pos.z+y,.72),this.steer(s,_,b,1.02,k>4),k<2.5&&s.kickCooldown<=0&&(k>1.5&&this.intelShouldSlide(s,f,k)?this.slideTackle(s):k<2.2&&this.tryTackle(s)),!0}if(d===0&&f&&f.team!==s.team){const k=he(s.pos.x,s.pos.z,f.pos.x,f.pos.z);if((k<9.5||c.press>1.18&&k<13.5||this.intelHasTrait(s,"aggressive")&&k<12)&&!(c.style==="low_block"&&l.z*h<-52.5+25))return _=f.pos.x+(s.pos.x-f.pos.x)*.12,b=f.pos.z+y,this.steer(s,_,b,1.04,k>3.5),k<2.5&&s.intel.tackleTimer<=0&&(s.intel.tackleTimer=.8+(1-(((o=s.attrs)==null?void 0:o.decisions)??70)/100)*.4,k>1.5&&this.intelShouldSlide(s,f,k)?this.slideTackle(s):k<2.15&&this.tryTackle(s)),!0}if(d===1&&f&&f.team!==s.team&&c.counterPress>.9){const k=he(s.pos.x,s.pos.z,f.pos.x,f.pos.z);if(k<10.5)return _=We(s.pos.x,f.pos.x,.52)-m*2.4,b=We(s.pos.z,f.pos.z+y,.58),this.steer(s,_,b,.98,k<10),!0}this.homePos(s);const C=s.intel.group,w=this.intelMarkFor(s,c,v),E=w?w.pos.z+y:null;_=s.baseX*D(1-(c.compact-1)*.45,.82,1)+D(l.x*.12,-5,5),b=v,C==="CB"?(b=v+h*(u.id==="cover_defender"?-1.3:.4),w&&(_=We(_,w.pos.x,.55),b=We(b,E,.42))):C==="FB"?(_=s.baseX>0?N.halfWidth-7:-27,b=v+h*(u.attack>.65?3.4:1.4),w&&(_=We(_,w.pos.x,.45),b=We(b,E,.35)),g&&(_=We(_,m*(N.halfWidth-8),.32))):C==="DM"?(_=s.baseX*.6+m*2.8,b=v+h*7.5,g&&(_=We(_,m*9,.25)),w&&(b=We(b,E,.3))):C==="CM"?(_=s.baseX*.62+m*5,b=v+h*(u.press>.6?10.5:12),d<3&&l.z*h>-52.5+23&&(b=We(b,l.z+y,.28))):C==="AM"||C==="W"?(_=s.baseX*.7+m*4.5,b=v+h*(C==="W"?14:16),g&&(_=We(_,m*(N.halfWidth-9),.25))):(_=s.baseX*.6+m*2.2,b=v+h*19),w&&C==="CB"&&w.pos.z*h>v*h+3&&(b=We(b,E,.62)),_=D(_,-34+2.5,N.halfWidth-2.5),b=D(b,-52.5+3,N.halfLength-3);const L=he(s.pos.x,s.pos.z,l.x,l.z)<25&&(d<4||s.pos.z*h>x*h+20);return this.steer(s,_,b,u.press>.7?.94:.84,L&&s.stamina>12),!0},chooseAdaptiveTactics(s){var r,o,l,c,h;const u=(r=this.teams)==null?void 0:r[s];if(!u)return null;const f=(((o=this.score)==null?void 0:o[s])||0)-(((l=this.score)==null?void 0:l[1-s])||0),d=this.clock||0,v=this.players.filter(_=>_.active&&_.team===s&&!_.isGK);if(!v.length)return null;const x=v.filter(_=>_.stamina<34).length;let m=null,g=null;if(d>=68&&(f<0?(m="attack",g="high"):f>0?(m="defend",g="low"):(m="balanced",g="high")),x>=4&&(g=g==="high"?"mid":g||"mid"),d>=82&&f<0&&(m="attack"),!m&&!g)return null;const y={};return m&&((c=u.tactics)==null?void 0:c.mentality)!==m&&(y.mentality=m),g&&((h=u.tactics)==null?void 0:h.pressing)!==g&&(y.pressing=g),Object.keys(y).length?y:null}}),n.prototype.buildPlayers=function(){e.call(this);for(let s=0;s<2;s++){const r=this.teams[s];r.tactics={style:this.intelDefaultStyle(s),mentality:"balanced",pressing:"mid",...r.tactics||{}},Ma[r.tactics.style]||(r.tactics.style=this.intelDefaultStyle(s))}this._intelPlans=[null,null],this.refreshIntelSquad()},n.prototype.setFormation=function(s,r){const o=t.call(this,s,r);return this.intelInvalidate(s),this.refreshIntelSquad(s),o},n.prototype.substitute=function(s,r,o){const l=i.call(this,s,r,o);return l&&(this.intelInvalidate(s),this.refreshIntelSquad(s)),l},n.prototype.setTactics=function(s,r){a.call(this,s,r),this.intelInvalidate(s),this.refreshIntelSquad(s)}}function Ag(n){return Math.abs(n)<10}const Fl=18,tn=.06,Bl=140,Ki=.38;class ui{constructor({scene:e,camera:t,home:i,away:a,difficulty:s,halfSeconds:r,input:o,input2:l=null,hud:c,audio:h,mode:u="match",presentation:f={},drill:d=null,onFinish:v,onHalftime:x,onGoal:m,onEvent:g,onSub:y,onState:_}){Uh(this,"autoSwitch",!0);var b;this.scene=e,this.camera=t,this.teams=[i,a],this.diff=s,this.halfSeconds=r,this.input=o,this.input2=l,this.duel=u==="duel",this.hud=c,this.audio=h,this.mode=u,this.drill=d,this.onFinish=v,this.onHalftime=x,this.onGoal=m,this.onEvent=g,this.onSub=y,this.onState=_,this.attackDir=[-1,1],this.players=[],this.bench=[[],[]],this.score=[0,0],this.possession=[0,0],this.stats={shots:[0,0],onTarget:[0,0],saves:[0,0],corners:[0,0],fouls:[0,0],passes:[0,0],passesCompleted:[0,0],tackles:[0,0],xg:[0,0],offsides:[0,0]},this.events=[],this.offsideSnap=null,this.half=1,this.halfElapsed=0,this.clock=0,this.time=0,this.state="kickoff",this.stateTimer=1.5,this.kickoffTeam=0,this.kickoffNext=0,this.pendingTaker=null,this.charge=0,this.charging=!1,this.tackleHold=-1,this.passTarget=null,this.passTimer=0,this.lastPass=null,this.lastShot=null,this.lastTouch={team:0,player:null},this.controlled=null,this.controlled2=null,this.autoControl=u!=="training"&&u!=="spectate"&&u!=="highlights",this.aiSetPieceHold=0,this.inputLocked=!1,this.drillLocked=!1,this.drillHud=null,this.subsUsed=[0,0],this.presentation={camera:"fcmobile",zoom:"normal",weather:"clear",...f},this.cameraMode=this.presentation.camera||"fcmobile",this.zoomFactor=(ks.find(w=>w.id===this.presentation.zoom)||ks[1]).factor;const C=wl.find(w=>w.id===this.presentation.weather)||wl[0];this.weather=C,this.grip=C.grip,this.replaysEnabled=(u==="match"||u==="highlights"||u==="spectate"||u==="duel")&&this.presentation.replays!==!1,this.assists=this.presentation.assists!==!1,this.replayFrames=[],this.replayTimer=0,this.replayActive=!1,this.replayTime=0,this.pendingReplay=null,this.speedNow=0,this.focus=new pe(0,0),this.camPos=new P(0,30,20),this.camLook=new P(0,0,-5),this._spinAxis=new P(1,0,0),this._basisForward=new P,this._basisRight=new P,this.ball={x:0,z:0,y:0,vx:0,vz:0,vy:0,curve:null,owner:null,ignore:null,ignoreTimer:0,spin:0,lastKick:null},this.ballVisual=F0(),e.add(this.ballVisual.root),this.ring=zl(),e.add(this.ring),this.ring2=zl(),this.ring2.material=this.ring2.material.clone(),this.ring2.material.color.setHex(5235711),e.add(this.ring2),this.restart=null,this.celebration=null,this.crowdPulse=0,this.extraGroup=new ct,e.add(this.extraGroup),this.buildPlayers(),u==="training"&&d?this.setupDrill(d):this.setupKickoff(0),(b=this.setupReferee)==null||b.call(this),this.focus.set(0,0),this.updateCamera(1),this.updateVisuals(.016)}buildPlayers(){var e,t;for(let i=0;i<2;i++){const a=this.teams[i],s=Ds[a.formation]||Ds["4-3-3"],r=((e=a.lineup)==null?void 0:e.starters)||[],o=((t=a.lineup)==null?void 0:t.bench)||[];r.forEach((l,c)=>{const h=s[c]||s[s.length-1],u=this.makePlayer(a,l,h,i,c,!1);this.players.push(u)}),o.forEach((l,c)=>{const h=s[Math.min(c+5,s.length-1)]||s[1],u=this.makePlayer(a,l,h,i,c,!0);u.active=!1,u.visual.root.visible=!1,this.bench[i].push(u)}),a.overall=Math.round(r.reduce((l,c)=>l+c.rating,0)/Math.max(1,r.length))}}makePlayer(e,t,i,a,s,r){const o=t.role!==i.role&&t.role!=="GK"&&i.role!=="GK",l=D((t.rating??e.rating)-(o?3:0),55,95),c=d0({...t,rating:l},i.role),h=(c.acceleration-70)*.055,u=i.role==="GK";let f=4.75+h+(i.role==="ATT"?.22:0),d=f+1.7+(c.pace-70)*.018+(i.role==="ATT"?.18:0);u&&(f=4.85+h*.42,d=5.8+h*.42);const v=Ch(e,u,t.id??`${a}-${s}`,t.number??0);return this.scene.add(v.root),{id:`${a}-${t.id??s}-${r?"b":"s"}`,team:a,isGK:u,isBench:r,active:!0,data:t,name:t.name,number:t.number??0,rating:l,role:i.role,naturalRole:t.role,outOfPosition:o,baseX:i.x,baseDepth:i.d,pos:{x:0,z:0},vel:{x:0,z:0},mvx:0,mvz:0,facing:a===0?Math.PI:0,attrs:c,ego:c.ego,personality:c.personality,speed:f,sprintSpeed:d,stamina:100,staminaMax:c.stamina,sprinting:!1,firstTouchError:0,reactionTimer:0,retreatTimer:0,celebration:0,restartAnim:0,throwAnim:0,kickAnim:0,speedNow:0,controlled:!1,visual:v,decisionTimer:Math.random()*.4,stun:0,slide:0,tackleTimer:0,kickCooldown:0,gkHold:.6,runPhase:Math.random()*6.28,spinTime:0,skillTimer:0,shield:0,secondDefTimer:0,aiBias:s%3}}dispose(){var e,t,i,a,s,r,o;(e=this.clearKeeperPrediction)==null||e.call(this),(t=this.disposeReferee)==null||t.call(this);for(const l of[...this.players,...this.bench[0],...this.bench[1]])this.scene.remove(l.visual.root);this.scene.remove(this.ballVisual.root),this.scene.remove(this.ring),this.scene.remove(this.ring2),(i=this.hideRestartUI)==null||i.call(this),this.scene.remove(this.extraGroup),(s=(a=this.extraGroup).clear)==null||s.call(a),(r=this.disposeDrill)==null||r.call(this),(o=this.disposeCorner)==null||o.call(this),this.players=[]}get lineupHome(){return this.teams[0].lineup}homePos(e){const t=this.attackDir[e.team];return{x:e.baseX,z:t*(e.baseDepth*N.halfLength*2-N.halfLength)}}ownGoalZ(e){return-this.attackDir[e]*N.halfLength}targetGoalZ(e){return this.attackDir[e]*N.halfLength}setupKickoff(e){var t,i,a,s;(t=this.clearKeeperPrediction)==null||t.call(this),this.state="kickoff",this.stateTimer=1.6,this.kickoffTeam=e,this.pendingTaker=null,this.ball.owner=null,this.ball.ignore=null,this.ball.ignoreTimer=0,this.charging=!1,this.charge=0,this.passTarget=null,this.restartType=null,this.replayActive=!1,this.pendingReplay=null,this.replayTimer=0,this.celebration=null,this.restart=null,(i=this.hideRestartUI)==null||i.call(this),this.hud.showReplay(!1);for(const o of this.players){if(!o.active)continue;const l=this.homePos(o),c=this.ownGoalZ(o.team);o.pos.x=l.x*.94,o.pos.z=c+(l.z-c)*.55,o.vel.x=0,o.vel.z=0,o.mvx=0,o.mvz=0,o.facing=this.attackDir[o.team]>0?0:Math.PI,o.stun=0,o.slide=0,o.kickCooldown=0,o.skillTimer=0,o.tackleTimer=0}const r=this.players.find(o=>o.team===e&&o.active&&o.role==="ATT"&&Math.abs(o.baseX)<1)||this.players.find(o=>o.team===e&&o.active&&o.role==="ATT")||this.players.find(o=>o.team===e&&o.active&&!o.isGK);this.ball.x=0,this.ball.z=0,this.ball.y=0,this.ball.vx=0,this.ball.vz=0,this.ball.vy=0,r&&(r.pos.x=0,r.pos.z=-this.attackDir[e]*1.15,r.facing=this.attackDir[e]>0?0:Math.PI,this.ball.owner=r,this.lastTouch={team:e,player:r}),this.mode==="spectate"||this.mode==="highlights"?(this.setControl(null,0),this.setControl(null,1)):this.duel?(this.setControl(e===0?r:this.nearestPlayerToBall(0,!1),0),this.setControl(e===1?r:this.nearestPlayerToBall(1,!1),1)):e===0&&r?this.setControl(r,0):this.setControl(this.nearestPlayerToBall(0,!1),0),this.hud.banner("KICK OFF",`${this.teams[e].short} · 1ST HALF`,1300),this.audio.whistle(!1),this.addEvent("kickoff","Kick off",0,""),this.replayFrames=[],this.recordTimer=0,(s=(a=this.referee)==null?void 0:a.onKickoff)==null||s.call(a)}beginSecondHalf(){this.half=2,this.halfElapsed=0,this.clock=45,this.state="kickoff",this.setupKickoff(1),this.hud.banner("SECOND HALF","KICK OFF",1400),this.hud.commentary("Second half under way.")}endHalf(){var e,t,i;this.clock=45,this.ball.owner=null,this.audio.whistle(!0),this.half===1?(this.state="halftime",this.hud.banner("HALF TIME",`${this.score[0]} – ${this.score[1]}`,2400,"final"),this.addEvent("half","Half time",45,""),(e=this.onHalftime)==null||e.call(this,this)):(this.state="fulltime",this.clock=90,this.hud.banner("FULL TIME",`${this.score[0]} – ${this.score[1]}`,3200,"final"),this.hud.commentary("That is the full-time whistle."),this.addEvent("full","Full time",90,""),(t=this.onFinish)==null||t.call(this,this)),(i=this.onState)==null||i.call(this,this.state)}onStateEnd(){var e;if(this.state==="kickoff"||this.state==="restart"){if(this.state="play",this.stateTimer=0,(e=this.onState)==null||e.call(this,this.state),this.pendingTaker){const t=this.pendingTaker;this.ball.x=t.pos.x+Math.sin(t.facing)*Ki,this.ball.z=t.pos.z+Math.cos(t.facing)*Ki,this.setPossession(t),this.pendingTaker=null,this.duel?(this.setControl(t.team===0?t:this.nearestPlayerToBall(0,!1),0),this.setControl(t.team===1?t:this.nearestPlayerToBall(1,!1),1)):this.mode==="match"&&t.team===0&&this.setControl(t,0)}return}this.state==="goal"&&(this.pendingReplay?this.startReplay(this.pendingReplay):this.setupKickoff(this.kickoffNext))}update(e){var t;const i=D(e,1e-4,.05);if(this.time+=i,this.replayActive){this.updateReplay(i),this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this);return}if(this.state==="fulltime"||this.state==="halftime"){this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this);return}if((t=this.referee)!=null&&t.active){this.referee.update(i),this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this);return}if(this.corner&&(this.updateCorner(i),this.corner)){this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this);return}if(this.restart&&this.state==="restart"){this.updateRestart(i),this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this);return}if(this.celebration&&this.updateCelebration(i),this.mode==="training"){this.updateDrill(i),this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this);return}if(this.state==="play"){if(this.aiSetPieceHold>0&&(this.aiSetPieceHold=Math.max(0,this.aiSetPieceHold-i)),this.halfElapsed+=i,this.clock=(this.half-1)*45+Math.min(45,this.halfElapsed/this.halfSeconds*45),this.halfElapsed>=this.halfSeconds){this.endHalf(),this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this);return}}else this.stateTimer-=i,this.stateTimer<=0&&this.onStateEnd();this.state==="play"&&(this.simulate(i),this.recordReplay(i)),this.passTimer>0&&(this.passTimer-=i,this.passTimer<=0&&(this.passTarget=null)),this.lastPass&&(this.lastPass.timer-=i,this.lastPass.timer<=0&&(this.lastPass=null)),this.updateVisuals(i),this.updateCamera(i),this.hud.sync(this)}simulate(e){var t,i,a,s,r,o,l,c,h,u;this.input.sample(),(t=this.input2)==null||t.sample(),this.inputLocked||this.handleControlledActions(e);for(const v of this.players)v.active&&(v.kickCooldown=Math.max(0,v.kickCooldown-e),v.stun=Math.max(0,v.stun-e),v.tackleTimer=Math.max(0,v.tackleTimer-e),v.skillTimer=Math.max(0,v.skillTimer-e),v.shield=Math.max(0,v.shield-e),v.secondDefTimer=Math.max(0,(v.secondDefTimer||0)-e),v.restartAnim=Math.max(0,(v.restartAnim||0)-e),v.throwAnim=Math.max(0,(v.throwAnim||0)-e),v.kickAnim=Math.max(0,(v.kickAnim||0)-e),v.headerCooldown=Math.max(0,(v.headerCooldown||0)-e),v.firstTouchError=Math.max(0,(v.firstTouchError||0)-e),this.thinkAI(v,e));(i=this.updateMatchFlow)==null||i.call(this,e),(s=(a=this.referee)==null?void 0:a.holdSetPiece)==null||s.call(a);for(const v of this.players)v.active&&this.stepPlayer(v,e);if(this.resolveCollisions(),(o=(r=this.referee)==null?void 0:r.updateContacts)==null||o.call(r,e),(l=this.referee)!=null&&l.active||(this.updateBall(e),(c=this.referee)!=null&&c.active))return;this.autoSwitchTimer=(this.autoSwitchTimer??0)-e;const f=this.passTarget&&this.controlled===this.passTarget&&this.passTimer>0;this.autoSwitch&&this.autoControl&&!this.ball.owner&&!f&&this.autoSwitchTimer<=0&&(this.autoSwitchTimer=.1,this.autoSwitchLooseBall(0,0),this.duel&&this.autoSwitchLooseBall(1,1));const d=this.ball.owner?this.ball.owner.team:this.lastTouch.team;(d===0||d===1)&&(this.possession[d]+=e),(u=(h=this.referee)==null?void 0:h.updateLive)==null||u.call(h,e)}stepPlayer(e,t){const i=e.attrs||{},a=7.5+(i.acceleration??75)*.075,s=9.5+(i.control??75)*.045,r=.74+.26*(e.stamina/Math.max(1,e.staminaMax||100));if(e.slide>0)e.slide-=t,e.vel.x*=1-2.8*t,e.vel.z*=1-2.8*t;else if(e.stun>0)e.vel.x*=1-8*t,e.vel.z*=1-8*t;else{const u=Math.hypot(e.mvx,e.mvz)>Math.hypot(e.vel.x,e.vel.z)+.1?a:s,f=1-Math.exp(-u*t);e.vel.x+=(e.mvx*this.grip*r-e.vel.x)*f,e.vel.z+=(e.mvz*this.grip*r-e.vel.z)*f}if(e.pos.x+=e.vel.x*t,e.pos.z+=e.vel.z*t,e.pos.x=D(e.pos.x,-34+.6,N.halfWidth-.6),e.pos.z=D(e.pos.z,-52.5+.8,N.halfLength-.8),e.speedNow=Math.hypot(e.vel.x,e.vel.z),e.speedNow>.4&&e.stun<=.05){let u=Math.atan2(e.vel.x,e.vel.z)-e.facing;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;const f=8.5+(i.acceleration??75)*.065;e.facing+=u*Math.min(1,f*t)}const o=e.staminaMax||100,l=i.stamina??75,c=(e.sprinting?.34:.045)*(1.15-l/100),h=e.speedNow<2?.26:.035;e.stamina=D(e.stamina+(e.sprinting&&e.speedNow>2?-c:h)*t,0,o),e.stamina<=.5&&(e.sprinting=!1),e.runPhase+=e.speedNow*2.15*t,e.mvx=0,e.mvz=0}resolveCollisions(){var e,t,i,a;const s=this.players.filter(r=>r.active);for(let r=0;r<s.length;r++)for(let o=r+1;o<s.length;o++){const l=s[r],c=s[o];let h=c.pos.x-l.pos.x,u=c.pos.z-l.pos.z,f=Math.hypot(h,u);const d=l.isGK||c.isGK?.95:.86;if(f<1e-4&&(h=.01,u=.01,f=.014),f>=d)continue;const v=h/f,x=u/f,m=(d-f)*.52;l.pos.x-=v*m,l.pos.z-=x*m,c.pos.x+=v*m,c.pos.z+=x*m;const g=(l.vel.x-c.vel.x)*v+(l.vel.z-c.vel.z)*x;if(Math.abs(g)>3.1){const y=(((e=l.attrs)==null?void 0:e.physical)??75)/100,_=(((t=c.attrs)==null?void 0:t.physical)??75)/100,b=(((i=l.attrs)==null?void 0:i.balance)??70)/100,C=(((a=c.attrs)==null?void 0:a.balance)??70)/100,w=y*.62+b*.38,E=_*.62+C*.38;w<E-.055&&!l.isGK&&(l.stun=Math.max(l.stun,.1+(E-w)*.18)),E<w-.055&&!c.isGK&&(c.stun=Math.max(c.stun,.1+(w-E)*.18))}}}steer(e,t,i,a=1,s=!1){e.attrs;let r=t-e.pos.x,o=i-e.pos.z,l=Math.hypot(r,o);if(l<.01){e.mvx=0,e.mvz=0,e.sprinting=!1;return}if(l<8&&!e.isGK){for(const d of this.players){if(!d.active||d===e||d.team!==e.team)continue;const v=e.pos.x-d.pos.x,x=e.pos.z-d.pos.z,m=Math.hypot(v,x);if(m>.05&&m<2.7){const g=m<1.4?1.4:0;r+=v/m*g,o+=x/m*g}}l=Math.hypot(r,o)||l}const c=.78+.22*(e.stamina/Math.max(1,e.staminaMax||100)),h=l<.8?l/.8:1,u=s&&e.stamina>3&&c>.52;let f=(u?e.sprintSpeed:e.speed)*a*h*c;e.team===1&&!this.duel&&(f*=this.diff.aiSpeed),(e.controlled||e.controlled2)&&(f*=.97),e.mvx=r/l*f,e.mvz=o/l*f,e.sprinting=u}autoSwitchLooseBall(e,t){const i=t===1?this.controlled2:this.controlled,a=this.nearestPlayerToBall(e,!1);if(!a)return;const s=he(a.pos.x,a.pos.z,this.ball.x,this.ball.z),r=i?he(i.pos.x,i.pos.z,this.ball.x,this.ball.z):1/0;a!==i&&(!i||s<r-.8)&&this.setControl(a,t)}nearestOpponent(e){let t=null,i=1/0;for(const a of this.players){if(!a.active||a.team===e.team)continue;const s=he(e.pos.x,e.pos.z,a.pos.x,a.pos.z);s<i&&(i=s,t=a)}return t}nearestOpponentDist(e){const t=this.nearestOpponent(e);return t?he(e.pos.x,e.pos.z,t.pos.x,t.pos.z):99}nearestOpponentAt(e,t,i){let a=99;for(const s of this.players){if(!s.active||s.team===i)continue;const r=he(e,t,s.pos.x,s.pos.z);r<a&&(a=r)}return a}nearestOpponentTo(e,t=99){let i=null,a=t;for(const s of this.players){if(!s.active||s.team===e.team||s.isGK)continue;const r=he(e.pos.x,e.pos.z,s.pos.x,s.pos.z);r<a&&(a=r,i=s)}return i}nearestPlayerToBall(e,t=!0){let i=null,a=1/0;for(const s of this.players){if(!s.active||s.team!==e||s.isGK&&!t)continue;const r=he(s.pos.x,s.pos.z,this.ball.x,this.ball.z);r<a&&(a=r,i=s)}return i}setControl(e,t=0){if(t===1){this.controlled2&&(this.controlled2.controlled2=!1),this.controlled2=e||null,e&&(e.controlled2=!0);return}this.controlled!==e&&(this.controlled&&(this.controlled.controlled=!1),this.controlled=e||null,e&&(e.controlled=!0))}switchPlayer(e=0){const t=this.duel&&e===1?this.controlled2:this.controlled,i=this.players.filter(r=>r.team===e&&r.active&&!r.isGK).sort((r,o)=>he(r.pos.x,r.pos.z,this.ball.x,this.ball.z)-he(o.pos.x,o.pos.z,this.ball.x,this.ball.z));if(!i.length)return;const a=i.indexOf(t);let s;a===-1?s=i[0]:s=i[(a+1)%i.length],this.setControl(s,this.duel&&e===1?1:0),this.audio.touch()}setPlayerActive(e,t){e.active=t,e.visual.root.visible=t,t||(e.controlled=!1,e.vel.x=0,e.vel.z=0,this.controlled===e&&(this.controlled=null))}giveBall(e){const t=this.ball;t.owner=e,t.y=0,t.vy=0,t.vx=0,t.vz=0,t.curve=null,t.ignore=null,t.ignoreTimer=0,e.stun=0,e.slide=0,e.kickCooldown=0,this.lastTouch={team:e.team,player:e},this.setPossessionVisual(e)}setPossessionVisual(e){const t=this.ball;t.x=e.pos.x+Math.sin(e.facing)*Ki,t.z=e.pos.z+Math.cos(e.facing)*Ki}resetBall(e=0,t=0){const i=this.ball;i.owner=null,i.x=e,i.z=t,i.y=0,i.vx=0,i.vz=0,i.vy=0,i.curve=null,i.ignore=null,i.ignoreTimer=0,this.charging=!1,this.charge=0,this.passTarget=null,this.lastPass=null}setBallSpeed(e,t,i=0){this.ball.vx=e,this.ball.vz=t,this.ball.vy=i}setFormation(e,t){const i=this.teams[e];if(!Ds[t]||i.formation===t)return;i.formation=t;const a=Ds[t],s=this.players.filter(h=>h.team===e&&h.active),r=s.find(h=>h.isGK),o=s.filter(h=>!h.isGK),l=a.find(h=>h.role==="GK"),c=a.filter(h=>h.role!=="GK");r&&l&&(r.baseX=l.x,r.baseDepth=l.d,r.role="GK"),o.forEach((h,u)=>{const f=c[u%c.length];h.baseX=f.x,h.baseDepth=f.d,h.role=f.role}),this.hud.commentary(`${i.short} switch to ${t}.`)}setTactics(e,t){this.teams[e].tactics={...this.teams[e].tactics||{},...t}}getStarters(e){return this.players.filter(t=>t.team===e&&t.active)}getBench(e){return this.bench[e].filter(t=>!t.active)}substitute(e,t,i){var a;if(this.subsUsed[e]>=5)return this.hud.commentary("No substitutions remaining."),!1;const s=this.players.find(l=>l.team===e&&l.active&&l.id===t),r=this.bench[e].find(l=>!l.active&&l.id===i);if(!s||!r||s.isGK!==r.isGK||this.state==="fulltime")return!1;r.active=!0,r.visual.root.visible=!0,r.pos={...s.pos},r.facing=s.facing,r.baseX=s.baseX,r.baseDepth=s.baseDepth,r.role=s.role,r.stamina=100,r.controlled=!1,r.visual.body.rotation.x=0,r.visual.root.position.set(s.pos.x,0,s.pos.z),s.active=!1,s.visual.root.visible=!1,s.controlled=!1;const o=this.players.indexOf(s);return o>=0&&(this.players[o]=r),this.bench[e]=this.bench[e].map(l=>l===r?s:l),this.subsUsed[e]++,this.controlled===s&&this.setControl(r),this.addEvent("sub",`${r.name} on for ${s.name}`,this.clock,""),this.hud.commentary(`${r.name} replaces ${s.name}.`),(a=this.onSub)==null||a.call(this,this,e,r,s),!0}controlBasis(){const e=this._basisForward.set(0,0,-1).applyQuaternion(this.camera.quaternion);return e.y=0,e.lengthSq()<1e-4&&e.set(0,0,this.attackDir[0]),e.normalize(),this._basisRight.set(-e.z,0,e.x),{fx:e.x,fz:e.z,rx:-e.z,rz:e.x}}getAimDirection(e,t=!0,i=this.input){const a=i.move;if(Math.hypot(a.x,a.y)>.14){const s=this.controlBasis();let r=s.rx*a.x+s.fx*a.y,o=s.rz*a.x+s.fz*a.y;const l=Math.hypot(r,o)||1;return{x:r/l,z:o/l}}return t&&e?{x:Math.sin(e.facing),z:Math.cos(e.facing)}:null}handleControlledActions(e){var t,i;(t=this.controlled)!=null&&t.active&&this.applyControlActions(this.input,this.controlled,0,e),this.duel&&(i=this.controlled2)!=null&&i.active&&this.applyControlActions(this.input2,this.controlled2,1,e)}applyControlActions(e,t,i,a){if(!e||!(t!=null&&t.active))return;const s=this.ball.owner===t,r=t.stun<=.05&&t.slide<=0,o=()=>this.getAimDirection(t,!0,e);if(e.consume("shoot")&&s&&r&&this.shootPlayer(t,.84,e),e.consume("pass")&&s&&r){const l=o(),c=t.isGK?this.findPassTarget(t,!1,!1,l):this.findPassTarget(t,!1,!1,l);c?this.passTo(t,c):this.kickBall(t,l.x,l.z,16,0)}if(e.consume("through")&&s&&r){const l=o(),c=this.findPassTarget(t,!0,!1,l);c?this.passTo(t,c,{through:!0}):this.kickBall(t,l.x,l.z,19,0)}if(e.consume("skill")&&s&&r&&this.skillMove(t,e),e.consume("tackle")&&!s&&r&&this.slideTackle(t),e.consume("sprint")&&!s&&r){const l=this.ball.owner;l&&l.team!==t.team&&he(t.pos.x,t.pos.z,l.pos.x,l.pos.z)<3.1&&this.tryTackle(t)}e.consume("second")&&!s&&r&&this.pressSecondDefender(t),e.consume("switch")&&this.switchPlayer(t.team)}pressSecondDefender(e=this.controlled){const t=this.ball.owner;if(t&&t.team===e?.team)return;const i=e?.team??0,a=this.players.filter(s=>s.team===i&&s.active&&!s.isGK&&s!==e).sort((s,r)=>he(s.pos.x,s.pos.z,this.ball.x,this.ball.z)-he(r.pos.x,r.pos.z,this.ball.x,this.ball.z))[0];if(a){for(const s of this.players)s.secondDefTimer=0;a.secondDefTimer=1.9,this.audio.click()}}skillMove(e,t=this.input){if(e.stamina<8)return;const i=t.move;let a=Math.sin(e.facing),s=Math.cos(e.facing);const r=Math.hypot(i.x,i.y);r>.25&&(a=i.x/r,s=-i.y/r);const o=10.2;e.vel.x=a*o,e.vel.z=s*o,e.facing=Math.atan2(a,s),e.skillTimer=.55,e.spinTime=.45,e.stamina=Math.max(0,e.stamina-9);const l=this.ball;l.x=e.pos.x+a*.9,l.z=e.pos.z+s*.9,l.vx=a*o,l.vz=s*o,this.audio.click()}tryTackle(e){var t,i,a,s,r,o,l,c,h,u,f;if(e.tackleTimer>0||e.stun>.05||e.slide>0)return;e.tackleTimer=.65,e.vel.x+=Math.sin(e.facing)*2.2,e.vel.z+=Math.cos(e.facing)*2.2;const d=this.ball.owner;if(!d||d.team===e.team)return;const v=he(e.pos.x,e.pos.z,d.pos.x,d.pos.z);if(v>2.7)return;const x=((t=e.attrs)==null?void 0:t.standingTackle)??((i=e.attrs)==null?void 0:i.tackling)??e.rating,m=((a=e.attrs)==null?void 0:a.defAwareness)??((s=e.attrs)==null?void 0:s.positioning)??e.rating,g=((r=d.attrs)==null?void 0:r.dribbling)??((o=d.attrs)==null?void 0:o.control)??d.rating,y=D(.28+(x-70)*.007+(m-70)*.003-(g-70)*.004+(this.diff.tackle-.55)*.35+((((c=(l=e.intel)==null?void 0:l.role)==null?void 0:c.aggr)??.5)-.5)*.16,.08,.92)*(((h=e.intel)==null?void 0:h.familiarity)??1)*(d.skillTimer>0?.12:1)*(d.shield>0?.55:1),_=Math.random()<y;(f=(u=this.referee)==null?void 0:u.assessTackle)!=null&&f.call(u,e,d,{slide:!1,distance:v,speed:Math.hypot(e.vel.x,e.vel.z),wonBall:_})||(_?(d.stun=.34,this.stats.tackles[e.team]++,this.setPossession(e),this.audio.tackle(),e.team===0&&this.hud.commentary(`Tackle won by ${e.name}`)):(e.stun=.26,this.audio.thud(.6)))}slideTackle(e){var t,i,a,s,r,o,l,c;if(e.slide>0||e.stun>.05)return;e.slide=.6,e.vel.x=Math.sin(e.facing)*9.6,e.vel.z=Math.cos(e.facing)*9.6,e.stamina=Math.max(0,e.stamina-9),this.audio.slide();const h=this.ball.owner;if(!h||h.team===e.team)return;const u=he(e.pos.x,e.pos.z,h.pos.x,h.pos.z);if(u>2.5)return;const f=((t=e.attrs)==null?void 0:t.slidingTackle)??((i=e.attrs)==null?void 0:i.tackling)??e.rating,d=((a=e.attrs)==null?void 0:a.aggression)??((s=e.attrs)==null?void 0:s.physical)??65,v=D(.4+(f-70)*.007+(d-65)*.002+(this.diff.tackle-.55)*.3+((((o=(r=e.intel)==null?void 0:r.role)==null?void 0:o.aggr)??.5)-.5)*.18,.12,.94)*(((l=e.intel)==null?void 0:l.familiarity)??1)*(h.skillTimer>0?.1:1);Math.random()<v?(h.stun=.6,this.stats.tackles[e.team]++,this.setPossession(e),this.audio.tackle(),e.team===0&&this.hud.commentary(`Clean slide from ${e.name}`)):(c=this.referee)!=null&&c.assessTackle?u<1.35&&this.referee.assessTackle(e,h,{slide:!0,distance:u,speed:Math.hypot(e.vel.x,e.vel.z),wonBall:!1,forceFoul:!1}):this.commitFoul(e,h,{type:"slide"})}commitFoul(e,t,i={}){var a,s;(s=(a=this.referee)==null?void 0:a.handleFoul)!=null&&s.call(a,e,t,i)||(this.stats.fouls[e.team]++,this.audio.whistle(!1),this.hud.banner("FREE KICK",`${this.teams[t.team].short} · ${e.name}`,1500),this.hud.commentary(`Foul by ${e.name} — free kick ${this.teams[t.team].short}`),this.addEvent("foul",`Foul by ${e.name}`,this.clock,"foul"),this.setRestart("freekick",t.team,t.pos.x,t.pos.z))}shootPlayer(e,t=.84,i=this.input){const a=this.attackDir[e.team]*N.halfLength,s=this.getAimDirection(e,!1,i),r=e.pos.x>=0?-1:1,o=N.goalHalfWidth-.55;let l=r*o;s&&Math.abs(s.x)>.17&&(l=s.x*9),l=D(l,-o,o),this.shootAt(e,l,a,D(t,.72,1),this.assists?.018:.075)}shootAt(e,t,i,a=.7,s=0,r={}){var o,l,c,h;if(this.ball.owner!==e)return;let u=t-e.pos.x,f=i-e.pos.z;const d=Math.hypot(u,f)||1;let v=Math.atan2(u,f);s&&(v+=(Math.random()-.5)*s);const x=.86+(((o=e.attrs)==null?void 0:o.shooting)??e.rating)/100*.34,m=(23.5+a*12.5+(e.rating-75)*.14)*x,g=d/m,y=r.chip?1.7:ot(.24,1.58)*(.7+a*.3),_=D((y+.5*Fl*g*g)/g,r.chip?1.5:.2,11.2);e.stamina=Math.max(0,e.stamina-3.2),this.stats.shots[e.team]++;const b=Math.abs(Math.atan2(t-e.pos.x,i-e.pos.z)),C=D(1.15-d/46-Math.abs(b)*.2,.03,.85)*(.55+a*.55);this.stats.xg[e.team]+=C,this.lastShot={team:e.team,time:this.time,player:e,quality:C},(l=this.registerKeeperShot)==null||l.call(this,e,{x:t,y,z:i}),this.kickBall(e,Math.sin(v),Math.cos(v),m,_,{curve:r.curve??(((c=e.attrs)==null?void 0:c.flair)>80?(Math.random()-.5)*.3:0),shot:!0}),this.audio.kick(D(.45+a*.65,.4,1)),(e.team===0||this.mode==="spectate"||this.mode==="duel")&&this.hud.commentary(`${e.name} lets fly!`),(h=this.onShot)==null||h.call(this,this,e)}recordOffsideSnapshot(e,t={}){if(!e||t.shot||this.restart||this.corner||this.state!=="play")return;const i=this.attackDir[e.team],a=this.players.filter(o=>o.active&&o.team!==e.team).map(o=>o.pos.z*i).sort((o,l)=>l-o),s=a[1]??a[0]??-52.5,r={};for(const o of this.players)!o.active||o.team!==e.team||o===e||(r[o.id]=o.pos.z*i);this.offsideSnap={team:e.team,passerId:e.id,at:this.time,line:s,ballDepth:this.ball.z*i,mates:r}}checkOffside(e){const t=this.offsideSnap;if(!t||!e||t.team!==e.team||e.id===t.passerId||this.state!=="play"||this.time-t.at>5)return!1;const i=t.mates[e.id];return i===void 0||i<=0||i<=Math.max(t.ballDepth,t.line)+.08?!1:(this.awardOffside(e),!0)}awardOffside(e){const t=1-e.team;this.offsideSnap=null,this.stats.offsides[e.team]++;const i=this.ball;i.owner=null,i.x=e.pos.x,i.z=e.pos.z,i.y=0,i.vx=0,i.vz=0,i.vy=0,i.curve=null,i.spin=0,this.hud.banner("OFFSIDE",this.teams[e.team].short,1500,"info"),this.hud.commentary(`${e.name} was offside. Free kick ${this.teams[t].short}.`),this.addEvent("offside",`Offside — ${e.name}`,this.clock,"offside"),this.setRestart("freekick",t,e.pos.x,e.pos.z)}kickBall(e,t,i,a,s=0,r={}){var o,l,c;const h=this.ball;(o=this.recordOffsideSnapshot)==null||o.call(this,e,r),(this.setPiece||this.refereeSetPiece||this.restartType==="freekick"||this.restartType==="penalty")&&(this.setPiece=null,this.refereeSetPiece=null,this.referee&&(this.referee.setPiece=null),(this.restartType==="freekick"||this.restartType==="penalty")&&(this.restartType=null),(l=this.clearKeeperPrediction)==null||l.call(this),this.hud.hint(""));const u=Math.hypot(t,i)||1,f=t/u,d=i/u,v=this.presentation.weather==="rain"||this.presentation.weather==="heavyrain",x=this.presentation.weather==="snow",m=(((c=e.attrs)==null?void 0:c.passing)??e.rating)/100,g=D((r.curve||0)*(.35+m*.65),-.8,.8);h.owner=null,h.x=r.originX??D(e.pos.x+f*.4,-36,N.halfWidth+2),h.z=r.originZ??D(e.pos.z+d*.4,-52.5-2,N.halfLength+2),h.y=r.originY??0,h.vx=f*a,h.vz=d*a,h.vy=s,h.spin=g,h.curve=g?{x:-d*a*g*.75,z:f*a*g*.75}:null,h.ignore=e,h.ignoreTimer=r.shot?.2:.32,h.lastKick={player:e,speed:a,type:r.shot?"shot":"kick"},e.kickCooldown=r.shot?.24:.32,this.lastTouch={team:e.team,player:e},this.charging=!1,this.charge=0,v&&(h.vx*=.985),x&&(h.vx*=.965,h.vz*=.965),this.audio.kick(D(.42+a/80,.42,.9))}updateBall(e){var t;const i=this.ball;if(i.ignoreTimer>0&&(i.ignoreTimer-=e,i.ignoreTimer<=0&&(i.ignore=null)),i.owner){const a=i.owner;if(!a.active||a.stun>.05||a.slide>0)i.owner=null,i.vx=a.vel.x*.7,i.vz=a.vel.z*.7,i.x=a.pos.x+Math.sin(a.facing)*Ki,i.z=a.pos.z+Math.cos(a.facing)*Ki;else{const s=(((t=a.attrs)==null?void 0:t.control)??75)/100,r=a.firstTouchError>0?Math.sin(this.time*14)*.12:0,o=Ki+(a.sprinting?.16:0)+(a.skillTimer>0?.35:0)+r,l=a.pos.x+Math.sin(a.facing)*o,c=a.pos.z+Math.cos(a.facing)*o,h=1-Math.exp(-(15+s*5)*e);i.x+=(l-i.x)*h,i.z+=(c-i.z)*h,i.y=0,i.vy=0,i.vx=a.vel.x,i.vz=a.vel.z}}if(!i.owner){if((!Number.isFinite(i.vx)||!Number.isFinite(i.vz))&&(i.vx=0,i.vz=0),i.curve){const l=Math.hypot(i.curve.x,i.curve.z);i.vx+=i.curve.x*e,i.vz+=i.curve.z*e,i.curve.x*=Math.exp(-.7*e),i.curve.z*=Math.exp(-.7*e),(i.y<.15||l<.05)&&(i.curve=null)}if(i.x+=i.vx*e,i.z+=i.vz*e,(i.y>0||i.vy>0)&&(i.vy-=Fl*e,i.y+=i.vy*e,i.y<=0)){i.y=0;const l=this.presentation.weather==="rain"||this.presentation.weather==="heavyrain",c=this.presentation.weather==="snow",h=c?.26:l?.28:.34;i.vy<-2.2?(i.vy=-i.vy*h,i.vx*=c?.94:.97,i.vz*=c?.94:.97):i.vy=0}const a=this.presentation.weather==="rain"||this.presentation.weather==="heavyrain",s=this.presentation.weather==="snow",r=a?this.presentation.weather==="heavyrain"?.52:.44:s?.46:.34,o=Math.exp(-(i.y>.18?.075:r)*e);i.vx*=o,i.vz*=o,i.spin=(i.spin||0)*Math.exp(-.35*e),Math.hypot(i.vx,i.vz)<.06&&(i.vx=0,i.vz=0),this.tryPickup(i),this.checkPosts()}this.checkBounds()}checkPosts(){const e=this.ball;if(!(e.owner||e.y>N.goalHeight+.2))for(const t of[-1,1]){const i=t*N.halfLength;for(const a of[-1,1]){const s=a*N.goalHalfWidth;if(he(e.x,e.z,s,i)<.34&&Math.abs(e.z-i)<1.5){let r=e.x-s,o=e.z-i;const l=Math.hypot(r,o)||1;r/=l,o/=l;const c=e.vx*r+e.vz*o;c<0&&(e.vx-=2*c*r,e.vz-=2*c*o,e.vx*=.65,e.vz*=.65,this.audio.post(),this.hud.commentary("Off the post!"),this.addEvent("post","Off the post!",this.clock,"chance"))}}}}tryPickup(e){var t,i;if((t=this.tryRestartReception)!=null&&t.call(this,e))return;let a=null,s=1/0;for(const u of this.players){if(!u.active||u===e.ignore||u.kickCooldown>0||u.stun>.1||u.slide>0)continue;const f=he(u.pos.x,u.pos.z,e.x,e.z),d=u.isGK?1.55:u.controlled||u.controlled2?1.28:1.02,v=u.isGK?2.45:2;f<=d&&e.y<=v&&f<s&&(s=f,a=u)}if(!a)return;if(a.isGK){this.catchBall(a);return}const r=Math.hypot(e.vx,e.vz);if(e.y>1.12&&r<24&&(a.headerCooldown||0)<=0){this.attemptHeader(a);return}const o=a===this.passTarget,l=(((i=a.attrs)==null?void 0:i.control)??a.rating)/100,c=this.nearestOpponentDist(a),h=l*.82+(o?.12:0)+(a.controlled||a.controlled2?.08:0)-D(c/90,0,.16);if(r>13&&Math.random()>h){this.deflectBall(a);return}this.setPossession(a)}attemptHeader(e){var t,i,a,s;const r=this.ball;e.headerCooldown=.5;const o=this.attackDir[e.team],l=o*N.halfLength,c=e.role==="ATT"||e.role==="MID";let h=0,u=o,f=11+(((t=e.attrs)==null?void 0:t.physical)??70)/100*6;if(c){h=0-e.pos.x,u=l-e.pos.z;const d=Math.hypot(h,u)||1;h/=d,u/=d,f=12+(((i=e.attrs)==null?void 0:i.shooting)??70)/100*8}else{const d=this.findPassTarget(e,!1,!1);if(d){h=d.pos.x-e.pos.x,u=d.pos.z-e.pos.z;const v=Math.hypot(h,u)||1;h/=v,u/=v}else u=-o}r.owner=null,r.x=e.pos.x+Math.sin(e.facing)*.32,r.z=e.pos.z+Math.cos(e.facing)*.32,r.y=Math.max(.45,r.y),r.vx=h*f,r.vz=u*f,r.vy=c?3.2:4.5,r.curve=null,r.ignore=e,r.ignoreTimer=.2,e.kickCooldown=.3,this.lastTouch={team:e.team,player:e},(s=(a=this.audio).header)==null||s.call(a,D(f/20,.5,1.2)),this.hud.commentary(c?`${e.name} rises to meet it!`:`${e.name} heads it clear.`)}catchBall(e){var t,i,a,s;if((i=(t=this.referee)==null?void 0:t.checkGoalkeeperHandling)!=null&&i.call(t,e))return;const r=this.lastShot&&this.lastShot.team!==e.team,o=Math.hypot(this.ball.vx,this.ball.vz),l=e.attrs||{},c=(l.reflex??l.control??e.rating)/100,h=this.diff.gk,u=D(Math.abs(this.ball.x-e.pos.x)/4.2,0,1)*.18,f=D(.26+c*.54+h*.12-o/90-u+(e.keeperReadQuality||0)*.14,.18,.96);if(!(o<15||Math.random()<f)){e.gkDive=.55,this.ball.x=e.pos.x+Math.sin(e.facing)*.6,this.ball.z=e.pos.z+Math.cos(e.facing)*.6,this.ball.y=.5,this.ball.vy=2.6,this.ball.vx=-this.ball.vx*.32+(Math.random()-.5)*5,this.ball.vz=-this.ball.vz*.28+(Math.random()-.5)*3,this.ball.ignore=e,this.ball.ignoreTimer=.28,this.lastTouch={team:e.team,player:e},r&&this.lastShot&&(this.stats.onTarget[this.lastShot.team]++,this.stats.saves[e.team]++,this.lastShot=null),this.audio.thud(.9),(s=(a=this.audio).save)==null||s.call(a),this.hud.commentary(e.team===0?`${e.name} parries it!`:"Big save!","save");return}this.ball.vy=0,this.ball.y=0,e.gkHold=.8,e.gkDive=.25,this.setPossession(e),this.audio.catchBall(),r&&(this.stats.onTarget[this.lastShot.team]++,this.stats.saves[e.team]++,e.team===0&&this.hud.commentary(`Save! ${e.name} gathers it.`,"save"),this.addEvent("save",`Save — ${e.name}`,this.clock,""),this.lastShot=null)}deflectBall(e){const t=this.ball;let i=t.x-e.pos.x,a=t.z-e.pos.z;const s=Math.hypot(i,a)||1;i/=s,a/=s;const r=t.vx*i+t.vz*a;r<0&&(t.vx-=2*r*i,t.vz-=2*r*a),t.vx*=.52,t.vz*=.52,t.vy=Math.max(t.vy,1.4),t.ignore=e,t.ignoreTimer=.2,this.lastTouch={team:e.team,player:e},this.audio.thud(.5)}setPossession(e){var t,i;const a=this.ball;if(!e||a.owner===e||(t=this.checkOffside)!=null&&t.call(this,e))return;this.offsideSnap=null;const s=Math.hypot(a.vx,a.vz);if(this.lastPass&&this.lastPass.timer>0&&this.lastPass.team===e.team&&this.lastPass.player!==e){const r=(((i=e.attrs)==null?void 0:i.control)??e.rating)/100,o=this.nearestOpponentDist(e),l=r-D(s/48,0,.45)-D(o/90,0,.18)+(e===this.passTarget?.18:0);if(s>15&&Math.random()>l*.95){e.firstTouchError=.22,this.deflectBall(e),this.hud.commentary(`${e.name} takes a heavy first touch.`);return}this.stats.passesCompleted[e.team]++,this.lastPass=null}if(a.owner=e,a.y=0,a.vy=0,a.vx=e.vel.x,a.vz=e.vel.z,a.curve=null,a.spin=0,a.ignore=null,a.ignoreTimer=0,e.kickCooldown=0,e.isGK&&(e.gkHold=.8),this.lastTouch={team:e.team,player:e},this.passTarget=null,this.audio.touch(),this.mode==="training"){this.charging=!1,this.charge=0;return}if(this.duel)e.team===0?this.setControl(e,0):this.setControl(e,1);else if(e.team===0&&this.autoControl)this.setControl(e);else if(this.autoControl){const r=this.nearestPlayerToBall(0,!1);r&&this.setControl(r)}this.charging=!1,this.charge=0}checkBounds(){var e,t,i,a;const s=this.ball;if(s.owner)return;const r=N.halfLength,o=N.halfWidth;if(this.mode==="training"){if(s.z<=-r){Math.abs(s.x)<N.goalHalfWidth-.05&&s.y<N.goalHeight?this.scoreGoal(0):(e=this.drillBallOut)==null||e.call(this);return}if(s.z>=r){Math.abs(s.x)<N.goalHalfWidth-.05&&s.y<N.goalHeight?this.scoreGoal(1):(t=this.drillBallOut)==null||t.call(this);return}(s.x<=-o||s.x>=o)&&((i=this.drillBallOut)==null||i.call(this));return}if(s.z<=-r){if(Math.abs(s.x)<N.goalHalfWidth-.05&&s.y<N.goalHeight){this.scoreGoal(0);return}s.z<=-r-Jt&&this.handleGoalLine(-1);return}if(s.z>=r){if(Math.abs(s.x)<N.goalHalfWidth-.05&&s.y<N.goalHeight){this.scoreGoal(1);return}s.z>=r+Jt&&this.handleGoalLine(1);return}if(s.x<=-o-Jt||s.x>=o+Jt){const l=Math.sign(s.x)||1,c=1-(((a=this.lastTouch)==null?void 0:a.team)??0);this.setRestart("throwin",c,l*o,D(s.z,-r+2,r-2))}}handleGoalLine(e){const t=e===-1?0:1,i=1-t;this.lastTouch.team===t?this.setRestart("goalkick",i,0,e*(N.halfLength-6.2)):(this.stats.corners[t]++,this.addEvent("corner",`Corner — ${this.teams[t].short}`,this.clock,""),this.setRestart("corner",t,Math.sign(this.ball.x||1)*(N.halfWidth-1.4),e*(N.halfLength-1.4)))}setRestart(e,t,i,a){if(e==="corner"){this.beginCorner(t,i,a);return}const s=D(i,-33,N.halfWidth-1),r=D(a,-52.5+1,N.halfLength-1);this.state="restart",this.stateTimer=e==="goalkick"?1.2:.95,this.restartType=e,this.ball.owner=null,this.ball.ignore=null,this.ball.ignoreTimer=0,this.ball.x=s,this.ball.z=r,this.ball.y=0,this.ball.vx=0,this.ball.vz=0,this.ball.vy=0,this.charging=!1,this.charge=0;let o=null;if(e==="goalkick"&&(o=this.players.find(c=>c.team===t&&c.active&&c.isGK)),!o){let c=1/0;for(const h of this.players){if(!h.active||h.team!==t||h.isGK)continue;const u=he(h.pos.x,h.pos.z,s,r);u<c&&(c=u,o=h)}}o&&(o.pos.x=D(s-(e==="throwin"?Math.sign(s)*.9:0),-34+.7,N.halfWidth-.7),o.pos.z=D(r+.1,-52.5+.9,N.halfLength-.9),o.vel.x=0,o.vel.z=0,o.facing=this.attackDir[t]>0?0:Math.PI,o.kickCooldown=0,o.stun=0,o.slide=0,this.pendingTaker=o,this.lastTouch={team:t,player:o},t===0&&this.autoControl&&this.setControl(o));const l={throwin:"THROW IN",goalkick:"GOAL KICK",corner:"CORNER",freekick:"FREE KICK"};this.hud.banner(l[e]||"RESTART",this.teams[t].short,1150),this.audio.whistle(!1)}scoreGoal(e){var t,i,a;if(this.mode==="training"){(t=this.drillGoal)==null||t.call(this,e);return}const s=this.lastTouch.player,r=s&&s.team!==e;this.score[e]++,this.lastShot&&this.lastShot.team===e&&this.stats.onTarget[e]++,this.lastShot=null,this.state="goal",this.stateTimer=2.4,this.kickoffNext=1-e,this.ball.owner=null,this.ball.vx=0,this.ball.vz=0,this.ball.vy=0,this.charging=!1,this.charge=0,this.replayActive=!1;const o=s?s.name:this.teams[e].short,l=r?`OWN GOAL · ${o}`:`${o} · ${this.teams[e].short}`;this.hud.banner("GOAL!",l,2600,"goal"),this.hud.commentary(r?`Oh no! ${o} turns it into his own net.`:`GOAL! ${o} scores for ${this.teams[e].name}!`,"goal"),this.celebration={team:e,scorer:s||this.players.find(c=>c.team===e&&c.active&&c.role==="ATT"),time:0,duration:1.85},(i=this.updateCelebration)==null||i.call(this,.001),this.addEvent("goal",`GOAL — ${o} (${this.teams[e].short})`,this.clock,"goal"),this.audio.goal(),(a=this.onGoal)==null||a.call(this,this,{team:e,scorer:s,ownGoal:r}),this.replaysEnabled&&this.replayFrames.length>18&&(this.pendingReplay=this.replayFrames.slice(-Math.min(Bl,90))),this.replayFrames=[]}recordReplay(e){if(!this.replaysEnabled||(this.recordTimer+=e,this.recordTimer<tn))return;this.recordTimer=0;const t={ball:{x:this.ball.x,z:this.ball.z,y:this.ball.y},players:this.players.filter(i=>i.active).map(i=>({id:i.id,x:i.pos.x,z:i.pos.z,facing:i.facing,phase:i.runPhase,speed:i.speedNow,slide:i.slide}))};this.replayFrames.push(t),this.replayFrames.length>Bl&&this.replayFrames.shift()}startReplay(e){if(!e||e.length<8){this.setupKickoff(this.kickoffNext);return}this.state="replay",this.replayActive=!0,this.replayFrames=e,this.replayIndex=0,this.replayClock=0,this.replayDuration=e.length*tn,this.hud.showReplay(!0),this.hud.banner("GOAL REPLAY","CINEMATIC · 1×",1400,"info"),this.audio.whistle(!1)}updateReplay(e){this.replayClock+=e;const t=Math.min(this.replayFrames.length-1,Math.floor(this.replayClock/tn));this.replayIndex=t,this.applyReplayFrame(this.replayFrames[t]),this.replayClock>=this.replayDuration&&this.endReplay()}applyReplayFrame(e){this.ball.x=e.ball.x,this.ball.z=e.ball.z,this.ball.y=e.ball.y;const t=new Map;for(const i of e.players)t.set(i.id,i);for(const i of this.players){const a=t.get(i.id);!a||!i.active||(i.pos.x=a.x,i.pos.z=a.z,i.facing=a.facing,i.runPhase=a.phase,i.speedNow=a.speed,i.slide=a.slide)}}endReplay(){this.replayActive=!1,this.hud.showReplay(!1),this.setupKickoff(this.kickoffNext)}skipReplay(){this.replayActive&&this.endReplay()}setCamera(e){this.cameraMode=e,this.presentation.camera=e}setZoom(e){const t=ks.find(i=>i.id===e)||ks[1];this.presentation.zoom=t.id,this.zoomFactor=t.factor}updateCamera(e=.016){var t,i,a,s,r;if((t=this.referee)!=null&&t.active){this.referee.updateCamera(e);return}if(this.celebration&&(i=this.updateCelebrationCamera)!=null&&i.call(this,e)||this.restart&&(a=this.updateRestartCamera)!=null&&a.call(this,e)||(r=(s=this.referee)==null?void 0:s.updateSetPieceCamera)!=null&&r.call(s,e))return;const o=this.camera,l=this.ball,c=this.zoomFactor,h=this.cameraMode,u=(o.aspect||1)>=1.2,f=Math.hypot(l.vx||0,l.vz||0),d=Math.max(0,l.y||0),v=h==="fcmobile"||h==="broadcast"||h==="tele"?Math.min(4.5,f*.1+d*.16):0,x=(this.replayActive?46:h==="fcmobile"?u?32:33.5:h==="pro"?56:48)+v;if(Math.abs(o.fov-x)>.05&&(o.fov+=(x-o.fov)*(1-Math.exp(-5*e)),o.updateProjectionMatrix()),this.replayActive){const M=this.replayClock*.55+.6,S=15+c*3,I=new P(this.ball.x,1.2+this.ball.y,this.ball.z),z=I.x+Math.sin(M)*S,O=I.z+Math.cos(M)*S,$=7+Math.sin(this.replayClock*.4)*2;this.camPos.lerp(new P(z,$,O),1-Math.exp(-2.6*e)),this.camLook.lerp(I,1-Math.exp(-4*e)),o.position.copy(this.camPos),o.up.set(0,1,0),o.lookAt(this.camLook);return}if(this.corner){this.updateCornerCamera(e);return}const m=l.owner?.09:.15,g=D(l.x+(l.vx||0)*m,-32,N.halfWidth-2),y=D(l.z+(l.vz||0)*m,-52.5+2,N.halfLength-2),_=l.owner?3.8:5,b=1-Math.exp(-_*e);this.focus.x+=(g-this.focus.x)*b,this.focus.y+=(y-this.focus.y)*b;const C=this.controlled,w=this.focus,E=D(.4+d*.38+Math.max(0,l.vy||0)*.045,.4,8.5);let L,k;if(h==="fcmobile"){const M=D(w.y,-49,N.halfLength-3.5),S=D(w.x*.94,-30,30);L=new P(46*c,34*c,M+1.5),k=new P(S,E,M-1)}else if(h==="topdown")L=new P(w.x*.9,36*c,w.y+17.5*c),k=new P(w.x*.95,D(d*.12,0,3),w.y-7);else if(h==="broadcast")L=new P(w.x*.78,28*c,w.y+30*c),k=new P(w.x*.88,D(.4+d*.22,.4,6),w.y-2);else if(h==="tele")L=new P(w.x*.92,20*c,w.y+21*c),k=new P(w.x,D(.6+d*.2,.6,6),w.y-4);else if(h==="coop"){const M=C?w.x*.55+C.pos.x*.45:w.x,S=C?w.y*.55+C.pos.z*.45:w.y;L=new P(M*.9,24*c,S+18*c),k=new P(M,D(.2+d*.2,.2,6),S-3)}else if(h==="endtoend"){const M=C?this.attackDir[C.team]:-1;L=new P(w.x*.8,15*c,w.y-M*14*c),k=new P(w.x*.85,D(.4+d*.25,.4,6),w.y+M*12)}else if(h==="pro"&&C){const M=Math.sin(C.facing),S=Math.cos(C.facing),I=C.pos.x+M*10,z=C.pos.z+S*10,O=D(he(C.pos.x,C.pos.z,l.x,l.z)/22,0,.42);L=new P(C.pos.x-M*8*c,6.4*c,C.pos.z-S*8*c),k=new P(I+(l.x-I)*O,1.1+d*.35,z+(l.z-z)*O)}else L=new P(w.x*.9,30*c,w.y+15*c),k=new P(w.x,D(d*.15,0,3),w.y-6);this.camPos.lerp(L,1-Math.exp(-4.2*e)),this.camLook.lerp(k,1-Math.exp(-6*e)),o.position.copy(this.camPos),o.up.set(0,1,0),o.lookAt(this.camLook)}updateVisuals(e){var t,i,a,s,r,o,l;for(const m of this.players){if(!m.active)continue;const g=m.visual;if(g.root.position.set(m.pos.x,0,m.pos.z),g.root.rotation.y=m.facing,m.spinTime>0?(m.spinTime=Math.max(0,m.spinTime-e),g.body.rotation.y=(1-m.spinTime/.45)*Math.PI*2):g.body.rotation.y!==0&&(g.body.rotation.y=0),Rh(g,m.runPhase,m.speedNow,m.slide>0),g.armL.rotation.z=0,g.armR.rotation.z=0,m.celebration)g.armL.rotation.x=-2.25+Math.sin(this.time*7+m.number)*.12,g.armR.rotation.x=-2.25+Math.cos(this.time*7+m.number)*.12;else if(m.throwAnim>0){const y=D(m.throwAnim/.95,0,1),_=Math.sin((1-y)*Math.PI*.75);g.armL.rotation.x=-2.55-_*.2,g.armR.rotation.x=-2.35-_*.2,g.armL.rotation.z=.32,g.armR.rotation.z=-.32,g.body.rotation.x=-.08*y}else if(m.kickAnim>0){const y=1-D(m.kickAnim/.7,0,1),_=Math.sin(y*Math.PI);g.legR.rotation.x=-1.35*_,g.legL.rotation.x=.16*_,g.armL.rotation.x=-.35-_*.2,g.armR.rotation.x=.28+_*.25,g.body.rotation.x=.12*_}else m.restartAnim>0&&(g.armL.rotation.x=-2.45,g.armR.rotation.x=-1.2);if(m.gkDive>0&&m.isGK){const y=m.diveDir!=null?m.diveDir:Math.sin((m.number+1)*1.7);g.body.rotation.z=-y*.58*Math.min(1,m.gkDive*3),g.armL.rotation.x=-1.9,g.armR.rotation.x=-1.9}else m.isGK&&(g.body.rotation.z*=.8)}(i=(t=this.referee)==null?void 0:t.applyPoses)==null||i.call(t,e);const c=this.ball,h=this.ballVisual;h.root.position.set(c.x,0,c.z),h.ball.position.y=Jt+c.y;const u=D(1-c.y*.08,.45,1);h.shadow.scale.setScalar(u),h.shadow.material.opacity=.34*u;const f=Math.hypot(c.vx,c.vz);!c.owner&&f>.35&&(this._spinAxis.set(c.vz/f,0,-c.vx/f),h.ball.rotateOnWorldAxis(this._spinAxis,f*e/Jt));const d=this.controlled,v=!this.replayActive&&!((a=this.referee)!=null&&a.active)&&(this.state==="play"||this.state==="kickoff"||this.mode==="training"||this.state==="restart");if(d&&d.active&&v){this.ring.visible=!0,this.ring.position.set(d.pos.x,.04,d.pos.z);const m=.9+Math.sin(this.time*7)*.1;this.ring.scale.setScalar(m),this.ring.material.opacity=.55+Math.sin(this.time*7)*.25}else this.ring.visible=!1;const x=this.duel?this.controlled2:null;x&&x.active&&v?(this.ring2.visible=!0,this.ring2.position.set(x.pos.x,.045,x.pos.z),this.ring2.scale.setScalar(.9+Math.sin(this.time*7+1.3)*.1),this.ring2.material.opacity=.5+Math.sin(this.time*7+1.3)*.22):this.ring2.visible=!1,(s=this.updateCornerVisuals)==null||s.call(this,e),this.mode==="training"&&((r=this.updateDrillVisuals)==null||r.call(this,e)),(l=(o=this.referee)==null?void 0:o.updateVisual)==null||l.call(o,e)}addEvent(e,t,i,a=""){var s,r;const o=Math.max(0,Math.min(90,Math.round(i||this.clock))),l={type:e,text:t,min:o,team:((s=this.lastTouch)==null?void 0:s.team)??0};this.events.push(l),(r=this.onEvent)==null||r.call(this,l),this.hud.event(t,o,a)}get statsRows(){return[["POSSESSION",`${this.possessionPct[0]}%`,`${this.possessionPct[1]}%`],["SHOTS",this.stats.shots[0],this.stats.shots[1]],["ON TARGET",this.stats.onTarget[0],this.stats.onTarget[1]],["PASSES",this.stats.passes[0],this.stats.passes[1]],["PASS ACCURACY",`${this.passPct[0]}%`,`${this.passPct[1]}%`],["TACKLES",this.stats.tackles[0],this.stats.tackles[1]],["FOULS",this.stats.fouls[0],this.stats.fouls[1]],["CORNERS",this.stats.corners[0],this.stats.corners[1]],["OFFSIDES",this.stats.offsides[0],this.stats.offsides[1]],["SAVES",this.stats.saves[0],this.stats.saves[1]],["EXPECTED GOALS",this.stats.xg[0].toFixed(1),this.stats.xg[1].toFixed(1)]]}get possessionPct(){const e=this.possession[0]+this.possession[1];if(!e)return[50,50];const t=Math.round(this.possession[0]/e*100);return[t,100-t]}get passPct(){return[0,1].map(e=>{const t=this.stats.passes[e];return t?Math.round(this.stats.passesCompleted[e]/t*100):100})}}G0(ui);Eg(ui);X0(ui);ng(ui);eg(ui);ug(ui);dg(ui);pg(ui);mg(ui);vg(ui);export{Lg as A,At as I,Rg as P,Cg as R,si as S,ui as a,cc as b,Bh as y};
