/* @module pretty-number */

'use strict';

module.exports = pretty;


pretty.superTable = {
	'0': '⁰',
	'1': '¹',
	'2': '²',
	'3': '³',
	'4': '⁴',
	'5': '⁵',
	'6': '⁶',
	'7': '⁷',
	'8': '⁸',
	'9': '⁹',
	'-': '⁻',
	'+': '⁺'
};
pretty.multSign = '×';
pretty.minusSign = '−';
pretty.spaceSign = ' ';
pretty.fractSign = '.';

pretty.precision = 12;


function pretty (num, precision) {
	if (!isFinite(num)) return num < 0 ? (pretty.minusSign + '∞') : '∞';
	if (num === 0) return '0';

	precision = precision != null ? precision : pretty.precision;

	let {sign, mantissa, exponent} = getNumberParts(num, 10);


	//if exponent is not big enough - keep it 0
	if (exponent < precision && exponent > 0) {
		mantissa = Math.abs(num);
		exponent = 0;
	}
	//if exp is not small enough - keep fraction
	if (exponent < 0 && exponent > -precision) {
		exponent = 0;
		mantissa = Math.abs(num);
	}

	let str = mantissa.toString();

	//the only reliable way to round .999999x → 1 or .0000001 → 0 I know
	str = str.replace(/([0-8]|[0-9]\.)9{3,}[0-9]{1,2}$/g, (match, p) => parseInt(p) + 1);
	str = str.replace(/([0-9])0{3,}[0-9]{1,2}?$/g, (match, p) => p);

	//shortcuts for 1 and 10
	let rMantissa = parseFloat(str);
	if (rMantissa === 10) {
		return (sign ? pretty.minusSign : '') + '10' + sup(exponent+1);
	}
	else if (rMantissa === 1 && exponent) {
		return (sign ? pretty.minusSign : '') + '10' + sup(exponent);
	}

	//add spaces
	let [dec, fract] = str.split('.');
	if (!dec) dec = 0;
	let res = '';
	let dl = dec.length;
	for (let i = 0; i<dl; i+=3) {
		res = (dec[dl-i-3]||'') + (dec[dl-i-2]||'') + (dec[dl-i-1]||'') + res;
		if (dec[dl-i-4]) res = pretty.spaceSign + res;
	}
	if (fract) {
		res += pretty.fractSign;
		for (let i = 0; i<fract.length; i+=3) {
			res += (fract[i]||'') + (fract[i+1]||'') + (fract[i+2]||'');
			if (fract[i+3]) {
				res += pretty.spaceSign;
			}
		}
	}
	str = res;

	//if more than exp limit - display ×10^n
	if (exponent) {
		str += pretty.multSign + '10' + sup(exponent);
	}

	str = (sign ? pretty.minusSign : '') + str;

	return str;
}

function getNumberParts(x, b) {
	let exp = 0
	let sgn = 0
	if (x<0) sgn=1, x=-x
	while (x>b) x/=b, exp++
	while (x<1) x*=b, exp--
	return { sign: sgn, mantissa: x, exponent: exp }
}


function sup (str) {
	let res = '';
	str += '';
	for (let i = 0; i < str.length; i++) {
		res += pretty.superTable[str[i]]
	}
	return res;
}
