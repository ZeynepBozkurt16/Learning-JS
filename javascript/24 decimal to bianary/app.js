// decimal to binary conversion

// let sayi = Number(prompt("lütfen bir sayi giriniz"))


// function conversion(sayi) {
//     let binary = ""
//     while (sayi > 0) {
//         binary += String(sayi % 2)
//         sayi = Math.floor(sayi / 2)
//     }


//     let sonuc = reverse(binary)
//     alert(sonuc)

// }
// conversion(sayi)

// function reverse(binary) {
//     let uzunluk = binary.length
//     let yeni = "";
//     for (let i = uzunluk - 1; i >= 0; i--) {
//         yeni += binary.charAt(i)
//     }
//     return yeni
// }

// let sayi = Number(prompt("Lütfen bir sayı giriniz"));

// function conversion(sayi) {
//     let binary = ""; // İkilik karşılığı saklamak için boş bir string başlatılır
//     if (sayi === 0) {
//         return "0"; // Eğer sayı 0 ise, direkt olarak "0" döneriz
//     }
//     while (sayi > 0) {
//         binary = (sayi % 2) + binary; // Mod alma ve sayıyı ters ekleme işlemi
//         sayi = Math.floor(sayi / 2); // Sayıyı ikiye bölüp tam kısmını alıyoruz
//     }
//     return binary; // Tamamlanan binary değerini döneriz
// }

// let sonuc = conversion(sayi);
// alert("İkilik sistemde: " + sonuc);

let metin = ""
metin = metin + 1

metin = metin + "a"
alert(metin)