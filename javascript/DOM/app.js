// DOM objesi inceleme:

// let value;

// console.log(document);
// value = document.location.href;
// value = document.location.hostname
// value = document.location.port
// value = document.location.pathname
// value = document.characterSet
// value=document.URL
// value = document.links
// value=document.title
// console.log(value);


const button =document.getElementById("todobutton")
console.log(button.id)
console.log(button.getAttribute("id")) // 18 ve 19 aynı işi yapar

const claslist= button.classList;
let butontext=button.textContent// direkt string algılar
let buttonhtml=button.innerHTML//html özelikleini algılar


//!getElementByClassName

const todolist=document.getElementsByClassName("list-group-item")


// getelementBytagname()
const forms = document.getElementsByTagName("form")



// querySelector() - queryselectorall 
const form=document.querySelector("#todobutton")
