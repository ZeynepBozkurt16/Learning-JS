// ---------------ORTALAMA BULMA UYGULAMASI----------------

//vize1 %30, vize2 %30, final %40

let exam1 = Number(prompt("1.vizeyi giriniz"));
let exam2 = Number(prompt("2.sınavı giriniz"))
let final = Number(prompt("final notunu giriniz "))
let avarage = exam1 * 0.3 + exam2 * 0.3 + final * 0.4

if (avarage > 60) {
    alert("dersi geçtiniz " + avarage)
}
else {
    alert("dersten kaldınız ", avarage)
}