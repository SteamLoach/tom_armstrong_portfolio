<template>

  <page-wrapper v-if="story.content"
        v-editable="story.content">

    <header class="development-project-header">
      <h1 class="development-project-title">
        {{story.content.title}}.
      </h1>
      <p class="development-project-summary">
        {{story.content.summary}}
      </p>
      <ul class="development-project-tags">
        <li v-for="tag in story.tag_list"
            :key="`${tag}-tag`">
          {{tag}}
        </li>
      </ul>
    </header>

    <article class="development-project-copy">

      <component v-for="item in story.content.body"
                 :is="item.component"
                 :content="item"
                 :classExt="['medium-copy-width']"
                 :displayCondition="displayCondition(item)"
                 v-editable="item"
                 :key="item._uid" />

    </article>

  </page-wrapper>



</template>

<script>

import {storyblokBridge} from '@/mixins/storyblokBridge';

export default {

  mixins: [
    storyblokBridge,
  ],

  data() {

    return {

      storyblokBridgeMixin: {
        logRef: this.$route.path,
      },

      jargonConfig: {
        noJargonComponentRefs: ['solution'],
        withJargonComponentRefs: ['solutionWithJargon']
      }

    }

  },

  computed: {
    withJargon: function() {
      return this.$store.state.withJargon
    }
  },

  methods: {
    //determines jargon/noJargon content
    displayCondition(item) {
      const itemRef = this.$toolkit.camelCase(item.reference);
      const noJargonComponents = this.jargonConfig.noJargonComponentRefs;
      const jargonComponents = this.jargonConfig.withJargonComponentRefs;
      if(noJargonComponents.includes(itemRef)) {
        return !this.withJargon;
      } else if (jargonComponents.includes(itemRef)) {
        return this.withJargon;
      } else {
        return true;
      }
    }
  }



}

</script>

<style lang="scss">

  .development-project-header {
    @include height-scale(
      $default: 75vh,
      $on-laptop: 90vh,
    );
    @include pad-scale(
      top,
      $default: $space-8,
      $on-tablet: $space-11,
      $on-laptop: $space-11,
    )
  }

  .development-project-title {
    width: 100%;
    margin-bottom: $space-2;
    font-size: $title-larger;
  }

  .development-project-summary {
    @include single-margin-until($tablet, right, $space-6);
    padding-bottom: $space-1;
    margin-bottom: $space-2;
    font-size: $text-body;
    border-bottom: 1px solid $shade-darker;
  }

  .development-project-tags {
    width: 100%;
    padding: 0 $space-2 $space-2 $space-2;
    li {
      display: inline-block;
      font-size: $text-smaller;

      &:not(:last-child) {
        padding-right: $space-2;
        margin-right: $space-2;
        border-right: 1px solid $shade-light;
      }

    }
  }

  .development-project-copy {}

</style>