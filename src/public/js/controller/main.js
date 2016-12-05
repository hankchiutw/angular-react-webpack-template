"use strict";

import showdown from 'showdown';
import readmeRaw from 'README.md';

const mdConverter = new showdown.Converter();

export default class mainController{
    constructor($state, $timeout){
        const self = this;

        self.username = 'Demo';
        self.isUserMenuOn = false;
        self.navItems = [
            {stateName: 'main.page1'},
            {stateName: 'main.page2'},
            {stateName: 'main.page3'}
        ];
        self.readmeHtml = mdConverter.makeHtml(readmeRaw);

        $state.isNavOn = true;
        $state.isLoading = false;
        $state.isMessageOn = false;
        $state.message = '';
        $state.alert = _alert;

        // default hide nav for mobile devices
        if(window.matchMedia('(max-width: 767px)').matches) $state.isNavOn = false;

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

    /**
     * For better UX. Hide dropdown user menu.
     */
    onUserMenuBlur(e){
        if(!e.relatedTarget ||
            !e.relatedTarget.classList.contains('user-menu-anchor'))
            self.isUserMenuOn = false;
    }
}

mainController.$inject = ['$state', '$timeout'];
