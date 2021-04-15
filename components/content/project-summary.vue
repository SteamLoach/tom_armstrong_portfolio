<template>

  <p class="project-summary">
    {{content}}
  </p>

</template>

<script>
export default {
  props: {
    content: {
      type: String,
    }
  }
}
</script>

<style lang="scss">

.project-summary {

  padding-bottom: $space-2;
  margin-bottom: $space-3;
  font-size: $text-body;
  border-bottom: 1px solid $border-color;

  .dark-mode & {
    border-color: $dark-mode-border-color;
  }

}

</style>