<template>

  <component :is="content.icon_name" />

</template>

<script>


import closeIcon from '~/assets/svg/close_icon.svg?inline';
import leftChevron from '~/assets/svg/left_chevron.svg?inline';
import rightChevron from '~/assets/svg/right_chevron.svg?inline';
import webdevSmall from '~/assets/svg/webdev_small.svg?inline';
import designSmall from '~/assets/svg/design_small.svg?inline';
import careerSmall from '~/assets/svg/career_small.svg?inline';
import sunIcon from '~/assets/svg/sun_icon.svg?inline';
import moonIcon from '~/assets/svg/moon_icon.svg?inline';

export default {

  components: {
    closeIcon,
    leftChevron,
    rightChevron,
    webdevSmall,
    designSmall,
    careerSmall,
    moonIcon,
    sunIcon,
  },

  props: {
    content: Object,
    required: true,
  }

}

</script>