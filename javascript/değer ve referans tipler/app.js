//değer tipler: string, number, boolean, null, undefined, symbol
//!bir değer tiplerinin değerleri kopyalanır referansları birbirinden bağımsız olarak kalır.
//referans tipler: array, object, function
//!referans tiplerinin değerleri kopyalanır referansları aynı referansa sahip olur.


let number1 = 5;
let number2 = number1

if (number1 === number2) {
    console.log("eşit")
}
else {
    console.log("eşit değil")
}


let dizi = [1, 2, 3, 4]
let dizi2 = dizi

dizi2.push(10)
console.log(dizi)