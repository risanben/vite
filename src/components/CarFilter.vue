<template>
    <section class="car-filter">
        <input @input="onFilter" v-model="filterBy.vendor" placeholder="Search" type="text">
    </section>
</template>

<script>
    export default {
        data(){
            return{
                filterBy: { vendor: '' }
            }
        },
        methods:{
            onFilter(){
                this.$emit('filter', this.filterBy)
            }
        }
    }
</script>

<style lang="scss">
.car-filter{
    background-color: lightgray;
    padding: 10px;
}
</style>