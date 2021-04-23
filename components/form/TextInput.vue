<template>
  <div class="form-group">
    <label :for="name" class="label">{{ label }}</label>
    <template v-if="template === 'input'">
      <input
        :id="name"
        :value="value"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="text-input"
        autocomplete="off"
        @input="handleChange"
      />
    </template>
    <template v-if="template === 'textarea'">
      <textarea
        :id="name"
        class="textarea"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        rows="10"
        @input="handleChange"
      ></textarea>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    template: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('handleChange', e)
    },
  },
}
</script>
<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  & .label {
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.396px;
    margin-bottom: 4px;
  }
  & .text-input,
  & .textarea {
    border: 0;
    background: #fff;
    box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    padding: 16px 25px;
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
