// 1: Declarative functions

// function saySomething(){
//     document.write('chur');
// }

// 2: Anonymous functions

// var saySomething = function(){
//     document.write('chur');
// } 

// // 3: Arrow functions
// var saySomething = () => {
//     document.write('chur');
// }
// console.log(saySomething);
// saySomething();
// //


// var makeStars = (iStars) => {
//     var sStars = '';
//     for (var i=0; i<=iStars; i++){
//         sStars += '*';
//     }
//     return sStars;
// }

// document.write(makeStars(10));

class advDog{
    constructor(name,weight){
        //intialise data
        this.name = name;
        this.weight = weight;
    }

    bark = () => { //arrow function works only for adv dog
        document.write(' My name is ' + this.name); 
    }

    // bark(){ //arrow function works only for adv dog
    //     document.write(' My name is ' + this.name); 
    // }

}

var oDog1 = new advDog ('Vince',15);

// oDog1.bark();

var makeNoise = oDog1.bark;
makeNoise();

var oBoat1 = {
    name: 'Mist',
    speed: 100,
    honk: makeNoise  // function first class object used from oDog1.bark
};
oBoat1.honk();