let urun1 = {
    isim: "Lenovo IdeaPad ",
    kategori: "teknoloji",
    fiyat: 14.499
}
let urun2 = {
    isim: "LENOVO NB ",
    kategori: "teknoloji",
    fiyat: 14.499
}
let urun3 = {
    isim: "Acer Aspire 5  ",
    kategori: "teknoloji",
    fiyat: 11.699
}
let urun4 = {
    isim: "Acer Swift 3 ",
    kategori: "teknoloji",
    fiyat: 15.867
}
let urun5 = {
    isim: "ACER Nitro V15  ",
    kategori: "teknoloji",
    fiyat: 39.149
}
let urunler = [urun1, urun2, urun3, urun4, urun5]

let kullaniciUrun = prompt("lütfen ürün ismini girin")
let filtreliDizi = []




function urunFiltrele(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrun.toUpperCase()))
            filtreliDizi.push(urun)

    })
}

function urunGetir(urunler) {
    urunler.forEach(function (urun) {
        console.log("--------------------")
        console.log(urun.isim + "|" + urun.kategori + "|" + urun.fiyat)
        console.log("----------------------")
    })
}

urunFiltrele(urunler)
urunGetir(filtreliDizi)