const button=document.querySelector("button");
const body=document.body;
const h1=document.querySelector("h1");
function randomColor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`
}

button.addEventListener("click",()=>{
    const color=randomColor();
    body.style.background=color;
    h1.textContent=color;
})