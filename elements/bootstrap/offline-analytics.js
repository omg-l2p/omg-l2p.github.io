!function(e){function o(){e.simpleDB.open(r).then(function(o){o.forEach(function(t,n){var r=Date.now()-n,i=t+"&qt="+r;console.log("About to replay:",i),e.fetch(i).then(function(e){return e.status>=500?Response.error():(console.log("Replay succeeded:",i),void o["delete"](t))})["catch"](function(e){r>l?(console.error("Replay failed, but the original request is too old to retry any further. Error:",e),o["delete"](t)):console.error("Replay failed, and will be retried the next time the service worker starts. Error:",e)})})})}function t(o){console.log("Queueing failed request:",o),e.simpleDB.open(r).then(function(e){e.set(o.url,Date.now())})}function n(o){return e.fetch(o).then(function(e){return e.status>=500?Response.error():e})["catch"](function(){t(o)})}var r="offline-analytics",l=864e5,i=/https?:\/\/((www|ssl)\.)?google-analytics\.com/;e.toolbox.router.get("/collect",n,{origin:i}),e.toolbox.router.get("/analytics.js",e.toolbox.networkFirst,{origin:i}),o()}(self);