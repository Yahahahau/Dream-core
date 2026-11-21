import{aj as j,P as b,ak as B,al as G,a9 as x,V as I,am as V,M as y,an as Y,H as _,ac as P}from"./index-BQ8LZcAo.js";const A=`
uniform float time; uniform float swell;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  if (swell > 0.0) {
    w.y += (sin(w.x * 0.05 + time * 0.6) * 0.6 + sin(w.z * 0.07 - time * 0.5) * 0.5 + sin((w.x + w.z) * 0.13 + time) * 0.2) * swell;
  }
  vWorld = w.xyz;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,F=`
uniform float time; uniform vec3 deep; uniform vec3 shallow; uniform vec3 skyCol; uniform vec3 sunDir; uniform vec3 sunColor;
uniform float opacity; uniform float scale; uniform float strength; uniform float glint;
varying vec3 vWorld;
#include <fog_pars_fragment>
float h(vec2 p){
  return sin(p.x * 1.3 + time * 1.1) * 0.25 + sin(p.y * 1.7 - time * 0.9) * 0.22
       + sin((p.x + p.y) * 2.9 + time * 1.7) * 0.1 + sin((p.x * 0.7 - p.y) * 4.3 - time * 2.3) * 0.06;
}
void main(){
  vec2 p = vWorld.xz * scale;
  float e = 0.05;
  float hx = h(p + vec2(e, 0.0)) - h(p - vec2(e, 0.0));
  float hz = h(p + vec2(0.0, e)) - h(p - vec2(0.0, e));
  vec3 n = normalize(vec3(-hx * strength, 1.0, -hz * strength));
  vec3 v = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0) * 0.85 + 0.06;
  float dist = length(cameraPosition - vWorld);
  vec3 base = mix(shallow, deep, clamp(dist * 0.015, 0.0, 1.0) * 0.6 + 0.2);
  vec3 col = mix(base, skyCol, fres);
  vec3 r = reflect(-normalize(sunDir), n);
  float spec = pow(max(dot(r, v), 0.0), 180.0) * glint;
  col += sunColor * spec;
  float a = mix(opacity, 1.0, fres);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function O(e,{x0:o,z0:a,x1:n,z1:i,y:g,radius:m=0,deep:w=944760,shallow:h=6279375,sky:p=15268863,opacity:u=.62,scale:r=1.2,strength:l=.5,swell:d=0,segments:s=1,sunDir:v=[.3,1,.2],sunColor:t=16777215,glint:c=1.2,follow:U=!1}){const k=n-o,X=i-a,M=m>0?new j(m,40):new b(k,X,s,s);M.rotateX(-Math.PI/2);const C=B.merge([G.fog,{time:{value:0},deep:{value:new x(w)},shallow:{value:new x(h)},skyCol:{value:new x(p)},sunDir:{value:new I(...v)},sunColor:{value:new x(t)},opacity:{value:u},scale:{value:r},strength:{value:l},swell:{value:d},glint:{value:c}}]),z=new V({uniforms:C,vertexShader:A,fragmentShader:F,transparent:u<1,fog:!0,depthWrite:u>=1}),f=new y(M,z);f.position.set((o+n)/2,g,(a+i)/2),f.renderOrder=2,e.group.add(f),e.water.push({x0:o,z0:a,x1:n,z1:i,y:g});const D=e.game;return e.onUpdate((H,S)=>{if(C.time.value=S,U){const W=D.camera.position;f.position.x=Math.round(W.x/40)*40,f.position.z=Math.round(W.z/40)*40}}),f}function T(e,o,a,n,i,g,{color:m=10485759,strength:w=.35,scale:h=.25}={}){const p=Y(),u=new _({map:p,color:m,transparent:!0,opacity:w,blending:P,depthWrite:!1}),r=new b(n-o,i-a);r.rotateX(-Math.PI/2);const l=r.attributes.uv;for(let t=0;t<l.count;t++)l.setXY(t,l.getX(t)*(n-o)*h,l.getY(t)*(i-a)*h);const d=new y(r,u);d.position.set((o+n)/2,g+.02,(a+i)/2),e.group.add(d);const s=p.clone();s.needsUpdate=!0;const v=new y(r,new _({map:s,color:m,transparent:!0,opacity:w*.7,blending:P,depthWrite:!1}));v.position.copy(d.position),v.position.y+=.005,e.group.add(v),e.disposables.push(s),e.onUpdate((t,c)=>{p.offset.set(c*.03,c*.017),s.offset.set(-c*.021,c*.026)})}export{T as a,O as c};
