<template>

  <section class="project-preview-panel">

    <component  v-for="project in projects"
                :is="defineComponent(project)"
                :content="project.content"
                :fullSlug="project.full_slug"
                :key="project._uid" />

  </section>

</template>

<script>

export default {

  props: {
    projects: Array,
  },

  methods: {
    defineComponent: function(project) {
      return `${project.content.component}-preview`
    }
  }

}

</script>

<style lang="scss">



</style>