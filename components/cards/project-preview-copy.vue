<template>

  <div class="media-card--copy project-preview-copy">
    <h2> {{project.content.title}} </h2>
    <project-summary :content="project.content.summary" />
    <tag-list :tags="project.tag_list" />
    <ui-button :content="{
                  name: 'Read More',
                  type: 'link',
                  to: project.full_slug,
                }"
                :classExt="[
                  'accent',
                  'hover-state',
                  'full-width'
                ]" />
  </div>

</template>

<script>
export default {

  props: {
    project: {
      type: Object,
      required: true,
    }
  }

}
</script>

<style lang="scss">

  .project-preview-copy {
    h2 {
      font-size: $title-medium;
      margin-bottom: $space-4;
    }
  }

</style>