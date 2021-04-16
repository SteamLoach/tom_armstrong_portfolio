import Vue from 'vue'

/**** LOCAL *****/

//Transitions
import Transitions from 'vue2-transitions'

//Project Preview
import projectPreviewCopy from '~/components/local/content/project-preview-copy'
import projectPreviewMedia from '~/components/local/content/project-preview-media'

/**** STORYBLOK *****/

//Layout
import flexRow from '~/components/storyblok/layout/flex-row';
import layoutColumn from '~/components/storyblok/layout/layout-column';

//Cards
import mediaCard from '~/components/storyblok/cards/media-card'

//Content
import heroPanel from '~/components/storyblok/content/hero-panel';
import richText from '~/components/storyblok/content/rich-text'

//Media
import galleryLink from '~/components/storyblok/media/gallery-link';
import imageAsset from '~/components/storyblok/media/image-asset';
import svgLoader from '~/components/storyblok/media/svg-loader';

//Forms
import netlifyForm from '~/components/storyblok/forms/netlify-form'
import inputField from '~/components/storyblok/forms/input-field'
import selectField from '~/components/storyblok/forms/select-field'
import textareaField from '~/components/storyblok/forms/textarea-field'

//Utils
import fileDownload from '~/components/storyblok/utils/file-download'
import socialLink from '~/components/storyblok/utils/social-link'
import uiButton from '~/components/storyblok/utils/ui-button'



///////////////////////////////////////

/**** LOCAL *****/

//Project Preview
Vue.component('project-preview-copy', projectPreviewCopy);
Vue.component('project-preview-media', projectPreviewMedia);


//Transitions
Vue.use(Transitions);


/**** STORYBLOK *****/

//Layout
Vue.component('flex-row', flexRow);
Vue.component('layout-column', layoutColumn);

//Cards
Vue.component('media-card', mediaCard);

//Utils
Vue.component('ui-button', uiButton);
Vue.component('social-link', socialLink);
Vue.component('file-download', fileDownload);

//Content
Vue.component('hero-panel', heroPanel);
Vue.component('rich-text', richText);

//Media
Vue.component('image-asset', imageAsset);
Vue.component('svg-loader', svgLoader);
Vue.component('gallery-link', galleryLink);

//Forms
Vue.component('netlify-form', netlifyForm);
Vue.component('input-field', inputField);
Vue.component('select-field', selectField);
Vue.component('textarea-field', textareaField);



