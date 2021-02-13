<template>

  <nuxt-link class="button-link"
             :to="route.to">
    {{route.name}}
  </nuxt-link>

</template>

<script>
export default {

  props: {
    route: {
      type: Object,
      required: true,
    }
  }

}
</script>

<style lang="scss">

  .button-link {
    padding: $space-2 $space-4;
    font-weight: 600;
    color: $title-color;
    border: 2px solid $title-color;
    border-radius: $border-radius;

    &:not(:first-child) {
      margin-left: $space-4;
    }

    .dark-mode & {
      color: $dark-mode-title-color;
      border-color: $dark-mode-title-color;
    }

  }

</style>