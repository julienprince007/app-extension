import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'Auth',

  setup () {
    return () => h(QBadge, {
      class: 'Auth',
      label: 'Auth'
    })
  }
}
