//spread operatörü kullanımı yani dizi içindeki elemanları tek tek yazmak yernine bu şekilde birleştirmek mümkündür
let numbers = [10, 20, 30, 40]

const ekle = (a, b, c, d) => {
    console.log(a + b + c + d)
}

ekle(...numbers)

//!!spread operatörü ile arrayleri birleştirmek için kullanılabilir
const lang1 = ["java", "c#"]
const lang2 = ["python", "javascript", ...lang1]
console.log(lang2)


//!!spread operatörü ile arrayleri kopyalamak için kullanılabilir
const array1 = ["ali", "veli", "ayşe", "fatma"]

let array2 = []
array2 = [...array1]

console.log(array2)