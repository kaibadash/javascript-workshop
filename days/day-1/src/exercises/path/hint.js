(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;
  var PathResolver = namespace.PathResolver;

  var resolver = new PathResolver({ currentDirectory: "/a/b/c" });

  assert.equal(resolver.resolve("./file.js"), "/a/b/c/file.js");
  assert.equal(resolver.resolve("../file.js"), "/a/b/file.js");
  assert.equal(resolver.resolve("../../file.js"), "/a/file.js");
})(window.JavaScriptWorkshop);
