<template>
    <UserMsg />
    <CarFilter @filter="onFilter"/>
    <CarList @car-removed="onRemoveCar" :cars="carsToShow"/>
</template>

<script>
import { carService } from '@/services/car.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import CarFilter from '@/components/CarFilter.vue'
import CarList from '@/components/CarList.vue'
import UserMsg from '@/components/UserMsg.vue'

export default {
    data(){
        return {
            cars: [],
            filterBy: {},
        }
    },
    methods:{
        onRemoveCar(carId){
            carService.remove(carId)

            const idx = this.cars.findIndex(car => car._id === carId)
            this.cars.splice(idx, 1)

            // this.cars= this.cars.filter(car => car._id !== carId)
            const msg = {
                txt: `Car ${carId} removed.`,
                type: 'fail',
                timeout: 2000,
            }
            eventBus.emit('user-msg', msg)
        },
        onFilter(filterBy){
            this.filterBy = filterBy
        }
    },
    computed:{
        carsToShow(){
            const regex = new RegExp(this.filterBy.vendor, 'i')
            return this.cars.filter(car => regex.test(car.vendor))
        }
    },
    async created(){
        this.cars = await carService.query()
    },
    components: {
        UserMsg,
        CarList,
        CarFilter,
    }
}
</script>

<style lang="scss"></style>
