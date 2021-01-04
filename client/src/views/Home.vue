<template>
    <div class="row main">
        <div class="col">
            <h1>
                <router-link to="/quiz">Create a quiz</router-link>
            </h1>
        </div>
        <div class="col">
            <h1>
                <router-link to="/poll">Create a poll</router-link>
            </h1>
        </div>
    </div>
</template>

<style scoped>
a, a:hover, a:focus {
    text-decoration: none;
}

.main {
    margin: 10rem auto;
}
</style>