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
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
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
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne23" aria-expanded="false" aria-controls="flush-collapseOne23">
                                    What do students like about british lighthouse school?
                                </button>
                            </h2>
                            <div id="flush-collapseOne23" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                   <div>
                                        <span class="fw-bolder text-danger ">-</span> Happy atmosphere
                                   </div>
                                   <div>
                                        <span class="fw-bolder text-danger ">-</span> Great school trips 
                                   </div>
                                   <div>
                                        <span class="fw-bolder text-danger ">-</span> The teachers really want to help you
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    From what age do you admit a child into a boarding school?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                   Admitting of students into the boarding school start from 10yrs and above.
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
                                  British Lighthouse run a school Bus system that take every student to their various destinations,
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePand" aria-expanded="false" aria-controls="flush-collapsePand">
                                    Do children wear uniform?
                                </button>
                            </h2>
                            <div id="flush-collapsePand" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Yes, all students from pre school up to Year 12 are required to wear a school uniform. 
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                   Where can i buy branded new uniform from?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    <div>
                                        School uniforms are available to buy at the school premises
                                    </div>
                                    <div class="">
                                        <span class="fw-bolder text-danger">Phone :</span> 0809 772 2542
                                    </div>
                                    <div>
                                        <span class="fw-bolder text-danger">Email :</span> britishlighthouse@gmail.com
                                    </div>
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
                                    Your child's score is always communicated with you after entrance examinations,it's done through a phone call or a direct email.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThre" aria-expanded="false" aria-controls="flush-collapseThre">
                                    Can my child wear jewelry in school?
                                </button>
                            </h2>
                            <div id="flush-collapseThre" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                   <div>
                                       We ask that pupils do not wear jewelry in school.
                                   </div>
                                   <div>
                                       Small plastic earrings can be worn by female students. sharp object a prohibitted in the school as schools are busy places and we find that jewelry can cause unnecessary accidents.
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    What happen if my child has a Medical/Dental appointment
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                   <div>
                                    Please try to arrange medical appointments out side of school time. If this is unavoidable we ask that you bring the appointment letter to the school office so it can be recorded on the register.
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreee" aria-expanded="false" aria-controls="flush-collapseThreee">
                                    What do I do if I need to see a teacher?
                                </button>
                            </h2>
                            <div id="flush-collapseThreee" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                    Staff can be contacted through the head of Academics. This allows parents/guidiance to correspond with their child’s teacher.
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
                                   Only current students are allow to pay on installment, newly admitted students are to make full payment.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                   What are the school hours?
                                </button>
                            </h2>
                            <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                   <div>
                                      <span class="fw-bolder text-danger">-</span> The school opens for drop offs at 07:00 am 
                                   </div>
                                   <div>
                                      <span class="fw-bolder text-danger">-</span> The school day begins at 07:40 and ends at 15:30 pm 
                                   </div>
                                   <div>
                                       <span class="fw-bolder text-danger">-</span> The school hours are the same for Primary and Secondary phases 
                                   </div>
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
                                    The school scheduled wednesday for all students of to participate in sport activities,such as football, table tennis, basketball,volley ball e.tc
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
                                    British lighthouse is situated at No. 35/39 Adebayo makuolu street, Anthony, Lagos state
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
                                    No, all pre-school pupils closed by 14:00pm.
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
                                   Application form are available in the school or kindly click on the admission process for proper guide.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePin" aria-expanded="false" aria-controls="flush-collapsePin">
                                    What are the main strength of the school?
                                </button>
                            </h2>
                            <div id="flush-collapsePin" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-2 p-lg-4">
                                   <div>
                                      <span class="fe-bolder text-danger">-</span> Keeping pupils/students challenged and interested in learning
                                   </div>
                                   <div>
                                      <span class="fe-bolder text-danger">-</span> Committed teachers with high expectations of pupils
                                   </div>
                                   <div>
                                       <span class="fe-bolder text-danger">-</span> Adherence to the ideal of an all-round education 
                                   </div>
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
                                    Discount are for families with two or more children schooling in british lighthouse school.
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
                                    Examination is 2nd of every month and as required by the applicant.
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
                                   The entrance examination includes sujects such as maths,english and general knowledge.
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
    background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../assets/img/british-logo.png);
    width: 100%;
    height: 500px;
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

    @media screen and (max-width: 992px) {
      
    }

    @media screen and (max-width: 576px) {   
      .fags-container{
         height: 450px;
      }
    }

</style>