function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function r(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("table"),e=t.querySelector("tbody");t.addEventListener("click",function(t){if("TH"===t.target.tagName){for(var n=Array.from(t.target.parentNode.children).indexOf(t.target),o=r(e.querySelectorAll("tr")).sort(function(t,r){var e=t.cells[n].textContent.trim(),o=r.cells[n].textContent.trim(),a=parseFloat(e.replace(/[$,]/g,""))||e,i=parseFloat(o.replace(/[$,]/g,""))||o;return"number"==typeof a&&"number"==typeof i?a-i:a.localeCompare(i)});e.firstChild;)e.removeChild(e.firstChild);e.append.apply(e,r(o))}})});
//# sourceMappingURL=index.04f210fa.js.map
