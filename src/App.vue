<template>
    <AppHeader />
    <main class="main-container">
        <RouterView />
    </main>
    <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
    components: {
        AppHeader,
        AppFooter,
    }
}
</script>
<style lang="scss">
.main-container{
    min-height: calc(90vh - 4em);
}
nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

</style>
