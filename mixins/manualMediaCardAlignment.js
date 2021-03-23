
export const manualMediaCardAlignment = {

  methods: {
    mediaAlignment: function(i) {
      if(!this.$store.getters.isHandheld) {
        return this.$toolkit.isEven(i + 1) ? 'left' : 'right';
      } else {
        return 'left'
      }
    },
    slotOrder: function(i) {
      if(!this.$store.getters.isHandheld) {
        return this.$toolkit.isEven(i) ?
          ['copy', 'media'] : ['media', 'copy'];
      } else {
        return ['media', 'copy']
      }
    },
  }

}