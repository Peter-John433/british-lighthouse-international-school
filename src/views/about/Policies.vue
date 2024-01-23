<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    
    import { ref } from 'vue'

    const policy = ref([
        'To ensure that children learn in a supportive, caring and safe environment,without fear of being bullied.',
        'To demonstrate that the school takes bullying seriously and that it will not be tolerated.',
        'To support everyone in actions to identify and protect those who might be bullied.',
        'To promote an environment where children feel they can trust and tell adults if they are being bullied or know about any bullying.',
        'To ensure that all staff are aware of their duty of care over those in theircharge and the need to be alert to signs of bullying.',
        'To promote positive attitudes in students',
        'To demonstrate to all that the safety and happiness of students is paramount.'
    ])
</script>

<template>
   <Header/>
   <!-- about-page-container -->
   <div class="container-fluid about-page-container">
        <div class="row">
            <div class="col col-sm col-lg">
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                    School Policies
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <div class="container-fluid-sm history-container bg-white">
      <div class="container history-container-2 bg-light py-5 ps-md-3">
        <div class="row">
            <div class="col col-sm col-lg-10 p-3 py-lg-5 text-center text-lg-start ">
                <h3 class="fw-bolder display-md-5  mb-5">
                    Behaviour Policy
                </h3>
                <p>
                    British Lighthouse School means business. The social change agenda of the school means that staff and students of Preston must be well disciplined in all situations at all times.  Therefore, codes of conduct for staff and students are explicit and detailed so that everyone knows what is expected of them and the associated rewards and consequences of their behaviour.  British Lighthouse School employs a ‘Positive Assertive Discipline’ policy to help develop a positive school ethos. In other words, we reinforce and build on the positive aspects of behaviour. The school also recognizes and rewards the efforts pupils make towards building a positive school ethos.
                </p>

                <p>
                    At British Lighthouse School, all staff including non-academic staff are responsible for the behaviour of the pupils in the school. No one employed by the school is exempt from reporting unacceptable behaviour of any pupil in the school. All staff are required to know and to understand the Disciplinary Policy of the school. All staff are to accept their role as educators in the school as defined in this policy.  Staff have the responsibility of modelling the kind of behaviour that is expected in the school and therefore should lead by example. Courteous behaviour towards pupils by staff is expected by the directors.
                </p>
                <div>
                    <h3 class="fw-bolder my-5">
                        Anti-bullying policy
                    </h3>
                    <p>
                        Providing a safe and happy learning environment is integral to achieving the wider
                        objectives of school improvement: raising attainment, improving school attendance,
                        promoting equality and diversity, and ensuring the well-being of all students in the school. If a student feels safe at school, they are in a much better position
                        to realise four positive outcomes: they can be healthy, stay safe, enjoy and achieve, 
                    </p>
                    <p>
                        At British Lighthouse School, we created this Policy so students can grow and flourish without fear, each student has the right to be safe in and out of school and to be protected when they are feeling vulnerable. The purposed of this policy includes:
                    </p>
                    <div class="text-start">
                        <ul>
                            <li v-for="school in policy">
                                {{ school }}
                            </li>
                        </ul>
                    </div>

                    <div>
                        Other Policies includes child's protection, Safeguard, Homework policy e.t.c
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
    .about-page-container{
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
    .about-page-container h1{
        font-weight: bolder;
        text-align: center;
        border: 5px solid yellow;
        text-align: center;
        background-color: rgb(1, 1, 31);

    }

    .history-container h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 1.5rem;
        /* text-shadow: 3px 3px 5px #000; */
    }  

    @media screen and (max-width: 992px) {
        /* .about-page-container */
        .about-page-container{
        justify-content: center;
        }
        /* closed */
    }

    @media screen and (max-width: 576px) {
        .about-page-container{
            justify-content: center;
            height: 400px;
        }
        .Executive-director-speech-container h3{
            font-size: 1.5rem;
        } 

        h3{
            font-size: 10px;
        }
    }

</style>