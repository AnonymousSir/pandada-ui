<template>
  <div class="pan-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'panCheckboxGroup',
  // provide/inject实现祖孙组件传值
  provide () {
    return {
      // 将this传出去
      checkboxGroup: this
    }
  },
  props: {
    value: {
      // 因为是多选，所以是Array
      type: Array
    }
  }
}
</script>
