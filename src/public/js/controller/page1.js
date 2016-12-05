"use strict";

export default class page1Controller{
    constructor(factory1){
        this.message = factory1.sayMessage('from factory1');
    }
}

page1Controller.$inject = ['factory1'];
