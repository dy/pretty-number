#pretty-number [![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Format number so it gets more humane format.


## Usage

[![npm install pretty-number](https://nodei.co/npm/pretty-number.png?mini=true)](https://npmjs.org/package/pretty-number/)

```js
const pretty = require('pretty-number');

pretty(10e+20) //10²¹
pretty(12e+20) //1.2 × 10²¹
pretty(1) //1
pretty(0) //0
pretty(-1) //−1
pretty(1.555e+20) //1.555 × 10²⁰
pretty(1.555e-15) //1.555 × 10⁻¹⁵
pretty(Infinity) //∞
pretty(-Infinity) //−∞
pretty(7.2973525664e-3, 3) //7.297 352 5664 × 10⁻³
pretty(72973525.664) //72 973 525.664
pretty(.123) //0.123
pretty(-.123) //−0.123
pretty(1.5) //1.5
pretty(-1.5) //−1.5
pretty(1e100) //10¹⁰⁰
pretty(-1e100) //−10¹⁰⁰
pretty(1e-100) //10⁻¹⁰⁰
pretty(-1e-100) //−10⁻¹⁰⁰

//indicate wishful precision
pretty(-0.000000005) //0
pretty(-0.000000005, 12) //−0.000 000 005
```

Formatting can be modified via constants:

```js
pretty.multSign = '×';
pretty.minusSign = '−';
pretty.spaceSign = ' ';
pretty.fractSign = '.';
pretty.precision = 9;
```

Note also that to make result look good custom font may be needed.

## Related

* [human-format](https://github.com/JsCommunity/human-format) — handle SI prefixes, supposedly works well with pretty-number.
* [mumath](https://github.com/dfcreative/mumath) — set of practical math utils.
