"use strict";(self.webpackChunkcontrols_visualizer=self.webpackChunkcontrols_visualizer||[]).push([[678],{2639:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(7294),a=t(2318),o=t.n(a);function c(){var e=(0,r.useState)(2),n=e[0],t=e[1],a=(0,r.useState)(null),c=a[0],l=a[1],u=(0,r.useRef)();return(0,r.useEffect)((function(){l(n%2==0?"Even Circles":"Odd Circles")}),[n]),(0,r.useEffect)((function(){var e=new(o())((function(e){var t=600;e.setup=function(){e.createCanvas(600,600),e.background(55),function(){for(var r=0;r<n;r++){var a=Math.random()*t*.9,o=600*Math.random()*.9,c=Math.random()*t/2+10,l=e.color(255*Math.random(),255*Math.random(),255*Math.random());e.fill(l),e.noStroke(),e.ellipse(a,o,c,c)}}()},e.draw=function(){},e.mousePressed=function(){var n=e.color(255*Math.random(),255*Math.random(),255*Math.random());e.fill(n),e.ellipse(e.mouseX,e.mouseY,80,80)}}),u.current);return function(){e.remove()}})),r.createElement("div",{className:"flex flex-col items-center justify-center h-full"},r.createElement("div",{className:"flex bg-green-50 space-x-3 items-center justfiy-center mb-4"},r.createElement("button",{className:" bg-green-300 px-10 py-3 text-5xl border hover:border-green-700 hover:bg-green-500",onClick:function(){return t((function(e){return e-1}))}},"-"),r.createElement("p",{className:" text-4xl font-mono h-full"},"Current # of Circles: ",n),r.createElement("button",{className:" bg-green-300 px-10 py-3 text-5xl border hover:border-green-700 hover:bg-green-500",onClick:function(){return t((function(e){return e+1}))}},"+")),r.createElement("div",{className:"cursor-pointer",ref:u}),[c])}var l=function(){return r.createElement("main",null,r.createElement("div",{className:"bg-blue-300 text-6xl flex items-center justify-center py-6 mb-6"},"Example React App using a p5js script!"),"undefined"!=typeof window&&r.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-14aa54564f7441cb7b3c.js.map