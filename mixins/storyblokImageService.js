import log from '@/utils/log'

/*
Mixin requires an [classExtensionsMixin] data object:
  {
    filename: image src to transform,
    additionalBreakpoints: specific breakpoints to add
  }
*/

const logger = log({
  type: 'storyblok',
  ref: 'Storyblok Image Service (Mixin)',
})

export const storyblokImageService = {

  mounted() {
    if(!this.storyblokImageServiceMixin) {
      logger.group(this.logRef);
      logger.warn('define a [storyblokImageServiceMixin] config object')
      logger.groupEnd(this.logRef);
    }
  },

  data() {
    return {
      CDN: 'https://img2.storyblok.com',
      defaultBreakpoints: [
        {media: 549, dimensions: '600x600'},
        {media: 767, dimensions: '800x800'},
        {media: 1263, dimensions: '1300x1300'}
      ],
    }
  },

  computed: {
    breakpoints: function(){
      if(this.storyblokImageServiceMixin.additionalBreakpoints) {
        return [
          ...this.defaultBreakpoints,
          ...this.storyblokImageServiceMixin.additionalBreakpoints,
        ]
      } else {
        return this.defaultBreakpoints;
      }
    },
    src: function() {
      return this.storyblokImageServiceMixin.filename.split(
        '//a.storyblok.com'
      )[1]
    }
  }

}