define(["jquery","knockout","ojs/ojcore","jraf/jrafcore","jraf/models/UIShellManager","jraf/models/NavigationConfig","jraf/models/favorites/PinnedFavoritesState","jraf/models/favorites/FavoritesConfig","jraf/models/HeaderState","jraf/utils/AppContextUtils","jraf/utils/ValidationUtils","ojs/ojknockouttemplateutils","ojs/ojnavigationlist","ojs/ojconveyorbelt","ojs/ojjsontreedatasource","ojs/ojarraydataprovider","jraf/utils/CustomBindings","ojs/ojknockout"],(function(e,t,n,i,o,a,s,r,d,u,l,h){"use strict";var c=n.Translations.getTranslatedString;function p(e){if(!l.isObjectStrict(e)||!l.isArray(e.menus)||!l.isBoolean(e.pinnedFavoritesEnabled))throw new TypeError("NavigationMenu: Missing required parameters");var n=this;this.rootContentId=i.UIShell.generateUniqueId(),this.menuRootTemplateId=i.UIShell.generateUniqueId(),this.pinnedFavoriteTemplateId=i.UIShell.generateUniqueId(),this.navListId=i.UIShell.generateUniqueId(),this.pinsNavListId=i.UIShell.generateUniqueId(),this.settingsNavListId=i.UIShell.generateUniqueId(),this.displayedMenuDrawerId=i.UIShell.generateUniqueId(),this.navMenuLabel=c("jraf.global.navMenu"),this.pinnedFavoritesMenuLabel=c("jraf.global.pinnedFavoritesMenu"),this.settingsMenuLabel=c("jraf.global.settingsMenu"),this.homeLabel=c("jraf.sidebar.home"),this.applicationContext=u.getApplicationContext(),this.rootLabel=i.App.getApplicationName(),this.displayedMenu=t.observable(),this.selectedMenuOpen=t.observable(!1),this.pinnedFavoritesEnabled=e.pinnedFavoritesEnabled,this.hasFavoritesMenuItem=t.observable(!1),this.showPinnedFavorites=t.pureComputed((function(){return n.hasFavoritesMenuItem()&&n.pinnedFavoritesEnabled})),this.renderApplicationIcon=e.renderApplicationIcon,this.headerState=e.headerState,this.showSettingsMenu=t.observable(!1),this.menus=e.menus}return p.APPLICATION_CONTEXT_MENU_ITEM_ICON="jraf-application-context-icon",p.prototype.connected=function(){n.Logger.info("NavigationMenu.connected: Connecting NavigationMenu module."),this.Md||this.Nd(this.menus)},p.prototype.Nd=function(e){var t=this;this.Md={},this.rootMenuItems=[],this.settingsMenuItems=[],e.forEach((function(e){var n=t.wd(e);a.SETTINGS_ID===n.id?(t.settingsMenuItems.push(n),t.showSettingsMenu(!0)):(t.rootMenuItems.push(n),a.FAVORITES_ID===n.id&&t.hasFavoritesMenuItem(!0))})),this.showPinnedFavorites()&&(this.pinnedFavoriteIdToGuid={},this.guidToPinnedFavoriteId={},this.pinnedFavorites=s.getInstance().getPinnedFavorites(),this.pinnedFavoritesSubscription=this.pinnedFavorites.subscribe((function(){t.Ed()}))),this.applicationContextMenuItemId=i.UIShell.generateUniqueId(),this.applicationContext&&this.applicationContext.displayName&&this.Sd();var o=this.Oj(this.rootMenuItems),r=this.Oj(this.settingsMenuItems);this.rootMenuDataSource=new n.JsonTreeDataSource(o),this.settingsMenuDataSource=new n.JsonTreeDataSource(r),this.beforeSelect=function(e,n){t.Gj(e,n)},this.beforeSelectPinnedFavorite=function(e,n){t.Hd(e,n)},this.closeMenu=function(){t.Ud()},this.getMenuRootTemplate=function(){return h.getRenderer(t.menuRootTemplateId,!0)}},p.prototype.Sd=function(){var e={id:this.applicationContextMenuItemId,icon:p.APPLICATION_CONTEXT_MENU_ITEM_ICON,label:this.applicationContext.displayName,isContent:!0,constructHeader:!1,badgingEnabled:!1};this.Md[e.id]=e,this.rootMenuItems.unshift(e)},p.prototype.wd=function(e){var t={id:e.getId(),icon:e.getIcon(),label:c(e.getIconLabel()),isContent:!1,constructHeader:!1,badgingEnabled:e.isBadgingEnabled(),badgeValue:e.getBadgeValue()};return e.hasContent()?(t.isContent=!0,t.content=e.getContent()):(t.module=e.getSidebarMenuModuleBinding(),t.module||(t.module=e.getHorizontalMenuModuleBinding(),t.constructHeader=!0)),this.Md[t.id]=t},p.prototype.Gj=function(e,t){e.preventDefault();var n=this.Md[e.detail.key];n.id===this.applicationContextMenuItemId?(this.applicationContext.changeCallback(),o.closeMobileNavMenu()):n.isContent?(o.openContent(n.content),o.closeMobileNavMenu()):(this.displayedMenu(n),this.qd())},p.prototype.getPinnedFavoriteGuid=function(e){var t=e.pinnedFavoriteId,n=this.pinnedFavoriteIdToGuid[t];return n||(n=i.UIShell.generateUniqueId(),this.pinnedFavoriteIdToGuid[t]=n,this.guidToPinnedFavoriteId[n]=t),n},p.prototype.getPinnedFavoriteIcon=function(e){return s.favoriteIcons[e.favorite.favoriteType]||s.favoriteIcons.unknown},p.prototype.getPinnedFavoriteIconLabel=function(e){return r.getInstance().getFavoriteHandler(e.favoriteHandlerKey).getLocalizedTitle(e.favorite.entryId)},p.prototype.Hd=function(e,t){n.Logger.info("NavigationMenu._handleBeforePinnedFavoriteSelect: Entering.");var i=this.guidToPinnedFavoriteId[e.detail.item.id],a=s.getInstance().lookupPinnedFavoriteById(i),d=a.favoriteHandlerKey;return r.getInstance().getFavoriteHandler(d).openContent(a.favorite.entryId),o.closeMobileNavMenu(),!1},p.prototype.Ed=function(t,i){var o=this,a=document.getElementById(this.pinsNavListId);n.Context.getContext(a).getBusyContext().whenReady().then((function(){e("#"+o.pinsNavListId).ojNavigationList("refresh")}))},p.prototype.qd=function(){this.selectedMenuOpen(!0)},p.prototype.Ud=function(){this.selectedMenuOpen(!1)},p.prototype.disconnected=function(){n.Logger.info("NavigationMenu.disconnected: Disconnecting NavigationMenu module."),this.Md=null,this.pinnedFavoritesSubscription&&(this.pinnedFavoritesSubscription.dispose(),this.pinnedFavoritesSubscription=null)},p.prototype.Oj=function(t){for(var n=[],i=0;i<t.length;i++){var o={attr:{}},a=t[i];if(a.children){var s=this.Oj(a.children);o.children=s}e.extend(o.attr,a),o.attr.children&&delete o.attr.children,n.push(o)}return n},p}));