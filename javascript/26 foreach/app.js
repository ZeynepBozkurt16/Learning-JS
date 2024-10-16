//! diziler object veri tipine sahip


// let dizi = ["ali", "zeynep", "cemre", "ayşe", "fatma"]

// dizi.forEach(function (names) {
//     console.log(names)
// })

//? DİZİ METOTLARI 

//!push : dizinin sonuna eleman ekler uzunluğu döner
//!unshift:dizinin başına eleman ekler uzunluğu döener

let arabalar = ["bmw", "mercedes", "porsche", "tesla", "volvo"]
let araba = ["hundai", "toyata"]

// let deneme = arabalar.push("opel")
// console.log(deneme)
// console.log(arabalar)

// arabalar.unshift("reno")
// console.log(arabalar)

//! pop :sondaki elemanı siler silineni döner
//! shift: baştaki elemanı siler silineni döner

// let deneme = arabalar.pop()
// console.log(arabalar)
// console.log(deneme)

// arabalar.shift()
// console.log(arabalar)

//! splice(index,index) başlangıç ,kaç eleman silincek

// arabalar.splice(0, 0, "nissan")
// console.log(arabalar)

// arabalar.splice(1, 2, "opel")
// console.log(arabalar)
//!toString() diziyi stringe çevirir
// let araba = arabalar.toString()
// console.log(araba)
// console.log(arabalar)

//!join diziyi stringe çevirir araya eleman ekleyebilirsin
// let string = arabalar.join("-")
// console.log(string)

//!concat:dizileri birleştirmek için
// let birlesmisdizi = arabalar.concat(araba)
// console.log(birlesmisdizi)

//!slice : diziyi istenen yerden bölüp yeni dizi oluşturur

// let ayri = arabalar.slice(2, 4)
// console.log(ayri)
// console.log(arabalar)
//!length
// console.log(arabalar.length)
//!reversedizi elemanlatını tersine çevirir
// let ters = arabalar.reverse()
// console.log(ters)
// console.log(arabalar)
//! sort sıralar
//!split :belli ifadeye göre bölüp diziye çevirir
let isim = "ali ,veli,ayşe"
let isimler = isim.split("-")
console.log(isimler)
//!indexof eleman yoksa -1 varsa ibdexini döner
let indeks = arabalar.indexOf("tesla")
console.log(indeks)
//!inculudes : verilen elemanı içeriyor mu ona bakar true false döner

let sonuc = arabalar.includes("porsche")
let sonuc2 = arabalar.includes("tofaş")

console.log(sonuc)
console.log(sonuc2)

//!find metodu, bir dizideki belirli bir koşulu sağlayan ilk öğeyi bulmak için kullanılır. Eğer öğe bulunursa o öğeyi döner, bulunamazsa undefined döner.

//!filter metodu, bir dizideki belirli bir koşulu sağlayan tüm öğeleri bulmak için kullanılır. Eğer öğe bulunursa o öğeleri döner, bulunamazsa boş bir dizi döner.

///!map metodu, bir dizideki tüm öğeleri yeniden döndürmek için kullanılır. Eğer öğe bulunursa o öğeleri döner, bulunamazsa boş bir dizi döner.map metodu, bir dizideki her öğe üzerinde belirli bir işlemi gerçekleştirerek yeni bir dizi oluşturmak için kullanılır.