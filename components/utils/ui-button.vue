<template>


  <span class="ui-button">
    <nuxt-link v-if="isLink"
               :to="to">
      {{name}}
    </nuxt-link>
    <button v-else-if="isButton">
      {{name}}
    </button>
  </span>



</template>

<script>
export default {

  props: {
    type: {
      type: String,
      default: 'button',
      validator: function(val) {
        return ['button', 'link'].includes(val);
      }
    },
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: function() {return this.type === 'link'},
    }
  },

  computed: {
    isButton: function() {
      return this.type === 'button'
    },
    isLink: function() {
      return this.type === 'link'
    }
  }

}
</script>

<style lang="scss">

  .ui-button {

    &:not(:first-child) {
      margin-left: $space-4;
    }

    button,
    a {
      padding: $space-2 $space-4;
      font-weight: 600;
      color: $title-color;
      border: 2px solid $title-color;
      border-radius: $border-radius;

      .dark-mode & {
        color: $dark-mode-title-color;
        border-color: $dark-mode-title-color;
      }

    }

  }

</style>