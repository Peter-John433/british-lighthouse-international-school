<script setup>
   import 'animate.css'
   import Footer from '@/components/Footer.vue'
   import Header from '@/components/Header.vue'
   import Blic from '@/components/Blic.vue'
   import Parnter from '@/components/Partner.vue'
   import Event from '@/components/NewsEvent.vue'
   import Top from '@/components/Top.vue'
   import Apply from '@/components/Apply.vue'
   import Enrol from '@/components/Enrol.vue'
   import Calender from '@/components/Calender.vue'
   import Welcome from '@/components/Welcome.vue'
   import '@splidejs/vue-splide/css/skyblue';
   import '@splidejs/vue-splide/css/sea-green';
   import { ref } from 'vue'

const slideOptions = ref({
	perPage: 1,
	width: '100%',
	gap: 20,
	arrows: false,
    height: "300px",
    perMove: 1,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    drag: true,
    autoplay: true,
    interval: 3000,
    waitForTransition: true,
    paginationDirection: 'ltr',
    pagination: false,
    type: 'loop'
	// breakpoints: { 992: { perPage: 1, gap: 10, width: "100%", height: "auto", padding: {top: "5rem", bottom: "5rem"}}}
})

const slideOptions2 = ref({
    perPage: 1,
	width: "100%",
    perMove: 1,
    direction: 'ttb',
    autoplay: true,
    height: '400px',
    arrows: false,
    type: 'loop',
    pagination: false
})
</script>

<template>
    <Top />
    <Header/>

    <!-- Carousel -->
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/img/british-1.jpg" alt="britishlighthouse" class="d-block" style="width:100%">
                <div class="carousel-caption animate__animated animate__slower animate__infinite animate__zoomIn">
                    <h2 class="text-capitalize ">british lighthouse international college</h2>
                    <p>No. 39, Adebayo Moukulo Street, Anthony Village, Lagos.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/britishlighthouse-1.jpg" alt="britishlighthouse" class="d-block" style="width:100%">
                <div class="carousel-caption animate__animated animate__slower animate__infinite animate__pulse">
                    <h2 class="text-capitalize ">british lighthouse international college</h2>
                    <p>No. 39, Adebayo Moukulo Street, Anthony Village, Lagos.</p>
                </div> 
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/britishlighthouse-2.jpg" alt="britishlighthouse" class="d-block" style="width:100%">
                <div class="carousel-caption animate__animated animate__slower animate__infinite animate__pulse">
                    <h2 class="text-capitalize ">british lighthouse international college</h2>
                    <p>No. 39, Adebayo Moukulo Street, Anthony Village, Lagos.</p>
                </div>  
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/computer.webp" alt="britishlighthouse" class="d-block" style="width:100%">
                <div class="carousel-caption animate__animated animate__slower animate__infinite animate__zoomIn">
                    <h2 class="text-capitalize ">british lighthouse international college</h2>
                    <p>No. 39, Adebayo Moukulo Street, Anthony Village, Lagos.</p>
                </div>  
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/Classroom_Students_ScienceLab_Indoor.webp" alt="britishlighthouse" class="d-block" style="width:100%">
                <div class="carousel-caption animate__animated animate__slower animate__infinite animate__pulse">
                    <h2 class="text-capitalize ">british lighthouse international college</h2>
                    <p>No. 39, Adebayo Moukulo Street, Anthony Village, Lagos.</p>
                </div>  
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/Private-education.jpg" alt="britishlighthouse" class="d-block" style="width:100%">
                <div class="carousel-caption">
                    <h2 class="text-capitalize animate__animated animate__slower animate__infinite animate__zoomIn">british lighthouse international college</h2>
                    <p>No. 39, Adebayo Moukulo Street, Anthony Village, Lagos.</p>
                </div>  
            </div>
        </div>

            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-black rounded-5 p-3"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-black rounded-5 p-3"></span>
            </button>
    </div>
    <!-- closed -->
    <Apply />

    <Enrol />

    <Welcome />

    <Calender />
    <!-- welcome speech -->
    <!-- <div class="container-fluid px-5 site welcome-address  py-5">
        <div class="row d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-center display-6 fs-3 mb-3">Welcome Address</h2>
            <div class="col col-sm col-lg-5 mx-auto border border shadow-sm rounded p-4">
                <img src="@/assets/img/office.jpg" class="d-block mx-auto img-fluid" alt="">
                <div class="welcome-address-text py-1">
                    <p class="text-capitalize text-white text-center">Mr. Andre Henderson</p>
                    <p class="text-capitalize text-white text-center">Executive Director, British lighthouse school</p>
                </div>
            </div>
            <div class="col col-sm col-lg show-box-text">
                <p class="text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error amet hic voluptatum accusamus et excepturi numquam nemo a sapiente itaque dolor veniam omnis adipisci enim ut provident cumque explicabo quod deserunt mollitia, doloremque eius! Iusto cum quis tenetur ea ullam autem neque eius illum ipsa, asperiores sit odio eveniet, quas modi quisquam soluta nihil possimus incidunt inventore perferendis aliquid! A quae eum perferendis libero nostrum quam impedit illum eligendi aspernatur, esse quasi architecto voluptates doloribus placeat pariatur cum natus beatae aut totam dolor sunt aperiam. Excepturi molestias cum tempore nemo expedita minima, reiciendis aspernatur quis aperiam nam esse aliquam?
                    <p class="text-center text-capitalize fw-bolder "><a href="#" class="text-center text-decoration-none btn btn-outline-warning ">read more</a></p>
                </p>
                <hr>
            </div>
        </div>
    </div> -->
    <!-- closed -->

    <!-- <div class="container mt-5 schhol-name animate__animated animate__slower animate__backInLeft animate__delay-3s  animate__infinite">
        <div class="row">
            <div class="col-sm">
                <h2 class="text-center text-uppercase fw-bold fs-1 display-5">british lighthouse international college</h2>
                <p class="text-center lead fs-5 fw-light "><span class="motto">Motto:</span> To empower students to achieve academic excellence and realise their optimum potential through internsive teaching methods using modern technology.</p>
            </div>
        </div>
    </div> -->
     
    <!-- school activites -->
    <!-- <div class="container-fluid mt-0 school-site site py-5">
        <h1 class="text-center mb-4 fw-bolder fs-3 text-uppercase py-3 rounded">School tour</h1>
        <div class="row-sm d-flex flex-column flex-md-row align-items justify-content-center flex-wrap gap-5 mx-auto ">
            
            <div class="col col-sm-5 col-lg-5 school-activities-box text-center rounded">
                <h2 class="text-black fs-4 py-1">courses</h2>
                <div>
                    <img src="@/assets/img/courses.jpg" alt="british-lighthouse" class="shrink-0 img-fluid ">
                </div>
                <a href="#" type="button" class="btn btn-light border-0 mx-auto d-block  px-4 fw-bold fs-6 rounded d-flx justify-content-center align-items-center my-3">visit site <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-white animate__animated animate__flash animate__delay-2s  animate__infinite animate_slower" /></a>
            </div>

            <div class="col col-sm-5 col-lg-5 school-activities-box text-center rounded">
                <h2 class="text-white fs-4 py-1">admission</h2>
                <div>
                    <img src="@/assets/img/admission.png" alt="british-lighthouse" class="shrink-0 img-fluid ">
                </div>
              
               <a href="#" class="btn btn-light border-0 mx-auto d-block px-4 fw-bold fs-6 rounded my-3">visite site <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-white animate__animated animate__flash animate__delay-2s  animate__infinite animate_slower" /></a>
            </div>

            <div class="col col-sm-5  col-lg-5 school-activities-box text-center rounded">
                <h2 class="text-white fs-4 py-1">junior class</h2>
                <div>
                    <img src="@/assets/img/private-education.jpg" alt="british-lighthouse" class="shrink-0 img-fluid ">
                </div>
                <a href="#" class="btn btn-light border-0 mx-auto d-block px-4 fw-bold fs-6 rounded my-3">visit site <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-white animate__animated animate__flash animate__delay-2s  animate__infinite animate_slower" /></a>
            </div>

            <div class="col col-sm-5 col-lg-5 school-activities-box text-center rounded">
                <h2 class="text-white fs-4 py-1">senior class</h2>
                <div>
                    <img src="@/assets/img/british-1.jpg" alt="british-lighthouse" class="shrink-0 img-fluid ">
                </div>
                <a href="#" class="btn btn-light border-0 mx-auto d-block px-4 fw-bold fs-6 rounded my-3">visit site <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-white animate__animated animate__flash animate__delay-2s  animate__infinite animate_slower" /></a>
            </div>
        </div>
    </div> -->
    <!-- closed -->

    <!-- our school -->
    <div class="container-fluid py-5 our-school-container">
        <h2 class="text-center text-uppercase fs-sm-1 display-5 pt-5 text-light mt-auto mt-sm-5">Our School</h2>
        <p class="text-center fs-sm-3 fw-bold p-5 text-light">Here are some statistics about our school.</p>
        <div class="row d-flex flex-column  flex-sm-row justify-content-center align-items-center mx-auto flex-wrap gap-5 gap-lg-4 ms-sm-5">
            <div class="col-12 col-sm-5 col-lg d-flex justify-items-center align-items-center gap-2">
                <!-- <font-awesome-icon :icon="['fas', 'certificate']" class="display-1 text-warning me-2 animate__animated animate__rotateIn animate__delay-2s  animate__infinite animate_slower" /> -->
                <i class='bx bx-certification display-1 text-warning me-2 animate__animated animate__rotateIn animate__delay-2s  animate__infinite animate_slower'></i>
                <div class="text-white text-capitalize fw-bold fs-5">
                    <div class="count">80</div>
                    <div>certified teachers</div>
                </div>
            </div>
            <div class="col-12 col-sm-5 col-lg d-flex justify-items-center align-items-center gap-2">
                <!-- <font-awesome-icon :icon="['fas', 'building-columns']" class="display-1 text-warning me-2 animate__animated animate__pulse animate__delay-2s  animate__infinite animate_faster"/> -->
                <i class='bx bxs-school display-1 text-warning me-2 animate__animated animate__pulse animate__delay-2s  animate__infinite animate_faster'></i>
                <div class="text-white text-capitalize fw-bold fs-5">
                    <div class="count">100%</div>
                    <div>passing to universities</div>
                </div>
            </div>
            <div class="col-12 col-sm-5 col-lg d-flex justify-items-center align-items-center gap-2">
                <font-awesome-icon :icon="['fas', 'school-flag']" class="display-1 text-warning me-2 animate__animated animate__pulse animate__delay-2s  animate__infinite animate_faster"/>
                <div class="text-white text-capitalize fw-bold fs-5">
                    <div class="count">3</div>
                    <div>schools</div>
                </div>
            </div>
            <div class="col-12 col-sm-5 col-lg d-flex justify-items-center align-items-center gap-2">
                <!-- <font-awesome-icon :icon="['fas', 'calendar']" class="display-1 text-warning me-2 animate__animated animate__pulse animate__delay-2s  animate__infinite animate_faster"/> -->
                <i class='bx bx-calendar display-1 text-warning me-2 animate__animated animate__pulse animate__delay-2s  animate__infinite animate_faster'></i>
                <div class="text-white text-capitalize fw-bold fs-5">
                    <div class="count">20</div>
                    <div>years old</div>
                </div>
            </div>
        </div>
    </div>
    <!-- closed -->
     <Event />
       
     <!-- <Tour /> -->

     <!-- <Display /> -->
    <div class="container-fluid py-5 slide-container text-center">
        <div class="container">
            <div class="fw-bolder fs-1 text-black text-center text-lg-center text-capitalize ">WHat our parents say:</div>
            <div class="row">
                <div class="col col-sm col-lg">
                    <Splide :options="slideOptions" aria-label="My Favorite Images">
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    I would like to take this opportunity to thank you and all the teachers for the kindness and guidance to my daughter during the past year. Your tender loving care is much. <span class="display-5">&#128525;</span>
                                </div>
                                <div class="slide-child2 text-danger">
                                    Adedeji Kunle
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                           <div class="slide-container-2">
                                <div class="slide-child">
                                    Great choice, great teachers and classmates, kids will remember this wonderful experience. 
                                </div>
                                <div class="slide-child2 text-danger">
                                    Ayo Babatunde
                                </div>
                           </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    Thank you for your kindness and care with our son and with all children!
                                </div>
                                <div class="slide-child2 text-danger">
                                    Yomi deji
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    I like the way the children are been encourage to believe in themselves, It helps good development. <span class="display-5">&#128516;</span>
                                </div>
                                <div class="slide-child2 text-danger">
                                    Adeleke Bunmi
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    British Lighthouse School is one of the best British school in Lagos and Nigeria
                                </div>
                                <div class="slide-child2 text-danger">
                                    Micheal Edward
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    I am impressed with your curriculum and teaching methods which is different from other schools. Well planned worksheets for practice makes my child think beyond prescribed Textbooks.
                                </div>
                                <div class="slide-child2 text-danger">
                                    ajidagba
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    The child is progressing well academically. His confidence has boosted up a lot as earlier he was very introvert.
                                </div>
                                <div class="slide-child2 text-danger">
                                    Chioma Udoka
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    We are very satisfied. Our child always gets ample opportunities to explore and progress in all aspects. The school has been successful in striking an appropriate balance between Academic and Co-Curricular activities.
                                </div>
                                <div class="slide-child2 text-danger">
                                    Yahaya Bello
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    Highly appreciated the pains taken by the teachers and the day boarding staff for the academic improvement of my daughter and boosting her confidence in other activities too.
                                </div>
                                <div class="slide-child2 text-danger">
                                    Chidinma Felix
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class="slide-container-2">
                                <div class="slide-child">
                                    I like to take this privilege to congratulate the management of the School for its endless efforts. We are really feeling proud of all the teachers and the school as a whole. Teacher uses 2D & 3D multimedia modules to teach and my child loves it.
                                </div>
                                <div class="slide-child2 text-danger">
                                    Funke
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    </div> 
    
    <!-- school tour -->
    <div class="container-fluid-sm  bg-white accreditation-and-affiliation-container">
        <div class="container-fluid pt-5 pb-1 px-3 px-lg-5 bg-light">
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg-12 text-center">
                    <div class="py-5">
                        <h4 class="display-5">
                           School Tour
                        </h4>
                    </div>
                </div>
            </div>
            <div class="row row-gap-4  ">
                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container position-relative ">
                        <img src="@/assets/img/private-education.jpg" class="img-fluid" alt="">
                        <div class="img-overlay">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce  animate__infinite">Junior students class room   </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container position-relative ">
                        <img src="@/assets/img/boarding-1.jpg" class="img-fluid" alt="">
                        <div class="img-overlay">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce  animate__infinite">female hostel</div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container position-relative ">
                        <img src="@/assets/img/boarding-4.jpg" class="img-fluid" alt="">
                        <div class="img-overlay">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce animate__infinite">male hostel</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-gap-4 mt-4">
                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-2 position-relative ">
                        <img src="@/assets/img/computer.webp" class="img-fluid" alt="">
                        <div class="img-overlay-2">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce  animate__infinite">ICT class</div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-2 position-relative ">
                        <img src="@/assets/img/boarding-4.jpg" class="img-fluid" alt="">
                        <div class="img-overlay-2">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce  animate__infinite">Students hostel</div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-2 position-relative ">
                        <img src="@/assets/img/Classroom_Students_ScienceLab_Indoor.webp" class="img-fluid" alt="">
                        <div class="img-overlay-2">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce  animate__infinite">science laboratory</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-gap-4 mt-4">
                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-3 position-relative ">
                        <img src="@/assets/img/handicraft.jpg" class="img-fluid" alt="">
                        <div class="img-overlay-3">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce  animate__infinite">creative class</div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-3 position-relative ">
                        <img src="@/assets/img/musical.jpeg" class="img-fluid" alt="">
                        <div class="img-overlay-3">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce animate__infinite">musical class</div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-3 position-relative ">
                        <img src="@/assets/img/boarding-3.jpg" class="img-fluid" alt="">
                        <div class="img-overlay-3">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce  animate__infinite">students hostel</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-gap-4 mt-4">
                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-4 position-relative ">
                        <img src="@/assets/img/boarding-2.jpg" class="img-fluid" alt="">
                        <div class="img-overlay-4">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce animate__infinite">students in the dinning</div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-4 position-relative ">
                        <img src="@/assets/img/boarding-2.jpg" class="img-fluid" alt="">
                        <div class="img-overlay-4">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce animate__infinite">students in the dinning</div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-4">
                    <div class="img-container-4 position-relative ">
                        <img src="@/assets/img/boarding-2.jpg" class="img-fluid" alt="">
                        <div class="img-overlay-4">
                            <div class="img-text position-absolute  animate__animated animate__slow animate__bounce animate__infinite">Students in the hostel</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <router-link :to="{ name: 'MoreGallery' }" class="mx-auto">View MoreGallery</router-link>
            </div>
        </div>
    </div>
    <!-- closed -->

    <!-- staffs splide -->
    <div class="container-fluid pt-4  slider-cont">
        <div class="row">
            <div class="col col-sm col-lg-6  mx-auto p-0">
                <Splide :options="slideOptions2" aria-label="My Favorite Images">
                    <SplideSlide>
                        <div class="slider-img">
                           <img src="@/assets/img/british-1.jpg" class="img-fluid" alt="">
                           <div class="img-div"></div>
                           <div class="img-div-2">
                               <div>Mr. Samson</div>
                               <div>Biology teacher</div>
                               <div>Blic</div>
                           </div>
                           <div class="img-div-3">
                               <div class="img-font-1">
                                  <font-awesome-icon :icon="['fas', 'phone']" />
                               </div>
                               <div class="my-3 img-font-2">
                                  <font-awesome-icon :icon="['fas', 'envelope']" />
                               </div>
                               <div class="img-font-3">
                                  <font-awesome-icon :icon="['fas', 'earth-oceania']" />
                               </div>
                           </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide >
                          <div class="slider-img">
                            <img src="@/assets/img/british-1.jpg" class="img-fluid" alt="">
                          <div class="img-div"></div>
                           <div class="img-div-2">
                               <div>Mr. Samson</div>
                               <div>Biology teacher</div>
                               <div>Blic</div>
                           </div>
                           <div class="img-div-3">
                               <div class="img-font-1">
                                  <font-awesome-icon :icon="['fas', 'phone']" />
                               </div>
                               <div class="my-3 img-font-2">
                                  <font-awesome-icon :icon="['fas', 'envelope']" />
                               </div>
                               <div class="img-font-3">
                                  <font-awesome-icon :icon="['fas', 'earth-oceania']" />
                               </div>
                           </div>
                         </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="slider-img">
                            <img src="@/assets/img/british-1.jpg" class="img-fluid" alt="">
                           <div class="img-div"></div>
                            <div class="img-div-2">
                               <div>Mr. Samson</div>
                               <div>Biology teacher</div>
                               <div>Blic</div>
                            </div>
                            <div class="img-div-3">
                               <div class="img-font-1">
                                  <font-awesome-icon :icon="['fas', 'phone']" />
                               </div>
                               <div class="my-3 img-font-2">
                                  <font-awesome-icon :icon="['fas', 'envelope']" />
                               </div>
                               <div class="img-font-3">
                                  <font-awesome-icon :icon="['fas', 'earth-oceania']" />
                               </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
    <!-- closed -->
     <Blic />
      
     <Parnter />

     <Footer/>
    <!-- closed -->

</template>

<style scoped>
    .slide-container{
        background: rgba(255, 255, 0, 0.96);
    }
    .slide-container-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 300px;
    }
    .slide-child{
        color: rgb(1, 1, 31);
        font-size: 23px;
        font-weight: 700;
    }

    .slide-child2{
        margin-top: 2rem;
        font-weight: 600;
    }

    .slider-cont{
        overflow: hidden;
        background-color: yellow;
        height: 450px;
    }
    
    .slider-img{
        position: relative;
    }
    .img-div{
       position: absolute;
       left: 0%;
       top: 0%;
       right: 0%;
       bottom: 0%;
       background-color: rgba(0, 0, 0, 0.5);
    }
    .img-div-2{
        position: absolute;
        bottom: 0%;
        left: 5%;
        color: yellow;
        font-weight: 900;
    }
    .img-div-3{
        position: absolute;
        right: 5%;
        top: 10%;
        color: #f1f1f1;
        font-size: 1.5rem;
    }
    .img-font-1{
        background-color: yellow;
        color: rgb(1, 1, 31);
        padding: 10px 15px;
        border-radius: 50%;
        cursor: pointer;
    }
    .img-font-1:hover{
        background-color: rgb(228, 228, 7);
        color: rgb(1, 1, 31);
    }
    .img-font-2{
        background-color: yellow;
        color: rgb(1, 1, 31);
        padding: 10px 15px;
        border-radius: 50%;
        cursor: pointer;
    }
    .img-font-2:hover{
        background-color: rgb(228, 228, 7);
        color: rgb(1, 1, 31);
    }
    .img-font-3{
        color: rgb(1, 1, 31);
        padding: 10px 15px;
        border-radius: 50%;
        background-color: yellow;
        cursor: pointer;
    }
    .img-font-3:hover{
        background-color: rgb(228, 228, 7);
        color: rgb(1, 1, 31);
    }

   .carousel-item img{
        height: 100vh;
        object-fit: cover;
   }

   .carousel-inner{
     position: relative;
   }
   .carousel-caption{
    /* color: white; */
    color: yellow;
    border-radius: 50px;
    color: rgb(1, 1, 31);
    position: absolute;
    height: 150px;
    width: 350px;
    bottom: 0%;
    top: 30%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0%;
   }
   .carousel-caption h2{
      /* color: #f1f1f1; */
     color: yellow;
      font-weight: 600;
      font-size: 18px;
   }

   .show-box-text hr{
    color: rgb(1, 1, 31);
    font-size: 20px;
    font-weight: bold;
   }

  
  p{
    color: white;
   }

   .school-site img{
    max-width: 600px;
    height: 300px;
    width: 100%;
   }

   .school-site a{
    background-color: rgb(1, 1, 31);
    color: white;
    width: 50%;
   }

   .school-site a:hover{
    background-color: rgb(2, 2, 49);
   }

    h1{
    background-color: rgb(1, 1, 31);
    color: white;
    border-left: 20px solid yellow;
    border-right: 20px solid yellow;
   }
   .school-activities-box{
     background-color: white;
     border: 1px solid #f1f1f1;
     box-shadow: 1px 1px 3px grey;
     transition: all 0.3s ease-in-out;
   }

   .school-activities-box:hover{
      transform: scale(0.97)
   }

   .accordion-btn{
      background-color: rgb(1, 1, 31);
      color: white;
   }

   .welcome-address img{
      max-width: 600px;
      width: 100%;

   }

   .welcome-address-text{
      background-color: rgb(1, 1, 31);
      border-bottom: 4px solid yellow;
   }

   /* our-school-container */
   .our-school-container{
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/img/school-foto-as-cover-foto.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height: 700px;
   }

   /* news-events-container */
   .news-events-container-text{
     background-color: rgb(1, 1, 31);
     color: white;
     cursor: pointer;
     height: 300px;
   }
    /* closed */

    /* accreditation container */
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

    /* img */
    img{
        width: 100%;
        height: 300px;
        display: block;
    }

    .img-overlay{
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        background-color: rgba(2, 2, 49, .5);
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: .5s ease;
    }

    .img-overlay-2{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(2, 2, 49, .5);
        overflow: hidden;
        width: 0;
        height: 100%;
        transition: .5s ease;
    }

    .img-overlay-3{
        position: absolute;
        bottom: 0;
        left: 100%;
        right: 0;
        background-color: rgba(2, 2, 49, .5);
        overflow: hidden;
        width: 0;
        height: 100%;
        transition: .5s ease;
    }

    .img-overlay-4{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(2, 2, 49, .5);
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: .5s ease;
    }

    .img-container:hover .img-overlay {
        bottom: 0;
        height: 100%;
    }

    .img-container-2:hover .img-overlay-2 {
       width: 100%;
    }

    .img-container-3:hover .img-overlay-3 {
        left: 0;
       width: 100%;
    }

    .img-container-4:hover .img-overlay-4 {
       height: 100%;
    }

    .img-text{
        white-space: nowrap; 
        color: white;
        font-size: 15px;
        position: absolute;
        overflow: hidden;
        font-weight: 700;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
         background: linear-gradient(97.03deg, #f5f5f7 14.69%, #33D96B 50.99%, yellow 93.47%);
        -webkit-text-fill-color: transparent; 
        -webkit-background-clip: text;
    }
    /* closed */

    /* h4 and h5 */
    h4{
        color: rgb(1, 1, 31);
        font-weight: bold;
    }

    h5{
        color: rgb(1, 1, 31);
        font-weight: bold;
        font-size: 18px;
    }
    /* closed */

    a{
        text-decoration: none;
        display: block;
        margin: 4rem 0;
        width: 200px;
        background-color: rgb(1, 1, 31);
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        padding: 10px;
        border-radius: 10px;
        border: 4px solid #ffff00;
    }
    /* closed */


   @media screen and (max-width: 992px) {
    .school-site img{
        max-width: 400px;
        height: 200px;
        width: 100%;
    }

   .school-site a{
      width: 50%;
   }

   accreditation-and-affiliation-container{
        justify-content: center;
        }
        /* closed */
        
        img{
            height: 200px;
            object-fit: cover;
       }

       .img-text{
            left: 20%;   
            font-size: 10px;
        }
   }

   @media screen and (max-width: 576px) {
    .carousel-item img{
            /* padding-top: 10px; */
            width: 100%;
            height: 60vh;
            object-fit: cover;
        }

        .our-school-container{
         height: auto;
      }

      .carousel-caption{
        position: absolute;
        height: 150px;
        width: 250px;
        bottom: -10%;
        background-color: rgba(0, 0, 0, 0.3);
        margin: auto;
     }
   .carousel-caption h2{
      /* color: #f1f1f1; */
      color: yellow;
      font-weight: 600;
      font-size: 18px;
   }
 
   .slide-child{
        font-size: 13px;
    }

    .slide-child2{
        font-size: 12px;
    }

   .img-div-2{
       font-size: 12px;
       padding: 0%;
       margin: 0%;
    }

    .img-div-3{
        position: absolute;
        right: 5%;
        top: 10%;
        color: #f1f1f1;
        font-size: 10px;
    }
    .img-font-1{
        background-color: yellow;
        color: rgb(1, 1, 31);
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-font-1:hover{
        background-color: rgb(228, 228, 7);
        color: rgb(1, 1, 31);
        padding: 0;
        border-radius: 50%;
    }

    .img-font-2{
        background-color: yellow;
        color: rgb(1, 1, 31);
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-font-2:hover{
        background-color: rgb(228, 228, 7);
        color: rgb(1, 1, 31);
        border-radius: 50%;
    }

    .img-font-3{
        color: rgb(1, 1, 31);
        padding: 10px;
        border-radius: 50%;
        background-color: yellow;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-font-3:hover{
        background-color: rgb(228, 228, 7);
        color: rgb(1, 1, 31);
        border-radius: 50%;
    }
    
    .accreditation-and-affiliation-container{
        justify-content: center;
        }

        .accreditation-and-affiliation-container h3{
            font-size: 1.5rem;
        } 

        img{
            height: 250px;
            object-fit: cover;
       }

       .img-text{
            /* left: 30%;    */
            left: 35%;
            font-size: 15px;
            
       }
  }

</style>
