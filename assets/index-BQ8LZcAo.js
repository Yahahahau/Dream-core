const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./StartingZone-CplPTEzf.js","./Interactable-B4_qwihw.js","./Terrain-DnAohmfE.js","./WeatherSystem-D6vQ_2JK.js","./AlmondFields-B0XTfQN0.js","./SchoolHallways-yaHGyZFl.js","./Poolrooms-k_37l_M9.js","./WaterSystem-u_ioqBHW.js","./HotelHalls-CnkwbI2B.js","./Elevator-WvwQ1Mg9.js","./VintageApartments-cMj_xkqy.js","./ShoppingMall--juZcloD.js","./HedgeMaze-C6sBRRB2.js","./HallwaysOfTime-DcGM9eVb.js","./EdgeOfTheWorld-m2Un8-UK.js","./BrokenReality-VdPAkZP7.js","./FrozenDream-DdfBcmuS.js","./Anemoia-HHsjONBx.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="170",Sh=0,qo=1,Mh=2,po=1,va=2,vn=3,ln=0,Le=1,_n=2,yn=0,Ri=1,ar=2,Yo=3,$o=4,bh=5,Jn=100,Eh=101,Th=102,wh=103,Ah=104,Rh=200,Ch=201,Ph=202,Lh=203,_a=204,xa=205,Dh=206,Ih=207,Uh=208,Nh=209,Fh=210,Oh=211,Bh=212,zh=213,kh=214,ya=0,Sa=1,Ma=2,Di=3,ba=4,Ea=5,Ta=6,wa=7,mo=0,Hh=1,Vh=2,Nn=0,gc=1,vc=2,_c=3,xc=4,Gh=5,yc=6,go=7,Sc=300,Ii=301,Ui=302,Aa=303,Ra=304,gr=306,or=1e3,Kn=1001,Ca=1002,De=1003,Wh=1004,xs=1005,Ke=1006,Ar=1007,Qn=1008,bn=1009,Mc=1010,bc=1011,hs=1012,vo=1013,ei=1014,rn=1015,on=1016,_o=1017,xo=1018,Ni=1020,Ec=35902,Tc=1021,wc=1022,Qe=1023,Ac=1024,Rc=1025,Ci=1026,Fi=1027,yo=1028,So=1029,Cc=1030,Mo=1031,bo=1033,Ks=33776,Qs=33777,tr=33778,er=33779,Pa=35840,La=35841,Da=35842,Ia=35843,Ua=36196,Na=37492,Fa=37496,Oa=37808,Ba=37809,za=37810,ka=37811,Ha=37812,Va=37813,Ga=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,$a=37819,ja=37820,Ja=37821,nr=36492,Za=36494,Ka=36495,Pc=36283,Qa=36284,to=36285,eo=36286,Xh=3200,qh=3201,Eo=0,Yh=1,Un="",Ue="srgb",ki="srgb-linear",vr="linear",se="srgb",ai=7680,jo=519,$h=512,jh=513,Jh=514,Lc=515,Zh=516,Kh=517,Qh=518,tu=519,no=35044,Jo="300 es",xn=2e3,lr=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,io=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function eu(s,t){return(s%t+t)%t}function Cr(s,t,e){return(1-e)*s+e*t}function sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],E=i[1],x=i[4],_=i[7],F=i[2],w=i[5],L=i[8];return r[0]=a*v+o*E+l*F,r[3]=a*m+o*x+l*w,r[6]=a*p+o*_+l*L,r[1]=c*v+h*E+u*F,r[4]=c*m+h*x+u*w,r[7]=c*p+h*_+u*L,r[2]=f*v+d*E+g*F,r[5]=f*m+d*x+g*w,r[8]=f*p+d*_+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Wt;function Dc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nu(){const s=cr("canvas");return s.style.display="block",s}const Zo={};function ss(s){s in Zo||(Zo[s]=!0,console.warn(s))}function iu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function su(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ru(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?vr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ko=[.64,.33,.3,.6,.15,.06],Qo=[.2126,.7152,.0722],tl=[.3127,.329],el=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[ki]:{primaries:Ko,whitePoint:tl,transfer:vr,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qo,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:Ko,whitePoint:tl,transfer:se,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qo,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let oi;class au{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=cr("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ou=0;class Ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Lr(i[a].image)):r.push(Lr(i[a]))}else r=Lr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?au.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lu=0;class Ae extends Hi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Kn,i=Kn,r=Ke,a=Qn,o=Qe,l=bn,c=Ae.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Sn(),this.name="",this.source=new Ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case or:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case or:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Sc;Ae.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(d+1)/2,F=(p+1)/2,w=(h+f)/4,L=(u+v)/4,D=(g+m)/4;return x>_&&x>F?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=L/n):_>F?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=D/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=L/r,i=D/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cu extends Hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ic(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xe extends cu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hu extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const F=Math.sqrt(x),w=Math.atan2(F,p*E);m=Math.sin(m*w)/F,o=Math.sin(o*w)/F}const _=o*E;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new C,il=new ii;class Fn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),Ss.subVectors(this.max,Yi),li.subVectors(t.a,Yi),ci.subVectors(t.b,Yi),hi.subVectors(t.c,Yi),An.subVectors(ci,li),Rn.subVectors(hi,ci),Bn.subVectors(li,hi);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Bn.z,Bn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Bn.z,0,-Bn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Bn.y,Bn.x,0];return!Ir(e,li,ci,hi,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Ir(e,li,ci,hi,Ss))?!1:(Ms.crossVectors(An,Rn),e=[Ms.x,Ms.y,Ms.z],Ir(e,li,ci,hi,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new C,new C,new C,new C,new C,new C,new C,new C],je=new C,ys=new Fn,li=new C,ci=new C,hi=new C,An=new C,Rn=new C,Bn=new C,Yi=new C,Ss=new C,Ms=new C,zn=new C;function Ir(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zn.fromArray(s,r);const o=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const uu=new Fn,$i=new C,Ur=new C;class si{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Ur)),this.expandByPoint($i.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new C,Nr=new C,bs=new C,Cn=new C,Fr=new C,Es=new C,Or=new C;class _r{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Nr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Nr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Cn.dot(this.direction),l=-Cn.dot(bs),c=Cn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nr).addScaledVector(bs,f),d}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){Fr.subVectors(e,t),Es.subVectors(n,t),Or.crossVectors(Fr,Es);let a=this.direction.dot(Or),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,t);const l=o*this.direction.dot(Es.crossVectors(Cn,Es));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(Cn));if(c<0||l+c>a)return null;const h=-o*Cn.dot(Or);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,g,v,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,v,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,du)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Pn.crossVectors(n,Fe),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Pn.crossVectors(n,Fe)),Pn.normalize(),Ts.crossVectors(Fe,Pn),i[0]=Pn.x,i[4]=Ts.x,i[8]=Fe.x,i[1]=Pn.y,i[5]=Ts.y,i[9]=Fe.y,i[2]=Pn.z,i[6]=Ts.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],x=n[7],_=n[11],F=n[15],w=i[0],L=i[4],D=i[8],M=i[12],y=i[1],P=i[5],A=i[9],U=i[13],B=i[2],W=i[6],I=i[10],H=i[14],N=i[3],X=i[7],Z=i[11],st=i[15];return r[0]=a*w+o*y+l*B+c*N,r[4]=a*L+o*P+l*W+c*X,r[8]=a*D+o*A+l*I+c*Z,r[12]=a*M+o*U+l*H+c*st,r[1]=h*w+u*y+f*B+d*N,r[5]=h*L+u*P+f*W+d*X,r[9]=h*D+u*A+f*I+d*Z,r[13]=h*M+u*U+f*H+d*st,r[2]=g*w+v*y+m*B+p*N,r[6]=g*L+v*P+m*W+p*X,r[10]=g*D+v*A+m*I+p*Z,r[14]=g*M+v*U+m*H+p*st,r[3]=E*w+x*y+_*B+F*N,r[7]=E*L+x*P+_*W+F*X,r[11]=E*D+x*A+_*I+F*Z,r[15]=E*M+x*U+_*H+F*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+v*(+e*l*d-e*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,x=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,F=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,w=e*E+n*x+i*_+r*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/w;return t[0]=E*L,t[1]=(v*f*r-u*m*r-v*i*d+n*m*d+u*i*p-n*f*p)*L,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*L,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*L,t[4]=x*L,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*L,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*L,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*L,t[8]=_*L,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*L,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*L,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*L,t[12]=F*L,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*L,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*L,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,E=l*c,x=l*h,_=l*u,F=n.x,w=n.y,L=n.z;return i[0]=(1-(v+p))*F,i[1]=(d+_)*F,i[2]=(g-x)*F,i[3]=0,i[4]=(d-_)*w,i[5]=(1-(f+p))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+x)*L,i[9]=(m-E)*L,i[10]=(1-(f+v))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const a=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/r,h=1/a,u=1/o;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(o===xn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===lr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=xn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,d=(n+i)*h;let g,v;if(o===xn)g=(a+r)*u,v=-2*u;else if(o===lr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new C,Je=new te,fu=new C(0,0,0),du=new C(1,1,1),Pn=new C,Ts=new C,Fe=new C,sl=new te,rl=new ii;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pu=0;const al=new C,fi=new ii,pn=new te,ws=new C,ji=new C,mu=new C,gu=new ii,ol=new C(1,0,0),ll=new C(0,1,0),cl=new C(0,0,1),hl={type:"added"},vu={type:"removed"},di={type:"childadded",child:null},Br={type:"childremoved",child:null};class fe extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new tn,n=new ii,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Wt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(ji,ws,this.up):pn.lookAt(ws,ji,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(pn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vu),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new C,mn=new C,zr=new C,gn=new C,pi=new C,mi=new C,ul=new C,kr=new C,Hr=new C,Vr=new C,Gr=new ae,Wr=new ae,Xr=new ae;class We{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),mn.subVectors(n,e),zr.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(mn),l=Ze.dot(zr),c=mn.dot(mn),h=mn.dot(zr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Gr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Gr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Gr,r.x),a.addScaledVector(Wr,r.y),a.addScaledVector(Xr,r.z),a}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),mn.subVectors(t,e),Ze.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ze.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;pi.subVectors(i,n),mi.subVectors(r,n),kr.subVectors(t,n);const l=pi.dot(kr),c=mi.dot(kr);if(l<=0&&c<=0)return e.copy(n);Hr.subVectors(t,i);const h=pi.dot(Hr),u=mi.dot(Hr);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(pi,a);Vr.subVectors(t,r);const d=pi.dot(Vr),g=mi.dot(Vr);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(mi,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ul.subVectors(r,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(ul,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},As={h:0,s:0,l:0};function qr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=eu(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qr(a,r,t+1/3),this.g=qr(a,r,t),this.b=qr(a,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return jt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ee(be.r*255,0,255))*65536+Math.round(Ee(be.g*255,0,255))*256+Math.round(Ee(be.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ue){jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(As);const n=Cr(Ln.h,As.h,e),i=Cr(Ln.s,As.s,e),r=Cr(Ln.l,As.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Tt;Tt.NAMES=Nc;let _u=0;class En extends Hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Sn(),this.name="",this.blending=Ri,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gs extends En{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new C,Rs=new nt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),t}}class Fc extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oc extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xu=0;const Ge=new te,Yr=new fe,gi=new C,Oe=new Fn,Ji=new Fn,ye=new C;class ve extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Oc:Fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Oe.min,Ji.min),Oe.expandByPoint(ye),ye.addVectors(Oe.max,Ji.max),Oe.expandByPoint(ye)):(Oe.expandByPoint(Ji.min),Oe.expandByPoint(Ji.max))}Oe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(t,c),ye.add(gi)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new C,l[D]=new C;const c=new C,h=new C,u=new C,f=new nt,d=new nt,g=new nt,v=new C,m=new C;function p(D,M,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(v),o[M].add(v),o[y].add(v),l[D].add(m),l[M].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,M=E.length;D<M;++D){const y=E[D],P=y.start,A=y.count;for(let U=P,B=P+A;U<B;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new C,_=new C,F=new C,w=new C;function L(D){F.fromBufferAttribute(i,D),w.copy(F);const M=o[D];x.copy(M),x.sub(F.multiplyScalar(F.dot(M))).normalize(),_.crossVectors(w,M);const P=_.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,P)}for(let D=0,M=E.length;D<M;++D){const y=E[D],P=y.start,A=y.count;for(let U=P,B=P+A;U<B;U+=3)L(t.getX(U+0)),L(t.getX(U+1)),L(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new te,kn=new _r,Cs=new si,dl=new C,Ps=new C,Ls=new C,Ds=new C,$r=new C,Is=new C,pl=new C,Us=new C;class Pe extends fe{constructor(t=new ve,e=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&($r.fromBufferAttribute(u,t),a?Is.addScaledVector($r,h):Is.addScaledVector($r.sub(e),h))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(Cs.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Cs,dl)===null||kn.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(fl.copy(r).invert(),kn.copy(t.ray).applyMatrix4(fl),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,F=x;_<F;_+=3){const w=o.getX(_),L=o.getX(_+1),D=o.getX(_+2);i=Ns(this,p,t,n,c,h,u,w,L,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);i=Ns(this,a,t,n,c,h,u,E,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,F=x;_<F;_+=3){const w=_,L=_+1,D=_+2;i=Ns(this,p,t,n,c,h,u,w,L,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=m,x=m+1,_=m+2;i=Ns(this,a,t,n,c,h,u,E,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function yu(s,t,e,n,i,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ln,o),l===null)return null;Us.copy(o),Us.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:s}}function Ns(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ps),s.getVertexPosition(l,Ls),s.getVertexPosition(c,Ds);const h=yu(s,t,e,n,Ps,Ls,Ds,pl);if(h){const u=new C;We.getBarycoord(pl,Ps,Ls,Ds,u),i&&(h.uv=We.getInterpolatedAttribute(i,o,l,c,u,new nt)),r&&(h.uv1=We.getInterpolatedAttribute(r,o,l,c,u,new nt)),a&&(h.normal=We.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};We.getNormal(Ps,Ls,Ds,f.normal),h.face=f,h.barycoord=u}return h}class Vi extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(v,m,p,E,x,_,F,w,L,D,M){const y=_/L,P=F/D,A=_/2,U=F/2,B=w/2,W=L+1,I=D+1;let H=0,N=0;const X=new C;for(let Z=0;Z<I;Z++){const st=Z*P-U;for(let vt=0;vt<W;vt++){const Dt=vt*y-A;X[v]=Dt*E,X[m]=st*x,X[p]=B,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(vt/L),u.push(1-Z/D),H+=1}}for(let Z=0;Z<D;Z++)for(let st=0;st<L;st++){const vt=f+st+W*Z,Dt=f+st+W*(Z+1),$=f+(st+1)+W*(Z+1),tt=f+(st+1)+W*Z;l.push(vt,Dt,tt),l.push(Dt,$,tt),N+=6}o.addGroup(d,N,M),d+=N,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=Oi(s[e]);for(const i in n)t[i]=n[i]}return t}function Su(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const us={clone:Oi,merge:Ce};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class we extends En{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Su(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zc extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new C,ml=new nt,gl=new nt;class ze extends zc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,_i=1;class Eu extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(vi,_i,t,e);i.layers=this.layers,this.add(i);const r=new ze(vi,_i,t,e);r.layers=this.layers,this.add(r);const a=new ze(vi,_i,t,e);a.layers=this.layers,this.add(a);const o=new ze(vi,_i,t,e);o.layers=this.layers,this.add(o);const l=new ze(vi,_i,t,e);l.layers=this.layers,this.add(l);const c=new ze(vi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kc extends Ae{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tu extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new kc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vi(5,5,5),r=new we({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:yn});r.uniforms.tEquirect.value=e;const a=new Pe(i,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Ke),new Eu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const jr=new C,wu=new C,Au=new Wt;class $n{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jr.subVectors(n,e).cross(wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Au.getNormalMatrix(t),i=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new si,Fs=new C;class xr{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],E=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+a,f+h,m+g,_+E).normalize(),n[3].setComponents(l-a,f-h,m-g,_-E).normalize(),n[4].setComponents(l-o,f-u,m-v,_-x).normalize(),e===xn)n[5].setComponents(l+o,f+u,m+v,_+x).normalize();else if(e===lr)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ru(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class yr extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const E=p*f-a;for(let x=0;x<c;x++){const _=x*u-r;g.push(_,-E,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const x=E+c*p,_=E+c*(p+1),F=E+1+c*(p+1),w=E+1+c*p;d.push(x,_,w),d.push(_,F,w)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ku=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
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
#endif`,Rf=`struct PhysicalMaterial {
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
}`,Cf=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zf=`#if defined( USE_POINTS_UV )
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
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
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
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
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
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pd=`float getShadowMask() {
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
}`,md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bd=`#ifdef USE_TRANSMISSION
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
#endif`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pd=`uniform sampler2D t2D;
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`#include <common>
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
}`,Fd=`#if DEPTH_PACKING == 3200
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
}`,Od=`#define DISTANCE
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
}`,Bd=`#define DISTANCE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`uniform float scale;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Gd=`#include <common>
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Xd=`#define LAMBERT
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
}`,qd=`#define LAMBERT
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
}`,Yd=`#define MATCAP
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
}`,$d=`#define MATCAP
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
}`,jd=`#define NORMAL
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
}`,Jd=`#define NORMAL
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
}`,Zd=`#define PHONG
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
}`,Kd=`#define PHONG
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
}`,Qd=`#define STANDARD
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
}`,tp=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,op=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Du,alphatest_fragment:Iu,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:Hu,iridescence_fragment:Vu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:$u,color_pars_fragment:ju,color_pars_vertex:Ju,color_vertex:Zu,common:Ku,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:tf,displacementmap_pars_vertex:ef,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:af,colorspace_pars_fragment:of,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Mf,envmap_vertex:ff,fog_vertex:df,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:_f,lights_lambert_fragment:xf,lights_lambert_pars_fragment:yf,lights_pars_begin:Sf,lights_toon_fragment:bf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:wf,lights_physical_fragment:Af,lights_physical_pars_fragment:Rf,lights_fragment_begin:Cf,lights_fragment_maps:Pf,lights_fragment_end:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Nf,map_fragment:Ff,map_pars_fragment:Of,map_particle_fragment:Bf,map_particle_pars_fragment:zf,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Vf,morphcolor_vertex:Gf,morphnormal_vertex:Wf,morphtarget_pars_vertex:Xf,morphtarget_vertex:qf,normal_fragment_begin:Yf,normal_fragment_maps:$f,normal_pars_fragment:jf,normal_pars_vertex:Jf,normal_vertex:Zf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:td,clearcoat_pars_fragment:ed,iridescence_pars_fragment:nd,opaque_fragment:id,packing:sd,premultiplied_alpha_fragment:rd,project_vertex:ad,dithering_fragment:od,dithering_pars_fragment:ld,roughnessmap_fragment:cd,roughnessmap_pars_fragment:hd,shadowmap_pars_fragment:ud,shadowmap_pars_vertex:fd,shadowmap_vertex:dd,shadowmask_pars_fragment:pd,skinbase_vertex:md,skinning_pars_vertex:gd,skinning_vertex:vd,skinnormal_vertex:_d,specularmap_fragment:xd,specularmap_pars_fragment:yd,tonemapping_fragment:Sd,tonemapping_pars_fragment:Md,transmission_fragment:bd,transmission_pars_fragment:Ed,uv_pars_fragment:Td,uv_pars_vertex:wd,uv_vertex:Ad,worldpos_vertex:Rd,background_vert:Cd,background_frag:Pd,backgroundCube_vert:Ld,backgroundCube_frag:Dd,cube_vert:Id,cube_frag:Ud,depth_vert:Nd,depth_frag:Fd,distanceRGBA_vert:Od,distanceRGBA_frag:Bd,equirect_vert:zd,equirect_frag:kd,linedashed_vert:Hd,linedashed_frag:Vd,meshbasic_vert:Gd,meshbasic_frag:Wd,meshlambert_vert:Xd,meshlambert_frag:qd,meshmatcap_vert:Yd,meshmatcap_frag:$d,meshnormal_vert:jd,meshnormal_frag:Jd,meshphong_vert:Zd,meshphong_frag:Kd,meshphysical_vert:Qd,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},ut={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},nn={basic:{uniforms:Ce([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ce([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ce([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ce([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ce([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ce([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ce([ut.points,ut.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ce([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ce([ut.common,ut.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ce([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ce([ut.sprite,ut.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ce([ut.common,ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ce([ut.lights,ut.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};nn.physical={uniforms:Ce([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Os={r:0,b:0,g:0},Vn=new tn,cp=new te;function hp(s,t,e,n,i,r,a){const o=new Tt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function v(E){let x=!1;const _=g(E);_===null?p(o,l):_&&_.isColor&&(p(_,1),x=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===gr)?(h===void 0&&(h=new Pe(new Vi(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:Oi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vn.copy(x.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Vn)),h.material.toneMapped=jt.getTransfer(_.colorSpace)!==se,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pe(new yr(2,2),new we({name:"BackgroundMaterial",uniforms:Oi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=jt.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Os,Bc(s)),n.buffers.color.setClear(Os.r,Os.g,Os.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:v,addToRenderList:m}}function up(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,P,A,U,B){let W=!1;const I=u(U,A,P);r!==I&&(r=I,c(r.object)),W=d(y,U,A,B),W&&g(y,U,A,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(y,P,A,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,A){const U=A.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let W=B[P.id];W===void 0&&(W={},B[P.id]=W);let I=W[U];return I===void 0&&(I=f(l()),W[U]=I),I}function f(y){const P=[],A=[],U=[];for(let B=0;B<e;B++)P[B]=0,A[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:A,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,P,A,U){const B=r.attributes,W=P.attributes;let I=0;const H=A.getAttributes();for(const N in H)if(H[N].location>=0){const Z=B[N];let st=W[N];if(st===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),Z===void 0||Z.attribute!==st||st&&Z.data!==st.data)return!0;I++}return r.attributesNum!==I||r.index!==U}function g(y,P,A,U){const B={},W=P.attributes;let I=0;const H=A.getAttributes();for(const N in H)if(H[N].location>=0){let Z=W[N];Z===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const st={};st.attribute=Z,Z&&Z.data&&(st.data=Z.data),B[N]=st,I++}r.attributes=B,r.attributesNum=I,r.index=U}function v(){const y=r.newAttributes;for(let P=0,A=y.length;P<A;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const A=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;A[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),B[y]!==P&&(s.vertexAttribDivisor(y,P),B[y]=P)}function E(){const y=r.newAttributes,P=r.enabledAttributes;for(let A=0,U=P.length;A<U;A++)P[A]!==y[A]&&(s.disableVertexAttribArray(A),P[A]=0)}function x(y,P,A,U,B,W,I){I===!0?s.vertexAttribIPointer(y,P,A,B,W):s.vertexAttribPointer(y,P,A,U,B,W)}function _(y,P,A,U){v();const B=U.attributes,W=A.getAttributes(),I=P.defaultAttributeValues;for(const H in W){const N=W[H];if(N.location>=0){let X=B[H];if(X===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const Z=X.normalized,st=X.itemSize,vt=t.get(X);if(vt===void 0)continue;const Dt=vt.buffer,$=vt.type,tt=vt.bytesPerElement,ht=$===s.INT||$===s.UNSIGNED_INT||X.gpuType===vo;if(X.isInterleavedBufferAttribute){const it=X.data,bt=it.stride,Lt=X.offset;if(it.isInstancedInterleavedBuffer){for(let Nt=0;Nt<N.locationSize;Nt++)p(N.location+Nt,it.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Nt=0;Nt<N.locationSize;Nt++)m(N.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let Nt=0;Nt<N.locationSize;Nt++)x(N.location+Nt,st/N.locationSize,$,Z,bt*tt,(Lt+st/N.locationSize*Nt)*tt,ht)}else{if(X.isInstancedBufferAttribute){for(let it=0;it<N.locationSize;it++)p(N.location+it,X.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let it=0;it<N.locationSize;it++)m(N.location+it);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let it=0;it<N.locationSize;it++)x(N.location+it,st/N.locationSize,$,Z,st*tt,st/N.locationSize*it*tt,ht)}}else if(I!==void 0){const Z=I[H];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(N.location,Z);break;case 3:s.vertexAttrib3fv(N.location,Z);break;case 4:s.vertexAttrib4fv(N.location,Z);break;default:s.vertexAttrib1fv(N.location,Z)}}}}E()}function F(){D();for(const y in n){const P=n[y];for(const A in P){const U=P[A];for(const B in U)h(U[B].object),delete U[B];delete P[A]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const A in P){const U=P[A];for(const B in U)h(U[B].object),delete U[B];delete P[A]}delete n[y.id]}function L(y){for(const P in n){const A=n[P];if(A[y.id]===void 0)continue;const U=A[y.id];for(const B in U)h(U[B].object),delete U[B];delete A[y.id]}}function D(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function fp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Qe&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const D=L===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==bn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==rn&&!D)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:F,maxSamples:w}}function pp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new $n,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,x=E*4;let _=p.clippingState||null;l.value=_,_=h(g,f,x,d);for(let F=0;F!==x;++F)_[F]=e[F];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(E,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function mp(s){let t=new WeakMap;function e(a,o){return o===Aa?a.mapping=Ii:o===Ra&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===Ra)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wo extends zc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,vl=[.125,.215,.35,.446,.526,.582],Zn=20,Jr=new wo,_l=new Tt;let Zr=null,Kr=0,Qr=0,ta=!1;const jn=(1+Math.sqrt(5))/2,xi=1/jn,xl=[new C(-jn,xi,0),new C(jn,xi,0),new C(-xi,0,jn),new C(xi,0,jn),new C(0,jn,-xi),new C(0,jn,xi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class so{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Kr,Qr),this._renderer.xr.enabled=ta,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:on,format:Qe,colorSpace:ki,depthBuffer:!1},i=yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=vp(r,t,e)}return i}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,i){const o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_l),h.toneMapping=Nn,h.autoClear=!1;const d=new gs({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Pe(new Vi,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(_l),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Bs(i,E*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ii||t.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xl[(i-r-1)%xl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pe(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Zn;m>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const p=[];let E=0;for(let L=0;L<Zn;++L){const D=L/v,M=Math.exp(-D*D/2);p.push(M),L===0?E+=M:L<m&&(E+=2*M)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[i],F=3*_*(i>x-Ti?i-x+Ti:0),w=4*(this._cubeSize-_);Bs(e,F,w,3*_,2*_),l.setRenderTarget(e),l.render(u,Jr)}}function gp(s){const t=[],e=[],n=[];let i=s;const r=s-Ti+1+vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ti?l=vl[a-s+Ti-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){const L=w%3*2/3-1,D=w>2?0:-1,M=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];E.set(M,v*g*w),x.set(f,m*g*w);const y=[w,w,w,w,w,w];_.set(y,p*g*w)}const F=new ve;F.setAttribute("position",new ke(E,v)),F.setAttribute("uv",new ke(x,m)),F.setAttribute("faceIndex",new ke(_,p)),t.push(F),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yl(s,t,e){const n=new Xe(s,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function vp(s,t,e){const n=new Float32Array(Zn),i=new C(0,1,0);return new we({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Sl(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ml(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function _p(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Aa||l===Ra,h=l===Ii||l===Ui;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new so(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new so(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function xp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yp(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let x=0,_=E.length;x<_;x+=3){const F=E[x+0],w=E[x+1],L=E[x+2];f.push(F,w,w,L,L,F)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,_=E.length/3-1;x<_;x+=3){const F=x+0,w=x+1,L=x+2;f.push(F,w,w,L,L,F)}}else return;const m=new(Dc(f)?Oc:Fc)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*v[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bp(s,t,e){const n=new WeakMap,i=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,F=1;_>t.maxTextureSize&&(F=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const w=new Float32Array(_*F*4*u),L=new Uc(w,_,F,u);L.type=rn,L.needsUpdate=!0;const D=x*4;for(let y=0;y<u;y++){const P=m[y],A=p[y],U=E[y],B=_*F*4*y;for(let W=0;W<P.count;W++){const I=W*D;d===!0&&(i.fromBufferAttribute(P,W),w[B+I+0]=i.x,w[B+I+1]=i.y,w[B+I+2]=i.z,w[B+I+3]=0),g===!0&&(i.fromBufferAttribute(A,W),w[B+I+4]=i.x,w[B+I+5]=i.y,w[B+I+6]=i.z,w[B+I+7]=0),v===!0&&(i.fromBufferAttribute(U,W),w[B+I+8]=i.x,w[B+I+9]=i.y,w[B+I+10]=i.z,w[B+I+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:L,size:new nt(_,F)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ep(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Vc extends Ae{constructor(t,e,n,i,r,a,o,l,c,h=Ci){if(h!==Ci&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ci&&(n=ei),n===void 0&&h===Fi&&(n=Ni),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gc=new Ae,bl=new Vc(1,1),Wc=new Uc,Xc=new hu,qc=new kc,El=[],Tl=[],wl=new Float32Array(16),Al=new Float32Array(9),Rl=new Float32Array(4);function Gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=El[i];if(r===void 0&&(r=new Float32Array(i),El[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sr(s,t){let e=Tl[t];e===void 0&&(e=new Int32Array(t),Tl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Tp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function Ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function Rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function Cp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Rl.set(n),s.uniformMatrix2fv(this.addr,!1,Rl),xe(e,n)}}function Pp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Al.set(n),s.uniformMatrix3fv(this.addr,!1,Al),xe(e,n)}}function Lp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;wl.set(n),s.uniformMatrix4fv(this.addr,!1,wl),xe(e,n)}}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function Fp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function kp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(bl.compareFunction=Lc,r=bl):r=Gc,e.setTexture2D(t||r,i)}function Hp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xc,i)}function Vp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qc,i)}function Gp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wc,i)}function Wp(s){switch(s){case 5126:return Tp;case 35664:return wp;case 35665:return Ap;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Ip;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(s,t){s.uniform1fv(this.addr,t)}function qp(s,t){const e=Gi(t,this.size,2);s.uniform2fv(this.addr,e)}function Yp(s,t){const e=Gi(t,this.size,3);s.uniform3fv(this.addr,e)}function $p(s,t){const e=Gi(t,this.size,4);s.uniform4fv(this.addr,e)}function jp(s,t){const e=Gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Jp(s,t){const e=Gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zp(s,t){const e=Gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Kp(s,t){s.uniform1iv(this.addr,t)}function Qp(s,t){s.uniform2iv(this.addr,t)}function tm(s,t){s.uniform3iv(this.addr,t)}function em(s,t){s.uniform4iv(this.addr,t)}function nm(s,t){s.uniform1uiv(this.addr,t)}function im(s,t){s.uniform2uiv(this.addr,t)}function sm(s,t){s.uniform3uiv(this.addr,t)}function rm(s,t){s.uniform4uiv(this.addr,t)}function am(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Gc,r[a])}function om(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Xc,r[a])}function lm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||qc,r[a])}function cm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Wc,r[a])}function hm(s){switch(s){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return $p;case 35674:return jp;case 35675:return Jp;case 35676:return Zp;case 5124:case 35670:return Kp;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wp(e.type)}}class fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hm(e.type)}}class dm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Cl(s,t){s.seq.push(t),s.map[t.id]=t}function pm(s,t,e){const n=s.name,i=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),a=ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cl(e,c===void 0?new um(o,s,t):new fm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new dm(o),Cl(e,u)),e=u}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);pm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Pl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const mm=37297;let gm=0;function vm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ll=new Wt;function _m(s){jt._getMatrix(Ll,jt.workingColorSpace,s);const t=`mat3( ${Ll.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case vr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+vm(s.getShaderSource(t),a)}else return i}function xm(s,t){const e=_m(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ym(s,t){let e;switch(t){case gc:e="Linear";break;case vc:e="Reinhard";break;case _c:e="Cineon";break;case xc:e="ACESFilmic";break;case yc:e="AgX";break;case go:e="Neutral";break;case Gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new C;function Sm(){jt.getLuminanceCoefficients(zs);const s=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function bm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Em(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function rs(s){return s!==""}function Il(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(s){return s.replace(Tm,Am)}const wm=new Map;function Am(s,t){let e=qt[t];if(e===void 0){const n=wm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(s){return s.replace(Rm,Cm)}function Cm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===po?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===va?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case Ui:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function Im(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mo:t="ENVMAP_BLENDING_MULTIPLY";break;case Hh:t="ENVMAP_BLENDING_MIX";break;case Vh:t="ENVMAP_BLENDING_ADD";break}return t}function Um(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Pm(e),c=Lm(e),h=Dm(e),u=Im(e),f=Um(e),d=Mm(e),g=bm(r),v=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),Sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=ro(a),a=Il(a,e),a=Ul(a,e),o=ro(o),o=Il(o,e),o=Ul(o,e),a=Nl(a),o=Nl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+a,_=E+p+o,F=Pl(i,i.VERTEX_SHADER,x),w=Pl(i,i.FRAGMENT_SHADER,_);i.attachShader(v,F),i.attachShader(v,w),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function L(P){if(s.debug.checkShaderErrors){const A=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(F).trim(),B=i.getShaderInfoLog(w).trim();let W=!0,I=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,F,w);else{const H=Dl(i,F,"vertex"),N=Dl(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+A+`
`+H+`
`+N)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(U===""||B==="")&&(I=!1);I&&(P.diagnostics={runnable:W,programLog:A,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(F),i.deleteShader(w),D=new ir(i,v),M=Em(i,v)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,mm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=w,this}let Fm=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bm(t),e.set(t,n)),n}}class Bm{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}}function zm(s,t,e,n,i,r,a){const o=new To,l=new Om,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,A,U){const B=A.fog,W=U.geometry,I=M.isMeshStandardMaterial?A.environment:null,H=(M.isMeshStandardMaterial?e:t).get(M.envMap||I),N=H&&H.mapping===gr?H.image.height:null,X=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=Z!==void 0?Z.length:0;let vt=0;W.morphAttributes.position!==void 0&&(vt=1),W.morphAttributes.normal!==void 0&&(vt=2),W.morphAttributes.color!==void 0&&(vt=3);let Dt,$,tt,ht;if(X){const ie=nn[X];Dt=ie.vertexShader,$=ie.fragmentShader}else Dt=M.vertexShader,$=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),ht=l.getFragmentShaderID(M);const it=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,Nt=U.isBatchedMesh===!0,Jt=!!M.map,Q=!!M.matcap,ot=!!H,R=!!M.aoMap,Ct=!!M.lightMap,rt=!!M.bumpMap,yt=!!M.normalMap,ct=!!M.displacementMap,It=!!M.emissiveMap,_t=!!M.metalnessMap,T=!!M.roughnessMap,S=M.anisotropy>0,V=M.clearcoat>0,j=M.dispersion>0,et=M.iridescence>0,J=M.sheen>0,Et=M.transmission>0,ft=S&&!!M.anisotropyMap,xt=V&&!!M.clearcoatMap,Yt=V&&!!M.clearcoatNormalMap,at=V&&!!M.clearcoatRoughnessMap,St=et&&!!M.iridescenceMap,Ut=et&&!!M.iridescenceThicknessMap,Ot=J&&!!M.sheenColorMap,Mt=J&&!!M.sheenRoughnessMap,$t=!!M.specularMap,Xt=!!M.specularColorMap,oe=!!M.specularIntensityMap,O=Et&&!!M.transmissionMap,dt=Et&&!!M.thicknessMap,Y=!!M.gradientMap,K=!!M.alphaMap,gt=M.alphaTest>0,pt=!!M.alphaHash,Vt=!!M.extensions;let pe=Nn;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(pe=s.toneMapping);const Se={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:Dt,fragmentShader:$,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Nt,batchingColor:Nt&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ki,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:Q,envMap:ot,envMapMode:ot&&H.mapping,envMapCubeUVHeight:N,aoMap:R,lightMap:Ct,bumpMap:rt,normalMap:yt,displacementMap:f&&ct,emissiveMap:It,normalMapObjectSpace:yt&&M.normalMapType===Yh,normalMapTangentSpace:yt&&M.normalMapType===Eo,metalnessMap:_t,roughnessMap:T,anisotropy:S,anisotropyMap:ft,clearcoat:V,clearcoatMap:xt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:at,dispersion:j,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:Ut,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:$t,specularColorMap:Xt,specularIntensityMap:oe,transmission:Et,transmissionMap:O,thicknessMap:dt,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Ri&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:pt,combine:M.combine,mapUv:Jt&&v(M.map.channel),aoMapUv:R&&v(M.aoMap.channel),lightMapUv:Ct&&v(M.lightMap.channel),bumpMapUv:rt&&v(M.bumpMap.channel),normalMapUv:yt&&v(M.normalMap.channel),displacementMapUv:ct&&v(M.displacementMap.channel),emissiveMapUv:It&&v(M.emissiveMap.channel),metalnessMapUv:_t&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:ft&&v(M.anisotropyMap.channel),clearcoatMapUv:xt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(M.sheenRoughnessMap.channel),specularMapUv:$t&&v(M.specularMap.channel),specularColorMapUv:Xt&&v(M.specularColorMap.channel),specularIntensityMapUv:oe&&v(M.specularIntensityMap.channel),transmissionMapUv:O&&v(M.transmissionMap.channel),thicknessMapUv:dt&&v(M.thicknessMap.channel),alphaMapUv:K&&v(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(yt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Jt||K),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:It&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(y,M),x(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const y=g[M.type];let P;if(y){const A=nn[y];P=us.clone(A.uniforms)}else P=M.uniforms;return P}function F(M,y){let P;for(let A=0,U=h.length;A<U;A++){const B=h[A];if(B.cacheKey===y){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Nm(s,y,M,r),h.push(P)),P}function w(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function L(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:F,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:D}}function km(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Hm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ol(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Hm),n.length>1&&n.sort(f||Ol),i.length>1&&i.sort(f||Ol)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Vm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Bl,s.set(n,[a])):i>=r.length?(a=new Bl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Tt};break;case"SpotLight":e={position:new C,direction:new C,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Wm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Xm=0;function qm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ym(s){const t=new Gm,e=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new te,a=new te;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,E=0,x=0,_=0,F=0,w=0,L=0;c.sort(qm);for(let M=0,y=c.length;M<y;M++){const P=c[M],A=P.color,U=P.intensity,B=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=A.r*U,u+=A.g*U,f+=A.b*U;else if(P.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(P.sh.coefficients[I],U);L++}else if(P.isDirectionalLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,N=e.get(P);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,E++}n.directional[d]=I,d++}else if(P.isSpotLight){const I=t.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(A).multiplyScalar(U),I.distance=B,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,n.spot[v]=I;const H=P.shadow;if(P.map&&(n.spotLightMap[F]=P.map,F++,H.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=H.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=W,_++}v++}else if(P.isRectAreaLight){const I=t.get(P);I.color.copy(A).multiplyScalar(U),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=I,m++}else if(P.isPointLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){const H=P.shadow,N=e.get(P);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,N.shadowCameraNear=H.camera.near,N.shadowCameraFar=H.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=I,g++}else if(P.isHemisphereLight){const I=t.get(P);I.skyColor.copy(P.color).multiplyScalar(U),I.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=I,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==E||D.numPointShadows!==x||D.numSpotShadows!==_||D.numSpotMaps!==F||D.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+F-w,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=E,D.numPointShadows=x,D.numSpotShadows=_,D.numSpotMaps=F,D.numLightProbes=L,n.version=Xm++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function zl(s){const t=new Ym(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $m(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new zl(s),t.set(i,[o])):r>=a.length?(o=new zl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class jm extends En{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jm extends En{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`;function Qm(s,t,e){let n=new xr;const i=new nt,r=new nt,a=new ae,o=new jm({depthPacking:qh}),l=new Jm,c={},h=e.maxTextureSize,u={[ln]:Le,[Le]:ln,[_n]:_n},f=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Zm,fragmentShader:Km}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let p=this.type;this.render=function(w,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),A=s.state;A.setBlending(yn),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const U=p!==vn&&this.type===vn,B=p===vn&&this.type!==vn;for(let W=0,I=w.length;W<I;W++){const H=w[W],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const X=N.getFrameExtents();if(i.multiply(X),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,N.mapSize.y=r.y)),N.map===null||U===!0||B===!0){const st=this.type!==vn?{minFilter:De,magFilter:De}:{};N.map!==null&&N.map.dispose(),N.map=new Xe(i.x,i.y,st),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const Z=N.getViewportCount();for(let st=0;st<Z;st++){const vt=N.getViewport(st);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),A.viewport(a),N.updateMatrices(H,st),n=N.getFrustum(),_(L,D,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===vn&&E(N,D),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,P)};function E(w,L){const D=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xe(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(L,null,D,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(L,null,D,d,v,null)}function x(w,L,D,M){let y=null;const P=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=D.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const A=y.uuid,U=L.uuid;let B=c[A];B===void 0&&(B={},c[A]=B);let W=B[U];W===void 0&&(W=y.clone(),B[U]=W,L.addEventListener("dispose",F)),y=W}if(y.visible=L.visible,y.wireframe=L.wireframe,M===vn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:u[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const A=s.properties.get(y);A.light=D}return y}function _(w,L,D,M,y){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===vn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const U=t.update(w),B=w.material;if(Array.isArray(B)){const W=U.groups;for(let I=0,H=W.length;I<H;I++){const N=W[I],X=B[N.materialIndex];if(X&&X.visible){const Z=x(w,X,M,y);w.onBeforeShadow(s,w,L,D,U,Z,N),s.renderBufferDirect(D,null,U,Z,w,N),w.onAfterShadow(s,w,L,D,U,Z,N)}}}else if(B.visible){const W=x(w,B,M,y);w.onBeforeShadow(s,w,L,D,U,W,null),s.renderBufferDirect(D,null,U,W,w,null),w.onAfterShadow(s,w,L,D,U,W,null)}}const A=w.children;for(let U=0,B=A.length;U<B;U++)_(A[U],L,D,M,y)}function F(w){w.target.removeEventListener("dispose",F);for(const D in c){const M=c[D],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const t0={[ya]:Sa,[Ma]:Ta,[ba]:wa,[Di]:Ea,[Sa]:ya,[Ta]:Ma,[wa]:ba,[Ea]:Di};function e0(s,t){function e(){let O=!1;const dt=new ae;let Y=null;const K=new ae(0,0,0,0);return{setMask:function(gt){Y!==gt&&!O&&(s.colorMask(gt,gt,gt,gt),Y=gt)},setLocked:function(gt){O=gt},setClear:function(gt,pt,Vt,pe,Se){Se===!0&&(gt*=pe,pt*=pe,Vt*=pe),dt.set(gt,pt,Vt,pe),K.equals(dt)===!1&&(s.clearColor(gt,pt,Vt,pe),K.copy(dt))},reset:function(){O=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,Y=null,K=null,gt=null;return{setReversed:function(pt){if(dt!==pt){const Vt=t.get("EXT_clip_control");dt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const pe=gt;gt=null,this.setClear(pe)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?it(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(pt){Y!==pt&&!O&&(s.depthMask(pt),Y=pt)},setFunc:function(pt){if(dt&&(pt=t0[pt]),K!==pt){switch(pt){case ya:s.depthFunc(s.NEVER);break;case Sa:s.depthFunc(s.ALWAYS);break;case Ma:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case ba:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case Ta:s.depthFunc(s.GREATER);break;case wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=pt}},setLocked:function(pt){O=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){O=!1,Y=null,K=null,gt=null,dt=!1}}}function i(){let O=!1,dt=null,Y=null,K=null,gt=null,pt=null,Vt=null,pe=null,Se=null;return{setTest:function(ie){O||(ie?it(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(ie){dt!==ie&&!O&&(s.stencilMask(ie),dt=ie)},setFunc:function(ie,Ye,hn){(Y!==ie||K!==Ye||gt!==hn)&&(s.stencilFunc(ie,Ye,hn),Y=ie,K=Ye,gt=hn)},setOp:function(ie,Ye,hn){(pt!==ie||Vt!==Ye||pe!==hn)&&(s.stencilOp(ie,Ye,hn),pt=ie,Vt=Ye,pe=hn)},setLocked:function(ie){O=ie},setClear:function(ie){Se!==ie&&(s.clearStencil(ie),Se=ie)},reset:function(){O=!1,dt=null,Y=null,K=null,gt=null,pt=null,Vt=null,pe=null,Se=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,x=null,_=null,F=null,w=null,L=new Tt(0,0,0),D=0,M=!1,y=null,P=null,A=null,U=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),I=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),I=H>=2);let X=null,Z={};const st=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),Dt=new ae().fromArray(st),$=new ae().fromArray(vt);function tt(O,dt,Y,K){const gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(O,pt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Y;Vt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(dt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}const ht={};ht[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(Di),rt(!1),yt(qo),it(s.CULL_FACE),R(yn);function it(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function bt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Lt(O,dt){return u[O]!==dt?(s.bindFramebuffer(O,dt),u[O]=dt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Nt(O,dt){let Y=d,K=!1;if(O){Y=f.get(dt),Y===void 0&&(Y=[],f.set(dt,Y));const gt=O.textures;if(Y.length!==gt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Vt=gt.length;pt<Vt;pt++)Y[pt]=s.COLOR_ATTACHMENT0+pt;Y.length=gt.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function Jt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Q={[Jn]:s.FUNC_ADD,[Eh]:s.FUNC_SUBTRACT,[Th]:s.FUNC_REVERSE_SUBTRACT};Q[wh]=s.MIN,Q[Ah]=s.MAX;const ot={[Rh]:s.ZERO,[Ch]:s.ONE,[Ph]:s.SRC_COLOR,[_a]:s.SRC_ALPHA,[Fh]:s.SRC_ALPHA_SATURATE,[Uh]:s.DST_COLOR,[Dh]:s.DST_ALPHA,[Lh]:s.ONE_MINUS_SRC_COLOR,[xa]:s.ONE_MINUS_SRC_ALPHA,[Nh]:s.ONE_MINUS_DST_COLOR,[Ih]:s.ONE_MINUS_DST_ALPHA,[Oh]:s.CONSTANT_COLOR,[Bh]:s.ONE_MINUS_CONSTANT_COLOR,[zh]:s.CONSTANT_ALPHA,[kh]:s.ONE_MINUS_CONSTANT_ALPHA};function R(O,dt,Y,K,gt,pt,Vt,pe,Se,ie){if(O===yn){v===!0&&(bt(s.BLEND),v=!1);return}if(v===!1&&(it(s.BLEND),v=!0),O!==bh){if(O!==m||ie!==M){if((p!==Jn||_!==Jn)&&(s.blendEquation(s.FUNC_ADD),p=Jn,_=Jn),ie)switch(O){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ar:s.blendFunc(s.ONE,s.ONE);break;case Yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ar:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,x=null,F=null,w=null,L.set(0,0,0),D=0,m=O,M=ie}return}gt=gt||dt,pt=pt||Y,Vt=Vt||K,(dt!==p||gt!==_)&&(s.blendEquationSeparate(Q[dt],Q[gt]),p=dt,_=gt),(Y!==E||K!==x||pt!==F||Vt!==w)&&(s.blendFuncSeparate(ot[Y],ot[K],ot[pt],ot[Vt]),E=Y,x=K,F=pt,w=Vt),(pe.equals(L)===!1||Se!==D)&&(s.blendColor(pe.r,pe.g,pe.b,Se),L.copy(pe),D=Se),m=O,M=!1}function Ct(O,dt){O.side===_n?bt(s.CULL_FACE):it(s.CULL_FACE);let Y=O.side===Le;dt&&(Y=!Y),rt(Y),O.blending===Ri&&O.transparent===!1?R(yn):R(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const K=O.stencilWrite;o.setTest(K),K&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),It(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){y!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),y=O)}function yt(O){O!==Sh?(it(s.CULL_FACE),O!==P&&(O===qo?s.cullFace(s.BACK):O===Mh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),P=O}function ct(O){O!==A&&(I&&s.lineWidth(O),A=O)}function It(O,dt,Y){O?(it(s.POLYGON_OFFSET_FILL),(U!==dt||B!==Y)&&(s.polygonOffset(dt,Y),U=dt,B=Y)):bt(s.POLYGON_OFFSET_FILL)}function _t(O){O?it(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function T(O){O===void 0&&(O=s.TEXTURE0+W-1),X!==O&&(s.activeTexture(O),X=O)}function S(O,dt,Y){Y===void 0&&(X===null?Y=s.TEXTURE0+W-1:Y=X);let K=Z[Y];K===void 0&&(K={type:void 0,texture:void 0},Z[Y]=K),(K.type!==O||K.texture!==dt)&&(X!==Y&&(s.activeTexture(Y),X=Y),s.bindTexture(O,dt||ht[O]),K.type=O,K.texture=dt)}function V(){const O=Z[X];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(O){Dt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Dt.copy(O))}function Mt(O){$.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function $t(O,dt){let Y=c.get(dt);Y===void 0&&(Y=new WeakMap,c.set(dt,Y));let K=Y.get(O);K===void 0&&(K=s.getUniformBlockIndex(dt,O.name),Y.set(O,K))}function Xt(O,dt){const K=c.get(dt).get(O);l.get(dt)!==K&&(s.uniformBlockBinding(dt,K,O.__bindingPointIndex),l.set(dt,K))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},X=null,Z={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,x=null,_=null,F=null,w=null,L=new Tt(0,0,0),D=0,M=!1,y=null,P=null,A=null,U=null,B=null,Dt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:bt,bindFramebuffer:Lt,drawBuffers:Nt,useProgram:Jt,setBlending:R,setMaterial:Ct,setFlipSided:rt,setCullFace:yt,setLineWidth:ct,setPolygonOffset:It,setScissorTest:_t,activeTexture:T,bindTexture:S,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:St,texImage3D:Ut,updateUBOMapping:$t,uniformBlockBinding:Xt,texStorage2D:Yt,texStorage3D:at,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Ot,viewport:Mt,reset:oe}}function kl(s,t,e,n){const i=n0(n);switch(e){case Tc:return s*t;case Ac:return s*t;case Rc:return s*t*2;case yo:return s*t/i.components*i.byteLength;case So:return s*t/i.components*i.byteLength;case Cc:return s*t*2/i.components*i.byteLength;case Mo:return s*t*2/i.components*i.byteLength;case wc:return s*t*3/i.components*i.byteLength;case Qe:return s*t*4/i.components*i.byteLength;case bo:return s*t*4/i.components*i.byteLength;case Ks:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case La:case Ia:return Math.max(s,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(s,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case nr:case Za:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Pc:case Qa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case to:case eo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n0(s){switch(s){case bn:case Mc:return{byteLength:1,components:1};case hs:case bc:case on:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case ei:case vo:case rn:return{byteLength:4,components:1};case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function i0(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return d?new OffscreenCanvas(T,S):cr("canvas")}function v(T,S,V){let j=1;const et=_t(T);if((et.width>V||et.height>V)&&(j=V/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(j*et.width),Et=Math.floor(j*et.height);u===void 0&&(u=g(J,Et));const ft=S?g(J,Et):u;return ft.width=J,ft.height=Et,ft.getContext("2d").drawImage(T,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Et+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(T,S,V,j,et=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),S===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){const Et=et?vr:jt.getTransfer(j);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=Et===se?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(T,S){let V;return T?S===null||S===ei||S===Ni?V=s.DEPTH24_STENCIL8:S===rn?V=s.DEPTH32F_STENCIL8:S===hs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ei||S===Ni?V=s.DEPTH_COMPONENT24:S===rn?V=s.DEPTH_COMPONENT32F:S===hs&&(V=s.DEPTH_COMPONENT16),V}function F(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==Ke?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){const S=T.target;S.removeEventListener("dispose",w),D(S),S.isVideoTexture&&h.delete(S)}function L(T){const S=T.target;S.removeEventListener("dispose",L),y(S)}function D(T){const S=n.get(T);if(S.__webglInit===void 0)return;const V=T.source,j=f.get(V);if(j){const et=j[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(T),Object.keys(j).length===0&&f.delete(V)}n.remove(T)}function M(T){const S=n.get(T);s.deleteTexture(S.__webglTexture);const V=T.source,j=f.get(V);delete j[S.__cacheKey],a.memory.textures--}function y(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let et=0;et<S.__webglFramebuffer[j].length;et++)s.deleteFramebuffer(S.__webglFramebuffer[j][et]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=T.textures;for(let j=0,et=V.length;j<et;j++){const J=n.get(V[j]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(T)}let P=0;function A(){P=0}function U(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function B(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const V=n.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,T,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function I(T,S){const V=n.get(T);if(T.version>0&&V.__version!==T.version){$(V,T,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function H(T,S){const V=n.get(T);if(T.version>0&&V.__version!==T.version){$(V,T,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function N(T,S){const V=n.get(T);if(T.version>0&&V.__version!==T.version){tt(V,T,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const X={[or]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[Ca]:s.MIRRORED_REPEAT},Z={[De]:s.NEAREST,[Wh]:s.NEAREST_MIPMAP_NEAREST,[xs]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},st={[$h]:s.NEVER,[tu]:s.ALWAYS,[jh]:s.LESS,[Lc]:s.LEQUAL,[Jh]:s.EQUAL,[Qh]:s.GEQUAL,[Zh]:s.GREATER,[Kh]:s.NOTEQUAL};function vt(T,S){if(S.type===rn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ke||S.magFilter===Ar||S.magFilter===xs||S.magFilter===Qn||S.minFilter===Ke||S.minFilter===Ar||S.minFilter===xs||S.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,X[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,X[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,X[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Z[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===De||S.minFilter!==xs&&S.minFilter!==Qn||S.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Dt(T,S){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const j=S.source;let et=f.get(j);et===void 0&&(et={},f.set(j,et));const J=B(S);if(J!==T.__cacheKey){et[J]===void 0&&(et[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[J].usedTimes++;const Et=et[T.__cacheKey];Et!==void 0&&(et[T.__cacheKey].usedTimes--,Et.usedTimes===0&&M(S)),T.__cacheKey=J,T.__webglTexture=et[J].texture}return V}function $(T,S,V){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const et=Dt(T,S),J=S.source;e.bindTexture(j,T.__webglTexture,s.TEXTURE0+V);const Et=n.get(J);if(J.version!==Et.__version||et===!0){e.activeTexture(s.TEXTURE0+V);const ft=jt.getPrimaries(jt.workingColorSpace),xt=S.colorSpace===Un?null:jt.getPrimaries(S.colorSpace),Yt=S.colorSpace===Un||ft===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let at=v(S.image,!1,i.maxTextureSize);at=It(S,at);const St=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type);let Ot=x(S.internalFormat,St,Ut,S.colorSpace,S.isVideoTexture);vt(j,S);let Mt;const $t=S.mipmaps,Xt=S.isVideoTexture!==!0,oe=Et.__version===void 0||et===!0,O=J.dataReady,dt=F(S,at);if(S.isDepthTexture)Ot=_(S.format===Fi,S.type),oe&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ot,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Ot,at.width,at.height,0,St,Ut,null));else if(S.isDataTexture)if($t.length>0){Xt&&oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,$t[0].width,$t[0].height);for(let Y=0,K=$t.length;Y<K;Y++)Mt=$t[Y],Xt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,St,Ut,Mt.data):e.texImage2D(s.TEXTURE_2D,Y,Ot,Mt.width,Mt.height,0,St,Ut,Mt.data);S.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,at.width,at.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,St,Ut,at.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,at.width,at.height,0,St,Ut,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,$t[0].width,$t[0].height,at.depth);for(let Y=0,K=$t.length;Y<K;Y++)if(Mt=$t[Y],S.format!==Qe)if(St!==null)if(Xt){if(O)if(S.layerUpdates.size>0){const gt=kl(Mt.width,Mt.height,S.format,S.type);for(const pt of S.layerUpdates){const Vt=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,pt,Mt.width,Mt.height,1,St,Vt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Mt.width,Mt.height,at.depth,St,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ot,Mt.width,Mt.height,at.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Mt.width,Mt.height,at.depth,St,Ut,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ot,Mt.width,Mt.height,at.depth,0,St,Ut,Mt.data)}else{Xt&&oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,$t[0].width,$t[0].height);for(let Y=0,K=$t.length;Y<K;Y++)Mt=$t[Y],S.format!==Qe?St!==null?Xt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,St,Ut,Mt.data):e.texImage2D(s.TEXTURE_2D,Y,Ot,Mt.width,Mt.height,0,St,Ut,Mt.data)}else if(S.isDataArrayTexture)if(Xt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,at.width,at.height,at.depth),O)if(S.layerUpdates.size>0){const Y=kl(at.width,at.height,S.format,S.type);for(const K of S.layerUpdates){const gt=at.data.subarray(K*Y/at.data.BYTES_PER_ELEMENT,(K+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,at.width,at.height,1,St,Ut,gt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Ut,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,at.width,at.height,at.depth,0,St,Ut,at.data);else if(S.isData3DTexture)Xt?(oe&&e.texStorage3D(s.TEXTURE_3D,dt,Ot,at.width,at.height,at.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Ut,at.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,at.width,at.height,at.depth,0,St,Ut,at.data);else if(S.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(s.TEXTURE_2D,dt,Ot,at.width,at.height);else{let Y=at.width,K=at.height;for(let gt=0;gt<dt;gt++)e.texImage2D(s.TEXTURE_2D,gt,Ot,Y,K,0,St,Ut,null),Y>>=1,K>>=1}}else if($t.length>0){if(Xt&&oe){const Y=_t($t[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ot,Y.width,Y.height)}for(let Y=0,K=$t.length;Y<K;Y++)Mt=$t[Y],Xt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,St,Ut,Mt):e.texImage2D(s.TEXTURE_2D,Y,Ot,St,Ut,Mt);S.generateMipmaps=!1}else if(Xt){if(oe){const Y=_t(at);e.texStorage2D(s.TEXTURE_2D,dt,Ot,Y.width,Y.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Ut,at)}else e.texImage2D(s.TEXTURE_2D,0,Ot,St,Ut,at);m(S)&&p(j),Et.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function tt(T,S,V){if(S.image.length!==6)return;const j=Dt(T,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+V);const J=n.get(et);if(et.version!==J.__version||j===!0){e.activeTexture(s.TEXTURE0+V);const Et=jt.getPrimaries(jt.workingColorSpace),ft=S.colorSpace===Un?null:jt.getPrimaries(S.colorSpace),xt=S.colorSpace===Un||Et===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,St=[];for(let K=0;K<6;K++)!Yt&&!at?St[K]=v(S.image[K],!0,i.maxCubemapSize):St[K]=at?S.image[K].image:S.image[K],St[K]=It(S,St[K]);const Ut=St[0],Ot=r.convert(S.format,S.colorSpace),Mt=r.convert(S.type),$t=x(S.internalFormat,Ot,Mt,S.colorSpace),Xt=S.isVideoTexture!==!0,oe=J.__version===void 0||j===!0,O=et.dataReady;let dt=F(S,Ut);vt(s.TEXTURE_CUBE_MAP,S);let Y;if(Yt){Xt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,$t,Ut.width,Ut.height);for(let K=0;K<6;K++){Y=St[K].mipmaps;for(let gt=0;gt<Y.length;gt++){const pt=Y[gt];S.format!==Qe?Ot!==null?Xt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,$t,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Ot,Mt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,$t,pt.width,pt.height,0,Ot,Mt,pt.data)}}}else{if(Y=S.mipmaps,Xt&&oe){Y.length>0&&dt++;const K=_t(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,$t,K.width,K.height)}for(let K=0;K<6;K++)if(at){Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St[K].width,St[K].height,Ot,Mt,St[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,St[K].width,St[K].height,0,Ot,Mt,St[K].data);for(let gt=0;gt<Y.length;gt++){const Vt=Y[gt].image[K].image;Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Vt.width,Vt.height,Ot,Mt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,$t,Vt.width,Vt.height,0,Ot,Mt,Vt.data)}}else{Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,Mt,St[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,Ot,Mt,St[K]);for(let gt=0;gt<Y.length;gt++){const pt=Y[gt];Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Ot,Mt,pt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,$t,Ot,Mt,pt.image[K])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),J.__version=et.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ht(T,S,V,j,et,J){const Et=r.convert(V.format,V.colorSpace),ft=r.convert(V.type),xt=x(V.internalFormat,Et,ft,V.colorSpace),Yt=n.get(S),at=n.get(V);if(at.__renderTarget=S,!Yt.__hasExternalTextures){const St=Math.max(1,S.width>>J),Ut=Math.max(1,S.height>>J);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,J,xt,St,Ut,S.depth,0,Et,ft,null):e.texImage2D(et,J,xt,St,Ut,0,Et,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,et,at.__webglTexture,0,rt(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,et,at.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(T,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer){const j=S.depthTexture,et=j&&j.isDepthTexture?j.type:null,J=_(S.stencilBuffer,et),Et=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=rt(S);yt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,J,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,T)}else{const j=S.textures;for(let et=0;et<j.length;et++){const J=j[et],Et=r.convert(J.format,J.colorSpace),ft=r.convert(J.type),xt=x(J.internalFormat,Et,ft,J.colorSpace),Yt=rt(S);V&&yt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,xt,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const et=j.__webglTexture,J=rt(S);if(S.depthTexture.format===Ci)yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(S.depthTexture.format===Fi)yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Lt(T){const S=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=j}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");bt(S.__webglFramebuffer,T)}else if(V){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),it(S.__webglDepthbuffer[j],T,!1);else{const et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),it(S.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(T,S,V){const j=n.get(T);S!==void 0&&ht(j.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Lt(T)}function Jt(T){const S=T.texture,V=n.get(T),j=n.get(S);T.addEventListener("dispose",L);const et=T.textures,J=T.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let xt=0;xt<S.mipmaps.length;xt++)V.__webglFramebuffer[ft][xt]=s.createFramebuffer()}else V.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)V.__webglFramebuffer[ft]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ft=0,xt=et.length;ft<xt;ft++){const Yt=n.get(et[ft]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&yt(T)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const xt=et[ft];V.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);const Yt=r.convert(xt.format,xt.colorSpace),at=r.convert(xt.type),St=x(xt.internalFormat,Yt,at,xt.colorSpace,T.isXRRenderTarget===!0),Ut=rt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,St,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),it(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),vt(s.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)ht(V.__webglFramebuffer[ft][xt],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else ht(V.__webglFramebuffer[ft],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ft=0,xt=et.length;ft<xt;ft++){const Yt=et[ft],at=n.get(Yt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),vt(s.TEXTURE_2D,Yt),ht(V.__webglFramebuffer,T,Yt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),m(Yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),vt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)ht(V.__webglFramebuffer[xt],T,S,s.COLOR_ATTACHMENT0,ft,xt);else ht(V.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,ft,0);m(S)&&p(ft),e.unbindTexture()}T.depthBuffer&&Lt(T)}function Q(T){const S=T.textures;for(let V=0,j=S.length;V<j;V++){const et=S[V];if(m(et)){const J=E(T),Et=n.get(et).__webglTexture;e.bindTexture(J,Et),p(J),e.unbindTexture()}}}const ot=[],R=[];function Ct(T){if(T.samples>0){if(yt(T)===!1){const S=T.textures,V=T.width,j=T.height;let et=s.COLOR_BUFFER_BIT;const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(T),ft=S.length>1;if(ft)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Yt=n.get(S[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,V,j,0,0,V,j,et,s.NEAREST),l===!0&&(ot.length=0,R.length=0,ot.push(s.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ot.push(J),R.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Yt=n.get(S[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function rt(T){return Math.min(i.maxSamples,T.samples)}function yt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function It(T,S){const V=T.colorSpace,j=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==ki&&V!==Un&&(jt.getTransfer(V)===se?(j!==Qe||et!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function _t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=A,this.setTexture2D=W,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=N,this.rebindTextures=Nt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=yt}function s0(s,t){function e(n,i=Un){let r;const a=jt.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===_o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return s.BYTE;if(n===bc)return s.SHORT;if(n===hs)return s.UNSIGNED_SHORT;if(n===vo)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===on)return s.HALF_FLOAT;if(n===Tc)return s.ALPHA;if(n===wc)return s.RGB;if(n===Qe)return s.RGBA;if(n===Ac)return s.LUMINANCE;if(n===Rc)return s.LUMINANCE_ALPHA;if(n===Ci)return s.DEPTH_COMPONENT;if(n===Fi)return s.DEPTH_STENCIL;if(n===yo)return s.RED;if(n===So)return s.RED_INTEGER;if(n===Cc)return s.RG;if(n===Mo)return s.RG_INTEGER;if(n===bo)return s.RGBA_INTEGER;if(n===Ks||n===Qs||n===tr||n===er)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Da||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Na)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===ja||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nr||n===Za||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nr)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Qa||n===to||n===eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class r0 extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wi extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a0={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l0=`
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

}`;class c0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new we({vertexShader:o0,fragmentShader:l0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends Hi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new c0,m=e.getContextAttributes();let p=null,E=null;const x=[],_=[],F=new nt;let w=null;const L=new ze;L.viewport=new ae;const D=new ze;D.viewport=new ae;const M=[L,D],y=new r0;let P=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=x[$];return tt===void 0&&(tt=new na,x[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=x[$];return tt===void 0&&(tt=new na,x[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=x[$];return tt===void 0&&(tt=new na,x[$]=tt),tt.getHandSpace()};function U($){const tt=_.indexOf($.inputSource);if(tt===-1)return;const ht=x[tt];ht!==void 0&&(ht.update($.inputSource,$.frame,c||a),ht.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let $=0;$<x.length;$++){const tt=_[$];tt!==null&&(_[$]=null,x[$].disconnect(tt))}P=null,A=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,E=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(F),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Xe(d.framebufferWidth,d.framebufferHeight,{format:Qe,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ht=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Fi:Ci,ht=m.stencil?Ni:ei);const bt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(bt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Xe(f.textureWidth,f.textureHeight,{format:Qe,type:bn,depthTexture:new Vc(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W($){for(let tt=0;tt<$.removed.length;tt++){const ht=$.removed[tt],it=_.indexOf(ht);it>=0&&(_[it]=null,x[it].disconnect(ht))}for(let tt=0;tt<$.added.length;tt++){const ht=$.added[tt];let it=_.indexOf(ht);if(it===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=_.length){_.push(ht),it=Lt;break}else if(_[Lt]===null){_[Lt]=ht,it=Lt;break}if(it===-1)break}const bt=x[it];bt&&bt.connect(ht)}}const I=new C,H=new C;function N($,tt,ht){I.setFromMatrixPosition(tt.matrixWorld),H.setFromMatrixPosition(ht.matrixWorld);const it=I.distanceTo(H),bt=tt.projectionMatrix.elements,Lt=ht.projectionMatrix.elements,Nt=bt[14]/(bt[10]-1),Jt=bt[14]/(bt[10]+1),Q=(bt[9]+1)/bt[5],ot=(bt[9]-1)/bt[5],R=(bt[8]-1)/bt[0],Ct=(Lt[8]+1)/Lt[0],rt=Nt*R,yt=Nt*Ct,ct=it/(-R+Ct),It=ct*-R;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const _t=Nt+ct,T=Jt+ct,S=rt-It,V=yt+(it-It),j=Q*Jt/T*_t,et=ot*Jt/T*_t;$.projectionMatrix.makePerspective(S,V,j,et,_t,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function X($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let tt=$.near,ht=$.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),y.near=D.near=L.near=tt,y.far=D.far=L.far=ht,(P!==y.near||A!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,A=y.far),L.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,y.layers.mask=L.layers.mask|D.layers.mask;const it=$.parent,bt=y.cameras;X(y,it);for(let Lt=0;Lt<bt.length;Lt++)X(bt[Lt],it);bt.length===2?N(y,L,D):y.projectionMatrix.copy(L.projectionMatrix),Z($,y,it)};function Z($,tt,ht){ht===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(ht.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=io*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let st=null;function vt($,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let it=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let Lt=0;Lt<ht.length;Lt++){const Nt=ht[Lt];let Jt=null;if(d!==null)Jt=d.getViewport(Nt);else{const ot=u.getViewSubImage(f,Nt);Jt=ot.viewport,Lt===0&&(t.setRenderTargetTextures(E,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(E))}let Q=M[Lt];Q===void 0&&(Q=new ze,Q.layers.enable(Lt),Q.viewport=new ae,M[Lt]=Q),Q.matrix.fromArray(Nt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Nt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Lt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),it===!0&&y.cameras.push(Q)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Lt=u.getDepthInformation(ht[0]);Lt&&Lt.isValid&&Lt.texture&&v.init(t,Lt,i.renderState)}}for(let ht=0;ht<x.length;ht++){const it=_[ht],bt=x[ht];it!==null&&bt!==void 0&&bt.update(it,tt,c||a)}st&&st($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Dt=new Hc;Dt.setAnimationLoop(vt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const Gn=new tn,u0=new te;function f0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),x=E.envMap,_=E.envMapRotation;x&&(m.envMap.value=x,Gn.copy(_),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Gn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function d0(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const _=x.program;n.uniformBlockBinding(E,_)}function c(E,x){let _=i[E.id];_===void 0&&(g(E),_=h(E),i[E.id]=_,E.addEventListener("dispose",m));const F=x.program;n.updateUBOMapping(E,F);const w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){const x=u();E.__bindingPointIndex=x;const _=s.createBuffer(),F=E.__size,w=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,F,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=i[E.id],_=E.uniforms,F=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,L=_.length;w<L;w++){const D=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,y=D.length;M<y;M++){const P=D[M];if(d(P,w,M,F)===!0){const A=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let W=0;W<U.length;W++){const I=U[W],H=v(I);typeof I=="number"||typeof I=="boolean"?(P.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,A+B,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=0,P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=0,P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=0):(I.toArray(P.__data,B),B+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,A,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(E,x,_,F){const w=E.value,L=x+"_"+_;if(F[L]===void 0)return typeof w=="number"||typeof w=="boolean"?F[L]=w:F[L]=w.clone(),!0;{const D=F[L];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return F[L]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(E){const x=E.uniforms;let _=0;const F=16;for(let L=0,D=x.length;L<D;L++){const M=Array.isArray(x[L])?x[L]:[x[L]];for(let y=0,P=M.length;y<P;y++){const A=M[y],U=Array.isArray(A.value)?A.value:[A.value];for(let B=0,W=U.length;B<W;B++){const I=U[B],H=v(I),N=_%F,X=N%H.boundary,Z=N+X;_+=X,Z!==0&&F-Z<H.storage&&(_+=F-Z),A.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,_+=H.storage}}}const w=_%F;return w>0&&(_+=F-w),E.__size=_,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class p0{constructor(t={}){const{canvas:e=nu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Nn,this.toneMappingExposure=1;const _=this;let F=!1,w=0,L=0,D=null,M=-1,y=null;const P=new ae,A=new ae;let U=null;const B=new Tt(0);let W=0,I=e.width,H=e.height,N=1,X=null,Z=null;const st=new ae(0,0,I,H),vt=new ae(0,0,I,H);let Dt=!1;const $=new xr;let tt=!1,ht=!1;const it=new te,bt=new te,Lt=new C,Nt=new ae,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ot(){return D===null?N:1}let R=n;function Ct(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),R===null){const z="webgl2";if(R=Ct(z,b),R===null)throw Ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let rt,yt,ct,It,_t,T,S,V,j,et,J,Et,ft,xt,Yt,at,St,Ut,Ot,Mt,$t,Xt,oe,O;function dt(){rt=new xp(R),rt.init(),Xt=new s0(R,rt),yt=new dp(R,rt,t,Xt),ct=new e0(R,rt),yt.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),It=new Mp(R),_t=new km,T=new i0(R,rt,ct,_t,yt,Xt,It),S=new mp(_),V=new _p(_),j=new Ru(R),oe=new up(R,j),et=new yp(R,j,It,oe),J=new Ep(R,et,j,It),Ot=new bp(R,yt,T),at=new pp(_t),Et=new zm(_,S,V,rt,yt,oe,at),ft=new f0(_,_t),xt=new Vm,Yt=new $m(rt),Ut=new hp(_,S,V,ct,J,d,l),St=new Qm(_,J,yt),O=new d0(R,It,yt,ct),Mt=new fp(R,rt,It),$t=new Sp(R,rt,It),It.programs=Et.programs,_.capabilities=yt,_.extensions=rt,_.properties=_t,_.renderLists=xt,_.shadowMap=St,_.state=ct,_.info=It}dt();const Y=new h0(_,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(I,H,!1))},this.getSize=function(b){return b.set(I,H)},this.setSize=function(b,z,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=b,H=z,e.width=Math.floor(b*N),e.height=Math.floor(z*N),G===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(I*N,H*N).floor()},this.setDrawingBufferSize=function(b,z,G){I=b,H=z,N=G,e.width=Math.floor(b*G),e.height=Math.floor(z*G),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(st)},this.setViewport=function(b,z,G,q){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,z,G,q),ct.viewport(P.copy(st).multiplyScalar(N).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,z,G,q){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,z,G,q),ct.scissor(A.copy(vt).multiplyScalar(N).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){ct.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(b=!0,z=!0,G=!0){let q=0;if(b){let k=!1;if(D!==null){const lt=D.texture.format;k=lt===bo||lt===Mo||lt===So}if(k){const lt=D.texture.type,mt=lt===bn||lt===ei||lt===hs||lt===Ni||lt===_o||lt===xo,wt=Ut.getClearColor(),At=Ut.getClearAlpha(),Ht=wt.r,Gt=wt.g,Rt=wt.b;mt?(g[0]=Ht,g[1]=Gt,g[2]=Rt,g[3]=At,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Ht,v[1]=Gt,v[2]=Rt,v[3]=At,R.clearBufferiv(R.COLOR,0,v))}else q|=R.COLOR_BUFFER_BIT}z&&(q|=R.DEPTH_BUFFER_BIT),G&&(q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),Yt.dispose(),_t.dispose(),S.dispose(),V.dispose(),J.dispose(),oe.dispose(),O.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Bo),Y.removeEventListener("sessionend",zo),On.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const b=It.autoReset,z=St.enabled,G=St.autoUpdate,q=St.needsUpdate,k=St.type;dt(),It.autoReset=b,St.enabled=z,St.autoUpdate=G,St.needsUpdate=q,St.type=k}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vt(b){const z=b.target;z.removeEventListener("dispose",Vt),pe(z)}function pe(b){Se(b),_t.remove(b)}function Se(b){const z=_t.get(b).programs;z!==void 0&&(z.forEach(function(G){Et.releaseProgram(G)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,G,q,k,lt){z===null&&(z=Jt);const mt=k.isMesh&&k.matrixWorld.determinant()<0,wt=_h(b,z,G,q,k);ct.setMaterial(q,mt);let At=G.index,Ht=1;if(q.wireframe===!0){if(At=et.getWireframeAttribute(G),At===void 0)return;Ht=2}const Gt=G.drawRange,Rt=G.attributes.position;let Qt=Gt.start*Ht,le=(Gt.start+Gt.count)*Ht;lt!==null&&(Qt=Math.max(Qt,lt.start*Ht),le=Math.min(le,(lt.start+lt.count)*Ht)),At!==null?(Qt=Math.max(Qt,0),le=Math.min(le,At.count)):Rt!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,Rt.count));const ce=le-Qt;if(ce<0||ce===1/0)return;oe.setup(k,q,wt,G,At);let Ie,ee=Mt;if(At!==null&&(Ie=j.get(At),ee=$t,ee.setIndex(Ie)),k.isMesh)q.wireframe===!0?(ct.setLineWidth(q.wireframeLinewidth*ot()),ee.setMode(R.LINES)):ee.setMode(R.TRIANGLES);else if(k.isLine){let Pt=q.linewidth;Pt===void 0&&(Pt=1),ct.setLineWidth(Pt*ot()),k.isLineSegments?ee.setMode(R.LINES):k.isLineLoop?ee.setMode(R.LINE_LOOP):ee.setMode(R.LINE_STRIP)}else k.isPoints?ee.setMode(R.POINTS):k.isSprite&&ee.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ee.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ee.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pt=k._multiDrawStarts,un=k._multiDrawCounts,ne=k._multiDrawCount,$e=At?j.get(At).bytesPerElement:1,ri=_t.get(q).currentProgram.getUniforms();for(let Ne=0;Ne<ne;Ne++)ri.setValue(R,"_gl_DrawID",Ne),ee.render(Pt[Ne]/$e,un[Ne])}else if(k.isInstancedMesh)ee.renderInstances(Qt,ce,k.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,un=Math.min(G.instanceCount,Pt);ee.renderInstances(Qt,ce,un)}else ee.render(Qt,ce)};function ie(b,z,G){b.transparent===!0&&b.side===_n&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,_s(b,z,G),b.side=ln,b.needsUpdate=!0,_s(b,z,G),b.side=_n):_s(b,z,G)}this.compile=function(b,z,G=null){G===null&&(G=b),p=Yt.get(G),p.init(z),x.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==G&&b.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const lt=k.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const wt=lt[mt];ie(wt,G,k),q.add(wt)}else ie(lt,G,k),q.add(lt)}),x.pop(),p=null,q},this.compileAsync=function(b,z,G=null){const q=this.compile(b,z,G);return new Promise(k=>{function lt(){if(q.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){k(b);return}setTimeout(lt,10)}rt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Ye=null;function hn(b){Ye&&Ye(b)}function Bo(){On.stop()}function zo(){On.start()}const On=new Hc;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(b){Ye=b,Y.setAnimationLoop(b),b===null?On.stop():On.start()},Y.addEventListener("sessionstart",Bo),Y.addEventListener("sessionend",zo),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,z,D),p=Yt.get(b,x.length),p.init(z),x.push(p),bt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(bt),ht=this.localClippingEnabled,tt=at.init(this.clippingPlanes,ht),m=xt.get(b,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){const lt=_.xr.getDepthSensingMesh();lt!==null&&wr(lt,z,-1/0,_.sortObjects)}wr(b,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(X,Z),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Ut.addToRenderList(m,b),this.info.render.frame++,tt===!0&&at.beginShadows();const G=p.state.shadowsArray;St.render(G,b,z),tt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const lt=z.cameras;if(k.length>0)for(let mt=0,wt=lt.length;mt<wt;mt++){const At=lt[mt];Ho(q,k,b,At)}Q&&Ut.render(b);for(let mt=0,wt=lt.length;mt<wt;mt++){const At=lt[mt];ko(m,b,At,At.viewport)}}else k.length>0&&Ho(q,k,b,z),Q&&Ut.render(b),ko(m,b,z);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(_,b,z),oe.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],tt===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function wr(b,z,G,q){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){q&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(bt);const mt=J.update(b),wt=b.material;wt.visible&&m.push(b,mt,wt,G,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const mt=J.update(b),wt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Nt.copy(mt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(bt)),Array.isArray(wt)){const At=mt.groups;for(let Ht=0,Gt=At.length;Ht<Gt;Ht++){const Rt=At[Ht],Qt=wt[Rt.materialIndex];Qt&&Qt.visible&&m.push(b,mt,Qt,G,Nt.z,Rt)}}else wt.visible&&m.push(b,mt,wt,G,Nt.z,null)}}const lt=b.children;for(let mt=0,wt=lt.length;mt<wt;mt++)wr(lt[mt],z,G,q)}function ko(b,z,G,q){const k=b.opaque,lt=b.transmissive,mt=b.transparent;p.setupLightsView(G),tt===!0&&at.setGlobalState(_.clippingPlanes,G),q&&ct.viewport(P.copy(q)),k.length>0&&vs(k,z,G),lt.length>0&&vs(lt,z,G),mt.length>0&&vs(mt,z,G),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Ho(b,z,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Xe(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?on:bn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const lt=p.state.transmissionRenderTarget[q.id],mt=q.viewport||P;lt.setSize(mt.z,mt.w);const wt=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(B),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Q&&Ut.render(G);const At=_.toneMapping;_.toneMapping=Nn;const Ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),tt===!0&&at.setGlobalState(_.clippingPlanes,q),vs(b,G,q),T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Rt=0,Qt=z.length;Rt<Qt;Rt++){const le=z[Rt],ce=le.object,Ie=le.geometry,ee=le.material,Pt=le.group;if(ee.side===_n&&ce.layers.test(q.layers)){const un=ee.side;ee.side=Le,ee.needsUpdate=!0,Vo(ce,G,q,Ie,ee,Pt),ee.side=un,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt))}_.setRenderTarget(wt),_.setClearColor(B,W),Ht!==void 0&&(q.viewport=Ht),_.toneMapping=At}function vs(b,z,G){const q=z.isScene===!0?z.overrideMaterial:null;for(let k=0,lt=b.length;k<lt;k++){const mt=b[k],wt=mt.object,At=mt.geometry,Ht=q===null?mt.material:q,Gt=mt.group;wt.layers.test(G.layers)&&Vo(wt,z,G,At,Ht,Gt)}}function Vo(b,z,G,q,k,lt){b.onBeforeRender(_,z,G,q,k,lt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(_,z,G,q,b,lt),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=Le,k.needsUpdate=!0,_.renderBufferDirect(G,z,q,k,b,lt),k.side=ln,k.needsUpdate=!0,_.renderBufferDirect(G,z,q,k,b,lt),k.side=_n):_.renderBufferDirect(G,z,q,k,b,lt),b.onAfterRender(_,z,G,q,k,lt)}function _s(b,z,G){z.isScene!==!0&&(z=Jt);const q=_t.get(b),k=p.state.lights,lt=p.state.shadowsArray,mt=k.state.version,wt=Et.getParameters(b,k.state,lt,z,G),At=Et.getProgramCacheKey(wt);let Ht=q.programs;q.environment=b.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(b.isMeshStandardMaterial?V:S).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",Vt),Ht=new Map,q.programs=Ht);let Gt=Ht.get(At);if(Gt!==void 0){if(q.currentProgram===Gt&&q.lightsStateVersion===mt)return Wo(b,wt),Gt}else wt.uniforms=Et.getUniforms(b),b.onBeforeCompile(wt,_),Gt=Et.acquireProgram(wt,At),Ht.set(At,Gt),q.uniforms=wt.uniforms;const Rt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=at.uniform),Wo(b,wt),q.needsLights=yh(b),q.lightsStateVersion=mt,q.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMap.value=k.state.directionalShadowMap,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotShadowMap.value=k.state.spotShadowMap,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMap.value=k.state.pointShadowMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Gt,q.uniformsList=null,Gt}function Go(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=ir.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Wo(b,z){const G=_t.get(b);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function _h(b,z,G,q,k){z.isScene!==!0&&(z=Jt),T.resetTextureUnits();const lt=z.fog,mt=q.isMeshStandardMaterial?z.environment:null,wt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ki,At=(q.isMeshStandardMaterial?V:S).get(q.envMap||mt),Ht=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Rt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,le=!!G.morphAttributes.color;let ce=Nn;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ce=_.toneMapping);const Ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=Ie!==void 0?Ie.length:0,Pt=_t.get(q),un=p.state.lights;if(tt===!0&&(ht===!0||b!==y)){const Ve=b===y&&q.id===M;at.setState(q,b,Ve)}let ne=!1;q.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==un.state.version||Pt.outputColorSpace!==wt||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==At||q.fog===!0&&Pt.fog!==lt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==Ht||Pt.vertexTangents!==Gt||Pt.morphTargets!==Rt||Pt.morphNormals!==Qt||Pt.morphColors!==le||Pt.toneMapping!==ce||Pt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Pt.__version=q.version);let $e=Pt.currentProgram;ne===!0&&($e=_s(q,z,k));let ri=!1,Ne=!1,Xi=!1;const he=$e.getUniforms(),en=Pt.uniforms;if(ct.useProgram($e.program)&&(ri=!0,Ne=!0,Xi=!0),q.id!==M&&(M=q.id,Ne=!0),ri||y!==b){ct.buffers.depth.getReversed()?(it.copy(b.projectionMatrix),su(it),ru(it),he.setValue(R,"projectionMatrix",it)):he.setValue(R,"projectionMatrix",b.projectionMatrix),he.setValue(R,"viewMatrix",b.matrixWorldInverse);const Tn=he.map.cameraPosition;Tn!==void 0&&Tn.setValue(R,Lt.setFromMatrixPosition(b.matrixWorld)),yt.logarithmicDepthBuffer&&he.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&he.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ne=!0,Xi=!0)}if(k.isSkinnedMesh){he.setOptional(R,k,"bindMatrix"),he.setOptional(R,k,"bindMatrixInverse");const Ve=k.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),he.setValue(R,"boneTexture",Ve.boneTexture,T))}k.isBatchedMesh&&(he.setOptional(R,k,"batchingTexture"),he.setValue(R,"batchingTexture",k._matricesTexture,T),he.setOptional(R,k,"batchingIdTexture"),he.setValue(R,"batchingIdTexture",k._indirectTexture,T),he.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&he.setValue(R,"batchingColorTexture",k._colorsTexture,T));const qi=G.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&Ot.update(k,G,$e),(Ne||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,he.setValue(R,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(en.envMap.value=At,en.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(en.envMapIntensity.value=z.environmentIntensity),Ne&&(he.setValue(R,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&xh(en,Xi),lt&&q.fog===!0&&ft.refreshFogUniforms(en,lt),ft.refreshMaterialUniforms(en,q,N,H,p.state.transmissionRenderTarget[b.id]),ir.upload(R,Go(Pt),en,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ir.upload(R,Go(Pt),en,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&he.setValue(R,"center",k.center),he.setValue(R,"modelViewMatrix",k.modelViewMatrix),he.setValue(R,"normalMatrix",k.normalMatrix),he.setValue(R,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ve=q.uniformsGroups;for(let Tn=0,wn=Ve.length;Tn<wn;Tn++){const Xo=Ve[Tn];O.update(Xo,$e),O.bind(Xo,$e)}}return $e}function xh(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function yh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,z,G){_t.get(b.texture).__webglTexture=z,_t.get(b.depthTexture).__webglTexture=G;const q=_t.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const G=_t.get(b);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,G=0){D=b,w=z,L=G;let q=!0,k=null,lt=!1,mt=!1;if(b){const At=_t.get(b);if(At.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(R.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(At.__hasExternalTextures)T.rebindTextures(b,_t.get(b.texture).__webglTexture,_t.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Rt=b.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&_t.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(mt=!0);const Gt=_t.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?k=Gt[z][G]:k=Gt[z],lt=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?k=_t.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[G]:k=Gt,P.copy(b.viewport),A.copy(b.scissor),U=b.scissorTest}else P.copy(st).multiplyScalar(N).floor(),A.copy(vt).multiplyScalar(N).floor(),U=Dt;if(ct.bindFramebuffer(R.FRAMEBUFFER,k)&&q&&ct.drawBuffers(b,k),ct.viewport(P),ct.scissor(A),ct.setScissorTest(U),lt){const At=_t.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,G)}else if(mt){const At=_t.get(b.texture),Ht=z||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,At.__webglTexture,G||0,Ht)}M=-1},this.readRenderTargetPixels=function(b,z,G,q,k,lt,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){ct.bindFramebuffer(R.FRAMEBUFFER,wt);try{const At=b.texture,Ht=At.format,Gt=At.type;if(!yt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-q&&G>=0&&G<=b.height-k&&R.readPixels(z,G,q,k,Xt.convert(Ht),Xt.convert(Gt),lt)}finally{const At=D!==null?_t.get(D).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,z,G,q,k,lt,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const At=b.texture,Ht=At.format,Gt=At.type;if(!yt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-q&&G>=0&&G<=b.height-k){ct.bindFramebuffer(R.FRAMEBUFFER,wt);const Rt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.bufferData(R.PIXEL_PACK_BUFFER,lt.byteLength,R.STREAM_READ),R.readPixels(z,G,q,k,Xt.convert(Ht),Xt.convert(Gt),0);const Qt=D!==null?_t.get(D).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,Qt);const le=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await iu(R,le,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,lt),R.deleteBuffer(Rt),R.deleteSync(le),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,G=0){b.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-G),k=Math.floor(b.image.width*q),lt=Math.floor(b.image.height*q),mt=z!==null?z.x:0,wt=z!==null?z.y:0;T.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,mt,wt,k,lt),ct.unbindTexture()},this.copyTextureToTexture=function(b,z,G=null,q=null,k=0){b.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],z=arguments[2],k=arguments[3]||0,G=null);let lt,mt,wt,At,Ht,Gt,Rt,Qt,le;const ce=b.isCompressedTexture?b.mipmaps[k]:b.image;G!==null?(lt=G.max.x-G.min.x,mt=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Ht=G.min.y,Gt=G.isBox3?G.min.z:0):(lt=ce.width,mt=ce.height,wt=ce.depth||1,At=0,Ht=0,Gt=0),q!==null?(Rt=q.x,Qt=q.y,le=q.z):(Rt=0,Qt=0,le=0);const Ie=Xt.convert(z.format),ee=Xt.convert(z.type);let Pt;z.isData3DTexture?(T.setTexture3D(z,0),Pt=R.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Pt=R.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Pt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);const un=R.getParameter(R.UNPACK_ROW_LENGTH),ne=R.getParameter(R.UNPACK_IMAGE_HEIGHT),$e=R.getParameter(R.UNPACK_SKIP_PIXELS),ri=R.getParameter(R.UNPACK_SKIP_ROWS),Ne=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ce.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ce.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,At),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Gt);const Xi=b.isDataArrayTexture||b.isData3DTexture,he=z.isDataArrayTexture||z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const en=_t.get(b),qi=_t.get(z),Ve=_t.get(en.__renderTarget),Tn=_t.get(qi.__renderTarget);ct.bindFramebuffer(R.READ_FRAMEBUFFER,Ve.__webglFramebuffer),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let wn=0;wn<wt;wn++)Xi&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(b).__webglTexture,k,Gt+wn),b.isDepthTexture?(he&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(z).__webglTexture,k,le+wn),R.blitFramebuffer(At,Ht,lt,mt,Rt,Qt,lt,mt,R.DEPTH_BUFFER_BIT,R.NEAREST)):he?R.copyTexSubImage3D(Pt,k,Rt,Qt,le+wn,At,Ht,lt,mt):R.copyTexSubImage2D(Pt,k,Rt,Qt,le+wn,At,Ht,lt,mt);ct.bindFramebuffer(R.READ_FRAMEBUFFER,null),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else he?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Pt,k,Rt,Qt,le,lt,mt,wt,Ie,ee,ce.data):z.isCompressedArrayTexture?R.compressedTexSubImage3D(Pt,k,Rt,Qt,le,lt,mt,wt,Ie,ce.data):R.texSubImage3D(Pt,k,Rt,Qt,le,lt,mt,wt,Ie,ee,ce):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,Rt,Qt,lt,mt,Ie,ee,ce.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,Rt,Qt,ce.width,ce.height,Ie,ce.data):R.texSubImage2D(R.TEXTURE_2D,k,Rt,Qt,lt,mt,Ie,ee,ce);R.pixelStorei(R.UNPACK_ROW_LENGTH,un),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ne),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$e),R.pixelStorei(R.UNPACK_SKIP_ROWS,ri),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ne),k===0&&z.generateMipmaps&&R.generateMipmap(Pt),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,z,G=null,q=null,k=0){return b.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,b=arguments[2],z=arguments[3],k=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,G,q,k)},this.initRenderTarget=function(b){_t.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){w=0,L=0,D=null,ct.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Ro{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new Ro(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Co{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yc extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class m0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new C;class hr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Po extends En{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yi;const Zi=new C,Si=new C,Mi=new C,bi=new nt,Ki=new nt,$c=new te,ks=new C,Qi=new C,Hs=new C,Hl=new nt,ia=new nt,Vl=new nt;class jc extends fe{constructor(t=new Po){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new m0(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new hr(n,3,0,!1)),yi.setAttribute("uv",new hr(n,2,3,!1))}this.geometry=yi,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),$c.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-Mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Vs(ks.set(-.5,-.5,0),Mi,a,Si,i,r),Vs(Qi.set(.5,-.5,0),Mi,a,Si,i,r),Vs(Hs.set(.5,.5,0),Mi,a,Si,i,r),Hl.set(0,0),ia.set(1,0),Vl.set(1,1);let o=t.ray.intersectTriangle(ks,Qi,Hs,!1,Zi);if(o===null&&(Vs(Qi.set(-.5,.5,0),Mi,a,Si,i,r),ia.set(0,1),o=t.ray.intersectTriangle(ks,Hs,Qi,!1,Zi),o===null))return;const l=t.ray.origin.distanceTo(Zi);l<t.near||l>t.far||e.push({distance:l,point:Zi.clone(),uv:We.getInterpolation(Zi,ks,Qi,Hs,Hl,ia,Vl,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vs(s,t,e,n,i,r){bi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ki.x=r*bi.x-i*bi.y,Ki.y=i*bi.x+r*bi.y):Ki.copy(bi),s.copy(t),s.x+=Ki.x,s.y+=Ki.y,s.applyMatrix4($c)}class g0 extends Ae{constructor(t=null,e=1,n=1,i,r,a,o,l,c=De,h=De,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gl extends ke{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ei=new te,Wl=new te,Gs=[],Xl=new Fn,v0=new te,ts=new Pe,es=new si;class Jc extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,v0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),Xl.copy(t.boundingBox).applyMatrix4(Ei),this.boundingBox.union(Xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),es.copy(t.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ei),Wl.multiplyMatrices(n,Ei),ts.matrixWorld=Wl,ts.raycast(t,Gs);for(let a=0,o=Gs.length;a<o;a++){const l=Gs[a];l.instanceId=r,l.object=this,e.push(l)}Gs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new g0(new Float32Array(i*this.count),i,this.count,yo,rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _0 extends En{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ur=new C,fr=new C,ql=new te,ns=new _r,Ws=new si,sa=new C,Yl=new C;class vv extends fe{constructor(t=new ve,e=new _0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ur.fromBufferAttribute(e,i-1),fr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ur.distanceTo(fr);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;ql.copy(i).invert(),ns.copy(t.ray).applyMatrix4(ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=h.getX(v),E=h.getX(v+1),x=Xs(this,t,ns,l,p,E);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Xs(this,t,ns,l,v,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=Xs(this,t,ns,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Xs(this,t,ns,l,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xs(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(ur.fromBufferAttribute(a,i),fr.fromBufferAttribute(a,r),e.distanceSqToSegment(ur,fr,sa,Yl)>n)return;sa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sa);if(!(l<t.near||l>t.far))return{distance:l,point:Yl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class x0 extends En{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $l=new te,ao=new _r,qs=new si,Ys=new C;class _v extends fe{constructor(t=new ve,e=new x0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;$l.copy(i).invert(),ao.copy(t.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);Ys.fromBufferAttribute(u,m),jl(Ys,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Ys.fromBufferAttribute(u,g),jl(Ys,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jl(s,t,e,n,i,r,a){const o=ao.distanceSqToPoint(s);if(o<e){const l=new C;ao.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class y0 extends Ae{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new nt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],a=[],o=new C,l=new te;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ee(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ee(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lo extends cn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class S0 extends Lo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const $s=new C,ra=new Do,aa=new Do,oa=new Do;class M0 extends cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:($s.subVectors(i[0],i[1]).add(i[0]),c=$s);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:($s.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=$s),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ra.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),aa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),oa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),aa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),oa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ra.calc(l),aa.calc(l),oa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function b0(s,t){const e=1-s;return e*e*t}function E0(s,t){return 2*(1-s)*s*t}function T0(s,t){return s*s*t}function as(s,t,e,n){return b0(s,t)+E0(s,e)+T0(s,n)}function w0(s,t){const e=1-s;return e*e*e*t}function A0(s,t){const e=1-s;return 3*e*e*s*t}function R0(s,t){return 3*(1-s)*s*s*t}function C0(s,t){return s*s*s*t}function os(s,t,e,n,i){return w0(s,t)+A0(s,e)+R0(s,n)+C0(s,i)}class Zc extends cn{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(os(t,i.x,r.x,a.x,o.x),os(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class P0 extends cn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(os(t,i.x,r.x,a.x,o.x),os(t,i.y,r.y,a.y,o.y),os(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kc extends cn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class L0 extends cn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qc extends cn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(as(t,i.x,r.x,a.x),as(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class th extends cn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(as(t,i.x,r.x,a.x),as(t,i.y,r.y,a.y),as(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eh extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Jl(o,l.x,c.x,h.x,u.x),Jl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var dr=Object.freeze({__proto__:null,ArcCurve:S0,CatmullRomCurve3:M0,CubicBezierCurve:Zc,CubicBezierCurve3:P0,EllipseCurve:Lo,LineCurve:Kc,LineCurve3:L0,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:th,SplineCurve:eh});class D0 extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new dr[i.type]().fromJSON(i))}return this}}class Zl extends D0{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Kc(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Qc(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Zc(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new eh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Lo(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nh extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ti extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;E(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function E(){const _=new C,F=new C;let w=0;const L=(e-t)/n;for(let D=0;D<=r;D++){const M=[],y=D/r,P=y*(e-t)+t;for(let A=0;A<=i;A++){const U=A/i,B=U*l+o,W=Math.sin(B),I=Math.cos(B);F.x=P*W,F.y=-y*n+m,F.z=P*I,u.push(F.x,F.y,F.z),_.set(W,L,I).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-y),M.push(g++)}v.push(M)}for(let D=0;D<i;D++)for(let M=0;M<r;M++){const y=v[M][D],P=v[M+1][D],A=v[M+1][D+1],U=v[M][D+1];(t>0||M!==0)&&(h.push(y,P,U),w+=3),(e>0||M!==r-1)&&(h.push(P,A,U),w+=3)}c.addGroup(p,w,0),p+=w}function x(_){const F=g,w=new nt,L=new C;let D=0;const M=_===!0?t:e,y=_===!0?1:-1;for(let A=1;A<=i;A++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let A=0;A<=i;A++){const B=A/i*l+o,W=Math.cos(B),I=Math.sin(B);L.x=M*I,L.y=m*y,L.z=M*W,u.push(L.x,L.y,L.z),f.push(0,y,0),w.x=W*.5+.5,w.y=I*.5*y+.5,d.push(w.x,w.y),g++}for(let A=0;A<i;A++){const U=F+A,B=P+A;_===!0?h.push(B,B+1,U):h.push(B+1,B,U),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pr extends ti{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new pr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mr extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const x=new C,_=new C,F=new C;for(let w=0;w<e.length;w+=3)d(e[w+0],x),d(e[w+1],_),d(e[w+2],F),l(x,_,F,E)}function l(E,x,_,F){const w=F+1,L=[];for(let D=0;D<=w;D++){L[D]=[];const M=E.clone().lerp(_,D/w),y=x.clone().lerp(_,D/w),P=w-D;for(let A=0;A<=P;A++)A===0&&D===w?L[D][A]=M:L[D][A]=M.clone().lerp(y,A/P)}for(let D=0;D<w;D++)for(let M=0;M<2*(w-D)-1;M++){const y=Math.floor(M/2);M%2===0?(f(L[D][y+1]),f(L[D+1][y]),f(L[D][y])):(f(L[D][y+1]),f(L[D+1][y+1]),f(L[D+1][y]))}}function c(E){const x=new C;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(E),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const E=new C;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];const _=m(E)/2/Math.PI+.5,F=p(E)/Math.PI+.5;a.push(_,1-F)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const x=a[E+0],_=a[E+2],F=a[E+4],w=Math.max(x,_,F),L=Math.min(x,_,F);w>.9&&L<.1&&(x<.2&&(a[E+0]+=1),_<.2&&(a[E+2]+=1),F<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,x){const _=E*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const E=new C,x=new C,_=new C,F=new C,w=new nt,L=new nt,D=new nt;for(let M=0,y=0;M<r.length;M+=9,y+=6){E.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),w.set(a[y+0],a[y+1]),L.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),F.copy(E).add(x).add(_).divideScalar(3);const P=m(F);v(w,y+0,E,P),v(L,y+2,x,P),v(D,y+4,_,P)}}function v(E,x,_,F){F<0&&E.x===1&&(a[x]=E.x-1),_.x===0&&_.z===0&&(a[x]=F/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.vertices,t.indices,t.radius,t.details)}}class ih extends Mr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ih(t.radius,t.detail)}}class I0 extends Zl{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Zl().fromJSON(i))}return this}}const U0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=sh(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=z0(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return fs(r,a,e,o,l,d,0),a}};function sh(s,t,e,n,i){let r,a;if(i===J0(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Kl(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Kl(r,s[r],s[r+1],a);return a&&br(a,a.next)&&(ps(a),a=a.next),a}function ni(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(br(e,e.next)||de(e.prev,e,e.next)===0)){if(ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fs(s,t,e,n,i,r,a){if(!s)return;!a&&r&&W0(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?F0(s,n,i,r):N0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),ps(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=O0(ni(s),t,e),fs(s,t,e,n,i,r,2)):a===2&&B0(s,t,e,n,i,r):fs(ni(s),t,e,n,i,r,1);break}}}function N0(s){const t=s.prev,e=s,n=s.next;if(de(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ai(i,o,r,l,a,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function F0(s,t,e,n){const i=s.prev,r=s,a=s.next;if(de(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=oo(d,g,t,e,n),E=oo(v,m,t,e,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=E;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ai(o,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ai(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ai(o,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=E;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ai(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function O0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!br(i,r)&&rh(i,n,n.next,r)&&ds(i,r)&&ds(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ps(n),ps(n.next),n=s=r),n=n.next}while(n!==s);return ni(n)}function B0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Y0(a,o)){let l=ah(a,o);a=ni(a,a.next),l=ni(l,l.next),fs(a,t,e,n,i,r,0),fs(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function z0(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=sh(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(q0(c));for(i.sort(k0),r=0;r<i.length;r++)e=H0(i[r],e);return e}function k0(s,t){return s.x-t.x}function H0(s,t){const e=V0(s,t);if(!e)return t;const n=ah(e,s);return ni(n,n.next),ni(e,e.next)}function V0(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Ai(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ds(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&G0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function G0(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function W0(s,t,e,n){let i=s;do i.z===0&&(i.z=oo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,X0(i)}function X0(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function oo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function q0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ai(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Y0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$0(s,t)&&(ds(s,t)&&ds(t,s)&&j0(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||br(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function br(s,t){return s.x===t.x&&s.y===t.y}function rh(s,t,e,n){const i=Js(de(s,t,e)),r=Js(de(s,t,n)),a=Js(de(e,n,s)),o=Js(de(e,n,t));return!!(i!==r&&a!==o||i===0&&js(s,e,t)||r===0&&js(s,n,t)||a===0&&js(e,s,n)||o===0&&js(e,t,n))}function js(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Js(s){return s>0?1:s<0?-1:0}function $0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&rh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ds(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function j0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ah(s,t){const e=new lo(s.i,s.x,s.y),n=new lo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kl(s,t,e,n){const i=new lo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ps(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function lo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class ls{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ls.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ql(t),tc(n,t);let a=t.length;e.forEach(Ql);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,tc(n,e[l]);const o=U0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ql(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function tc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class oh extends ve{constructor(t=new I0([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Zt(i,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Z0;let x,_=!1,F,w,L,D;p&&(x=p.getSpacedPoints(h),_=!0,f=!1,F=p.computeFrenetFrames(h,!1),w=new C,L=new C,D=new C),f||(m=0,d=0,g=0,v=0);const M=o.extractPoints(c);let y=M.shape;const P=M.holes;if(!ls.isClockWise(y)){y=y.reverse();for(let Q=0,ot=P.length;Q<ot;Q++){const R=P[Q];ls.isClockWise(R)&&(P[Q]=R.reverse())}}const U=ls.triangulateShape(y,P),B=y;for(let Q=0,ot=P.length;Q<ot;Q++){const R=P[Q];y=y.concat(R)}function W(Q,ot,R){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ot,R)}const I=y.length,H=U.length;function N(Q,ot,R){let Ct,rt,yt;const ct=Q.x-ot.x,It=Q.y-ot.y,_t=R.x-Q.x,T=R.y-Q.y,S=ct*ct+It*It,V=ct*T-It*_t;if(Math.abs(V)>Number.EPSILON){const j=Math.sqrt(S),et=Math.sqrt(_t*_t+T*T),J=ot.x-It/j,Et=ot.y+ct/j,ft=R.x-T/et,xt=R.y+_t/et,Yt=((ft-J)*T-(xt-Et)*_t)/(ct*T-It*_t);Ct=J+ct*Yt-Q.x,rt=Et+It*Yt-Q.y;const at=Ct*Ct+rt*rt;if(at<=2)return new nt(Ct,rt);yt=Math.sqrt(at/2)}else{let j=!1;ct>Number.EPSILON?_t>Number.EPSILON&&(j=!0):ct<-Number.EPSILON?_t<-Number.EPSILON&&(j=!0):Math.sign(It)===Math.sign(T)&&(j=!0),j?(Ct=-It,rt=ct,yt=Math.sqrt(S)):(Ct=ct,rt=It,yt=Math.sqrt(S/2))}return new nt(Ct/yt,rt/yt)}const X=[];for(let Q=0,ot=B.length,R=ot-1,Ct=Q+1;Q<ot;Q++,R++,Ct++)R===ot&&(R=0),Ct===ot&&(Ct=0),X[Q]=N(B[Q],B[R],B[Ct]);const Z=[];let st,vt=X.concat();for(let Q=0,ot=P.length;Q<ot;Q++){const R=P[Q];st=[];for(let Ct=0,rt=R.length,yt=rt-1,ct=Ct+1;Ct<rt;Ct++,yt++,ct++)yt===rt&&(yt=0),ct===rt&&(ct=0),st[Ct]=N(R[Ct],R[yt],R[ct]);Z.push(st),vt=vt.concat(st)}for(let Q=0;Q<m;Q++){const ot=Q/m,R=d*Math.cos(ot*Math.PI/2),Ct=g*Math.sin(ot*Math.PI/2)+v;for(let rt=0,yt=B.length;rt<yt;rt++){const ct=W(B[rt],X[rt],Ct);it(ct.x,ct.y,-R)}for(let rt=0,yt=P.length;rt<yt;rt++){const ct=P[rt];st=Z[rt];for(let It=0,_t=ct.length;It<_t;It++){const T=W(ct[It],st[It],Ct);it(T.x,T.y,-R)}}}const Dt=g+v;for(let Q=0;Q<I;Q++){const ot=f?W(y[Q],vt[Q],Dt):y[Q];_?(L.copy(F.normals[0]).multiplyScalar(ot.x),w.copy(F.binormals[0]).multiplyScalar(ot.y),D.copy(x[0]).add(L).add(w),it(D.x,D.y,D.z)):it(ot.x,ot.y,0)}for(let Q=1;Q<=h;Q++)for(let ot=0;ot<I;ot++){const R=f?W(y[ot],vt[ot],Dt):y[ot];_?(L.copy(F.normals[Q]).multiplyScalar(R.x),w.copy(F.binormals[Q]).multiplyScalar(R.y),D.copy(x[Q]).add(L).add(w),it(D.x,D.y,D.z)):it(R.x,R.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const ot=Q/m,R=d*Math.cos(ot*Math.PI/2),Ct=g*Math.sin(ot*Math.PI/2)+v;for(let rt=0,yt=B.length;rt<yt;rt++){const ct=W(B[rt],X[rt],Ct);it(ct.x,ct.y,u+R)}for(let rt=0,yt=P.length;rt<yt;rt++){const ct=P[rt];st=Z[rt];for(let It=0,_t=ct.length;It<_t;It++){const T=W(ct[It],st[It],Ct);_?it(T.x,T.y+x[h-1].y,x[h-1].x+R):it(T.x,T.y,u+R)}}}$(),tt();function $(){const Q=i.length/3;if(f){let ot=0,R=I*ot;for(let Ct=0;Ct<H;Ct++){const rt=U[Ct];bt(rt[2]+R,rt[1]+R,rt[0]+R)}ot=h+m*2,R=I*ot;for(let Ct=0;Ct<H;Ct++){const rt=U[Ct];bt(rt[0]+R,rt[1]+R,rt[2]+R)}}else{for(let ot=0;ot<H;ot++){const R=U[ot];bt(R[2],R[1],R[0])}for(let ot=0;ot<H;ot++){const R=U[ot];bt(R[0]+I*h,R[1]+I*h,R[2]+I*h)}}n.addGroup(Q,i.length/3-Q,0)}function tt(){const Q=i.length/3;let ot=0;ht(B,ot),ot+=B.length;for(let R=0,Ct=P.length;R<Ct;R++){const rt=P[R];ht(rt,ot),ot+=rt.length}n.addGroup(Q,i.length/3-Q,1)}function ht(Q,ot){let R=Q.length;for(;--R>=0;){const Ct=R;let rt=R-1;rt<0&&(rt=Q.length-1);for(let yt=0,ct=h+m*2;yt<ct;yt++){const It=I*yt,_t=I*(yt+1),T=ot+Ct+It,S=ot+rt+It,V=ot+rt+_t,j=ot+Ct+_t;Lt(T,S,V,j)}}}function it(Q,ot,R){l.push(Q),l.push(ot),l.push(R)}function bt(Q,ot,R){Nt(Q),Nt(ot),Nt(R);const Ct=i.length/3,rt=E.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);Jt(rt[0]),Jt(rt[1]),Jt(rt[2])}function Lt(Q,ot,R,Ct){Nt(Q),Nt(ot),Nt(Ct),Nt(ot),Nt(R),Nt(Ct);const rt=i.length/3,yt=E.generateSideWallUV(n,i,rt-6,rt-3,rt-2,rt-1);Jt(yt[0]),Jt(yt[1]),Jt(yt[3]),Jt(yt[1]),Jt(yt[2]),Jt(yt[3])}function Nt(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Jt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return K0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new dr[i.type]().fromJSON(i)),new oh(n,t.options)}}const Z0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new nt(r,a),new nt(o,l),new nt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new nt(a,1-l),new nt(c,1-u),new nt(f,1-g),new nt(v,1-p)]:[new nt(o,1-l),new nt(h,1-u),new nt(d,1-g),new nt(m,1-p)]}};function K0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Io extends Mr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}class Bi extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,f=new C,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],x=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let F=0;F<=e;F++){const w=F/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+_,1-x),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const x=h[p][E+1],_=h[p][E],F=h[p+1][E],w=h[p+1][E+1];(p!==0||a>0)&&d.push(x,_,w),(p!==n-1||l<Math.PI)&&d.push(_,F,w)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lh extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const v=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,E=(i+1)*d+g;a.push(v,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ch extends ve{constructor(t=new th(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new nt;let h=new C;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),E(),p()}function m(x){h=t.getPointAt(x/e,h);const _=a.normals[x],F=a.binormals[x];for(let w=0;w<=i;w++){const L=w/i*Math.PI*2,D=Math.sin(L),M=-Math.cos(L);l.x=M*_.x+D*F.x,l.y=M*_.y+D*F.y,l.z=M*_.z+D*F.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=i;_++){const F=(i+1)*(x-1)+(_-1),w=(i+1)*x+(_-1),L=(i+1)*x+_,D=(i+1)*(x-1)+_;g.push(F,w,D),g.push(w,L,D)}}function E(){for(let x=0;x<=e;x++)for(let _=0;_<=i;_++)c.x=x/e,c.y=_/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ch(new dr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Q0 extends we{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class tg extends En{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eg extends En{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uo extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ng extends Uo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const la=new te,ec=new C,nc=new C;class hh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nc),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ic=new te,is=new C,ca=new C;class ig extends hh{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),n.position.copy(is),ca.copy(n.position),ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ca),n.updateMatrixWorld(),i.makeTranslation(-is.x,-is.y,-is.z),ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic)}}class sg extends Uo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class rg extends hh{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ag extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}let Zs;class og{static getContext(){return Zs===void 0&&(Zs=new(window.AudioContext||window.webkitAudioContext)),Zs}static setContext(t){Zs=t}}class No{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sc(){return performance.now()}const Wn=new C,rc=new ii,lg=new C,Xn=new C;class cg extends fe{constructor(){super(),this.type="AudioListener",this.context=og.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new No}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Wn,rc,lg),Xn.set(0,0,-1).applyQuaternion(rc),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Wn.x,i),e.positionY.linearRampToValueAtTime(Wn.y,i),e.positionZ.linearRampToValueAtTime(Wn.z,i),e.forwardX.linearRampToValueAtTime(Xn.x,i),e.forwardY.linearRampToValueAtTime(Xn.y,i),e.forwardZ.linearRampToValueAtTime(Xn.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Wn.x,Wn.y,Wn.z),e.setOrientation(Xn.x,Xn.y,Xn.z,n.x,n.y,n.z)}}let hg=class extends fe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}};const qn=new C,ac=new ii,ug=new C,Yn=new C;class fg extends hg{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(qn,ac,ug),Yn.set(0,0,1).applyQuaternion(ac);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(qn.x,n),e.positionY.linearRampToValueAtTime(qn.y,n),e.positionZ.linearRampToValueAtTime(qn.z,n),e.orientationX.linearRampToValueAtTime(Yn.x,n),e.orientationY.linearRampToValueAtTime(Yn.y,n),e.orientationZ.linearRampToValueAtTime(Yn.z,n)}else e.setPosition(qn.x,qn.y,qn.z),e.setOrientation(Yn.x,Yn.y,Yn.z)}}const oc=new te;class dg{constructor(t,e,n=0,i=1/0){this.ray=new _r(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oc),this}intersectObject(t,e=!0,n=[]){return co(t,this,n,e),n.sort(lc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)co(t[i],this,n,e);return n.sort(lc),n}}function lc(s,t){return s.distance-t.distance}function co(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)co(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);const uh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pg=new wo(-1,1,1,-1,0,1);class mg extends ve{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const gg=new mg;class Fo{constructor(t){this._mesh=new Pe(gg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,pg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class fh extends Wi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=us.clone(t.uniforms),this.material=new we({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class cc extends Wi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class vg extends Wi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _g{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fh(uh),this.copyPass.material.blending=yn,this.clock=new No}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}cc!==void 0&&(a instanceof cc?n=!0:a instanceof vg&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xg extends Wi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const yg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class zi extends Wi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,a,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Xe(r,a,{type:on});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Xe(r,a,{type:on});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=yg;this.highPassUniforms=us.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new we({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=uh;this.copyUniforms=us.clone(h.uniforms),this.blendMaterial=new we({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ar,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new gs,this.fsQuad=new Fo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=zi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new we({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new we({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}zi.BlurDirectionX=new nt(1,0);zi.BlurDirectionY=new nt(0,1);const Sg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Mg extends Wi{constructor(){super();const t=Sg;this.uniforms=us.clone(t.uniforms),this.material=new Q0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Fo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===go&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}let dh=4;const cs=new Map,ho=new Set;function bg(s){dh=s}function Kt(s=1){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Bt(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function zt(s,{repeat:t=!0,srgb:e=!0,filter:n=!0}={}){const i=new y0(s);return t&&(i.wrapS=i.wrapT=or),e&&(i.colorSpace=Ue),i.anisotropy=dh,n||(i.magFilter=De,i.minFilter=De,i.generateMipmaps=!1),i}function kt(s,t,e=!1){if(cs.has(s))return cs.get(s);const n=t();return n.userData.key=s,cs.set(s,n),e||ho.add(s),n}function Eg(s=[]){for(const t of ho){if(s.includes(t))continue;const e=cs.get(t);e&&e.dispose(),cs.delete(t)}ho.clear()}const ue=s=>"#"+s.toString(16).padStart(6,"0");function Ft(s,t){const e=new Tt(s);return e.offsetHSL(0,0,t),"#"+e.getHexString()}function He(s,t,e,n,i,r,a=.15,o=1.5){s.globalAlpha=a;for(let l=0;l<i;l++){s.fillStyle=r[n()*r.length|0];const c=o*(.5+n());s.fillRect(n()*t,n()*e,c,c)}s.globalAlpha=1}function qe(s,t,e,n,i,r,a=.08,o=8,l=40){for(let c=0;c<i;c++){const h=n()*t,u=n()*e,f=o+n()*(l-o);s.globalAlpha=a,s.fillStyle=r[n()*r.length|0];for(const d of[-t,0,t])for(const g of[-e,0,e])s.beginPath(),s.arc(h+d,u+g,f,0,Math.PI*2),s.fill()}s.globalAlpha=1}function yv(s=6262590,t="grass"){return kt(t+s,()=>{const e=Bt(256,256),n=e.getContext("2d"),i=Kt(11);n.fillStyle=ue(s),n.fillRect(0,0,256,256),qe(n,256,256,i,60,[Ft(s,.06),Ft(s,-.06),Ft(s,.03)],.12,10,40),n.lineWidth=1;for(let r=0;r<3200;r++){const a=i()*256,o=i()*256,l=1.5+i()*3;n.strokeStyle=i()<.5?Ft(s,.08+i()*.08):Ft(s,-.08-i()*.05),n.globalAlpha=.5,n.beginPath(),n.moveTo(a,o),n.lineTo(a+(i()-.5)*3,o-l),n.stroke()}return n.globalAlpha=1,zt(e)})}function Sv(s=10125666){return kt("dirt"+s,()=>{const t=Bt(256,256),e=t.getContext("2d"),n=Kt(21);return e.fillStyle=ue(s),e.fillRect(0,0,256,256),qe(e,256,256,n,80,[Ft(s,.05),Ft(s,-.07)],.15,6,30),He(e,256,256,n,5e3,[Ft(s,-.2),Ft(s,.15)],.35,1.4),zt(t)})}function Mv(s=5592924,t=null){return kt("asphalt"+s+t,()=>{const e=Bt(256,256),n=e.getContext("2d"),i=Kt(31);return n.fillStyle=ue(s),n.fillRect(0,0,256,256),qe(n,256,256,i,40,[Ft(s,.04),Ft(s,-.05)],.2,10,50),He(n,256,256,i,9e3,["#222","#888","#6a6a6a"],.35,1.2),t&&(n.fillStyle=t,n.globalAlpha=.85,n.fillRect(124,0,8,150),n.globalAlpha=1),zt(e)})}function bv(){return kt("snow",()=>{const s=Bt(256,256),t=s.getContext("2d"),e=Kt(41);return t.fillStyle="#eef3fa",t.fillRect(0,0,256,256),qe(t,256,256,e,70,["#dfe7f3","#ffffff","#d7e1f0"],.25,10,45),He(t,256,256,e,3e3,["#ffffff","#c9d6ea"],.5,1.2),zt(s)})}function Ev(){return kt("ice",()=>{const s=Bt(256,256),t=s.getContext("2d"),e=Kt(42);t.fillStyle="#a9c6dc",t.fillRect(0,0,256,256),qe(t,256,256,e,40,["#c4dbec","#8fb1cc"],.25,20,60),t.strokeStyle="#e6f2fb",t.globalAlpha=.5;for(let n=0;n<40;n++){t.beginPath();let i=e()*256,r=e()*256;t.moveTo(i,r);for(let a=0;a<5;a++)i+=(e()-.5)*50,r+=(e()-.5)*50,t.lineTo(i,r);t.stroke()}return t.globalAlpha=1,zt(s)})}function Tv(){return kt("hedge",()=>{const s=Bt(256,256),t=s.getContext("2d"),e=Kt(51);t.fillStyle="#2f5a2a",t.fillRect(0,0,256,256);for(let n=0;n<2200;n++){const i=e()*256,r=e()*256,a=3+e()*5;t.fillStyle=["#3d7235","#28502a","#4a8240","#335f2d","#5a9449"][e()*5|0],t.globalAlpha=.9,t.beginPath(),t.ellipse(i,r,a,a*.6,e()*3,0,Math.PI*2),t.fill()}return t.globalAlpha=1,zt(s)})}function Tg(s=5209914){return kt("leaf"+s,()=>{const t=Bt(128,128),e=t.getContext("2d"),n=Kt(52);e.fillStyle=ue(s),e.fillRect(0,0,128,128);for(let i=0;i<700;i++)e.fillStyle=n()<.5?Ft(s,.1):Ft(s,-.1),e.globalAlpha=.8,e.beginPath(),e.arc(n()*128,n()*128,2+n()*3,0,7),e.fill();return e.globalAlpha=1,zt(t)})}function wg(){return kt("bark",()=>{const s=Bt(128,256),t=s.getContext("2d"),e=Kt(53);t.fillStyle="#5b4636",t.fillRect(0,0,128,256);for(let n=0;n<90;n++){t.strokeStyle=e()<.5?"#3f2f24":"#6f5a48",t.lineWidth=1+e()*2;const i=e()*128;t.beginPath(),t.moveTo(i,0),t.bezierCurveTo(i+(e()-.5)*10,80,i+(e()-.5)*10,170,i,256),t.stroke()}return zt(s)})}function wv(){return kt("rock",()=>{const s=Bt(256,256),t=s.getContext("2d"),e=Kt(54);return t.fillStyle="#8b8a86",t.fillRect(0,0,256,256),qe(t,256,256,e,90,["#a09f99","#6f6e6a","#7e7b74"],.2,8,40),He(t,256,256,e,5e3,["#555","#bbb"],.25,1.3),zt(s)})}function Av({tile:s=15922678,grout:t=12109e3,n:e=8,vary:n=.03,seed:i=61,key:r=""}={}){return kt(`tile${s}-${t}-${e}-${r}`,()=>{const o=Bt(256,256),l=o.getContext("2d"),c=Kt(i);l.fillStyle=ue(t),l.fillRect(0,0,256,256);const h=256/e,u=Math.max(1.5,h*.07);for(let f=0;f<e;f++)for(let d=0;d<e;d++)l.fillStyle=Ft(s,(c()-.5)*n*2),l.fillRect(f*h+u/2,d*h+u/2,h-u,h-u),l.fillStyle="rgba(255,255,255,0.18)",l.fillRect(f*h+u/2,d*h+u/2,h-u,(h-u)*.18);return He(l,256,256,c,800,["#000"],.04,1.5),zt(o)})}function Rv(s=15262415,t=9413524,e=4,n="chk"){return kt(`${n}${s}-${t}-${e}`,()=>{const r=Bt(256,256),a=r.getContext("2d"),o=Kt(71),l=256/e;for(let c=0;c<e;c++)for(let h=0;h<e;h++)a.fillStyle=Ft((c+h)%2?s:t,(o()-.5)*.03),a.fillRect(c*l,h*l,l,l);a.strokeStyle="rgba(0,0,0,0.12)";for(let c=0;c<=e;c++)a.beginPath(),a.moveTo(c*l,0),a.lineTo(c*l,256),a.moveTo(0,c*l),a.lineTo(256,c*l),a.stroke();return qe(a,256,256,o,30,["#fff","#000"],.025,10,50),zt(r)})}function Cv(s=15328472,t="plaster"){return kt(t+s,()=>{const e=Bt(256,256),n=e.getContext("2d"),i=Kt(81);return n.fillStyle=ue(s),n.fillRect(0,0,256,256),qe(n,256,256,i,60,[Ft(s,.03),Ft(s,-.035)],.15,15,60),He(n,256,256,i,3e3,[Ft(s,-.12)],.12,1),zt(e)})}function Pv(s=10855326){return kt("concrete"+s,()=>{const t=Bt(256,256),e=t.getContext("2d"),n=Kt(82);return e.fillStyle=ue(s),e.fillRect(0,0,256,256),qe(e,256,256,n,90,[Ft(s,.05),Ft(s,-.06)],.15,8,50),He(e,256,256,n,7e3,[Ft(s,-.2),Ft(s,.12)],.25,1.2),zt(t)})}function Lv(s=10114372,t=13616824){return kt("brick"+s+t,()=>{const e=Bt(256,256),n=e.getContext("2d"),i=Kt(83);n.fillStyle=ue(t),n.fillRect(0,0,256,256);const r=256/8,a=256/4;for(let o=0;o<8;o++){const l=o%2?a/2:0;for(let c=-1;c<5;c++)n.fillStyle=Ft(s,(i()-.5)*.12),n.fillRect(c*a+l+2,o*r+2,a-4,r-4)}return He(n,256,256,i,3e3,["#000","#fff"],.08,1.4),zt(e)})}function Dv(s=15195332){return kt("siding"+s,()=>{const t=Bt(128,128),e=t.getContext("2d"),n=Kt(84);e.fillStyle=ue(s),e.fillRect(0,0,128,128);for(let i=0;i<8;i++){const r=i*16,a=e.createLinearGradient(0,r,0,r+16);a.addColorStop(0,Ft(s,.04)),a.addColorStop(.85,Ft(s,-.03)),a.addColorStop(1,Ft(s,-.14)),e.fillStyle=a,e.fillRect(0,r,128,16)}return He(e,128,128,n,400,["#000"],.05,1),zt(t)})}function Iv(s=8014394){return kt("roof"+s,()=>{const t=Bt(128,128),e=t.getContext("2d"),n=Kt(85);e.fillStyle=ue(s),e.fillRect(0,0,128,128);for(let i=0;i<8;i++){const r=i%2?8:0;for(let a=-1;a<9;a++)e.fillStyle=Ft(s,(n()-.5)*.1),e.fillRect(a*16+r+1,i*16+1,14,15),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(a*16+r,i*16+14,16,2)}return zt(t)})}function Uv(s=10188371,t=4,e="wood"){return kt(e+s+t,()=>{const i=Bt(256,256),r=i.getContext("2d"),a=Kt(86),o=256/t;for(let l=0;l<t;l++){r.fillStyle=Ft(s,(a()-.5)*.08),r.fillRect(l*o,0,o,256);for(let h=0;h<14;h++){r.strokeStyle=a()<.5?Ft(s,-.1):Ft(s,.06),r.globalAlpha=.35;const u=l*o+a()*o;r.beginPath(),r.moveTo(u,0),r.bezierCurveTo(u+(a()-.5)*6,256/3,u+(a()-.5)*6,256*2/3,u,256),r.stroke()}r.globalAlpha=1,r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(l*o,0,1.5,256);const c=a()*256;r.fillRect(l*o,c,o,1.5)}return zt(i)})}function Nv(s="hotel"){return kt("carpet"+s,()=>{const e=Bt(256,256),n=e.getContext("2d"),i=Kt(87);if(s==="hotel"){n.fillStyle="#7a2230",n.fillRect(0,0,256,256);for(let r=0;r<2;r++)for(let a=0;a<2;a++){const o=r*128+64,l=a*128+64;n.strokeStyle="#d4a649",n.lineWidth=4,n.beginPath(),n.moveTo(o,l-58),n.lineTo(o+58,l),n.lineTo(o,l+58),n.lineTo(o-58,l),n.closePath(),n.stroke(),n.fillStyle="#2f4f63",n.beginPath(),n.arc(o,l,22,0,7),n.fill(),n.strokeStyle="#e6c37a",n.lineWidth=2,n.beginPath(),n.arc(o,l,30,0,7),n.stroke();for(let c=0;c<8;c++){const h=c*Math.PI/4;n.fillStyle="#c98a3b",n.beginPath(),n.ellipse(o+Math.cos(h)*40,l+Math.sin(h)*40,7,3,h,0,7),n.fill()}n.fillStyle="#b13b45";for(const[c,h]of[[0,-64],[64,0],[0,64],[-64,0]])n.beginPath(),n.arc(o+c,l+h,9,0,7),n.fill()}}else if(s==="mall"){n.fillStyle="#4b5a78",n.fillRect(0,0,256,256),n.fillStyle="#6a7aa0";for(let r=0;r<16;r++)n.fillRect(i()*256,i()*256,20+i()*30,4);n.fillStyle="#d68fb0";for(let r=0;r<12;r++)n.beginPath(),n.arc(i()*256,i()*256,4+i()*6,0,7),n.fill();n.fillStyle="#e8d46a";for(let r=0;r<10;r++)n.save(),n.translate(i()*256,i()*256),n.rotate(i()*3),n.fillRect(-10,-2,20,4),n.restore()}else n.fillStyle="#8b9b7a",n.fillRect(0,0,256,256);return He(n,256,256,i,12e3,["#000","#fff"],.07,1),zt(e)})}function Fv(s=15326400,t=11832442,e="floral"){return kt("wp"+s+t+e,()=>{const i=Bt(128,128),r=i.getContext("2d"),a=Kt(88);if(r.fillStyle=ue(s),r.fillRect(0,0,128,128),e==="stripe"){for(let o=0;o<8;o++)r.fillStyle=o%2?Ft(s,-.05):ue(s),r.fillRect(o*16,0,16,128);r.fillStyle=ue(t),r.globalAlpha=.5;for(let o=0;o<4;o++)r.fillRect(o*32+15,0,2,128);r.globalAlpha=1}else{r.fillStyle=ue(t),r.globalAlpha=.55;for(const[o,l]of[[32,32],[96,96]]){for(let c=0;c<5;c++){const h=c*1.2566;r.beginPath(),r.ellipse(o+Math.cos(h)*7,l+Math.sin(h)*7,6,3.5,h,0,7),r.fill()}r.beginPath(),r.arc(o,l,3,0,7),r.fill()}r.strokeStyle=Ft(t,.1),r.lineWidth=1.5,r.beginPath(),r.moveTo(0,64),r.bezierCurveTo(30,40,60,90,128,64),r.stroke(),r.globalAlpha=1}return He(r,128,128,a,300,["#000"],.05,1),zt(i)})}function Ov(s=15394527){return kt("marble"+s,()=>{const e=Bt(256,256),n=e.getContext("2d"),i=Kt(89);n.fillStyle=ue(s),n.fillRect(0,0,256,256),qe(n,256,256,i,40,[Ft(s,-.04),Ft(s,.03)],.2,20,70),n.strokeStyle=Ft(s,-.25),n.globalAlpha=.25;for(let r=0;r<12;r++){n.lineWidth=.5+i()*1.5,n.beginPath();let a=i()*256,o=0;for(n.moveTo(a,o);o<256;)a+=(i()-.5)*30,o+=10+i()*25,n.lineTo(a,o);n.stroke()}return n.globalAlpha=1,n.strokeStyle="rgba(0,0,0,0.15)",n.lineWidth=2,n.strokeRect(0,0,256,256),zt(e)})}function Bv(){return kt("ceil",()=>{const t=Bt(128,128),e=t.getContext("2d"),n=Kt(90);return e.fillStyle="#eeece6",e.fillRect(0,0,128,128),He(e,128,128,n,2500,["#bdbab0","#d3d0c7"],.6,1.2),e.fillStyle="#c9c6bd",e.fillRect(0,0,128,3),e.fillRect(0,0,3,128),zt(t)})}function zv(s=6260390){return kt("locker"+s,()=>{const n=Bt(64,256),i=n.getContext("2d");i.fillStyle=ue(s),i.fillRect(0,0,64,256),i.fillStyle=Ft(s,-.15),i.fillRect(0,0,2,256),i.fillRect(62,0,2,256),i.fillStyle=Ft(s,-.2);for(let r=0;r<5;r++)i.fillRect(16,14+r*6,32,2.5);for(let r=0;r<5;r++)i.fillRect(16,200+r*6,32,2.5);return i.fillStyle="#c9c9c9",i.fillRect(48,118,6,22),i.fillStyle="#333",i.fillRect(24,100,16,8),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(4,0,4,256),zt(n,{repeat:!0})})}function kv(s=15328211,t="panel"){return kt("door"+s+t,()=>{const i=Bt(128,256),r=i.getContext("2d");r.fillStyle=ue(s),r.fillRect(0,0,128,256);const a=Ft(s,-.12),o=Ft(s,.06);if(t==="panel")for(const[l,c,h,u]of[[16,16,40,100],[72,16,40,100],[16,136,40,104],[72,136,40,104]])r.fillStyle=a,r.fillRect(l,c,h,u),r.fillStyle=o,r.fillRect(l+4,c+4,h-8,u-8),r.fillStyle=ue(s),r.fillRect(l+7,c+7,h-14,u-14);else t==="school"?(r.fillStyle="#20262b",r.fillRect(30,30,40,70),r.fillStyle="#9fb8c8",r.fillRect(33,33,34,64),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(35,35,8,60),r.fillStyle="#c0c0c0",r.fillRect(104,130,14,6)):t==="hotel"?(r.strokeStyle=a,r.lineWidth=3,r.strokeRect(14,14,100,228),r.strokeRect(22,22,84,212)):t==="flat"&&(r.strokeStyle=a,r.lineWidth=2,r.strokeRect(2,2,124,252));return r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(0,250,128,6),zt(i,{repeat:!1})})}function Hv(s=16777215,t=10275312,e=2){return kt("win"+s+t+e,()=>{const i=Bt(128,128),r=i.getContext("2d"),a=r.createLinearGradient(0,0,0,128);return a.addColorStop(0,Ft(t,.1)),a.addColorStop(1,Ft(t,-.12)),r.fillStyle=a,r.fillRect(0,0,128,128),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(10,128),r.lineTo(50,0),r.lineTo(70,0),r.lineTo(30,128),r.fill(),r.fillStyle=ue(s),r.fillRect(0,0,128,8),r.fillRect(0,120,128,8),r.fillRect(0,0,8,128),r.fillRect(120,0,8,128),e>=2&&r.fillRect(128/2-3,0,6,128),e>=4&&r.fillRect(0,128/2-3,128,6),zt(i,{repeat:!1})})}function Vv(s,{w:t=512,h:e=128,bg:n="#ffffff",fg:i="#222",font:r='bold 56px "Trebuchet MS", sans-serif',align:a="center",border:o=null,key:l=null,padding:c=20,lineHeight:h=1.15,shadow:u=null}={}){const f=Array.isArray(s)?s:[s],d=l||"txt:"+f.join("|")+t+e+n+i+r+o;return kt(d,()=>{const g=Bt(t,e),v=g.getContext("2d");n?(v.fillStyle=n,v.fillRect(0,0,t,e)):v.clearRect(0,0,t,e),o&&(v.strokeStyle=o,v.lineWidth=8,v.strokeRect(4,4,t-8,e-8)),v.font=r,v.fillStyle=i,v.textAlign=a,v.textBaseline="middle",u&&(v.shadowColor=u,v.shadowBlur=12);const m=parseInt(r.match(/(\d+)px/)?.[1]||40,10)*h,p=m*f.length;return f.forEach((x,_)=>{const F=a==="center"?t/2:a==="left"?c:t-c;v.fillText(x,F,e/2-p/2+m*(_+.5))}),zt(g,{repeat:!1})})}function Gv(s,t=1){return kt("poster"+s+t,()=>{const i=Bt(192,256),r=i.getContext("2d"),a=Kt(100+t),o=[["#fff4c2","#e0574a","#2d5d8a"],["#d9f2e4","#3b8a63","#f2a93b"],["#f6e1ef","#9c4f8c","#3a7cc2"],["#e3ecff","#4466cc","#ffb347"]],[l,c,h]=o[t%o.length];r.fillStyle=l,r.fillRect(0,0,192,256),r.fillStyle=c,r.font='bold 22px "Trebuchet MS", sans-serif',r.textAlign="center";const u={school:["READ EVERY DAY","WASH YOUR HANDS","BE KIND","THE WATER CYCLE","COUNT TO TEN","WHERE DO YOU GO?"],weird:["DID YOU SLEEP?","THIS IS FINE","ARE YOU REAL?","SMILE ALWAYS","NO EXIT HERE","YOU WERE HERE"],mall:["SALE","NEW ARRIVALS","OPEN 24H","COME BACK SOON"]}[s]||["HELLO"],f=u[t%u.length];r.fillText(f,192/2,34),r.fillStyle=h,r.beginPath(),r.arc(192/2,120,42,0,7),r.fill(),r.fillStyle=l,r.beginPath(),r.arc(192/2-14,110,6,0,7),r.arc(192/2+14,110,6,0,7),r.fill(),r.strokeStyle=l,r.lineWidth=4,r.beginPath(),r.arc(192/2,124,18,.2,Math.PI-.2),r.stroke();for(let d=0;d<4;d++)r.fillStyle=[c,h][d%2],r.fillRect(20+d*40,190,28,28+a()*20);return r.strokeStyle=c,r.lineWidth=6,r.strokeRect(3,3,186,250),zt(i,{repeat:!1})})}function Wv(s){return kt("chalk"+s.join("|"),()=>{const n=Bt(512,256),i=n.getContext("2d"),r=Kt(9);return i.fillStyle="#2f4a3c",i.fillRect(0,0,512,256),qe(i,512,256,r,40,["#3d5a4a","#ffffff"],.05,20,80),i.fillStyle="rgba(240,240,230,0.85)",i.font='30px "Comic Sans MS", "Chalkboard SE", cursive',i.textAlign="left",s.forEach((a,o)=>i.fillText(a,30,54+o*44)),i.strokeStyle="#7a5a3a",i.lineWidth=14,i.strokeRect(0,0,512,256),zt(n,{repeat:!1})})}function Xv(s,t,{w:e=384,h:n=256,accent:i="#3a5bd9",buttons:r=["OK"],key:a=null,icon:o="?"}={}){return kt(a||"dlg"+s+t+i,()=>{const l=Bt(e,n),c=l.getContext("2d");c.fillStyle="#d6d2c8",c.fillRect(0,0,e,n),c.fillStyle="#ffffff",c.fillRect(0,0,e,3),c.fillRect(0,0,3,n),c.fillStyle="#6d6a63",c.fillRect(0,n-3,e,3),c.fillRect(e-3,0,3,n);const h=c.createLinearGradient(0,0,e,0);h.addColorStop(0,i),h.addColorStop(1,"#9fb4ff"),c.fillStyle=h,c.fillRect(6,6,e-12,30),c.fillStyle="#fff",c.font="bold 18px Tahoma, Verdana, sans-serif",c.textBaseline="middle",c.fillText(s,14,21);for(let u=0;u<3;u++)c.fillStyle="#d6d2c8",c.fillRect(e-30-u*26,10,22,20),c.fillStyle="#222",c.fillRect(e-24-u*26,22,10,3);return c.fillStyle="#f7d54a",c.beginPath(),c.arc(46,92,22,0,7),c.fill(),c.fillStyle="#222",c.font="bold 26px Tahoma, sans-serif",c.textAlign="center",c.fillText(o,46,93),c.textAlign="left",c.font="18px Tahoma, Verdana, sans-serif",c.fillStyle="#111",t.split(`
`).forEach((u,f)=>c.fillText(u,84,84+f*24)),r.forEach((u,f)=>{const d=e/2-r.length*50+f*100+6,g=n-52;c.fillStyle="#d6d2c8",c.fillRect(d,g,88,32),c.strokeStyle="#222",c.lineWidth=2,c.strokeRect(d,g,88,32),c.fillStyle="#fff",c.fillRect(d+2,g+2,84,2),c.fillStyle="#111",c.textAlign="center",c.fillText(u,d+44,g+17),c.textAlign="left"}),zt(l,{repeat:!1})})}function ph(s="transparent",t="eye"){return kt(t+s,()=>{const n=Bt(256,256),i=n.getContext("2d");s!=="transparent"&&(i.fillStyle=s,i.fillRect(0,0,256,256)),i.save(),i.translate(256/2,256/2),i.beginPath(),i.ellipse(0,0,118,70,0,0,Math.PI*2);const r=i.createRadialGradient(0,0,20,0,0,120);r.addColorStop(0,"#ffffff"),r.addColorStop(.75,"#e4e1dc"),r.addColorStop(1,"#9c958d"),i.fillStyle=r,i.fill(),i.clip();const a=i.createRadialGradient(0,0,8,0,0,52);return a.addColorStop(0,"#2a1a10"),a.addColorStop(.5,"#6b4a2c"),a.addColorStop(1,"#2b1d14"),i.fillStyle=a,i.beginPath(),i.arc(0,0,52,0,7),i.fill(),i.fillStyle="#050505",i.beginPath(),i.arc(0,0,26,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(-14,-16,8,0,7),i.fill(),i.beginPath(),i.arc(8,-20,4,0,7),i.fill(),i.restore(),i.strokeStyle="#3a2a22",i.lineWidth=5,i.beginPath(),i.ellipse(256/2,256/2,118,70,0,0,Math.PI*2),i.stroke(),zt(n,{repeat:!1})})}function Ag(){return kt("eyes-pattern",()=>{const t=Bt(512,512),e=t.getContext("2d"),n=Kt(666);e.fillStyle="#030303",e.fillRect(0,0,512,512);const r=ph().image;for(let a=0;a<34;a++){const o=50+n()*70,l=n()*512,c=n()*512;for(const h of[-512,0,512])for(const u of[-512,0,512])e.globalAlpha=.85,e.drawImage(r,l+h-o/2,c+u-o*.3,o,o*.6)}return e.globalAlpha=1,zt(t)})}function Rg(s=1,t="#ffffff"){return kt("cloud"+s+t,()=>{const i=Bt(256,160),r=i.getContext("2d"),a=Kt(300+s);for(let l=0;l<26;l++){const c=50+a()*156,h=70+(a()-.3)*40-Math.sin((c-50)/156*Math.PI)*26,u=18+a()*34*Math.sin((c-30)/196*Math.PI),f=r.createRadialGradient(c,h-u*.3,u*.1,c,h,u);f.addColorStop(0,t),f.addColorStop(.6,t),f.addColorStop(1,"rgba(255,255,255,0)"),r.globalAlpha=.85,r.fillStyle=f,r.beginPath(),r.arc(c,h,u,0,7),r.fill()}r.globalCompositeOperation="source-atop";const o=r.createLinearGradient(0,40,0,130);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(70,90,130,0.25)"),r.fillStyle=o,r.fillRect(0,0,256,160),r.globalCompositeOperation="source-over",zt(i,{repeat:!1})})}function qv(){return kt("blob",()=>{const t=Bt(64,64),e=t.getContext("2d"),n=e.createRadialGradient(32,32,2,32,32,32);return n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(.6,"rgba(0,0,0,0.2)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),zt(t,{repeat:!1,srgb:!1})},!0)}function Cg(s="#ffffff"){return kt("glow"+s,()=>{const e=Bt(64,64),n=e.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,s),i.addColorStop(.3,s),i.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=.9,n.fillStyle=i,n.fillRect(0,0,64,64),zt(e,{repeat:!1})},!0)}function Yv(){return kt("static",()=>{const t=Bt(128,128),e=t.getContext("2d"),n=Kt(5),i=e.createImageData(128,128);for(let r=0;r<16384;r++){const a=n()*255|0;i.data[r*4]=a,i.data[r*4+1]=a,i.data[r*4+2]=a,i.data[r*4+3]=255}return e.putImageData(i,0,0),zt(t,{filter:!1})})}function $v(){return kt("bars",()=>{const e=Bt(128,96),n=e.getContext("2d");return["#c0c0c0","#c0c000","#00c0c0","#00c000","#c000c0","#c00000","#0000c0"].forEach((r,a)=>{n.fillStyle=r,n.fillRect(a*128/7,0,128/7+1,96*.7)}),n.fillStyle="#111",n.fillRect(0,96*.7,128,96*.3),n.fillStyle="#fff",n.fillRect(128*.6,96*.75,128*.2,96*.2),zt(e,{repeat:!1,filter:!1})})}function jv(s="desktop",t=1){return kt("screen"+s+t,()=>{const i=Bt(256,192),r=i.getContext("2d"),a=Kt(t);if(s==="desktop"){const o=r.createLinearGradient(0,0,0,192);o.addColorStop(0,"#4f8fd8"),o.addColorStop(.62,"#a9d2f5"),o.addColorStop(.62,"#5aa34a"),o.addColorStop(1,"#3f7d35"),r.fillStyle=o,r.fillRect(0,0,256,192),r.fillStyle="rgba(255,255,255,0.9)";for(let l=0;l<4;l++)r.beginPath(),r.arc(30+l*60+a()*20,30+a()*30,14,0,7),r.arc(44+l*60+a()*20,34+a()*20,12,0,7),r.fill();for(let l=0;l<4;l++)r.fillStyle=["#f2d24b","#fff","#e8a","#9cf"][l],r.fillRect(10,12+l*34,20,18),r.fillStyle="#fff",r.fillRect(8,33+l*34,24,4);r.fillStyle="#c9c5bb",r.fillRect(0,176,256,16),r.fillStyle="#3c8a3c",r.fillRect(2,178,40,12)}else if(s==="text")r.fillStyle="#071a0c",r.fillRect(0,0,256,192),r.fillStyle="#5cff8a",r.font="13px monospace",["C:\\DREAMS\\> dir"," HOUSE.EXE   SCHOOL.DAT"," POOL.TMP    YOU.???","C:\\DREAMS\\> run you","ERROR: you are already","       running.","C:\\DREAMS\\> _"].forEach((l,c)=>r.fillText(l,8,20+c*18));else if(s==="eye")r.fillStyle="#111",r.fillRect(0,0,256,192),r.drawImage(ph().image,28,40,200,120);else if(s==="sky"){const o=r.createLinearGradient(0,0,0,192);o.addColorStop(0,"#5aa0e6"),o.addColorStop(1,"#d5ecff"),r.fillStyle=o,r.fillRect(0,0,256,192),r.fillStyle="#fff",r.beginPath(),r.arc(90,90,26,0,7),r.arc(120,80,30,0,7),r.arc(150,92,22,0,7),r.fill()}r.fillStyle="rgba(0,0,0,0.18)";for(let o=0;o<192;o+=3)r.fillRect(0,o,256,1);return zt(i,{repeat:!1})})}function Jv(){return kt("fence",()=>{const e=Bt(128,64),n=e.getContext("2d");n.clearRect(0,0,128,64),n.fillStyle="#f4f1ea";for(let r=0;r<8;r++)n.beginPath(),n.moveTo(r*16+3,64),n.lineTo(r*16+3,10),n.lineTo(r*16+8,2),n.lineTo(r*16+13,10),n.lineTo(r*16+13,64),n.fill();n.fillRect(0,18,128,6),n.fillRect(0,46,128,6),n.fillStyle="rgba(0,0,0,0.12)";for(let r=0;r<8;r++)n.fillRect(r*16+11,10,2,64);const i=zt(e);return i.generateMipmaps=!1,i.minFilter=Ke,i})}function Zv(){return kt("caustics",()=>{const t=Bt(256,256),e=t.getContext("2d"),n=Kt(77);e.fillStyle="#000",e.fillRect(0,0,256,256),e.strokeStyle="#fff",e.lineCap="round";for(let i=0;i<120;i++){e.globalAlpha=.25+n()*.4,e.lineWidth=1+n()*2.5;const r=n()*256,a=n()*256;for(const o of[-256,0,256])for(const l of[-256,0,256])e.beginPath(),e.moveTo(r+o,a+l),e.bezierCurveTo(r+o+20,a+l-10+n()*5,r+o+30,a+l+12,r+o+44,a+l+2),e.stroke()}return e.globalAlpha=1,zt(t,{srgb:!1})})}function Kv(s){return kt("painting"+s,()=>{const n=Bt(192,144),i=n.getContext("2d"),r=[["#8ec5f0","#f7e6c4"],["#f2a37a","#fbe2b4"],["#6c7fb8","#c6c0e0"],["#a8d8c8","#f0f0d0"]],[a,o]=r[s%r.length],l=i.createLinearGradient(0,0,0,144);l.addColorStop(0,a),l.addColorStop(1,o),i.fillStyle=l,i.fillRect(0,0,192,144),i.fillStyle=["#6c9a4f","#9a8a5a","#4f6f8f","#7aa060"][s%4],i.beginPath(),i.moveTo(0,144);for(let c=0;c<=8;c++)i.lineTo(c*192/8,144*.6+Math.sin(c*1.3+s)*12);return i.lineTo(192,144),i.fill(),s%3===0&&(i.fillStyle="#fff",i.fillRect(192*.6,144*.45,22,18),i.fillStyle="#b66",i.beginPath(),i.moveTo(192*.6-3,144*.45),i.lineTo(192*.6+11,144*.36),i.lineTo(192*.6+25,144*.45),i.fill()),s%3===1&&(i.fillStyle="#fff",i.fillRect(192*.45,144*.4,10,22)),i.strokeStyle="#6b4b2a",i.lineWidth=10,i.strokeRect(0,0,192,144),zt(n,{repeat:!1})})}function Qv(s=9414554,t=15525588,e=6191724,n=.38,i="paint"){return kt("wains"+s+t+e+n+i,()=>{const o=Bt(128,512),l=o.getContext("2d"),c=Kt(91),h=512*(1-n);if(i==="wallpaper"){l.fillStyle=ue(t),l.fillRect(0,0,128,h);for(let u=0;u<8;u++)l.fillStyle=u%2?Ft(t,-.04):ue(t),l.fillRect(u*16,0,16,h);l.fillStyle=ue(s),l.fillRect(0,h,128,512-h);for(let u=0;u<4;u++)l.strokeStyle=Ft(s,-.15),l.lineWidth=2,l.strokeRect(u*32+4,h+14,24,512-h-30)}else l.fillStyle=ue(t),l.fillRect(0,0,128,h),l.fillStyle=ue(s),l.fillRect(0,h,128,512-h),qe(l,128,512,c,30,[Ft(t,-.02),Ft(s,.02)],.05,10,40);return l.fillStyle=ue(e),l.fillRect(0,h-6,128,10),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(0,h-6,128,2),l.fillStyle=Ft(s,-.2),l.fillRect(0,496,128,16),zt(o)})}function t_(){return kt("cork",()=>{const s=Bt(256,128),t=s.getContext("2d"),e=Kt(92);t.fillStyle="#b8875a",t.fillRect(0,0,256,128),He(t,256,128,e,4e3,["#8a5f3a","#d6a878","#a07048"],.6,1.6);const n=["#fffbe8","#ffd8e4","#d8f0ff","#fff2a8","#d9f5d0"];for(let i=0;i<9;i++){t.save(),t.translate(20+e()*216,15+e()*90),t.rotate((e()-.5)*.3),t.fillStyle=n[i%5],t.fillRect(-18,-14,36+e()*10,28+e()*8),t.fillStyle="rgba(60,60,90,0.5)";for(let r=0;r<4;r++)t.fillRect(-14,-8+r*6,20+e()*10,1.5);t.fillStyle="#d33",t.beginPath(),t.arc(0,-12,2.5,0,7),t.fill(),t.restore()}return t.strokeStyle="#7a5a3a",t.lineWidth=8,t.strokeRect(0,0,256,128),zt(s,{repeat:!1})})}function e_(){return kt("cloudsea",()=>{const t=Bt(512,512),e=t.getContext("2d"),n=Kt(93);e.fillStyle="#e9eef6",e.fillRect(0,0,512,512);for(let i=0;i<260;i++){const r=n()*512,a=n()*512,o=20+n()*60;for(const l of[-512,0,512])for(const c of[-512,0,512]){const h=e.createRadialGradient(r+l,a+c-o*.3,o*.1,r+l,a+c,o);h.addColorStop(0,"#ffffff"),h.addColorStop(.7,"rgba(255,255,255,0.6)"),h.addColorStop(1,"rgba(220,228,240,0)"),e.fillStyle=h,e.beginPath(),e.arc(r+l,a+c,o,0,7),e.fill()}}return zt(t)})}function n_(){return kt("steps",()=>{const s=Bt(64,64),t=s.getContext("2d");t.fillStyle="#6d7076",t.fillRect(0,0,64,64),t.fillStyle="#8d9096";for(let e=0;e<8;e++)t.fillRect(e*8,0,4,64);return t.fillStyle="#e8c84a",t.fillRect(0,0,64,4),zt(s)})}function i_(){return kt("rainbow",()=>{const s=Bt(8,64),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,64);return["#ff4d4d","#ff9f43","#ffe14d","#5ce07a","#4db8ff","#6a5cff","#c45cff"].forEach((n,i)=>e.addColorStop(i/6,n)),t.fillStyle=e,t.fillRect(0,0,8,64),zt(s,{repeat:!1})})}function s_(s="#101828",t="#3a5bd9",e=8){return kt("grid"+s+t+e,()=>{const i=Bt(128,128),r=i.getContext("2d");r.fillStyle=s,r.fillRect(0,0,128,128),r.strokeStyle=t,r.lineWidth=2;for(let a=0;a<=e;a++)r.beginPath(),r.moveTo(a*128/e,0),r.lineTo(a*128/e,128),r.moveTo(0,a*128/e),r.lineTo(128,a*128/e),r.stroke();return zt(i)})}const Pg=typeof matchMedia<"u"&&!matchMedia("(pointer: coarse)").matches,hc={low:{label:"Low",maxRatio:1,msaa:0,bloom:!1,env:!1,shadowMap:1024,shadowExt:16,shadowSoft:!1,normalBias:.05,bias:-6e-4,far:480,interiorCasters:!0,bakeCell:.9,skyRays:6},medium:{label:"Medium",maxRatio:1.5,msaa:2,bloom:!1,env:!0,shadowMap:2048,shadowExt:26,shadowSoft:!0,normalBias:.035,bias:-4e-4,far:900,interiorCasters:!0,bakeCell:.6,skyRays:10},high:{label:"High",maxRatio:2,msaa:4,bloom:!0,env:!0,shadowMap:Pg?4096:2048,shadowExt:38,shadowSoft:!0,normalBias:.025,bias:-3e-4,far:1500,interiorCasters:!0,bakeCell:.45,skyRays:14}},uo=s=>hc[s]||hc.low,Lg={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new nt(1,1)},saturation:{value:1},contrast:{value:1},brightness:{value:0},lift:{value:new Tt(0,0,0)},gain:{value:new Tt(1,1,1)},vignette:{value:.25},grain:{value:.03},aberration:{value:0},wave:{value:0},scan:{value:0},haze:{value:0},hazeColor:{value:new Tt(1,1,1)},fade:{value:0},fadeColor:{value:new Tt(1,1,1)},underwater:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float time; uniform vec2 resolution;
    uniform float saturation, contrast, brightness, vignette, grain, aberration, wave, scan, haze, fade, underwater;
    uniform vec3 lift, gain, hazeColor, fadeColor;
    varying vec2 vUv;
    float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv;
      if (wave > 0.0) {
        uv.x += sin(uv.y * 24.0 + time * 1.7) * 0.0025 * wave;
        float band = step(0.996, rand(vec2(floor(time * 6.0), floor(uv.y * 40.0))));
        uv.x += band * 0.02 * wave;
      }
      if (underwater > 0.0) uv += vec2(sin(uv.y*18.0+time*2.0), cos(uv.x*14.0+time*1.6)) * 0.004 * underwater;
      vec4 c;
      if (aberration > 0.0) {
        vec2 off = (uv - 0.5) * aberration * 0.012;
        c.r = texture2D(tDiffuse, uv + off).r; c.g = texture2D(tDiffuse, uv).g; c.b = texture2D(tDiffuse, uv - off).b; c.a = 1.0;
      } else c = texture2D(tDiffuse, uv);
      vec3 col = c.rgb;
      col = col * gain + lift * (1.0 - col);
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, saturation);
      col = (col - 0.5) * contrast + 0.5 + brightness;
      col = mix(col, hazeColor, haze * smoothstep(0.2, 1.0, 1.0 - abs(uv.y - 0.55) * 1.4) * 0.5);
      if (scan > 0.0) col *= 1.0 - scan * 0.12 * (0.5 + 0.5 * sin(uv.y * resolution.y * 1.4));
      float d = distance(vUv, vec2(0.5));
      col *= mix(1.0, smoothstep(0.85, 0.25, d), vignette);
      col += (rand(vUv * resolution + fract(time * 13.1)) - 0.5) * grain;
      col = mix(col, vec3(0.08, 0.32, 0.36) * (0.6 + l), underwater * 0.55);
      col = mix(col, fadeColor, fade);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`};class Dg{constructor(t,e){this.game=t;const n=new p0({antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});n.outputColorSpace=Ue,n.toneMapping=go,n.toneMappingExposure=1,n.shadowMap.type=va,n.info.autoReset=!1,e.appendChild(n.domElement),n.domElement.id="game-canvas",this.r=n,bg(Math.min(8,n.capabilities.getMaxAnisotropy())),this.scale=1,this.quality="medium",this.composer=null,this.grade=null,this.bloom=null,this.fade=0}setQuality(t){this.quality=t;const e=this.r,n=uo(t);this.tier=n,e.shadowMap.enabled=!0,e.shadowMap.type=n.shadowSoft?va:po,e.shadowMap.needsUpdate=!0,this.maxRatio=n.maxRatio,this.game.camera.far=n.far,this.game.camera.updateProjectionMatrix(),this.scale=1,this.composer?.dispose?.(),this.composer=null;const i=this.game.scene,r=this.game.camera,a=new Xe(1,1,{type:on,samples:n.msaa}),o=new _g(e,a);o.addPass(new xg(i,r)),n.bloom?(this.bloom=new zi(new nt(256,256),.22,.6,.9),o.addPass(this.bloom)):this.bloom=null,this.grade=new fh(Lg),o.addPass(this.grade),o.addPass(new Mg),this.composer=o,this.resize()}pixelRatio(){const t=Math.min(window.devicePixelRatio||1,this.maxRatio||1.5);return Math.max(.5,t*this.scale)}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),n=this.pixelRatio();this.r.setPixelRatio(n),this.r.setSize(t,e),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(t,e)),this.grade&&this.grade.uniforms.resolution.value.set(t*n,e*n),this.bloom&&this.bloom.resolution.set(t*n/2,e*n/2);const i=this.game.camera;i.aspect=t/e,this.game.cam?.updateFov(),i.updateProjectionMatrix()}setPost(t={}){if(!this.grade)return;const e=this.grade.uniforms;e.saturation.value=t.saturation??1.05,e.contrast.value=t.contrast??1,e.brightness.value=t.brightness??0,e.lift.value.set(t.lift??0),e.gain.value.set(t.gain??16777215),e.vignette.value=this.game.settings.data.vignette?t.vignette??.28:0,e.grain.value=this.game.settings.data.grain?t.grain??.025:0,e.aberration.value=t.aberration??0,e.wave.value=t.wave??0,e.scan.value=t.scan??0,e.haze.value=t.haze??0,e.hazeColor.value.set(t.hazeColor??16777215),this.bloom&&(this.bloom.strength=t.bloom??.22),this.post=t}render(t){if(this.r.info.reset(),this.grade){const e=this.grade.uniforms;e.time.value=t,e.fade.value=this.fade,this.composer.render()}else this.r.render(this.game.scene,this.game.camera)}}class Ig{constructor(t,e){this.game=t,this.layer=e,this.keys=new Set,this.move={x:0,y:0},this.run=!1,this.look={x:0,y:0},this.edges=new Set,this.enabled=!1,this.locked=!1,this.isTouch=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.joy=null,this.lookPtr=null,this.joyEl=document.getElementById("joystick"),this.knobEl=document.getElementById("joystick-knob"),addEventListener("keydown",n=>this.onKey(n,!0)),addEventListener("keyup",n=>this.onKey(n,!1)),addEventListener("blur",()=>{this.keys.clear(),this.releaseJoy()}),e.addEventListener("pointerdown",n=>this.onDown(n)),addEventListener("pointermove",n=>this.onMove(n),{passive:!1}),addEventListener("pointerup",n=>this.onUp(n)),addEventListener("pointercancel",n=>this.onUp(n)),document.addEventListener("pointerlockchange",()=>{const n=this.locked;this.locked=document.pointerLockElement===e,n&&!this.locked&&this.enabled&&!this.isTouch&&this.game.onPointerUnlock()}),addEventListener("mousemove",n=>{!this.locked||!this.enabled||(this.look.x+=n.movementX,this.look.y+=n.movementY)}),e.addEventListener("contextmenu",n=>n.preventDefault())}onKey(t,e){if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))return;const n=t.code;e?(this.keys.has(n)||((n==="KeyE"||n==="KeyF"||n==="Enter")&&this.edges.add("interact"),(n==="Escape"||n==="KeyP")&&this.edges.add("pause"),(n==="KeyJ"||n==="Tab")&&this.edges.add("journal"),n==="KeyM"&&this.edges.add("map")),this.keys.add(n),["ArrowUp","ArrowDown","Space","Tab"].includes(n)&&t.preventDefault()):this.keys.delete(n)}requestLock(){if(!(this.isTouch||this.locked))try{this.layer.requestPointerLock?.()?.catch?.(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}onDown(t){if(!this.enabled)return;if(t.pointerType==="mouse"){if(!this.locked){this.requestLock();return}t.button===0&&this.edges.add("interact");return}t.preventDefault();const e=innerWidth,n=innerHeight,i=this.game.ui?.scale||1;if(!this.joy&&t.clientX<e*.45&&t.clientY>n*.3){const r=70*i,a=Math.max(r,Math.min(e*.45,t.clientX)),o=Math.max(r,Math.min(n-r,t.clientY));this.joy={id:t.pointerId,ox:a,oy:o,x:0,y:0,t:performance.now()},this.joyEl.style.left=a+"px",this.joyEl.style.top=o+"px",this.joyEl.classList.add("active"),this.updateJoy(t.clientX,t.clientY)}else this.lookPtr||(this.lookPtr={id:t.pointerId,x:t.clientX,y:t.clientY,sx:t.clientX,sy:t.clientY,t:performance.now()})}updateJoy(t,e){const n=this.game.ui?.scale||1,i=52*n;let r=t-this.joy.ox,a=e-this.joy.oy;const o=Math.hypot(r,a);o>i&&(r=r/o*i,a=a/o*i),this.joy.x=r/i,this.joy.y=-a/i,this.knobEl.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${a}px))`}onMove(t){this.joy&&t.pointerId===this.joy.id?(t.preventDefault(),this.updateJoy(t.clientX,t.clientY)):this.lookPtr&&t.pointerId===this.lookPtr.id&&(t.preventDefault(),this.look.x+=(t.clientX-this.lookPtr.x)*2.2,this.look.y+=(t.clientY-this.lookPtr.y)*2.2,this.lookPtr.x=t.clientX,this.lookPtr.y=t.clientY)}onUp(t){this.joy&&t.pointerId===this.joy.id&&this.releaseJoy(),this.lookPtr&&t.pointerId===this.lookPtr.id&&(Math.hypot(t.clientX-this.lookPtr.sx,t.clientY-this.lookPtr.sy)<10&&performance.now()-this.lookPtr.t<280&&this.edges.add("tap"),this.lookPtr=null)}releaseJoy(){this.joy=null,this.joyEl?.classList.remove("active"),this.knobEl&&(this.knobEl.style.transform="translate(-50%, -50%)")}poll(){let t=0,e=0;const n=this.keys;(n.has("KeyW")||n.has("ArrowUp"))&&(e+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(e-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(t+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(t-=1);const i=Math.hypot(t,e);if(i>1&&(t/=i,e/=i),this.run=n.has("ShiftLeft")||n.has("ShiftRight"),this.joy){t=this.joy.x,e=this.joy.y;const r=Math.hypot(t,e);this.run=r>.97}this.move.x=this.enabled?t:0,this.move.y=this.enabled?e:0}consumeLook(){const t={x:this.look.x,y:this.look.y};return this.look.x=0,this.look.y=0,t}edge(t){return this.edges.has(t)?(this.edges.delete(t),!0):!1}clearEdges(){this.edges.clear()}}const sr=[{file:"warm-nights.mp3",title:"warm nights"},{file:"snowfall.mp3",title:"snowfall",artist:"neheart"},{file:"you-not-the-same.mp3",title:"you not the same",artist:"TileKid"},{file:"the-lobotomy.mp3",title:"The Lobotomy"},{file:"numbers.mp3",title:"Numbers"}];function Oo(s){let t=s>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Er(s,t,e,n=1){const i=Math.max(1,Math.floor(s.sampleRate*t)),r=s.createBuffer(n,i,s.sampleRate);for(let a=0;a<n;a++){const o=r.getChannelData(a);e(o,s.sampleRate,a)}return r}function ha(s,t="white",e=3,n=1){return Er(s,e,i=>{const r=Oo(n);let a=0,o=0,l=0,c=0;for(let u=0;u<i.length;u++){const f=r()*2-1;t==="white"?i[u]=f:t==="pink"?(a=.99765*a+f*.099046,o=.963*o+f*.2965164,l=.57*l+f*1.0526913,i[u]=(a+o+l+f*.1848)*.18):(c=(c+.02*f)/1.02,i[u]=c*3.5)}const h=Math.floor(i.length*.02);for(let u=0;u<h;u++){const f=u/h;i[u]=i[u]*f+i[i.length-h+u]*(1-f)}})}function Ug(s,t=2.5,e=3){return Er(s,t,(n,i,r)=>{const a=Oo(17+r);for(let o=0;o<n.length;o++)n[o]=(a()*2-1)*Math.pow(1-o/n.length,e)},2)}function Ng(s,t=120,e=2){return Er(s,e,(n,i)=>{const r=Math.round(t*e)/e;for(let a=0;a<n.length;a++){const o=a/i;n[a]=Math.sin(2*Math.PI*r*o)*.5+Math.sin(2*Math.PI*r*2*o)*.22+Math.sin(2*Math.PI*r*3*o)*.08+Math.sin(2*Math.PI*r*8*o)*.02}})}function Fg(s){const t={},e=(i,r,a)=>{t[i]=[];for(let o=0;o<r;o++)t[i].push(Er(s,.35,(l,c)=>a(l,c,Oo(100+o*7+i.length*31))))},n=(i,r,a,o)=>{const l=i/r;return l<a?l/a:Math.exp(-(l-a)/o)};return e("grass",3,(i,r,a)=>{let o=0;for(let l=0;l<i.length;l++)o+=.25*(a()*2-1-o),i[l]=o*n(l,r,.015,.06)*1.4*(.6+.4*a())}),e("snow",3,(i,r,a)=>{let o=0;for(let l=0;l<i.length;l++){const c=a()<.08?1:.15;o+=.45*((a()*2-1)*c-o),i[l]=o*n(l,r,.03,.08)*1.6}}),e("tile",3,(i,r,a)=>{let o=0,l=0;const c=1400+a()*500;for(let h=0;h<i.length;h++){const u=a()*2-1;o=.7*(o+u-l),l=u;const f=h/r;i[h]=o*n(h,r,.001,.012)*.7+Math.sin(2*Math.PI*c*f)*Math.exp(-f/.03)*.25+Math.sin(2*Math.PI*110*f)*Math.exp(-f/.04)*.3}}),e("concrete",3,(i,r,a)=>{let o=0;for(let l=0;l<i.length;l++){const c=l/r;o+=.35*(a()*2-1-o),i[l]=o*n(l,r,.002,.03)+Math.sin(2*Math.PI*90*c)*Math.exp(-c/.05)*.45}}),e("carpet",3,(i,r,a)=>{let o=0;for(let l=0;l<i.length;l++){const c=l/r;o+=.06*(a()*2-1-o),i[l]=o*n(l,r,.01,.05)*2.2+Math.sin(2*Math.PI*70*c)*Math.exp(-c/.05)*.25}}),e("wood",3,(i,r,a)=>{let o=0;const l=150+a()*40;for(let c=0;c<i.length;c++){const h=c/r;o+=.3*(a()*2-1-o),i[c]=o*n(c,r,.002,.025)*.7+Math.sin(2*Math.PI*l*h)*Math.exp(-h/.07)*.5}}),e("metal",2,(i,r,a)=>{for(let o=0;o<i.length;o++){const l=o/r;i[o]=(Math.sin(2*Math.PI*520*l)*.3+Math.sin(2*Math.PI*1310*l)*.2)*Math.exp(-l/.09)+(a()*2-1)*n(o,r,.001,.01)*.5}}),e("water",3,(i,r,a)=>{let o=0;for(let l=0;l<i.length;l++){const c=l/r;o+=.12*(a()*2-1-o),i[l]=o*n(l,r,.03,.12)*2*(.8+.2*Math.sin(c*90))}}),e("sand",2,(i,r,a)=>{let o=0;for(let l=0;l<i.length;l++)o+=.3*(a()*2-1-o),i[l]=o*n(l,r,.02,.07)*1.3}),t}function Og(s,t){const e=s.ctx,n=e.createGain();n.gain.value=0,n.connect(s.ambBus);const i=[],r=[];let a=!0;const o=(...I)=>(i.push(...I),I[0]),l=(I,H,N)=>{const X=o(e.createBufferSource());X.buffer=I,X.loop=!0,X.loopStart=0,X.playbackRate.value=1;const Z=o(e.createGain());return Z.gain.value=H,N?(X.connect(N),N.connect(Z)):X.connect(Z),X.start(e.currentTime+Math.random()*.1,Math.random()*I.duration),Z.connect(n),{s:X,g:Z}},c=(I,H,N=.7)=>{const X=o(e.createBiquadFilter());return X.type=I,X.frequency.value=H,X.Q.value=N,X},h=(I,H,N)=>{const X=o(e.createOscillator());X.frequency.value=H;const Z=o(e.createGain());Z.gain.value=N,X.connect(Z),Z.connect(I),X.start()},u=(I,H,N)=>{const X=()=>{a&&(N(),r.push(setTimeout(X,(I+Math.random()*(H-I))*1e3)))};r.push(setTimeout(X,(I*.5+Math.random()*H*.5)*1e3))},f=(I,H,N,{type:X="sine",glide:Z=0,pan:st=0,attack:vt=.01,rev:Dt=.5,when:$=0}={})=>{const tt=e.currentTime+$,ht=e.createOscillator();ht.type=X,ht.frequency.setValueAtTime(I,tt),Z&&ht.frequency.exponentialRampToValueAtTime(Math.max(20,I+Z),tt+H);const it=e.createGain();it.gain.setValueAtTime(1e-4,tt),it.gain.exponentialRampToValueAtTime(N,tt+vt),it.gain.exponentialRampToValueAtTime(1e-4,tt+H);const bt=e.createStereoPanner();if(bt.pan.value=st,ht.connect(it),it.connect(bt),bt.connect(n),Dt>0){const Lt=e.createGain();Lt.gain.value=Dt,bt.connect(Lt),Lt.connect(s.reverb)}ht.start(tt),ht.stop(tt+H+.05)},d=(I,H,N,{type:X="bandpass",q:Z=1,pan:st=0,rev:vt=.3,attack:Dt=.005}={})=>{const $=e.currentTime,tt=e.createBufferSource();tt.buffer=s.noise.white;const ht=e.createBiquadFilter();ht.type=X,ht.frequency.value=N,ht.Q.value=Z;const it=e.createGain();it.gain.setValueAtTime(1e-4,$),it.gain.exponentialRampToValueAtTime(H,$+Dt),it.gain.exponentialRampToValueAtTime(1e-4,$+I);const bt=e.createStereoPanner();if(bt.pan.value=st,tt.connect(ht),ht.connect(it),it.connect(bt),bt.connect(n),vt>0){const Lt=e.createGain();Lt.gain.value=vt,bt.connect(Lt),Lt.connect(s.reverb)}tt.start($,Math.random()*2),tt.stop($+I+.05)},g=(I=.25,H=500,N=.07)=>{const X=c("lowpass",H,.8),{g:Z}=l(s.noise.brown,I,X);h(X.frequency,N,H*.5),h(Z.gain,N*.6,I*.45)},v=(I=3,H=9,N=.05)=>u(I,H,()=>{const X=2400+Math.random()*1800,Z=Math.random()*1.6-.8,st=2+(Math.random()*4|0);for(let vt=0;vt<st;vt++)f(X*(.9+Math.random()*.25),.09+Math.random()*.06,N,{glide:(Math.random()-.3)*1200,pan:Z,when:vt*(.11+Math.random()*.06),rev:.25})}),m=(I,H,N=.03)=>u(I,H,()=>{const X=[523.25,587.33,659.25,783.99,880,1046.5],Z=Math.random()*1.4-.7;for(let st=0;st<3;st++)f(X[Math.random()*X.length|0],2.6,N,{pan:Z,when:st*.35+Math.random()*.2,attack:.005,rev:.9})}),p=(I=.04,H=120)=>{const N=c("lowpass",900);l(s.hum(H),I,N)},E=(I=.12,H=260)=>{l(s.noise.brown,I,c("lowpass",H))},x=(I,H,N=.06)=>u(I,H,()=>f(900+Math.random()*900,.18,N,{glide:-500,pan:Math.random()*1.6-.8,rev:1.2,attack:.002})),_=(I=.08,H=600)=>{const N=c("lowpass",H),{g:X}=l(s.noise.pink,I,N);h(X.gain,.21,I*.35)},F=(I=.35)=>{const H=c("lowpass",700),{g:N}=l(s.noise.pink,I,H);h(N.gain,.11,I*.7),h(H.frequency,.11,350)},w=(I=.02)=>u(.6,1.8,()=>{const H=Math.random()*1.8-.9,N=4300+Math.random()*600;for(let X=0;X<3;X++)f(N,.05,I,{pan:H,when:X*.07,rev:.2,attack:.004})}),L=(I=.05,H=55,N=55.7)=>{for(const X of[H,N,H*1.5]){const Z=o(e.createOscillator());Z.type="sine",Z.frequency.value=X;const st=o(e.createGain());st.gain.value=I/3,Z.connect(st),st.connect(n),Z.start()}},D=(I,H,N=.02)=>u(I,H,()=>d(.05+Math.random()*.4,N,3e3+Math.random()*4e3,{type:"highpass",pan:Math.random()*1.6-.8,rev:.2})),M=(I,H,N=.025)=>u(I,H,()=>{const X=3+(Math.random()*6|0),Z=Math.random()*1.6-.8;for(let st=0;st<X;st++)f(200+Math.random()*2400,.04,N,{type:"square",pan:Z,when:st*.045,rev:.15,attack:.002})}),y=(I,H,N=.03)=>u(I,H,()=>[659.25,523.25,392].forEach((X,Z)=>f(X,1.8,N,{when:Z*.55,rev:1.3,attack:.01}))),P=(I,H,N=.015)=>u(I,H,()=>f(1318.5,2.2,N,{pan:Math.random()*1.4-.7,rev:1.2})),A=(I=.012)=>u(.98,1.02,()=>d(.02,I,3500,{q:4,rev:.4})),U=(I,H,N=.03)=>u(I,H,()=>f(70+Math.random()*60,1.2,N,{type:"triangle",glide:-20,pan:Math.random()*1.6-.8,rev:.8,attack:.2})),B=(I,H,N=.04)=>u(I,H,()=>{const X=e.currentTime,Z=e.createBufferSource();Z.buffer=s.noise.pink;const st=e.createBiquadFilter();st.type="lowpass",st.frequency.value=500;const vt=e.createGain();vt.gain.setValueAtTime(1e-4,X),vt.gain.exponentialRampToValueAtTime(N,X+2.5),vt.gain.exponentialRampToValueAtTime(1e-4,X+5.5);const Dt=e.createStereoPanner();Dt.pan.setValueAtTime(-.9,X),Dt.pan.linearRampToValueAtTime(.9,X+5.5),Z.connect(st),st.connect(vt),vt.connect(Dt),Dt.connect(n),Z.start(X),Z.stop(X+6)}),W=(I,H,N=.02)=>u(I,H,()=>{const X=Math.random()*1.6-.8;for(let Z=0;Z<2;Z++)f(1500+Math.random()*300,.35,N,{type:"triangle",glide:-700,pan:X,when:Z*.4,rev:.6,attack:.03})});switch(t){case"starting":g(.22,420,.06),v(4,11,.035),m(18,40,.018);break;case"almond":g(.32,700,.09),l(s.noise.pink,.03,c("highpass",3500)),v(8,20,.025);break;case"school":E(.1,220),p(.035,120),P(40,90,.008),A(.006);break;case"pool":E(.08,300),_(.09,900),x(1.2,4,.05);break;case"hotel":E(.13,180),p(.015,60),P(25,60,.012),U(20,50,.015);break;case"apartments":E(.07,240),A(.01),B(14,35,.03),p(.01,100);break;case"mall":E(.14,300),_(.04,1400),y(35,80,.02);break;case"maze":g(.18,520,.08),v(3,8,.04);break;case"hallways":E(.11,200),L(.025,49,49.6),A(.008),U(14,30,.02);break;case"edge":F(.32),g(.12,900,.05),W(14,35,.015);break;case"broken":L(.05,41,41.8),D(.6,3,.02),M(5,14,.015);{const I=o(e.createOscillator());I.frequency.value=7800;const H=o(e.createGain());H.gain.value=.0018,I.connect(H),H.connect(n),I.start()}break;case"frozen":g(.16,1100,.05),U(20,45,.02);break;case"anemoia":g(.08,400,.05),w(.012),B(25,60,.02),m(30,60,.012);break;case"menu":g(.18,380,.05),m(10,25,.015);break;default:E(.08,250)}return{out:n,fadeIn(I=2){n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(n.gain.value,e.currentTime),n.gain.linearRampToValueAtTime(1,e.currentTime+I)},stop(I=2){a=!1,r.forEach(clearTimeout),n.gain.cancelScheduledValues(e.currentTime),n.gain.setValueAtTime(n.gain.value,e.currentTime),n.gain.linearRampToValueAtTime(0,e.currentTime+I),setTimeout(()=>{i.forEach(H=>{try{H.stop?.()}catch{}try{H.disconnect()}catch{}}),n.disconnect()},I*1e3+200)}}}const Bg={concrete:4,dirt:3,wood:4,grass:4},uc={concrete:["concrete",null,.55,1],asphalt:["concrete",5200,.55,.96],tile:["concrete",null,.5,1.08],marble:["concrete",null,.5,1.1],metal:["concrete",null,.45,1.25],ice:["concrete",6e3,.42,1.15],dirt:["dirt",null,.55,1],sand:["dirt",3200,.5,.92],snow:["dirt",2200,.62,.82],gravel:["dirt",null,.6,1.08],wood:["wood",null,.5,1],carpet:["wood",700,.42,.85],rug:["wood",700,.42,.85],grass:["grass",null,.55,1],field:["grass",null,.6,.95],leaves:["grass",null,.6,1.05]};class zg{constructor(t){this.am=t,this.synth=Fg(t.ctx),this.sets={},this.last={},this.foot=1,this.load()}async load(){const t="./assets/audio/sfx/";await Promise.all(Object.entries(Bg).map(async([e,n])=>{const i=await Promise.all(Array.from({length:n},(r,a)=>this.am.loadBuffer(`${t}${e}${a+1}.mp3`)));this.sets[e]=i.filter(Boolean)}))}pick(t,e){let n=Math.random()*t.length|0;return t.length>1&&n===this.last[e]&&(n=(n+1+(Math.random()*(t.length-1)|0))%t.length),this.last[e]=n,t[n]}play(t,e=1,n=!1){const i=this.am,r=i.ctx;this.foot=-this.foot;const a=uc[t]||uc.concrete,o=this.sets[a[0]],l=r.createBufferSource();let c,h=null;if(o&&o.length&&t!=="water")l.buffer=this.pick(o,a[0]),l.playbackRate.value=a[3]*(.94+Math.random()*.12)*(n?1.06:1),c=a[2]*(.75+.25*e)*(n?1.15:.9)*(.88+Math.random()*.24),a[1]&&(h=r.createBiquadFilter(),h.type="lowpass",h.frequency.value=a[1]);else{const g=this.synth[t==="water"?"water":"concrete"];l.buffer=this.pick(g,"synth"+t),l.playbackRate.value=.9+Math.random()*.2,c=.35*(.7+.3*e)}const u=r.createGain();u.gain.value=c;const f=r.createStereoPanner();f.pan.value=this.foot*.12,h?(l.connect(h),h.connect(u)):l.connect(u),u.connect(f),f.connect(i.sfxBus);const d=r.createGain();d.gain.value=i.reverbAmount*.8,f.connect(d),d.connect(i.reverb),l.start()}}const fc="dreamscape.musicBag.v1";class kg{constructor(t){this.game=t,this.listener=new cg,t.camera.add(this.listener);const e=this.ctx=this.listener.context;this.master=e.createGain(),this.master.connect(e.destination),this.musicBus=e.createGain(),this.ambBus=e.createGain(),this.sfxBus=e.createGain(),this.musicBus.connect(this.master),this.ambBus.connect(this.master),this.sfxBus.connect(this.master),this.listener.gain.disconnect(),this.listener.gain.connect(this.ambBus),this.reverb=e.createConvolver(),this.reverb.buffer=Ug(e,3,2.6),this.reverbOut=e.createGain(),this.reverbOut.gain.value=.5,this.reverb.connect(this.reverbOut),this.reverbOut.connect(this.master),this.reverbAmount=.15,this.noise={white:ha(e,"white",3,1),pink:ha(e,"pink",4,2),brown:ha(e,"brown",5,3)},this.hums=new Map,this.ambience=null,this.ambName=null,this.unlocked=!1,this.steps=new zg(this),this.sample("door-open"),this.sample("door-close"),this.applyVolumes(),this.musicEl=new Audio,this.musicEl.preload="auto",this.musicEl.crossOrigin="anonymous",this.musicSrc=null,this.musicGain=e.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.musicBus),this.musicEl.addEventListener("ended",()=>this.scheduleNext(2.5+Math.random()*3)),this.musicEl.addEventListener("error",()=>this.scheduleNext(1.5)),this.current=null,this.musicStarted=!1,document.addEventListener("visibilitychange",()=>{document.hidden?(this.ctx.suspend?.(),this.musicEl.pause()):this.unlocked&&(this.ctx.resume?.(),this.musicStarted&&this.musicEl.src&&!this.musicEl.ended&&this.musicEl.play().catch(()=>{}))})}loadBuffer(t){return this.bufCache||(this.bufCache=new Map),this.bufCache.has(t)||this.bufCache.set(t,fetch(t).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>new Promise((n,i)=>this.ctx.decodeAudioData(e,n,i))).catch(e=>(console.warn("sound failed",t,e),null))),this.bufCache.get(t)}sample(t){return this.loadBuffer(`./assets/audio/sfx/${t}.mp3`)}async playSample(t,e=null,n=.8,i=1){if(!this.unlocked)return;const r=await this.sample(t);if(!r)return!1;const a=this.ctx.createBufferSource();return a.buffer=r,a.playbackRate.value=i,a.connect(this._out(e,n)),a.start(),!0}hum(t){return this.hums.has(t)||this.hums.set(t,Ng(this.ctx,t)),this.hums.get(t)}unlock(){if(this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{}),this.unlocked)return;this.unlocked=!0;const t=this.ctx.createBufferSource();if(t.buffer=this.ctx.createBuffer(1,1,22050),t.connect(this.master),t.start(),!this.musicSrc)try{this.musicSrc=this.ctx.createMediaElementSource(this.musicEl),this.musicSrc.connect(this.musicGain)}catch(e){console.warn("music routing",e)}}applyVolumes(){const t=this.game.settings.data,e=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(t.musicVolume*.42,e,.1),this.ambBus.gain.setTargetAtTime(t.ambienceVolume*1,e,.1),this.sfxBus.gain.setTargetAtTime(t.sfxVolume*.9,e,.1),this.master.gain.setTargetAtTime(t.muted?0:1,e,.05)}loadBag(){try{const t=JSON.parse(localStorage.getItem(fc));if(t&&Array.isArray(t.remaining))return t}catch{}return{remaining:[],last:-1}}saveBag(t){try{localStorage.setItem(fc,JSON.stringify(t))}catch{}}nextTrackIndex(){const t=this.loadBag();if(t.remaining=t.remaining.filter(n=>n>=0&&n<sr.length),!t.remaining.length){const n=sr.map((i,r)=>r);for(let i=n.length-1;i>0;i--){const r=Math.random()*(i+1)|0;[n[i],n[r]]=[n[r],n[i]]}if(n.length>1&&n[0]===t.last){const i=1+(Math.random()*(n.length-1)|0);[n[0],n[i]]=[n[i],n[0]]}t.remaining=n}const e=t.remaining.shift();return t.last=e,this.saveBag(t),e}startMusic(){this.musicStarted||(this.musicStarted=!0,this.playNext())}scheduleNext(t){clearTimeout(this._nextT),this._nextT=setTimeout(()=>this.playNext(),t*1e3)}playNext(){const t=this.nextTrackIndex(),e=sr[t];this.current=e,this.musicEl.src=`./assets/audio/music/${e.file}`;const n=this.ctx.currentTime;this.musicGain.gain.cancelScheduledValues(n),this.musicGain.gain.setValueAtTime(0,n),this.musicGain.gain.linearRampToValueAtTime(1,n+4);const i=this.musicEl.play();i&&i.then(()=>this.game.ui?.nowPlaying(e)).catch(()=>{this.musicStarted=!1})}skipTrack(){const t=this.ctx.currentTime;this.musicGain.gain.setTargetAtTime(0,t,.3),setTimeout(()=>{this.musicEl.pause(),this.playNext()},900)}setAmbience(t,{reverb:e=.15}={}){this.reverbAmount=e,this.reverbOut.gain.setTargetAtTime(.35+e,this.ctx.currentTime,.5),t!==this.ambName&&(this.ambience?.stop(2.5),this.ambName=t,this.ambience=Og(this,t),this.ambience.fadeIn(3))}setMuffle(t){(this._muffle||(this._muffle=(()=>{const n=this.ctx.createBiquadFilter();return n.type="lowpass",n.frequency.value=2e4,this.ambBus.disconnect(),this.sfxBus.disconnect(),this.ambBus.connect(n),this.sfxBus.connect(n),n.connect(this.master),n})())).frequency.setTargetAtTime(t?500:2e4,this.ctx.currentTime,.15)}positional(t,{buffer:e,kind:n="hum",base:i=120,volume:r=.3,ref:a=2,rolloff:o=1.4,max:l=40,filter:c=null}){const h=new fg(this.listener);let u=e;if(u||(n==="hum"?u=this.hum(i):n==="static"?u=this.noise.white:n==="water"?u=this.noise.pink:u=this.noise.brown),h.setBuffer(u),h.setLoop(!0),h.setRefDistance(a),h.setRolloffFactor(o),h.setMaxDistance(l),h.setDistanceModel("inverse"),h.setVolume(r),c){const f=this.ctx.createBiquadFilter();f.type=c[0],f.frequency.value=c[1],h.setFilter(f)}if(t.add(h),this.unlocked)try{h.play(Math.random())}catch{}else(this.pending||(this.pending=[])).push(h);return h}flushPending(){for(const t of this.pending||[])try{t.parent&&t.play()}catch{}this.pending=[]}footstep(t,e,n){this.unlocked&&this.steps.play(t,e,n)}_out(t,e){const n=this.ctx,i=n.createGain();if(i.gain.value=e,t){const r=n.createPanner();r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=2,r.rolloffFactor=1.2,r.positionX.value=t.x,r.positionY.value=t.y+1,r.positionZ.value=t.z,i.connect(r),r.connect(this.sfxBus);const a=n.createGain();a.gain.value=this.reverbAmount,r.connect(a),a.connect(this.reverb)}else i.connect(this.sfxBus);return i}tone(t,e,n,{type:i="sine",glide:r=0,pos:a=null,when:o=0,attack:l=.01}={}){if(!this.unlocked)return;const c=this.ctx,h=c.currentTime+o,u=c.createOscillator();u.type=i,u.frequency.setValueAtTime(t,h),r&&u.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),h+e);const f=c.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(n,h+l),f.gain.exponentialRampToValueAtTime(1e-4,h+e),u.connect(f),f.connect(this._out(a,1)),u.start(h),u.stop(h+e+.05)}noiseShot(t,e,n,{type:i="bandpass",q:r=1,pos:a=null,sweep:o=0,attack:l=.005,when:c=0}={}){if(!this.unlocked)return;const h=this.ctx,u=h.currentTime+c,f=h.createBufferSource();f.buffer=this.noise.white;const d=h.createBiquadFilter();d.type=i,d.Q.value=r,d.frequency.setValueAtTime(n,u),o&&d.frequency.exponentialRampToValueAtTime(Math.max(40,n+o),u+t);const g=h.createGain();g.gain.setValueAtTime(1e-4,u),g.gain.exponentialRampToValueAtTime(e,u+l),g.gain.exponentialRampToValueAtTime(1e-4,u+t),f.connect(d),d.connect(g),g.connect(this._out(a,1)),f.start(u,Math.random()*2),f.stop(u+t+.05)}sfx(t,e=null){switch(t){case"creak":this.playSample("door-open",e,.85,.96+Math.random()*.08);break;case"close":this.playSample("door-close",e,.9,.96+Math.random()*.08);break;case"locked":this.noiseShot(.06,.25,1800,{q:3,pos:e}),this.noiseShot(.06,.25,1600,{q:3,pos:e,when:.12});break;case"click":this.noiseShot(.03,.25,3e3,{q:2,pos:e});break;case"ding":this.tone(1318.5,1.6,.12,{pos:e}),this.tone(1046.5,1.8,.1,{pos:e,when:.35});break;case"elevOpen":case"elevClose":this.noiseShot(1,.06,500,{type:"lowpass",pos:e,attack:.2});break;case"elevHum":this.tone(70,2.2,.12,{type:"sawtooth",attack:.5}),this.noiseShot(2.2,.05,200,{type:"lowpass",attack:.5});break;case"static":this.noiseShot(.6,.18,4e3,{type:"highpass",attack:.01});break;case"whoosh":this.noiseShot(1.2,.12,300,{q:2,sweep:2500,attack:.4});break;case"discover":[523.25,659.25,783.99,1046.5].forEach((n,i)=>this.tone(n,1.6,.05,{when:i*.12}));break;case"use":this.tone(880,.08,.04,{});break;case"page":this.noiseShot(.25,.08,2500,{q:.8,sweep:-1500});break;case"splash":this.noiseShot(.5,.25,900,{type:"lowpass",pos:e});break;case"arcade":[440,660,880,1320].forEach((n,i)=>this.tone(n,.09,.05,{type:"square",when:i*.08,pos:e}));break;case"tv":this.noiseShot(1.5,.08,5e3,{type:"highpass",pos:e});break;case"bell":[880,1108.7,1318.5].forEach((n,i)=>this.tone(n,2.4,.05,{when:i*.02,pos:e}));break}}ui(t){t==="hover"?this.tone(1200,.05,.015):t==="open"?this.tone(660,.12,.03,{glide:200}):t==="close"?this.tone(660,.12,.03,{glide:-200}):this.tone(980,.06,.03)}}const Hg="modulepreload",Vg=function(s,t){return new URL(s,t).href},dc={},Be=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");i=a(e.map(h=>{if(h=Vg(h,n),h in dc)return;dc[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!n)for(let v=o.length-1;v>=0;v--){const m=o[v];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":Hg,u||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),u)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},mr=[{id:"starting",num:"00",name:"Starting Zone",preset:"starting",ambience:"starting",reverb:.05,style:"dream",surface:"grass",desc:"Green hills that never end. A small house waits on the far hill, and a cloud that will not move away from it.",notes:"Bright. The road always leads back here.",load:()=>Be(()=>import("./StartingZone-CplPTEzf.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{id:"almond",num:"01",name:"Almond Fields",preset:"almond",ambience:"almond",reverb:.05,style:"dream",surface:"grass",desc:"Golden grass up to the waist. Telephone poles walk toward the horizon in a line that repeats itself.",notes:"Warm wind. Things have been left here on purpose.",load:()=>Be(()=>import("./AlmondFields-B0XTfQN0.js"),__vite__mapDeps([4,1,2,3]),import.meta.url)},{id:"school",bake:!0,num:"02",name:"School Hallways",preset:"school",ambience:"school",reverb:.35,style:"dream",surface:"tile",desc:"Lockers, bulletin boards and classroom doors. The bell has not rung for a very long time.",notes:"Fluorescent hum. One classroom is far too tall.",load:()=>Be(()=>import("./SchoolHallways-yaHGyZFl.js"),__vite__mapDeps([5,1]),import.meta.url)},{id:"pool",bake:!0,num:"03",name:"Average Waterpark",preset:"pool",ambience:"pool",reverb:.8,style:"dream",surface:"tile",desc:"White tiles and turquoise water under arched ceilings. Every sound returns to you twice.",notes:"The deep chamber is quieter than it should be.",load:()=>Be(()=>import("./Poolrooms-k_37l_M9.js"),__vite__mapDeps([6,1,7]),import.meta.url)},{id:"hotel",bake:!0,num:"04",name:"Hotel Halls",preset:"hotel",ambience:"hotel",reverb:.3,style:"dream",surface:"carpet",desc:"A lobby with no guests, warm lamps and a carpet pattern you have seen before.",notes:"A hotel on a rainy street. The fourth floor is closed. Some rooms are larger inside.",load:()=>Be(()=>import("./HotelHalls-CnkwbI2B.js"),__vite__mapDeps([8,1,9,3]),import.meta.url)},{id:"apartments",bake:!0,num:"05",name:"Vintage Apartments",preset:"apartments",ambience:"apartments",reverb:.25,style:"dream",surface:"wood",desc:"Someone lived here. The kettle is still on the stove and the evening light never leaves.",notes:"Stairs, narrow halls, balconies over a hazy town.",load:()=>Be(()=>import("./VintageApartments-cMj_xkqy.js"),__vite__mapDeps([10,1]),import.meta.url)},{id:"mall",bake:!0,num:"06",name:"Mall or No Mall?",preset:"mall",ambience:"mall",reverb:.7,style:"blend",surface:"tile",desc:"An atrium full of light and nobody. The escalators still move.",notes:"One escalator goes to a floor that is not on the directory.",load:()=>Be(()=>import("./ShoppingMall--juZcloD.js"),__vite__mapDeps([11,1,7]),import.meta.url)},{id:"maze",num:"07",name:"Hedge Maze",preset:"maze",ambience:"maze",reverb:.05,style:"blend",surface:"grass",desc:"Tall green walls and the sound of a fountain you cannot find right away.",notes:"Follow the tall tree. Some doors in the hedges are not where they lead.",load:()=>Be(()=>import("./HedgeMaze-C6sBRRB2.js"),__vite__mapDeps([12,1,7]),import.meta.url)},{id:"hallways",bake:!0,num:"08",name:"Hallways of Time",preset:"hallways",ambience:"hallways",reverb:.6,style:"blend",surface:"carpet",desc:"Pieces of every place you have been, joined in the wrong order.",notes:"It changes a little every time you come back.",load:()=>Be(()=>import("./HallwaysOfTime-DcGM9eVb.js"),__vite__mapDeps([13,1,9]),import.meta.url)},{id:"edge",num:"09",name:"The Edge of the World",preset:"edge",ambience:"edge",reverb:.05,style:"blend",surface:"grass",desc:"An ocean with no other shore. Islands connected by bridges that should not hold.",notes:"The horizon is very far away today.",load:()=>Be(()=>import("./EdgeOfTheWorld-m2Un8-UK.js"),__vite__mapDeps([14,1,2,7,9]),import.meta.url)},{id:"broken",num:"10",name:"Broken Reality",preset:"broken",ambience:"broken",reverb:.4,style:"weird",surface:"tile",desc:"Old computers, floating windows and doors with nothing behind them. Something is watching kindly.",notes:"THIS ROOM IS NOT EMPTY.",load:()=>Be(()=>import("./BrokenReality-VdPAkZP7.js"),__vite__mapDeps([15,1,3]),import.meta.url)},{id:"frozen",num:"11",name:"Frozen Dream",preset:"frozen",ambience:"frozen",reverb:.1,style:"dream",surface:"snow",desc:"Snow falling on a forest that holds its breath. A lake frozen into a mirror.",notes:"Cold, still, peaceful. A door stands far away on the hill.",load:()=>Be(()=>import("./FrozenDream-DdfBcmuS.js"),__vite__mapDeps([16,1,2,3]),import.meta.url)},{id:"anemoia",num:"12",name:"Anemoia",preset:"anemoia",ambience:"anemoia",reverb:.1,style:"dream",surface:"concrete",desc:"A neighborhood at sunset that you remember but have never visited.",notes:"The streetlights just came on. Someone left a light on for you.",load:()=>Be(()=>import("./Anemoia-HHsjONBx.js"),__vite__mapDeps([17,1,3]),import.meta.url)}],an=Object.fromEntries(mr.map(s=>[s.id,s])),Gg={starting:{sky:{top:3112928,horizon:13625087,bottom:10404056,cloudCover:.42,cloudOpacity:.95,billboards:14,sunDir:[.5,.75,-.3],sunSize:1400},fog:{color:13624052,near:60,far:520},hemi:[14478591,9083498,1.12],sun:{color:16774368,intensity:2.7,dir:[.5,.75,-.3],shadows:!0},exposure:1,post:{saturation:1.08,contrast:1.02,vignette:.22,grain:.02,haze:.08,hazeColor:15398143}},almond:{sky:{top:5936854,horizon:15982520,bottom:14271642,cloudCover:.3,billboards:8,billboardTint:"#fff4e4",sunDir:[-.6,.38,-.4],sunColor:16767392,sunSize:600,sunGlow:2},fog:{color:15784368,near:40,far:420},hemi:[16770751,10254916,1.02],sun:{color:16765850,intensity:2.9,dir:[-.6,.38,-.4],shadows:!0},exposure:1.02,post:{saturation:1.12,contrast:1.03,gain:16773596,vignette:.3,grain:.03,haze:.18,hazeColor:16769717}},school:{sky:{top:6990056,horizon:15266559,cloudCover:.55,billboards:10,sunDir:[.3,.7,.4]},fog:{color:14673636,near:25,far:90},hemi:[15924223,12896444,1.28],sun:{color:16055295,intensity:1.35,dir:[.32,.88,.22],shadows:!0},exposure:1,post:{saturation:.95,contrast:1,gain:15989759,lift:330248,vignette:.3,grain:.03}},pool:{sky:{top:8175856,horizon:15793151,cloudCover:.4,billboards:6},fog:{color:14217714,near:20,far:110},hemi:[16187391,13495018,1.38],sun:{color:16777215,intensity:1.2,dir:[.25,.9,.15],shadows:!0},exposure:1.05,post:{saturation:1.05,contrast:.98,gain:15794175,vignette:.24,grain:.025,bloom:.3}},hotel:{sky:{top:1054506,horizon:4077648,bottom:2236972,cloudCover:.35,cloudOpacity:.35,stars:.1},fog:{color:2501174,near:16,far:95},hemi:[11582680,3813432,.8],sun:{color:9083592,intensity:.4,dir:[.3,.8,-.4],shadows:!0},exposure:1.08,post:{saturation:1.02,contrast:1.05,gain:16772306,lift:395020,vignette:.4,grain:.04,bloom:.45}},apartments:{sky:{top:7176120,horizon:16042404,bottom:11901578,cloudCover:.35,billboards:8,billboardTint:"#ffe3d0",sunDir:[-.7,.18,.3],sunColor:16756848,sunGlow:2.5,sunSize:300},fog:{color:14203040,near:20,far:160},hemi:[16769736,11045488,1.12],sun:{color:16757370,intensity:1.7,dir:[-.7,.18,.3],shadows:!0},exposure:1,post:{saturation:1,contrast:1.03,gain:16772829,vignette:.32,grain:.035,haze:.06,hazeColor:16767152}},mall:{sky:{top:9091302,horizon:15397626,cloudCover:.5,billboards:8},fog:{color:15001322,near:40,far:160},hemi:[16317439,13685464,1.3],sun:{color:16776436,intensity:1.45,dir:[.22,.9,.3],shadows:!0},exposure:1,post:{saturation:.98,contrast:1.02,vignette:.25,grain:.03,bloom:.25}},maze:{sky:{top:4097752,horizon:14216447,cloudCover:.5,billboards:12,sunDir:[.6,.65,.2],sunSize:1200},fog:{color:13952754,near:50,far:260},hemi:[14872831,5929536,1.1],sun:{color:16774882,intensity:2.8,dir:[.6,.65,.2],shadows:!0},exposure:1,post:{saturation:1.12,contrast:1.03,vignette:.24,grain:.02}},hallways:{sky:{top:10137808,horizon:15722204,cloudCover:.6,billboards:6},fog:{color:15129807,near:25,far:120},hemi:[16774118,13154464,1.25],sun:{color:16773340,intensity:1.05,dir:[.3,.88,.2],shadows:!0},exposure:1,post:{saturation:.95,contrast:1.02,gain:16774374,lift:525572,vignette:.35,grain:.04,haze:.05,hazeColor:16773340}},edge:{sky:{top:3502278,horizon:15266038,bottom:7051960,cloudCover:.38,billboards:16,billboardHeight:20,sunDir:[.3,.35,-.8],sunSize:700,sunGlow:1.5},fog:{color:14280946,near:80,far:900},hemi:[15003903,4876928,1.08],sun:{color:16773594,intensity:2.7,dir:[.3,.35,-.8],shadows:!0},exposure:1,post:{saturation:1.06,contrast:1,vignette:.2,grain:.02,haze:.2,hazeColor:15660799}},broken:{sky:{top:461340,horizon:1715292,bottom:329228,cloudCover:0,cloudOpacity:0,eyes:.55,stars:.5},fog:{color:857136,near:25,far:120},hemi:[10139903,2759226,1],sun:{color:13162751,intensity:.8,dir:[.2,.9,.3],shadows:!0},exposure:1.1,post:{saturation:1.25,contrast:1.08,vignette:.4,grain:.07,aberration:.8,wave:.6,scan:.6,bloom:.45}},frozen:{sky:{top:9349320,horizon:15134196,bottom:13687782,cloudCover:.75,cloudOpacity:.7,cloudColor:15922424,cloudShade:11845840,sunDir:[.2,.25,-.9],sunSize:200,sunGlow:.6,sunColor:14543103},fog:{color:14279406,near:35,far:340},hemi:[15266047,12241112,1.3],sun:{color:14214399,intensity:1.35,dir:[.2,.25,-.9],shadows:!0},exposure:1,post:{saturation:.85,contrast:.98,gain:15660287,lift:329740,vignette:.28,grain:.03}},anemoia:{sky:{top:4874152,horizon:16756874,bottom:10517120,cloudCover:.25,billboards:6,billboardTint:"#ffd6c0",sunDir:[-.8,.12,.2],sunColor:16751194,sunSize:250,sunGlow:3,band:{color:6060644,low:.16,high:.34}},fog:{color:15182222,near:30,far:260},hemi:[16765624,5925456,1.02],sun:{color:16752736,intensity:2.3,dir:[-.8,.12,.2],shadows:!0},exposure:1,post:{saturation:1.18,contrast:1.02,gain:16770774,lift:1050120,vignette:.34,grain:.035,haze:.18,hazeColor:16763048,bloom:.35}},menu:null};class Wg{constructor(t){this.game=t,this.hemi=new ng(16777215,8947848,1),this.sun=new ag(16777215,2),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sunDir=new C(.4,.7,-.3).normalize(),t.scene.add(this.hemi,this.sun,this.sun.target),this.pmrem=null,this.envRT=null}apply(t){const e=this.game,n=uo(e.renderer.quality);this.hemi.color.set(t.hemi[0]),this.hemi.groundColor.set(t.hemi[1]),this.hemi.intensity=t.hemi[2],this.sun.color.set(t.sun.color),this.sun.intensity=t.sun.intensity,this.sunDir.set(...t.sun.dir).normalize();const i=!!e.world?.level?.bake;this.sun.castShadow=!!t.sun.shadows&&!i,i&&(this.sun.intensity*=.35,this.hemi.intensity*=.55);const r=n.shadowMap;this.sun.shadow.mapSize.x!==r&&(this.sun.shadow.mapSize.set(r,r),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.ext=n.shadowExt,this.texel=this.ext*2/r,this.sun.shadow.bias=n.bias,this.sun.shadow.normalBias=n.normalBias,this.sun.shadow.radius=n.shadowSoft?3:1;const a=this.sun.shadow.camera;a.left=-this.ext,a.right=this.ext,a.top=this.ext,a.bottom=-this.ext,a.near=1,a.far=220,a.updateProjectionMatrix(),e.renderer.r.toneMappingExposure=t.exposure??1,e.renderer.setPost(t.post),e.atmosphere.apply(t),this.updateEnv()}updateEnv(){const t=this.game;if(!uo(t.renderer.quality).env){t.scene.environment=null;return}this.pmrem||(this.pmrem=new so(t.renderer.r));const e=new Yc,n=new Pe(new Bi(10,16,8),t.atmosphere.material);e.add(n);const i=this.envRT;this.envRT=this.pmrem.fromScene(e,0,.1,50),t.scene.environment=this.envRT.texture,t.scene.environmentIntensity=.35,n.geometry.dispose(),i?.dispose()}update(){const t=this.game.player.pos,e=this.sunDir,n=Math.abs(e.y)>.99?new C(1,0,0):new C(0,1,0),i=this._r||(this._r=new C),r=this._u||(this._u=new C);i.crossVectors(n,e).normalize(),r.crossVectors(e,i).normalize();const a=this.texel||.03,o=Math.round(t.dot(i)/a)*a,l=Math.round(t.dot(r)/a)*a,c=t.dot(e),h=this.sun.target.position;h.copy(i).multiplyScalar(o).addScaledVector(r,l).addScaledVector(e,c),this.sun.position.copy(h).addScaledVector(e,100),this.sun.target.updateMatrixWorld()}}function Xg(s,t,e){for(const n of s.triggers){if(n.once&&n.fired)continue;const i=t.x>=n.min[0]&&t.x<=n.max[0]&&t.y>=n.min[1]-.1&&t.y<=n.max[1]&&t.z>=n.min[2]&&t.z<=n.max[2];i&&!n.inside?(n.inside=!0,n.fired=!0,n.onEnter?.(e,n)):!i&&n.inside&&(n.inside=!1,n.onExit?.(e,n)),i&&n.onStay?.(e,n)}}function r_(s,t,e,n,i,r,a,o){s.addTrigger({min:[t-i/2,e,n-a/2],max:[t+i/2,e+r,n+a/2],...o})}const ua={light:16776176,dark:328965,static:10133672,white:16777215};class qg{constructor(t){this.game=t,this.level=null,this.busy=!1,this.modules=new Map,this.underwater=!1,this.fallCount=0}async loadModule(t){if(this.modules.has(t))return this.modules.get(t);const n=an[t].load().then(i=>i.default);return this.modules.set(t,n),n}prefetch(t){const e=()=>t.forEach(n=>{an[n]&&this.loadModule(n).catch(()=>this.modules.delete(n))});(window.requestIdleCallback||(n=>setTimeout(n,1500)))(e)}async fade(t,e,n){const i=this.game.renderer;n!==void 0&&i.grade.uniforms.fadeColor.value.set(n);const r=i.fade,a=performance.now();return new Promise(o=>{const l=()=>{const c=Math.min(1,(performance.now()-a)/(e*1e3));i.fade=r+(t-r)*(c*c*(3-2*c)),c<1?requestAnimationFrame(l):o()};l()})}async goTo(t,e="default",n={}){if(this.busy)return;this.busy=!0;const i=this.game,r=n.style||"light",a=n.instant?ua.light:r==="light"&&n.color?n.color:ua[r]??ua.light;i.player.frozen=!0,i.input.releaseJoy(),n.instant?(i.renderer.fade=1,i.renderer.grade.uniforms.fadeColor.value.set(a)):(r==="static"&&i.audio.sfx("static"),await this.fade(1,r==="dark"?.6:.9,a));const o=this.level&&this.level.id===t;if(!o){const f=setTimeout(()=>i.ui.loading(!0),350);try{const d=await this.loadModule(t);this.level&&(this.level.dispose(),Eg()),i.renderer.r.renderLists.dispose();const g=an[t],v=new d(i,g);v.surface=g.surface,await v.build(),v.b.finalize(),i.scene.add(v.group),this.level=v,i.collision.load(v),i.lighting.apply(Gg[g.preset]),i.audio.setAmbience(g.ambience,{reverb:g.reverb}),i.renderer.r.compile(i.scene,i.camera),i.audio.unlocked&&i.audio.flushPending(),this.prefetch(v.neighbors||[])}catch(d){console.error("Failed to load location",t,d),clearTimeout(f),i.ui.loading(!1),this.busy=!1,i.player.frozen=!1,await this.fade(0,.5),i.ui.caption("The way is blocked for now.");return}clearTimeout(f),i.ui.loading(!1)}const l=this.level,c=l.spawns[e]||l.spawns.default,h=n.pos||c.pos;i.player.teleport(h,n.yaw??c.yaw),i.cam.setPitch(0),this.fallCount=0,c.onArrive?.(),i.state==="play"&&(i.player.frozen=!1),(i.state==="play"||i.state==="paused")&&i.save.setLocation(t,e),await new Promise(f=>requestAnimationFrame(()=>requestAnimationFrame(f)));const u=!i.save.data.discovered.includes(t)&&i.state==="play";!n.silent&&!o&&i.ui.hud.showLocation(an[t]),await this.fade(0,n.instant?1.2:1.4),this.busy=!1,i.state==="play"&&(i.player.frozen=!1),u&&i.state!=="menu"&&setTimeout(()=>i.journal.discoverLocation(t),1600),o||l.onEnter?.(e)}async respawnFall(){if(this.busy)return;this.busy=!0;const t=this.game;t.player.frozen=!0,await this.fade(1,.5,16777215),this.fallCount++;const e=this.level,i=this.fallCount>1||!t.player.safe||t.player.safe.y<e.killY+1?e.spawns.default.pos:[t.player.safe.x,t.player.safe.y+.05,t.player.safe.z];t.player.teleport(i),e.onFall?.(),await this.fade(0,.8),this.busy=!1,t.player.frozen=!1}update(t,e){const n=this.level;if(!n)return;n.update(t,e);const i=this.game;i.state==="play"&&Xg(n,i.player.pos,i);const r=i.camera.position;let a=!1;for(const l of n.water)if(r.x>l.x0&&r.x<l.x1&&r.z>l.z0&&r.z<l.z1&&r.y<l.y){a=!0;break}if(a!==this.underwater){this.underwater=a,i.audio.setMuffle(a),a&&i.audio.sfx("splash");const l=i.scene.fog,c=i.atmosphere.baseFog;l&&c&&l.isFog&&(a?(l.color.set(2789270),l.near=.5,l.far=16):(l.color.copy(c.color),l.near=c.near,l.far=c.far))}const o=i.renderer.grade?.uniforms;o&&(o.underwater.value+=((a?1:0)-o.underwater.value)*Math.min(1,t*6))}allLevels(){return mr}}const ms={level:"medium"};function rr(s={}){const t=ms.level==="low"&&!s.forceStandard,e={color:s.color??16777215,map:s.map??null,vertexColors:s.vertexColors??!0,transparent:s.transparent??!1,opacity:s.opacity??1,side:s.side??ln,alphaTest:s.alphaTest??0,depthWrite:s.depthWrite??!(s.transparent??!1),fog:s.fog??!0};let n;return s.unlit?n=new gs(e):t?n=new eg({...e,emissive:s.emissive??0,emissiveIntensity:s.emissiveIntensity??1,emissiveMap:s.emissiveMap??null}):n=new tg({...e,roughness:s.roughness??.85,metalness:s.metalness??0,emissive:s.emissive??0,emissiveIntensity:s.emissiveIntensity??1,emissiveMap:s.emissiveMap??null,envMapIntensity:s.envMapIntensity??1}),s.polygonOffset&&(n.polygonOffset=!0,n.polygonOffsetFactor=-2,n.polygonOffsetUnits=-2),n.userData.texScale=s.texScale??[2,2],n}const me={radius:.32,height:1.72,eye:1.6,step:.48,walk:3.1,run:5.6,accel:11,decel:13,gravity:22};class Yg{constructor(t){this.game=t,this.pos=new C,this.vel=new C,this.vy=0,this.grounded=!0,this.surface="grass",this.safe=new C,this.safeTimer=0,this.frozen=!1,this.speed=0,this.landImpact=0,this.airTime=0}teleport(t,e){this.pos.set(t[0],t[1],t[2]);const n=this.game.collision.groundAt(this.pos.x,this.pos.z,this.pos.y+1.5);n.y>-1/0&&Math.abs(n.y-this.pos.y)<3&&(this.pos.y=n.y),this.vel.set(0,0,0),this.vy=0,this.safe.copy(this.pos),e!==void 0&&this.game.cam.setYaw(e),this.game.cam.snap(this)}update(t){const e=this.game.input,n=this.game.collision,i=this.game.cam,r=this.frozen?{x:0,y:0}:e.move,a=Math.min(1,Math.hypot(r.x,r.y)),o=(e.run?me.run:me.walk)*(this.game.settings.data.alwaysRun?1.35:1),l=i.yaw,c=-Math.sin(l),h=-Math.cos(l),u=Math.cos(l),f=-Math.sin(l);let d=c*r.y+u*r.x,g=h*r.y+f*r.x;const v=Math.hypot(d,g);v>1e-4&&(d/=v,g/=v);const m=o*a,p=d*m,E=g*m,x=a>.01?me.accel:me.decel,_=1-Math.exp(-x*t);this.vel.x+=(p-this.vel.x)*_,this.vel.z+=(E-this.vel.z)*_;const F=Math.hypot(this.vel.x,this.vel.z)*t,w=Math.max(1,Math.ceil(F/(me.radius*.5))),L=this.pos.clone();for(let A=0;A<w;A++)this.pos.x+=this.vel.x*t/w,this.pos.z+=this.vel.z*t/w,n.resolve(this.pos,me.radius,this.pos.y+me.step,this.pos.y+me.height);const D=Math.hypot(this.pos.x-L.x,this.pos.z-L.z)/Math.max(t,1e-4);this.speed=D,D<Math.hypot(this.vel.x,this.vel.z)*.5&&(this.vel.x*=.6,this.vel.z*=.6);const M=n.groundAt(this.pos.x,this.pos.z,this.pos.y+me.step);M.y>-1/0&&(this.surface=M.surface),this.grounded&&M.y>-1/0&&this.pos.y-M.y<me.step+.05&&this.vy<=0?(this.pos.y=M.y,this.vy=0,this.airTime=0):(this.vy-=me.gravity*t,this.pos.y+=this.vy*t,this.airTime+=t,M.y>-1/0&&this.pos.y<=M.y&&(this.vy<-6&&(this.landImpact=Math.min(1,-this.vy/16)),this.pos.y=M.y,this.vy=0)),this.grounded=M.y>-1/0&&this.pos.y-M.y<.02;const y=n.ceilingAt(this.pos.x,this.pos.z,this.pos.y+me.step+.01,me.radius*.7);this.vy>0&&this.pos.y+me.height>y&&(this.vy=0),this.grounded&&(this.safeTimer+=t,this.safeTimer>.5&&(this.safe.copy(this.pos),this.safeTimer=0));const P=this.game.world.level;P&&this.pos.y<P.killY&&this.game.world.respawnFall()}}class $g{constructor(t,e){this.game=t,this.camera=e,this.yaw=0,this.pitch=0,this.tYaw=0,this.tPitch=0,this.eyeY=0,this.phase=0,this.bobAmt=0,this.t=0,this.lastStep=0,this.dip=0,this.extraRoll=0,this.shake=0,e.rotation.order="YXZ"}setYaw(t){this.yaw=this.tYaw=t}setPitch(t){this.pitch=this.tPitch=t}snap(t){this.eyeY=t.pos.y+me.eye,this.yaw=this.tYaw,this.pitch=this.tPitch,this.update(0,t)}updateFov(){const t=this.game.settings.data,e=this.camera.aspect,n=t.fov,i=68*Math.PI/180,r=2*Math.atan(Math.tan(i/2)/e)*180/Math.PI;this.camera.fov=Math.min(95,Math.max(n,r)),this.camera.updateProjectionMatrix()}update(t,e){const n=this.game.input,i=this.game.settings.data;if(this.t+=t,t>0&&n.enabled){const U=n.consumeLook(),B=.0022*i.sensitivity*(n.isTouch?.75:1);this.tYaw-=U.x*B,this.tPitch-=U.y*B*(i.invertY?-1:1),this.tPitch=Math.max(-1.45,Math.min(1.45,this.tPitch))}const r=1-Math.exp(-(n.isTouch?22:30)*t);this.yaw+=(this.tYaw-this.yaw)*r,this.pitch+=(this.tPitch-this.pitch)*r;const a=e.pos.y+me.eye,o=1-Math.exp(-16*t);Math.abs(a-this.eyeY)>1.2?this.eyeY=a:this.eyeY+=(a-this.eyeY)*o;const l=i.headBob?1:.25,c=e.grounded?e.speed:0,h=Math.min(1.25,c/me.walk);this.bobAmt+=(h-this.bobAmt)*(1-Math.exp(-7*t));const u=1.75+Math.min(c,me.run)*.16;this.phase+=t*u*Math.PI*Math.min(1,this.bobAmt*1.3);const f=this.bobAmt*l,d=Math.abs(Math.sin(this.phase))*.055*f-.03*f,g=Math.cos(this.phase)*.032*f,v=Math.cos(this.phase)*.011*f,m=Math.sin(this.phase*2)*.006*f,p=Math.floor(this.phase/Math.PI);p!==this.lastStep&&(this.lastStep=p,(f>.15||this.bobAmt>.15)&&this.game.audio.footstep(e.surface,Math.min(1,this.bobAmt),e.speed>4.2));const E=(1-Math.min(1,this.bobAmt))*l,x=this.t,_=Math.sin(x*1.45)*.009*E,F=(Math.sin(x*.53)*.6+Math.sin(x*.91+1.3)*.4)*.0045*E,w=(Math.sin(x*.71+.4)*.6+Math.sin(x*1.27)*.4)*.0035*E,L=Math.sin(x*.37+2.1)*.003*E;e.landImpact>0&&(this.dip=Math.max(this.dip,e.landImpact*.18),e.landImpact=0),this.dip*=Math.exp(-7*t);let D=0,M=0;this.shake>0&&(this.shake*=Math.exp(-4*t),D=(Math.random()-.5)*this.shake*.02,M=(Math.random()-.5)*this.shake*.02);const y=this.camera,P=Math.cos(this.yaw),A=-Math.sin(this.yaw);y.position.set(e.pos.x+P*g+D,this.eyeY+d+_-this.dip+M,e.pos.z+A*g),y.rotation.set(this.pitch+m+w,this.yaw+F,v+L+this.extraRoll)}}const In=4;class jg{constructor(){this.clear()}clear(){this.grid=new Map,this.boxes=[],this.ramps=[],this.heightAt=null,this.terrainSurface="grass",this.defaultSurface="concrete"}load(t){this.clear(),this.heightAt=t.heightAt,this.surfaceAt=t.surfaceAt?t.surfaceAt.bind(t):null,this.terrainSurface=t.terrainSurface,this.defaultSurface=t.surface;for(const e of t.colliders)this.addBox(e);this.ramps=t.ramps}addBox(t){this.boxes.push(t);const e=Math.floor(t.min[0]/In),n=Math.floor(t.max[0]/In),i=Math.floor(t.min[2]/In),r=Math.floor(t.max[2]/In);if((n-e+1)*(r-i+1)>4e3){(this.big||(this.big=[])).push(t);return}for(let a=e;a<=n;a++)for(let o=i;o<=r;o++){const l=a*73856093^o*19349663;let c=this.grid.get(l);c||(c=[],this.grid.set(l,c)),c.push(t)}}query(t,e,n){const i=new Set(this.big||[]),r=Math.floor((t-n)/In),a=Math.floor((t+n)/In),o=Math.floor((e-n)/In),l=Math.floor((e+n)/In);for(let c=r;c<=a;c++)for(let h=o;h<=l;h++){const u=this.grid.get(c*73856093^h*19349663);if(u)for(const f of u)i.add(f)}return i}groundAt(t,e,n,i=.18){let r=-1/0,a=this.defaultSurface;if(this.heightAt){const o=this.heightAt(t,e);o<=n&&(r=o,a=this.surfaceAt&&this.surfaceAt(t,e)||this.terrainSurface)}for(const o of this.query(t,e,i)){if(!o.enabled||t+i<o.min[0]||t-i>o.max[0]||e+i<o.min[2]||e-i>o.max[2])continue;const l=o.max[1];l<=n&&l>r&&(r=l,a=o.surface||this.defaultSurface)}for(const o of this.ramps){if(t<o.x0||t>o.x1||e<o.z0||e>o.z1)continue;const l=o.axis==="x"?(t-o.x0)/(o.x1-o.x0):(e-o.z0)/(o.z1-o.z0),c=o.yA+(o.yB-o.yA)*l;c<=n&&c>r&&(r=c,a=o.surface||this.defaultSurface)}return{y:r,surface:a}}resolve(t,e,n,i){let r=!1;for(let a=0;a<3;a++){let o=!1;for(const l of this.query(t.x,t.z,e+.1)){if(!l.enabled||l.max[1]<=n||l.min[1]>=i)continue;const c=Math.max(l.min[0],Math.min(t.x,l.max[0])),h=Math.max(l.min[2],Math.min(t.z,l.max[2]));let u=t.x-c,f=t.z-h;const d=u*u+f*f;if(!(d>=e*e)){if(d>1e-8){const g=Math.sqrt(d),v=e-g;t.x+=u/g*v,t.z+=f/g*v}else{const g=[t.x-l.min[0]+e,l.max[0]-t.x+e,t.z-l.min[2]+e,l.max[2]-t.z+e],v=Math.min(...g),m=g.indexOf(v);m===0?t.x-=v:m===1?t.x+=v:m===2?t.z-=v:t.z+=v}o=r=!0}}if(!o)break}return r}ceilingAt(t,e,n,i){let r=1/0;for(const a of this.query(t,e,i))a.enabled&&(t+i<a.min[0]||t-i>a.max[0]||e+i<a.min[2]||e-i>a.max[2]||a.min[1]>=n&&a.min[1]<r&&(r=a.min[1]));return r}segmentBlocked(t,e,n,i,r,a,o=null){const l=Math.min(t,i),c=Math.max(t,i),h=Math.min(n,a),u=Math.max(n,a);for(const f of this.query((t+i)/2,(n+a)/2,Math.max(c-l,u-h)/2+.5)){if(!f.enabled||o&&o.has(f)||i>=f.min[0]-.05&&i<=f.max[0]+.05&&r>=f.min[1]-.05&&r<=f.max[1]+.05&&a>=f.min[2]-.05&&a<=f.max[2]+.05)continue;let d=0,g=1;const v=[t,e,n],m=[i-t,r-e,a-n];let p=!0;for(let E=0;E<3;E++){if(Math.abs(m[E])<1e-9){if(v[E]<f.min[E]||v[E]>f.max[E]){p=!1;break}continue}let x=(f.min[E]-v[E])/m[E],_=(f.max[E]-v[E])/m[E];if(x>_&&([x,_]=[_,x]),d=Math.max(d,x),g=Math.min(g,_),d>g){p=!1;break}}if(p&&d<.97)return!0}return!1}}class Jg{constructor(t){this.game=t,this.ray=new dg,this.ray.far=3.2,this.focus=null,this.center=new nt(0,0),this.cooldown=0}update(t){const e=this.game.world.level;this.cooldown=Math.max(0,this.cooldown-t);let n=null;if(e&&this.game.state==="play"){const a=this.game.camera;this.ray.setFromCamera(this.center,a);const o=[];for(const c of e.interactables)c.enabled!==!1&&c.mesh&&o.push(c.mesh);const l=this.ray.intersectObjects(o,!0);for(const c of l){let h=c.object;for(;h&&!h.userData.interactable;)h=h.parent;if(!h)continue;const u=h.userData.interactable;if(c.distance>(u.range??2.8))continue;const f=a.position,d=c.point,g=Math.max(.01,c.distance),v=Math.max(0,(g-.3)/g),m=f.x+(d.x-f.x)*v,p=f.y+(d.y-f.y)*v,E=f.z+(d.z-f.z)*v;if(this.game.collision.segmentBlocked(f.x,f.y,f.z,m,p,E,u.colliders?new Set(u.colliders):null))break;n=u;break}}n!==this.focus&&(this.focus=n,this.game.ui.hud.setPrompt(n?typeof n.prompt=="function"?n.prompt():n.prompt:null));const i=this.game.input;if((i.edge("interact")||i.isTouch&&i.edge("tap")&&!!this.focus)&&this.focus&&this.cooldown<=0){this.cooldown=.35,this.game.audio.ui("use"),this.focus.use(this.game);const a=this.focus;this.game.ui.hud.setPrompt(a&&a.enabled!==!1?typeof a.prompt=="function"?a.prompt():a.prompt:null)}}triggerFocused(){this.focus&&this.cooldown<=0&&this.game.input.edges.add("interact")}}function a_(s,t){return t.mesh=s,s.userData.interactable=t,t}const Zg=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_Position.z = gl_Position.w; // push to far plane
}`,Kg=`
uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom;
uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunSize; uniform float sunGlow;
uniform float cloudCover; uniform float cloudOpacity; uniform vec3 cloudColor; uniform vec3 cloudShade; uniform float cloudScale; uniform float cloudHeight;
uniform float time; uniform float horizonSharp;
uniform sampler2D eyes; uniform float eyesMix; uniform float stars;
uniform float bandMix; uniform vec3 bandColor; uniform float bandLow; uniform float bandHigh;
varying vec3 vDir;
float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.03; a*=0.5; } return v; }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col;
  if (h > 0.0) col = mix(horizon, top, pow(clamp(h,0.0,1.0), horizonSharp));
  else col = mix(horizon, bottom, pow(clamp(-h,0.0,1.0), 0.45));
  float sd = max(dot(d, normalize(sunDir)), 0.0);
  col += sunColor * (pow(sd, sunSize) * 1.6 + pow(sd, 8.0) * 0.18 * sunGlow);
  if (h > -0.02 && cloudOpacity > 0.0) {
    vec2 uv = d.xz / (d.y + cloudHeight) * cloudScale;
    float n = fbm(uv + vec2(time * 0.006, time * 0.002));
    float n2 = fbm(uv * 2.3 - vec2(time * 0.004, 0.0));
    float c = smoothstep(1.0 - cloudCover, 1.0 - cloudCover + 0.28, n * 0.75 + n2 * 0.35);
    c *= smoothstep(-0.02, 0.12, h);
    vec3 cc = mix(cloudShade, cloudColor, smoothstep(0.3, 0.9, n2 + sd * 0.3));
    col = mix(col, cc, c * cloudOpacity);
  }
  if (bandMix > 0.0) {
    // heavy cloud bank (used for stormy/green sunset skies)
    vec2 uv = d.xz / (d.y + 0.25) * 1.4;
    float n = fbm(uv * 1.5 + vec2(time * 0.004, 0.0));
    float band = smoothstep(bandLow, bandHigh, h + (n - 0.5) * 0.18);
    col = mix(col, bandColor * (0.75 + n * 0.5), band * bandMix);
  }
  if (eyesMix > 0.0) {
    vec2 euv = vec2(atan(d.x, d.z) / 6.2831 * 4.0, h * 2.0);
    vec4 e = texture2D(eyes, euv);
    col = mix(col, e.rgb, eyesMix * smoothstep(-0.1, 0.05, h));
  }
  if (stars > 0.0 && h > 0.0) {
    vec2 sp = floor(d.xz / (d.y + 0.3) * 260.0);
    float s = step(0.9975, hash(sp)) * stars * smoothstep(0.0, 0.3, h);
    col += vec3(s);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class Qg{constructor(t){this.game=t,this.uniforms={top:{value:new Tt(4165606)},horizon:{value:new Tt(13625343)},bottom:{value:new Tt(10205132)},sunDir:{value:new C(.4,.6,-.5)},sunColor:{value:new Tt(16773846)},sunSize:{value:900},sunGlow:{value:1},cloudCover:{value:.45},cloudOpacity:{value:.9},cloudColor:{value:new Tt(16777215)},cloudShade:{value:new Tt(13227752)},cloudScale:{value:.8},cloudHeight:{value:.12},time:{value:0},horizonSharp:{value:.55},eyes:{value:null},eyesMix:{value:0},stars:{value:0},bandMix:{value:0},bandColor:{value:new Tt(5664858)},bandLow:{value:.12},bandHigh:{value:.32}},this.material=new we({uniforms:this.uniforms,vertexShader:Zg,fragmentShader:Kg,side:Le,depthWrite:!1,fog:!1}),this.dome=new Pe(new Bi(500,32,16),this.material),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.group=new wi,this.group.add(this.dome),this.clouds=new wi,this.group.add(this.clouds),t.scene.add(this.group)}apply(t){const e=this.uniforms,n=t.sky||{};e.top.value.set(n.top??4165606),e.horizon.value.set(n.horizon??13625343),e.bottom.value.set(n.bottom??n.horizon??10205132),e.sunDir.value.set(...n.sunDir||t.sun?.dir||[.4,.6,-.5]).normalize(),e.sunColor.value.set(n.sunColor??16773846),e.sunSize.value=n.sunSize??900,e.sunGlow.value=n.sunGlow??1,e.cloudCover.value=n.cloudCover??.45,e.cloudOpacity.value=n.cloudOpacity??.9,e.cloudColor.value.set(n.cloudColor??16777215),e.cloudShade.value.set(n.cloudShade??13227752),e.cloudScale.value=n.cloudScale??.8,e.horizonSharp.value=n.horizonSharp??.55,e.stars.value=n.stars??0,e.bandMix.value=n.band?1:0,n.band&&(e.bandColor.value.set(n.band.color),e.bandLow.value=n.band.low,e.bandHigh.value=n.band.high),n.eyes?(e.eyes.value=Ag(),e.eyesMix.value=n.eyes):e.eyesMix.value=0;for(const c of[...this.clouds.children])c.material.dispose(),this.clouds.remove(c);const i=n.billboards??0,r=n.billboardTint??"#ffffff";let a=7;const o=()=>(a=a*16807%2147483647,a/2147483647);for(let c=0;c<i;c++){const h=new Po({map:Rg(c%5,r),transparent:!0,depthWrite:!1,fog:!1,opacity:.95}),u=new jc(h),f=o()*Math.PI*2,d=260+o()*160,g=(n.billboardHeight??70)+o()*90;u.position.set(Math.cos(f)*d,g,Math.sin(f)*d);const v=90+o()*110;u.scale.set(v,v*.62,1),u.renderOrder=-9,this.clouds.add(u)}const l=t.fog;l?this.game.scene.fog=l.density?new Ro(l.color,l.density):new Co(l.color,l.near??30,l.far??300):this.game.scene.fog=null,this.baseFog=this.game.scene.fog?{color:this.game.scene.fog.color.clone(),near:this.game.scene.fog.near,far:this.game.scene.fog.far,density:this.game.scene.fog.density}:null,this.cloudSpeed=n.cloudSpeed??.004}update(t,e){this.uniforms.time.value=e;const n=this.game.camera;this.group.position.copy(n.position),this.clouds.rotation.y+=t*this.cloudSpeed}}const mh={time:{value:0}};function tv(s){mh.time.value=s}function ev(s,t){const e=new ve,n=2,i=[],r=[],a=[],o=[];for(let l=0;l<=n;l++){const c=l/n,h=t*(1-c*.9);i.push(-h/2,c*s,0,h/2,c*s,0);const u=.72+c*.42;r.push(u,u,u,u,u,u),a.push(0,1,.15,0,1,.15)}for(let l=0;l<n;l++){const c=l*2;o.push(c,c+1,c+2,c+1,c+3,c+2,c,c+2,c+1,c+1,c+2,c+3)}return e.setAttribute("position",new Zt(i,3)),e.setAttribute("color",new Zt(r,3)),e.setAttribute("normal",new Zt(a,3)),e.setIndex(o),e}function nv(s,t,e=1){const n=rr({color:s,vertexColors:!0,side:ln,roughness:.9});return n.onBeforeCompile=i=>{i.uniforms.time=mh.time,i.uniforms.sway={value:t},i.uniforms.bh={value:e},i.vertexShader=`uniform float time; uniform float sway; uniform float bh;
`+i.vertexShader.replace("#include <project_vertex>",`
      vec4 mvPosition = vec4( transformed, 1.0 );
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      float hgt = clamp(position.y / bh, 0.0, 1.0);
      float w = sin(time * 1.6 + mvPosition.x * 0.35 + mvPosition.z * 0.22) * 0.6 + sin(time * 2.7 + mvPosition.x * 0.9) * 0.25;
      float gust = 0.5 + 0.5 * sin(time * 0.35 + mvPosition.x * 0.05 + mvPosition.z * 0.03);
      mvPosition.x += w * sway * hgt * hgt * (0.6 + gust);
      mvPosition.z += w * sway * 0.5 * hgt * hgt;
      mvPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * mvPosition;`)},n.customProgramCacheKey=()=>"wind",n}function o_(s,{x0:t,z0:e,x1:n,z1:i,heightAt:r,avoid:a=null,density:o=1,height:l=.45,width:c=.06,color:h=7117384,tint:u=[.85,1.15],sway:f=.12,chunk:d=24,seed:g=3}){const m=o*({low:.3,medium:.55,high:.95}[ms.level]??.7),p=ev(1,c/l);p.scale(l,l,l);const E=nv(h,f,l);s.disposables.push(p,E);const x=Kt(g),_=new fe,F=new Tt,w=[];for(let P=t;P<n;P+=d)for(let A=e;A<i;A+=d){const U=Math.floor(d*d*5*m),B=[];for(let I=0;I<U;I++){const H=P+x()*d,N=A+x()*d;H>n||N>i||a&&a(H,N)||B.push([H,r?r(H,N):0,N,x()*Math.PI,.6+x()*.8])}if(!B.length)continue;const W=new Jc(p,E,B.length);B.forEach((I,H)=>{_.position.set(I[0],I[1],I[2]),_.rotation.set(0,I[3],0),_.scale.set(1,I[4],1),_.updateMatrix(),W.setMatrixAt(H,_.matrix);const N=u[0]+x()*(u[1]-u[0]);W.setColorAt(H,F.setRGB(N,N*(.95+x()*.1),N))}),W.receiveShadow=!0,W.computeBoundingSphere(),W.userData.center=new C(P+d/2,B[0][1],A+d/2),s.group.add(W),w.push(W)}const L={low:38,medium:55,high:80}[ms.level]??55;let D=0;const M=s.game,y=()=>{const P=M.camera.position;for(const A of w){const U=A.userData.center;A.visible=Math.hypot(U.x-P.x,U.z-P.z)<L+d*.7}};y(),s.onUpdate(P=>{D-=P,D<=0&&(D=.3,y())})}function l_(s,t,{kind:e="round",leaf:n=5209914,trunk:i=5981750,snow:r=!1,cast:a=!0}={}){if(!t.length)return;const o=rr({map:wg(),color:i===5981750?16777215:i,vertexColors:!1,texScale:[1,1]}),l=rr({map:Tg(n),color:16777215,vertexColors:!1,roughness:.95});s.disposables.push(o,l);let c,h;if(e==="pine"){c=new ti(.12,.2,2,6),c.translate(0,1,0);const u=[];for(let f=0;f<4;f++){const d=new pr(1.7-f*.35,2.2,8);d.translate(0,1.6+f*1.25,0),u.push(d)}if(h=fa(u),r){const f=[];for(let v=0;v<4;v++){const m=new pr(1.2-v*.28,.9,8);m.translate(0,2.3+v*1.25,0),f.push(m)}const d=fa(f),g=rr({color:16054527,vertexColors:!1,roughness:.9});s.disposables.push(g,d),da(s,d,g,t,!1)}}else if(e==="poplar")c=new ti(.1,.16,2,6),c.translate(0,1,0),h=new Bi(1,10,8),h.scale(.9,3.2,.9),h.translate(0,4.2,0);else if(e==="lollipop")c=new ti(.07,.09,2.6,6),c.translate(0,1.3,0),h=new Bi(1.1,14,10),h.translate(0,3.4,0);else{c=new ti(.16,.26,3,7),c.translate(0,1.5,0);const u=[],f=Kt(9);for(let d=0;d<5;d++){const g=new Io(1.2+f()*.6,1);g.translate((f()-.5)*1.8,3.6+f()*1.4,(f()-.5)*1.8),u.push(g)}h=fa(u)}s.disposables.push(c,h),da(s,c,o,t,a),da(s,h,l,t,a);for(const u of t)s.addCollider(u[0]-.25*(u[4]||1),u[1],u[2]-.25*(u[4]||1),u[0]+.25*(u[4]||1),u[1]+3,u[2]+.25*(u[4]||1),null)}function fa(s){const t=s.map(i=>{const r=i.index?i.toNonIndexed():i;for(const a of Object.keys(r.attributes))["position","normal","uv"].includes(a)||r.deleteAttribute(a);return r});let e=0;t.forEach(i=>{e+=i.attributes.position.count});const n=new ve;for(const i of["position","normal","uv"]){const r=t[0].attributes[i].itemSize,a=new Float32Array(e*r);let o=0;for(const l of t)a.set(l.attributes[i].array,o),o+=l.attributes[i].array.length;n.setAttribute(i,new ke(a,r))}return s.forEach(i=>i.dispose()),n}function da(s,t,e,n,i){const r=new Jc(t,e,n.length),a=new fe;return n.forEach((o,l)=>{a.position.set(o[0],o[1],o[2]),a.rotation.set(0,o[3]||0,0),a.scale.setScalar(o[4]||1),a.updateMatrix(),r.setMatrixAt(l,a.matrix)}),r.castShadow=i,r.receiveShadow=!0,r.computeBoundingSphere(),s.group.add(r),r}function c_(s,t,e,n,{w:i=.6,d:r=1.2,flicker:a=!1,color:o=16055295,light:l=!1,rotY:c=0}={}){const h=new gs({color:o,toneMapped:!1}),u=new Pe(new Vi(i,.04,r),h);u.position.set(t,e-.02,n),u.rotation.y=c,s.group.add(u),s.disposables.push(h,u.geometry);let f=null;if(s.bake&&!a){const d=new Tt(o);s.bakeLights.push({pos:[t,e-.12,n],color:[d.r,d.g,d.b],intensity:1.5+i*r*.7,r0:2.1,range:11,down:!0})}if(l&&(f=new sg(15661311,4,9,1.6),f.userData.dynamic=!!a,f.position.set(t,e-.4,n),s.group.add(f)),a){const d=new Tt(o),g=d.clone().multiplyScalar(.25);let v=0,m=!0;s.onUpdate(p=>{v-=p,v<=0&&(m=!m,v=m?.4+Math.random()*4:.03+Math.random()*.12,h.color.copy(m?d:g),f&&(f.intensity=m?4:.3))})}return u}function h_(s,t,{amp:e=.25,speed:n=.6,spin:i=.1,phase:r=Math.random()*6}={}){const a=t.position.y;s.onUpdate((o,l)=>{t.position.y=a+Math.sin(l*n+r)*e,t.rotation.y+=i*o})}function u_(s,t,e,n,i=1.2,r="#fff2d0",a=.6){const o=new jc(new Po({map:Cg(r),transparent:!0,opacity:a,depthWrite:!1,blending:ar}));if(o.position.set(t,e,n),o.scale.setScalar(i),s.group.add(o),s.bake&&a>.15){const l=new Tt(r);s.bakeLights.push({pos:[t,e,n],color:[l.r,l.g,l.b],intensity:a*i*.55,r0:Math.max(.6,i*.7),range:Math.max(4,i*5)})}return s.disposables.push(o.material),o}function f_(s,t,e){const n=s.game,i=new xr,r=new te;let a=0,o=0;const l=new Fn;s.onUpdate(c=>{const h=n.camera;if(r.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),i.setFromProjectionMatrix(r),l.setFromObject(t),i.intersectsBox(l)){o=0;return}if(o+=c,o>4){a=(a+1)%e.length;const u=e[a];t.position.set(u[0],u[1],u[2]),u[3]!==void 0&&(t.rotation.y=u[3]),o=-8}})}class iv{constructor(t){this.game=t,this.root=document.getElementById("hud"),this.reticle=document.getElementById("reticle"),this.prompt=document.getElementById("prompt"),this.promptText=document.getElementById("prompt-text"),this.useBtn=document.getElementById("btn-use"),this.useLabel=document.getElementById("btn-use-label"),this.title=document.getElementById("location-title"),this.caption=document.getElementById("caption"),this.fps=document.getElementById("fps"),this.lockHint=document.getElementById("lock-hint"),this.useBtn.addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault(),t.input.edges.add("interact")}),document.getElementById("btn-pause").addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault(),t.pause()}),document.getElementById("btn-journal").addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault(),t.openJournal()}),this.captionTimer=0,this.titleTimer=0}show(t){this.root.classList.toggle("hidden",!t)}setPrompt(t){this.reticle.classList.toggle("focus",!!t),t?(this.promptText.textContent=t,this.prompt.classList.remove("hidden"),this.useLabel.textContent=t,this.useBtn.classList.remove("hidden")):(this.prompt.classList.add("hidden"),this.useBtn.classList.add("hidden"))}showLocation(t){t&&(this.title.querySelector(".lt-num").textContent=`LEVEL ${t.num}`,this.title.querySelector(".lt-name").textContent=t.name,this.title.classList.toggle("weird",t.style==="weird"),this.title.classList.add("show"),clearTimeout(this.titleTimer),this.titleTimer=setTimeout(()=>this.title.classList.remove("show"),4200))}setCaption(t,{mono:e=!1,time:n=4.5}={}){this.caption.textContent=t,this.caption.classList.toggle("mono",e),this.caption.classList.add("show"),clearTimeout(this.captionTimer),this.captionTimer=setTimeout(()=>this.caption.classList.remove("show"),n*1e3)}setLockHint(t){this.lockHint.classList.toggle("hidden",!t)}}const Te=s=>String(s??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Li(s){const t=document.createElement("template");return t.innerHTML=s.trim(),t.content.firstElementChild}function Tr(s,t,e,n){const i=document.getElementById("menu-root"),r=Li(`<div class="screen dim"><div class="panel">
    <div class="panel-head"><div><h2>${Te(t)}</h2>${e?`<div class="sub">${Te(e)}</div>`:""}</div><button class="close-btn" aria-label="Close">✕</button></div>
    <div class="panel-body"></div></div></div>`);i.appendChild(r),s.audio.ui("open");const a=r.querySelector(".panel-body");let o=!1;const l=()=>{o||(o=!0,s.audio.ui("close"),r.remove(),s.ui.popEsc(l),n?.())};return r.querySelector(".close-btn").onclick=l,r.addEventListener("pointerdown",c=>{c.target===r&&l()}),s.ui.pushEsc(l),{el:r,body:a,close:l}}function gh(s,t){const e=s.settings,{body:n,close:i}=Tr(s,"Settings","saved automatically",t),r=(c,h,u)=>`<div class="set-row"><label>${c}${h?`<small>${h}</small>`:""}</label>${u}</div>`,a=(c,h)=>`<div class="seg" data-key="${c}">${h.map(([u,f])=>`<button data-v="${u}" class="${e.data[c]===u?"on":""}">${f}</button>`).join("")}</div>`,o=(c,h,u,f)=>`<input type="range" data-key="${c}" min="${h}" max="${u}" step="${f}" value="${e.data[c]}" />`,l=c=>`<button class="toggle ${e.data[c]?"on":""}" data-toggle="${c}" aria-label="${c}"></button>`;return n.innerHTML=[r("Graphics","Low (default) is fastest · Medium adds soft shadows & reflections · High adds bloom & sharper shadows",a("quality",[["low","Low"],["medium","Medium"],["high","High"]])),r("Music","Dreamcore playlist, shuffled",o("musicVolume",0,1,.05)),r("Ambience","Wind, water, hum",o("ambienceVolume",0,1,.05)),r("Effects","Footsteps, doors",o("sfxVolume",0,1,.05)),r("Look sensitivity","",o("sensitivity",.3,2.5,.05)),r("Field of view","",o("fov",55,90,1)),r("Head bob","Camera sway while walking",l("headBob")),r("Always run","",l("alwaysRun")),r("Invert look","",l("invertY")),r("Vignette","",l("vignette")),r("Film grain","",l("grain")),r("Show FPS","",l("showFps")),'<div class="set-row"><label>Next song<small>Skip to another track</small></label><button class="menu-btn" data-act="skip" style="padding:.45rem .9rem;font-size:.8rem">Skip ▸</button></div>','<div class="set-row"><label>Erase dream<small>Clears progress and journal</small></label><button class="menu-btn" data-act="reset" style="padding:.45rem .9rem;font-size:.8rem">Erase</button></div>'].join(""),n.addEventListener("click",c=>{const h=c.target.closest("button");if(!h)return;const u=h.closest(".seg");if(u){const f=u.dataset.key,d=h.dataset.v;u.querySelectorAll("button").forEach(g=>g.classList.toggle("on",g===h)),e.set(f,d),f==="quality"&&e.set("qualityChosen",!0),s.applySettings(f),s.audio.ui("click")}else if(h.dataset.toggle){const f=h.dataset.toggle;e.set(f,!e.data[f]),h.classList.toggle("on",e.data[f]),s.applySettings(f),s.audio.ui("click")}else h.dataset.act==="skip"?(s.audio.startMusic(),s.audio.skipTrack()):h.dataset.act==="reset"&&(h.dataset.confirm?(s.save.reset(),h.textContent="Erased",h.disabled=!0,s.ui.toast("The dream was erased.")):(h.dataset.confirm="1",h.textContent="Sure?"))}),n.addEventListener("input",c=>{const h=c.target;h.type==="range"&&(e.set(h.dataset.key,parseFloat(h.value)),s.applySettings(h.dataset.key))}),i}class sv{constructor(t){this.game=t,this.el=null}show(){const t=this.game;this.hide();const e=!!t.save.data.location;this.el=Li(`<div class="screen menu-screen">
      <div class="title-wrap">
        <div class="game-title">DREAMSCAPE</div>
        <div class="game-sub">places you almost remember</div>
        <div class="version">v${Te(t.version)}</div>
      </div>
      <div class="menu-list">
        <button class="menu-btn primary" data-a="begin">${e?"Begin Again":"Begin Exploration"}</button>
        <button class="menu-btn" data-a="continue" ${e?"":"disabled"}>Continue</button>
        <button class="menu-btn" data-a="locations">Locations</button>
        <button class="menu-btn" data-a="settings">Settings</button>
        <button class="menu-btn" data-a="credits">Credits</button>
      </div>
      <div class="menu-foot">${t.input.isTouch?"left thumb walks · right thumb looks":"best with headphones"}</div>
    </div>`),document.getElementById("menu-root").appendChild(this.el),this.el.addEventListener("click",n=>{const i=n.target.closest("[data-a]");if(!i)return;t.audio.unlock(),t.audio.startMusic(),t.audio.ui("click");const r=i.dataset.a;if(r==="begin"){if(e&&!i.dataset.confirm){i.dataset.confirm="1",i.textContent="Start over? Tap again";return}t.newGame()}else r==="continue"?t.continueGame():r==="locations"?vh(t,null):r==="settings"?gh(t):r==="credits"&&rv(t)})}hide(){this.el?.remove(),this.el=null}}function vh(s,t){const e=s.save.data.discovered,{body:n,close:i}=Tr(s,"Locations",`${e.length} of ${mr.length} discovered`,t),r={};for(const o of s.save.data.journal)o.type==="location"&&o.thumb&&(r[o.level]=o.thumb);const a=s.world.level?.id;return n.innerHTML=`<div class="loc-grid">${mr.map(o=>{const l=e.includes(o.id)||o.id==="starting";return`<button class="loc ${l?"":"locked"} ${a===o.id&&s.state!=="menu"?"current":""}" data-id="${o.id}">
      ${l&&r[o.id]?`<div class="img" style="background-image:url(${r[o.id]})"></div>`:""}
      <div class="cap"><small>LEVEL ${o.num}</small><b>${l?Te(o.name):"? ? ?"}</b></div></button>`}).join("")}</div>`,n.addEventListener("click",o=>{const l=o.target.closest(".loc");!l||l.classList.contains("locked")||(i(),s.travelTo(l.dataset.id))}),i}function rv(s){const{body:t}=Tr(s,"Credits","DREAMSCAPE v"+s.version);t.innerHTML=`<div class="prose">
    <p>A first-person exploration of dreamcore and weirdcore places. There is nothing to win. Wander.</p>
    <h4>Music</h4><ul>${sr.map(e=>`<li>${Te(e.title)}${e.artist?" — "+Te(e.artist):""}</li>`).join("")}</ul>
    <p style="font-size:.75rem">Tracks supplied by the project owner. All rights belong to their respective artists.</p>
    <h4>World</h4><ul>
      <li>Rendering: three.js (MIT)</li>
      <li>All textures, geometry, skies, water and interface art are generated procedurally in code for this project.</li>
      <li>All ambience, footsteps and sound effects are synthesized live with the Web Audio API.</li>
    </ul>
    <h4>Thanks</h4><p>To everyone who remembers a place they have never been.</p></div>`}class av{constructor(t){this.game=t,this.el=null}show(){const t=this.game;this.hide();const e=an[t.world.level?.id];this.el=Li(`<div class="screen dim menu-screen">
      <div class="title-wrap"><div class="game-sub" style="letter-spacing:.4em">PAUSED</div>
      <div class="game-title" style="font-size:1.9rem;letter-spacing:.08em;margin-right:0;margin-top:.6rem;font-style:italic">${e?e.name:""}</div></div>
      <div class="menu-list">
        <button class="menu-btn primary" data-a="resume">Resume</button>
        <button class="menu-btn" data-a="journal">Journal</button>
        <button class="menu-btn" data-a="locations">Locations</button>
        <button class="menu-btn" data-a="settings">Settings</button>
        <button class="menu-btn" data-a="menu">Main Menu</button>
      </div></div>`),document.getElementById("menu-root").appendChild(this.el),this.el.addEventListener("click",n=>{const i=n.target.closest("[data-a]");if(!i)return;t.audio.ui("click");const r=i.dataset.a;r==="resume"?t.resume():r==="journal"?t.journal.open():r==="locations"?vh(t):r==="settings"?gh(t):r==="menu"&&t.toMenu()})}hide(){this.el?.remove(),this.el=null}}class ov{constructor(t){this.game=t,this.scale=1,this.escStack=[],this.hud=new iv(t),this.main=new sv(t),this.pause=new av(t),this.toastEl=document.getElementById("update-toast"),this.np=document.getElementById("now-playing"),t.input.isTouch&&document.body.classList.add("touch"),this.resize()}resize(){const t=innerWidth,e=innerHeight,n=e>=t,i=n?Math.min(t/430,e/870):Math.min(t/870,e/430);this.scale=Math.max(.72,Math.min(1.45,i)),document.documentElement.style.setProperty("--u",this.scale.toFixed(3)),document.body.classList.toggle("portrait",n),document.body.classList.toggle("landscape",!n)}pushEsc(t){this.escStack.push(t)}popEsc(t){const e=this.escStack.lastIndexOf(t);e>=0&&this.escStack.splice(e,1)}handleEsc(){const t=this.escStack[this.escStack.length-1];return t?(t(),!0):!1}get modalOpen(){return this.escStack.length>0}caption(t,e){this.hud.setCaption(t,e)}toast(t,e=2600){const n=this.toastEl;n.textContent=t,n.classList.remove("hidden"),n.style.animation="none",n.offsetWidth,n.style.animation="",clearTimeout(this._toastT),this._toastT=setTimeout(()=>n.classList.add("hidden"),e)}nowPlaying(t){this.np.querySelector(".np-text").textContent=`♪ ${t.title}${t.artist?" — "+t.artist:""}`,this.np.classList.add("show"),clearTimeout(this._npT),this._npT=setTimeout(()=>this.np.classList.remove("show"),5e3)}loading(t){document.getElementById("loading").classList.toggle("hidden",!t)}note(t,e){const n=this.game;n.setModal(!0),n.audio.sfx("page");const i=Li(`<div class="screen dim"><div class="note-paper"><h3>${Te(t)}</h3><p>${Te(e)}</p><button class="menu-btn">Put it down</button></div></div>`);document.getElementById("menu-root").appendChild(i);const r=()=>{i.remove(),this.popEsc(r),n.setModal(!1)};i.querySelector("button").onclick=r,i.addEventListener("pointerdown",a=>{a.target===i&&r()}),this.pushEsc(r)}choice(t,e){const n=this.game;return n.setModal(!0),new Promise(i=>{const r=Li(`<div class="screen dim"><div class="choice"><h3>${Te(t)}</h3><div class="menu-list">${e.map((l,c)=>`<button class="menu-btn" data-i="${c}">${Te(l)}</button>`).join("")}<button class="menu-btn" data-i="-1" style="opacity:.7">Cancel</button></div></div></div>`);document.getElementById("menu-root").appendChild(r);const a=l=>{r.remove(),this.popEsc(o),n.setModal(!1),i(l)},o=()=>a(-1);r.addEventListener("click",l=>{const c=l.target.closest("[data-i]");c&&(n.audio.ui("click"),a(+c.dataset.i))}),this.pushEsc(o)})}tapToContinue(t,e){return new Promise(n=>{const i=Li(`<div class="tap-overlay"><div><div class="big">${Te(t)}</div><div class="small">${Te(e)}</div></div></div>`);document.getElementById("menu-root").appendChild(i),i.addEventListener("pointerdown",()=>{i.remove(),n()},{once:!0})})}}class lv{constructor(t){this.game=t,this.tab="all"}get entries(){return this.game.save.data.journal}discoverLocation(t){const e=this.game.save.data;if(e.discovered.includes(t))return;e.discovered.push(t);const n=an[t];this.push({type:"location",level:t,name:n.name,desc:n.desc,notes:n.notes}),this.game.audio.sfx("discover"),this.game.ui.toast("Journal updated · "+n.name)}addObject(t,e,n,i=""){this.entries.some(r=>r.type==="object"&&r.name===e&&r.level===t)||(this.push({type:"object",level:t,name:e,desc:n,notes:i}),this.game.ui.toast("Journal · "+e))}push(t){const e=this.game.save.data;e.seq+=1,t.seq=e.seq,t.time=Date.now(),t.thumb=this.game.captureThumb(),e.journal.push(t),this.game.save.persist()}open(t){const e=this.game,n=()=>{const l=this.entries.filter(c=>this.tab==="all"||c.type===this.tab).slice().reverse();r.innerHTML=l.length?`<div class="entries">${l.map((c,h)=>{const u=an[c.level],f=new Date(c.time);return`<div class="entry" style="animation-delay:${Math.min(h,8)*40}ms">
          <div class="thumb" style="${c.thumb?`background-image:url(${c.thumb})`:""}"></div>
          <div><div class="meta">#${String(c.seq).padStart(3,"0")} · ${c.type==="location"?"LOCATION":"OBJECT"} · ${Te(u?"LEVEL "+u.num:"")} · ${f.toLocaleDateString(void 0,{month:"short",day:"numeric"})} ${f.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</div>
          <h3>${Te(c.name)}</h3><p>${Te(c.desc)}</p>${c.notes?`<div class="notes">${Te(c.notes)}</div>`:""}</div></div>`}).join("")}</div>`:'<div class="empty">Nothing written yet.<br/>Walk somewhere. Look closely at things.</div>',o.querySelectorAll(".tab").forEach(c=>c.classList.toggle("active",c.dataset.tab===this.tab))},{el:i,body:r,close:a}=Tr(e,"Journal",`${this.entries.length} entries · ${e.save.data.discovered.length}/13 places`,t),o=document.createElement("div");return o.className="tabs",o.innerHTML='<button class="tab" data-tab="all">All</button><button class="tab" data-tab="location">Places</button><button class="tab" data-tab="object">Objects</button>',o.onclick=l=>{const c=l.target.closest(".tab");c&&(this.tab=c.dataset.tab,e.audio.ui("click"),n())},i.querySelector(".panel").insertBefore(o,r),n(),a}}const pa="dreamscape.save.v1",pc="dreamscape.settings.v1",cv={quality:"low",qualityChosen:!1,musicVolume:.8,ambienceVolume:.9,sfxVolume:.9,sensitivity:1,fov:68,headBob:!0,invertY:!1,vignette:!0,grain:!0,showFps:!1,alwaysRun:!1,muted:!1};class hv{constructor(){let t={};try{t=JSON.parse(localStorage.getItem(pc))||{}}catch{}this.data={...cv,...t},this.data.qualityChosen||(this.data.quality="low"),["low","medium","high"].includes(this.data.quality)||(this.data.quality="low")}set(t,e){this.data[t]=e,this.persist()}persist(){try{localStorage.setItem(pc,JSON.stringify(this.data))}catch{}}}class uv{constructor(){this.data=this.fresh();try{const t=JSON.parse(localStorage.getItem(pa));t&&t.version===1&&(this.data={...this.fresh(),...t},this.exists=!!t.location)}catch{}}fresh(){return{version:1,location:null,pos:null,yaw:0,discovered:[],journal:[],seq:0,visits:{},flags:{},playTime:0}}setLocation(t,e){this.data.location={id:t,spawn:e},this.data.visits[t]=(this.data.visits[t]||0)+1,this.persist()}setPose(t,e){this.data.pos=[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2)],this.data.yaw=+e.toFixed(3)}flag(t,e){return e===void 0?this.data.flags[t]:(this.data.flags[t]=e,this.persist(),e)}reset(){this.data=this.fresh(),this.exists=!1,this.persist()}persist(){try{localStorage.setItem(pa,JSON.stringify(this.data))}catch{this.data.journal.forEach((e,n)=>{n<this.data.journal.length-6&&(e.thumb=null)});try{localStorage.setItem(pa,JSON.stringify(this.data))}catch{}}}}class fv{constructor(t){this.game=t,this.avg=16.7,this.timer=0,this.frames=0,this.fpsTimer=0,this.fps=60,this.cool=2}update(t){if(this.avg+=(Math.min(t,100)-this.avg)*.05,this.frames++,this.fpsTimer+=t,this.fpsTimer>=500&&(this.fps=Math.round(this.frames*1e3/this.fpsTimer),this.frames=0,this.fpsTimer=0,this.game.settings.data.showFps)){const n=this.game.renderer;document.getElementById("fps").textContent=`${this.fps} fps · ${n.pixelRatio().toFixed(2)}x · ${n.r.info.render.calls} calls`}if(this.cool-=t/1e3,this.cool>0||document.hidden)return;const e=this.game.renderer;this.avg>24&&e.scale>.55?(e.scale=Math.max(.55,e.scale-.1),e.resize(),this.cool=2.5):this.avg<14&&e.scale<1&&(e.scale=Math.min(1,e.scale+.05),e.resize(),this.cool=4)}}const ma="dreamscape.resume";class mc{constructor(t,e){this.game=t,this.current=e,this.url=new URL("version.json",document.baseURI),this.interval=3e4,this.pending=!1}start(){const t=()=>this.check().finally(()=>{this._t=setTimeout(t,this.interval)});this._t=setTimeout(t,8e3),document.addEventListener("visibilitychange",()=>{document.hidden||this.check()}),addEventListener("focus",()=>this.check())}async check(){if(!this.pending)try{this.url.searchParams.set("t",Date.now());const t=await fetch(this.url,{cache:"no-store"});if(!t.ok)return;const e=await t.json();e.build&&e.build!==this.current&&this.apply(e)}catch{}}apply(t){this.pending=!0;const e=this.game;e.persistPose();try{sessionStorage.setItem(ma,JSON.stringify({state:e.state,at:Date.now()}))}catch{}e.ui.toast(`A new version of the dream arrived (v${t.version}) — updating…`,4e3),setTimeout(()=>{const n=new URL(location.href);n.searchParams.set("v",t.build),location.replace(n.toString())},1800)}static takeResume(){try{const t=JSON.parse(sessionStorage.getItem(ma));if(sessionStorage.removeItem(ma),t&&Date.now()-t.at<6e4)return t}catch{}return null}}function dv(s,t,{cell:e=.45,margin:n=18,maxNodes:i=45e4}={}){const r=s.collision,a=me.radius*.92,o=me.step,l=me.height,c=[];for(const A of t.interactables){const U=A.door;if(U&&U.cols&&!U.isLocked())for(const B of U.cols)c.push([B,B.enabled]),B.enabled=!1;if(A.elevator)for(const B of A.elevator.cols)c.push([B,B.enabled]),B.enabled=!1}const h=[],u=[];for(const A of t.interactables){if(!A.target&&!A.links)continue;const U=A.approach?A.approach():A.mesh.getWorldPosition(A.mesh.position.clone()),B=typeof A.prompt=="function"?A.prompt():A.prompt;A.target&&A.target.level&&A.target.level!==t.id?h.push({label:B,target:A.target,pos:U,reachable:!1}):A.target&&u.push({pos:U,spawns:[A.target.spawn]}),A.links&&u.push({pos:U,spawns:A.links.filter(W=>!W.level||W.level===t.id).map(W=>W.spawn),exits:A.links.filter(W=>W.level&&W.level!==t.id).map(W=>({label:B+" → "+W.label,target:W,pos:U,reachable:!1}))})}for(const A of u)for(const U of A.exits||[])h.push(U);const f=t.spawns.default,d=[f.pos,...h.map(A=>[A.pos.x,A.pos.y,A.pos.z]),...u.map(A=>[A.pos.x,A.pos.y,A.pos.z]),...Object.values(t.spawns).map(A=>A.pos)];let g=1/0,v=1/0,m=-1/0,p=-1/0;for(const A of d)g=Math.min(g,A[0]),m=Math.max(m,A[0]),v=Math.min(v,A[2]),p=Math.max(p,A[2]);g-=n,v-=n,m+=n,p+=n;const E=new Set,x=[],_=(A,U,B)=>A+","+U+","+Math.round(B*4),F=(A,U,B)=>{const W={x:A,z:U};return r.resolve(W,a,B+o,B+l),Math.hypot(W.x-A,W.z-U)>.02?!1:r.ceilingAt(A,U,B+o+.01,a*.7)-B>=l-.02},w=(A,U,B)=>{const W=Math.round((A-g)/e),I=Math.round((U-v)/e),H=_(W,I,B);E.has(H)||(E.add(H),x.push([W,I,B]))},L=A=>{const U=r.groundAt(A[0],A[2],A[1]+1.2);U.y>-1/0&&w(A[0],A[2],U.y)};L(f.pos);const D=new Set,M=[];let y=0;for(;x.length&&y<i;){const[A,U,B]=x.pop();y++;const W=g+A*e,I=v+U*e;M.push([W,B,I]);for(const H of h)!H.reachable&&Math.hypot(H.pos.x-W,H.pos.z-I)<2&&Math.abs(H.pos.y-(B+1.2))<1.8&&(H.reachable=!0);u.forEach((H,N)=>{if(!(D.has(N)||Math.hypot(H.pos.x-W,H.pos.z-I)>2||Math.abs(H.pos.y-(B+1.2))>1.8)){D.add(N);for(const X of H.spawns)t.spawns[X]&&L(t.spawns[X].pos)}});for(const[H,N]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const X=A+H,Z=U+N,st=g+X*e,vt=v+Z*e;if(st<g||st>m||vt<v||vt>p)continue;const Dt=r.groundAt(st,vt,B+o);if(Dt.y===-1/0||Dt.y<B-4||Dt.y<t.killY+.5||!F(st,vt,Dt.y))continue;const $=(W+st)/2,tt=(I+vt)/2,ht=r.groundAt($,tt,Math.max(B,Dt.y)+o);if(ht.y===-1/0||!F($,tt,ht.y))continue;const it=_(X,Z,Dt.y);E.has(it)||(E.add(it),x.push([X,Z,Dt.y]))}}for(const A of h)A.destinationKnown=!!an[A.target.level];const P={level:t.id,nodes:y,truncated:y>=i,exits:h.map(A=>({label:A.label,to:A.target.level+":"+(A.target.spawn||"default"),reachable:A.reachable,destinationKnown:A.destinationKnown,at:[A.pos.x,A.pos.y,A.pos.z].map(U=>+U.toFixed(1))})),doorsClear:t.interactables.filter(A=>A.door&&!A.door.isLocked()).map(A=>{const U=A.doorPose,B=Math.sin(U.rotY),W=Math.cos(U.rotY),H=(U.freeStanding||A.target?[1]:[1,-1]).every(N=>[.65,1].every(X=>{const Z=U.x+B*X*N,st=U.z+W*X*N,vt=r.groundAt(Z,st,U.y+1);return vt.y>-1/0&&Math.abs(vt.y-U.y)<.6&&F(Z,st,vt.y)}));return{door:typeof A.prompt=="function"?A.prompt():A.prompt,at:[U.x,U.z].map(N=>+N.toFixed(1)),ok:H}}),spawnsOnGround:Object.entries(t.spawns).filter(([A])=>A!=="menu").map(([A,U])=>{const B=r.groundAt(U.pos[0],U.pos[2],U.pos[1]+1.5);return{spawn:A,ok:B.y>-1/0&&Math.abs(B.y-U.pos[1])<3.2&&F(U.pos[0],U.pos[2],B.y)}}),visited:M};for(const[A,U]of c)A.enabled=U;return P}class pv{constructor(){this.version="1.2.0",this.build="mwr2jkw7-f784213",this.settings=new hv,this.save=new uv,ms.level=this.settings.data.quality,this.scene=new Yc,this.camera=new ze(70,innerWidth/innerHeight,.05,1500),this.scene.add(this.camera),this.renderer=new Dg(this,document.getElementById("stage")),this.input=new Ig(this,document.getElementById("touch-layer")),this.cam=new $g(this,this.camera),this.collision=new jg,this.player=new Yg(this),this.interaction=new Jg(this),this.audio=new kg(this),this.atmosphere=new Qg(this),this.lighting=new Wg(this),this.world=new qg(this),this.ui=new ov(this),this.journal=new lv(this),this.perf=new fv(this),this.updater=new mc(this,this.build),this.state="boot",this.modal=!1,this.clock=new No,this.time=0,this.poseTimer=0,window.__dream=this,this.nav=t=>dv(this,this.world.level,t)}async start(t){this.renderer.setQuality(this.settings.data.quality);const e=()=>{this.renderer.resize(),this.ui.resize()};addEventListener("resize",e),addEventListener("orientationchange",()=>setTimeout(e,250)),window.visualViewport?.addEventListener("resize",e),addEventListener("keydown",r=>this.onKey(r)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.persistPose()}),addEventListener("pagehide",()=>this.persistPose());const n=()=>{this.audio.unlock(),this.audio.flushPending()};addEventListener("pointerdown",n,{once:!0}),addEventListener("keydown",n,{once:!0}),this.loop();const i=mc.takeResume();i&&i.state!=="menu"&&this.save.data.location?(await this.world.goTo(this.save.data.location.id,this.save.data.location.spawn,{instant:!0,silent:!0,pos:this.save.data.pos,yaw:this.save.data.yaw}),this.state="menu-hold",t.done(),await this.ui.tapToContinue("the dream changed a little","TAP TO CONTINUE"),this.audio.unlock(),this.audio.startMusic(),this.state="play",this.ui.hud.show(!0),this.input.enabled=!0,this.input.requestLock(),this.player.frozen=!1,this.ui.hud.showLocation(an[this.world.level.id])):(await this.world.goTo("starting","menu",{instant:!0,silent:!0}),this.state="menu",t.done(),this.ui.main.show()),this.updater.start()}async enterPlay(t,e="default",n={}){this.ui.main.hide(),this.ui.pause.hide(),this.state="play",this.ui.hud.show(!0),this.input.enabled=!0,this.input.requestLock(),this.ui.hud.setLockHint(!1),await this.world.goTo(t,e,n)}newGame(){const t=this.settings.data;this.save.reset(),this.settings.data=t,this.enterPlay("starting","default")}continueGame(){const t=this.save.data;if(!t.location||!an[t.location.id])return this.newGame();this.enterPlay(t.location.id,t.location.spawn,{pos:t.pos,yaw:t.yaw})}travelTo(t){if(this.state==="menu")return this.enterPlay(t,"default");this.resume(),this.world.goTo(t,"default",{style:"light"})}pause(){this.state==="play"&&(this.state="paused",this.input.enabled=!1,this.input.releaseJoy(),this.input.exitLock(),this.ui.hud.setPrompt(null),this.ui.hud.setLockHint(!1),this.ui.pause.show(),this.persistPose())}resume(){for(;this.ui.modalOpen;)this.ui.handleEsc();this.ui.pause.hide(),!(this.state!=="paused"&&this.state!=="play")&&(this.state="play",this.input.enabled=!this.modal,this.input.clearEdges(),this.input.requestLock())}toMenu(){for(this.persistPose();this.ui.modalOpen;)this.ui.handleEsc();this.ui.pause.hide(),this.state="menu",this.input.enabled=!1,this.input.exitLock(),this.ui.hud.show(!1),this.world.goTo("starting","menu",{silent:!0,style:"light"}).then(()=>this.ui.main.show())}openJournal(){this.state==="play"?(this.setModal(!0),this.journal.open(()=>this.setModal(!1))):this.journal.open()}setModal(t){this.modal=t,this.state==="play"&&(this.input.enabled=!t,this.input.releaseJoy(),t?(this.input.exitLock(),this.ui.hud.setPrompt(null)):(this.input.clearEdges(),this.input.requestLock()))}onPointerUnlock(){this.state==="play"&&!this.modal&&!this.world.busy&&this.pause()}onKey(t){if(t.code==="Escape"||t.code==="KeyP"){if(this.ui.modalOpen){this.ui.handleEsc();return}this.state==="paused"?this.resume():this.state==="play"&&this.pause()}}applySettings(t){const e=this.settings.data;if(t==="quality"){ms.level=e.quality,this.renderer.setQuality(e.quality);const n=this.world.level;if(n){const i=this.player.pos.toArray(),r=this.cam.yaw,a=this.cam.pitch;this.world.level.dispose(),this.world.level=null,this.world.goTo(n.id,"default",{pos:i,yaw:r,instant:!0,silent:!0}).then(()=>this.cam.setPitch(a))}}["musicVolume","ambienceVolume","sfxVolume","muted"].includes(t)&&this.audio.applyVolumes(),["vignette","grain"].includes(t)&&this.renderer.setPost(this.renderer.post),t==="fov"&&this.cam.updateFov(),t==="showFps"&&document.getElementById("fps").classList.toggle("hidden",!e.showFps)}persistPose(){(this.state==="play"||this.state==="paused")&&(this.save.setPose(this.player.pos,this.cam.yaw),this.save.persist())}captureThumb(){try{this.renderer.render(this.time);const t=this.renderer.r.domElement,e=192,n=120,i=document.createElement("canvas");i.width=e,i.height=n;const r=i.getContext("2d"),a=t.width,o=t.height;let l=a,c=a*n/e;return c>o&&(c=o,l=o*e/n),r.drawImage(t,(a-l)/2,(o-c)/2,l,c,0,0,e,n),r.fillStyle="rgba(255,230,200,0.08)",r.fillRect(0,0,e,n),i.toDataURL("image/jpeg",.72)}catch{return null}}loop(){const t=()=>{requestAnimationFrame(t);const e=this.clock.getDelta(),n=Math.min(e,.05);this.time+=n;const i=this.time;if(this.input.poll(),this.state==="play"&&!this.modal)this.input.edge("journal")&&this.openJournal(),this.player.update(n),this.cam.update(n,this.player),this.interaction.update(n),this.poseTimer+=n,this.poseTimer>5&&(this.poseTimer=0,this.persistPose(),this.save.data.playTime+=5),this.ui.hud.setLockHint(!this.input.isTouch&&!this.input.locked&&!this.world.busy),document.body.classList.toggle("joy-active",!!this.input.joy);else if(this.state==="menu"||this.state==="menu-hold"){const r=this.world.level,a=r?.spawns.menu||r?.spawns.default;a&&this.state==="menu"&&(this.cam.tYaw=a.yaw+Math.sin(i*.05)*.35,this.cam.tPitch=(a.pitch??.05)+Math.sin(i*.07)*.03),this.cam.update(n,this.player)}else this.cam.update(1e-4,this.player);this.state!=="paused"&&this.world.update(n,i),this.atmosphere.update(n,i),this.lighting.update(),tv(i),this.renderer.render(i),this.perf.update(e*1e3)};requestAnimationFrame(t)}}function mv(){const s=document.createElement("div");return s.id="boot",s.style.cssText="position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:linear-gradient(#bcdcfb,#eaf4ff 60%,#d9efc9);transition:opacity 1.2s;font:300 1.1rem Georgia,serif;font-style:italic;color:#fff;text-shadow:0 1px 10px rgba(60,90,140,.5);letter-spacing:.1em",s.textContent="falling asleep…",document.body.appendChild(s),{done(){s.style.opacity="0",setTimeout(()=>s.remove(),1300)},error(t){s.textContent=t,s.style.fontStyle="normal",s.style.fontSize=".9rem",s.style.padding="2rem",s.style.textAlign="center",s.style.color="#334",s.style.textShadow="none"}}}const ga=mv();function gv(){try{const s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}gv()?new pv().start(ga).catch(t=>{console.error(t),ga.error("The dream could not start: "+(t?.message||t))}):ga.error("This dream needs WebGL. Please try a recent browser, or enable hardware acceleration.");export{_n as $,t_ as A,Vi as B,Gv as C,c_ as D,Av as E,Wv as F,wi as G,gs as H,Io as I,e_ as J,y0 as K,Ue as L,Pe as M,pr as N,fe as O,yr as P,M0 as Q,ti as R,Po as S,ch as T,Le as U,C as V,Bi as W,u_ as X,h_ as Y,I0 as Z,oh as _,Mv as a,Nv as a0,Ov as a1,Lv as a2,lh as a3,r_ as a4,jv as a5,Yv as a6,or as a7,n_ as a8,Tt as a9,uo as aA,te as aB,ii as aC,tn as aD,Fn as aE,qv as aF,Jc as aG,Gg as aH,Zt as aI,Jv as aJ,kv as aK,ln as aL,Tv as aa,Kt as ab,ar as ac,Cg as ad,_0 as ae,ve as af,vv as ag,wv as ah,ih as ai,nh as aj,us as ak,ut as al,we as am,Zv as an,a_ as ao,s_ as ap,Xv as aq,Ag as ar,i_ as as,bv as at,Ev as au,ke as av,ms as aw,Li as ax,Ri as ay,_v as az,jc as b,Rg as c,f_ as d,o_ as e,Uv as f,yv as g,Hv as h,tg as i,Kv as j,sg as k,Sv as l,rr as m,Vv as n,Pv as o,Cv as p,$v as q,Iv as r,Dv as s,l_ as t,ph as u,Rv as v,Fv as w,Qv as x,Bv as y,zv as z};
