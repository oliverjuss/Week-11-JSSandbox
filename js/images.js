const currentMainImage = document.querySelector('.gallary-image4 img');
const imgesToChooseFrom = document.querySelectorAll(".gallary img");

console.log(imgesToChooseFrom);

imgesToChooseFrom.forEach(img = addEventListener("click", imgaeClick));

function imgaeClick(e)
{
    imgesToChooseFrom.forEach(img => img.style.opacity = 1);


    console.log(e.target);
    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}