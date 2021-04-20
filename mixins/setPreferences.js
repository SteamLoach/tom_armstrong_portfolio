import log from '@/utils/log'

const logger = log({
  type: 'store',
  ref: 'Set Preferences (Mixin)'
})

export const setPreferences = {

  methods: {

    setPreference: function(target) {

      logger.group(`${this.logRef}`)

      this.$store.commit('toggleState', target);
      logger.line(`set state['${target}'] to ${this.$store.state[target]}`)

      const preferences = {
        darkMode: this.$store.state.darkMode,
      }

      logger.line(`set preferences in local storage`)
      logger.line(preferences, 'return')

      window.localStorage.setItem('preferences',
        JSON.stringify(preferences)
      )

      logger.groupEnd(`${this.logRef}`)

    }
  }

}