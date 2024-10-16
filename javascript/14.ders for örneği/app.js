//1 den 10 a kadar yazdır

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// console.log("---------------")

//1den 10a kadar tek

// for (let j = 0; j <= 10; j += 2) {
//     console.log(j)
// }
// console.log("----------")
//1den 10a tek
// for (let k = 1; k <= 10; k += 2) {
//     console.log(k)
// }


// çiftse naber tekse selam

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("naber")
    }
    else {
        console.log("selam")
    }
}

let toplam = 0
for (let j = 50; j >= 1; j--) {
    console.log(j)
    toplam += j
}
console.log("toplam: ", toplam)