/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){

  // create elements
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const rightBtn = document.createElement('div')
  const imgMtns = document.createElement('img')
  const imgComp = document.createElement('img')
  const imgTrees = document.createElement('img')
  const imgTurnt = document.createElement('img')

  // put the elements in the page
  const carouselCtnr = document.querySelector('.carousel-container')
  carouselCtnr.appendChild(carousel);
  carousel.appendChild(leftBtn);
  carousel.appendChild(rightBtn);
  carousel.appendChild(imgMtns);
  carousel.appendChild(imgComp);
  carousel.appendChild(imgTrees);
  carousel.appendChild(imgTurnt);

  // set content
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';
  imgMtns.src = "./assets/carousel/mountains.jpeg";
  imgComp.src = "./assets/carousel/computer.jpeg";
  imgTrees.src = "./assets/carousel/trees.jpeg";
  imgTurnt.src = "./assets/carousel/turntable.jpeg";

  // set styles
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  const photos = [imgMtns, imgComp, imgTrees, imgTurnt]
  // click event handlers for buttons
  leftBtn.addEventListener('click', event => {
    
  })

  rightBtn.addEventListener('click', event => {
    
  })

}

createCarousel();