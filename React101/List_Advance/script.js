// maps

var aDogs = [
                {
                    name:'Kina',
                    weight:10
                },
                {
                    name:'Gizmo',
                    weight:1
                },
                {
                    name:'Dulux',
                    weight:20
                }
            ];


var aFedDogs = aDogs.map((dog) => {         // .map = loop function
    dog.weight += 0.1;
    return dog;
});   
console.log(aFedDogs);


var aNums = [3,2,4,6,4];
var aNewNums = aNums.map(num => num * 2);   // shortened version (returns by default)
console.log(aNewNums);


// filter

var aDogs = [
    {
        name:'Kina',
        weight:10
    },
    {
        name:'Gizmo',
        weight:1
    },
    {
        name:'Dulux',
        weight:20
    },
    {
        name:'Loo',
        weight:4
    }
];

var aBigDogs = aDogs.filter(function(dog){
    return dog.weight>=5;
});
console.log(aBigDogs);

var aNums = [3,2,4,6,7];
var aSmallNums = aNums.filter(number => number <=5);
console.log(aSmallNums); // filter out numbers lower than 5, create new list