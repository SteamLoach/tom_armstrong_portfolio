import Vue from 'vue'

//Panels
import heroPanel from '~/components/panels/hero-panel'

//Content
import richText from '~/components/content/rich-text'
import developmentProjectPreview from
   '~/components/content/development-project-preview'
import designProjectPreview from
  '~/components/content/design-project-preview'

//Transitions
import Transitions from 'vue2-transitions'

//Panels
Vue.component('hero-panel', heroPanel)

//Content
Vue.component('rich-text', richText);
Vue.component('development-project-preview', developmentProjectPreview);
Vue.component('design-project-preview', designProjectPreview);

//Trnasitions
Vue.use(Transitions);