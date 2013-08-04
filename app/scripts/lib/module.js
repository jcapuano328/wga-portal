'use strict';
var ica = ica || {};

ica.module = function(name, deps) {
    var module;

    deps = deps || [];
    try {
        module = angular.module(name);
    }
    catch(e) {
        module = angular.module(name, deps);
    }
    return module;
}
