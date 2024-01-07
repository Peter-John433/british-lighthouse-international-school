<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    import { ref } from 'vue'

    const formSub = ref({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    })
</script>

<template>
    <Header/>
   <!-- Executive-container -->
   <div class="container-fluid accreditation-and-affiliation-container-1">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2 animate__animated animate__slow animate__pulse animate__infinite">
                    contact us
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm  bg-white accreditation-and-affiliation-container">
        <div class="container px-3 px-lg-5">
            <div class="row py-4 gy-5 ">
                <div class="col-12 col-sm-6 col-lg-6 text-center text-lg-start mx-auto d-block d-lg-none">
                    <div>
                        <img src="@/assets/img/british-logo.png" class="img-fluid w-75 w-100 w-sm-50 d-block mx-auto" alt="">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-6 mx-auto  text-center text-lg-start ">
                    <div class="py-4 text-center">
                        <h4 class="mb-3 fw-bolder ">
                            Get in touch with us using the contact form below
                        </h4>
                        <form @submit.prevent="formSub">
                            <div>
                                <label for="firstname">FirstName</label>
                                <input type="text" name="firstname" id="firstname" placeholder="Enter your first name">
                            </div>
                            <div>
                                <label for="firstname">LastName</label>
                                <input type="text" name="lastname" id="lirstname" placeholder="Enter your last name">
                            </div>
                            <div>
                                <label for="email">email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email">
                            </div>
                            <div>
                                <label for="number">phone Number</label>
                                <input type="tel" name="number" id="number" placeholder="Enter your phone number">
                            </div>
                            <div>
                                <label for="message">message</label>
                                <textarea name="message" id="message" cols="40" rows="5"></textarea>
                            </div>

                            <div>
                                <button type="submit" class="btn bg-success text-white btn-lg  w-100 my-5 fw-bolder  text-capitalize ">submit</button>
                            </div>
                        </form>
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
        height: 400px;
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
        width: 100%;
        height: 300px;
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
    form{
        width: 100%;
        background-color: rgb(1, 1, 31);
        height: auto;
        border-radius: 20px;
        padding: 10px 16px;
    }
    label{
        display: block;
        color: #ffffff;
        text-align: start;
        font-weight: bold;
        font-size: 18px;
        padding: 5px 0;
        text-transform: capitalize;
    }
    input{
        width: 100%;
        margin-bottom: 10px;
        padding: 8px 16px;
        border-radius: 8px;
        outline: none;
        border: 0;
    }

    input:focus{
       /* border: 1px solid yellow; */
       outline-color: skyblue;
    }

    input[placeholder] {
        color: black;
       /* font-weight: bold; */
    }

    input[placeholder]:focus {
        background-color: yellow;
    }

    textarea{
        width: 100%;
        background-color: #ffffff;
    }

    textarea:focus{
       outline-color: skyblue;
       background-color: yellow;
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