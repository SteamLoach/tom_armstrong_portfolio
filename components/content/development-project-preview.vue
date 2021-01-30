<template>

  <article>

    <nuxt-link :to="`/${fullSlug}`">
      <h1> {{content.title}} </h1>
    </nuxt-link>

    <p> {{content.summary}} </p>

    <img v-if="content.images[0]"
         :src="content.images[0].filename"
         :alt="content.images[0].alt" />


  </article>

</template>

<script>

export default {

  props: {
    content: {
      type: Object,
      required: true,
    },
    fullSlug: {
      type: String,
      required: true,
    }
  }

}

</script>