"use strict";

export default function service1(){
    const self = this;
    self.sayMessage = function(message){
        return 'From service1: '+ message;
    };
}

service1.$inject = [];
