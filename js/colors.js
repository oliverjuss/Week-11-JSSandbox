const myButton = document.querySelector('button');
const colors = ['red','green','blue',"yellow"];
const myBox = document.querySelector('.box');

myButton.addEventListener('click', changeColor);

function changeColor()
{
    
    let randomIndex = Math.floor(Math.random() * colors.length);
    myBox.style.backgroundColor = colors[randomIndex];
    console.log(myBox.style.backgroundColor);
}