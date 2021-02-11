<template>

  <section class="development-project-preview">

    <nuxt-link :to="`/${fullSlug}`">

      <media-card :alignMedia="mediaAlignment"
                  :classExt="['wide']">

        <template v-slot:copy>
          <div class="development-project-preview--copy">

            <h1> {{content.title}} </h1>

            <p class="development-project--summary"> {{content.summary}} </p>

            <ul class="development-project--tags">
              <li v-for="tag in tags"
                  :key="`${tag}-tag`">
                {{tag}}
              </li>
            </ul>

          </div>
        </template>

        <template v-slot:media>
          <img v-if="content.images[0]"
              :src="content.images[0].filename"
              :alt="content.images[0].alt" />
        </template>

      </media-card>

    </nuxt-link>

  </section>

</template>

<script>

export default {

  props: {
    alignMedia: {
      type: String,
      default: 'right'
    },
    index: {
      type: Number,
      default: 0,
    },
    content: {
      type: Object,
      required: true,
    },
    fullSlug: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    mediaAlignment: function() {
      if(!this.$store.getters.isHandheld) {
        return this.$toolkit.isEven(this.index) ? 'left' : 'right';
      }
    }
  }

}

</script>

<style lang="scss">

  .development-project-preview {
    @include row(center, start);
    @include margin-scale(
      bottom,
      $default: $space-9,
      $on-laptop: $space-11,
    );
  }

  .development-project-preview--copy {
    h1 {
      font-size: $title-medium;
      margin-bottom: $space-4;
    }
  }

</style>
