var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,u=setTimeout(S,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=i}function S(){var e=d();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return v?m(n,i-(e-c)):n}(e))}function h(e){return u=void 0,b&&r?y(e):(r=o=void 0,a)}function w(){var e=d(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return T(f);if(v)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?a:h(d())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")};b.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),b.email.addEventListener("input",t((function(e){y="email";const t=e.currentTarget.value;localStorage.setItem(y,t)}),500)),b.message.addEventListener("input",t((function(e){y="message";const t=e.currentTarget.value;localStorage.setItem(y,t)}),500));let y="feedback-form-state";!function(){const e=localStorage.getItem(y);e&&(b.email.value=e)}();
//# sourceMappingURL=03-feedback.33e3b593.js.map
