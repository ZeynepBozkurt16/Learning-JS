let sayi = Number(prompt("sayı girin"))

function ara(sayi) {
    let toplam = 0
    for (let i = 1; i <= sayi; i++) {
        if (sayi % i == 0) {
            toplam += i;
        }
    }
    if (sayi * 2 == toplam) {
        alert("mükemmel sayıdır")
    }
    else {
        alert("mükemmel sayı değildir")
    }
}
ara(sayi)
// function ara2(sayi) {
//     let toplam = 0
//     for (let i = 2; i <= sayi/2; i++) {
//         if (sayi % i == 0) {
//             toplam += i;
//         }
//     }
//     toplam+=1+sayi
//     if (sayi * 2 == toplam) {
//         alert("mükemmel sayıdır")
//     }
//     else {
//         alert("mükemmel sayı değildir")
//     }
// }