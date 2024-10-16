
let sayi = prompt("sayıyı girin")
let basamakUzunluk = sayi.length
let toplam = 0

for (let i = 0; i < basamakUzunluk; i++) {
    let rakam = Number(sayi.charAt(i))
    toplam += rakam ** basamakUzunluk
}
if (Number(sayi) == toplam) {
    alert("armstrongdur")
}
else {
    alert("armstrong değildir")
}