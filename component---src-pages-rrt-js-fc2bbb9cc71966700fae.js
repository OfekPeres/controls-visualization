"use strict";(self.webpackChunkcontrols_visualizer=self.webpackChunkcontrols_visualizer||[]).push([[450],{9799:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ue}});var r,a,o,i=n(7294),u=n(5861),l=n(7757),s=n.n(l),c=n(2318),f=n.n(c),d=n(6633),p=n.n(d);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function h(e,t){if(e in t){for(var n=t[e],r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return"function"==typeof n?n.apply(void 0,a):n}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,h),i}function x(e){var t=e.props,n=e.slot,o=e.defaultTag,i=e.features,u=e.visible,l=void 0===u||u,s=e.name;if(l)return y(t,n,o,s);var c=null!=i?i:r.None;if(c&r.Static){var f=t.static,d=void 0!==f&&f,p=m(t,["static"]);if(d)return y(p,n,o,s)}if(c&r.RenderStrategy){var b,g=t.unmount,x=void 0===g||g,E=m(t,["unmount"]);return h(x?a.Unmount:a.Hidden,((b={})[a.Unmount]=function(){return null},b[a.Hidden]=function(){return y(v({},E,{hidden:!0,style:{display:"none"}}),n,o,s)},b))}return y(t,n,o,s)}function y(e,t,n,r){var a;void 0===t&&(t={});var o=w(e,["unmount","static"]),u=o.as,l=void 0===u?n:u,s=o.children,c=o.refName,f=void 0===c?"ref":c,d=m(o,["as","children","refName"]),p=void 0!==e.ref?((a={})[f]=e.ref,a):{},v="function"==typeof s?s(t):s;if(d.className&&"function"==typeof d.className&&(d.className=d.className(t)),l===i.Fragment&&Object.keys(d).length>0){if(!(0,i.isValidElement)(v)||Array.isArray(v)&&v.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(d).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(v,Object.assign({},function(e,t,n){for(var r,a=Object.assign({},e),o=function(){var n,o=r.value;void 0!==e[o]&&void 0!==t[o]&&Object.assign(a,((n={})[o]=function(n){n.defaultPrevented||e[o](n),n.defaultPrevented||t[o](n)},n))},i=g(n);!(r=i()).done;)o();return a}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(w(d,["ref"])),v.props,["onClick"]),p))}return(0,i.createElement)(l,Object.assign({},w(d,["ref"]),l!==i.Fragment&&p),v)}function E(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function w(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),a=g(t);!(n=a()).done;){var o=n.value;o in r&&delete r[o]}return r}function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(0,i.useRef)(t);return(0,i.useEffect)((function(){r.current=t}),[t]),(0,i.useCallback)((function(e){for(var t,n=g(r.current);!(t=n()).done;){var a=t.value;null!=a&&("function"==typeof a?a(e):a.current=e)}}),[r])}function S(e){for(var t,n,r=e.parentElement,a=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(a=r),r=r.parentElement;var o=null!=(t=""===(null==(n=r)?void 0:n.getAttribute("disabled")))&&t;return(!o||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(a))&&o}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(a||(a={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(o||(o={}));var R="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,C={serverHandoffComplete:!1};function k(){var e=(0,i.useState)(C.serverHandoffComplete),t=e[0],n=e[1];return(0,i.useEffect)((function(){!0!==t&&n(!0)}),[t]),(0,i.useEffect)((function(){!1===C.serverHandoffComplete&&(C.serverHandoffComplete=!0)}),[]),t}var L=0;function T(){return++L}function P(){var e=k(),t=(0,i.useState)(e?T:null),n=t[0],r=t[1];return R((function(){null===n&&r(T())}),[n]),null!=n?""+n:void 0}var N,j,I,F,A=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(N||(N={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(j||(j={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(I||(I={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(F||(F={}));var D,H,V,U,M,G=(0,i.createContext)(null);function z(){return(0,i.useContext)(G)}function W(e){var t=e.value,n=e.children;return i.createElement(G.Provider,{value:t},n)}function B(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function Z(e,t){var n=(0,i.useState)((function(){return B(e)})),r=n[0],a=n[1];return R((function(){a(B(e))}),[e.type,e.as]),R((function(){r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[r,t]),r}function Q(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=g(e.splice(0));!(t=n()).done;){var r=t.value;r()}}};return t}function X(){var e=(0,i.useState)(Q)[0];return(0,i.useEffect)((function(){return function(){return e.dispose()}}),[e]),e}function Y(e,t){var n=(0,i.useState)(e),r=n[0],a=n[1],o=(0,i.useRef)(e);return R((function(){o.current=e}),[e]),R((function(){return a(o.current)}),[o,a].concat(t)),r}function q(e,t){var n=t.resolveItems();if(n.length<=0)return null;var r=t.resolveActiveIndex(),a=null!=r?r:-1,o=function(){switch(e.focus){case H.First:return n.findIndex((function(e){return!t.resolveDisabled(e)}));case H.Previous:var r=n.slice().reverse().findIndex((function(e,n,r){return!(-1!==a&&r.length-n-1>=a)&&!t.resolveDisabled(e)}));return-1===r?r:n.length-1-r;case H.Next:return n.findIndex((function(e,n){return!(n<=a)&&!t.resolveDisabled(e)}));case H.Last:var o=n.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===o?o:n.length-1-o;case H.Specific:return n.findIndex((function(n){return t.resolveId(n)===e.id}));case H.Nothing:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===o?r:o}G.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(D||(D={})),function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(H||(H={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(U||(U={})),function(e){e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption"}(M||(M={}));var K=((V={})[M.CloseListbox]=function(e){return e.disabled||e.listboxState===U.Closed?e:v({},e,{activeOptionIndex:null,listboxState:U.Closed})},V[M.OpenListbox]=function(e){return e.disabled||e.listboxState===U.Open?e:v({},e,{listboxState:U.Open})},V[M.SetDisabled]=function(e,t){return e.disabled===t.disabled?e:v({},e,{disabled:t.disabled})},V[M.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:v({},e,{orientation:t.orientation})},V[M.GoToOption]=function(e,t){if(e.disabled)return e;if(e.listboxState===U.Closed)return e;var n=q(t,{resolveItems:function(){return e.options},resolveActiveIndex:function(){return e.activeOptionIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return""===e.searchQuery&&e.activeOptionIndex===n?e:v({},e,{searchQuery:"",activeOptionIndex:n})},V[M.Search]=function(e,t){if(e.disabled)return e;if(e.listboxState===U.Closed)return e;var n=e.searchQuery+t.value.toLowerCase(),r=e.options.findIndex((function(e){var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))}));return-1===r||r===e.activeOptionIndex?v({},e,{searchQuery:n}):v({},e,{searchQuery:n,activeOptionIndex:r})},V[M.ClearSearch]=function(e){return e.disabled||e.listboxState===U.Closed||""===e.searchQuery?e:v({},e,{searchQuery:""})},V[M.RegisterOption]=function(e,t){return v({},e,{options:[].concat(e.options,[{id:t.id,dataRef:t.dataRef}])})},V[M.UnregisterOption]=function(e,t){var n=e.options.slice(),r=null!==e.activeOptionIndex?n[e.activeOptionIndex]:null,a=n.findIndex((function(e){return e.id===t.id}));return-1!==a&&n.splice(a,1),v({},e,{options:n,activeOptionIndex:a===e.activeOptionIndex||null===r?null:n.indexOf(r)})},V),_=(0,i.createContext)(null);function $(e){var t=(0,i.useContext)(_);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+te.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,$),n}return t}function J(e,t){return h(t.type,K,e,t)}_.displayName="ListboxContext";var ee=i.Fragment;function te(e){var t,n,r,a,o,u=e.value,l=e.onChange,s=e.disabled,c=void 0!==s&&s,f=e.horizontal,d=void 0!==f&&f,p=m(e,["value","onChange","disabled","horizontal"]),v=d?"horizontal":"vertical",b=(0,i.useReducer)(J,{listboxState:U.Closed,propsRef:{current:{value:u,onChange:l}},labelRef:(0,i.createRef)(),buttonRef:(0,i.createRef)(),optionsRef:(0,i.createRef)(),disabled:c,orientation:v,options:[],searchQuery:"",activeOptionIndex:null}),g=b[0],y=g.listboxState,E=g.propsRef,w=g.optionsRef,O=g.buttonRef,S=b[1];R((function(){E.current.value=u}),[u,E]),R((function(){E.current.onChange=l}),[l,E]),R((function(){return S({type:M.SetDisabled,disabled:c})}),[c]),R((function(){return S({type:M.SetOrientation,orientation:v})}),[v]),n="mousedown",r=function(e){var t,n,r,a=e.target;y===U.Open&&((null==(t=O.current)?void 0:t.contains(a))||(null==(n=w.current)?void 0:n.contains(a))||(S({type:M.CloseListbox}),function(e,t){var n;return void 0===t&&(t=F.Strict),e!==document.body&&h(t,((n={})[F.Strict]=function(){return e.matches(A)},n[F.Loose]=function(){for(var t=e;null!==t;){if(t.matches(A))return!0;t=t.parentElement}return!1},n))}(a,F.Loose)||(e.preventDefault(),null==(r=O.current)||r.focus())))},(o=(0,i.useRef)(r)).current=r,(0,i.useEffect)((function(){function e(e){o.current.call(window,e)}return window.addEventListener(n,e,a),function(){return window.removeEventListener(n,e,a)}}),[n,a]);var C=(0,i.useMemo)((function(){return{open:y===U.Open,disabled:c}}),[y,c]);return i.createElement(_.Provider,{value:b},i.createElement(W,{value:h(y,(t={},t[U.Open]=D.Open,t[U.Closed]=D.Closed,t))},x({props:p,slot:C,defaultTag:ee,name:"Listbox"})))}var ne=E((function e(t,n){var r,a=$([te.name,e.name].join(".")),u=a[0],l=a[1],s=O(u.buttonRef,n),c="headlessui-listbox-button-"+P(),f=X(),d=(0,i.useCallback)((function(e){switch(e.key){case o.Space:case o.Enter:case o.ArrowDown:e.preventDefault(),l({type:M.OpenListbox}),f.nextFrame((function(){u.propsRef.current.value||l({type:M.GoToOption,focus:H.First})}));break;case o.ArrowUp:e.preventDefault(),l({type:M.OpenListbox}),f.nextFrame((function(){u.propsRef.current.value||l({type:M.GoToOption,focus:H.Last})}))}}),[l,u,f]),p=(0,i.useCallback)((function(e){if(e.key===o.Space)e.preventDefault()}),[]),m=(0,i.useCallback)((function(e){if(S(e.currentTarget))return e.preventDefault();u.listboxState===U.Open?(l({type:M.CloseListbox}),f.nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),l({type:M.OpenListbox}))}),[l,f,u]),b=Y((function(){if(u.labelRef.current)return[u.labelRef.current.id,c].join(" ")}),[u.labelRef.current,c]),g=(0,i.useMemo)((function(){return{open:u.listboxState===U.Open,disabled:u.disabled}}),[u]);return x({props:v({},t,{ref:s,id:c,type:Z(t,u.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=u.optionsRef.current)?void 0:r.id,"aria-expanded":u.disabled?void 0:u.listboxState===U.Open,"aria-labelledby":b,disabled:u.disabled,onKeyDown:d,onKeyUp:p,onClick:m}),slot:g,defaultTag:"button",name:"Listbox.Button"})}));var re,ae=r.RenderStrategy|r.Static,oe=E((function e(t,n){var r,a=$([te.name,e.name].join(".")),u=a[0],l=a[1],s=O(u.optionsRef,n),c="headlessui-listbox-options-"+P(),f=X(),d=X(),p=z(),m=null!==p?p===D.Open:u.listboxState===U.Open;R((function(){var e=u.optionsRef.current;e&&u.listboxState===U.Open&&e!==document.activeElement&&e.focus({preventScroll:!0})}),[u.listboxState,u.optionsRef]);var b=(0,i.useCallback)((function(e){switch(d.dispose(),e.key){case o.Space:if(""!==u.searchQuery)return e.preventDefault(),e.stopPropagation(),l({type:M.Search,value:e.key});case o.Enter:if(e.preventDefault(),e.stopPropagation(),l({type:M.CloseListbox}),null!==u.activeOptionIndex){var t=u.options[u.activeOptionIndex].dataRef;u.propsRef.current.onChange(t.current.value)}Q().nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case h(u.orientation,{vertical:o.ArrowDown,horizontal:o.ArrowRight}):return e.preventDefault(),e.stopPropagation(),l({type:M.GoToOption,focus:H.Next});case h(u.orientation,{vertical:o.ArrowUp,horizontal:o.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),l({type:M.GoToOption,focus:H.Previous});case o.Home:case o.PageUp:return e.preventDefault(),e.stopPropagation(),l({type:M.GoToOption,focus:H.First});case o.End:case o.PageDown:return e.preventDefault(),e.stopPropagation(),l({type:M.GoToOption,focus:H.Last});case o.Escape:return e.preventDefault(),e.stopPropagation(),l({type:M.CloseListbox}),f.nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case o.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(l({type:M.Search,value:e.key}),d.setTimeout((function(){return l({type:M.ClearSearch})}),350))}}),[f,l,d,u]),g=Y((function(){var e,t,n;return null!=(e=null==(t=u.labelRef.current)?void 0:t.id)?e:null==(n=u.buttonRef.current)?void 0:n.id}),[u.labelRef.current,u.buttonRef.current]),y=(0,i.useMemo)((function(){return{open:u.listboxState===U.Open}}),[u]);return x({props:v({},t,{"aria-activedescendant":null===u.activeOptionIndex||null==(r=u.options[u.activeOptionIndex])?void 0:r.id,"aria-labelledby":g,"aria-orientation":u.orientation,id:c,onKeyDown:b,role:"listbox",tabIndex:0,ref:s}),slot:y,defaultTag:"ul",features:ae,visible:m,name:"Listbox.Options"})}));function ie(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){e.current=!1}),[]),e.current}function ue(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function le(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function se(e,t,n,r,a,o){var i=Q(),u=void 0!==o?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(o):function(){};return le.apply(void 0,[e].concat(a)),ue.apply(void 0,[e].concat(t,n)),i.nextFrame((function(){le.apply(void 0,[e].concat(n)),ue.apply(void 0,[e].concat(r)),i.add(function(e,t){var n=Q();if(!e)return n.dispose;var r=getComputedStyle(e),a=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),o=a[0],i=a[1];return 0!==o?n.setTimeout((function(){t(re.Finished)}),o+i):t(re.Finished),n.add((function(){return t(re.Cancelled)})),n.dispose}(e,(function(n){return le.apply(void 0,[e].concat(r,t)),ue.apply(void 0,[e].concat(a)),u(n)})))})),i.add((function(){return le.apply(void 0,[e].concat(t,n,r,a))})),i.add((function(){return u(re.Cancelled)})),i.dispose}function ce(e){return void 0===e&&(e=""),(0,i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}te.Button=ne,te.Label=function e(t){var n=$([te.name,e.name].join("."))[0],r="headlessui-listbox-label-"+P(),a=(0,i.useCallback)((function(){var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),[n.buttonRef]),o=(0,i.useMemo)((function(){return{open:n.listboxState===U.Open,disabled:n.disabled}}),[n]);return x({props:v({},t,{ref:n.labelRef,id:r,onClick:a}),slot:o,defaultTag:"label",name:"Listbox.Label"})},te.Options=oe,te.Option=function e(t){var n=t.disabled,r=void 0!==n&&n,a=t.value,o=m(t,["disabled","value"]),u=$([te.name,e.name].join(".")),l=u[0],s=u[1],c="headlessui-listbox-option-"+P(),f=null!==l.activeOptionIndex&&l.options[l.activeOptionIndex].id===c,d=l.propsRef.current.value===a,p=(0,i.useRef)({disabled:r,value:a});R((function(){p.current.disabled=r}),[p,r]),R((function(){p.current.value=a}),[p,a]),R((function(){var e,t;p.current.textValue=null==(e=document.getElementById(c))||null==(t=e.textContent)?void 0:t.toLowerCase()}),[p,c]);var b=(0,i.useCallback)((function(){return l.propsRef.current.onChange(a)}),[l.propsRef,a]);R((function(){return s({type:M.RegisterOption,id:c,dataRef:p}),function(){return s({type:M.UnregisterOption,id:c})}}),[p,c]),R((function(){var e;l.listboxState===U.Open&&d&&(s({type:M.GoToOption,focus:H.Specific,id:c}),null==(e=document.getElementById(c))||null==e.focus||e.focus())}),[l.listboxState]),R((function(){if(l.listboxState===U.Open&&f){var e=Q();return e.nextFrame((function(){var e;return null==(e=document.getElementById(c))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})})),e.dispose}}),[c,f,l.listboxState]);var g=(0,i.useCallback)((function(e){if(r)return e.preventDefault();b(),s({type:M.CloseListbox}),Q().nextFrame((function(){var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),[s,l.buttonRef,r,b]),h=(0,i.useCallback)((function(){if(r)return s({type:M.GoToOption,focus:H.Nothing});s({type:M.GoToOption,focus:H.Specific,id:c})}),[r,c,s]),y=(0,i.useCallback)((function(){r||f||s({type:M.GoToOption,focus:H.Specific,id:c})}),[r,f,c,s]),E=(0,i.useCallback)((function(){r||f&&s({type:M.GoToOption,focus:H.Nothing})}),[r,f,s]),w=(0,i.useMemo)((function(){return{active:f,selected:d,disabled:r}}),[f,d,r]);return x({props:v({},o,{id:c,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":!0===d||void 0,disabled:void 0,onClick:g,onFocus:h,onPointerMove:y,onMouseMove:y,onPointerLeave:E,onMouseLeave:E}),slot:w,defaultTag:"li",name:"Listbox.Option"})},function(e){e.Finished="finished",e.Cancelled="cancelled"}(re||(re={}));var fe,de=(0,i.createContext)(null);de.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(fe||(fe={}));var pe=(0,i.createContext)(null);function ve(e){return"children"in e?ve(e.children):e.current.filter((function(e){return e.state===fe.Visible})).length>0}function me(e){var t=(0,i.useRef)(e),n=(0,i.useRef)([]),r=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,i.useEffect)((function(){t.current=e}),[e]);var o=(0,i.useCallback)((function(e,o){var i;void 0===o&&(o=a.Hidden);var u=n.current.findIndex((function(t){return t.id===e}));-1!==u&&(h(o,((i={})[a.Unmount]=function(){n.current.splice(u,1)},i[a.Hidden]=function(){n.current[u].state=fe.Hidden},i)),!ve(n)&&r.current&&(null==t.current||t.current()))}),[t,r,n]),u=(0,i.useCallback)((function(e){var t=n.current.find((function(t){return t.id===e}));return t?t.state!==fe.Visible&&(t.state=fe.Visible):n.current.push({id:e,state:fe.Visible}),function(){return o(e,a.Unmount)}}),[n,o]);return(0,i.useMemo)((function(){return{children:n,register:u,unregister:o}}),[u,o,n])}function be(){}pe.displayName="NestingContext";var ge=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function he(e){for(var t,n={},r=g(ge);!(t=r()).done;){var a,o=t.value;n[o]=null!=(a=e[o])?a:be}return n}var xe=r.RenderStrategy;function ye(e){var t,n=e.beforeEnter,r=e.afterEnter,o=e.beforeLeave,u=e.afterLeave,l=e.enter,s=e.enterFrom,c=e.enterTo,f=e.entered,d=e.leave,p=e.leaveFrom,b=e.leaveTo,g=m(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),y=(0,i.useRef)(null),E=(0,i.useState)(fe.Visible),w=E[0],O=E[1],S=g.unmount?a.Unmount:a.Hidden,C=function(){var e=(0,i.useContext)(de);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),L=C.show,T=C.appear,N=function(){var e=(0,i.useContext)(pe);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),j=N.register,I=N.unregister,F=ie(),A=P(),H=(0,i.useRef)(!1),V=me((function(){H.current||(O(fe.Hidden),I(A),X.current.afterLeave())}));R((function(){if(A)return j(A)}),[j,A]),R((function(){var e;S===a.Hidden&&A&&(L&&w!==fe.Visible?O(fe.Visible):h(w,((e={})[fe.Hidden]=function(){return I(A)},e[fe.Visible]=function(){return j(A)},e)))}),[w,A,j,I,L,S]);var U=ce(l),M=ce(s),G=ce(c),z=ce(f),B=ce(d),Z=ce(p),Q=ce(b),X=function(e){var t=(0,i.useRef)(he(e));return(0,i.useEffect)((function(){t.current=he(e)}),[e]),t}({beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:u}),Y=k();(0,i.useEffect)((function(){if(Y&&w===fe.Visible&&null===y.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[y,w,Y]);var q=F&&!T;R((function(){var e=y.current;if(e&&!q)return H.current=!0,L&&X.current.beforeEnter(),L||X.current.beforeLeave(),L?se(e,U,M,G,z,(function(e){H.current=!1,e===re.Finished&&X.current.afterEnter()})):se(e,B,Z,Q,z,(function(e){H.current=!1,e===re.Finished&&(ve(V)||(O(fe.Hidden),I(A),X.current.afterLeave()))}))}),[X,A,H,I,V,y,q,L,U,M,G,B,Z,Q]);var K={ref:y},_=g;return i.createElement(pe.Provider,{value:V},i.createElement(W,{value:h(w,(t={},t[fe.Visible]=D.Open,t[fe.Hidden]=D.Closed,t))},x({props:v({},_,K),defaultTag:"div",features:xe,visible:w===fe.Visible,name:"Transition.Child"})))}function Ee(e){var t,n=e.show,r=e.appear,a=void 0!==r&&r,o=e.unmount,u=m(e,["show","appear","unmount"]),l=z();void 0===n&&null!==l&&(n=h(l,((t={})[D.Open]=!0,t[D.Closed]=!1,t)));if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var s=(0,i.useState)(n?fe.Visible:fe.Hidden),c=s[0],f=s[1],d=me((function(){f(fe.Hidden)})),p=ie(),b=(0,i.useMemo)((function(){return{show:n,appear:a||!p}}),[n,a,p]);(0,i.useEffect)((function(){n?f(fe.Visible):ve(d)||f(fe.Hidden)}),[n,d]);var g={unmount:o};return i.createElement(pe.Provider,{value:d},i.createElement(de.Provider,{value:b},x({props:v({},g,{as:i.Fragment,children:i.createElement(ye,Object.assign({},g,u))}),defaultTag:i.Fragment,features:xe,visible:c===fe.Visible,name:"Transition"})))}Ee.Child=function(e){var t=null!==(0,i.useContext)(de),n=null!==z();return!t&&n?i.createElement(Ee,Object.assign({},e)):i.createElement(ye,Object.assign({},e))},Ee.Root=Ee;var we=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),i.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))};var Oe=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),i.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"}))};function Se(e){var t=e.options,n=e.updateParentSelection,r=(0,i.useState)(t[0]),a=r[0],o=r[1];return(0,i.useEffect)((function(){n(a)}),[a]),i.createElement("div",{className:"w-72 relative pointer-events-auto z-50"},i.createElement(te,{value:a,onChange:o},i.createElement("div",{className:"relative mt-1"},i.createElement(te.Button,{className:"relative w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-blue-300 focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"},i.createElement("span",{className:"block truncate"},a.value),i.createElement("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},i.createElement(Oe,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})))),i.createElement(Ee,{as:i.Fragment,leave:"transition ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",enter:"transition ease-in duration-1000",enterFrom:"opacity-0",enterTo:"opacity-100"},i.createElement(te.Options,{className:"absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},t.map((function(e){return i.createElement(te.Option,{key:e.id,value:e,disabled:e.unavailable,className:function(e){return(e.active?"text-blue-900 bg-blue-100":"text-gray-900")+" "+(e.disabled?"cursor-not-allowed":"")+"\n              cursor-default select-none relative py-2 pl-10 pr-4"}},(function(t){t.active;var n=t.selected;return i.createElement(i.Fragment,null,n?i.createElement("span",{className:"text-blue-600  absolute inset-y-0 left-0 flex items-center pl-3 "},i.createElement(we,{className:"w-5 h-5","aria-hidden":"true"})):null,e.value)}))}))))))}var Re=n(5785);function Ce(e,t,n,r,a){return function(o){var i=t.canvasWidth,u=t.canvasHeight,l=o.color(0,255,0),s=o.color(0,50,255),c=o.color(255,50,10),f=0,d=!1,p=[];if(e)for(var v=e.points[e.targetNodeIndex];v;)p.push(v),v=e.points[v.parentIndex];var m=p.length-1;function b(){o.stroke(s),o.strokeWeight(2);var t=e.points[f];if(o.fill(l),o.circle(t.x,t.y,3),-1!==t.parentIndex){var n=e.points[t.parentIndex];o.line(t.x,t.y,n.x,n.y)}f<e.points.length-1?f++:d=!0}function g(){if(d){var e=p[m];o.stroke(l),o.strokeWeight(3);var t=p[m-1];o.line(e.x,e.y,t.x,t.y),m>1&&m--}}function h(){switch(r.value){case"Circle":var e={shape:"circle",x:o.mouseX,y:o.mouseY,r:t.circle.radius};n((function(t){return Object.assign({},t,{obstacles:[].concat((0,Re.Z)(t.obstacles),[e])})}));break;case"Rectangle":var a={shape:"rectangle",x:o.mouseX,y:o.mouseY,w:t.rectangle.width,h:t.rectangle.height};n((function(e){return Object.assign({},e,{obstacles:[].concat((0,Re.Z)(e.obstacles),[a])})}));break;case"Start Node":n((function(e){return Object.assign({},e,{startPoint:Object.assign({},e.startPoint,{x:o.mouseX,y:o.mouseY})})}));break;case"Goal Node":n((function(e){return Object.assign({},e,{goalPoint:Object.assign({},e.goalPoint,{x:o.mouseX,y:o.mouseY})})}));break;default:return}}o.setup=function(){o.createCanvas(i,u).mousePressed(h),o.background(55),t&&e&&(!function(){o.stroke(l),o.fill(l);var e=t.startPoint,n=e.x,r=e.y,a=e.radius,i=t.goalPoint,u=i.x,c=i.y,f=i.radius;o.circle(n,r,2*a),o.stroke(o.color(0)),o.fill(s),o.circle(u,c,2*f)}(),a||function(){o.stroke(s),o.strokeWeight(2),e.points.forEach((function(t){var n=t.x,r=t.y;if(o.fill(l),o.circle(n,r,3),-1!==t.parentIndex){var a=e.points[t.parentIndex],i=a.x,u=a.y;o.line(n,r,i,u)}}));var t=e.points[e.targetNodeIndex];for(o.stroke(l),o.strokeWeight(3);-1!==t.parentIndex;){var n=e.points[t.parentIndex],r=n.x,a=n.y;o.line(t.x,t.y,r,a),t=e.points[t.parentIndex]}}(),o.stroke(c),o.fill(c),t.obstacles.forEach((function(e){switch(e.shape){case"rectangle":o.rect(e.x,e.y,e.w,e.h);break;case"circle":o.circle(e.x,e.y,2*e.r)}})))},o.draw=function(n){a&&e&&t&&(b(),g())}}}function ke(e){var t={};return t.start=[e.startPoint.x,e.startPoint.y],t.goal=[e.goalPoint.x,e.goalPoint.y],t.goalRadius=e.goalPoint.radius,t.width=e.canvasWidth,t.height=e.canvasHeight,t.d_max=e.stepSize,t.obstacles=e.obstacles.map((function(e){switch(e.shape){case"rectangle":var t=e.x,n=e.y,r=t+e.w,a=n+e.h;return{shape:e.shape,definition:[t,n,r,a]};case"circle":return{shape:e.shape,definition:[e.x,e.y,e.r]};default:return null}})),t}var Le=n(5763),Te=n.n(Le),Pe=n(9547);function Ne(e){var t=e.value,n=e.setValue,r=e.min,a=e.max,o=e.step,u=e.color;return i.createElement("div",{className:"flex flex-col justify-center items-center"},i.createElement("p",null,"The Start Node Radius is: ",t),i.createElement(Pe.Z,{value:t,setValue:n,min:r,max:a,step:o,color:u}))}function je(e){var t=e.value,n=e.setValue,r=e.min,a=e.max,o=e.step,u=e.color;return console.log("goal node slider value",t),i.createElement("div",null,i.createElement("p",null,"The Goal Area Radius is: ",t),i.createElement(Pe.Z,{value:t,setValue:n,min:r,max:a,step:o,color:u}))}function Ie(e){var t=e.value,n=e.setValue,r=e.min,a=e.max,o=e.step,u=e.color;return i.createElement("div",null,i.createElement("p",null,"Set the radius of the circle obstacles: ",t),i.createElement(Pe.Z,{value:t,setValue:n,min:r,max:a,step:o,color:u}))}function Fe(e){var t=e.value,n=e.setValue,r=e.min,a=e.max,o=e.step,u=e.color;return i.createElement("div",null,i.createElement("p",null,"Set the max step size for the RRT algorithm: ",t),i.createElement(Pe.Z,{value:t,setValue:n,min:r,max:a,step:o,color:u}))}function Ae(e){var t=e.width,n=e.height,r=e.setWidth,a=e.setHeight,o=e.min,u=e.max,l=e.step,s=e.color;return i.createElement("div",null,i.createElement("h3",{className:"text-lg font-bold"},"Set the Dimensions of the Rectangular Obstacles"),i.createElement("p",null,"Set the Width: ",t),i.createElement(Pe.Z,{value:t,setValue:r,min:o,max:u,step:l,color:s}),i.createElement("p",null,"Set the Height: ",n),i.createElement(Pe.Z,{value:n,setValue:a,min:o,max:u,step:l,color:s}))}var De=[{id:1,value:"Start Node",unavailable:!1},{id:2,value:"Goal Node",unavailable:!1},{id:3,value:"Rectangle",unavailable:!1},{id:4,value:"Circle",unavailable:!1},{id:5,value:"Step Size",unavailable:!1}],He={obstacles:[],startPoint:{x:15,y:15,radius:15,minRadius:1,maxRadius:100,step:1},goalPoint:{x:300,y:300,radius:30,minRadius:1,maxRadius:100,step:1},stepSize:28,circle:{radius:20,minRadius:1,maxRadius:100,step:1},rectangle:{height:20,width:20,minLength:1,maxLength:100,step:1},canvasWidth:600,canvasHeight:600};function Ve(){var e=(0,i.useState)(null),t=e[0],n=e[1],r=(0,i.useState)(He),a=r[0],o=r[1],l=(0,i.useState)("circle"),c=l[0],d=l[1],v=(0,i.useState)(!1),m=v[0],b=v[1],g=(0,i.useState)(!0),h=g[0],x=g[1],y=function(e,t){var n=(0,i.useState)(e),r=n[0],a=n[1];return(0,i.useEffect)((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r}(a,250),E=(0,i.useRef)();function w(){return(w=(0,u.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:return b(!0),"https://serene-coast-64325.herokuapp.com/rrt",e.next=6,p().post("https://serene-coast-64325.herokuapp.com/rrt",ke(a));case 6:t=e.sent,b(!1),x(!0),n(t.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){function e(){return(e=(0,u.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().post("https://serene-coast-64325.herokuapp.com/rrt",ke(a));case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,i.useEffect)((function(){var e=new(f())(Ce(t,a,o,c,h),E.current);return x(!1),function(){e.remove()}}),[t,y,c]),i.createElement("div",{className:"flex flex-col items-center justify-center h-full relative"},i.createElement("div",null,m?i.createElement("div",{className:"flex items-center justify-center space-x-3"},i.createElement("p",null,'"Waiting for backend to deliver results!"'),i.createElement(Te(),{type:"spinningBubbles",color:"blue",width:"24px",height:"24px"})):""),i.createElement("div",{className:"cursor-pointer",style:{height:a.canvasHeight+"px",width:a.canvasWidth+"px"},ref:E}),i.createElement(Se,{options:De,updateParentSelection:d}),i.createElement("div",{className:"flex justify-center items-center space-x-3"},i.createElement("button",{className:"bg-blue-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 disabled:cursor-not-allowed",onClick:function(){return function(){return w.apply(this,arguments)}()},disabled:m},"Generate the RRT Map!"),i.createElement("button",{className:"bg-red-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-red-400 hover:ring hover:ring-red-400",onClick:function(){return o(Object.assign({},a,{obstacles:[]}))}},"Clear Obstacles (X)")),i.createElement("div",{className:"flex flex-col"},{"Start Node":i.createElement(Ne,{value:a.startPoint.radius,setValue:function(e){o((function(t){return Object.assign({},t,{startPoint:Object.assign({},t.startPoint,{radius:e})})}))},min:a.startPoint.minRadius,max:a.startPoint.maxRadius,step:a.startPoint.step,color:"#0079D9"}),"Goal Node":i.createElement(je,{value:a.goalPoint.radius,setValue:function(e){o((function(t){return Object.assign({},t,{goalPoint:Object.assign({},t.goalPoint,{radius:e})})}))},min:a.goalPoint.minRadius,max:a.goalPoint.maxRadius,step:a.goalPoint.step,color:"#bad7f2"}),Rectangle:i.createElement(Ae,{width:a.rectangle.width,height:a.rectangle.height,setWidth:function(e){o((function(t){return Object.assign({},t,{rectangle:Object.assign({},t.rectangle,{width:e})})}))},setHeight:function(e){o((function(t){return Object.assign({},t,{rectangle:Object.assign({},t.rectangle,{height:e})})}))},min:a.rectangle.minLength,max:a.rectangle.maxLength,step:a.rectangle.step,color:"#baf2bb"}),Circle:i.createElement(Ie,{value:a.circle.radius,setValue:function(e){o((function(t){return Object.assign({},t,{circle:Object.assign({},t.circle,{radius:e})})}))},min:a.circle.minRadius,max:a.circle.maxRadius,step:a.circle.step,color:"#bad7f2"}),"Step Size":i.createElement(Fe,{value:a.stepSize,setValue:function(e){o((function(t){return Object.assign({},t,{stepSize:e})}))},min:2,max:100,step:1,color:"#bad7f2"})}[c.value]))}var Ue=function(){return i.createElement("main",null,i.createElement("div",{className:"bg-blue-300 text-6xl flex items-center justify-center py-6 mb-6"},"Example RRT"),"undefined"!=typeof window&&i.createElement(Ve,null))}}}]);
//# sourceMappingURL=component---src-pages-rrt-js-fc2bbb9cc71966700fae.js.map