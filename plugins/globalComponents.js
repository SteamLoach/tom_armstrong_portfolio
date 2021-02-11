import Vue from 'vue'

//Panels
import heroPanel from '~/components/content-panels/hero-panel'


//Content
import developmentProjectPreview from
   '~/components/content-items/development-project-preview'
import designProjectPreview from
   '~/components/content-items/design-project-preview'
import richText from '~/components/content-items/rich-text'



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