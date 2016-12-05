"use strict";

import angular from 'angular';
import 'angular-local-storage';
import 'angular-ui-router';
import 'angular-sanitize';
import 'ngreact';

import run from 'js/config/run';
import { routes, html5Mode } from 'js/config/route';
import factory1 from 'js/factory/factory1';
import service1 from 'js/service/service1';
import mainController from 'js/controller/main';
import page1Controller from 'js/controller/page1';
import page2Controller from 'js/controller/page2';
import page3Controller from 'js/controller/page3';

import 'react';
import component1 from 'js/component/component1';

// DOM init
angular.element(document.getElementsByTagName("html")[0]);
angular.element().ready(function(){
    angular.bootstrap(document, ["app"]);
    console.log("angular ready.");
});

/**
 * Main module declartion
 * @module mainModule
 */
export default angular.module( "app", [
    "ngSanitize",
    "react",
    "LocalStorageModule",
    "ui.router"
])
.run(run)
.config(routes)
.config(html5Mode)
.factory('factory1', factory1)
.service('service1', service1)
.controller('mainController', mainController)
.controller('page1Controller', page1Controller)
.controller('page2Controller', page2Controller)
.controller('page3Controller', page3Controller)
.value('component1', component1);
