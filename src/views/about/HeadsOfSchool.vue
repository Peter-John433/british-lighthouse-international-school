<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    
</script>

<template>
   <Header/>
   <!-- about-page-container -->
   <div class="container-fluid heads-of-school-container">
        <div class="row">
            <div class="col col-sm col-lg">
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                    Heads Of School
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <div class="container-fluid-sm heads-of-school bg-white ">
     <div class="container-sm bg-white pb-5">
          <h3 class="py-5 text-center text-sm-center text-lg-start">
             Heads Of School
          </h3>
          <div class="row justify-content-sm-center justify-content-lg-between align-items-center mx-auto mt-5">
            <div class="col-12 col-sm-10 col-lg-5 e-d-container">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto img" alt="">
                <div class="text-center text-white py-sm-2 text-uppercase fw-bolder frame-body-text">
                    <div>
                        Prof. P.A.O. Okebukola (ofr)
                    </div>
                    <div>
                        Father of the School
                    </div>
                    <div>
                        British Lighthouse School
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-10 col-lg-5 e-d-container">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto img" alt="">
                <div class="text-center text-white py-sm-2 text-uppercase fw-bolder frame-body-text">
                    <div>
                        Prof. (mrs) Okebukola
                    </div>
                    <div>
                        Chair person board of director
                    </div>
                    <div>
                        British Lighthouse School
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-sm-center justify-content-lg-between align-items-center mx-auto mt-5">
            <div class="col-12 col-sm-10 col-lg-5 e-d-container">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto img" alt="">
                <div class="text-center text-white py-sm-2 text-uppercase fw-bolder frame-body-text">
                    <div>
                        s.m davies
                    </div>
                    <div>
                        Executive director
                    </div>
                    <div>
                        British Lighthouse School
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-10 col-lg-5 e-d-container">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto img" alt="">
                <div class="text-center text-white py-sm-2 text-uppercase fw-bolder frame-body-text">
                    <div>
                        Eng. femi Adebayor davies
                    </div>
                    <div>
                        Director
                    </div>
                    <div>
                        British Lighthouse School
                    </div>
                </div>
            </div>
        </div>
        <div class="row mx-auto justify-content-center row-gap-4 gap-lg-5 e-d-boxes">
            <div class="col-12 col-sm-6 col-lg-5">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto" alt="">
                <div class="text-center e-d-box-2 text-uppercase  py-sm-2 frame-body-text">
                    <div>
                        Lucas gray
                    </div>
                    <div>
                        Head of Administration
                    </div>
                    <div>
                        British Lighthouse School
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-5">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto" alt="">
                <div class="text-center e-d-box-2 text-uppercase  py-sm-2 frame-body-text">
                    <div>
                        Edwin Lucas
                    </div>
                    <div>
                        Head of Academic
                    </div>
                    <div>
                        British Lighthouse School
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-5">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto" alt="">
                <div class="text-center e-d-box-2 text-uppercase  py-sm-2 frame-body-text">
                    <div>
                        Edwin Lucas
                    </div>
                    <div>
                        Asst Head of Academics
                    </div>
                    <div>
                        British Lighthouse School
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-5">
                <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto" alt="">
                <div class="text-center e-d-box-2 text-uppercase  py-sm-2 frame-body-text">
                    <div>
                        Edwin Lucas
                    </div>
                    <div>
                        Junior School Co-ordinator
                    </div>
                    <div>
                        British Lighthouse School
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
    .history-container-2{
        color: rgb(1, 1, 31);
        text-shadow: 2px 2px 5px #fff;
    }

    /* about-page-container */
    .heads-of-school-container{
        background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../src/assets/img/board-of-office.webp);
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 4rem;
        background-position: top top;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .heads-of-school-container h1{
        font-weight: bolder;
        text-align: center;
        border: 5px solid yellow;
        text-align: center;
        background-color: rgb(1, 1, 31);
    }

    .heads-of-school h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 2.4rem;
    }  

    /* e.d-container */
     .e-d-container{
        margin-bottom: 10rem;
        padding-top: 0;
        background-color: rgb(1, 1, 31);
        box-shadow: 3px 3px 5px rgb(180, 179, 179), -3px -3px  5px rgb(180, 179, 179);
        border: 1rem double yellow;
        border-bottom: 1rem solid black;
        border-top: 1rem solid black;
     }

    .e-d-box-2{
        background-color: rgb(1, 1, 31);
        color: white;
        border-bottom: 1rem double yellow;
    }

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
        /* .about-page-container */
        .about-page-container{
        justify-content: center;
        }
        /* closed */
        
      /* .e-d-container */
      .e-d-container{
        margin-bottom: 5rem;
        border: 1rem double yellow;
        border-bottom: 1rem solid black;
       border-top: 1rem double black;
     }
     /* closed */
     .heads-of-school h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 1.7rem;
    }  
    }

    @media screen and (max-width: 576px) {
        .heads-of-school-container{
            height: 400px;
        }

        .heads-of-school-container h1{
            font-size: 1.2rem;
        }
        .about-page-container{
        justify-content: center;
        }

        .Executive-director-speech-container h3{
            font-size: 1.7rem;
        } 
        
       /* .e-d-container */
       .e-d-container{
        margin-bottom: 3rem;
        border-bottom: 1rem solid black;
        border-top: 1rem double black;
        padding-top: 0;
        background-color: rgb(1, 1, 31);
        box-shadow: 3px 3px 5px rgb(180, 179, 179), -3px -3px  5px rgb(180, 179, 179);
     }
     /* closed */
     .heads-of-school h3{
        font-size: 1.7rem;
    }  
    .frame-body-text{
        font-size: 15px;
       
    }
    }

</style>