// let str="I am the master student";
// console.log(str)
// let ste=str.toUpperCase();
// console.log(ste)
// let marks=[2,4,4,12,545,4];
// console.log(marks.length)
// typeof marks;

// let heros=[ 'ironan','spriderMan','batman','superman'];
// for(let i=0;i<heros.length;i++){
//     console.log(heros[i]);
// }


// let marks=[3,5,7,8,4,2,2];
// console.log(marks);
//
//
// for(let i=1; i<marks.legnth;i++ ){
//     console.log([i])
// }

let marks=[54,76,89,43,86];
let sum=0;

for(let val of marks)
    sum+=val;


let avg=sum/marks.length;
console.log(`the avg of whole class is= ${avg}`);