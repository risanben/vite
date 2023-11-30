<template>
    <div v-if="car" class="car-details">
        <h1>Car Details</h1>
        <h2>{{car.vendor}}</h2>
        <h3>{{car.speed}}</h3>
        <button>
            <RouterLink to="/car">Back</RouterLink>
        </button>
    </div>
    <div v-else>Loding car details...</div>
</template>

<script>
import { carService } from '@/services/car.service.js'
export default {
    data(){
        return {
            car: null,
        }
    },
    async created(){
        const _id = this.$route.params._id
        this.car = await carService.get(_id)
    }
}
</script>

<style lang="scss">
.car-details{
    background-color: lightseagreen;
    padding: 10px;
}
</style>
