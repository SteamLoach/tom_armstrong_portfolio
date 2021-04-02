<template>

  <tab-lock tag="nav"
            class="handheld-nav">

    <div class="handheld-nav--toggle-row">
      <handheld-nav-toggle ref="firstValidTab"
                           :delay="true"/>
    </div>
    <ul class="handheld-nav--links">
      <li v-for="(route, index) in routes"
          :key="`route-${index}`"
          @click="closeHandheldNav">
        <nuxt-link :to="route.to"
                  :class="{'is-folder': route.isFolder}">
          <span>{{route.name}}</span>
        </nuxt-link>
      </li>
    </ul>
    <ul class="handheld-nav--controls">
      <li>
        <dark-mode-toggle ref="lastValidTab"/>
      </li>
      <!--
      <li>
        <jargon-toggle />
      </li>
      -->
    </ul>

  </tab-lock>






</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {

  props: {
    routes: Array,
  },

  methods: {

    closeHandheldNav: function() {
      this.setState({target: 'showHandheldNav', payload: false})
    },

    ...mapMutations(['setState'])
  },

  computed: {
    ...mapState(['showHandheldNav'])
  }

}
</script>

<style lang="scss">

  .handheld-nav {
    z-index: 1001;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    position: fixed;
      top: 0;
      left: 0;
    background: $shade-lightest;
    @include x-pad($space-4);
    @include y-pad($space-4);
    .dark-mode & {
      background: $shade-darkest;
    }
  }

  .handheld-nav--toggle-row {
    @include row(end, center);
    margin-bottom: $space-5;
  }

  .handheld-nav--links,
  .handheld-nav--controls {
    font-size: $text-largest;
    font-weight: 200;
    li {
      text-align: center;
    }
  }

  .handheld-nav--links {
    margin-bottom: $space-6;
    border-bottom: 1px solid $border-color;

    li {
      margin-bottom: $space-6;
    }
    a {
      @include route-link();
    }

    .dark-mode & {
      border-color: $dark-mode-border-color;
    }

  }



</style>