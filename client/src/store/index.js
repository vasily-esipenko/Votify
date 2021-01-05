import { createStore } from 'vuex'
const SERVERLINK = "http://localhost:7777"

export default createStore({
  state: {
      quiz: {}
  },
  mutations: {
      setQuiz(state, quiz) {
          state.quiz = quiz
      }
  },
  actions: {
      async createQuiz(ctx, quiz) {
          const res = await fetch(`${SERVERLINK}/quiz/create`, {
              method: 'POST',
              body: JSON.stringify(quiz),
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              }
          })
          const response = await res.json()
          ctx.commit('setQuiz', response)
      }
  },
  modules: {
  },
  getters: {
      getQuiz(state) {
          return state.quiz
      }
  }
})
