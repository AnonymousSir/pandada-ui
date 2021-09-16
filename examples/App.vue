<template>
  <div id="app">
    <pan-button>按钮</pan-button>
    <pan-switch v-model="s"></pan-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      s: true
    }
  }
}
</script>
