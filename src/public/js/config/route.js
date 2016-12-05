'use strict';

routes.$inject = ['$stateProvider'];
html5Mode.$inject = ['$provide', '$locationProvider', ];

export { routes, html5Mode };

/**
 * routing definitions
 */
function routes($stateProvider) {
    $stateProvider
        .state('main', {
            label: 'Home',
            templateUrl: './view/template/mainpage-wrapper.html',
            controller: 'mainController as mainController'
        })
        .state('main.page1', {
            label: 'Page1 with factory',
            templateUrl: './view/page/page1.html',
            controller: 'page1Controller as page1Controller'
        })
        .state('main.page2', {
            label: 'Page2 with service',
            templateUrl: './view/page/page2.html',
            controller: 'page2Controller as page2Controller'
        })
        .state('main.page3', {
            label: 'Page3 with react',
            templateUrl: './view/page/page3.html',
            controller: 'page3Controller as page3Controller'
        });
    
}

// to solve hashbang route issue in mobile chrome.
// https://github.com/angular/angular.js/issues/7699#issuecomment-49750476
function html5Mode($provide, $locationProvider) {
    /** or by changing to html5 mode, but need sever side support */
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
        });
    }
}
