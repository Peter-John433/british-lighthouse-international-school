<script setup>
import { ref } from 'vue'
    let slideIndex = ref(0);
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
</script>

<template>
   <div class="container-fluid">
      <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-lg-12">
                    <div class="slideshow-container">
                        
                        <div class="mySlides fade">
                            <div class="numbertext">1 / 3</div>
                            <img src="@/assets/img/bakery.jpeg">
                            <div class="text">Caption Text</div>
                        </div>
                        
                        <div class="mySlides fade">
                            <div class="numbertext">2 / 3</div>
                            <img src="@/assets/img/boarding-2.jpg">
                            <div class="text">Caption Two</div>
                        </div>
                        
                        <div class="mySlides fade">
                            <div class="numbertext">3 / 3</div>
                            <img src="@/assets/img/boarding-3.jpg">
                            <div class="text">Caption Three</div>
                        </div>
                    </div>
                        <div>
                            <span class="dot"></span> 
                            <span class="dot"></span> 
                            <span class="dot"></span> 
                        </div>   
                </div>
            </div>
         
        </div>
   </div>
</template>

<style scoped>
/* .mySlides {display: none;} */
  /* img {vertical-align: middle;} */

/* Slideshow container */
.slideshow-container {
  max-width: 100%;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
img{
    height: 80vh;
    object-fit: cover;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>