var _ = require('lodash');





const x = 12;
const y = 500;
const z = x + y; 




if (z > 500) {

   console.log("This chunk is too chunky");
}


console.log("Done");


console.log("These changes are made from the other branch");

console.log(_.partition([1, 2, 3, 4], n => n % 2));