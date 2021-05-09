 <template>
 <label v-if="label">{{ label }}</label><br>
      <select
        :value="modelValue"
        class="field"
        v-bind="{...$attrs,
                    onChange: ($event) => {
                        $emit('update:modelValue, $event.target.value')
                    }}"
        >
        <option
          v-for="option in options"
          :value="option"
          :key="option"
          :selected="option === modelValue"
        >{{ option }}</option>
      </select>
      <br>
      <button @click="created()">GET Data</button>
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
        },
        options: {
            type: Array,
            required: true
        }
    },
}
</script>
<style scoped>
 select {
     width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
 }
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
label {
    
}
</style>