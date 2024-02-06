<script setup>

</script>

<template>
    <div class="container-fluid bg-white py-5 px-0">
        <div class="container">
            <h2 class="text-center text-black mb-5">News and Events</h2>
            <div class="row gap-4 gap-sm-0">
                <div class="col-12 col-md-6 col-lg">
                    <div class="card rounded-0">
                        <div class="inner">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top rounded-0" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Arts and cultures contest</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ea ab, saepe ad quaerat cumque. Magni maiores incidunt ullam provident laborum, ipsum unde quos. Necessitatibus iure labore itaque sit ad doloremque porro autem ipsam laudantium! Quidem fugiat facilis aut adipisci.
                            </p>
                        </div>
                        <div class="card-footer">
                            <span>23 march 2021</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg">
                    <div class="card rounded-0">
                        <div class="inner">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top rounded-0" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                                Inter-house competitions
                            </h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero corporis quam qui? Quod id numquam dicta unde odio, nihil quidem ducimus harum maiores exercitationem tempora earum, ipsam, itaque ut!
                            </p>
                        </div>
                        <div class="card-footer">
                            <span>23 march 2021</span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg">
                    <div class="card rounded-0">
                        <div class="inner">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top rounded-0" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">inter-states competition</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique inventore eum perspiciatis excepturi ipsam incidunt repellat provident accusantium. Voluptatum numquam eveniet temporibus quam optio. Vel, nostrum nemo odio voluptates corrupti aperiam? Saepe, illo quae!
                            </p>
                        </div>
                        <div class="card-footer">
                            <span>23 march 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped >
 .inner{
    overflow: hidden;
 }
  .inner img{
    transition: all 1.5s ease;
  }
 .inner img:hover{
    transform: scale(1.55);
    cursor: pointer;
  }
  .card-body{
    /* background-color: rgb(1, 1, 31); */
    background-color: #f1f1f1;
    padding: 10px;
    height: 270px;
  }

  .card{
    transition: all .9s ease;
  }

  .card:hover{
    transform: scale(1.05);
  }
  
  .card-title{
    /* color: yellow; */
    color: red;
    text-transform: uppercase;
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.2px;
  }
  .card-text{
    /* color: white; */
    color: rgb(1,1,31);
    line-height: 1.7rem;
    font-size: 13px;
  }
</style>