define(["jraf/utils/ValidationUtils"],(function(e){"use strict";return{getQueryParameters:function(n){if(!e.isNonemptyString(n))return null;var i=n.indexOf("?");if(i<0||i+1>=n.length)return null;var r=n.indexOf("#"),t=i+1,u=0<=r?r:n.length,a=n.substring(t,u),l={};return a.split("&").forEach((function(n){var i=n.split("="),r=i[1];l[i[0]]=e.isNonemptyString(r)?decodeURIComponent(r.replace(/\+/g," ")):""})),l},injectQueryParameter:function(n,i,r){var t=i;e.isNonemptyString(r)&&(t+="="+r);var u="?";0<n.indexOf("?")&&(u="&"),("?"===n.slice(-1)||0<n.indexOf("?#"))&&(u="");var a=n.indexOf("#");return 0<a?n.slice(0,a)+u+t+n.slice(a):n+u+t}}}));