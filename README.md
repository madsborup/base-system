# base-system

base-system is a set of React layout components with custom type-safe style props.

## Usage

base-system uses styled-components for dynamic style props and theming.

Provide a theme using the styled-components `ThemeProvider`. The theme should implement the following interface:

```ts
const interface {
  colors: {[key: string]: string},
  spacing: {[key: string]: number}
}
```

```js
// example theme.js
export default {
  colors: {
    text: '#000',
    primary: '#1C40FB',
    secondary: '#00E9BA'
    ...
  },
  spacing: {
    small: '4',
    medium: '8',
    large: '16'
    ...
  }
  ...
}
```

### Components

```js
import { ThemeProvider } from 'styled-system'
import theme from '../theme'
import { Box } from 'base-system'

export default () => {
  <ThemeProvider theme={theme}>
    <Box color='text' bg='secondary'>
      This text will be black
    </Box>
  </ThemeProvider>
}

```


Built with styled-components.

Inspired på styled-system.