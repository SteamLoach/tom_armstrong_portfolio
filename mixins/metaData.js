export const metaData = {

  head() {

    if(this.story.content && this.story.content.meta) {
      return {
        title: this.story.content.meta.title,
        meta: [
          {
            hid: 'description',
            name:'description',
            content: this.story.content.meta.description,
          }
        ]
      }
    } else {
      return {
        title: "It's Tom Armstrong | Web Development and Design",
        meta: [
          {
            hid: 'description',
            name:'description',
            content: "Tom Armstrong is a web developer and designer based in Vancouver, Canada.",
          }
        ]
      }
    }


  }

}