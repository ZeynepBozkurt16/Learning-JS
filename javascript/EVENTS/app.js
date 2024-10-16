// event kullanımları 


//! 1) bir etiketi hedef alarak o etikete bir event ekleyebiliriz.
//<a href="#" id="link" onclick ="alert('selam')">Link</a>
{/* <a href="##" id="link1" onclick =" this.textContent= 'zeynep' "   >Link</a> */ }

<a href="#" id="link" onclick="changetitle()">Link</a>

function changetitle() {
    document.getElementById('link').textContent = 'zeynep'
    console.log("birden fazla işlem yapılıyor")
}

// ADDEVENTLISTENER

const clearbutton = document.getElementById('clear')
clearbutton.addEventListener('click', function () {
   alert('selam')
})

clearbutton.addEventListener('click',changetitle)// fonksiyona ( ) koyma çünkü bu sefer işlem yapılmadan çalışır

function changetitle(e) {
    console.log(e)
    console.log(e.target)//html etiketini döner
    console.log(e.target.id)
    console.log(e.target.textContent)
}