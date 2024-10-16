

let sayi = Number(prompt("faktoriyelini bulmak istediğiniz sayıyı girin "))

let fact = 1;

for (let i = sayi; i >= 1; i--) {
    fact *= i
}
alert("faktoriyel" + fact)