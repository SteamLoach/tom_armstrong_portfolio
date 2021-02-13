<template>

  <content-panel-wrapper class="card-panel"
                         :class="[classExtensions]">

    <h2 class="card-panel--title"> {{content.title}}  </h2>

    <section class="card-panel--cards">

      <component v-for="(card, index) in content.cards"
                 :is="card.component"
                 :content="card"
                 :layout="content.card_layout"
                 :alignMedia="mediaAlignment(index)"
                 :key="card._uid"
                 v-editable="card">

        <template v-if="isMediaCard(card)"
                  v-slot:copy>
          <component v-for="item in card.copy"
                     :is="item.component"
                     :content="item"
                     :key="item._uid"
                     v-editable="item" />
        </template>

        <template v-if="isMediaCard(card)"
                  v-slot:media>
          <placeholder-image :width="450"/>
        </template>

      </component>

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
        logRef: '<card-panel>'
      }
    }
  },

  methods: {
    isMediaCard: function(card) {
      return card.component === 'media-card'
    },
    mediaAlignment: function(index) {
      if(this.content.align_media) {
        if(['left', 'right'].includes(this.content.align_media)) {
          console.log('alignment from cms')
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

  .card-panel {
    &.three-column {
      .card-panel--cards {
        .media-card {
          @include column-scale(
            $default: 24,
            $on-tablet: 12,
            $on-laptop: 8,
          );
        }
      }
    }
  }

  .card-panel--cards {
    @include row(center, start);
  }

</style>