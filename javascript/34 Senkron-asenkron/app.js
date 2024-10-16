// js senkron bir programlama dilidir

//bazı durumlarda asenkron programlama olabilir
//? timing
//? event
//? http request


// promise -- > async await -- callback

console.log("zeynep")

setTimeout(() => {
    console.log("1000ms sn çalışacak")
}, 1000)
setTimeout(() => {
    console.log("2000ms sn çalışacak")
}, 2000)
setTimeout(() => {
    console.log("3000ms sn çalışacak")
}, 3000)

console.log("bozkurt")
