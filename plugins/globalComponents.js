import Vue from 'vue'

//Panels
import heroPanel from '~/components/content-panels/hero-panel'
import mediaCardPanel from '~/components/content-panels/media-card-panel'

//Content
import developmentProjectPreview from
   '~/components/content-items/development-project-preview'
import designProjectPreview from
   '~/components/content-items/design-project-preview'
import mediaCard from '~/components/content-items/media-card'
import richText from '~/components/content-utils/rich-text'

//Forms
import netlifyForm from '~/components/forms/netlify-form'

//Transitions
import Transitions from 'vue2-transitions'

//Panels
Vue.component('hero-panel', heroPanel);
Vue.component('media-card-panel', mediaCardPanel);

//Content
Vue.component('rich-text', richText);
Vue.component('media-card', mediaCard);
Vue.component('development-project-preview', developmentProjectPreview);
Vue.component('design-project-preview', designProjectPreview);

//Forms
Vue.component('netlify-form', netlifyForm);

//Trnasitions
Vue.use(Transitions);