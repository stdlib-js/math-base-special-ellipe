// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ellipk@esm/index.mjs";function e(e){var i,u,s,o,c,f,m;return m=e,e<0&&(m=e/(e-1),i=!0),0===m?t:1===m?1:m>1?NaN:(m<.1?f=function(n){return 0===n?1.5509733517804722:1.5509733517804722+n*(n*(n*(n*(n*(n*(n*(n*(-.004809187786009338*n-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(m-.05):m<.2?f=function(n){return 0===n?1.5101218320928198:1.5101218320928198+n*(n*(n*(n*(n*(n*(n*(n*(n*(-.011197445703074968*n-.011799303775587354)-.012759847429264804)-.01426196082884252)-.016650786739707237)-.020644781177568104)-.027965493064761784)-.04372994401908431)-.09012382040477457)-.41711633390586755)}(m-.15):m<.3?f=function(n){return 0===n?1.4674622093394272:1.4674622093394272+n*(n*(n*(n*(n*(n*(n*(n*(n*(-.03478996038640416*n-.03237139531475812)-.0309169840192389)-.030527000890325277)-.031495443512532785)-.03452772850528084)-.04139162772734022)-.05737184359324173)-.10515555766694255)-.43657629094633776)}(m-.25):m<.4?f=function(n){return 0===n?1.4226911334908792:1.4226911334908792+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-.1607911206912746*n-.12705358515769605)-.102539850131046)-.084959075171781)-.07279389536257878)-.06519703281557247)-.06208433913173031)-.06471427847205)-.07813854509440948)-.12525053982206188)-.4595135196210487)}(m-.35):m<.5?f=function(n){return 0===n?1.3754019718711163:1.3754019718711163+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1.3088332057585401*n-.8605232357272398)-.5757544060278792)-.39351311430437586)-.27617433306775174)-.20049532364269734)-.15221716396203505)-.12295422312026907)-.10884095252313576)-.11184944491702783)-.15331170134854022)-.4872021832731848)}(m-.45):m<.6?f=function(n){return 0===n?1.3250244979582302:1.3250244979582302+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-11.97703130208884*n-6.446753640156048)-3.5316967730957227)-1.9767211439543984)-1.1363431218392293)-.675948400853106)-.42069845728100574)-.27879895311853475)-.20275465292641914)-.17162372682201127)-.19490643048212622)-.5217276475575667)}(m-.55):m<.7?f=function(n){return 0===n?1.2707074796501499:1.2707074796501499+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1137.38082216936*n-463.5938853480342)-191.34894807629848)-80.15895841905397)-34.18120574251449)-14.89436036517319)-6.6675959033810015)-3.089708310445187)-1.498870837987561)-.7749476413813975)-.4403978408504232)-.2922441735330774)-.2621607934324926)-.5668391682878666)}(m-.65):m<.8?f=function(n){return 0===n?1.2110560275684594:1.2110560275684594+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1104011.3443115912*n-315126.04064491636)-90799.48341621365)-26448.19586059192)-7801.945954775964)-2336.1253314403966)-712.1364793277636)-221.879685319235)-71.04099935893065)-23.55507217389693)-8.18168822157359)-3.0320566617452474)-1.23755558451305)-.5922782353119346)-.38716640952066916)-.6303064132874558)}(m-.75):m<.85?f=function(n){return 0===n?1.1613071521962828:1.1613071521962828+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1920033.4136826345*n-396650.4505013548)-83182.69029154233)-17761.7071017094)-3877.0058473132895)-869.8602699308701)-202.18187354340904)-49.25672530759985)-12.815909243378957)-3.679383613496635)-1.2436930610777865)-.5805514744654373)-.7011002845552895)}(m-.825):m<.9?f=function(n){return 0===n?1.1246173251197522:1.1246173251197522+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-36409256888.1214*n-5198725846.725541)-749380758.1942496)-109209938.52030899)-16120097.815816568)-2415611.0887010912)-368596.11674161063)-57502.51612140314)-9222.313478526092)-1532.66588382523)-267.09866751957054)-49.7490054655148)-10.239717411543843)-2.4900973094503946)-.8447940536449113)-.7708450563609095)}(m-.875):(u=function(n){return 0===n?1.5910034537907922:1.5910034537907922+n*(.41600074399178694+n*(.24579151426410342+n*(.17948148291490615+n*(.14455605708755515+n*(.12320099331242772+n*(.10893881157429353+n*(.09885340987159291+n*(.09143962920174975+n*(.0858425915954139+.08154111871830322*n)))))))))}(o=.95-m),s=function(n){return 0===n?1.5509733517804722:1.5509733517804722+n*(n*(n*(n*(n*(n*(n*(n*(-.004809187786009338*n-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(o),c=r(m),f=(t+c*(u-s))/u),i?f*n(1-e):f)}export{e as default};
//# sourceMappingURL=index.mjs.map
