var kp=Object.defineProperty;var Hp=(r,e,t)=>e in r?kp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Re=(r,e,t)=>Hp(r,typeof e!="symbol"?e+"":e,t);/* empty css               */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pu="169",Vp=0,Qu=1,Gp=2,Of=1,Wp=2,Ai=3,lr=0,En=1,di=2,ir=0,vs=1,eh=2,th=3,nh=4,Xp=5,Cr=100,Yp=101,qp=102,$p=103,Kp=104,Zp=200,jp=201,Jp=202,Qp=203,nc=204,ic=205,em=206,tm=207,nm=208,im=209,rm=210,sm=211,om=212,am=213,lm=214,rc=0,sc=1,oc=2,Rs=3,ac=4,lc=5,cc=6,uc=7,Ff=0,cm=1,um=2,rr=0,hm=1,fm=2,dm=3,pm=4,mm=5,_m=6,gm=7,Bf=300,Cs=301,Ps=302,hc=303,fc=304,ja=306,dc=1e3,Dr=1001,pc=1002,yn=1003,vm=1004,zo=1005,jn=1006,cl=1007,Zi=1008,Ni=1009,zf=1010,kf=1011,So=1012,mu=1013,Hr=1014,Pi=1015,Uo=1016,_u=1017,gu=1018,Ds=1020,Hf=35902,Vf=1021,Gf=1022,Jn=1023,Wf=1024,Xf=1025,xs=1026,Ls=1027,Yf=1028,vu=1029,qf=1030,xu=1031,Su=1033,xa=33776,Sa=33777,Ma=33778,ya=33779,mc=35840,_c=35841,gc=35842,vc=35843,xc=36196,Sc=37492,Mc=37496,yc=37808,Ec=37809,Tc=37810,bc=37811,Ac=37812,wc=37813,Rc=37814,Cc=37815,Pc=37816,Dc=37817,Lc=37818,Uc=37819,Ic=37820,Nc=37821,Ea=36492,Oc=36494,Fc=36495,$f=36283,Bc=36284,zc=36285,kc=36286,xm=3200,Sm=3201,Mm=0,ym=1,Ki="",ai="srgb",dr="srgb-linear",Mu="display-p3",Ja="display-p3-linear",Na="linear",Tt="srgb",Oa="rec709",Fa="p3",$r=7680,ih=519,Em=512,Tm=513,bm=514,Kf=515,Am=516,wm=517,Rm=518,Cm=519,rh=35044,sh="300 es",Di=2e3,Ba=2001;class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,Hc=180/Math.PI;function Io(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Sn(r,e,t){return Math.max(e,Math.min(t,r))}function Pm(r,e){return(r%e+e)%e}function hl(r,e,t){return(1-t)*r+t*e}function Vs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],x=i[4],M=i[7],R=i[2],A=i[5],T=i[8];return s[0]=o*g+a*y+l*R,s[3]=o*p+a*x+l*A,s[6]=o*m+a*M+l*T,s[1]=c*g+u*y+f*R,s[4]=c*p+u*x+f*A,s[7]=c*m+u*M+f*T,s[2]=h*g+d*y+_*R,s[5]=h*p+d*x+_*A,s[8]=h*m+d*M+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fl.makeScale(e,t)),this}rotate(e){return this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new Ze;function Zf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Mo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dm(){const r=Mo("canvas");return r.style.display="block",r}const oh={};function Ta(r){r in oh||(oh[r]=!0,console.warn(r))}function Lm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Um(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Im(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ah=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lh=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[dr]:{transfer:Na,primaries:Oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ai]:{transfer:Tt,primaries:Oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ja]:{transfer:Na,primaries:Fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(lh),fromReference:r=>r.applyMatrix3(ah)},[Mu]:{transfer:Tt,primaries:Fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(lh),fromReference:r=>r.applyMatrix3(ah).convertLinearToSRGB()}},Nm=new Set([dr,Ja]),ft={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Nm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Gs[e].toReference,i=Gs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Gs[r].primaries},getTransfer:function(r){return r===Ki?Na:Gs[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Gs[e].luminanceCoefficients)}};function Ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function dl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kr;class Om{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=Mo("canvas")),Kr.width=e.width,Kr.height=e.height;const n=Kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ss(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fm=0;class jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(pl(i[o].image)):s.push(pl(i[o]))}else s=pl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function pl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Om.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bm=0;class ln extends ks{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Dr,i=Dr,s=jn,o=Zi,a=Jn,l=Ni,c=ln.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Io(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dc:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dc:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Bf;ln.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,R=(m+1)/2,A=(u+h)/4,T=(f+g)/4,D=(_+p)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=D/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=D/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zm extends ks{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends zm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jf extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class km extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-a;const m=l*h+c*d+u*_+f*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*y);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const M=a*y;if(l=l*p+h*M,c=c*p+d*M,u=u*p+_*M,f=f*p+g*M,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new X,ch=new No;class Oo{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Ho.subVectors(this.max,Ws),Zr.subVectors(e.a,Ws),jr.subVectors(e.b,Ws),Jr.subVectors(e.c,Ws),Hi.subVectors(jr,Zr),Vi.subVectors(Jr,jr),_r.subVectors(Zr,Jr);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-_r.z,_r.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,_r.z,0,-_r.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-_r.y,_r.x,0];return!_l(t,Zr,jr,Jr,Ho)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,Zr,jr,Jr,Ho))?!1:(Vo.crossVectors(Hi,Vi),t=[Vo.x,Vo.y,Vo.z],_l(t,Zr,jr,Jr,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new X,new X,new X,new X,new X,new X,new X,new X],ii=new X,ko=new Oo,Zr=new X,jr=new X,Jr=new X,Hi=new X,Vi=new X,_r=new X,Ws=new X,Ho=new X,Vo=new X,gr=new X;function _l(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gr.fromArray(r,s);const a=i.x*Math.abs(gr.x)+i.y*Math.abs(gr.y)+i.z*Math.abs(gr.z),l=e.dot(gr),c=t.dot(gr),u=n.dot(gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hm=new Oo,Xs=new X,gl=new X;class yu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(gl)),this.expandByPoint(Xs.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new X,vl=new X,Go=new X,Gi=new X,xl=new X,Wo=new X,Sl=new X;class Vm{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vl.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(vl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=Gi.dot(this.direction),l=-Gi.dot(Go),c=Gi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(vl).addScaledVector(Go,h),d}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,s){xl.subVectors(t,e),Wo.subVectors(n,e),Sl.crossVectors(xl,Wo);let o=this.direction.dot(Sl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Wo.crossVectors(Gi,Wo));if(l<0)return null;const c=a*this.direction.dot(xl.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(Sl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,_,g,p){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Wm)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Wi.crossVectors(n,Dn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Wi.crossVectors(n,Dn)),Wi.normalize(),Xo.crossVectors(Dn,Wi),i[0]=Wi.x,i[4]=Xo.x,i[8]=Dn.x,i[1]=Wi.y,i[5]=Xo.y,i[9]=Dn.y,i[2]=Wi.z,i[6]=Xo.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],M=n[11],R=n[15],A=i[0],T=i[4],D=i[8],F=i[12],v=i[1],b=i[5],N=i[9],k=i[13],V=i[2],Z=i[6],B=i[10],$=i[14],W=i[3],re=i[7],C=i[11],ae=i[15];return s[0]=o*A+a*v+l*V+c*W,s[4]=o*T+a*b+l*Z+c*re,s[8]=o*D+a*N+l*B+c*C,s[12]=o*F+a*k+l*$+c*ae,s[1]=u*A+f*v+h*V+d*W,s[5]=u*T+f*b+h*Z+d*re,s[9]=u*D+f*N+h*B+d*C,s[13]=u*F+f*k+h*$+d*ae,s[2]=_*A+g*v+p*V+m*W,s[6]=_*T+g*b+p*Z+m*re,s[10]=_*D+g*N+p*B+m*C,s[14]=_*F+g*k+p*$+m*ae,s[3]=y*A+x*v+M*V+R*W,s[7]=y*T+x*b+M*Z+R*re,s[11]=y*D+x*N+M*B+R*C,s[15]=y*F+x*k+M*$+R*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+g*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],y=f*p*c-g*h*c+g*l*d-a*p*d-f*l*m+a*h*m,x=_*h*c-u*p*c-_*l*d+o*p*d+u*l*m-o*h*m,M=u*g*c-_*f*c+_*a*d-o*g*d-u*a*m+o*f*m,R=_*f*l-u*g*l-_*a*h+o*g*h+u*a*p-o*f*p,A=t*y+n*x+i*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=y*T,e[1]=(g*h*s-f*p*s-g*i*d+n*p*d+f*i*m-n*h*m)*T,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,e[4]=x*T,e[5]=(u*p*s-_*h*s+_*i*d-t*p*d-u*i*m+t*h*m)*T,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*T,e[8]=M*T,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*m-t*f*m)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*T,e[12]=R*T,e[13]=(u*g*i-_*f*i+_*n*h-t*g*h-u*n*p+t*f*p)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,p=o*f,m=a*f,y=l*c,x=l*u,M=l*f,R=n.x,A=n.y,T=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+M)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(h+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(_+x)*T,i[9]=(p-y)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qr.set(i[0],i[1],i[2]).length();const o=Qr.set(i[4],i[5],i[6]).length(),a=Qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ri.copy(this);const c=1/s,u=1/o,f=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,t.setFromRotationMatrix(ri),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Di){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,_;if(a===Di)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ba)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Di){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,d=(n+i)*u;let _,g;if(a===Di)_=(o+s)*f,g=-2*f;else if(a===Ba)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qr=new X,ri=new Vt,Gm=new X(0,0,0),Wm=new X(1,1,1),Wi=new X,Xo=new X,Dn=new X,uh=new Vt,hh=new No;class Oi{constructor(e=0,t=0,n=0,i=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xm=0;const fh=new X,es=new No,Ei=new Vt,Yo=new X,Ys=new X,Ym=new X,qm=new No,dh=new X(1,0,0),ph=new X(0,1,0),mh=new X(0,0,1),_h={type:"added"},$m={type:"removed"},ts={type:"childadded",child:null},Ml={type:"childremoved",child:null};class Hn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new X,t=new Oi,n=new No,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Ze}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ys,Yo,this.up):Ei.lookAt(Yo,Ys,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Ei),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Hn.DEFAULT_UP=new X(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new X,Ti=new X,yl=new X,bi=new X,ns=new X,is=new X,gh=new X,El=new X,Tl=new X,bl=new X,Al=new Ft,wl=new Ft,Rl=new Ft;class li{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),si.subVectors(e,t),i.cross(si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){si.subVectors(i,t),Ti.subVectors(n,t),yl.subVectors(e,t);const o=si.dot(si),a=si.dot(Ti),l=si.dot(yl),c=Ti.dot(Ti),u=Ti.dot(yl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Al.setScalar(0),wl.setScalar(0),Rl.setScalar(0),Al.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Al,s.x),o.addScaledVector(wl,s.y),o.addScaledVector(Rl,s.z),o}static isFrontFacing(e,t,n,i){return si.subVectors(n,t),Ti.subVectors(e,t),si.cross(Ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),si.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return li.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ns.subVectors(i,n),is.subVectors(s,n),El.subVectors(e,n);const l=ns.dot(El),c=is.dot(El);if(l<=0&&c<=0)return t.copy(n);Tl.subVectors(e,i);const u=ns.dot(Tl),f=is.dot(Tl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ns,o);bl.subVectors(e,s);const d=ns.dot(bl),_=is.dot(bl);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(is,a);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return gh.subVectors(s,i),a=(f-u)/(f-u+(d-_)),t.copy(i).addScaledVector(gh,a);const m=1/(p+g+h);return o=g*m,a=h*m,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Cl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Pm(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=ai){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return ft.fromWorkingColorSpace(nn.copy(this),e),Math.round(Sn(nn.r*255,0,255))*65536+Math.round(Sn(nn.g*255,0,255))*256+Math.round(Sn(nn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=ai){ft.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,i=nn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(qo);const n=hl(Xi.h,qo.h,t),i=hl(Xi.s,qo.s,t),s=hl(Xi.l,qo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new _t;_t.NAMES=ed;let Km=0;class Qa extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=vs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==Cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class td extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new X,$o=new Mt;class vi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class nd extends vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class id extends vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ui extends vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zm=0;const Yn=new Vt,Pl=new Hn,rs=new X,Ln=new Oo,qs=new Oo,$t=new X;class pr extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?id:nd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Ln.min,qs.min),Ln.expandByPoint($t),$t.addVectors(Ln.max,qs.max),Ln.expandByPoint($t)):(Ln.expandByPoint(qs.min),Ln.expandByPoint(qs.max))}Ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),$t.add(rs)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new X,l[D]=new X;const c=new X,u=new X,f=new X,h=new Mt,d=new Mt,_=new Mt,g=new X,p=new X;function m(D,F,v){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,F),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,F),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const b=1/(d.x*_.y-_.x*d.y);isFinite(b)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(b),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(b),a[D].add(g),a[F].add(g),a[v].add(g),l[D].add(p),l[F].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,F=y.length;D<F;++D){const v=y[D],b=v.start,N=v.count;for(let k=b,V=b+N;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new X,M=new X,R=new X,A=new X;function T(D){R.fromBufferAttribute(i,D),A.copy(R);const F=a[D];x.copy(F),x.sub(R.multiplyScalar(R.dot(F))).normalize(),M.crossVectors(A,F);const b=M.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,b)}for(let D=0,F=y.length;D<F;++D){const v=y[D],b=v.start,N=v.count;for(let k=b,V=b+N;k<V;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new vi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vh=new Vt,vr=new Vm,Ko=new yu,xh=new X,Zo=new X,jo=new X,Jo=new X,Dl=new X,Qo=new X,Sh=new X,ea=new X;class mi extends Hn{constructor(e=new pr,t=new td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Dl.fromBufferAttribute(f,e),o?Qo.addScaledVector(Dl,u):Qo.addScaledVector(Dl.sub(t),u))}t.add(Qo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Ko.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Ko,xh)===null||vr.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(vh.copy(s).invert(),vr.copy(e.ray).applyMatrix4(vh),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,R=x;M<R;M+=3){const A=a.getX(M),T=a.getX(M+1),D=a.getX(M+2);i=ta(this,m,e,n,c,u,f,A,T,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);i=ta(this,o,e,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,R=x;M<R;M+=3){const A=M,T=M+1,D=M+2;i=ta(this,m,e,n,c,u,f,A,T,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,M=p+2;i=ta(this,o,e,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function jm(r,e,t,n,i,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===lr,a),l===null)return null;ea.copy(a),ea.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:r}}function ta(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Zo),r.getVertexPosition(l,jo),r.getVertexPosition(c,Jo);const u=jm(r,e,t,n,Zo,jo,Jo,Sh);if(u){const f=new X;li.getBarycoord(Sh,Zo,jo,Jo,f),i&&(u.uv=li.getInterpolatedAttribute(i,a,l,c,f,new Mt)),s&&(u.uv1=li.getInterpolatedAttribute(s,a,l,c,f,new Mt)),o&&(u.normal=li.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new X,materialIndex:0};li.getNormal(Zo,jo,Jo,h.normal),u.face=h,u.barycoord=f}return u}class Fo extends pr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(f,2));function _(g,p,m,y,x,M,R,A,T,D,F){const v=M/T,b=R/D,N=M/2,k=R/2,V=A/2,Z=T+1,B=D+1;let $=0,W=0;const re=new X;for(let C=0;C<B;C++){const ae=C*b-k;for(let Be=0;Be<Z;Be++){const Xe=Be*v-N;re[g]=Xe*y,re[p]=ae*x,re[m]=V,c.push(re.x,re.y,re.z),re[g]=0,re[p]=0,re[m]=A>0?1:-1,u.push(re.x,re.y,re.z),f.push(Be/T),f.push(1-C/D),$+=1}}for(let C=0;C<D;C++)for(let ae=0;ae<T;ae++){const Be=h+ae+Z*C,Xe=h+ae+Z*(C+1),Y=h+(ae+1)+Z*(C+1),Q=h+(ae+1)+Z*C;l.push(Be,Xe,Q),l.push(Xe,Y,Q),W+=6}a.addGroup(d,W,F),d+=W,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function fn(r){const e={};for(let t=0;t<r.length;t++){const n=Us(r[t]);for(const i in n)e[i]=n[i]}return e}function Jm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Qm={clone:Us,merge:fn};var e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sd extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new X,Mh=new Mt,yh=new Mt;class $n extends sd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,yh),t.subVectors(yh,Mh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ul*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,os=1;class n_ extends Hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $n(ss,os,e,t);i.layers=this.layers,this.add(i);const s=new $n(ss,os,e,t);s.layers=this.layers,this.add(s);const o=new $n(ss,os,e,t);o.layers=this.layers,this.add(o);const a=new $n(ss,os,e,t);a.layers=this.layers,this.add(a);const l=new $n(ss,os,e,t);l.layers=this.layers,this.add(l);const c=new $n(ss,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class od extends ln{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i_ extends Vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new od(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fo(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:ir});s.uniforms.tEquirect.value=t;const o=new mi(i,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=jn),new n_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ll=new X,r_=new X,s_=new Ze;class Tr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ll.subVectors(n,t).cross(r_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||s_.getNormalMatrix(e),i=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new yu,na=new X;class ad{constructor(e=new Tr,t=new Tr,n=new Tr,i=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,p-d,M-m).normalize(),n[1].setComponents(l+s,h+c,p+d,M+m).normalize(),n[2].setComponents(l+o,h+u,p+_,M+y).normalize(),n[3].setComponents(l-o,h-u,p-_,M-y).normalize(),n[4].setComponents(l-a,h-f,p-g,M-x).normalize(),t===Di)n[5].setComponents(l+a,h+f,p+g,M+x).normalize();else if(t===Ba)n[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(na.x=i.normal.x>0?e.max.x:e.min.x,na.y=i.normal.y>0?e.max.y:e.min.y,na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function o_(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class el extends pr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let x=0;x<c;x++){const M=x*f-s;_.push(M,-y,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,M=y+c*(m+1),R=y+1+c*(m+1),A=y+1+c*m;d.push(x,M,A),d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new Ui(_,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
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
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
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
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
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
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S_=`#ifdef USE_IRIDESCENCE
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
#endif`,M_=`#ifdef USE_BUMPMAP
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P_=`#define PI 3.141592653589793
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
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L_=`vec3 transformedNormal = objectNormal;
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
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`
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
}`,z_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
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
}`,K_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
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
#endif`,Q_=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,sg=`struct PhysicalMaterial {
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
}`,og=`
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,x0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,C0=`#define PHONG
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
}`,P0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,L0=`#define TOON
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
}`,U0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:a_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:u_,alphatest_fragment:h_,alphatest_pars_fragment:f_,aomap_fragment:d_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:__,begin_vertex:g_,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:S_,bumpmap_pars_fragment:M_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:b_,color_fragment:A_,color_pars_fragment:w_,color_pars_vertex:R_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:L_,displacementmap_pars_vertex:U_,displacementmap_vertex:I_,emissivemap_fragment:N_,emissivemap_pars_fragment:O_,colorspace_fragment:F_,colorspace_pars_fragment:B_,envmap_fragment:z_,envmap_common_pars_fragment:k_,envmap_pars_fragment:H_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:Q_,envmap_vertex:G_,fog_vertex:W_,fog_pars_vertex:X_,fog_fragment:Y_,fog_pars_fragment:q_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:K_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:j_,lights_pars_begin:J_,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:rg,lights_physical_pars_fragment:sg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:_g,metalnessmap_fragment:gg,metalnessmap_pars_fragment:vg,morphinstance_vertex:xg,morphcolor_vertex:Sg,morphnormal_vertex:Mg,morphtarget_pars_vertex:yg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:bg,normal_pars_fragment:Ag,normal_pars_vertex:wg,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Ug,opaque_fragment:Ig,packing:Ng,premultiplied_alpha_fragment:Og,project_vertex:Fg,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Gg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:Yg,skinning_pars_vertex:qg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Zg,specularmap_pars_fragment:jg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:e0,transmission_pars_fragment:t0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:r0,worldpos_vertex:s0,background_vert:o0,background_frag:a0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:u0,cube_frag:h0,depth_vert:f0,depth_frag:d0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:_0,equirect_frag:g0,linedashed_vert:v0,linedashed_frag:x0,meshbasic_vert:S0,meshbasic_frag:M0,meshlambert_vert:y0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:b0,meshnormal_vert:A0,meshnormal_frag:w0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:P0,meshphysical_frag:D0,meshtoon_vert:L0,meshtoon_frag:U0,points_vert:I0,points_frag:N0,shadow_vert:O0,shadow_frag:F0,sprite_vert:B0,sprite_frag:z0},me={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},fi={basic:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:fn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:fn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:fn([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:fn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:fn([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:fn([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:fn([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:fn([me.lights,me.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};fi.physical={uniforms:fn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ia={r:0,b:0,g:0},Sr=new Oi,k0=new Vt;function H0(r,e,t,n,i,s,o){const a=new _t(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function g(y){let x=!1;const M=_(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===ja)?(u===void 0&&(u=new mi(new Fo(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Us(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Sr.copy(x.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(Sr)),u.material.toneMapped=ft.getTransfer(M.colorSpace)!==Tt,(f!==M||h!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new mi(new el(2,2),new Fi({name:"BackgroundMaterial",uniforms:Us(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(ia,rd(r)),n.buffers.color.setClear(ia.r,ia.g,ia.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:p}}function V0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,b,N,k,V){let Z=!1;const B=f(k,N,b);s!==B&&(s=B,c(s.object)),Z=d(v,k,N,V),Z&&_(v,k,N,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(v,b,N,k),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,b,N){const k=N.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let Z=V[b.id];Z===void 0&&(Z={},V[b.id]=Z);let B=Z[k];return B===void 0&&(B=h(l()),Z[k]=B),B}function h(v){const b=[],N=[],k=[];for(let V=0;V<t;V++)b[V]=0,N[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,b,N,k){const V=s.attributes,Z=b.attributes;let B=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){const C=V[W];let ae=Z[W];if(ae===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),C===void 0||C.attribute!==ae||ae&&C.data!==ae.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function _(v,b,N,k){const V={},Z=b.attributes;let B=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){let C=Z[W];C===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(C=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(C=v.instanceColor));const ae={};ae.attribute=C,C&&C.data&&(ae.data=C.data),V[W]=ae,B++}s.attributes=V,s.attributesNum=B,s.index=k}function g(){const v=s.newAttributes;for(let b=0,N=v.length;b<N;b++)v[b]=0}function p(v){m(v,0)}function m(v,b){const N=s.newAttributes,k=s.enabledAttributes,V=s.attributeDivisors;N[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),V[v]!==b&&(r.vertexAttribDivisor(v,b),V[v]=b)}function y(){const v=s.newAttributes,b=s.enabledAttributes;for(let N=0,k=b.length;N<k;N++)b[N]!==v[N]&&(r.disableVertexAttribArray(N),b[N]=0)}function x(v,b,N,k,V,Z,B){B===!0?r.vertexAttribIPointer(v,b,N,V,Z):r.vertexAttribPointer(v,b,N,k,V,Z)}function M(v,b,N,k){g();const V=k.attributes,Z=N.getAttributes(),B=b.defaultAttributeValues;for(const $ in Z){const W=Z[$];if(W.location>=0){let re=V[$];if(re===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const C=re.normalized,ae=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const Xe=Be.buffer,Y=Be.type,Q=Be.bytesPerElement,fe=Y===r.INT||Y===r.UNSIGNED_INT||re.gpuType===mu;if(re.isInterleavedBufferAttribute){const oe=re.data,be=oe.stride,ye=re.offset;if(oe.isInstancedInterleavedBuffer){for(let We=0;We<W.locationSize;We++)m(W.location+We,oe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let We=0;We<W.locationSize;We++)p(W.location+We);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let We=0;We<W.locationSize;We++)x(W.location+We,ae/W.locationSize,Y,C,be*Q,(ye+ae/W.locationSize*We)*Q,fe)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe,re.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let oe=0;oe<W.locationSize;oe++)x(W.location+oe,ae/W.locationSize,Y,C,ae*Q,ae/W.locationSize*oe*Q,fe)}}else if(B!==void 0){const C=B[$];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(W.location,C);break;case 3:r.vertexAttrib3fv(W.location,C);break;case 4:r.vertexAttrib4fv(W.location,C);break;default:r.vertexAttrib1fv(W.location,C)}}}}y()}function R(){D();for(const v in n){const b=n[v];for(const N in b){const k=b[N];for(const V in k)u(k[V].object),delete k[V];delete b[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const N in b){const k=b[N];for(const V in k)u(k[V].object),delete k[V];delete b[N]}delete n[v.id]}function T(v){for(const b in n){const N=n[b];if(N[v.id]===void 0)continue;const k=N[v.id];for(const V in k)u(k[V].object),delete k[V];delete N[v.id]}}function D(){F(),o=!0,s!==i&&(s=i,c(s.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function G0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<h.length;g++)t.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Jn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ni&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pi&&!D)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function X0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Tr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=u(_,h,x,d);for(let R=0;R!==x;++R)M[R]=t[R];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==g;++x,M+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Y0(r){let e=new WeakMap;function t(o,a){return a===hc?o.mapping=Cs:a===fc&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===fc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new i_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class q0 extends sd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,Eh=[.125,.215,.35,.446,.526,.582],Pr=20,Ul=new q0,Th=new _t;let Il=null,Nl=0,Ol=0,Fl=!1;const br=(1+Math.sqrt(5))/2,as=1/br,bh=[new X(-br,as,0),new X(br,as,0),new X(-as,0,br),new X(as,0,br),new X(0,br,-as),new X(0,br,as),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Il=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Nl,Ol),this._renderer.xr.enabled=Fl,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Uo,format:Jn,colorSpace:dr,depthBuffer:!1},i=wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(s)),this._blurMaterial=K0(s,e,t)}return i}_compileMaterial(e){const t=new mi(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,n,i){const a=new $n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Th),u.toneMapping=rr,u.autoClear=!1;const d=new td({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new mi(new Fo,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Th),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;ra(i,y*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cs||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new mi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ul)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bh[(i-s-1)%bh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new mi(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Pr;p>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pr}`);const m=[];let y=0;for(let T=0;T<Pr;++T){const D=T/g,F=Math.exp(-D*D/2);m.push(F),T===0?y+=F:T<p&&(y+=2*F)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const M=this._sizeLods[i],R=3*M*(i>x-ps?i-x+ps:0),A=4*(this._cubeSize-M);ra(t,R,A,3*M,2*M),l.setRenderTarget(t),l.render(f,Ul)}}function $0(r){const e=[],t=[],n=[];let i=r;const s=r-ps+1+Eh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ps?l=Eh[o-r+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),x=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,D=A>2?0:-1,F=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];y.set(F,g*_*A),x.set(h,p*_*A);const v=[A,A,A,A,A,A];M.set(v,m*_*A)}const R=new pr;R.setAttribute("position",new vi(y,g)),R.setAttribute("uv",new vi(x,p)),R.setAttribute("faceIndex",new vi(M,m)),e.push(R),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wh(r,e,t){const n=new Vr(r,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function K0(r,e,t){const n=new Float32Array(Pr),i=new X(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Rh(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Ch(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}function Z0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===fc,u=l===Cs||l===Ps;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ah(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Ah(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function j0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ta("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J0(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let x=0,M=y.length;x<M;x+=3){const R=y[x+0],A=y[x+1],T=y[x+2];h.push(R,A,A,T,T,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const R=x+0,A=x+1,T=x+2;h.push(R,A,A,T,T,R)}}else return;const p=new(Zf(h)?id:nd)(h,1);p.version=g;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Q0(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*o,_),t.update(d,n,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function f(h,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=d[y];for(let y=0;y<g.length;y++)t.update(m,n,g[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ev(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tv(r,e,t){const n=new WeakMap,i=new Ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let F=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let M=a.attributes.position.count*x,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*R*4*f),T=new Jf(A,M,R,f);T.type=Pi,T.needsUpdate=!0;const D=x*4;for(let v=0;v<f;v++){const b=p[v],N=m[v],k=y[v],V=M*R*4*v;for(let Z=0;Z<b.count;Z++){const B=Z*D;d===!0&&(i.fromBufferAttribute(b,Z),A[V+B+0]=i.x,A[V+B+1]=i.y,A[V+B+2]=i.z,A[V+B+3]=0),_===!0&&(i.fromBufferAttribute(N,Z),A[V+B+4]=i.x,A[V+B+5]=i.y,A[V+B+6]=i.z,A[V+B+7]=0),g===!0&&(i.fromBufferAttribute(k,Z),A[V+B+8]=i.x,A[V+B+9]=i.y,A[V+B+10]=i.z,A[V+B+11]=k.itemSize===4?i.w:1)}}h={count:f,texture:T,size:new Mt(M,R)},n.set(a,h),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function nv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class cd extends ln{constructor(e,t,n,i,s,o,a,l,c,u=xs){if(u!==xs&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=Hr),n===void 0&&u===Ls&&(n=Ds),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ud=new ln,Ph=new cd(1,1),hd=new Jf,fd=new km,dd=new od,Dh=[],Lh=[],Uh=new Float32Array(16),Ih=new Float32Array(9),Nh=new Float32Array(4);function Hs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dh[i];if(s===void 0&&(s=new Float32Array(i),Dh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function tl(r,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function iv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2fv(this.addr,e),Yt(t,e)}}function sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;r.uniform3fv(this.addr,e),Yt(t,e)}}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4fv(this.addr,e),Yt(t,e)}}function av(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Nh.set(n),r.uniformMatrix2fv(this.addr,!1,Nh),Yt(t,n)}}function lv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Ih.set(n),r.uniformMatrix3fv(this.addr,!1,Ih),Yt(t,n)}}function cv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Uh.set(n),r.uniformMatrix4fv(this.addr,!1,Uh),Yt(t,n)}}function uv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2iv(this.addr,e),Yt(t,e)}}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3iv(this.addr,e),Yt(t,e)}}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4iv(this.addr,e),Yt(t,e)}}function pv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2uiv(this.addr,e),Yt(t,e)}}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3uiv(this.addr,e),Yt(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4uiv(this.addr,e),Yt(t,e)}}function vv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ph.compareFunction=Kf,s=Ph):s=ud,t.setTexture2D(e||s,i)}function xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fd,i)}function Sv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dd,i)}function Mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hd,i)}function yv(r){switch(r){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return _v;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Ev(r,e){r.uniform1fv(this.addr,e)}function Tv(r,e){const t=Hs(e,this.size,2);r.uniform2fv(this.addr,t)}function bv(r,e){const t=Hs(e,this.size,3);r.uniform3fv(this.addr,t)}function Av(r,e){const t=Hs(e,this.size,4);r.uniform4fv(this.addr,t)}function wv(r,e){const t=Hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rv(r,e){const t=Hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cv(r,e){const t=Hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pv(r,e){r.uniform1iv(this.addr,e)}function Dv(r,e){r.uniform2iv(this.addr,e)}function Lv(r,e){r.uniform3iv(this.addr,e)}function Uv(r,e){r.uniform4iv(this.addr,e)}function Iv(r,e){r.uniform1uiv(this.addr,e)}function Nv(r,e){r.uniform2uiv(this.addr,e)}function Ov(r,e){r.uniform3uiv(this.addr,e)}function Fv(r,e){r.uniform4uiv(this.addr,e)}function Bv(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ud,s[o])}function zv(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||fd,s[o])}function kv(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||dd,s[o])}function Hv(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||hd,s[o])}function Vv(r){switch(r){case 5126:return Ev;case 35664:return Tv;case 35665:return bv;case 35666:return Av;case 35674:return wv;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Dv;case 35668:case 35672:return Lv;case 35669:case 35673:return Uv;case 5125:return Iv;case 36294:return Nv;case 36295:return Ov;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}class Gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yv(t.type)}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}}class Xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Oh(r,e){r.seq.push(e),r.map[e.id]=e}function Yv(r,e,t){const n=r.name,i=n.length;for(Bl.lastIndex=0;;){const s=Bl.exec(n),o=Bl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Oh(t,c===void 0?new Gv(a,r,e):new Wv(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Xv(a),Oh(t,f)),t=f}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Yv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Fh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qv=37297;let $v=0;function Kv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Zv(r){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(r);let n;switch(e===t?n="":e===Fa&&t===Oa?n="LinearDisplayP3ToLinearSRGB":e===Oa&&t===Fa&&(n="LinearSRGBToLinearDisplayP3"),r){case dr:case Ja:return[n,"LinearTransferOETF"];case ai:case Mu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Bh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Kv(r.getShaderSource(e),o)}else return i}function jv(r,e){const t=Zv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jv(r,e){let t;switch(e){case hm:t="Linear";break;case fm:t="Reinhard";break;case dm:t="Cineon";break;case pm:t="ACESFilmic";break;case _m:t="AgX";break;case gm:t="Neutral";break;case mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new X;function Qv(){ft.getLuminanceCoefficients(sa);const r=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function tx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function js(r){return r!==""}function zh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(r){return r.replace(ix,sx)}const rx=new Map;function sx(r,e){let t=Ke[e];if(t===void 0){const n=rx.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vc(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(r){return r.replace(ox,ax)}function ax(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function hx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case cm:e="ENVMAP_BLENDING_MIX";break;case um:e="ENVMAP_BLENDING_ADD";break}return e}function fx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lx(t),c=cx(t),u=ux(t),f=hx(t),h=fx(t),d=ex(t),_=tx(s),g=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`)):(p=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),m=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?Ke.tonemapping_pars_fragment:"",t.toneMapping!==rr?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=Vc(o),o=zh(o,t),o=kh(o,t),a=Vc(a),a=zh(a,t),a=kh(a,t),o=Hh(o),a=Hh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,M=y+m+a,R=Fh(i,i.VERTEX_SHADER,x),A=Fh(i,i.FRAGMENT_SHADER,M);i.attachShader(g,R),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(b){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(A).trim();let Z=!0,B=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const $=Bh(i,R,"vertex"),W=Bh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+$+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||V==="")&&(B=!1);B&&(b.diagnostics={runnable:Z,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(R),i.deleteShader(A),D=new ba(i,g),F=nx(i,g)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let F;this.getAttributes=function(){return F===void 0&&T(this),F};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,qv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _x(e),t.set(e,n)),n}}class _x{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function gx(r,e,t,n,i,s,o){const a=new Qf,l=new mx,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,N,k,V){const Z=k.fog,B=V.geometry,$=v.isMeshStandardMaterial?k.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),re=W&&W.mapping===ja?W.image.height:null,C=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Be=ae!==void 0?ae.length:0;let Xe=0;B.morphAttributes.position!==void 0&&(Xe=1),B.morphAttributes.normal!==void 0&&(Xe=2),B.morphAttributes.color!==void 0&&(Xe=3);let Y,Q,fe,oe;if(C){const we=fi[C];Y=we.vertexShader,Q=we.fragmentShader}else Y=v.vertexShader,Q=v.fragmentShader,l.update(v),fe=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const be=r.getRenderTarget(),ye=V.isInstancedMesh===!0,We=V.isBatchedMesh===!0,Ve=!!v.map,Ne=!!v.matcap,P=!!W,st=!!v.aoMap,Oe=!!v.lightMap,ze=!!v.bumpMap,O=!!v.normalMap,je=!!v.displacementMap,De=!!v.emissiveMap,w=!!v.metalnessMap,S=!!v.roughnessMap,G=v.anisotropy>0,j=v.clearcoat>0,te=v.dispersion>0,K=v.iridescence>0,Se=v.sheen>0,ie=v.transmission>0,de=G&&!!v.anisotropyMap,He=j&&!!v.clearcoatMap,ne=j&&!!v.clearcoatNormalMap,ve=j&&!!v.clearcoatRoughnessMap,xe=K&&!!v.iridescenceMap,Ue=K&&!!v.iridescenceThicknessMap,ge=Se&&!!v.sheenColorMap,Ye=Se&&!!v.sheenRoughnessMap,Fe=!!v.specularMap,ot=!!v.specularColorMap,L=!!v.specularIntensityMap,ee=ie&&!!v.transmissionMap,q=ie&&!!v.thicknessMap,J=!!v.gradientMap,le=!!v.alphaMap,ce=v.alphaTest>0,qe=!!v.alphaHash,gt=!!v.extensions;let At=rr;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(At=r.toneMapping);const it={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:We,batchingColor:We&&V._colorsTexture!==null,instancing:ye,instancingColor:ye&&V.instanceColor!==null,instancingMorph:ye&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:dr,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:Ne,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:re,aoMap:st,lightMap:Oe,bumpMap:ze,normalMap:O,displacementMap:d&&je,emissiveMap:De,normalMapObjectSpace:O&&v.normalMapType===ym,normalMapTangentSpace:O&&v.normalMapType===Mm,metalnessMap:w,roughnessMap:S,anisotropy:G,anisotropyMap:de,clearcoat:j,clearcoatMap:He,clearcoatNormalMap:ne,clearcoatRoughnessMap:ve,dispersion:te,iridescence:K,iridescenceMap:xe,iridescenceThicknessMap:Ue,sheen:Se,sheenColorMap:ge,sheenRoughnessMap:Ye,specularMap:Fe,specularColorMap:ot,specularIntensityMap:L,transmission:ie,transmissionMap:ee,thicknessMap:q,gradientMap:J,opaque:v.transparent===!1&&v.blending===vs&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ce,alphaHash:qe,combine:v.combine,mapUv:Ve&&p(v.map.channel),aoMapUv:st&&p(v.aoMap.channel),lightMapUv:Oe&&p(v.lightMap.channel),bumpMapUv:ze&&p(v.bumpMap.channel),normalMapUv:O&&p(v.normalMap.channel),displacementMapUv:je&&p(v.displacementMap.channel),emissiveMapUv:De&&p(v.emissiveMap.channel),metalnessMapUv:w&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:de&&p(v.anisotropyMap.channel),clearcoatMapUv:He&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(v.sheenRoughnessMap.channel),specularMapUv:Fe&&p(v.specularMap.channel),specularColorMapUv:ot&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:ee&&p(v.transmissionMap.channel),thicknessMapUv:q&&p(v.thicknessMap.channel),alphaMapUv:le&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(O||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(Ve||le),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:At,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function y(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)b.push(N),b.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(b,v),M(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){const b=g[v.type];let N;if(b){const k=fi[b];N=Qm.clone(k.uniforms)}else N=v.uniforms;return N}function A(v,b){let N;for(let k=0,V=u.length;k<V;k++){const Z=u[k];if(Z.cacheKey===b){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new dx(r,b,v,s),u.push(N)),N}function T(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function D(v){l.remove(v)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:F}}function vx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function xx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,_,g,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),e++,m}function a(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||xx),n.length>1&&n.sort(h||Gh),i.length>1&&i.sort(h||Gh)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Sx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Wh,r.set(n,[o])):i>=s.length?(o=new Wh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Mx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new _t};break;case"SpotLight":t={position:new X,direction:new X,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function yx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ex=0;function Tx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bx(r){const e=new Mx,t=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Vt,o=new Vt;function a(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,y=0,x=0,M=0,R=0,A=0,T=0;c.sort(Tx);for(let F=0,v=c.length;F<v;F++){const b=c[F],N=b.color,k=b.intensity,V=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=N.r*k,f+=N.g*k,h+=N.b*k;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],k);T++}else if(b.isDirectionalLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const $=b.shadow,W=t.get(b);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=b.shadow.matrix,y++}n.directional[d]=B,d++}else if(b.isSpotLight){const B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(N).multiplyScalar(k),B.distance=V,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[g]=B;const $=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,$.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[g]=$.matrix,b.castShadow){const W=t.get(b);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=Z,M++}g++}else if(b.isRectAreaLight){const B=e.get(b);B.color.copy(N).multiplyScalar(k),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=B,p++}else if(b.isPointLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const $=b.shadow,W=t.get(b);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=b.shadow.matrix,x++}n.point[_]=B,_++}else if(b.isHemisphereLight){const B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(k),B.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[m]=B,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==M||D.numSpotMaps!==R||D.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,D.directionalLength=d,D.pointLength=_,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=M,D.numSpotMaps=R,D.numLightProbes=T,n.version=Ex++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Xh(r){const e=new bx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ax(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Xh(r),e.set(i,[a])):s>=o.length?(a=new Xh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class wx extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rx extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Dx(r,e,t){let n=new ad;const i=new Mt,s=new Mt,o=new Ft,a=new wx({depthPacking:Sm}),l=new Rx,c={},u=t.maxTextureSize,f={[lr]:En,[En]:lr,[di]:di},h=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new pr;_.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let m=this.type;this.render=function(A,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const F=r.getRenderTarget(),v=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ir),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=m!==Ai&&this.type===Ai,V=m===Ai&&this.type!==Ai;for(let Z=0,B=A.length;Z<B;Z++){const $=A[Z],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const re=W.getFrameExtents();if(i.multiply(re),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,W.mapSize.y=s.y)),W.map===null||k===!0||V===!0){const ae=this.type!==Ai?{minFilter:yn,magFilter:yn}:{};W.map!==null&&W.map.dispose(),W.map=new Vr(i.x,i.y,ae),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const C=W.getViewportCount();for(let ae=0;ae<C;ae++){const Be=W.getViewport(ae);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),N.viewport(o),W.updateMatrices($,ae),n=W.getFrustum(),M(T,D,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Ai&&y(W,D),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(F,v,b)};function y(A,T){const D=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vr(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,D,h,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,D,d,g,null)}function x(A,T,D,F){let v=null;const b=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)v=b;else if(v=D.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=v.uuid,k=T.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let Z=V[k];Z===void 0&&(Z=v.clone(),V[k]=Z,T.addEventListener("dispose",R)),v=Z}if(v.visible=T.visible,v.wireframe=T.wireframe,F===Ai?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=D}return v}function M(A,T,D,F,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Ai)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const k=e.update(A),V=A.material;if(Array.isArray(V)){const Z=k.groups;for(let B=0,$=Z.length;B<$;B++){const W=Z[B],re=V[W.materialIndex];if(re&&re.visible){const C=x(A,re,F,v);A.onBeforeShadow(r,A,T,D,k,C,W),r.renderBufferDirect(D,null,k,C,A,W),A.onAfterShadow(r,A,T,D,k,C,W)}}}else if(V.visible){const Z=x(A,V,F,v);A.onBeforeShadow(r,A,T,D,k,Z,null),r.renderBufferDirect(D,null,k,Z,A,null),A.onAfterShadow(r,A,T,D,k,Z,null)}}const N=A.children;for(let k=0,V=N.length;k<V;k++)M(N[k],T,D,F,v)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const F=c[D],v=A.target.uuid;v in F&&(F[v].dispose(),delete F[v])}}}const Lx={[rc]:sc,[oc]:cc,[ac]:uc,[Rs]:lc,[sc]:rc,[cc]:oc,[uc]:ac,[lc]:Rs};function Ux(r){function e(){let L=!1;const ee=new Ft;let q=null;const J=new Ft(0,0,0,0);return{setMask:function(le){q!==le&&!L&&(r.colorMask(le,le,le,le),q=le)},setLocked:function(le){L=le},setClear:function(le,ce,qe,gt,At){At===!0&&(le*=gt,ce*=gt,qe*=gt),ee.set(le,ce,qe,gt),J.equals(ee)===!1&&(r.clearColor(le,ce,qe,gt),J.copy(ee))},reset:function(){L=!1,q=null,J.set(-1,0,0,0)}}}function t(){let L=!1,ee=!1,q=null,J=null,le=null;return{setReversed:function(ce){ee=ce},setTest:function(ce){ce?fe(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(ce){q!==ce&&!L&&(r.depthMask(ce),q=ce)},setFunc:function(ce){if(ee&&(ce=Lx[ce]),J!==ce){switch(ce){case rc:r.depthFunc(r.NEVER);break;case sc:r.depthFunc(r.ALWAYS);break;case oc:r.depthFunc(r.LESS);break;case Rs:r.depthFunc(r.LEQUAL);break;case ac:r.depthFunc(r.EQUAL);break;case lc:r.depthFunc(r.GEQUAL);break;case cc:r.depthFunc(r.GREATER);break;case uc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ce}},setLocked:function(ce){L=ce},setClear:function(ce){le!==ce&&(r.clearDepth(ce),le=ce)},reset:function(){L=!1,q=null,J=null,le=null}}}function n(){let L=!1,ee=null,q=null,J=null,le=null,ce=null,qe=null,gt=null,At=null;return{setTest:function(it){L||(it?fe(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(it){ee!==it&&!L&&(r.stencilMask(it),ee=it)},setFunc:function(it,we,Ee){(q!==it||J!==we||le!==Ee)&&(r.stencilFunc(it,we,Ee),q=it,J=we,le=Ee)},setOp:function(it,we,Ee){(ce!==it||qe!==we||gt!==Ee)&&(r.stencilOp(it,we,Ee),ce=it,qe=we,gt=Ee)},setLocked:function(it){L=it},setClear:function(it){At!==it&&(r.clearStencil(it),At=it)},reset:function(){L=!1,ee=null,q=null,J=null,le=null,ce=null,qe=null,gt=null,At=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,R=null,A=new _t(0,0,0),T=0,D=!1,F=null,v=null,b=null,N=null,k=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,B=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=B>=2);let W=null,re={};const C=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Be=new Ft().fromArray(C),Xe=new Ft().fromArray(ae);function Y(L,ee,q,J){const le=new Uint8Array(4),ce=r.createTexture();r.bindTexture(L,ce),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<q;qe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ee+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ce}const Q={};Q[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(r.DEPTH_TEST),s.setFunc(Rs),Oe(!1),ze(Qu),fe(r.CULL_FACE),P(ir);function fe(L){c[L]!==!0&&(r.enable(L),c[L]=!0)}function oe(L){c[L]!==!1&&(r.disable(L),c[L]=!1)}function be(L,ee){return u[L]!==ee?(r.bindFramebuffer(L,ee),u[L]=ee,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ee),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function ye(L,ee){let q=h,J=!1;if(L){q=f.get(ee),q===void 0&&(q=[],f.set(ee,q));const le=L.textures;if(q.length!==le.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,qe=le.length;ce<qe;ce++)q[ce]=r.COLOR_ATTACHMENT0+ce;q.length=le.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function We(L){return d!==L?(r.useProgram(L),d=L,!0):!1}const Ve={[Cr]:r.FUNC_ADD,[Yp]:r.FUNC_SUBTRACT,[qp]:r.FUNC_REVERSE_SUBTRACT};Ve[$p]=r.MIN,Ve[Kp]=r.MAX;const Ne={[Zp]:r.ZERO,[jp]:r.ONE,[Jp]:r.SRC_COLOR,[nc]:r.SRC_ALPHA,[rm]:r.SRC_ALPHA_SATURATE,[nm]:r.DST_COLOR,[em]:r.DST_ALPHA,[Qp]:r.ONE_MINUS_SRC_COLOR,[ic]:r.ONE_MINUS_SRC_ALPHA,[im]:r.ONE_MINUS_DST_COLOR,[tm]:r.ONE_MINUS_DST_ALPHA,[sm]:r.CONSTANT_COLOR,[om]:r.ONE_MINUS_CONSTANT_COLOR,[am]:r.CONSTANT_ALPHA,[lm]:r.ONE_MINUS_CONSTANT_ALPHA};function P(L,ee,q,J,le,ce,qe,gt,At,it){if(L===ir){_===!0&&(oe(r.BLEND),_=!1);return}if(_===!1&&(fe(r.BLEND),_=!0),L!==Xp){if(L!==g||it!==D){if((p!==Cr||x!==Cr)&&(r.blendEquation(r.FUNC_ADD),p=Cr,x=Cr),it)switch(L){case vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eh:r.blendFunc(r.ONE,r.ONE);break;case th:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case th:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,y=null,M=null,R=null,A.set(0,0,0),T=0,g=L,D=it}return}le=le||ee,ce=ce||q,qe=qe||J,(ee!==p||le!==x)&&(r.blendEquationSeparate(Ve[ee],Ve[le]),p=ee,x=le),(q!==m||J!==y||ce!==M||qe!==R)&&(r.blendFuncSeparate(Ne[q],Ne[J],Ne[ce],Ne[qe]),m=q,y=J,M=ce,R=qe),(gt.equals(A)===!1||At!==T)&&(r.blendColor(gt.r,gt.g,gt.b,At),A.copy(gt),T=At),g=L,D=!1}function st(L,ee){L.side===di?oe(r.CULL_FACE):fe(r.CULL_FACE);let q=L.side===En;ee&&(q=!q),Oe(q),L.blending===vs&&L.transparent===!1?P(ir):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){F!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),F=L)}function ze(L){L!==Vp?(fe(r.CULL_FACE),L!==v&&(L===Qu?r.cullFace(r.BACK):L===Gp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),v=L}function O(L){L!==b&&(Z&&r.lineWidth(L),b=L)}function je(L,ee,q){L?(fe(r.POLYGON_OFFSET_FILL),(N!==ee||k!==q)&&(r.polygonOffset(ee,q),N=ee,k=q)):oe(r.POLYGON_OFFSET_FILL)}function De(L){L?fe(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function w(L){L===void 0&&(L=r.TEXTURE0+V-1),W!==L&&(r.activeTexture(L),W=L)}function S(L,ee,q){q===void 0&&(W===null?q=r.TEXTURE0+V-1:q=W);let J=re[q];J===void 0&&(J={type:void 0,texture:void 0},re[q]=J),(J.type!==L||J.texture!==ee)&&(W!==q&&(r.activeTexture(q),W=q),r.bindTexture(L,ee||Q[L]),J.type=L,J.texture=ee)}function G(){const L=re[W];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){Be.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function ge(L){Xe.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Xe.copy(L))}function Ye(L,ee){let q=l.get(ee);q===void 0&&(q=new WeakMap,l.set(ee,q));let J=q.get(L);J===void 0&&(J=r.getUniformBlockIndex(ee,L.name),q.set(L,J))}function Fe(L,ee){const J=l.get(ee).get(L);a.get(ee)!==J&&(r.uniformBlockBinding(ee,J,L.__bindingPointIndex),a.set(ee,J))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,re={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,R=null,A=new _t(0,0,0),T=0,D=!1,F=null,v=null,b=null,N=null,k=null,Be.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:fe,disable:oe,bindFramebuffer:be,drawBuffers:ye,useProgram:We,setBlending:P,setMaterial:st,setFlipSided:Oe,setCullFace:ze,setLineWidth:O,setPolygonOffset:je,setScissorTest:De,activeTexture:w,bindTexture:S,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:ve,texImage3D:xe,updateUBOMapping:Ye,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:ne,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Ue,viewport:ge,reset:ot}}function Yh(r,e,t,n){const i=Ix(n);switch(t){case Vf:return r*e;case Wf:return r*e;case Xf:return r*e*2;case Yf:return r*e/i.components*i.byteLength;case vu:return r*e/i.components*i.byteLength;case qf:return r*e*2/i.components*i.byteLength;case xu:return r*e*2/i.components*i.byteLength;case Gf:return r*e*3/i.components*i.byteLength;case Jn:return r*e*4/i.components*i.byteLength;case Su:return r*e*4/i.components*i.byteLength;case xa:case Sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ma:case ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _c:case vc:return Math.max(r,16)*Math.max(e,8)/4;case mc:case gc:return Math.max(r,8)*Math.max(e,8)/2;case xc:case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Oc:case Fc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $f:case Bc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zc:case kc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(r){switch(r){case Ni:case zf:return{byteLength:1,components:1};case So:case kf:case Uo:return{byteLength:2,components:1};case _u:case gu:return{byteLength:2,components:4};case Hr:case mu:case Pi:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Nx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return d?new OffscreenCanvas(w,S):Mo("canvas")}function g(w,S,G){let j=1;const te=De(w);if((te.width>G||te.height>G)&&(j=G/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(j*te.width),Se=Math.floor(j*te.height);f===void 0&&(f=_(K,Se));const ie=S?_(K,Se):f;return ie.width=K,ie.height=Se,ie.getContext("2d").drawImage(w,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Se+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==yn&&w.minFilter!==jn}function m(w){r.generateMipmap(w)}function y(w,S,G,j,te=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=S;if(S===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),S===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){const Se=te?Na:ft.getTransfer(j);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=Se===Tt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(w,S){let G;return w?S===null||S===Hr||S===Ds?G=r.DEPTH24_STENCIL8:S===Pi?G=r.DEPTH32F_STENCIL8:S===So&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hr||S===Ds?G=r.DEPTH_COMPONENT24:S===Pi?G=r.DEPTH_COMPONENT32F:S===So&&(G=r.DEPTH_COMPONENT16),G}function M(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==yn&&w.minFilter!==jn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&u.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),F(S)}function T(w){const S=n.get(w);if(S.__webglInit===void 0)return;const G=w.source,j=h.get(G);if(j){const te=j[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(w),Object.keys(j).length===0&&h.delete(G)}n.remove(w)}function D(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const G=w.source,j=h.get(G);delete j[S.__cacheKey],o.memory.textures--}function F(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let te=0;te<S.__webglFramebuffer[j].length;te++)r.deleteFramebuffer(S.__webglFramebuffer[j][te]);else r.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)r.deleteFramebuffer(S.__webglFramebuffer[j]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let j=0,te=G.length;j<te;j++){const K=n.get(G[j]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(w)}let v=0;function b(){v=0}function N(){const w=v;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),v+=1,w}function k(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function V(w,S){const G=n.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(G,w,S);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function Z(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Xe(G,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function B(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Xe(G,w,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function $(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Y(G,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const W={[dc]:r.REPEAT,[Dr]:r.CLAMP_TO_EDGE,[pc]:r.MIRRORED_REPEAT},re={[yn]:r.NEAREST,[vm]:r.NEAREST_MIPMAP_NEAREST,[zo]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[cl]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},C={[Em]:r.NEVER,[Cm]:r.ALWAYS,[Tm]:r.LESS,[Kf]:r.LEQUAL,[bm]:r.EQUAL,[Rm]:r.GEQUAL,[Am]:r.GREATER,[wm]:r.NOTEQUAL};function ae(w,S){if(S.type===Pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===jn||S.magFilter===cl||S.magFilter===zo||S.magFilter===Zi||S.minFilter===jn||S.minFilter===cl||S.minFilter===zo||S.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,W[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,W[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,W[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,re[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,C[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==zo&&S.minFilter!==Zi||S.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Be(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const j=S.source;let te=h.get(j);te===void 0&&(te={},h.set(j,te));const K=k(S);if(K!==w.__cacheKey){te[K]===void 0&&(te[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[K].usedTimes++;const Se=te[w.__cacheKey];Se!==void 0&&(te[w.__cacheKey].usedTimes--,Se.usedTimes===0&&D(S)),w.__cacheKey=K,w.__webglTexture=te[K].texture}return G}function Xe(w,S,G){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const te=Be(w,S),K=S.source;t.bindTexture(j,w.__webglTexture,r.TEXTURE0+G);const Se=n.get(K);if(K.version!==Se.__version||te===!0){t.activeTexture(r.TEXTURE0+G);const ie=ft.getPrimaries(ft.workingColorSpace),de=S.colorSpace===Ki?null:ft.getPrimaries(S.colorSpace),He=S.colorSpace===Ki||ie===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ne=g(S.image,!1,i.maxTextureSize);ne=je(S,ne);const ve=s.convert(S.format,S.colorSpace),xe=s.convert(S.type);let Ue=y(S.internalFormat,ve,xe,S.colorSpace,S.isVideoTexture);ae(j,S);let ge;const Ye=S.mipmaps,Fe=S.isVideoTexture!==!0,ot=Se.__version===void 0||te===!0,L=K.dataReady,ee=M(S,ne);if(S.isDepthTexture)Ue=x(S.format===Ls,S.type),ot&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,Ue,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ve,xe,null));else if(S.isDataTexture)if(Ye.length>0){Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,ee,Ue,Ye[0].width,Ye[0].height);for(let q=0,J=Ye.length;q<J;q++)ge=Ye[q],Fe?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,q,Ue,ge.width,ge.height,0,ve,xe,ge.data);S.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(r.TEXTURE_2D,ee,Ue,ne.width,ne.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,xe,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ve,xe,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Ue,Ye[0].width,Ye[0].height,ne.depth);for(let q=0,J=Ye.length;q<J;q++)if(ge=Ye[q],S.format!==Jn)if(ve!==null)if(Fe){if(L)if(S.layerUpdates.size>0){const le=Yh(ge.width,ge.height,S.format,S.type);for(const ce of S.layerUpdates){const qe=ge.data.subarray(ce*le/ge.data.BYTES_PER_ELEMENT,(ce+1)*le/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ce,ge.width,ge.height,1,ve,qe,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,ne.depth,ve,ge.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Ue,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,ne.depth,ve,xe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Ue,ge.width,ge.height,ne.depth,0,ve,xe,ge.data)}else{Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,ee,Ue,Ye[0].width,Ye[0].height);for(let q=0,J=Ye.length;q<J;q++)ge=Ye[q],S.format!==Jn?ve!==null?Fe?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,q,Ue,ge.width,ge.height,0,ve,xe,ge.data)}else if(S.isDataArrayTexture)if(Fe){if(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Ue,ne.width,ne.height,ne.depth),L)if(S.layerUpdates.size>0){const q=Yh(ne.width,ne.height,S.format,S.type);for(const J of S.layerUpdates){const le=ne.data.subarray(J*q/ne.data.BYTES_PER_ELEMENT,(J+1)*q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,xe,le)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(S.isData3DTexture)Fe?(ot&&t.texStorage3D(r.TEXTURE_3D,ee,Ue,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(S.isFramebufferTexture){if(ot)if(Fe)t.texStorage2D(r.TEXTURE_2D,ee,Ue,ne.width,ne.height);else{let q=ne.width,J=ne.height;for(let le=0;le<ee;le++)t.texImage2D(r.TEXTURE_2D,le,Ue,q,J,0,ve,xe,null),q>>=1,J>>=1}}else if(Ye.length>0){if(Fe&&ot){const q=De(Ye[0]);t.texStorage2D(r.TEXTURE_2D,ee,Ue,q.width,q.height)}for(let q=0,J=Ye.length;q<J;q++)ge=Ye[q],Fe?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ve,xe,ge):t.texImage2D(r.TEXTURE_2D,q,Ue,ve,xe,ge);S.generateMipmaps=!1}else if(Fe){if(ot){const q=De(ne);t.texStorage2D(r.TEXTURE_2D,ee,Ue,q.width,q.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,xe,ne)}else t.texImage2D(r.TEXTURE_2D,0,Ue,ve,xe,ne);p(S)&&m(j),Se.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Y(w,S,G){if(S.image.length!==6)return;const j=Be(w,S),te=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const K=n.get(te);if(te.version!==K.__version||j===!0){t.activeTexture(r.TEXTURE0+G);const Se=ft.getPrimaries(ft.workingColorSpace),ie=S.colorSpace===Ki?null:ft.getPrimaries(S.colorSpace),de=S.colorSpace===Ki||Se===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!He&&!ne?ve[J]=g(S.image[J],!0,i.maxCubemapSize):ve[J]=ne?S.image[J].image:S.image[J],ve[J]=je(S,ve[J]);const xe=ve[0],Ue=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Ye=y(S.internalFormat,Ue,ge,S.colorSpace),Fe=S.isVideoTexture!==!0,ot=K.__version===void 0||j===!0,L=te.dataReady;let ee=M(S,xe);ae(r.TEXTURE_CUBE_MAP,S);let q;if(He){Fe&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ye,xe.width,xe.height);for(let J=0;J<6;J++){q=ve[J].mipmaps;for(let le=0;le<q.length;le++){const ce=q[le];S.format!==Jn?Ue!==null?Fe?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,Ue,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,Ue,ge,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ye,ce.width,ce.height,0,Ue,ge,ce.data)}}}else{if(q=S.mipmaps,Fe&&ot){q.length>0&&ee++;const J=De(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Fe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ue,ge,ve[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,ve[J].width,ve[J].height,0,Ue,ge,ve[J].data);for(let le=0;le<q.length;le++){const qe=q[le].image[J].image;Fe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,qe.width,qe.height,Ue,ge,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ye,qe.width,qe.height,0,Ue,ge,qe.data)}}else{Fe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,ge,ve[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Ue,ge,ve[J]);for(let le=0;le<q.length;le++){const ce=q[le];Fe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ue,ge,ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ye,Ue,ge,ce.image[J])}}}p(S)&&m(r.TEXTURE_CUBE_MAP),K.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,G,j,te,K){const Se=s.convert(G.format,G.colorSpace),ie=s.convert(G.type),de=y(G.internalFormat,Se,ie,G.colorSpace);if(!n.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>K),ve=Math.max(1,S.height>>K);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,K,de,ne,ve,S.depth,0,Se,ie,null):t.texImage2D(te,K,de,ne,ve,0,Se,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ze(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,te,n.get(G).__webglTexture,0,Oe(S)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,te,n.get(G).__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(w,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const j=S.depthTexture,te=j&&j.isDepthTexture?j.type:null,K=x(S.stencilBuffer,te),Se=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=Oe(S);ze(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,K,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,w)}else{const j=S.textures;for(let te=0;te<j.length;te++){const K=j[te],Se=s.convert(K.format,K.colorSpace),ie=s.convert(K.type),de=y(K.internalFormat,Se,ie,K.colorSpace),He=Oe(S);G&&ze(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,de,S.width,S.height):ze(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,de,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,de,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const j=n.get(S.depthTexture).__webglTexture,te=Oe(S);if(S.depthTexture.format===xs)ze(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===Ls)ze(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function be(w){const S=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=j}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,w)}else if(G){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=r.createRenderbuffer(),fe(S.__webglDepthbuffer[j],w,!1);else{const te=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),fe(S.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(w,S,G){const j=n.get(w);S!==void 0&&Q(j.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&be(w)}function We(w){const S=w.texture,G=n.get(w),j=n.get(S);w.addEventListener("dispose",A);const te=w.textures,K=w.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ie]=[];for(let de=0;de<S.mipmaps.length;de++)G.__webglFramebuffer[ie][de]=r.createFramebuffer()}else G.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)G.__webglFramebuffer[ie]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Se)for(let ie=0,de=te.length;ie<de;ie++){const He=n.get(te[ie]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&ze(w)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){const de=te[ie];G.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ie]);const He=s.convert(de.format,de.colorSpace),ne=s.convert(de.type),ve=y(de.internalFormat,He,ne,de.colorSpace,w.isXRRenderTarget===!0),xe=Oe(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ve,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,G.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ae(r.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Q(G.__webglFramebuffer[ie][de],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else Q(G.__webglFramebuffer[ie],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,de=te.length;ie<de;ie++){const He=te[ie],ne=n.get(He);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ae(r.TEXTURE_2D,He),Q(G.__webglFramebuffer,w,He,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),p(He)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,j.__webglTexture),ae(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Q(G.__webglFramebuffer[de],w,S,r.COLOR_ATTACHMENT0,ie,de);else Q(G.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,ie,0);p(S)&&m(ie),t.unbindTexture()}w.depthBuffer&&be(w)}function Ve(w){const S=w.textures;for(let G=0,j=S.length;G<j;G++){const te=S[G];if(p(te)){const K=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Se=n.get(te).__webglTexture;t.bindTexture(K,Se),m(K),t.unbindTexture()}}}const Ne=[],P=[];function st(w){if(w.samples>0){if(ze(w)===!1){const S=w.textures,G=w.width,j=w.height;let te=r.COLOR_BUFFER_BIT;const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(w),ie=S.length>1;if(ie)for(let de=0;de<S.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<S.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const He=n.get(S[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,te,r.NEAREST),l===!0&&(Ne.length=0,P.length=0,Ne.push(r.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ne.push(K),P.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<S.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const He=n.get(S[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Oe(w){return Math.min(i.maxSamples,w.samples)}function ze(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function je(w,S){const G=w.colorSpace,j=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==dr&&G!==Ki&&(ft.getTransfer(G)===Tt?(j!==Jn||te!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=ye,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ze}function Ox(r,e){function t(n,i=Ki){let s;const o=ft.getTransfer(i);if(n===Ni)return r.UNSIGNED_BYTE;if(n===_u)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zf)return r.BYTE;if(n===kf)return r.SHORT;if(n===So)return r.UNSIGNED_SHORT;if(n===mu)return r.INT;if(n===Hr)return r.UNSIGNED_INT;if(n===Pi)return r.FLOAT;if(n===Uo)return r.HALF_FLOAT;if(n===Vf)return r.ALPHA;if(n===Gf)return r.RGB;if(n===Jn)return r.RGBA;if(n===Wf)return r.LUMINANCE;if(n===Xf)return r.LUMINANCE_ALPHA;if(n===xs)return r.DEPTH_COMPONENT;if(n===Ls)return r.DEPTH_STENCIL;if(n===Yf)return r.RED;if(n===vu)return r.RED_INTEGER;if(n===qf)return r.RG;if(n===xu)return r.RG_INTEGER;if(n===Su)return r.RGBA_INTEGER;if(n===xa||n===Sa||n===Ma||n===ya)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===_c||n===gc||n===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===Sc||n===Mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xc||n===Sc)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yc||n===Ec||n===Tc||n===bc||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Dc||n===Lc||n===Uc||n===Ic||n===Nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Oc||n===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ea)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$f||n===Bc||n===zc||n===kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Fx extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bx={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Js;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new ln,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fi({vertexShader:zx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new el(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends ks{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new Hx,p=t.getContextAttributes();let m=null,y=null;const x=[],M=[],R=new Mt;let A=null;const T=new $n;T.layers.enable(1),T.viewport=new Ft;const D=new $n;D.layers.enable(2),D.viewport=new Ft;const F=[T,D],v=new Fx;v.layers.enable(1),v.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=x[Y];return Q===void 0&&(Q=new zl,x[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=x[Y];return Q===void 0&&(Q=new zl,x[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=x[Y];return Q===void 0&&(Q=new zl,x[Y]=Q),Q.getHandSpace()};function k(Y){const Q=M.indexOf(Y.inputSource);if(Q===-1)return;const fe=x[Q];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<x.length;Y++){const Q=M[Y];Q!==null&&(M[Y]=null,x[Y].disconnect(Q))}b=null,N=null,g.reset(),e.setRenderTarget(m),d=null,h=null,f=null,i=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Vr(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,fe=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Ls:xs,fe=p.stencil?Ds:Hr);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(be),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Vr(h.textureWidth,h.textureHeight,{format:Jn,type:Ni,depthTexture:new cd(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Y){for(let Q=0;Q<Y.removed.length;Q++){const fe=Y.removed[Q],oe=M.indexOf(fe);oe>=0&&(M[oe]=null,x[oe].disconnect(fe))}for(let Q=0;Q<Y.added.length;Q++){const fe=Y.added[Q];let oe=M.indexOf(fe);if(oe===-1){for(let ye=0;ye<x.length;ye++)if(ye>=M.length){M.push(fe),oe=ye;break}else if(M[ye]===null){M[ye]=fe,oe=ye;break}if(oe===-1)break}const be=x[oe];be&&be.connect(fe)}}const B=new X,$=new X;function W(Y,Q,fe){B.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const oe=B.distanceTo($),be=Q.projectionMatrix.elements,ye=fe.projectionMatrix.elements,We=be[14]/(be[10]-1),Ve=be[14]/(be[10]+1),Ne=(be[9]+1)/be[5],P=(be[9]-1)/be[5],st=(be[8]-1)/be[0],Oe=(ye[8]+1)/ye[0],ze=We*st,O=We*Oe,je=oe/(-st+Oe),De=je*-st;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(je),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=We+je,S=Ve+je,G=ze-De,j=O+(oe-De),te=Ne*Ve/S*w,K=P*Ve/S*w;Y.projectionMatrix.makePerspective(G,j,te,K,w,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,fe=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),v.near=D.near=T.near=Q,v.far=D.far=T.far=fe,(b!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,N=v.far);const oe=Y.parent,be=v.cameras;re(v,oe);for(let ye=0;ye<be.length;ye++)re(be[ye],oe);be.length===2?W(v,T,D):v.projectionMatrix.copy(T.projectionMatrix),C(Y,v,oe)};function C(Y,Q,fe){fe===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ae=null;function Be(Y,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let oe=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let ye=0;ye<fe.length;ye++){const We=fe[ye];let Ve=null;if(d!==null)Ve=d.getViewport(We);else{const P=f.getViewSubImage(h,We);Ve=P.viewport,ye===0&&(e.setRenderTargetTextures(y,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(y))}let Ne=F[ye];Ne===void 0&&(Ne=new $n,Ne.layers.enable(ye),Ne.viewport=new Ft,F[ye]=Ne),Ne.matrix.fromArray(We.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(We.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ye===0&&(v.matrix.copy(Ne.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Ne)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const ye=f.getDepthInformation(fe[0]);ye&&ye.isValid&&ye.texture&&g.init(e,ye,i.renderState)}}for(let fe=0;fe<x.length;fe++){const oe=M[fe],be=x[fe];oe!==null&&be!==void 0&&be.update(oe,Q,c||o)}ae&&ae(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xe=new ld;Xe.setAnimationLoop(Be),this.setAnimationLoop=function(Y){ae=Y},this.dispose=function(){}}}const Mr=new Oi,Gx=new Vt;function Wx(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,rd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===En&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===En&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,M=y.envMapRotation;x&&(p.envMap.value=x,Mr.copy(M),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),p.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Mr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(_(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(y,R);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const x=f();y.__bindingPointIndex=x;const M=r.createBuffer(),R=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=i[y.id],M=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,T=M.length;A<T;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let F=0,v=D.length;F<v;F++){const b=D[F];if(d(b,A,F,R)===!0){const N=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let V=0;for(let Z=0;Z<k.length;Z++){const B=k[Z],$=g(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,N+V,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,M,R){const A=y.value,T=x+"_"+M;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const D=R[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function _(y){const x=y.uniforms;let M=0;const R=16;for(let T=0,D=x.length;T<D;T++){const F=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,b=F.length;v<b;v++){const N=F[v],k=Array.isArray(N.value)?N.value:[N.value];for(let V=0,Z=k.length;V<Z;V++){const B=k[V],$=g(B),W=M%R,re=W%$.boundary,C=W+re;M+=re,C!==0&&R-C<$.storage&&(M+=R-C),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=$.storage}}}const A=M%R;return A>0&&(M+=R-A),y.__size=M,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Yx{constructor(e={}){const{canvas:t=Dm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=rr,this.toneMappingExposure=1;const x=this;let M=!1,R=0,A=0,T=null,D=-1,F=null;const v=new Ft,b=new Ft;let N=null;const k=new _t(0);let V=0,Z=t.width,B=t.height,$=1,W=null,re=null;const C=new Ft(0,0,Z,B),ae=new Ft(0,0,Z,B);let Be=!1;const Xe=new ad;let Y=!1,Q=!1;const fe=new Vt,oe=new Vt,be=new X,ye=new Ft,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ne(){return T===null?$:1}let P=n;function st(E,I){return t.getContext(E,I)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pu}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),P===null){const I="webgl2";if(P=st(I,E),P===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,ze,O,je,De,w,S,G,j,te,K,Se,ie,de,He,ne,ve,xe,Ue,ge,Ye,Fe,ot,L;function ee(){Oe=new j0(P),Oe.init(),Fe=new Ox(P,Oe),ze=new W0(P,Oe,e,Fe),O=new Ux(P),ze.reverseDepthBuffer&&O.buffers.depth.setReversed(!0),je=new ev(P),De=new vx,w=new Nx(P,Oe,O,De,ze,Fe,je),S=new Y0(x),G=new Z0(x),j=new o_(P),ot=new V0(P,j),te=new J0(P,j,je,ot),K=new nv(P,te,j,je),Ue=new tv(P,ze,w),ne=new X0(De),Se=new gx(x,S,G,Oe,ze,ot,ne),ie=new Wx(x,De),de=new Sx,He=new Ax(Oe),xe=new H0(x,S,G,O,K,h,l),ve=new Dx(x,K,ze),L=new Xx(P,je,ze,O),ge=new G0(P,Oe,je),Ye=new Q0(P,Oe,je),je.programs=Se.programs,x.capabilities=ze,x.extensions=Oe,x.properties=De,x.renderLists=de,x.shadowMap=ve,x.state=O,x.info=je}ee();const q=new Vx(x,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Z,B,!1))},this.getSize=function(E){return E.set(Z,B)},this.setSize=function(E,I,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,B=I,t.width=Math.floor(E*$),t.height=Math.floor(I*$),z===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(Z*$,B*$).floor()},this.setDrawingBufferSize=function(E,I,z){Z=E,B=I,$=z,t.width=Math.floor(E*z),t.height=Math.floor(I*z),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,I,z,H){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,I,z,H),O.viewport(v.copy(C).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,I,z,H){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,I,z,H),O.scissor(b.copy(ae).multiplyScalar($).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){O.setScissorTest(Be=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(E=!0,I=!0,z=!0){let H=0;if(E){let U=!1;if(T!==null){const se=T.texture.format;U=se===Su||se===xu||se===vu}if(U){const se=T.texture.type,_e=se===Ni||se===Hr||se===So||se===Ds||se===_u||se===gu,he=xe.getClearColor(),ue=xe.getClearAlpha(),Ae=he.r,Ie=he.g,Te=he.b;_e?(d[0]=Ae,d[1]=Ie,d[2]=Te,d[3]=ue,P.clearBufferuiv(P.COLOR,0,d)):(_[0]=Ae,_[1]=Ie,_[2]=Te,_[3]=ue,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}I&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),de.dispose(),He.dispose(),De.dispose(),S.dispose(),G.dispose(),K.dispose(),ot.dispose(),L.dispose(),Se.dispose(),q.dispose(),q.removeEventListener("sessionstart",ct),q.removeEventListener("sessionend",pe),Le.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=je.autoReset,I=ve.enabled,z=ve.autoUpdate,H=ve.needsUpdate,U=ve.type;ee(),je.autoReset=E,ve.enabled=I,ve.autoUpdate=z,ve.needsUpdate=H,ve.type=U}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qe(E){const I=E.target;I.removeEventListener("dispose",qe),gt(I)}function gt(E){At(E),De.remove(E)}function At(E){const I=De.get(E).programs;I!==void 0&&(I.forEach(function(z){Se.releaseProgram(z)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,z,H,U,se){I===null&&(I=We);const _e=U.isMesh&&U.matrixWorld.determinant()<0,he=dt(E,I,z,H,U);O.setMaterial(H,_e);let ue=z.index,Ae=1;if(H.wireframe===!0){if(ue=te.getWireframeAttribute(z),ue===void 0)return;Ae=2}const Ie=z.drawRange,Te=z.attributes.position;let at=Ie.start*Ae,rt=(Ie.start+Ie.count)*Ae;se!==null&&(at=Math.max(at,se.start*Ae),rt=Math.min(rt,(se.start+se.count)*Ae)),ue!==null?(at=Math.max(at,0),rt=Math.min(rt,ue.count)):Te!=null&&(at=Math.max(at,0),rt=Math.min(rt,Te.count));const mt=rt-at;if(mt<0||mt===1/0)return;ot.setup(U,H,he,z,ue);let qt,Je=ge;if(ue!==null&&(qt=j.get(ue),Je=Ye,Je.setIndex(qt)),U.isMesh)H.wireframe===!0?(O.setLineWidth(H.wireframeLinewidth*Ne()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(U.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),O.setLineWidth(Pe*Ne()),U.isLineSegments?Je.setMode(P.LINES):U.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else U.isPoints?Je.setMode(P.POINTS):U.isSprite&&Je.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pe=U._multiDrawStarts,Jt=U._multiDrawCounts,ut=U._multiDrawCount,ni=ue?j.get(ue).bytesPerElement:1,qr=De.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<ut;Pn++)qr.setValue(P,"_gl_DrawID",Pn),Je.render(Pe[Pn]/ni,Jt[Pn])}else if(U.isInstancedMesh)Je.renderInstances(at,mt,U.count);else if(z.isInstancedBufferGeometry){const Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Jt=Math.min(z.instanceCount,Pe);Je.renderInstances(at,mt,Jt)}else Je.render(at,mt)};function it(E,I,z){E.transparent===!0&&E.side===di&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,It(E,I,z),E.side=lr,E.needsUpdate=!0,It(E,I,z),E.side=di):It(E,I,z)}this.compile=function(E,I,z=null){z===null&&(z=E),p=He.get(z),p.init(I),y.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==z&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){const he=se[_e];it(he,z,U),H.add(he)}else it(se,z,U),H.add(se)}),y.pop(),p=null,H},this.compileAsync=function(E,I,z=null){const H=this.compile(E,I,z);return new Promise(U=>{function se(){if(H.forEach(function(_e){De.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){U(E);return}setTimeout(se,10)}Oe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let we=null;function Ee(E){we&&we(E)}function ct(){Le.stop()}function pe(){Le.start()}const Le=new ld;Le.setAnimationLoop(Ee),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(E){we=E,q.setAnimationLoop(E),E===null?Le.stop():Le.start()},q.addEventListener("sessionstart",ct),q.addEventListener("sessionend",pe),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(I),I=q.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,I,T),p=He.get(E,y.length),p.init(I),y.push(p),oe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Xe.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,Y=ne.init(this.clippingPlanes,Q),g=de.get(E,m.length),g.init(),m.push(g),q.enabled===!0&&q.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&Ce(se,I,-1/0,x.sortObjects)}Ce(E,I,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,re),Ve=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ve&&xe.addToRenderList(g,E),this.info.render.frame++,Y===!0&&ne.beginShadows();const z=p.state.shadowsArray;ve.render(z,E,I),Y===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,U=g.transmissive;if(p.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let _e=0,he=se.length;_e<he;_e++){const ue=se[_e];Ut(H,U,E,ue)}Ve&&xe.render(E);for(let _e=0,he=se.length;_e<he;_e++){const ue=se[_e];ke(g,E,ue,ue.viewport)}}else U.length>0&&Ut(H,U,E,I),Ve&&xe.render(E),ke(g,E,I);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,I),ot.resetDefaultState(),D=-1,F=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ce(E,I,z,H){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Xe.intersectsSprite(E)){H&&ye.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const _e=K.update(E),he=E.material;he.visible&&g.push(E,_e,he,z,ye.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Xe.intersectsObject(E))){const _e=K.update(E),he=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ye.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ye.copy(_e.boundingSphere.center)),ye.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(he)){const ue=_e.groups;for(let Ae=0,Ie=ue.length;Ae<Ie;Ae++){const Te=ue[Ae],at=he[Te.materialIndex];at&&at.visible&&g.push(E,_e,at,z,ye.z,Te)}}else he.visible&&g.push(E,_e,he,z,ye.z,null)}}const se=E.children;for(let _e=0,he=se.length;_e<he;_e++)Ce(se[_e],I,z,H)}function ke(E,I,z,H){const U=E.opaque,se=E.transmissive,_e=E.transparent;p.setupLightsView(z),Y===!0&&ne.setGlobalState(x.clippingPlanes,z),H&&O.viewport(v.copy(H)),U.length>0&&$e(U,I,z),se.length>0&&$e(se,I,z),_e.length>0&&$e(_e,I,z),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ut(E,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Vr(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Uo:Ni,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const se=p.state.transmissionRenderTarget[H.id],_e=H.viewport||v;se.setSize(_e.z,_e.w);const he=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(k),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&xe.render(z);const ue=x.toneMapping;x.toneMapping=rr;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Y===!0&&ne.setGlobalState(x.clippingPlanes,H),$e(E,z,H),w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Te=0,at=I.length;Te<at;Te++){const rt=I[Te],mt=rt.object,qt=rt.geometry,Je=rt.material,Pe=rt.group;if(Je.side===di&&mt.layers.test(H.layers)){const Jt=Je.side;Je.side=En,Je.needsUpdate=!0,wt(mt,z,H,qt,Je,Pe),Je.side=Jt,Je.needsUpdate=!0,Ie=!0}}Ie===!0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se))}x.setRenderTarget(he),x.setClearColor(k,V),Ae!==void 0&&(H.viewport=Ae),x.toneMapping=ue}function $e(E,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=E.length;U<se;U++){const _e=E[U],he=_e.object,ue=_e.geometry,Ae=H===null?_e.material:H,Ie=_e.group;he.layers.test(z.layers)&&wt(he,I,z,ue,Ae,Ie)}}function wt(E,I,z,H,U,se){E.onBeforeRender(x,I,z,H,U,se),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,I,z,H,E,se),U.transparent===!0&&U.side===di&&U.forceSinglePass===!1?(U.side=En,U.needsUpdate=!0,x.renderBufferDirect(z,I,H,U,E,se),U.side=lr,U.needsUpdate=!0,x.renderBufferDirect(z,I,H,U,E,se),U.side=di):x.renderBufferDirect(z,I,H,U,E,se),E.onAfterRender(x,I,z,H,U,se)}function It(E,I,z){I.isScene!==!0&&(I=We);const H=De.get(E),U=p.state.lights,se=p.state.shadowsArray,_e=U.state.version,he=Se.getParameters(E,U.state,se,I,z),ue=Se.getProgramCacheKey(he);let Ae=H.programs;H.environment=E.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",qe),Ae=new Map,H.programs=Ae);let Ie=Ae.get(ue);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===_e)return vt(E,he),Ie}else he.uniforms=Se.getUniforms(E),E.onBeforeCompile(he,x),Ie=Se.acquireProgram(he,ue),Ae.set(ue,Ie),H.uniforms=he.uniforms;const Te=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ne.uniform),vt(E,he),H.needsLights=Et(E),H.lightsStateVersion=_e,H.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function yt(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=ba.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function vt(E,I){const z=De.get(E);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function dt(E,I,z,H,U){I.isScene!==!0&&(I=We),w.resetTextureUnits();const se=I.fog,_e=H.isMeshStandardMaterial?I.environment:null,he=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:dr,ue=(H.isMeshStandardMaterial?G:S).get(H.envMap||_e),Ae=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let mt=rr;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=x.toneMapping);const qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=qt!==void 0?qt.length:0,Pe=De.get(H),Jt=p.state.lights;if(Y===!0&&(Q===!0||E!==F)){const Xn=E===F&&H.id===D;ne.setState(H,E,Xn)}let ut=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Jt.state.version||Pe.outputColorSpace!==he||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==ue||H.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ne.numPlanes||Pe.numIntersection!==ne.numIntersection)||Pe.vertexAlphas!==Ae||Pe.vertexTangents!==Ie||Pe.morphTargets!==Te||Pe.morphNormals!==at||Pe.morphColors!==rt||Pe.toneMapping!==mt||Pe.morphTargetsCount!==Je)&&(ut=!0):(ut=!0,Pe.__version=H.version);let ni=Pe.currentProgram;ut===!0&&(ni=It(H,I,U));let qr=!1,Pn=!1,ol=!1;const Nt=ni.getUniforms(),ki=Pe.uniforms;if(O.useProgram(ni.program)&&(qr=!0,Pn=!0,ol=!0),H.id!==D&&(D=H.id,Pn=!0),qr||F!==E){ze.reverseDepthBuffer?(fe.copy(E.projectionMatrix),Um(fe),Im(fe),Nt.setValue(P,"projectionMatrix",fe)):Nt.setValue(P,"projectionMatrix",E.projectionMatrix),Nt.setValue(P,"viewMatrix",E.matrixWorldInverse);const Xn=Nt.map.cameraPosition;Xn!==void 0&&Xn.setValue(P,be.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&Nt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Nt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,Pn=!0,ol=!0)}if(U.isSkinnedMesh){Nt.setOptional(P,U,"bindMatrix"),Nt.setOptional(P,U,"bindMatrixInverse");const Xn=U.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Nt.setValue(P,"boneTexture",Xn.boneTexture,w))}U.isBatchedMesh&&(Nt.setOptional(P,U,"batchingTexture"),Nt.setValue(P,"batchingTexture",U._matricesTexture,w),Nt.setOptional(P,U,"batchingIdTexture"),Nt.setValue(P,"batchingIdTexture",U._indirectTexture,w),Nt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&Nt.setValue(P,"batchingColorTexture",U._colorsTexture,w));const al=z.morphAttributes;if((al.position!==void 0||al.normal!==void 0||al.color!==void 0)&&Ue.update(U,z,ni),(Pn||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,Nt.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ki.envMap.value=ue,ki.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(ki.envMapIntensity.value=I.environmentIntensity),Pn&&(Nt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Cn(ki,ol),se&&H.fog===!0&&ie.refreshFogUniforms(ki,se),ie.refreshMaterialUniforms(ki,H,$,B,p.state.transmissionRenderTarget[E.id]),ba.upload(P,yt(Pe),ki,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ba.upload(P,yt(Pe),ki,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Nt.setValue(P,"center",U.center),Nt.setValue(P,"modelViewMatrix",U.modelViewMatrix),Nt.setValue(P,"normalMatrix",U.normalMatrix),Nt.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Xn=H.uniformsGroups;for(let ll=0,zp=Xn.length;ll<zp;ll++){const Ju=Xn[ll];L.update(Ju,ni),L.bind(Ju,ni)}}return ni}function Cn(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Et(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,I,z){De.get(E.texture).__webglTexture=I,De.get(E.depthTexture).__webglTexture=z;const H=De.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const z=De.get(E);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,z=0){T=E,R=I,A=z;let H=!0,U=null,se=!1,_e=!1;if(E){const ue=De.get(E);if(ue.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(ue.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(ue.__hasExternalTextures)w.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(ue.__boundDepthTexture!==Te){if(Te!==null&&De.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(_e=!0);const Ie=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?U=Ie[I][z]:U=Ie[I],se=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?U=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[z]:U=Ie,v.copy(E.viewport),b.copy(E.scissor),N=E.scissorTest}else v.copy(C).multiplyScalar($).floor(),b.copy(ae).multiplyScalar($).floor(),N=Be;if(O.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&O.drawBuffers(E,U),O.viewport(v),O.scissor(b),O.setScissorTest(N),se){const ue=De.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,z)}else if(_e){const ue=De.get(E.texture),Ae=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.__webglTexture,z||0,Ae)}D=-1},this.readRenderTargetPixels=function(E,I,z,H,U,se,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(he=he[_e]),he){O.bindFramebuffer(P.FRAMEBUFFER,he);try{const ue=E.texture,Ae=ue.format,Ie=ue.type;if(!ze.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-H&&z>=0&&z<=E.height-U&&P.readPixels(I,z,H,U,Fe.convert(Ae),Fe.convert(Ie),se)}finally{const ue=T!==null?De.get(T).__webglFramebuffer:null;O.bindFramebuffer(P.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(E,I,z,H,U,se,_e){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(he=he[_e]),he){const ue=E.texture,Ae=ue.format,Ie=ue.type;if(!ze.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-H&&z>=0&&z<=E.height-U){O.bindFramebuffer(P.FRAMEBUFFER,he);const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(I,z,H,U,Fe.convert(Ae),Fe.convert(Ie),0);const at=T!==null?De.get(T).__webglFramebuffer:null;O.bindFramebuffer(P.FRAMEBUFFER,at);const rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Lm(P,rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Te),P.deleteSync(rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,z=0){E.isTexture!==!0&&(Ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(E.image.width*H),se=Math.floor(E.image.height*H),_e=I!==null?I.x:0,he=I!==null?I.y:0;w.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,_e,he,U,se),O.unbindTexture()},this.copyTextureToTexture=function(E,I,z=null,H=null,U=0){E.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let se,_e,he,ue,Ae,Ie;z!==null?(se=z.max.x-z.min.x,_e=z.max.y-z.min.y,he=z.min.x,ue=z.min.y):(se=E.image.width,_e=E.image.height,he=0,ue=0),H!==null?(Ae=H.x,Ie=H.y):(Ae=0,Ie=0);const Te=Fe.convert(I.format),at=Fe.convert(I.type);w.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const rt=P.getParameter(P.UNPACK_ROW_LENGTH),mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qt=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),Pe=P.getParameter(P.UNPACK_SKIP_IMAGES),Jt=E.isCompressedTexture?E.mipmaps[U]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Jt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,he),P.pixelStorei(P.UNPACK_SKIP_ROWS,ue),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ae,Ie,se,_e,Te,at,Jt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ae,Ie,Jt.width,Jt.height,Te,Jt.data):P.texSubImage2D(P.TEXTURE_2D,U,Ae,Ie,se,_e,Te,at,Jt),P.pixelStorei(P.UNPACK_ROW_LENGTH,rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(E,I,z=null,H=null,U=0){E.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0);let se,_e,he,ue,Ae,Ie,Te,at,rt;const mt=E.isCompressedTexture?E.mipmaps[U]:E.image;z!==null?(se=z.max.x-z.min.x,_e=z.max.y-z.min.y,he=z.max.z-z.min.z,ue=z.min.x,Ae=z.min.y,Ie=z.min.z):(se=mt.width,_e=mt.height,he=mt.depth,ue=0,Ae=0,Ie=0),H!==null?(Te=H.x,at=H.y,rt=H.z):(Te=0,at=0,rt=0);const qt=Fe.convert(I.format),Je=Fe.convert(I.type);let Pe;if(I.isData3DTexture)w.setTexture3D(I,0),Pe=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)w.setTexture2DArray(I,0),Pe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Jt=P.getParameter(P.UNPACK_ROW_LENGTH),ut=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ni=P.getParameter(P.UNPACK_SKIP_PIXELS),qr=P.getParameter(P.UNPACK_SKIP_ROWS),Pn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Pe,U,Te,at,rt,se,_e,he,qt,Je,mt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,U,Te,at,rt,se,_e,he,qt,mt.data):P.texSubImage3D(Pe,U,Te,at,rt,se,_e,he,qt,Je,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Jt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ni),P.pixelStorei(P.UNPACK_SKIP_ROWS,qr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pn),U===0&&I.generateMipmaps&&P.generateMipmap(Pe),O.unbindTexture()},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),O.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,O.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mu?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Ja?"display-p3":"srgb"}}class qx extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $x extends ln{constructor(e=null,t=1,n=1,i,s,o,a,l,c=yn,u=yn,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Zx=new Kx;class Tu{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tu.DEFAULT_MATERIAL_NAME="__DEFAULT";class jx extends Tu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Mo("img");function l(){u(),qh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Jx extends Tu{constructor(e){super(e)}load(e,t,n,i){const s=new ln,o=new jx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Qx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $h(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);var Kh="1.3.23";function pd(r,e,t){return Math.max(r,Math.min(e,t))}function eS(r,e,t){return(1-t)*r+t*e}function tS(r,e,t,n){return eS(r,e,1-Math.exp(-t*n))}function nS(r,e){return(r%e+e)%e}var iS=class{constructor(){Re(this,"isRunning",!1);Re(this,"value",0);Re(this,"from",0);Re(this,"to",0);Re(this,"currentTime",0);Re(this,"lerp");Re(this,"duration");Re(this,"easing");Re(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=pd(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=tS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function rS(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var sS=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Re(this,"width",0);Re(this,"height",0);Re(this,"scrollHeight",0);Re(this,"scrollWidth",0);Re(this,"debouncedResize");Re(this,"wrapperResizeObserver");Re(this,"contentResizeObserver");Re(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Re(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Re(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=rS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},md=class{constructor(){Re(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const oS=100/6,qi={passive:!1};function Zh(r,e){return r===1?oS:r===2?e:1}var aS=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Re(this,"touchStart",{x:0,y:0});Re(this,"lastDelta",{x:0,y:0});Re(this,"window",{width:0,height:0});Re(this,"emitter",new md);Re(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Re(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Re(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Re(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Zh(n,this.window.width),s=Zh(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Re(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,qi),this.element.addEventListener("touchstart",this.onTouchStart,qi),this.element.addEventListener("touchmove",this.onTouchMove,qi),this.element.addEventListener("touchend",this.onTouchEnd,qi)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,qi),this.element.removeEventListener("touchstart",this.onTouchStart,qi),this.element.removeEventListener("touchmove",this.onTouchMove,qi),this.element.removeEventListener("touchend",this.onTouchEnd,qi)}};const jh=r=>Math.min(1,1.001-2**(-10*r));var lS=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:y=!0,autoRaf:x=!1,anchors:M=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:D=T,stopInertiaOnNavigate:F=!1}={}){Re(this,"_isScrolling",!1);Re(this,"_isStopped",!1);Re(this,"_isLocked",!1);Re(this,"_preventNextNativeScrollEvent",!1);Re(this,"_resetVelocityTimeout",null);Re(this,"_rafId",null);Re(this,"isTouching");Re(this,"time",0);Re(this,"userData",{});Re(this,"lastVelocity",0);Re(this,"velocity",0);Re(this,"direction",0);Re(this,"options");Re(this,"targetScroll");Re(this,"animatedScroll");Re(this,"animate",new iS);Re(this,"emitter",new md);Re(this,"dimensions");Re(this,"virtualScroll");Re(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Re(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Re(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Re(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Re(this,"onPointerDown",r=>{r.button===1&&this.reset()});Re(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>{var g,p,m,y,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Re(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Re(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Kh,window.lenis||(window.lenis={}),window.lenis.version=Kh,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=jh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:y,autoRaf:x,anchors:M,autoToggle:R,allowNestedScroll:A,naiveDimensions:D,stopInertiaOnNavigate:F},this.dimensions=new sS(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new aS(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?M.left:M.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=pd(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=jh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,h,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=f>d,l=h>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,m,y,x,M,R;if(g==="horizontal")p=Math.round(r.scrollLeft),m=f-d,y=e,x=s,M=a,R=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=h-_,y=t,x=o,M=l,R=u;else return!1;return!R&&(p>=m||p<=0)?!0:(y>0?p<m:p>0)&&x&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?nS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _d(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yo={duration:.5,overwrite:!1,delay:0},bu,en,Rt,Qn=1e8,St=1/Qn,Gc=Math.PI*2,cS=Gc/4,uS=0,gd=Math.sqrt,hS=Math.cos,fS=Math.sin,jt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},Au=function(e){return typeof e>"u"},Si=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},wu=function(){return typeof window<"u"},oa=function(e){return Lt(e)||jt(e)},vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,dS=/random\([^)]+\)/g,pS=/,\s*/g,Jh=/(?:-?\.?\d|\.)+/gi,xd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sd=/[+-]=-?[.\d]+/,mS=/[^,'"\[\]\s]+/gi,_S=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,ui,Wc,Ru,Gn={},za={},Md,yd=function(e){return(za=Is(e,Gn))&&Rn},Cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Eo=function(e,t){return!t&&console.warn(e)},Ed=function(e,t){return e&&(Gn[e]=t)&&za&&(za[e]=t)||Gn},To=function(){return 0},gS={suppressEvents:!0,isStart:!0,kill:!1},Aa={suppressEvents:!0,kill:!1},vS={suppressEvents:!0},Pu={},sr=[],Xc={},Td,Nn={},Hl={},Qh=30,wa=[],Du="",Lu=function(e){var t=e[0],n,i;if(Si(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wa.length;i--&&!wa[i].targetTest(t););n=wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yd(e[i],n)))||e.splice(i,1);return e},Ir=function(e){return e._gsap||Lu(ei(e))[0]._gsap},bd=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():Au(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},Ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},xS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ka=function(){var e=sr.length,t=sr.slice(0),n,i;for(Xc={},sr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Uu=function(e){return!!(e._initted||e._startAt||e.add)},Ad=function(e,t,n,i){sr.length&&!en&&ka(),e.render(t,n,!!(en&&t<0&&Uu(e))),sr.length&&!en&&ka()},wd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(mS).length<2?t:jt(e)?e.trim():e},Rd=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},SS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Is=function(e,t){for(var n in t)e[n]=t[n];return e},ef=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Si(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ha=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oo=function(e){var t=e.parent||Pt,n=e.keyframes?SS(cn(e.keyframes)):Wn;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},MS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Cd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},nl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Nr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yc=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(Aa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ES=function r(e){return!e||e._ts&&r(e.parent)},tf=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},Va=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},il=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},rl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),il(e),n._dirty||Nr(n,e)),e},Pd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Va(e.rawTime(),t),(!t._dur||Bo(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),Nr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},pi=function(e,t,n,i){return t.parent&&cr(t),t._start=Ct((Bi(n)?n:n||e!==Pt?qn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cd(e,t,"_first","_last",e._sort?"_start":0),qc(t)||(e._recent=t),i||Pd(e,t),e._ts<0&&rl(e,e._tTime),e},Dd=function(e,t){return(Gn.ScrollTrigger||Cu("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},Ld=function(e,t,n,i,s){if(Nu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!en&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Td!==Fn.frame)return sr.push(e),e._lazy=[s,i],1},TS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},qc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&TS(e)&&!(!e._initted&&qc(e))||(e._ts<0||e._dp._ts<0)&&!qc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Bo(0,e._tDur,t),u=Ns(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ns(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||en||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&Ld(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Yc(e,t,n,!0),e._onUpdate&&!n&&zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&cr(e,1),!n&&!en&&(zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},AS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Os=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&rl(e,e._tTime=e._tDur*a),e.parent&&il(e),n||Nr(e.parent,e),e},nf=function(e){return e instanceof Mn?Nr(e):Os(e,e._dur)},wS={_start:0,endTime:To,totalDuration:To},qn=function r(e,t,n){var i=e.labels,s=e._recent||wS,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ao=function(e,t,n){var i=Bi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ht(t[0],o,t[s+1])},mr=function(e,t){return e||e===0?t(e):t},Bo=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!jt(e)||!(t=_S.exec(e))?"":t[1]},RS=function(e,t,n){return mr(n,function(i){return Bo(e,t,i)})},$c=[].slice,Ud=function(e,t){return e&&Si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Si(e[0]))&&!e.nodeType&&e!==ui},CS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||Ud(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):jt(e)&&!n&&(Wc||!Fs())?$c.call((t||Ru).querySelectorAll(e),0):cn(e)?CS(e,n):Ud(e)?$c.call(e,0):e?[e]:[]},Kc=function(e){return e=ei(e)[0]||Eo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?Eo("Invalid scope")||Ru.createElement("div"):e)}},Id=function(e){return e.sort(function(){return .5-Math.random()})},Nd=function(e){if(Lt(e))return e;var t=Si(e)?e:{each:e},n=Or(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return jt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||t).length,p=o[g],m,y,x,M,R,A,T,D,F;if(!p){if(F=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!F){for(T=-Qn;T<(T=_[F++].getBoundingClientRect().left)&&F<g;);F<g&&F--}for(p=o[g]=[],m=l?Math.min(F,g)*u-.5:i%F,y=F===Qn?0:l?g*f/F-.5:i/F|0,T=0,D=Qn,A=0;A<g;A++)x=A%F-m,M=y-(A/F|0),p[A]=R=c?Math.abs(c==="y"?M:x):gd(x*x+M*M),R>T&&(T=R),R<D&&(D=R);i==="random"&&Id(p),p.max=T-D,p.min=D,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(F>g?g-1:c?c==="y"?g/F:F:Math.max(F,g/F))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=on(t.amount||t.each)||0,n=n&&g<0?VS(n):n}return g=(p[h]-p.min)/p.max||0,Ct(p.b+(n?n(g):g)*p.v)+p.u}},Zc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Bi(n)?0:on(n))}},Od=function(e,t){var n=cn(e),i,s;return!n&&Si(e)&&(i=n=e.radius||Qn,e.values?(e=ei(e.values),(s=!Bi(e[0]))&&(i*=i)):e=Zc(e.increment)),mr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Bi(o)?u:u+on(o)}:Zc(e))},Fd=function(e,t,n,i){return mr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},PS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},DS=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},LS=function(e,t,n){return zd(e,t,0,1,n)},Bd=function(e,t,n){return mr(n,function(i){return e[~~t(i)]})},US=function r(e,t,n){var i=t-e;return cn(e)?Bd(e,r(0,e.length),t):mr(n,function(s){return(i+(s-e)%i)%i+e})},IS=function r(e,t,n){var i=t-e,s=i*2;return cn(e)?Bd(e,r(0,e.length-1),t):mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},bo=function(e){return e.replace(dS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(pS);return Fd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},zd=function(e,t,n,i,s){var o=t-e,a=i-n;return mr(s,function(l){return n+((l-e)/o*a||0)})},NS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=jt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=Is(cn(e)?[]:{},e));if(!u){for(l in t)Iu.call(a,e,l,"get",t[l]);s=function(_){return Bu(_,a)||(o?e.p:e)}}}return mr(n,s)},rf=function(e,t,n){var i=e.labels,s=Qn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(e,t,n){var i=e.vars,s=i[t],o=Rt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&sr.length&&ka(),a&&(Rt=a),u=l?s.apply(c,l):s.call(c),Rt=o,u},Qs=function(e){return cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!en),e.progress()<1&&zn(e,"onInterrupt"),e},_s,kd=[],Hd=function(e){if(e)if(e=!e.name&&e.default||e,wu()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:To,render:Bu,add:Iu,kill:JS,modifier:jS,rawVars:0},o={targetTest:0,get:0,getSetter:Fu,aliases:{},register:0};if(Fs(),e!==i){if(Nn[t])return;Wn(i,Wn(Ha(e,s),o)),Is(i.prototype,Is(s,Ha(e,o))),Nn[i.prop=t]=i,e.targetTest&&(wa.push(i),Pu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ed(t,i),e.register&&e.register(Rn,i,An)}else kd.push(e)},xt=255,eo={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Vl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},Vd=function(e,t,n){var i=e?Bi(e)?[e>>16,e>>8&xt,e&xt]:0:eo.black,s,o,a,l,c,u,f,h,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),eo[e])i=eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Jh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Vl(l+1/3,s,o),i[1]=Vl(l,s,o),i[2]=Vl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(xd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Jh)||eo.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/xt,o=i[1]/xt,a=i[2]/xt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Gd=function(e){var t=[],n=[],i=-1;return e.split(or).forEach(function(s){var o=s.match(ms)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},sf=function(e,t,n){var i="",s=(e+i).match(or),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Vd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Gd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(or,"1").split(ms),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(or),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},or=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in eo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),OS=/hsl[a]?\(/,Wd=function(e){var t=e.join(" "),n;if(or.lastIndex=0,or.test(t))return n=OS.test(t),e[1]=sf(e[1],n),e[0]=sf(e[0],n,Gd(e[1])),!0},Ao,Fn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(p){var m=r()-i,y=p===!0,x,M,R,A;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,x=R-o,(x>0||y)&&(A=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=x+(x>=s?4:s-x),M=1),y||(l=c(g)),M)for(d=0;d<a.length;d++)a[d](R,h,A,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Md&&(!Wc&&wu()&&(ui=Wc=window,Ru=ui.document||{},Gn.gsap=Rn,(ui.gsapVersions||(ui.gsapVersions=[])).push(Rn.version),yd(za||ui.GreenSockGlobals||!ui.gsap&&ui||{}),kd.forEach(Hd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Ao=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=To},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var x=m?function(M,R,A,T){p(M,R,A,T),f.remove(x)}:p;return f.remove(p),a[y?"unshift":"push"](x),Fs(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),Fs=function(){return!Ao&&Fn.wake()},lt={},FS=/^[\d.\-M][\d.\-,\s]/,BS=/["']/g,zS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(BS,"").trim():+c,i=l.substr(a+1).trim();return t},kS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},HS=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zS(t[1])]:kS(e).split(",").map(wd)):lt._CE&&FS.test(e)?lt._CE("",e):n},VS=function(e){return function(t){return 1-e(1-t)}},Or=function(e,t){return e&&(Lt(e)?e:lt[e]||HS(e))||t},Yr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){lt[a]=Gn[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},Xd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*fS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Xd(a);return s=Gc/s,l.config=function(c,u){return r(e,c,u)},l},Wl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Xd(n);return i.config=function(s){return r(e,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Yr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Yr("Elastic",Gl("in"),Gl("out"),Gl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Yr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Yr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Yr("Circ",function(r){return-(gd(1-r*r)-1)});Yr("Sine",function(r){return r===1?1:-hS(r*cS)+1});Yr("Back",Wl("in"),Wl("out"),Wl());lt.SteppedEase=lt.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((i*Bo(0,o,a)|0)+s)*n}}};yo.ease=lt["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Du+=r+","+r+"Params,"});var Yd=function(e,t){this.id=uS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bd,this.set=t?t.getSetter:Fu},wo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Os(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Ao||Fn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(rl(this,n),!s._dp||s.parent||Pd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ad(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Va(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(Bo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),il(this),yS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Va(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vS);var i=en;return en=n,Uu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Lt(n)?n:Rd,l=function(){var u=i.then;i.then=null,s&&s(),Lt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Qs(this)},r}();Wn(wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Mn=function(r){_d(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),Pt&&pi(n.parent||Pt,wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Dd(wi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ao(0,arguments,this),this},t.from=function(i,s,o){return ao(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ao(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,qn(this,o),1),this},t.call=function(i,s,o){return pi(this,Ht.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ht(i,o,qn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,oo(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,oo(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,p,m,y,x,M,R,A,T;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,x=this._ts,m=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Ct(u%p),u===l?(g=this._repeat,h=c):(R=Ct(u/p),g=~~R,g&&g===R&&(h=c,g--),h>c&&(h=c)),R=Ns(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(h=c-h,T=1),g!==R&&!this._lock){var D=A&&R&1,F=D===(A&&g&1);if(g<R&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ct(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,R=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,F&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=AS(this,Ct(a),Ct(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-St);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||en&&Uu(d)),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=v?-St:St);break}}d=_}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-St)._zTime=h>=a?1:-1,this._ts))return this._start=M,il(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Bi(s)||(s=qn(this,s,i)),!(i instanceof wo)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(jt(i))return this.addLabel(i,s);if(Lt(i))i=Ht.delayedCall(0,i);else return this}return this!==i?pi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(i.parent===this&&nl(this,i),i===this._recent&&(this._recent=this._last),Nr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ht.delayedCall(0,s||To,o);return a.data="isPause",this._hasPause=1,pi(this,a,qn(this,i))},t.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&cr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ji!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ei(i),l=this._first,c=Bi(s),u;l;)l instanceof Ht?xS(l._targets,a)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Ht.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Os(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Wn({startAt:{time:qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rf(this,qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rf(this,qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Nr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Nr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Qn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ct(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Os(o,o===Pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&(Ad(Pt,Va(i,Pt)),Td=Fn.frame),Fn.frame>=Qh){Qh+=Vn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Vn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},e}(wo);Wn(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var GS=function(e,t,n,i,s,o,a){var l=new An(this._pt,e,t,0,1,Jd,null,s),c=0,u=0,f,h,d,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=bo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),h=n.match(kl)||[];f=kl.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ms(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=kl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Sd.test(i)||m)&&(l.e=0),this._pt=l,l},Iu=function(e,t,n,i,s,o,a,l,c,u){Lt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Lt(f)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Lt(f)?c?$S:Zd:Ou,_;if(jt(i)&&(~i.indexOf("random(")&&(i=bo(i)),i.charAt(1)==="="&&(_=Ms(h,i)+(on(h)||0),(_||_===0)&&(i=_))),!u||h!==i||jc)return!isNaN(h*i)&&i!==""?(_=new An(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?ZS:jd,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Cu(t,i),GS.call(this,e,t,h,i,d,l||Vn.stringFilter,c))},WS=function(e,t,n,i,s){if(Lt(e)&&(e=lo(e,s,t,n,i)),!Si(e)||e.style&&e.nodeType||cn(e)||vd(e))return jt(e)?lo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=lo(e[a],s,t,n,i);return o},qd=function(e,t,n,i,s,o){var a,l,c,u;if(Nn[e]&&(a=new Nn[e]).init(s,a.rawVars?t[e]:WS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==_s))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ji,jc,Nu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!bu,M=e.timeline,R=i.easeReverse||f,A,T,D,F,v,b,N,k,V,Z,B,$,W;if(M&&(!h||!s)&&(s="none"),e._ease=Or(s,yo.ease),e._rEase=R&&(Or(R)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(k=p[0]?Ir(p[0]).harness:0,$=k&&i[k.prop],A=Ha(i,Pu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Aa:gS),g._lazy=0),o){if(cr(e._startAt=Ht.set(p,Wn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en||!a&&!d)&&e._startAt.revert(Aa),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),D=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Tn(l),immediateRender:a,stagger:0,parent:m},A),$&&(D[k.prop]=$),cr(e._startAt=Ht.set(p,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en?e._startAt.revert(Aa):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Tn(l)||l&&!_,T=0;T<p.length;T++){if(v=p[T],N=v._gsap||Lu(p)[T]._gsap,e._ptLookup[T]=Z={},Xc[N.id]&&sr.length&&ka(),B=y===p?T:y.indexOf(v),k&&(V=new k).init(v,$||A,e,B,y)!==!1&&(e._pt=F=new An(e._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(re){Z[re]=F}),V.priority&&(b=1)),!k||$)for(D in A)Nn[D]&&(V=qd(D,A,e,B,v,y))?V.priority&&(b=1):Z[D]=F=Iu.call(e,v,D,"get",A[D],B,y,0,i.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),x&&e._pt&&(ji=e,Pt.killTweensOf(v,Z,e.globalTime(t)),W=!e.parent,ji=0),e._pt&&l&&(Xc[N.id]=1)}b&&Qd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,h&&t<=0&&M.render(Qn,!0,!0)},XS=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return jc=1,e.vars[t]="+=0",Nu(e,a),jc=0,l?Eo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ot(n)+on(f.e)),f.b&&(f.b=u.s+on(f.b))},YS=function(e,t){var n=e[0]?Ir(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Is({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},qS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},lo=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?bo(e):e},$d=Du+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Kd={};bn($d+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Kd[r]=1});var Ht=function(r){_d(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:oo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Pt,y=(cn(n)||vd(n)?Bi(n[0]):"length"in i)?[n]:ei(n),x,M,R,A,T,D,F,v;if(a._targets=y.length?Lu(y):Eo("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||oa(c)||oa(u)){i=a.vars;var b=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Mn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=wi(a),x._start=0,h||oa(c)||oa(u)){if(A=y.length,F=h&&Nd(h),Si(h))for(T in h)~$d.indexOf(T)&&(v||(v={}),v[T]=h[T]);for(M=0;M<A;M++)R=Ha(i,Kd),R.stagger=0,b&&(R.easeReverse=b),v&&Is(R,v),D=y[M],R.duration=+lo(c,wi(a),M,D,y),R.delay=(+lo(u,wi(a),M,D,y)||0)-a._delay,!h&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),x.to(D,R,F?F(M,D,y):0),x._ease=lt.none;x.duration()?c=u=0:a.timeline=0}else if(_){oo(Wn(x.vars.defaults,{ease:"none"})),x._ease=Or(_.ease||i.ease||"none");var N=0,k,V,Z;if(cn(_))_.forEach(function(B){return x.to(y,B,">")}),x.duration();else{R={};for(T in _)T==="ease"||T==="easeEach"||qS(T,_[T],R,_.easeEach);for(T in R)for(k=R[T].sort(function(B,$){return B.t-$.t}),N=0,M=0;M<k.length;M++)V=k[M],Z={ease:V.e,duration:(V.t-(M?k[M-1].t:0))/100*c},Z[T]=V.v,x.to(y,Z,N),N+=Z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!bu&&(ji=wi(a),Pt.killTweensOf(y),ji=0),pi(m,wi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Ct(m._time)&&Tn(f)&&ES(wi(a))&&m.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-u)||0)),p&&Dd(wi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-St&&!u?l:i<St?0:i,h,d,_,g,p,m,y,x;if(!c)bS(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=Ct(f%g),f===l?(_=this._repeat,h=c):(p=Ct(f/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),p=Ns(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=f,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Ct(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Ld(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=h<a;if(M!==this._inv){var R=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(M?-1:1)/R:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(zn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Yc(this,i,s,o),zn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Yc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ao||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Nu(this,c),u=this._ease(c/this._dur),XS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(rl(this,0),this.parent||Cd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ji&&ji.vars.overwrite!==!0)._first||Qs(this),this.parent&&o!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ei(i):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&MS(a,l))return s==="all"&&(this._pt=0),Qs(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(g={},bn(s,function(y){return g[y]=1}),s=g),s=YS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&nl(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Qs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ao(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ao(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Pt.killTweensOf(i,s,o)},e}(wo);Wn(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new Mn,t=$c.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ou=function(e,t,n){return e[t]=n},Zd=function(e,t,n){return e[t](n)},$S=function(e,t,n,i){return e[t](i.fp,n)},KS=function(e,t,n){return e.setAttribute(t,n)},Fu=function(e,t){return Lt(e[t])?Zd:Au(e[t])&&e.setAttribute?KS:Ou},jd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ZS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Bu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},JS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?nl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},QS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Qd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},An=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||jd,this.d=l||this,this.set=c||Ou,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=QS,this.m=n,this.mt=s,this.tween=i},r}();bn(Du+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Pu[r]=1});Gn.TweenMax=Gn.TweenLite=Ht;Gn.TimelineLite=Gn.TimelineMax=Mn;Pt=new Mn({sortChildren:!1,defaults:yo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Wd;var Fr=[],Ra={},eM=[],of=0,tM=0,Xl=function(e){return(Ra[e]||eM).map(function(t){return t()})},Jc=function(){var e=Date.now(),t=[];e-of>2&&(Xl("matchMediaInit"),Fr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ui.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Xl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),of=e,Xl("matchMedia"))},ep=function(){function r(t,n){this.selector=n&&Kc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=tM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var o=this,a=function(){var c=Rt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Kc(s)),Rt=o,f=i.apply(o,arguments),Lt(f)&&o._r.push(f),Rt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Fr.length;o--;)Fr[o].id===this.id&&Fr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),nM=function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Si(n)||(n={matches:n});var o=new ep(0,s||this.scope),a=o.conditions={},l,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ui.matchMedia(n[c]),l&&(Fr.indexOf(o)<0&&Fr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Jc):l.addEventListener("change",Jc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ga={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hd(i)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=ei(e)[0]);var s=Ir(e||{}).get,o=n?Rd:wd;return n==="native"&&(n=""),e&&(t?o((Nn[t]&&Nn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Nn[a]&&Nn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Nn[t],a=Ir(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;_s._pt=0,f.init(e,n?u+n:u,_s,0,[e]),f.render(1,f),_s._pt&&Bu(1,_s)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Rn.to(e,Wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Or(e.ease,yo.ease)),ef(yo,e||{})},config:function(e){return ef(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Gn[a]&&Eo(t+" effect requires "+a+" plugin.")}),Hl[t]=function(a,l,c){return n(ei(a),Wn(l||{},s),c)},o&&(Mn.prototype[t]=function(a,l,c){return this.add(Hl[t](a,Si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Or(t)},parseEase:function(e,t){return arguments.length?Or(e,t):lt},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),i,s;for(n.smoothChildTiming=Tn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&pi(n,i,i._start-i._delay),i=s;return pi(Pt,n,0),n},context:function(e,t){return e?new ep(e,t):Rt},matchMedia:function(e){return new nM(e)},matchMediaRefresh:function(){return Fr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Jc()},addEventListener:function(e,t){var n=Ra[e]||(Ra[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ra[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:US,wrapYoyo:IS,distribute:Nd,random:Fd,snap:Od,normalize:LS,getUnit:on,clamp:RS,splitColor:Vd,toArray:ei,selector:Kc,mapRange:zd,pipe:PS,unitize:DS,interpolate:NS,shuffle:Id},install:yd,effects:Hl,ticker:Fn,updateRoot:Mn.updateRoot,plugins:Nn,globalTimeline:Pt,core:{PropTween:An,globals:Ed,Tween:Ht,Timeline:Mn,Animation:wo,getCache:Ir,_removeLinkedListItem:nl,reverting:function(){return en},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return bu=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ga[r]=Ht[r]});Fn.add(Mn.updateRoot);_s=Ga.to({},{duration:0});var iM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=iM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Yl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(jt(s)&&(l={},bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}rM(a,s)}}}},Rn=Ga.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Yl("roundProps",Zc),Yl("modifiers"),Yl("snap",Od))||Ga;Ht.version=Mn.version=Rn.version="3.15.0";Md=1;wu()&&Fs();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var af,Ji,ys,zu,Lr,lf,ku,sM=function(){return typeof window<"u"},zi={},Ar=180/Math.PI,Es=Math.PI/180,ls=Math.atan2,cf=1e8,Hu=/([A-Z])/g,oM=/(left|right|width|margin|padding|x)/i,aM=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},np=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fM=function(e,t,n){return e.style[t]=n},dM=function(e,t,n){return e.style.setProperty(t,n)},pM=function(e,t,n){return e._gsap[t]=n},mM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},_M=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},gM=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",wn=Dt+"Origin",vM=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ri(i,a)}):this.tfm[e]=o.x?o[e]:Ri(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return _i.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},ip=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Hu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ku(),(!s||!s.isStart)&&!n[Dt]&&(ip(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rp=function(e,t){var n={target:e,props:[],revert:xM,save:vM};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},sp,eu=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Hu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Bs(t)||t,1)||""},uf="O,Moz,ms,Ms,Webkit".split(","),Bs=function(e,t,n){var i=t||Lr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(uf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?uf[o]:"")+e},tu=function(){sM()&&window.document&&(af=window,Ji=af.document,ys=Ji.documentElement,Lr=eu("div")||{style:{}},eu("div"),Dt=Bs(Dt),wn=Dt+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sp=!!Bs("perspective"),ku=Rn.core.reverting,zu=1)},hf=function(e){var t=e.ownerSVGElement,n=eu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ys.removeChild(n),s},ff=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},op=function(e){var t,n;try{t=e.getBBox()}catch{t=hf(e),n=1}return t&&(t.width||t.height)||n||(t=hf(e)),t&&!t.width&&!t.x&&!t.y?{x:+ff(e,["x","cx","x1"])||0,y:+ff(e,["y","cy","y1"])||0,width:0,height:0}:t},ap=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&op(e))},ur=function(e,t){if(t){var n=e.style,i;t in zi&&t!==wn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Hu,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,i,s,o){var a=new An(e._pt,t,n,0,1,o?np:tp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},df={deg:1,rad:1,turn:1},SM={grid:1,flex:1},hr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Lr.style,l=oM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||df[i]||df[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&ap(e),(d||o==="%")&&(zi[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Ot(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ji||!g.appendChild)&&(g=Ji.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Fn.time&&!p.uncache)return Ot(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,_=e[u],y?e.style[t]=y:ur(e,t)}else(d||o==="%")&&!SM[kn(g,"display")]&&(a.position=kn(e,"position")),g===e&&(a.position="static"),g.appendChild(Lr),_=Lr[u],g.removeChild(Lr),a.position="absolute";return l&&d&&(p=Ir(g),p.time=Fn.time,p.width=g[u]),Ot(h?_*s/f:_&&s?f/_*s:0)},Ri=function(e,t,n,i){var s;return zu||tu(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),zi[t]&&t!=="transform"?(s=Co(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xa(kn(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wa[t]&&Wa[t](e,t,n)||kn(e,t)||bd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hr(e,t,s,n)+n:s},MM=function(e,t,n,i){if(!n||n==="none"){var s=Bs(t,e,1),o=s&&kn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,Jd),l=0,c=0,u,f,h,d,_,g,p,m,y,x,M,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=kn(e,t)||i,g?e.style[t]=g:ur(e,t)),u=[n,i],Wd(u),n=u[0],i=u[1],h=n.match(ms)||[],R=i.match(ms)||[],R.length){for(;f=ms.exec(i);)p=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),p.charAt(1)==="="&&(p=Ms(d,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=ms.lastIndex-x.length,x||(x=x||Vn.units[t]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(d=hr(e,t,g,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?np:tp;return Sd.test(i)&&(a.e=0),this._pt=a,a},pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=pf[n]||n,t[1]=pf[i]||i,t.join(" ")},EM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zi[a]&&(l=1,a=a==="transformOrigin"?wn:Dt),ur(n,a);l&&(ur(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Co(n,1),o.uncache=1,ip(i)))}},Wa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,EM);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ro=[1,0,0,1,0,0],lp={},cp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mf=function(e){var t=kn(e,Dt);return cp(t)?Ro:t.substr(7).match(xd).map(Ot)},Vu=function(e,t){var n=e._gsap||Ir(e),i=e.style,s=mf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ro:s):(s===Ro&&!e.offsetParent&&e!==ys&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ys.appendChild(e)),s=mf(e),l?i.display=l:ur(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ys.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nu=function(e,t,n,i,s,o){var a=e._gsap,l=s||Vu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],x=t.split(" "),M=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,T,D,F;n?l!==Ro&&(T=d*p-_*g)&&(D=M*(p/T)+R*(-g/T)+(g*y-p*m)/T,F=M*(-_/T)+R*(d/T)-(d*y-_*m)/T,M=D,R=F):(A=op(e),M=A.x+(~x[0].indexOf("%")?M/100*A.width:M),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(m=M-c,y=R-u,a.xOffset=f+(m*d+y*g)-m,a.yOffset=h+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&(Qi(o,a,"xOrigin",c,M),Qi(o,a,"yOrigin",u,R),Qi(o,a,"xOffset",f,a.xOffset),Qi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+R)},Co=function(e,t){var n=e._gsap||new Yd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=kn(e,wn)||"0",u,f,h,d,_,g,p,m,y,x,M,R,A,T,D,F,v,b,N,k,V,Z,B,$,W,re,C,ae,Be,Xe,Y,Q;return u=f=h=g=p=m=y=x=M=0,d=_=1,n.svg=!!(e.getCTM&&ap(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),T=Vu(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),nu(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,A=n.yOrigin||0,T!==Ro&&(b=T[0],N=T[1],k=T[2],V=T[3],u=Z=T[4],f=B=T[5],T.length===6?(d=Math.sqrt(b*b+N*N),_=Math.sqrt(V*V+k*k),g=b||N?ls(N,b)*Ar:0,y=k||V?ls(k,V)*Ar+g:0,y&&(_*=Math.abs(Math.cos(y*Es))),n.svg&&(u-=R-(R*b+A*k),f-=A-(R*N+A*V))):(Q=T[6],Xe=T[7],C=T[8],ae=T[9],Be=T[10],Y=T[11],u=T[12],f=T[13],h=T[14],D=ls(Q,Be),p=D*Ar,D&&(F=Math.cos(-D),v=Math.sin(-D),$=Z*F+C*v,W=B*F+ae*v,re=Q*F+Be*v,C=Z*-v+C*F,ae=B*-v+ae*F,Be=Q*-v+Be*F,Y=Xe*-v+Y*F,Z=$,B=W,Q=re),D=ls(-k,Be),m=D*Ar,D&&(F=Math.cos(-D),v=Math.sin(-D),$=b*F-C*v,W=N*F-ae*v,re=k*F-Be*v,Y=V*v+Y*F,b=$,N=W,k=re),D=ls(N,b),g=D*Ar,D&&(F=Math.cos(D),v=Math.sin(D),$=b*F+N*v,W=Z*F+B*v,N=N*F-b*v,B=B*F-Z*v,b=$,Z=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Ot(Math.sqrt(b*b+N*N+k*k)),_=Ot(Math.sqrt(B*B+Q*Q)),D=ls(Z,B),y=Math.abs(D)>2e-4?D*Ar:0,M=Y?1/(Y<0?-Y:Y):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cp(kn(e,Dt)),$&&e.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ot(d),n.scaleY=Ot(_),n.rotation=Ot(g)+a,n.rotationX=Ot(p)+a,n.rotationY=Ot(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=Xa(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?bM:sp?up:TM,n.uncache=0,n},Xa=function(e){return(e=e.split(" "))[0]+" "+e[1]},ql=function(e,t,n){var i=on(t);return Ot(parseFloat(t)+parseFloat(hr(e,"x",n+"px",i)))+i},TM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,up(e,t)},yr="0deg",$s="0px",Er=") ",up=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,M="",R=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==yr||u!==yr)){var A=parseFloat(u)*Es,T=Math.sin(A),D=Math.cos(A),F;A=parseFloat(f)*Es,F=Math.cos(A),o=ql(y,o,T*F*-x),a=ql(y,a,-Math.sin(A)*-x),l=ql(y,l,D*F*-x+x)}p!==$s&&(M+="perspective("+p+Er),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(R||o!==$s||a!==$s||l!==$s)&&(M+=l!==$s||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Er),c!==yr&&(M+="rotate("+c+Er),u!==yr&&(M+="rotateY("+u+Er),f!==yr&&(M+="rotateX("+f+Er),(h!==yr||d!==yr)&&(M+="skew("+h+", "+d+Er),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Er),y.style[Dt]=M||"translate(0, 0)"},bM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),M=parseFloat(a),R,A,T,D,F;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Es,c*=Es,R=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=Es,F=Math.tan(c-u),F=Math.sqrt(1+F*F),T*=F,D*=F,u&&(F=Math.tan(u),F=Math.sqrt(1+F*F),R*=F,A*=F)),R=Ot(R),A=Ot(A),T=Ot(T),D=Ot(D)):(R=f,D=h,A=T=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=hr(d,"x",o,"px"),M=hr(d,"y",a,"px")),(_||g||p||m)&&(x=Ot(x+_-(_*R+g*T)+p),M=Ot(M+g-(_*A+g*D)+m)),(i||s)&&(F=d.getBBox(),x=Ot(x+i/100*F.width),M=Ot(M+s/100*F.height)),F="matrix("+R+","+A+","+T+","+D+","+x+","+M+")",d.setAttribute("transform",F),y&&(d.style[Dt]=F)},AM=function(e,t,n,i,s){var o=360,a=jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ar:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*cf)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*cf)%o-~~(c/o)*o)),e._pt=h=new An(e._pt,t,n,i,c,lM),h.e=u,h.u="deg",e._props.push(n),h},_f=function(e,t){for(var n in t)e[n]=t[n];return e},wM=function(e,t,n){var i=_f({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=Co(n,1),ur(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=Co(n,1),o[Dt]=c);for(l in zi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=on(c),_=on(u),f=d!==_?hr(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new An(e._pt,a,l,f,h-f,Qc),e._pt.u=_||0,e._props.push(l));_f(a,i)};bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Wa[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Ri(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var hp={name:"css",register:tu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,p,m,y,x,M,R,A,T,D,F;zu||tu(),this.styles=this.styles||rp(e),D=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Nn[g]&&qd(g,t,n,i,e,s)))){if(d=typeof u,_=Wa[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=bo(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",or.lastIndex=0,or.test(c)||(p=on(c),m=on(u),m?p!==m&&(c=hr(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),D.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],jt(c)&&~c.indexOf("random(")&&(c=bo(c)),on(c+"")||c==="auto"||(c+=Vn.units[g]||on(Ri(e,g))||""),(c+"").charAt(1)==="="&&(c=Ri(e,g))):c=Ri(e,g),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in _i&&(g==="autoAlpha"&&(h===1&&Ri(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),Qi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=_i[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in zi,x){if(this.styles.save(g),F=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=kn(e,"perspective"),v?e.style.perspective=v:ur(e,"perspective")}f=parseFloat(u)}if(M||(R=e._gsap,R.renderTransform&&!t.parseTransform||Co(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,M=this._pt=new An(this._pt,a,Dt,0,1,R.renderTransform,R,0,-1),M.dep=1),g==="scale")this._pt=new An(this._pt,R,"scaleY",R.scaleY,(y?Ms(R.scaleY,y+f):f)-R.scaleY||0,Qc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(wn,0,a[wn]),u=yM(u),R.svg?nu(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Qi(this,R,"zOrigin",R.zOrigin,m),Qi(this,a,g,Xa(c),Xa(u)));continue}else if(g==="svgOrigin"){nu(e,u,1,A,0,this);continue}else if(g in lp){AM(this,R,g,h,y?Ms(h,y+u):u);continue}else if(g==="smoothOrigin"){Qi(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){wM(this,u,e);continue}}else g in a||(g=Bs(g)||g);if(x||(f||f===0)&&(h||h===0)&&!aM.test(u)&&g in a)p=(c+"").substr((h+"").length),f||(f=0),m=on(u)||(g in Vn.units?Vn.units[g]:p),p!==m&&(h=hr(e,g,c,m)),this._pt=new An(this._pt,x?R:a,g,h,(y?Ms(h,y+f):f)-h,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?hM:Qc),this._pt.u=m||0,x&&F!==u?(this._pt.b=c,this._pt.e=F,this._pt.r=uM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=cM);else if(g in a)MM.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,i,s);else if(g!=="parseTransform"){Cu(g,u);continue}x||(g in a?D.push(g,0,a[g]):typeof e[g]=="function"?D.push(g,2,e[g]()):D.push(g,1,c||e[g])),o.push(g)}}T&&Qd(this)},render:function(e,t){if(t.tween._time||!ku())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ri,aliases:_i,getSetter:function(e,t,n){var i=_i[t];return i&&i.indexOf(",")<0&&(t=i),t in zi&&t!==wn&&(e._gsap.x||Ri(e,"x"))?n&&lf===n?t==="scale"?mM:pM:(lf=n||{})&&(t==="scale"?_M:gM):e.style&&!Au(e.style[t])?fM:~t.indexOf("-")?dM:Fu(e,t)},core:{_removeProperty:ur,_getMatrix:Vu}};Rn.utils.checkPrefix=Bs;Rn.core.getStyleSaver=rp;(function(r,e,t,n){var i=bn(r+","+e+","+t,function(s){zi[s]=1});bn(e,function(s){Vn.units[s]="deg",lp[s]=1}),_i[i[13]]=r+","+e,bn(n,function(s){var o=s.split(":");_i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Rn.registerPlugin(hp);var co=Rn.registerPlugin(hp)||Rn;co.core.Tween;function RM(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function CM(r,e,t){return e&&RM(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qt,Ca,Bn,er,tr,Ts,fp,wr,bs,dp,Li,oi,pp,mp=function(){return Qt||typeof window<"u"&&(Qt=window.gsap)&&Qt.registerPlugin&&Qt},_p=1,gs=[],nt=[],xi=[],uo=Date.now,iu=function(e,t){return t},PM=function(){var e=bs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,xi),nt=n,xi=i,iu=function(o,a){return t[o](a)}},ar=function(e,t){return~xi.indexOf(e)&&xi[xi.indexOf(e)+1][t]},ho=function(e){return!!~dp.indexOf(e)},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},aa="scrollLeft",la="scrollTop",ru=function(){return Li&&Li.isPressed||nt.cache++},Ya=function(e,t){var n=function i(s){if(s||s===0){_p&&(Bn.history.scrollRestoration="manual");var o=Li&&Li.isPressed;s=i.v=Math.round(s)||(Li&&Li.iOS?1:0),e(s),i.cacheID=nt.cache,o&&iu("ss",s)}else(t||nt.cache!==i.cacheID||iu("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},_n={s:aa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ya(function(r){return arguments.length?Bn.scrollTo(r,Wt.sc()):Bn.pageXOffset||er[aa]||tr[aa]||Ts[aa]||0})},Wt={s:la,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Ya(function(r){return arguments.length?Bn.scrollTo(_n.sc(),r):Bn.pageYOffset||er[la]||tr[la]||Ts[la]||0})},vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Qt.utils.toArray)(e)[0]||(typeof e=="string"&&Qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},DM=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},fr=function(e,t){var n=t.s,i=t.sc;ho(e)&&(e=er.scrollingElement||tr);var s=nt.indexOf(e),o=i===Wt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||hn(e,"scroll",ru);var a=nt[s+o],l=a||(nt[s+o]=Ya(ar(e,n),!0)||(ho(e)?i:Ya(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Qt.getProperty(e,"scrollBehavior")==="smooth"),l},su=function(e,t,n){var i=e,s=e,o=uo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=uo();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,p=s,m=uo();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Ks=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},gp=function(){bs=Qt.core.globals().ScrollTrigger,bs&&bs.core&&PM()},vp=function(e){return Qt=e||mp(),!Ca&&Qt&&typeof document<"u"&&document.body&&(Bn=window,er=document,tr=er.documentElement,Ts=er.body,dp=[Bn,er,tr,Ts],Qt.utils.clamp,pp=Qt.core.context||function(){},wr="onpointerenter"in Ts?"pointer":"mouse",fp=Bt.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,oi=Bt.eventTypes=("ontouchstart"in tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _p=0},500),Ca=1),bs||gp(),Ca};_n.op=Wt;nt.cache=0;var Bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ca||vp(Qt)||console.warn("Please gsap.registerPlugin(Observer)"),bs||gp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,M=n.onRelease,R=n.onRight,A=n.onLeft,T=n.onUp,D=n.onDown,F=n.onChangeX,v=n.onChangeY,b=n.onChange,N=n.onToggleX,k=n.onToggleY,V=n.onHover,Z=n.onHoverEnd,B=n.onMove,$=n.ignoreCheck,W=n.isNormalizer,re=n.onGestureStart,C=n.onGestureEnd,ae=n.onWheel,Be=n.onEnable,Xe=n.onDisable,Y=n.onClick,Q=n.scrollSpeed,fe=n.capture,oe=n.allowClicks,be=n.lockAxis,ye=n.onLockAxis;this.target=a=vn(a)||tr,this.vars=n,d&&(d=Qt.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(Ts).lineHeight)||22);var We,Ve,Ne,P,st,Oe,ze,O=this,je=0,De=0,w=n.passive||!u&&n.passive!==!1,S=fr(a,_n),G=fr(a,Wt),j=S(),te=G(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&oi[0]==="pointerdown",Se=ho(a),ie=a.ownerDocument||er,de=[0,0,0],He=[0,0,0],ne=0,ve=function(){return ne=uo()},xe=function(Ee,ct){return(O.event=Ee)&&d&&DM(Ee.target,d)||ct&&K&&Ee.pointerType!=="touch"||$&&$(Ee,ct)},Ue=function(){O._vx.reset(),O._vy.reset(),Ve.pause(),f&&f(O)},ge=function(){var Ee=O.deltaX=gf(de),ct=O.deltaY=gf(He),pe=Math.abs(Ee)>=i,Le=Math.abs(ct)>=i;b&&(pe||Le)&&b(O,Ee,ct,de,He),pe&&(R&&O.deltaX>0&&R(O),A&&O.deltaX<0&&A(O),F&&F(O),N&&O.deltaX<0!=je<0&&N(O),je=O.deltaX,de[0]=de[1]=de[2]=0),Le&&(D&&O.deltaY>0&&D(O),T&&O.deltaY<0&&T(O),v&&v(O),k&&O.deltaY<0!=De<0&&k(O),De=O.deltaY,He[0]=He[1]=He[2]=0),(P||Ne)&&(B&&B(O),Ne&&(p&&Ne===1&&p(O),y&&y(O),Ne=0),P=!1),Oe&&!(Oe=!1)&&ye&&ye(O),st&&(ae(O),st=!1),We=0},Ye=function(Ee,ct,pe){de[pe]+=Ee,He[pe]+=ct,O._vx.update(Ee),O._vy.update(ct),c?We||(We=requestAnimationFrame(ge)):ge()},Fe=function(Ee,ct){be&&!ze&&(O.axis=ze=Math.abs(Ee)>Math.abs(ct)?"x":"y",Oe=!0),ze!=="y"&&(de[2]+=Ee,O._vx.update(Ee,!0)),ze!=="x"&&(He[2]+=ct,O._vy.update(ct,!0)),c?We||(We=requestAnimationFrame(ge)):ge()},ot=function(Ee){if(!xe(Ee,1)){Ee=Ks(Ee,u);var ct=Ee.clientX,pe=Ee.clientY,Le=ct-O.x,Ce=pe-O.y,ke=O.isDragging;O.x=ct,O.y=pe,(ke||(Le||Ce)&&(Math.abs(O.startX-ct)>=s||Math.abs(O.startY-pe)>=s))&&(Ne||(Ne=ke?2:1),ke||(O.isDragging=!0),Fe(Le,Ce))}},L=O.onPress=function(we){xe(we,1)||we&&we.button||(O.axis=ze=null,Ve.pause(),O.isPressed=!0,we=Ks(we),je=De=0,O.startX=O.x=we.clientX,O.startY=O.y=we.clientY,O._vx.reset(),O._vy.reset(),hn(W?a:ie,oi[1],ot,w,!0),O.deltaX=O.deltaY=0,x&&x(O))},ee=O.onRelease=function(we){if(!xe(we,1)){un(W?a:ie,oi[1],ot,!0);var Ee=!isNaN(O.y-O.startY),ct=O.isDragging,pe=ct&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Le=Ks(we);!pe&&Ee&&(O._vx.reset(),O._vy.reset(),u&&oe&&Qt.delayedCall(.08,function(){if(uo()-ne>300&&!we.defaultPrevented){if(we.target.click)we.target.click();else if(ie.createEvent){var Ce=ie.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,Bn,1,Le.screenX,Le.screenY,Le.clientX,Le.clientY,!1,!1,!1,!1,0,null),we.target.dispatchEvent(Ce)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&ct&&!W&&Ve.restart(!0),Ne&&ge(),m&&ct&&m(O),M&&M(O,pe)}},q=function(Ee){return Ee.touches&&Ee.touches.length>1&&(O.isGesturing=!0)&&re(Ee,O.isDragging)},J=function(){return(O.isGesturing=!1)||C(O)},le=function(Ee){if(!xe(Ee)){var ct=S(),pe=G();Ye((ct-j)*Q,(pe-te)*Q,1),j=ct,te=pe,f&&Ve.restart(!0)}},ce=function(Ee){if(!xe(Ee)){Ee=Ks(Ee,u),ae&&(st=!0);var ct=(Ee.deltaMode===1?l:Ee.deltaMode===2?Bn.innerHeight:1)*_;Ye(Ee.deltaX*ct,Ee.deltaY*ct,0),f&&!W&&Ve.restart(!0)}},qe=function(Ee){if(!xe(Ee)){var ct=Ee.clientX,pe=Ee.clientY,Le=ct-O.x,Ce=pe-O.y;O.x=ct,O.y=pe,P=!0,f&&Ve.restart(!0),(Le||Ce)&&Fe(Le,Ce)}},gt=function(Ee){O.event=Ee,V(O)},At=function(Ee){O.event=Ee,Z(O)},it=function(Ee){return xe(Ee)||Ks(Ee,u)&&Y(O)};Ve=O._dc=Qt.delayedCall(h||.25,Ue).pause(),O.deltaX=O.deltaY=0,O._vx=su(0,50,!0),O._vy=su(0,50,!0),O.scrollX=S,O.scrollY=G,O.isDragging=O.isGesturing=O.isPressed=!1,pp(this),O.enable=function(we){return O.isEnabled||(hn(Se?ie:a,"scroll",ru),o.indexOf("scroll")>=0&&hn(Se?ie:a,"scroll",le,w,fe),o.indexOf("wheel")>=0&&hn(a,"wheel",ce,w,fe),(o.indexOf("touch")>=0&&fp||o.indexOf("pointer")>=0)&&(hn(a,oi[0],L,w,fe),hn(ie,oi[2],ee),hn(ie,oi[3],ee),oe&&hn(a,"click",ve,!0,!0),Y&&hn(a,"click",it),re&&hn(ie,"gesturestart",q),C&&hn(ie,"gestureend",J),V&&hn(a,wr+"enter",gt),Z&&hn(a,wr+"leave",At),B&&hn(a,wr+"move",qe)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=P=Ne=!1,O._vx.reset(),O._vy.reset(),j=S(),te=G(),we&&we.type&&L(we),Be&&Be(O)),O},O.disable=function(){O.isEnabled&&(gs.filter(function(we){return we!==O&&ho(we.target)}).length||un(Se?ie:a,"scroll",ru),O.isPressed&&(O._vx.reset(),O._vy.reset(),un(W?a:ie,oi[1],ot,!0)),un(Se?ie:a,"scroll",le,fe),un(a,"wheel",ce,fe),un(a,oi[0],L,fe),un(ie,oi[2],ee),un(ie,oi[3],ee),un(a,"click",ve,!0),un(a,"click",it),un(ie,"gesturestart",q),un(ie,"gestureend",J),un(a,wr+"enter",gt),un(a,wr+"leave",At),un(a,wr+"move",qe),O.isEnabled=O.isPressed=O.isDragging=!1,Xe&&Xe(O))},O.kill=O.revert=function(){O.disable();var we=gs.indexOf(O);we>=0&&gs.splice(we,1),Li===O&&(Li=0)},gs.push(O),W&&ho(a)&&(Li=O),O.enable(g)},CM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Bt.version="3.15.0";Bt.create=function(r){return new Bt(r)};Bt.register=vp;Bt.getAll=function(){return gs.slice()};Bt.getById=function(r){return gs.filter(function(e){return e.vars.id===r})[0]};mp()&&Qt.registerPlugin(Bt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Me,fs,tt,pt,On,ht,Gu,qa,Po,fo,to,ca,rn,sl,ou,pn,vf,xf,ds,xp,$l,Sp,dn,au,Mp,yp,$i,lu,Wu,As,Xu,po,cu,Kl,ua=1,sn=Date.now,Zl=sn(),ti=0,no=0,Sf=function(e,t,n){var i=In(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mf=function(e,t){return t&&(!In(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},LM=function r(){return no&&requestAnimationFrame(r)},yf=function(){return sl=1},Ef=function(){return sl=0},hi=function(e){return e},io=function(e){return Math.round(e*1e5)/1e5||0},Ep=function(){return typeof window<"u"},Tp=function(){return Me||Ep()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Gr=function(e){return!!~Gu.indexOf(e)},bp=function(e){return(e==="Height"?Xu:tt["inner"+e])||On["client"+e]||ht["client"+e]},Ap=function(e){return ar(e,"getBoundingClientRect")||(Gr(e)?function(){return Ia.width=tt.innerWidth,Ia.height=Xu,Ia}:function(){return Ci(e)})},UM=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=ar(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?bp(s):e["client"+s])||0}},IM=function(e,t){return!t||~xi.indexOf(e)?Ap(e):function(){return Ia}},gi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ar(e,n))?o()-Ap(e)()[s]:Gr(e)?(On[n]||ht[n])-bp(i):e[n]-e["offset"+i])},ha=function(e,t){for(var n=0;n<ds.length;n+=3)(!t||~t.indexOf(ds[n+1]))&&e(ds[n],ds[n+1],ds[n+2])},In=function(e){return typeof e=="string"},an=function(e){return typeof e=="function"},ro=function(e){return typeof e=="number"},Rr=function(e){return typeof e=="object"},Zs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},cs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},us=Math.abs,wp="left",Rp="top",Yu="right",qu="bottom",Br="width",zr="height",mo="Right",_o="Left",go="Top",vo="Bottom",kt="padding",Kn="margin",zs="Width",$u="Height",Gt="px",Zn=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},NM=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Tf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ci=function(e,t){var n=t&&Zn(e)[ou]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},$a=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Cp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},OM=function(e){return function(t){return Me.utils.snap(Cp(e),t)}},Ku=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},FM=function(e){return function(t,n){return Ku(Cp(e))(t,n.direction)}},fa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Zt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},da=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},bf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},pa={toggleActions:"play",anticipatePin:0},Ka={top:0,left:0,center:.5,bottom:1,right:1},Pa=function(e,t){if(In(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ka?Ka[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ma=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=pt.createElement("div"),g=Gr(n)||ar(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?ht:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,x=y?c:u,M="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(i===Wt?Yu:qu)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Da(_,0,i,y),_},Da=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+zs]=1,s["border"+a+zs]=0,s[n.p]=t+"px",Me.set(e,s)},Qe=[],uu={},Do,Af=function(){return sn()-ti>34&&(Do||(Do=requestAnimationFrame(Ii)))},hs=function(){(!dn||!dn.isPressed||dn.startX>ht.clientWidth)&&(nt.cache++,dn?Do||(Do=requestAnimationFrame(Ii)):Ii(),ti||Xr("scrollStart"),ti=sn())},jl=function(){yp=tt.innerWidth,Mp=tt.innerHeight},so=function(e){nt.cache++,(e===!0||!rn&&!Sp&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!au||yp!==tt.innerWidth||Math.abs(tt.innerHeight-Mp)>tt.innerHeight*.25))&&qa.restart(!0)},Wr={},BM=[],Pp=function r(){return Kt(et,"scrollEnd",r)||Ur(!0)},Xr=function(e){return Wr[e]&&Wr[e].map(function(t){return t()})||BM},Un=[],Dp=function(e){for(var t=0;t<Un.length;t+=5)(!e||Un[t+4]&&Un[t+4].query===e)&&(Un[t].style.cssText=Un[t+1],Un[t].getBBox&&Un[t].setAttribute("transform",Un[t+2]||""),Un[t+3].uncache=1)},Lp=function(){return nt.forEach(function(e){return an(e)&&++e.cacheID&&(e.rec=e())})},Zu=function(e,t){var n;for(pn=0;pn<Qe.length;pn++)n=Qe[pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));po=!0,t&&Dp(t),t||Xr("revert")},Up=function(e,t){nt.cache++,(t||!mn)&&nt.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),In(e)&&(tt.history.scrollRestoration=Wu=e)},mn,kr=0,wf,zM=function(){if(wf!==kr){var e=wf=kr;requestAnimationFrame(function(){return e===kr&&Ur(!0)})}},Ip=function(){ht.appendChild(As),Xu=!dn&&As.offsetHeight||tt.innerHeight,ht.removeChild(As)},Rf=function(e){return Po(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ur=function(e,t){if(On=pt.documentElement,ht=pt.body,Gu=[tt,pt,On,ht],ti&&!e&&!po){Zt(et,"scrollEnd",Pp);return}Ip(),mn=et.isRefreshing=!0,po||Lp();var n=Xr("refreshInit");xp&&et.sort(),t||Zu(),nt.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),po=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),cu=1,Rf(!0),Qe.forEach(function(i){var s=gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Rf(!1),cu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Up(Wu,1),qa.pause(),kr++,mn=2,Ii(2),Qe.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=et.isRefreshing=!1,Xr("refresh")},hu=0,La=1,xo,Ii=function(e){if(e===2||!mn&&!po){et.isUpdating=!0,xo&&xo.update(0);var t=Qe.length,n=sn(),i=n-Zl>=50,s=t&&Qe[0].scroll();if(La=hu>s?-1:1,mn||(hu=s),i&&(ti&&!sl&&n-ti>200&&(ti=0,Xr("scrollEnd")),to=Zl,Zl=n),La<0){for(pn=t;pn-- >0;)Qe[pn]&&Qe[pn].update(0,i);La=1}else for(pn=0;pn<t;pn++)Qe[pn]&&Qe[pn].update(0,i);et.isUpdating=!1}Do=0},fu=[wp,Rp,qu,Yu,Kn+vo,Kn+mo,Kn+go,Kn+_o,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ua=fu.concat([Br,zr,"boxSizing","max"+zs,"max"+$u,"position",Kn,kt,kt+go,kt+mo,kt+vo,kt+_o]),kM=function(e,t,n){ws(n);var i=e._gsap;if(i.spacerIsNative)ws(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Jl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=fu.length,o=t.style,a=e.style,l;s--;)l=fu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[qu]=a[Yu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Br]=$a(e,_n)+Gt,o[zr]=$a(e,Wt)+Gt,o[kt]=a[Kn]=a[Rp]=a[wp]="0",ws(i),a[Br]=a["max"+zs]=n[Br],a[zr]=a["max"+$u]=n[zr],a[kt]=n[kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},HM=/([A-Z])/g,ws=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(HM,"-$1").toLowerCase())}},_a=function(e){for(var t=Ua.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ua[s],n[Ua[s]]);return i.t=e,i},VM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ia={left:0,top:0},Cf=function(e,t,n,i,s,o,a,l,c,u,f,h,d,_){an(e)&&(e=e(l)),In(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Pa("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),ro(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Da(a,n,i,!0);else{an(t)&&(t=t(l));var x=(e||"0").split(" "),M,R,A,T;y=vn(t,l)||ht,M=Ci(y)||{},(!M||!M.left&&!M.top)&&Zn(y).display==="none"&&(T=y.style.display,y.style.display="block",M=Ci(y),T?y.style.display=T:y.style.removeProperty("display")),R=Pa(x[0],M[i.d]),A=Pa(x[1]||"0",n),e=M[i.p]-c[i.p]-u+R+s-A,a&&Da(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var D=e+n,F=o._isStart;p="scroll"+i.d2,Da(o,D,i,F&&D>20||!F&&(f?Math.max(ht[p],On[p]):o.parentNode[p])<=D+1),f&&(c=Ci(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Gt))}return d&&y&&(p=Ci(y),d.seek(h),m=Ci(y),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},GM=/(webkit|moz|length|cssText|inset)/i,Pf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ht){e._stOrig=s.cssText,a=Zn(e);for(o in a)!+o&&!GM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},Np=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ga=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},Df=function(e,t){var n=fr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=Np(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Ii()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Me.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Zt(e,"wheel",n.wheelHandler),et.isTouch&&Zt(e,"touchmove",n.wheelHandler),s},et=function(){function r(t,n){fs||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),lu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!no){this.update=this.refresh=this.kill=hi;return}n=Tf(In(n)||ro(n)||n.nodeType?{trigger:n}:n,pa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,M=s.snap,R=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,D=s.fastScrollEnd,F=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Wt,b=!f&&f!==0,N=vn(n.scroller||tt),k=Me.core.getCache(N),V=Gr(N),Z=("pinType"in n?n.pinType:ar(N,"pinType")||V&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=b&&n.toggleActions.split(" "),W="markers"in n?n.markers:pa.markers,re=V?0:parseFloat(Zn(N)["border"+v.p2+zs])||0,C=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Be=UM(N,V,v),Xe=IM(N,V),Y=0,Q=0,fe=0,oe=fr(N,v),be,ye,We,Ve,Ne,P,st,Oe,ze,O,je,De,w,S,G,j,te,K,Se,ie,de,He,ne,ve,xe,Ue,ge,Ye,Fe,ot,L,ee,q,J,le,ce,qe,gt,At;if(C._startClamp=C._endClamp=!1,C._dir=v,p*=45,C.scroller=N,C.scroll=T?T.time.bind(T):oe,Ve=oe(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(xp=1,n.refreshPriority===-9999&&(xo=C)),k.tweenScroll=k.tweenScroll||{top:Df(N,Wt),left:Df(N,_n)},C.tweenTo=be=k.tweenScroll[v.p],C.scrubDuration=function(pe){q=ro(pe)&&pe,q?ee?ee.duration(pe):ee=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:q,paused:!0,onComplete:function(){return m&&m(C)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),ot=0,l||(l=i.vars.id)),M&&((!Rr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in ht.style&&Me.set(V?[ht,On]:N,{scrollBehavior:"auto"}),nt.forEach(function(pe){return an(pe)&&pe.target===(V?pt.scrollingElement||On:N)&&(pe.smooth=!1)}),We=an(M.snapTo)?M.snapTo:M.snapTo==="labels"?OM(i):M.snapTo==="labelsDirectional"?FM(i):M.directional!==!1?function(pe,Le){return Ku(M.snapTo)(pe,sn()-Q<500?0:Le.direction)}:Me.utils.snap(M.snapTo),J=M.duration||{min:.1,max:2},J=Rr(J)?fo(J.min,J.max):fo(J,J),le=Me.delayedCall(M.delay||q/2||.1,function(){var pe=oe(),Le=sn()-Q<500,Ce=be.tween;if((Le||Math.abs(C.getVelocity())<10)&&!Ce&&!sl&&Y!==pe){var ke=(pe-P)/S,Ut=i&&!b?i.totalProgress():ke,$e=Le?0:(Ut-L)/(sn()-to)*1e3||0,wt=Me.utils.clamp(-ke,1-ke,us($e/2)*$e/.185),It=ke+(M.inertia===!1?0:wt),yt,vt,dt=M,Cn=dt.onStart,Et=dt.onInterrupt,E=dt.onComplete;if(yt=We(It,C),ro(yt)||(yt=It),vt=Math.max(0,Math.round(P+yt*S)),pe<=st&&pe>=P&&vt!==pe){if(Ce&&!Ce._initted&&Ce.data<=us(vt-pe))return;M.inertia===!1&&(wt=yt-ke),be(vt,{duration:J(us(Math.max(us(It-Ut),us(yt-Ut))*.185/$e/.05||0)),ease:M.ease||"power3",data:us(vt-pe),onInterrupt:function(){return le.restart(!0)&&Et&&cs(C,Et)},onComplete:function(){C.update(),Y=oe(),i&&!b&&(ee?ee.resetTo("totalProgress",yt,i._tTime/i._tDur):i.progress(yt)),ot=L=i&&!b?i.totalProgress():C.progress,y&&y(C),E&&cs(C,E)}},pe,wt*S,vt-pe-wt*S),Cn&&cs(C,Cn,be.tween)}}else C.isActive&&Y!==pe&&le.restart(!0)}).pause()),l&&(uu[l]=C),h=C.trigger=vn(h||d!==!0&&d),At=h&&h._gsap&&h._gsap.stRevert,At&&(At=At(C)),d=d===!0?h:vn(d),In(a)&&(a={targets:h,className:a}),d&&(_===!1||_===Kn||(_=!_&&d.parentNode&&d.parentNode.style&&Zn(d.parentNode).display==="flex"?!1:kt),C.pin=d,ye=Me.core.getCache(d),ye.spacer?G=ye.pinState:(A&&(A=vn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),ye.spacerIsNative=!!A,A&&(ye.spacerState=_a(A))),ye.spacer=K=A||pt.createElement("div"),K.classList.add("pin-spacer"),l&&K.classList.add("pin-spacer-"+l),ye.pinState=G=_a(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),C.spacer=K=ye.spacer,Fe=Zn(d),ve=Fe[_+v.os2],ie=Me.getProperty(d),de=Me.quickSetter(d,v.a,Gt),Jl(d,K,Fe),te=_a(d)),W){De=Rr(W)?Tf(W,bf):bf,O=ma("scroller-start",l,N,v,De,0),je=ma("scroller-end",l,N,v,De,0,O),Se=O["offset"+v.op.d2];var it=vn(ar(N,"content")||N);Oe=this.markerStart=ma("start",l,it,v,De,Se,0,T),ze=this.markerEnd=ma("end",l,it,v,De,Se,0,T),T&&(gt=Me.quickSetter([Oe,ze],v.a,Gt)),!Z&&!(xi.length&&ar(N,"fixedMarkers")===!0)&&(NM(V?ht:N),Me.set([O,je],{force3D:!0}),Ue=Me.quickSetter(O,v.a,Gt),Ye=Me.quickSetter(je,v.a,Gt))}if(T){var we=T.vars.onUpdate,Ee=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){C.update(0,0,1),we&&we.apply(T,Ee||[])})}if(C.previous=function(){return Qe[Qe.indexOf(C)-1]},C.next=function(){return Qe[Qe.indexOf(C)+1]},C.revert=function(pe,Le){if(!Le)return C.kill(!0);var Ce=pe!==!1||!C.enabled,ke=rn;Ce!==C.isReverted&&(Ce&&(ce=Math.max(oe(),C.scroll.rec||0),fe=C.progress,qe=i&&i.progress()),Oe&&[Oe,ze,O,je].forEach(function(Ut){return Ut.style.display=Ce?"none":"block"}),Ce&&(rn=C,C.update(Ce)),d&&(!R||!C.isActive)&&(Ce?kM(d,K,G):Jl(d,K,Zn(d),xe)),Ce||C.update(Ce),rn=ke,C.isReverted=Ce)},C.refresh=function(pe,Le,Ce,ke){if(!((rn||!C.enabled)&&!Le)){if(d&&pe&&ti){Zt(r,"scrollEnd",Pp);return}!mn&&ae&&ae(C),rn=C,be.tween&&!Ce&&(be.tween.kill(),be.tween=0),ee&&ee.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Je){return Je.vars.immediateRender&&Je.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ut=Be(),$e=Xe(),wt=T?T.duration():gi(N,v),It=S<=.01||!S,yt=0,vt=ke||0,dt=Rr(Ce)?Ce.end:n.end,Cn=n.endTrigger||h,Et=Rr(Ce)?Ce.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),E=C.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,C),I=h&&Math.max(0,Qe.indexOf(C))||0,z=I,H,U,se,_e,he,ue,Ae,Ie,Te,at,rt,mt,qt;for(W&&Rr(Ce)&&(mt=Me.getProperty(O,v.p),qt=Me.getProperty(je,v.p));z-- >0;)ue=Qe[z],ue.end||ue.refresh(0,1)||(rn=C),Ae=ue.pin,Ae&&(Ae===h||Ae===d||Ae===E)&&!ue.isReverted&&(at||(at=[]),at.unshift(ue),ue.revert(!0,!0)),ue!==Qe[z]&&(I--,z--);for(an(Et)&&(Et=Et(C)),Et=Sf(Et,"start",C),P=Cf(Et,h,Ut,v,oe(),Oe,O,C,$e,re,Z,wt,T,C._startClamp&&"_startClamp")||(d?-.001:0),an(dt)&&(dt=dt(C)),In(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(In(Et)?Et.split(" ")[0]:"")+dt:(yt=Pa(dt.substr(2),Ut),dt=In(Et)?Et:(T?Me.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,P):P)+yt,Cn=h)),dt=Sf(dt,"end",C),st=Math.max(P,Cf(dt||(Cn?"100% 0":wt),Cn,Ut,v,oe()+yt,ze,je,C,$e,re,Z,wt,T,C._endClamp&&"_endClamp"))||-.001,yt=0,z=I;z--;)ue=Qe[z]||{},Ae=ue.pin,Ae&&ue.start-ue._pinPush<=P&&!T&&ue.end>0&&(H=ue.end-(C._startClamp?Math.max(0,ue.start):ue.start),(Ae===h&&ue.start-ue._pinPush<P||Ae===E)&&isNaN(Et)&&(yt+=H*(1-ue.progress)),Ae===d&&(vt+=H));if(P+=yt,st+=yt,C._startClamp&&(C._startClamp+=yt),C._endClamp&&!mn&&(C._endClamp=st||-.001,st=Math.min(st,gi(N,v))),S=st-P||(P-=.01)&&.001,It&&(fe=Me.utils.clamp(0,1,Me.utils.normalize(P,st,ce))),C._pinPush=vt,Oe&&yt&&(H={},H[v.a]="+="+yt,E&&(H[v.p]="-="+oe()),Me.set([Oe,ze],H)),d&&!(cu&&C.end>=gi(N,v)))H=Zn(d),_e=v===Wt,se=oe(),He=parseFloat(ie(v.a))+vt,!wt&&st>1&&(rt=(V?pt.scrollingElement||On:N).style,rt={style:rt,value:rt["overflow"+v.a.toUpperCase()]},V&&Zn(ht)["overflow"+v.a.toUpperCase()]!=="scroll"&&(rt.style["overflow"+v.a.toUpperCase()]="scroll")),Jl(d,K,H),te=_a(d),U=Ci(d,!0),Ie=Z&&fr(N,_e?_n:Wt)(),_?(xe=[_+v.os2,S+vt+Gt],xe.t=K,z=_===kt?$a(d,v)+S+vt:0,z&&(xe.push(v.d,z+Gt),K.style.flexBasis!=="auto"&&(K.style.flexBasis=z+Gt)),ws(xe),E&&Qe.forEach(function(Je){Je.pin===E&&Je.vars.pinSpacing!==!1&&(Je._subPinOffset=!0)}),Z&&oe(ce)):(z=$a(d,v),z&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=z+Gt)),Z&&(he={top:U.top+(_e?se-P:Ie)+Gt,left:U.left+(_e?Ie:se-P)+Gt,boxSizing:"border-box",position:"fixed"},he[Br]=he["max"+zs]=Math.ceil(U.width)+Gt,he[zr]=he["max"+$u]=Math.ceil(U.height)+Gt,he[Kn]=he[Kn+go]=he[Kn+mo]=he[Kn+vo]=he[Kn+_o]="0",he[kt]=H[kt],he[kt+go]=H[kt+go],he[kt+mo]=H[kt+mo],he[kt+vo]=H[kt+vo],he[kt+_o]=H[kt+_o],j=VM(G,he,R),mn&&oe(0)),i?(Te=i._initted,$l(1),i.render(i.duration(),!0,!0),ne=ie(v.a)-He+S+vt,ge=Math.abs(S-ne)>1,Z&&ge&&j.splice(j.length-2,2),i.render(0,!0,!0),Te||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),$l(0)):ne=S,rt&&(rt.value?rt.style["overflow"+v.a.toUpperCase()]=rt.value:rt.style.removeProperty("overflow-"+v.a));else if(h&&oe()&&!T)for(U=h.parentNode;U&&U!==ht;)U._pinOffset&&(P-=U._pinOffset,st-=U._pinOffset),U=U.parentNode;at&&at.forEach(function(Je){return Je.revert(!1,!0)}),C.start=P,C.end=st,Ve=Ne=mn?ce:oe(),!T&&!mn&&(Ve<ce&&oe(ce),C.scroll.rec=0),C.revert(!1,!0),Q=sn(),le&&(Y=-1,le.restart(!0)),rn=0,i&&b&&(i._initted||qe)&&i.progress()!==qe&&i.progress(qe||0,!0).render(i.time(),!0,!0),(It||fe!==C.progress||T||g||i&&!i._initted)&&(i&&!b&&(i._initted||fe||i.vars.immediateRender!==!1)&&i.totalProgress(T&&P<-.001&&!fe?Me.utils.normalize(P,st,0):fe,!0),C.progress=It||(Ve-P)/S===fe?0:fe),d&&_&&(K._pinOffset=Math.round(C.progress*ne)),ee&&ee.invalidate(),isNaN(mt)||(mt-=Me.getProperty(O,v.p),qt-=Me.getProperty(je,v.p),ga(O,v,mt),ga(Oe,v,mt-(ke||0)),ga(je,v,qt),ga(ze,v,qt-(ke||0))),It&&!mn&&C.update(),u&&!mn&&!w&&(w=!0,u(C),w=!1)}},C.getVelocity=function(){return(oe()-Ne)/(sn()-to)*1e3||0},C.endAnimation=function(){Zs(C.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?b||Zs(i,C.direction<0,1):Zs(i,i.reversed()))},C.labelToScroll=function(pe){return i&&i.labels&&(P||C.refresh()||P)+i.labels[pe]/i.duration()*S||0},C.getTrailing=function(pe){var Le=Qe.indexOf(C),Ce=C.direction>0?Qe.slice(0,Le).reverse():Qe.slice(Le+1);return(In(pe)?Ce.filter(function(ke){return ke.vars.preventOverlaps===pe}):Ce).filter(function(ke){return C.direction>0?ke.end<=P:ke.start>=st})},C.update=function(pe,Le,Ce){if(!(T&&!Ce&&!pe)){var ke=mn===!0?ce:C.scroll(),Ut=pe?0:(ke-P)/S,$e=Ut<0?0:Ut>1?1:Ut||0,wt=C.progress,It,yt,vt,dt,Cn,Et,E,I;if(Le&&(Ne=Ve,Ve=T?oe():ke,M&&(L=ot,ot=i&&!b?i.totalProgress():$e)),p&&d&&!rn&&!ua&&ti&&(!$e&&P<ke+(ke-Ne)/(sn()-to)*p?$e=1e-4:$e===1&&st>ke+(ke-Ne)/(sn()-to)*p&&($e=.9999)),$e!==wt&&C.enabled){if(It=C.isActive=!!$e&&$e<1,yt=!!wt&&wt<1,Et=It!==yt,Cn=Et||!!$e!=!!wt,C.direction=$e>wt?1:-1,C.progress=$e,Cn&&!rn&&(vt=$e&&!wt?0:$e===1?1:wt===1?2:3,b&&(dt=!Et&&$[vt+1]!=="none"&&$[vt+1]||$[vt],I=i&&(dt==="complete"||dt==="reset"||dt in i))),F&&(Et||I)&&(I||f||!i)&&(an(F)?F(C):C.getTrailing(F).forEach(function(se){return se.endAnimation()})),b||(ee&&!rn&&!ua?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",$e,i._tTime/i._tDur):(ee.vars.totalProgress=$e,ee.invalidate().restart())):i&&i.totalProgress($e,!!(rn&&(Q||pe)))),d){if(pe&&_&&(K.style[_+v.os2]=ve),!Z)de(io(He+ne*$e));else if(Cn){if(E=!pe&&$e>wt&&st+1>ke&&ke+1>=gi(N,v),R)if(!pe&&(It||E)){var z=Ci(d,!0),H=ke-P;Pf(d,ht,z.top+(v===Wt?H:0)+Gt,z.left+(v===Wt?0:H)+Gt)}else Pf(d,K);ws(It||E?j:te),ge&&$e<1&&It||de(He+($e===1&&!E?ne:0))}}M&&!be.tween&&!rn&&!ua&&le.restart(!0),a&&(Et||x&&$e&&($e<1||!Kl))&&Po(a.targets).forEach(function(se){return se.classList[It||x?"add":"remove"](a.className)}),o&&!b&&!pe&&o(C),Cn&&!rn?(b&&(I&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),o&&o(C)),(Et||!Kl)&&(c&&Et&&cs(C,c),B[vt]&&cs(C,B[vt]),x&&($e===1?C.kill(!1,1):B[vt]=0),Et||(vt=$e===1?1:3,B[vt]&&cs(C,B[vt]))),D&&!It&&Math.abs(C.getVelocity())>(ro(D)?D:2500)&&(Zs(C.callbackAnimation),ee?ee.progress(1):Zs(i,dt==="reverse"?1:!$e,1))):b&&o&&!rn&&o(C)}if(Ye){var U=T?ke/T.duration()*(T._caScrollDist||0):ke;Ue(U+(O._isFlipped?1:0)),Ye(U)}gt&&gt(-ke/T.duration()*(T._caScrollDist||0))}},C.enable=function(pe,Le){C.enabled||(C.enabled=!0,Zt(N,"resize",so),V||Zt(N,"scroll",hs),ae&&Zt(r,"refreshInit",ae),pe!==!1&&(C.progress=fe=0,Ve=Ne=Y=oe()),Le!==!1&&C.refresh())},C.getTween=function(pe){return pe&&be?be.tween:ee},C.setPositions=function(pe,Le,Ce,ke){if(T){var Ut=T.scrollTrigger,$e=T.duration(),wt=Ut.end-Ut.start;pe=Ut.start+wt*pe/$e,Le=Ut.start+wt*Le/$e}C.refresh(!1,!1,{start:Mf(pe,Ce&&!!C._startClamp),end:Mf(Le,Ce&&!!C._endClamp)},ke),C.update()},C.adjustPinSpacing=function(pe){if(xe&&pe){var Le=xe.indexOf(v.d)+1;xe[Le]=parseFloat(xe[Le])+pe+Gt,xe[1]=parseFloat(xe[1])+pe+Gt,ws(xe)}},C.disable=function(pe,Le){if(pe!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Le||ee&&ee.pause(),ce=0,ye&&(ye.uncache=1),ae&&Kt(r,"refreshInit",ae),le&&(le.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!V)){for(var Ce=Qe.length;Ce--;)if(Qe[Ce].scroller===N&&Qe[Ce]!==C)return;Kt(N,"resize",so),V||Kt(N,"scroll",hs)}},C.kill=function(pe,Le){C.disable(pe,Le),ee&&!Le&&ee.kill(),l&&delete uu[l];var Ce=Qe.indexOf(C);Ce>=0&&Qe.splice(Ce,1),Ce===pn&&La>0&&pn--,Ce=0,Qe.forEach(function(ke){return ke.scroller===C.scroller&&(Ce=1)}),Ce||mn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Le||i.kill()),Oe&&[Oe,ze,O,je].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),xo===C&&(xo=0),d&&(ye&&(ye.uncache=1),Ce=0,Qe.forEach(function(ke){return ke.pin===d&&Ce++}),Ce||(ye.spacer=0)),n.onKill&&n.onKill(C)},Qe.push(C),C.enable(!1,!1),At&&At(C),i&&i.add&&!S){var ct=C.update;C.update=function(){C.update=ct,nt.cache++,P||st||C.refresh()},Me.delayedCall(.01,C.update),S=.01,P=st=0}else C.refresh();d&&zM()},r.register=function(n){return fs||(Me=n||Tp(),Ep()&&window.document&&r.enable(),fs=no),fs},r.defaults=function(n){if(n)for(var i in n)pa[i]=n[i];return pa},r.disable=function(n,i){no=0,Qe.forEach(function(o){return o[i?"kill":"disable"](n)}),Kt(tt,"wheel",hs),Kt(pt,"scroll",hs),clearInterval(ca),Kt(pt,"touchcancel",hi),Kt(ht,"touchstart",hi),fa(Kt,pt,"pointerdown,touchstart,mousedown",yf),fa(Kt,pt,"pointerup,touchend,mouseup",Ef),qa.kill(),ha(Kt);for(var s=0;s<nt.length;s+=3)da(Kt,nt[s],nt[s+1]),da(Kt,nt[s],nt[s+2])},r.enable=function(){if(tt=window,pt=document,On=pt.documentElement,ht=pt.body,Me){if(Po=Me.utils.toArray,fo=Me.utils.clamp,lu=Me.core.context||hi,$l=Me.core.suppressOverwrites||hi,Wu=tt.history.scrollRestoration||"auto",hu=tt.pageYOffset||0,Me.core.globals("ScrollTrigger",r),ht){no=1,As=document.createElement("div"),As.style.height="100vh",As.style.position="absolute",Ip(),LM(),Bt.register(Me),r.isTouch=Bt.isTouch,$i=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),au=Bt.isTouch===1,Zt(tt,"wheel",hs),Gu=[tt,pt,On,ht],Me.matchMedia?(r.matchMedia=function(u){var f=Me.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Me.addEventListener("matchMediaInit",function(){Lp(),Zu()}),Me.addEventListener("matchMediaRevert",function(){return Dp()}),Me.addEventListener("matchMedia",function(){Ur(0,1),Xr("matchMedia")}),Me.matchMedia().add("(orientation: portrait)",function(){return jl(),jl})):console.warn("Requires GSAP 3.11.0 or later"),jl(),Zt(pt,"scroll",hs);var n=ht.hasAttribute("style"),i=ht.style,s=i.borderTopStyle,o=Me.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ci(ht),Wt.m=Math.round(a.top+Wt.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ht.setAttribute("style",""),ht.removeAttribute("style")),ca=setInterval(Af,250),Me.delayedCall(.5,function(){return ua=0}),Zt(pt,"touchcancel",hi),Zt(ht,"touchstart",hi),fa(Zt,pt,"pointerdown,touchstart,mousedown",yf),fa(Zt,pt,"pointerup,touchend,mouseup",Ef),ou=Me.utils.checkPrefix("transform"),Ua.push(ou),fs=sn(),qa=Me.delayedCall(.2,Ur).pause(),ds=[pt,"visibilitychange",function(){var u=tt.innerWidth,f=tt.innerHeight;pt.hidden?(vf=u,xf=f):(vf!==u||xf!==f)&&so()},pt,"DOMContentLoaded",Ur,tt,"load",Ur,tt,"resize",so],ha(Zt),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)da(Kt,nt[l],nt[l+1]),da(Kt,nt[l],nt[l+2])}else if(pt){var c=function u(){r.enable(),pt.removeEventListener("DOMContentLoaded",u)};pt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Kl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ca)||(ca=i)&&setInterval(Af,i),"ignoreMobileResize"in n&&(au=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ha(Kt)||ha(Zt,n.autoRefreshEvents||"none"),Sp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),o=nt.indexOf(s),a=Gr(s);~o&&nt.splice(o,a?6:2),i&&(a?xi.unshift(tt,i,ht,i,On,i):xi.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(In(n)?vn(n):n).getBoundingClientRect(),a=o[s?Br:zr]*i||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},r.positionInViewport=function(n,i,s){In(n)&&(n=vn(n));var o=n.getBoundingClientRect(),a=o[s?Br:zr],l=i==null?a/2:i in Ka?Ka[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Wr.killAll||[];Wr={},i.forEach(function(s){return s()})}},r}();et.version="3.15.0";et.saveStyles=function(r){return r?Po(r).forEach(function(e){if(e&&e.style){var t=Un.indexOf(e);t>=0&&Un.splice(t,5),Un.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),lu())}}):Un};et.revert=function(r,e){return Zu(!r,e)};et.create=function(r,e){return new et(r,e)};et.refresh=function(r){return r?so(!0):(fs||et.register())&&Ur(!0)};et.update=function(r){return++nt.cache&&Ii(r===!0?2:0)};et.clearScrollMemory=Up;et.maxScroll=function(r,e){return gi(r,e?_n:Wt)};et.getScrollFunc=function(r,e){return fr(vn(r),e?_n:Wt)};et.getById=function(r){return uu[r]};et.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!ti};et.snapDirectional=Ku;et.addEventListener=function(r,e){var t=Wr[r]||(Wr[r]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(r,e){var t=Wr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};et.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Me.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&an(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return an(s)&&(s=s(),Zt(et,"refresh",function(){return s=e.batchMax()})),Po(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(et.create(c))}),t};var Lf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ql=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===On&&r(ht,t)},va={auto:1,scroll:1},WM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ht&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(va[(l=Zn(s)).overflowY]||va[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Gr(s)&&(va[(l=Zn(s)).overflowY]||va[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Op=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&WM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Zt(pt,Bt.eventTypes[0],If,!1,!0)},onDisable:function(){return Kt(pt,Bt.eventTypes[0],If,!0)}})},XM=/(input|label|select|textarea)/i,Uf,If=function(e){var t=XM.test(e.target.tagName);(t||Uf)&&(e._gsapAllow=!0,Uf=t)},YM=function(e){Rr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=vn(e.target)||On,u=Me.core.globals().ScrollSmoother,f=u&&u.get(),h=$i&&(e.content&&vn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=fr(c,Wt),_=fr(c,_n),g=1,p=(Bt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,m=0,y=an(i)?function(){return i(a)}:function(){return i||2.8},x,M,R=Op(c,e.type,!0,s),A=function(){return M=!1},T=hi,D=hi,F=function(){l=gi(c,Wt),D=fo($i?1:0,l),n&&(T=fo(0,gi(c,_n))),x=kr},v=function(){h._gsap.y=io(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},b=function(){if(M){requestAnimationFrame(A);var W=io(a.deltaY/2),re=D(d.v-W);if(h&&re!==d.v+d.offset){d.offset=re-d.v;var C=io((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=nt.cache,Ii()}return!0}d.offset&&v(),M=!0},N,k,V,Z,B=function(){F(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&Me.set(h,{y:"+=0"}),e.ignoreCheck=function($){return $i&&$.type==="touchmove"&&b()||g>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){M=!1;var $=g;g=io((tt.visualViewport&&tt.visualViewport.scale||1)/p),N.pause(),$!==g&&Ql(c,g>1.01?!0:n?!1:"x"),k=_(),V=d(),F(),x=kr},e.onRelease=e.onGestureStart=function($,W){if(d.offset&&v(),!W)Z.restart(!0);else{nt.cache++;var re=y(),C,ae;n&&(C=_(),ae=C+re*.05*-$.velocityX/.227,re*=Lf(_,C,ae,gi(c,_n)),N.vars.scrollX=T(ae)),C=d(),ae=C+re*.05*-$.velocityY/.227,re*=Lf(d,C,ae,gi(c,Wt)),N.vars.scrollY=D(ae),N.invalidate().duration(re).play(.01),($i&&N.vars.scrollY>=l||C>=l-1)&&Me.to({},{onUpdate:B,duration:re})}o&&o($)},e.onWheel=function(){N._ts&&N.pause(),sn()-m>1e3&&(x=0,m=sn())},e.onChange=function($,W,re,C,ae){if(kr!==x&&F(),W&&n&&_(T(C[2]===W?k+($.startX-$.x):_()+W-C[1])),re){d.offset&&v();var Be=ae[2]===re,Xe=Be?V+$.startY-$.y:d()+re-ae[1],Y=D(Xe);Be&&Xe!==Y&&(V+=Y-Xe),d(Y)}(re||W)&&Ii()},e.onEnable=function(){Ql(c,n?!1:"x"),et.addEventListener("refresh",B),Zt(tt,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){Ql(c,!0),Kt(tt,"resize",B),et.removeEventListener("refresh",B),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Bt(e),a.iOS=$i,$i&&!d()&&d(1),$i&&Me.ticker.add(hi),Z=a._dc,N=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Np(d,d(),function(){return N.pause()})},onUpdate:Ii,onComplete:Z.vars.onComplete}),a};et.sort=function(r){if(an(r))return Qe.sort(r);var e=tt.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};et.observe=function(r){return new Bt(r)};et.normalizeScroll=function(r){if(typeof r>"u")return dn;if(r===!0&&dn)return dn.enable();if(r===!1){dn&&dn.kill(),dn=r;return}var e=r instanceof Bt?r:YM(r);return dn&&dn.target===e.target&&dn.kill(),Gr(e.target)&&(dn=e),e};et.core={_getVelocityProp:su,_inputObserver:Op,_scrollers:nt,_proxies:xi,bridge:{ss:function(){ti||Xr("scrollStart"),ti=sn()},ref:function(){return rn}}};Tp()&&Me.registerPlugin(et);const qM=`
  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,$M=`
  precision highp float;

  uniform sampler2D uMap;
  uniform vec3 uCameraPosition;

  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    vec4 tex = texture2D(uMap, vUv);

    // Soft vignette around each tile.
    vec2 centered = vUv - 0.5;
    float r = length(centered);
    float edge = 1.0 - smoothstep(0.34, 0.86, r);
    edge = mix(0.78, 1.0, edge);

    // Distance from camera → depth fade.
    float dist = distance(vWorldPosition, uCameraPosition);
    float depth = 1.0 - smoothstep(8.0, 22.0, dist);
    depth = mix(0.48, 1.0, depth);

    // Slight warm tint on near tiles, neutral on far ones — gives a
    // cinematic depth without recolouring the photo.
    vec3 color = tex.rgb;
    float luma = dot(color, vec3(0.299, 0.587, 0.114));
    vec3 cool = vec3(luma) * 0.9;
    color = mix(cool, color, depth);

    color *= edge * depth;

    gl_FragColor = vec4(color, tex.a);
  }
`;co.registerPlugin(et);const bt={tilesPerRevolution:15,revolutions:5,startRadius:3.4,endRadius:2.1,tileHeightRatio:.95,tileSegments:24,spiralGap:.29,tileOverlap:.005,cameraZ:9.5,cameraSmoothing:.075,baseRotationSpeed:.001,scrollRotationMultiplier:.0035,rotationDecay:.9,scrollMultiplier:1.25,cameraYMultiplier:.2,parallaxStrength:.1,spiralOffsetY:-1.4},Lo=document.querySelector(".hero"),Ge={isMobile:window.innerWidth<768,width:Lo.clientWidth,height:Lo.clientHeight,scrollProgress:0,scrollVelocity:0,spinVelocity:0,targetCameraY:0,currentCameraY:0,mouseX:0,mouseY:0,targetTiltX:0,targetTiltZ:0,currentTiltX:0,currentTiltZ:0},ju=new lS({duration:1.2,smoothWheel:!0,smoothTouch:!1,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))});ju.on("scroll",({scroll:r,limit:e,velocity:t})=>{const n=Math.max(e,1);Ge.scrollProgress=Math.min(r/n,1),Ge.scrollVelocity=t,Ge.spinVelocity+=t*bt.scrollRotationMultiplier*bt.scrollMultiplier});ju.on("scroll",et.update);function KM(r){Ge.isMobile||(Ge.mouseX=r.clientX/window.innerWidth*2-1,Ge.mouseY=r.clientY/window.innerHeight*2-1,Ge.targetTiltX=Ge.mouseY*bt.parallaxStrength,Ge.targetTiltZ=Ge.mouseX*bt.parallaxStrength*-.5)}window.addEventListener("mousemove",KM);function Fp(r){ju.raf(r),requestAnimationFrame(Fp)}requestAnimationFrame(Fp);co.context(()=>{co.utils.toArray(".reveal-text").forEach(r=>{co.fromTo(r,{opacity:0,y:50},{opacity:1,y:0,duration:1.4,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 80%",toggleActions:"play none none none",once:!0}})})});window.addEventListener("load",()=>et.refresh());let Za,ci,xn,nr,du;const ec=bt.tilesPerRevolution*bt.revolutions,tc=Math.PI*2/bt.tilesPerRevolution,ZM=new Jx;function jM(r){return new Promise(e=>{ZM.load(r,t=>{t.colorSpace=ai,xn&&(t.anisotropy=xn.capabilities.getMaxAnisotropy()),t.minFilter=Zi,t.magFilter=jn,e(t)},void 0,()=>{const t=new $x(new Uint8Array([22,22,24,255]),1,1,Jn);t.needsUpdate=!0,e(t)})})}const JM=["/images/img1.png","/images/img2.png","/images/img3.png","/images/img4.png","/images/img5.png","/images/img6.png","/images/img7.png","/images/img8.png"];function QM(r,e,t,n){const i=new pr,s=[],o=[],a=[],l=e/2,c=t/2;for(let u=0;u<=n;u++){const f=u/n,h=-l+e*f,d=Math.sin(h)*r,_=Math.cos(h)*r;s.push(d,c,_),s.push(d,-c,_),o.push(f,1),o.push(f,0)}for(let u=0;u<n;u++){const f=u*2,h=f+1,d=f+2,_=f+3;a.push(f,h,d),a.push(h,_,d)}return i.setAttribute("position",new Ui(s,3)),i.setAttribute("uv",new Ui(o,2)),i.setIndex(a),i.computeVertexNormals(),i}function ey(r){const e=tc+bt.tileOverlap,n=2*bt.startRadius*Math.sin(tc/2)*bt.tileHeightRatio,s=(ec-1)*bt.spiralGap/2;for(let o=0;o<ec;o++){const a=o/(ec-1),l=bt.startRadius+(bt.endRadius-bt.startRadius)*a,c=QM(l,e,n,bt.tileSegments),u=r[o%r.length],f=new Fi({vertexShader:qM,fragmentShader:$M,uniforms:{uMap:{value:u},uCameraPosition:{value:ci.position}},side:di,transparent:!0}),h=new mi(c,f);h.position.y=s-o*bt.spiralGap,h.rotation.y=o*tc,nr.add(h)}}function ty(){Ge.isMobile=window.innerWidth<768,Ge.width=Lo.clientWidth,Ge.height=Lo.clientHeight,!(!ci||!xn)&&(ci.aspect=Ge.width/Ge.height,ci.position.z=bt.cameraZ+(Ge.isMobile?3:0),ci.updateProjectionMatrix(),xn.setPixelRatio(Math.min(window.devicePixelRatio,2)),xn.setSize(Ge.width,Ge.height),Ge.isMobile&&(Ge.targetTiltX=0,Ge.targetTiltZ=0))}window.addEventListener("resize",ty);function Bp(){xn&&ci&&Za&&nr&&du&&(du.getDelta(),nr.rotation.y+=bt.baseRotationSpeed+Ge.spinVelocity,Ge.spinVelocity*=bt.rotationDecay,Ge.isMobile||(Ge.currentTiltX+=(Ge.targetTiltX-Ge.currentTiltX)*bt.cameraSmoothing,Ge.currentTiltZ+=(Ge.targetTiltZ-Ge.currentTiltZ)*bt.cameraSmoothing,nr.rotation.x=Ge.currentTiltX,nr.rotation.z=Ge.currentTiltZ),Ge.targetCameraY=-Ge.scrollProgress*bt.cameraYMultiplier*10,Ge.currentCameraY+=(Ge.targetCameraY-Ge.currentCameraY)*bt.cameraSmoothing,ci.position.y=Ge.currentCameraY,ci.lookAt(0,Ge.currentCameraY*.4,0),xn.render(Za,ci)),requestAnimationFrame(Bp)}function Nf(){Za=new qx,ci=new $n(45,Ge.width/Ge.height,.1,100),ci.position.set(0,0,bt.cameraZ+(Ge.isMobile?3:0)),xn=new Yx({antialias:!0,alpha:!0,powerPreference:"high-performance"}),xn.setPixelRatio(Math.min(window.devicePixelRatio,2)),xn.setSize(Ge.width,Ge.height),xn.setClearColor(0,0),xn.domElement.classList.add("hero__canvas"),Lo.appendChild(xn.domElement),nr=new Js,nr.position.y=bt.spiralOffsetY,Za.add(nr),du=new Qx,requestAnimationFrame(Bp),Promise.all(JM.map(jM)).then(r=>{ey(r),xn.domElement.classList.add("is-ready")})}"requestIdleCallback"in window?requestIdleCallback(Nf,{timeout:1500}):requestAnimationFrame(()=>requestAnimationFrame(Nf));document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("hamburger");let e=document.getElementById("mobileMenu");if(r){e||(e=document.createElement("div"),e.id="mobileMenu",e.className="mobile-menu",e.innerHTML=`
        <button class="mobile-close-btn" id="mobileClose">✕</button>
        <div class="mobile-menu__content">
          <a href="/">Home</a>
          <a href="about.html">About</a>
          
          <div class="mobile-services" id="mobileServices">
            <div class="mobile-services-header">Services</div>
            <div class="mobile-services-content">
              <a href="seo.html">SEO</a>
              <a href="paid-media.html">Paid Media</a>
              <a href="social-media.html">Social Media Management</a>
              <a href="digital-strategy.html">Digital Strategy</a>
            </div>
          </div>

          <a href="sectors.html">Sectors</a>
          <a href="contact.html">Contact</a>
        </div>
      `,document.body.appendChild(e));const t=document.getElementById("mobileClose"),n=document.getElementById("mobileServices");r.addEventListener("click",()=>{r.classList.toggle("active"),e.classList.toggle("open")}),t&&t.addEventListener("click",()=>{r.classList.remove("active"),e.classList.remove("open")}),e.addEventListener("click",i=>{i.target.tagName==="A"&&(r.classList.remove("active"),e.classList.remove("open"),setTimeout(()=>{},50))}),n&&n.addEventListener("click",i=>{i.target.classList.contains("mobile-services-header")&&(i.stopImmediatePropagation(),n.classList.toggle("open"))})}});
