// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// arr.push("Apple");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("Apple Is One My Favorite Fruit");
// console.log(arr);
// arr.unshift("Cherry");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr[1] = "Water Melons"
// console.log(arr);
// console.log(arr.includes(2));
// console.log(arr.indexOf(3))

// // ----------------------------------------------------------------
// // Nested Arrays With 2D And 3D Arrays
// // ----------------------------------------------------------------

// let dArrays = [["Apple, Water Melon, Cherry, Pineapple"], ["1, 2, 3, 4, 5, 6"]];
// console.log(dArrays);
// console.log(dArrays);
// console.log(dArrays[0])
// console.log(dArrays[1]);
// console.log(dArrays[0][1]);

let arrays = ["one", 1, null, "undefined", [1, 2]];
arrays[
  arrays.indexOf("undefined") > -1 ? arrays.indexOf("undefined") : arrayslength
] = 5;
console.log(arrays);
