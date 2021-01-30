import log from '@/utils/log'


/*

THIS IS PROBABLY SUPERFLUOUS BUT HANG ON TO IT ANYWAY

Mixin requires [story] and [logRef] component props and a storyblokLiveUpdateMixin data object:

*/

const logger = log({
  type: 'storyblok',
  ref: 'storyblokLiveUpdate (Mixin)'
})

const contentVersion = process.env.NUXT_ENV_CONTENT_VERSION
const isDraft = contentVersion === 'draft' ? true :  false;

export const storyblokLivePreview = {

  mounted () {

    if(isDraft) {

      logger.group(this.logRef)

      if(this.story) {

        // Use the input event for instant update of content
        this.$storybridge.on('input', (event) => {
          if (event.story.id === this.story.id) {
            this.$emit('contentUpdated', event.story.content)
          }
        })
        // Use the bridge to listen the events
        this.$storybridge.on(['published', 'change'], (event) => {
          // window.location.reload()
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true,
          })
        })

        logger.line('initialised live preview', 'done')

      } else {
        logger.warn(`[story] prop is missing - live preview may not work as expected`)
      }

      logger.groupEnd(this.logRef)

    }

  },

}