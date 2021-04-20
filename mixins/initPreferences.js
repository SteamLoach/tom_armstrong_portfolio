import log from '@/utils/log'
/*

Mixin requires an [initPreferences] component data object:
{
  isComplete: indicates when mounted hook is finished
  preferences: array of (boolean) preference props
}

*/

const logger = log({
  type: 'store',
  ref: 'Init Preferences (Mixin)'
})

import {mapMutations, mapState} from 'vuex'

export const initPreferences = {

  mounted() {

    logger.group(this.logRef)

    if(this.initPreferencesMixin) {

      if(localStorage.preferences) {

        logger.line('preferences found in localStorage', 'done')
        const preferences = JSON.parse(localStorage.preferences)
        logger.line(preferences, 'return')

        this.initPreferencesMixin.preferences.forEach(prop => {
          logger.line(`set state['${prop}'] to ${preferences[prop]}`)
          this.setState({
            target: prop,
            payload: preferences[prop]
          })
        })

      } else {

        logger.line('no preferences found in localStorage', 'issue')
        const storageObj = {};
        this.initPreferencesMixin.preferences.forEach(prop => {
          logger.line(
            `set localStorage [${prop}] to ${this.$store.state[prop]}`
          );
          storageObj[prop] = this.$store.state[prop]
        })
        localStorage.setItem('preferences', JSON.stringify(storageObj))
      }

      setTimeout(() => {
        this.initPreferencesMixin.isComplete = true;
      }, 800);

    } else {
      logger.warn('define an [initPreferencesMixin] config object')
    }

    logger.groupEnd(this.logRef);

  },

  methods: {
    ...mapMutations(['setState'])
  }

}