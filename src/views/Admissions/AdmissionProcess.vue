<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    import { ref } from 'vue'
    const admissionReqList = ref([
        '2 passports photograph',
        'Photocopy of the birth certificate',
        'Most recent academic reports from the last 2 years'
    ])
    const examsUpdate = ref([
        'Successful candidates will be informed via SMS, email or phone call.',
        'A provisional letter of admission will then be issued for collection.',
        'Acceptance letter signed and returned with all required payment.'
    ])
</script>

<template>
    <Header/>
   <!-- Executive-container -->
   <div class="container-fluid accreditation-and-affiliation-container-1">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                    Admission Process
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->

    <div class="container-fluid bg-white p-0">
        <div class="container pt-3 p-sm-5  bg-light pb-5">
            <div class="pt-5 accreditation-and-affiliation-container">
                <div>
                    <h3 class="pt-3  pb-4 ps-lg-0 text-center text-sm-start ">Admission Process</h3>
                </div>
            </div>
            <div class="row text-center text-sm-start">
                <div class="col-12 col-sm-12 col-lg-12">
                    <h2>Welcoming Children To Our School</h2>
                    <div>
                        Admission is ongoing into all the classes for 2023/2024 academic session. Admission is offered upon success at the entrance examination and the availability of space in the candidate’s desired year of entry. The subject areas for the entrance examination are English Language, Mathematics and General Paper.
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-12 mt-5 mb-3">
                    <h2>How to apply</h2>
                    <div class="my-3">
                        You can walk into the school premises at <span class="fw-bold">British Lighthouse International School</span> and obtain an Application Form for just ₦15,000. Completed forms should be submitted along with;
                    </div>
                   <ul v-for="list in admissionReqList" class="text-start">
                    <li>{{ list }}</li>
                   </ul>
                </div>
                <div class="col col-sm-12 col-lg-12">
                    <h3 class="py-5">OR</h3>
                   <div class="pb-5">
                       Fill an Online <span><a href="#" class="text-success fw-bold">Application Form</a></span> and make a payment of  ₦15,000 at any of our bank below:
                   </div>
                   <div class="text-uppercase pb-5">  
                        STANDARD CHARTED Bank (BLIC school – 000 282 9865)
                   </div>
                   <div class="text-uppercase">  
                        UNION Bank (TUITION ONLY – 011 367 6010)
                   </div>
                   <h3 class="py-5">OR</h3>
                   <div>
                      You can download a copy of the application form by clicking <a href="#" class="text-success fw-bold"> Application  Form Download</a>, fill, scan and send submitted along with; 2 passports photograph, Photocopy of the birth certificate, Candidate’s most recent report sheet, Two other previous reports to britishlighthouse@gmail.com
                   </div>
                     <h3 class="py-5">Entrance Examination Date:</h3>
                     <div>
                        Entrance examination into Year 7-10 for 2023/2024 Academic Session will frequently be updated on this site,please keep visiting the school site for update about the extrance examinations.
                        <p>After the extrance examinations:</p>
                        <ul v-for="exam in examsUpdate" class="text-start">
                            <li>{{ exam }}</li>
                        </ul>
                     </div>
                </div>
                <div class="col col-sm-12 col-lg-12 mt-5 mt-3">
                    <h5 class="text-warning color-text fw-bolder">Payments are made to designated banks or via pos on school premises. Accounts department receives the bank slip/draft and issues a receipt.</h5>

                    <div class="pt-4 text-start">
                        <h6 class="fw-bold text-black text-center">
                            Additional questions? Contact the following:
                        </h6>
                        <div class="pt-3">
                            Registrar / Admin: 0809 772 2542,
                        </div>
                        <div class="py-3">
                            Head of academics: 0808 303 7400,
                        </div>
                        <div>
                            Junior school co-ordinator: 0809 067 9095,
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

    .accreditation-and-affiliation-container-1{
        background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../src/assets/img/school-foto-as-cover-foto.png);
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
    .accreditation-and-affiliation-container-1 h1{
        font-weight: bolder;
        border: 5px solid yellow;
        text-align: center;
        background-color: rgb(1, 1, 31);
    }

    .accreditation-and-affiliation-container{
        line-height: 2rem;

    }

    .accreditation-and-affiliation-container h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 2.4rem;
        text-align: start;
        /* text-shadow: 3px 3px 5px #000; */
    }  
    .accreditation-and-affiliation-container-text{
        line-height: 2.5rem;
    }
    /* closed */

    .show-blic-cont h2{
        color: rgb(1, 1, 31);
       }

    .show-blic-cont-2{
        border: 10px solid rgb(1, 1, 31);
       }
    .partner-img{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .partner-img img{
        max-width: 150px;
        width: 100%;
        height: auto;
        object-fit: contain;
        margin: auto;
        display: block;
    }

    @media screen and (max-width: 992px) {
        accreditation-and-affiliation-container{
          justify-content: center;
        }
        /* closed */
        .accreditation-and-affiliation-container-1 h1{
        font-weight: bold;
        border: 3px solid yellow;
       font-size: 18px;
      }
        
        /* .partner-img */
        .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      /* closed */
      .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      .show-blic-cont h2{
        color: rgb(1, 1, 31);
        font-size: 18px;
        padding-top: 4px;
       }

      .show-blic-cont-2{
        border: 5px solid rgb(1, 1, 31);
        display: flex;
        justify-content: center;
        align-items: center;
       }
    }


    @media screen and (max-width: 576px) {
        .accreditation-and-affiliation-container{
           justify-content: center;
        }

        .accreditation-and-affiliation-container-1{
            height: 450px;
        }
        
        .accreditation-and-affiliation-container h3{
            font-size: 1.5rem;
        } 

        .accreditation-and-affiliation-container-1 h1{
        font-weight: bold;
        border: 3px solid yellow;
       font-size: 16px;
      }
        
        
        /* .partner-img */
        .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      /* closed */
      .show-blic-cont h2{
        color: rgb(1, 1, 31);
        font-size: 18px;
        padding-top: 4px;
       }

      .show-blic-cont-2{
        border: 5px solid rgb(1, 1, 31);
        display: flex;
        justify-content: center;
        align-items: center;
       }

       h2{
          font-size: 1rem;
          font-weight: 700;
       }

       h3{
          font-size: 1rem;
          font-weight: 600;
       }

       .color-text{
          font-size: 1rem;
       }
    }

</style>