//----------------------------
//-------Sticky Nav Bar-------
//----------------------------
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
})

//----------------------------
//-------Text Animation-------
//----------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if(entry.isIntersecting){
            // if(entry.target.classList.contains('animate') && !entry.target.classList.contains('show')){
            //     paint('main-img', 'Computer Rotate', 10015, 35)
            // }
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));