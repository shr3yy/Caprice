const toggle = document.querySelector("#toggle");
const localStatus = localStorage.getItem("caprice_status");
if(localStatus === "false"){
    toggle.checked = true;
}else{
    toggle.checked = false;
}




toggle.addEventListener("change", () => {
    if(toggle.checked){
        localStorage.setItem("caprice_status", "false");
        console.log(toggle.checked)
    }else{
        localStorage.setItem("caprice_status", "true");
        console.log(toggle.checked)
    }
})




// document.querySelector("h3").innerText = localStorage.getItem("caprice_status")

// const temp = document.createElement("input")
// temp.type = "checkbox"
// temp.id = "toggle"
// console.log(typeof(localStorage.getItem("caprice_status")))

// if(localStorage.getItem("caprice_status") === 'false'){
//     temp.checked = true
// }else{
//     console.log("matlab local true")
//     temp.checked = false
// }

// console.log(temp.checked)


// const lbl = document.querySelector("label")
// lbl.appendChild(temp)
// console.log(lbl.innerHTML)
// lbl.innerHTML = lbl.innerHTML + '<span class="slider round"></span>'


// const toggle = document.querySelector("#toggle");
// toggle.checked = !(localStorage.getItem("caprice_status"))

