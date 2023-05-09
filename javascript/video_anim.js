//----------------------------
//------Video Animation-------
//----------------------------
const currentFrame = (index) => `./Images/Animations/${fileName}/${fileName}_${index.toString()}.png`;
var frame = 10000;

var rotateImage =  document.querySelector(".main-img");
var imageAmt = 10015;
var fileName = "Computer Rotate"
var delay = 30


// function setVars(image, name, frames, imgDelay){
//     rotateImage =  document.querySelector(image);
//     imageAmt = frames;
//     delay = imgDelay;
//     fileName = name;
// }

function paint(){
    frame++;
    rotateImage.src = currentFrame(frame);
    // console.log(rotateImage.src)

    if(imageAmt > frame){
        setTimeout(() => {
            window.requestAnimationFrame(paint);
        }, delay);
    }
}

if(document.getElementById("front-page-img")){
    window.requestAnimationFrame(paint);
}