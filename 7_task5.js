class Device{
    constructor(){
        this.isSwitchedOn = false;
    }
    switchOn(){
        this.isSwitchedOn = true;
    }
    switchOff() {
        this.isSwitchedOn = false;
    }
    getState(){
        this.isSwitchedOn === true ? console.log("Device is switched on") : console.log("Device is switched off");
    }
}

class Kettle extends Device{
    constructor(volume){
        super();
        this.volume = volume;
        this.isFilled = false;
    }
    getState(){
        this.isSwitchedOn === true ? console.log("Kettle is switched on") : console.log("Kettle is switched off");
    }
    fill(){
        this.isFilled = true;
    }
    empty(){
        this.isFilled = false;
    }
    checkIfFilled(){
        this.isFilled === true ? console.log("Kettle is filled") : console.log("Kettle is empty");
    }
}

class Stove extends Device{
    constructor(numOfModes){
        super();
        this.numberOfModes = numOfModes;
        this.currentMode = 0;
    }
    getState(){
        this.isSwitchedOn === true ? console.log("Stove is switched on") : console.log("Stove is switched off");
    }
    changeMode(modeNum){
        modeNum <= this.numberOfModes ? this.currentMode = modeNum : console.log("Oops, there is not such mode");
    }
    getMode(){
        console.log(`Stove is in the Mode No. ${this.currentMode}`);
    }
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
