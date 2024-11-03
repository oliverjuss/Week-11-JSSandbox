const myButton = document.querySelector('button')
const MainImg = document.querySelector('img')
const imagesToChooseFrom = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg','images/pic5.jpg', 'images/pic6.jpg'];

myButton.addEventListener('click', randomImg);

function randomImg()
{
    let randomImg = Math.floor(Math.random() * imagesToChooseFrom.length);
    MainImg.src = imagesToChooseFrom[randomImg];
    console.log(MainImg);
}

