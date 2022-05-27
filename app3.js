

// ! maaşı 4000 den büyük olanlara yüzde 25 zam yaparak sonuçları konsola yazdıralım.

// const maaslar = [3000,5000,4000,6000,6500];
// const büyük =  maaslar.filter((x)=>x>4000).map((a)=> 1.25*a);
// console.log(büyük);


//!
// let may =maaslar.filter((c)=> c>4000);
// may.forEach((v,i,arr)=>arr[1]=v*1,25)

// console.log(may);

//! maaşların toplamı
// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let sum =0;
// maaslar.forEach((a)=> sum +=a);
// console.log(sum);
// console.log(maaslar);


//! reduce
const annualSalary = [25000,3900,3200,120000,73000];
let x = annualSalary.reduce(myFunction);
function myFunction(a,b){
    return a+b
}
console.log(x);


//! 
// !If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0. (filter ve reduce ile çözülecek)

//! mean ve median sorusu (reduce, sort ve abs ile çözülecek)

// !faktoriyel sorusu (map, fill ve reduce ile çözülecek)

// !Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences. (reduce ve flat ile çözülecek)

//! The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials. (map, split ve join ile çözülecek)

// !  ÖDEV1:
// ! fiyatlar dizisinde her bir fiyata %10 zam yapalım.
// ! NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

// const fiyatlar =[100,250,50,89];
// fiyatlar.forEach((price)=>array[index]=(price*1,1)).toFixed();
// console.log(fiyatlar);

// const fiyatlar =[100,250,50,89];
// console.log(fiyatlar.filter((fiyat)=> fiyat>90));


// const fiyatlar =[100,250,50];
// fiyatlar.filter((x)=>x<110).map((x)=> 1.1*x).forEach((x)=> console.log(x.toFixed()));

// const maaşlar =[3000,5000,4000,6000];
// console.log(maaşlar.filter((x)=> x>4000).filter((x)=>x>4000).map((x)=>x*1.50);

// ! The goal of this exercise is to convert a string to a new string where each character in the new string 
// ! is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// ! "din"      =>  "((("
// ! "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("


