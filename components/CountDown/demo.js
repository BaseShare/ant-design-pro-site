webpackJsonp([14,59],{1526:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,n){for(var e=Object.getOwnPropertyNames(n),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(n,s);o&&o.configurable&&void 0===t[s]&&Object.defineProperty(t,s,o)}return t}function o(t,n){var e={};for(var a in t)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function p(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):s(t,n))}function c(t){return 1*t<10?"0"+t:t}Object.defineProperty(n,"__esModule",{value:!0});var u,l,f,m=e(1),h=a(m),k=(l=u=function(t){function n(e){p(this,n);var a=i(this,t.call(this,e));f.call(a);var s=a.initTime(e),o=s.lastTime;return a.state={lastTime:o},a}return r(n,t),n.prototype.componentDidMount=function(){this.tick()},n.prototype.componentWillReceiveProps=function(t){var n=this;if(this.props.target!==t.target){clearTimeout(this.timer);var e=this.initTime(t),a=e.lastTime;this.setState({lastTime:a},function(){n.tick()})}},n.prototype.componentWillUnmount=function(){clearTimeout(this.timer)},n.prototype.render=function(){var t=this.props,n=t.format,e=void 0===n?this.defaultFormat:n,a=o(t,["format"]),s=this.state.lastTime,p=e(s);return h["default"].createElement("span",a,p)},n}(m.Component),f=function(){var t=this;this.timer=0,this.interval=1e3,this.initTime=function(t){var n=0,e=0;try{e="[object Date]"===Object.prototype.toString.call(t.target)?t.target.getTime():new Date(t.target).getTime()}catch(a){throw new Error("invalid target prop",a)}return n=e-(new Date).getTime(),{lastTime:n}},this.defaultFormat=function(t){var n=36e5,e=6e4,a=c(Math.floor(t/n)),s=c(Math.floor((t-a*n)/e)),o=c(Math.floor((t-a*n-s*e)/1e3));return h["default"].createElement("span",null,a,":",s,":",o)},this.tick=function(){var n=t.props.onEnd,e=t.state.lastTime;t.timer=setTimeout(function(){e<t.interval?(clearTimeout(t.timer),t.setState({lastTime:0},function(){n&&n()})):(e-=t.interval,t.setState({lastTime:e},function(){t.tick()}))},t.interval)}},l);n["default"]=k,t.exports=n["default"]},1595:function(t,n,e){t.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684\u5012\u8ba1\u65f6\u7ec4\u4ef6\u4f7f\u7528\u3002"]],"en-US":[["p","The simplest usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"scaffold/src/components/CountDown/demo/simple.md",id:"scaffold-src-components-CountDown-demo-simple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> CountDown <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/CountDown\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> targetTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3900000</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountDown</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">target</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>targetTime<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function t(t){return t&&t.__esModule?t:{"default":t}}var n=e(1),a=(e(10),e(1526)),s=t(a),o=(new Date).getTime()+39e5;return n.createElement(s["default"],{style:{fontSize:20},target:o})}}},1636:function(t,n,e){t.exports={simple:e(1595)}}});