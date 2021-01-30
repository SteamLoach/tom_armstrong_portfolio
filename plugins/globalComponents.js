import Vue from 'vue'

import heroPanel from '~/components/panels/hero-panel'
import developmentProjectPreview from '~/components/content/development-project-preview'
import designProjectPreview from '~/components/content/design-project-preview'

Vue.component('hero-panel', heroPanel)
Vue.component('development-project-preview', developmentProjectPreview);
Vue.component('design-project-preview', designProjectPreview);