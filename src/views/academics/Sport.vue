<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    import { ref } from 'vue'

    const sport = ref([
        'Football',
        'Tennis',
        'Basketball',
        'Table Tennis',
        'Vollyball',
    ])

</script>

<template>
    <Header/>
   <!-- Executive-container -->
   <div class="container-fluid executive-container">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2 animate__animated animate__slow animate__pulse animate__infinite">
                    Sports
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
                           Sports
                        </h4>
                    </div>
                    <div>
                        <p>
                            To enable our students to explore their skills and discover their talents, we offer a wide range of sports and games at British Lighthouse School. We understand that certain skills and tactics can be developed from basic to complex and applied to various sports.
                        </p>
                        <p>
                            It is important to note that these skills are also transferable towards academic excellence.
                        </p>

                        <div class="py-3 fw-bold">
                            <h5>
                                Here are some of the basic sports activities we offer:
                            </h5>
                        </div>
                        <div>
                            <ul>
                                <li v-for="sports in sport">
                                    {{ sports }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-11 col-lg-11 mx-auto  school-trip">
                            <img src="@/assets/img/fall-sports.png" class="img-fluid" alt="British students on school trip" title="British students on school trip">
                            <figure><figcaption>British Lighthouse Students on sport day.</figcaption></figure>
                        </div>
                    </div>

                    <div>
                        <p>
                            Our coaching team applies modern technicalities to explore the potential of every student and ensure that our students get the necessary inspiration to enable them to succeed in their sports subject of choice, by organising productive sports development programmes on the school premises.
                        </p>
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