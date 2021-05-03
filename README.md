# tom_armstrong_portfolio
Personal portfolio site for development and design work. Built with Nuxt & Storyblok, deployed as a static site via Netlify.

## Builds

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build as spa (staging) for Storyblok live preview
$ npm run generate-staging
# build as static (live)
$ npm run generate-live

# build for production and start server
$ npm run build
$ npm run start
```

## Component Directories

###`/storyblok`
Components have a corresponding Storyblok content schema and are generally loaded dynamically with the `:is` directive. Components take a `:content` prop and are globally registered in the `globalComponents` plugin.

###`/local`
Components **do not** have a corresponding Storyblok content schema and are hard-coded. Components are imported into components manually where needed.

##Storyblok Integration
Requires a token and content version as `env` variables. Content sync is managed by `storyblokBridge` mixin. Live preview works in `dev` and `spa` modes.

##Logging
Add `NUXT_ENV_SHOW_LOGS=true` to `env`.