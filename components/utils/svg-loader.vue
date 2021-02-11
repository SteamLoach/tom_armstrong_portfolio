<template>

  <component :is="icon" />

</template>

<script>

import developmentGlyphs from '~/assets/svg/development_glyphs.svg?inline';

import closeIcon from '~/assets/svg/close_icon.svg?inline';
import leftChevron from '~/assets/svg/left_chevron.svg?inline';
import rightChevron from '~/assets/svg/right_chevron.svg?inline';

export default {

  components: {
    closeIcon,
    leftChevron,
    rightChevron,
    developmentGlyphs,
  },

  props: {
    icon: String,
  }

}

</script>