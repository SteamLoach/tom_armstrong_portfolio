<template>

  <div class="media-card--media project-preview-media">
    <img v-if="featureImage(project)"
          :src="featureImage(project).filename"
          :alt="featureImage(project).alt" />
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