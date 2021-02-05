import log from '@/utils/log'


/*

Mixin requires a [storyblokBridgeMixin] component data object:
{
  logRef: (optional) param for logging
  isIndex: (optional) - set [true] if the page is an index
}

*/

const logger = log({
  type: 'storyblok',
  ref: 'storyblokBridge (Mixin)'
})

const contentVersion = process.env.NUXT_ENV_CONTENT_VERSION


export const storyblokBridge = {

  data() {
    return {
      story: {},
      index: [],
    }
  },

  mounted () {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
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
  },

  async fetch() {

    if(this.storyblokBridgeMixin) {

      logger.group(this.storyblokBridgeMixin.logRef);

      try {

        const isIndex = this.storyblokBridgeMixin.isIndex ? true : false;
        const { path, name } = this.$route;
        const slug = (path == '/' || path == '') ? 'home' : path

        const reqRoute = isIndex ? 'cdn/stories' : `cdn/stories/${slug}`
        const reqConfig = {
          version: contentVersion
        }
        if(isIndex) {
          reqConfig['by_slugs'] = `${name}/*`
        }

        if(isIndex) {
          logger.line(`request data for [${name}] index`, 'load');
        } else {
          logger.line(`request data for [${slug}] route`, 'load');
        }

        const res = await this.$storyapi.get(reqRoute, reqConfig);

        if(isIndex) {
          const {stories} = res.data

          this.story = stories.find(story => story.name === 'Index')
          logger.line('page data assigned to [this.story]')

          this.index = stories.filter(story => story.name !== 'Index')
          logger.line('index data assigned to [this.index]')

        } else {
          this.story = res.data.story;
          logger.line('page data assigned to [this.story]')
        }

        logger.line('request complete', 'done')

      } catch(err) {
        logger.error(err);
      }

      logger.groupEnd(this.storyblokBridgeMixin.logRef);

    } else {
      logger.warn('define a [storyblokBridgeMixin] config object')
    }

  },

}