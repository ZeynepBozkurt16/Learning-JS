// let sayac = 1
// do {
//     console.log(sayac)
//     sayac++
// } while (sayac <= 10);

//1den 20 ye kadar olan tek sayıları yazdırma
// clg , alert+
let i = 1
let toplam = 0;

do {
    if (i % 2 == 1) {
        toplam += i
    }
    i++
} while (i <= 20);
console.log("toplam", toplam)


//!  break ve continue kavramları önemlidir sadece döngülerde kullanılır :)