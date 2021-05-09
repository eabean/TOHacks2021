<template>
  <div>
     <img alt="Vue logo" src="./assets/logo.png">
    <PostComponent />
    <BaseInput 
      v-model="searchInput.country"
      label="Country"
      type="text"
    />
    <BaseInput 
      v-model="searchInput.city"
      label="City"
      type="text"
    />
    <BaseInput 
      v-model="searchInput.airport_name"
      label="Airport Name"
      type="text"
    />
    <BaseSelect 
      :options="airport"
      v-model="airport"
      label="Select an airport"
    />
    <BaseCheckbox 
      v-model="information.travel_advisories"
      label="Travel Advisories"
      />
    <BaseCheckbox 
      v-model="information.advisory_details"
      label="Advisories Details"
      />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import BaseInput from './components/BaseInput.vue'
import BaseSelect from './components/BaseSelect.vue'
import BaseCheckbox from './components/BaseCheckbox.vue'

export default {
  name: 'App',
  components: {
    PostComponent,
    BaseInput,
    BaseSelect,
    BaseCheckbox
    
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
      searchInput: {
        country: "",
        city: "",
        airport_name: "",
        latitude: "",
        longitude: ""
      },
      information: {
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
