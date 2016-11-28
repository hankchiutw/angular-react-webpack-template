"use strict";

define([
    "angular",
    "angular-local-storage",
    "angular-ui-router"
], function(angular){

    /**
     * GA
     */
    // put GA snippets here

    // DOM init
    angular.element(document.getElementsByTagName("html")[0]);
    angular.element().ready(function(){
        angular.bootstrap(document, ["mainModule"]);
        console.log("angular ready.");
    });
    
    /**
     * Main module declartion
     * @module mainModule
     */
    return angular.module( "mainModule", [
        "LocalStorageModule",
        "ui.router"
    ])
    .constant("API_URL", '/api/v1/');
});

