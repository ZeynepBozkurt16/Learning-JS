// 1. 创建localStorage对象 : session storagedan farkı verilerin bilgisayar kapnsa bile silinmemesidir


// ? değer ekleme
localStorage.setItem("125", "zeynep")
localStorage.setItem("126", "ali")
localStorage.setItem("127", "veli")

// değer almak
let value = localStorage.getItem("127")
console.log(value)


//değer silme
localStorage.removeItem("127")

//tümünü temizle
localStorage.clear()

let motions = ["barfix", "squat", "pushup"]

localStorage.setItem("motions", JSON.stringify(motions))

let valuee = JSON.parse(localStorage.getItem("motions"))

valuee.forEach(function (motion) {
    console.log(motion)
})