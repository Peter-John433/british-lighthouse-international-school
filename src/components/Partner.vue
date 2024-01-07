<script setup>

</script>

<template>
    <div class="container-fluid-sm pt-5 bg-white">
        <div class="row-sm">
            <div class="col-sm-10 col-lg-10 partner-img mx-auto">
                <img src="@/assets/img/btec-logo.png" class="img-fluid mx-auto d-block" alt="">
                <img src="@/assets/img/aisen-logo.jpg" class="img-fluid mx-auto d-block" alt="">
                <img src="@/assets/img/logo-me.png" class="img-fluid mx-auto d-block" alt="">
                <img src="@/assets/img/cambridge-internaltional-exammination-logo.png" class="img-fluid mx-auto d-block" alt="">
                <img src="@/assets/img/ncpsa-logo.png" class="img-fluid mx-auto d-block" alt="">
                <img src="@/assets/img/british-counsel.png" class="img-fluid mx-auto d-block" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
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
        .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    @media screen and (max-width: 576px) {
        .partner-img img{
        max-width: 50px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

</style>