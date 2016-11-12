# react-box-sizing

Tiny component for `box-sizing`.

https://www.paulirish.com/2012/box-sizing-border-box-ftw/
https://css-tricks.com/box-sizing/

# Component
## `<BoxSizing>`

## `<BoxSizing type={value}>`
* value: border-box, content-box pading-box
* default: border-box


see: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

# Usage

```js
import BoxSizing from 'react-box-sizing'

const Example = () =>(
  <BoxSizing>
    <div>This</div>
    <div>Items</div>
    <div>is</div>
    <div>border-box</div>
  </BoxSizing>
)
```
