// destructing özelliği

// const langs = ["english", "turkhis", "spanish"];
// const [a, b, c] = langs;
// console.log(a, b, c);

// örnek 2

const hesapla = (a, b) => {
    const topla = a + b
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;
    const dizi = [topla, cikar, carp, bol]
    return dizi;
}

const [a, b, c, d] = hesapla(10, 2)
console.log(a, b, c, d);


// objede kullanımı 
//! dikkat buarada eşitlerken süslü parantez kullanılır
const person = {

    firstName: "zeynep",
    lastName: "bozkurt",
    age: 25,
    salary: 4000
}


let { firstName, lastName, age, salary } = person
//2.kullanım
let { firstName: isim, lastName: soyisim, age: yaş, salary: maaş } = person
console.log(firstName, lastName, age, salary)
