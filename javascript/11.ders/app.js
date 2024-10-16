// banka uygulaması 

let bakiye = 1000;
let yeniSatir = "\r\n"
let metin = "1- bakiye görüntüle" + yeniSatir + "2-para çek" + yeniSatir + "3- para yatır" + yeniSatir + "4-çıkış yap" + yeniSatir + "seçim yapın"

let secim = prompt(metin)

switch (secim) {
    case "1": {
        alert("mevcut bakiyeniz" + bakiye)
        break;
    }
    case "2": {
        let cekilen = Number(prompt("çekilecek tutarı girin:"))
        if (cekilen > bakiye) {
            alert("yetersiz bakiye")
        }
        else {
            bakiye -= cekilen
            alert("mevcut bakiyeniz" + bakiye)
        }
        break;
    }
    case "3": {
        let yatirilan = Number(prompt("tutarı girin"))
        bakiye += yatirilan
        alert("mevcut bakiye" + bakiye)
        break;
    }
    case "4": {
        alert("çıkış yapılıyor")
        break;
    }
    default:
        alert("geçersiz seçim")
}