<template>
    <header class="app-header">
        <h1>Cars</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/car">Cars</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app-header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: lightblue;
    height: 5vh;
    padding-inline: 10px;

    margin-block-end: 5em;
}
</style>
