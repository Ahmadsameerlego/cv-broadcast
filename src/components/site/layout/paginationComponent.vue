<template>
    <div class="d-flex justify-content-end">
        <Paginator :rows="10" :totalRecords="120" ></Paginator>
    </div>
</template>

<script>
import Paginator from 'primevue/paginator';

export default {
    components:{
        Paginator
    }
}
</script>

<style>
.p-paginator .p-paginator-first, .p-paginator .p-paginator-prev, .p-paginator .p-paginator-next, .p-paginator .p-paginator-last{
    transform: rotate(180deg);
    background: #F3F3F3  !important;
    min-width: 2rem !important;
    height: 2rem !important;
}
.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #293255 !important;
    border-color: #293255 !important;
    color: #fff !important;
        min-width: 2rem !important;
    height: 2rem !important;

}
</style>