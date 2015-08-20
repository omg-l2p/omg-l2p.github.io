

window.Behaviors = {};
window.Behaviors.Url = {
  concatUrl: function concat(){
    return "/"+Array.prototype.join.call(arguments, "/");
  },
  addToCurrentUrl: function addToCurrentUrl(path, appendSlash){
    if (page.current[page.current.length - 1] !== "/") {
      page.current += "/";
    }
    var url = page.current+path;
    if (appendSlash != null && appendSlash && url[url.length-1] !== "/") {
      url += "/";
    }
    return url;
  }
}
