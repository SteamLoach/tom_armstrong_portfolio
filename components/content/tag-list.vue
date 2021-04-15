<template>

  <ul class="tag-list">
    <li v-for="tag in tags"
        :key="`${tag}-tag`">
      {{tag}}
    </li>
  </ul>

</template>

<script>
export default {
  props :{
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">

  .tag-list {
    width: 100%;
    padding: 0 $space-2 $space-2 $space-2;
    margin-bottom: $space-2;
    li {
      display: inline-block;
      font-size: $text-smaller;

      &:not(:first-child) {
        padding-left: $space-2;
        margin-left: $space-2;
        border-left: 1px solid $shade-light;
      }

    }
  }

</style>