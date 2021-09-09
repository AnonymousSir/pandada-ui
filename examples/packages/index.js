import panButton from './button/panButton.vue'
import panDialog from './dialog/panDialog.vue'
import panInput from './input/panInput.vue'
import panSwitch from './switch/panSwitch.vue'
import panRadio from './radio/panRadio.vue'
import panRadioGroup from './radio/panRadioGroup.vue'
import panCheckbox from './checkbox/panCheckbox.vue'
import panCheckboxGroup from './checkbox/panCheckboxGroup.vue'
import panFrom from './from/panFrom.vue'
import panFromItem from './from/panFromItem.vue'
import './fonts/font.scss'

const components = [
  panButton,
  panDialog,
  panInput,
  panSwitch,
  panRadio,
  panRadioGroup,
  panCheckbox,
  panCheckboxGroup,
  panFrom,
  panFromItem
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
