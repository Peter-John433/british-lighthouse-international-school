<template>
     <!-- footer-container -->
    <div class="container-fluid pt-5 px-5 footer-container">
        <div class="row d-flex flex-column flex-sm-row text-center text-sm-start   justify-content-center ">
            <div class="col col-sm col-lg text-white">
                <h2 class="mb-5 fs-2 text-capitalize fw-lighter border-bottom pb-4">About Us</h2>
                <p>
                    The School believes in building a solid foundation for the child and as such, we strive to turn out students with passion for excellence and who have been adequately prepared for tertiary education and life.
                </p>
                <div class="py-5">
                    <img src="@/assets/img/british-logo.png" class="img-fluid" alt="" loading="lazy">
                </div>
            </div>
            <div class="col col-sm col-lg text-white">
                <h2 class="mb-5 fs-2 text-capitalize fw-lighter border-bottom pb-4">Popular links</h2>
                 <div>
                    <router-link :to="{ name: 'TuitionFee' }">Payment</router-link> <br>
                    <router-link :to="{ name: 'AdmissionProcess' }">Admission</router-link> <br>
                    <router-link :to="{ name: 'TuitionFee' }">Tuition and Payment</router-link> <br>
                    <router-link :to="{ name: 'Gallery' }">Gallery</router-link> <br>
                    <router-link :to="{ name: 'Curriculum' }">School Curriculum</router-link> <br>
                    <router-link :to="{ name: 'ExtraCurriculum' }">Co-Curricular Activities</router-link>
                 </div>
            </div>
            <div class="col col-sm col-lg text-white">
                <h2 class="mb-5 fs-2 text-capitalize fw-lighter border-bottom pb-4">Contact Us</h2>
                <div class="mb-3">
                    <font-awesome-icon :icon="['fas', 'phone']" /> +234 0819 772 2542, <br> 
                    <font-awesome-icon :icon="['fas', 'phone']" />  +234 0808 303 7400, <br> 
                    <font-awesome-icon :icon="['fas', 'phone']" /> +234 000 000 0000.
                </div>
                <div class="mb-3">
                    <font-awesome-icon :icon="['fas', 'envelope']" /> info@lorem5.com <br> admissions@Blicschools.com
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'earth-oceania']" /> Lagos: No. 39, Adebayor Moukulo <br> Street, Anthony Village, Lagos. <br>
                </div>

            </div>
            <hr class="text-white">
            <div class="text-center fw-bolder fs-6 text-capitalize ">
                British lighthouse school .Copyright.2023...All Aight reserved
            </div>
        </div>
    </div>
    <!-- closed -->
</template>

<script>
    
</script>

<style scoped>
a{
    color: white;
    transition: all 200ms ease-in-out;
}

a:hover{
    color: yellow;
}
  .footer-container{
      background-color: rgb(1, 1, 31);
   }
</style>