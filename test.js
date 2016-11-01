let pretty = require('./');
let assert = require('assert');

// assert.equal(pretty(7.2973525664e-3), '7.297 352 5664 × 10⁻³');
assert.equal(pretty(77.4241787278999), '77.424 178 7279');
//FIXME: this local part is not rounded nicely here by default
assert.equal(pretty(-0.000000005, 12), '−0.000 000 005');
assert.equal(pretty(-0.0000005), '−0.000 0005');
assert.equal(pretty(-0.005), '−0.005');
assert.equal(pretty(-0.0005), '−0.0005');
assert.equal(pretty(-0.00005), '−0.000 05');
assert.equal(pretty(10), '10');
assert.equal(pretty(9999), '9 999');
assert.equal(pretty(10000), '10 000');
assert.equal(pretty(1000000000001), '10¹²');
assert.equal(pretty(10e+20), '10²¹');
assert.equal(pretty(12e+20), '1.2 × 10²¹');
assert.equal(pretty(1), '1');
assert.equal(pretty(0), '0');
assert.equal(pretty(1.555e+20), '1.555 × 10²⁰');
assert.equal(pretty(1.555e-15), '1.555 × 10⁻¹⁵');
assert.equal(pretty(Infinity), '∞');
assert.equal(pretty(-Infinity), '−∞');
assert.equal(pretty(72973525.664), '72 973 525.664');


assert.equal(pretty(-1), '−1');
assert.equal(pretty(1), '1');
assert.equal(pretty(.123), '0.123');
assert.equal(pretty(-.123), '−0.123');
assert.equal(pretty(1.5), '1.5');
assert.equal(pretty(-1.5), '−1.5');
assert.equal(pretty(1e100), '10¹⁰⁰');
assert.equal(pretty(-1e100), '−10¹⁰⁰');
assert.equal(pretty(1e-100), '10⁻¹⁰⁰');
assert.equal(pretty(-1e-100), '−10⁻¹⁰⁰');
