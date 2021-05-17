<template>
  <div>
    <h2>{{currentQuestion.label}}</h2>
    <h5> score : {{score}}</h5>
    <button v-for="answerIndex in currentQuestion.answers.length" :key="answerIndex" @click="tryAnswer(answerIndex-1)" :disabled="currentQuestion.answered !== -1">
      {{ currentQuestion.answers[answerIndex-1] }}
    </button>

    <br/>
    <br/>
    <img src="../assets/tick.jpg" v-if="currentQuestion.answered == currentQuestion.rightAnswer" class="resultImg">
    <img src="../assets/error.jpg" v-if="currentQuestion.answered !== -1 && currentQuestion.answered !== currentQuestion.rightAnswer" class="resultImg">
    <br/>
    <br/>
    <button :disabled="currentQuestion.answered === -1" @click="nextQuestion"> 
      Next Question
    </button>
    <br/>
    <br/>
    <button @click="startQuizz"> 
      Restart
    </button>
  </div>
</template>

<script>
 
  export default {
    
    components: {
    },
    methods: {
      nextQuestion () {
        this.$store.dispatch('nextQuestion')
      },
      tryAnswer(index){
        this.$store.dispatch('answerQuestion' , index)
      },
      startQuizz(){
        this.$store.dispatch('startQuizz')
      }

    },
    computed: {
      currentQuestion () {
        return this.$store.getters.currentQuestion
      },
      score(){
        return this.$store.getters.score
      }
    }
  }
</script>

<style scoped>
  .resultImg{
    max-height: 50px;
    max-width: 50px;
  }
</style>