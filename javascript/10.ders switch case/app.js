// let sayi = prompt("lütfen bir sayı giriniz")

// switch (sayi) {

//     case "1":
//         console.log("girilen sayı 1")
//         break;
//     case "2":
//         console.log("girilen sayı 2")
//         break;
//     case "3":
//         console.log("girilen sayı 3")
//         break;
//     case "4":
//         console.log("girilen sayı 4")
//         break;
//     case "5":
//         console.log("girilen sayı 5")
//         break;
//     default:
//         console.log("geçersiz")
//         break

// }


let yeniSatir = "\r\n"
let metin = "1 - pazartesi" + yeniSatir + "2-salı" + yeniSatir + "3-çarşamba" + yeniSatir + "4-perşembe" + yeniSatir + "5-cuma" + yeniSatir + "6-cumartesi" + yeniSatir + "7-cuma" + yeniSatir + "lütfen seçim yapınız";


let secim = prompt(metin)

switch (secim) {
    case "1":
        console.log("seçilen gün pazartesi")
        break;
    case "2":
        console.log("seçilen gün salı")
        break;
    case "3":
        console.log("seçilen gün çarşamba")
        break;
    case "4":
        console.log("seçilen gün perşembe")
        break;
    case "5":
        console.log("seçilen gün cuma")
        break;
    case "6":
        console.log("seçilen gün cumartesi")
        break;
    case "7":
        console.log("seçilen gün pazar ")
        break;
    default:
        console.log("geçersiz")
        break;
}