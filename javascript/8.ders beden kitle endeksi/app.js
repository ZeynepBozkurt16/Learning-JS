// beden kitle endeksini hesaplama


let kg = Number(prompt("kilonuzu kg cinsinden giriniz:"))
let boyy = Number(prompt("boyunuzu metre cinsinden giriniz"))


function calculator(kilo, boy) {
    let endeks = kilo / (boy * boy)

    if (endeks > 0) {
        if (endeks < 18, 5) {
            alert("ideal kilonun altında" + endeks)
        }
        else if (endeks >= 18.5 && endeks < 24.9) {
            alert("ideal kilo" + endeks)
        }
        else if (endeks >= 25 && endeks < 29.9) {
            alert("ideal kilonun üstünde" + endeks)
        }
        else if (endeks >= 30 && endeks < 39.9) {
            alert("obez" + endeks)
        }
        else if (endeks > 40) {
            alert("morbid obez" + endeks)
        }
    }
    else {
        alert("geçerli değer girin:" + endeks)
    }

}
calculator(kg, boyy);