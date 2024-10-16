class Insan {//sınıf
    //1 ) özellikler
    //2 ) yapıcı metot
    //3) function
    constructor(isim, soyisim, yas, maas) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas
    }

    bilgileriGoster() {
        console.log(`isim: ${this.isim} soyisim: ${this.soyisim} yas: ${this.yas} maas: ${this.maas}`);
    }
}

const Insan1 = new Insan("zeynep", "bozkurt", 21, 80000)


console.log(Insan1.isim)
Insan1.bilgileriGoster()


//! STATİC KAVRAMI :
//* class içerisinde tanımlanan fonksiyonların başına static yazılırsa o fonksiyon statik fonksiyon olur.


class matematik {
    topla(a, b) {
        console.log(a + b)
    }
    static cikar(a, b) {
        console.log(a - b)
    }
    static carp(a, b) {
        console.log(a * b)
    }
    static bol(a, b) {
        console.log(a / b)
    }
}

//! static ise class üzerinde 
//! static değil ise nesne oluşturup onun üzerinden erişilir


const mat = new matematik()
mat.topla(5, 7)

matematik.cikar(10, 5)


//! KALITIM KAVRAMI
// extends anahtar kelimesi ile yapılır



class Person {
    constructor(firstname, lastName, salary) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstname, this.lastName, this.salary);
    }
}

class Student extends Person {
    constructor(firstname, lastName, salary) {
        super(firstname, lastName, salary); // Parametreleri alıyoruz ve super() ile üst sınıfa gönderiyoruz
    }

    writeInfo() {
        super.writeInfo(); // Üst sınıfın methodunu çağırıyoruz
    }
}

// ogr objesini tanımlayıp sonra writeInfo çağırıyoruz
const ogr = new Student("Zeynep", "Bozkurt", 5000);

ogr.writeInfo();