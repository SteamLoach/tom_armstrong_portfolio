import log from '@/utils/log'

const logger = log({
  type: 'store',
  ref: 'Preferences'
})

export const setPreferences = {

  methods: {

    setPreference: function(target) {

      logger.group(`set [${target}] preference`)

      this.$store.commit('toggleState', target);
      logger.line(`set state[${target}] to ${this.$store.state[target]}`)

      const preferences = {
        darkMode: this.$store.state.darkMode,
        withJargon: this.$store.state.withJargon,
      }

      logger.line(`set preferences in local storage`)
      logger.line(preferences, 'return')

      window.localStorage.setItem('preferences',
        JSON.stringify(preferences)
      )

      logger.groupEnd(`set [${target}] preference`)

    }
  }

}