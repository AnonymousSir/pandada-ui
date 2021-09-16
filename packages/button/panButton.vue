<template>
  <button class="pan-button"
    :class="[`pan-button--${type}`,{
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
      }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'panButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
.pan-button-group > .pan-button.is-active,
.pan-button-group > .pan-button.is-disabled,
.pan-button-group > .pan-button:active,
.pan-button-group > .pan-button:focus,
.pan-button-group > .pan-button:hover {
  z-index: 1;
}
.pan-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.pan-button + .pan-button {
  margin-left: 10px;
}
.pan-button:focus,
.pan-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.pan-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}
.pan-button::-moz-focus-inner {
  border: 0;
}
.pan-button [class*='el-icon-'] + span {
  margin-left: 5px;
}
.pan-button.is-plain:focus,
.pan-button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.pan-button.is-active,
.pan-button.is-plain:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
}
.pan-button.is-plain:active {
  background: #fff;
  outline: 0;
}
.pan-button.is-disabled,
.pan-button.is-disabled:focus,
.pan-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.pan-button.is-disabled.pan-button--text {
  background-color: transparent;
}
.pan-button.is-disabled.is-plain,
.pan-button.is-disabled.is-plain:focus,
.pan-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}
.pan-button.is-loading {
  position: relative;
  pointer-events: none;
}
.pan-button.is-loading:before {
  pointer-events: none;
  content: '';
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: rgba(255, 255, 255, 0.35);
}
.pan-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.pan-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.pan-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.pan-button--primary:focus,
.pan-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.pan-button--primary.is-active,
.pan-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
.pan-button--primary:active {
  outline: 0;
}
.pan-button--primary.is-disabled,
.pan-button--primary.is-disabled:active,
.pan-button--primary.is-disabled:focus,
.pan-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.pan-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.pan-button--primary.is-plain:focus,
.pan-button--primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.pan-button--primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: 0;
}
.pan-button--primary.is-plain.is-disabled,
.pan-button--primary.is-plain.is-disabled:active,
.pan-button--primary.is-plain.is-disabled:focus,
.pan-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.pan-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.pan-button--success:focus,
.pan-button--success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}
.pan-button--success.is-active,
.pan-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}
.pan-button--success:active {
  outline: 0;
}
.pan-button--success.is-disabled,
.pan-button--success.is-disabled:active,
.pan-button--success.is-disabled:focus,
.pan-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.pan-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.pan-button--success.is-plain:focus,
.pan-button--success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}
.pan-button--success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: 0;
}
.pan-button--success.is-plain.is-disabled,
.pan-button--success.is-plain.is-disabled:active,
.pan-button--success.is-plain.is-disabled:focus,
.pan-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.pan-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.pan-button--warning:focus,
.pan-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}
.pan-button--warning.is-active,
.pan-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}
.pan-button--warning:active {
  outline: 0;
}
.pan-button--warning.is-disabled,
.pan-button--warning.is-disabled:active,
.pan-button--warning.is-disabled:focus,
.pan-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.pan-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.pan-button--warning.is-plain:focus,
.pan-button--warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}
.pan-button--warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: 0;
}
.pan-button--warning.is-plain.is-disabled,
.pan-button--warning.is-plain.is-disabled:active,
.pan-button--warning.is-plain.is-disabled:focus,
.pan-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.pan-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.pan-button--danger:focus,
.pan-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.pan-button--danger.is-active,
.pan-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}
.pan-button--danger:active {
  outline: 0;
}
.pan-button--danger.is-disabled,
.pan-button--danger.is-disabled:active,
.pan-button--danger.is-disabled:focus,
.pan-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.pan-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.pan-button--danger.is-plain:focus,
.pan-button--danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.pan-button--danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: 0;
}
.pan-button--danger.is-plain.is-disabled,
.pan-button--danger.is-plain.is-disabled:active,
.pan-button--danger.is-plain.is-disabled:focus,
.pan-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.pan-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.pan-button--info:focus,
.pan-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.pan-button--info.is-active,
.pan-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}
.pan-button--info:active {
  outline: 0;
}
.pan-button--info.is-disabled,
.pan-button--info.is-disabled:active,
.pan-button--info.is-disabled:focus,
.pan-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.pan-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.pan-button--info.is-plain:focus,
.pan-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}
.pan-button--info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: 0;
}
.pan-button--info.is-plain.is-disabled,
.pan-button--info.is-plain.is-disabled:active,
.pan-button--info.is-plain.is-disabled:focus,
.pan-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.pan-button--text,
.pan-button--text.is-disabled,
.pan-button--text.is-disabled:focus,
.pan-button--text.is-disabled:hover,
.pan-button--text:active {
  border-color: transparent;
}
.pan-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.pan-button--mini,
.pan-button--small {
  font-size: 12px;
  border-radius: 3px;
}
.pan-button--medium.is-round {
  padding: 10px 20px;
}
.pan-button--medium.is-circle {
  padding: 10px;
}
.pan-button--small,
.pan-button--small.is-round {
  padding: 9px 15px;
}
.pan-button--small.is-circle {
  padding: 9px;
}
.pan-button--mini,
.pan-button--mini.is-round {
  padding: 7px 15px;
}
.pan-button--mini.is-circle {
  padding: 7px;
}
.pan-button--text {
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}
.pan-button--text:focus,
.pan-button--text:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}
.pan-button--text:active {
  color: #3a8ee6;
  background-color: transparent;
}
.pan-button-group {
  display: inline-block;
  vertical-align: middle;
}
.pan-button-group::after,
.pan-button-group::before {
  display: table;
  content: '';
}
.pan-button-group::after {
  clear: both;
}
.pan-button-group > .pan-button {
  float: left;
  position: relative;
}
.pan-button-group > .pan-button + .pan-button {
  margin-left: 0;
}
.pan-button-group > .pan-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.pan-button-group > .pan-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.pan-button-group > .pan-button:first-child:last-child {
  border-radius: 4px;
}
.pan-button-group > .pan-button:first-child:last-child.is-round {
  border-radius: 20px;
}
.pan-button-group > .pan-button:first-child:last-child.is-circle {
  border-radius: 50%;
}
.pan-button-group > .pan-button:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.pan-button-group > .pan-button:not(:last-child) {
  margin-right: -1px;
}
.pan-button-group > .pan-dropdown > .pan-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--primary:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--primary:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--primary:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--success:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--success:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--success:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--warning:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--warning:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--warning:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--danger:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--danger:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--danger:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--info:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--info:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.pan-button-group .pan-button--info:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}

</style>
