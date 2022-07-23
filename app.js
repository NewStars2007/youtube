// console.log("DOM");

// // DOM
// // querySelector = HTML tagni Jsga chaqirish


// const title = document.querySelector(".title")



// console.log( title );
// console.log( document.querySelector("#desc") );
// function changeTitle(){
//     // JS style berish
// title.style.color = "red"
// title.style.backgroundColor = "green"
// title.style.fontSize = "40px"
// }


// function restart(){
//     title.style.color = "#000"
//     title.style.fontSize = "32px"
//     title.style.backgroundColor = "transparent"
// }

// // querySelectorAll
// const items = document.querySelectorAll(".item")

// console.log(items);
// items[1].style.color = "blue"
// items[2].style.color = "red"
// items[3].style.color = "gold"





const modal = document.querySelector(".modal")

function showModal(){
    modal.style.display = "block"
}

function hideModal(){
    modal.style.display = "none"
}


const topModal = document.querySelector(".top_modal")

function showTopModal(){
    topModal.style.top = "100px"
    topModal.style.opacity = 1
}
function hideTopModal(){
    topModal.style.top = "-300px"
    topModal.style.opacity = 0
}



const contactHTML = document.querySelector(".contact")

function showContact(){
    contactHTML.style.right = "10px"
}


const contact = document.querySelector(".contact")

function showContact(){
    contact.style.right = "-10px"
}