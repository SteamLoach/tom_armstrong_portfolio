<template>

  <div class="handheld-nav-toggle"
       @click="toggleState('showHandheldNav')">
    <div class="handheld-nav-toggle--inner"
          :class="{'is-active': showHandheldNav}"></div>
  </div>

</template>

<script>

import {mapMutations, mapState} from 'vuex'

export default {

  computed: {
    ...mapState(['showHandheldNav'])
  },

  methods: {

    ...mapMutations(['toggleState'])

  }

}

</script>

<style lang="scss">



.handheld-nav-toggle {
  @include hidden-from($tablet);
  text-align: left;
  z-index: 1;
  overflow: visible;
  padding: 4px 4px 20px 4px;

  &:hover {
    cursor: pointer;
  }

}

%burger-bar {
  height: 4px;
  width: 45px;
  background-color: $title-color;
  border-radius: 20px;
  transition-property: background-color, transform;
  transition-duration: $transition-duration;
  transition-timing-function: ease;

  .dark-mode & {
    background-color: $dark-mode-title-color;
  }

}

.handheld-nav-toggle--inner {

  @extend %burger-bar;
  position: relative;

  &:before, &:after {
    @extend %burger-bar;
    display: inline-block;
    content: "";
    position: absolute;
    transition-delay: inherit;

  }
  &:before {
    top: 10px
  }
  &:after {
    top: 20px
  }
}

.handheld-nav-toggle--inner {

  &.is-active {
  transform: translate(0px, 10px) rotate(-135deg);

  &:before {
    transform: scale(0) translate(0px, -8px) rotate(-270deg);
  }
  &:after {
    transform: translate(0px, -20px) rotate(270deg);
  }
  }

}



</style>