// !=======================================================
// !         JS-CC-005 : Roman Numerals
//*=======================================================
// ! Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// ! Example:

// ! 1000=M 900=CM 90=XC

// ! 2008 is written as MMVIII:

// ! 2000=MM 8=VIII
// ! Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

// ! Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
let number =248;
let search = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    
    let roman ='';

    for(const i in search){
        while(number >= search[i]){
            roman+= i;
            number -= search[i];
        }
    }
    console.log(roman);


//*         pseudocode:
//*==================================================
// ? roman rakam karakterleri neler ve nasıl çaşılır.
// I=1, V=5, X=10, L=50, C=100, D=500, M = 1000
// Number <= 3, ilk işaretin soluna yaz, 1,2,3  III 
// Number ===4, bir sonraki işaretin soluna yazıyor, IV,
// Number ===5, V,
// Number ===6,7,8 soluna yaz,VIII,
// Number ===9, bir sonraki işaretin soluna yazıyor, IX
// number === 10,13 X,XI,XII,XIII,
// number 4 ve 9 bir sonraki karekterin soluna yazlıyor
