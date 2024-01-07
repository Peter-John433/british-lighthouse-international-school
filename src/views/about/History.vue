<script setup>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Partner from '@/components/Partner.vue'
    import Blic from '@/components/Blic.vue'
    import 'animate.css'
    
</script>

<template>
   <Header/>
   <!-- about-page-container -->
   <div class="container-fluid about-page-container">
        <div class="row">
            <div class="col col-sm col-lg">
                <h1 class="display-5 text-white text-capitalize px-4 py-2 animate__animated animate__slow animate__pulse animate__infinite">
                    About our school
                </h1>
            </div>
        </div>
   </div>
   <!-- closed -->
   <div class="container-fluid-sm history-container bg-white">
      <div class="container history-container-2 bg-light">
        <div class="row">
            <div class="col col-sm col-lg-10 p-3 px-lg-4 py-lg-5 text-center text-lg-start letter-spacing-container">
                <h3 class="fw-bolder display-5 mb-3">
                    History
                </h3>
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
    background:linear-gradient(rgba(2, 2, 49, .4), rgba(2, 2, 49, .4)), url(../assets/img/britishlighthouse-1.jpg);
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    /* background-position: top left; */
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
        font-size: 2.4rem;
        /* text-shadow: 3px 3px 5px #000; */
    }  

    .letter-spacing-container{
        line-height: 2rem;
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
        }
        .Executive-director-speech-container h3{
            font-size: 1.5rem;
        } 
    }

</style>