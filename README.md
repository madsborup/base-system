# go-system

go-system is a set of layout components with custom type-safe style props.

## Usage

Provide a theme using the styled-components ThemeProvider.

The provided should implement the following interface:

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


Built with styled-components.

Inspired på styled-system.