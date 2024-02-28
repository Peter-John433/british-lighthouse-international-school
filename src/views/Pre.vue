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
                    Pre School
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->

    <div class="container-fluid bg-white p-0">
        <div class="container pt-3 p-sm-5  bg-light pb-5">
            <div class="row text-start">
                <div class="col-12 col-sm-12 col-lg-12 mt-5 mb-3">
                    <div class="my-3">
                        It is an honour to welcome you to British Lighthouse International School Day Pre-School, Anthony.
                        Our preschool section is designed to lay a solid foundation for children aged 10 months to 6yrs+. The school is a specially-prepared Montessori environment and is regarded as one of the best Montessori schools in Lagos,Nigeria due to its qualified teachers, conducive environment and child-centred facilities.
                        <div class="mt-3">
                            Our school is a welcoming and nurturing environment where the children feel physically and emotionally safe as they learn skills, interests, and passions to prepare for lifelong learning, British Lighthouse international School is the best school for your children.
                        </div>
                       <div class="mt-3">
                           We have a smooth playground with child-size playground equipment. Our core curriculum focuses on developing; life skills, creativity, handwritting, practical life, story talk, music, art, natural science etc as they relate to the child using the Montessori material as instructional materials alongside other indigenous early years resources.
                           In addition to the core curriculum, we go on field trips and offer extracurricular activities such as  dance, football,althletics, tennis, basketball etc.
                       </div>
                       <div class="mt-3">
                            Our classrooms are well lit, well ventilated and furnished with child-sized shelves and stocked with Montessori materials. These materials arouse their curiosity, interest, secure their attention while promoting motivation and teach them independence and concentration.Each class has an interactive flat panel for teaching and learning. It is home away from home, with qualified Montessori teachers
                       </div>
                       <div class="mt-5 fw-bolder text-center text-md-start">
                           We work in close partnership with parents to support our children on their learning journey.
                    </div>
                </div>
            </div>
            <div class="row mx-auto p-0">
                <div class="col-12 col-sm-12 col-lg-12">
                   <img src="@/assets/img/preschool-1.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-12 col-sm-12 col-lg-12 mt-5 mt-3 montessori mb-5 text-center fw-bold">
                    Best Montessori School in Lagos & Nigeria
                </div>
            </div>
            <div class="row mx-auto gap-3 gap-sm-0  p-0">
                <div class="col-12 col-sm-12 col-lg-6">
                    <img src="@/assets/img/preschool-1.jpg" class="img-fluid" alt="">
                </div>
                <div class="col col-sm-12 col-lg-6">
                    <img src="@/assets/img/preschool-2.jpg" class="img-fluid" alt="">
                </div>
            </div>
            <div class="row">
               <div class="col col-sm col-lg-6 mx-auto text-center mt-5 d-flex justify-content-center align-items-center flex-row ">
                   <router-link class="d-flex align-items-center " :to="{name: 'Curriculum'}">Pre School Curriculum <i class='bx bx-right-arrow-alt ms-2' ></i></router-link>
               </div>
            </div>
            <div class="row mx-auto">
                <div class="col col-sm-12 junior-coordinator col-lg-6 mx-auto">
                    <img src="@/assets/img/preschool-2.jpg" class="img-fluid" alt="">
                    <div class="mx-auto text-center mt-3">
                        <h4 class="fw-bolder">Mrs. Omenewa</h4>
                        <div class="fw-bold">
                            Junior School Coordinator
                        </div>
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

    <router-view />
</template>

<style scoped>

    .accreditation-and-affiliation-container-1{
        background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../src/assets/img/preschool-1.jpg);
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

    .accreditation-and-affiliation-container h3{
        color: rgb(1, 1, 31);
        font-weight: 700;
        font-size: 2.4rem;
        text-align: start;
        /* text-shadow: 3px 3px 5px #000; */
    }  
    .accreditation-and-affiliation-container-text{
        line-height: 2.5rem;
    }
    /* closed */

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
    .montessori{
        color: rgb(1, 1, 31);
        font-size: 2rem;
    }

    .junior-coordinator{
        margin-top: 20rem;
    }

    a{
        color: yellow;
        background-color: rgb(1, 1, 31);
        padding: 10px 16px;
        border-radius: 16px;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        border: 1px solid yellow;
    }

    a:hover{
        background-color: rgb(11, 11, 37);
    }

    @media screen and (max-width: 992px) {
        accreditation-and-affiliation-container{
          justify-content: center;
        }
        /* closed */
        .accreditation-and-affiliation-container-1 h1{
            font-weight: bold;
            border: 3px solid yellow;
            font-size: 18px;
        }
        
        /* .partner-img */
        .partner-img img{
            max-width: 50px;
            width: 100%;
            height: auto;
            object-fit: contain;
        }
      /* closed */

      .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      .show-blic-cont h2{
        color: rgb(1, 1, 31);
        font-size: 18px;
        padding-top: 4px;
       }

      .show-blic-cont-2{
        border: 5px solid rgb(1, 1, 31);
        display: flex;
        justify-content: center;
        align-items: center;
       }

       .montessori{
        color: rgb(1, 1, 31);
        font-size: 30px;
    }
    
    }


    @media screen and (max-width: 576px) {
        .accreditation-and-affiliation-container-1{
          background-position: 30%;
          justify-content: center;  
       }
        
        .accreditation-and-affiliation-container h3{
           font-size: 1.5rem;
        } 

        .accreditation-and-affiliation-container-1 h1{
            font-weight: bold;
            border: 3px solid yellow;
            font-size: 16px;
        }
        
        
        /* .partner-img */
        .partner-img img{
            max-width: 50px;
            width: 100%;
            height: auto;
            object-fit: contain;
        }
      /* closed */
        .show-blic-cont h2{
            color: rgb(1, 1, 31);
            font-size: 18px;
            padding-top: 4px;
        }

        .show-blic-cont-2{
            border: 5px solid rgb(1, 1, 31);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .montessori{
            color: rgb(1, 1, 31);
            font-size: 16px;
        }
    }

</style>