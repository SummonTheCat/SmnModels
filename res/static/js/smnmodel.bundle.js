(function () {
	'use strict';

	/**
	 * @license
	 * Copyright 2010-2023 Three.js Authors
	 * SPDX-License-Identifier: MIT
	 */
	const t="162",e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},l=1,c=2,h=3,u=0,d=1,p=2,y=100,C=204,P=205,Y=0,Z=1,J=2,K=0,$=1,Q=2,tt=3,et=4,nt=5,it=6,rt=7,st="attached",at="detached",ot=300,lt=301,ct=302,ht=303,ut=304,dt=306,pt=1e3,mt=1001,ft=1002,gt=1003,_t=1004,xt=1005,Mt=1006,St=1007,Et=1008,wt=1009,Ct=1012,Pt=1013,Lt=1014,It=1015,Ut=1016,Nt=1017,Dt=1018,Ot=1020,Bt=1023,kt=1026,Vt=1027,Gt=1028,Wt=1029,jt=1031,qt=1033,Yt=33776,Zt=33777,Jt=33778,Kt=33779,$t=35840,Qt=35841,te=35842,ee=35843,ne=36196,ie=37492,re=37496,se=37808,ae=37809,oe=37810,le=37811,ce=37812,he=37813,ue=37814,de=37815,pe=37816,me=37817,fe=37818,ge=37819,_e=37820,ve=37821,xe=36492,ye=36494,Me=36495,be=36284,Ee=36285,Te=36286,Ce=2300,Pe=2301,Le=2302,Ie=2400,Ue=2401,Ne=2402,Fe=0,Be=1,ze=2,We="",Xe="srgb",je="srgb-linear",qe="display-p3",Ye="display-p3-linear",Ze="linear",Je="srgb",Ke="rec709",$e="p3",tn=7680,En=35044,Nn="300 es",Dn=1035,On=2e3,Fn=2001;class Bn{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e);}hasEventListener(t,e){if(void 0===this._listeners)return !1;const n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return;const n=this._listeners[t];if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1);}}dispatchEvent(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const n=e.slice(0);for(let e=0,i=n.length;e<i;e++)n[e].call(this,t);t.target=null;}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hn=1234567;const kn=Math.PI/180,Vn=180/Math.PI;function Gn(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return (zn[255&t]+zn[t>>8&255]+zn[t>>16&255]+zn[t>>24&255]+"-"+zn[255&e]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[63&n|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[255&i]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function Wn(t,e,n){return Math.max(e,Math.min(n,t))}function Xn(t,e){return (t%e+e)%e}function jn(t,e,n){return (1-n)*t+n*e}function qn(t){return 0==(t&t-1)&&0!==t}function Yn(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw new Error("Invalid component type.")}}const Kn={DEG2RAD:kn,RAD2DEG:Vn,generateUUID:Gn,clamp:Wn,euclideanModulo:Xn,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:jn,damp:function(t,e,n,i){return jn(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(Xn(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){void 0!==t&&(Hn=t);let e=Hn+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*kn},radToDeg:function(t){return t*Vn},isPowerOfTwo:qn,ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:Yn,setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*m,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*m,o*c);break;case"ZYZ":t.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r);}},normalize:Jn,denormalize:Zn};class $n{constructor(t=0,e=0){$n.prototype.isVector2=!0,this.x=t,this.y=e;}get width(){return this.x}set width(t){this.x=t;}get height(){return this.y}set height(t){this.y=t;}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y;}}class Qn{constructor(t,e,n,i,r,s,a,o,l){Qn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==t&&this.set(t,e,n,i,r,s,a,o,l);}set(t,e,n,i,r,s,a,o,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],p=n[8],m=i[0],f=i[3],g=i[6],_=i[1],v=i[4],x=i[7],y=i[2],M=i[5],S=i[8];return r[0]=s*m+a*_+o*y,r[3]=s*f+a*v+o*M,r[6]=s*g+a*x+o*S,r[1]=l*m+c*_+h*y,r[4]=l*f+c*v+h*M,r[7]=l*g+c*x+h*S,r[2]=u*m+d*_+p*y,r[5]=u*f+d*v+p*M,r[8]=u*g+d*x+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,p=e*h+n*u+i*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(i*l-c*n)*m,t[2]=(a*n-i*s)*m,t[3]=u*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ti.makeScale(t,e)),this}rotate(t){return this.premultiply(ti.makeRotation(-t)),this}translate(t,e){return this.premultiply(ti.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<9;t++)if(e[t]!==n[t])return !1;return !0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return (new this.constructor).fromArray(this.elements)}}const ti=new Qn;function ei(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return !0;return !1}function ri(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function si(){const t=ri("canvas");return t.style.display="block",t}const ai={};function oi(t){t in ai||(ai[t]=!0,console.warn(t));}const li=(new Qn).set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ci=(new Qn).set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hi={[je]:{transfer:Ze,primaries:Ke,toReference:t=>t,fromReference:t=>t},[Xe]:{transfer:Je,primaries:Ke,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ye]:{transfer:Ze,primaries:$e,toReference:t=>t.applyMatrix3(ci),fromReference:t=>t.applyMatrix3(li)},[qe]:{transfer:Je,primaries:$e,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ci),fromReference:t=>t.applyMatrix3(li).convertLinearToSRGB()}},ui=new Set([je,Ye]),di={enabled:!0,_workingColorSpace:je,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ui.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t;},convert:function(t,e,n){if(!1===this.enabled||e===n||!e||!n)return t;const i=hi[e].toReference;return (0, hi[n].fromReference)(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return hi[t].primaries},getTransfer:function(t){return t===We?Ze:hi[t].transfer}};function pi(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function mi(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}let fi;class gi{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else {void 0===fi&&(fi=ri("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi;}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=ri("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let t=0;t<r.length;t++)r[t]=255*pi(r[t]/255);return n.putImageData(i,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*pi(e[t]/255)):e[t]=pi(e[t]);return {data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _i=0;class vi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_i++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0;}set needsUpdate(t){!0===t&&this.version++;}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(null!==i){let t;if(Array.isArray(i)){t=[];for(let e=0,n=i.length;e<n;e++)i[e].isDataTexture?t.push(xi(i[e].image)):t.push(xi(i[e]));}else t=xi(i);n.url=t;}return e||(t.images[this.uuid]=n),n}}function xi(t){return "undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?gi.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yi=0;class Mi extends Bn{constructor(t=Mi.DEFAULT_IMAGE,e=Mi.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=Mi.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yi++}),this.uuid=Gn(),this.name="",this.source=new vi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new $n(0,0),this.repeat=new $n(1,1),this.center=new $n(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1;}get image(){return this.source.data}set image(t=null){this.source.data=t;}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);}clone(){return (new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"});}transformUv(t){if(this.mapping!==ot)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pt:t.x=t.x-Math.floor(t.x);break;case mt:t.x=t.x<0?0:1;break;case ft:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);}if(t.y<0||t.y>1)switch(this.wrapT){case pt:t.y=t.y-Math.floor(t.y);break;case mt:t.y=t.y<0?0:1;break;case ft:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0);}}Mi.DEFAULT_IMAGE=null,Mi.DEFAULT_MAPPING=ot,Mi.DEFAULT_ANISOTROPY=1;class Si{constructor(t=0,e=0,n=0,i=1){Si.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i;}get width(){return this.z}set width(t){this.z=t;}get height(){return this.w}set height(t){this.w=t;}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const s=.01,a=.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],p=o[9],m=o[2],f=o[6],g=o[10];if(Math.abs(c-u)<s&&Math.abs(h-m)<s&&Math.abs(p-f)<s){if(Math.abs(c+u)<a&&Math.abs(h+m)<a&&Math.abs(p+f)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;e=Math.PI;const t=(l+1)/2,o=(d+1)/2,_=(g+1)/2,v=(c+u)/4,x=(h+m)/4,y=(p+f)/4;return t>o&&t>_?t<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(t),i=v/n,r=x/n):o>_?o<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(o),n=v/i,r=y/i):_<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=x/r,i=y/r),this.set(n,i,r,e),this}let _=Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(f-p)/_,this.y=(h-m)/_,this.z=(u-c)/_,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w;}}class bi extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Si(0,0,t,e),this.scissorTest=!1,this.viewport=new Si(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Mi(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let t=0;t<s;t++)this.textures[t]=r.clone(),this.textures[t].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples;}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t;}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose();}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e);}clone(){return (new this.constructor).copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++)this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"});}}class Ei extends bi{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0;}}class Ti extends Mi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1;}}class Ai extends Mi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1;}}class Ci{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i;}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3];if(0===a)return t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(1===a)return t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=m);if(h!==m||o!==u||l!==d||c!==p){let t=1-a;const e=o*u+l*d+c*p+h*m,n=e>=0?1:-1,i=1-e*e;if(i>Number.EPSILON){const r=Math.sqrt(i),s=Math.atan2(r,e*n);t=Math.sin(t*s)/r,a=Math.sin(a*s)/r;}const r=a*n;if(o=o*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-a){const t=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=t,l*=t,c*=t,h*=t;}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h;}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return t[e]=a*p+c*h+o*d-l*u,t[e+1]=o*p+c*u+l*h-a*d,t[e+2]=l*p+c*d+a*u-o*h,t[e+3]=c*p-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback();}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback();}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback();}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback();}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(r/2),u=o(n/2),d=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s);}return !0===e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=n+a+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-o)*t,this._y=(r-l)*t,this._z=(s-i)*t;}else if(n>a&&n>h){const t=2*Math.sqrt(1+n-a-h);this._w=(c-o)/t,this._x=.25*t,this._y=(i+s)/t,this._z=(r+l)/t;}else if(a>h){const t=2*Math.sqrt(1+a-n-h);this._w=(r-l)/t,this._x=(i+s)/t,this._y=.25*t,this._z=(o+c)/t;}else {const t=2*Math.sqrt(1+h-n-a);this._w=(s-i)/t,this._x=(r+l)/t,this._y=(o+c)/t,this._z=.25*t;}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(0===n)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const t=1-e;return this._w=t*s+e*this._w,this._x=t*n+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w;}}class Pi{constructor(t=0,e=0,n=0){Pi.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n;}set(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ii.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ii.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*n),c=2*(a*e-r*i),h=2*(r*n-s*e);return this.x=e+o*l+s*h-a*c,this.y=n+o*c+a*l-r*h,this.z=i+o*h+r*c-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Li.copy(this).projectOnVector(t),this.sub(Li)}reflect(t){return this.sub(Li.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z;}}const Li=new Pi,Ii=new Ci;class Ui{constructor(t=new Pi(1/0,1/0,1/0),e=new Pi(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e;}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return (new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(void 0!==n){const i=n.getAttribute("position");if(!0===e&&void 0!==i&&!0!==t.isInstancedMesh)for(let e=0,n=i.count;e<n;e++)!0===t.isMesh?t.getVertexPosition(e,Di):Di.fromBufferAttribute(i,e),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else void 0!==t.boundingBox?(null===t.boundingBox&&t.computeBoundingBox(),Oi.copy(t.boundingBox)):(null===n.boundingBox&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(t.matrixWorld),this.union(Oi);}const i=t.children;for(let t=0,n=i.length;t<n;t++)this.expandByObject(i[t],e);return this}containsPoint(t){return !(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return !(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return !1;this.getCenter(Gi),Wi.subVectors(this.max,Gi),Fi.subVectors(t.a,Gi),Bi.subVectors(t.b,Gi),zi.subVectors(t.c,Gi),Hi.subVectors(Bi,Fi),ki.subVectors(zi,Bi),Vi.subVectors(Fi,zi);let e=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-Vi.z,Vi.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,Vi.z,0,-Vi.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-Vi.y,Vi.x,0];return !!qi(e,Fi,Bi,zi,Wi)&&(e=[1,0,0,0,1,0,0,0,1],!!qi(e,Fi,Bi,zi,Wi)&&(Xi.crossVectors(Hi,ki),e=[Xi.x,Xi.y,Xi.z],qi(e,Fi,Bi,zi,Wi)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(Di).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ni=[new Pi,new Pi,new Pi,new Pi,new Pi,new Pi,new Pi,new Pi],Di=new Pi,Oi=new Ui,Fi=new Pi,Bi=new Pi,zi=new Pi,Hi=new Pi,ki=new Pi,Vi=new Pi,Gi=new Pi,Wi=new Pi,Xi=new Pi,ji=new Pi;function qi(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ji.fromArray(t,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),o=e.dot(ji),l=n.dot(ji),c=i.dot(ji);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return !1}return !0}const Yi=new Ui,Zi=new Pi,Ji=new Pi;class Ki{constructor(t=new Pi,e=-1){this.isSphere=!0,this.center=t,this.radius=e;}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;void 0!==e?n.copy(e):Yi.setFromPoints(t).getCenter(n);let i=0;for(let e=0,r=t.length;e<r;e++)i=Math.max(i,n.distanceToSquared(t[e]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),n=.5*(t-this.radius);this.center.addScaledVector(Zi,n/t),this.radius+=n;}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(!0===this.center.equals(t.center)?this.radius=Math.max(this.radius,t.radius):(Ji.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Ji)),this.expandByPoint(Zi.copy(t.center).sub(Ji))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return (new this.constructor).copy(this)}}const $i=new Pi,Qi=new Pi,tr=new Pi,er=new Pi,nr=new Pi,ir=new Pi,rr=new Pi;class sr{constructor(t=new Pi,e=new Pi(0,0,-1)){this.origin=t,this.direction=e;}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qi.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),er.copy(this.origin).sub(Qi);const r=.5*t.distanceTo(e),s=-this.direction.dot(tr),a=er.dot(this.direction),o=-er.dot(tr),l=er.lengthSq(),c=Math.abs(1-s*s);let h,u,d,p;if(c>0)if(h=s*o-a,u=s*a-o,p=r*c,h>=0)if(u>=-p)if(u<=p){const t=1/c;h*=t,u*=t,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l;}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Qi).addScaledVector(tr,u),d}intersectSphere(t,e){$i.subVectors(t.center,this.origin);const n=$i.dot(this.direction),i=$i.dot($i)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return null===n?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);if(0===e)return !0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c>=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return null!==this.intersectBox(t,$i)}intersectTriangle(t,e,n,i,r){nr.subVectors(e,t),ir.subVectors(n,t),rr.crossVectors(nr,ir);let s,a=this.direction.dot(rr);if(a>0){if(i)return null;s=1;}else {if(!(a<0))return null;s=-1,a=-a;}er.subVectors(this.origin,t);const o=s*this.direction.dot(ir.crossVectors(er,ir));if(o<0)return null;const l=s*this.direction.dot(nr.cross(er));if(l<0)return null;if(o+l>a)return null;const c=-s*er.dot(rr);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return (new this.constructor).copy(this)}}class ar{constructor(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){ar.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==t&&this.set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f);}set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return (new ar).fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/or.setFromMatrixColumn(t,0).length(),r=1/or.setFromMatrixColumn(t,1).length(),s=1/or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if("XYZ"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=n+i*l,e[5]=t-r*l,e[9]=-a*o,e[2]=r-t*l,e[6]=i+n*l,e[10]=s*o;}else if("YXZ"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t+r*a,e[4]=i*a-n,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=n*a-i,e[6]=r+t*a,e[10]=s*o;}else if("ZXY"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t-r*a,e[4]=-s*h,e[8]=i+n*a,e[1]=n+i*a,e[5]=s*c,e[9]=r-t*a,e[2]=-s*l,e[6]=a,e[10]=s*o;}else if("ZYX"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=i*l-n,e[8]=t*l+r,e[1]=o*h,e[5]=r*l+t,e[9]=n*l-i,e[2]=-l,e[6]=a*o,e[10]=s*o;}else if("YZX"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=r-t*h,e[8]=i*h+n,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=n*h+i,e[10]=t-r*h;}else if("XZY"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=n*h-i,e[2]=i*h-n,e[6]=a*c,e[10]=r*h+t;}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cr,t,hr)}lookAt(t,e,n){const i=this.elements;return pr.subVectors(t,e),0===pr.lengthSq()&&(pr.z=1),pr.normalize(),ur.crossVectors(n,pr),0===ur.lengthSq()&&(1===Math.abs(n.z)?pr.x+=1e-4:pr.z+=1e-4,pr.normalize(),ur.crossVectors(n,pr)),ur.normalize(),dr.crossVectors(pr,ur),i[0]=ur.x,i[4]=dr.x,i[8]=pr.x,i[1]=ur.y,i[5]=dr.y,i[9]=pr.y,i[2]=ur.z,i[6]=dr.z,i[10]=pr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],p=n[2],m=n[6],f=n[10],g=n[14],_=n[3],v=n[7],x=n[11],y=n[15],M=i[0],S=i[4],b=i[8],E=i[12],T=i[1],w=i[5],A=i[9],R=i[13],C=i[2],P=i[6],L=i[10],I=i[14],U=i[3],N=i[7],D=i[11],O=i[15];return r[0]=s*M+a*T+o*C+l*U,r[4]=s*S+a*w+o*P+l*N,r[8]=s*b+a*A+o*L+l*D,r[12]=s*E+a*R+o*I+l*O,r[1]=c*M+h*T+u*C+d*U,r[5]=c*S+h*w+u*P+d*N,r[9]=c*b+h*A+u*L+d*D,r[13]=c*E+h*R+u*I+d*O,r[2]=p*M+m*T+f*C+g*U,r[6]=p*S+m*w+f*P+g*N,r[10]=p*b+m*A+f*L+g*D,r[14]=p*E+m*R+f*I+g*O,r[3]=_*M+v*T+x*C+y*U,r[7]=_*S+v*w+x*P+y*N,r[11]=_*b+v*A+x*L+y*D,r[15]=_*E+v*R+x*I+y*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+r*o*h-i*l*h-r*a*u+n*l*u+i*a*d-n*o*d)+t[7]*(+e*o*d-e*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+n*s*d+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*u+i*s*h-n*s*u+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],m=t[13],f=t[14],g=t[15],_=h*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,v=p*u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,x=c*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,y=p*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,M=e*_+n*v+i*x+r*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=_*S,t[1]=(m*u*r-h*f*r-m*i*d+n*f*d+h*i*g-n*u*g)*S,t[2]=(a*f*r-m*o*r+m*i*l-n*f*l-a*i*g+n*o*g)*S,t[3]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*d-n*o*d)*S,t[4]=v*S,t[5]=(c*f*r-p*u*r+p*i*d-e*f*d-c*i*g+e*u*g)*S,t[6]=(p*o*r-s*f*r-p*i*l+e*f*l+s*i*g-e*o*g)*S,t[7]=(s*u*r-c*o*r+c*i*l-e*u*l-s*i*d+e*o*d)*S,t[8]=x*S,t[9]=(p*h*r-c*m*r-p*n*d+e*m*d+c*n*g-e*h*g)*S,t[10]=(s*m*r-p*a*r+p*n*l-e*m*l-s*n*g+e*a*g)*S,t[11]=(c*a*r-s*h*r-c*n*l+e*h*l+s*n*d-e*a*d)*S,t[12]=y*S,t[13]=(c*m*i-p*h*i+p*n*u-e*m*u-c*n*f+e*h*f)*S,t[14]=(p*a*i-s*m*i-p*n*o+e*m*o+s*n*f-e*a*f)*S,t[15]=(s*h*i-c*a*i+c*n*o-e*h*o-s*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=a*h,_=o*l,v=o*c,x=o*h,y=n.x,M=n.y,S=n.z;return i[0]=(1-(m+g))*y,i[1]=(d+x)*y,i[2]=(p-v)*y,i[3]=0,i[4]=(d-x)*M,i[5]=(1-(u+g))*M,i[6]=(f+_)*M,i[7]=0,i[8]=(p+v)*S,i[9]=(f-_)*S,i[10]=(1-(u+m))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=or.set(i[0],i[1],i[2]).length();const s=or.set(i[4],i[5],i[6]).length(),a=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],lr.copy(this);const o=1/r,l=1/s,c=1/a;return lr.elements[0]*=o,lr.elements[1]*=o,lr.elements[2]*=o,lr.elements[4]*=l,lr.elements[5]*=l,lr.elements[6]*=l,lr.elements[8]*=c,lr.elements[9]*=c,lr.elements[10]*=c,e.setFromRotationMatrix(lr),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=2e3){const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let d,p;if(a===On)d=-(s+r)/(s-r),p=-2*s*r/(s-r);else {if(a!==Fn)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);d=-s/(s-r),p=-s*r/(s-r);}return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=2e3){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(s-r),u=(e+t)*l,d=(n+i)*c;let p,m;if(a===On)p=(s+r)*h,m=-2*h;else {if(a!==Fn)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);p=r*h,m=-1*h;}return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=m,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<16;t++)if(e[t]!==n[t])return !1;return !0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const or=new Pi,lr=new ar,cr=new Pi(0,0,0),hr=new Pi(1,1,1),ur=new Pi,dr=new Pi,pr=new Pi,mr=new ar,fr=new Ci;class gr{constructor(t=0,e=0,n=0,i=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i;}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback();}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback();}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback();}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback();}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Wn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e);}return this._order=e,!0===n&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fr.setFromEuler(this),this.setFromQuaternion(fr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order;}}gr.DEFAULT_ORDER="XYZ";class _r{constructor(){this.mask=1;}set(t){this.mask=(1<<t|0)>>>0;}enable(t){this.mask|=1<<t|0;}enableAll(){this.mask=-1;}toggle(t){this.mask^=1<<t|0;}disable(t){this.mask&=~(1<<t|0);}disableAll(){this.mask=0;}test(t){return 0!=(this.mask&t.mask)}isEnabled(t){return 0!=(this.mask&(1<<t|0))}}let vr=0;const xr=new Pi,yr=new Ci,Mr=new ar,Sr=new Pi,br=new Pi,Er=new Pi,Tr=new Ci,wr=new Pi(1,0,0),Ar=new Pi(0,1,0),Rr=new Pi(0,0,1),Cr={type:"added"},Pr={type:"removed"},Lr={type:"childadded",child:null},Ir={type:"childremoved",child:null};class Ur extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vr++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ur.DEFAULT_UP.clone();const t=new Pi,e=new gr,n=new Ci,i=new Pi(1,1,1);e._onChange((function(){n.setFromEuler(e,!1);})),n._onChange((function(){e.setFromQuaternion(n,void 0,!1);})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ar},normalMatrix:{value:new Qn}}),this.matrix=new ar,this.matrixWorld=new ar,this.matrixAutoUpdate=Ur.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={};}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale);}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e);}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0);}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t);}setRotationFromQuaternion(t){this.quaternion.copy(t);}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(wr,t)}rotateY(t){return this.rotateOnAxis(Ar,t)}rotateZ(t){return this.rotateOnAxis(Rr,t)}translateOnAxis(t,e){return xr.copy(t).applyQuaternion(this.quaternion),this.position.add(xr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wr,t)}translateY(t){return this.translateOnAxis(Ar,t)}translateZ(t){return this.translateOnAxis(Rr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(br,Sr,this.up):Mr.lookAt(Sr,br,this.up),this.quaternion.setFromRotationMatrix(Mr),i&&(Mr.extractRotation(i.matrixWorld),yr.setFromRotationMatrix(Mr),this.quaternion.premultiply(yr.invert()));}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cr),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return -1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pr),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return null!==t&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),Mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mr),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const i=this.children[n].getObjectByProperty(t,e);if(void 0!==i)return i}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Er),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Tr,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t);}traverseVisible(t){if(!1===this.visible)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t);}traverseAncestors(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t));}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0;}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const i=e[n];!0!==i.matrixWorldAutoUpdate&&!0!==t||i.updateMatrixWorld(t);}}updateWorldMatrix(t,e){const n=this.parent;if(!0===t&&null!==n&&!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children;for(let e=0,n=t.length;e<n;e++){const n=t[e];!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!1,!0);}}}toJSON(t){const e=void 0===t||"string"==typeof t,n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};function r(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((t=>({boxInitialized:t.boxInitialized,boxMin:t.box.min.toArray(),boxMax:t.box.max.toArray(),sphereInitialized:t.sphereInitialized,sphereRadius:t.sphere.radius,sphereCenter:t.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),null!==this.boundingSphere&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),null!==this.boundingBox&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const n=e.shapes;if(Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const i=n[e];r(t.shapes,i);}else r(t.shapes,n);}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let n=0,i=this.material.length;n<i;n++)e.push(r(t.materials,this.material[n]));i.material=e;}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let e=0;e<this.children.length;e++)i.children.push(this.children[e].toJSON(t).object);}if(this.animations.length>0){i.animations=[];for(let e=0;e<this.animations.length;e++){const n=this.animations[e];i.animations.push(r(t.animations,n));}}if(e){const e=s(t.geometries),i=s(t.materials),r=s(t.textures),a=s(t.images),o=s(t.shapes),l=s(t.skeletons),c=s(t.animations),h=s(t.nodes);e.length>0&&(n.geometries=e),i.length>0&&(n.materials=i),r.length>0&&(n.textures=r),a.length>0&&(n.images=a),o.length>0&&(n.shapes=o),l.length>0&&(n.skeletons=l),c.length>0&&(n.animations=c),h.length>0&&(n.nodes=h);}return n.object=i,n;function s(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i);}return e}}clone(t){return (new this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const n=t.children[e];this.add(n.clone());}return this}}Ur.DEFAULT_UP=new Pi(0,1,0),Ur.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nr=new Pi,Dr=new Pi,Or=new Pi,Fr=new Pi,Br=new Pi,zr=new Pi,Hr=new Pi,kr=new Pi,Vr=new Pi,Gr=new Pi;class Wr{constructor(t=new Pi,e=new Pi,n=new Pi){this.a=t,this.b=e,this.c=n;}static getNormal(t,e,n,i){i.subVectors(n,e),Nr.subVectors(t,e),i.cross(Nr);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Nr.subVectors(i,e),Dr.subVectors(n,e),Or.subVectors(t,e);const s=Nr.dot(Nr),a=Nr.dot(Dr),o=Nr.dot(Or),l=Dr.dot(Dr),c=Dr.dot(Or),h=s*l-a*a;if(0===h)return r.set(0,0,0),null;const u=1/h,d=(l*o-a*c)*u,p=(s*c-a*o)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return null!==this.getBarycoord(t,e,n,i,Fr)&&(Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1)}static getInterpolation(t,e,n,i,r,s,a,o){return null===this.getBarycoord(t,e,n,i,Fr)?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Fr.x),o.addScaledVector(s,Fr.y),o.addScaledVector(a,Fr.z),o)}static isFrontFacing(t,e,n,i){return Nr.subVectors(n,e),Dr.subVectors(t,e),Nr.cross(Dr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nr.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),.5*Nr.cross(Dr).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wr.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Wr.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Wr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;Br.subVectors(i,n),zr.subVectors(r,n),kr.subVectors(t,n);const o=Br.dot(kr),l=zr.dot(kr);if(o<=0&&l<=0)return e.copy(n);Vr.subVectors(t,i);const c=Br.dot(Vr),h=zr.dot(Vr);if(c>=0&&h<=c)return e.copy(i);const u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(n).addScaledVector(Br,s);Gr.subVectors(t,r);const d=Br.dot(Gr),p=zr.dot(Gr);if(p>=0&&d<=p)return e.copy(r);const m=d*l-o*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(zr,a);const f=c*p-d*h;if(f<=0&&h-c>=0&&d-p>=0)return Hr.subVectors(r,i),a=(h-c)/(h-c+(d-p)),e.copy(i).addScaledVector(Hr,a);const g=1/(f+m+u);return s=m*g,a=u*g,e.copy(n).addScaledVector(Br,s).addScaledVector(zr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Yr(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}class Zr{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(void 0===e&&void 0===n){const e=t;e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e);}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,di.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=di.workingColorSpace){return this.r=t,this.g=e,this.b=n,di.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=di.workingColorSpace){if(t=Xn(t,1),e=Wn(e,0,1),n=Wn(n,0,1),0===e)this.r=this.g=this.b=n;else {const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Yr(r,i,t+1/3),this.g=Yr(r,i,t),this.b=Yr(r,i,t-1/3);}return di.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.");}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t);}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const n=i[1],r=n.length;if(3===r)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(6===r)return this.setHex(parseInt(n,16),e);console.warn("THREE.Color: Invalid hex color "+t);}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Xr[t.toLowerCase()];return void 0!==n?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return di.fromWorkingColorSpace(Jr.copy(this),t),65536*Math.round(Wn(255*Jr.r,0,255))+256*Math.round(Wn(255*Jr.g,0,255))+Math.round(Wn(255*Jr.b,0,255))}getHexString(t=Xe){return ("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=di.workingColorSpace){di.fromWorkingColorSpace(Jr.copy(this),e);const n=Jr.r,i=Jr.g,r=Jr.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else {const t=s-a;switch(l=c<=.5?t/(s+a):t/(2-s-a),s){case n:o=(i-r)/t+(i<r?6:0);break;case i:o=(r-n)/t+2;break;case r:o=(n-i)/t+4;}o/=6;}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=di.workingColorSpace){return di.fromWorkingColorSpace(Jr.copy(this),e),t.r=Jr.r,t.g=Jr.g,t.b=Jr.b,t}getStyle(t=Xe){di.fromWorkingColorSpace(Jr.copy(this),t);const e=Jr.r,n=Jr.g,i=Jr.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(jr),this.setHSL(jr.h+t,jr.s+e,jr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jr),t.getHSL(qr);const n=jn(jr.h,qr.h,e),i=jn(jr.s,qr.s,e),r=jn(jr.l,qr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b;}}const Jr=new Zr;Zr.NAMES=Xr;let Kr=0;class $r extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kr++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=1,this.side=u,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=C,this.blendDst=P,this.blendEquation=y,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tn,this.stencilZFail=tn,this.stencilZPass=tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0;}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t;}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const n=t[e];if(void 0===n){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);}}toJSON(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i);}return e}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),void 0!==this.sheen&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),void 0!==this.emissiveIntensity&&1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearcoat&&(n.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(n.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(n.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),void 0!==this.anisotropy&&(n.anisotropy=this.anisotropy),void 0!==this.anisotropyRotation&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(n.combine=this.combine)),void 0!==this.envMapRotation&&(n.envMapRotation=this.envMapRotation.toArray()),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(n.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(n.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(n.size=this.size),null!==this.shadowSide&&(n.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(n.blending=this.blending),this.side!==u&&(n.side=this.side),!0===this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=!0),this.blendSrc!==C&&(n.blendSrc=this.blendSrc),this.blendDst!==P&&(n.blendDst=this.blendDst),this.blendEquation!==y&&(n.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(n.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(n.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(n.blendAlpha=this.blendAlpha),3!==this.depthFunc&&(n.depthFunc=this.depthFunc),!1===this.depthTest&&(n.depthTest=this.depthTest),!1===this.depthWrite&&(n.depthWrite=this.depthWrite),!1===this.colorWrite&&(n.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(n.stencilWriteMask=this.stencilWriteMask),519!==this.stencilFunc&&(n.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(n.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tn&&(n.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(n.stencilWrite=this.stencilWrite),void 0!==this.rotation&&0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaHash&&(n.alphaHash=!0),!0===this.alphaToCoverage&&(n.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=!0),!0===this.forceSinglePass&&(n.forceSinglePass=!0),!0===this.wireframe&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=!0),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),!1===this.fog&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){const e=i(t.textures),r=i(t.images);e.length>0&&(n.textures=e),r.length>0&&(n.images=r);}return n}clone(){return (new this.constructor).copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(null!==e){const t=e.length;n=new Array(t);for(let i=0;i!==t;++i)n[i]=e[i].clone();}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"});}set needsUpdate(t){!0===t&&this.version++;}}class Qr extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=Y,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}es();function es(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(i[t]=0,i[256|t]=32768,r[t]=24,r[256|t]=24):e<-14?(i[t]=1024>>-e-14,i[256|t]=1024>>-e-14|32768,r[t]=-e-1,r[256|t]=-e-1):e<=15?(i[t]=e+15<<10,i[256|t]=e+15<<10|32768,r[t]=13,r[256|t]=13):e<128?(i[t]=31744,i[256|t]=64512,r[t]=24,r[256|t]=24):(i[t]=31744,i[256|t]=64512,r[t]=13,r[256|t]=13);}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,n=0;for(;0==(8388608&e);)e<<=1,n-=8388608;e&=-8388609,n+=947912704,s[t]=e|n;}for(let t=1024;t<2048;++t)s[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)a[t]=t<<23;a[31]=1199570944,a[32]=2147483648;for(let t=33;t<63;++t)a[t]=2147483648+(t-32<<23);a[63]=3347054592;for(let t=1;t<64;++t)32!==t&&(o[t]=1024);return {floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}const ss=new Pi,as=new $n;class os{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=n,this.usage=En,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=It,this.version=0;}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++;}get updateRange(){return oi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e});}clearUpdateRanges(){this.updateRanges.length=0;}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(2===this.itemSize)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(3===this.itemSize)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXYZ(e,ss.x,ss.y,ss.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix4(t),this.setXYZ(e,ss.x,ss.y,ss.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyNormalMatrix(t),this.setXYZ(e,ss.x,ss.y,ss.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.transformDirection(t),this.setXYZ(e,ss.x,ss.y,ss.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array),i=Jn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array),i=Jn(i,this.array),r=Jn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return ""!==this.name&&(t.name=this.name),this.usage!==En&&(t.usage=this.usage),t}}class ds extends os{constructor(t,e,n){super(new Uint16Array(t),e,n);}}class ms extends os{constructor(t,e,n){super(new Uint32Array(t),e,n);}}class gs extends os{constructor(t,e,n){super(new Float32Array(t),e,n);}}let _s=0;const vs=new ar,xs=new Ur,ys=new Pi,Ms=new Ui,Ss=new Ui,bs=new Pi;class Es extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_s++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={};}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ei(t)?ms:ds)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n});}clearGroups(){this.groups=[];}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e;}applyMatrix4(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(void 0!==n){const e=(new Qn).getNormalMatrix(t);n.applyNormalMatrix(e),n.needsUpdate=!0;}const i=this.attributes.tangent;return void 0!==i&&(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(t){return vs.makeRotationFromQuaternion(t),this.applyMatrix4(vs),this}rotateX(t){return vs.makeRotationX(t),this.applyMatrix4(vs),this}rotateY(t){return vs.makeRotationY(t),this.applyMatrix4(vs),this}rotateZ(t){return vs.makeRotationZ(t),this.applyMatrix4(vs),this}translate(t,e,n){return vs.makeTranslation(t,e,n),this.applyMatrix4(vs),this}scale(t,e,n){return vs.makeScale(t,e,n),this.applyMatrix4(vs),this}lookAt(t){return xs.lookAt(t),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];e.push(i.x,i.y,i.z||0);}return this.setAttribute("position",new gs(e,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new Pi(-1/0,-1/0,-1/0),new Pi(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Ms.setFromBufferAttribute(n),this.morphTargetsRelative?(bs.addVectors(this.boundingBox.min,Ms.min),this.boundingBox.expandByPoint(bs),bs.addVectors(this.boundingBox.max,Ms.max),this.boundingBox.expandByPoint(bs)):(this.boundingBox.expandByPoint(Ms.min),this.boundingBox.expandByPoint(Ms.max));}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new Pi,1/0);if(t){const n=this.boundingSphere.center;if(Ms.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Ss.setFromBufferAttribute(n),this.morphTargetsRelative?(bs.addVectors(Ms.min,Ss.min),Ms.expandByPoint(bs),bs.addVectors(Ms.max,Ss.max),Ms.expandByPoint(bs)):(Ms.expandByPoint(Ss.min),Ms.expandByPoint(Ss.max));}Ms.getCenter(n);let i=0;for(let e=0,r=t.count;e<r;e++)bs.fromBufferAttribute(t,e),i=Math.max(i,n.distanceToSquared(bs));if(e)for(let r=0,s=e.length;r<s;r++){const s=e[r],a=this.morphTargetsRelative;for(let e=0,r=s.count;e<r;e++)bs.fromBufferAttribute(s,e),a&&(ys.fromBufferAttribute(t,e),bs.add(ys)),i=Math.max(i,n.distanceToSquared(bs));}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}}computeTangents(){const t=this.index,e=this.attributes;if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.position,i=e.normal,r=e.uv;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new os(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let t=0;t<n.count;t++)a[t]=new Pi,o[t]=new Pi;const l=new Pi,c=new Pi,h=new Pi,u=new $n,d=new $n,p=new $n,m=new Pi,f=new Pi;function g(t,e,i){l.fromBufferAttribute(n,t),c.fromBufferAttribute(n,e),h.fromBufferAttribute(n,i),u.fromBufferAttribute(r,t),d.fromBufferAttribute(r,e),p.fromBufferAttribute(r,i),c.sub(l),h.sub(l),d.sub(u),p.sub(u);const s=1/(d.x*p.y-p.x*d.y);isFinite(s)&&(m.copy(c).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(s),f.copy(h).multiplyScalar(d.x).addScaledVector(c,-p.x).multiplyScalar(s),a[t].add(m),a[e].add(m),a[i].add(m),o[t].add(f),o[e].add(f),o[i].add(f));}let _=this.groups;0===_.length&&(_=[{start:0,count:t.count}]);for(let e=0,n=_.length;e<n;++e){const n=_[e],i=n.start;for(let e=i,r=i+n.count;e<r;e+=3)g(t.getX(e+0),t.getX(e+1),t.getX(e+2));}const v=new Pi,x=new Pi,y=new Pi,M=new Pi;function S(t){y.fromBufferAttribute(i,t),M.copy(y);const e=a[t];v.copy(e),v.sub(y.multiplyScalar(y.dot(e))).normalize(),x.crossVectors(M,e);const n=x.dot(o[t])<0?-1:1;s.setXYZW(t,v.x,v.y,v.z,n);}for(let e=0,n=_.length;e<n;++e){const n=_[e],i=n.start;for(let e=i,r=i+n.count;e<r;e+=3)S(t.getX(e+0)),S(t.getX(e+1)),S(t.getX(e+2));}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(void 0!==e){let n=this.getAttribute("normal");if(void 0===n)n=new os(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let t=0,e=n.count;t<e;t++)n.setXYZ(t,0,0,0);const i=new Pi,r=new Pi,s=new Pi,a=new Pi,o=new Pi,l=new Pi,c=new Pi,h=new Pi;if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(n,d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(c),o.add(c),l.add(c),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z);}else for(let t=0,a=e.count;t<a;t+=3)i.fromBufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(t+0,c.x,c.y,c.z),n.setXYZ(t+1,c.x,c.y,c.z),n.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0;}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)bs.fromBufferAttribute(t,e),bs.normalize(),t.setXYZ(e,bs.x,bs.y,bs.z);}toNonIndexed(){function t(t,e){const n=t.array,i=t.itemSize,r=t.normalized,s=new n.constructor(e.length*i);let a=0,o=0;for(let r=0,l=e.length;r<l;r++){a=t.isInterleavedBufferAttribute?e[r]*t.data.stride+t.offset:e[r]*i;for(let t=0;t<i;t++)s[o++]=n[a++];}return new os(s,i,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Es,n=this.index.array,i=this.attributes;for(const r in i){const s=t(i[r],n);e.setAttribute(r,s);}const r=this.morphAttributes;for(const i in r){const s=[],a=r[i];for(let e=0,i=a.length;e<i;e++){const i=t(a[e],n);s.push(i);}e.morphAttributes[i]=s;}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let t=0,n=s.length;t<n;t++){const n=s[t];e.addGroup(n.start,n.count,n.materialIndex);}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const e in n){const i=n[e];t.data.attributes[e]=i.toJSON(t.data);}const i={};let r=!1;for(const e in this.morphAttributes){const n=this.morphAttributes[e],s=[];for(let e=0,i=n.length;e<i;e++){const i=n[e];s.push(i.toJSON(t.data));}s.length>0&&(i[e]=s,r=!0);}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return null!==a&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return (new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;null!==n&&this.setIndex(n.clone(e));const i=t.attributes;for(const t in i){const n=i[t];this.setAttribute(t,n.clone(e));}const r=t.morphAttributes;for(const t in r){const n=[],i=r[t];for(let t=0,r=i.length;t<r;t++)n.push(i[t].clone(e));this.morphAttributes[t]=n;}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let t=0,e=s.length;t<e;t++){const e=s[t];this.addGroup(e.start,e.count,e.materialIndex);}const a=t.boundingBox;null!==a&&(this.boundingBox=a.clone());const o=t.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"});}}const Ts=new ar,ws=new sr,As=new Ki,Rs=new Pi,Cs=new Pi,Ps=new Pi,Ls=new Pi,Is=new Pi,Us=new Pi,Ns=new $n,Ds=new $n,Os=new $n,Fs=new Pi,Bs=new Pi,zs=new Pi,Hs=new Pi,ks=new Pi;class Vs extends Ur{constructor(t=new Es,e=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets();}copy(t,e){return super.copy(t,e),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t;}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let n=0,i=r.length;n<i;n++){const i=a[n],o=r[n];0!==i&&(Is.fromBufferAttribute(o,t),s?Us.addScaledVector(Is,i):Us.addScaledVector(Is.sub(e),i));}e.add(Us);}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(void 0!==i){if(null===n.boundingSphere&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!1===As.containsPoint(ws.origin)){if(null===ws.intersectSphere(As,Rs))return;if(ws.origin.distanceToSquared(Rs)>(t.far-t.near)**2)return}Ts.copy(r).invert(),ws.copy(t.ray).applyMatrix4(Ts),null!==n.boundingBox&&!1===ws.intersectsBox(n.boundingBox)||this._computeIntersections(t,e,ws);}}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(null!==a)if(Array.isArray(s))for(let r=0,o=u.length;r<o;r++){const o=u[r],p=s[o.materialIndex];for(let r=Math.max(o.start,d.start),s=Math.min(a.count,Math.min(o.start+o.count,d.start+d.count));r<s;r+=3){i=Gs(this,p,t,n,l,c,h,a.getX(r),a.getX(r+1),a.getX(r+2)),i&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=o.materialIndex,e.push(i));}}else {for(let r=Math.max(0,d.start),o=Math.min(a.count,d.start+d.count);r<o;r+=3){i=Gs(this,s,t,n,l,c,h,a.getX(r),a.getX(r+1),a.getX(r+2)),i&&(i.faceIndex=Math.floor(r/3),e.push(i));}}else if(void 0!==o)if(Array.isArray(s))for(let r=0,a=u.length;r<a;r++){const a=u[r],p=s[a.materialIndex];for(let r=Math.max(a.start,d.start),s=Math.min(o.count,Math.min(a.start+a.count,d.start+d.count));r<s;r+=3){i=Gs(this,p,t,n,l,c,h,r,r+1,r+2),i&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=a.materialIndex,e.push(i));}}else {for(let r=Math.max(0,d.start),a=Math.min(o.count,d.start+d.count);r<a;r+=3){i=Gs(this,s,t,n,l,c,h,r,r+1,r+2),i&&(i.faceIndex=Math.floor(r/3),e.push(i));}}}}function Gs(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Cs),t.getVertexPosition(l,Ps),t.getVertexPosition(c,Ls);const h=function(t,e,n,i,r,s,a,o){let l;if(l=e.side===d?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,e.side===u,o),null===l)return null;ks.copy(o),ks.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ks);return c<n.near||c>n.far?null:{distance:c,point:ks.clone(),object:t}}(t,e,n,i,Cs,Ps,Ls,Hs);if(h){r&&(Ns.fromBufferAttribute(r,o),Ds.fromBufferAttribute(r,l),Os.fromBufferAttribute(r,c),h.uv=Wr.getInterpolation(Hs,Cs,Ps,Ls,Ns,Ds,Os,new $n)),s&&(Ns.fromBufferAttribute(s,o),Ds.fromBufferAttribute(s,l),Os.fromBufferAttribute(s,c),h.uv1=Wr.getInterpolation(Hs,Cs,Ps,Ls,Ns,Ds,Os,new $n)),a&&(Fs.fromBufferAttribute(a,o),Bs.fromBufferAttribute(a,l),zs.fromBufferAttribute(a,c),h.normal=Wr.getInterpolation(Hs,Cs,Ps,Ls,Fs,Bs,zs,new Pi),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const t={a:o,b:l,c:c,normal:new Pi,materialIndex:0};Wr.getNormal(Cs,Ps,Ls,t.normal),h.face=t;}return h}class Ws extends Es{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],h=[];let u=0,d=0;function p(t,e,n,i,r,s,p,m,f,g,_){const v=s/f,x=p/g,y=s/2,M=p/2,S=m/2,b=f+1,E=g+1;let T=0,w=0;const A=new Pi;for(let s=0;s<E;s++){const a=s*x-M;for(let o=0;o<b;o++){const u=o*v-y;A[t]=u*i,A[e]=a*r,A[n]=S,l.push(A.x,A.y,A.z),A[t]=0,A[e]=0,A[n]=m>0?1:-1,c.push(A.x,A.y,A.z),h.push(o/f),h.push(1-s/g),T+=1;}}for(let t=0;t<g;t++)for(let e=0;e<f;e++){const n=u+e+b*t,i=u+e+b*(t+1),r=u+(e+1)+b*(t+1),s=u+(e+1)+b*t;o.push(n,i,s),o.push(i,r,s),w+=6;}a.addGroup(d,w,_),d+=w,u+=T;}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new gs(l,3)),this.setAttribute("normal",new gs(c,3)),this.setAttribute("uv",new gs(h,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r;}}return e}function js(t){const e={};for(let n=0;n<t.length;n++){const i=Xs(t[n]);for(const t in i)e[t]=i[t];}return e}function qs(t){return null===t.getRenderTarget()?t.outputColorSpace:di.workingColorSpace}const Ys={clone:Xs,merge:js};class Zs extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&this.setValues(t);}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=function(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const i=this.uniforms[n].value;i&&i.isTexture?e.uniforms[n]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[n]={type:"m4",value:i.toArray()}:e.uniforms[n]={value:i};}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const t in this.extensions)!0===this.extensions[t]&&(n[t]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Js extends Ur{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ar,this.projectionMatrix=new ar,this.projectionMatrixInverse=new ar,this.coordinateSystem=On;}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert();}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert();}clone(){return (new this.constructor).copy(this)}}const Ks=new Pi,$s=new $n,Qs=new $n;class ta extends Js{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix();}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*Vn*Math.atan(e),this.updateProjectionMatrix();}getFocalLength(){const t=Math.tan(.5*kn*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Vn*Math.atan(Math.tan(.5*kn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z);}getViewSize(t,e){return this.getViewBounds(t,$s,Qs),e.subVectors(Qs,$s)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix();}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix();}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*kn*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(null!==this.view&&this.view.enabled){const t=s.fullWidth,a=s.fullHeight;r+=s.offsetX*i/t,e-=s.offsetY*n/a,i*=s.width/t,n*=s.height/a;}const a=this.filmOffset;0!==a&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ea=-90;class na extends Ur{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ta(ea,1,t,e);i.layers=this.layers,this.add(i);const r=new ta(ea,1,t,e);r.layers=this.layers,this.add(r);const s=new ta(ea,1,t,e);s.layers=this.layers,this.add(s);const a=new ta(ea,1,t,e);a.layers=this.layers,this.add(a);const o=new ta(ea,1,t,e);o.layers=this.layers,this.add(o);const l=new ta(ea,1,t,e);l.layers=this.layers,this.add(l);}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const t of e)this.remove(t);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else {if(t!==Fn)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);}for(const t of e)this.add(t),t.updateMatrixWorld();}update(t,e){null===this.parent&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(h,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0;}}class ia extends Mi{constructor(t,e,n,i,r,s,a,o,l,c){super(t=void 0!==t?t:[],e=void 0!==e?e:lt,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1;}get images(){return this.image}set images(t){this.image=t;}}class ra extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ia(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:Mt;}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:"\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"},i=new Ws(5,5,5),r=new Zs({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:d,blending:0});r.uniforms.tEquirect.value=e;const s=new Vs(i,r),a=e.minFilter;e.minFilter===Et&&(e.minFilter=Mt);return new na(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(r);}}const sa=new Pi,aa=new Pi,oa=new Qn;class la{constructor(t=new Pi(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e;}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sa.subVectors(n,e).cross(aa.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),i=this.normal.dot(n);if(0===i)return 0===this.distanceToPoint(t.start)?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oa.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return (new this.constructor).copy(this)}}const ca=new Ki,ha=new Pi;class ua{constructor(t=new la,e=new la,n=new la,i=new la,r=new la,s=new la){this.planes=[t,e,n,i,r,s];}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],p=i[9],m=i[10],f=i[11],g=i[12],_=i[13],v=i[14],x=i[15];if(n[0].setComponents(o-r,u-l,f-d,x-g).normalize(),n[1].setComponents(o+r,u+l,f+d,x+g).normalize(),n[2].setComponents(o+s,u+c,f+p,x+_).normalize(),n[3].setComponents(o-s,u-c,f-p,x-_).normalize(),n[4].setComponents(o-a,u-h,f-m,x-v).normalize(),e===On)n[5].setComponents(o+a,u+h,f+m,x+v).normalize();else {if(e!==Fn)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);n[5].setComponents(a,h,m,v).normalize();}return this}intersectsObject(t){if(void 0!==t.boundingSphere)null===t.boundingSphere&&t.computeBoundingSphere(),ca.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else {const e=t.geometry;null===e.boundingSphere&&e.computeBoundingSphere(),ca.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);}return this.intersectsSphere(ca)}intersectsSprite(t){return ca.center.set(0,0,0),ca.radius=.7071067811865476,ca.applyMatrix4(t.matrixWorld),this.intersectsSphere(ca)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let t=0;t<6;t++){if(e[t].distanceToPoint(n)<i)return !1}return !0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ha.x=i.normal.x>0?t.max.x:t.min.x,ha.y=i.normal.y>0?t.max.y:t.min.y,ha.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ha)<0)return !1}return !0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return !1;return !0}clone(){return (new this.constructor).copy(this)}}function da(){let t=null,e=!1,n=null,i=null;function r(e,s){n(e,s),i=t.requestAnimationFrame(r);}return {start:function(){!0!==e&&null!==n&&(i=t.requestAnimationFrame(r),e=!0);},stop:function(){t.cancelAnimationFrame(i),e=!1;},setAnimationLoop:function(t){n=t;},setContext:function(e){t=e;}}}function pa(t,e){const n=e.isWebGL2,i=new WeakMap;return {get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const n=i.get(e);n&&(t.deleteBuffer(n.buffer),i.delete(e));},update:function(e,r){if(e.isGLBufferAttribute){const t=i.get(e);return void((!t||t.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const s=i.get(e);if(void 0===s)i.set(e,function(e,i){const r=e.array,s=e.usage,a=r.byteLength,o=t.createBuffer();let l;if(t.bindBuffer(i,o),t.bufferData(i,r,s),e.onUploadCallback(),r instanceof Float32Array)l=t.FLOAT;else if(r instanceof Uint16Array)if(e.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");l=t.HALF_FLOAT;}else l=t.UNSIGNED_SHORT;else if(r instanceof Int16Array)l=t.SHORT;else if(r instanceof Uint32Array)l=t.UNSIGNED_INT;else if(r instanceof Int32Array)l=t.INT;else if(r instanceof Int8Array)l=t.BYTE;else if(r instanceof Uint8Array)l=t.UNSIGNED_BYTE;else {if(!(r instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r);l=t.UNSIGNED_BYTE;}return {buffer:o,type:l,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version,size:a}}(e,r));else if(s.version<e.version){if(s.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");!function(e,i,r){const s=i.array,a=i._updateRange,o=i.updateRanges;if(t.bindBuffer(r,e),-1===a.count&&0===o.length&&t.bufferSubData(r,0,s),0!==o.length){for(let e=0,i=o.length;e<i;e++){const i=o[e];n?t.bufferSubData(r,i.start*s.BYTES_PER_ELEMENT,s,i.start,i.count):t.bufferSubData(r,i.start*s.BYTES_PER_ELEMENT,s.subarray(i.start,i.start+i.count));}i.clearUpdateRanges();}-1!==a.count&&(n?t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1),i.onUploadCallback();}(s.buffer,e,r),s.version=e.version;}}}}class ma extends Es{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,u=e/o,d=[],p=[],m=[],f=[];for(let t=0;t<c;t++){const e=t*u-s;for(let n=0;n<l;n++){const i=n*h-r;p.push(i,-e,0),m.push(0,0,1),f.push(n/a),f.push(1-t/o);}}for(let t=0;t<o;t++)for(let e=0;e<a;e++){const n=e+l*t,i=e+l*(t+1),r=e+1+l*(t+1),s=e+1+l*t;d.push(n,i,s),d.push(i,r,s);}this.setIndex(d),this.setAttribute("position",new gs(p,3)),this.setAttribute("normal",new gs(m,3)),this.setAttribute("uv",new gs(f,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.width,t.height,t.widthSegments,t.heightSegments)}}const fa={alphahash_fragment:"#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",alphahash_pars_fragment:"#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",alphatest_pars_fragment:"#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",batching_pars_vertex:"#ifdef USE_BATCHING\n\tattribute float batchId;\n\tuniform highp sampler2D batchingTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",batching_vertex:"#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif",begin_vertex:"vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",iridescence_fragment:"#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:"\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_fragment:"LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",lights_lambert_pars_fragment:"varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphinstance_vertex:"#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[MORPHTARGETS_COUNT];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",morphcolor_vertex:"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t#endif\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\t#ifndef USE_INSTANCING_MORPH\n\t\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\t#endif\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",normal_fragment_begin:"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",normal_fragment_maps:"#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",normal_pars_fragment:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_pars_vertex:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_vertex:"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",iridescence_pars_fragment:"#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",opaque_fragment:"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tfloat startCompression = 0.8 - 0.04;\n\tfloat desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min(color.r, min(color.g, color.b));\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max(color.r, max(color.g, color.b));\n\tif (peak < startCompression) return color;\n\tfloat d = 1. - startCompression;\n\tfloat newPeak = 1. - d * d / (peak + d - startCompression);\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);\n\treturn mix(color, vec3(1, 1, 1), g);\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmission_fragment:"#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",transmission_pars_fragment:"#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",uv_pars_fragment:"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",uv_pars_vertex:"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",uv_vertex:"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",background_frag:"uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",backgroundCube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",backgroundCube_frag:"#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",depth_vert:"#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",meshbasic_vert:"#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshnormal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",meshnormal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",shadow_vert:"#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}"},ga={common:{diffuse:{value:new Zr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qn},alphaMap:{value:null},alphaMapTransform:{value:new Qn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qn}},envmap:{envMap:{value:null},envMapRotation:{value:new Qn},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qn},normalScale:{value:new $n(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qn},alphaTest:{value:0},uvTransform:{value:new Qn}},sprite:{diffuse:{value:new Zr(16777215)},opacity:{value:1},center:{value:new $n(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qn},alphaMap:{value:null},alphaMapTransform:{value:new Qn},alphaTest:{value:0}}},_a={basic:{uniforms:js([ga.common,ga.specularmap,ga.envmap,ga.aomap,ga.lightmap,ga.fog]),vertexShader:fa.meshbasic_vert,fragmentShader:fa.meshbasic_frag},lambert:{uniforms:js([ga.common,ga.specularmap,ga.envmap,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.fog,ga.lights,{emissive:{value:new Zr(0)}}]),vertexShader:fa.meshlambert_vert,fragmentShader:fa.meshlambert_frag},phong:{uniforms:js([ga.common,ga.specularmap,ga.envmap,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.fog,ga.lights,{emissive:{value:new Zr(0)},specular:{value:new Zr(1118481)},shininess:{value:30}}]),vertexShader:fa.meshphong_vert,fragmentShader:fa.meshphong_frag},standard:{uniforms:js([ga.common,ga.envmap,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.roughnessmap,ga.metalnessmap,ga.fog,ga.lights,{emissive:{value:new Zr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fa.meshphysical_vert,fragmentShader:fa.meshphysical_frag},toon:{uniforms:js([ga.common,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.gradientmap,ga.fog,ga.lights,{emissive:{value:new Zr(0)}}]),vertexShader:fa.meshtoon_vert,fragmentShader:fa.meshtoon_frag},matcap:{uniforms:js([ga.common,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.fog,{matcap:{value:null}}]),vertexShader:fa.meshmatcap_vert,fragmentShader:fa.meshmatcap_frag},points:{uniforms:js([ga.points,ga.fog]),vertexShader:fa.points_vert,fragmentShader:fa.points_frag},dashed:{uniforms:js([ga.common,ga.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fa.linedashed_vert,fragmentShader:fa.linedashed_frag},depth:{uniforms:js([ga.common,ga.displacementmap]),vertexShader:fa.depth_vert,fragmentShader:fa.depth_frag},normal:{uniforms:js([ga.common,ga.bumpmap,ga.normalmap,ga.displacementmap,{opacity:{value:1}}]),vertexShader:fa.meshnormal_vert,fragmentShader:fa.meshnormal_frag},sprite:{uniforms:js([ga.sprite,ga.fog]),vertexShader:fa.sprite_vert,fragmentShader:fa.sprite_frag},background:{uniforms:{uvTransform:{value:new Qn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fa.background_vert,fragmentShader:fa.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qn}},vertexShader:fa.backgroundCube_vert,fragmentShader:fa.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fa.cube_vert,fragmentShader:fa.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fa.equirect_vert,fragmentShader:fa.equirect_frag},distanceRGBA:{uniforms:js([ga.common,ga.displacementmap,{referencePosition:{value:new Pi},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fa.distanceRGBA_vert,fragmentShader:fa.distanceRGBA_frag},shadow:{uniforms:js([ga.lights,ga.fog,{color:{value:new Zr(0)},opacity:{value:1}}]),vertexShader:fa.shadow_vert,fragmentShader:fa.shadow_frag}};_a.physical={uniforms:js([_a.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qn},clearcoatNormalScale:{value:new $n(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qn},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qn},sheen:{value:0},sheenColor:{value:new Zr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qn},transmissionSamplerSize:{value:new $n},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qn},attenuationDistance:{value:0},attenuationColor:{value:new Zr(0)},specularColor:{value:new Zr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qn},anisotropyVector:{value:new $n},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qn}}]),vertexShader:fa.meshphysical_vert,fragmentShader:fa.meshphysical_frag};const va={r:0,b:0,g:0},xa=new gr,ya=new ar;function Ma(t,e,n,i,r,s,a){const o=new Zr(0);let l,c,h=!0===s?0:1,p=null,m=0,f=null;function g(e,n){e.getRGB(va,qs(t)),i.buffers.color.setClear(va.r,va.g,va.b,n,a);}return {getClearColor:function(){return o},setClearColor:function(t,e=1){o.set(t),h=e,g(o,h);},getClearAlpha:function(){return h},setClearAlpha:function(t){h=t,g(o,h);},render:function(s,_){let v=!1,x=!0===_.isScene?_.background:null;if(x&&x.isTexture){x=(_.backgroundBlurriness>0?n:e).get(x);}null===x?g(o,h):x&&x.isColor&&(g(x,1),v=!0);const y=t.xr.getEnvironmentBlendMode();"additive"===y?i.buffers.color.setClear(0,0,0,1,a):"alpha-blend"===y&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===dt)?(void 0===c&&(c=new Vs(new Ws(1,1,1),new Zs({name:"BackgroundCubeMaterial",uniforms:Xs(_a.backgroundCube.uniforms),vertexShader:_a.backgroundCube.vertexShader,fragmentShader:_a.backgroundCube.fragmentShader,side:d,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld);},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),xa.copy(_.backgroundRotation),xa.x*=-1,xa.y*=-1,xa.z*=-1,x.isCubeTexture&&!1===x.isRenderTargetTexture&&(xa.y*=-1,xa.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&!1===x.isRenderTargetTexture?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ya.makeRotationFromEuler(xa)),c.material.toneMapped=di.getTransfer(x.colorSpace)!==Je,p===x&&m===x.version&&f===t.toneMapping||(c.material.needsUpdate=!0,p=x,m=x.version,f=t.toneMapping),c.layers.enableAll(),s.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(void 0===l&&(l=new Vs(new ma(2,2),new Zs({name:"BackgroundMaterial",uniforms:Xs(_a.background.uniforms),vertexShader:_a.background.vertexShader,fragmentShader:_a.background.fragmentShader,side:u,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=di.getTransfer(x.colorSpace)!==Je,!0===x.matrixAutoUpdate&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),p===x&&m===x.version&&f===t.toneMapping||(l.material.needsUpdate=!0,p=x,m=x.version,f=t.toneMapping),l.layers.enableAll(),s.unshift(l,l.geometry,l.material,0,0,null));}}}function Sa(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||null!==s,o={},l=p(null);let c=l,h=!1;function u(e){return i.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function d(e){return i.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function p(t){const e=[],n=[],i=[];for(let t=0;t<r;t++)e[t]=0,n[t]=0,i[t]=0;return {geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,attributeDivisors:i,object:t,attributes:{},index:null}}function m(){const t=c.newAttributes;for(let e=0,n=t.length;e<n;e++)t[e]=0;}function f(t){g(t,0);}function g(n,r){const s=c.newAttributes,a=c.enabledAttributes,o=c.attributeDivisors;if(s[n]=1,0===a[n]&&(t.enableVertexAttribArray(n),a[n]=1),o[n]!==r){(i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,r),o[n]=r;}}function _(){const e=c.newAttributes,n=c.enabledAttributes;for(let i=0,r=n.length;i<r;i++)n[i]!==e[i]&&(t.disableVertexAttribArray(i),n[i]=0);}function v(e,n,i,r,s,a,o){!0===o?t.vertexAttribIPointer(e,n,i,s,a):t.vertexAttribPointer(e,n,i,r,s,a);}function x(){y(),h=!0,c!==l&&(c=l,u(c.object));}function y(){l.geometry=null,l.program=null,l.wireframe=!1;}return {setup:function(r,l,d,x,y){let M=!1;if(a){const e=function(e,n,r){const a=!0===r.wireframe;let l=o[e.id];void 0===l&&(l={},o[e.id]=l);let c=l[n.id];void 0===c&&(c={},l[n.id]=c);let h=c[a];void 0===h&&(h=p(i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),c[a]=h);return h}(x,d,l);c!==e&&(c=e,u(c.object)),M=function(t,e,n,i){const r=c.attributes,s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){const n=r[e];let i=s[e];if(void 0===i&&("instanceMatrix"===e&&t.instanceMatrix&&(i=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(i=t.instanceColor)),void 0===n)return !0;if(n.attribute!==i)return !0;if(i&&n.data!==i.data)return !0;a++;}}return c.attributesNum!==a||c.index!==i}(r,x,d,y),M&&function(t,e,n,i){const r={},s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){let n=s[e];void 0===n&&("instanceMatrix"===e&&t.instanceMatrix&&(n=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(n=t.instanceColor));const i={};i.attribute=n,n&&n.data&&(i.data=n.data),r[e]=i,a++;}}c.attributes=r,c.attributesNum=a,c.index=i;}(r,x,d,y);}else {const t=!0===l.wireframe;c.geometry===x.id&&c.program===d.id&&c.wireframe===t||(c.geometry=x.id,c.program=d.id,c.wireframe=t,M=!0);}null!==y&&n.update(y,t.ELEMENT_ARRAY_BUFFER),(M||h)&&(h=!1,function(r,s,a,o){if(!1===i.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return;m();const l=o.attributes,c=a.getAttributes(),h=s.defaultAttributeValues;for(const e in c){const s=c[e];if(s.location>=0){let a=l[e];if(void 0===a&&("instanceMatrix"===e&&r.instanceMatrix&&(a=r.instanceMatrix),"instanceColor"===e&&r.instanceColor&&(a=r.instanceColor)),void 0!==a){const e=a.normalized,l=a.itemSize,c=n.get(a);if(void 0===c)continue;const h=c.buffer,u=c.type,d=c.bytesPerElement,p=!0===i.isWebGL2&&(u===t.INT||u===t.UNSIGNED_INT||a.gpuType===Pt);if(a.isInterleavedBufferAttribute){const n=a.data,i=n.stride,c=a.offset;if(n.isInstancedInterleavedBuffer){for(let t=0;t<s.locationSize;t++)g(s.location+t,n.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=n.meshPerAttribute*n.count);}else for(let t=0;t<s.locationSize;t++)f(s.location+t);t.bindBuffer(t.ARRAY_BUFFER,h);for(let t=0;t<s.locationSize;t++)v(s.location+t,l/s.locationSize,u,e,i*d,(c+l/s.locationSize*t)*d,p);}else {if(a.isInstancedBufferAttribute){for(let t=0;t<s.locationSize;t++)g(s.location+t,a.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=a.meshPerAttribute*a.count);}else for(let t=0;t<s.locationSize;t++)f(s.location+t);t.bindBuffer(t.ARRAY_BUFFER,h);for(let t=0;t<s.locationSize;t++)v(s.location+t,l/s.locationSize,u,e,l*d,l/s.locationSize*t*d,p);}}else if(void 0!==h){const n=h[e];if(void 0!==n)switch(n.length){case 2:t.vertexAttrib2fv(s.location,n);break;case 3:t.vertexAttrib3fv(s.location,n);break;case 4:t.vertexAttrib4fv(s.location,n);break;default:t.vertexAttrib1fv(s.location,n);}}}}_();}(r,l,d,x),null!==y&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(y).buffer));},reset:x,resetDefaultState:y,dispose:function(){x();for(const t in o){const e=o[t];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t];}delete o[t];}},releaseStatesOfGeometry:function(t){if(void 0===o[t.id])return;const e=o[t.id];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t];}delete o[t.id];},releaseStatesOfProgram:function(t){for(const e in o){const n=o[e];if(void 0===n[t.id])continue;const i=n[t.id];for(const t in i)d(i[t].object),delete i[t];delete n[t.id];}},initAttributes:m,enableAttribute:f,disableUnusedAttributes:_}}function ba(t,e,n,i){const r=i.isWebGL2;let s;this.setMode=function(t){s=t;},this.render=function(e,i){t.drawArrays(s,e,i),n.update(i,s,1);},this.renderInstances=function(i,a,o){if(0===o)return;let l,c;if(r)l=t,c="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[c](s,i,a,o),n.update(a,s,o);},this.renderMultiDraw=function(t,i,r){if(0===r)return;const a=e.get("WEBGL_multi_draw");if(null===a)for(let e=0;e<r;e++)this.render(t[e],i[e]);else {a.multiDrawArraysWEBGL(s,t,0,i,0,r);let e=0;for(let t=0;t<r;t++)e+=i[t];n.update(e,s,1);}};}function Ea(t,e,n){let i;function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return "highp";e="mediump";}return "mediump"===e&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s="undefined"!=typeof WebGL2RenderingContext&&"WebGL2RenderingContext"===t.constructor.name;let a=void 0!==n.precision?n.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=!0===n.logarithmicDepthBuffer,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,x=s||e.has("OES_texture_float");return {isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==i)return i;if(!0===e.has("EXT_texture_filter_anisotropic")){const n=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:v&&x,maxSamples:s?t.getParameter(t.MAX_SAMPLES):0}}function Ta(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new la,o=new Qn,l={value:null,needsUpdate:!1};function c(t,n,i,r){const s=null!==t?t.length:0;let c=null;if(0!==s){if(c=l.value,!0!==r||null===c){const e=i+4*s,r=n.matrixWorldInverse;o.getNormalMatrix(r),(null===c||c.length<e)&&(c=new Float32Array(e));for(let e=0,n=i;e!==s;++e,n+=4)a.copy(t[e]).applyMatrix4(r,o),a.normal.toArray(c,n),c[n+3]=a.constant;}l.value=c,l.needsUpdate=!0;}return e.numPlanes=s,e.numIntersection=0,c}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e){const n=0!==t.length||e||0!==i||r;return r=e,i=t.length,n},this.beginShadows=function(){s=!0,c(null);},this.endShadows=function(){s=!1;},this.setGlobalState=function(t,e){n=c(t,e,0);},this.setState=function(a,o,h){const u=a.clippingPlanes,d=a.clipIntersection,p=a.clipShadows,m=t.get(a);if(!r||null===u||0===u.length||s&&!p)s?c(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0);e.numPlanes=i,e.numIntersection=0;}();else {const t=s?0:i,e=4*t;let r=m.clippingState||null;l.value=r,r=c(u,o,e,h);for(let t=0;t!==e;++t)r[t]=n[t];m.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=t;}};}function wa(t){let e=new WeakMap;function n(t,e){return e===ht?t.mapping=lt:e===ut&&(t.mapping=ct),t}function i(t){const n=t.target;n.removeEventListener("dispose",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose());}return {get:function(r){if(r&&r.isTexture){const s=r.mapping;if(s===ht||s===ut){if(e.has(r)){return n(e.get(r).texture,r.mapping)}{const s=r.image;if(s&&s.height>0){const a=new ra(s.height);return a.fromEquirectangularTexture(t,r),e.set(r,a),r.addEventListener("dispose",i),n(a.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap;}}}class Aa extends Js{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix();}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix();}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix();}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,s=r+t*this.view.width,a-=e*this.view.offsetY,o=a-e*this.view.height;}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}const Ra=[.125,.215,.35,.446,.526,.582],Ca=20,Pa=new Aa,La=new Zr;let Ia=null,Ua=0,Na=0;const Da=(1+Math.sqrt(5))/2,Oa=1/Da,Fa=[new Pi(1,1,1),new Pi(-1,1,1),new Pi(1,1,-1),new Pi(-1,1,-1),new Pi(0,Da,Oa),new Pi(0,Da,-Oa),new Pi(Oa,0,Da),new Pi(-Oa,0,Da),new Pi(Da,Oa,0),new Pi(-Da,Oa,0)];class Ba{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial);}fromScene(t,e=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=Va(),this._compileMaterial(this._cubemapMaterial));}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=ka(),this._compileMaterial(this._equirectMaterial));}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose();}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax);}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose();}_cleanup(t){this._renderer.setRenderTarget(Ia,Ua,Na),t.scissorTest=!1,Ha(t,0,0,t.width,t.height);}_fromTexture(t,e){t.mapping===lt||t.mapping===ct?this._setSize(0===t.image.length?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:Ut,format:Bt,colorSpace:je,depthBuffer:!1},i=za(t,e,n);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=za(t,e,n);const{_lodMax:i}=this;(({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(t){const e=[],n=[],i=[];let r=t;const s=t-4+1+Ra.length;for(let a=0;a<s;a++){const s=Math.pow(2,r);n.push(s);let o=1/s;a>t-4?o=Ra[a-t+4-1]:0===a&&(o=0),i.push(o);const l=1/(s-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,p=6,m=3,f=2,g=1,_=new Float32Array(m*p*d),v=new Float32Array(f*p*d),x=new Float32Array(g*p*d);for(let t=0;t<d;t++){const e=t%3*2/3-1,n=t>2?0:-1,i=[e,n,0,e+2/3,n,0,e+2/3,n+1,0,e,n,0,e+2/3,n+1,0,e,n+1,0];_.set(i,m*p*t),v.set(u,f*p*t);const r=[t,t,t,t,t,t];x.set(r,g*p*t);}const y=new Es;y.setAttribute("position",new os(_,m)),y.setAttribute("uv",new os(v,f)),y.setAttribute("faceIndex",new os(x,g)),e.push(y),r>4&&r--;}return {lodPlanes:e,sizeLods:n,sigmas:i}}(i))),this._blurMaterial=function(t,e,n){const i=new Float32Array(Ca),r=new Pi(0,1,0),s=new Zs({name:"SphericalGaussianBlur",defines:{n:Ca,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ga(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1});return s}(i,t,e);}return i}_compileMaterial(t){const e=new Vs(this._lodPlanes[0],t);this._renderer.compile(e,Pa);}_sceneToCubeUV(t,e,n,i){const r=new ta(90,1,e,n),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,c=o.toneMapping;o.getClearColor(La),o.toneMapping=K,o.autoClear=!1;const h=new Qr({name:"PMREM.Background",side:d,depthWrite:!1,depthTest:!1}),u=new Vs(new Ws,h);let p=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,p=!0):(h.color.copy(La),p=!0);for(let e=0;e<6;e++){const n=e%3;0===n?(r.up.set(0,s[e],0),r.lookAt(a[e],0,0)):1===n?(r.up.set(0,0,s[e]),r.lookAt(0,a[e],0)):(r.up.set(0,s[e],0),r.lookAt(0,0,a[e]));const l=this._cubeSize;Ha(i,n*l,e>2?l:0,l,l),o.setRenderTarget(i),p&&o.render(u,r),o.render(t,r);}u.geometry.dispose(),u.material.dispose(),o.toneMapping=c,o.autoClear=l,t.background=m;}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===lt||t.mapping===ct;i?(null===this._cubemapMaterial&&(this._cubemapMaterial=Va()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===t.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=ka());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Vs(this._lodPlanes[0],r);r.uniforms.envMap.value=t;const a=this._cubeSize;Ha(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(s,Pa);}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const n=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),i=Fa[(e-1)%Fa.length];this._blur(t,e-1,e,n,i);}e.autoClear=n;}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r);}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new Vs(this._lodPlanes[i],l),h=l.uniforms,u=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,p=r/d,m=isFinite(r)?1+Math.floor(3*p):Ca;m>Ca&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const f=[];let g=0;for(let t=0;t<Ca;++t){const e=t/p,n=Math.exp(-e*e/2);f.push(n),0===t?g+=n:t<m&&(g+=2*n);}for(let t=0;t<f.length;t++)f[t]=f[t]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value="latitudinal"===s,a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=d,h.mipInt.value=_-n;const v=this._sizeLods[i];Ha(e,3*v*(i>_-4?i-_+4:0),4*(this._cubeSize-v),3*v,2*v),o.setRenderTarget(e),o.render(c,Pa);}}function za(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=dt,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r);}function ka(){return new Zs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function Va(){return new Zs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function Ga(){return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"}function Wa(t){let e=new WeakMap,n=null;function i(t){const n=t.target;n.removeEventListener("dispose",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose());}return {get:function(r){if(r&&r.isTexture){const s=r.mapping,a=s===ht||s===ut,o=s===lt||s===ct;if(a||o){if(r.isRenderTargetTexture&&!0===r.needsPMREMUpdate){r.needsPMREMUpdate=!1;let i=e.get(r);return null===n&&(n=new Ba(t)),i=a?n.fromEquirectangular(r,i):n.fromCubemap(r,i),e.set(r,i),i.texture}if(e.has(r))return e.get(r).texture;{const s=r.image;if(a&&s&&s.height>0||o&&s&&function(t){let e=0;const n=6;for(let i=0;i<n;i++)void 0!==t[i]&&e++;return e===n}(s)){null===n&&(n=new Ba(t));const s=a?n.fromEquirectangular(r):n.fromCubemap(r);return e.set(r,s),r.addEventListener("dispose",i),s.texture}return null}}}return r},dispose:function(){e=new WeakMap,null!==n&&(n.dispose(),n=null);}}}function Xa(t){const e={};function n(n){if(void 0!==e[n])return e[n];let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n);}return e[n]=i,i}return {has:function(t){return null!==n(t)},init:function(t){t.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture");},get:function(t){const e=n(t);return null===e&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function ja(t,e,n,i){const r={},s=new WeakMap;function a(t){const o=t.target;null!==o.index&&e.remove(o.index);for(const t in o.attributes)e.remove(o.attributes[t]);for(const t in o.morphAttributes){const n=o.morphAttributes[t];for(let t=0,i=n.length;t<i;t++)e.remove(n[t]);}o.removeEventListener("dispose",a),delete r[o.id];const l=s.get(o);l&&(e.remove(l),s.delete(o)),i.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,n.memory.geometries--;}function o(t){const n=[],i=t.index,r=t.attributes.position;let a=0;if(null!==i){const t=i.array;a=i.version;for(let e=0,i=t.length;e<i;e+=3){const i=t[e+0],r=t[e+1],s=t[e+2];n.push(i,r,r,s,s,i);}}else {if(void 0===r)return;{const t=r.array;a=r.version;for(let e=0,i=t.length/3-1;e<i;e+=3){const t=e+0,i=e+1,r=e+2;n.push(t,i,i,r,r,t);}}}const o=new(ei(n)?ms:ds)(n,1);o.version=a;const l=s.get(t);l&&e.remove(l),s.set(t,o);}return {get:function(t,e){return !0===r[e.id]||(e.addEventListener("dispose",a),r[e.id]=!0,n.memory.geometries++),e},update:function(n){const i=n.attributes;for(const n in i)e.update(i[n],t.ARRAY_BUFFER);const r=n.morphAttributes;for(const n in r){const i=r[n];for(let n=0,r=i.length;n<r;n++)e.update(i[n],t.ARRAY_BUFFER);}},getWireframeAttribute:function(t){const e=s.get(t);if(e){const n=t.index;null!==n&&e.version<n.version&&o(t);}else o(t);return s.get(t)}}}function qa(t,e,n,i){const r=i.isWebGL2;let s,a,o;this.setMode=function(t){s=t;},this.setIndex=function(t){a=t.type,o=t.bytesPerElement;},this.render=function(e,i){t.drawElements(s,i,a,e*o),n.update(i,s,1);},this.renderInstances=function(i,l,c){if(0===c)return;let h,u;if(r)h=t,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===h)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](s,l,a,i*o,c),n.update(l,s,c);},this.renderMultiDraw=function(t,i,r){if(0===r)return;const l=e.get("WEBGL_multi_draw");if(null===l)for(let e=0;e<r;e++)this.render(t[e]/o,i[e]);else {l.multiDrawElementsWEBGL(s,i,0,a,t,0,r);let e=0;for(let t=0;t<r;t++)e+=i[t];n.update(e,s,1);}};}function Ya(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return {memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0;},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);}}}}function Za(t,e){return t[0]-e[0]}function Ja(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Ka(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Si,o=[];for(let t=0;t<8;t++)o[t]=[t,0];return {update:function(l,c,h){const u=l.morphTargetInfluences;if(!0===e.isWebGL2){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=void 0!==d?d.length:0;let m=s.get(c);if(void 0===m||m.count!==p){void 0!==m&&m.texture.dispose();const f=void 0!==c.morphAttributes.position,g=void 0!==c.morphAttributes.normal,_=void 0!==c.morphAttributes.color,v=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],y=c.morphAttributes.color||[];let M=0;!0===f&&(M=1),!0===g&&(M=2),!0===_&&(M=3);let S=c.attributes.position.count*M,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*b*4*p),T=new Ti(E,S,b,p);T.type=It,T.needsUpdate=!0;const w=4*M;for(let R=0;R<p;R++){const C=v[R],P=x[R],L=y[R],I=S*b*4*R;for(let U=0;U<C.count;U++){const N=U*w;!0===f&&(a.fromBufferAttribute(C,U),E[I+N+0]=a.x,E[I+N+1]=a.y,E[I+N+2]=a.z,E[I+N+3]=0),!0===g&&(a.fromBufferAttribute(P,U),E[I+N+4]=a.x,E[I+N+5]=a.y,E[I+N+6]=a.z,E[I+N+7]=0),!0===_&&(a.fromBufferAttribute(L,U),E[I+N+8]=a.x,E[I+N+9]=a.y,E[I+N+10]=a.z,E[I+N+11]=4===L.itemSize?a.w:1);}}function A(){T.dispose(),s.delete(c),c.removeEventListener("dispose",A);}m={count:p,texture:T,size:new $n(S,b)},s.set(c,m),c.addEventListener("dispose",A);}if(!0===l.isInstancedMesh&&null!==l.morphTexture)h.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else {let D=0;for(let F=0;F<u.length;F++)D+=u[F];const O=c.morphTargetsRelative?1:1-D;h.getUniforms().setValue(t,"morphTargetBaseInfluence",O),h.getUniforms().setValue(t,"morphTargetInfluences",u);}h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size);}else {const B=void 0===u?0:u.length;let z=i[c.id];if(void 0===z||z.length!==B){z=[];for(let W=0;W<B;W++)z[W]=[W,0];i[c.id]=z;}for(let X=0;X<B;X++){const j=z[X];j[0]=X,j[1]=u[X];}z.sort(Ja);for(let q=0;q<8;q++)q<B&&z[q][1]?(o[q][0]=z[q][0],o[q][1]=z[q][1]):(o[q][0]=Number.MAX_SAFE_INTEGER,o[q][1]=0);o.sort(Za);const H=c.morphAttributes.position,k=c.morphAttributes.normal;let V=0;for(let Y=0;Y<8;Y++){const Z=o[Y],J=Z[0],K=Z[1];J!==Number.MAX_SAFE_INTEGER&&K?(H&&c.getAttribute("morphTarget"+Y)!==H[J]&&c.setAttribute("morphTarget"+Y,H[J]),k&&c.getAttribute("morphNormal"+Y)!==k[J]&&c.setAttribute("morphNormal"+Y,k[J]),r[Y]=K,V+=K):(H&&!0===c.hasAttribute("morphTarget"+Y)&&c.deleteAttribute("morphTarget"+Y),k&&!0===c.hasAttribute("morphNormal"+Y)&&c.deleteAttribute("morphNormal"+Y),r[Y]=0);}const G=c.morphTargetsRelative?1:1-V;h.getUniforms().setValue(t,"morphTargetBaseInfluence",G),h.getUniforms().setValue(t,"morphTargetInfluences",r);}}}}function $a(t,e,n,i){let r=new WeakMap;function s(t){const e=t.target;e.removeEventListener("dispose",s),n.remove(e.instanceMatrix),null!==e.instanceColor&&n.remove(e.instanceColor);}return {update:function(a){const o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(!1===a.hasEventListener("dispose",s)&&a.addEventListener("dispose",s),r.get(a)!==o&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),null!==a.instanceColor&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){const t=a.skeleton;r.get(t)!==o&&(t.update(),r.set(t,o));}return c},dispose:function(){r=new WeakMap;}}}class Qa extends Mi{constructor(t,e,n,i,r,s,a,o,l,c){if((c=void 0!==c?c:kt)!==kt&&c!==Vt)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&c===kt&&(n=Lt),void 0===n&&c===Vt&&(n=Ot),super(null,i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=void 0!==a?a:gt,this.minFilter=void 0!==o?o:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null;}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return null!==this.compareFunction&&(e.compareFunction=this.compareFunction),e}}const to=new Mi,eo=new Qa(1,1);eo.compareFunction=515;const no=new Ti,io=new Ai,ro=new ia,so=[],ao=[],oo=new Float32Array(16),lo=new Float32Array(9),co=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=so[r];if(void 0===s&&(s=new Float32Array(r),so[r]=s),0!==e){i.toArray(s,0);for(let i=1,r=0;i!==e;++i)r+=n,t[i].toArray(s,r);}return s}function uo(t,e){if(t.length!==e.length)return !1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return !1;return !0}function po(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n];}function mo(t,e){let n=ao[e];void 0===n&&(n=new Int32Array(e),ao[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fo(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e);}function go(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else {if(uo(n,e))return;t.uniform2fv(this.addr,e),po(n,e);}}function _o(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else {if(uo(n,e))return;t.uniform3fv(this.addr,e),po(n,e);}}function vo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else {if(uo(n,e))return;t.uniform4fv(this.addr,e),po(n,e);}}function xo(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(uo(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),po(n,e);}else {if(uo(n,i))return;co.set(i),t.uniformMatrix2fv(this.addr,!1,co),po(n,i);}}function yo(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(uo(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),po(n,e);}else {if(uo(n,i))return;lo.set(i),t.uniformMatrix3fv(this.addr,!1,lo),po(n,i);}}function Mo(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(uo(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),po(n,e);}else {if(uo(n,i))return;oo.set(i),t.uniformMatrix4fv(this.addr,!1,oo),po(n,i);}}function So(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e);}function bo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else {if(uo(n,e))return;t.uniform2iv(this.addr,e),po(n,e);}}function Eo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else {if(uo(n,e))return;t.uniform3iv(this.addr,e),po(n,e);}}function To(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else {if(uo(n,e))return;t.uniform4iv(this.addr,e),po(n,e);}}function wo(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e);}function Ao(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else {if(uo(n,e))return;t.uniform2uiv(this.addr,e),po(n,e);}}function Ro(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else {if(uo(n,e))return;t.uniform3uiv(this.addr,e),po(n,e);}}function Co(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else {if(uo(n,e))return;t.uniform4uiv(this.addr,e),po(n,e);}}function Po(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?eo:to;n.setTexture2D(e||s,r);}function Lo(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||io,r);}function Io(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ro,r);}function Uo(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||no,r);}function No(t,e){t.uniform1fv(this.addr,e);}function Do(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n);}function Oo(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n);}function Fo(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n);}function Bo(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n);}function zo(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n);}function Ho(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n);}function ko(t,e){t.uniform1iv(this.addr,e);}function Vo(t,e){t.uniform2iv(this.addr,e);}function Go(t,e){t.uniform3iv(this.addr,e);}function Wo(t,e){t.uniform4iv(this.addr,e);}function Xo(t,e){t.uniform1uiv(this.addr,e);}function jo(t,e){t.uniform2uiv(this.addr,e);}function qo(t,e){t.uniform3uiv(this.addr,e);}function Yo(t,e){t.uniform4uiv(this.addr,e);}function Zo(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);uo(i,s)||(t.uniform1iv(this.addr,s),po(i,s));for(let t=0;t!==r;++t)n.setTexture2D(e[t]||to,s[t]);}function Jo(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);uo(i,s)||(t.uniform1iv(this.addr,s),po(i,s));for(let t=0;t!==r;++t)n.setTexture3D(e[t]||io,s[t]);}function Ko(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);uo(i,s)||(t.uniform1iv(this.addr,s),po(i,s));for(let t=0;t!==r;++t)n.setTextureCube(e[t]||ro,s[t]);}function $o(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);uo(i,s)||(t.uniform1iv(this.addr,s),po(i,s));for(let t=0;t!==r;++t)n.setTexture2DArray(e[t]||no,s[t]);}class Qo{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(t){switch(t){case 5126:return fo;case 35664:return go;case 35665:return _o;case 35666:return vo;case 35674:return xo;case 35675:return yo;case 35676:return Mo;case 5124:case 35670:return So;case 35667:case 35671:return bo;case 35668:case 35672:return Eo;case 35669:case 35673:return To;case 5125:return wo;case 36294:return Ao;case 36295:return Ro;case 36296:return Co;case 35678:case 36198:case 36298:case 36306:case 35682:return Po;case 35679:case 36299:case 36307:return Lo;case 35680:case 36300:case 36308:case 36293:return Io;case 36289:case 36303:case 36311:case 36292:return Uo}}(e.type);}}class tl{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(t){switch(t){case 5126:return No;case 35664:return Do;case 35665:return Oo;case 35666:return Fo;case 35674:return Bo;case 35675:return zo;case 35676:return Ho;case 5124:case 35670:return ko;case 35667:case 35671:return Vo;case 35668:case 35672:return Go;case 35669:case 35673:return Wo;case 5125:return Xo;case 36294:return jo;case 36295:return qo;case 36296:return Yo;case 35678:case 36198:case 36298:case 36306:case 35682:return Zo;case 35679:case 36299:case 36307:return Jo;case 35680:case 36300:case 36308:case 36293:return Ko;case 36289:case 36303:case 36311:case 36292:return $o}}(e.type);}}class el{constructor(t){this.id=t,this.seq=[],this.map={};}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const s=i[r];s.setValue(t,e[s.id],n);}}}const nl=/(\w+)(\])?(\[|\.)?/g;function il(t,e){t.seq.push(e),t.map[e.id]=e;}function rl(t,e,n){const i=t.name,r=i.length;for(nl.lastIndex=0;;){const s=nl.exec(i),a=nl.lastIndex;let o=s[1];const l="]"===s[2],c=s[3];if(l&&(o|=0),void 0===c||"["===c&&a+2===r){il(n,void 0===c?new Qo(o,t,e):new tl(o,t,e));break}{let t=n.map[o];void 0===t&&(t=new el(o),il(n,t)),n=t;}}}class sl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const n=t.getActiveUniform(e,i);rl(n,t.getUniformLocation(e,n.name),this);}}setValue(t,e,n,i){const r=this.map[e];void 0!==r&&r.setValue(t,n,i);}setOptional(t,e,n){const i=e[n];void 0!==i&&this.setValue(t,n,i);}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const s=e[r],a=n[s.id];!1!==a.needsUpdate&&s.setValue(t,a.value,i);}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const r=t[i];r.id in e&&n.push(r);}return n}}function al(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ol=37297;let ll=0;function cl(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&""===r)return "";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const i=parseInt(s[1]);return n.toUpperCase()+"\n\n"+r+"\n\n"+function(t,e){const n=t.split("\n"),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let t=r;t<s;t++){const r=t+1;i.push(`${r===e?">":" "} ${r}: ${n[t]}`);}return i.join("\n")}(t.getShaderSource(e),i)}return r}function hl(t,e){const n=function(t){const e=di.getPrimaries(di.workingColorSpace),n=di.getPrimaries(t);let i;switch(e===n?i="":e===$e&&n===Ke?i="LinearDisplayP3ToLinearSRGB":e===Ke&&n===$e&&(i="LinearSRGBToLinearDisplayP3"),t){case je:case Ye:return [i,"LinearTransferOETF"];case Xe:case qe:return [i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}(e);return `vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ul(t,e){let n;switch(e){case $:n="Linear";break;case Q:n="Reinhard";break;case tt:n="OptimizedCineon";break;case et:n="ACESFilmic";break;case it:n="AgX";break;case rt:n="Neutral";break;case nt:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear";}return "vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function dl(t){return ""!==t}function pl(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fl=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(t){return t.replace(fl,vl)}const _l=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vl(t,e){let n=fa[e];if(void 0===n){const t=_l.get(e);if(void 0===t)throw new Error("Can not resolve #include <"+e+">");n=fa[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,t);}return gl(n)}const xl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(t){return t.replace(xl,Ml)}function Ml(t,e,n,i){let r="";for(let t=parseInt(e);t<parseInt(n);t++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+t+" ]").replace(/UNROLLED_LOOP_INDEX/g,t);return r}function Sl(t){let e=`precision ${t.precision} float;\n\tprecision ${t.precision} int;\n\tprecision ${t.precision} sampler2D;\n\tprecision ${t.precision} samplerCube;\n\t`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;\n\t\tprecision ${t.precision} sampler2DArray;\n\t\tprecision ${t.precision} sampler2DShadow;\n\t\tprecision ${t.precision} samplerCubeShadow;\n\t\tprecision ${t.precision} sampler2DArrayShadow;\n\t\tprecision ${t.precision} isampler2D;\n\t\tprecision ${t.precision} isampler3D;\n\t\tprecision ${t.precision} isamplerCube;\n\t\tprecision ${t.precision} isampler2DArray;\n\t\tprecision ${t.precision} usampler2D;\n\t\tprecision ${t.precision} usampler3D;\n\t\tprecision ${t.precision} usamplerCube;\n\t\tprecision ${t.precision} usampler2DArray;\n\t\t`),"highp"===t.precision?e+="\n#define HIGH_PRECISION":"mediump"===t.precision?e+="\n#define MEDIUM_PRECISION":"lowp"===t.precision&&(e+="\n#define LOW_PRECISION"),e}function bl(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const u=function(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===l?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===c?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===h&&(e="SHADOWMAP_TYPE_VSM"),e}(n),d=function(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lt:case ct:e="ENVMAP_TYPE_CUBE";break;case dt:e="ENVMAP_TYPE_CUBE_UV";}return e}(n),p=function(t){let e="ENVMAP_MODE_REFLECTION";t.envMap&&t.envMapMode===ct&&(e="ENVMAP_MODE_REFRACTION");return e}(n),m=function(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Y:e="ENVMAP_BLENDING_MULTIPLY";break;case Z:e="ENVMAP_BLENDING_MIX";break;case J:e="ENVMAP_BLENDING_ADD";}return e}(n),f=function(t){const e=t.envMapCubeUVHeight;if(null===e)return null;const n=Math.log2(e)-2,i=1/e;return {texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}(n),g=n.isWebGL2?"":function(t){return [t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dl).join("\n")}(n),_=function(t){return [t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join("\n")}(n),v=function(t){const e=[];for(const n in t){const i=t[n];!1!==i&&e.push("#define "+n+" "+i);}return e.join("\n")}(s),x=r.createProgram();let y,M,S=n.glslVersion?"#version "+n.glslVersion+"\n":"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(dl).join("\n"),y.length>0&&(y+="\n"),M=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(dl).join("\n"),M.length>0&&(M+="\n")):(y=[Sl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(dl).join("\n"),M=[g,Sl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==K?"#define TONE_MAPPING":"",n.toneMapping!==K?fa.tonemapping_pars_fragment:"",n.toneMapping!==K?ul("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fa.colorspace_pars_fragment,hl("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(dl).join("\n")),a=gl(a),a=pl(a,n),a=ml(a,n),o=gl(o),o=pl(o,n),o=ml(o,n),a=yl(a),o=yl(o),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(S="#version 300 es\n",y=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+y,M=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Nn?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Nn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+M);const b=S+y+a,E=S+M+o,T=al(r,r.VERTEX_SHADER,b),w=al(r,r.FRAGMENT_SHADER,E);function A(e){if(t.debug.checkShaderErrors){const n=r.getProgramInfoLog(x).trim(),i=r.getShaderInfoLog(T).trim(),s=r.getShaderInfoLog(w).trim();let a=!0,o=!0;if(!1===r.getProgramParameter(x,r.LINK_STATUS))if(a=!1,"function"==typeof t.debug.onShaderError)t.debug.onShaderError(r,x,T,w);else {const t=cl(r,T,"vertex"),i=cl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+"\n\nMaterial Name: "+e.name+"\nMaterial Type: "+e.type+"\n\nProgram Info Log: "+n+"\n"+t+"\n"+i);}else ""!==n?console.warn("THREE.WebGLProgram: Program Info Log:",n):""!==i&&""!==s||(o=!1);o&&(e.diagnostics={runnable:a,programLog:n,vertexShader:{log:i,prefix:y},fragmentShader:{log:s,prefix:M}});}r.deleteShader(T),r.deleteShader(w),R=new sl(r,x),C=function(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const i=t.getActiveAttrib(e,r),s=i.name;let a=1;i.type===t.FLOAT_MAT2&&(a=2),i.type===t.FLOAT_MAT3&&(a=3),i.type===t.FLOAT_MAT4&&(a=4),n[s]={type:i.type,location:t.getAttribLocation(e,s),locationSize:a};}return n}(r,x);}let R,C;r.attachShader(x,T),r.attachShader(x,w),void 0!==n.index0AttributeName?r.bindAttribLocation(x,0,n.index0AttributeName):!0===n.morphTargets&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),this.getUniforms=function(){return void 0===R&&A(this),R},this.getAttributes=function(){return void 0===C&&A(this),C};let P=!1===n.rendererExtensionParallelShaderCompile;return this.isReady=function(){return !1===P&&(P=r.getProgramParameter(x,ol)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0;},this.type=n.shaderType,this.name=n.shaderName,this.id=ll++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let El=0;class Tl{constructor(){this.shaderCache=new Map,this.materialCache=new Map;}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return !1===s.has(i)&&(s.add(i),i.usedTimes++),!1===s.has(r)&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const t of e)t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear();}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return void 0===n&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return void 0===n&&(n=new wl(t),e.set(t,n)),n}}class wl{constructor(t){this.id=El++,this.code=t,this.usedTimes=0;}}function Al(t,e,n,i,r,s,a){const o=new _r,l=new Tl,c=new Set,h=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(t){return c.add(t),0===t?"uv":`uv${t}`}return {getParameters:function(s,o,h,v,x){const y=v.fog,M=x.geometry,S=s.isMeshStandardMaterial?v.environment:null,b=(s.isMeshStandardMaterial?n:e).get(s.envMap||S),E=b&&b.mapping===dt?b.image.height:null,T=g[s.type];null!==s.precision&&(f=r.getMaxPrecision(s.precision),f!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",f,"instead."));const w=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,A=void 0!==w?w.length:0;let R,C,P,L,I=0;if(void 0!==M.morphAttributes.position&&(I=1),void 0!==M.morphAttributes.normal&&(I=2),void 0!==M.morphAttributes.color&&(I=3),T){const t=_a[T];R=t.vertexShader,C=t.fragmentShader;}else R=s.vertexShader,C=s.fragmentShader,l.update(s),P=l.getVertexShaderID(s),L=l.getFragmentShaderID(s);const U=t.getRenderTarget(),N=!0===x.isInstancedMesh,D=!0===x.isBatchedMesh,O=!!s.map,F=!!s.matcap,B=!!b,z=!!s.aoMap,H=!!s.lightMap,k=!!s.bumpMap,V=!!s.normalMap,G=!!s.displacementMap,W=!!s.emissiveMap,X=!!s.metalnessMap,j=!!s.roughnessMap,q=s.anisotropy>0,Y=s.clearcoat>0,Z=s.iridescence>0,J=s.sheen>0,$=s.transmission>0,Q=q&&!!s.anisotropyMap,tt=Y&&!!s.clearcoatMap,et=Y&&!!s.clearcoatNormalMap,nt=Y&&!!s.clearcoatRoughnessMap,it=Z&&!!s.iridescenceMap,rt=Z&&!!s.iridescenceThicknessMap,st=J&&!!s.sheenColorMap,at=J&&!!s.sheenRoughnessMap,ot=!!s.specularMap,lt=!!s.specularColorMap,ct=!!s.specularIntensityMap,ht=$&&!!s.transmissionMap,ut=$&&!!s.thicknessMap,pt=!!s.gradientMap,mt=!!s.alphaMap,ft=s.alphaTest>0,gt=!!s.alphaHash,_t=!!s.extensions;let vt=K;s.toneMapped&&(null!==U&&!0!==U.isXRRenderTarget||(vt=t.toneMapping));const xt={isWebGL2:u,shaderID:T,shaderType:s.type,shaderName:s.name,vertexShader:R,fragmentShader:C,defines:s.defines,customVertexShaderID:P,customFragmentShaderID:L,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:f,batching:D,instancing:N,instancingColor:N&&null!==x.instanceColor,instancingMorph:N&&null!==x.morphTexture,supportsVertexTextures:m,outputColorSpace:null===U?t.outputColorSpace:!0===U.isXRRenderTarget?U.texture.colorSpace:je,alphaToCoverage:!!s.alphaToCoverage,map:O,matcap:F,envMap:B,envMapMode:B&&b.mapping,envMapCubeUVHeight:E,aoMap:z,lightMap:H,bumpMap:k,normalMap:V,displacementMap:m&&G,emissiveMap:W,normalMapObjectSpace:V&&1===s.normalMapType,normalMapTangentSpace:V&&0===s.normalMapType,metalnessMap:X,roughnessMap:j,anisotropy:q,anisotropyMap:Q,clearcoat:Y,clearcoatMap:tt,clearcoatNormalMap:et,clearcoatRoughnessMap:nt,iridescence:Z,iridescenceMap:it,iridescenceThicknessMap:rt,sheen:J,sheenColorMap:st,sheenRoughnessMap:at,specularMap:ot,specularColorMap:lt,specularIntensityMap:ct,transmission:$,transmissionMap:ht,thicknessMap:ut,gradientMap:pt,opaque:!1===s.transparent&&1===s.blending&&!1===s.alphaToCoverage,alphaMap:mt,alphaTest:ft,alphaHash:gt,combine:s.combine,mapUv:O&&_(s.map.channel),aoMapUv:z&&_(s.aoMap.channel),lightMapUv:H&&_(s.lightMap.channel),bumpMapUv:k&&_(s.bumpMap.channel),normalMapUv:V&&_(s.normalMap.channel),displacementMapUv:G&&_(s.displacementMap.channel),emissiveMapUv:W&&_(s.emissiveMap.channel),metalnessMapUv:X&&_(s.metalnessMap.channel),roughnessMapUv:j&&_(s.roughnessMap.channel),anisotropyMapUv:Q&&_(s.anisotropyMap.channel),clearcoatMapUv:tt&&_(s.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(s.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(s.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&_(s.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(s.iridescenceThicknessMap.channel),sheenColorMapUv:st&&_(s.sheenColorMap.channel),sheenRoughnessMapUv:at&&_(s.sheenRoughnessMap.channel),specularMapUv:ot&&_(s.specularMap.channel),specularColorMapUv:lt&&_(s.specularColorMap.channel),specularIntensityMapUv:ct&&_(s.specularIntensityMap.channel),transmissionMapUv:ht&&_(s.transmissionMap.channel),thicknessMapUv:ut&&_(s.thicknessMap.channel),alphaMapUv:mt&&_(s.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(V||q),vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!M.attributes.color&&4===M.attributes.color.itemSize,pointsUvs:!0===x.isPoints&&!!M.attributes.uv&&(O||mt),fog:!!y,useFog:!0===s.fog,fogExp2:!!y&&y.isFogExp2,flatShading:!0===s.flatShading,sizeAttenuation:!0===s.sizeAttenuation,logarithmicDepthBuffer:p,skinning:!0===x.isSkinnedMesh,morphTargets:void 0!==M.morphAttributes.position,morphNormals:void 0!==M.morphAttributes.normal,morphColors:void 0!==M.morphAttributes.color,morphTargetsCount:A,morphTextureStride:I,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:s.dithering,shadowMapEnabled:t.shadowMap.enabled&&h.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:O&&!0===s.map.isVideoTexture&&di.getTransfer(s.map.colorSpace)===Je,premultipliedAlpha:s.premultipliedAlpha,doubleSided:2===s.side,flipSided:s.side===d,useDepthPacking:s.depthPacking>=0,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionDerivatives:_t&&!0===s.extensions.derivatives,extensionFragDepth:_t&&!0===s.extensions.fragDepth,extensionDrawBuffers:_t&&!0===s.extensions.drawBuffers,extensionShaderTextureLOD:_t&&!0===s.extensions.shaderTextureLOD,extensionClipCullDistance:_t&&!0===s.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_t&&!0===s.extensions.multiDraw&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:s.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt},getProgramCacheKey:function(e){const n=[];if(e.shaderID?n.push(e.shaderID):(n.push(e.customVertexShaderID),n.push(e.customFragmentShaderID)),void 0!==e.defines)for(const t in e.defines)n.push(t),n.push(e.defines[t]);return !1===e.isRawShaderMaterial&&(!function(t,e){t.push(e.precision),t.push(e.outputColorSpace),t.push(e.envMapMode),t.push(e.envMapCubeUVHeight),t.push(e.mapUv),t.push(e.alphaMapUv),t.push(e.lightMapUv),t.push(e.aoMapUv),t.push(e.bumpMapUv),t.push(e.normalMapUv),t.push(e.displacementMapUv),t.push(e.emissiveMapUv),t.push(e.metalnessMapUv),t.push(e.roughnessMapUv),t.push(e.anisotropyMapUv),t.push(e.clearcoatMapUv),t.push(e.clearcoatNormalMapUv),t.push(e.clearcoatRoughnessMapUv),t.push(e.iridescenceMapUv),t.push(e.iridescenceThicknessMapUv),t.push(e.sheenColorMapUv),t.push(e.sheenRoughnessMapUv),t.push(e.specularMapUv),t.push(e.specularColorMapUv),t.push(e.specularIntensityMapUv),t.push(e.transmissionMapUv),t.push(e.thicknessMapUv),t.push(e.combine),t.push(e.fogExp2),t.push(e.sizeAttenuation),t.push(e.morphTargetsCount),t.push(e.morphAttributeCount),t.push(e.numDirLights),t.push(e.numPointLights),t.push(e.numSpotLights),t.push(e.numSpotLightMaps),t.push(e.numHemiLights),t.push(e.numRectAreaLights),t.push(e.numDirLightShadows),t.push(e.numPointLightShadows),t.push(e.numSpotLightShadows),t.push(e.numSpotLightShadowsWithMaps),t.push(e.numLightProbes),t.push(e.shadowMapType),t.push(e.toneMapping),t.push(e.numClippingPlanes),t.push(e.numClipIntersection),t.push(e.depthPacking);}(n,e),function(t,e){o.disableAll(),e.isWebGL2&&o.enable(0);e.supportsVertexTextures&&o.enable(1);e.instancing&&o.enable(2);e.instancingColor&&o.enable(3);e.instancingMorph&&o.enable(4);e.matcap&&o.enable(5);e.envMap&&o.enable(6);e.normalMapObjectSpace&&o.enable(7);e.normalMapTangentSpace&&o.enable(8);e.clearcoat&&o.enable(9);e.iridescence&&o.enable(10);e.alphaTest&&o.enable(11);e.vertexColors&&o.enable(12);e.vertexAlphas&&o.enable(13);e.vertexUv1s&&o.enable(14);e.vertexUv2s&&o.enable(15);e.vertexUv3s&&o.enable(16);e.vertexTangents&&o.enable(17);e.anisotropy&&o.enable(18);e.alphaHash&&o.enable(19);e.batching&&o.enable(20);t.push(o.mask),o.disableAll(),e.fog&&o.enable(0);e.useFog&&o.enable(1);e.flatShading&&o.enable(2);e.logarithmicDepthBuffer&&o.enable(3);e.skinning&&o.enable(4);e.morphTargets&&o.enable(5);e.morphNormals&&o.enable(6);e.morphColors&&o.enable(7);e.premultipliedAlpha&&o.enable(8);e.shadowMapEnabled&&o.enable(9);e.useLegacyLights&&o.enable(10);e.doubleSided&&o.enable(11);e.flipSided&&o.enable(12);e.useDepthPacking&&o.enable(13);e.dithering&&o.enable(14);e.transmission&&o.enable(15);e.sheen&&o.enable(16);e.opaque&&o.enable(17);e.pointsUvs&&o.enable(18);e.decodeVideoTexture&&o.enable(19);e.alphaToCoverage&&o.enable(20);t.push(o.mask);}(n,e),n.push(t.outputColorSpace)),n.push(e.customProgramCacheKey),n.join()},getUniforms:function(t){const e=g[t.type];let n;if(e){const t=_a[e];n=Ys.clone(t.uniforms);}else n=t.uniforms;return n},acquireProgram:function(e,n){let i;for(let t=0,e=h.length;t<e;t++){const e=h[t];if(e.cacheKey===n){i=e,++i.usedTimes;break}}return void 0===i&&(i=new bl(t,n,e,s),h.push(i)),i},releaseProgram:function(t){if(0==--t.usedTimes){const e=h.indexOf(t);h[e]=h[h.length-1],h.pop(),t.destroy();}},releaseShaderCache:function(t){l.remove(t);},programs:h,dispose:function(){l.dispose();}}}function Rl(){let t=new WeakMap;return {get:function(e){let n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e);},update:function(e,n,i){t.get(e)[n]=i;},dispose:function(){t=new WeakMap;}}}function Cl(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pl(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ll(){const t=[];let e=0;const n=[],i=[],r=[];function s(n,i,r,s,a,o){let l=t[e];return void 0===l?(l={id:n.id,object:n,geometry:i,material:r,groupOrder:s,renderOrder:n.renderOrder,z:a,group:o},t[e]=l):(l.id=n.id,l.object=n,l.geometry=i,l.material=r,l.groupOrder=s,l.renderOrder=n.renderOrder,l.z=a,l.group=o),e++,l}return {opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0;},push:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?i.push(h):!0===a.transparent?r.push(h):n.push(h);},unshift:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?i.unshift(h):!0===a.transparent?r.unshift(h):n.unshift(h);},finish:function(){for(let n=e,i=t.length;n<i;n++){const e=t[n];if(null===e.id)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null;}},sort:function(t,e){n.length>1&&n.sort(t||Cl),i.length>1&&i.sort(e||Pl),r.length>1&&r.sort(e||Pl);}}}function Il(){let t=new WeakMap;return {get:function(e,n){const i=t.get(e);let r;return void 0===i?(r=new Ll,t.set(e,[r])):n>=i.length?(r=new Ll,i.push(r)):r=i[n],r},dispose:function(){t=new WeakMap;}}}function Ul(){const t={};return {get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Pi,color:new Zr};break;case"SpotLight":n={position:new Pi,direction:new Pi,color:new Zr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Pi,color:new Zr,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Pi,skyColor:new Zr,groundColor:new Zr};break;case"RectAreaLight":n={color:new Zr,position:new Pi,halfWidth:new Pi,halfHeight:new Pi};}return t[e.id]=n,n}}}let Nl=0;function Dl(t,e){return (e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ol(t,e){const n=new Ul,i=function(){const t={};return {get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $n};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $n,shadowCameraNear:1,shadowCameraFar:1e3};}return t[e.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let t=0;t<9;t++)r.probe.push(new Pi);const s=new Pi,a=new ar,o=new ar;return {setup:function(s,a){let o=0,l=0,c=0;for(let t=0;t<9;t++)r.probe[t].set(0,0,0);let h=0,u=0,d=0,p=0,m=0,f=0,g=0,_=0,v=0,x=0,y=0;s.sort(Dl);const M=!0===a?Math.PI:1;for(let t=0,e=s.length;t<e;t++){const e=s[t],a=e.color,S=e.intensity,b=e.distance,E=e.shadow&&e.shadow.map?e.shadow.map.texture:null;if(e.isAmbientLight)o+=a.r*S*M,l+=a.g*S*M,c+=a.b*S*M;else if(e.isLightProbe){for(let t=0;t<9;t++)r.probe[t].addScaledVector(e.sh.coefficients[t],S);y++;}else if(e.isDirectionalLight){const t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*M),e.castShadow){const t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,r.directionalShadow[h]=n,r.directionalShadowMap[h]=E,r.directionalShadowMatrix[h]=e.shadow.matrix,f++;}r.directional[h]=t,h++;}else if(e.isSpotLight){const t=n.get(e);t.position.setFromMatrixPosition(e.matrixWorld),t.color.copy(a).multiplyScalar(S*M),t.distance=b,t.coneCos=Math.cos(e.angle),t.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),t.decay=e.decay,r.spot[d]=t;const s=e.shadow;if(e.map&&(r.spotLightMap[v]=e.map,v++,s.updateMatrices(e),e.castShadow&&x++),r.spotLightMatrix[d]=s.matrix,e.castShadow){const t=i.get(e);t.shadowBias=s.bias,t.shadowNormalBias=s.normalBias,t.shadowRadius=s.radius,t.shadowMapSize=s.mapSize,r.spotShadow[d]=t,r.spotShadowMap[d]=E,_++;}d++;}else if(e.isRectAreaLight){const t=n.get(e);t.color.copy(a).multiplyScalar(S),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),r.rectArea[p]=t,p++;}else if(e.isPointLight){const t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*M),t.distance=e.distance,t.decay=e.decay,e.castShadow){const t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,n.shadowCameraNear=t.camera.near,n.shadowCameraFar=t.camera.far,r.pointShadow[u]=n,r.pointShadowMap[u]=E,r.pointShadowMatrix[u]=e.shadow.matrix,g++;}r.point[u]=t,u++;}else if(e.isHemisphereLight){const t=n.get(e);t.skyColor.copy(e.color).multiplyScalar(S*M),t.groundColor.copy(e.groundColor).multiplyScalar(S*M),r.hemi[m]=t,m++;}}p>0&&(e.isWebGL2?!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=ga.LTC_FLOAT_1,r.rectAreaLTC2=ga.LTC_FLOAT_2):(r.rectAreaLTC1=ga.LTC_HALF_1,r.rectAreaLTC2=ga.LTC_HALF_2):!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=ga.LTC_FLOAT_1,r.rectAreaLTC2=ga.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=ga.LTC_HALF_1,r.rectAreaLTC2=ga.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=o,r.ambient[1]=l,r.ambient[2]=c;const S=r.hash;S.directionalLength===h&&S.pointLength===u&&S.spotLength===d&&S.rectAreaLength===p&&S.hemiLength===m&&S.numDirectionalShadows===f&&S.numPointShadows===g&&S.numSpotShadows===_&&S.numSpotMaps===v&&S.numLightProbes===y||(r.directional.length=h,r.spot.length=d,r.rectArea.length=p,r.point.length=u,r.hemi.length=m,r.directionalShadow.length=f,r.directionalShadowMap.length=f,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=f,r.pointShadowMatrix.length=g,r.spotLightMatrix.length=_+v-x,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=x,r.numLightProbes=y,S.directionalLength=h,S.pointLength=u,S.spotLength=d,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=f,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=y,r.version=Nl++);},setupView:function(t,e){let n=0,i=0,l=0,c=0,h=0;const u=e.matrixWorldInverse;for(let e=0,d=t.length;e<d;e++){const d=t[e];if(d.isDirectionalLight){const t=r.directional[n];t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),n++;}else if(d.isSpotLight){const t=r.spot[l];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),l++;}else if(d.isRectAreaLight){const t=r.rectArea[c];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),o.identity(),a.copy(d.matrixWorld),a.premultiply(u),o.extractRotation(a),t.halfWidth.set(.5*d.width,0,0),t.halfHeight.set(0,.5*d.height,0),t.halfWidth.applyMatrix4(o),t.halfHeight.applyMatrix4(o),c++;}else if(d.isPointLight){const t=r.point[i];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),i++;}else if(d.isHemisphereLight){const t=r.hemi[h];t.direction.setFromMatrixPosition(d.matrixWorld),t.direction.transformDirection(u),h++;}}},state:r}}function Fl(t,e){const n=new Ol(t,e),i=[],r=[];return {init:function(){i.length=0,r.length=0;},state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:function(t){n.setup(i,t);},setupLightsView:function(t){n.setupView(i,t);},pushLight:function(t){i.push(t);},pushShadow:function(t){r.push(t);}}}function Bl(t,e){let n=new WeakMap;return {get:function(i,r=0){const s=n.get(i);let a;return void 0===s?(a=new Fl(t,e),n.set(i,[a])):r>=s.length?(a=new Fl(t,e),s.push(a)):a=s[r],a},dispose:function(){n=new WeakMap;}}}class zl extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t);}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hl extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t);}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function kl(t,e,n){let i=new ua;const r=new $n,s=new $n,a=new Si,o=new zl({depthPacking:3201}),c=new Hl,p={},m=n.maxTextureSize,f={[u]:d,[d]:u,2:2},g=new Zs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $n},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const v=new Es;v.setAttribute("position",new os(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vs(v,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l;let M=this.type;function S(n,i){const s=e.update(x);g.defines.VSM_SAMPLES!==n.blurSamples&&(g.defines.VSM_SAMPLES=n.blurSamples,_.defines.VSM_SAMPLES=n.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),null===n.mapPass&&(n.mapPass=new Ei(r.x,r.y)),g.uniforms.shadow_pass.value=n.map.texture,g.uniforms.resolution.value=n.mapSize,g.uniforms.radius.value=n.radius,t.setRenderTarget(n.mapPass),t.clear(),t.renderBufferDirect(i,null,s,g,x,null),_.uniforms.shadow_pass.value=n.mapPass.texture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,null,s,_,x,null);}function b(e,n,i,r){let s=null;const a=!0===i.isPointLight?e.customDistanceMaterial:e.customDepthMaterial;if(void 0!==a)s=a;else if(s=!0===i.isPointLight?c:o,t.localClippingEnabled&&!0===n.clipShadows&&Array.isArray(n.clippingPlanes)&&0!==n.clippingPlanes.length||n.displacementMap&&0!==n.displacementScale||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){const t=s.uuid,e=n.uuid;let i=p[t];void 0===i&&(i={},p[t]=i);let r=i[e];void 0===r&&(r=s.clone(),i[e]=r,n.addEventListener("dispose",T)),s=r;}if(s.visible=n.visible,s.wireframe=n.wireframe,s.side=r===h?null!==n.shadowSide?n.shadowSide:n.side:null!==n.shadowSide?n.shadowSide:f[n.side],s.alphaMap=n.alphaMap,s.alphaTest=n.alphaTest,s.map=n.map,s.clipShadows=n.clipShadows,s.clippingPlanes=n.clippingPlanes,s.clipIntersection=n.clipIntersection,s.displacementMap=n.displacementMap,s.displacementScale=n.displacementScale,s.displacementBias=n.displacementBias,s.wireframeLinewidth=n.wireframeLinewidth,s.linewidth=n.linewidth,!0===i.isPointLight&&!0===s.isMeshDistanceMaterial){t.properties.get(s).light=i;}return s}function E(n,r,s,a,o){if(!1===n.visible)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&o===h)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,n.matrixWorld);const i=e.update(n),l=n.material;if(Array.isArray(l)){const e=i.groups;for(let c=0,h=e.length;c<h;c++){const h=e[c],u=l[h.materialIndex];if(u&&u.visible){const e=b(n,u,a,o);n.onBeforeShadow(t,n,r,s,i,e,h),t.renderBufferDirect(s,null,i,e,n,h),n.onAfterShadow(t,n,r,s,i,e,h);}}}else if(l.visible){const e=b(n,l,a,o);n.onBeforeShadow(t,n,r,s,i,e,null),t.renderBufferDirect(s,null,i,e,n,null),n.onAfterShadow(t,n,r,s,i,e,null);}}const l=n.children;for(let t=0,e=l.length;t<e;t++)E(l[t],r,s,a,o);}function T(t){t.target.removeEventListener("dispose",T);for(const e in p){const n=p[e],i=t.target.uuid;if(i in n){n[i].dispose(),delete n[i];}}}this.render=function(e,n,o){if(!1===y.enabled)return;if(!1===y.autoUpdate&&!1===y.needsUpdate)return;if(0===e.length)return;const l=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),d=t.state;d.setBlending(0),d.buffers.color.setClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1);const p=M!==h&&this.type===h,f=M===h&&this.type!==h;for(let l=0,c=e.length;l<c;l++){const c=e[l],u=c.shadow;if(void 0===u){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(!1===u.autoUpdate&&!1===u.needsUpdate)continue;r.copy(u.mapSize);const g=u.getFrameExtents();if(r.multiply(g),s.copy(u.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/g.x),r.x=s.x*g.x,u.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/g.y),r.y=s.y*g.y,u.mapSize.y=s.y)),null===u.map||!0===p||!0===f){const t=this.type!==h?{minFilter:gt,magFilter:gt}:{};null!==u.map&&u.map.dispose(),u.map=new Ei(r.x,r.y,t),u.map.texture.name=c.name+".shadowMap",u.camera.updateProjectionMatrix();}t.setRenderTarget(u.map),t.clear();const _=u.getViewportCount();for(let t=0;t<_;t++){const e=u.getViewport(t);a.set(s.x*e.x,s.y*e.y,s.x*e.z,s.y*e.w),d.viewport(a),u.updateMatrices(c,t),i=u.getFrustum(),E(n,o,u.camera,c,this.type);}!0!==u.isPointLightShadow&&this.type===h&&S(u,o),u.needsUpdate=!1;}M=this.type,y.needsUpdate=!1,t.setRenderTarget(l,c,u);};}function Vl(t,e,n){const i=n.isWebGL2;const r=new function(){let e=!1;const n=new Si;let i=null;const r=new Si(0,0,0,0);return {setMask:function(n){i===n||e||(t.colorMask(n,n,n,n),i=n);},setLocked:function(t){e=t;},setClear:function(e,i,s,a,o){!0===o&&(e*=a,i*=a,s*=a),n.set(e,i,s,a),!1===r.equals(n)&&(t.clearColor(e,i,s,a),r.copy(n));},reset:function(){e=!1,i=null,r.set(-1,0,0,0);}}},s=new function(){let e=!1,n=null,i=null,r=null;return {setTest:function(e){e?j(t.DEPTH_TEST):q(t.DEPTH_TEST);},setMask:function(i){n===i||e||(t.depthMask(i),n=i);},setFunc:function(e){if(i!==e){switch(e){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:default:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);}i=e;}},setLocked:function(t){e=t;},setClear:function(e){r!==e&&(t.clearDepth(e),r=e);},reset:function(){e=!1,n=null,i=null,r=null;}}},a=new function(){let e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null;return {setTest:function(n){e||(n?j(t.STENCIL_TEST):q(t.STENCIL_TEST));},setMask:function(i){n===i||e||(t.stencilMask(i),n=i);},setFunc:function(e,n,a){i===e&&r===n&&s===a||(t.stencilFunc(e,n,a),i=e,r=n,s=a);},setOp:function(e,n,i){a===e&&o===n&&l===i||(t.stencilOp(e,n,i),a=e,o=n,l=i);},setLocked:function(t){e=t;},setClear:function(e){c!==e&&(t.clearStencil(e),c=e);},reset:function(){e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null;}}},o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,p=[],m=null,f=!1,g=null,_=null,v=null,x=null,M=null,S=null,b=null,E=new Zr(0,0,0),T=0,w=!1,A=null,R=null,L=null,I=null,U=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const F=t.getParameter(t.VERSION);-1!==F.indexOf("WebGL")?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=O>=1):-1!==F.indexOf("OpenGL ES")&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=O>=2);let B=null,z={};const H=t.getParameter(t.SCISSOR_BOX),k=t.getParameter(t.VIEWPORT),V=(new Si).fromArray(H),G=(new Si).fromArray(k);function W(e,n,r,s){const a=new Uint8Array(4),o=t.createTexture();t.bindTexture(e,o),t.texParameteri(e,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(e,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let o=0;o<r;o++)!i||e!==t.TEXTURE_3D&&e!==t.TEXTURE_2D_ARRAY?t.texImage2D(n+o,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,a):t.texImage3D(n,0,t.RGBA,1,1,s,0,t.RGBA,t.UNSIGNED_BYTE,a);return o}const X={};function j(e){!0!==c[e]&&(t.enable(e),c[e]=!0);}function q(e){!1!==c[e]&&(t.disable(e),c[e]=!1);}X[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(X[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(t.DEPTH_TEST),s.setFunc(3),K(!1),$(1),j(t.CULL_FACE),J(0);const Y={[y]:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};if(i)Y[103]=t.MIN,Y[104]=t.MAX;else {const t=e.get("EXT_blend_minmax");null!==t&&(Y[103]=t.MIN_EXT,Y[104]=t.MAX_EXT);}const Z={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,[C]:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,[P]:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function J(e,n,i,r,s,a,o,l,c,h){if(0!==e){if(!1===f&&(j(t.BLEND),f=!0),5===e)s=s||n,a=a||i,o=o||r,n===_&&s===M||(t.blendEquationSeparate(Y[n],Y[s]),_=n,M=s),i===v&&r===x&&a===S&&o===b||(t.blendFuncSeparate(Z[i],Z[r],Z[a],Z[o]),v=i,x=r,S=a,b=o),!1!==l.equals(E)&&c===T||(t.blendColor(l.r,l.g,l.b,c),E.copy(l),T=c),g=e,w=!1;else if(e!==g||h!==w){if(_===y&&M===y||(t.blendEquation(t.FUNC_ADD),_=y,M=y),h)switch(e){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);}else switch(e){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);}v=null,x=null,S=null,b=null,E.set(0,0,0),T=0,g=e,w=h;}}else !0===f&&(q(t.BLEND),f=!1);}function K(e){A!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),A=e);}function $(e){0!==e?(j(t.CULL_FACE),e!==R&&(1===e?t.cullFace(t.BACK):2===e?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):q(t.CULL_FACE),R=e;}function Q(e,n,i){e?(j(t.POLYGON_OFFSET_FILL),I===n&&U===i||(t.polygonOffset(n,i),I=n,U=i)):q(t.POLYGON_OFFSET_FILL);}return {buffers:{color:r,depth:s,stencil:a},enable:j,disable:q,bindFramebuffer:function(e,n){return h[e]!==n&&(t.bindFramebuffer(e,n),h[e]=n,i&&(e===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=n),e===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=n)),!0)},drawBuffers:function(i,r){let s=p,a=!1;if(i){s=u.get(r),void 0===s&&(s=[],u.set(r,s));const e=i.textures;if(s.length!==e.length||s[0]!==t.COLOR_ATTACHMENT0){for(let n=0,i=e.length;n<i;n++)s[n]=t.COLOR_ATTACHMENT0+n;s.length=e.length,a=!0;}}else s[0]!==t.BACK&&(s[0]=t.BACK,a=!0);if(a)if(n.isWebGL2)t.drawBuffers(s);else {if(!0!==e.has("WEBGL_draw_buffers"))throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension");e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s);}},useProgram:function(e){return m!==e&&(t.useProgram(e),m=e,!0)},setBlending:J,setMaterial:function(e,n){2===e.side?q(t.CULL_FACE):j(t.CULL_FACE);let i=e.side===d;n&&(i=!i),K(i),1===e.blending&&!1===e.transparent?J(0):J(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.blendColor,e.blendAlpha,e.premultipliedAlpha),s.setFunc(e.depthFunc),s.setTest(e.depthTest),s.setMask(e.depthWrite),r.setMask(e.colorWrite);const o=e.stencilWrite;a.setTest(o),o&&(a.setMask(e.stencilWriteMask),a.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),a.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),Q(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?j(t.SAMPLE_ALPHA_TO_COVERAGE):q(t.SAMPLE_ALPHA_TO_COVERAGE);},setFlipSided:K,setCullFace:$,setLineWidth:function(e){e!==L&&(D&&t.lineWidth(e),L=e);},setPolygonOffset:Q,setScissorTest:function(e){e?j(t.SCISSOR_TEST):q(t.SCISSOR_TEST);},activeTexture:function(e){void 0===e&&(e=t.TEXTURE0+N-1),B!==e&&(t.activeTexture(e),B=e);},bindTexture:function(e,n,i){void 0===i&&(i=null===B?t.TEXTURE0+N-1:B);let r=z[i];void 0===r&&(r={type:void 0,texture:void 0},z[i]=r),r.type===e&&r.texture===n||(B!==i&&(t.activeTexture(i),B=i),t.bindTexture(e,n||X[e]),r.type=e,r.texture=n);},unbindTexture:function(){const e=z[B];void 0!==e&&void 0!==e.type&&(t.bindTexture(e.type,null),e.type=void 0,e.texture=void 0);},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},compressedTexImage3D:function(){try{t.compressedTexImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texImage2D:function(){try{t.texImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texImage3D:function(){try{t.texImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},updateUBOMapping:function(e,n){let i=l.get(n);void 0===i&&(i=new WeakMap,l.set(n,i));let r=i.get(e);void 0===r&&(r=t.getUniformBlockIndex(n,e.name),i.set(e,r));},uniformBlockBinding:function(e,n){const i=l.get(n).get(e);o.get(n)!==i&&(t.uniformBlockBinding(n,i,e.__bindingPointIndex),o.set(n,i));},texStorage2D:function(){try{t.texStorage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texStorage3D:function(){try{t.texStorage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texSubImage2D:function(){try{t.texSubImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texSubImage3D:function(){try{t.texSubImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},scissor:function(e){!1===V.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),V.copy(e));},viewport:function(e){!1===G.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),G.copy(e));},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),!0===i&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},B=null,z={},h={},u=new WeakMap,p=[],m=null,f=!1,g=null,_=null,v=null,x=null,M=null,S=null,b=null,E=new Zr(0,0,0),T=0,w=!1,A=null,R=null,L=null,I=null,U=null,V.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset();}}}function Gl(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),h=new $n,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d");}catch(t){}function f(t,e){return m?new OffscreenCanvas(t,e):ri("canvas")}function g(t,e,n,i){let r=1;const s=H(t);if((s.width>i||s.height>i)&&(r=i/Math.max(s.width,s.height)),r<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap||"undefined"!=typeof VideoFrame&&t instanceof VideoFrame){const i=e?Yn:Math.floor,a=i(r*s.width),o=i(r*s.height);void 0===d&&(d=f(a,o));const l=n?f(a,o):d;l.width=a,l.height=o;return l.getContext("2d").drawImage(t,0,0,a,o),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+s.width+"x"+s.height+") to ("+a+"x"+o+")."),l}return "data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+s.width+"x"+s.height+")."),t}return t}function _(t){const e=H(t);return qn(e.width)&&qn(e.height)}function v(t,e){return t.generateMipmaps&&e&&t.minFilter!==gt&&t.minFilter!==Mt}function x(e){t.generateMipmap(e);}function y(n,i,r,s,a=!1){if(!1===o)return i;if(null!==n){if(void 0!==t[n])return t[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'");}let l=i;if(i===t.RED&&(r===t.FLOAT&&(l=t.R32F),r===t.HALF_FLOAT&&(l=t.R16F),r===t.UNSIGNED_BYTE&&(l=t.R8)),i===t.RED_INTEGER&&(r===t.UNSIGNED_BYTE&&(l=t.R8UI),r===t.UNSIGNED_SHORT&&(l=t.R16UI),r===t.UNSIGNED_INT&&(l=t.R32UI),r===t.BYTE&&(l=t.R8I),r===t.SHORT&&(l=t.R16I),r===t.INT&&(l=t.R32I)),i===t.RG&&(r===t.FLOAT&&(l=t.RG32F),r===t.HALF_FLOAT&&(l=t.RG16F),r===t.UNSIGNED_BYTE&&(l=t.RG8)),i===t.RG_INTEGER&&(r===t.UNSIGNED_BYTE&&(l=t.RG8UI),r===t.UNSIGNED_SHORT&&(l=t.RG16UI),r===t.UNSIGNED_INT&&(l=t.RG32UI),r===t.BYTE&&(l=t.RG8I),r===t.SHORT&&(l=t.RG16I),r===t.INT&&(l=t.RG32I)),i===t.RGBA){const e=a?Ze:di.getTransfer(s);r===t.FLOAT&&(l=t.RGBA32F),r===t.HALF_FLOAT&&(l=t.RGBA16F),r===t.UNSIGNED_BYTE&&(l=e===Je?t.SRGB8_ALPHA8:t.RGBA8),r===t.UNSIGNED_SHORT_4_4_4_4&&(l=t.RGBA4),r===t.UNSIGNED_SHORT_5_5_5_1&&(l=t.RGB5_A1);}return l!==t.R16F&&l!==t.R32F&&l!==t.RG16F&&l!==t.RG32F&&l!==t.RGBA16F&&l!==t.RGBA32F||e.get("EXT_color_buffer_float"),l}function M(t,e,n){return !0===v(t,n)||t.isFramebufferTexture&&t.minFilter!==gt&&t.minFilter!==Mt?Math.log2(Math.max(e.width,e.height))+1:void 0!==t.mipmaps&&t.mipmaps.length>0?t.mipmaps.length:t.isCompressedTexture&&Array.isArray(t.image)?e.mipmaps.length:1}function S(e){return e===gt||e===_t||e===xt?t.NEAREST:t.LINEAR}function b(t){const e=t.target;e.removeEventListener("dispose",b),function(t){const e=i.get(t);if(void 0===e.__webglInit)return;const n=t.source,r=p.get(n);if(r){const i=r[e.__cacheKey];i.usedTimes--,0===i.usedTimes&&T(t),0===Object.keys(r).length&&p.delete(n);}i.remove(t);}(e),e.isVideoTexture&&u.delete(e);}function E(e){const n=e.target;n.removeEventListener("dispose",E),function(e){const n=i.get(e);e.depthTexture&&e.depthTexture.dispose();if(e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(n.__webglFramebuffer[e]))for(let i=0;i<n.__webglFramebuffer[e].length;i++)t.deleteFramebuffer(n.__webglFramebuffer[e][i]);else t.deleteFramebuffer(n.__webglFramebuffer[e]);n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer[e]);}else {if(Array.isArray(n.__webglFramebuffer))for(let e=0;e<n.__webglFramebuffer.length;e++)t.deleteFramebuffer(n.__webglFramebuffer[e]);else t.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&t.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let e=0;e<n.__webglColorRenderbuffer.length;e++)n.__webglColorRenderbuffer[e]&&t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);n.__webglDepthRenderbuffer&&t.deleteRenderbuffer(n.__webglDepthRenderbuffer);}const r=e.textures;for(let e=0,n=r.length;e<n;e++){const n=i.get(r[e]);n.__webglTexture&&(t.deleteTexture(n.__webglTexture),a.memory.textures--),i.remove(r[e]);}i.remove(e);}(n);}function T(e){const n=i.get(e);t.deleteTexture(n.__webglTexture);const r=e.source;delete p.get(r)[n.__cacheKey],a.memory.textures--;}let w=0;function A(e,r){const s=i.get(e);if(e.isVideoTexture&&function(t){const e=a.render.frame;u.get(t)!==e&&(u.set(t,e),t.update());}(e),!1===e.isRenderTargetTexture&&e.version>0&&s.__version!==e.version){const t=e.image;if(null===t)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else {if(!1!==t.complete)return void U(s,e,r);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");}}n.bindTexture(t.TEXTURE_2D,s.__webglTexture,t.TEXTURE0+r);}const R={[pt]:t.REPEAT,[mt]:t.CLAMP_TO_EDGE,[ft]:t.MIRRORED_REPEAT},C={[gt]:t.NEAREST,[_t]:t.NEAREST_MIPMAP_NEAREST,[xt]:t.NEAREST_MIPMAP_LINEAR,[Mt]:t.LINEAR,[St]:t.LINEAR_MIPMAP_NEAREST,[Et]:t.LINEAR_MIPMAP_LINEAR},P={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function L(n,s,a){if(s.type!==It||!1!==e.has("OES_texture_float_linear")||s.magFilter!==Mt&&s.magFilter!==St&&s.magFilter!==xt&&s.magFilter!==Et&&s.minFilter!==Mt&&s.minFilter!==St&&s.minFilter!==xt&&s.minFilter!==Et||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a?(t.texParameteri(n,t.TEXTURE_WRAP_S,R[s.wrapS]),t.texParameteri(n,t.TEXTURE_WRAP_T,R[s.wrapT]),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,R[s.wrapR]),t.texParameteri(n,t.TEXTURE_MAG_FILTER,C[s.magFilter]),t.texParameteri(n,t.TEXTURE_MIN_FILTER,C[s.minFilter])):(t.texParameteri(n,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(n,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),s.wrapS===mt&&s.wrapT===mt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(n,t.TEXTURE_MAG_FILTER,S(s.magFilter)),t.texParameteri(n,t.TEXTURE_MIN_FILTER,S(s.minFilter)),s.minFilter!==gt&&s.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),s.compareFunction&&(t.texParameteri(n,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(n,t.TEXTURE_COMPARE_FUNC,P[s.compareFunction])),!0===e.has("EXT_texture_filter_anisotropic")){if(s.magFilter===gt)return;if(s.minFilter!==xt&&s.minFilter!==Et)return;if(s.type===It&&!1===e.has("OES_texture_float_linear"))return;if(!1===o&&s.type===Ut&&!1===e.has("OES_texture_half_float_linear"))return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const a=e.get("EXT_texture_filter_anisotropic");t.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy;}}}function I(e,n){let i=!1;void 0===e.__webglInit&&(e.__webglInit=!0,n.addEventListener("dispose",b));const r=n.source;let s=p.get(r);void 0===s&&(s={},p.set(r,s));const o=function(t){const e=[];return e.push(t.wrapS),e.push(t.wrapT),e.push(t.wrapR||0),e.push(t.magFilter),e.push(t.minFilter),e.push(t.anisotropy),e.push(t.internalFormat),e.push(t.format),e.push(t.type),e.push(t.generateMipmaps),e.push(t.premultiplyAlpha),e.push(t.flipY),e.push(t.unpackAlignment),e.push(t.colorSpace),e.join()}(n);if(o!==e.__cacheKey){void 0===s[o]&&(s[o]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,i=!0),s[o].usedTimes++;const r=s[e.__cacheKey];void 0!==r&&(s[e.__cacheKey].usedTimes--,0===r.usedTimes&&T(n)),e.__cacheKey=o,e.__webglTexture=s[o].texture;}return i}function U(e,a,l){let c=t.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(c=t.TEXTURE_2D_ARRAY),a.isData3DTexture&&(c=t.TEXTURE_3D);const h=I(e,a),u=a.source;n.bindTexture(c,e.__webglTexture,t.TEXTURE0+l);const d=i.get(u);if(u.version!==d.__version||!0===h){n.activeTexture(t.TEXTURE0+l);const e=di.getPrimaries(di.workingColorSpace),i=a.colorSpace===We?null:di.getPrimaries(a.colorSpace),p=a.colorSpace===We||e===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,a.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);const m=function(t){return !o&&(t.wrapS!==mt||t.wrapT!==mt||t.minFilter!==gt&&t.minFilter!==Mt)}(a)&&!1===_(a.image);let f=g(a.image,m,!1,r.maxTextureSize);f=z(a,f);const S=_(f)||o,b=s.convert(a.format,a.colorSpace);let E,T=s.convert(a.type),w=y(a.internalFormat,b,T,a.colorSpace,a.isVideoTexture);L(c,a,S);const A=a.mipmaps,R=o&&!0!==a.isVideoTexture&&w!==ne,C=void 0===d.__version||!0===h,P=u.dataReady,I=M(a,f,S);if(a.isDepthTexture)w=t.DEPTH_COMPONENT,o?w=a.type===It?t.DEPTH_COMPONENT32F:a.type===Lt?t.DEPTH_COMPONENT24:a.type===Ot?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT16:a.type===It&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),a.format===kt&&w===t.DEPTH_COMPONENT&&a.type!==Ct&&a.type!==Lt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),a.type=Lt,T=s.convert(a.type)),a.format===Vt&&w===t.DEPTH_COMPONENT&&(w=t.DEPTH_STENCIL,a.type!==Ot&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),a.type=Ot,T=s.convert(a.type))),C&&(R?n.texStorage2D(t.TEXTURE_2D,1,w,f.width,f.height):n.texImage2D(t.TEXTURE_2D,0,w,f.width,f.height,0,b,T,null));else if(a.isDataTexture)if(A.length>0&&S){R&&C&&n.texStorage2D(t.TEXTURE_2D,I,w,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)E=A[e],R?P&&n.texSubImage2D(t.TEXTURE_2D,e,0,0,E.width,E.height,b,T,E.data):n.texImage2D(t.TEXTURE_2D,e,w,E.width,E.height,0,b,T,E.data);a.generateMipmaps=!1;}else R?(C&&n.texStorage2D(t.TEXTURE_2D,I,w,f.width,f.height),P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,f.width,f.height,b,T,f.data)):n.texImage2D(t.TEXTURE_2D,0,w,f.width,f.height,0,b,T,f.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){R&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,I,w,A[0].width,A[0].height,f.depth);for(let e=0,i=A.length;e<i;e++)E=A[e],a.format!==Bt?null!==b?R?P&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,e,0,0,0,E.width,E.height,f.depth,b,E.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,e,w,E.width,E.height,f.depth,0,E.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,e,0,0,0,E.width,E.height,f.depth,b,T,E.data):n.texImage3D(t.TEXTURE_2D_ARRAY,e,w,E.width,E.height,f.depth,0,b,T,E.data);}else {R&&C&&n.texStorage2D(t.TEXTURE_2D,I,w,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)E=A[e],a.format!==Bt?null!==b?R?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,e,0,0,E.width,E.height,b,E.data):n.compressedTexImage2D(t.TEXTURE_2D,e,w,E.width,E.height,0,E.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?P&&n.texSubImage2D(t.TEXTURE_2D,e,0,0,E.width,E.height,b,T,E.data):n.texImage2D(t.TEXTURE_2D,e,w,E.width,E.height,0,b,T,E.data);}else if(a.isDataArrayTexture)R?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,I,w,f.width,f.height,f.depth),P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,f.width,f.height,f.depth,b,T,f.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,w,f.width,f.height,f.depth,0,b,T,f.data);else if(a.isData3DTexture)R?(C&&n.texStorage3D(t.TEXTURE_3D,I,w,f.width,f.height,f.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,f.width,f.height,f.depth,b,T,f.data)):n.texImage3D(t.TEXTURE_3D,0,w,f.width,f.height,f.depth,0,b,T,f.data);else if(a.isFramebufferTexture){if(C)if(R)n.texStorage2D(t.TEXTURE_2D,I,w,f.width,f.height);else {let e=f.width,i=f.height;for(let r=0;r<I;r++)n.texImage2D(t.TEXTURE_2D,r,w,e,i,0,b,T,null),e>>=1,i>>=1;}}else if(A.length>0&&S){if(R&&C){const e=H(A[0]);n.texStorage2D(t.TEXTURE_2D,I,w,e.width,e.height);}for(let e=0,i=A.length;e<i;e++)E=A[e],R?P&&n.texSubImage2D(t.TEXTURE_2D,e,0,0,b,T,E):n.texImage2D(t.TEXTURE_2D,e,w,b,T,E);a.generateMipmaps=!1;}else if(R){if(C){const e=H(f);n.texStorage2D(t.TEXTURE_2D,I,w,e.width,e.height);}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,b,T,f);}else n.texImage2D(t.TEXTURE_2D,0,w,b,T,f);v(a,S)&&x(c),d.__version=u.version,a.onUpdate&&a.onUpdate(a);}e.__version=a.version;}function N(e,r,a,o,c,h){const u=s.convert(a.format,a.colorSpace),d=s.convert(a.type),p=y(a.internalFormat,u,d,a.colorSpace);if(!i.get(r).__hasExternalTextures){const e=Math.max(1,r.width>>h),i=Math.max(1,r.height>>h);c===t.TEXTURE_3D||c===t.TEXTURE_2D_ARRAY?n.texImage3D(c,h,p,e,i,r.depth,0,u,d,null):n.texImage2D(c,h,p,e,i,0,u,d,null);}n.bindFramebuffer(t.FRAMEBUFFER,e),B(r)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,o,c,i.get(a).__webglTexture,0,F(r)):(c===t.TEXTURE_2D||c>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,o,c,i.get(a).__webglTexture,h),n.bindFramebuffer(t.FRAMEBUFFER,null);}function D(e,n,i){if(t.bindRenderbuffer(t.RENDERBUFFER,e),n.depthBuffer&&!n.stencilBuffer){let r=!0===o?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(i||B(n)){const e=n.depthTexture;e&&e.isDepthTexture&&(e.type===It?r=t.DEPTH_COMPONENT32F:e.type===Lt&&(r=t.DEPTH_COMPONENT24));const i=F(n);B(n)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,i,r,n.width,n.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,i,r,n.width,n.height);}else t.renderbufferStorage(t.RENDERBUFFER,r,n.width,n.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e);}else if(n.depthBuffer&&n.stencilBuffer){const r=F(n);i&&!1===B(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):B(n)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,e);}else {const e=n.textures;for(let r=0;r<e.length;r++){const a=e[r],o=s.convert(a.format,a.colorSpace),c=s.convert(a.type),h=y(a.internalFormat,o,c,a.colorSpace),u=F(n);i&&!1===B(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,u,h,n.width,n.height):B(n)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,u,h,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,h,n.width,n.height);}}t.bindRenderbuffer(t.RENDERBUFFER,null);}function O(e){const r=i.get(e),s=!0===e.isWebGLCubeRenderTarget;if(e.depthTexture&&!r.__autoAllocateDepthBuffer){if(s)throw new Error("target.depthTexture not supported in Cube render targets");!function(e,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,e),!r.depthTexture||!r.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),A(r.depthTexture,0);const s=i.get(r.depthTexture).__webglTexture,a=F(r);if(r.depthTexture.format===kt)B(r)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0);else {if(r.depthTexture.format!==Vt)throw new Error("Unknown depthTexture format");B(r)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0);}}(r.__webglFramebuffer,e);}else if(s){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]=t.createRenderbuffer(),D(r.__webglDepthbuffer[i],e,!1);}else n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),D(r.__webglDepthbuffer,e,!1);n.bindFramebuffer(t.FRAMEBUFFER,null);}function F(t){return Math.min(r.maxSamples,t.samples)}function B(t){const n=i.get(t);return o&&t.samples>0&&!0===e.has("WEBGL_multisampled_render_to_texture")&&!1!==n.__useRenderToTexture}function z(t,n){const i=t.colorSpace,r=t.format,s=t.type;return !0===t.isCompressedTexture||!0===t.isVideoTexture||t.format===Dn||i!==je&&i!==We&&(di.getTransfer(i)===Je?!1===o?!0===e.has("EXT_sRGB")&&r===Bt?(t.format=Dn,t.minFilter=Mt,t.generateMipmaps=!1):n=gi.sRGBToLinear(n):r===Bt&&s===wt||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",i)),n}function H(t){return "undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement?(h.width=t.naturalWidth||t.width,h.height=t.naturalHeight||t.height):"undefined"!=typeof VideoFrame&&t instanceof VideoFrame?(h.width=t.displayWidth,h.height=t.displayHeight):(h.width=t.width,h.height=t.height),h}this.allocateTextureUnit=function(){const t=w;return t>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+r.maxTextures),w+=1,t},this.resetTextureUnits=function(){w=0;},this.setTexture2D=A,this.setTexture2DArray=function(e,r){const s=i.get(e);e.version>0&&s.__version!==e.version?U(s,e,r):n.bindTexture(t.TEXTURE_2D_ARRAY,s.__webglTexture,t.TEXTURE0+r);},this.setTexture3D=function(e,r){const s=i.get(e);e.version>0&&s.__version!==e.version?U(s,e,r):n.bindTexture(t.TEXTURE_3D,s.__webglTexture,t.TEXTURE0+r);},this.setTextureCube=function(e,a){const l=i.get(e);e.version>0&&l.__version!==e.version?function(e,a,l){if(6!==a.image.length)return;const c=I(e,a),h=a.source;n.bindTexture(t.TEXTURE_CUBE_MAP,e.__webglTexture,t.TEXTURE0+l);const u=i.get(h);if(h.version!==u.__version||!0===c){n.activeTexture(t.TEXTURE0+l);const e=di.getPrimaries(di.workingColorSpace),i=a.colorSpace===We?null:di.getPrimaries(a.colorSpace),d=a.colorSpace===We||e===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,a.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);const p=a.isCompressedTexture||a.image[0].isCompressedTexture,m=a.image[0]&&a.image[0].isDataTexture,f=[];for(let t=0;t<6;t++)f[t]=p||m?m?a.image[t].image:a.image[t]:g(a.image[t],!1,!0,r.maxCubemapSize),f[t]=z(a,f[t]);const S=f[0],b=_(S)||o,E=s.convert(a.format,a.colorSpace),T=s.convert(a.type),w=y(a.internalFormat,E,T,a.colorSpace),A=o&&!0!==a.isVideoTexture,R=void 0===u.__version||!0===c,C=h.dataReady;let P,I=M(a,S,b);if(L(t.TEXTURE_CUBE_MAP,a,b),p){A&&R&&n.texStorage2D(t.TEXTURE_CUBE_MAP,I,w,S.width,S.height);for(let e=0;e<6;e++){P=f[e].mipmaps;for(let i=0;i<P.length;i++){const r=P[i];a.format!==Bt?null!==E?A?C&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,r.width,r.height,E,r.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,w,r.width,r.height,0,r.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,r.width,r.height,E,T,r.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,w,r.width,r.height,0,E,T,r.data);}}}else {if(P=a.mipmaps,A&&R){P.length>0&&I++;const e=H(f[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,I,w,e.width,e.height);}for(let e=0;e<6;e++)if(m){A?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,E,T,f[e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,w,f[e].width,f[e].height,0,E,T,f[e].data);for(let i=0;i<P.length;i++){const r=P[i].image[e].image;A?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,r.width,r.height,E,T,r.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,w,r.width,r.height,0,E,T,r.data);}}else {A?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,E,T,f[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,w,E,T,f[e]);for(let i=0;i<P.length;i++){const r=P[i];A?C&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,E,T,r.image[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,w,E,T,r.image[e]);}}}v(a,b)&&x(t.TEXTURE_CUBE_MAP),u.__version=h.version,a.onUpdate&&a.onUpdate(a);}e.__version=a.version;}(l,e,a):n.bindTexture(t.TEXTURE_CUBE_MAP,l.__webglTexture,t.TEXTURE0+a);},this.rebindTextures=function(e,n,r){const s=i.get(e);void 0!==n&&N(s.__webglFramebuffer,e,e.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),void 0!==r&&O(e);},this.setupRenderTarget=function(e){const l=e.texture,c=i.get(e),h=i.get(l);e.addEventListener("dispose",E);const u=e.textures,d=!0===e.isWebGLCubeRenderTarget,p=u.length>1,m=_(e)||o;if(p||(void 0===h.__webglTexture&&(h.__webglTexture=t.createTexture()),h.__version=l.version,a.memory.textures++),d){c.__webglFramebuffer=[];for(let e=0;e<6;e++)if(o&&l.mipmaps&&l.mipmaps.length>0){c.__webglFramebuffer[e]=[];for(let n=0;n<l.mipmaps.length;n++)c.__webglFramebuffer[e][n]=t.createFramebuffer();}else c.__webglFramebuffer[e]=t.createFramebuffer();}else {if(o&&l.mipmaps&&l.mipmaps.length>0){c.__webglFramebuffer=[];for(let e=0;e<l.mipmaps.length;e++)c.__webglFramebuffer[e]=t.createFramebuffer();}else c.__webglFramebuffer=t.createFramebuffer();if(p)if(r.drawBuffers)for(let e=0,n=u.length;e<n;e++){const n=i.get(u[e]);void 0===n.__webglTexture&&(n.__webglTexture=t.createTexture(),a.memory.textures++);}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&e.samples>0&&!1===B(e)){c.__webglMultisampledFramebuffer=t.createFramebuffer(),c.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,c.__webglMultisampledFramebuffer);for(let n=0;n<u.length;n++){const i=u[n];c.__webglColorRenderbuffer[n]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,c.__webglColorRenderbuffer[n]);const r=s.convert(i.format,i.colorSpace),a=s.convert(i.type),o=y(i.internalFormat,r,a,i.colorSpace,!0===e.isXRRenderTarget),l=F(e);t.renderbufferStorageMultisample(t.RENDERBUFFER,l,o,e.width,e.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.RENDERBUFFER,c.__webglColorRenderbuffer[n]);}t.bindRenderbuffer(t.RENDERBUFFER,null),e.depthBuffer&&(c.__webglDepthRenderbuffer=t.createRenderbuffer(),D(c.__webglDepthRenderbuffer,e,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null);}}if(d){n.bindTexture(t.TEXTURE_CUBE_MAP,h.__webglTexture),L(t.TEXTURE_CUBE_MAP,l,m);for(let n=0;n<6;n++)if(o&&l.mipmaps&&l.mipmaps.length>0)for(let i=0;i<l.mipmaps.length;i++)N(c.__webglFramebuffer[n][i],e,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+n,i);else N(c.__webglFramebuffer[n],e,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(l,m)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture();}else if(p){for(let r=0,s=u.length;r<s;r++){const s=u[r],a=i.get(s);n.bindTexture(t.TEXTURE_2D,a.__webglTexture),L(t.TEXTURE_2D,s,m),N(c.__webglFramebuffer,e,s,t.COLOR_ATTACHMENT0+r,t.TEXTURE_2D,0),v(s,m)&&x(t.TEXTURE_2D);}n.unbindTexture();}else {let i=t.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o?i=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(i,h.__webglTexture),L(i,l,m),o&&l.mipmaps&&l.mipmaps.length>0)for(let n=0;n<l.mipmaps.length;n++)N(c.__webglFramebuffer[n],e,l,t.COLOR_ATTACHMENT0,i,n);else N(c.__webglFramebuffer,e,l,t.COLOR_ATTACHMENT0,i,0);v(l,m)&&x(i),n.unbindTexture();}e.depthBuffer&&O(e);},this.updateRenderTargetMipmap=function(e){const r=_(e)||o,s=e.textures;for(let a=0,o=s.length;a<o;a++){const o=s[a];if(v(o,r)){const r=e.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,s=i.get(o).__webglTexture;n.bindTexture(r,s),x(r),n.unbindTexture();}}},this.updateMultisampleRenderTarget=function(e){if(o&&e.samples>0&&!1===B(e)){const r=e.textures,s=e.width,a=e.height;let o=t.COLOR_BUFFER_BIT;const l=[],h=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,u=i.get(e),d=r.length>1;if(d)for(let e=0;e<r.length;e++)n.bindFramebuffer(t.FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<r.length;n++){l.push(t.COLOR_ATTACHMENT0+n),e.depthBuffer&&l.push(h);const p=void 0!==u.__ignoreDepthValues&&u.__ignoreDepthValues;if(!1===p&&(e.depthBuffer&&(o|=t.DEPTH_BUFFER_BIT),e.stencilBuffer&&(o|=t.STENCIL_BUFFER_BIT)),d&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,u.__webglColorRenderbuffer[n]),!0===p&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[h]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[h])),d){const e=i.get(r[n]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0);}t.blitFramebuffer(0,0,s,a,0,0,s,a,o,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,l);}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),d)for(let e=0;e<r.length;e++){n.bindFramebuffer(t.FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,u.__webglColorRenderbuffer[e]);const s=i.get(r[e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,s,0);}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer);}},this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=N,this.useMultisampledRTT=B;}function Wl(t,e,n){const i=n.isWebGL2;return {convert:function(n,r=""){let s;const a=di.getTransfer(r);if(n===wt)return t.UNSIGNED_BYTE;if(n===Nt)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Dt)return t.UNSIGNED_SHORT_5_5_5_1;if(1010===n)return t.BYTE;if(1011===n)return t.SHORT;if(n===Ct)return t.UNSIGNED_SHORT;if(n===Pt)return t.INT;if(n===Lt)return t.UNSIGNED_INT;if(n===It)return t.FLOAT;if(n===Ut)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),null!==s?s.HALF_FLOAT_OES:null);if(1021===n)return t.ALPHA;if(n===Bt)return t.RGBA;if(1024===n)return t.LUMINANCE;if(1025===n)return t.LUMINANCE_ALPHA;if(n===kt)return t.DEPTH_COMPONENT;if(n===Vt)return t.DEPTH_STENCIL;if(n===Dn)return s=e.get("EXT_sRGB"),null!==s?s.SRGB_ALPHA_EXT:null;if(n===Gt)return t.RED;if(n===Wt)return t.RED_INTEGER;if(1030===n)return t.RG;if(n===jt)return t.RG_INTEGER;if(n===qt)return t.RGBA_INTEGER;if(n===Yt||n===Zt||n===Jt||n===Kt)if(a===Je){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),null===s)return null;if(n===Yt)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zt)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jt)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kt)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else {if(s=e.get("WEBGL_compressed_texture_s3tc"),null===s)return null;if(n===Yt)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zt)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jt)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kt)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===$t||n===Qt||n===te||n===ee){if(s=e.get("WEBGL_compressed_texture_pvrtc"),null===s)return null;if(n===$t)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qt)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===te)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ee)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===ne)return s=e.get("WEBGL_compressed_texture_etc1"),null!==s?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ie||n===re){if(s=e.get("WEBGL_compressed_texture_etc"),null===s)return null;if(n===ie)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===re)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(n===se||n===ae||n===oe||n===le||n===ce||n===he||n===ue||n===de||n===pe||n===me||n===fe||n===ge||n===_e||n===ve){if(s=e.get("WEBGL_compressed_texture_astc"),null===s)return null;if(n===se)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ae)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oe)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===le)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ce)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===he)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ue)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===de)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pe)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===me)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fe)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ge)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_e)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ve)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===xe||n===ye||n===Me){if(s=e.get("EXT_texture_compression_bptc"),null===s)return null;if(n===xe)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ye)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Me)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(36283===n||n===be||n===Ee||n===Te){if(s=e.get("EXT_texture_compression_rgtc"),null===s)return null;if(n===xe)return s.COMPRESSED_RED_RGTC1_EXT;if(n===be)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ee)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Te)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Ot?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),null!==s?s.UNSIGNED_INT_24_8_WEBGL:null):void 0!==t[n]?t[n]:null}}}class Xl extends ta{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t;}}class jl extends Ur{constructor(){super(),this.isGroup=!0,this.type="Group";}}const ql={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null;}getHandSpace(){return null===this._hand&&(this._hand=new jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Pi,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Pi),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Pi,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Pi),this._grip}dispatchEvent(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n);}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&"visible-blurred"!==e.session.visibilityState){if(l&&t.hand){s=!0;for(const i of t.hand.values()){const t=e.getJointPose(i,n),r=this._getHandJoint(l,i);null!==t&&(r.matrix.fromArray(t.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=t.radius),r.visible=null!==t;}const i=l.joints["index-finger-tip"],r=l.joints["thumb-tip"],a=i.position.distanceTo(r.position),o=.02,c=.005;l.inputState.pinching&&a>o+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&a<=o-c&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}));}else null!==o&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),null!==r&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));null!==a&&(i=e.getPose(t.targetRaySpace,n),null===i&&null!==r&&(i=r),null!==i&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ql)));}return null!==a&&(a.visible=null!==i),null!==o&&(o.visible=null!==r),null!==l&&(l.visible=null!==s),this}_getHandJoint(t,e){if(void 0===t.joints[e.jointName]){const n=new jl;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n);}return t.joints[e.jointName]}}class Zl{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0;}init(t,e,n){if(null===this.texture){const i=new Mi;t.properties.get(i).__webglTexture=e.texture,e.depthNear==n.depthNear&&e.depthFar==n.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i;}}render(t,e){if(null!==this.texture){if(null===this.mesh){const t=e.cameras[0].viewport,n=new Zs({extensions:{fragDepth:!0},vertexShader:"\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}",fragmentShader:"\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}",uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vs(new ma(20,20),n);}t.render(this.mesh,e);}}reset(){this.texture=null,this.mesh=null;}}class Jl extends Bn{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,p=null;const m=new Zl,f=e.getContextAttributes();let g=null,_=null;const v=[],x=[],y=new $n;let M=null;const S=new ta;S.layers.enable(1),S.viewport=new Si;const b=new ta;b.layers.enable(2),b.viewport=new Si;const E=[S,b],T=new Xl;T.layers.enable(1),T.layers.enable(2);let w=null,A=null;function R(t){const e=x.indexOf(t.inputSource);if(-1===e)return;const n=v[e];void 0!==n&&(n.update(t.inputSource,t.frame,l||s),n.dispatchEvent({type:t.type,data:t.inputSource}));}function C(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",P);for(let t=0;t<v.length;t++){const e=x[t];null!==e&&(x[t]=null,v[t].disconnect(e));}w=null,A=null,m.reset(),t.setRenderTarget(g),d=null,u=null,h=null,i=null,_=null,D.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"});}function P(t){for(let e=0;e<t.removed.length;e++){const n=t.removed[e],i=x.indexOf(n);i>=0&&(x[i]=null,v[i].disconnect(n));}for(let e=0;e<t.added.length;e++){const n=t.added[e];let i=x.indexOf(n);if(-1===i){for(let t=0;t<v.length;t++){if(t>=x.length){x.push(n),i=t;break}if(null===x[t]){x[t]=n,i=t;break}}if(-1===i)break}const r=v[i];r&&r.connect(n);}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(t){let e=v[t];return void 0===e&&(e=new Yl,v[t]=e),e.getTargetRaySpace()},this.getControllerGrip=function(t){let e=v[t];return void 0===e&&(e=new Yl,v[t]=e),e.getGripSpace()},this.getHand=function(t){let e=v[t];return void 0===e&&(e=new Yl,v[t]=e),e.getHandSpace()},this.setFramebufferScaleFactor=function(t){r=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");},this.setReferenceSpaceType=function(t){a=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(t){l=t;},this.getBaseLayer=function(){return null!==u?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(c){if(i=c,null!==i){if(g=t.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",C),i.addEventListener("inputsourceschange",P),!0!==f.xrCompatible&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(y),void 0===i.renderState.layers||!1===t.capabilities.isWebGL2){const n={antialias:void 0!==i.renderState.layers||f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,n),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ei(d.framebufferWidth,d.framebufferHeight,{format:Bt,type:wt,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil});}else {let n=null,s=null,a=null;f.depth&&(a=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,n=f.stencil?Vt:kt,s=f.stencil?Ot:Lt);const o={colorFormat:e.RGBA8,depthFormat:a,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(o),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Ei(u.textureWidth,u.textureHeight,{format:Bt,type:wt,depthTexture:new Qa(u.textureWidth,u.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});t.properties.get(_).__ignoreDepthValues=u.ignoreDepthValues;}_.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),D.setContext(i),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"});}},this.getEnvironmentBlendMode=function(){if(null!==i)return i.environmentBlendMode};const L=new Pi,I=new Pi;function U(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.copy(t.matrixWorld).invert();}this.updateCamera=function(t){if(null===i)return;null!==m.texture&&(t.near=m.depthNear,t.far=m.depthFar),T.near=b.near=S.near=t.near,T.far=b.far=S.far=t.far,w===T.near&&A===T.far||(i.updateRenderState({depthNear:T.near,depthFar:T.far}),w=T.near,A=T.far,S.near=w,S.far=A,b.near=w,b.far=A,S.updateProjectionMatrix(),b.updateProjectionMatrix(),t.updateProjectionMatrix());const e=t.parent,n=T.cameras;U(T,e);for(let t=0;t<n.length;t++)U(n[t],e);2===n.length?function(t,e,n){L.setFromMatrixPosition(e.matrixWorld),I.setFromMatrixPosition(n.matrixWorld);const i=L.distanceTo(I),r=e.projectionMatrix.elements,s=n.projectionMatrix.elements,a=r[14]/(r[10]-1),o=r[14]/(r[10]+1),l=(r[9]+1)/r[5],c=(r[9]-1)/r[5],h=(r[8]-1)/r[0],u=(s[8]+1)/s[0],d=a*h,p=a*u,m=i/(-h+u),f=m*-h;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(f),t.translateZ(m),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.copy(t.matrixWorld).invert();const g=a+m,_=o+m,v=d-f,x=p+(i-f),y=l*o/_*g,M=c*o/_*g;t.projectionMatrix.makePerspective(v,x,y,M,g,_),t.projectionMatrixInverse.copy(t.projectionMatrix).invert();}(T,S,b):T.projectionMatrix.copy(S.projectionMatrix),function(t,e,n){null===n?t.matrix.copy(e.matrixWorld):(t.matrix.copy(n.matrixWorld),t.matrix.invert(),t.matrix.multiply(e.matrixWorld));t.matrix.decompose(t.position,t.quaternion,t.scale),t.updateMatrixWorld(!0),t.projectionMatrix.copy(e.projectionMatrix),t.projectionMatrixInverse.copy(e.projectionMatrixInverse),t.isPerspectiveCamera&&(t.fov=2*Vn*Math.atan(1/t.projectionMatrix.elements[5]),t.zoom=1);}(t,T,e);},this.getCamera=function(){return T},this.getFoveation=function(){if(null!==u||null!==d)return o},this.setFoveation=function(t){o=t,null!==u&&(u.fixedFoveation=t),null!==d&&void 0!==d.fixedFoveation&&(d.fixedFoveation=t);},this.hasDepthSensing=function(){return null!==m.texture};let N=null;const D=new da;D.setAnimationLoop((function(e,r){if(c=r.getViewerPose(l||s),p=r,null!==c){const e=c.views;null!==d&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let n=!1;e.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let i=0;i<e.length;i++){const r=e[i];let s=null;if(null!==d)s=d.getViewport(r);else {const e=h.getViewSubImage(u,r);s=e.viewport,0===i&&(t.setRenderTargetTextures(_,e.colorTexture,u.ignoreDepthValues?void 0:e.depthStencilTexture),t.setRenderTarget(_));}let a=E[i];void 0===a&&(a=new ta,a.layers.enable(i),a.viewport=new Si,E[i]=a),a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.projectionMatrix.fromArray(r.projectionMatrix),a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),a.viewport.set(s.x,s.y,s.width,s.height),0===i&&(T.matrix.copy(a.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),!0===n&&T.cameras.push(a);}const r=i.enabledFeatures;if(r&&r.includes("depth-sensing")){const n=h.getDepthInformation(e[0]);n&&n.isValid&&n.texture&&m.init(t,n,i.renderState);}}for(let t=0;t<v.length;t++){const e=x[t],n=v[t];null!==e&&void 0!==n&&n.update(e,r,l||s);}m.render(t,T),N&&N(e,r),r.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:r}),p=null;})),this.setAnimationLoop=function(t){N=t;},this.dispose=function(){};}}const Kl=new gr,$l=new ar;function Ql(t,e){function n(t,e){!0===t.matrixAutoUpdate&&t.updateMatrix(),e.value.copy(t.matrix);}function i(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,n(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,n(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,n(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===d&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,n(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===d&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,n(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,n(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);const s=e.get(r),a=s.envMap,o=s.envMapRotation;if(a&&(i.envMap.value=a,Kl.copy(o),Kl.x*=-1,Kl.y*=-1,Kl.z*=-1,a.isCubeTexture&&!1===a.isRenderTargetTexture&&(Kl.y*=-1,Kl.z*=-1),i.envMapRotation.value.setFromMatrix4($l.makeRotationFromEuler(Kl)),i.flipEnvMap.value=a.isCubeTexture&&!1===a.isRenderTargetTexture?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap){i.lightMap.value=r.lightMap;const e=!0===t._useLegacyLights?Math.PI:1;i.lightMapIntensity.value=r.lightMapIntensity*e,n(r.lightMap,i.lightMapTransform);}r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,i.aoMapTransform));}return {refreshFogUniforms:function(e,n){n.color.getRGB(e.fogColor.value,qs(t)),n.isFog?(e.fogNear.value=n.near,e.fogFar.value=n.far):n.isFogExp2&&(e.fogDensity.value=n.density);},refreshMaterialUniforms:function(t,r,s,a,o){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(t,r):r.isMeshToonMaterial?(i(t,r),function(t,e){e.gradientMap&&(t.gradientMap.value=e.gradientMap);}(t,r)):r.isMeshPhongMaterial?(i(t,r),function(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4);}(t,r)):r.isMeshStandardMaterial?(i(t,r),function(t,i){t.metalness.value=i.metalness,i.metalnessMap&&(t.metalnessMap.value=i.metalnessMap,n(i.metalnessMap,t.metalnessMapTransform));t.roughness.value=i.roughness,i.roughnessMap&&(t.roughnessMap.value=i.roughnessMap,n(i.roughnessMap,t.roughnessMapTransform));const r=e.get(i).envMap;r&&(t.envMapIntensity.value=i.envMapIntensity);}(t,r),r.isMeshPhysicalMaterial&&function(t,e,i){t.ior.value=e.ior,e.sheen>0&&(t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),t.sheenRoughness.value=e.sheenRoughness,e.sheenColorMap&&(t.sheenColorMap.value=e.sheenColorMap,n(e.sheenColorMap,t.sheenColorMapTransform)),e.sheenRoughnessMap&&(t.sheenRoughnessMap.value=e.sheenRoughnessMap,n(e.sheenRoughnessMap,t.sheenRoughnessMapTransform)));e.clearcoat>0&&(t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.clearcoatMap&&(t.clearcoatMap.value=e.clearcoatMap,n(e.clearcoatMap,t.clearcoatMapTransform)),e.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap,n(e.clearcoatRoughnessMap,t.clearcoatRoughnessMapTransform)),e.clearcoatNormalMap&&(t.clearcoatNormalMap.value=e.clearcoatNormalMap,n(e.clearcoatNormalMap,t.clearcoatNormalMapTransform),t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),e.side===d&&t.clearcoatNormalScale.value.negate()));e.iridescence>0&&(t.iridescence.value=e.iridescence,t.iridescenceIOR.value=e.iridescenceIOR,t.iridescenceThicknessMinimum.value=e.iridescenceThicknessRange[0],t.iridescenceThicknessMaximum.value=e.iridescenceThicknessRange[1],e.iridescenceMap&&(t.iridescenceMap.value=e.iridescenceMap,n(e.iridescenceMap,t.iridescenceMapTransform)),e.iridescenceThicknessMap&&(t.iridescenceThicknessMap.value=e.iridescenceThicknessMap,n(e.iridescenceThicknessMap,t.iridescenceThicknessMapTransform)));e.transmission>0&&(t.transmission.value=e.transmission,t.transmissionSamplerMap.value=i.texture,t.transmissionSamplerSize.value.set(i.width,i.height),e.transmissionMap&&(t.transmissionMap.value=e.transmissionMap,n(e.transmissionMap,t.transmissionMapTransform)),t.thickness.value=e.thickness,e.thicknessMap&&(t.thicknessMap.value=e.thicknessMap,n(e.thicknessMap,t.thicknessMapTransform)),t.attenuationDistance.value=e.attenuationDistance,t.attenuationColor.value.copy(e.attenuationColor));e.anisotropy>0&&(t.anisotropyVector.value.set(e.anisotropy*Math.cos(e.anisotropyRotation),e.anisotropy*Math.sin(e.anisotropyRotation)),e.anisotropyMap&&(t.anisotropyMap.value=e.anisotropyMap,n(e.anisotropyMap,t.anisotropyMapTransform)));t.specularIntensity.value=e.specularIntensity,t.specularColor.value.copy(e.specularColor),e.specularColorMap&&(t.specularColorMap.value=e.specularColorMap,n(e.specularColorMap,t.specularColorMapTransform));e.specularIntensityMap&&(t.specularIntensityMap.value=e.specularIntensityMap,n(e.specularIntensityMap,t.specularIntensityMapTransform));}(t,r,o)):r.isMeshMatcapMaterial?(i(t,r),function(t,e){e.matcap&&(t.matcap.value=e.matcap);}(t,r)):r.isMeshDepthMaterial?i(t,r):r.isMeshDistanceMaterial?(i(t,r),function(t,n){const i=e.get(n).light;t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),t.nearDistance.value=i.shadow.camera.near,t.farDistance.value=i.shadow.camera.far;}(t,r)):r.isMeshNormalMaterial?i(t,r):r.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,e.map&&(t.map.value=e.map,n(e.map,t.mapTransform));}(t,r),r.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale;}(t,r)):r.isPointsMaterial?function(t,e,i,r){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*i,t.scale.value=.5*r,e.map&&(t.map.value=e.map,n(e.map,t.uvTransform));e.alphaMap&&(t.alphaMap.value=e.alphaMap,n(e.alphaMap,t.alphaMapTransform));e.alphaTest>0&&(t.alphaTest.value=e.alphaTest);}(t,r,s,a):r.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,e.map&&(t.map.value=e.map,n(e.map,t.mapTransform));e.alphaMap&&(t.alphaMap.value=e.alphaMap,n(e.alphaMap,t.alphaMapTransform));e.alphaTest>0&&(t.alphaTest.value=e.alphaTest);}(t,r):r.isShadowMaterial?(t.color.value.copy(r.color),t.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1);}}}function tc(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(t,e,n,i){const r=t.value,s=e+"_"+n;if(void 0===i[s])return i[s]="number"==typeof r||"boolean"==typeof r?r:r.clone(),!0;{const t=i[s];if("number"==typeof r||"boolean"==typeof r){if(t!==r)return i[s]=r,!0}else if(!1===t.equals(r))return t.copy(r),!0}return !1}function c(t){const e={boundary:0,storage:0};return "number"==typeof t||"boolean"==typeof t?(e.boundary=4,e.storage=4):t.isVector2?(e.boundary=8,e.storage=8):t.isVector3||t.isColor?(e.boundary=16,e.storage=12):t.isVector4?(e.boundary=16,e.storage=16):t.isMatrix3?(e.boundary=48,e.storage=48):t.isMatrix4?(e.boundary=64,e.storage=64):t.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",t),e}function h(e){const n=e.target;n.removeEventListener("dispose",h);const i=a.indexOf(n.__bindingPointIndex);a.splice(i,1),t.deleteBuffer(r[n.id]),delete r[n.id],delete s[n.id];}return {bind:function(t,e){const n=e.program;i.uniformBlockBinding(t,n);},update:function(n,u){let d=r[n.id];void 0===d&&(!function(t){const e=t.uniforms;let n=0;const i=16;for(let t=0,r=e.length;t<r;t++){const r=Array.isArray(e[t])?e[t]:[e[t]];for(let t=0,e=r.length;t<e;t++){const e=r[t],s=Array.isArray(e.value)?e.value:[e.value];for(let t=0,r=s.length;t<r;t++){const r=c(s[t]),a=n%i;0!==a&&i-a<r.boundary&&(n+=i-a),e.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),e.__offset=n,n+=r.storage;}}}const r=n%i;r>0&&(n+=i-r);t.__size=n,t.__cache={};}(n),d=function(e){const n=function(){for(let t=0;t<o;t++)if(-1===a.indexOf(t))return a.push(t),t;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();e.__bindingPointIndex=n;const i=t.createBuffer(),r=e.__size,s=e.usage;return t.bindBuffer(t.UNIFORM_BUFFER,i),t.bufferData(t.UNIFORM_BUFFER,r,s),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,n,i),i}(n),r[n.id]=d,n.addEventListener("dispose",h));const p=u.program;i.updateUBOMapping(n,p);const m=e.render.frame;s[n.id]!==m&&(!function(e){const n=r[e.id],i=e.uniforms,s=e.__cache;t.bindBuffer(t.UNIFORM_BUFFER,n);for(let e=0,n=i.length;e<n;e++){const n=Array.isArray(i[e])?i[e]:[i[e]];for(let i=0,r=n.length;i<r;i++){const r=n[i];if(!0===l(r,e,i,s)){const e=r.__offset,n=Array.isArray(r.value)?r.value:[r.value];let i=0;for(let s=0;s<n.length;s++){const a=n[s],o=c(a);"number"==typeof a||"boolean"==typeof a?(r.__data[0]=a,t.bufferSubData(t.UNIFORM_BUFFER,e+i,r.__data)):a.isMatrix3?(r.__data[0]=a.elements[0],r.__data[1]=a.elements[1],r.__data[2]=a.elements[2],r.__data[3]=0,r.__data[4]=a.elements[3],r.__data[5]=a.elements[4],r.__data[6]=a.elements[5],r.__data[7]=0,r.__data[8]=a.elements[6],r.__data[9]=a.elements[7],r.__data[10]=a.elements[8],r.__data[11]=0):(a.toArray(r.__data,i),i+=o.storage/Float32Array.BYTES_PER_ELEMENT);}t.bufferSubData(t.UNIFORM_BUFFER,e,r.__data);}}}t.bindBuffer(t.UNIFORM_BUFFER,null);}(n),s[n.id]=m);},dispose:function(){for(const e in r)t.deleteBuffer(r[e]);a=[],r={},s={};}}}class ec{constructor(e={}){const{canvas:n=si(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;let m;this.isWebGLRenderer=!0,m=null!==i?i.getContextAttributes().alpha:a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,v=null;const x=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this._useLegacyLights=!1,this.toneMapping=K,this.toneMappingExposure=1;const M=this;let S=!1,b=0,E=0,T=null,w=-1,A=null;const R=new Si,C=new Si;let P=null;const L=new Zr(0);let I=0,U=n.width,N=n.height,D=1,O=null,F=null;const B=new Si(0,0,U,N),z=new Si(0,0,U,N);let H=!1;const k=new ua;let V=!1,G=!1,W=null;const X=new ar,j=new $n,q=new Pi,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return null===T?D:1}let J,$,Q,tt,et,nt,it,rt,st,at,ot,lt,ct,ht,ut,dt,pt,mt,ft,gt,_t,vt,xt,yt,Mt=i;function St(t,e){for(let i=0;i<t.length;i++){const r=t[i],s=n.getContext(r,e);if(null!==s)return s}return null}try{const e={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${t}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",Pt,!1),null===Mt){const t=["webgl2","webgl","experimental-webgl"];if(!0===M.isWebGL1Renderer&&t.shift(),Mt=St(t,e),null===Mt)throw St(t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}"undefined"!=typeof WebGLRenderingContext&&Mt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),void 0===Mt.getShaderPrecisionFormat&&(Mt.getShaderPrecisionFormat=function(){return {rangeMin:1,rangeMax:1,precision:1}});}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function bt(){J=new Xa(Mt),$=new Ea(Mt,J,e),J.init($),vt=new Wl(Mt,J,$),Q=new Vl(Mt,J,$),tt=new Ya(Mt),et=new Rl,nt=new Gl(Mt,J,Q,et,$,vt,tt),it=new wa(M),rt=new Wa(M),st=new pa(Mt,$),xt=new Sa(Mt,J,st,$),at=new ja(Mt,st,tt,xt),ot=new $a(Mt,at,st,tt),ft=new Ka(Mt,$,nt),dt=new Ta(et),lt=new Al(M,it,rt,J,$,xt,dt),ct=new Ql(M,et),ht=new Il,ut=new Bl(J,$),mt=new Ma(M,it,rt,Q,ot,m,l),pt=new kl(M,ot,$),yt=new tc(Mt,tt,$,Q),gt=new ba(Mt,J,tt,$),_t=new qa(Mt,J,tt,$),tt.programs=lt.programs,M.capabilities=$,M.extensions=J,M.properties=et,M.renderLists=ht,M.shadowMap=pt,M.state=Q,M.info=tt;}bt();const Tt=new Jl(M,Mt);function At(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0;}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const t=tt.autoReset,e=pt.enabled,n=pt.autoUpdate,i=pt.needsUpdate,r=pt.type;bt(),tt.autoReset=t,pt.enabled=e,pt.autoUpdate=n,pt.needsUpdate=i,pt.type=r;}function Pt(t){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",t.statusMessage);}function Ft(t){const e=t.target;e.removeEventListener("dispose",Ft),function(t){((function(t){const e=et.get(t).programs;void 0!==e&&(e.forEach((function(t){lt.releaseProgram(t);})),t.isShaderMaterial&&lt.releaseShaderCache(t));}))(t),et.remove(t);}(e);}function zt(t,e,n){!0===t.transparent&&2===t.side&&!1===t.forceSinglePass?(t.side=d,t.needsUpdate=!0,Kt(t,e,n),t.side=u,t.needsUpdate=!0,Kt(t,e,n),t.side=2):Kt(t,e,n);}this.xr=Tt,this.getContext=function(){return Mt},this.getContextAttributes=function(){return Mt.getContextAttributes()},this.forceContextLoss=function(){const t=J.get("WEBGL_lose_context");t&&t.loseContext();},this.forceContextRestore=function(){const t=J.get("WEBGL_lose_context");t&&t.restoreContext();},this.getPixelRatio=function(){return D},this.setPixelRatio=function(t){void 0!==t&&(D=t,this.setSize(U,N,!1));},this.getSize=function(t){return t.set(U,N)},this.setSize=function(t,e,i=!0){Tt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(U=t,N=e,n.width=Math.floor(t*D),n.height=Math.floor(e*D),!0===i&&(n.style.width=t+"px",n.style.height=e+"px"),this.setViewport(0,0,t,e));},this.getDrawingBufferSize=function(t){return t.set(U*D,N*D).floor()},this.setDrawingBufferSize=function(t,e,i){U=t,N=e,D=i,n.width=Math.floor(t*i),n.height=Math.floor(e*i),this.setViewport(0,0,t,e);},this.getCurrentViewport=function(t){return t.copy(R)},this.getViewport=function(t){return t.copy(B)},this.setViewport=function(t,e,n,i){t.isVector4?B.set(t.x,t.y,t.z,t.w):B.set(t,e,n,i),Q.viewport(R.copy(B).multiplyScalar(D).round());},this.getScissor=function(t){return t.copy(z)},this.setScissor=function(t,e,n,i){t.isVector4?z.set(t.x,t.y,t.z,t.w):z.set(t,e,n,i),Q.scissor(C.copy(z).multiplyScalar(D).round());},this.getScissorTest=function(){return H},this.setScissorTest=function(t){Q.setScissorTest(H=t);},this.setOpaqueSort=function(t){O=t;},this.setTransparentSort=function(t){F=t;},this.getClearColor=function(t){return t.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments);},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments);},this.clear=function(t=!0,e=!0,n=!0){let i=0;if(t){let t=!1;if(null!==T){const e=T.texture.format;t=e===qt||e===jt||e===Wt;}if(t){const t=T.texture.type,e=t===wt||t===Lt||t===Ct||t===Ot||t===Nt||t===Dt,n=mt.getClearColor(),i=mt.getClearAlpha(),r=n.r,s=n.g,a=n.b;e?(f[0]=r,f[1]=s,f[2]=a,f[3]=i,Mt.clearBufferuiv(Mt.COLOR,0,f)):(g[0]=r,g[1]=s,g[2]=a,g[3]=i,Mt.clearBufferiv(Mt.COLOR,0,g));}else i|=Mt.COLOR_BUFFER_BIT;}e&&(i|=Mt.DEPTH_BUFFER_BIT),n&&(i|=Mt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Mt.clear(i);},this.clearColor=function(){this.clear(!0,!1,!1);},this.clearDepth=function(){this.clear(!1,!0,!1);},this.clearStencil=function(){this.clear(!1,!1,!0);},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",Pt,!1),ht.dispose(),ut.dispose(),et.dispose(),it.dispose(),rt.dispose(),ot.dispose(),xt.dispose(),yt.dispose(),lt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",kt),Tt.removeEventListener("sessionend",Vt),W&&(W.dispose(),W=null),Gt.stop();},this.renderBufferDirect=function(t,e,n,i,r,s){null===e&&(e=Y);const a=r.isMesh&&r.matrixWorld.determinant()<0,o=function(t,e,n,i,r){!0!==e.isScene&&(e=Y);nt.resetTextureUnits();const s=e.fog,a=i.isMeshStandardMaterial?e.environment:null,o=null===T?M.outputColorSpace:!0===T.isXRRenderTarget?T.texture.colorSpace:je,l=(i.isMeshStandardMaterial?rt:it).get(i.envMap||a),c=!0===i.vertexColors&&!!n.attributes.color&&4===n.attributes.color.itemSize,h=!!n.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),u=!!n.morphAttributes.position,d=!!n.morphAttributes.normal,p=!!n.morphAttributes.color;let m=K;i.toneMapped&&(null!==T&&!0!==T.isXRRenderTarget||(m=M.toneMapping));const f=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=void 0!==f?f.length:0,_=et.get(i),x=v.state.lights;if(!0===V&&(!0===G||t!==A)){const e=t===A&&i.id===w;dt.setState(i,t,e);}let y=!1;i.version===_.__version?_.needsLights&&_.lightsStateVersion!==x.state.version||_.outputColorSpace!==o||r.isBatchedMesh&&!1===_.batching?y=!0:r.isBatchedMesh||!0!==_.batching?r.isInstancedMesh&&!1===_.instancing?y=!0:r.isInstancedMesh||!0!==_.instancing?r.isSkinnedMesh&&!1===_.skinning?y=!0:r.isSkinnedMesh||!0!==_.skinning?r.isInstancedMesh&&!0===_.instancingColor&&null===r.instanceColor||r.isInstancedMesh&&!1===_.instancingColor&&null!==r.instanceColor||r.isInstancedMesh&&!0===_.instancingMorph&&null===r.morphTexture||r.isInstancedMesh&&!1===_.instancingMorph&&null!==r.morphTexture||_.envMap!==l||!0===i.fog&&_.fog!==s?y=!0:void 0===_.numClippingPlanes||_.numClippingPlanes===dt.numPlanes&&_.numIntersection===dt.numIntersection?(_.vertexAlphas!==c||_.vertexTangents!==h||_.morphTargets!==u||_.morphNormals!==d||_.morphColors!==p||_.toneMapping!==m||!0===$.isWebGL2&&_.morphTargetsCount!==g)&&(y=!0):y=!0:y=!0:y=!0:y=!0:(y=!0,_.__version=i.version);let S=_.currentProgram;!0===y&&(S=Kt(i,e,r));let b=!1,E=!1,R=!1;const C=S.getUniforms(),P=_.uniforms;Q.useProgram(S.program)&&(b=!0,E=!0,R=!0);i.id!==w&&(w=i.id,E=!0);if(b||A!==t){C.setValue(Mt,"projectionMatrix",t.projectionMatrix),C.setValue(Mt,"viewMatrix",t.matrixWorldInverse);const e=C.map.cameraPosition;void 0!==e&&e.setValue(Mt,q.setFromMatrixPosition(t.matrixWorld)),$.logarithmicDepthBuffer&&C.setValue(Mt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&C.setValue(Mt,"isOrthographic",!0===t.isOrthographicCamera),A!==t&&(A=t,E=!0,R=!0);}if(r.isSkinnedMesh){C.setOptional(Mt,r,"bindMatrix"),C.setOptional(Mt,r,"bindMatrixInverse");const t=r.skeleton;t&&($.floatVertexTextures?(null===t.boneTexture&&t.computeBoneTexture(),C.setValue(Mt,"boneTexture",t.boneTexture,nt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));}r.isBatchedMesh&&(C.setOptional(Mt,r,"batchingTexture"),C.setValue(Mt,"batchingTexture",r._matricesTexture,nt));const L=n.morphAttributes;(void 0!==L.position||void 0!==L.normal||void 0!==L.color&&!0===$.isWebGL2)&&ft.update(r,n,S);(E||_.receiveShadow!==r.receiveShadow)&&(_.receiveShadow=r.receiveShadow,C.setValue(Mt,"receiveShadow",r.receiveShadow));i.isMeshGouraudMaterial&&null!==i.envMap&&(P.envMap.value=l,P.flipEnvMap.value=l.isCubeTexture&&!1===l.isRenderTargetTexture?-1:1);E&&(C.setValue(Mt,"toneMappingExposure",M.toneMappingExposure),_.needsLights&&(U=R,(I=P).ambientLightColor.needsUpdate=U,I.lightProbe.needsUpdate=U,I.directionalLights.needsUpdate=U,I.directionalLightShadows.needsUpdate=U,I.pointLights.needsUpdate=U,I.pointLightShadows.needsUpdate=U,I.spotLights.needsUpdate=U,I.spotLightShadows.needsUpdate=U,I.rectAreaLights.needsUpdate=U,I.hemisphereLights.needsUpdate=U),s&&!0===i.fog&&ct.refreshFogUniforms(P,s),ct.refreshMaterialUniforms(P,i,D,N,W),sl.upload(Mt,$t(_),P,nt));var I,U;i.isShaderMaterial&&!0===i.uniformsNeedUpdate&&(sl.upload(Mt,$t(_),P,nt),i.uniformsNeedUpdate=!1);i.isSpriteMaterial&&C.setValue(Mt,"center",r.center);if(C.setValue(Mt,"modelViewMatrix",r.modelViewMatrix),C.setValue(Mt,"normalMatrix",r.normalMatrix),C.setValue(Mt,"modelMatrix",r.matrixWorld),i.isShaderMaterial||i.isRawShaderMaterial){const t=i.uniformsGroups;for(let e=0,n=t.length;e<n;e++)if($.isWebGL2){const n=t[e];yt.update(n,S),yt.bind(n,S);}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");}return S}(t,e,n,i,r);Q.setMaterial(i,a);let l=n.index,c=1;if(!0===i.wireframe){if(l=at.getWireframeAttribute(n),void 0===l)return;c=2;}const h=n.drawRange,u=n.attributes.position;let d=h.start*c,p=(h.start+h.count)*c;null!==s&&(d=Math.max(d,s.start*c),p=Math.min(p,(s.start+s.count)*c)),null!==l?(d=Math.max(d,0),p=Math.min(p,l.count)):null!=u&&(d=Math.max(d,0),p=Math.min(p,u.count));const m=p-d;if(m<0||m===1/0)return;let f;xt.setup(r,i,o,n,l);let g=gt;if(null!==l&&(f=st.get(l),g=_t,g.setIndex(f)),r.isMesh)!0===i.wireframe?(Q.setLineWidth(i.wireframeLinewidth*Z()),g.setMode(Mt.LINES)):g.setMode(Mt.TRIANGLES);else if(r.isLine){let t=i.linewidth;void 0===t&&(t=1),Q.setLineWidth(t*Z()),r.isLineSegments?g.setMode(Mt.LINES):r.isLineLoop?g.setMode(Mt.LINE_LOOP):g.setMode(Mt.LINE_STRIP);}else r.isPoints?g.setMode(Mt.POINTS):r.isSprite&&g.setMode(Mt.TRIANGLES);if(r.isBatchedMesh)g.renderMultiDraw(r._multiDrawStarts,r._multiDrawCounts,r._multiDrawCount);else if(r.isInstancedMesh)g.renderInstances(d,m,r.count);else if(n.isInstancedBufferGeometry){const t=void 0!==n._maxInstanceCount?n._maxInstanceCount:1/0,e=Math.min(n.instanceCount,t);g.renderInstances(d,m,e);}else g.render(d,m);},this.compile=function(t,e,n=null){null===n&&(n=t),v=ut.get(n),v.init(),y.push(v),n.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(v.pushLight(t),t.castShadow&&v.pushShadow(t));})),t!==n&&t.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(v.pushLight(t),t.castShadow&&v.pushShadow(t));})),v.setupLights(M._useLegacyLights);const i=new Set;return t.traverse((function(t){const e=t.material;if(e)if(Array.isArray(e))for(let r=0;r<e.length;r++){const s=e[r];zt(s,n,t),i.add(s);}else zt(e,n,t),i.add(e);})),y.pop(),v=null,i},this.compileAsync=function(t,e,n=null){const i=this.compile(t,e,n);return new Promise((e=>{function n(){i.forEach((function(t){et.get(t).currentProgram.isReady()&&i.delete(t);})),0!==i.size?setTimeout(n,10):e(t);}null!==J.get("KHR_parallel_shader_compile")?n():setTimeout(n,10);}))};let Ht=null;function kt(){Gt.stop();}function Vt(){Gt.start();}const Gt=new da;function Xt(t,e,n,i){if(!1===t.visible)return;if(t.layers.test(e.layers))if(t.isGroup)n=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(e);else if(t.isLight)v.pushLight(t),t.castShadow&&v.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||k.intersectsSprite(t)){i&&q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(X);const e=ot.update(t),r=t.material;r.visible&&_.push(t,e,r,n,q.z,null);}}else if((t.isMesh||t.isLine||t.isPoints)&&(!t.frustumCulled||k.intersectsObject(t))){const e=ot.update(t),r=t.material;if(i&&(void 0!==t.boundingSphere?(null===t.boundingSphere&&t.computeBoundingSphere(),q.copy(t.boundingSphere.center)):(null===e.boundingSphere&&e.computeBoundingSphere(),q.copy(e.boundingSphere.center)),q.applyMatrix4(t.matrixWorld).applyMatrix4(X)),Array.isArray(r)){const i=e.groups;for(let s=0,a=i.length;s<a;s++){const a=i[s],o=r[a.materialIndex];o&&o.visible&&_.push(t,e,o,n,q.z,a);}}else r.visible&&_.push(t,e,r,n,q.z,null);}const r=t.children;for(let t=0,s=r.length;t<s;t++)Xt(r[t],e,n,i);}function Yt(t,e,n,i){const r=t.opaque,s=t.transmissive,a=t.transparent;v.setupLightsView(n),!0===V&&dt.setGlobalState(M.clippingPlanes,n),s.length>0&&function(t,e,n,i){const r=!0===n.isScene?n.overrideMaterial:null;if(null!==r)return;const s=$.isWebGL2;null===W&&(W=new Ei(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ut:wt,minFilter:Et,samples:s?4:0}));M.getDrawingBufferSize(j),s?W.setSize(j.x,j.y):W.setSize(Yn(j.x),Yn(j.y));const a=M.getRenderTarget();M.setRenderTarget(W),M.getClearColor(L),I=M.getClearAlpha(),I<1&&M.setClearColor(16777215,.5);M.clear();const o=M.toneMapping;M.toneMapping=K,Zt(t,n,i),nt.updateMultisampleRenderTarget(W),nt.updateRenderTargetMipmap(W);let l=!1;for(let t=0,r=e.length;t<r;t++){const r=e[t],s=r.object,a=r.geometry,o=r.material,c=r.group;if(2===o.side&&s.layers.test(i.layers)){const t=o.side;o.side=d,o.needsUpdate=!0,Jt(s,n,i,a,o,c),o.side=t,o.needsUpdate=!0,l=!0;}}!0===l&&(nt.updateMultisampleRenderTarget(W),nt.updateRenderTargetMipmap(W));M.setRenderTarget(a),M.setClearColor(L,I),M.toneMapping=o;}(r,s,e,n),i&&Q.viewport(R.copy(i)),r.length>0&&Zt(r,e,n),s.length>0&&Zt(s,e,n),a.length>0&&Zt(a,e,n),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1);}function Zt(t,e,n){const i=!0===e.isScene?e.overrideMaterial:null;for(let r=0,s=t.length;r<s;r++){const s=t[r],a=s.object,o=s.geometry,l=null===i?s.material:i,c=s.group;a.layers.test(n.layers)&&Jt(a,e,n,o,l,c);}}function Jt(t,e,n,i,r,s){t.onBeforeRender(M,e,n,i,r,s),t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),r.onBeforeRender(M,e,n,i,t,s),!0===r.transparent&&2===r.side&&!1===r.forceSinglePass?(r.side=d,r.needsUpdate=!0,M.renderBufferDirect(n,e,i,r,t,s),r.side=u,r.needsUpdate=!0,M.renderBufferDirect(n,e,i,r,t,s),r.side=2):M.renderBufferDirect(n,e,i,r,t,s),t.onAfterRender(M,e,n,i,r,s);}function Kt(t,e,n){!0!==e.isScene&&(e=Y);const i=et.get(t),r=v.state.lights,s=v.state.shadowsArray,a=r.state.version,o=lt.getParameters(t,r.state,s,e,n),l=lt.getProgramCacheKey(o);let c=i.programs;i.environment=t.isMeshStandardMaterial?e.environment:null,i.fog=e.fog,i.envMap=(t.isMeshStandardMaterial?rt:it).get(t.envMap||i.environment),i.envMapRotation=null!==i.environment&&null===t.envMap?e.environmentRotation:t.envMapRotation,void 0===c&&(t.addEventListener("dispose",Ft),c=new Map,i.programs=c);let h=c.get(l);if(void 0!==h){if(i.currentProgram===h&&i.lightsStateVersion===a)return Qt(t,o),h}else o.uniforms=lt.getUniforms(t),t.onBuild(n,o,M),t.onBeforeCompile(o,M),h=lt.acquireProgram(o,l),c.set(l,h),i.uniforms=o.uniforms;const u=i.uniforms;return (t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(u.clippingPlanes=dt.uniform),Qt(t,o),i.needsLights=function(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&!0===t.lights}(t),i.lightsStateVersion=a,i.needsLights&&(u.ambientLightColor.value=r.state.ambient,u.lightProbe.value=r.state.probe,u.directionalLights.value=r.state.directional,u.directionalLightShadows.value=r.state.directionalShadow,u.spotLights.value=r.state.spot,u.spotLightShadows.value=r.state.spotShadow,u.rectAreaLights.value=r.state.rectArea,u.ltc_1.value=r.state.rectAreaLTC1,u.ltc_2.value=r.state.rectAreaLTC2,u.pointLights.value=r.state.point,u.pointLightShadows.value=r.state.pointShadow,u.hemisphereLights.value=r.state.hemi,u.directionalShadowMap.value=r.state.directionalShadowMap,u.directionalShadowMatrix.value=r.state.directionalShadowMatrix,u.spotShadowMap.value=r.state.spotShadowMap,u.spotLightMatrix.value=r.state.spotLightMatrix,u.spotLightMap.value=r.state.spotLightMap,u.pointShadowMap.value=r.state.pointShadowMap,u.pointShadowMatrix.value=r.state.pointShadowMatrix),i.currentProgram=h,i.uniformsList=null,h}function $t(t){if(null===t.uniformsList){const e=t.currentProgram.getUniforms();t.uniformsList=sl.seqWithValue(e.seq,t.uniforms);}return t.uniformsList}function Qt(t,e){const n=et.get(t);n.outputColorSpace=e.outputColorSpace,n.batching=e.batching,n.instancing=e.instancing,n.instancingColor=e.instancingColor,n.instancingMorph=e.instancingMorph,n.skinning=e.skinning,n.morphTargets=e.morphTargets,n.morphNormals=e.morphNormals,n.morphColors=e.morphColors,n.morphTargetsCount=e.morphTargetsCount,n.numClippingPlanes=e.numClippingPlanes,n.numIntersection=e.numClipIntersection,n.vertexAlphas=e.vertexAlphas,n.vertexTangents=e.vertexTangents,n.toneMapping=e.toneMapping;}Gt.setAnimationLoop((function(t){Ht&&Ht(t);})),"undefined"!=typeof self&&Gt.setContext(self),this.setAnimationLoop=function(t){Ht=t,Tt.setAnimationLoop(t),null===t?Gt.stop():Gt.start();},Tt.addEventListener("sessionstart",kt),Tt.addEventListener("sessionend",Vt),this.render=function(t,e){if(void 0!==e&&!0!==e.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===S)return;!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),null===e.parent&&!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),!0===Tt.enabled&&!0===Tt.isPresenting&&(!0===Tt.cameraAutoUpdate&&Tt.updateCamera(e),e=Tt.getCamera()),!0===t.isScene&&t.onBeforeRender(M,t,e,T),v=ut.get(t,y.length),v.init(),y.push(v),X.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),k.setFromProjectionMatrix(X),G=this.localClippingEnabled,V=dt.init(this.clippingPlanes,G),_=ht.get(t,x.length),_.init(),x.push(_),Xt(t,e,0,M.sortObjects),_.finish(),!0===M.sortObjects&&_.sort(O,F),this.info.render.frame++,!0===V&&dt.beginShadows();const n=v.state.shadowsArray;if(pt.render(n,t,e),!0===V&&dt.endShadows(),!0===this.info.autoReset&&this.info.reset(),!1!==Tt.enabled&&!1!==Tt.isPresenting&&!1!==Tt.hasDepthSensing()||mt.render(_,t),v.setupLights(M._useLegacyLights),e.isArrayCamera){const n=e.cameras;for(let e=0,i=n.length;e<i;e++){const i=n[e];Yt(_,t,i,i.viewport);}}else Yt(_,t,e);null!==T&&(nt.updateMultisampleRenderTarget(T),nt.updateRenderTargetMipmap(T)),!0===t.isScene&&t.onAfterRender(M,t,e),xt.resetDefaultState(),w=-1,A=null,y.pop(),v=y.length>0?y[y.length-1]:null,x.pop(),_=x.length>0?x[x.length-1]:null;},this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(t,e,n){et.get(t.texture).__webglTexture=e,et.get(t.depthTexture).__webglTexture=n;const i=et.get(t);i.__hasExternalTextures=!0,i.__autoAllocateDepthBuffer=void 0===n,i.__autoAllocateDepthBuffer||!0===J.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),i.__useRenderToTexture=!1);},this.setRenderTargetFramebuffer=function(t,e){const n=et.get(t);n.__webglFramebuffer=e,n.__useDefaultFramebuffer=void 0===e;},this.setRenderTarget=function(t,e=0,n=0){T=t,b=e,E=n;let i=!0,r=null,s=!1,a=!1;if(t){const o=et.get(t);void 0!==o.__useDefaultFramebuffer?(Q.bindFramebuffer(Mt.FRAMEBUFFER,null),i=!1):void 0===o.__webglFramebuffer?nt.setupRenderTarget(t):o.__hasExternalTextures&&nt.rebindTextures(t,et.get(t.texture).__webglTexture,et.get(t.depthTexture).__webglTexture);const l=t.texture;(l.isData3DTexture||l.isDataArrayTexture||l.isCompressedArrayTexture)&&(a=!0);const c=et.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(r=Array.isArray(c[e])?c[e][n]:c[e],s=!0):r=$.isWebGL2&&t.samples>0&&!1===nt.useMultisampledRTT(t)?et.get(t).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,R.copy(t.viewport),C.copy(t.scissor),P=t.scissorTest;}else R.copy(B).multiplyScalar(D).floor(),C.copy(z).multiplyScalar(D).floor(),P=H;if(Q.bindFramebuffer(Mt.FRAMEBUFFER,r)&&$.drawBuffers&&i&&Q.drawBuffers(t,r),Q.viewport(R),Q.scissor(C),Q.setScissorTest(P),s){const i=et.get(t.texture);Mt.framebufferTexture2D(Mt.FRAMEBUFFER,Mt.COLOR_ATTACHMENT0,Mt.TEXTURE_CUBE_MAP_POSITIVE_X+e,i.__webglTexture,n);}else if(a){const i=et.get(t.texture),r=e||0;Mt.framebufferTextureLayer(Mt.FRAMEBUFFER,Mt.COLOR_ATTACHMENT0,i.__webglTexture,n||0,r);}w=-1;},this.readRenderTargetPixels=function(t,e,n,i,r,s,a){if(!t||!t.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let o=et.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&void 0!==a&&(o=o[a]),o){Q.bindFramebuffer(Mt.FRAMEBUFFER,o);try{const a=t.texture,o=a.format,l=a.type;if(o!==Bt&&vt.convert(o)!==Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const c=l===Ut&&(J.has("EXT_color_buffer_half_float")||$.isWebGL2&&J.has("EXT_color_buffer_float"));if(!(l===wt||vt.convert(l)===Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_TYPE)||l===It&&($.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float"))||c))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");e>=0&&e<=t.width-i&&n>=0&&n<=t.height-r&&Mt.readPixels(e,n,i,r,vt.convert(o),vt.convert(l),s);}finally{const t=null!==T?et.get(T).__webglFramebuffer:null;Q.bindFramebuffer(Mt.FRAMEBUFFER,t);}}},this.copyFramebufferToTexture=function(t,e,n=0){const i=Math.pow(2,-n),r=Math.floor(e.image.width*i),s=Math.floor(e.image.height*i);nt.setTexture2D(e,0),Mt.copyTexSubImage2D(Mt.TEXTURE_2D,n,0,0,t.x,t.y,r,s),Q.unbindTexture();},this.copyTextureToTexture=function(t,e,n,i=0){const r=e.image.width,s=e.image.height,a=vt.convert(n.format),o=vt.convert(n.type);nt.setTexture2D(n,0),Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL,n.flipY),Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),Mt.pixelStorei(Mt.UNPACK_ALIGNMENT,n.unpackAlignment),e.isDataTexture?Mt.texSubImage2D(Mt.TEXTURE_2D,i,t.x,t.y,r,s,a,o,e.image.data):e.isCompressedTexture?Mt.compressedTexSubImage2D(Mt.TEXTURE_2D,i,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,a,e.mipmaps[0].data):Mt.texSubImage2D(Mt.TEXTURE_2D,i,t.x,t.y,a,o,e.image),0===i&&n.generateMipmaps&&Mt.generateMipmap(Mt.TEXTURE_2D),Q.unbindTexture();},this.copyTextureToTexture3D=function(t,e,n,i,r=0){if(M.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const s=Math.round(t.max.x-t.min.x),a=Math.round(t.max.y-t.min.y),o=t.max.z-t.min.z+1,l=vt.convert(i.format),c=vt.convert(i.type);let h;if(i.isData3DTexture)nt.setTexture3D(i,0),h=Mt.TEXTURE_3D;else {if(!i.isDataArrayTexture&&!i.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");nt.setTexture2DArray(i,0),h=Mt.TEXTURE_2D_ARRAY;}Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL,i.flipY),Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),Mt.pixelStorei(Mt.UNPACK_ALIGNMENT,i.unpackAlignment);const u=Mt.getParameter(Mt.UNPACK_ROW_LENGTH),d=Mt.getParameter(Mt.UNPACK_IMAGE_HEIGHT),p=Mt.getParameter(Mt.UNPACK_SKIP_PIXELS),m=Mt.getParameter(Mt.UNPACK_SKIP_ROWS),f=Mt.getParameter(Mt.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[r]:n.image;Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH,g.width),Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT,g.height),Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS,t.min.x),Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS,t.min.y),Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES,t.min.z),n.isDataTexture||n.isData3DTexture?Mt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,g.data):i.isCompressedArrayTexture?Mt.compressedTexSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,g.data):Mt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,g),Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH,u),Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT,d),Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS,p),Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS,m),Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES,f),0===r&&i.generateMipmaps&&Mt.generateMipmap(h),Q.unbindTexture();},this.initTexture=function(t){t.isCubeTexture?nt.setTextureCube(t,0):t.isData3DTexture?nt.setTexture3D(t,0):t.isDataArrayTexture||t.isCompressedArrayTexture?nt.setTexture2DArray(t,0):nt.setTexture2D(t,0),Q.unbindTexture();},this.resetState=function(){b=0,E=0,T=null,Q.reset(),xt.reset();},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qe?"display-p3":"srgb",e.unpackColorSpace=di.workingColorSpace===Ye?"display-p3":"srgb";}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t;}}class nc extends ec{}nc.prototype.isWebGL1Renderer=!0;class sc extends Ur{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentRotation=new gr,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return null!==this.fog&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ac{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=En,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gn();}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++;}get updateRange(){return oi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e});}clearUpdateRanges(){this.updateRanges.length=0;}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Gn()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Gn()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const oc=new Pi;class lc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i;}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t;}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)oc.fromBufferAttribute(this,e),oc.applyMatrix4(t),this.setXYZ(e,oc.x,oc.y,oc.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oc.fromBufferAttribute(this,e),oc.applyNormalMatrix(t),this.setXYZ(e,oc.x,oc.y,oc.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oc.fromBufferAttribute(this,e),oc.transformDirection(t),this.setXYZ(e,oc.x,oc.y,oc.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array),i=Jn(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jn(e,this.array),n=Jn(n,this.array),i=Jn(i,this.array),r=Jn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e]);}return new os(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e]);}return {itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}new Pi;new Pi;new Pi;new $n;new $n;new ar;new Pi;new Pi;new Pi;new $n;new $n;new $n;new Pi;new Pi;const Rc=new Pi,Cc=new Si,Pc=new Si,Lc=new Pi,Ic=new ar,Uc=new Pi,Nc=new Ki,Dc=new ar,Oc=new sr;class Fc extends Vs{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=st,this.bindMatrix=new ar,this.bindMatrixInverse=new ar,this.boundingBox=null,this.boundingSphere=null;}computeBoundingBox(){const t=this.geometry;null===this.boundingBox&&(this.boundingBox=new Ui),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,Uc),this.boundingBox.expandByPoint(Uc);}computeBoundingSphere(){const t=this.geometry;null===this.boundingSphere&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,Uc),this.boundingSphere.expandByPoint(Uc);}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;void 0!==n&&(null===this.boundingSphere&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(i),!1!==t.ray.intersectsSphere(Nc)&&(Dc.copy(i).invert(),Oc.copy(t.ray).applyMatrix4(Dc),null!==this.boundingBox&&!1===Oc.intersectsBox(this.boundingBox)||this._computeIntersections(t,e,Oc)));}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert();}pose(){this.skeleton.pose();}normalizeSkinWeights(){const t=new Si,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const i=1/t.manhattanLength();i!==1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w);}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===st?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===at?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode);}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Cc.fromBufferAttribute(i.attributes.skinIndex,t),Pc.fromBufferAttribute(i.attributes.skinWeight,t),Rc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let t=0;t<4;t++){const i=Pc.getComponent(t);if(0!==i){const r=Cc.getComponent(t);Ic.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Lc.copy(Rc).applyMatrix4(Ic),i);}}return e.applyMatrix4(this.bindMatrixInverse)}}class Bc extends Ur{constructor(){super(),this.isBone=!0,this.type="Bone";}}class zc extends Mi{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,c=1003,h,u){super(null,s,a,o,l,c,i,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1;}}const Hc=new ar,kc=new ar;class Vc{constructor(t=[],e=[]){this.uuid=Gn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init();}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),0===e.length)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++)this.boneInverses.push(new ar);}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const e=new ar;this.bones[t]&&e.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(e);}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&e.matrixWorld.copy(this.boneInverses[t]).invert();}for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale));}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let i=0,r=t.length;i<r;i++){const r=t[i]?t[i].matrixWorld:kc;Hc.multiplyMatrices(r,e[i]),Hc.toArray(n,16*i);}null!==i&&(i.needsUpdate=!0);}clone(){return new Vc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new zc(e,t,t,Bt,It);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null);}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const i=t.bones[n];let r=e[i];void 0===r&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),r=new Bc),this.bones.push(r),this.boneInverses.push((new ar).fromArray(t.boneInverses[n]));}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const r=e[i];t.bones.push(r.uuid);const s=n[i];t.boneInverses.push(s.toArray());}return t}}class Gc extends os{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i;}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wc=new ar,Xc=new ar,jc=[],qc=new Ui,Yc=new ar,Zc=new Vs,Jc=new Ki;class Kc extends Vs{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let t=0;t<n;t++)this.setMatrixAt(t,Yc);}computeBoundingBox(){const t=this.geometry,e=this.count;null===this.boundingBox&&(this.boundingBox=new Ui),null===t.boundingBox&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wc),qc.copy(t.boundingBox).applyMatrix4(Wc),this.boundingBox.union(qc);}computeBoundingSphere(){const t=this.geometry,e=this.count;null===this.boundingSphere&&(this.boundingSphere=new Ki),null===t.boundingSphere&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wc),Jc.copy(t.boundingSphere).applyMatrix4(Wc),this.boundingSphere.union(Jc);}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t);}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t);}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=t*(n.length+1)+1;for(let t=0;t<n.length;t++)n[t]=i[r+t];}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Zc.geometry=this.geometry,Zc.material=this.material,void 0!==Zc.material&&(null===this.boundingSphere&&this.computeBoundingSphere(),Jc.copy(this.boundingSphere),Jc.applyMatrix4(n),!1!==t.ray.intersectsSphere(Jc)))for(let r=0;r<i;r++){this.getMatrixAt(r,Wc),Xc.multiplyMatrices(n,Wc),Zc.matrixWorld=Xc,Zc.raycast(t,jc);for(let t=0,n=jc.length;t<n;t++){const n=jc[t];n.instanceId=r,n.object=this,e.push(n);}jc.length=0;}}setColorAt(t,e){null===this.instanceColor&&(this.instanceColor=new Gc(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t);}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t);}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;null===this.morphTexture&&(this.morphTexture=new zc(new Float32Array(i*this.count),i,this.count,Gt,It));const r=this.morphTexture.source.data.data;let s=0;for(let t=0;t<n.length;t++)s+=n[t];const a=this.geometry.morphTargetsRelative?1:1-s,o=i*t;r[o]=a,r.set(n,o+1);}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"});}}new ar;new ar;new ar;new ar;new ua;new Ui;new Ki;new Pi;new Vs;class fh extends $r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zr(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gh=new Pi,_h=new Pi,vh=new ar,xh=new sr,yh=new Ki;class Mh extends Ur{constructor(t=new Es,e=new fh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets();}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,n=[0];for(let t=1,i=e.count;t<i;t++)gh.fromBufferAttribute(e,t-1),_h.fromBufferAttribute(e,t),n[t]=n[t-1],n[t]+=gh.distanceTo(_h);t.setAttribute("lineDistance",new gs(n,1));}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(null===n.boundingSphere&&n.computeBoundingSphere(),yh.copy(n.boundingSphere),yh.applyMatrix4(i),yh.radius+=r,!1===t.ray.intersectsSphere(yh))return;vh.copy(i).invert(),xh.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new Pi,c=new Pi,h=new Pi,u=new Pi,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(null!==p){for(let n=Math.max(0,s.start),i=Math.min(p.count,s.start+s.count)-1;n<i;n+=d){const i=p.getX(n),r=p.getX(n+1);l.fromBufferAttribute(m,i),c.fromBufferAttribute(m,r);if(xh.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const s=t.ray.origin.distanceTo(u);s<t.near||s>t.far||e.push({distance:s,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this});}}else {for(let n=Math.max(0,s.start),i=Math.min(m.count,s.start+s.count)-1;n<i;n+=d){l.fromBufferAttribute(m,n),c.fromBufferAttribute(m,n+1);if(xh.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const i=t.ray.origin.distanceTo(u);i<t.near||i>t.far||e.push({distance:i,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this});}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t;}}}}}const Sh=new Pi,bh=new Pi;class Eh extends Mh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments";}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,n=[];for(let t=0,i=e.count;t<i;t+=2)Sh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,t+1),n[t]=0===t?0:n[t-1],n[t+1]=n[t]+Sh.distanceTo(bh);t.setAttribute("lineDistance",new gs(n,1));}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Th extends Mh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop";}}class wh extends $r{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zr(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ah=new ar,Rh=new sr,Ch=new Ki,Ph=new Pi;class Lh extends Ur{constructor(t=new Es,e=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets();}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(null===n.boundingSphere&&n.computeBoundingSphere(),Ch.copy(n.boundingSphere),Ch.applyMatrix4(i),Ch.radius+=r,!1===t.ray.intersectsSphere(Ch))return;Ah.copy(i).invert(),Rh.copy(t.ray).applyMatrix4(Ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(null!==l){for(let n=Math.max(0,s.start),r=Math.min(l.count,s.start+s.count);n<r;n++){const r=l.getX(n);Ph.fromBufferAttribute(c,r),Ih(Ph,r,o,i,t,e,this);}}else {for(let n=Math.max(0,s.start),r=Math.min(c.count,s.start+s.count);n<r;n++)Ph.fromBufferAttribute(c,n),Ih(Ph,n,o,i,t,e,this);}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t;}}}}}function Ih(t,e,n,i,r,s,a){const o=Rh.distanceSqToPoint(t);if(o<n){const n=new Pi;Rh.closestPointToPoint(t,n),n.applyMatrix4(i);const l=r.ray.origin.distanceTo(n);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:n,index:e,face:null,object:a});}}new Pi;new Pi;new Pi;new Pi;new Wr;class hd extends $r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zr(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ud extends hd{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $n(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t);}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zr(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zr(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zr(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t);}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t;}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t;}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t;}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t;}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t;}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function vd(t,e,n){return !t||!n&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)}function xd(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function yd(t){const e=t.length,n=new Array(e);for(let t=0;t!==e;++t)n[t]=t;return n.sort((function(e,n){return t[e]-t[n]})),n}function Md(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){const i=n[s]*e;for(let n=0;n!==e;++n)r[a++]=t[i+n];}return r}function Sd(t,e,n,i){let r=1,s=t[0];for(;void 0!==s&&void 0===s[i];)s=t[r++];if(void 0===s)return;let a=s[i];if(void 0!==a)if(Array.isArray(a))do{a=s[i],void 0!==a&&(e.push(s.time),n.push.apply(n,a)),s=t[r++];}while(void 0!==s);else if(void 0!==a.toArray)do{a=s[i],void 0!==a&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];}while(void 0!==s);else do{a=s[i],void 0!==a&&(e.push(s.time),n.push(a)),s=t[r++];}while(void 0!==s)}class Ed{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={};}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let s=n+2;;){if(void 0===i){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===s)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(t>=r)break t;{const a=e[1];t<a&&(n=2,r=a);for(let s=n-2;;){if(void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(n===s)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;}}for(;n<s;){const i=n+s>>>1;t<e[i]?s=i:n=i+1;}if(i=e[n],r=e[n-1],void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===i)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i);}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let t=0;t!==i;++t)e[t]=n[r+t];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Td extends Ed{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie};}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(void 0===a)switch(this.getSettings_().endingStart){case Ue:r=t,a=2*e-n;break;case Ne:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n;}if(void 0===o)switch(this.getSettings_().endingEnd){case Ue:s=t,o=2*n-e;break;case Ne:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e;}const l=.5*(n-e),c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c;}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),m=p*p,f=m*p,g=-u*f+2*u*m-u*p,_=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,v=(-1-d)*f+(1.5+d)*m+.5*p,x=d*f-d*m;for(let t=0;t!==a;++t)r[t]=g*s[c+t]+_*s[l+t]+v*s[o+t]+x*s[h+t];return r}}class wd extends Ed{constructor(t,e,n,i){super(t,e,n,i);}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let t=0;t!==a;++t)r[t]=s[l+t]*h+s[o+t]*c;return r}}class Ad extends Ed{constructor(t,e,n,i){super(t,e,n,i);}interpolate_(t){return this.copySampleValue_(t-1)}}class Rd{constructor(t,e,n,i){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vd(e,this.TimeBufferType),this.values=vd(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation);}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else {n={name:t.name,times:vd(t.times,Array),values:vd(t.values,Array)};const e=t.getInterpolation();e!==t.DefaultInterpolation&&(n.interpolation=e);}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ad(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Td(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ce:e=this.InterpolantFactoryMethodDiscrete;break;case Pe:e=this.InterpolantFactoryMethodLinear;break;case Le:e=this.InterpolantFactoryMethodSmooth;}if(void 0===e){const e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(e);this.setInterpolation(this.DefaultInterpolation);}return console.warn("THREE.KeyframeTrack:",e),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ce;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Le}}getValueSize(){return this.values.length/this.times.length}shift(t){if(0!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;}return this}scale(t){if(1!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;-1!==s&&n[s]>e;)--s;if(++s,0!==r||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const t=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*t,s*t);}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let e=0;e!==r;e++){const i=n[e];if("number"==typeof i&&isNaN(i)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,e,i),t=!1;break}if(null!==s&&s>i){console.error("THREE.KeyframeTrack: Out of order keys.",this,e,i,s),t=!1;break}s=i;}if(void 0!==i&&xd(i))for(let e=0,n=i.length;e!==n;++e){const n=i[e];if(isNaN(n)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,e,n),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Le,r=t.length-1;let s=1;for(let a=1;a<r;++a){let r=!1;const o=t[a];if(o!==t[a+1]&&(1!==a||o!==t[0]))if(i)r=!0;else {const t=a*n,i=t-n,s=t+n;for(let a=0;a!==n;++a){const n=e[t+a];if(n!==e[i+a]||n!==e[s+a]){r=!0;break}}}if(r){if(a!==s){t[s]=t[a];const i=a*n,r=s*n;for(let t=0;t!==n;++t)e[r+t]=e[i+t];}++s;}}if(r>0){t[s]=t[r];for(let t=r*n,i=s*n,a=0;a!==n;++a)e[i+a]=e[t+a];++s;}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=new(this.constructor)(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Rd.prototype.TimeBufferType=Float32Array,Rd.prototype.ValueBufferType=Float32Array,Rd.prototype.DefaultInterpolation=Pe;class Cd extends Rd{}Cd.prototype.ValueTypeName="bool",Cd.prototype.ValueBufferType=Array,Cd.prototype.DefaultInterpolation=Ce,Cd.prototype.InterpolantFactoryMethodLinear=void 0,Cd.prototype.InterpolantFactoryMethodSmooth=void 0;class Pd extends Rd{}Pd.prototype.ValueTypeName="color";class Ld extends Rd{}Ld.prototype.ValueTypeName="number";class Id extends Ed{constructor(t,e,n,i){super(t,e,n,i);}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let t=l+a;l!==t;l+=4)Ci.slerpFlat(r,0,s,l-a,s,l,o);return r}}class Ud extends Rd{InterpolantFactoryMethodLinear(t){return new Id(this.times,this.values,this.getValueSize(),t)}}Ud.prototype.ValueTypeName="quaternion",Ud.prototype.DefaultInterpolation=Pe,Ud.prototype.InterpolantFactoryMethodSmooth=void 0;class Nd extends Rd{}Nd.prototype.ValueTypeName="string",Nd.prototype.ValueBufferType=Array,Nd.prototype.DefaultInterpolation=Ce,Nd.prototype.InterpolantFactoryMethodLinear=void 0,Nd.prototype.InterpolantFactoryMethodSmooth=void 0;class Dd extends Rd{}Dd.prototype.ValueTypeName="vector";class Od{constructor(t,e=-1,n,i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Gn(),this.duration<0&&this.resetDuration();}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let t=0,r=n.length;t!==r;++t)e.push(Fd(n[t]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let t=0,i=n.length;t!==i;++t)e.push(Rd.toJSON(n[t]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,s=[];for(let t=0;t<r;t++){let a=[],o=[];a.push((t+r-1)%r,t,(t+1)%r),o.push(0,1,0);const l=yd(a);a=Md(a,1,l),o=Md(o,1,l),i||0!==a[0]||(a.push(r),o.push(o[0])),s.push(new Ld(".morphTargetInfluences["+e[t].name+"]",a,o).scale(1/n));}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const e=t;n=e.geometry&&e.geometry.animations||e.animations;}for(let t=0;t<n.length;t++)if(n[t].name===e)return n[t];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let e=0,n=t.length;e<n;e++){const n=t[e],s=n.name.match(r);if(s&&s.length>1){const t=s[1];let e=i[t];e||(i[t]=e=[]),e.push(n);}}const s=[];for(const t in i)s.push(this.CreateFromMorphTargetSequence(t,i[t],e,n));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(t,e,n,i,r){if(0!==n.length){const s=[],a=[];Sd(n,s,a,i),0!==s.length&&r.push(new t(e,s,a));}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let o=t.length||-1;const l=t.hierarchy||[];for(let t=0;t<l.length;t++){const r=l[t].keys;if(r&&0!==r.length)if(r[0].morphTargets){const t={};let e;for(e=0;e<r.length;e++)if(r[e].morphTargets)for(let n=0;n<r[e].morphTargets.length;n++)t[r[e].morphTargets[n]]=-1;for(const n in t){const t=[],s=[];for(let i=0;i!==r[e].morphTargets.length;++i){const i=r[e];t.push(i.time),s.push(i.morphTarget===n?1:0);}i.push(new Ld(".morphTargetInfluence["+n+"]",t,s));}o=t.length*s;}else {const s=".bones["+e[t].name+"]";n(Dd,s+".position",r,"pos",i),n(Ud,s+".quaternion",r,"rot",i),n(Dd,s+".scale",r,"scl",i);}}if(0===i.length)return null;return new this(r,o,i,a)}resetDuration(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){const n=this.tracks[e];t=Math.max(t,n.times[n.times.length-1]);}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fd(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ld;case"vector":case"vector2":case"vector3":case"vector4":return Dd;case"color":return Pd;case"quaternion":return Ud;case"bool":case"boolean":return Cd;case"string":return Nd}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type);if(void 0===t.times){const e=[],n=[];Sd(t.keys,e,n,"value"),t.times=e,t.values=n;}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const Bd={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e);},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t];},clear:function(){this.files={};}};class zd{constructor(t,e,n){const i=this;let r,s=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){o++,!1===s&&void 0!==i.onStart&&i.onStart(t,a,o),s=!0;},this.itemEnd=function(t){a++,void 0!==i.onProgress&&i.onProgress(t,a,o),a===o&&(s=!1,void 0!==i.onLoad&&i.onLoad());},this.itemError=function(t){void 0!==i.onError&&i.onError(t);},this.resolveURL=function(t){return r?r(t):t},this.setURLModifier=function(t){return r=t,this},this.addHandler=function(t,e){return l.push(t,e),this},this.removeHandler=function(t){const e=l.indexOf(t);return -1!==e&&l.splice(e,2),this},this.getHandler=function(t){for(let e=0,n=l.length;e<n;e+=2){const n=l[e],i=l[e+1];if(n.global&&(n.lastIndex=0),n.test(t))return i}return null};}}const Hd=new zd;class kd{constructor(t){this.manager=void 0!==t?t:Hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={};}load(){}loadAsync(t,e){const n=this;return new Promise((function(i,r){n.load(t,i,e,r);}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}kd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vd={};class Gd extends Error{constructor(t,e){super(t),this.response=e;}}class Wd extends kd{constructor(t){super(t);}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Bd.get(t);if(void 0!==r)return this.manager.itemStart(t),setTimeout((()=>{e&&e(r),this.manager.itemEnd(t);}),0),r;if(void 0!==Vd[t])return void Vd[t].push({onLoad:e,onProgress:n,onError:i});Vd[t]=[],Vd[t].push({onLoad:e,onProgress:n,onError:i});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType;fetch(s).then((e=>{if(200===e.status||0===e.status){if(0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===e.body||void 0===e.body.getReader)return e;const n=Vd[t],i=e.body.getReader(),r=e.headers.get("Content-Length")||e.headers.get("X-File-Size"),s=r?parseInt(r):0,a=0!==s;let o=0;const l=new ReadableStream({start(t){!function e(){i.read().then((({done:i,value:r})=>{if(i)t.close();else {o+=r.byteLength;const i=new ProgressEvent("progress",{lengthComputable:a,loaded:o,total:s});for(let t=0,e=n.length;t<e;t++){const e=n[t];e.onProgress&&e.onProgress(i);}t.enqueue(r),e();}}));}();}});return new Response(l)}throw new Gd(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)})).then((t=>{switch(o){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"document":return t.text().then((t=>(new DOMParser).parseFromString(t,a)));case"json":return t.json();default:if(void 0===a)return t.text();{const e=/charset="?([^;"\s]*)"?/i.exec(a),n=e&&e[1]?e[1].toLowerCase():void 0,i=new TextDecoder(n);return t.arrayBuffer().then((t=>i.decode(t)))}}})).then((e=>{Bd.add(t,e);const n=Vd[t];delete Vd[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onLoad&&i.onLoad(e);}})).catch((e=>{const n=Vd[t];if(void 0===n)throw this.manager.itemError(t),e;delete Vd[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onError&&i.onError(e);}this.manager.itemError(t);})).finally((()=>{this.manager.itemEnd(t);})),this.manager.itemStart(t);}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class qd extends kd{constructor(t){super(t);}load(t,e,n,i){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Bd.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t);}),0),s;const a=ri("img");function o(){c(),Bd.add(t,this),e&&e(this),r.manager.itemEnd(t);}function l(e){c(),i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t);}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1);}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Jd extends kd{constructor(t){super(t);}load(t,e,n,i){const r=new Mi,s=new qd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,(function(t){r.image=t,r.needsUpdate=!0,void 0!==e&&e(r);}),n,i),r}}class Kd extends Ur{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zr(t),this.intensity=e;}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}const Qd=new ar,tp=new Pi,ep=new Pi;class np{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $n(512,512),this.map=null,this.mapPass=null,this.matrix=new ar,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new $n(1,1),this._viewportCount=1,this._viewports=[new Si(0,0,1,1)];}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tp.setFromMatrixPosition(t.matrixWorld),e.position.copy(tp),ep.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ep),e.updateMatrixWorld(),Qd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qd);}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose();}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return (new this.constructor).copy(this)}toJSON(){const t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ip extends np{constructor(){super(new ta(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1;}updateMatrices(t){const e=this.camera,n=2*Vn*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t);}copy(t){return super.copy(t),this.focus=t.focus,this}}class rp extends Kd{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ur.DEFAULT_UP),this.updateMatrix(),this.target=new Ur,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new ip;}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI;}dispose(){this.shadow.dispose();}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const sp=new ar,ap=new Pi,op=new Pi;class lp extends np{constructor(){super(new ta(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $n(4,2),this._viewportCount=6,this._viewports=[new Si(2,1,1,1),new Si(0,1,1,1),new Si(3,1,1,1),new Si(1,1,1,1),new Si(3,0,1,1),new Si(1,0,1,1)],this._cubeDirections=[new Pi(1,0,0),new Pi(-1,0,0),new Pi(0,0,1),new Pi(0,0,-1),new Pi(0,1,0),new Pi(0,-1,0)],this._cubeUps=[new Pi(0,1,0),new Pi(0,1,0),new Pi(0,1,0),new Pi(0,1,0),new Pi(0,0,1),new Pi(0,0,-1)];}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ap.setFromMatrixPosition(t.matrixWorld),n.position.copy(ap),op.copy(n.position),op.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(op),n.updateMatrixWorld(),i.makeTranslation(-ap.x,-ap.y,-ap.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp);}}class cp extends Kd{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lp;}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI);}dispose(){this.shadow.dispose();}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hp extends np{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0;}}class up extends Kd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ur.DEFAULT_UP),this.updateMatrix(),this.target=new Ur,this.shadow=new hp;}dispose(){this.shadow.dispose();}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dp extends Kd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight";}}class _p{static decodeText(t){if("undefined"!=typeof TextDecoder)return (new TextDecoder).decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(t){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return -1===e?"./":t.slice(0,e+1)}static resolveURL(t,e){return "string"!=typeof t||""===t?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Ep extends kd{constructor(t){super(t),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"};}setOptions(t){return this.options=t,this}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Bd.get(t);if(void 0!==s)return r.manager.itemStart(t),s.then?void s.then((n=>{e&&e(n),r.manager.itemEnd(t);})).catch((t=>{i&&i(t);})):(setTimeout((function(){e&&e(s),r.manager.itemEnd(t);}),0),s);const a={};a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader;const o=fetch(t,a).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,Object.assign(r.options,{colorSpaceConversion:"none"}))})).then((function(n){return Bd.add(t,n),e&&e(n),r.manager.itemEnd(t),n})).catch((function(e){i&&i(e),Bd.remove(t),r.manager.itemError(t),r.manager.itemEnd(t);}));Bd.add(t,o),r.manager.itemStart(t);}}new ar;new ar;new ar;new Pi;new Pi;new Pi;new Pi;new Pi;new Pi;const qp="\\[\\]\\.:\\/",Yp=new RegExp("["+qp+"]","g"),Zp="[^"+qp+"]",Jp="[^"+qp.replace("\\.","")+"]",Kp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Zp)+/(WCOD+)?/.source.replace("WCOD",Jp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zp)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zp)+"$"),$p=["material","materials","bones","map"];class Qp{constructor(t,e,n){this.path=e,this.parsedPath=n||Qp.parseTrackName(e),this.node=Qp.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound;}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Qp.Composite(t,e,n):new Qp(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(t){const e=Kp.exec(t);if(null===e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(void 0!==i&&-1!==i){const t=n.nodeName.substring(i+1);-1!==$p.indexOf(t)&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=t);}if(null===n.propertyName||0===n.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(void 0===e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(void 0!==n)return n}if(t.children){const n=function(t){for(let i=0;i<t.length;i++){const r=t[i];if(r.name===e||r.uuid===e)return r;const s=n(r.children);if(s)return s}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName];}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i];}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex];}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e);}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e];}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0;}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0;}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0;}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0;}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e];}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0;}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0;}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e);}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0;}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0;}_getValue_unbound(t,e){this.bind(),this.getValue(t,e);}_setValue_unbound(t,e){this.bind(),this.setValue(t,e);}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Qp.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let i=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let e=0;e<t.length;e++)if(t[e].name===i){i=e;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(void 0===t[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n];}if(void 0!==i){if(void 0===t[i])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[i];}}const s=t[i];if(void 0===s){const n=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+n+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?a=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==r){if("morphTargetInfluences"===i){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==t.morphTargetDictionary[r]&&(r=t.morphTargetDictionary[r]);}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r;}else void 0!==s.fromArray&&void 0!==s.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a];}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound;}}Qp.Composite=class{constructor(t,e,n){const i=n||Qp.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i);}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];void 0!==i&&i.getValue(t,e);}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e);}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind();}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind();}},Qp.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qp.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qp.prototype.GetterByBindingType=[Qp.prototype._getValue_direct,Qp.prototype._getValue_array,Qp.prototype._getValue_arrayElement,Qp.prototype._getValue_toArray],Qp.prototype.SetterByBindingTypeAndVersioning=[[Qp.prototype._setValue_direct,Qp.prototype._setValue_direct_setNeedsUpdate,Qp.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qp.prototype._setValue_array,Qp.prototype._setValue_array_setNeedsUpdate,Qp.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qp.prototype._setValue_arrayElement,Qp.prototype._setValue_arrayElement_setNeedsUpdate,Qp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qp.prototype._setValue_fromArray,Qp.prototype._setValue_fromArray_setNeedsUpdate,Qp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];new ar;class pm{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){const t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wn(e/this.radius,-1,1))),this}clone(){return (new this.constructor).copy(this)}}new $n;new Pi;new Pi;new Pi;new Pi;new ar;new ar;new Pi;new Zr;new Zr;new Pi;new Pi;new Pi;new Pi;new Js;new Ui;new Pi;"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:t}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=t);

	/**
	 * @param {BufferGeometry} geometry
	 * @param {number} drawMode
	 * @return {BufferGeometry}
	 */
	function toTrianglesDrawMode( geometry, drawMode ) {

		if ( drawMode === Fe ) {

			console.warn( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.' );
			return geometry;

		}

		if ( drawMode === ze || drawMode === Be ) {

			let index = geometry.getIndex();

			// generate index if not present

			if ( index === null ) {

				const indices = [];

				const position = geometry.getAttribute( 'position' );

				if ( position !== undefined ) {

					for ( let i = 0; i < position.count; i ++ ) {

						indices.push( i );

					}

					geometry.setIndex( indices );
					index = geometry.getIndex();

				} else {

					console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
					return geometry;

				}

			}

			//

			const numberOfTriangles = index.count - 2;
			const newIndices = [];

			if ( drawMode === ze ) {

				// gl.TRIANGLE_FAN

				for ( let i = 1; i <= numberOfTriangles; i ++ ) {

					newIndices.push( index.getX( 0 ) );
					newIndices.push( index.getX( i ) );
					newIndices.push( index.getX( i + 1 ) );

				}

			} else {

				// gl.TRIANGLE_STRIP

				for ( let i = 0; i < numberOfTriangles; i ++ ) {

					if ( i % 2 === 0 ) {

						newIndices.push( index.getX( i ) );
						newIndices.push( index.getX( i + 1 ) );
						newIndices.push( index.getX( i + 2 ) );

					} else {

						newIndices.push( index.getX( i + 2 ) );
						newIndices.push( index.getX( i + 1 ) );
						newIndices.push( index.getX( i ) );

					}

				}

			}

			if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

				console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

			}

			// build final geometry

			const newGeometry = geometry.clone();
			newGeometry.setIndex( newIndices );
			newGeometry.clearGroups();

			return newGeometry;

		} else {

			console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode );
			return geometry;

		}

	}

	class GLTFLoader extends kd {

		constructor( manager ) {

			super( manager );

			this.dracoLoader = null;
			this.ktx2Loader = null;
			this.meshoptDecoder = null;

			this.pluginCallbacks = [];

			this.register( function ( parser ) {

				return new GLTFMaterialsClearcoatExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFTextureBasisUExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFTextureWebPExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFTextureAVIFExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsSheenExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsTransmissionExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsVolumeExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsIorExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsEmissiveStrengthExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsSpecularExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsIridescenceExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsAnisotropyExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMaterialsBumpExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFLightsExtension( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMeshoptCompression( parser );

			} );

			this.register( function ( parser ) {

				return new GLTFMeshGpuInstancing( parser );

			} );

		}

		load( url, onLoad, onProgress, onError ) {

			const scope = this;

			let resourcePath;

			if ( this.resourcePath !== '' ) {

				resourcePath = this.resourcePath;

			} else if ( this.path !== '' ) {

				// If a base path is set, resources will be relative paths from that plus the relative path of the gltf file
				// Example  path = 'https://my-cnd-server.com/', url = 'assets/models/model.gltf'
				// resourcePath = 'https://my-cnd-server.com/assets/models/'
				// referenced resource 'model.bin' will be loaded from 'https://my-cnd-server.com/assets/models/model.bin'
				// referenced resource '../textures/texture.png' will be loaded from 'https://my-cnd-server.com/assets/textures/texture.png'
				const relativeUrl = _p.extractUrlBase( url );
				resourcePath = _p.resolveURL( relativeUrl, this.path );

			} else {

				resourcePath = _p.extractUrlBase( url );

			}

			// Tells the LoadingManager to track an extra item, which resolves after
			// the model is fully loaded. This means the count of items loaded will
			// be incorrect, but ensures manager.onLoad() does not fire early.
			this.manager.itemStart( url );

			const _onError = function ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );
				scope.manager.itemEnd( url );

			};

			const loader = new Wd( this.manager );

			loader.setPath( this.path );
			loader.setResponseType( 'arraybuffer' );
			loader.setRequestHeader( this.requestHeader );
			loader.setWithCredentials( this.withCredentials );

			loader.load( url, function ( data ) {

				try {

					scope.parse( data, resourcePath, function ( gltf ) {

						onLoad( gltf );

						scope.manager.itemEnd( url );

					}, _onError );

				} catch ( e ) {

					_onError( e );

				}

			}, onProgress, _onError );

		}

		setDRACOLoader( dracoLoader ) {

			this.dracoLoader = dracoLoader;
			return this;

		}

		setDDSLoader() {

			throw new Error(

				'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'

			);

		}

		setKTX2Loader( ktx2Loader ) {

			this.ktx2Loader = ktx2Loader;
			return this;

		}

		setMeshoptDecoder( meshoptDecoder ) {

			this.meshoptDecoder = meshoptDecoder;
			return this;

		}

		register( callback ) {

			if ( this.pluginCallbacks.indexOf( callback ) === - 1 ) {

				this.pluginCallbacks.push( callback );

			}

			return this;

		}

		unregister( callback ) {

			if ( this.pluginCallbacks.indexOf( callback ) !== - 1 ) {

				this.pluginCallbacks.splice( this.pluginCallbacks.indexOf( callback ), 1 );

			}

			return this;

		}

		parse( data, path, onLoad, onError ) {

			let json;
			const extensions = {};
			const plugins = {};
			const textDecoder = new TextDecoder();

			if ( typeof data === 'string' ) {

				json = JSON.parse( data );

			} else if ( data instanceof ArrayBuffer ) {

				const magic = textDecoder.decode( new Uint8Array( data, 0, 4 ) );

				if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

					try {

						extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

					} catch ( error ) {

						if ( onError ) onError( error );
						return;

					}

					json = JSON.parse( extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content );

				} else {

					json = JSON.parse( textDecoder.decode( data ) );

				}

			} else {

				json = data;

			}

			if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

				if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
				return;

			}

			const parser = new GLTFParser( json, {

				path: path || this.resourcePath || '',
				crossOrigin: this.crossOrigin,
				requestHeader: this.requestHeader,
				manager: this.manager,
				ktx2Loader: this.ktx2Loader,
				meshoptDecoder: this.meshoptDecoder

			} );

			parser.fileLoader.setRequestHeader( this.requestHeader );

			for ( let i = 0; i < this.pluginCallbacks.length; i ++ ) {

				const plugin = this.pluginCallbacks[ i ]( parser );

				if ( ! plugin.name ) console.error( 'THREE.GLTFLoader: Invalid plugin found: missing name' );

				plugins[ plugin.name ] = plugin;

				// Workaround to avoid determining as unknown extension
				// in addUnknownExtensionsToUserData().
				// Remove this workaround if we move all the existing
				// extension handlers to plugin system
				extensions[ plugin.name ] = true;

			}

			if ( json.extensionsUsed ) {

				for ( let i = 0; i < json.extensionsUsed.length; ++ i ) {

					const extensionName = json.extensionsUsed[ i ];
					const extensionsRequired = json.extensionsRequired || [];

					switch ( extensionName ) {

						case EXTENSIONS.KHR_MATERIALS_UNLIT:
							extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
							break;

						case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
							extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
							break;

						case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
							extensions[ extensionName ] = new GLTFTextureTransformExtension();
							break;

						case EXTENSIONS.KHR_MESH_QUANTIZATION:
							extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
							break;

						default:

							if ( extensionsRequired.indexOf( extensionName ) >= 0 && plugins[ extensionName ] === undefined ) {

								console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

							}

					}

				}

			}

			parser.setExtensions( extensions );
			parser.setPlugins( plugins );
			parser.parse( onLoad, onError );

		}

		parseAsync( data, path ) {

			const scope = this;

			return new Promise( function ( resolve, reject ) {

				scope.parse( data, path, resolve, reject );

			} );

		}

	}

	/* GLTFREGISTRY */

	function GLTFRegistry() {

		let objects = {};

		return	{

			get: function ( key ) {

				return objects[ key ];

			},

			add: function ( key, object ) {

				objects[ key ] = object;

			},

			remove: function ( key ) {

				delete objects[ key ];

			},

			removeAll: function () {

				objects = {};

			}

		};

	}

	/*********************************/
	/********** EXTENSIONS ***********/
	/*********************************/

	const EXTENSIONS = {
		KHR_BINARY_GLTF: 'KHR_binary_glTF',
		KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
		KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
		KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
		KHR_MATERIALS_IOR: 'KHR_materials_ior',
		KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
		KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
		KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
		KHR_MATERIALS_IRIDESCENCE: 'KHR_materials_iridescence',
		KHR_MATERIALS_ANISOTROPY: 'KHR_materials_anisotropy',
		KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
		KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
		KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
		KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
		KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
		KHR_MATERIALS_EMISSIVE_STRENGTH: 'KHR_materials_emissive_strength',
		EXT_MATERIALS_BUMP: 'EXT_materials_bump',
		EXT_TEXTURE_WEBP: 'EXT_texture_webp',
		EXT_TEXTURE_AVIF: 'EXT_texture_avif',
		EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression',
		EXT_MESH_GPU_INSTANCING: 'EXT_mesh_gpu_instancing'
	};

	/**
	 * Punctual Lights Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
	 */
	class GLTFLightsExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

			// Object3D instance caches
			this.cache = { refs: {}, uses: {} };

		}

		_markDefs() {

			const parser = this.parser;
			const nodeDefs = this.parser.json.nodes || [];

			for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

				const nodeDef = nodeDefs[ nodeIndex ];

				if ( nodeDef.extensions
						&& nodeDef.extensions[ this.name ]
						&& nodeDef.extensions[ this.name ].light !== undefined ) {

					parser._addNodeRef( this.cache, nodeDef.extensions[ this.name ].light );

				}

			}

		}

		_loadLight( lightIndex ) {

			const parser = this.parser;
			const cacheKey = 'light:' + lightIndex;
			let dependency = parser.cache.get( cacheKey );

			if ( dependency ) return dependency;

			const json = parser.json;
			const extensions = ( json.extensions && json.extensions[ this.name ] ) || {};
			const lightDefs = extensions.lights || [];
			const lightDef = lightDefs[ lightIndex ];
			let lightNode;

			const color = new Zr( 0xffffff );

			if ( lightDef.color !== undefined ) color.setRGB( lightDef.color[ 0 ], lightDef.color[ 1 ], lightDef.color[ 2 ], je );

			const range = lightDef.range !== undefined ? lightDef.range : 0;

			switch ( lightDef.type ) {

				case 'directional':
					lightNode = new up( color );
					lightNode.target.position.set( 0, 0, - 1 );
					lightNode.add( lightNode.target );
					break;

				case 'point':
					lightNode = new cp( color );
					lightNode.distance = range;
					break;

				case 'spot':
					lightNode = new rp( color );
					lightNode.distance = range;
					// Handle spotlight properties.
					lightDef.spot = lightDef.spot || {};
					lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
					lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
					lightNode.angle = lightDef.spot.outerConeAngle;
					lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
					lightNode.target.position.set( 0, 0, - 1 );
					lightNode.add( lightNode.target );
					break;

				default:
					throw new Error( 'THREE.GLTFLoader: Unexpected light type: ' + lightDef.type );

			}

			// Some lights (e.g. spot) default to a position other than the origin. Reset the position
			// here, because node-level parsing will only override position if explicitly specified.
			lightNode.position.set( 0, 0, 0 );

			lightNode.decay = 2;

			assignExtrasToUserData( lightNode, lightDef );

			if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

			lightNode.name = parser.createUniqueName( lightDef.name || ( 'light_' + lightIndex ) );

			dependency = Promise.resolve( lightNode );

			parser.cache.add( cacheKey, dependency );

			return dependency;

		}

		getDependency( type, index ) {

			if ( type !== 'light' ) return;

			return this._loadLight( index );

		}

		createNodeAttachment( nodeIndex ) {

			const self = this;
			const parser = this.parser;
			const json = parser.json;
			const nodeDef = json.nodes[ nodeIndex ];
			const lightDef = ( nodeDef.extensions && nodeDef.extensions[ this.name ] ) || {};
			const lightIndex = lightDef.light;

			if ( lightIndex === undefined ) return null;

			return this._loadLight( lightIndex ).then( function ( light ) {

				return parser._getNodeRef( self.cache, lightIndex, light );

			} );

		}

	}

	/**
	 * Unlit Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
	 */
	class GLTFMaterialsUnlitExtension {

		constructor() {

			this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

		}

		getMaterialType() {

			return Qr;

		}

		extendParams( materialParams, materialDef, parser ) {

			const pending = [];

			materialParams.color = new Zr( 1.0, 1.0, 1.0 );
			materialParams.opacity = 1.0;

			const metallicRoughness = materialDef.pbrMetallicRoughness;

			if ( metallicRoughness ) {

				if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

					const array = metallicRoughness.baseColorFactor;

					materialParams.color.setRGB( array[ 0 ], array[ 1 ], array[ 2 ], je );
					materialParams.opacity = array[ 3 ];

				}

				if ( metallicRoughness.baseColorTexture !== undefined ) {

					pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, Xe ) );

				}

			}

			return Promise.all( pending );

		}

	}

	/**
	 * Materials Emissive Strength Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
	 */
	class GLTFMaterialsEmissiveStrengthExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const emissiveStrength = materialDef.extensions[ this.name ].emissiveStrength;

			if ( emissiveStrength !== undefined ) {

				materialParams.emissiveIntensity = emissiveStrength;

			}

			return Promise.resolve();

		}

	}

	/**
	 * Clearcoat Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
	 */
	class GLTFMaterialsClearcoatExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			const extension = materialDef.extensions[ this.name ];

			if ( extension.clearcoatFactor !== undefined ) {

				materialParams.clearcoat = extension.clearcoatFactor;

			}

			if ( extension.clearcoatTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'clearcoatMap', extension.clearcoatTexture ) );

			}

			if ( extension.clearcoatRoughnessFactor !== undefined ) {

				materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;

			}

			if ( extension.clearcoatRoughnessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture ) );

			}

			if ( extension.clearcoatNormalTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture ) );

				if ( extension.clearcoatNormalTexture.scale !== undefined ) {

					const scale = extension.clearcoatNormalTexture.scale;

					materialParams.clearcoatNormalScale = new $n( scale, scale );

				}

			}

			return Promise.all( pending );

		}

	}

	/**
	 * Iridescence Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
	 */
	class GLTFMaterialsIridescenceExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			const extension = materialDef.extensions[ this.name ];

			if ( extension.iridescenceFactor !== undefined ) {

				materialParams.iridescence = extension.iridescenceFactor;

			}

			if ( extension.iridescenceTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'iridescenceMap', extension.iridescenceTexture ) );

			}

			if ( extension.iridescenceIor !== undefined ) {

				materialParams.iridescenceIOR = extension.iridescenceIor;

			}

			if ( materialParams.iridescenceThicknessRange === undefined ) {

				materialParams.iridescenceThicknessRange = [ 100, 400 ];

			}

			if ( extension.iridescenceThicknessMinimum !== undefined ) {

				materialParams.iridescenceThicknessRange[ 0 ] = extension.iridescenceThicknessMinimum;

			}

			if ( extension.iridescenceThicknessMaximum !== undefined ) {

				materialParams.iridescenceThicknessRange[ 1 ] = extension.iridescenceThicknessMaximum;

			}

			if ( extension.iridescenceThicknessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'iridescenceThicknessMap', extension.iridescenceThicknessTexture ) );

			}

			return Promise.all( pending );

		}

	}

	/**
	 * Sheen Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
	 */
	class GLTFMaterialsSheenExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			materialParams.sheenColor = new Zr( 0, 0, 0 );
			materialParams.sheenRoughness = 0;
			materialParams.sheen = 1;

			const extension = materialDef.extensions[ this.name ];

			if ( extension.sheenColorFactor !== undefined ) {

				const colorFactor = extension.sheenColorFactor;
				materialParams.sheenColor.setRGB( colorFactor[ 0 ], colorFactor[ 1 ], colorFactor[ 2 ], je );

			}

			if ( extension.sheenRoughnessFactor !== undefined ) {

				materialParams.sheenRoughness = extension.sheenRoughnessFactor;

			}

			if ( extension.sheenColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'sheenColorMap', extension.sheenColorTexture, Xe ) );

			}

			if ( extension.sheenRoughnessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'sheenRoughnessMap', extension.sheenRoughnessTexture ) );

			}

			return Promise.all( pending );

		}

	}

	/**
	 * Transmission Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
	 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
	 */
	class GLTFMaterialsTransmissionExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			const extension = materialDef.extensions[ this.name ];

			if ( extension.transmissionFactor !== undefined ) {

				materialParams.transmission = extension.transmissionFactor;

			}

			if ( extension.transmissionTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'transmissionMap', extension.transmissionTexture ) );

			}

			return Promise.all( pending );

		}

	}

	/**
	 * Materials Volume Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
	 */
	class GLTFMaterialsVolumeExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			const extension = materialDef.extensions[ this.name ];

			materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;

			if ( extension.thicknessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'thicknessMap', extension.thicknessTexture ) );

			}

			materialParams.attenuationDistance = extension.attenuationDistance || Infinity;

			const colorArray = extension.attenuationColor || [ 1, 1, 1 ];
			materialParams.attenuationColor = new Zr().setRGB( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ], je );

			return Promise.all( pending );

		}

	}

	/**
	 * Materials ior Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
	 */
	class GLTFMaterialsIorExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_IOR;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const extension = materialDef.extensions[ this.name ];

			materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;

			return Promise.resolve();

		}

	}

	/**
	 * Materials specular Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
	 */
	class GLTFMaterialsSpecularExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			const extension = materialDef.extensions[ this.name ];

			materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;

			if ( extension.specularTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'specularIntensityMap', extension.specularTexture ) );

			}

			const colorArray = extension.specularColorFactor || [ 1, 1, 1 ];
			materialParams.specularColor = new Zr().setRGB( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ], je );

			if ( extension.specularColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'specularColorMap', extension.specularColorTexture, Xe ) );

			}

			return Promise.all( pending );

		}

	}


	/**
	 * Materials bump Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/EXT_materials_bump
	 */
	class GLTFMaterialsBumpExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.EXT_MATERIALS_BUMP;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			const extension = materialDef.extensions[ this.name ];

			materialParams.bumpScale = extension.bumpFactor !== undefined ? extension.bumpFactor : 1.0;

			if ( extension.bumpTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'bumpMap', extension.bumpTexture ) );

			}

			return Promise.all( pending );

		}

	}

	/**
	 * Materials anisotropy Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_anisotropy
	 */
	class GLTFMaterialsAnisotropyExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;

		}

		getMaterialType( materialIndex ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

			return ud;

		}

		extendMaterialParams( materialIndex, materialParams ) {

			const parser = this.parser;
			const materialDef = parser.json.materials[ materialIndex ];

			if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

				return Promise.resolve();

			}

			const pending = [];

			const extension = materialDef.extensions[ this.name ];

			if ( extension.anisotropyStrength !== undefined ) {

				materialParams.anisotropy = extension.anisotropyStrength;

			}

			if ( extension.anisotropyRotation !== undefined ) {

				materialParams.anisotropyRotation = extension.anisotropyRotation;

			}

			if ( extension.anisotropyTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'anisotropyMap', extension.anisotropyTexture ) );

			}

			return Promise.all( pending );

		}

	}

	/**
	 * BasisU Texture Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
	 */
	class GLTFTextureBasisUExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.KHR_TEXTURE_BASISU;

		}

		loadTexture( textureIndex ) {

			const parser = this.parser;
			const json = parser.json;

			const textureDef = json.textures[ textureIndex ];

			if ( ! textureDef.extensions || ! textureDef.extensions[ this.name ] ) {

				return null;

			}

			const extension = textureDef.extensions[ this.name ];
			const loader = parser.options.ktx2Loader;

			if ( ! loader ) {

				if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

					throw new Error( 'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures' );

				} else {

					// Assumes that the extension is optional and that a fallback texture is present
					return null;

				}

			}

			return parser.loadTextureImage( textureIndex, extension.source, loader );

		}

	}

	/**
	 * WebP Texture Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
	 */
	class GLTFTextureWebPExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
			this.isSupported = null;

		}

		loadTexture( textureIndex ) {

			const name = this.name;
			const parser = this.parser;
			const json = parser.json;

			const textureDef = json.textures[ textureIndex ];

			if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

				return null;

			}

			const extension = textureDef.extensions[ name ];
			const source = json.images[ extension.source ];

			let loader = parser.textureLoader;
			if ( source.uri ) {

				const handler = parser.options.manager.getHandler( source.uri );
				if ( handler !== null ) loader = handler;

			}

			return this.detectSupport().then( function ( isSupported ) {

				if ( isSupported ) return parser.loadTextureImage( textureIndex, extension.source, loader );

				if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

					throw new Error( 'THREE.GLTFLoader: WebP required by asset but unsupported.' );

				}

				// Fall back to PNG or JPEG.
				return parser.loadTexture( textureIndex );

			} );

		}

		detectSupport() {

			if ( ! this.isSupported ) {

				this.isSupported = new Promise( function ( resolve ) {

					const image = new Image();

					// Lossy test image. Support for lossy images doesn't guarantee support for all
					// WebP images, unfortunately.
					image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

					image.onload = image.onerror = function () {

						resolve( image.height === 1 );

					};

				} );

			}

			return this.isSupported;

		}

	}

	/**
	 * AVIF Texture Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_avif
	 */
	class GLTFTextureAVIFExtension {

		constructor( parser ) {

			this.parser = parser;
			this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
			this.isSupported = null;

		}

		loadTexture( textureIndex ) {

			const name = this.name;
			const parser = this.parser;
			const json = parser.json;

			const textureDef = json.textures[ textureIndex ];

			if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

				return null;

			}

			const extension = textureDef.extensions[ name ];
			const source = json.images[ extension.source ];

			let loader = parser.textureLoader;
			if ( source.uri ) {

				const handler = parser.options.manager.getHandler( source.uri );
				if ( handler !== null ) loader = handler;

			}

			return this.detectSupport().then( function ( isSupported ) {

				if ( isSupported ) return parser.loadTextureImage( textureIndex, extension.source, loader );

				if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

					throw new Error( 'THREE.GLTFLoader: AVIF required by asset but unsupported.' );

				}

				// Fall back to PNG or JPEG.
				return parser.loadTexture( textureIndex );

			} );

		}

		detectSupport() {

			if ( ! this.isSupported ) {

				this.isSupported = new Promise( function ( resolve ) {

					const image = new Image();

					// Lossy test image.
					image.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
					image.onload = image.onerror = function () {

						resolve( image.height === 1 );

					};

				} );

			}

			return this.isSupported;

		}

	}

	/**
	 * meshopt BufferView Compression Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
	 */
	class GLTFMeshoptCompression {

		constructor( parser ) {

			this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
			this.parser = parser;

		}

		loadBufferView( index ) {

			const json = this.parser.json;
			const bufferView = json.bufferViews[ index ];

			if ( bufferView.extensions && bufferView.extensions[ this.name ] ) {

				const extensionDef = bufferView.extensions[ this.name ];

				const buffer = this.parser.getDependency( 'buffer', extensionDef.buffer );
				const decoder = this.parser.options.meshoptDecoder;

				if ( ! decoder || ! decoder.supported ) {

					if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

						throw new Error( 'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files' );

					} else {

						// Assumes that the extension is optional and that fallback buffer data is present
						return null;

					}

				}

				return buffer.then( function ( res ) {

					const byteOffset = extensionDef.byteOffset || 0;
					const byteLength = extensionDef.byteLength || 0;

					const count = extensionDef.count;
					const stride = extensionDef.byteStride;

					const source = new Uint8Array( res, byteOffset, byteLength );

					if ( decoder.decodeGltfBufferAsync ) {

						return decoder.decodeGltfBufferAsync( count, stride, source, extensionDef.mode, extensionDef.filter ).then( function ( res ) {

							return res.buffer;

						} );

					} else {

						// Support for MeshoptDecoder 0.18 or earlier, without decodeGltfBufferAsync
						return decoder.ready.then( function () {

							const result = new ArrayBuffer( count * stride );
							decoder.decodeGltfBuffer( new Uint8Array( result ), count, stride, source, extensionDef.mode, extensionDef.filter );
							return result;

						} );

					}

				} );

			} else {

				return null;

			}

		}

	}

	/**
	 * GPU Instancing Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
	 *
	 */
	class GLTFMeshGpuInstancing {

		constructor( parser ) {

			this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
			this.parser = parser;

		}

		createNodeMesh( nodeIndex ) {

			const json = this.parser.json;
			const nodeDef = json.nodes[ nodeIndex ];

			if ( ! nodeDef.extensions || ! nodeDef.extensions[ this.name ] ||
				nodeDef.mesh === undefined ) {

				return null;

			}

			const meshDef = json.meshes[ nodeDef.mesh ];

			// No Points or Lines + Instancing support yet

			for ( const primitive of meshDef.primitives ) {

				if ( primitive.mode !== WEBGL_CONSTANTS.TRIANGLES &&
					 primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP &&
					 primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN &&
					 primitive.mode !== undefined ) {

					return null;

				}

			}

			const extensionDef = nodeDef.extensions[ this.name ];
			const attributesDef = extensionDef.attributes;

			// @TODO: Can we support InstancedMesh + SkinnedMesh?

			const pending = [];
			const attributes = {};

			for ( const key in attributesDef ) {

				pending.push( this.parser.getDependency( 'accessor', attributesDef[ key ] ).then( accessor => {

					attributes[ key ] = accessor;
					return attributes[ key ];

				} ) );

			}

			if ( pending.length < 1 ) {

				return null;

			}

			pending.push( this.parser.createNodeMesh( nodeIndex ) );

			return Promise.all( pending ).then( results => {

				const nodeObject = results.pop();
				const meshes = nodeObject.isGroup ? nodeObject.children : [ nodeObject ];
				const count = results[ 0 ].count; // All attribute counts should be same
				const instancedMeshes = [];

				for ( const mesh of meshes ) {

					// Temporal variables
					const m = new ar();
					const p = new Pi();
					const q = new Ci();
					const s = new Pi( 1, 1, 1 );

					const instancedMesh = new Kc( mesh.geometry, mesh.material, count );

					for ( let i = 0; i < count; i ++ ) {

						if ( attributes.TRANSLATION ) {

							p.fromBufferAttribute( attributes.TRANSLATION, i );

						}

						if ( attributes.ROTATION ) {

							q.fromBufferAttribute( attributes.ROTATION, i );

						}

						if ( attributes.SCALE ) {

							s.fromBufferAttribute( attributes.SCALE, i );

						}

						instancedMesh.setMatrixAt( i, m.compose( p, q, s ) );

					}

					// Add instance attributes to the geometry, excluding TRS.
					for ( const attributeName in attributes ) {

						if ( attributeName === '_COLOR_0' ) {

							const attr = attributes[ attributeName ];
							instancedMesh.instanceColor = new Gc( attr.array, attr.itemSize, attr.normalized );

						} else if ( attributeName !== 'TRANSLATION' &&
							 attributeName !== 'ROTATION' &&
							 attributeName !== 'SCALE' ) {

							mesh.geometry.setAttribute( attributeName, attributes[ attributeName ] );

						}

					}

					// Just in case
					Ur.prototype.copy.call( instancedMesh, mesh );

					this.parser.assignFinalMaterial( instancedMesh );

					instancedMeshes.push( instancedMesh );

				}

				if ( nodeObject.isGroup ) {

					nodeObject.clear();

					nodeObject.add( ... instancedMeshes );

					return nodeObject;

				}

				return instancedMeshes[ 0 ];

			} );

		}

	}

	/* BINARY EXTENSION */
	const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
	const BINARY_EXTENSION_HEADER_LENGTH = 12;
	const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

	class GLTFBinaryExtension {

		constructor( data ) {

			this.name = EXTENSIONS.KHR_BINARY_GLTF;
			this.content = null;
			this.body = null;

			const headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );
			const textDecoder = new TextDecoder();

			this.header = {
				magic: textDecoder.decode( new Uint8Array( data.slice( 0, 4 ) ) ),
				version: headerView.getUint32( 4, true ),
				length: headerView.getUint32( 8, true )
			};

			if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

				throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

			} else if ( this.header.version < 2.0 ) {

				throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

			}

			const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
			const chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
			let chunkIndex = 0;

			while ( chunkIndex < chunkContentsLength ) {

				const chunkLength = chunkView.getUint32( chunkIndex, true );
				chunkIndex += 4;

				const chunkType = chunkView.getUint32( chunkIndex, true );
				chunkIndex += 4;

				if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

					const contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
					this.content = textDecoder.decode( contentArray );

				} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

					const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
					this.body = data.slice( byteOffset, byteOffset + chunkLength );

				}

				// Clients must ignore chunks with unknown types.

				chunkIndex += chunkLength;

			}

			if ( this.content === null ) {

				throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

			}

		}

	}

	/**
	 * DRACO Mesh Compression Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
	 */
	class GLTFDracoMeshCompressionExtension {

		constructor( json, dracoLoader ) {

			if ( ! dracoLoader ) {

				throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

			}

			this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
			this.json = json;
			this.dracoLoader = dracoLoader;
			this.dracoLoader.preload();

		}

		decodePrimitive( primitive, parser ) {

			const json = this.json;
			const dracoLoader = this.dracoLoader;
			const bufferViewIndex = primitive.extensions[ this.name ].bufferView;
			const gltfAttributeMap = primitive.extensions[ this.name ].attributes;
			const threeAttributeMap = {};
			const attributeNormalizedMap = {};
			const attributeTypeMap = {};

			for ( const attributeName in gltfAttributeMap ) {

				const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

				threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

			}

			for ( const attributeName in primitive.attributes ) {

				const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

				if ( gltfAttributeMap[ attributeName ] !== undefined ) {

					const accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
					const componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

					attributeTypeMap[ threeAttributeName ] = componentType.name;
					attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

				}

			}

			return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

				return new Promise( function ( resolve, reject ) {

					dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

						for ( const attributeName in geometry.attributes ) {

							const attribute = geometry.attributes[ attributeName ];
							const normalized = attributeNormalizedMap[ attributeName ];

							if ( normalized !== undefined ) attribute.normalized = normalized;

						}

						resolve( geometry );

					}, threeAttributeMap, attributeTypeMap, je, reject );

				} );

			} );

		}

	}

	/**
	 * Texture Transform Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
	 */
	class GLTFTextureTransformExtension {

		constructor() {

			this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

		}

		extendTexture( texture, transform ) {

			if ( ( transform.texCoord === undefined || transform.texCoord === texture.channel )
				&& transform.offset === undefined
				&& transform.rotation === undefined
				&& transform.scale === undefined ) {

				// See https://github.com/mrdoob/three.js/issues/21819.
				return texture;

			}

			texture = texture.clone();

			if ( transform.texCoord !== undefined ) {

				texture.channel = transform.texCoord;

			}

			if ( transform.offset !== undefined ) {

				texture.offset.fromArray( transform.offset );

			}

			if ( transform.rotation !== undefined ) {

				texture.rotation = transform.rotation;

			}

			if ( transform.scale !== undefined ) {

				texture.repeat.fromArray( transform.scale );

			}

			texture.needsUpdate = true;

			return texture;

		}

	}

	/**
	 * Mesh Quantization Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
	 */
	class GLTFMeshQuantizationExtension {

		constructor() {

			this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

		}

	}

	/*********************************/
	/********** INTERPOLATION ********/
	/*********************************/

	// Spline Interpolation
	// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
	class GLTFCubicSplineInterpolant extends Ed {

		constructor( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

			super( parameterPositions, sampleValues, sampleSize, resultBuffer );

		}

		copySampleValue_( index ) {

			// Copies a sample value to the result buffer. See description of glTF
			// CUBICSPLINE values layout in interpolate_() function below.

			const result = this.resultBuffer,
				values = this.sampleValues,
				valueSize = this.valueSize,
				offset = index * valueSize * 3 + valueSize;

			for ( let i = 0; i !== valueSize; i ++ ) {

				result[ i ] = values[ offset + i ];

			}

			return result;

		}

		interpolate_( i1, t0, t, t1 ) {

			const result = this.resultBuffer;
			const values = this.sampleValues;
			const stride = this.valueSize;

			const stride2 = stride * 2;
			const stride3 = stride * 3;

			const td = t1 - t0;

			const p = ( t - t0 ) / td;
			const pp = p * p;
			const ppp = pp * p;

			const offset1 = i1 * stride3;
			const offset0 = offset1 - stride3;

			const s2 = - 2 * ppp + 3 * pp;
			const s3 = ppp - pp;
			const s0 = 1 - s2;
			const s1 = s3 - pp + p;

			// Layout of keyframe output values for CUBICSPLINE animations:
			//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
			for ( let i = 0; i !== stride; i ++ ) {

				const p0 = values[ offset0 + i + stride ]; // splineVertex_k
				const m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
				const p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
				const m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

				result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

			}

			return result;

		}

	}

	const _q = new Ci();

	class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {

		interpolate_( i1, t0, t, t1 ) {

			const result = super.interpolate_( i1, t0, t, t1 );

			_q.fromArray( result ).normalize().toArray( result );

			return result;

		}

	}


	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	const WEBGL_CONSTANTS = {
		FLOAT: 5126,
		//FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		POINTS: 0,
		LINES: 1,
		LINE_LOOP: 2,
		LINE_STRIP: 3,
		TRIANGLES: 4,
		TRIANGLE_STRIP: 5,
		TRIANGLE_FAN: 6,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123
	};

	const WEBGL_COMPONENT_TYPES = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	};

	const WEBGL_FILTERS = {
		9728: gt,
		9729: Mt,
		9984: _t,
		9985: St,
		9986: xt,
		9987: Et
	};

	const WEBGL_WRAPPINGS = {
		33071: mt,
		33648: ft,
		10497: pt
	};

	const WEBGL_TYPE_SIZES = {
		'SCALAR': 1,
		'VEC2': 2,
		'VEC3': 3,
		'VEC4': 4,
		'MAT2': 4,
		'MAT3': 9,
		'MAT4': 16
	};

	const ATTRIBUTES = {
		POSITION: 'position',
		NORMAL: 'normal',
		TANGENT: 'tangent',
		TEXCOORD_0: 'uv',
		TEXCOORD_1: 'uv1',
		TEXCOORD_2: 'uv2',
		TEXCOORD_3: 'uv3',
		COLOR_0: 'color',
		WEIGHTS_0: 'skinWeight',
		JOINTS_0: 'skinIndex',
	};

	const PATH_PROPERTIES = {
		scale: 'scale',
		translation: 'position',
		rotation: 'quaternion',
		weights: 'morphTargetInfluences'
	};

	const INTERPOLATION = {
		CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
			                        // keyframe track will be initialized with a default interpolation type, then modified.
		LINEAR: Pe,
		STEP: Ce
	};

	const ALPHA_MODES = {
		OPAQUE: 'OPAQUE',
		MASK: 'MASK',
		BLEND: 'BLEND'
	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
	 */
	function createDefaultMaterial( cache ) {

		if ( cache[ 'DefaultMaterial' ] === undefined ) {

			cache[ 'DefaultMaterial' ] = new hd( {
				color: 0xFFFFFF,
				emissive: 0x000000,
				metalness: 1,
				roughness: 1,
				transparent: false,
				depthTest: true,
				side: u
			} );

		}

		return cache[ 'DefaultMaterial' ];

	}

	function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

		// Add unknown glTF extensions to an object's userData.

		for ( const name in objectDef.extensions ) {

			if ( knownExtensions[ name ] === undefined ) {

				object.userData.gltfExtensions = object.userData.gltfExtensions || {};
				object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

			}

		}

	}

	/**
	 * @param {Object3D|Material|BufferGeometry} object
	 * @param {GLTF.definition} gltfDef
	 */
	function assignExtrasToUserData( object, gltfDef ) {

		if ( gltfDef.extras !== undefined ) {

			if ( typeof gltfDef.extras === 'object' ) {

				Object.assign( object.userData, gltfDef.extras );

			} else {

				console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

			}

		}

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
	 *
	 * @param {BufferGeometry} geometry
	 * @param {Array<GLTF.Target>} targets
	 * @param {GLTFParser} parser
	 * @return {Promise<BufferGeometry>}
	 */
	function addMorphTargets( geometry, targets, parser ) {

		let hasMorphPosition = false;
		let hasMorphNormal = false;
		let hasMorphColor = false;

		for ( let i = 0, il = targets.length; i < il; i ++ ) {

			const target = targets[ i ];

			if ( target.POSITION !== undefined ) hasMorphPosition = true;
			if ( target.NORMAL !== undefined ) hasMorphNormal = true;
			if ( target.COLOR_0 !== undefined ) hasMorphColor = true;

			if ( hasMorphPosition && hasMorphNormal && hasMorphColor ) break;

		}

		if ( ! hasMorphPosition && ! hasMorphNormal && ! hasMorphColor ) return Promise.resolve( geometry );

		const pendingPositionAccessors = [];
		const pendingNormalAccessors = [];
		const pendingColorAccessors = [];

		for ( let i = 0, il = targets.length; i < il; i ++ ) {

			const target = targets[ i ];

			if ( hasMorphPosition ) {

				const pendingAccessor = target.POSITION !== undefined
					? parser.getDependency( 'accessor', target.POSITION )
					: geometry.attributes.position;

				pendingPositionAccessors.push( pendingAccessor );

			}

			if ( hasMorphNormal ) {

				const pendingAccessor = target.NORMAL !== undefined
					? parser.getDependency( 'accessor', target.NORMAL )
					: geometry.attributes.normal;

				pendingNormalAccessors.push( pendingAccessor );

			}

			if ( hasMorphColor ) {

				const pendingAccessor = target.COLOR_0 !== undefined
					? parser.getDependency( 'accessor', target.COLOR_0 )
					: geometry.attributes.color;

				pendingColorAccessors.push( pendingAccessor );

			}

		}

		return Promise.all( [
			Promise.all( pendingPositionAccessors ),
			Promise.all( pendingNormalAccessors ),
			Promise.all( pendingColorAccessors )
		] ).then( function ( accessors ) {

			const morphPositions = accessors[ 0 ];
			const morphNormals = accessors[ 1 ];
			const morphColors = accessors[ 2 ];

			if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
			if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
			if ( hasMorphColor ) geometry.morphAttributes.color = morphColors;
			geometry.morphTargetsRelative = true;

			return geometry;

		} );

	}

	/**
	 * @param {Mesh} mesh
	 * @param {GLTF.Mesh} meshDef
	 */
	function updateMorphTargets( mesh, meshDef ) {

		mesh.updateMorphTargets();

		if ( meshDef.weights !== undefined ) {

			for ( let i = 0, il = meshDef.weights.length; i < il; i ++ ) {

				mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

			}

		}

		// .extras has user-defined data, so check that .extras.targetNames is an array.
		if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

			const targetNames = meshDef.extras.targetNames;

			if ( mesh.morphTargetInfluences.length === targetNames.length ) {

				mesh.morphTargetDictionary = {};

				for ( let i = 0, il = targetNames.length; i < il; i ++ ) {

					mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

				}

			} else {

				console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

			}

		}

	}

	function createPrimitiveKey( primitiveDef ) {

		let geometryKey;

		const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];

		if ( dracoExtension ) {

			geometryKey = 'draco:' + dracoExtension.bufferView
					+ ':' + dracoExtension.indices
					+ ':' + createAttributesKey( dracoExtension.attributes );

		} else {

			geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

		}

		if ( primitiveDef.targets !== undefined ) {

			for ( let i = 0, il = primitiveDef.targets.length; i < il; i ++ ) {

				geometryKey += ':' + createAttributesKey( primitiveDef.targets[ i ] );

			}

		}

		return geometryKey;

	}

	function createAttributesKey( attributes ) {

		let attributesKey = '';

		const keys = Object.keys( attributes ).sort();

		for ( let i = 0, il = keys.length; i < il; i ++ ) {

			attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

		}

		return attributesKey;

	}

	function getNormalizedComponentScale( constructor ) {

		// Reference:
		// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data

		switch ( constructor ) {

			case Int8Array:
				return 1 / 127;

			case Uint8Array:
				return 1 / 255;

			case Int16Array:
				return 1 / 32767;

			case Uint16Array:
				return 1 / 65535;

			default:
				throw new Error( 'THREE.GLTFLoader: Unsupported normalized accessor component type.' );

		}

	}

	function getImageURIMimeType( uri ) {

		if ( uri.search( /\.jpe?g($|\?)/i ) > 0 || uri.search( /^data\:image\/jpeg/ ) === 0 ) return 'image/jpeg';
		if ( uri.search( /\.webp($|\?)/i ) > 0 || uri.search( /^data\:image\/webp/ ) === 0 ) return 'image/webp';

		return 'image/png';

	}

	const _identityMatrix = new ar();

	/* GLTF PARSER */

	class GLTFParser {

		constructor( json = {}, options = {} ) {

			this.json = json;
			this.extensions = {};
			this.plugins = {};
			this.options = options;

			// loader object cache
			this.cache = new GLTFRegistry();

			// associations between Three.js objects and glTF elements
			this.associations = new Map();

			// BufferGeometry caching
			this.primitiveCache = {};

			// Node cache
			this.nodeCache = {};

			// Object3D instance caches
			this.meshCache = { refs: {}, uses: {} };
			this.cameraCache = { refs: {}, uses: {} };
			this.lightCache = { refs: {}, uses: {} };

			this.sourceCache = {};
			this.textureCache = {};

			// Track node names, to ensure no duplicates
			this.nodeNamesUsed = {};

			// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
			// expensive work of uploading a texture to the GPU off the main thread.

			let isSafari = false;
			let isFirefox = false;
			let firefoxVersion = - 1;

			if ( typeof navigator !== 'undefined' ) {

				isSafari = /^((?!chrome|android).)*safari/i.test( navigator.userAgent ) === true;
				isFirefox = navigator.userAgent.indexOf( 'Firefox' ) > - 1;
				firefoxVersion = isFirefox ? navigator.userAgent.match( /Firefox\/([0-9]+)\./ )[ 1 ] : - 1;

			}

			if ( typeof createImageBitmap === 'undefined' || isSafari || ( isFirefox && firefoxVersion < 98 ) ) {

				this.textureLoader = new Jd( this.options.manager );

			} else {

				this.textureLoader = new Ep( this.options.manager );

			}

			this.textureLoader.setCrossOrigin( this.options.crossOrigin );
			this.textureLoader.setRequestHeader( this.options.requestHeader );

			this.fileLoader = new Wd( this.options.manager );
			this.fileLoader.setResponseType( 'arraybuffer' );

			if ( this.options.crossOrigin === 'use-credentials' ) {

				this.fileLoader.setWithCredentials( true );

			}

		}

		setExtensions( extensions ) {

			this.extensions = extensions;

		}

		setPlugins( plugins ) {

			this.plugins = plugins;

		}

		parse( onLoad, onError ) {

			const parser = this;
			const json = this.json;
			const extensions = this.extensions;

			// Clear the loader cache
			this.cache.removeAll();
			this.nodeCache = {};

			// Mark the special nodes/meshes in json for efficient parse
			this._invokeAll( function ( ext ) {

				return ext._markDefs && ext._markDefs();

			} );

			Promise.all( this._invokeAll( function ( ext ) {

				return ext.beforeRoot && ext.beforeRoot();

			} ) ).then( function () {

				return Promise.all( [

					parser.getDependencies( 'scene' ),
					parser.getDependencies( 'animation' ),
					parser.getDependencies( 'camera' ),

				] );

			} ).then( function ( dependencies ) {

				const result = {
					scene: dependencies[ 0 ][ json.scene || 0 ],
					scenes: dependencies[ 0 ],
					animations: dependencies[ 1 ],
					cameras: dependencies[ 2 ],
					asset: json.asset,
					parser: parser,
					userData: {}
				};

				addUnknownExtensionsToUserData( extensions, result, json );

				assignExtrasToUserData( result, json );

				return Promise.all( parser._invokeAll( function ( ext ) {

					return ext.afterRoot && ext.afterRoot( result );

				} ) ).then( function () {

					onLoad( result );

				} );

			} ).catch( onError );

		}

		/**
		 * Marks the special nodes/meshes in json for efficient parse.
		 */
		_markDefs() {

			const nodeDefs = this.json.nodes || [];
			const skinDefs = this.json.skins || [];
			const meshDefs = this.json.meshes || [];

			// Nothing in the node definition indicates whether it is a Bone or an
			// Object3D. Use the skins' joint references to mark bones.
			for ( let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

				const joints = skinDefs[ skinIndex ].joints;

				for ( let i = 0, il = joints.length; i < il; i ++ ) {

					nodeDefs[ joints[ i ] ].isBone = true;

				}

			}

			// Iterate over all nodes, marking references to shared resources,
			// as well as skeleton joints.
			for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

				const nodeDef = nodeDefs[ nodeIndex ];

				if ( nodeDef.mesh !== undefined ) {

					this._addNodeRef( this.meshCache, nodeDef.mesh );

					// Nothing in the mesh definition indicates whether it is
					// a SkinnedMesh or Mesh. Use the node's mesh reference
					// to mark SkinnedMesh if node has skin.
					if ( nodeDef.skin !== undefined ) {

						meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

					}

				}

				if ( nodeDef.camera !== undefined ) {

					this._addNodeRef( this.cameraCache, nodeDef.camera );

				}

			}

		}

		/**
		 * Counts references to shared node / Object3D resources. These resources
		 * can be reused, or "instantiated", at multiple nodes in the scene
		 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
		 * be marked. Non-scenegraph resources (like Materials, Geometries, and
		 * Textures) can be reused directly and are not marked here.
		 *
		 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
		 */
		_addNodeRef( cache, index ) {

			if ( index === undefined ) return;

			if ( cache.refs[ index ] === undefined ) {

				cache.refs[ index ] = cache.uses[ index ] = 0;

			}

			cache.refs[ index ] ++;

		}

		/** Returns a reference to a shared resource, cloning it if necessary. */
		_getNodeRef( cache, index, object ) {

			if ( cache.refs[ index ] <= 1 ) return object;

			const ref = object.clone();

			// Propagates mappings to the cloned object, prevents mappings on the
			// original object from being lost.
			const updateMappings = ( original, clone ) => {

				const mappings = this.associations.get( original );
				if ( mappings != null ) {

					this.associations.set( clone, mappings );

				}

				for ( const [ i, child ] of original.children.entries() ) {

					updateMappings( child, clone.children[ i ] );

				}

			};

			updateMappings( object, ref );

			ref.name += '_instance_' + ( cache.uses[ index ] ++ );

			return ref;

		}

		_invokeOne( func ) {

			const extensions = Object.values( this.plugins );
			extensions.push( this );

			for ( let i = 0; i < extensions.length; i ++ ) {

				const result = func( extensions[ i ] );

				if ( result ) return result;

			}

			return null;

		}

		_invokeAll( func ) {

			const extensions = Object.values( this.plugins );
			extensions.unshift( this );

			const pending = [];

			for ( let i = 0; i < extensions.length; i ++ ) {

				const result = func( extensions[ i ] );

				if ( result ) pending.push( result );

			}

			return pending;

		}

		/**
		 * Requests the specified dependency asynchronously, with caching.
		 * @param {string} type
		 * @param {number} index
		 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
		 */
		getDependency( type, index ) {

			const cacheKey = type + ':' + index;
			let dependency = this.cache.get( cacheKey );

			if ( ! dependency ) {

				switch ( type ) {

					case 'scene':
						dependency = this.loadScene( index );
						break;

					case 'node':
						dependency = this._invokeOne( function ( ext ) {

							return ext.loadNode && ext.loadNode( index );

						} );
						break;

					case 'mesh':
						dependency = this._invokeOne( function ( ext ) {

							return ext.loadMesh && ext.loadMesh( index );

						} );
						break;

					case 'accessor':
						dependency = this.loadAccessor( index );
						break;

					case 'bufferView':
						dependency = this._invokeOne( function ( ext ) {

							return ext.loadBufferView && ext.loadBufferView( index );

						} );
						break;

					case 'buffer':
						dependency = this.loadBuffer( index );
						break;

					case 'material':
						dependency = this._invokeOne( function ( ext ) {

							return ext.loadMaterial && ext.loadMaterial( index );

						} );
						break;

					case 'texture':
						dependency = this._invokeOne( function ( ext ) {

							return ext.loadTexture && ext.loadTexture( index );

						} );
						break;

					case 'skin':
						dependency = this.loadSkin( index );
						break;

					case 'animation':
						dependency = this._invokeOne( function ( ext ) {

							return ext.loadAnimation && ext.loadAnimation( index );

						} );
						break;

					case 'camera':
						dependency = this.loadCamera( index );
						break;

					default:
						dependency = this._invokeOne( function ( ext ) {

							return ext != this && ext.getDependency && ext.getDependency( type, index );

						} );

						if ( ! dependency ) {

							throw new Error( 'Unknown type: ' + type );

						}

						break;

				}

				this.cache.add( cacheKey, dependency );

			}

			return dependency;

		}

		/**
		 * Requests all dependencies of the specified type asynchronously, with caching.
		 * @param {string} type
		 * @return {Promise<Array<Object>>}
		 */
		getDependencies( type ) {

			let dependencies = this.cache.get( type );

			if ( ! dependencies ) {

				const parser = this;
				const defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

				dependencies = Promise.all( defs.map( function ( def, index ) {

					return parser.getDependency( type, index );

				} ) );

				this.cache.add( type, dependencies );

			}

			return dependencies;

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
		 * @param {number} bufferIndex
		 * @return {Promise<ArrayBuffer>}
		 */
		loadBuffer( bufferIndex ) {

			const bufferDef = this.json.buffers[ bufferIndex ];
			const loader = this.fileLoader;

			if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

				throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

			}

			// If present, GLB container is required to be the first buffer.
			if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

				return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

			}

			const options = this.options;

			return new Promise( function ( resolve, reject ) {

				loader.load( _p.resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

					reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

				} );

			} );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
		 * @param {number} bufferViewIndex
		 * @return {Promise<ArrayBuffer>}
		 */
		loadBufferView( bufferViewIndex ) {

			const bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

			return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

				const byteLength = bufferViewDef.byteLength || 0;
				const byteOffset = bufferViewDef.byteOffset || 0;
				return buffer.slice( byteOffset, byteOffset + byteLength );

			} );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
		 * @param {number} accessorIndex
		 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
		 */
		loadAccessor( accessorIndex ) {

			const parser = this;
			const json = this.json;

			const accessorDef = this.json.accessors[ accessorIndex ];

			if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

				const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
				const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];
				const normalized = accessorDef.normalized === true;

				const array = new TypedArray( accessorDef.count * itemSize );
				return Promise.resolve( new os( array, itemSize, normalized ) );

			}

			const pendingBufferViews = [];

			if ( accessorDef.bufferView !== undefined ) {

				pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

			} else {

				pendingBufferViews.push( null );

			}

			if ( accessorDef.sparse !== undefined ) {

				pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
				pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

			}

			return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

				const bufferView = bufferViews[ 0 ];

				const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
				const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

				// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
				const elementBytes = TypedArray.BYTES_PER_ELEMENT;
				const itemBytes = elementBytes * itemSize;
				const byteOffset = accessorDef.byteOffset || 0;
				const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
				const normalized = accessorDef.normalized === true;
				let array, bufferAttribute;

				// The buffer is not interleaved if the stride is the item size in bytes.
				if ( byteStride && byteStride !== itemBytes ) {

					// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
					// This makes sure that IBA.count reflects accessor.count properly
					const ibSlice = Math.floor( byteOffset / byteStride );
					const ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
					let ib = parser.cache.get( ibCacheKey );

					if ( ! ib ) {

						array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

						// Integer parameters to IB/IBA are in array elements, not bytes.
						ib = new ac( array, byteStride / elementBytes );

						parser.cache.add( ibCacheKey, ib );

					}

					bufferAttribute = new lc( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

				} else {

					if ( bufferView === null ) {

						array = new TypedArray( accessorDef.count * itemSize );

					} else {

						array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

					}

					bufferAttribute = new os( array, itemSize, normalized );

				}

				// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
				if ( accessorDef.sparse !== undefined ) {

					const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
					const TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

					const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
					const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

					const sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
					const sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

					if ( bufferView !== null ) {

						// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
						bufferAttribute = new os( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

					}

					for ( let i = 0, il = sparseIndices.length; i < il; i ++ ) {

						const index = sparseIndices[ i ];

						bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
						if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
						if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
						if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
						if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

					}

				}

				return bufferAttribute;

			} );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
		 * @param {number} textureIndex
		 * @return {Promise<THREE.Texture|null>}
		 */
		loadTexture( textureIndex ) {

			const json = this.json;
			const options = this.options;
			const textureDef = json.textures[ textureIndex ];
			const sourceIndex = textureDef.source;
			const sourceDef = json.images[ sourceIndex ];

			let loader = this.textureLoader;

			if ( sourceDef.uri ) {

				const handler = options.manager.getHandler( sourceDef.uri );
				if ( handler !== null ) loader = handler;

			}

			return this.loadTextureImage( textureIndex, sourceIndex, loader );

		}

		loadTextureImage( textureIndex, sourceIndex, loader ) {

			const parser = this;
			const json = this.json;

			const textureDef = json.textures[ textureIndex ];
			const sourceDef = json.images[ sourceIndex ];

			const cacheKey = ( sourceDef.uri || sourceDef.bufferView ) + ':' + textureDef.sampler;

			if ( this.textureCache[ cacheKey ] ) {

				// See https://github.com/mrdoob/three.js/issues/21559.
				return this.textureCache[ cacheKey ];

			}

			const promise = this.loadImageSource( sourceIndex, loader ).then( function ( texture ) {

				texture.flipY = false;

				texture.name = textureDef.name || sourceDef.name || '';

				if ( texture.name === '' && typeof sourceDef.uri === 'string' && sourceDef.uri.startsWith( 'data:image/' ) === false ) {

					texture.name = sourceDef.uri;

				}

				const samplers = json.samplers || {};
				const sampler = samplers[ textureDef.sampler ] || {};

				texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || Mt;
				texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || Et;
				texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || pt;
				texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || pt;

				parser.associations.set( texture, { textures: textureIndex } );

				return texture;

			} ).catch( function () {

				return null;

			} );

			this.textureCache[ cacheKey ] = promise;

			return promise;

		}

		loadImageSource( sourceIndex, loader ) {

			const parser = this;
			const json = this.json;
			const options = this.options;

			if ( this.sourceCache[ sourceIndex ] !== undefined ) {

				return this.sourceCache[ sourceIndex ].then( ( texture ) => texture.clone() );

			}

			const sourceDef = json.images[ sourceIndex ];

			const URL = self.URL || self.webkitURL;

			let sourceURI = sourceDef.uri || '';
			let isObjectURL = false;

			if ( sourceDef.bufferView !== undefined ) {

				// Load binary image data from bufferView, if provided.

				sourceURI = parser.getDependency( 'bufferView', sourceDef.bufferView ).then( function ( bufferView ) {

					isObjectURL = true;
					const blob = new Blob( [ bufferView ], { type: sourceDef.mimeType } );
					sourceURI = URL.createObjectURL( blob );
					return sourceURI;

				} );

			} else if ( sourceDef.uri === undefined ) {

				throw new Error( 'THREE.GLTFLoader: Image ' + sourceIndex + ' is missing URI and bufferView' );

			}

			const promise = Promise.resolve( sourceURI ).then( function ( sourceURI ) {

				return new Promise( function ( resolve, reject ) {

					let onLoad = resolve;

					if ( loader.isImageBitmapLoader === true ) {

						onLoad = function ( imageBitmap ) {

							const texture = new Mi( imageBitmap );
							texture.needsUpdate = true;

							resolve( texture );

						};

					}

					loader.load( _p.resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

				} );

			} ).then( function ( texture ) {

				// Clean up resources and configure Texture.

				if ( isObjectURL === true ) {

					URL.revokeObjectURL( sourceURI );

				}

				texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType( sourceDef.uri );

				return texture;

			} ).catch( function ( error ) {

				console.error( 'THREE.GLTFLoader: Couldn\'t load texture', sourceURI );
				throw error;

			} );

			this.sourceCache[ sourceIndex ] = promise;
			return promise;

		}

		/**
		 * Asynchronously assigns a texture to the given material parameters.
		 * @param {Object} materialParams
		 * @param {string} mapName
		 * @param {Object} mapDef
		 * @return {Promise<Texture>}
		 */
		assignTexture( materialParams, mapName, mapDef, colorSpace ) {

			const parser = this;

			return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

				if ( ! texture ) return null;

				if ( mapDef.texCoord !== undefined && mapDef.texCoord > 0 ) {

					texture = texture.clone();
					texture.channel = mapDef.texCoord;

				}

				if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

					const transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

					if ( transform ) {

						const gltfReference = parser.associations.get( texture );
						texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );
						parser.associations.set( texture, gltfReference );

					}

				}

				if ( colorSpace !== undefined ) {

					texture.colorSpace = colorSpace;

				}

				materialParams[ mapName ] = texture;

				return texture;

			} );

		}

		/**
		 * Assigns final material to a Mesh, Line, or Points instance. The instance
		 * already has a material (generated from the glTF material options alone)
		 * but reuse of the same glTF material may require multiple threejs materials
		 * to accommodate different primitive types, defines, etc. New materials will
		 * be created if necessary, and reused from a cache.
		 * @param  {Object3D} mesh Mesh, Line, or Points instance.
		 */
		assignFinalMaterial( mesh ) {

			const geometry = mesh.geometry;
			let material = mesh.material;

			const useDerivativeTangents = geometry.attributes.tangent === undefined;
			const useVertexColors = geometry.attributes.color !== undefined;
			const useFlatShading = geometry.attributes.normal === undefined;

			if ( mesh.isPoints ) {

				const cacheKey = 'PointsMaterial:' + material.uuid;

				let pointsMaterial = this.cache.get( cacheKey );

				if ( ! pointsMaterial ) {

					pointsMaterial = new wh();
					$r.prototype.copy.call( pointsMaterial, material );
					pointsMaterial.color.copy( material.color );
					pointsMaterial.map = material.map;
					pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

					this.cache.add( cacheKey, pointsMaterial );

				}

				material = pointsMaterial;

			} else if ( mesh.isLine ) {

				const cacheKey = 'LineBasicMaterial:' + material.uuid;

				let lineMaterial = this.cache.get( cacheKey );

				if ( ! lineMaterial ) {

					lineMaterial = new fh();
					$r.prototype.copy.call( lineMaterial, material );
					lineMaterial.color.copy( material.color );
					lineMaterial.map = material.map;

					this.cache.add( cacheKey, lineMaterial );

				}

				material = lineMaterial;

			}

			// Clone the material if it will be modified
			if ( useDerivativeTangents || useVertexColors || useFlatShading ) {

				let cacheKey = 'ClonedMaterial:' + material.uuid + ':';

				if ( useDerivativeTangents ) cacheKey += 'derivative-tangents:';
				if ( useVertexColors ) cacheKey += 'vertex-colors:';
				if ( useFlatShading ) cacheKey += 'flat-shading:';

				let cachedMaterial = this.cache.get( cacheKey );

				if ( ! cachedMaterial ) {

					cachedMaterial = material.clone();

					if ( useVertexColors ) cachedMaterial.vertexColors = true;
					if ( useFlatShading ) cachedMaterial.flatShading = true;

					if ( useDerivativeTangents ) {

						// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
						if ( cachedMaterial.normalScale ) cachedMaterial.normalScale.y *= - 1;
						if ( cachedMaterial.clearcoatNormalScale ) cachedMaterial.clearcoatNormalScale.y *= - 1;

					}

					this.cache.add( cacheKey, cachedMaterial );

					this.associations.set( cachedMaterial, this.associations.get( material ) );

				}

				material = cachedMaterial;

			}

			mesh.material = material;

		}

		getMaterialType( /* materialIndex */ ) {

			return hd;

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
		 * @param {number} materialIndex
		 * @return {Promise<Material>}
		 */
		loadMaterial( materialIndex ) {

			const parser = this;
			const json = this.json;
			const extensions = this.extensions;
			const materialDef = json.materials[ materialIndex ];

			let materialType;
			const materialParams = {};
			const materialExtensions = materialDef.extensions || {};

			const pending = [];

			if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

				const kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
				materialType = kmuExtension.getMaterialType();
				pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

			} else {

				// Specification:
				// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

				const metallicRoughness = materialDef.pbrMetallicRoughness || {};

				materialParams.color = new Zr( 1.0, 1.0, 1.0 );
				materialParams.opacity = 1.0;

				if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

					const array = metallicRoughness.baseColorFactor;

					materialParams.color.setRGB( array[ 0 ], array[ 1 ], array[ 2 ], je );
					materialParams.opacity = array[ 3 ];

				}

				if ( metallicRoughness.baseColorTexture !== undefined ) {

					pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, Xe ) );

				}

				materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
				materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

				if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

					pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
					pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

				}

				materialType = this._invokeOne( function ( ext ) {

					return ext.getMaterialType && ext.getMaterialType( materialIndex );

				} );

				pending.push( Promise.all( this._invokeAll( function ( ext ) {

					return ext.extendMaterialParams && ext.extendMaterialParams( materialIndex, materialParams );

				} ) ) );

			}

			if ( materialDef.doubleSided === true ) {

				materialParams.side = p;

			}

			const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

			if ( alphaMode === ALPHA_MODES.BLEND ) {

				materialParams.transparent = true;

				// See: https://github.com/mrdoob/three.js/issues/17706
				materialParams.depthWrite = false;

			} else {

				materialParams.transparent = false;

				if ( alphaMode === ALPHA_MODES.MASK ) {

					materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

				}

			}

			if ( materialDef.normalTexture !== undefined && materialType !== Qr ) {

				pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

				materialParams.normalScale = new $n( 1, 1 );

				if ( materialDef.normalTexture.scale !== undefined ) {

					const scale = materialDef.normalTexture.scale;

					materialParams.normalScale.set( scale, scale );

				}

			}

			if ( materialDef.occlusionTexture !== undefined && materialType !== Qr ) {

				pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

				if ( materialDef.occlusionTexture.strength !== undefined ) {

					materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

				}

			}

			if ( materialDef.emissiveFactor !== undefined && materialType !== Qr ) {

				const emissiveFactor = materialDef.emissiveFactor;
				materialParams.emissive = new Zr().setRGB( emissiveFactor[ 0 ], emissiveFactor[ 1 ], emissiveFactor[ 2 ], je );

			}

			if ( materialDef.emissiveTexture !== undefined && materialType !== Qr ) {

				pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture, Xe ) );

			}

			return Promise.all( pending ).then( function () {

				const material = new materialType( materialParams );

				if ( materialDef.name ) material.name = materialDef.name;

				assignExtrasToUserData( material, materialDef );

				parser.associations.set( material, { materials: materialIndex } );

				if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

				return material;

			} );

		}

		/** When Object3D instances are targeted by animation, they need unique names. */
		createUniqueName( originalName ) {

			const sanitizedName = Qp.sanitizeNodeName( originalName || '' );

			if ( sanitizedName in this.nodeNamesUsed ) {

				return sanitizedName + '_' + ( ++ this.nodeNamesUsed[ sanitizedName ] );

			} else {

				this.nodeNamesUsed[ sanitizedName ] = 0;

				return sanitizedName;

			}

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
		 *
		 * Creates BufferGeometries from primitives.
		 *
		 * @param {Array<GLTF.Primitive>} primitives
		 * @return {Promise<Array<BufferGeometry>>}
		 */
		loadGeometries( primitives ) {

			const parser = this;
			const extensions = this.extensions;
			const cache = this.primitiveCache;

			function createDracoPrimitive( primitive ) {

				return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
					.decodePrimitive( primitive, parser )
					.then( function ( geometry ) {

						return addPrimitiveAttributes( geometry, primitive, parser );

					} );

			}

			const pending = [];

			for ( let i = 0, il = primitives.length; i < il; i ++ ) {

				const primitive = primitives[ i ];
				const cacheKey = createPrimitiveKey( primitive );

				// See if we've already created this geometry
				const cached = cache[ cacheKey ];

				if ( cached ) {

					// Use the cached geometry if it exists
					pending.push( cached.promise );

				} else {

					let geometryPromise;

					if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

						// Use DRACO geometry if available
						geometryPromise = createDracoPrimitive( primitive );

					} else {

						// Otherwise create a new geometry
						geometryPromise = addPrimitiveAttributes( new Es(), primitive, parser );

					}

					// Cache this geometry
					cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

					pending.push( geometryPromise );

				}

			}

			return Promise.all( pending );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
		 * @param {number} meshIndex
		 * @return {Promise<Group|Mesh|SkinnedMesh>}
		 */
		loadMesh( meshIndex ) {

			const parser = this;
			const json = this.json;
			const extensions = this.extensions;

			const meshDef = json.meshes[ meshIndex ];
			const primitives = meshDef.primitives;

			const pending = [];

			for ( let i = 0, il = primitives.length; i < il; i ++ ) {

				const material = primitives[ i ].material === undefined
					? createDefaultMaterial( this.cache )
					: this.getDependency( 'material', primitives[ i ].material );

				pending.push( material );

			}

			pending.push( parser.loadGeometries( primitives ) );

			return Promise.all( pending ).then( function ( results ) {

				const materials = results.slice( 0, results.length - 1 );
				const geometries = results[ results.length - 1 ];

				const meshes = [];

				for ( let i = 0, il = geometries.length; i < il; i ++ ) {

					const geometry = geometries[ i ];
					const primitive = primitives[ i ];

					// 1. create Mesh

					let mesh;

					const material = materials[ i ];

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
							primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
							primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
							primitive.mode === undefined ) {

						// .isSkinnedMesh isn't in glTF spec. See ._markDefs()
						mesh = meshDef.isSkinnedMesh === true
							? new Fc( geometry, material )
							: new Vs( geometry, material );

						if ( mesh.isSkinnedMesh === true ) {

							// normalize skin weights to fix malformed assets (see #15319)
							mesh.normalizeSkinWeights();

						}

						if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

							mesh.geometry = toTrianglesDrawMode( mesh.geometry, Be );

						} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

							mesh.geometry = toTrianglesDrawMode( mesh.geometry, ze );

						}

					} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

						mesh = new Eh( geometry, material );

					} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

						mesh = new Mh( geometry, material );

					} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

						mesh = new Th( geometry, material );

					} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

						mesh = new Lh( geometry, material );

					} else {

						throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

					}

					if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

						updateMorphTargets( mesh, meshDef );

					}

					mesh.name = parser.createUniqueName( meshDef.name || ( 'mesh_' + meshIndex ) );

					assignExtrasToUserData( mesh, meshDef );

					if ( primitive.extensions ) addUnknownExtensionsToUserData( extensions, mesh, primitive );

					parser.assignFinalMaterial( mesh );

					meshes.push( mesh );

				}

				for ( let i = 0, il = meshes.length; i < il; i ++ ) {

					parser.associations.set( meshes[ i ], {
						meshes: meshIndex,
						primitives: i
					} );

				}

				if ( meshes.length === 1 ) {

					if ( meshDef.extensions ) addUnknownExtensionsToUserData( extensions, meshes[ 0 ], meshDef );

					return meshes[ 0 ];

				}

				const group = new jl();

				if ( meshDef.extensions ) addUnknownExtensionsToUserData( extensions, group, meshDef );

				parser.associations.set( group, { meshes: meshIndex } );

				for ( let i = 0, il = meshes.length; i < il; i ++ ) {

					group.add( meshes[ i ] );

				}

				return group;

			} );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
		 * @param {number} cameraIndex
		 * @return {Promise<THREE.Camera>}
		 */
		loadCamera( cameraIndex ) {

			let camera;
			const cameraDef = this.json.cameras[ cameraIndex ];
			const params = cameraDef[ cameraDef.type ];

			if ( ! params ) {

				console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
				return;

			}

			if ( cameraDef.type === 'perspective' ) {

				camera = new ta( Kn.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

			} else if ( cameraDef.type === 'orthographic' ) {

				camera = new Aa( - params.xmag, params.xmag, params.ymag, - params.ymag, params.znear, params.zfar );

			}

			if ( cameraDef.name ) camera.name = this.createUniqueName( cameraDef.name );

			assignExtrasToUserData( camera, cameraDef );

			return Promise.resolve( camera );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
		 * @param {number} skinIndex
		 * @return {Promise<Skeleton>}
		 */
		loadSkin( skinIndex ) {

			const skinDef = this.json.skins[ skinIndex ];

			const pending = [];

			for ( let i = 0, il = skinDef.joints.length; i < il; i ++ ) {

				pending.push( this._loadNodeShallow( skinDef.joints[ i ] ) );

			}

			if ( skinDef.inverseBindMatrices !== undefined ) {

				pending.push( this.getDependency( 'accessor', skinDef.inverseBindMatrices ) );

			} else {

				pending.push( null );

			}

			return Promise.all( pending ).then( function ( results ) {

				const inverseBindMatrices = results.pop();
				const jointNodes = results;

				// Note that bones (joint nodes) may or may not be in the
				// scene graph at this time.

				const bones = [];
				const boneInverses = [];

				for ( let i = 0, il = jointNodes.length; i < il; i ++ ) {

					const jointNode = jointNodes[ i ];

					if ( jointNode ) {

						bones.push( jointNode );

						const mat = new ar();

						if ( inverseBindMatrices !== null ) {

							mat.fromArray( inverseBindMatrices.array, i * 16 );

						}

						boneInverses.push( mat );

					} else {

						console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[ i ] );

					}

				}

				return new Vc( bones, boneInverses );

			} );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
		 * @param {number} animationIndex
		 * @return {Promise<AnimationClip>}
		 */
		loadAnimation( animationIndex ) {

			const json = this.json;
			const parser = this;

			const animationDef = json.animations[ animationIndex ];
			const animationName = animationDef.name ? animationDef.name : 'animation_' + animationIndex;

			const pendingNodes = [];
			const pendingInputAccessors = [];
			const pendingOutputAccessors = [];
			const pendingSamplers = [];
			const pendingTargets = [];

			for ( let i = 0, il = animationDef.channels.length; i < il; i ++ ) {

				const channel = animationDef.channels[ i ];
				const sampler = animationDef.samplers[ channel.sampler ];
				const target = channel.target;
				const name = target.node;
				const input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
				const output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

				if ( target.node === undefined ) continue;

				pendingNodes.push( this.getDependency( 'node', name ) );
				pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
				pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
				pendingSamplers.push( sampler );
				pendingTargets.push( target );

			}

			return Promise.all( [

				Promise.all( pendingNodes ),
				Promise.all( pendingInputAccessors ),
				Promise.all( pendingOutputAccessors ),
				Promise.all( pendingSamplers ),
				Promise.all( pendingTargets )

			] ).then( function ( dependencies ) {

				const nodes = dependencies[ 0 ];
				const inputAccessors = dependencies[ 1 ];
				const outputAccessors = dependencies[ 2 ];
				const samplers = dependencies[ 3 ];
				const targets = dependencies[ 4 ];

				const tracks = [];

				for ( let i = 0, il = nodes.length; i < il; i ++ ) {

					const node = nodes[ i ];
					const inputAccessor = inputAccessors[ i ];
					const outputAccessor = outputAccessors[ i ];
					const sampler = samplers[ i ];
					const target = targets[ i ];

					if ( node === undefined ) continue;

					if ( node.updateMatrix ) {

						node.updateMatrix();

					}

					const createdTracks = parser._createAnimationTracks( node, inputAccessor, outputAccessor, sampler, target );

					if ( createdTracks ) {

						for ( let k = 0; k < createdTracks.length; k ++ ) {

							tracks.push( createdTracks[ k ] );

						}

					}

				}

				return new Od( animationName, undefined, tracks );

			} );

		}

		createNodeMesh( nodeIndex ) {

			const json = this.json;
			const parser = this;
			const nodeDef = json.nodes[ nodeIndex ];

			if ( nodeDef.mesh === undefined ) return null;

			return parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

				const node = parser._getNodeRef( parser.meshCache, nodeDef.mesh, mesh );

				// if weights are provided on the node, override weights on the mesh.
				if ( nodeDef.weights !== undefined ) {

					node.traverse( function ( o ) {

						if ( ! o.isMesh ) return;

						for ( let i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

							o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

						}

					} );

				}

				return node;

			} );

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
		 * @param {number} nodeIndex
		 * @return {Promise<Object3D>}
		 */
		loadNode( nodeIndex ) {

			const json = this.json;
			const parser = this;

			const nodeDef = json.nodes[ nodeIndex ];

			const nodePending = parser._loadNodeShallow( nodeIndex );

			const childPending = [];
			const childrenDef = nodeDef.children || [];

			for ( let i = 0, il = childrenDef.length; i < il; i ++ ) {

				childPending.push( parser.getDependency( 'node', childrenDef[ i ] ) );

			}

			const skeletonPending = nodeDef.skin === undefined
				? Promise.resolve( null )
				: parser.getDependency( 'skin', nodeDef.skin );

			return Promise.all( [
				nodePending,
				Promise.all( childPending ),
				skeletonPending
			] ).then( function ( results ) {

				const node = results[ 0 ];
				const children = results[ 1 ];
				const skeleton = results[ 2 ];

				if ( skeleton !== null ) {

					// This full traverse should be fine because
					// child glTF nodes have not been added to this node yet.
					node.traverse( function ( mesh ) {

						if ( ! mesh.isSkinnedMesh ) return;

						mesh.bind( skeleton, _identityMatrix );

					} );

				}

				for ( let i = 0, il = children.length; i < il; i ++ ) {

					node.add( children[ i ] );

				}

				return node;

			} );

		}

		// ._loadNodeShallow() parses a single node.
		// skin and child nodes are created and added in .loadNode() (no '_' prefix).
		_loadNodeShallow( nodeIndex ) {

			const json = this.json;
			const extensions = this.extensions;
			const parser = this;

			// This method is called from .loadNode() and .loadSkin().
			// Cache a node to avoid duplication.

			if ( this.nodeCache[ nodeIndex ] !== undefined ) {

				return this.nodeCache[ nodeIndex ];

			}

			const nodeDef = json.nodes[ nodeIndex ];

			// reserve node's name before its dependencies, so the root has the intended name.
			const nodeName = nodeDef.name ? parser.createUniqueName( nodeDef.name ) : '';

			const pending = [];

			const meshPromise = parser._invokeOne( function ( ext ) {

				return ext.createNodeMesh && ext.createNodeMesh( nodeIndex );

			} );

			if ( meshPromise ) {

				pending.push( meshPromise );

			}

			if ( nodeDef.camera !== undefined ) {

				pending.push( parser.getDependency( 'camera', nodeDef.camera ).then( function ( camera ) {

					return parser._getNodeRef( parser.cameraCache, nodeDef.camera, camera );

				} ) );

			}

			parser._invokeAll( function ( ext ) {

				return ext.createNodeAttachment && ext.createNodeAttachment( nodeIndex );

			} ).forEach( function ( promise ) {

				pending.push( promise );

			} );

			this.nodeCache[ nodeIndex ] = Promise.all( pending ).then( function ( objects ) {

				let node;

				// .isBone isn't in glTF spec. See ._markDefs
				if ( nodeDef.isBone === true ) {

					node = new Bc();

				} else if ( objects.length > 1 ) {

					node = new jl();

				} else if ( objects.length === 1 ) {

					node = objects[ 0 ];

				} else {

					node = new Ur();

				}

				if ( node !== objects[ 0 ] ) {

					for ( let i = 0, il = objects.length; i < il; i ++ ) {

						node.add( objects[ i ] );

					}

				}

				if ( nodeDef.name ) {

					node.userData.name = nodeDef.name;
					node.name = nodeName;

				}

				assignExtrasToUserData( node, nodeDef );

				if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

				if ( nodeDef.matrix !== undefined ) {

					const matrix = new ar();
					matrix.fromArray( nodeDef.matrix );
					node.applyMatrix4( matrix );

				} else {

					if ( nodeDef.translation !== undefined ) {

						node.position.fromArray( nodeDef.translation );

					}

					if ( nodeDef.rotation !== undefined ) {

						node.quaternion.fromArray( nodeDef.rotation );

					}

					if ( nodeDef.scale !== undefined ) {

						node.scale.fromArray( nodeDef.scale );

					}

				}

				if ( ! parser.associations.has( node ) ) {

					parser.associations.set( node, {} );

				}

				parser.associations.get( node ).nodes = nodeIndex;

				return node;

			} );

			return this.nodeCache[ nodeIndex ];

		}

		/**
		 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
		 * @param {number} sceneIndex
		 * @return {Promise<Group>}
		 */
		loadScene( sceneIndex ) {

			const extensions = this.extensions;
			const sceneDef = this.json.scenes[ sceneIndex ];
			const parser = this;

			// Loader returns Group, not Scene.
			// See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
			const scene = new jl();
			if ( sceneDef.name ) scene.name = parser.createUniqueName( sceneDef.name );

			assignExtrasToUserData( scene, sceneDef );

			if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

			const nodeIds = sceneDef.nodes || [];

			const pending = [];

			for ( let i = 0, il = nodeIds.length; i < il; i ++ ) {

				pending.push( parser.getDependency( 'node', nodeIds[ i ] ) );

			}

			return Promise.all( pending ).then( function ( nodes ) {

				for ( let i = 0, il = nodes.length; i < il; i ++ ) {

					scene.add( nodes[ i ] );

				}

				// Removes dangling associations, associations that reference a node that
				// didn't make it into the scene.
				const reduceAssociations = ( node ) => {

					const reducedAssociations = new Map();

					for ( const [ key, value ] of parser.associations ) {

						if ( key instanceof $r || key instanceof Mi ) {

							reducedAssociations.set( key, value );

						}

					}

					node.traverse( ( node ) => {

						const mappings = parser.associations.get( node );

						if ( mappings != null ) {

							reducedAssociations.set( node, mappings );

						}

					} );

					return reducedAssociations;

				};

				parser.associations = reduceAssociations( scene );

				return scene;

			} );

		}

		_createAnimationTracks( node, inputAccessor, outputAccessor, sampler, target ) {

			const tracks = [];

			const targetName = node.name ? node.name : node.uuid;
			const targetNames = [];

			if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

				node.traverse( function ( object ) {

					if ( object.morphTargetInfluences ) {

						targetNames.push( object.name ? object.name : object.uuid );

					}

				} );

			} else {

				targetNames.push( targetName );

			}

			let TypedKeyframeTrack;

			switch ( PATH_PROPERTIES[ target.path ] ) {

				case PATH_PROPERTIES.weights:

					TypedKeyframeTrack = Ld;
					break;

				case PATH_PROPERTIES.rotation:

					TypedKeyframeTrack = Ud;
					break;

				case PATH_PROPERTIES.position:
				case PATH_PROPERTIES.scale:

					TypedKeyframeTrack = Dd;
					break;

				default:

					switch ( outputAccessor.itemSize ) {

						case 1:
							TypedKeyframeTrack = Ld;
							break;
						case 2:
						case 3:
						default:
							TypedKeyframeTrack = Dd;
							break;

					}

					break;

			}

			const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : Pe;


			const outputArray = this._getArrayFromAccessor( outputAccessor );

			for ( let j = 0, jl = targetNames.length; j < jl; j ++ ) {

				const track = new TypedKeyframeTrack(
					targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
					inputAccessor.array,
					outputArray,
					interpolation
				);

				// Override interpolation with custom factory method.
				if ( sampler.interpolation === 'CUBICSPLINE' ) {

					this._createCubicSplineTrackInterpolant( track );

				}

				tracks.push( track );

			}

			return tracks;

		}

		_getArrayFromAccessor( accessor ) {

			let outputArray = accessor.array;

			if ( accessor.normalized ) {

				const scale = getNormalizedComponentScale( outputArray.constructor );
				const scaled = new Float32Array( outputArray.length );

				for ( let j = 0, jl = outputArray.length; j < jl; j ++ ) {

					scaled[ j ] = outputArray[ j ] * scale;

				}

				outputArray = scaled;

			}

			return outputArray;

		}

		_createCubicSplineTrackInterpolant( track ) {

			track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

				// A CUBICSPLINE keyframe in glTF has three output values for each input value,
				// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
				// must be divided by three to get the interpolant's sampleSize argument.

				const interpolantType = ( this instanceof Ud ) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;

				return new interpolantType( this.times, this.values, this.getValueSize() / 3, result );

			};

			// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
			track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

		}

	}

	/**
	 * @param {BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 */
	function computeBounds( geometry, primitiveDef, parser ) {

		const attributes = primitiveDef.attributes;

		const box = new Ui();

		if ( attributes.POSITION !== undefined ) {

			const accessor = parser.json.accessors[ attributes.POSITION ];

			const min = accessor.min;
			const max = accessor.max;

			// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

			if ( min !== undefined && max !== undefined ) {

				box.set(
					new Pi( min[ 0 ], min[ 1 ], min[ 2 ] ),
					new Pi( max[ 0 ], max[ 1 ], max[ 2 ] )
				);

				if ( accessor.normalized ) {

					const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
					box.min.multiplyScalar( boxScale );
					box.max.multiplyScalar( boxScale );

				}

			} else {

				console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

				return;

			}

		} else {

			return;

		}

		const targets = primitiveDef.targets;

		if ( targets !== undefined ) {

			const maxDisplacement = new Pi();
			const vector = new Pi();

			for ( let i = 0, il = targets.length; i < il; i ++ ) {

				const target = targets[ i ];

				if ( target.POSITION !== undefined ) {

					const accessor = parser.json.accessors[ target.POSITION ];
					const min = accessor.min;
					const max = accessor.max;

					// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

					if ( min !== undefined && max !== undefined ) {

						// we need to get max of absolute components because target weight is [-1,1]
						vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
						vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
						vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );


						if ( accessor.normalized ) {

							const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
							vector.multiplyScalar( boxScale );

						}

						// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
						// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
						// are used to implement key-frame animations and as such only two are active at a time - this results in very large
						// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
						maxDisplacement.max( vector );

					} else {

						console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

					}

				}

			}

			// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
			box.expandByVector( maxDisplacement );

		}

		geometry.boundingBox = box;

		const sphere = new Ki();

		box.getCenter( sphere.center );
		sphere.radius = box.min.distanceTo( box.max ) / 2;

		geometry.boundingSphere = sphere;

	}

	/**
	 * @param {BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 * @return {Promise<BufferGeometry>}
	 */
	function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

		const attributes = primitiveDef.attributes;

		const pending = [];

		function assignAttributeAccessor( accessorIndex, attributeName ) {

			return parser.getDependency( 'accessor', accessorIndex )
				.then( function ( accessor ) {

					geometry.setAttribute( attributeName, accessor );

				} );

		}

		for ( const gltfAttributeName in attributes ) {

			const threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

			// Skip attributes already provided by e.g. Draco extension.
			if ( threeAttributeName in geometry.attributes ) continue;

			pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

		}

		if ( primitiveDef.indices !== undefined && ! geometry.index ) {

			const accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

				geometry.setIndex( accessor );

			} );

			pending.push( accessor );

		}

		if ( di.workingColorSpace !== je && 'COLOR_0' in attributes ) {

			console.warn( `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${di.workingColorSpace}" not supported.` );

		}

		assignExtrasToUserData( geometry, primitiveDef );

		computeBounds( geometry, primitiveDef, parser );

		return Promise.all( pending ).then( function () {

			return primitiveDef.targets !== undefined
				? addMorphTargets( geometry, primitiveDef.targets, parser )
				: geometry;

		} );

	}

	// OrbitControls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one-finger move
	//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
	//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

	const _changeEvent = { type: 'change' };
	const _startEvent = { type: 'start' };
	const _endEvent = { type: 'end' };
	const _ray = new sr();
	const _plane = new la();
	const TILT_LIMIT = Math.cos( 70 * Kn.DEG2RAD );

	class OrbitControls extends Bn {

		constructor( object, domElement ) {

			super();

			this.object = object;
			this.domElement = domElement;
			this.domElement.style.touchAction = 'none'; // disable touch scroll

			// Set to false to disable this control
			this.enabled = true;

			// "target" sets the location of focus, where the object orbits around
			this.target = new Pi();

			// Sets the 3D cursor (similar to Blender), from which the maxTargetRadius takes effect
			this.cursor = new Pi();

			// How far you can dolly in and out ( PerspectiveCamera only )
			this.minDistance = 0;
			this.maxDistance = Infinity;

			// How far you can zoom in and out ( OrthographicCamera only )
			this.minZoom = 0;
			this.maxZoom = Infinity;

			// Limit camera target within a spherical area around the cursor
			this.minTargetRadius = 0;
			this.maxTargetRadius = Infinity;

			// How far you can orbit vertically, upper and lower limits.
			// Range is 0 to Math.PI radians.
			this.minPolarAngle = 0; // radians
			this.maxPolarAngle = Math.PI; // radians

			// How far you can orbit horizontally, upper and lower limits.
			// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
			this.minAzimuthAngle = - Infinity; // radians
			this.maxAzimuthAngle = Infinity; // radians

			// Set to true to enable damping (inertia)
			// If damping is enabled, you must call controls.update() in your animation loop
			this.enableDamping = false;
			this.dampingFactor = 0.05;

			// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
			// Set to false to disable zooming
			this.enableZoom = true;
			this.zoomSpeed = 1.0;

			// Set to false to disable rotating
			this.enableRotate = true;
			this.rotateSpeed = 1.0;

			// Set to false to disable panning
			this.enablePan = true;
			this.panSpeed = 1.0;
			this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
			this.keyPanSpeed = 7.0;	// pixels moved per arrow key push
			this.zoomToCursor = false;

			// Set to true to automatically rotate around the target
			// If auto-rotate is enabled, you must call controls.update() in your animation loop
			this.autoRotate = false;
			this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

			// The four arrow keys
			this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };

			// Mouse buttons
			this.mouseButtons = { LEFT: e.ROTATE, MIDDLE: e.DOLLY, RIGHT: e.PAN };

			// Touch fingers
			this.touches = { ONE: n.ROTATE, TWO: n.DOLLY_PAN };

			// for reset
			this.target0 = this.target.clone();
			this.position0 = this.object.position.clone();
			this.zoom0 = this.object.zoom;

			// the target DOM element for key events
			this._domElementKeyEvents = null;

			//
			// public methods
			//

			this.getPolarAngle = function () {

				return spherical.phi;

			};

			this.getAzimuthalAngle = function () {

				return spherical.theta;

			};

			this.getDistance = function () {

				return this.object.position.distanceTo( this.target );

			};

			this.listenToKeyEvents = function ( domElement ) {

				domElement.addEventListener( 'keydown', onKeyDown );
				this._domElementKeyEvents = domElement;

			};

			this.stopListenToKeyEvents = function () {

				this._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );
				this._domElementKeyEvents = null;

			};

			this.saveState = function () {

				scope.target0.copy( scope.target );
				scope.position0.copy( scope.object.position );
				scope.zoom0 = scope.object.zoom;

			};

			this.reset = function () {

				scope.target.copy( scope.target0 );
				scope.object.position.copy( scope.position0 );
				scope.object.zoom = scope.zoom0;

				scope.object.updateProjectionMatrix();
				scope.dispatchEvent( _changeEvent );

				scope.update();

				state = STATE.NONE;

			};

			// this method is exposed, but perhaps it would be better if we can make it private...
			this.update = function () {

				const offset = new Pi();

				// so camera.up is the orbit axis
				const quat = new Ci().setFromUnitVectors( object.up, new Pi( 0, 1, 0 ) );
				const quatInverse = quat.clone().invert();

				const lastPosition = new Pi();
				const lastQuaternion = new Ci();
				const lastTargetPosition = new Pi();

				const twoPI = 2 * Math.PI;

				return function update( deltaTime = null ) {

					const position = scope.object.position;

					offset.copy( position ).sub( scope.target );

					// rotate offset to "y-axis-is-up" space
					offset.applyQuaternion( quat );

					// angle from z-axis around y-axis
					spherical.setFromVector3( offset );

					if ( scope.autoRotate && state === STATE.NONE ) {

						rotateLeft( getAutoRotationAngle( deltaTime ) );

					}

					if ( scope.enableDamping ) {

						spherical.theta += sphericalDelta.theta * scope.dampingFactor;
						spherical.phi += sphericalDelta.phi * scope.dampingFactor;

					} else {

						spherical.theta += sphericalDelta.theta;
						spherical.phi += sphericalDelta.phi;

					}

					// restrict theta to be between desired limits

					let min = scope.minAzimuthAngle;
					let max = scope.maxAzimuthAngle;

					if ( isFinite( min ) && isFinite( max ) ) {

						if ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;

						if ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;

						if ( min <= max ) {

							spherical.theta = Math.max( min, Math.min( max, spherical.theta ) );

						} else {

							spherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?
								Math.max( min, spherical.theta ) :
								Math.min( max, spherical.theta );

						}

					}

					// restrict phi to be between desired limits
					spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

					spherical.makeSafe();


					// move target to panned location

					if ( scope.enableDamping === true ) {

						scope.target.addScaledVector( panOffset, scope.dampingFactor );

					} else {

						scope.target.add( panOffset );

					}

					// Limit the target distance from the cursor to create a sphere around the center of interest
					scope.target.sub( scope.cursor );
					scope.target.clampLength( scope.minTargetRadius, scope.maxTargetRadius );
					scope.target.add( scope.cursor );

					let zoomChanged = false;
					// adjust the camera position based on zoom only if we're not zooming to the cursor or if it's an ortho camera
					// we adjust zoom later in these cases
					if ( scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera ) {

						spherical.radius = clampDistance( spherical.radius );

					} else {

						const prevRadius = spherical.radius;
						spherical.radius = clampDistance( spherical.radius * scale );
						zoomChanged = prevRadius != spherical.radius;

					}

					offset.setFromSpherical( spherical );

					// rotate offset back to "camera-up-vector-is-up" space
					offset.applyQuaternion( quatInverse );

					position.copy( scope.target ).add( offset );

					scope.object.lookAt( scope.target );

					if ( scope.enableDamping === true ) {

						sphericalDelta.theta *= ( 1 - scope.dampingFactor );
						sphericalDelta.phi *= ( 1 - scope.dampingFactor );

						panOffset.multiplyScalar( 1 - scope.dampingFactor );

					} else {

						sphericalDelta.set( 0, 0, 0 );

						panOffset.set( 0, 0, 0 );

					}

					// adjust camera position
					if ( scope.zoomToCursor && performCursorZoom ) {

						let newRadius = null;
						if ( scope.object.isPerspectiveCamera ) {

							// move the camera down the pointer ray
							// this method avoids floating point error
							const prevRadius = offset.length();
							newRadius = clampDistance( prevRadius * scale );

							const radiusDelta = prevRadius - newRadius;
							scope.object.position.addScaledVector( dollyDirection, radiusDelta );
							scope.object.updateMatrixWorld();

							zoomChanged = !! radiusDelta;

						} else if ( scope.object.isOrthographicCamera ) {

							// adjust the ortho camera position based on zoom changes
							const mouseBefore = new Pi( mouse.x, mouse.y, 0 );
							mouseBefore.unproject( scope.object );

							const prevZoom = scope.object.zoom;
							scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / scale ) );
							scope.object.updateProjectionMatrix();

							zoomChanged = prevZoom !== scope.object.zoom;

							const mouseAfter = new Pi( mouse.x, mouse.y, 0 );
							mouseAfter.unproject( scope.object );

							scope.object.position.sub( mouseAfter ).add( mouseBefore );
							scope.object.updateMatrixWorld();

							newRadius = offset.length();

						} else {

							console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.' );
							scope.zoomToCursor = false;

						}

						// handle the placement of the target
						if ( newRadius !== null ) {

							if ( this.screenSpacePanning ) {

								// position the orbit target in front of the new camera position
								scope.target.set( 0, 0, - 1 )
									.transformDirection( scope.object.matrix )
									.multiplyScalar( newRadius )
									.add( scope.object.position );

							} else {

								// get the ray and translation plane to compute target
								_ray.origin.copy( scope.object.position );
								_ray.direction.set( 0, 0, - 1 ).transformDirection( scope.object.matrix );

								// if the camera is 20 degrees above the horizon then don't adjust the focus target to avoid
								// extremely large values
								if ( Math.abs( scope.object.up.dot( _ray.direction ) ) < TILT_LIMIT ) {

									object.lookAt( scope.target );

								} else {

									_plane.setFromNormalAndCoplanarPoint( scope.object.up, scope.target );
									_ray.intersectPlane( _plane, scope.target );

								}

							}

						}

					} else if ( scope.object.isOrthographicCamera ) {

						const prevZoom = scope.object.zoom;
						scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / scale ) );

						if ( prevZoom !== scope.object.zoom ) {

							scope.object.updateProjectionMatrix();
							zoomChanged = true;

						}

					}

					scale = 1;
					performCursorZoom = false;

					// update condition is:
					// min(camera displacement, camera rotation in radians)^2 > EPS
					// using small-angle approximation cos(x/2) = 1 - x^2 / 8

					if ( zoomChanged ||
						lastPosition.distanceToSquared( scope.object.position ) > EPS ||
						8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ||
						lastTargetPosition.distanceToSquared( scope.target ) > EPS ) {

						scope.dispatchEvent( _changeEvent );

						lastPosition.copy( scope.object.position );
						lastQuaternion.copy( scope.object.quaternion );
						lastTargetPosition.copy( scope.target );

						return true;

					}

					return false;

				};

			}();

			this.dispose = function () {

				scope.domElement.removeEventListener( 'contextmenu', onContextMenu );

				scope.domElement.removeEventListener( 'pointerdown', onPointerDown );
				scope.domElement.removeEventListener( 'pointercancel', onPointerUp );
				scope.domElement.removeEventListener( 'wheel', onMouseWheel );

				scope.domElement.removeEventListener( 'pointermove', onPointerMove );
				scope.domElement.removeEventListener( 'pointerup', onPointerUp );

				const document = scope.domElement.getRootNode(); // offscreen canvas compatibility

				document.removeEventListener( 'keydown', interceptControlDown, { capture: true } );

				if ( scope._domElementKeyEvents !== null ) {

					scope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );
					scope._domElementKeyEvents = null;

				}

				//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

			};

			//
			// internals
			//

			const scope = this;

			const STATE = {
				NONE: - 1,
				ROTATE: 0,
				DOLLY: 1,
				PAN: 2,
				TOUCH_ROTATE: 3,
				TOUCH_PAN: 4,
				TOUCH_DOLLY_PAN: 5,
				TOUCH_DOLLY_ROTATE: 6
			};

			let state = STATE.NONE;

			const EPS = 0.000001;

			// current position in spherical coordinates
			const spherical = new pm();
			const sphericalDelta = new pm();

			let scale = 1;
			const panOffset = new Pi();

			const rotateStart = new $n();
			const rotateEnd = new $n();
			const rotateDelta = new $n();

			const panStart = new $n();
			const panEnd = new $n();
			const panDelta = new $n();

			const dollyStart = new $n();
			const dollyEnd = new $n();
			const dollyDelta = new $n();

			const dollyDirection = new Pi();
			const mouse = new $n();
			let performCursorZoom = false;

			const pointers = [];
			const pointerPositions = {};

			let controlActive = false;

			function getAutoRotationAngle( deltaTime ) {

				if ( deltaTime !== null ) {

					return ( 2 * Math.PI / 60 * scope.autoRotateSpeed ) * deltaTime;

				} else {

					return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

				}

			}

			function getZoomScale( delta ) {

				const normalizedDelta = Math.abs( delta * 0.01 );
				return Math.pow( 0.95, scope.zoomSpeed * normalizedDelta );

			}

			function rotateLeft( angle ) {

				sphericalDelta.theta -= angle;

			}

			function rotateUp( angle ) {

				sphericalDelta.phi -= angle;

			}

			const panLeft = function () {

				const v = new Pi();

				return function panLeft( distance, objectMatrix ) {

					v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
					v.multiplyScalar( - distance );

					panOffset.add( v );

				};

			}();

			const panUp = function () {

				const v = new Pi();

				return function panUp( distance, objectMatrix ) {

					if ( scope.screenSpacePanning === true ) {

						v.setFromMatrixColumn( objectMatrix, 1 );

					} else {

						v.setFromMatrixColumn( objectMatrix, 0 );
						v.crossVectors( scope.object.up, v );

					}

					v.multiplyScalar( distance );

					panOffset.add( v );

				};

			}();

			// deltaX and deltaY are in pixels; right and down are positive
			const pan = function () {

				const offset = new Pi();

				return function pan( deltaX, deltaY ) {

					const element = scope.domElement;

					if ( scope.object.isPerspectiveCamera ) {

						// perspective
						const position = scope.object.position;
						offset.copy( position ).sub( scope.target );
						let targetDistance = offset.length();

						// half of the fov is center to top of screen
						targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

						// we use only clientHeight here so aspect ratio does not distort speed
						panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
						panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

					} else if ( scope.object.isOrthographicCamera ) {

						// orthographic
						panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
						panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

					} else {

						// camera neither orthographic nor perspective
						console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
						scope.enablePan = false;

					}

				};

			}();

			function dollyOut( dollyScale ) {

				if ( scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera ) {

					scale /= dollyScale;

				} else {

					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
					scope.enableZoom = false;

				}

			}

			function dollyIn( dollyScale ) {

				if ( scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera ) {

					scale *= dollyScale;

				} else {

					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
					scope.enableZoom = false;

				}

			}

			function updateZoomParameters( x, y ) {

				if ( ! scope.zoomToCursor ) {

					return;

				}

				performCursorZoom = true;

				const rect = scope.domElement.getBoundingClientRect();
				const dx = x - rect.left;
				const dy = y - rect.top;
				const w = rect.width;
				const h = rect.height;

				mouse.x = ( dx / w ) * 2 - 1;
				mouse.y = - ( dy / h ) * 2 + 1;

				dollyDirection.set( mouse.x, mouse.y, 1 ).unproject( scope.object ).sub( scope.object.position ).normalize();

			}

			function clampDistance( dist ) {

				return Math.max( scope.minDistance, Math.min( scope.maxDistance, dist ) );

			}

			//
			// event callbacks - update the object state
			//

			function handleMouseDownRotate( event ) {

				rotateStart.set( event.clientX, event.clientY );

			}

			function handleMouseDownDolly( event ) {

				updateZoomParameters( event.clientX, event.clientX );
				dollyStart.set( event.clientX, event.clientY );

			}

			function handleMouseDownPan( event ) {

				panStart.set( event.clientX, event.clientY );

			}

			function handleMouseMoveRotate( event ) {

				rotateEnd.set( event.clientX, event.clientY );

				rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

				const element = scope.domElement;

				rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

				rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

				rotateStart.copy( rotateEnd );

				scope.update();

			}

			function handleMouseMoveDolly( event ) {

				dollyEnd.set( event.clientX, event.clientY );

				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					dollyOut( getZoomScale( dollyDelta.y ) );

				} else if ( dollyDelta.y < 0 ) {

					dollyIn( getZoomScale( dollyDelta.y ) );

				}

				dollyStart.copy( dollyEnd );

				scope.update();

			}

			function handleMouseMovePan( event ) {

				panEnd.set( event.clientX, event.clientY );

				panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

				scope.update();

			}

			function handleMouseWheel( event ) {

				updateZoomParameters( event.clientX, event.clientY );

				if ( event.deltaY < 0 ) {

					dollyIn( getZoomScale( event.deltaY ) );

				} else if ( event.deltaY > 0 ) {

					dollyOut( getZoomScale( event.deltaY ) );

				}

				scope.update();

			}

			function handleKeyDown( event ) {

				let needsUpdate = false;

				switch ( event.code ) {

					case scope.keys.UP:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateUp( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( 0, scope.keyPanSpeed );

						}

						needsUpdate = true;
						break;

					case scope.keys.BOTTOM:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateUp( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( 0, - scope.keyPanSpeed );

						}

						needsUpdate = true;
						break;

					case scope.keys.LEFT:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateLeft( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( scope.keyPanSpeed, 0 );

						}

						needsUpdate = true;
						break;

					case scope.keys.RIGHT:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateLeft( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( - scope.keyPanSpeed, 0 );

						}

						needsUpdate = true;
						break;

				}

				if ( needsUpdate ) {

					// prevent the browser from scrolling on cursor keys
					event.preventDefault();

					scope.update();

				}


			}

			function handleTouchStartRotate( event ) {

				if ( pointers.length === 1 ) {

					rotateStart.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					rotateStart.set( x, y );

				}

			}

			function handleTouchStartPan( event ) {

				if ( pointers.length === 1 ) {

					panStart.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					panStart.set( x, y );

				}

			}

			function handleTouchStartDolly( event ) {

				const position = getSecondPointerPosition( event );

				const dx = event.pageX - position.x;
				const dy = event.pageY - position.y;

				const distance = Math.sqrt( dx * dx + dy * dy );

				dollyStart.set( 0, distance );

			}

			function handleTouchStartDollyPan( event ) {

				if ( scope.enableZoom ) handleTouchStartDolly( event );

				if ( scope.enablePan ) handleTouchStartPan( event );

			}

			function handleTouchStartDollyRotate( event ) {

				if ( scope.enableZoom ) handleTouchStartDolly( event );

				if ( scope.enableRotate ) handleTouchStartRotate( event );

			}

			function handleTouchMoveRotate( event ) {

				if ( pointers.length == 1 ) {

					rotateEnd.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					rotateEnd.set( x, y );

				}

				rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

				const element = scope.domElement;

				rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

				rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

				rotateStart.copy( rotateEnd );

			}

			function handleTouchMovePan( event ) {

				if ( pointers.length === 1 ) {

					panEnd.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					panEnd.set( x, y );

				}

				panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

			}

			function handleTouchMoveDolly( event ) {

				const position = getSecondPointerPosition( event );

				const dx = event.pageX - position.x;
				const dy = event.pageY - position.y;

				const distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );

				dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

				dollyOut( dollyDelta.y );

				dollyStart.copy( dollyEnd );

				const centerX = ( event.pageX + position.x ) * 0.5;
				const centerY = ( event.pageY + position.y ) * 0.5;

				updateZoomParameters( centerX, centerY );

			}

			function handleTouchMoveDollyPan( event ) {

				if ( scope.enableZoom ) handleTouchMoveDolly( event );

				if ( scope.enablePan ) handleTouchMovePan( event );

			}

			function handleTouchMoveDollyRotate( event ) {

				if ( scope.enableZoom ) handleTouchMoveDolly( event );

				if ( scope.enableRotate ) handleTouchMoveRotate( event );

			}

			//
			// event handlers - FSM: listen for events and reset state
			//

			function onPointerDown( event ) {

				if ( scope.enabled === false ) return;

				if ( pointers.length === 0 ) {

					scope.domElement.setPointerCapture( event.pointerId );

					scope.domElement.addEventListener( 'pointermove', onPointerMove );
					scope.domElement.addEventListener( 'pointerup', onPointerUp );

				}

				//

				if ( isTrackingPointer( event ) ) return;

				//

				addPointer( event );

				if ( event.pointerType === 'touch' ) {

					onTouchStart( event );

				} else {

					onMouseDown( event );

				}

			}

			function onPointerMove( event ) {

				if ( scope.enabled === false ) return;

				if ( event.pointerType === 'touch' ) {

					onTouchMove( event );

				} else {

					onMouseMove( event );

				}

			}

			function onPointerUp( event ) {

				removePointer( event );

				switch ( pointers.length ) {

					case 0:

						scope.domElement.releasePointerCapture( event.pointerId );

						scope.domElement.removeEventListener( 'pointermove', onPointerMove );
						scope.domElement.removeEventListener( 'pointerup', onPointerUp );

						scope.dispatchEvent( _endEvent );

						state = STATE.NONE;

						break;

					case 1:

						const pointerId = pointers[ 0 ];
						const position = pointerPositions[ pointerId ];

						// minimal placeholder event - allows state correction on pointer-up
						onTouchStart( { pointerId: pointerId, pageX: position.x, pageY: position.y } );

						break;

				}

			}

			function onMouseDown( event ) {

				let mouseAction;

				switch ( event.button ) {

					case 0:

						mouseAction = scope.mouseButtons.LEFT;
						break;

					case 1:

						mouseAction = scope.mouseButtons.MIDDLE;
						break;

					case 2:

						mouseAction = scope.mouseButtons.RIGHT;
						break;

					default:

						mouseAction = - 1;

				}

				switch ( mouseAction ) {

					case e.DOLLY:

						if ( scope.enableZoom === false ) return;

						handleMouseDownDolly( event );

						state = STATE.DOLLY;

						break;

					case e.ROTATE:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						} else {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						}

						break;

					case e.PAN:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						} else {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						}

						break;

					default:

						state = STATE.NONE;

				}

				if ( state !== STATE.NONE ) {

					scope.dispatchEvent( _startEvent );

				}

			}

			function onMouseMove( event ) {

				switch ( state ) {

					case STATE.ROTATE:

						if ( scope.enableRotate === false ) return;

						handleMouseMoveRotate( event );

						break;

					case STATE.DOLLY:

						if ( scope.enableZoom === false ) return;

						handleMouseMoveDolly( event );

						break;

					case STATE.PAN:

						if ( scope.enablePan === false ) return;

						handleMouseMovePan( event );

						break;

				}

			}

			function onMouseWheel( event ) {

				if ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;

				event.preventDefault();

				scope.dispatchEvent( _startEvent );

				handleMouseWheel( customWheelEvent( event ) );

				scope.dispatchEvent( _endEvent );

			}

			function customWheelEvent( event ) {

				const mode = event.deltaMode;

				// minimal wheel event altered to meet delta-zoom demand
				const newEvent = {
					clientX: event.clientX,
					clientY: event.clientY,
					deltaY: event.deltaY,
				};

				switch ( mode ) {

					case 1: // LINE_MODE
						newEvent.deltaY *= 16;
						break;

					case 2: // PAGE_MODE
						newEvent.deltaY *= 100;
						break;

				}

				// detect if event was triggered by pinching
				if ( event.ctrlKey && ! controlActive ) {

					newEvent.deltaY *= 10;

				}

				return newEvent;

			}

			function interceptControlDown( event ) {

				if ( event.key === 'Control' ) {

					controlActive = true;


					const document = scope.domElement.getRootNode(); // offscreen canvas compatibility

					document.addEventListener( 'keyup', interceptControlUp, { passive: true, capture: true } );

				}

			}

			function interceptControlUp( event ) {

				if ( event.key === 'Control' ) {

					controlActive = false;


					const document = scope.domElement.getRootNode(); // offscreen canvas compatibility

					document.removeEventListener( 'keyup', interceptControlUp, { passive: true, capture: true } );

				}

			}

			function onKeyDown( event ) {

				if ( scope.enabled === false || scope.enablePan === false ) return;

				handleKeyDown( event );

			}

			function onTouchStart( event ) {

				trackPointer( event );

				switch ( pointers.length ) {

					case 1:

						switch ( scope.touches.ONE ) {

							case n.ROTATE:

								if ( scope.enableRotate === false ) return;

								handleTouchStartRotate( event );

								state = STATE.TOUCH_ROTATE;

								break;

							case n.PAN:

								if ( scope.enablePan === false ) return;

								handleTouchStartPan( event );

								state = STATE.TOUCH_PAN;

								break;

							default:

								state = STATE.NONE;

						}

						break;

					case 2:

						switch ( scope.touches.TWO ) {

							case n.DOLLY_PAN:

								if ( scope.enableZoom === false && scope.enablePan === false ) return;

								handleTouchStartDollyPan( event );

								state = STATE.TOUCH_DOLLY_PAN;

								break;

							case n.DOLLY_ROTATE:

								if ( scope.enableZoom === false && scope.enableRotate === false ) return;

								handleTouchStartDollyRotate( event );

								state = STATE.TOUCH_DOLLY_ROTATE;

								break;

							default:

								state = STATE.NONE;

						}

						break;

					default:

						state = STATE.NONE;

				}

				if ( state !== STATE.NONE ) {

					scope.dispatchEvent( _startEvent );

				}

			}

			function onTouchMove( event ) {

				trackPointer( event );

				switch ( state ) {

					case STATE.TOUCH_ROTATE:

						if ( scope.enableRotate === false ) return;

						handleTouchMoveRotate( event );

						scope.update();

						break;

					case STATE.TOUCH_PAN:

						if ( scope.enablePan === false ) return;

						handleTouchMovePan( event );

						scope.update();

						break;

					case STATE.TOUCH_DOLLY_PAN:

						if ( scope.enableZoom === false && scope.enablePan === false ) return;

						handleTouchMoveDollyPan( event );

						scope.update();

						break;

					case STATE.TOUCH_DOLLY_ROTATE:

						if ( scope.enableZoom === false && scope.enableRotate === false ) return;

						handleTouchMoveDollyRotate( event );

						scope.update();

						break;

					default:

						state = STATE.NONE;

				}

			}

			function onContextMenu( event ) {

				if ( scope.enabled === false ) return;

				event.preventDefault();

			}

			function addPointer( event ) {

				pointers.push( event.pointerId );

			}

			function removePointer( event ) {

				delete pointerPositions[ event.pointerId ];

				for ( let i = 0; i < pointers.length; i ++ ) {

					if ( pointers[ i ] == event.pointerId ) {

						pointers.splice( i, 1 );
						return;

					}

				}

			}

			function isTrackingPointer( event ) {

				for ( let i = 0; i < pointers.length; i ++ ) {

					if ( pointers[ i ] == event.pointerId ) return true;

				}

				return false;

			}

			function trackPointer( event ) {

				let position = pointerPositions[ event.pointerId ];

				if ( position === undefined ) {

					position = new $n();
					pointerPositions[ event.pointerId ] = position;

				}

				position.set( event.pageX, event.pageY );

			}

			function getSecondPointerPosition( event ) {

				const pointerId = ( event.pointerId === pointers[ 0 ] ) ? pointers[ 1 ] : pointers[ 0 ];

				return pointerPositions[ pointerId ];

			}

			//

			scope.domElement.addEventListener( 'contextmenu', onContextMenu );

			scope.domElement.addEventListener( 'pointerdown', onPointerDown );
			scope.domElement.addEventListener( 'pointercancel', onPointerUp );
			scope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );

			const document = scope.domElement.getRootNode(); // offscreen canvas compatibility

			document.addEventListener( 'keydown', interceptControlDown, { passive: true, capture: true } );

			// force an update at start

			this.update();

		}

	}

	// Holders
	window.viewers = {};

	function createViewer(modelElement){
	    // Get the model element attributes
	    const elemID = modelElement.getAttribute('id');
	    const elemSrc = modelElement.getAttribute('src');
	    const elemBehavior = modelElement.getAttribute('behaviour');
	    const elemAppearance = modelElement.getAttribute('appearance');
	    const elemScale = modelElement.getAttribute('scale');
	    const elemRotation = modelElement.getAttribute('rotation');
	    
	    setupModelElement(modelElement);

	    // Setup the viewer object
	    let viewer = {};
	    viewer.domElement = modelElement;
	    
	    setupScene(viewer, elemRotation);
	    setupModel(viewer, elemSrc, elemScale);
	    setupAppearance(viewer, elemAppearance);
	    setupAnimation(viewer, elemBehavior);

	    // Store viewer object
	    window.viewers[elemID] = viewer;
	}

	function setupModelElement(modelElement){
	    // Set inner Text to the hover text and then remove it
	    if(modelElement.innerHTML != '') modelElement.setAttribute('title', modelElement.innerHTML);
	    modelElement.innerHTML = '';
	    // Set the style of the model element 
	    modelElement.style.display = 'block';
	    if(modelElement.style.width == '') modelElement.style.width = '100%';
	    if(modelElement.style.height == '') modelElement.style.height = '100%';
	}

	function setupScene(viewer, elemRotation){
	    // Create a scene
	    viewer.scene = new sc();
	    // Create a camera
	    viewer.camera = new ta(75, viewer.domElement.clientWidth / viewer.domElement.clientHeight, 0.1, 1000);
	    const distance = 5;
	    if(elemRotation == null) elemRotation = '45 0 45'; 
	    const [x, y, z] = elemRotation.split(' ').map(parseFloat); 

	    // Correct the rotation to align the camera with the top-left corner
	    const correctedRotation = new gr(x, y, z);
	    const position = new Pi(0, 0, -distance); // Negative z for correct direction
	    position.applyEuler(correctedRotation);
	    viewer.camera.position.copy(position);
	    viewer.camera.lookAt(0, 0, 0); // Look at the center point


	    
	    // Create a renderer
	    viewer.renderer = new ec({antialias: true});
	    viewer.renderer.setSize(viewer.domElement.clientWidth, viewer.domElement.clientHeight);
	    
	    // Append the renderer to the modelElement
	    viewer.domElement.appendChild(viewer.renderer.domElement);

	    // Lights
	    viewer.ambientLight = new dp(0xffffff, 1);
	    viewer.scene.add(viewer.ambientLight);
	    viewer.directionalLight = new up(0xffffff, 2);
	    viewer.directionalLight.rotation.x = Math.PI * 0.5;
	    viewer.directionalLight.rotation.y = Math.PI * 0.25;
	    viewer.scene.add(viewer.directionalLight);
	}

	function setupModel(viewer, src, scale){

	    const loader = new GLTFLoader().setPath( './' );
	    loader.load( src, async function ( gltf ) {

	        viewer.model = gltf.scene;
	        await viewer.renderer.compileAsync( viewer.model, viewer.camera, viewer.scene );
	        if(scale) viewer.model.scale.set(scale, scale, scale);
	        viewer.scene.add( viewer.model );
	        viewer.render();

	    } );
	}

	function setupAppearance(viewer, appearance){
	    function applyAppearanceItem(key, value){
	        switch(key){
	            case 'background-color':
	                if(value == 'transparent') {
	                    viewer.renderer.setClearColor(0x000000, 0);
	                } else {
	                    viewer.scene.background = new Zr(value);
	                }
	                
	                break;
	            case 'ambient-color':
	                viewer.ambientLight.color = new Zr(value);
	                break;
	            case 'ambient-intensity':
	                viewer.ambientLight.intensity = parseFloat(value);
	                break;
	            case 'directional-color':
	                viewer.directionalLight.color = new Zr(value);
	                break;
	            case 'directional-intensity':
	                viewer.directionalLight.intensity = parseFloat(value);
	                break;
	        }
	    }

	    if(appearance == null) return;
	    let appearanceArray = appearance.split(';');

	    appearanceArray.forEach(appearance => {
	        if(appearance == '') return;
	        let key = appearance.split(':')[0].trim();
	        let value = appearance.split(':')[1].trim();
	        applyAppearanceItem(key, value);
	    });
	}

	function setupAnimation(viewer, behavior){
	    // Default Render function
	    viewer.render = function () {
	        requestAnimationFrame(viewer.render);
	        viewer.renderer.render(viewer.scene, viewer.camera);
	    };
	    // Custom Render function
	    if(behavior) {
	        const behaviorSettings = behavior.split(' ');
	        switch(behaviorSettings[0])
	        {
	            case 'rotate':
	                viewer.render = function () {
	                    requestAnimationFrame(viewer.render);
	                    if(viewer.model){
	                        viewer.model.rotation.y += parseFloat(behaviorSettings[1]);
	                    }
	                    viewer.renderer.render(viewer.scene, viewer.camera);
	                };
	                viewer.render();
	                break;
	            case 'orbit':
	                const controls = new OrbitControls(viewer.camera, viewer.renderer.domElement);
	                controls.enableDamping = true;
	                controls.dampingFactor = 0.25;
	                controls.enableZoom = true;
	                controls.enablePan = false;
	                controls.minDistance = parseFloat(behaviorSettings[1]);
	                controls.maxDistance = parseFloat(behaviorSettings[2]);
	                controls.update();
	                viewer.render = function () {
	                    requestAnimationFrame(viewer.render);
	                    controls.update();
	                    viewer.renderer.render(viewer.scene, viewer.camera);
	                };
	                viewer.render();
	                break;
	        }

	        

	    }
	}

	// Create a viewer for each model element
	document.addEventListener('DOMContentLoaded', function() {
	    // Select all model elements
	    const modelElements = document.querySelectorAll('model');

	    modelElements.forEach(modelElement => {
	        createViewer(modelElement);
	    });
	});

})();
