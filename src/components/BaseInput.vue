<template>
     
      <input
        v-bind= "$attrs"
        :placeholder="label"
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      ><br>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    },
}
</script>

<style scoped>
input[type='text'] {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
    font: bold;
    align-content: left;
}
</style>