<template>

  <a class="file-download"
     :href="content.file.filename"
     :download="content.file.title">

    <strong>
      {{content.title}}
    </strong>

    <svg-loader :content="{icon_name: content.icon_name}"
                aria-hidden="true" />


  </a>

</template>

<script>

export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    }
  }
}

</script>

<style lang="scss">

  .file-download {
    @include wrapper(between, center, $no-wrap: true);
    padding: $space-2 $space-3;
    margin-bottom: $space-4;
    font-size: $text-body;
    color: $dark-mode-text-color;
    background: $dark-mode-page-background;
    border-radius: $border-radius;

    .dark-mode & {
      color: $text-color;
      background: $page-background;
      svg {
        fill: $text-color;
      }
    }

    strong {
      vertical-align: baseline;
    }

    svg {
      fill: $dark-mode-text-color;
      @include size($title-large);
    }
  }

</style>