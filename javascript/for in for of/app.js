// forin döngüsü: indexi verir

let names = ["ali", "veli", "ayşe", "fatma"]

for (let name in names) {
    console.log(name, names[name])
}

// for of döngüsü: içindeki değeri verir

for (let name of names) {
    console.log(name, names.indexOf(name))
}
