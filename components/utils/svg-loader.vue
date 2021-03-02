<template>

  <component :is="content.icon_name" />

</template>

<script>

import developmentGlyphs from '~/assets/svg/development_glyphs.svg?inline';

import closeIcon from '~/assets/svg/close_icon.svg?inline';
import leftChevron from '~/assets/svg/left_chevron.svg?inline';
import rightChevron from '~/assets/svg/right_chevron.svg?inline';
import webdevSmall from '~/assets/svg/webdev_small.svg?inline';
import designSmall from '~/assets/svg/design_small.svg?inline';
import careerSmall from '~/assets/svg/career_small.svg?inline';

export default {

  components: {
    closeIcon,
    leftChevron,
    rightChevron,
    developmentGlyphs,
    webdevSmall,
    designSmall,
    careerSmall,
  },

  props: {
    content: Object,
    required: true,
  }

}

</script>