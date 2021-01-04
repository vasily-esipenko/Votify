<template>
  <div class="wrapper">
    <Navbar />
    <main>
        <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue"
import Footer from "../src/components/Footer.vue"
export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

main {
    flex-grow: 1;
}

.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

</style>
