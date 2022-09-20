

const buttons = document.querySelectorAll('button')
const displayPrevious = document.querySelector('#previousOperation')

buttons.forEach(button => {
    button.addEventListener("click", () => {
        displayPrevious.innerHTML += button.innerHTML

        if (button.classList.contains("Func")){
            switch(button.innerHTML){
                case '+':
                    console.log("Botao mais");
                    break
            }
        }

    })
})