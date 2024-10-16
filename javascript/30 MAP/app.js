// MAP KULLANIMI 
//mapler arraylerin bir alternatifdir. Değerler key value şeklinde tutulur


const map1 = new Map()
let value;
//! SET farklı türden değerler sakalnabilir
// map1.set(1,"zeynep")
// map1.set(2,"ayşe")
// map1.set(true,5)
// map1.set([1,2,3],{firstName:"xxx"})

map1.set(34, "istanbul")
map1.set(35, "izmir")
map1.set(6, "ankara")
map1.set(1, "adana")

//!GET
// console.log(map1.get(6))
// console.log(map1.get(34))
// const donenDeger = map1.get(35)
// console.log(donenDeger)

//!SİZE
// value = map1.size
// console.log(value)

//!delete

// value = map1.delete(35)
// console.log(value)// true döner

//!HAS :VAR MI

console.log(map1.has(35))
console.log(map1.has(55))

//! FOR OF map üzerinde dönme

for (let [key, value] of map1) {
    console.log(key, value)
}

const key = map1.keys(); // bu bir array değil
console.log(key)


//! for in döngüsü

for (let key of map1.keys()) {
    console.log(key)
}


const values = map1.values();
console.log(values)


//! maptan arraya çevirmek
const array = Array.from(map1)
console.log(array)

//! arrayden map yapmak
const array2 = [[34, "istanbul"], [35, "izmir"], [6, "ankara"], [1, "adana"]]
const map2 = new Map(array2)
console.log(map2)


//! dikkat 

map1.set([1, 2, 3], "array")
console.log(map1.get([1, 2, 3])) // undefined referans tip olduğu için objelerde de erişemezsin 

//eğer let keys=[1,2,3] şeklinde tanımlarsan olabilir

