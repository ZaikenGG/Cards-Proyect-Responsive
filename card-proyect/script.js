let social = document.querySelector(".social-media")
let open = document.querySelector(".share-icon--open")

open.addEventListener("click", () => {
    social.classList.toggle("visible")
})

open.addEventListener("click", () => {
    open.classList.toggle("visible")
})

