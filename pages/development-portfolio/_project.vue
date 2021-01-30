<template>

  <main v-if="story.content"
        v-editable="story.content">

    <h1 class="title"> {{story.content.title}} </h1>

    <section>

      <p> {{story.content.summary}} </p>

      <rich-text v-for="(field, index) in presentRichTextFields"
                 :raw="story.content[field]"
                 :key="`${field}-${index}`" />

    </section>

  </main>



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

      richTextFields: [
        'brief',
        'solution',
        'solution_with_jargon'
     ]

    }

  },

  computed: {
    presentRichTextFields: function() {
      if(this.story.content) {
        return this.richTextFields.filter(f => this.story.content[f]);
      } else {
        return []
      }
    }
  }

}

</script>