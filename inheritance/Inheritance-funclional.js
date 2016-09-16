var Machine = function() {

  this.enable = function() {
    console.log('Switched on Machine');
  };

  this.disable = function() {
    console.log('Switched off Machine');
  };

};

var CoffeeMachine = function() {
  Machine.apply(this, arguments);

  this.prepareCoffee = function() {
    this.enable();
    this.onReady();
    this.disable();
  };

  this.onReady = function() {
    console.log( 'Cofee is ready !' );
  }

};

var coffeeMachine = new CoffeeMachine();
coffeeMachine.prepareCoffee();
