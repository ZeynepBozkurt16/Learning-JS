//3 state var 
//! pending :bekleme modu
//! fullfield -resolve : başarılı .then ile yakalanıe
//! rejected başarısız : .catch ile yakalanır

//? callbacklere altrenatif olarak promise kullanılır

// örnek1
// let check = true;

// const promise1 = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("promise başarılı")
//     }
//     else {
//         reject("promise başarısız")
//     }
// })

// console.log(promise1)


//örnek2
// let check = true;

// function ceatePromise() {
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("promis başarılı")
//         }
//         else {
//             reject("promis başarısız")
//         }
//     })
// }

// ceatePromise()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(error))
//     .finally(() => console.log("her zaman çalışır"))


//? promise+ XMLHTTPRequest


// function readStudent(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.status === 200 && xhr.readyState === 4) {
//                     resolve(JSON.parse(xhr.responseText))
//                 }
//             })
//         } catch (error) {
//             reject(error)
//         }
//         xhr.open("GET", url)
//         xhr.send()

//     })
// }

// readStudent("student.json")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

//! GET USRERS

function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    resolve(JSON.parse(xhr.responseText))
                }
            } catch (error) {
                reject(error)
            }

        })
        xhr.open("GET", url)
        xhr.send()
    })
}

function getCommentsByUserId(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    resolve(JSON.parse(xhr.responseText))
                }
            } catch (error) {
                reject(error)
            }

        })
        xhr.open("GET", url)
        xhr.send()
    })
}


getUsers("https://jsonplaceholder.typicode.com/users/3")
    .then((data) => {
        console.log(data)
        // data.forEach(user => {
        //     console.log(user.name)
        //});
        return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments?userId=${data.id}`)
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

// PROMİSE ALL : birden fazla promise ile çalışırken kullanılır .then ile yakalanır .hepsi doğruysa .catch ile yakalanır 1 tane bile yanlış varsa

const p1 = Promise.resolve("promise1 başarılı")
const p2 = Promise.resolve("promise2 başarılı")
const p3 = Promise.resolve("promise3 başarılı")

Promise.all([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

