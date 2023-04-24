const api1 = "https://jsonplaceholder.typicode.com/users"
const userListEl = document.querySelector(".user-list")

async function main() {
    const users = await fetch(api1)
    const usersData = await users.json()
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("")
}

main()

function userHTML(user) {
    return `<div class="user" onclick="showUserPosts(${user.id})">
                <div class="user-card">
                <div class="user-card__container">
                    <h3>${user.name}</h4>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Phone:</b> ${user.phone}</p>
                    <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                </div>
                </div>
            </div>`
}

function showUserPosts(userId) {
    localStorage.setItem("id", userId)
    window.location.href = "./user.html"
}
