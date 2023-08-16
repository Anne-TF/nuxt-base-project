# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

# Museo de la Moda 

[Project description].
This project is build with the Nuxt 3 framework using Vue 3, Typescript, composition API, and a custom architecture based on the Hexagonal architecture and Clean Architecture. This projects creates an SSR web page.

## Install the dependencies
First of all, make sure you have yarn installed. If you don't, then install it with
```bash
npm install --global yarn
```
then install the project dependencies
```bash
yarn
```
then install the git hooks
```bash
yarn prepare
```

### Start the app in capacitor development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

### If you wish to lint the files you can use
```bash
yarn lint:fix
```

### Build the app for production
```bash
yarn build
```

### In case you are having this error:  'Please add rules to your `commitlint.config.js`' execute:
```bash
 npm i @commitlint/cli @commitlint/config-conventional
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

### Customize the configuration
See [Configuring nuxt.config.ts](https://nuxt.com/docs/getting-started/configuration).

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
