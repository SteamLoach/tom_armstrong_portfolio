<template>


  <div class="flex-row layout--content-panel"
       :class="[classExtensions]">

    <h2 v-if="content.title"
        class="flex-row--title">
      {{content.title}}
    </h2>

    <div class="flex-row--inner"
         :class="content.content_width">
      <component v-for="(item, index) in stackOrder"
            :is="item.component"
            :content="item"
            :key="item._uid"
            :index="index"
            v-editable="item" />
    </div>


  </div>


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
      default: () => []
    }
  },

  data() {

    return {

      logRef: `<flex-row> [${new Date().getTime()}]`,

      classExtensionsMixin: {
        prop: 'class_extensions'
      }

    }

  },

  computed: {

    isMobile: function() {
      return this.$store.getters.isMobile;
    },

    stackOrder: function() {
      if(this.isMobile) {
        return [...this.content.items].sort((a,b) => {
          return b.stack_order - a.stack_order;
        })
      } else {
        return this.content.items;
      }

    }
  },

}

</script>

<style lang="scss">

  .flex-row {
    width: 100%;

    &.center-stretch {
      .flex-row--inner {
        @include row(center, stretch);
      }

    }

  }

  .flex-row--title {
    margin-bottom: $space-8;
    text-align: center;
    font-size: $title-large;
  }

  .flex-row--inner {
    @include row(center, start);
    margin: 0 auto;

  }

</style>