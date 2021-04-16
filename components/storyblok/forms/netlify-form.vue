<template>

  <div>

    <!-- Same Page Target -->
    <iframe name="hidden-iframe"
            id="hidden-iframe"
            style="display:none;"></iframe>
    <!-- End Same Page Target -->

    <form class="form"
          :class="[
            classExtensions,
            {'row-layout': isRowLayout}
          ]"
          data-netlify="true"
          :name="content.name"
          :aria-label="content.name"
          data-netlify-honeypot="bot-field"
          method="post"
          target="hidden-iframe"
          v-on:submit="postForm">

      <header class="form--header">
        <rich-text :content="content.header" />
      </header>

      <section class="form--body">

        <!-- Netlify Form Name Prop -->
        <input type="hidden" name="form-name" :value="content.name" >
        <!-- -->

        <!-- Bot Field -->
        <input v-if="formHandlerMixin.netlify"
               v-model="$v.form.honeypot.$model"
               class="honeypot"
               name="bot-field"
               type="text"
               id="paranoidandroid"
               placeholder="sneaky sneaky"
               style="display: none;" >
        <!-- End Bot Field -->

        <component v-for="field in content.fields"
                   :is="field.component"
                   :key="field._uid"
                   :content="field"
                   :fieldErrors="fieldErrors[$toolkit.snakeCase(field.name)]"
                   v-model="$v.form[field.name].$model"
                   />

      </section>

      <aside class="form--aside">

        <rich-text v-if="content.show_privacy_statement"
                   class="small-copy-size margin-bottom-medium"
                   :content="content.privacy_statement" />

        <div v-if="content.require_consent"
             class="form--field checkbox">
          <input v-model="$v.form.user_consent.$model"
                type="checkbox"
                name="user_consent"
                id="user-consent" >
          <label class="user-consent"
                 for="user-consent">
            {{content.consent_message}}
          </label>
        </div>

      </aside>

      <div class="form--submit">
        <input class="ui-button neutral full-width hover-state"
               type="submit"
               :value="content.submit_prompt || 'Send'"
               :disabled="!canSubmit" >

          <slide-x-right-transition mode="out-in">
          <div class="form--submit--sending"
               :key="isSubmitting ? 'submitting' : 'has-submitted'">
            <span v-if="isSubmitting">Sending message</span>
            <span v-else-if="hasSubmitted">
              {{content.thankyou_message}}
            </span>
            <circle-spinner v-if="isSubmitting" class="margin-left"/>
          </div>
          </slide-x-right-transition>

      </div>

    </form>

  </div>

</template>

<script>

import {formHandler} from '@/mixins/formHandler';
import {classExtensions} from '@/mixins/classExtensions';

import circleSpinner from '@/components/local/utils/circle-spinner';

export default {

  mixins: [formHandler, classExtensions],

  props: {
    content: {
      type: Object,
      default: () => {},
    },
    classExt: {
      type: Array,
      default: () => [],
    }
  },

  components: {
    circleSpinner,
  },

  data() {
    return {

      logRef: `<netflify-form> [${new Date().getTime()}]`,

      formHandlerMixin: {
        netlify: true,
      },

      classExtensionsMixin: {
        prop: 'class_extensions',
      },

    }
  },

  computed: {
    isRowLayout: function() {
      return this.content.layout === 'row'
    }
  }

}

</script>

<style lang="scss">

  #hidden-iframe, .honeypot {
    display: none !important;
  }

  .form {
    max-width: $wide-width;

    &.center {
      margin: 0 auto;
    }

    &.x-pad-medium {
      @include pad-scale(
        x,
        $default: $space-4,
        $on-tablet: $space-5,
        $on-desktop: $space-8,
      );
    }

    &.y-pad-medium {
      @include pad-scale(
        y,
        $default: $space-6,
        $on-tablet: $space-8,
      );
    }


    &.row-layout {
      @include container-until($tablet, center, stretch);
      @include container(start, stretch);
    }

  }

  .form--header {
    width: 100%;
    margin-bottom: $space-6;
    @include media-until($tablet, text-align, center);
  }

  .form--body,
  .form--aside {
    max-width: $narrow-width;
  }

  .form--body,
  .form--submit {
    @include column-scale(
      $default: 24,
      $on-tablet: 12,
    );
    @include margin-scale(
      right,
      $on-tablet: $space-6,
      $on-laptop: $space-8,
    );
  }

  .form--aside {
    @include media-until($tablet, width, 100%);
    @include media-from($tablet, flex, 1);
  }

  .form--submit {
    max-width: $narrow-width;
    input {
      width: 100%;
      padding: $space-2 $space-3;
      font-size: $text-body;
      color: $title-color;
      border: 2px solid $title-color;

      .dark-mode & {
        color: $dark-mode-title-color;
        border-color: $dark-mode-title-color;
      }

      &:hover:not(:disabled) {
        cursor: pointer;
        color: $dark-mode-title-color;
        background: $title-color;

        .dark-mode & {
          color: $title-color;
          background: $dark-mode-title-color;
        }

      }
      &:disabled {
        cursor: not-allowed;
        color: $shade-light;
        border-color: $shade-light;
        .dark-mode & {
          color: $shade-darker;
          border-color: $shade-darker;
        }
      }
    }
  }

  .form--submit--sending,
  .form--submit--complete {
    @include row(center, center);
    min-height: 45px;
    padding: $space-2;
  }

  .form--field {
    position: relative;
    margin-bottom: $space-6;

    label {
      display: block;
      font-size: $text-body;
    }

    input, textarea,
    select, option {
      width: 100%;
      max-width: 100%;
      max-height: 550px;
      padding: $space-1 $space-2;
      font-size: $text-body;
      color: $text-color;
      border: 2px solid $border-color;
      border-radius: $border-radius;



      .dark-mode & {
        color: $dark-mode-text-color;
        border-color: $dark-mode-border-color;
        background: $dark-mode-page-background;
      }
    }

    .user-consent {
      font-size: $text-small;
    }

    &.checkbox {
      @include wrapper(start, start, $no-wrap: true);
      input {
        width: auto;
        margin-top: 4px;
        margin-right: $space-2;
      }
    }

  }

  .form--field--error {
    position: absolute;
      top: 100%;
      left: 0;
    font-size: $text-small;
    color: $danger-dark;

    .dark-mode & {
      color: $danger-light;
    }
  }

</style>