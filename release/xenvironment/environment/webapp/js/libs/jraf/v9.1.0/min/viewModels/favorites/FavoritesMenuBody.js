define(["ojs/ojcore","knockout","jquery","jraf/jrafcore","jraf/models/favorites/FavoritesContent","jraf/models/favorites/FavoritesConfig","jraf/utils/ValidationUtils","ojs/ojnavigationlist","ojs/ojbutton"],(function(t,i,e,o,n,r,s){"use strict";var a=t.Translations.getTranslatedString;function d(t){if(!(s.isObjectStrict(t)&&s.isNonemptyString(t.favoritesNavListId)&&i.isObservable(t.menuDataLoaded)&&i.isObservable(t.drilledPath)&&s.isArray(t.drilledPath())&&s.isFunction(t.openContentCallback)))throw new TypeError("FavoritesMenuBody: Invalid configuration.");var e=this;this.favoritesListItemTemplateId=o.UIShell.generateUniqueId(),this.pinFavoriteLabel=a("jraf.sidebar.favorites.pinFavorite"),this.unpinFavoriteLabel=a("jraf.sidebar.favorites.unpinFavorite"),this.favoritesListDescription=a("jraf.sidebar.favorites.favoritesListDescription"),this.loadingText=a("jraf.messages.loading"),this.av=r.getInstance().getFavoriteHandler(t.favoriteHandlerKey),this.Al=n.getInstance(this.av.getFavoritesService(),t.favoriteHandlerKey),this.hidePinnedFavorites=i.observable(s.getBoolean(t.hidePinnedFavorites,!1)),this.favoritesNavListId=t.favoritesNavListId,this.menuDataLoaded=t.menuDataLoaded,this.Fj=t.openContentCallback,this.drilledPath=t.drilledPath,this.favoritesFlatNavListId=o.UIShell.generateUniqueId(),this.flatListEnabled=s.isFunction(t.flatListEnabled)?t.flatListEnabled:i.observable(!1),this.pj(),this.beforeExpand=function(t,i){return e.kj(t)},this.beforeCollapse=function(t,i){return e.yj()},this.beforeSelect=function(t,i){return e.wj(t)},this.togglePin=function(t,i){return e.Bj(i)},this.getLocalizedTitle=function(t){return e.fv(t)},this.getFavoriteGuid=function(t){return e.uv(t)}}return d.prototype.pj=function(){this.favoriteToGuidMap={},this.guidToFavoriteMap={},this.favorites=this.Al.getFavorites(),this.favoritesContentLoaded=this.Al.getFavoritesContentLoaded(),this.Cj(),this.gv(),this.menuDataLoaded(!0)},d.prototype.connected=function(){var t=this;this.favoritesSubscription||(this.favoritesSubscription=this.favorites.subscribe((function(){t.Cj(),t.gv()})))},d.prototype.gv=function(){var t=this;this.xv(),this.folderSubscriptions=[],this.favorites().forEach((function(i){if(i.isFolder){var e=i.children.subscribe((function(){t.Cj()}));t.folderSubscriptions.push(e)}}))},d.prototype.Cj=function(){var i=this,o=document.getElementById(this.favoritesNavListId);t.Context.getContext(o).getBusyContext().whenReady().then((function(){e("#"+i.favoritesNavListId).ojNavigationList("refresh")}));var n=document.getElementById(this.favoritesFlatNavListId);t.Context.getContext(n).getBusyContext().whenReady().then((function(){e("#"+i.favoritesFlatNavListId).ojNavigationList("refresh")}))},d.prototype.Bj=function(t){t.isPinned()?this.Al.unpinFavorite(t.entryId):this.Al.pinFavorite(t.entryId)},d.prototype.fv=function(t){return this.av.getLocalizedTitle(t.entryId)},d.prototype.uv=function(t){var i=this.favoriteToGuidMap[t.entryId];return i||(i=o.UIShell.generateUniqueId(),this.favoriteToGuidMap[t.entryId]=i,this.guidToFavoriteMap[i]=t),i},d.prototype.kj=function(t){var i=t.detail.key,e=this.guidToFavoriteMap[i];return this.drilledPath.push({favorite:e,guid:i}),!0},d.prototype.yj=function(){return this.drilledPath.pop(),!0},d.prototype.wj=function(i){t.Logger.info("UIShellTasksMenu._handleBeforeSelect: Entering.");var e=this.guidToFavoriteMap[i.detail.key];return!(!e||!e.isFolder)||(this.Fj(e.entryId),i.preventDefault(),!1)},d.prototype.disconnected=function(){this.favoritesSubscription&&(this.favoritesSubscription.dispose(),this.favoritesSubscription=null)},d.prototype.xv=function(){this.folderSubscriptions&&this.folderSubscriptions.forEach((function(t){t.dispose()}))},d}));