// benzin istasyonu  uygulaması 

let dizel = 24.53
let benzin = 22.25
let lpg = 11.1

const yeniSatir = "\r\n" // yeni satır içinde 

const metinBelgesi = "1- dizel" + yeniSatir + "2- benzin" + yeniSatir + "3-lpg" + yeniSatir + "lütfen seçiminizi yapın "

let secim = Number(prompt(metinBelgesi))
let litre = Number(prompt("alacağınız benzin litresini girin "))
let bakiye = Number(prompt("bakiyenizi girin "))



if (secim == 1) {
    let tutar = litre * dizel
    if (bakiye < tutar) {
        let eksik = tutar - bakiye
        alert("yetersiz bakiye eksik tutar " + eksik)
    }
    else {
        let guncelBakiye = bakiye - tutar
        alert("yakıt tutarı " + tutar + " kalan bakiye: " + guncelBakiye)
    }
}
else if (secim == 2) {
    let tutar = litre * benzin
    if (bakiye < tutar) {
        let eksik = tutar - bakiye
        alert("yetersiz bakiye eksik tutar " + eksik)
    }
    else {
        let guncelBakiye = bakiye - tutar
        alert("yakıt tutarı " + tutar + " kalan bakiye: " + guncelBakiye)
    }
}
else if (secim == 3) {
    let tutar = litre * lpg
    if (bakiye < tutar) {
        let eksik = tutar - bakiye
        alert("yetersiz bakiye eksik tutar " + eksik)
    }
    else {
        let guncelBakiye = bakiye - tutar
        alert("yakıt tutarı " + tutar + " kalan bakiye: " + guncelBakiye)
    }
}

//sayi.toFixed(2) sayi 5.6789   =5.68