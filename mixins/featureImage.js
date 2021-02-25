import toolkit from '@/utils/toolkit'

export const featureImage = {

  methods: {

    featureImage: function(src) {
      const {content} = src;
      if(content.feature_image) {
        return content.feature_image;
      } else if(!this.$toolkit.isEmpty(content.images)) {
        return content.images[0]
      } else {
        return false;
      }
    }
  }

}