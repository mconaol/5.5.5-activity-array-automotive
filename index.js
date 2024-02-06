const VehicleModule = require("./vehicleBaseClass");

class Car extends VehicleModule{
    constructor(maxPassengers, passengers, numberOfWheels, maxSpeed, fuel, scheduleService){
        super();
    this.maxPassengers = maxPassengers; 
    this.passenger = 0;
    this.numberOfWheels = 4; 
    this.maxSpeed = 160; 
    this.fuel = 10; 
    this.scheduleService= false; 
    }

    loadPassengers(number){
        if (number+ this.passenger<= this.maxPassenger){
            console.log(`${number} of passengers in vehicle.`)
        }else{
            console.log('Vehicle is full')
        }
    }
    start(){
        if (this.fuel > 0){
            this.started = true; 
            console.log('Car Started'); 
        } else {
            console.log('Car will not start, without fuel');
      }
    }
    scheduleService(){
       if (this.mileage>= 30000){
        this.scheduleService = true; 
        this.console.log ('Schedule Service');
       } else{
        console.log('No service needed')
       }
        
    }
 }

let ModelM = new Car (5,0,4,160,10, false);
console.log (ModelM)
