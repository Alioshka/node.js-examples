'use strict';

// based on https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

var Machine = function () {

    this.enable = function () {
        console.log('Switched on Machine');
    };

    this.disable = function () {
        console.log('Switched off Machine');
    };

};

var CoffeeMachine = function () {
    Machine.call(this);

    this.onReady = function () {
        console.log('Coffee is ready !');
    }
};

CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.prepareCoffee = function () {
    console.log('Preparing the coffee ...');
    this.onReady();
};

var coffeeMachine = new CoffeeMachine();

Machine.prototype.reset = function () {
    console.log('Reset successfully completed !');
};

coffeeMachine.enable();
coffeeMachine.prepareCoffee();
coffeeMachine.reset();
coffeeMachine.disable();