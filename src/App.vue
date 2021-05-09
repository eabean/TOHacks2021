<template>
  <div>
     <img alt="Vue logo" src="./assets/logo.png">
    <PostComponent />
    <BaseInput 
      v-model="info.country"
      label="Country"
      type="text"
    />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import BaseInput from './components/BaseInput.vue'

export default {
  name: 'App',
  components: {
    PostComponent,
    BaseInput
  },
  data() {
    return {
      airport: [
        'YYZ',
        'BOS',
        'ATL',
        'ORD',
        'ICN',
        'CAN',
        'KUL'
      ],
      info: {
        country: "",
        travel_advisories: "",
        advisory_details: "",
        covid_stats: "",
        covid_info: "",
        extras: {
          qurantine: "",
          testing: ""
        }
      }
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
