import Vue from 'vue'

//Utils
import uiButton from '~/components/controls/ui-button';


//Panels
import heroPanel from '~/components/content-panels/hero-panel'
import mediaCardPanel from '~/components/content-panels/media-card-panel'

//Content
import mediaCard from '~/components/content-items/media-card'
import richText from '~/components/content-utils/rich-text'

//Forms
import netlifyForm from '~/components/forms/netlify-form'

//Transitions
import Transitions from 'vue2-transitions'


///////////////////////////////////////


//Utils
Vue.component('ui-button', uiButton);

//Panels
Vue.component('hero-panel', heroPanel);
Vue.component('media-card-panel', mediaCardPanel);

//Content
Vue.component('rich-text', richText);
Vue.component('media-card', mediaCard);

//Forms
Vue.component('netlify-form', netlifyForm);

//Trnasitions
Vue.use(Transitions);