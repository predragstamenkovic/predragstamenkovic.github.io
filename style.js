let slideIndexes = [1, 1, 1, 1];
for (i = 0; i < 4; i++) {
	showSlides(slideIndexes[i], i);
}

// Next/previous controls
function plusSlides(n, s) {
  showSlides(slideIndexes[s] += n, s);
}

// Thumbnail image controls
function currentSlide(n, s) {
  showSlides(slideIndexes[s] = n, s);
}

function showSlides(n, s) {
  let i;
  let slides = document.getElementsByClassName("mySlides" + s);
  let dots = document.getElementsByClassName("demo" + s);
  if (n > slides.length) {slideIndexes[s] = 1}
  if (n < 1) {slideIndexes[s] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexes[s]-1].style.display = "block";
  dots[slideIndexes[s]-1].className += " active";
}