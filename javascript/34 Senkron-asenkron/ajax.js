// tarayıcı ve server arasındaki köprü katmandır kullanılmaz
//!xmlhttprequest üzerinden ajax kullanılır
// onreadystatechange= ready state değişince çalışır

// ready state 0 - 4 arası değerler alır 4 olmalı
// status 200 olmalı 404 gibi değerleri var

//statustext=

function prepareUrl(url, id) {
    if (id == null) {
        return url;
    }
    return `${url}?postId=${id}`
}

function getComments(url, id) {
    let newUrl = prepareUrl(url, id)
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", newUrl)
    xhr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments", null)