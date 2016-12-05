"use strict";

export default function factory1(){

    return {
        sayMessage: function(message){
            return 'From factory1: '+ message;
        }
    };
}

factory1.$inject = [];
