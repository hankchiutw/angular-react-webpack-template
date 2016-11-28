'use strict';

define([
    'angular',
    'js/app',
    "js/controller/page1",
    "js/controller/page2",
    "js/controller/main"
], function(angular, app) {
    return app
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('main', {
                label: 'Home',
                templateUrl: './view/template/mainpage-wrapper.html',
                controller: 'mainController as mainController'
            })
            .state('main.page1', {
                label: 'Page1',
                templateUrl: './view/page/page1.html',
                controller: 'page1Controller as page1Controller'
            })
            .state('main.page2', {
                label: 'Page2',
                templateUrl: './view/page/page2.html',
                controller: 'page2Controller as page2Controller'
            });
        
    }])

    // to solve hashbang route issue in mobile chrome.
    // https://github.com/angular/angular.js/issues/7699#issuecomment-49750476
    .config(['$provide', '$locationProvider', function($provide, $locationProvider) {
        /** or by changing to html5 mode, but need sever side support */
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
            });
        }
    }]);
});
