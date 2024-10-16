let sayi = Number(prompt("lütfen bir sayı girin"))
let sayac = 0
for (let i = 2; i <= Math.floor(sayi / 2); i++) {

    if (sayi % i == 0) {
        sayac += 1
        break
    }

}
if (sayac == 0) {
    alert(sayi + "asaldır")
}
else {
    alert(sayi + "asal değil")
}
// let sayi = Number(prompt("lütfen bir sayı girin"))
// let sonuc=true
// for (let i = 2; i <= Math.floor(sayi / 2); i++) {

//     if (sayi % i == 0) {
//         sonuc =false
//     }

// }
// if (sonuc) {
//     alert(sayi + "asaldır")
// }
// else {
//     alert(sayi + "asal değil")
// }