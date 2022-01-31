let nameHTML = document.getElementById("name")
let nameBtn = document.getElementById("name-btn")

let count = 0

//nameHTML.innerHTML = count.toString()

const updateCountDom = (value) => {
    nameHTML.innerHTML = "Vineela Mukkamala"
}


nameBtn.addEventListener("click", () => {
    count++;
    updateCountDom(count)
})

