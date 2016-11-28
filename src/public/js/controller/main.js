"use strict";

define([
    "angular",
    "js/app"
], function(angular, app) {

    /**
     * Main controller which defined variables and functionalities available for all child controllers
     * @class mainController
     */
    app.controller("mainController", controller);

    controller.$inject = ['$state', '$timeout'];

    return controller;

    ////////
    function controller($state, $timeout) {
        var self = this;

        self.username = 'Demo';
        self.isUserMenuOn = false;
        self.onUserMenuBlur = onUserMenuBlur;
        self.navItems = [
            {stateName: 'main.page1'},
            {stateName: 'main.page2'}
        ];

        $state.isNavOn = true;
        $state.isLoading = false;
        $state.isMessageOn = false;
        $state.message = '';
        $state.alert = _alert;

        init();

        ////////
        function init(){
            // default hide nav for mobile devices
            if(window.matchMedia('(max-width: 767px)').matches) $state.isNavOn = false;

            // go to default child view here
            $state.go('main.page1');
        }

        /**
         * For better UX. Hide dropdown user menu.
         */
        function onUserMenuBlur(e){
            if(!e.relatedTarget ||
                !e.relatedTarget.classList.contains('user-menu-anchor'))
                self.isUserMenuOn = false;
        }

        /**
         * In page alert
         * @params {string} msg
         * @params {boolean} isFixed Will not dismiss the message if true
         */
        function _alert(msg, isFixed){
            console.log("_alert: ", msg);
            const stayPeriod = 2500;
            const outPeriod = 500;
            $state.isMessageOn = true;
            $state.message = msg;

            if(isFixed) return $state.isMessageOn = true;

            // dismiss message
            $timeout(function(){
                $state.isMessageOn = false;
                $timeout(function(){
                    $state.message = "";
                }, outPeriod);
            }, stayPeriod);
            return false;
        };

    }


});
