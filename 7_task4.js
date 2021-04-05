function Device(){
    this.isSwitchedOn = false;
}
Device.prototype.switchOn = function(){
    this.isSwitchedOn = true;
}
Device.prototype.switchOff = function() {
    this.isSwitchedOn = false;
}
Device.prototype.getState = function(){
    this.isSwitchedOn === true ? console.log("Device is switched on") : console.log("Device is switched off");
}

function Kettle(volume) {
    this.volume = volume;
    this.isFilled = false;
}
Kettle.prototype = new Device();
Kettle.prototype.getState = function(){
    this.isSwitchedOn === true ? console.log("Kettle is switched on") : console.log("Kettle is switched off");
}
Kettle.prototype.fill = function(){
    this.isFilled = true;
}
Kettle.prototype.empty = function(){
    this.isFilled = false;
}
Kettle.prototype.checkIfFilled = function(){
    this.isFilled === true ? console.log("Kettle is filled") : console.log("Kettle is empty");
}

function Stove(numOfModes){
    this.numberOfModes = numOfModes;
    this.currentMode = 0;
}
Stove.prototype = new Device();
Stove.prototype.getState = function(){
    this.isSwitchedOn === true ? console.log("Stove is switched on") : console.log("Stove is switched off");
}
Stove.prototype.changeMode = function(modeNum){
    modeNum <= this.numberOfModes ? this.currentMode = modeNum : console.log("Oops, there is not such mode");
}
Stove.prototype.getMode = function(){
    console.log(`Stove is in the Mode No. ${this.currentMode}`);
}

const device = new Device();
const kettle = new Kettle(2);
const stove = new Stove(5);

device.switchOn();
device.getState();
kettle.switchOn();
kettle.fill();
kettle.getState();
kettle.checkIfFilled();
stove.switchOn();
stove.changeMode(3);
stove.getState();
stove.getMode();
