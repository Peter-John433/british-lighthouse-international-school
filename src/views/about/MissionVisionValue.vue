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
                <div class="col-11 col-sm-6 col-lg-12 container-text">
                    <h3 class="py-3 px-5">Our Vision</h3>
                    <p class="py-5 px-3">
                       Is "developing the individual strength of our students through our highly experienced teachers to ensure that they are prepare for the next important stage in their lives".
                    </p>
                </div>
                <div class="col-11 col-sm-6 col-lg-12 container-text">
                    <h3 class="py-3 px-5">Our Mission</h3>
                    <p class="py-5 px-3">
                        In line with our vision, British Lighthouse International College has a mission "To empower students to achieve academic excellence and realize their optimum potential through intensive teaching methods using modern technology".
                    </p>
                </div>
                <div class="col-11 col-sm-6 col-lg-12 container-text">
                    <h3 class="py-3 px-5">Aim and Objectives</h3>
                    <p class="py-sm-5 px-3">
                       The British Lighthouse International Colleage community is one in which each student's contribution is valued and respected. We believe that every one of our students is entitled to the highest possible standards of broad educational provision within a caring, supportive and secure atmosphere where they are actively encouraged to achieved their full potential.
                       <p>
                         At British Lighthouse International College, we aim to enable our students to become confident, independent and well-informed young men and women, prepared to meet the challenges and opportunities of our changing society. These aims are achieved through our objectives.</p>
                    </p>
                </div>
                <!-- <div class="col-11 col-sm-6 col-lg-12 container-text border border-black">
                    <h3 class="py-3 px-5">Our Values</h3>
                    <p class="py-5 px-3">
                        
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
                </div> -->
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
    
    .container-text{
        border: 1px dashed rgb(1, 1, 31);
        border-top: 1px solid yellow;
    }
    .container-text h3{
        /* background-color: rgb(1, 1, 31); */
        /* color: white; */
        background-color: yellow;
        color: rgb(1, 1, 31);
        font-weight: 800;
        text-align: center;
    }
 
 
    @media screen and (max-width: 992px) {
      
    }

    @media screen and (max-width: 576px) {
      .executive-container h1{
        font-size: 18px;
       }

        .container-text h3{
        font-size: 16px;
       }
    } 

</style>