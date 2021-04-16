<template>

  <a class="social-link"
     :href="content.url.url">

    <svg-loader :content="{icon_name: content.icon_name}"
                aria-hidden="true" />
    <span>
      {{content.title}}
    </span>

  </a>

</template>


<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">

  .social-link {
    @include wrapper(start, end);
    margin-bottom: $space-6;
    svg {
      display: inline-block;
      @include size($text-largest);
      margin-right: $space-2;
    }
  }

</style>