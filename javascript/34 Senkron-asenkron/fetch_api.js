// 2 tane then olmasının sebebi responsenin promise tipinde dönmesi
// function getStudents(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
// }

// getStudents("https://jsonplaceholder.typicode.com/users")



function getStudents(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

getStudents("https://jsonplaceholder.typicode.com/comments")
//! BU İŞLEMLER DIŞARIDA DA YAPILABİLİR
// .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))

function saveStudent(url) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "id": 2
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => console.log("Success:", data))
        .catch(error => console.error("Error:", error));
}