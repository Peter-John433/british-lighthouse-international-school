<script setup>

</script>

<template>
   <div>
      <div class="container-fluid bg-white  pt-5">
         <div class="container py-5">
            <div class="row row-gap-4 row-gap-sm-0  ">
               <div class="col col-sm-12 col-lg-12 d-flex flex-column flex-lg-row justify-content-center align-items-center ">
                 <router-link :to="{name: 'home'}">
                     <div class="height-1">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text-1 d-flex justify-content-center align-items-center ">
                            <img src="@/assets/img/calendar.png" class="img-fluid" alt="">
                            <div class="first-body-text">
                               <h5 class="fw-bold">School Calendar</h5>
                                <div>Programme of school news and events...</div>
                            </div>
                            <div class="arrow">
                                <img src="@/assets/img/Chevron.png" alt="">
                            </div>
                        </div>
                     </div>
                 </router-link>

                 <router-link :to="{name: 'home'}">
                     <div class="height-2">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text-2 d-flex justify-content-center align-items-center ">
                           <img src="@/assets/img/clipboard-variant-with-pencil-and-check-mark-variant.png" class="img-fluid" alt="">
                           <div class="second-body-text">
                                <h5 class="fw-bold">Currently Enrolling</h5>
                                <div>Programmes</div>
                           </div>
                           <div class="arrow">
                                <img src="@/assets/img/Chevron.png" alt="">
                            </div>
                        </div>
                     </div>
                 </router-link>

                 <router-link :to="{name: 'home'}">
                     <div class="height-3">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/img/newsletter.png" class="img-fluid" alt="">
                            <div class="third-body-text">
                                <h5 class="fw-bold">Newsletter</h5>
                                <div>
                                    School news and updates
                                </div>
                            </div>
                            <div class="arrow">
                                <img src="@/assets/img/Chevron.png" alt="">
                            </div>
                        </div>
                     </div>
                 </router-link>
               </div>

               <!-- <div class="col-12 col-sm col-lg-4">
                 <router-link :to="{name: 'home'}">
                     <div class="height">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text">
                           Senior-School
                        </div>
                     </div>
                 </router-link>
               </div> -->

               <!-- <div class="col-12 col-sm col-lg-4">
                 <router-link :to="{name: 'home'}">
                     <div class="height">
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                        <div class="body-text">
                           Advance-School
                        </div>
                     </div>
                 </router-link>
               </div> -->
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
      height: 180px;
   }
   .height-1 img{
      height: 180px;
   }
   
   .body-text-1{
      position: absolute;
      bottom: 0%;
      left: 0%;
      right: 0%;
      top: 0%;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      z-index: 99;
      background-color: rgba(252, 0, 0, 0.6);
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
      height: 180px;
   }
   .height-2 img{
      height: 180px;
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
      height: 180px;
   }
   .height-3 img{
      height: 180px;
   }

   .body-text-3{
      position: absolute;
      bottom: 0%;
      left: 0%;
      right: 0%;
      top: 0%;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      background-color: rgba(252, 0, 0, 0.6);
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
      bottom: -10%;
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