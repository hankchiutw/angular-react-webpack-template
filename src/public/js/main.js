"use strict";

define([
    "angular",
    "js/app",
    "js/config/route"
], function(angular, app) {

    // boot config
    app.run(run);
    run.$inject = ["$rootScope", "$state"];

    function run($rootScope, $state) {
        // cross controller objects
        $rootScope.$state = $state;

        $state.go('main');
        $rootScope.$on("$stateChangeSuccess", function(e, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeSuccess:', fromState.name, toState.name);

            if(window.matchMedia('(max-width: 767px)').matches) $state.isNavOn = false;
        });

    }

});
