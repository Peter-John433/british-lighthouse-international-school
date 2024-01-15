<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    import { ref } from 'vue'

    const priSubj = ref([
      'Physics',
      'Mathematics',
      'English Language',
      'Chemistry',
      'Bioliogy',
      'Social Studies',
      'Handwritting',
      'Library Studies',
      'Verbal Reasoning',
      'Quantitative Reasoning',
      'Arts And Crafts',
      'Music',
      'Yoruba',
      'History',
      'Moral instruction',
      'Geography',
      'Science'
    ]);
</script>

<template>
    <Header/>
   <!-- Executive-container -->
   <div class="container-fluid accreditation-and-affiliation-container-1">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                    Junior School
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
                            <div class="col col-sm col-lg-12">
                                <div>
                                    Our aim is to make school enjoyable for our pupils; so we incorporate fun into learning and structure our learning environment to make learning easy for our pupils. Here are some more reasons why parents regard us one of the best junior schools in Lagos and entrust their children in our care:
                                </div>

                                <ul>
                                    <li>
                                        We engage our pupils in activities that enable them to develop self-confidence
                                    </li>
                                    <li>
                                        We introduce our pupils to a foreign language, thereby offering them an opportunity to learn a unique form of communication
                                    </li>
                                    <li>
                                        We guide and encourage positive behaviour among peers and promote collaboration through group activities.
                                    </li>
                                </ul>
                            </div>
                            <div class="col col-sm col-lg-6">
                                <img src="@/assets/img/britishlighthouse-2.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="col col-sm col-lg-6">
                                <img src="@/assets/img/Classroom_Students_ScienceLab_Indoor.webp" class="img-fluid" alt="">
                            </div>
                            <div class="col col-sm col-lg-6">
                                <img src="@/assets/img/handicraft.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="col col-sm col-lg-6">
                                <img src="@/assets/img/musical.jpeg" class="img-fluid" alt="">
                            </div>
                        </div>

                     <h3 class="mt-5 fs-3">
                        Learn more about our junior class curriculum 
                     </h3>

                     <div>
                        <h6 class="textsecondary py-4">
                          <span class="fw-bold fs-6">Junoir School</span> <span class="fw-bolder fs-5">:</span> 5 years to 10 years
                        </h6>
                     </div>
                     <p>
                        British Lighthouse School is a sparkly and inspiring place. We take great pride in our student diversity, and rigorous academic offerings that bring out the best in our kids. We are student-centered  and provide one-to-one access to computers.  Our subjects balance an emphasis on practice and discipline with the development of 21st Century Skills through Child-Centered Learning and the use of technology.
                     </p>
                     <p>
                        British Lighthouse students Acuminated their abilities for research and learn to communicate effectively, collaborate genuinely, and think creatively and critically.
                     </p>
                     <div>
                        <h6 class="textsecondary py-4">
                           <span class="fw-bold fs-6">Subjects include</span> <span class="fw-bolder fs-5">:</span> 
                        </h6>
                     </div>
                     <div>
                        <ul>
                           <li v-for="primary in priSubj">
                              {{ primary }}
                           </li>
                        </ul>
                     </div>
                </div>
            </div>

            <div class="row">
                <div class="col col-sm col-lg">
                    <h3 class=" text-center fw-bolder fs-3">
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

            <div class="row">
                <h3 class=" text-center fw-bolder fs-3 mb-5">
                    Hear from Our Junior School Students 
                </h3>
                <div class="col col-sm col-lg">
                    <img src="@/assets/img/junior.webp" class="img-fluid student-img" alt="">
                </div>
                <div class="col col-sm col-lg">
                    <img src="@/assets/img/junior.webp" class="img-fluid student-img" alt="">
                </div>
                <div class="col col-sm col-lg">
                    <img src="@/assets/img/junior.webp" class="img-fluid student-img" alt="">
                    <div>

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
        background: linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../src/assets/img/britishlighthouse-2.jpg);
        width: 100%;
        height: 450px;
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