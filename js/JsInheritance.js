//From Review Quiz 7 Answer Q2 , In Q4 explain why this is undefined ? and why this not working with Arrow Function.
//Answer : because when this is inside an arrow function it cannot be referred to the the enclosing object.


const module1=(function(){
    "use strict";

    const createBicyclePrototye=function(){
        var obj={
            speed: 0,
            applyBrake: function(sp){
                this.speed-=sp;
            },

            speedup: function(sp){
                this.speed+=sp;
            }
        }
        return obj;
    }


const createMountainBikeProtoyp=function(proto){
    proto.gear=1;
    proto.setGear=function(g){
        this.gear=g;
    }

    return Object.create(proto);
};

const start=function(){
    var bikeProto1=createBicyclePrototye();
    var mountainBike1=Object.create(createMountainBikeProtoyp(bikeProto1));

    mountainBike1.setGear(15);
    console.log(mountainBike1);
    mountainBike1.speedup(30);
    mountainBike1.applyBrake(20)
    console.log(mountainBike1);
}

return {
    createBicyclePrototye : createBicyclePrototye,
    createMountainBikeProtoyp: createMountainBikeProtoyp,
    start: start
}

})();

//------Calling module
module1.start();

class createBicyclePrototype{
    constructor(){
        this.speed=0;
    };

    applyBrake(sp){
        this.speed-=sp;
    }

    speedup(sp){
        this.speed+=sp;
    }
}

class createMountainBikePrototype extends createBicyclePrototype{
    constructor(){
        super();
        this.gear=1;
    }

    setGear=function(g){
        this.gear=g;
    }
}


function start2(){
    var mountainBike1=new createMountainBikePrototype();

    mountainBike1.setGear(15);
    console.log(mountainBike1);
    mountainBike1.speedup(30);
    mountainBike1.applyBrake(20)
    console.log(mountainBike1);
}
start2();
