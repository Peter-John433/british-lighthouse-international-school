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
   <div class="container-fluid executive-container">
        <div class="row">
            <div class="col col-sm col-lg ps-lg-5">
                <h1 class="display-5 text-white text-capitalize px-4 py-2">
                    Executive Director
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <!-- Executive-director-speech -->
    <div class="container-fluid-sm bg-white Executive-director-speech-container">
        <div class="container bg-light pt-5">
            <h3 class="py-3 ps-lg-0 text-center ">Executive Director's welcome Address</h3>
            <div class="row py-4">
                <div class="col-12 col-sm-12 col-lg-9 text-center text-lg-start ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda quibusdam magnam sequi cupiditate modi eligendi nulla sit veritatis delectus excepturi praesentium architecto quae, dolore doloremque! Illum repudiandae ratione magni aliquam quasi rem aspernatur ipsam, non omnis officiis! Aut, accusantium perspiciatis, quis nam sequi ipsum voluptates iusto laudantium tempora omnis porro dolor consequuntur adipisci? Quos, iure aspernatur accusantium, sapiente similique tenetur ducimus omnis ullam dolore doloribus repellat numquam mollitia cumque asperiores reiciendis culpa ipsa deleniti, adipisci maiores. Sed deleniti nulla doloremque, saepe labore obcaecati placeat, maiores aperiam consectetur laborum error? Esse temporibus numquam illo accusamus libero? Doloremque optio aliquid perferendis at voluptates inventore consectetur est dolore eum quisquam vel ullam cupiditate praesentium neque officiis illo incidunt nesciunt unde officia porro quas odio, sequi harum aliquam. Tenetur officia cumque nam nostrum incidunt mollitia aspernatur minima inventore perferendis dolorum eos error odio doloribus repellendus, quidem maxime explicabo ratione. Reprehenderit aut, vero fugit nesciunt ab dignissimos placeat quos atque, consequatur, molestiae dolore esse aliquid odio. Maiores dolorum odio rerum unde incidunt doloribus animi suscipit, sed eveniet fugit, aperiam debitis dolore inventore sequi, enim totam magnam quaerat facere. Eveniet in repudiandae nulla veritatis, doloribus dolorem! Quae quasi aspernatur animi molestiae hic velit iure consectetur.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis ad blanditiis perferendis error id culpa nemo? Voluptate officiis nemo, ratione sunt ipsam, minus sequi incidunt aperiam vitae mollitia corporis temporibus consequuntur dolorem, eligendi reiciendis voluptatibus eum. Aliquam ullam officia accusamus deserunt, pariatur delectus earum maxime, corrupti velit, corporis officiis.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dicta veniam illo error praesentium ipsa ipsum quod libero autem in, expedita magnam alias doloremque fuga! Optio unde, aliquam deleniti at deserunt, voluptatibus pariatur, dignissimos dolorum et eos fugiat. Veniam molestias vel placeat ipsam explicabo, ut necessitatibus fugiat quod aperiam praesentium illo dolores optio ipsa excepturi natus dicta temporibus autem aliquid laudantium libero tempora amet nisi! Maxime maiores, mollitia ipsam minus error voluptates perspiciatis veniam illo sequi est corporis quae fugiat eveniet accusamus molestiae ipsum natus quod, sed distinctio quis cumque voluptatum. Est et officiis quas temporibus fuga iste voluptas fugiat?
                    </p>
                </div>
                <div class="col-12 col-sm-12 col-lg-3 executive-img">
                   <img src="@/assets/img/office.jpg" class="img-fluid d-block mx-auto" alt="">
                    <div class="text-center">
                        <div class="text-uppercase text-center mt-2 fs-5 fw-bold text-secondary ">
                            Mr. peter john
                        </div>
                        <div class="text-secondary fw-light">
                            Executive Director
                        </div>
                        <div class="text-secondary fw-light">
                            BLIC
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

    .executive-container{
        /* background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../src/assets/img/british-logo.png); */
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
        font-size: 2rem;
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

    @media screen and (max-width: 992px) {
        .executive-container{
          justify-content: center;
          height: 600px;
        }
        /* closed */
         
    }

    @media screen and (max-width: 576px) {
        .executive-container{
          justify-content: center;
          height: 450px;
        }

        
        .Executive-director-speech-container h3{
            font-size: 1.2rem;
        } 
    }



</style>