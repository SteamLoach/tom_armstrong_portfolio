import log from '@/utils/log'

const logger = log({
  type: 'component',
  ref: 'Lightbox Gallery (Mixin)',
  time: false,
})

export const lightboxGallery = {

  methods: {

    openLightboxGallery: function(index) {

      logger.group(this.lightboxGalleryMixin.logRef)

      if(this.lightboxGalleryMixin) {

        this.lightboxGalleryMixin.isActive = true;
        this.lightboxGalleryMixin.currentIndex = index;
        logger.line(`open lightbox at [${index}]`)

      } else {
        logger.warn('define a [lightboxGalleryMixin] config object')
      }

      logger.groupEnd(this.lightboxGalleryMixin.logRef)

    },

    setLightboxGalleryIndex: function(e) {
      logger.group(this.lightboxGalleryMixin.logRef)
      logger.line(`set index to ${e}`)
      this.lightboxGalleryMixin.currentIndex = e;
      logger.groupEnd(this.lightboxGalleryMixin.logRef)
    },

    closeLightboxGallery: function() {
      logger.group(this.lightboxGalleryMixin.logRef)
      logger.line('close lightbox')
      this.lightboxGalleryMixin.isActive = false;
      logger.groupEnd(this.lightboxGalleryMixin.logRef)
    },

  }

}