
/*  manage CSS of caprice box 
    arrange txtarea and save button

    add images on ADD and save button

    add heading on capirce div which shows website name

    fonts change kro
*/

chrome.runtime.sendMessage({message : "status"}, response => {
    console.log(response)
    if(response.status === "true"){
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
})

console.log("Working");

const body = document.querySelector("body");

const btn = document.createElement("button");
btn.id = 'btn'
btn.style.cssText = ' position: fixed !important; top : 200px !important; right: 0px !important; z-index: 1000px ; background: rgba(226, 238, 255, 0.58); display:block; height: 45px; width: 45px; border-radius: 22.5px; border: 1px solid grey';
body.appendChild(btn);

//create a div for box

var iDiv = document.createElement('div');
iDiv.style.cssText = 'position: fixed; display : none ; top : 200px !important; right : 2px;  right: 0px !important; z-index: 1000px ; background: rgba(200, 219, 249, 0.58); height: 300px; width: 200px; border-radius: 19px; border: 1px solid grey';
body.appendChild(iDiv);

//create new div and fill in layers over it

var caprice = document.createElement('div');
caprice.style.cssText = "display :flex;justify-content : center; flex-direction: column; align-items : center"
iDiv.appendChild(caprice);

// heading

var topic = document.createElement('h3');
topic.textContent = window.location.host;
topic.style.cssText = "position: absolute; margin-left: auto; margin-right: auto ; top: 7px; bottom : 256px ; text-align : center; width: 168px; height: 36px; font-family: Supermercado; font-style: normal; font-weight: normal;font-size: 20px"
caprice.appendChild(topic);


//tetx box for div 

var input = document.createElement('textarea');
input.placeholder = "   Enter Tasks here 😊"
input.style.cssText = "position: absolute;top : 40px; bottom :27 px; left : 7.5px; width: 182px;height: 210px;background: rgba(255, 255, 255, 0.95);border-radius: 12px;"
caprice.appendChild(input);


//  save btn

var saveBtn = document.createElement('button');
saveBtn.style.cssText = "position: absolute;top : 260px; bottom : 10px; left : 7.5px; width: 182px; height: 30px;background: #FFF5F5;border-radius: 5px;"
saveBtn.innerText = "Save"
saveBtn.addEventListener("click", ()=>{

    var url = window.location.host;
    console.log(input.value)
    chrome.runtime.sendMessage({url, todo : input.value});

    iDiv.style.display = 'none';
    btn.style.display = 'block';
})
caprice.appendChild(saveBtn);


// eventlistener for add button

btn.addEventListener("click",()=>{

    iDiv.style.display = 'block';
    btn.style.display = "none";
 //button coverts to text editor
})


