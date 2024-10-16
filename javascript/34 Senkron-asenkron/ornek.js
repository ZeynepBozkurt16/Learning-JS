const users = [
    {
        userId: 10,
        post: "zeynep post 1"
    },
    {
        userId: 10,
        post: "zeynep post 2"
    }
    , {
        userId: 7,
        post: "rabia post 1"
    },
    {
        userId: 9,
        post: "xxxx post 1"
    }
    ,
    {
        userId: 3,
        post: "ali post 1"
    }
]

function getUserId(callback) {
    setTimeout(() => {
        let userId = 10
        getPostByUserId(userId)
    }, 1000);
}
function getPostByUserId(userId) {
    setTimeout(() => {
        users.forEach(user => {
            if (user.userId === userId) {
                console.log(user.post)
            }
        });
    }, 1000);
}

getUserId(getPostByUserId)