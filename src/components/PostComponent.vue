  
<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
    <meta charset="utf-8">
  </head>
  <div class="container">
      <hr>
      <p class="error" v-if="error">
        {{ error }}
      </p>
      <h3 class="text-center">COVID-19 Travel Statistics</h3>
      <br />
      <button class="fetch" @click="created(iata)">Fetch Airport Info</button>
      <br /><br />
      <p class="text-center" v-if="error">
        {{ error }}
      </p>
      <div class="columns medium-3" v-for="(result, index) in posts" v-bind:key="result.id">
        <div  v-if="posts.length !== 3" class="card">
          <div  v-if="posts.length !== 3" class="card-divider">
            <p> {{ index }} </p>
          </div>
          <div class="card-section" v-for="(value, key) in result" v-bind:key="value.id">
            <p>{{ key }}: {{ value }}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import AxiosService from '../AxiosService'
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
    }
  },
  methods:{
  async created(iata) {
    try{
      if (iata === "" || iata.length !== 3) {
        throw new Error("Please enter in a valid IATA code.");
      }
      this.posts = await AxiosService.getPosts(iata);
    } catch (e) {
      this.error = e.message;
    }
  }
  },
  props: {
    iata: {
        type: String,
        required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}
div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.fetch {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
}
button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

/* .container {
  border: 1px solid #000000;
} */
</style>