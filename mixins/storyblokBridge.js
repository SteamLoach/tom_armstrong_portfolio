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
  ref: 'storyblokBridge (Mixin)',
  mute: !process.client,
});


export const storyblokBridge = {

  async asyncData({
    app,
    route,
    $config,
  }) {

    try {

      const timestamp = new Date().getTime();

      const isHome = route.path === '/' || route.path === ''
      const slug = isHome ? 'home' : route.path

      logger.group(`<${slug}> page [${timestamp}]`);

      const reqConfig = {
        version: $config.contentVersion,
      };

      logger.line(`request [${$config.contentVersion}] data for ${slug} route`, 'load');

      const pageRes = await app.$storyapi.get(
        `cdn/stories/${slug}`,
         reqConfig,
      );
      const story = pageRes.data.story;
      logger.line('set page data', 'done');


      const isIndex = story.name.toLowerCase() === 'index' && !isHome;
      const stories = [];

      if(isIndex) {
        logger.line('fetching indexed pages', 'load');
        reqConfig['by_slugs'] = `${route.name}/*`
        const indexRes = await app.$storyapi.get(
          'cdn/stories',
          reqConfig,
        )
        indexRes.data.stories.forEach(item => {
          if(item.name.toLowerCase() !== 'index') {
            logger.line(`add [${item.name}] to index`, 'done')
            stories.push(item);
          }
        })
      }

      const dataObj = isIndex ? {story, stories} : {story};

      logger.groupEnd(`<${slug}> page [${timestamp}]`)

      return dataObj;

    } catch(err) {
      logger.error(err);
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


}