import Vue from 'vue'

//Utils
import uiButton from '~/components/controls/ui-button';
import svgLoader from '~/components/utils/svg-loader';

//Panels
import heroPanel from '~/components/content-panels/hero-panel'
import twoColumnPanel from '~/components/content-panels/two-column-panel'
import mediaCardPanel from '~/components/content-panels/media-card-panel'

//Content
import mediaCard from '~/components/content-items/media-card'
import richText from '~/components/content-utils/rich-text'
import mediaAsset from '~/components/content-utils/media-asset';

//Forms
import netlifyForm from '~/components/forms/netlify-form'

//Transitions
import Transitions from 'vue2-transitions'


///////////////////////////////////////


//Utils
Vue.component('ui-button', uiButton);
Vue.component('svg-loader', svgLoader);


//Panels
Vue.component('hero-panel', heroPanel);
Vue.component('two-column-panel', twoColumnPanel);
Vue.component('media-card-panel', mediaCardPanel);


//Content
Vue.component('rich-text', richText);
Vue.component('media-card', mediaCard);
Vue.component('media-asset', mediaAsset);


//Forms
Vue.component('netlify-form', netlifyForm);


//Transitions
Vue.use(Transitions);