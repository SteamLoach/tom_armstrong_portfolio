<template>

  <div class="fold-out-wrapper"
       :class="{'is-active': isActive}">
    <slot />
  </div>

</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style lang="scss">

  .fold-out-wrapper {
    overflow: hidden;
    max-height: 0;

    @include transition();

    &.is-active {
      max-height: 10000px;
    }
  }

</style>