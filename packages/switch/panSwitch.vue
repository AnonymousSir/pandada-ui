<template>
  <div class="pan-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="pan-switch__core" ref="core">
      <span class="pan-switch__button"></span>
    </span>
    <!--  class="pan-switch__input" -->
    <slot v-if="$slots.default">
      <input type="checkbox" :name="name" ref="input" :checked="value">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'panSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 数据通过emit传过去后dom上还未发生改变，
      // 所以用个nextTick()，等DOM更新后再执行修改颜色
      await this.$nextTick()
      this.setColor()
    },
    // 控制开关的颜色
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
  }
}
</script>

<style lang="scss" scoped>
.pan-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .pan-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
  }
  .pan-switch__core {
  margin: 0;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color .3s,background-color .3s;
  vertical-align: middle;
  .pan-switch__button {
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }
  }
}

.pan-switch.is-checked {
  .pan-switch__core {
  border-color: #409eff;
  background-color: #409eff;
  .pan-switch__button {
    transform: translateX(20px);
  }
  }
}
</style>
