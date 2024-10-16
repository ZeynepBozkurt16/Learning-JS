// date sınıfı metotları
// get ile mevcut değeri alırız

let tarih = new Date()
console.log(tarih)


console.log(tarih.getTime())
console.log(tarih.getFullYear())
console.log(tarih.getDate()) // günü alır

console.log(tarih.getDay());// haftanın kaçımcı günündesim

console.log(tarih.getHours())

console.log(tarih.getMilliseconds())
console.log(tarih.getMinutes())
console.log(tarih.getMonth()) // aylar 0 dan başlar 0 ocak  

console.log(tarih.getSeconds())
console.log(tarih.toLocaleDateString())
console.log(tarih.toLocaleTimeString())
console.log(tarih.toLocaleString())

// set ile mevcut değeri değiştiririz

//tarih.setFullYear(2021)
// tarih.setHours(15)
// tarih.setMonth(2)
// tarih.setMinutes(48)
// tarih.setHours(tarih.getHours() + 2)
// console.log(tarih)

// console.log(typeof tarih.toString())

let tarih2 = new Date(2003, 3, 16, 11, 40, 50)
console.log(tarih2)

//