// çoklu if kullanımı 

// isim boş olamaz 
// tckn 11 karakter olmalı


let userName = prompt("lütfen isminizi girin ")
let tcNumber = prompt("tcnizi girin ")

function control(ad, tc) {
    if (userName != "") {
        if (tcNumber.length == 11) {
            alert("adı: " + ad + "tcsi: " + tc)
        }
        else {
            alert("tc kimlik numarası boş geçilemez")
        }
    }
    else {
        alert("isim alanı boş geçilemez")
    }
}

control(userName, tcNumber)

function control2(ad, tc) {
    if (ad == "") {
        alert("isim alanı boş geçilemez")
        return
    }
    if (tc.length != 11) {
        alert("11 karakter girin")
        return
    }
    alert("ismi " + ad + " tc" + tc)
}