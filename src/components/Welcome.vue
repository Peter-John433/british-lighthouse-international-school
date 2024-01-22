<script setup>

</script>

<template>
    <div class="container-fluid bg-light py-5 px-0">
        <div class="container-sm">
            <div class="row gap-4">
                <div class="col-12 col-sm-12 col-lg">
                    <div>
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-lg text-col text-center text-sm-start">
                    <div class="fw-bolder text-danger">Welcome to</div>
                    <h3 class="fw-bolder">
                        British Lighthouse School
                    </h3>
                    <!-- <div>
                        British Lighthouse is the first British Day/Boarding school in Lagos,Nigeria.
                    </div> -->
                    <div>
                        We believe that every one of our students is entitled to the highest possible standards of broad eductional provision within a caring, supportive and secure atmosphere where they are actively encouraged to achieve their full potential.
                    </div>
                    <!-- <div>
                        Our Aim at British Lighthouse School is to allow your child discover and develop their unique talents within a disciplined and caring, traditional British School environment.
                    </div> -->
                    <div>
                        At British Lighthouse International College, we aim to enable our students to become confident, independent and well-informed young men and women, prepared to meet the challenges and opportunities of our changing society.
                    </div>
                    <!-- <div>
                        Our Mission Statement is to provide an environment in which each individual is assisted to discover his or her academic potential in study, sports and personal development.
                    </div> -->
                    <router-link :to="{ name: 'Executive'}" class="rout">Read More</router-link>
                </div>
            </div>
        </div>
    </div>

    <router-view />
</template>

<style scoped>
  .text-col{
     font-size: 15px;
  }
  a{
    text-decoration: none;
    padding: 8px 16px;
    border: 1px solid rgb(1, 1, 31);
    background-color: rgb(1, 1, 31);
    color: #fff;
    font-weight: 900;
    text-transform: capitalize;
    transition: all 200ms ease-in-out;
  }
  a:hover{
    background-color: rgb(5, 5, 59);
  }

  h3{
    font-size: 20px;
 }

   @media screen and (max-width: 992px) {
    h3{
        font-size: 18px;
    };
 }

    @media screen and (max-width: 576px) { 
       h3{
          font-size: 16px;
       }
  }
</style>