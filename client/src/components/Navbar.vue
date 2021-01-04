<template>
    <nav class="navbar navbar-lg navbar-light bg-light">
        <router-link to="/">Votify</router-link>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
.navbar {
    font-size: 2rem;
    flex-shrink: 0;

}
a {
    text-decoration: none;
}
</style>
