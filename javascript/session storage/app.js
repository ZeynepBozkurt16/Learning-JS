// session storage

// değer ekleme
sessionStorage.setItem("250", "zeynep")
sessionStorage.setItem("260", "ayşe")


// değer silme
// sessionStorage.removeItem("260")

let value = sessionStorage.getItem("250")

if (value === null) {
    console.log("değer yok")
}
else {
    console.log(value)
}

// hepsini silme

// sessionStorage.clear()

let names = ["alii", "ayşe", "mehmet"]
sessionStorage.setItem("names", JSON.stringify(names))
sessionStorage.setItem("names".JSON.stringify(names))

let valuee = JSON.parse(sessionStorage.getItem(names))