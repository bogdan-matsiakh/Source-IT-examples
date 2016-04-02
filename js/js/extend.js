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
  Bicycle.apply(this, arguments);

  this.engine = 'dr-dr';
}

Bike.prototype = Object.create(Bicycle.prototype);
Bike.prototype.constructor = Bike;
