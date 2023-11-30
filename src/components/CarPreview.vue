<template>
    <h2>{{car.vendor}}</h2>
    <h3>{{car.speed}}</h3>
</template>

<script>
export default {
    props: {
        car: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss"></style>
