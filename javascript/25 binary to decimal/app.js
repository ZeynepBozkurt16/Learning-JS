// let sayi = prompt("sayıyı girin")

// function convert(sayi) {
//     let uzunluk = sayi.length
//     let toplam = 0
//     for (let i = uzunluk - 1; i >= 0; i--) {
//         toplam = toplam + (2 ** (uzunluk - i - 1)) * (Number(sayi.charAt(i)))
//     }
//     return toplam;
// }

// let sonuc = convert(sayi)
// alert(sonuc)


let binary = "101011"

function cevir(sayi) {
    let uzunluk = binary.length
    let ust = 0
    let toplam = 0
    for (let i = uzunluk - 1; i >= 0; i--) {

        if (Number(sayi.charAt(i)) != 0) {
            toplam += Number(sayi.charAt(i)) * Math.pow(2, ust)
        }

        ust++
    }
    alert(toplam)
}
cevir(binary)
