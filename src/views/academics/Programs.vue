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
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                   Special programs
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm  bg-white accreditation-and-affiliation-container">
        <div class="container pt-5 pb-5 px-3 px-lg-5 bg-light">
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg-12 text-center text-lg-start ">
                    <h4 class="py-4">
                        Spiritual Development
                    </h4> 
                    <p>
                        british lighthouse is a christian School, therefore we entrust all our activities to God. We place emphasis on the Pentecostal worship and Catholic Mass celebration. The Principal of the Junior Secondary School or any of the school staffs is capable of co-ordinating the Pentecostal worship and the coordinator for the Catholic worship is the Director. Pentecostal worship is presided over by our staffs, while the Catholic Mass is conducted every Sunday by the Parish priest. The Catholic students have the opportunity of receiving first Holy Communion and the sacraments of Baptism and Confirmation during their stay in the school.
                    </p>

                    <h4 class="py-4">
                        Learning Support and Counselling 
                    </h4> 
                    <p>
                        The school provides counselling and learning support services to students with academic challenges. The Learning support is done every wednesday. Individual and group counselling is done sometimes with the help of educative/informative staffs of british lighthouse. Career information and guidance is provided to students in Year 9 by administering psychological tests such as the Vocational Interest Inventory (VII) and Motivation for Occupational Preference (MOP) before selecting the subjects to be done at the senior school.
                    </p>

                    <h4 class="py-4">
                        Leadership Training
                    </h4> 

                    <p>
                        Leadership is an electric current of believing. Believing is the powerful tool by
                        which students can achieve beyond their potential. As a catalyst for positive thinking
                        and an encouragement to excel, leadership studies enables students to not only improve
                        themselves, but to start critically viewing the world around them. The world needs
                        risk takers, thrill seekers, and challenge takers, once students understand that they can
                        make a difference, they begin to believe in their untapped abilities and gain the
                        confidence needed to become active and important members of their church youth
                        groups, volunteer organizations, sports teams, school clubs, and student governments.
                        Students who do not become productive participants in extracurricular activities may
                        suffer from apathy, fear, or a lack of self-confidence.As a cuase of this,British lighthouse employed highly intellegent staffs to help guild the students.
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
    
    /* .british{
       font-size: 25px;
       color: rgb(1, 1, 31);
       font-weight: bold;
    } */
    /* .accreditation-and-affiliation-container h3{
        color: rgb(1, 1, 31);
        font-weight: bold;
        font-size: 23px;
        text-align: start;
        padding: 10px 0;
    }   */

    h4{
        color: rgb(1, 1, 31);
        font-weight: bold;
    }

    @media screen and (max-width: 992px) {
        accreditation-and-affiliation-container{
        justify-content: center;
        }
        /* closed */
        
    }

    @media screen and (max-width: 576px) {
        .accreditation-and-affiliation-container-1{
           justify-content: center;
           height: 450px;
        }

        .accreditation-and-affiliation-container h3{
            font-size: 1.5rem;
        } 
    }

</style>

