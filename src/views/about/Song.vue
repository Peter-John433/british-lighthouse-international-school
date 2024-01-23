<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
</script>

<template>
    <Header/>
   <!-- Executive-container -->
   <div class="container-fluid school-song-container">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                    School Song
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm pt-5 bg-white song-text-container">
        <div class="container">
            <h3 class="py-3 ps-lg-0 text-center">School Song</h3>
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg-12 text-center song-text-container-2 text-lg-center">
                    <p>
                        We are the students of british lighthouse school, With humble start we love God, and him we trust.
                    </p>
                    <p>
                       We are trained to study hard in other to achieve, academic excellence.
                    </p>
                   <p>
                       Train to have respect and live in harmony with everyone. We are trained to be the best, now and for the future.
                   </p>
                   <h3 class="py-3 fs-4  ps-lg-0 text-center">Chorus:</h3>
                   <p>
                      Yes!
                   </p>
                   <p>
                       We have been trained to be the best;
                   </p>
                   <p>
                       Allowing wisdom, to ring through in the world and throughout our lives. We are trained to be the best, now and for the future.
                   </p>
                </div>
                <!-- <div class="col-12 col-sm-12 col-lg-4 executive-img">
                   <img src="@/assets/img/school-student.jpg" class="img-fluid d-block mx-auto" alt="">
                </div> -->
            </div>
        </div>
    </div>
   <!-- closed -->

    <Blic />
    <Partner />
    <Footer/>
</template>

<style scoped>
   .school-song-container{
    background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../assets/img/britishlighthouse-2.jpg);
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
    .school-song-container h1{
        font-weight: bolder;
        border: 5px solid yellow;
        text-align: center;
        background-color: rgb(1, 1, 31);

    }

    .Song-text-container-2{
        line-height: 3rem;

    }

    .song-text-container h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 2.4rem;
        /* text-shadow: 3px 3px 5px #000; */
    }  

    .executive-img img{
        max-width: 500px;
        width: 100%;
        height: auto;
        object-fit: cover;
        /* border: 4px solid rgb(1, 1, 31); */
        padding: 4px;
        transition: all 500ms ease-in-out;
        cursor: pointer;
    }

    .executive-img img:hover{
        transform: scale(0.97);
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
        /* .partner-img */
        .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      /* closed */  
    }

    @media screen and (max-width: 576px) {
        .school-song-container{
            height: 400px;
        }
        /* .partner-img */
    .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      /* closed */
      .song-text-container h3{
        font-size: 1.2rem;
        text-align: center;
    }  

    }

</style>