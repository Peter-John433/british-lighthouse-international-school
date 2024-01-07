<script setup>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
</script>

<template>
    <Header/>
    <!-- Executive-container -->
    <div class="container-fluid executive-container">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2 animate__animated animate__slow animate__pulse animate__infinite">
                    Mission | Vision | Values
                </h1>
            </div>
        </div>
    </div>
   <!-- closed -->
   <div class="container-fluid-sm pt-5 bg-white">
       <div class="container">
           <div class="row row-gap-5 justify-content-center justify-content-sm-start ">
                <div class="col-11 col-sm-6 col-lg-12 container-text border border-black">
                    <h3 class="py-3 px-5">Our Mision</h3>
                    <p class="py-5 px-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia. Accusantium voluptas ipsum tempore nemo, quia quaerat dignissimos quae, quas ratione quod maiores quidem odit quisquam quis vitae, deserunt reiciendis. Voluptas commodi rem atque, omnis necessitatibus voluptates doloremque expedita saepe. Iure, est? Est in, qui iste libero nesciunt distinctio sunt!
                    </p>
                </div>
                <div class="col-11 col-sm-6 col-lg-12 container-text border border-black">
                    <h3 class="py-3 px-5">Our Vision</h3>
                    <p class="py-5 px-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia. Accusantium voluptas ipsum tempore nemo, quia quaerat dignissimos quae, quas ratione quod maiores quidem odit quisquam quis vitae, deserunt reiciendis. Voluptas commodi rem atque, omnis necessitatibus voluptates doloremque expedita saepe. Iure, est? Est in, qui iste libero nesciunt distinctio sunt!
                    </p>
                </div>
                <div class="col-11 col-sm-6 col-lg-12 container-text border border-black">
                    <h3 class="py-3 px-5">Aim</h3>
                    <p class="py-5 px-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia. Accusantium voluptas ipsum tempore nemo, quia quaerat dignissimos quae, quas ratione quod maiores quidem odit quisquam quis vitae, deserunt reiciendis. Voluptas commodi rem atque, omnis necessitatibus voluptates doloremque expedita saepe. Iure, est? Est in, qui iste libero nesciunt distinctio sunt!
                    </p>
                </div>
                <div class="col-11 col-sm-6 col-lg-12 container-text border border-black">
                    <h3 class="py-3 px-5">Our Values</h3>
                    <p class="py-5 px-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia. Accusantium voluptas ipsum tempore nemo, quia quaerat dignissimos quae, quas ratione quod maiores quidem odit quisquam quis vitae, deserunt reiciendis. Voluptas commodi rem atque, omnis necessitatibus voluptates doloremque expedita saepe. Iure, est? Est in, qui iste libero nesciunt distinctio sunt!
                    </p>
                </div>
                <div class="col-11 col-sm-6 col-lg-12 container-text border border-black">
                    <h3 class="py-3 px-5">Code of Conduct</h3>
                    <p class="py-5 px-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia. Accusantium voluptas ipsum tempore nemo, quia quaerat dignissimos quae, quas ratione quod maiores quidem odit quisquam quis vitae, deserunt reiciendis. Voluptas commodi rem atque, omnis necessitatibus voluptates doloremque expedita saepe. Iure, est? Est in, qui iste libero nesciunt distinctio sunt!
                    </p>
                </div>
                <div class="col-11 col-sm-6 col-lg-12 container-text border border-black">
                    <h3 class="py-3 px-5">Core Values</h3>
                    <p class="pt-5 px-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia. Accusantium voluptas ipsum tempore nemo, quia quaerat dignissimos quae, quas ratione quod maiores quidem.
                        <ul class="pb-5">
                            <li>
                                Lorem, ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem, ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem, ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem, ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem, ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem, ipsum dolor sit amet consectetur.
                            </li>
                        </ul>
                    </p>
                </div>
           </div>
       </div>
   </div>
   <!--closed  -->
    <Blic />
    <Partner />
   <Footer/>
</template>

<style scoped>
 .executive-container{
    background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../assets/img/britishlighthouse-2.jpg);
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    background-repeat: no-repeat;
    background-size: cover;
    }
 .executive-container h1{
        font-weight: bolder;
        border: 5px solid yellow;
        text-align: center;
        background-color: rgb(1, 1, 31);

    }
    
    .container-text h3{
        background-color: rgb(1, 1, 31);
        color: white;
        font-weight: 800;
        text-align: center;
    }
 
 /* 
    @media screen and (max-width: 992px) {
      
    }

    @media screen and (max-width: 576px) {
     
    } */

</style>