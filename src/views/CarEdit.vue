<template>
    <div v-if="car" class="car-edit">
        <h1>Car Edit</h1>
        <input v-model="car.vendor" type="text">
        <input v-model="car.speed" type="number">
        <button @click="onSave">Save</button>
    </div>
    <div v-else>Loding...</div>
</template>

<script>
import { carService } from '@/services/car.service.js'
export default {
    data(){
        return {
            car: null,
        }
    },
    methods:{
        async onSave(){
            await carService.save(this.car)
            this.$router.back()
        }
    },
    async created(){
        const _id = this.$route.params._id
        if(_id){
            this.car = await carService.get(_id)
        } else {
            this.car = await carService.getEmptyCar()
        }
    }
}
</script>

<style lang="scss">
.car-edit{
    background-color: rgb(197, 202, 93);
    padding: 10px;
}
</style>
