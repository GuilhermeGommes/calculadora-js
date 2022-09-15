var result = document.querySelector("#result") 

function buttonClicked(val){
    if (result.innerHTML.length < 12){
        result.innerHTML += val
    }
    if(val == "AC"){
        result.innerHTML = ""
    }
 }
window.addEventListener("keydown", function(e){
    let valInput = ""
    switch(e.key){
        case "1":
            valInput = "1"
            break
        case "2":
            valInput = "2"
            break
        case "3":
            valInput = "3"
            break
        case "4":
            valInput = "4"
            break
        case "5":
            valInput = "5"
            break
        case "6":
            valInput = "6"
            break   
        case "7":
            valInput = "7"
            break   
        case "8":
            valInput = "8"
            break
        case "9":
            valInput = "9"
            break
        case "0":
            valInput = "0"
            break
    }
    if (result.innerHTML.length < 12){
        result.innerHTML += valInput
    }

})