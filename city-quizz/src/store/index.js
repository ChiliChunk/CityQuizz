import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    score: 0,
    questions : [
      {label : 'Quel film est le mieux?', answers : ['Avatar' , 'James Bond' , 'Dumbo' , 'American Sniper'] , rightAnswer : 0 , answered : -1},
      {label : 'Quel film est le pire?', answers : ['Taxi' , 'Pirate des caraibes' , 'Brice de Nice' , '0SS117'] , rightAnswer : 2 , answered : -1}],
    questionIndex : 0,
    quizzStarted : false

  },

  mutations: {
    startQuizz (state) {
      state.quizzStarted = true;
      state.score = 0;
      state.questionIndex = 0; 
      state.questions.forEach(question =>{
        question.answered = -1
      })
    },
    nextQuestion(state){
      state.questionIndex += 1
    },
    answerQuestion(state , payload ){
      state.questions[state.questionIndex].answered = payload
      if (payload === state.questions[state.questionIndex].rightAnswer){
        this.state.score += 1
      }
    }
    
  },

  actions: {
    startQuizz ({commit}) {
      commit('startQuizz')
    },
    nextQuestion({commit}){
      commit('nextQuestion')
    },
    answerQuestion({commit}, payload){
      commit('answerQuestion' , payload)
    },
  },

  getters: {
    quizzStarted (state) {
      return state.quizzStarted
    },
    currentQuestion(state){
      return state.questions[state.questionIndex]
    },
    score(state){
      return state.score
    }
  }
})