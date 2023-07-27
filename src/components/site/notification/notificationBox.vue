<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-12">
                <div class="mt-3 nb-3">
            <div class="notificationBox">
                <div class="d-flex align-items-center gap-10">
                    <img :src="require('@/assets/imgs/SSM 1.png')" alt="" class="notificationLogo">
                    <div class="grow-1"> {{ notification  }}</div>
                </div>
                <div class="text-start text-muted">
                    <span> <i class="fa-solid fa-clock m-end-5 "></i></span><span>{{ date  }}</span>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
data(){
    return{
        date: '1/1/1111',
        notification: 'نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص '

    }
}
}
</script>
<style  scoped>

.notificationBox {
    gap: 10px;
    padding: 10px;
    background-color: #fbfbfb;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    margin-bottom: 10px;
}
.notificationLogo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid f0f0f0
}

</style>