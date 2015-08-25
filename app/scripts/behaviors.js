/* globals page */

window.Behaviors = {}
window.Behaviors.Url = {
  concatUrl: function concat () {
    return '/' + Array.prototype.join.call(arguments, '/')
  },
  addToCurrentUrl: function addToCurrentUrl (path, appendSlash) {
    if (page.current[page.current.length - 1] !== '/') {
      page.current += '/'
    }
    var url = page.current + path
    if (appendSlash != null && appendSlash && url[url.length - 1] !== '/') {
      url += '/'
    }
    return url
  },/*
  pathIsFile: function pathIsFile () {
    return page.current[page.current.length - 1] !== '/'
  },
  pathIsDirectory: function pathIsDirectory () {
    return !this.pathIsFile()
  },*/
  checkFileExtention: function (path, extentions) {
    if (extentions.constructor !== Array) {
      extentions = [extentions]
    }
    for (var i in extentions) {
      if (page.current.substr(-4).toLowerCase() === ('.' + extentions[i])) {
        return true
      }
    }
    return false
  }
}