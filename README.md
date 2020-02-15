# <img style="margin-bottom: -10px" width='50px' src='https://www.rollupjs.com/assets/images/logo.svg'/> create react library with Rollup.js

This branch has been implemented with rollup way, download it and cd in run `yarn install`, then the output library should be in `lib/boundle.js`.

# Start from scratch


##  1.Make folder
`mkdir my-react-library`

`cd my-react-library`

`mkdir src`

## 2.Install
`yarn init -y`

`yarn add react @emotion/core`

`yarn add rollup rollup-plugin-babel @babel/core @babel/preset-env @babel/preset-react @emotion/babel-preset-css-prop -D`
> `@emotion/babel-preset-css-prop` is a babel preset we gonna use it later.

## 3.rollup.config.js
create `rollup.config.js`
```js
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: './lib/bundle.js', // should be the same as main in package.json
    format: 'cjs'
  },
  plugins: [
    // parse es6 react and emotion syntax
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['react', '@emotion/core'] // exclude 3rd libraries to bundle with
}
```

## 4.package.json
edit `package.json`
```json
  "main": "./lib/bundle.js",
...
  "scripts": {
    "build": "yarn run rollup -c",
    "start": "yarn run rollup -c -w"
  },
```

## 5.Create index.js
`src/index.js`
```js
// Here is the entries of our components

export { default as Button } from './Button'
```

## 6.Create Component
`src/Button.js`
```jsx
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

function Button() {
  const [state, setState] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setState(!state)
    }, 1000)
  })

  const btnStyle = css`
    padding: 10px 20px;
    font-size: 4rem;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `

  return (
    <button
      css={css`
        ${btnStyle};
        color: ${state ? 'royalblue' : 'hotpink'};
      `}
    >
      Button
    </button>
  )
}

export default Button

```

## 7. Build or Watch Build
Build: `yarn build`

Watch build: `yarn start`


## 🌈 That's it! 🎉


# Use library in you react project locally

## 1. `cd my-react-library`
## 2. run `yarn link` to registered the link
## 3. `cd react-project` go to project folder
## 4. run `yarn link my-react-library`
## 5. Test it
`yarn start`

Then you will get an error like:
> Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

The easiest way to sole this is go to `my-react-library/node_modules` and delete `react` manually

## 🌈 That's it! 🎉

# Publish to npm, finally!!
## 1.`cd my-react-library`

## 2.run `yarn publish`
Set the version, pass the account then it will be published! 🎉