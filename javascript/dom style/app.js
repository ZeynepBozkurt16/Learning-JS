// style özeliği kullanımı 


// const todo= document.querySelector(".todo");

// todo.style.backgroundColor="red";
// todo.style.color="white";
// todo.style.fontSize="20px";
// todo.style.textAlign="center";
// todo.style.padding="10px";  
// todo.style.borderRadius="15px"


//! anneden çocuğa geçmek

const todolist = document.querySelector(".todolist");
let value;

value = todolist.children[0];
value = todolist.children[todolist.children.length - 1];// dizi uzunluğu bilinmediğnde sonuncu elemana ulaşmak için yapılır

value = todolist.children[0].textContent = "yeni değer";

value = Array.from(todolist.children);

value.forEach(function (item) {
    console.log(item.textContent)
})

// çocuktan anneye geçmek 

value = todo;
value = todo.parentElement.parentElement.parentElement // bu şekilde üst üste anneye ulaşılabilir ya da bu işlemi parçalayarak yapiliriz

//! kardeşler arası geçiş


 const nextelement = todo.nextElementSibling; // sonraki kardeşe geçer
 const prevelement = todo.previousElementSibling; // önceki kardeşi bulur