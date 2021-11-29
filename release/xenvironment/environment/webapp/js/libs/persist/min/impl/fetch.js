!function(a){"use strict";function b(a){if("string"!=typeof a&&(a=String(a)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a))throw new TypeError("Invalid character in header field name");return a.toLowerCase()}function c(a){return"string"!=typeof a&&(a=String(a)),a}function d(a){var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};return r.iterable&&(b[Symbol.iterator]=function(){return b}),b}function e(a){this.map={},a instanceof e?a.forEach(function(a,b){this.append(b,a)},this):Array.isArray(a)?a.forEach(function(a){this.append(a[0],a[1])},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])},this)}function f(a){if(a.bodyUsed)return Promise.reject(new TypeError("Already read"));a.bodyUsed=!0}function g(a){return new Promise(function(b,c){a.onload=function(){b(a.result)},a.onerror=function(){c(a.error)}})}function h(a){var b=new FileReader,c=g(b);return b.readAsArrayBuffer(a),c}function i(a){var b=new FileReader,c=g(b);return b.readAsText(a),c}function j(a){for(var b=new Uint8Array(a),c=new Array(b.length),d=0;d<b.length;d++)c[d]=String.fromCharCode(b[d]);return c.join("")}function k(a){if(a.slice)return a.slice(0);var b=new Uint8Array(a.byteLength);return b.set(new Uint8Array(a)),b.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(a){if(this._bodyInit=a,a)if("string"==typeof a)this._bodyText=a;else if(r.blob&&Blob.prototype.isPrototypeOf(a))this._bodyBlob=a;else if(r.formData&&FormData.prototype.isPrototypeOf(a))this._bodyFormData=a;else if(r.searchParams&&URLSearchParams.prototype.isPrototypeOf(a))this._bodyText=a.toString();else if(r.arrayBuffer&&r.blob&&t(a))this._bodyArrayBuffer=k(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!r.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(a)&&!u(a))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=k(a)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof a?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var a=f(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var a=f(this);if(a)return a;if(this._bodyBlob)return i(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(j(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this._bodyFormData?Promise.resolve(this._bodyFormData):this.text().then(o)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(a){var b=a.toUpperCase();return v.indexOf(b)>-1?b:a}function n(a,b){b=b||{};var c=b.body;if(a instanceof n){if(a.bodyUsed)throw new TypeError("Already read");this.url=a.url,this.credentials=a.credentials,b.headers||(this.headers=new e(a.headers)),this.method=a.method,this.mode=a.mode,c||null==a._bodyInit||(c=a._bodyInit,a.bodyUsed=!0)}else this.url=String(a);if(this.credentials=b.credentials||this.credentials||"omit",!b.headers&&this.headers||(this.headers=new e(b.headers)),this.method=m(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&c)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(c)}function o(a){var b=new FormData;return a.trim().split("&").forEach(function(a){if(a){var c=a.split("="),d=c.shift().replace(/\+/g," "),e=c.join("=").replace(/\+/g," ");b.append(decodeURIComponent(d),decodeURIComponent(e))}}),b}function p(a){var b=new e;return a.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(a){var c=a.split(":"),d=c.shift().trim();if(d){var e=c.join(":").trim();b.append(d,e)}}),b}function q(a,b){b||(b={}),this.type="default",this.status="status"in b?b.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in b?b.statusText:"OK",this.headers=new e(b.headers),this.url=b.url||"",this._initBody(a)}if(!a.fetch){var r={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch(a){return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};if(r.arrayBuffer)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],t=function(a){return a&&DataView.prototype.isPrototypeOf(a)},u=ArrayBuffer.isView||function(a){return a&&s.indexOf(Object.prototype.toString.call(a))>-1};e.prototype.append=function(a,d){a=b(a),d=c(d);var e=this.map[a];this.map[a]=e?e+","+d:d},e.prototype.delete=function(a){delete this.map[b(a)]},e.prototype.get=function(a){return a=b(a),this.has(a)?this.map[a]:null},e.prototype.has=function(a){return this.map.hasOwnProperty(b(a))},e.prototype.set=function(a,d){this.map[b(a)]=c(d)},e.prototype.forEach=function(a,b){for(var c in this.map)this.map.hasOwnProperty(c)&&a.call(b,this.map[c],c,this)},e.prototype.keys=function(){var a=[];return this.forEach(function(b,c){a.push(c)}),d(a)},e.prototype.values=function(){var a=[];return this.forEach(function(b){a.push(b)}),d(a)},e.prototype.entries=function(){var a=[];return this.forEach(function(b,c){a.push([c,b])}),d(a)},r.iterable&&(e.prototype[Symbol.iterator]=e.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];n.prototype.clone=function(){return new n(this,{body:this._bodyInit})},l.call(n.prototype),l.call(q.prototype),q.prototype.clone=function(){return new q(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new e(this.headers),url:this.url})},q.error=function(){var a=new q(null,{status:0,statusText:""});return a.type="error",a};var w=[301,302,303,307,308];q.redirect=function(a,b){if(-1===w.indexOf(b))throw new RangeError("Invalid status code");return new q(null,{status:b,headers:{location:a}})},a.Headers=e,a.Request=n,a.Response=q,a.fetch=function(a,b){return new Promise(function(c,d){var e=new n(a,b),f=new XMLHttpRequest;f.onload=function(){var a={status:f.status,statusText:f.statusText,headers:p(f.getAllResponseHeaders()||"")};a.url="responseURL"in f?f.responseURL:a.headers.get("X-Request-URL");var b="response"in f?f.response:f.responseText;c(new q(b,a))},f.onerror=function(){d(new TypeError("Network request failed"))},f.ontimeout=function(){d(new TypeError("Network request failed"))},f.open(e.method,e.url,!0),"include"===e.credentials&&(f.withCredentials=!0),"responseType"in f&&r.blob&&(f.responseType="blob"),e.headers.forEach(function(a,b){f.setRequestHeader(b,a)}),f.send(void 0===e._bodyInit?null:e._bodyInit)})},a.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);