# @divyagnan/rn-style-utils [![npm version](https://badge.fury.io/js/%40divyagnan%2Frn-style-utils.svg)](https://badge.fury.io/js/%40divyagnan%2Frn-style-utils)

> Simple style helpers to make react native prototyping easier

## Install

```
npm i @divyagnan/rn-style-utils
```

## Example Usage

```jsx
// import the helpers that you want
import { m1, mb78, p50, pt56 } from "@divyagnan/rn-style-utils";

// use the helpers
// you can use the helpers directly
<Text style={m1}>This text will have a margin of 1</Text>;
<Text style={[mb78, pt56]}>
  This text will have a marginBottom of 78 and a paddingTop of 56
</Text>;

// or you can use them with StyleSheet
const styles = StyleSheet.create({
  coolNewStyle: {
    // this style will have a padding of 50
    ...p50
  }
});
```

## Available Helpers

This library exports the following helpers:

#### Margin

* `m[1-100]`- used to apply a `margin` between 1 and 100
  * ex: `m5` sets a margin of 5
* `mt[1-100]`- used to apply a `marginTop` between 1 and 100
  * ex: `mt22` sets a marginTop of 22
* `mb[1-100]`- used to apply a `marginBottom` between 1 and 100
  * ex: `mb88` sets a marginBottom of 88
* `mr[1-100]`- used to apply a `marginRight` between 1 and 100
  * ex: `mr2` sets a marginRight of 2
* `ml[1-100]`- used to apply a `marginLeft` between 1 and 100
  * ex: `ml12` sets a marginLeft of 12

#### Padding

* `p[1-100]`- used to apply a `padding` between 1 and 100
  * ex: `p5` sets a padding of 5
* `pt[1-100]`- used to apply a `paddingTop` between 1 and 100
  * ex: `pt22` sets a paddingTop of 22
* `pb[1-100]`- used to apply a `paddingBottom` between 1 and 100
  * ex: `pb88` sets a paddingBottom of 88
* `pr[1-100]`- used to apply a `paddingRight` between 1 and 100
  * ex: `pr2` sets a paddingRight of 2
* `pl[1-100]`- used to apply a `paddingLeft` between 1 and 100
  * ex: `pl12` sets a paddingLeft of 12
