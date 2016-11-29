"use strict";

export default function run($rootScope, $state) {
    // cross controller objects
    $rootScope.$state = $state;

    $state.go('main');
    $rootScope.$on("$stateChangeSuccess", function(e, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeSuccess:', fromState.name, toState.name);

        if(window.matchMedia('(max-width: 767px)').matches) $state.isNavOn = false;
    });

}

run.$inject = ["$rootScope", "$state"];
