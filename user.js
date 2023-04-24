const id = localStorage.getItem("id")
const api2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
const userPostEl = document.querySelector(".post-list")

async function main() {
    posts = await fetch(api2)
    postsData = await posts.json()
    userPostEl.innerHTML = postsData.map((post) => userPost(post)).join("")
}

function userPost(post) {
    return `<div class="post">
                <div class="post__title">
                ${post.title}
                </div>
                <p class="post__body">
                ${post.body}
                </p>
            </div>`
}

main()