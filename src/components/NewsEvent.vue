<script setup>

</script>

<template>
    <div class="container-fluid bg-white py-5 px-0">
        <div class="container">
            <h2 class="text-center text-black mb-5">News and Events</h2>
            <div class="row gap-4 gap-sm-0">
                <div class="col-12 col-md-6 col-lg">
                    <!-- <div class="card-group">
                        <div class="card">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top" alt="">
                            <div class="card-body">
                            <h5 class="card-title">Arts and cultures contest</h5>
                            <p class="card-text"> 
                                asperiores, hic eligendi repellendus nam ea excepturi laboriosam quos, nostrum, iste enim sapiente maiores exercitationem sint quas vitae ducimus autem quaerat quisquam maxime!  Dicta maxime neque numquam ad corrupti? Assumenda voluptates vitae, amet
                            </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">23 march 2023</small>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">
                                Inter-house competitions
                            </h5>
                            <p class="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi facilis natus necessitatibus eaque similique, odit quod laborum maiores atque impedit quos dignissimos recusandae, minus ab praesentium deserunt cumque voluptas iusto. 
                            </p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">26 march 2021</small>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">inter states competition</h5>
                            <p class="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi facilis natus necessitatibus eaque similique, odit quod laborum maiores atque impedit quos dignissimos recusandae, minus ab praesentium deserunt cumque voluptas iusto. 
                            </p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">20th may, 2023</small>
                            </div>
                        </div>
                    </div> -->                    
                    <div class="card">
                        <div class="inner">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top" alt="...">
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
                    <div class="card">
                        <div class="inner">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top" alt="...">
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
                    <div class="card">
                        <div class="inner">
                            <img src="@/assets/img/musical.jpeg" class="card-img-top" alt="...">
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

<style scoped>
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
    background-color: rgb(1, 1, 31);
    padding: 10px;
    height: 270px;
  }
  
  .card-title{
    color: yellow;
    text-transform: uppercase;
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.2px;
  }
  .card-text{
    color: white;
    line-height: 1.7rem;
  }
</style>