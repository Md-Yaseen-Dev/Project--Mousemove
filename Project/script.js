
const item = document.querySelector(".container");


let offsetX, offsetY;

// item.addEventListener



const move = (e) => {

    item.style.left = `${e.clientX - offsetX}px`
    item.style.top = `${e.clientY - offsetY}px`


}

//mousedown == mouse-clicked it move the item
item.addEventListener("mousedown", (e) => {

    offsetX = e.clientX - item.offsetLeft;

    offsetY = e.clientY - item.offsetTop;


    document.addEventListener("mousemove", move);

});
// mouseup == when mouse realse will  remove the item
document.addEventListener("mouseup",()=>{

    document.removeEventListener("mousemove", move);

})


// this code work for mouse mover

// document.addEventListener("mousemove", (event) => {

//     item.style.left = `${event.clientX}px`
//     item.style.top = `${event.clientY}px`

// })

