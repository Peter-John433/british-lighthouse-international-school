<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/partner.vue';
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
</script>

<template>
    <Header/>
   <!-- Fags-container -->
   <div class="container-fluid fags-container">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2 animate__animated animate__slow animate__pulse animate__infinite">
                   FAQs
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
    <div class="container-fluid-sm pt-5 fags-container-2 bg-white">
        <div class="container">
            <h3 class="py-3 ps-lg-0 text-capitalize text-center text-lg-start fs-3">frequently asked questions</h3>
            <div class="row">
                <div class="col col-sm col-lg">
                    <div class="accordion " id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    From what age do you admit a child into a boarding school?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                   Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Do you run a school bus system?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                               <div class="accordion-body p-2 p-lg-4">
                                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Do you admit into year 11?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                   Can i know my child's score after the extrance examination?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThre" aria-expanded="false" aria-controls="flush-collapseThre">
                                    Do you provide lunch?
                                </button>
                            </h2>
                            <div id="flush-collapseThre" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    What is the percentage of day to boarding students?
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreee" aria-expanded="false" aria-controls="flush-collapseThreee">
                                    Do you offer Nigerian languages in your Elementary and Secondary School?
                                </button>
                            </h2>
                            <div id="flush-collapseThreee" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTip" aria-expanded="false" aria-controls="flush-collapseTip">
                                    Can school fees be paid in installments?
                                </button>
                            </h2>
                            <div id="flush-collapseTip" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    What curriculum does the school provide?
                                </button>
                            </h2>
                            <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTop" aria-expanded="false" aria-controls="flush-collapseTop">
                                   What types of sport does the school offer?
                                </button>
                            </h2>
                            <div id="flush-collapseTop" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePaw" aria-expanded="false" aria-controls="flush-collapsePaw">
                                    Where is the school situated?
                                </button>
                            </h2>
                            <div id="flush-collapsePaw" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePan" aria-expanded="false" aria-controls="flush-collapsePan">
                                    Is after-School compulsory in Pre-school?
                                </button>
                            </h2>
                            <div id="flush-collapsePan" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseWeek" aria-expanded="false" aria-controls="flush-collapseWeek">
                                    How do i get the application form?
                                </button>
                            </h2>
                            <div id="flush-collapseWeek" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePin" aria-expanded="false" aria-controls="flush-collapsePin">
                                    When and where can i get the school uniform?
                                </button>
                            </h2>
                            <div id="flush-collapsePin" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Are there any discount on school fees or available payment?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFree" aria-expanded="false" aria-controls="flush-collapseFree">
                                    When is your entrance exammination date?
                                </button>
                            </h2>
                            <div id="flush-collapseFree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFip" aria-expanded="false" aria-controls="flush-collapseFip">
                                    What subject do the entrance examminations cover for new students?
                                </button>
                            </h2>
                            <div id="flush-collapseFip" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <!--  -->

   <!-- closed -->
    <Blic />
    <Partner />
    <Footer/>
</template>

<style scoped>

.fags-container{
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
    .fags-container h1{
        font-weight: bolder;
        border: 5px solid yellow;
        text-align: center;
        background-color: rgb(1, 1, 31);

    }

    .fags-container-2 h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 2.4rem;
    }  


    .accordion-header h2{
        color: rgb(1, 1, 31);
    }
    .accordion-button{
        font-weight: 700;
        color: rgb(1, 1, 31);
    }

    /* @media screen and (max-width: 992px) {
      
    }

    @media screen and (max-width: 576px) {   
      
    } */

</style>