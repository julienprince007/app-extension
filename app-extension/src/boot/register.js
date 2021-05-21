import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-auth'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
