<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ellipe

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [complete elliptic integral of the second kind][elliptic-integral].

<section class="intro">

The [complete elliptic integral of the second kind][elliptic-integral] is defined as

<!-- <equation class="equation" label="eq:complete_elliptic_integral_second_kind" align="center" raw="E(m)=\int_0^{\pi/2} \sqrt{1 - m (\sin\theta)^2} d\theta" alt="Complete elliptic integral of the second kind."> -->

```math
E(m)=\int_0^{\pi/2} \sqrt{1 - m (\sin\theta)^2} d\theta
```

<!-- <div class="equation" align="center" data-raw-text="E(m)=\int_0^{\pi/2} \sqrt{1 - m (\sin\theta)^2} d\theta" data-equation="eq:complete_elliptic_integral_second_kind">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@129e5a32ce2af2ed694daf2e9d4214255e60c42a/lib/node_modules/@stdlib/math/base/special/ellipe/docs/img/equation_complete_elliptic_integral_second_kind.svg" alt="Complete elliptic integral of the second kind.">
    <br>
</div> -->

<!-- </equation> -->

where the parameter `m` is related to the modulus `k` by `m = k^2`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-ellipe
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ellipe = require( '@stdlib/math-base-special-ellipe' );
```

#### ellipe( m )

Computes the [complete elliptic integral of the second kind][elliptic-integral].

```javascript
var v = ellipe( 0.5 );
// returns ~1.351

v = ellipe( -1.0 );
// returns ~1.910

v = ellipe( 2.0 );
// returns NaN

v = ellipe( Infinity );
// returns NaN

v = ellipe( -Infinity );
// returns NaN

v = ellipe( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is valid for `-∞ < m <= 1`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var ellipe = require( '@stdlib/math-base-special-ellipe' );

var opts = {
    'dtype': 'float64'
};
var m = uniform( 100, -1.0, 1.0, opts );

logEachMap( 'ellipe(%0.4f) = %0.4f', m, ellipe );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/ellipe.h"
```

#### stdlib_base_ellipe( m )

Computes the [complete elliptic integral of the second kind][elliptic-integral].

```c
double out = stdlib_base_ellipe( 0.5 );
// returns ~1.351

out = stdlib_base_ellipe( -1.0 );
// returns ~1.910
```

The function accepts the following arguments:

-   **m**: `[in] double` input value.

```c
double stdlib_base_ellipe( const double m );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/ellipe.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double m;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        m = -1.0 + ( ( (double)rand() / (double)RAND_MAX ) * 2.0 );
        v = stdlib_base_ellipe( m );
        printf( "ellipe(%lf) = %lf\n", m, v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z][@fukushima:2009a].
-   Fukushima, Toshio. 2015. "Precise and fast computation of complete elliptic integrals by piecewise minimax rational function approximation." _Journal of Computational and Applied Mathematics_ 282 (July): 71–76. doi:[10.1016/j.cam.2014.12.038][@fukushima:2015a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ellipj`][@stdlib/math/base/special/ellipj]</span><span class="delimiter">: </span><span class="description">compute the Jacobi elliptic functions sn, cn, and dn.</span>
-   <span class="package-name">[`@stdlib/math-base/special/ellipk`][@stdlib/math/base/special/ellipk]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the first kind.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-ellipe.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-ellipe

[test-image]: https://github.com/stdlib-js/math-base-special-ellipe/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-ellipe/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-ellipe/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-ellipe?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-ellipe.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-ellipe/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ellipe/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-ellipe/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-ellipe/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-ellipe/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-ellipe/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-ellipe/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-ellipe/blob/main/branches.md

[elliptic-integral]: https://en.wikipedia.org/wiki/Elliptic_integral

[@fukushima:2009a]: https://doi.org/10.1007/s10569-009-9228-z

[@fukushima:2015a]: https://doi.org/10.1016/j.cam.2014.12.038

<!-- <related-links> -->

[@stdlib/math/base/special/ellipj]: https://github.com/stdlib-js/math-base-special-ellipj

[@stdlib/math/base/special/ellipk]: https://github.com/stdlib-js/math-base-special-ellipk

<!-- </related-links> -->

</section>

<!-- /.links -->
