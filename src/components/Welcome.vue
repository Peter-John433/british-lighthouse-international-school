<script setup>

</script>

<template>
    <div class="container-fluid bg-light py-5 px-0">
        <div class="container-sm">
            <div class="row">
                <div class="col-12 col-sm-12 col-lg-6">
                    <div>
                        <img src="@/assets/img/Private-education.jpg" class="img-fluid" alt="">
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-lg-6 text-col text-center text-sm-start p-2">
                    <div>Welcome to</div>
                    <h3 class="fw-bolder">
                        British Lighthouse School
                    </h3>
                    <div>
                        British Lighthouse is the first British Day/Boarding school in Lagos,Nigeria.
                    </div>
                    <div>
                        Our Aim at British Lighthouse School is to allow your child discover and develop their unique talents within a disciplined and caring, traditional British School environment.
                    </div>
                    <div>
                        Our Mission Statement is to provide an environment in which each individual is assisted to discover his or her academic potential in study, sports and personal development.
                    </div>
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
</style>