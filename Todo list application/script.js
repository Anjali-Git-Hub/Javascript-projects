const todoForm= document.querySelector(".todo-form");
// console.log(todoForm)
const ul=document.querySelector("#todo ul");
const inputText=document.querySelector(".todo-form input[type='text']")
// console.log(todoForm)
const buttons=document.querySelector(".btns");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

 const newLi=document.createElement("li");
 const innerHtml=`<span>${inputText.value}</span>
 <div class="btns">
 <button class="btnn done">Done</button>
 <button class="btnn edit">Edit</button>
 <button class="btnn remove">Remove</button>
 </div>`;
newLi.innerHTML=innerHtml;
ul.append(newLi);
inputText.value=""
})
ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const span=e.target.parentNode.previousElementSibling;
        console.log(span)
        // span.style.textDecoration="line-through";
    }
    if(e.target.classList.contains("remove")){
        const li=e.target.parentNode.parentNode;
        li.remove();
    }
    if(e.target.classList.contains("edit")){
        inputText.value=e.target.parentNode.previousElementSibling.textContent;
        inputText.focus();
        const li=e.target.parentNode.parentNode;
        li.remove();
    }
})






