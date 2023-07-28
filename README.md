# Javascript-projects
1. Random Color Generator - To make this project you should have a good knowledge about [Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events "mdn docs") in javscript and how to add events on elements like buttons for example using       addEventListner() method. Here i used one of the mouse event called click event .
     - An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released        while the pointer is located inside the element.
     - Here you can learn more about [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event "mdn docs")
 
    🤩Here you can see the output [Random Color Generator](https://luminous-axolotl-6d8d0d.netlify.app/ "javascript")
  
2. Todo List Application - To make this project you ahould know how to traverse the DOM tree , events in javascript like how to add events on elements.
   - Important concepts like :-
   - Event object
   - Event Bubbling
   - Event Capturing
   - Event delegation
  
   - These concepts make your work more easier instead of adding event listener to every element, just add the event on the parent element and call an event on a particular target using the .target property of the event object.
   - Event object - for example i added a click event on the button , the moment i clicked on the button , web apis of browser will send the callback function of the click event and event object( object containing the information of event in key-value pairs ) in the callback queue. Now event loop will check if the callstack is empty or not if it is empty  then it will take the callback function with event object and push it into the callstack for execution .
   -  In this project I used all these concepts that I mentioned above👆.  
  
     🤩Here is the output  [Todo list application](https://delightful-genie-d65604.netlify.app/ "javascript")

3. You can easily make this small project by using the knowledge of asyn Js.
   - Well js is a synchronous programming language and single threaded . Actually the asyn features in javscript is provided by the browser like setTimeout,setInterval,promises.
   - In this project i used setInterval method for changing the background color after every one second .
   - setInterval takes 2 arguments ,first is call back function and second one is time .
   - I added click event listner on the button and remember one thing that this setInterval returns an ID , i simply uses this ID .
   - When the user clicks on the button , the click event fires and clears the setInterval ->clearInterval(id);
     
     
[recording.webm](https://github.com/Anjali-Git-Hub/Javascript-projects/assets/122084921/13986c7e-0f6e-423a-9f46-ed4e4723569f)

  

