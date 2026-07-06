// const firstName = "Hammad"
// const lastName = "Ali"
// const num  = '10'
// const num1 = - num
// console.log(`${firstName} ${lastName}`)
// console.log(`The value of num is: ${num}`)
// console.log(`The value of num1 is: ${typeof(num1)}`)


// let i = 1
// async function main() {
//     while(i <10) {
//         i++
//     }
// }

// (async () => {
//     await main();
//     console.log(i)
// })()

// console.log(i)

// const character="H";
// const timeToRepeat=5;
// let i = 0;
// while(i<timeToRepeat)
// {
//     console.log(character);
//     i++;
// }

// const A = "A";
// let F;

// function doStuff(B) {
//   console.log(B);
//   const C = "C";
//   let H = "H";
//   if (1 + 1 === 2) {
//     const D = "D";
//     H = "something else";
//   }
//   console.log(D);
//   console.log(H);
//   F = "F";
// }

// let E = 0;
// while (E < 3) {
//   E++;
//   console.log(A);
//   const G = "G";
// }
// console.log(E);
// console.log(G);

// doStuff("B");
// console.log(B);
// console.log(C);
// console.log(F);



const person = {
  name: "Fiaz Hussain",
  city: "RYK",
  state: "Punjab",
  favoriteDrink: "Water",
  wantsWaterRightNow: true
};


for (const key in person){
    console.log(`${person[key]}`)
}

console.log(Object.keys(person))