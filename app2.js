// !If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so o
// ! pseudocode
// ! 1.userdan pozitif al veya n e bir pozitif  değer ata(n)
// ! 2. 2*3..* n  5!=5*4*3*2*1     n = (n-1) * (n)!
// ! 3.sonucu yazdır
// ! n != (n - 1)(n - 2)(n - 3) * (n - (n - 1));

// ! const sayı = Number(prompt("lütfen pozitif bir sayı giriniz: "));

// ! 1.çözüm
// const n = 5
// n<0 ? console.log('enter a valid number') : n * (n-1)
// console.log(n);
// let result =1
// for(let i=n ;i>0 ; i--){
//     result*=i
// }
// console.log(result);
// ! 2.çözüm
// let result = 1;
// const n = -5;
// if (n > 0) {
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
// } else {
//   console.log("enter a positive number :");
// }
// console.log(result);

// ? Calculate the mean and median values of the number elements from the input array.
// ! Veri sayıları küçükten büyüğe doğru sıralandıktan sonra, n gözlem sayısı olmak üzere, medyan değerinin bu seri içindeki sıra numarası şu şekilde bulunur:

// ! {\displaystyle Medyanpozisyonu={\frac {(n+1)}{2}}}{\displaystyle Medyanpozisyonu={\frac {(n+1)}{2}}}
// ! Eğer gözlem sayısı tek ise medyanın sıra numarası bir tam sayı olacaktır, ve doğrudan medyan bulunur. Eğer gözlem sayısı çift ise medyanın sıra numarası ½ li bir sayı çıkar. Bu durumda bu sayının etrafındaki iki değerin aritmetik ortalaması medyandır.

// ! pseducode
// ?  ortalama
// ! 1. bir array al
// ! 2. arrayın içindeki sayıları topla ve eleman sayısına böl
// ! 3.virgülden sonra 1 değeri al ceil trunc floor round toFixed
// ? medyan
// ! eğer   array.length%2 !== 0 : (array.length+1)/2 ;
// ! eğer sayı çiftse array.length%2 == 0 : (array.length+1)/2.ceil() +
// ! (array.length+1)/2.floor();  /2

// const array = [1, 4, 3, 73];
// let sonuc =0;
// for (const i of array) {
//     sonuc+=i
// }
// console.log(sonuc);
// console.log((sonuc / array.length));

const array = [20, 15, 10, 5, 78, 36, 3, 6, 4, 45];
let result = 0;
for (const iterator of array) {
  result += iterator;
}
console.log(Math.floor(result / array.length)); // mean
if (array.length % 2 !== 0) {
  console.log(array[(array.length + 1) / 2 - 1]);
} else {
  x = array.slice(array.length / 2 - 1, array.length / 2 + 1);
  console.log(x);
}
console.log((x[0] + x[1]) / 2); // median

// array.length%2 !== 0
// ? (array.length+1)/2  array.length%2 == 0
// : Math.ceil((array.length+1)/2) +
//  Math.floor((array.length+1)/2);
