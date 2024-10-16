// input eventları

//focus
//blur
//copy
//paste
//cut
//select


const todo = document.querySelector("#todoName");

todo.addEventListener("focus", run) // inputa tıkladığımızda çalışır
todo.addEventListener("blur", run) // inputtan çıktığımızda çalışır
todo.addEventListener("copy", run) // inputdan kopyaladığımızda çalışır
todo.addEventListener("paste", run) //inputa yapıştırdığımızda çalışır
todo.addEventListener("cut", run) // inputdan kestiğimizde çalışır
todo.addEventListener("select", run) // inputdan seçtiğimizde çalışır

function run(e) {
    console.log(e.type)
}
