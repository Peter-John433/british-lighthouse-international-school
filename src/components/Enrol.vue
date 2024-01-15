<script setup>

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
                           Pre-School
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
                 <router-link :to="{name: 'home'}">
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
</style>