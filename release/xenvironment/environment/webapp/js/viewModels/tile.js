define(["knockout","jraf/jrafcore","jraf/models/UIShellManager","libs/xenvironment/menulist","jraf/models/Content"],(function(e,n,t,r,o){return new function(){var l=this;l.tileMenus=e.observableArray([]),l.handleActivated=function(){let e=n.App.getAppDataProperty("xenvUserRoles"),t=r.getMenusForUser(e);l.tileMenus(t)},l.getTileClasses=function(e){return"oj-flex oj-flex-item oj-flex oj-12 xenv-tile tile-color"+e%6},l.openPage=function(e){let n=e.currentTarget.id,r=function(e){console.debug("Finding menu ID "+e);let n=l.tileMenus().filter((function(n){return n.menuItems.filter((function(n){return n.module===e}))[0]}))[0];return realMenuItem=n.menuItems.filter((function(n){return n.module===e}))[0]}(e.currentTarget.id).label,i=new o({id:n,title:r,name:n,resourceType:"module",moduleBinding:{name:n},targetProperties:{reuseInstance:!0}});t.openContent(i)}}}));