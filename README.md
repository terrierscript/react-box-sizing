# react-box-sizing

Tiny component for `box-sizing`.

* https://www.paulirish.com/2012/box-sizing-border-box-ftw/
* https://css-tricks.com/box-sizing/

## Usage

```js
import { BorderBox } from 'react-box-sizing'

const YourComponent = (
  <BorderBox>
    <div>Your Item</div>
  </BorderBox>
)
```

This component inject this style.

```css
// This is DUMMY CSS
<BorderBox> {
  box-sizing: border-box;
}
<BorderBox> *,
<BorderBox> *:before,
<BorderBox> *:after {
  box-sizing: inherit;
}
```

# Component
## `<BorderBox>`
Append `box-sizing: border-box`

## `<ContentBox>`
Append `box-sizing: content-box`

## `<PaddingBox>`
Append `box-sizing: padding-box`

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
