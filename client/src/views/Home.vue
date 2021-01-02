<template>
    <main>
        <div class="container container-header">
            <h1>Create your quiz</h1>
        </div>
        <div class="container container-form">
            <form>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter question" v-model="quizForm.question">
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" @click="addOption">+ Add options</button>
                    </div>
                </div>
                <div class="form-group col s12" v-for="option in quizForm.options" :key="option.id">
                    <label for="option">Option {{option.id+1}}</label>
                    <input class="form-control" id="option" placeholder="Enter option" v-model="option.text">
                </div>
                <button type="submit" class="btn btn-primary" @submit="createQuiz">Create</button>
            </form>
        </div>
    </main>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Home",
        data() {
            return {
                quizForm: {
                    question: "",
                    options: []
                }
            }
        },
        methods: {
            ...mapActions(['createQuiz']),
            addOption() {
                this.quizForm.options.push({id: this.quizForm.options.length, text: ""})
            },
            createQuiz() {
                this.createQuiz(this.quizForm)
            }
        }
    }
</script>
<style lang="scss">
.container-form {
    margin-top: 5rem;
}

.container-header {
    margin: 1rem auto;
}
</style>