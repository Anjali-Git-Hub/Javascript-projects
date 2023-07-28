const body=document.body;
const button =document.querySelector("button");
function bgColor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random() *256);
    const blue=Math.floor(Math.random() *256);
    return `rgb(${red},${green},${blue})`

}

const id=setInterval(()=>{
    body.style.background=bgColor();
},1000);

button.addEventListener("click",()=>{
    clearInterval(id);
    button.textContent=body.style.background;
})
