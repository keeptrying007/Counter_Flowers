let count = 0
let countEl = document.getElementById("count-el")
function increment(){
    count = count + 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
function save(){
    saveEl.textContent += count + "-"
    countEl.textContent = 0
    count = 0
}


// let count = 0
// let countEl = document.getElementById("count-el")

// let saveEl = document.getElementById("save-el")

// function increment(){
//     count += 1
//     countEl.textContent = count
// }

// function save(){
//     let countMessage = count + "-"
//     saveEl.textContent += countMessage
//     countEl.textContent = 0
//     count = 0
// }

