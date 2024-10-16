// STRİNG SINIFININ METOTLARI

let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2024"

//?charAt(): bu metot verilen indekse göre karakteri döner

let karakter = kurs.charAt(3)
console.log(karakter)

//! concat : verilen stringleri birleştirir

let birlesmis = kurs.concat(" ", tarih)
console.log(birlesmis)

//?indeexOf() : verilen stringin ilk indeksini döner
let index = kurs.indexOf("W")
console.log(index)

//! lastIndexOf() : verilen stringin son indeksini döner

let indeks = kurs.lastIndexOf("Kursu")
console.log(indeks)

//! toUpperCase() : verilen stringin büyük harfli halini döner

let buyuk = kurs.toUpperCase()
console.log(kurs)
console.log(buyuk)

//! toLowerCase() : verilen stringin küçük harfli halini döner

let kucuk = kurs.toLowerCase()
console.log(kucuk)

//! trim() : verilen stringin başında ve sonunda bulunan boşlukları siler

console.log(kurs.trim())


//!slice() : verilen stringin belirtilen indeksten başlayarak belirtilen indekse kadar olan kısmını döner

console.log(kurs.slice(7, 10))

//! substring(): 
console.log(kurs.substring(0, 6))

//! replace(): 
console.log(kurs.replace("Kursu", "Programı"));

//! split() : verilen stringi belirtilen karaktere göre böler ve bir diziye atar

console.log(kurs.split(" "))


//! valueeOf() : verilen stringin değerini döner .değeri işaretlersen primitive hale getirir
console.log(kurs.valueOf())

//!startsWith() : verilen stringin başındaki karakterler verilen stringe eşitse true döner

console.log(kurs.startsWith("Modern"))
console.log(kurs.startsWith("M"))
//!endswith() : verilen stringin son karakteri verilen stringe eşitse true döner 

console.log(kurs.endsWith("Kursu"))

