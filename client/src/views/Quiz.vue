<template>
    <div class="main">
        <div class="container container-header">
            <h1>Create your quiz</h1>
        </div>
        <div class="container container-form">
            <form>

                <div class="row question">
                    <div class="col">
                        <div class="form-group">
                            <input type="text" class="form-control" autocomplete="off"
                            placeholder="Question" maxlength="120" v-model="quizForm.question">
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" @click="addOption" :disabled="maxOptions">+ Add option</button>
                    </div>
                </div>
                
                <div class="form-group options" v-for="option in quizForm.options" :key="option.id">
                    <div class="row">
                        <div class="col">
                            <input class="form-control" id="option" autocomplete="off"
                            placeholder="Option" maxlength="60" v-model="option.text">
                        </div>
                        <button type="button" class="btn btn-primary" :disabled="trueOption" :ref="`optionBtn${option.id}`" @click="addCorrectOption(option.id)"><i class="fas fa-check"></i></button>
                        <button type="button" class="btn btn-danger" @click="removeOption(option.id)"><i class="fas fa-times"></i></button>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" :disabled="!isValid" @submit="createQuiz">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Quiz",
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
                this.quizForm.options.push({id: this.quizForm.options.length, text: "", isTrue: false, votes: 0})
            },
            addCorrectOption(id) {
                this.quizForm.options[id].isTrue = true
                this.$refs['optionBtn' + `${id}`].style.backgroundColor = "#28a745"
                this.$refs['optionBtn' + `${id}`].style.borderColor = "#28a745"
            },
            removeOption(id) {
                //this.quizForm.options.splice(id, 1)
                if (this.quizForm.options.length === 1) {
                    this.quizForm.options = []
                }
                this.quizForm.options = this.quizForm.options.filter((el) => el !== this.quizForm.options[id])
            },
            createQuiz() {
                this.createQuiz(this.quizForm)
            }
        },
        computed: {
            validQuestion() {
                return this.quizForm.question.length > 0 ? true : false
            },
            validOptionTexts() {
                for (let i = 0; i < this.quizForm.options.length; i++) {
                    return this.quizForm.options[i].text.length > 0 ? true : false
                }
                return false
            },
            validTrueOption() {
                for (let i = 0; i < this.quizForm.options.length; i++) {
                    return this.quizForm.options[i].isTrue ? true : false
                }
                return false
            },
            validOptionLength() {
                return this.quizForm.options.length > 1 ? true : false
            },
            maxOptions() {
                return this.quizForm.options.length === 10 ? true : false
            },
            trueOption() {
                for (let i = 0; i < this.quizForm.options.length; i++) {
                    if (this.quizForm.options[i].isTrue) {
                        return true
                    }
                }
                return false
            },
            isValid() {
                return this.validQuestion && this.validOptionTexts && this.validTrueOption && this.validOptionLength
            }
        }
    }
</script>
<style lang="scss">
.main {
    margin: 1rem auto 2rem;
}

.container-form {
    margin-top: 5rem;
}

.container-header {
    margin: 1rem auto;
}

.question {
    margin: 0 auto 3rem;
}

.options {
    margin: 0 auto 3rem;
}

.correctBtn {
    display: none;
}

.label {
    padding-left: 0;
}
</style>