<template>
<div>
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
    padding-top: 100px;
}
</style>