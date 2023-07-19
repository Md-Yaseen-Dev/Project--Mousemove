
const item = document.querySelector(".container");


let offsetX, offsetY;

// item.addEventListener

item.addEventListener("mousedown", (e) => {

    offsetX = e.clientX - item.offsetLeft;

    offsetY = e.clientY - item.offsetTop;

   

})
document.addEventListener("mousemove", (f) => {

    item.style.left = `${f.clientX - offsetX }px`
    item.style.top = `${f.clientY- offsetY}px`

})

