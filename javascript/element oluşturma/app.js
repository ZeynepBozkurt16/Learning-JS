// element yaratma

document.createElement("a")
value.appendchild(link) //sonuna eklenir

// element kaldırmAa

const todolist = document.querySelector(".todo")

todolist.remove() //ile kaldırılabilir

// ya da anne üzerinden kaldırılbilir

todolist.removeveChild(todolist.firstChild)
todolist.removeveChild(todolist.lastChild)
todolist.removeveChild(todolist[0])


//element yer değiştirme

const todolistt = document.querySelector(".todo")

const newtitle = document.createElement("h1")
newtitle.className = "title"
newtitle.textContent = "yeni başlık"

todolist.replaceChild(newtitle,todolist.childNodes[1]) // 2. node tipinde olmalıdır.



