<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid navbar-nav-check">
      <a class="navbar-brand ps-3 ps-md-5" href="#"><span class="navbar-brand-span"><sapn class="navbar-brand-span-2"><img src="@/assets/img/british-logo.png" class=" img-fluid header-logo" alt=""></sapn></span></a>
      <button class="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-fill d-flex flex-column flex-lg-row justify-content-md-around align-items-center ms-md-auto pe-3 pe-md-5">
          <li class="nav-item ">
             <a class="nav-link text-decoration-none text-capitalize" href="#"><router-link :to="{ name: 'home' }">Home</router-link></a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link text-decoration-none text-capitalize" role="button" data-bs-toggle="dropdown" href="#"><router-link :to="{ name: 'About' }">About</router-link></a>
              <ul class="dropdown-menu about-sub-menu">
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'Executive' }">Executive's Welcome Address</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'History' }">History</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{  name: 'Song' }">School Song</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{  name: 'HeadsOfSchool' }">Heads Of School</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link to="/About">Career Goal</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'Policies' }">School Polices</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'Fags' }">Faqs</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{  name: 'AccreditationAndAffiliation' }">Accreditation and Affiliation</router-link></a>
                  </li> 
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{  name: 'MissionVisionValue' }">Mission | Vision | Core Values</router-link></a>
                  </li>
              </ul>
          </li>
          <li class="nav-item dropdown">
               <a class="nav-link text-decoration-none text-capitalize" role="button" data-bs-toggle="dropdown" href="#"><router-link :to="{ name: 'Academics' }">Academics</router-link></a>
              <ul class="dropdown-menu about-sub-menu">
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'Curriculum' }">Our Curriculum</router-link></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'ExtraCurriculum' }">Co-curricula Activities</router-link></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'ELearning' }">E-Learning</router-link></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'Programs' }">Special Programs</router-link></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'Holiday' }">Holiday's Assignments</router-link></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'Sport' }">Sport</router-link></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'Calender' }">School Calender</router-link></a>
                </li>
              </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-decoration-none text-capitalize" href="#"><router-link :to="{ name: 'Boarding'}">Boarding</router-link></a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link text-decoration-none text-capitalize" role="button" data-bs-toggle="dropdown" href="#"><router-link  :to="{ name: 'Admission' }">Admission</router-link></a>
              <ul class="dropdown-menu about-sub-menu">
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'Why' }">Why choose british lighthouse</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'AdmissionProcess' }">Admission process</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'TuitionFee' }">Tuition and payment</router-link></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><router-link :to="{ name: 'Download' }">Download</router-link></a>
                  </li>
              </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link text-decoration-none text-capitalize" href="#"><router-link :to="{ name: 'Gallery' }">gallery</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-decoration-none text-capitalize" href="#"><router-link :to="{ name: 'Contact' }">contact us</router-link></a>
          </li>
        </ul>
      </div>
    </div>
   </nav>

   <router-view />
</template>

<style scoped>
      .router-link-exact-active {
        text-decoration: none;
        /* background-color: white; */
        color: rgb(1, 1, 31);
        /* color: #ffffff; */
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        border-bottom: 1px solid white;
        padding: 4px 16px;
        display: block;
        transition: all 500ms ease-in;
      }

   .header-logo{
      width: 70px;
   }
    .navbar{
      /* background-color: rgb(1, 1, 31); */
      background-color: #ffffff;
      padding: 15px 5px;
      
   }
   .navbar-brand-span{
    color: white;
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
   }

   .navbar-brand a{
    /* color: white; */
    color: rgb(1, 1, 31); 
   }
   .navbar-brand-span-2{
    color: yellow;
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
   }

   li{
    padding: 8px 10px;
   }

   li a{
    text-decoration: none;
    /* color: white; */
    color: rgb(1, 1, 31);
    text-transform: capitalize;
   }
   .about-sub-menu{
     width: 280px;
     font-size: 15px;
     margin-top: 1.5rem;
     border-top: 5px solid yellow;
   }

   .about-sub-menu  li{
       padding: 0;
       margin: 0;
   }
   .dropdown-menu{
      transition: all 1.5s ease-in-out;
     }
   .dropdown:hover .dropdown-menu{
       display: block;
     }

   @media screen and (max-width: 992px) {
     .dropdown-menu{
      transition: all 1.5s ease-in-out;
     }
     .dropdown:hover .dropdown-menu{
       display: block;
     }

     li{
          width: 100%;
          display: block;
          padding: 15px 0;
       }

       .about-sub-menu{
        /* background-color: rgb(1, 1, 31); */
        width: auto;
        text-align: center;
        width: auto;
        border: 0;
       }
   }

   @media screen and (max-width: 576px) {
       li{
          width: 100%;
          display: block;
          padding: 0px;
       }
      .about-sub-menu{
        /* background-color: rgb(1, 1, 31); */
        width: auto;
        text-align: center;
        width: auto;
        border: 0;
   }
   .header-logo{
      width: 50px;
   }

  }
</style>
