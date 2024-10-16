// normalde fonksiyonu function anahtar kelimesi ile tanımlarız.

//! arrow function örnek 
const yazdir = () => {
    console.log("merhaba")
}
yazdir();

// bunu kısaltabiliriz tek satır ise kıvırcık parantez kullanmaya grek yoktur 
// tek parametre varsa yuvarlak oarantezler kullanılmayabilir
const yazdir2 = () => console.log("merhaba")

const yaz = isim => console.log(isim)
yaz("mehmet")

// eğer tek işlem varsa return kullanmaya gerek yoktur

const kupal = x => x * x * x
console.log(kupal(3))