chrome.runtime.onInstalled.addListener(() => {
    localStorage.clear();
    localStorage.setItem("caprice_status", "true")
})

chrome.runtime.onMessage.addListener((response, sender, sendResponse) => {
    console.log(response);
    if(response.message === "status"){
        sendResponse({status : localStorage.getItem("caprice_status")});
        return true;
    }else{
        var temp = localStorage.getItem(res.url);
        if (temp) {
            var existing = localStorage.getItem(res.url, res.todo);
            localStorage.setItem(res.url, existing + res.todo);
        }else{
            localStorage.setItem(res.url, res.todo);
        }
    }
})