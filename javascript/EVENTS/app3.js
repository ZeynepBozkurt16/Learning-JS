// klavye events


//keypress: klavyeden herhangi bir tuşa basıldığında çalışır. harf ve sayılarda tetiklenir. diğerlerinde çalışmaz

//document.addEventListener('keypress', run)

// function run(e) {
//     console.log(e.type)
//     console.log(e.key) // hangi harf
// console.log(e.keycode)  // ascii kodu
// console.log(e.which) // ascii kodu
//}


// keydown: klavyeden herhangi bir tuşa basıldığında çalışır. harf ve sayılarda ve diğer özel tuşlarda da çalışır farkı budur.

// document.addEventListener('keydown', run)


// keyup: klavyeden herhangi bir tuşa basıp çektiğimzde çalışır


// document.addEventListener('keydown', run)

// function run(e) {
//     console.log(e.keyCode)
//     if (e.keyCode == 91) {
//         alert(" sayfa yenileme engellendi")
//     }
//     e.preventDefault();// varsayılan eylem engellendi
// }

const cardTitle=document.querySelectorAll('.card-title')[0];
const input =document.querySelector("#todoName")

input.addEventListener('keyup',run)

function run(e){
    cardTitle.textContent=e.target.value
}



