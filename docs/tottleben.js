(()=>{var e={151:()=>{!function(){function e(e){var t=e.width,r=e.height,n=e.minesNumber;this.mapTemplate=this.fillMap(this.createEmptyMap(t,r),n),this.map=this.getMarkedMap(this.mapTemplate)}e.prototype.createEmptyMap=function(e,t){return Array.from({length:e},(function(){return Array.from({length:t},(function(){return 0}))}))},e.prototype.fillMap=function(e,t){for(;!this.isMapFilled(e,t);){var r=e[this.getRandomIndex(e)];r[this.getRandomIndex(r)]=1}return e},e.prototype.isMapFilled=function(e,t){return e.flat().reduce((function(e,t){return e+t}))===t},e.prototype.getRandomIndex=function(e){return Math.floor(Math.random()*e.length)},e.prototype.getMarkedMap=function(e){for(var t=e.map((function(e){return e.map((function(e){return e?"mine":e}))})),r=0;r<t.length;r++)this.processRow(t,r);return t},e.prototype.processRow=function(e,t){for(var r=e[t],n=0;n<r.length;n++)this.processCell(e,t,n)},e.prototype.processCell=function(e,t,r){var n=e[t];"mine"===n[r]&&(this.maybeIncreaseCellValue(n,r-1),this.maybeIncreaseCellValue(n,r+1),this.processAdjacentCells(e[t-1],r),this.processAdjacentCells(e[t+1],r))},e.prototype.processAdjacentCells=function(e,t){e&&(this.maybeIncreaseCellValue(e,t),this.maybeIncreaseCellValue(e,t-1),this.maybeIncreaseCellValue(e,t+1))},e.prototype.maybeIncreaseCellValue=function(e,t){"number"==typeof e[t]&&(e[t]=e[t]+1)}}()},607:(e,t,r)=>{"use strict";r(151)}},t={};!function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(607)})();