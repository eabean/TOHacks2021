<template>
    <div id='check'>
      <input
          type="checkbox"
          :checked="modelValue"
          @change="$emit('update:modelValue', $event.target.checked)"
          class="field"
        />
        <label>{{ label }}</label>
    </div>

   
</template>

<script>
import AxiosService from '../AxiosService'

export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: Boolean,
            default: true
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

<style scoped>
    button {
  width: 10%;
  background-color:#00ab8e;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="checkbox"]{
    padding-left: 50px;
}
</style>