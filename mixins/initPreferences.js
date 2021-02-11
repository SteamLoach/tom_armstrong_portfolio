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

import {mapMutations} from 'vuex'

export const initPreferences = {

  mounted() {

    logger.group('Check Existing')

    if(this.initPreferencesMixin) {

      if(window.localStorage.preferences) {

        logger.line('preferences found in localStorage', 'done')
        const preferences = JSON.parse(window.localStorage.preferences)
        logger.line(preferences, 'return')

        this.initPreferencesMixin.preferences.forEach(prop => {
          logger.line(`set state[${prop}] to ${preferences[prop]}`)
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
        window.localStorage.setItem('preferences', JSON.stringify(storageObj))
      }

      this.initPreferencesMixin.isComplete = true;

    } else {
      logger.warn('define an [initPreferencesMixin] config object')
    }

    logger.groupEnd('Check Existing');

  },

  methods: {
    ...mapMutations(['setState'])
  }

}