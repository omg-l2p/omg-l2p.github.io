window.Behaviors={},window.Behaviors.Url={concatUrl:function(){return"/"+Array.prototype.join.call(arguments,"/")},_getPathCategory:function(r){return"learning-materials"===r?"StructuredMaterials":"media-libraries"===r?"MediaLibrary":void 0},getFileDownloadUrl:function(r,e,t){return""!=r?r:this.addToCurrentUrl(e,t)},addToCurrentUrl:function(r,e){"/"!==page.current[page.current.length-1]&&(page.current+="/");var t=page.current+r;return null!=e&&e&&"/"!==t[t.length-1]&&(t+="/"),t},checkFileExtention:function(r,e){e.constructor!==Array&&(e=[e]);for(var t in e)if(r.substr(-4).toLowerCase()==="."+e[t])return!0;return!1}},window.Behaviors={},window.Behaviors.Url={concatUrl:function(){return"/"+Array.prototype.join.call(arguments,"/")},_getPathCategory:function(r){return"learning-materials"===r?"StructuredMaterials":"media-libraries"===r?"MediaLibrary":void 0},getFileDownloadUrl:function(r,e,t){return""!=r?r:this.addToCurrentUrl(e,t)},addToCurrentUrl:function(r,e){"/"!==page.current[page.current.length-1]&&(page.current+="/");var t=page.current+r;return null!=e&&e&&"/"!==t[t.length-1]&&(t+="/"),t},checkFileExtention:function(r,e){e.constructor!==Array&&(e=[e]);for(var t in e)if(r.substr(-4).toLowerCase()==="."+e[t])return!0;return!1}};