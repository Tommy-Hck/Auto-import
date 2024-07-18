/* ** */
/* GLOBAL VARIABLES */
/* ** */

// Table img
const slides = [
	{
		"image":"slide1.jpeg",
		"tagLine":""
	},
	{
		"image":"slide2.jpg",
		"tagLine":""
	},
	{
		"image":"slide3.jpeg",
		"tagLine":""
	}
]


// Arrows path
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Dots path
const parentDot = document.querySelector(".dots");

let indexSlide = 0; //index slide default
const nbSlide = slides.length; //number slide

// Update current slide
const updateSlide = () => {
  const bannerImg = document.querySelector(".banner-img");
  bannerImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
  const bannerText = document.querySelector("#banner p");
  bannerText.innerHTML = slides[indexSlide].tagLine;
};

/* EVENT LISTENERS */

// Elements slide
// Change slide right with function addEventListener click
arrowRight.addEventListener("click", () => {
  parentDot.children[indexSlide].classList.remove("dot_selected");
  indexSlide++; //incrementation

  if (indexSlide > nbSlide - 1) {
    //return to first slide if indexSlide > slide number
    indexSlide = 0;
  }
  updateSlide(); //function callback
  parentDot.children[indexSlide].classList.add("dot_selected");
});

// Change slide left with function addEventListener click
arrowLeft.addEventListener("click", () => {
  parentDot.children[indexSlide].classList.remove("dot_selected");
  indexSlide--; //decrementation
  if (indexSlide < 0) {
    //return to last slide if indexSlide < 0
    indexSlide = nbSlide - 1;
  }
  updateSlide(); //function callback
  parentDot.children[indexSlide].classList.add("dot_selected");
});

/* ** */
/* CODE SEQUENCE */
/* ** */

// Elements dots
// Add bullet point
const initDots = () => {
  for (i = 0; i < nbSlide; i++) {
    const dot = document.createElement("div"); //create element div
    dot.classList.add("dot"); //add class "dot" to div
    if (i === 0) {
      dot.classList.add("dot_selected"); //add class "dot_selected" to div if i = indexSlide
    }
    parentDot.appendChild(dot); //add "dot" to the container
  }
};

initDots();
