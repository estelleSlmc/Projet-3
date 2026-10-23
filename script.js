const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const img = document.querySelector('.banner-img');
const description = document.getElementById('description');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = Array.from(document.querySelectorAll('.dot'));


let currentSlide = 0;

function afficherSlide(slideIndex) {
	img.src=`./assets/images/slideshow/${slides[slideIndex].image}`;
	description.innerHTML=slides[slideIndex].tagLine;

	dots.forEach((dot, x) => {
	//avec dot l'élément de la liste et x la position dans le tableau 'dots'
		dot.classList.toggle("dot_selected", x === slideIndex);
	});
}

arrowLeft.addEventListener('click', () => {
	currentSlide --;
		if (currentSlide < 0){
		currentSlide = slides.length-1;
	};
	afficherSlide(currentSlide);
});

arrowRight.addEventListener('click', () => {
	currentSlide ++;
		if (currentSlide > slides.length-1){
		currentSlide = 0;
	};
	afficherSlide(currentSlide);
});
