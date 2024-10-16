// -------------dialog kutuları-----
// - prompt(kullanıcıdan değer almak için değeri geri döner return) -alert -confirm
//! name kullanmak tarayıcıda problem yaratabilir
//! kullanıcıdan alınan değerler her zaman stringdir tür değişimi yapılabilir :)

// alert("sayfamıza hoş geldiniz :) ")
let userName = prompt("isminizi giriniz :")

let age = prompt("yaşınızı girin :")
console.log(userName)
console.log(age)

// confirm onaylamak true ya da false cevap verir

let result = confirm("onay veriyor musun ")
console.log(result)