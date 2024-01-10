<script setup>

</script>

<template>
    <div>
        <div class="container-fluid bg-white p-0">
            <div class="container-fluid p-0 apply-container">
                <div class="row flex-column flex-sm-row gap-3 gap-sm-0 align-items-center ">
                    <div class="col col-sm-6 col-lg-3">
                        <div class="img">
                            <img src="@/assets/img/about-photos.jpg" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div class="col col-sm-6 col-lg-6">
                        <div class="ps-3 ps-lg-5 text">
                            <h2 class=" fw-bold">Apply for Admission</h2>
                            <div>
                                We are one of the best British international schools in Lagos and Nigeria at large, we provide a well-rounded education that enables our students to develop vital life skills and excel academically.Visit our site <span>&#8594;</span>
                            </div>
                        </div>
                    </div>
                    <div class="col col-sm col-lg-3">
                        <router-link :to="{ name: 'AdmissionProcess' }" class="border ms-3 ms-sm-0 p-3 apply">Apply Now</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <router-view />
</template>

<style scoped>
  .apply-container{
    background-color: yellow;
    overflow: hidden;
  }
  img{
    width: 100%;
  }

  a{
    text-decoration: none;
    margin-left: 20px;
    width: 400px;
    background-color: rgb(1, 1, 31);
    color: #fff;
  }
  a:hover{
    background-color: rgb(5, 5, 59);
  }
  .text{
    font-size: 16px;
  }

  h2{
    color: rgb(1, 1, 31);
  }
  
  @media screen and (max-width: 992px) {
      .text{
        font-size: 10px;
      }

      a{
        margin-left: 0;
      }
   }
   @media screen and (max-width: 576px) {
      .img{
        display: none;
      }

      .text{
        font-size: 15px;
      }
   }
     
</style>