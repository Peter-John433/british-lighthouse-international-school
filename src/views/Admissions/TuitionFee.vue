<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    import { ref } from 'vue'

    const schoolTrips = ref([
        'Educational Experiences',
        'Relationships With Classmates & Teachers',
        ' New Perspectives & Cultures',
        'Unique Experiences & Activities',
        'Social Interaction Skills',
        'Independence and Responsibility'
    ])
</script>

<template>
    <Header/>
   <!-- Executive-container -->
   <div class="container-fluid executive-container">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2 animate__animated animate__slow animate__pulse animate__infinite">
                    Tuition and payment
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm bg-white Executive-director-speech-container">
        <div class="container py-5 px-3 bg-light">
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg text-center text-lg-start ">
                    <div class="py-5">
                        <h4>
                           Tuition Fee
                        </h4>
                    </div>
                    <div>
                        <p>
                            School fees are usually stated at the beginning of the admission process for a specific academic year. For new students the fees include a registration fee (once payment), tuition,  textbooks, the cost of the prospectus, Co-curricular Activities and school uniforms.
                        </p>
                        <p>
                            School fees may be paid annually or termly but are due on or before the first day of school. Only certified bank drafts made payable to British Lighthouse School will be accepted.
                        </p>
                        <p>
                            Boarding Fees include a boarding deposit (a caution fee, refundable on application at the end of the child’s schooling career with us), house wear, medical deposit, and Sunday wear.
                        </p>
                        <p>
                            The School reserves the right to change the fees listed here prior to the opening of any school year. However, every effort will be made to give advance notice of such change. 
                        </p>
                        <div class="py-5">
                            <h4>
                                Payment Information
                            </h4>
                        </div>
                        <p>
                            You can pay School fees to a person in our Accounts Office, you can do so by using POS right in the School premises or by bank draft.
                        </p>
                        <p>
                            For direct bank transfer, our bank account details are below.
                        </p>

                        <p>
                            <div>Bank Name: ACCESS Bank PLC</div>
                           <div>Address: NO.39, MOULUKOU STREET ANTHONY VILLAGE LAGOS MAINLAND.</div>
                           <div>Account Name: BRITISH LIGHTHOUSE SCHOOL</div>
                           <div>Account Number: 0000000000</div>
                            
                        </p>
                        <p>
                            Please note that Personal cheques, Company cheques and Cash will not be accepted as a means of payment at the School Accounts Office.
                        </p>
                        <div class="py-5">
                            <h4>
                                Accounts Office opening hours:
                            </h4>
                            <p>
                                <div>School days: 8:00am. – 4:00pm (Monday – Friday)</div>
                                <div>During School holidays: 9:00am – 3:00pm (Monday – Friday)</div>
                                <div>Public holidays: Closed</div>
                                <div>Email: accounts.britishlighthouse@gmail.com</div>
                                <div>Telephone: +234 (0)0000000000 & +234 (0)0000000000</div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <!-- closed -->
    <Blic />
    <Partner />
    <Footer/>
</template>

<style scoped>

    .executive-container{
        background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../src/assets/img/school-foto-as-cover-foto.png);
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

    .Executive-director-speech-container{
        line-height: 2rem;

    }

    .Executive-director-speech-container h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 2.4rem;
        /* text-shadow: 3px 3px 5px #000; */
    }  

    h4{
        color: rgb(1, 1, 31);
        font-weight: bold;
    }
    h5{
        color: rgb(1, 1, 31);
        font-weight: bold;
        font-size: 18px;
    }
    .executive-img img{
        max-width: 500px;
        width: 100%;
        height: 300px;
        object-fit: cover;
        border: 4px solid rgb(1, 1, 31);
        padding: 4px;
        transition: all 500ms ease-in-out;
        cursor: pointer;
    }

    .executive-img img:hover{
        transform: scale(0.97);
    }

    .school-trip img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
        display: block;
        margin: auto;
    }
    figcaption{
        font-style: italic;
        font-size: 12px;
        color: rgb(1, 1, 31);
    }

    @media screen and (max-width: 992px) {
        .about-page-container{
        justify-content: center;
        }
        /* closed */
        .school-trip img{
        height: 50vh;
        object-fit: none;
       }

       
       figcaption{
        text-align: start;
       }
    }

    @media screen and (max-width: 576px) {
        .about-page-container{
        justify-content: center;
        }

        
        .Executive-director-speech-container h3{
            font-size: 1.5rem;
        } 

        .executive-container h1{
        font-weight: bolder;
        border: 5px solid yellow;
        text-align: center;
        background-color: rgb(1, 1, 31);
        font-size: 23px;
       }

       .school-trip img{
        height: 50vh;
        object-fit: cover;
       }

       figcaption{
        font-size: 10px;
        text-align: start;
       }
    }



</style>