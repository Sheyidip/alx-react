(function(modules) {
    // webpackBootstrap
    var installedModules = {};
    
    function __webpack_require__(moduleId) {
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    
    // Load entry module and return exports
    return __webpack_require__(0);
})
([
    /* 0 */
    (function(module, exports) {
        console.log("Hello, Webpack!");
    }),
    // More modules...
]);
