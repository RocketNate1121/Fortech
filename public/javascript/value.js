//----------------------------
//-------VALUE CAROUSEL-------
//----------------------------
var counter = parseInt(localStorage.getItem("active-op"));
if(document.getElementById("budget" + counter)){
    document.getElementById("budget" + counter).classList.add("budget-active");
}

const budgetButtons = document.querySelectorAll(".a2")
budgetButtons.forEach(button =>{
    var optNum = 3
    button.addEventListener("click", () => {
        document.getElementById("budget" + counter).classList.remove("budget-active");

        if(button.classList.contains("next")){
            // console.log("before counter is added to " + counter)
            counter += 1
            // console.log("after counter added to " + counter)
        } else{
            counter = counter - 1
        }

        if(counter == optNum + 1){
            counter = 1
        } else if(counter == 0){
            counter = optNum
        }


        // document.getElementById("radio" + counter).checked = true;
        document.getElementById("budget" + counter).classList.add("budget-active");
        localStorage.setItem("active-op", counter);
    })
})


const opButtons = document.querySelectorAll(".op-btn");
// console.log(opButtons);
opButtons.forEach(button =>{
    button.addEventListener("click", () => {
        if(button.classList.contains("starter")){
            counter = 1
        }else if(button.classList.contains("intermediate")){
            counter = 2
        }else if(button.classList.contains("advanced")){
            counter = 3
        }

        console.log(counter)

        localStorage.setItem("active-op", counter);
        // document.getElementById("op" + counter).classList.add("budget-active");
    })
})