function Bicycle(name) {
  this.title = name;
  this.color = 'red';
  this.tuning = false;
}
Bicycle.prototype.paint = function(color) {
  this.color = color;
  this.tuning = true;
};

Bicycle.prototype.ride = function() {
  console.log('I\'m riding');
}

function Bike() {
  Bike.superclass.constructor.apply(this, arguments);

  this.engine = 'dr-dr';
}

extend(Bike, Bicycle);

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}
