// --------------------------------------------------------------------------
// New Topic
// --------------------------------------------------------------------------
//Functions Basic //
function sum(a, b) {
  console.log(a + b);
  //   return a + b;
}
sum(10, 10);
// --------------------------------------------------------------------------
// New Topic
// --------------------------------------------------------------------------
// Arrow functions //
const subtract = (x, y) => {
  console.log("Before Subtract");
  console.log(x - y);
  return x - y;
  console.log("After Subtract");
};
subtract(10, 5);

// Practice Question 1 To count Vowels
// --------------------------------------------------------------------------
// New Topic
// --------------------------------------------------------------------------

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "i" ||
//       char === "e" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// const result = countVowels(" Hi This Is Codex Group Of Companies ");
// console.log(result);

// --------------------------------------------------------------------------
// 2nd Question With Arrow Function but same functionality
// New Topic
// --------------------------------------------------------------------------
const vowels = (str) => {
  count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
const result = vowels(" My Name Is Rahman ");
console.log(result);
