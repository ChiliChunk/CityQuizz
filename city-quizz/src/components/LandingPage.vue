<template>
   <div>
    <QuestionVisualizer v-if="quizzStarted"/> 
    <Welcome v-else/>
  </div>
</template>

<script>
  import QuestionVisualizer from './QuestionVisualizer'
  import Welcome from './Welcome'
  export default {
    components: {
      QuestionVisualizer,
      Welcome
    },
    methods: {
      startQuizz () {
        this.$store.dispatch('startQuizz')
      }
    },
    computed: {
      quizzStarted () {
        return this.$store.getters.quizzStarted
      }
    }
  }
</script>