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
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                    Co-curricula Activities
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
                    <p>
                        Participation in sports, clubs and trips add an exciting dimension to the learning experience at British Lighthouse School. Teachers collaborate to offer a range of programs that give every student a chance to get excited and get involved in order to pursue new interests.
                    </p>
                    <div class="py-5">
                        <h4>
                           Summer School
                        </h4>
                    </div>
                    <div>
                        <p>
                            This usually comes up in August, during the long vacation. It is basically for the examination classes (Year 9 & Year 12) in preparation for Cambridge Checkpoint and IGCSE examinations.
                        </p>
                        <p>
                            In addition, students with offer of admission into Year 7 are also encouraged to attend the Summer School for purposes of acclimatization since majority of the students coming into Year 7 would be leaving home for the first time.
                        </p>
                        <p>
                            The Summer School usually last for four weeks with the exception of the acclimatization programme for Year 7 which is for two weeks. Generally, the Summer School programme has been a huge success over the years.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-11 col-lg-11 mx-auto  school-trip">
                            <img src="@/assets/img/summer-school.jpeg" class="img-fluid" alt="British students on school trip" title="British students on school trip">
                            <figure><figcaption>British Lighthouse Students on summer school class</figcaption></figure>
                        </div>
                    </div>
                    <div class="py-5">
                        <h4>
                           Sports
                        </h4>
                    </div>
                    <div>
                        <p>
                            Students have to participate in school sports to increase confidence, mental alertness, and self-esteem. Sports are important in schools because it helps to teach various skills to students like leadership, patience, team efforts, and social skills .At British Lighthouse School, we provide a variety of enrichment possibilities and sport offerings that promote positive life habits and teach our students the value of commitment, sportsmanship and overcoming adversity. These characteristics bring an incredible sense of pride and enthusiasm.
                        </p>
                        <p>
                            Great emphasis is placed on sports in the schools. The students are all encouraged to participate in various competitions and  sporting activities such as Football, volleyball, Chess, Basketball, tennis and swimming. Trainings are managed by specialists as well as visiting professional coaches.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-11 col-lg-11 mx-auto  school-trip">
                            <img src="@/assets/img/fall-sports.png" class="img-fluid" alt="British students on school trip" title="British students on school trip">
                            <figure><figcaption>British Lighthouse Students on sport day.</figcaption></figure>
                        </div>
                    </div>
                    <div class="py-5">
                        <h4>
                           School Trips
                        </h4>
                    </div>
                    <div>
                        <p>
                            School trips are an essential part of the educational experience for many students. They provide opportunities for learning, exploration and growth that can be found nowhere else. Every parent wants the best for their children, but there may be some hesitation when it comes to allowing them to go on school trips. 
                            School trips are an excellent opportunity for students to get to know their classmates and teachers on a deeper level. By spending time together in a different environment, children learn how to better communicate with each other and build relationships that will last well beyond the trip. Allowing your child to go on a school trip is beneficial in many ways,these are listed below:
                        </p>
                    </div>
                    <div class="py-3 fw-bold">
                        <h5>
                            Here are some reasons why you should let your kids go on school trips:
                        </h5>
                    </div>
                    <div>
                        <ul v-for="trip in schoolTrips">
                            <li class="text-start">
                                {{ trip }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            At British Lighthouse we give students high opportunity of travelling abroad together, this create memories that will last long after the trip itself is over. Children will have to not only pack their belongings but also navigate an airport and altogether this really builds there independence and life skills. Whether it’s bonding with friends or discovering something new, these experiences leave an imprint on children that will stay with them for years to come.
                        </p>
                        <p>
                            Allowing your child to go on school trips can open doors for both education and personal growth. While it may be daunting to let your child go away on a trip, the benefits that come with these experiences are priceless. With the proper care and preparation, school trips can be beneficial for everyone involved.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-11 col-lg-11 mx-auto  school-trip">
                    <img src="@/assets/img/school-trip.jpg" class="img-fluid" alt="British students on school trip" title="British students on school trip">
                    <figure><figcaption>British Lighthouse Students on a trip to Canada (23rd march 2023).</figcaption></figure>
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
        height: 500px;
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
        .executive-container{
          justify-content: center;
          height: 450px;
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