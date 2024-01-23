<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    import { ref } from 'vue'
    const nursSubj = ref([
      'Phonics/Spelling',
      'Moral Instruction',
      'Knowledge of the world',
      'Computer Appreciation',
      'Literacy',
      'Practical Life',
      'Creativity',
      'Music/rhymes',
      'Handwriting',
      'Numeracy',
      'Social education',
      'Story talk',
      'Science talk',
      'Presentation, social and health education'
    ]);
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
                   Our Curriculum
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
                     <h3>
                        Learn more about our curriculum at every stage of your child’s academic career;
                     </h3>

                     <h6 class="textsecondary py-4">
                        <span class="fw-bold fs-6">Pre-school</span> <span class="fw-bolder fs-5">:</span> 10 Months to 6 Years
                     </h6>
                     <p>
                        British Lighthouse School journey begins with the pre-school program. We follow the Montessori scheme which establishes the basis for excellence in literacy, science, Sensorial, mathematics etc. This curriculum incucate love of learning, curiosity and rewarding critical thinking skills, also developing important social skills to students.In conclusion it provides a firm foundation on which to maximize physical, emotional, and intellectual development.
                     </p>
                     <div>
                        <h6 class="textsecondary py-4">
                           <span class="fw-bold fs-6">Subjects include</span> <span class="fw-bolder fs-5">:</span> 
                        </h6>
                     </div>
                     <div>
                       <ul>
                          <li v-for="subj in nursSubj">
                            {{ subj }}
                          </li>
                       </ul>
                     </div>

                     <div>
                        <h6 class="textsecondary py-4">
                          <span class="fw-bold fs-6">Junoir School</span> <span class="fw-bolder fs-5">:</span> 5 years to 10 years
                        </h6>
                     </div>
                     <p>
                        British Lighthouse School is a sparkly and inspiring place. We take great pride in our student diversity, and rigorous academic offerings that bring out the best in our kids,  Our subjects balance an emphasis on practice and discipline with the development of 21st Century Skills through Child-Centered Learning.
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

                     <div>
                        <h6 class="textsecondary py-4">
                          <span class="fw-bold fs-6">Senior School</span> <span class="fw-bolder fs-5">:</span> 10 years to 16 years
                        </h6>
                     </div>
                     <p>
                        British Lighthouse School is located in a largely spaced expanse of Anthony,No. 35/39 Adebayo Makuolu street Anthony, lagos. land with purpose built structures suitable for learning. The student overall development is paramount and this is represented in the core values of the school. To raise a total child, we place priority on emotional, physical, spiritual and psychological well-being of our students. The school runs a well-blended Curriculum (Nigeria and British Curricula).
                     </p>
                     <!-- <p>
                         British Lighthouse School cares for children between the age of 12 years – 20 years.Start from year 7 (J.S.S.1), students are prepared to write the Checkpoint examination organized by Cambridge International Examination, Junior  School National Examination Council(NECO), Basic Education Certificate Examination( BECE). Also, Year 8 (J.S.S.2) students go on an exchange and field trip (FRENCH) while year 10 (S.S.S.1) students have their curriculum prepared towards writing the West African Examinations Council(WAEC), and National Examinations Council(NECO) examinations. Provisions are made for students who require Scholastic Aptitude Tes(SAT), Test of English as a Foreign Language (TOEFL) and Jiont Admission and Matriculation Board(JAMB).
                     </p> -->
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
                        British Lighthouse School places high premium on extracurricular activities and participates in several competitions ranging from Sports, Literary, Debating, Musics, Spelling Bee and Quiz Competitions.
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

    @media screen and (max-width: 992px) {
        accreditation-and-affiliation-container{
        justify-content: center;
        }
        /* closed */
        
    }

    @media screen and (max-width: 576px) {
        .accreditation-and-affiliation-container{
           justify-content: center;
           height: 450px;
        }

        .accreditation-and-affiliation-container h3{
            font-size: 1.5rem;
        } 
    }

</style>