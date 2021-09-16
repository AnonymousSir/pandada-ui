<template>
   <label class="pan-radio" :class="{'is-checked': label == val}">
      <span class="pan-radio__input">
         <span class="pan-radio__inner"></span>
         <input
           type="radio"
           class="pan-radio__original"
           :value="label"
           :name="name"
           v-model="val"
         >
      </span>
      <span class="pan-radio__label">
         <slot>{{label}}</slot>
      </span>
   </label>
</template>

<script>
export default {
  name: 'panRadio',
  // 获取祖先组件provide的值
  inject: {
    radioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      tyoe: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 用geter/seter来实现组件里的数据双向绑定
    val: {
      get () {
        // 包裹了就用group的vlue，没有就用自己的
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        // this.$emit('input',value)
        // 包裹了就用group的，没有就用自己的
        this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 判断是否包裹了group组件
      return !!this.radioGroup
    }
  }
}
</script>

<style lang="scss">
.pan-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .pan-radio__input {
   white-space: nowrap;
   cursor: pointer;
   outline: none;
   display: inline-block;
   line-height: 1;
   position: relative;
   vertical-align: middle;
   .pan-radio__inner {
     border: 1px solid #dcdfe6;
     border-radius: 100%;
     width: 14px;
     height: 14px;
     background-color: #fff;
     position: relative;
     cursor: pointer;
     display: inline-block;
     box-sizing: border-box;
     &:after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(0);
      transition: transfrom .15s ease-in;
     }
   }
   .pan-radio__original {
     opacity: 0;
     outline: none;
     position: absolute;
     z-index: -1;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     margin: 0;
   }
  }
  .pan-radio__label {
   font-size: 14px;
   padding-left: 10px;
  }
}

.pan-radio.is-checked {
     .pan-radio__input {
        .pan-radio__inner {
           border-color: #409eff;
           background-color: #409eff;
           &:after {
            transform: translate(-50%,-50%) scale(1);
           }
        }
     }
     .pan-radio__label {
        color: #409eff;
     }
}
</style>
