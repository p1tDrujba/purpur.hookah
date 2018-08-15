var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
	slides[currentSlide].className = "slide";
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].className = 'slide showing';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
	showSlides(slideIndex += 1);
}

function minusSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("item");
	var dots = document.getElementsByClassName("slider-dots_item");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += "active";
}
