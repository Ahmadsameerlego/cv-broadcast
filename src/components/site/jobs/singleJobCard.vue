<template>
   <!-- single card  -->
    <div class="single_card d-flex">
        <!-- card image  -->
        <div class="card_image">
            <img :src="ad.company.image" alt="">
        </div>

        <!-- card details  -->
        <div class="card_details mx-3">
            <h6 class="mainColor fw-bold mb-3"> {{  ad.job_name  }} </h6>

            <div class="d-flex mb-3">
                <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                <span class="mainColor2 fw-6 mx-2"> {{  ad.city  }} </span>
            </div>

            <p class="card_para fs-16 fw-5 mb-3" style="line-break: anywhere;max-height:50px;overflow-y:auto">
                {{ ad.company.description }}
            </p>

            <div class="d-flex align-items-baseline">
                <img :src="require('@/assets/imgs/bag.svg')" alt="">
                <span class="grayColor mx-2"> {{ $t('common.jobType') }}: </span>
                <h6 class="fw-bold"> {{ ad.type }} </h6>
            </div>
        </div>

        <!-- absolute places  -->

        <!-- time  -->
        <div class="abs_time d-flex align-items-baseline">
            <img :src="require('@/assets/imgs/clock.svg')" alt="">
            <span class="grayColor mx-2"> {{  $t('common.date')  }}: </span>
            <span > {{ ad.published_at  }} </span>
        </div>

        <!-- details  -->
        <router-link :to="'/jobDetails/'+ad.id" class="abs_details mainColor2"> 
            {{  $t('common.showDetails')  }}
            <i class="fa-solid fa-chevron-left"></i> 
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        ad : Object
    }
}
</script>

<style>

</style>