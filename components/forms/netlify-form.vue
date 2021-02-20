<template>

  <content-panel-wrapper>

    <!-- Same Page Target -->
    <iframe name="hidden-iframe"
            id="hidden-iframe"
            style="display:none;"></iframe>
    <!-- End Same Page Target -->

    <form class="form"
          :class="{'row-layout': isRowLayout}"
          data-netlify="true"
          :name="content.name"
          data-netlify-honeypot="bot-field"
          method="post"
          target="hidden-iframe">

      <header class="form--header">
        <rich-text :content="content.header" />
      </header>

      <section class="form--body">

        <!-- Netlify Form Name Prop
        <input type="hidden"
               name="form-name"
              :value="content.name" />
        -->

        <!-- Bot Field -->
        <input v-if="formHandlerMixin.netlify"
               v-model="$v.form.honeypot.$model"
               class="honeypot"
               name="bot-field"
               type="text"
               id="paranoidandroid"
               placeholder="sneaky sneaky"
               style="display: none;"/>
        <!-- End Bot Field -->

        <div v-for="item in fields"
            class="form--field"
            :key="item.key">

          <label :for="item.label">
            <strong>
               {{item.label}}{{item.validations.required ? '*' : ''}}
            </strong>
          </label>

          <select v-if="item.field.tag === 'select'"
                  v-model="$v.form[item.name].$model"
                  :name="item.name"
                  :id="item.id"
                  :required="item.validations.required"
                  :placeholder="item.field.placeholder">

            <option v-for="(option, index) in item.field.options"
                    :key="`${item.name}-option-${index}`">
              {{option}}
            </option>

          </select>

          <textarea v-else-if="item.field.tag === 'textarea'"
                    v-model="$v.form[item.name].$model"
                    :name="item.name"
                    :id="item.id"
                    :required="item.validations.required"
                    :placeholder="item.field.placeholder"
                    rows="5" />

          <input v-else
                v-model="$v.form[item.name].$model"
                :type="item.field.type"
                :name="item.name"
                :id="item.id"
                :required="item.validations.required"
                :placeholder="item.field.placeholder" />

          <fade-transition>
            <ul v-if="fieldHasErrors(item)"
                class="form--field--error">
              <li v-for="(error, index) in fieldErrors[item.name]"
                  :key="`${item.name}-error-${index}`">
                {{error}}
              </li>
            </ul>
          </fade-transition>

        </div>

      </section>

      <aside class="form--aside">

        <rich-text v-if="content.show_privacy_statement"
                   class="small-copy-size"
                   :content="content.privacy_statement" />

        <div v-if="content.require_consent"
             class="form--field checkbox">
          <input v-model="$v.form.user_consent.$model"
                type="checkbox"
                name="user_consent"
                id="user-consent" />
          <label class="user-consent"
                 for="user-consent">
            {{content.consent_message}}
          </label>
        </div>

      </aside>

      <div class="form--submit">
        <ui-button :classExt="[
                    'neutral',
                    'full-width',
                    'hover-state',
                    ]"
                   :content="{
                     name: 'Send',
                     type: 'button'
                    }"
                   :disabled="!canSubmit"
                   @handleClick="postForm" />

          <slide-x-right-transition mode="out-in">
          <div class="form--submit--sending"
               :key="isSubmitting ? 'submitting' : 'has-submitted'">
            <span v-if="isSubmitting">Sending message</span>
            <span v-else-if="hasSubmitted">
              {{content.thankyou_message}}
            </span>
            <circle-loader v-if="isSubmitting" class="margin-left"/>
          </div>
          </slide-x-right-transition>

      </div>

    </form>

  </content-panel-wrapper>

</template>

<script>

import {formHandler} from '@/mixins/formHandler';

export default {

  mixins: [formHandler],

  props: {
    content: {
      type: Object,
      default: () => {},
    }
  },

  data() {
    return {

      logRef: `<netflify-form> [${new Date().getTime()}]`,

      formHandlerMixin: {
        schema: this.content.schema,
        format: 'JSON',
        netlify: true,
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
    margin: 0 auto;

    &.row-layout {
      @include container(start, stretch);
    }

  }

  .form--header {
    width: 100%;
    margin-bottom: $space-6;
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
    margin-bottom: $space-5;

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
    font-size: $text-small;
    color: $danger-dark;

    .dark-mode & {
      color: $danger-light;
    }
  }

</style>