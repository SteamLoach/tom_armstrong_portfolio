<template>

  <content-panel-wrapper>

    <!-- Same Page Target -->
    <iframe name="hidden_iframe"
            id="hidden_iframe"
            style="display:none;"></iframe>
    <!-- End Same Page Target -->

    <form class="form"
          data-netlify="true"
          name="Contact Form"
          data-netlify-honeypot="bot-field"
          method="post"
          v-on:submit="postForm"
          target="hidden_iframe">

      <section class="form--body">

        <h2 class="form--title"> {{content.title}} </h2>

        <div v-for="item in fields"
            class="form--field"
            :key="item.key">

          <label :for="item.label">
            <strong> {{item.label}} </strong>
          </label>

          <select v-if="item.field.tag === 'select'"
                  v-model="$v.form[item.name].$model"
                  :name="item.name"
                  :id="item.id">

            <option v-for="(option, index) in item.field.options"
                    :key="`${item.name}-option-${index}`">
              {{option}}
            </option>

          </select>

          <textarea v-else-if="item.field.tag === 'textarea'"
                    v-model="$v.form[item.name].$model"
                    :name="item.name"
                    :id="item.id"
                    rows="5" />

          <input v-else
                v-model="$v.form[item.name].$model"
                :type="item.field.type"
                :name="item.name"
                :id="item.id" />

        </div>

        <!-- Bot Field -->
        <input v-if="formBuilderMixin.netlify"
               v-model="$v.form.honeypot.$model"
               class="honeypot"
               name="bot-field"
               type="text"
               id="paranoidandroid"
               placeholder="sneaky sneaky"
               style="display: none;"/>
        <!-- End Bot Field -->

      </section>

      <section class="form--controls">

        <rich-text v-if="content.show_privacy_statement"
                   :content="content.privacy_statement" />

        <div v-if="content.require_consent"
            class="form--field checkbox">
          <input v-model="$v.form.user_consent.$model"
                type="checkbox"
                name="user_consent"
                id="user-consent" />
          <label for="user-consent">
            {{content.consent_message}}
          </label>
        </div>

        <input type="submit"
               value="Send"
               :disabled="!canSubmit" />


      </section>


    </form>

  </content-panel-wrapper>

</template>

<script>

import {formBuilder} from '@/mixins/formBuilder';

export default {

  mixins: [formBuilder],

  props: {
    content: {
      type: Object,
      default: () => {},
    }
  },

  data() {
    return {

      logRef: `<netflify-form> [${new Date().getTime()}]`,

      formBuilderMixin: {
        schema: this.content.schema,
        format: 'JSON',
        netlify: true,
      },

    }
  },

}

</script>

<style lang="scss">

  #hidden_iframe, .honeypot {
    display: none !important;
  }

  .form {
    max-width: $narrow-width;
    margin: 0 auto;
    @include y-pad($space-8);
  }

  .form--title {
    margin-bottom: $space-6;
  }

  .form--field {
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

    &.checkbox {
      @include wrapper(start, center);
      input {
        width: auto;
        margin-right: $space-2;
      }
    }

  }

</style>