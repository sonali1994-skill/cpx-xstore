define(["knockout","jquery","jraf/composites/utils/TranslationLoaderUtil","module","jqueryui-amd/core"],(function(e,t,i,r){"use strict";function l(e){var t=this;this.J=l.y.getTranslations(),this.M(e),this.handleTileKeydown=function(e){return t.th(e)},this.handleTileSelection=function(){t.ih()},this.componentInitializing=this.J.then((function(e){t.yi(e)}))}return l.y=new i("oj-rgbu-jraf-info-tile",r.id),l.prototype.activated=function(){return this.componentInitializing},l.prototype.propertyChanged=function(e){var t=e.property;"external"!==e.updatedFrom||"infoTitle"!==t&&"label"!==t&&"metricLabel"!==t&&"metric"!==t&&"severity"!==t&&"selected"!==t&&"disabled"!==t||this[t](e.value)},l.prototype.M=function(t){this.tileSelectionIndicatorAriaLabel=e.observable(),this.adminTileLabel=e.observable(),this.criticalSeverityLabel=e.observable(),this.importantSeverityLabel=e.observable(),this.normalSeverityTile=e.observable(),this.noSeverityLabel=e.observable(),this.tileIndicatorLabel=e.pureComputed((function(){return this.sh()}),this);var i=t.properties;this.tileId=i.tileId,this.type=i.type,this.infoTitle=e.observable(i.infoTitle),this.label=e.observable(i.label),this.severity=e.observable(i.severity),this.metric=e.observable(i.metric),this.metricLabel=e.observable(i.metricLabel),this.disabled=e.observable(i.disabled),this.selected=e.observable(i.selected),this.tileSelectionHandler=i.tileSelectionHandler,this.displaySlot=0<t.slotCounts.customBody},l.prototype.ih=function(){this.disabled()||this.tileSelectionHandler&&this.tileSelectionHandler(this.tileId)},l.prototype.hh=function(e){if(!this.tn(e))return!1;var i=e.key||e.keyIdentifier;return i?"Enter"===i:e.keyCode===t.ui.keyCode.ENTER},l.prototype.tn=function(e){return e&&"object"==typeof e&&!Array.isArray(e)},l.prototype.th=function(e){return this.hh(e)&&this.ih(),!0},l.prototype.yi=function(e){this.tileSelectionIndicatorAriaLabel(e.tileSelectionIndicatorAriaLabel),this.adminTileLabel(e.adminTileLabel),this.criticalSeverityLabel(e.criticalSeverityLabel),this.importantSeverityLabel(e.importantSeverityLabel),this.normalSeverityTile(e.normalSeverityTile),this.noSeverityLabel(e.noSeverityLabel)},l.prototype.sh=function(){var e=this.severity();return"admin"===this.type?this.adminTileLabel():"high"===e?this.criticalSeverityLabel():"medium"===e?this.importantSeverityLabel():"low"===e?this.normalSeverityTile():this.noSeverityLabel()},l}));