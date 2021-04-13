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
      if(this.storyblokImageServiceMixin.filename) {
        return this.storyblokImageServiceMixin.filename.split(
          '//a.storyblok.com'
        )[1]
      }
    },
    asBackground: function() {
      const breakpoint = this.breakpoints.find((b) => {
        return b.media > this.$store.state.windowWidth
      })
      if(breakpoint) {
        return `${this.CDN}/fit-in/${breakpoint.dimensions}${this.src}`
      } else {
        return this.storyblokImageServiceMixin.filename
      }
    },
  }

}