# **Archived version of Nimbus 2022ß**

# Nimbus Web App

## up and running

- **Requirements**

  - nodejs,npm
    - install nvm `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
    - install node & npm `nvm install node`
  - pnpm `sudo npm i -g pnpm`

- `pnpm install`
- `npm start`

## Development

**bundler and bootstrapped with** - vite  
**package manager** - pnpm -- to save disk space  
**Library** - React  
**Global State Management** - Redux ( [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started) ) `/src/store/`
**Queries State Management** - [react-query](https://react-query.tanstack.com/overview)

## VsCode Extentions

- Prettier
- Eslint
- GitLens
- Material Icons (\*optional)

### Network Requests model

- **Layer 4** - Use [react-query](https://react-query.tanstack.com/overview) hooks in components
- **Layer 3** - define react-query hooks in `src/hooks/api`
- **Layer 2** - fetcher functions `src/services/api`
- **Layer 1** - request/fetch `src/services/api/request.js`

## Styling Guideline

https://github.com/airbnb/javascript/tree/master/react

- `src/components/`

  - `./atoms/` - small components which does not depend on any other component.
  - `./molecules` - components which use atoms.
  - `./organisms` - coponents which use atoms and molecules

> every category folder has an `index.js` file which exports all the components in that folder which are intrun expoterd by the `index.js` file in outer folder.
> components will always be imported like `import { SomeComponent } from '/components`
> not like `import SomeComponent from '/components/atoms/SomeComponents`

- `src/pages/`
  page level containers which are accesible from a seperate route.

### Component Structure

every component has a folder named exactly as the component name. Component names are in PascalCase.

- `SomeComponent/`
  - `SomeComponent.jsx`
  - `SomeComponent.scss`

```jsx
// SomeComponent.jsx
import React from 'react';

export default function SomeComponent({ prop1, prop2 }) {
  // STATES & REFS
  // EFFECTS
  // FUNCTIONS
  // PRE-RENDER
  // RENDER
  return (
    <div className="some-component">
      {/* classname should be same as component name in - style. to avoid css conflicts  */}
      <div className="abc">Some</div>
      <div className="xyz-q">Component</div>
    </div>
  );
}
```

```scss
// SomeComponent.scss
// everything starts from the outermost main component class
.some-component {
  // every other css goes here in the same nested form as in html
  .abc {
    display: block;
    @include respond(phone) {
      display: none;
    }
  }

  .xyz-q {
    font-size: 2em;
  }
}
```
