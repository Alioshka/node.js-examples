var Machine = function() {

  this.enable = function() {
    console.log('Switched on Machine');
  };

  this.disable = function() {
    console.log('Switched off Machine');
  };

}

var CoffeeMachine = function() {

  this.onReady = function() {
    console.log( 'Cofee is ready !' );
  }

}

CoffeeMachine.prototype = new Machine();

CoffeeMachine.prototype.prepareCofee = function() {
    this.enable();
    this.onReady();
    this.disable();
};

var coffeeMachine = new CoffeeMachine();

coffeeMachine.prepareCofee();