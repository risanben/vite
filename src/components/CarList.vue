<template>
    <section class="car-list">
        <h1>Car List</h1>
        <ul>
            <TransitionGroup name="list">
                <li v-for="car in cars" :key="car._id">
                    <CarPreview :car="car"/>
                    <section class="actions">
                        <button>
                            <RouterLink :to="`/car/${car._id}`">Details</RouterLink>
                        </button>
                        <button>
                            <RouterLink :to="`/car/edit/${car._id}`">Edit</RouterLink>
                        </button>
                        <button @click="onRemoveCar(car._id)">x</button>
                    </section>
                </li>
            </TransitionGroup>
        </ul>
        <button>
            <RouterLink to="car/edit">Add a Car</RouterLink>
        </button>
    </section>
</template>

<script>
import CarPreview from '@/components/CarPreview.vue'
export default {
    props: {
        cars: {
            type: Array,
            required: true,
        }
    },
    methods:{
        onRemoveCar(carId){
            this.$emit('car-removed', carId)
        },
    },
    components: {
        CarPreview,
    }
}
</script>

<style lang="scss">

.car-list ul{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    background-color: darkcyan;
    padding: 10px;
    list-style-type: none;


    li {
        background-color: darkseagreen;
        padding: 10px;
    }
    .actions{
        margin-block-start: 1em;
    }
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

</style>
