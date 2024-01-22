<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    import { ref } from 'vue'

    const secSubj = ref([
      'Physics',
      'Mathematics',
      'English Language',
      'Chemistry',
      'Bioliogy',
      'Social Studies',
      'Handwritting',
      'Library Studies',
      'Civil education',
      'Financial accounting',
      'Arts And Crafts',
      'Music',
      'Yoruba',
      'Further Mathematics',
      'Literature in english',
      'Ecnomics',
      'Basic talk',
      'Agricultural science',
      'Basic technology',
      'Commerce',
      'Government',
      'C.R.S'
    ])
</script>

<template>
    <Header/>
   <!-- Executive-container -->
   <div class="container-fluid accreditation-and-affiliation-container-1">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                   Senior School
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
    
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm  bg-white accreditation-and-affiliation-container">
        <div class="container pt-5 px-3 px-lg-5 bg-light">
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg-12 text-start">
                     <p>
                       <span class="britis">British Lighthouse</span> school is committed to providing learning        opportunities that enrich and foster the academic development of our students. The school syllabus is a blend of British and Nigerian curricula. Thus, we encourage and guide students to give their best effort in pursuing excellence  within a caring, child-centered and supportive learning environment. We are  committed in seeing our students succeed and our aim is to produce a total child through a holistic programme that benchmarks best practices while being socially responsible.
                     </p>

                        <div class="row row-gap-4 pt-4">
                            <div class="col-12 col-sm-6 col-lg-6">
                                <img src="@/assets/img/about-photos.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="col-12 col-sm-6 col-lg-6">
                                <img src="@/assets/img/british-1.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="col-12 col-sm-6 col-lg-6">
                                <img src="@/assets/img/Classroom_Students_ScienceLab_Indoor.webp" class="img-fluid" alt="">
                            </div>
                            <div class="col-12 col-sm-6 col-lg-6">
                                <img src="@/assets/img/musical.jpeg" class="img-fluid" alt="">
                            </div>
                        </div>

                     <h3 class="mt-5 senior-curriculum">
                        Learn more about our Senior class curriculum 
                     </h3>

                     <div>
                        <h6 class="textsecondary py-4">
                          <span class="fw-bold fs-6">Senior School</span> <span class="fw-bolder fs-5">:</span> 10 years to 16 years
                        </h6>
                     </div>
                     <p>
                        British Lighthouse School is located in a largely spaced expanse of Bekko Ransom Kutti Youth Centre Anthony, land with purpose built structures suitable for learning. The student overall development is paramount and this is represented in the core values of the school. To raise a total child, we place priority on emotional, physical, spiritual and psychological well-being of our students. The school runs a well-blended Curriculum (Nigeria and British Curricular).
                     </p>
                     <div>
                        <h6 class="textsecondary py-4">
                           <span class="fw-bold fs-6">Subjects include</span> <span class="fw-bolder fs-5">:</span> 
                        </h6>
                     </div>
                     <div>
                        <ul>
                           <li v-for="secondary in secSubj">
                              {{ secondary }}
                           </li>
                        </ul>
                     </div>
                     <div class="down py-5">
                        British Lighthouse School places high premium on extracurricular activities and participates in several competitions ranging from Sports, Literary, Debating, Musics, ICT, Spelling Bee and Quiz Competitions.
                     </div>
                </div>
            </div>

            <div class="row">
                <div class="col col-sm col-lg loyal">
                    <img src="@/assets/img/british-1.jpg" class="img-fluid" alt="">
                </div>
            </div>

            <div class="row">
                <div class="col col-sm col-lg senior-text">
                    <h3 class=" text-center fw-bolder">
                         What We Have & How We Do It 
                    </h3>

                    <ul>
                        <li class="fw-bolder mt-3">
                            Advisory & Guidance
                        </li>
                         <div>
                            We offer the right challenges within a well-supervised and caring environment to enhance self-esteem and self-confidence.
                         </div>

                         <li class="fw-bolder mt-3">
                            Specialist Tutors
                        </li>
                         <div>
                            In situations where your child may experience difficulties in achieving satisfactory performance levels, our specialist tutors will provide relevant academic reinforcement.
                         </div>

                         <li class="fw-bolder mt-3">
                            Stimulating Learning Environment
                        </li>
                         <div>
                            We provide a stimulating and enjoyable learning environment to enable your child to develop his or her cognitive ability.
                         </div>

                         <li class="fw-bolder mt-3">
                            Sporting facilities
                        </li>
                         <div>
                            A list of our sports facilities includes 1 football pitches, 2 tennis courts, 2 basketball courts, 2 table-tennis tables, a badminton court, among others.
                         </div>
                    </ul>
                </div>
            </div>

            <div class="row row-gap-4 row-gap-lg-0 pb-5">
                <h3 class=" text-center fw-bolder fs-3 mb-5">
                    Hear from Our Senior School Students 
                </h3>
                <div class="col-12 col-sm-6 col-lg-4">
                    <img src="@/assets/img/junior.webp" class="img-fluid " alt="">
                    <div class="img-text">
                        I had so much fun in this, this school enable me to discover the potentials in me,thanks to everyone. <br>
                        <span class="img-text-2">ademola lukeman</span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <img src="@/assets/img/junior.webp" class="img-fluid " alt="">
                    <div class="img-text">
                        School in Blic is one of the best decision my parent took, i enjoyed the teaching,  <br>
                        <span class="img-text-2">ademola lukeman</span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <img src="@/assets/img/junior.webp" class="img-fluid" alt="">
                    <div class="">
                        <div class="img-text">
                            I had so much fun in this, this school enable me to discover the potentials in me,thanks to everyone. <br>
                            <span class="img-text-2">ademola lukeman</span>
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
        background: linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../src/assets/img/about-photos.jpg);
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
        max-width: 100%;
        width: 100%;
        height: 270px;
        object-fit: cover;
        cursor: pointer;
    }

    .img-text {
        font-size: 13px;
        width: 300px;
        margin: auto;
        padding: 0%;
        color: rgb(1, 1, 31);
        font-weight: 700;
        text-align: center;
    }

    .img-text-2{
        color: red;
        font-weight: 700;
        font-size: 16px;
    }

    .loyal img{
        height: auto;
    }
    .senior-text h3{
        font-size: 20px;
    }

    .senior-text li{
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

        .accreditation-and-affiliation-container-1{
            background-position: 30%, center;
        }

        .accreditation-and-affiliation-container h3{
            font-size: 1.5rem;
        } 

        .senior-curriculum h3{
            font-size: 10px;
        }

        .senior-text h3{
        font-size: 18px;
       }

       .senior-text li{
        font-size: 16px;
       }
    }

</style>