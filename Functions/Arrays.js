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

// let arrays = ["one", 1, null, "undefined", [1, 2]];
// arrays[
//   arrays.indexOf("undefined") > -1 ? arrays.indexOf("undefined") : arrayslength
// ] = 5;
// console.log(arrays);


// Assigning array values to variables
// let arr = [2,5,7,9,10,12];
// const [x,y,z]=arr
// console.log("X:",x);
// console.log("Y:",y);
// console.log("Z:",z);
// Rest Operator Storing the Remianing Items 
// let arr = [2,5,7,9,10,12];
// const[x,y, ...z]=arr
// console.log("X:",x)
// console.log("Y:",y)
// console.log("Z:",z)

// Underscore Operator Using , & Underscore ;
// let arr=[2,4,5,9,10,12]
// const[x, __,y,z]=arr
// console.log("X:",x)
// console.log("Y:",y)
// console.log("Z:",z)

// Swapping Values
// let x = 3
// let y = 4
// console.log("Value Of X Before Swapping -x:",x);
// console.log("Value Of Y Before Swapping -y:",y);
// [x, y]= [y, x];
// console.log("Value Of X After Swapping -x:",x);
// console.log("Value Of Y After Swapping -y:",y);


// // Default Values In Array Destructuring: Providing Defualt Values
// let arr =[2,5,10,12];
// const[p=10,q=1,w=15]=[10];
// console.log("Value Of P:",p);
// console.log("Value Of Q:",q);
// console.log("Value Of W:",w);

// // Spread Operator
// let arr=[2,4,6,8,0]
// const arr2 = [...arr];
// console.log(...arr);
// console.log(arr2);

// Map Function: Transforming Array Elements:
// let arr=[2,4,6,8,10]
// const result = arr.map(element=>element *2);
// console.log(result);
// const result1 = arr.map(element=>element /2);
// console.log(result1);


// Conditional Mapping
// let arr =[2,4,6,21,31,51,61];
// const result = arr.map(element => (element % 2 == 0 ? element +2 : element ));
// console.log(result);


// Mapping With Index 

// const arr =[ 2,5,9,10,12];
// const result = arr.map((element,index) =>(index==2 ? element:element+2 
//     ));
//     console.log(result);

// Mapping With Full Array

// const arr =[ 2,2,9,10,12];
// const result = arr.map((element,index,array)=>(array[1] %2==0 ?element+2:element
//     ));
//     console.log(result);
// In this case, each element is incremented by 2 if the element at index 1 is even.


// //  Map Vs Filter
// const arr =[ 2,2,9,10,12];
// const result = (element, index) => {
//     if (element > 6)
//     return element
// }
// console.log(arr.filter(result))
// console.log(arr.map(result))
