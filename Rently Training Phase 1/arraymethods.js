const array1 = [1, 2, 8, 13, 25, 16, 19, 25, 28, 37, 48, 86, 98]
// filter() method
const filters = array1.filter((i) =>{
    return i >=25
}) 
console.log(filters);
// map()
const mapname = array1.map((i) =>{
    return i >=25
}) 
console.log(mapname);
// find()
const found = array1.find((i) =>{
    return i == 25
}) 
console.log(found);
//forEach
array1.forEach((i) =>{
    console.log(i);
}) 
// some() - like or condition, if any one or more elements satisfied the condition it returns true
const some = array1.some((i) =>{
    return i >= 25
}) 
console.log(some);
// every() - like and condition , condition should be satisfied for all the elements in an array
const every = array1.every((i) =>{
    return i >= 25
}) 
console.log(every);
// reduce()
const reduce = array1.reduce((previous, iteratable) =>{
    return iteratable + previous
}, 0) 
console.log(reduce)
// includes
const includes = array1.includes(8)
console.log(includes);