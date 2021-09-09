<template>
   <div class="pan-radio-group">
      <slot></slot>
   </div>
</template>

<script>
export default {
  name: 'panRadioGroup',
  // provide/inject实现祖孙组件传值
  provide () {
    return {
      // 将this传出去
      radioGroup: this
    }
  },
  props: {
    // 接收到v-model的value值
    value: null
  }
}
</script>
