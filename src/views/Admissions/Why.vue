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
                    Why choose british lighthouse
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm pt-5 bg-white accreditation-and-affiliation-container">
        <div class="container">
            <h3 class="py-3 ps-lg-0 text-center ">Why choose british lighthouse?</h3>
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg-12 text-center text-sm-start accreditation-and-affiliation-container-text">
                    <div>
                        We understand that educating your child is perhaps your most important responsibility as a parent. And as you look for a partner, in whom you can entrust the most precious gift God has granted you, we are grateful for considering <span class="fw-bold ">British Lighthouse International School</span> amongst your preferences.Choosing the right school marks a new beginning in the life of your child. Taking one’s time to explore educational options is an important decision for any family or parent We hope to become your school of choice.
                    </div>
                    <div>
                        <span class="fw-bold ">British Lighthouse International School</span> is a home to a collaborative, supportive, diverse, and ever-augmenting community more like a family than a school. British lighthouse prides itself on consistent academic achievements, qualitative entrepreneurship/vocational training,  state of the art facilities, excellent faculty, conducive environments and a personalized approach to teaching and learning.
                    </div>
                   <div>
                      Well-rounded education is of paramount importance at British Lighthouse. We guide all students to develop personal integrity and leadership skills which they can draw from for the rest of their lives,We help students develop a growth mindset that enables them to become more innovative in solving global problems.
                   </div>
                   <div>
                       We are proud to have an educational legacy of 25 years which has equipped multiple generations to experience success both in Nigeria and across the globe. We are a group of schools that nurtures pupils from kindergarten to high school.
                   </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-12 text-start">
                    <h2 class="pt-5 fw-bold fs-4">
                        Here are some of the programs your child will benefits from:
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid sea-school-container">
        <div class="container py-5">
            <div class="row py-5 d-flex flex-row justify-content-center align-items-center flex-wrap row-gap-4 row-gap-lg-5">
                <div class="col-12 col-sm-6 col-lg-6 text-start">
                    <div class="text-container">
                        <img src="@/assets/img/sea-school.jpg" draggable="false" alt="">
                       <div class="overlay">
                          <div class="text">
                              <h4>Leadership training</h4>
                          </div>
                       </div>
                    </div>    
                </div>
                <div class="col-12 col-sm-6 col-lg-6 text-start">
                    <div class="text-container">
                        <img src="@/assets/img/sea-school.jpg" draggable="false" class="" alt="">
                       <div class="overlay">
                          <div class="text">
                              <h4>Education Fair</h4>
                          </div>
                       </div>
                    </div>    
                </div>
                <div class="col-12 col-sm-6 col-lg-6 text-start">
                    <div class="text-container">
                        <img src="@/assets/img/sea-school.jpg" draggable="false" alt="">
                        <div class="overlay">
                            <div class="text">
                              <h4>Vocational Skills</h4>
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-12 col-sm-6 col-lg-6 text-start">
                    <div class="text-container">
                        <img src="@/assets/img/sea-school.jpg" draggable="false" class="" alt="">
                        <div class="overlay">
                            <div class="text">
                               <h4>Mentor/Mentee</h4>
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-12 col-sm-6 col-lg-6 text-start">
                    <div class="text-container">
                        <img src="@/assets/img/sea-school.jpg" draggable="false" class="" alt="">
                        <div class="overlay">
                            <div class="text">
                               <h4>Mentor/Mentee</h4>
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-12 col-sm-6 col-lg-6 text-start">
                    <div class="text-container">
                        <img src="@/assets/img/sea-school.jpg" draggable="false" class="" alt="">
                        <div class="overlay">
                            <div class="text">
                               <h4>Mentor/Mentee</h4>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5 bg-white">
        <div class="container">
            <div class="row">
            <div class="col-12 col-sm col-lg">
                <ul>
                    <li class="fw-bold">develop thinking skills required to gain admission and scholarship into word-class universities.</li>
                    <li class="fw-bold">experience global teaching methods based on international best practice.</li>
                    <li class="fw-bold">be trained to become an innovative, world-class student</li>
                    <li class="fw-bold">develop core analytical skills required to solve global problems</li>
                </ul>

                <!-- <div class="py-4">
                    <a href="#" class="btn btn-lg  read-button btn-outline-warning text-capitalize fw-bold float-end clearfix">read more</a>
                </div> -->
            </div>
        </div>
        </div>
    </div>
   <!-- closed -->
   <Blic />
   <Partner />
  
    <Footer />
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
    .sea-school-container{
        background-color: yellow;
    }
    .sea-school-container img{
         max-width: 500px;
         width: 100%;
         margin: 0 auto;
         display: block;
         height: 300px;
         object-fit: cover;
         cursor: pointer;
         border-radius: 10px;
    }
    /* closed */

    /* sea-text-container */
.text-container {
  position: relative;
  width: 100%;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(1, 1, 31);
  overflow: hidden;
  width: 60%;
  height: 50%;
  transition: .5s ease;
  cursor: pointer;
}
.text-container:hover .overlay{
  height: 0%;
}
.text {
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.text h4{
    border-bottom: 3px solid gold;
    font-weight: 300;
    letter-spacing: 1.6px;
}
 /* closed */
  /* .read-button{
    background-color: rgb(1, 1, 31);
    color: white;
    display: inline;
    word-break: keep-all;
  } */

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
      /* closed */

      .sea-school-container img{
         height: 250px;
      }

     .text h4{
        font-size: 16px;
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
    }


    @media screen and (max-width: 576px) {
        .accreditation-and-affiliation-container{
        justify-content: center;
        }
        
        .accreditation-and-affiliation-container h3{
            font-size: 1.5rem;
        } 

        .accreditation-and-affiliation-container-1{
            height: 450px;
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

      .sea-school-container img{
         height: 250px;
      }

     .text h4{
        font-size: 16px;
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
    }



</style>