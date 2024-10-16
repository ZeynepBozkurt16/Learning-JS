// ! --- TÜR DÖNÜŞÜMLERİ ---
// string, number,boolean,undefined and null //? primitve ilkel tipler
// object , function //? referance typs



// stringi numbera 2 şekilde dönüştürebiliriz Number() parseInt parseFloat()

//! --------- numbera dönüşüm 

let a = "5";  // 'a' string türünde
let b = Number("5");  // 'b' number türünde (Number, bir stringi veya başka bir değeri sayıya çevirir)

let c = parseInt("7");  // 'c' number türünde (parseInt, stringi tam sayıya çevirir)
//let isim= Number("")// bu not a number NaN

console.log(typeof b);  // b'nin türü "number" olarak döner
console.log(typeof c);  // c'nin türü de "number" olarak döner

let x = parseFloat("7.4") // farse int içine 7.4 versen 7 olarak çıkar

//! numberdan stringe çevirme 2 şekilde 1 string() 2 .toString()

let m = String(55)
let n = (55).toString()

// booleaan da stringe çevrilebilir

let bool = String(true)

let h = String([1, 2, 3])
console.log(typeof h)

let r = Number([1, 2]) // nan