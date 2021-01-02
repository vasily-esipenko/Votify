<template>
    <footer class="footer">
        <div class="container">
            <a href="https://github.com/vasily-esipenko" target="_blank" class="text-muted">Vasily Esipenko 2021</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    padding: 0;
}
.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 1rem;
    background-color: #f8f9fa!important;
}
</style>
