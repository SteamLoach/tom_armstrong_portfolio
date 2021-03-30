import Vue from 'vue'

//Utils
import uiButton from '~/components/controls/ui-button';
import svgLoader from '~/components/utils/svg-loader';

//Layout
import flexRow from '~/components/layout/flex-row';

//Panels
import heroPanel from '~/components/content-panels/hero-panel'
import twoColumnPanel from '~/components/content-panels/two-column-panel'
import mediaCardPanel from '~/components/content-panels/media-card-panel'

//Cards
import mediaCard from '~/components/cards/media-card'
import projectPreviewCopy from '~/components/cards/utils/project-preview-copy';
import projectPreviewMedia from '~/components/cards/utils/project-preview-media';

//Content
import richText from '~/components/content/rich-text'

//Media
import imageAsset from '~/components/media/image-asset';

//Forms
import netlifyForm from '~/components/forms/netlify-form'

//Transitions
import Transitions from 'vue2-transitions'


///////////////////////////////////////


//Utils
Vue.component('ui-button', uiButton);
Vue.component('svg-loader', svgLoader);


//Layout
Vue.component('flex-row', flexRow);

//Panels
Vue.component('hero-panel', heroPanel);
Vue.component('two-column-panel', twoColumnPanel);
Vue.component('media-card-panel', mediaCardPanel);

//Cards
Vue.component('media-card', mediaCard);
Vue.component('project-preview-copy', projectPreviewCopy);
Vue.component('project-preview-media', projectPreviewMedia);

//Content
Vue.component('rich-text', richText);

//Media
Vue.component('image-asset', imageAsset);

//Forms
Vue.component('netlify-form', netlifyForm);

//Transitions
Vue.use(Transitions);
