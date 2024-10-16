/*
?Sorular
türkçe 40 soru
matematik 40 
sosyal 20
fen 20
->100 puanı ösym veriyor
-> okul puanı max 60 veriyor
*/
let trdogru = 0
let tryanlis = 0
let matdogru = 0
let matyanlis = 0
let sosyaldogru = 0, sosyalyanlis = 0
let fendogru = 0, fenyanlis = 0
let okulpuan = 0

let mesaj = "puan uygulama uygulamasına hoş geldiniz"
let yenisatir = "\r\n"

let metin = "uygulamaya hoş geldiniz ." + yenisatir + "1-Puan hesaplama" + yenisatir + "2-çıkış yap" + yenisatir + "seçiminizi yapınız"

let secim = prompt(metin)

switch (secim) {

    case "1":
        let trdogru = Number(prompt("türkçe doğru sayısı"))
        let tryanlis = Number(prompt("türkçe yanlış sayısı"))

        let matdogru = Number(prompt("matematik doğru sayısı"))
        let matyanlis = Number(prompt("mat yanlis"))

        let fendogru = Number(prompt("fen doğru"))
        let fenyanlis = Number(prompt("fen yanlış"))

        let sosyaldogru = Number(prompt("sosyal doğru"))
        let sosyalyanlis = Number(prompt("sosyal yanlış"))

        let okulpuan = Number(prompt("okul puanını girin "))

        let dogru = trdogru + matdogru + fendogru + sosyaldogru
        let yanlis = (tryanlis + matyanlis + fenyanlis + sosyalyanlis) / 4

        let puan = ((dogru - yanlis) * 4) + okulpuan
        alert("puanınız " + puan)

        break;
    case "2":
        alert("çıkış yapılıyor")
        break;
    default:
        alert("geçersiz")

}

