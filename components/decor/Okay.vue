<template>
  <svg
    width="31"
    height="38"
    viewBox="0 0 31 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 17L14.5 35.5L28 3"
      :stroke="color"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#5DCD5D',
    },
  },
}
</script>
