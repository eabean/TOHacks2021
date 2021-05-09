<template>
  <div class="container">
      <h1>Data from POST</h1>
      <hr>
      <p class="error" v-if="error">
        {{ error }}
      </p>
      <button @click="created()">GET Data</button>
      <div class="post">
        <div v-for="post in posts"
             v-bind:item="post"
             v-bind:key="post.id">
          <p> {{ post }} </p>
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
  async created() {
    try{
      this.posts = await AxiosService.getPosts();
    } catch (e) {
      this.error = e.message;
    }
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
</style>
