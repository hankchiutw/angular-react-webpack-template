"use strict";

export default class page1Controller{
    constructor(factory1){
        this.message = factory1.sayMessage('hi');
    }
}

page1Controller.$inject = ['factory1'];
