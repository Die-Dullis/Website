let slideIndex = 1;
let alredyclicked = false;
showSlides();


function plusSlides(n) {
    showSlides(slideIndex += n);
    alredyclicked = true;
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
    alredyclicked = true;
}

function timer(){
    setTimeout(1000); // Change image every 4 seconds
    if (alredyclicked = flase){
        showSlides();
    }
    else{
        alredyclicked = false
    }

}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
    timer() 
}

