//----------------------------
//-------Image Carousel-------
//----------------------------
const buttons = document.querySelectorAll(".a1")
buttons.forEach(button =>{
    var counter = 1
    var radioNum = 5
    button.addEventListener("click", () => {
        for (let i = 1; i <= radioNum; i++) {
            if(document.getElementById("radio" + i).checked == true){
                counter = i
            }
        }

        document.getElementById("man" + counter).classList.remove("active");
        if(button.classList.contains("next")){
            counter = counter + 1
        } else{
            counter = counter - 1
        }

        if(counter == radioNum + 1){
            counter = 1
        } else if(counter == 0){
            counter = radioNum
        }

        document.getElementById("radio" + counter).checked = true;
        document.getElementById("man" + counter).classList.add("active");


    })
})