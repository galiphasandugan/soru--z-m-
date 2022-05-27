// const dailyActivities = ["eat", "work", "sleep","ali","veli","deli",1,true];
// console.log(dailyActivities.push("fruit"),dailyActivities);
// console.log(dailyActivities.unshift('meyve'),dailyActivities);
// console.log(dailyActivities.shift(),dailyActivities);
// console.log(dailyActivities.pop(),dailyActivities);
// const languages1 = ["JavaScript","Python", "Java"];
// const languages2 = ["C", "C++"];

// const newWord =languages1.concat("ali","2").concat("celi").concat("a");
// console.log(newWord);
// console.log(languages1.join('').length);
// console.log(languages1.join().length);
// console.log(languages1.join('-').length);
// console.log(languages1.toString('').length);
// console.log(languages1.toString().length);

// let arr =  ['a', 'b', 'c', 'd'];
// console.log(arr.join(''));//returns 'abcd'
// console.log(arr.join('-'));//returns 'a-b-c-d'
// console.log(arr)//returns ['a', 'b', 'c', 'd']
// const cwPaths = [
//   "Full-Stack",
//   "AWS-Devops",
//   "Data Science",
//   "Cyber Security",
//   "Salesforce",
// ];

// path =cwPaths.reverse();
// console.log(path)
// console.log(path.reverse())


// console.log("Original Array: " + cwPaths);
// reversed_arr = cwPaths.reverse();
// console.log("Array after reverse(): " + cwPaths);
// console.log("Return Value of reverse(): " + reversed_arr);

const numbers = [0, 1 ,222 ,2,`2`, 3, 10,123, 20, 30 ];
// numbers.sort();
// console.log(numbers);
// numbers.sort((a, b) => a - b);
// console.log(numbers);
function f(){
    return "ali"
}
const  string=numbers.splice(2,5,f());
console.log(numbers);

const colors = ["Red", "Yellow", "Green", "Blue"];
const slicedColors = colors.slice(1, 3);
const newColors = colors.slice();
console.log(colors);
console.log(slicedColors);
console.log(newColors);


const colores = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
console.log(colores.indexOf("Green")); // 2
console.log(colores.indexOf("Green",3));
a = colores.indexOf(/green/i);// 5
console.log(a); // -1

const color = ["Red" ,"Yellow", "Green", "Blue", "Pink","Red"];
console.log(color.lastIndexOf("Green")); // 5
console.log(color.lastIndexOf("Yellow",3)); // 2
console.log(color.lastIndexOf("Green",6)); // -1