// const sayı =[4,2,34,4,1,12,1,4];
// sayı.sort(function(a,b){return a-b});
 
// console.log(sayı);
// console.log(sayı.length);
// a=sayı.includes('')
// console.log(a);
// //  for(let i=0,i<sayı.length,i++){

// //  }

// const arr1 = [4, 2, 34, 4, 1, 12, 1, 4];
// const sonuc = [];

// function findDup(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     let deleted = arr.pop();
//     if (arr.includes(deleted) && !sonuc.includes(deleted)) {
//       sonuc.push(deleted);
//     }
//   }
//   return sonuc;
// }

// console.log(findDup(arr1));





 
 
// const array = [4, 4, 32, 69, 8, `angular`, `angular`, `react`, 4.5, 9, 2.1, 2.1, `oops`];
// const duplicatedElements = [];
// let findDup = function () {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let newArr = new Array;
//         newArr = array.slice(i+1,array );
//         console.log(newArr);
//         if (newArr.includes(element)) {
//             duplicatedElements.push(element);
//         }
//     }
//     return duplicatedElements;
// }
// findDup();
// console.log(duplicatedElements);




// ! ODEV: maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.
// ! const maaslar = [3000, 5000, 4000, 6000, 6500];
// !
// ! 1.ortalamayı bul reduce ile
// ! 2.ortalamanın altındakileir bul Filter
// ! 3.zam yap ayrı dizye at
// !  const maaslar = [3000, 5000, 4000, 6000, 6500];
// ! const result =maaslar.filter((a)=> a < (maaslar.reduce((a,b)=> a+b)/maaslar.length)) 
// ! console.log(result);
// ! console.log(result.map((a)=> 1.2*a));  

//  const maaslar = [3000, 5000, 4000, 6000, 6500];
//  const result =maaslar.filter((a)=> a < (maaslar.reduce((a,b)=> a+b)/maaslar.length)).map((a)=> 1.2*a);
// console.log(result);
//************************************************** */
// const maaslar = [3000, 5000, 4000, 6000, 6500];
// const result = maaslar
//   .filter((x) => x < maaslar.reduce((x, y) => x + y) / maaslar.length)
//   .map((x) => x * 1.2);
//   console.log(result);



// ODEV: Kisiler dizisi icin asagıdaki islemleri gerceklestiren kodları yazınız
// 1: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
// 2: 33 yasindan kücüklerin isimlerini diziye saklayiniz.
// 3: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.
// const kisiler = [ { name: 'Ahmet', surname: 'Can', job: 'developer', age: 30, }, { name: 'Mehmet', surname: 'Baki', job: 'tester', age: 35, }, { name: 'Nur', surname: 'Ersan', job: 'team lead', age: 40, }, { name: 'Merve', surname: 'Veli', job: 'developer', age: 26, },

// { name: 'Ruzgar', surname: 'Kuzey', job: 'tester', age: 24, }, ];
// bu soruyu çözmüşmüydük hatırlayamadım


// const maaslar = [3000, 5000, 4000, 6000, 6500];
// const result = maaslar
//   .filter((x) => x < maaslar.reduce((x, y) => x + y) / maaslar.length)
//   .map((x) => x * 1.2);
// console.log(result);
// const yeniMaaslar = maaslar.map((item, index, array) => {
//   if (item < array.reduce((acc, item) => acc + item, 0) / array.length) {
//     item = item * 1.2;
//     return item;
//   }
// });
// console.log(yeniMaaslar);





//=======================================================
//         JS-CC-005 : Roman Numerals
//*=======================================================
// ! Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// ! Example:

// ! 1000=M 900=CM 90=XC

// ! 2008 is written as MMVIII:

// !  2000=MM 8=VIII
// ! Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

// ? Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
// ! ==========================================
//           JS-CC-006 : Merge Arrays
//*==========================================
// ! pseducode 
// ! 1.roman rakamlarını nasıl alırız.

(I = 1), (V = 5), (X = 10), (L = 50), (C = 100), (D = 500), (M = 1000);
 NUMMBER===0;
 NUMMBER===;1
 NUMMBER===2;
 NUMMBER===3;
 NUMMBER===4;
 NUMMBER===5;
 NUMMBER===6;
 NUMMBER===7;
 NUMMBER===8;
 NUMMBER==;
 NUMMBER===0;
 NUMMBER===0;