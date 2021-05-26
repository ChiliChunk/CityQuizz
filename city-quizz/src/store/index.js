import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    score: 0,
    questions : [],
    questionIndex : 0,
    quizzStarted : false

  },

  mutations: {
    startQuizz (state, questions) {
      state.quizzStarted = true;
      state.score = 0;
      state.questionIndex = 0; 
      state.questions = questions;
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
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", "http://localhost:8080/questions", false ); // false for synchronous request
      xmlHttp.send();
      console.log(xmlHttp.responseText)
      const questions = JSON.parse(xmlHttp.responseText)
      commit('startQuizz', questions)
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