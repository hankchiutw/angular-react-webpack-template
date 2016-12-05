"use strict";

export default class page2Controller{
    constructor(service1){
        this.message = service1.sayMessage('hi');
    }
}

page2Controller.$inject = ['service1'];
