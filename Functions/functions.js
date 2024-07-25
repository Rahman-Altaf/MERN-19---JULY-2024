// // function even(a, b) {
// //   console.log("even", a, b);
// // }
// // even(3, 4);

// function add(c, d) {
//   console.log("p1->", 5)
//   console.log("p2->", 5)
//   return true,
// }

// arrow function & anonymous function
// const evenOdd = (
//   P1 = 7,
//   P2 = ((params) => {
//     console.log("IIFE", params);
//     return 1;
//   })("param's value")
// )=>{

//   P1 % 2 == 0 ? console.log(`${P1} ->even`):console.log(`${P1} ->odd`);
//   P2 % 2 == 0 ? console.log(`${P2} ->even`):console.log(`${P2} ->odd`);

// }
// evenOdd(1, 2);

// ((params) => {
// console.log("IIFE", params)

// })

// pass by copy and pass by refernce
// const check = (Param) => {
//   param = [4, 5];
//   console.log("p", Param);
// };
// let Arg = [1, 2];
// const updateArray = (newValue) => {
//   Arg = newValue;
// };
// check(Arg);
// console.log;
// let add two nnumber through function //
function sum(a, b) {
  console.log(a + b);
}
sum(10, 10);
