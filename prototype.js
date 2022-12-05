
function Car(name) {
    this.name = name;
    this.isTurnOn = false;
    this.speed = 0;
    this.engine = {
        v: 1.6,
        horsesPower: 120,
        isTurnOn: false
    };
}
Car.prototype.start = function(){
    this.isTurnOn = true;
    this.speed = 10;
    this.engine.isTurnOn = true;
    console.log(this.name, ' ', this.speed);
}
Car.prototype.start = function(){
    this.isTurnOn = true;
    this.speed = 10;
    this.engine.isTurnOn = true;
    console.log(this.name, ' ', this.speed);
}
let reno = new Car('Reno Capture');
reno.start();
let mers = new Car('Mers 600');
mers.start();
