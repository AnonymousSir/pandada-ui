<template>
  <div class="pan-from">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'panFrom',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      from: this
    }
  }
}
</script>
