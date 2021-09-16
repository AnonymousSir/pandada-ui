<template>
  <div class="pan-from-item">
    <label class="pan-from-item__label" :style="{width: this.from.labelWidth}">{{label}}</label>
    <div class="pan-from-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panFromItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['from']
}
</script>

<style lang="scss">
.pan-from-item {
  margin-bottom: 25px;
  .pan-from-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .pan-from-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
