//1. How would you change the text content of a specific element on the page using JavaScript?
const change = document.querySelector('h1')
change.textContent = "Javascript"
console.log(change);

//2. How can you change the background color of a <div> element when a button is clicked?
let element = document.querySelector('#container')
const elementclick = document.querySelector('#btn')
elementclick.onclick = function () {
    element.style.background = "gray"
}

//3. What steps would you take to toggle the visibility of a <p> element by adding and removing a CSS class using JavaScript?

let toggle=document.querySelector('.btn1')
toggle.addEventListener('click',function Visibility() {
    const toggle=document.getElementById("Paragraph");
    toggle.classList.add("hidden")
    
})

//6. How would you modify the src attribute of an <img> element to display a different image when a button is clicked?

let element2=document.querySelector('.btn2')
element2.addEventListener("click",function changeImage() {
    document.getElementById("Image").src = "assets/image/img-2.jpeg";
})

//4. How can you dynamically add a new list item to an unordered list using JavaScript?

// let element1=document.createElement('ul')
// element1.innerHTML=`<li>one-two</li>`
// console.log(element1);


//5. What approach would you use to remove a specific list item from an unordered list when a button next to it is clicked?
// let unorderedlist=document.querySelector('.list')


//7. How can you update the text content of a <p> element based on user input from a text field when a button is clicked?

const inputtext = document.getElementById("gettext");
const button = document.getElementById("btn3");
const paragraph = document.getElementById("output");

button.addEventListener("click",function(){
    paragraph.textContent=inputtext.value
})