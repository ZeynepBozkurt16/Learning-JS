// callback: bir fonksiyonun parametre olarak başka bir fonksiyonun kullanılmasına denir.

//! callback hell
function getName(callback) {
    setTimeout(() => {
        // servis ismi getirdi 
        let name = "zeynep"

        callback(name)
    }, 1000)
}

function getSurname(name) {
    setTimeout(() => {
        let surname = "bozkurt"
        console.log(name, surname)
    }, 500)
}

getName(getSurname)

//2.yol 
getName((name) => {
    getSurname(name, (surname) => {
        console.log(name, surname)
    })
})