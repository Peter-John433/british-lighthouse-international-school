<!-- <script setup>

</script>

<template>
   <div>
      <div class="container-fluid bg-white py-5">
         <div class="container p-0">
            <div class="h2 display-5 text-uppercase text-center mb-3">Enrol in our school</div>
            <div class="row row-gap-4 row-gap-lg-0  ">
               <div class="col-12 col-sm-6 col-lg-3">
                 <router-link :to="{ name: 'Pre' }">
                     <div class="height">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text">
                           Senior-School
                        </div>
                     </div>
                 </router-link>
               </div>

               <div class="col-12 col-sm-6 col-lg-3">
                 <router-link :to="{name: 'Junior'}">
                     <div class="height">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text">
                           Junior-School
                        </div>
                     </div>
                 </router-link>
               </div>

               <div class="col-12 col-sm-6 col-lg-3">
                 <router-link :to="{ name: 'Senior' }">
                     <div class="height">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text">
                           Senior-School
                        </div>
                     </div>
                 </router-link>
               </div>

               <div class="col-12 col-sm-6 col-lg-3">
                 <router-link :to="{name: 'home'}">
                     <div class="height">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text">
                           Advance-School
                        </div>
                     </div>
                 </router-link>
               </div>
            </div>
         </div>
      </div>
   </div>

   <router-view />
</template>

<style scoped>
   .h2{
      font-weight: 900;
     color: rgb(1, 1, 31);
   }

   img{
      width: 100%;
      height: 250px;
      object-fit: cover;
   }
   .height{
      position: relative;
      transition: all 200ms ease-in-out;
      border: 2px solid #000;
      background: rgba(0, 0, 0, 0.4);
   }

   .height:hover{
      background-color: rgba(0, 0, 0, 0.4);
      box-shadow: 1px 1px 1px 2px rgba(8, 8, 8, 0.4);
   }
   .body-text{
      position: absolute;
      bottom: 10%;
      left: 10%;
      font-size: 20px;
      font-weight: bold;
      /* color: rgb(1, 1, 31); */
      color: #000;
      z-index: 10;
   }
</style> -->
<script setup>

</script>

<template>
   <div>
      <div class="container-fluid bg-white  pt-5 ">
         <div class="container py-5">
            <div class="row mx-auto text-center">
               <div class="col col-sm-6 col-lg-4 d-flex flex-column flex-lg-row justify-content-center align-items-center ">
                 <router-link :to="{name: 'Pre'}">
                     <div class="height-1">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text-1 d-flex justify-content-center align-items-center ">
                            <div class="first-body-text text-center">
                               <h5 class="fw-bold">Pre School</h5>
                            </div>
                            <div class="arrow">
                                <img src="@/assets/img/Chevron.png" alt="">
                            </div>
                        </div>
                     </div>
                 </router-link>
               </div>

               <div class="col col-sm-6 col-lg-4 d-flex flex-column flex-lg-row justify-content-center align-items-center">
                 <router-link :to="{name: 'Junior'}">
                     <div class="height-2">
                        <img src="@/assets/img/about-photos.jpg" class="img-fluid" alt="">
                        <div class="body-text-2 d-flex justify-content-center align-items-center ">
            
                           <div class="second-body-text">
                                <h5 class="fw-bold text-center">Junior School</h5>
                           </div>
                           <div class="arrow">
                                <img src="@/assets/img/Chevron.png" alt="">
                            </div>
                        </div>
                     </div>
                 </router-link>
               </div> 

               <div class="col col-sm col-lg-4 d-flex flex-column flex-lg-row justify-content-center align-items-center">
                 <router-link :to="{name: 'Senior'}">
                     <div class="height-3">
                        <img src="@/assets/img/british-1.jpg" class="img-fluid" alt="">
                        <div class="body-text-3 d-flex justify-content-center align-items-center">
                            
                            <div class="third-body-text">
                                <h5 class="fw-bold text-center">Senior School</h5>
                            </div>
                            <div class="arrow">
                                <img src="@/assets/img/Chevron.png" alt="">
                            </div>
                        </div>
                     </div>
                 </router-link>
               </div>
            </div>
         </div>
      </div>
   </div>

   <router-view />
</template>

<style scoped>
   .h2{
      font-weight: 900;
     color: rgb(1, 1, 31);
   }

   img{
      width: 100%;
      height: 250px;
      object-fit: cover;
   }
   .height-1{
      position: relative;
      transition: all 200ms ease-in-out;
      width: 380px;
      height: 230px;
   }
   .height-1 img{
      height: 230px;
   }
   
   .body-text-1{
      position: absolute;
      bottom: 0%;
      left: 0%;
      right: 0%;
      top: 0%;
      font-size: 14px;
      font-weight: bold;
      /* color: #fff; */
      color: rgb(1, 1, 31);
      z-index: 99;
      background-color: rgb(227, 252, 0, .5);
   }

   .body-text-1 img{
      width: 100px;
      height: 60px;
      object-fit: contain;
   }
   .first-body-text{
      width: 300px;
      padding: 0;
   }



   .height-2{
      position: relative;
      transition: all 200ms ease-in-out;
      width: 380px;
      height: 230px;
   }
   .height-2 img{
      height: 230px;
   }

   .body-text-2{
      position: absolute;
      bottom: 0%;
      left: 0%;
      right: 0%;
      top: 0%;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.6);
   }
    
   .body-text-2 img{
      width: 100px;
      height: 60px;
      object-fit: contain;
   }
   .second-body-text{
      width: 300px;
      padding: 0;
   }



   .height-3{
      position: relative;
      transition: all 200ms ease-in-out;
      width: 380px;
      height: 230px;
   }
   .height-3 img{
      height: 230px;
   }

   .body-text-3{
      position: absolute;
      bottom: 0%;
      left: 0%;
      right: 0%;
      top: 0%;
      font-size: 14px;
      font-weight: bold;
      color: rgb(1, 1, 31);
      z-index: 99;
      background-color: rgb(227, 252, 0, .5);
   }
    
   .body-text-3 img{
      width: 100px;
      height: 60px;
      object-fit: contain;
   }
   .third-body-text{
      width: 300px;
      padding: 0;
   }

   .arrow{
      position: absolute;
      bottom: -7%;
      z-index: 99;
   }

   .arrow img{
      width: 30px;
      height: 30px;
      border: 1px solid black;
      border-radius: 50%;
      padding: 5px;
      background-color: white;
   }

   @media screen and (max-width: 992px) {
    .arrow{
      position: absolute;
      bottom: 10%;
      
     }
        
    }

    @media screen and (max-width: 576px) {
     .arrow{
      position: absolute;
      bottom: 10%;
      
     }
    }
</style>