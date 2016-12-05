"use strict";

export default function factory1(){

    return {
        sayMessage: function(message){
            return 'Hi, '+ message;
        }
    };
}

factory1.$inject = [];
