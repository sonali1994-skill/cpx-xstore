/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojlogger"],function(e){"use strict";var n=function(){};return n.SCREEN_RANGE={SM:"sm",MD:"md",LG:"lg",XL:"xl",XXL:"xxl"},n.FRAMEWORK_QUERY_KEY={SM_UP:"sm-up",MD_UP:"md-up",LG_UP:"lg-up",XL_UP:"xl-up",XXL_UP:"xxl-up",SM_ONLY:"sm-only",MD_ONLY:"md-only",LG_ONLY:"lg-only",XL_ONLY:"xl-only",MD_DOWN:"md-down",LG_DOWN:"lg-down",XL_DOWN:"xl-down",HIGH_RESOLUTION:"high-resolution"},(n._RANGE={})[n.SCREEN_RANGE.SM]=0,n._RANGE[n.SCREEN_RANGE.MD]=1,n._RANGE[n.SCREEN_RANGE.LG]=2,n._RANGE[n.SCREEN_RANGE.XL]=3,n._RANGE[n.SCREEN_RANGE.XXL]=4,n._getMediaQueryFromClass=function(e){var n=document.getElementsByClassName(e).item(0);return null===n&&((n=document.createElement("meta")).className=e,document.head.appendChild(n)),window.getComputedStyle(n).getPropertyValue("font-family").replace(/^[/\\'"]+|(;\s?})+|[/\\'"]+$/g,"")},n.getFrameworkQuery=function(t){var l=n._getMediaQueryFromClass("oj-mq-"+t);return"null"===l?(e.warn("Framework query not found. Please check that the value of the theming variable$includeResponsiveMediaQueryClasses is set to true, if itis set to false the media queries are not sent down to the browser."),null):l},n.compare=function(e,t){var l=n._RANGE[e],o=n._RANGE[t];if(null==l)throw new Error("size1 param "+e+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD");if(null==o)throw new Error("size2 param "+t+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD");return l-o},n});