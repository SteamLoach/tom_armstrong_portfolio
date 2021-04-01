import Vue from 'vue'

//Utils
import uiButton from '~/components/controls/ui-button';
import svgLoader from '~/components/utils/svg-loader';
import socialLink from '~/components/utils/social-link';
import fileDownload from '~/components/utils/file-download';
import galleryLink from '~/components/utils/gallery-link';

//Wrappers
import modalWrapper from '~/components/_wrappers/modal-wrapper';

//Layout
import flexRow from '~/components/layout/flex-row';
import layoutColumn from '~/components/layout/layout-column';

//Panels
import heroPanel from '~/components/content/hero-panel';

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
Vue.component('social-link', socialLink);
Vue.component('file-download', fileDownload);
Vue.component('gallery-link', galleryLink);

//Wrappers
Vue.component('modal-wrapper', modalWrapper);


//Layout
Vue.component('flex-row', flexRow);
Vue.component('layout-column', layoutColumn);

//Panels
Vue.component('hero-panel', heroPanel);

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
