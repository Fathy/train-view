/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class r{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const i=(t,...n)=>{const i=1===t.length?t[0]:n.reduce(((e,n,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1]),t[0]);return new r(i,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let n="";for(const e of t.cssRules)n+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",e))(n)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const a=window.trustedTypes,l=a?a.emptyScript:"",h=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},d=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const r=this._$Eh(n,e);void 0!==r&&(this._$Eu.set(r,n),t.push(r))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const n=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return r=n,i=this.constructor.elementStyles,t?r.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const e=document.createElement("style"),n=window.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=t.cssText,r.appendChild(e)})),n;var r,i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ES(t,e,n=u){var r,i;const o=this.constructor._$Eh(t,n);if(void 0!==o&&!0===n.reflect){const s=(null!==(i=null===(r=n.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:c.toAttribute)(e,n.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var n,r,i;const o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=o.getPropertyOptions(s),a=t.converter,l=null!==(i=null!==(r=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==i?i:c.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let r=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,n))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.0.2");const _=globalThis.trustedTypes,m=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,g="?"+v,y=`<${g}>`,w=document,$=(t="")=>w.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,x=t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,C=/>/g,R=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,k=/"/g,P=/^(?:script|style|textarea)$/i,U=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),O=U(1),N=(U(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),H=new WeakMap,M=w.createTreeWalker(w,129,null,!1),B=(t,e)=>{const n=t.length-1,r=[];let i,o=2===e?"<svg>":"",s=E;for(let e=0;e<n;e++){const n=t[e];let a,l,h=-1,c=0;for(;c<n.length&&(s.lastIndex=c,l=s.exec(n),null!==l);)c=s.lastIndex,s===E?"!--"===l[1]?s=S:void 0!==l[1]?s=C:void 0!==l[2]?(P.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=R):void 0!==l[3]&&(s=R):s===R?">"===l[0]?(s=null!=i?i:E,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?R:'"'===l[3]?k:T):s===k||s===T?s=R:s===S||s===C?s=E:(s=R,i=void 0);const d=s===R&&t[e+1].startsWith("/>")?" ":"";o+=s===E?n+y:h>=0?(r.push(a),n.slice(0,h)+"$lit$"+n.slice(h)+v+d):n+v+(-2===h?(r.push(void 0),e):d)}const a=o+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(a):a,r]};class j{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let i=0,o=0;const s=t.length-1,a=this.parts,[l,h]=B(t,e);if(this.el=j.createElement(l,n),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=M.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const n=h[o++];if(t.push(e),void 0!==n){const t=r.getAttribute(n.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?J:"@"===e[1]?q:W})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(P.test(r.tagName)){const t=r.textContent.split(v),e=t.length-1;if(e>0){r.textContent=_?_.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],$()),M.nextNode(),a.push({type:2,index:++i});r.append(t[e],$())}}}else if(8===r.nodeType)if(r.data===g)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(v,t+1));)a.push({type:7,index:i}),t+=v.length-1}i++}}static createElement(t,e){const n=w.createElement("template");return n.innerHTML=t,n}}function I(t,e,n=t,r){var i,o,s,a;if(e===N)return e;let l=void 0!==r?null===(i=n._$Cl)||void 0===i?void 0:i[r]:n._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,n,r)),void 0!==r?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[r]=l:n._$Cu=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,r)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(n,!0);M.currentNode=i;let o=M.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new F(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new G(o,this,t)),this.v.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(o=M.nextNode(),s++)}return i}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class F{constructor(t,e,n,r){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cg=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),b(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):x(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==L&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=j.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(n);else{const t=new D(i,this),e=t.p(this.options);t.m(n),this.S(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new j(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const i of t)r===e.length?e.push(n=new F(this.A($()),this.A($()),this,this.options)):n=e[r],n._$AI(i),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,n,r,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,r){const i=this.strings;let o=!1;if(void 0===i)t=I(this,t,e,0),o=!b(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=I(this,r[n+s],e,s),a===N&&(a=this._$AH[s]),o||(o=!b(a)||a!==this._$AH[s]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}o&&!r&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends W{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}const z=_?_.emptyScript:"";class J extends W{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,z):this.element.removeAttribute(this.name)}}class q extends W{constructor(t,e,n,r,i){super(t,e,n,r,i),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=I(this,t,e,0))&&void 0!==n?n:L)===N)return;const r=this._$AH,i=t===L&&r!==L||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==L&&(r===L||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const K=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,Y;null==K||K(j,F),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.2");class Z extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,n)=>{var r,i;const o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:e;let s=o._$litPart$;if(void 0===s){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new F(e.insertBefore($(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}Z.finalized=!0,Z._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Z});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Z});function tt(t){return t=t||[],Array.isArray(t)?t:[t]}function et(t){return`[Vaadin.Router] ${t}`}(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.0.2");const nt=["module","nomodule"];function rt(t){if(!t.match(/.+\.[m]?js$/))throw new Error(et(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function it(t){if(!t||!ct(t.path))throw new Error(et('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,n=["component","redirect","bundle"];if(!(ht(t.action)||Array.isArray(t.children)||ht(t.children)||lt(e)||n.some((e=>ct(t[e])))))throw new Error(et(`Expected route config "${t.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(e)if(ct(e))rt(e);else{if(!nt.some((t=>t in e)))throw new Error(et('Expected route bundle to include either "nomodule" or "module" keys, or both'));nt.forEach((t=>t in e&&rt(e[t])))}t.redirect&&["bundle","component"].forEach((e=>{e in t&&console.warn(et(`Route config "${t.path}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function ot(t){tt(t).forEach((t=>it(t)))}function st(t,e){let n=document.head.querySelector('script[src="'+t+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",t),"module"===e?n.setAttribute("type","module"):"nomodule"===e&&n.setAttribute("nomodule",""),n.async=!0),new Promise(((t,e)=>{n.onreadystatechange=n.onload=e=>{n.__dynamicImportLoaded=!0,t(e)},n.onerror=t=>{n.parentNode&&n.parentNode.removeChild(n),e(t)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&t()}))}function at(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function lt(t){return"object"==typeof t&&!!t}function ht(t){return"function"==typeof t}function ct(t){return"string"==typeof t}function dt(t){const e=new Error(et(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const ut=new class{};function pt(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const n=t.composedPath?t.composedPath():t.path||[];for(let t=0;t<n.length;t++){const r=n[t];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){e=r;break}}for(;e&&"a"!==e.nodeName.toLowerCase();)e=e.parentNode;if(!e||"a"!==e.nodeName.toLowerCase())return;if(e.target&&"_self"!==e.target.toLowerCase())return;if(e.hasAttribute("download"))return;if(e.hasAttribute("router-ignore"))return;if(e.pathname===window.location.pathname&&""!==e.hash)return;const r=e.origin||function(t){const e=t.port,n=t.protocol;return`${n}//${"http:"===n&&"80"===e||"https:"===n&&"443"===e?t.hostname:t.host}`}(e);if(r!==window.location.origin)return;const{pathname:i,search:o,hash:s}=e;at("go",{pathname:i,search:o,hash:s})&&(t.preventDefault(),t&&"click"===t.type&&window.scrollTo(0,0))}const ft={activate(){window.document.addEventListener("click",pt)},inactivate(){window.document.removeEventListener("click",pt)}};function _t(t){if("vaadin-router-ignore"===t.state)return;const{pathname:e,search:n,hash:r}=window.location;at("go",{pathname:e,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!ht(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n.state=e.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const mt={activate(){window.addEventListener("popstate",_t)},inactivate(){window.removeEventListener("popstate",_t)}};var vt=Tt,gt=At,yt=function(t,e){return xt(At(t,e))},wt=xt,$t=Rt,bt=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function At(t,e){for(var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/",l=e&&e.delimiters||"./",h=!1;null!==(n=bt.exec(t));){var c=n[0],d=n[1],u=n.index;if(s+=t.slice(o,u),o=u+c.length,d)s+=d[1],h=!0;else{var p="",f=t[o],_=n[2],m=n[3],v=n[4],g=n[5];if(!h&&s.length){var y=s.length-1;l.indexOf(s[y])>-1&&(p=s[y],s=s.slice(0,y))}s&&(r.push(s),s="",h=!1);var w=""!==p&&void 0!==f&&f!==p,$="+"===g||"*"===g,b="?"===g||"*"===g,A=p||a,x=m||v;r.push({name:_||i++,prefix:p,delimiter:A,optional:b,repeat:$,partial:w,pattern:x?St(x):"[^"+Et(A)+"]+?"})}}return(s||o<t.length)&&r.push(s+t.substr(o)),r}function xt(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var i="",o=r&&r.encode||encodeURIComponent,s=0;s<t.length;s++){var a=t[s];if("string"!=typeof a){var l,h=n?n[a.name]:void 0;if(Array.isArray(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<h.length;c++){if(l=o(h[c],a),!e[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(0===c?a.prefix:a.delimiter)+l}}else if("string"!=typeof h&&"number"!=typeof h&&"boolean"!=typeof h){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(i+=a.prefix)}else{if(l=o(String(h),a),!e[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');i+=a.prefix+l}}else i+=a}return i}}function Et(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function St(t){return t.replace(/([=!:$/()])/g,"\\$1")}function Ct(t){return t&&t.sensitive?"":"i"}function Rt(t,e,n){for(var r=(n=n||{}).strict,i=!1!==n.start,o=!1!==n.end,s=Et(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(Et).concat("$").join("|"),h=i?"^":"",c=0===t.length,d=0;d<t.length;d++){var u=t[d];if("string"==typeof u)h+=Et(u),c=d===t.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+Et(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?h+=Et(u.prefix)+"("+p+")?":h+="(?:"+Et(u.prefix)+"("+p+"))?":h+=Et(u.prefix)+"("+p+")"}}return o?(r||(h+="(?:"+s+")?"),h+="$"===l?"$":"(?="+l+")"):(r||(h+="(?:"+s+"(?="+l+"))?"),c||(h+="(?="+s+"|"+l+")")),new RegExp(h,Ct(n))}function Tt(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Tt(t[i],e,n).source);return new RegExp("(?:"+r.join("|")+")",Ct(n))}(t,e,n):function(t,e,n){return Rt(At(t,n),e,n)}(t,e,n)}vt.parse=gt,vt.compile=yt,vt.tokensToFunction=wt,vt.tokensToRegExp=$t;const{hasOwnProperty:kt}=Object.prototype,Pt=new Map;function Ut(t){try{return decodeURIComponent(t)}catch(e){return t}}function Ot(t,e,n,r,i){let o,s,a=0,l=t.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(h){if(t===h)return{done:!0};const c=t.__children=t.__children||t.children;if(!o&&(o=function(t,e,n,r,i){const o=`${t}|${n=!!n}`;let s=Pt.get(o);if(!s){const e=[];s={keys:e,pattern:vt(t,e,{end:n,strict:""===t})},Pt.set(o,s)}const a=s.pattern.exec(e);if(!a)return null;const l=Object.assign({},i);for(let t=1;t<a.length;t++){const e=s.keys[t-1],n=e.name,r=a[t];void 0===r&&kt.call(l,n)||(e.repeat?l[n]=r?r.split(e.delimiter).map(Ut):[]:l[n]=r?Ut(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:l}}(l,e,!c,r,i),o))return{done:!1,value:{route:t,keys:o.keys,params:o.params,path:o.path}};if(o&&c)for(;a<c.length;){if(!s){const r=c[a];r.parent=t;let i=o.path.length;i>0&&"/"===e.charAt(i)&&(i+=1),s=Ot(r,e.substr(i),n,o.keys,o.params)}const r=s.next(h);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function Nt(t){if(ht(t.route.action))return t.route.action(t)}Pt.set("|false",{keys:[],pattern:/(?:)/});class Lt{constructor(t,e={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||Nt,this.context=Object.assign({resolver:this},e.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){ot(t);const e=[...tt(t)];this.root.__children=e}addRoutes(t){return ot(t),this.root.__children.push(...tt(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const e=Object.assign({},this.context,ct(t)?{pathname:t}:t),n=Ot(this.root,this.__normalizePathname(e.pathname),this.baseUrl),r=this.resolveRoute;let i=null,o=null,s=e;function a(t,l=i.value.route,h){const c=null===h&&i.value.route;return i=o||n.next(c),o=null,t||!i.done&&function(t,e){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}(l,i.value.route)?i.done?Promise.reject(dt(e)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},e,i.value),function(t,e){const{route:n,path:r}=e;if(n&&!n.__synthetic){const e={path:r,route:n};if(t.chain){if(n.parent){let e=t.chain.length;for(;e--&&t.chain[e].route&&t.chain[e].route!==n.parent;)t.chain.pop()}}else t.chain=[];t.chain.push(e)}}(s,i.value),Promise.resolve(r(s)).then((e=>null!=e&&e!==ut?(s.result=e.result||e,s):a(t,l,e)))):(o=i,Promise.resolve(ut))}return e.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((t=>{const e=function(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=(t.route||{}).path;return n&&(e+=` Resolution had failed on route: '${n}'`),e}(s);if(t?console.warn(e):t=new Error(e),t.context=t.context||s,t instanceof DOMException||(t.code=t.code||500),this.errorHandler)return s.result=this.errorHandler(t),s;throw t}))}static __createUrl(t,e){return new URL(t,e)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,n=this.constructor.__createUrl(t,e).href;return n.slice(0,e.length)===e?n.slice(e.length):void 0}}Lt.pathToRegexp=vt;const{pathToRegexp:Ht}=Lt,Mt=new Map;function Bt(t,e,n){const r=e.name||e.component;if(r&&(t.has(r)?t.get(r).push(e):t.set(r,[e])),Array.isArray(n))for(let r=0;r<n.length;r++){const i=n[r];i.parent=e,Bt(t,i,i.__children||i.children)}}function jt(t,e){const n=t.get(e);if(n&&n.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return n&&n[0]}function It(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,void 0!==e?e:""}function Dt(t,e={}){if(!(t instanceof Lt))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let o=jt(n,r);if(!o&&(n.clear(),Bt(n,t.root,t.root.__children),o=jt(n,r),!o))throw new Error(`Route "${r}" not found`);let s=Mt.get(o.fullPath);if(!s){let t=It(o),e=o.parent;for(;e;){const n=It(e);n&&(t=n.replace(/\/$/,"")+"/"+t.replace(/^\//,"")),e=e.parent}const n=Ht.parse(t),r=Ht.tokensToFunction(n),i=Object.create(null);for(let t=0;t<n.length;t++)ct(n[t])||(i[n[t].name]=!0);s={toPath:r,keys:i},Mt.set(t,s),o.fullPath=t}let a=s.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const t={},n=Object.keys(i);for(let e=0;e<n.length;e++){const r=n[e];s.keys[r]||(t[r]=i[r])}const r=e.stringifyQueryParams(t);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let Ft=[];function Wt(t,e){return t.classList.add(e),new Promise((n=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const r=t.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;t.setAttribute("style",`position: absolute; ${i}`),((t,e)=>{const n=()=>{t.removeEventListener("animationend",n),e()};t.addEventListener("animationend",n)})(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),n()}))}else t.classList.remove(e),n()}))}function Vt(t){return null!=t}function zt({pathname:t="",search:e="",hash:n="",chain:r=[],params:i={},redirectFrom:o,resolver:s},a){const l=r.map((t=>t.route));return{baseUrl:s&&s.baseUrl||"",pathname:t,search:e,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:i,redirectFrom:o,getUrl:(t={})=>Qt(Zt.pathToRegexp.compile(Yt(l))(Object.assign({},i,t)),s)}}function Jt(t,e){const n=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:n}}}function qt(t,e,n){if(ht(t))return t.apply(n,e)}function Gt(t,e,n){return r=>r&&(r.cancel||r.redirect)?r:n?qt(n[t],e,n):void 0}function Kt(t){if(t&&t.length){const e=t[0].parentNode;for(let n=0;n<t.length;n++)e.removeChild(t[n])}}function Qt(t,e){const n=e.__effectiveBaseUrl;return n?e.constructor.__createUrl(t.replace(/^\//,""),n).pathname:t}function Yt(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):t),"")}class Zt extends Lt{constructor(t,e){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Lt.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},e)),this.resolveRoute=t=>this.__resolveRoute(t);const i=Zt.NavigationTrigger;Zt.setTriggers.apply(Zt,Object.keys(i).map((t=>i[t]))),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=zt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const e=t.route;let n=Promise.resolve();ht(e.children)&&(n=n.then((()=>e.children(function(t){const e=Object.assign({},t);return delete e.next,e}(t)))).then((t=>{Vt(t)||ht(e.children)||(t=e.children),function(t,e){if(!Array.isArray(t)&&!lt(t))throw new Error(et(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const n=tt(t);for(let t=0;t<n.length;t++)it(n[t]),e.__children.push(n[t])}(t,e)})));const r={redirect:e=>Jt(t,e),component:t=>{const e=document.createElement(t);return this.__createdByRouter.set(e,!0),e}};return n.then((()=>{if(this.__isLatestRender(t))return qt(e.action,[t,r],e)})).then((t=>{return Vt(t)&&(t instanceof HTMLElement||t.redirect||t===ut)?t:ct(e.redirect)?r.redirect(e.redirect):e.bundle?(n=e.bundle,ct(n)?st(n):Promise.race(nt.filter((t=>t in n)).map((t=>st(n[t],t))))).then((()=>{}),(()=>{throw new Error(et(`Bundle not found: ${e.bundle}. Check if the file name is correct`))})):void 0;var n})).then((t=>Vt(t)?t:ct(e.component)?r.component(e.component):void 0))}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,e=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),e||this.__onNavigationEvent(),this.ready}render(t,e){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},ct(t)?{pathname:t}:t,{__renderId:n});return this.ready=this.resolve(r).then((t=>this.__fullyResolveChain(t))).then((t=>{if(this.__isLatestRender(t)){const r=this.__previousContext;if(t===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=zt(t),e&&this.__updateBrowserHistory(t,1===n),at("location-changed",{router:this,location:this.location}),t.__skipAttach)return this.__copyUnchangedElements(t,r),this.__previousContext=t,this.location;this.__addAppearingContent(t,r);const i=this.__animateIfNeeded(t);return this.__runOnAfterEnterCallbacks(t),this.__runOnAfterLeaveCallbacks(t,r),i.then((()=>{if(this.__isLatestRender(t))return this.__removeDisappearingContent(),this.__previousContext=t,this.location}))}})).catch((t=>{if(n===this.__lastStartedRenderId)throw e&&this.__updateBrowserHistory(r),Kt(this.__outlet&&this.__outlet.children),this.location=zt(Object.assign(r,{resolver:this})),at("error",Object.assign({router:this,error:t},r)),t})),this.ready}__fullyResolveChain(t,e=t){return this.__findComponentContextAfterAllRedirects(e).then((n=>{const r=n!==e?n:t,i=Qt(Yt(n.chain),n.resolver)===n.pathname,o=(t,e=t.route,n)=>t.next(void 0,e,n).then((n=>null===n||n===ut?i?t:null!==e.parent?o(t,e.parent,n):n:n));return o(n).then((t=>{if(null===t||t===ut)throw dt(r);return t&&t!==ut&&t!==n?this.__fullyResolveChain(r,t):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(t){const e=t.result;return e instanceof HTMLElement?(function(t,e){e.location=zt(t);const n=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[n].element=e}(t,e),Promise.resolve(t)):e.redirect?this.__redirect(e.redirect,t.__redirectCount,t.__renderId).then((t=>this.__findComponentContextAfterAllRedirects(t))):e instanceof Error?Promise.reject(e):Promise.reject(new Error(et(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then((e=>e===this.__previousContext||e===t?e:this.__fullyResolveChain(e)))}__runOnBeforeCallbacks(t){const e=this.__previousContext||{},n=e.chain||[],r=t.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),s=e=>Jt(t,e);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let e=0;e<Math.min(n.length,r.length)&&(n[e].route===r[e].route&&(n[e].path===r[e].path||n[e].element===r[e].element)&&this.__isReusableElement(n[e].element,r[e].element));e=++t.__divergedChainIndex);if(t.__skipAttach=r.length===n.length&&t.__divergedChainIndex==r.length&&this.__isReusableElement(t.result,e.result),t.__skipAttach){for(let e=r.length-1;e>=0;e--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:o},n[e]);for(let e=0;e<r.length;e++)i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:o,redirect:s},r[e]),n[e].element.location=zt(t,n[e].route)}else for(let e=n.length-1;e>=t.__divergedChainIndex;e--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:o},n[e])}if(!t.__skipAttach)for(let e=0;e<r.length;e++)e<t.__divergedChainIndex?e<n.length&&n[e].element&&(n[e].element.location=zt(t,n[e].route)):(i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:o,redirect:s},r[e]),r[e].element&&(r[e].element.location=zt(t,r[e].route)));return i.then((e=>{if(e){if(e.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(e.redirect)return this.__redirect(e.redirect,t.__redirectCount,t.__renderId)}return t}))}__runOnBeforeLeaveCallbacks(t,e,n,r){const i=zt(e);return t.then((t=>{if(this.__isLatestRender(e)){return Gt("onBeforeLeave",[i,n,this],r.element)(t)}})).then((t=>{if(!(t||{}).redirect)return t}))}__runOnBeforeEnterCallbacks(t,e,n,r){const i=zt(e,r.route);return t.then((t=>{if(this.__isLatestRender(e)){return Gt("onBeforeEnter",[i,n,this],r.element)(t)}}))}__isReusableElement(t,e){return!(!t||!e)&&(this.__createdByRouter.get(t)&&this.__createdByRouter.get(e)?t.localName===e.localName:t===e)}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,e,n){if(e>256)throw new Error(et(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(e||0)+1,__renderId:n})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(et(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:e="",hash:n=""},r){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,t+e+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,e){let n=this.__outlet;for(let r=0;r<t.__divergedChainIndex;r++){const i=e&&e.chain[r].element;if(i){if(i.parentNode!==n)break;t.chain[r].element=i,n=i}}return n}__addAppearingContent(t,e){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(t,e);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((e=>this.__addedByRouter.get(e)&&e!==t.result));let r=n;for(let e=t.__divergedChainIndex;e<t.chain.length;e++){const i=t.chain[e].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&Kt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Kt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,e){if(e)for(let n=e.chain.length-1;n>=t.__divergedChainIndex&&this.__isLatestRender(t);n--){const r=e.chain[n].element;if(r)try{const n=zt(t);qt(r.onAfterLeave,[n,{},e.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Kt(r.children)}}}__runOnAfterEnterCallbacks(t){for(let e=t.__divergedChainIndex;e<t.chain.length&&this.__isLatestRender(t);e++){const n=t.chain[e].element||{},r=zt(t,t.chain[e].route);qt(n.onAfterEnter,[r,{},t.resolver],n)}}__animateIfNeeded(t){const e=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=t.chain;let o;for(let t=i.length;t>0;t--)if(i[t-1].route.animate){o=i[t-1].route.animate;break}if(e&&n&&o){const t=lt(o)&&o.leave||"leaving",i=lt(o)&&o.enter||"entering";r.push(Wt(e,t)),r.push(Wt(n,i))}return Promise.all(r).then((()=>t))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:e,search:n,hash:r}=t?t.detail:window.location;ct(this.__normalizePathname(e))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:e,search:n,hash:r},!0))}static setTriggers(...t){var e;e=t,Ft.forEach((t=>t.inactivate())),e.forEach((t=>t.activate())),Ft=e}urlForName(t,e){return this.__urlForName||(this.__urlForName=Dt(this)),Qt(this.__urlForName(t,e),this)}urlForPath(t,e){return Qt(Zt.pathToRegexp.compile(t)(e),this)}static go(t){const{pathname:e,search:n,hash:r}=ct(t)?this.__createUrl(t,"http://a"):t;return at("go",{pathname:e,search:n,hash:r})}}const Xt=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,te=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ee(t,e){if("function"!=typeof t)return;const n=Xt.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const ne=function(t,e){if(window.Vaadin.developmentMode)return ee(t,e)};function re(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(te?!function(){if(te){if(Object.keys(te).map((t=>te[t])).filter((t=>t.productionMode)).length>0)return!0}return!1}():!ee((function(){return!0})))}catch(t){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),ne(re),Zt.NavigationTrigger={POPSTATE:mt,CLICK:ft};class ie extends Z{static styles=i`
		:host {
			display: flex;
			justify-content: center;
			color: white;
			width: 100%;
			font-family: monospace;
		}

		table {
			border-collapse: collapse;
			margin-bottom: 10px;
			width: 100%;
		}

		th {
			text-align: left;
		}

		td,
		th {
			padding: 0px 5px;
		}

		tr {
			cursor: pointer;
		}

		tr:nth-child(even) {
			background-color: #282828;
		}

		tr:hover:not(:first-child) {
			background-color: #707070;
		}

		.wrapper {
			display: flex;
			justify-content: center;
			width: 85%;
			min-height: 100%;
			margin-top: 20px;
			margin-bottom: 20px;
			background-color: #2e2e2e;
		}

		.train-list {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-grow: 2;
			padding: 20px;
			background-color: #1c1c1c;
		}

		.train-details {
			flex-grow: 1;
			display: flex;
			min-width: 180px;
			flex-direction: column;
			margin-left: 10px;
		}

		.inner-details-wrapper {
			padding: 20px;
			background-color: #1c1c1c;
		}

		.train-details-schedule {
			margin-top: 10px;
			background-color: #1c1c1c;
			padding: 20px;
		}

		.right-align {
			text-align: right;
		}

		.search-bar {
			width: 100%;
			margin-bottom: 10px;
		}

		.search {
			border: 1px solid #858585;
			background: transparent;
			color: #ffffff;
			font-family: monospace;
			padding: 0px;
		}

		.search:focus-visible {
			border-color: #ffffff;
		}

		.search:focus-visible {
			outline: none;
		}

		@media only screen and (max-width: 950px) {
			.wrapper {
				flex-direction: column-reverse;
				margin-top: 10px;
				width: 95%;
			}

			.train-details {
				margin-left: 0px;
				margin-bottom: 10px;
			}
		}

		@media only screen and (max-width: 600px) {
			.priority-3 {
				display: none;
			}
		}
	`;static properties={currentTrain:void 0,currentTrainSchedule:{},location:{},searchFilter:"",data:[]};setCurrentTrain(t){this.currentTrain=t,Zt.go("/train-view/trains/"+t.trainno)}firstUpdated(){super.firstUpdated(),fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("http://www3.septa.org/hackathon/TrainView/")}`).then((t=>t.json().then((t=>{this.originalData=JSON.parse(t.contents),this.data=this.originalData,this.location.params.trainno&&(this.currentTrain=this.data.filter((t=>t.trainno===this.location.params.trainno))[0],fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`http://www3.septa.org/hackathon/RRSchedules/${this.location.params.trainno}`)}`).then((t=>t.json().then((t=>{this.currentTrainSchedule=JSON.parse(t.contents)})))))}))))}showTrainDetails(){if(!this.currentTrain)return"display:none"}updateSearchFilter(t){this.searchFilter=t.target.value,this.data=this.originalData.filter((t=>t.line.toLowerCase().includes(this.searchFilter.toLowerCase())||t.trainno.includes(this.searchFilter)))}constructor(){super(),this.originalData=[],this.currentTrainSchedule=[],this.data=this.originalData,this.currentTrain=void 0}render(){return O`
			<div class="wrapper">
				<div class="train-list">
					<div class="search-bar">
						<label>Search</label>
						<input
							class="search"
							type="text"
							@keyup="${this.updateSearchFilter}"
						/>
					</div>
					<table>
						<tr>
							<th class="priority-1 right-align">Num.</th>
							<th class="priority-1 right-align">Status</th>
							<th class="priority-2">Line</th>
							<th class="priority-3">Next</th>
						</tr>
						${this.data.map((t=>O` <tr
								@click=${()=>this.setCurrentTrain(t)}
							>
								<td class="priority-1 right-align">
									${t?.trainno}
								</td>
								<td
									class="priority-1 right-align"
									style="${t?.late>0?"color:red":"color:green"}"
								>
									${t?.late.toString().padStart(2,"??")}
									min
								</td>
								<td class="priority-2">${t?.line}</td>
								<td class="priority-3">${t?.nextstop}</td>
							</tr>`))}
					</table>
				</div>
				<div class="train-details" style="${this.showTrainDetails()}">
					<div class="inner-details-wrapper">
						<div class="line">${this.currentTrain?.line}</div>
						<div class="train-number">
							${this.currentTrain?.trainno}
						</div>
						<div class="service">${this.currentTrain?.service}</div>
						<!-- TODO: Have some sort of placeholder when no train is selected -->
						<div class="status">
							${this.currentTrain?.late?this.currentTrain?.late+" min":""}
						</div>
						<div class="current-stop">
							${this.currentTrain?.currentstop}
						</div>
						<div class="next-stop">
							${this.currentTrain?.nextstop}
						</div>
						<div class="next-stop">
							<!-- Temporary fix, separate commas and replace with spaces
                             so text wraps and doesn't go out of bounds -->
							${this.currentTrain?.consist?.replaceAll(","," ")}
						</div>
					</div>
					<div class="train-details-schedule">
						<table>
							<tr>
								<th class="priority-1">Station</th>
								<th class="priority-3">Est.</th>
								<th class="priority-1">Act.</th>
							</tr>
							${this.currentTrainSchedule.map((t=>O` <tr>
									<td class="priority-1">
										${t?.station}
									</td>
									<td class="priority-3">${t?.est_tm}</td>
									<td class="priority-1">
										${"na"===t?.act_tm?"":t?.act_tm}
									</td>
								</tr>`))}
						</table>
					</div>
				</div>
			</div>
		`}}customElements.define("train-view",ie);var oe={};oe=JSON.parse('["Cynwyd","Bala","Wynnefield Avenue","30th Street Station","Suburban Station","Jefferson Station","Temple University","North Broad","Wayne Junction","Newark","Churchman\'s Crossing","Wilmington","Claymont","Marcus Hook","Highland Avenue","Chester","Eddystone","Crum Lynne","Ridley Park","Prospect Park - Moore","Norwood","Glenolden","Folcroft","Sharon Hill","Curtis Park","Darby","Allegheny","East Falls","Wissahickon","Manayunk","Ivy Ridge","Miquon","Spring Mill","Conshohocken","Norristown T.C","Main Street","Norristown - Elm Street","Elwyn","Media","Moylan-Rose Valley","Wallingford","Swarthmore","Morton-Rutledge","Secane","Primos","Clifton-Aldan","Gladstone","Lansdowne","Fernwood-Yeadon","Angora","49th Street","Noble","Rydal","Meadowbrook","Bethayres","Philmont","Forest Hills","Somerton","Trevose","Neshaminy","Langhorne","Woodbourne","Yardley","West Trenton","Airport Terminal E F","Airport Terminal C D","Airport Terminal B","Airport Terminal A","Eastwick","Penn Medicine Station","Fern Rock T C","Melrose Park","Elkins Park","Jenkintown Wyncote","Glenside","Ardsley","Roslyn","Crestmont","Willow Grove","Hatboro","Warminster","Thorndale","Downingtown","Whitford","Exton","Malvern","Paoli","Daylesford","Berwyn","Devon","Strafford","Wayne","St. Davids","Radnor","Villanova","Rosemont","Bryn Mawr","Haverford","Ardmore","Wynnewood","Narberth","Merion","Overbrook","North Hills","Oreland","Fort Washington","Ambler","Penllyn","Gwynedd Valley","North Wales","Pennbrook","Lansdale","Fortuna","Colmar","Link Belt","Chalfont","New Britain","Delaware Valley College","Doylestown","9TH Street Lansdale","Trenton","Levittown-Tullytown","Bristol","Croydon","Eddington","Cornwells Heights","Torresdale","Holmesburg Jct","Tacony","Bridesburg","North Philadelphia Amtrak","Wister","Germantown","Washington Lane","Stenton","Sedgwick","Mount Airy","Wyndmoor","Gravers","Chestnut Hill East","Chestnut Hill West","Highland","St. Martins","Allen Lane","Carpenter","Upsal","Tulpehocken","Chelten Avenue","Queen Lane","North Philadelphia","Olney","Lawndale","Cheltenham","Ryers","Fox Chase","30th St Lower Level"]');class se extends Z{static styles=i`
		:host {
			display: flex;
			align-items: center;
			flex-direction: column;
			color: white;
			width: 100%;
			font-family: monospace;
		}

		.wrapper {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 85%;
			max-width: 440px;
			min-height: 100%;
			margin-top: 20px;
			background-color: #1c1c1c;
		}

		.wrapper button {
			border: 1px solid #858585;
			background: transparent;
			color: #ffffff;
			font-family: monospace;
			padding: 2px 5px;
			margin: 5px;
		}

		#search-button {
			background: #858585;
			color: #1c1c1c;
		}

		.button-area {
			display: flex;
			flex-direction: row;
			margin: 10px 0px;
		}

		.search-unit {
			margin: 2px 0px;
			display: flex;
			flex-direction: column;
		}

		.search-unit label {
			margin-bottom: 5px;
		}

		.search {
			border: 1px solid #858585;
			background: transparent;
			color: #ffffff;
			font-family: monospace;
			padding: 0px;
		}

		.search option {
			background-color: #1c1c1c;
		}

		.title {
			display: block;
			font-size: 20px;
			margin: 10px 0px;
		}

		table {
			border-collapse: collapse;
			margin-bottom: 10px;
			width: 100%;
		}

		th {
			text-align: left;
		}

		td,
		th {
			padding: 0px 5px;
		}

		tr {
			cursor: pointer;
		}

		tr:nth-child(even) {
			background-color: #282828;
		}

		tr:hover:not(:first-child) {
			background-color: #707070;
		}

		.nta-details {
			width: 95%;
		}

		.right-align {
			text-align: right;
		}

		.on-time {
			color: green;
		}

		.late {
			color: red;
		}
	`;static properties={startStop:"",endStop:"",ntaData:[]};firstUpdated(){super.firstUpdated()}constructor(){super(),this.stopsList=oe.sort().map((t=>O`<option value="${t}">${t}</option>`))}getStatusClass(t){return"On time"==t.orig_delay?"on-time":"late"}goToTrain(t){Zt.go(`/train-view/trains/${t.orig_train}`)}getNtaData(t,e){console.debug(`Getting NTA data for start stop [${t}] and end stop [${e}].`),fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`http://www3.septa.org/hackathon/NextToArrive/${t}/${e}/100`)}`).then((t=>t.json().then((t=>{this.ntaData=JSON.parse(t.contents),console.debug("Successfully retrieved NTA data.")}))))}search(){let t=this.startStopSelector.value,e=this.endStopSelector.value;Zt.go(`/train-view/next/${t}/${e}`)}swap(){[this.startStopSelector.value,this.endStopSelector.value]=[this.endStopSelector.value,this.startStopSelector.value],this.search()}setStartEndFromUrl(){this.startStopSelector=this.renderRoot.querySelector("#startStop"),this.endStopSelector=this.renderRoot.querySelector("#endStop");let t=this.location.params.start,e=this.location.params.end;t&&e?(this.startStopSelector.value=t,this.endStopSelector.value=e):(t="30th Street Station",e="Suburban Station",this.startStopSelector.value=t,this.endStopSelector.value=e),this.getNtaData(t,e)}firstUpdated(){super.firstUpdated(),this.setStartEndFromUrl()}render(){return O`
			<div class="wrapper">
				<div class="title">Next to Arrive</div>
				<div class="search-unit">
					<label for="start-stop">Start</label>
					<select class="search" id="startStop">
						${this.stopsList}
					</select>
				</div>
				<div class="search-unit">
					<label for="end-stop">End</label>
					<select class="search" id="endStop">
						${this.stopsList}
					</select>
				</div>
				<div class="button-area">
					<button id="search-button" @click=${this.search}>
						Search
					</button>
					<button @click=${this.swap}>Swap</button>
				</div>
			</div>
			<div class="wrapper">
				<div class="title">Results</div>
				<div class="nta-details">
					<table>
						<tr>
							<th class="priority-1 right-align">Num.</th>
							<th class="priority-1 right-align">Status</th>
							<th class="priority-2">Line</th>
							<th class="priority-3">Depart</th>
						</tr>
						${this.ntaData?.map((t=>O`<tr
								@click=${()=>this.goToTrain(t)}
							>
								<td class="priority-1 right-align">
									${t.orig_train}
								</td>
								<td
									class="priority-1 right-align ${this.getStatusClass(t)}"
								>
									${t.orig_delay}
								</td>
								<td class="priority-2">${t.orig_line}</td>
								<td class="priority-3">
									${t.orig_departure_time}
								</td>
							</tr>`))}
					</table>
				</div>
			</div>
		`}}customElements.define("next-arrive",se);class ae extends Z{static styles=i``;static properties={};get main(){return this.renderRoot?.querySelector("main")}constructor(){super()}firstUpdated(){super.firstUpdated();new Zt(this.main).setRoutes([{path:"/",component:"train-view"},{path:"/trains",component:"train-view"},{path:"/trains/:trainno",component:"train-view"},{path:"/next",component:"next-arrive"},{path:"/next/:start",redirect:"/next"},{path:"/next/:start/:end",component:"next-arrive"}])}render(){return O`<main></main>`}}customElements.define("app-index",ae);