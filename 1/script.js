// var oDog1 = {
//     name:'Kina',
//     weight: 10,
//     eat: function(){
//         this.weight += 0.1;
//     },
//     bark:function(){
//        document.write('My name is ' + this.name); 
//     }
// };

// var oDog2 = {
//     name:'bruce',
//     weight: 2,
//     eat: function(){
//         this.weight += 0.1;
//     },
//     bark:function(){
//        document.write('My name is ' + this.name); 
//     }
// };


// var oDog3 = {
//     name:'delux',
//     weight: 20,
//     eat: function(){
//         this.weight += 0.1;
//     },
//     bark:function(){
//        document.write('My name is ' + this.name); 
//     }
// };


// oDog1.eat();
// oDog1.eat();
// oDog1.bark();

// oDog2.eat();
// oDog2.eat();
// oDog2.eat();
// oDog1.bark();

// oDog3.eat();
// oDog1.bark();

// console.log(oDog1);
// console.log(oDog2);
// console.log(oDog3);



// classical OOP

// class Dog{
//     constructor(name,weight){
//         //intialise data
//         this.name = name;
//         this.weight = weight;
//         this.friends = [];
//     }
//     eat(){
//         this.weight += 0.1;
//     }
//     bark(){
//         document.write(' My name is ' + this.name); 
//     }
//     like(oDog){
//         this.friends.push(oDog);
//     }
//     describeFeelings(){
//         document.write(' I have ' + this.friends.length + ' friends. ');
//         if(this.friends.length < 2){
//              document.write(this.name + ' feels lonely <br> ');     
//         }
//         else {
//             document.write(this.name + ' feels loved <br> ');
//         }
//     }
// }

// var oDog1 = new Dog ('Kina',10);
// var oDog2 = new Dog ('Bruce',2);
// var oDog3 = new Dog ('Dulux',20);

// oDog2.like(oDog3);
// oDog2.like(oDog1);

// oDog1.eat();

// oDog2.bark();
// oDog2.describeFeelings();

// oDog3.bark();
// oDog3.describeFeelings();


// console.log(oDog1);
// console.log(oDog2);
// console.log(oDog3);



// var oCat = {
//     name: 'Taz',
//     weight: 7,
//     colour:'Black',

//     eat: function(){
//         this.weight += 0.3;
//     },
//     hunt: function(){
//         this.weight - 0.2;
//     },
//     meow:function(){
//         document.write(' My name is ' + this.name); 
//         document.write(' Colour Fur ' + this.colour); 
//         document.write(' Fatness ' + this.weight); 
//     }

// };

// // oCat.eat();
// // oCat.hunt();
// // oCat.eat();
// // oCat.eat();
// // oCat.hunt();
// // oCat.meow();

// var feed = document.querySelector('#feed1');
// feed.addEventListener('click',eat); 

// console.log(oCat);


// classical OOP

// class Cat {
//     constructor(name,colour,weight){
//         this.name = name;
//         this.colour = colour;
//         this.weight = weight;
//     }
//     eat(){
//         this.weight += .3;
//     }
//     meow(){
        
//         document.write('<br> Call me ' + this.name + ' the classical cat'); 
//         document.write(' I have Colour Fur ' + this.colour); 
//         document.write(' Fatness ' + this.weight); 
//     }
//     hunt(){
//         this.weight - .2;
//     }
    
// }

// var oCat1 = new Cat ('Benny','Grey',4);


// var feedcat = document.querySelector('.feed');
// var cathunt = document.querySelector('.hunt');


// // var feed = document.querySelector('#feed');
// // feed.('click',eat); 


// oCat1.eat('click',feedcat);
// oCat1.hunt('click',cathunt);
// // oCat1.eat();
// // oCat1.eat();
// // oCat1.hunt();
// // oCat1.meow();




// console.log(oCat1);
