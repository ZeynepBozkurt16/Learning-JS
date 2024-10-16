let metin = "merhaba ben manisadayım"
let uzunluk = metin.length
let harf = prompt("harfi girin")
let sayac = 0
function bul(harf) {
    for (let i = 0; i < uzunluk; i++) {
        if (harf.toLowerCase() == metin.charAt(i).toLocaleLowerCase)
            sayac += 1
    }
    console.log(sayac)
}
bul("m")