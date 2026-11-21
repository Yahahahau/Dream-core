import{af as z,av as d,ad as A,a9 as M,V as C,am as P,ac as _,ay as B,az as F,aw as S}from"./index-BQ8LZcAo.js";function j(o,{kind:V="snow",count:c=1500,size:p=.12,color:u=16777215,box:r=40,height:s=20,fall:v=1.2,drift:g=.4,opacity:x=.9,additive:h=!1}){const y={low:.4,medium:.75,high:1}[S.level]??.75,i=Math.floor(c*y),t=new Float32Array(i*3),f=new Float32Array(i);for(let e=0;e<i;e++)t[e*3]=(Math.random()-.5)*r,t[e*3+1]=Math.random()*s,t[e*3+2]=(Math.random()-.5)*r,f[e]=Math.random()*100;const n=new z;n.setAttribute("position",new d(t,3)),n.setAttribute("seed",new d(f,1));const a={time:{value:0},center:{value:new C},box:{value:r},height:{value:s},fall:{value:v},drift:{value:g},size:{value:p},color:{value:new M(u)},map:{value:A("#ffffff")},opacity:{value:x},pr:{value:1}},w=new P({uniforms:a,transparent:!0,depthWrite:!1,blending:h?_:B,vertexShader:`
      uniform float time, box, height, fall, drift, size, pr; uniform vec3 center;
      attribute float seed; varying float vA;
      void main(){
        vec3 p = position;
        p.y = mod(p.y - time * fall * (0.7 + fract(seed) * 0.6) - center.y, height) + center.y - height * 0.35;
        p.x += sin(time * 0.5 + seed) * drift + cos(time * 0.23 + seed * 2.0) * drift * 0.5;
        p.z += cos(time * 0.4 + seed * 1.3) * drift;
        p.x = mod(p.x - center.x + box * 0.5, box) + center.x - box * 0.5;
        p.z = mod(p.z - center.z + box * 0.5, box) + center.z - box * 0.5;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * pr * 420.0 / -mv.z;
        vA = smoothstep(box * 0.5, box * 0.2, length(p.xz - center.xz));
        if (fall < 0.01) vA *= 0.5 + 0.5 * sin(time * 2.0 + seed * 7.0);
      }`,fragmentShader:`
      uniform sampler2D map; uniform vec3 color; uniform float opacity; varying float vA;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(color, t.a * opacity * vA); if (gl_FragColor.a < 0.01) discard; }`}),l=new F(n,w);l.frustumCulled=!1,o.group.add(l);const m=o.game;return o.onUpdate((e,b)=>{a.time.value=b,a.center.value.copy(m.camera.position),a.pr.value=m.renderer.r.getPixelRatio()}),l}export{j as p};
