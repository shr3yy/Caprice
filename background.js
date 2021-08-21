chrome.runtime.onInstalled.addListener(() => {
    localStorage.clear();
    localStorage.setItem("caprice_status", "true")
    localStorage.setItem('theme', 'dark')
})

chrome.runtime.onMessage.addListener((response, sender, sendResponse) => {
    console.log(response);
    if (response.message == "open") {
        window.open("index.html")
    }else if(response.message === "status"){
        sendResponse({status : localStorage.getItem("caprice_status")});
        return true;
    }else{
        var temp = localStorage.getItem(response.url);
        console.log(temp)
        if (temp) {
            var existing = localStorage.getItem(response.url, response.todo);
            localStorage.setItem(response.url, existing + response.todo);
        }else{
            localStorage.setItem(response.url, response.todo);
        }
    }
})