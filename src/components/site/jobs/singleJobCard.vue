<template>
   <!-- single card  -->
    <div class="single_card d-flex">
        <!-- card image  -->
        <div class="card_image">
            <img :src="require('@/assets/imgs/SSM 1.png')" alt="">
        </div>

        <!-- card details  -->
        <div class="card_details mx-3">
            <h6 class="mainColor fw-bold mb-3"> مهندس كمبيوتر </h6>

            <div class="d-flex mb-3">
                <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                <span class="mainColor2 fw-6 mx-2">الرياض</span>
            </div>

            <p class="card_para fs-16 fw-5 mb-3">
                تقدم مؤسسة أوامر الشبكة فرصة عمل في السعودية كمطور واجهة خلفية للحاصلين على على درجة البكالوريوس في علم الحاسوب أو أي مجال آخر ذي صلة والذين يمتلكون خبرة.
            </p>

            <div class="d-flex align-items-baseline">
                <img :src="require('@/assets/imgs/bag.svg')" alt="">
                <span class="grayColor mx-2"> نوع الوظيفة: </span>
                <h6 class="fw-bold"> دوام كامل </h6>
            </div>
        </div>

        <!-- absolute places  -->

        <!-- time  -->
        <div class="abs_time d-flex align-items-baseline">
            <img :src="require('@/assets/imgs/clock.svg')" alt="">
            <span class="grayColor mx-2"> {{  $t('common.date')  }}: </span>
            <span > منذ ساعة </span>
        </div>

        <!-- details  -->
        <router-link to="/jobDetails/1" class="abs_details mainColor2"> 
            {{  $t('common.showDetails')  }}
            <i class="fa-solid fa-chevron-left"></i> 
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>