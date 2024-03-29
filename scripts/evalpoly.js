/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*
* This script compiles modules for evaluating polynomial functions. If any polynomial coefficients change, this script should be rerun to update the compiled files.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs-read-file' ).sync;
var writeFileSync = require( '@stdlib/fs-write-file' ).sync;
var currentYear = require( '@stdlib/time-current-year' );
var substringBefore = require( '@stdlib/string-substring-before' );
var substringAfter = require( '@stdlib/string-substring-after' );
var format = require( '@stdlib/string-format' );
var licenseHeader = require( '@stdlib/_tools-licenses-header' );
var compile = require( '@stdlib/math-base-tools-evalpoly-compile' );
var compileC = require( '@stdlib/math-base-tools-evalpoly-compile-c' );


// VARIABLES //

// The tables below are from Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z](https://doi.org/10.1007/s10569-009-9228-z).

// Table 2 for expansion about x = 0.05:
var P1 = [
	1.550973351780472328,
	-0.400301020103198524,
	-0.078498619442941939,
	-0.034318853117591992,
	-0.019718043317365499,
	-0.013059507731993309,
	-0.009442372874146547,
	-0.007246728512402157,
	-0.005807424012956090,
	-0.004809187786009338
];

// Table 3 for expansion about 0.15:
var P2 = [
	1.510121832092819728,
	-0.417116333905867549,
	-0.090123820404774569,
	-0.043729944019084312,
	-0.027965493064761785,
	-0.020644781177568105,
	-0.016650786739707238,
	-0.014261960828842520,
	-0.012759847429264803,
	-0.011799303775587354,
	-0.011197445703074968
];

// Table 4 for expansion about 0.25:
var P3 = [
	1.467462209339427155,
	-0.436576290946337775,
	-0.105155557666942554,
	-0.057371843593241730,
	-0.041391627727340220,
	-0.034527728505280841,
	-0.031495443512532783,
	-0.030527000890325277,
	-0.030916984019238900,
	-0.032371395314758122,
	-0.034789960386404158
];

// Table 5 for expansion about 0.35:
var P4 = [
	1.422691133490879171,
	-0.459513519621048674,
	-0.125250539822061878,
	-0.078138545094409477,
	-0.064714278472050002,
	-0.062084339131730311,
	-0.065197032815572477,
	-0.072793895362578779,
	-0.084959075171781003,
	-0.102539850131045997,
	-0.127053585157696036,
	-0.160791120691274606
];

// Table 6 for expansion about 0.45:
var P5 = [
	1.375401971871116291,
	-0.487202183273184837,
	-0.153311701348540228,
	-0.111849444917027833,
	-0.108840952523135768,
	-0.122954223120269076,
	-0.152217163962035047,
	-0.200495323642697339,
	-0.276174333067751758,
	-0.393513114304375851,
	-0.575754406027879147,
	-0.860523235727239756,
	-1.308833205758540162
];

// Table 7 for expansion about 0.55:
var P6 = [
	1.325024497958230082,
	-0.521727647557566767,
	-0.194906430482126213,
	-0.171623726822011264,
	-0.202754652926419141,
	-0.278798953118534762,
	-0.420698457281005762,
	-0.675948400853106021,
	-1.136343121839229244,
	-1.976721143954398261,
	-3.531696773095722506,
	-6.446753640156048150,
	-11.97703130208884026
];

// Table 8 for expansion about 0.65:
var P7 = [
	1.270707479650149744,
	-0.566839168287866583,
	-0.262160793432492598,
	-0.292244173533077419,
	-0.440397840850423189,
	-0.774947641381397458,
	-1.498870837987561088,
	-3.089708310445186667,
	-6.667595903381001064,
	-14.89436036517319078,
	-34.18120574251449024,
	-80.15895841905397306,
	-191.3489480762984920,
	-463.5938853480342030,
	-1137.380822169360061
];

// Table 9 for expansion about 0.75:
var P8 = [
	1.211056027568459525,
	-0.630306413287455807,
	-0.387166409520669145,
	-0.592278235311934603,
	-1.237555584513049844,
	-3.032056661745247199,
	-8.181688221573590762,
	-23.55507217389693250,
	-71.04099935893064956,
	-221.8796853192349888,
	-712.1364793277635425,
	-2336.125331440396407,
	-7801.945954775964673,
	-26448.19586059191933,
	-90799.48341621365251,
	-315126.0406449163424,
	-1104011.344311591159
];

// Table 10 for expansion about 0.825:
var P9 = [
	1.161307152196282836,
	-0.701100284555289548,
	-0.580551474465437362,
	-1.243693061077786614,
	-3.679383613496634879,
	-12.81590924337895775,
	-49.25672530759985272,
	-202.1818735434090269,
	-869.8602699308701437,
	-3877.005847313289571,
	-17761.70710170939814,
	-83182.69029154232061,
	-396650.4505013548170,
	-1920033.413682634405
];

// Table 11 for expansion about 0.875:
var P10 = [
	1.124617325119752213,
	-0.770845056360909542,
	-0.844794053644911362,
	-2.490097309450394453,
	-10.23971741154384360,
	-49.74900546551479866,
	-267.0986675195705196,
	-1532.665883825229947,
	-9222.313478526091951,
	-57502.51612140314030,
	-368596.1167416106063,
	-2415611.088701091428,
	-16120097.81581656797,
	-109209938.5203089915,
	-749380758.1942496220,
	-5198725846.725541393,
	-36409256888.12139973
];

// Table 2 for the expansion of K(m) around 0.05
var P11 = [
	1.591003453790792180,
	0.416000743991786912,
	0.245791514264103415,
	0.179481482914906162,
	0.144556057087555150,
	0.123200993312427711,
	0.108938811574293531,
	0.098853409871592910,
	0.091439629201749751,
	0.085842591595413900,
	0.081541118718303215
];

// Table 2 for the expansion of E(m) around 0.05
var P12 = [
	1.550973351780472328,
	-0.400301020103198524,
	-0.078498619442941939,
	-0.034318853117591992,
	-0.019718043317365499,
	-0.013059507731993309,
	-0.009442372874146547,
	-0.007246728512402157,
	-0.005807424012956090,
	-0.004809187786009338
];

// Header to add to output files:
var header = licenseHeader( 'Apache-2.0', 'js', {
	'year': currentYear(),
	'copyright': 'The Stdlib Authors'
});
header += '\n/* This is a generated file. Do not edit directly. */\n';


// FUNCTIONS //

/**
* Inserts a compiled function into file content.
*
* @private
* @param {string} text - source content
* @param {string} id - function identifier
* @param {string} str - function string
* @returns {string} updated content
*/
function insert( text, id, str ) {
	var before;
	var after;
	var begin;
	var end;

	begin = '// BEGIN: '+id;
	end = '// END: '+id;

	before = substringBefore( text, begin );
	after = substringAfter( text, end );

	return format( '%s// BEGIN: %s\n\n%s\n%s%s', before, id, str, end, after );
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var copts;
	var opts;
	var file;
	var str;

	opts = {
		'encoding': 'utf8'
	};

	fpath = resolve( __dirname, '..', 'lib', 'poly_p1.js' );
	str = header + compile( P1 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p2.js' );
	str = header + compile( P2 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p3.js' );
	str = header + compile( P3 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p4.js' );
	str = header + compile( P4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p5.js' );
	str = header + compile( P5 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p6.js' );
	str = header + compile( P6 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p7.js' );
	str = header + compile( P7 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p8.js' );
	str = header + compile( P8 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p9.js' );
	str = header + compile( P9 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p10.js' );
	str = header + compile( P10 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p11.js' );
	str = header + compile( P11 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'poly_p12.js' );
	str = header + compile( P12 );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'double',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'poly_p1';
	str = compileC( P1, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p2';
	str = compileC( P2, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p3';
	str = compileC( P3, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p4';
	str = compileC( P4, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p5';
	str = compileC( P5, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p6';
	str = compileC( P6, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p7';
	str = compileC( P7, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p8';
	str = compileC( P8, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p9';
	str = compileC( P9, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p10';
	str = compileC( P10, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p11';
	str = compileC( P11, copts );
	file = insert( file, copts.name, str );

	copts.name = 'poly_p12';
	str = compileC( P12, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
