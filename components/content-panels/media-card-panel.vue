<template>

  <content-panel-wrapper class="media-card-panel"
                         :class="[classExtensions]">

    <h2 class="media-card-panel--title"> {{content.title}}  </h2>

    <section class="media-card-panel--cards">

      <media-card v-for="(card, index) in content.cards"
                  :is="card.component"
                  :content="card"
                  :layout="content.card_layout"
                  :alignMedia="mediaAlignment(index)"
                  :classExt="content.card_class_extensions.split(',')"
                  :key="card._uid"
                  v-editable="card">

        <template v-slot:copy>
          <component v-for="item in card.copy"
                     :is="item.component"
                     :content="item"
                     :key="item._uid"
                     v-editable="item" />
        </template>

        <template v-slot:media>
          <placeholder-image :width="450"/>
        </template>

      </media-card>

    </section>

  </content-panel-wrapper>

</template>

<script>

import {classExtensions} from '@/mixins/classExtensions'

export default {

  mixins: [classExtensions],

  props: {
    content: {
      type: Object,
      required: true,
    },
    classExt: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      classExtensionsMixin: {
        logRef: '<media-card-panel>',
        prop: 'panel_class_extensions'
      }
    }
  },

  methods: {

    mediaAlignment: function(index) {
      if(this.content.align_media) {
        if(['left', 'right'].includes(this.content.align_media)) {
          return this.content.align_media
        } else if (this.content.align_media === 'alternate') {
            if(!this.$store.getters.isHandheld) {
              return this.$toolkit.isEven(index) ? 'left' : 'right'
            } else {
              return 'right'
            }
        }
      }
    }
  }

}

</script>

<style lang="scss">

  .media-card-panel--title {
    margin-bottom: $space-8;
    text-align: center;
    font-size: $title-large;
  }

  .media-card-panel--cards {
    @include row(center, start);
  }

</style>