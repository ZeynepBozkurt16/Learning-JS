// gene array gibi kullanışlabilir mapten farkı key value yok

//! bie değer sadece 1 kez tuulur


// değer ekleme
const set1 = new Set();
set1.add(100);
set1.add("zeynep")
set1.add(true);
set1.add([1, 2, 3]);
set1.add({ username: "enes", password: "123" })

//! size ile uzunluğu yazdırılabilir

// console.log(set1.size)

//! DEĞER SİLME
set1.delete("zeynep")
console.log(set1.size)

// REFERANS TİPLERİ DİREKT SİLEMEZSİN DEĞİŞKEN İLE TANIMLAYIP SİLMEK GEREK

//! HAS
console.log(set1.has(100))

// for of 

// for (let value of set1) {
//     console.log(value)
// }

//const values = Array.from(set1)
//console.log(values)

// values.forEach(value => {
//     console.log(value)
// })

// setten array oluşturma
const values = Array.from(set1)

// arrayden set oluşturma
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newSet = new Set(array)
console.log(newSet)

