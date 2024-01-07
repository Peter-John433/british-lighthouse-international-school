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
   <div class="container-fluid accreditation-and-affiliation-container-1">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2 animate__animated animate__slow animate__pulse animate__infinite">
                   Boarding
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm  bg-white accreditation-and-affiliation-container">
        <div class="container py-5 px-3 px-lg-5 bg-light">
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg-12 text-center text-lg-start ">
                     <p>
                        British Lighthouse School is a school located in Anthony Village, Gbagada Lagos State. Having provided – and continue providing – quality education for students for years, we clearly understand that boarding students tend to be more self-reliant and dedicated to their studies. Consequently, we set up one of the best boarding schools in Lagos and Nigeria.
                     </p>
                     <p>
                        Apart from the fact that boarding schools encourage students to concentrate on their studies, there are other good reasons you should enrol your child in a boarding school. Firstly, a boarding school will make it possible for your child to learn how to live in unity with people of different backgrounds and cultural beliefs. Secondly, your child will be able to build his or her communication and networking skills within a short period. In most boarding schools in Nigeria, students live together, read together, eat together, and work together on tasks, and have regular conversations with one another; all these help them to improve their communication skills, as well as other essential soft skills.
                     </p>
                </div>
            </div>
            <div class="row row-gap-4  ">
                <div class="col-12 col-sm-6 col-lg-6">
                    <img src="@/assets/img/boarding-1.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-12 col-sm-6 col-lg-6">
                    <img src="@/assets/img/boarding-4.jpg" class="img-fluid" alt="">
                </div>

                <div class="col-12 col-sm-12 col-lg-12">
                    <div class="py-5">
                        <h4>
                           Why British Lighthouse School?
                        </h4>
                    </div>
                    <p>
                        There are numerous boarding schools in Lagos and Nigeria; however, British Lighthouse School boarding facility is the best choice for your child. Our boarding facility is well-furnished, and the hostels are always kept clean. Furthermore, the rooms in our hostels are quite spacious, well-illuminated and conducive.
                    </p>
                    <p>
                        we serve our boarding students with nutritive balanced diets, which help boost their memory and support their body growth.
                    </p>
                </div>

                <div class="col-12 col-sm-6 col-lg-6">
                    <img src="@/assets/img/boarding-3.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-12 col-sm-6 col-lg-6">
                    <img src="@/assets/img/boarding-2.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-12 col-sm-6 col-lg-6">
                    <img src="@/assets/img/boarding-3.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-12 col-sm-6 col-lg-6">
                    <img src="@/assets/img/boarding-2.jpg" class="img-fluid" alt="">
                </div>

                <div class="col-12 col-sm-12 col-lg-12">
                    <div class="py-5">
                        <h4>
                            Here are more reasons we are classified among the best boarding schools in Nigeria, and why you should choose British Lighthouse School:
                        </h4>
                    </div>
                    <p>
                        There are numerous boarding schools in Lagos and Nigeria; however, British Lighthouse School boarding facility is the best choice for your child. Our boarding facility is well-furnished, and the hostels are always kept clean. Furthermore, the rooms in our hostels are quite spacious, well-illuminated and conducive.
                    </p>
                    <p>
                        we serve our boarding students with nutritive balanced diets, which help boost their memory and support their body growth.
                    </p>
                </div>
                <div>
                    <h5 class="py-4">
                        Extra Learning Classes
                    </h5>
                    <p>
                        During the standard school hours, your child will cover the expected lessons. Nonetheless, as a boarding student, he or she will take extra classes, aimed at improving his or her academic performance; there is also an opportunity to observe preps.
                    </p>
                </div>
                <div>
                    <h5 class="py-4">
                        Sport Facilities
                    </h5>
                    <p>
                        A list of our facilities includes a football pitch, a tennis court, a basketball court, and 2 table-tennis tables.
                    </p>
                </div>

                <div>
                    <h5 class="py-4">
                        Modern common rooms
                    </h5>
                    <p>
                        As one of the best boarding schools in Lagos and Nigeria, we have equipped our common rooms with modern facilities. The common rooms have audio-visual appliances, as well as Wi-Fi internet – which allows our students to access unlimited educational information online, with standard parental guidiance restrictions.
                    </p>
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
        height: 400px;
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
    
    .british{
       font-size: 25px;
       color: rgb(1, 1, 31);
       font-weight: bold;
    }
    .accreditation-and-affiliation-container h3{
        color: rgb(1, 1, 31);
        font-weight: bold;
        font-size: 23px;
        text-align: start;
        padding: 10px 0;
    }  

    img{
        width: 100%;
        height: 300px;
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
    @media screen and (max-width: 992px) {
        accreditation-and-affiliation-container{
        justify-content: center;
        }
        /* closed */
        
    }

    @media screen and (max-width: 576px) {
        .accreditation-and-affiliation-container{
        justify-content: center;
        }

        .accreditation-and-affiliation-container h3{
            font-size: 1.5rem;
        } 
    }

</style>