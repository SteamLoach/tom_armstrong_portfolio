<template>

  <div class="media-card--media project-preview-media">
    <image-asset :content="{media: featureImage(project)}"
                 :defaultSize="defaultSize" />
  </div>

</template>


<script>

import {featureImage} from '@/mixins/featureImage';

export default {

  mixins: [featureImage],

  props: {
    project: {
      type: Object,
      required: true,
    }
  },

  computed: {
    defaultSize: function() {
      return this.$route.path === '/design-portfolio' ?
        '' : '450x450';
    }
  }

}

</script>

<style lang="scss">

  .project-preview-media {
    @include margin-scale(
      bottom,
      $default: $space-4,
      $on-laptop: 0,
    );
  }

</style>