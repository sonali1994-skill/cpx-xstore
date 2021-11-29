/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojeventtarget","ojs/ojdataprovider"],function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}var r=function(){function t(e){i(this,t),this.dataSource=e,this.AsyncIterable=function(){return function t(e){i(this,t),this._asyncIterator=e,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}}(),this.AsyncIterator=function(){function t(e,n){i(this,t),this._nextFunc=e,this._params=n,this._fetchFirst=!0}return s(t,[{key:"next",value:function(){var t=this._fetchFirst;return this._fetchFirst=!1,this._nextFunc(this._params,t)}}]),t}(),this.AsyncIteratorYieldResult=function(){return function e(n,s){i(this,e),this._parent=n,this.value=s,this[t._VALUE]=s,this[t._DONE]=!1}}(),this.AsyncIteratorReturnResult=function(){return function e(n,s){i(this,e),this._parent=n,this.value=s,this[t._VALUE]=s,this[t._DONE]=!0}}(),this.FetchListResult=function(){return function e(n,s,r,a){i(this,e),this._parent=n,this.fetchParameters=s,this.data=r,this.metadata=a,this[t._FETCHPARAMETERS]=s,this[t._DATA]=r,this[t._METADATA]=a}}(),this.ItemMetadata=function(){return function e(n,s){i(this,e),this._parent=n,this.key=s,this[t._KEY]=s}}(),this.SortCriterion=function(){return function e(n,s,r){i(this,e),this._parent=n,this.attribute=s,this.direction=r,this[t._ATTRIBUTE]=s,this[t._DIRECTION]=r}}(),this.DataProviderMutationEventDetail=function(){return function e(n,s,r,a){i(this,e),this._parent=n,this.add=s,this.remove=r,this.update=a,this[t._ADD]=s,this[t._REMOVE]=r,this[t._UPDATE]=a}}(),this.DataProviderOperationEventDetail=function(){return function e(n,s,r,a,h){i(this,e),this._parent=n,this.keys=s,this.metadata=r,this.data=a,this.indexes=h,this[t._KEYS]=s,this[t._METADATA]=r,this[t._DATA]=a,this[t._INDEXES]=h}}(),this.DataProviderAddOperationEventDetail=function(){return function e(n,s,r,a,h,u,o,c){i(this,e),this._parent=n,this.keys=s,this.afterKeys=r,this.addBeforeKeys=a,this.parentKeys=h,this.metadata=u,this.data=o,this.indexes=c,this[t._KEYS]=s,this[t._AFTERKEYS]=r,this[t._ADDBEFOREKEYS]=a,this[t._METADATA]=u,this[t._DATA]=o,this[t._INDEXES]=c}}()}return s(t,[{key:"getCapability",value:function(e){return e==t._SORT&&"full"==this.dataSource.getCapability(e)?{attributes:"multiple"}:"fetchByKeys"==e?{implementation:"lookup"}:"fetchByOffset"==e?{implementation:"lookup"}:null}},{key:"addListener",value:function(t,e){this._eventHandlerFuncs[t]=e.bind(this),this.dataSource.on(t,this._eventHandlerFuncs[t])}},{key:"removeListener",value:function(t){this.dataSource.off(t,this._eventHandlerFuncs[t])}},{key:"removeAllListeners",value:function(){this._eventHandlerFuncs={}}}]),t}();return r._SORT="sort",r._DATA="data",r._KEY="key",r._ATTRIBUTE="attribute",r._DIRECTION="direction",r._VALUE="value",r._DONE="done",r._FETCHPARAMETERS="fetchParameters",r._METADATA="metadata",r._KEYS="keys",r._INDEXES="indexes",r._ADD="add",r._REMOVE="remove",r._UPDATE="update",r._AFTERKEYS="afterKeys",r._ADDBEFOREKEYS="addBeforeKeys",t.EventTargetMixin.applyMixin(r),r});