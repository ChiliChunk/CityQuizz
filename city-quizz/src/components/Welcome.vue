<template>
  <div>
    
    <h2>Welcome to the City Quizz</h2>
  <br/>
    <button @click="startQuizz">Start Quizz</button>
  </div>
</template>

<script>
  export default {
    methods: {
      startQuizz () {
        this.$store.dispatch('startQuizz')
      }
    }
  }
</script>