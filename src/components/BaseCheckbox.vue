<template>
    
      <input
          type="checkbox"
          :checked="modelValue"
          @change="$emit('update:modelValue', $event.target.checked)"
          class="field"
        />
        <label>{{ label }}</label>
   
</template>

<script>

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
    }
}
</script>

<style scoped>
input[type="checkbox"]{
    padding-left: 50px;
}
</style>