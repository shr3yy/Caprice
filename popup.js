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
