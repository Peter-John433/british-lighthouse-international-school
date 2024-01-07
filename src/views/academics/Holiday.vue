<script setup>
  import 'animate.css'
</script>

<template>
   <div class="container-fluid bg-white">
      <div class="container">
         <div class="row">
            <div class="text-center display-1 pt-5  animate__animated animate__slow animate__tada animate__infinite">
                😠
            </div>
            <div class="col col-md-11 col-lg-11 mx-auto four-o-four pt-3 fw-bold fs-3">
                4 0 4 page
                <div class="text-center fw-light fs-4 text-secondary">
                   Page Not Found
               </div>
            </div>
            <div class="fs-6 text-center text-secondary text">
                 <div>
                    The page you are looking for doesn't exist or an other error occurred.
                 </div>
                 <div>
                    Go back, or head over to <RouterLink to="/">British Lighthouse Homepage</RouterLink> to choose a new direction.
                 </div>
            </div>
         </div>
      </div>
   </div>
   <RouterView />
</template>

<style scoped>
  .container-fluid{
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
  }

  .four-o-four{
     text-align: center;
     padding: 20px;
     color: red;
     font-size: 18px;
     font-style: italic;
  }
  .text{
     font-weight: bolder;
  }
</style>