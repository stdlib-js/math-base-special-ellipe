// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=Math.sqrt,r=1.5707963267948966,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,u=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",c=o&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o,i,c;if(null==n)return e.call(n);r=n[f],c=f,t=null!=(i=n)&&u.call(i,c);try{n[f]=void 0}catch(t){return e.call(n)}return o=e.call(n),t?n[f]=r:delete n[f],o}:function(n){return e.call(n)},a="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===c(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?l:function(){throw new Error("not implemented")};var p,A=n,v="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;p=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d([1,3.14,-3.14,NaN]),r=t,n=(v&&r instanceof Float64Array||"[object Float64Array]"===c(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var m,w=p,U="function"==typeof Uint8Array,s="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var n,t,r;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,256,257]),r=t,n=(U&&r instanceof Uint8Array||"[object Uint8Array]"===c(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?N:function(){throw new Error("not implemented")};var h,F=m,I="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,65536,65537]),r=t,n=(I&&r instanceof Uint16Array||"[object Uint16Array]"===c(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?j:function(){throw new Error("not implemented")};var E,T={uint16:h,uint8:F};(E=new T.uint16(1))[0]=4660;var g=52===new T.uint8(E.buffer)[0],x=!0===g?1:0,O=new w(1),P=new A(O.buffer);function V(n){return O[0]=n,P[x]}var Y,_="function"==typeof Float64Array,q="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;Y=function(){var n,t,r;if("function"!=typeof q)return!1;try{t=new q([1,3.14,-3.14,NaN]),r=t,n=(_&&r instanceof Float64Array||"[object Float64Array]"===c(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?G:function(){throw new Error("not implemented")};var M=!0===g?1:0,k=new Y(1),z=new A(k.buffer),B=Number.NEGATIVE_INFINITY,C=.6931471803691238,D=1.9082149292705877e-10,H=1048575;function J(n){var t,r,o,e,u,i,f,c,a,y,l,p;return 0===n?B:function(n){return n!=n}(n)||n<0?NaN:(u=0,(r=V(n))<1048576&&(u-=54,r=V(n*=0x40000000000000)),r>=2146435072?n+n:(u+=(r>>20)-1023|0,u+=(c=614244+(r&=H)&1048576|0)>>20|0,f=(n=function(n,t){return k[0]=n,z[M]=t>>>0,k[0]}(n,r|1072693248^c))-1,(H&2+r)<3?0===f?0===u?0:u*C+u*D:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*C-(i-u*D-f)):(c=r-398458|0,a=440401-r|0,e=(l=(p=(y=f/(2+f))*y)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(l),o=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(l),i=o+e,(c|=a)>0?(t=.5*f*f,0===u?f-(t-y*(t+i)):u*C-(t-(y*(t+i)+u*D)-f)):0===u?f-y*(f-i):u*C-(y*(f-i)-u*D-f))))}var K=Number.POSITIVE_INFINITY;return function(n){var o,e,u,i,f,c,a;return a=n,n<0&&(a=n/(n-1),o=!0),0===a?r:1===a?1:a>1?NaN:(a<.1?c=function(n){return 0===n?1.5509733517804722:1.5509733517804722+n*(n*(n*(n*(n*(n*(n*(n*(-.004809187786009338*n-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(a-.05):a<.2?c=function(n){return 0===n?1.5101218320928198:1.5101218320928198+n*(n*(n*(n*(n*(n*(n*(n*(n*(-.011197445703074968*n-.011799303775587354)-.012759847429264804)-.01426196082884252)-.016650786739707237)-.020644781177568104)-.027965493064761784)-.04372994401908431)-.09012382040477457)-.41711633390586755)}(a-.15):a<.3?c=function(n){return 0===n?1.4674622093394272:1.4674622093394272+n*(n*(n*(n*(n*(n*(n*(n*(n*(-.03478996038640416*n-.03237139531475812)-.0309169840192389)-.030527000890325277)-.031495443512532785)-.03452772850528084)-.04139162772734022)-.05737184359324173)-.10515555766694255)-.43657629094633776)}(a-.25):a<.4?c=function(n){return 0===n?1.4226911334908792:1.4226911334908792+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-.1607911206912746*n-.12705358515769605)-.102539850131046)-.084959075171781)-.07279389536257878)-.06519703281557247)-.06208433913173031)-.06471427847205)-.07813854509440948)-.12525053982206188)-.4595135196210487)}(a-.35):a<.5?c=function(n){return 0===n?1.3754019718711163:1.3754019718711163+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1.3088332057585401*n-.8605232357272398)-.5757544060278792)-.39351311430437586)-.27617433306775174)-.20049532364269734)-.15221716396203505)-.12295422312026907)-.10884095252313576)-.11184944491702783)-.15331170134854022)-.4872021832731848)}(a-.45):a<.6?c=function(n){return 0===n?1.3250244979582302:1.3250244979582302+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-11.97703130208884*n-6.446753640156048)-3.5316967730957227)-1.9767211439543984)-1.1363431218392293)-.675948400853106)-.42069845728100574)-.27879895311853475)-.20275465292641914)-.17162372682201127)-.19490643048212622)-.5217276475575667)}(a-.55):a<.7?c=function(n){return 0===n?1.2707074796501499:1.2707074796501499+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1137.38082216936*n-463.5938853480342)-191.34894807629848)-80.15895841905397)-34.18120574251449)-14.89436036517319)-6.6675959033810015)-3.089708310445187)-1.498870837987561)-.7749476413813975)-.4403978408504232)-.2922441735330774)-.2621607934324926)-.5668391682878666)}(a-.65):a<.8?c=function(n){return 0===n?1.2110560275684594:1.2110560275684594+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1104011.3443115912*n-315126.04064491636)-90799.48341621365)-26448.19586059192)-7801.945954775964)-2336.1253314403966)-712.1364793277636)-221.879685319235)-71.04099935893065)-23.55507217389693)-8.18168822157359)-3.0320566617452474)-1.23755558451305)-.5922782353119346)-.38716640952066916)-.6303064132874558)}(a-.75):a<.85?c=function(n){return 0===n?1.1613071521962828:1.1613071521962828+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-1920033.4136826345*n-396650.4505013548)-83182.69029154233)-17761.7071017094)-3877.0058473132895)-869.8602699308701)-202.18187354340904)-49.25672530759985)-12.815909243378957)-3.679383613496635)-1.2436930610777865)-.5805514744654373)-.7011002845552895)}(a-.825):a<.9?c=function(n){return 0===n?1.1246173251197522:1.1246173251197522+n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(n*(-36409256888.1214*n-5198725846.725541)-749380758.1942496)-109209938.52030899)-16120097.815816568)-2415611.0887010912)-368596.11674161063)-57502.51612140314)-9222.313478526092)-1532.66588382523)-267.09866751957054)-49.7490054655148)-10.239717411543843)-2.4900973094503946)-.8447940536449113)-.7708450563609095)}(a-.875):(e=function(n){return 0===n?1.5910034537907922:1.5910034537907922+n*(.41600074399178694+n*(.24579151426410342+n*(.17948148291490615+n*(.14455605708755515+n*(.12320099331242772+n*(.10893881157429353+n*(.09885340987159291+n*(.09143962920174975+n*(.0858425915954139+.08154111871830322*n)))))))))}(i=.95-a),u=function(n){return 0===n?1.5509733517804722:1.5509733517804722+n*(n*(n*(n*(n*(n*(n*(n*(-.004809187786009338*n-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(i),f=function(n){var o,e,u,i,f,c;return c=n,n<0&&(c=n/(n-1),o=!0),0===c?r:1===c?K:c>1?NaN:(c<.1?f=function(n){return 0===n?1.5910034537907922:1.5910034537907922+n*(.41600074399178694+n*(.24579151426410342+n*(.17948148291490615+n*(.14455605708755515+n*(.12320099331242772+n*(.10893881157429353+n*(.09885340987159291+n*(.09143962920174975+n*(.0858425915954139+.08154111871830322*n)))))))))}(c-.05):c<.2?f=function(n){return 0===n?1.63525673226458:1.63525673226458+n*(.4711906261487323+n*(.3097284108314996+n*(.2522083117731357+n*(.22672562321968465+n*(.21577444672958598+n*(.21310877187734892+n*(.21602912460518828+n*(.2232558316330579+n*(.23418050129420992+n*(.24855768297226408+.26636380989261754*n))))))))))}(c-.15):c<.3?f=function(n){return 0===n?1.685750354812596:1.685750354812596+n*(.5417318486132803+n*(.40152443839069024+n*(.3696424734208891+n*(.37606071535458363+n*(.4052358870851259+n*(.45329438175399905+n*(.5205189476511842+n*(.609426039204995+n*(.7242635222829089+n*(.8710138477098124+1.057652872753547*n))))))))))}(c-.25):c<.4?f=function(n){return 0===n?1.7443505972256133:1.7443505972256133+n*(.6348642753719353+n*(.5398425641644455+n*(.5718927051937874+n*(.6702951362654062+n*(.8325865900109772+n*(1.0738574482479333+n*(1.4220914606754977+n*(1.9203871834023047+n*(2.6325525483316543+n*(3.6521097473190394+n*(5.115867135558866+7.224080007363877*n)))))))))))}(c-.35):c<.5?f=function(n){return 0===n?1.8138839368169826:1.8138839368169826+n*(.7631632457005573+n*(.7619286053215958+n*(.9510746536684279+n*(1.315180671703161+n*(1.9285606934774109+n*(2.9375093425313787+n*(4.594894405442878+n*(7.33007122188172+n*(11.871512597425301+n*(19.45851374822938+n*(32.20638657246427+n*(53.73749198700555+90.27388602941*n))))))))))))}(c-.45):c<.6?f=function(n){return 0===n?1.8989249102715535:1.8989249102715535+n*(.9505217946182445+n*(1.1510775899590158+n*(1.7502391069863006+n*(2.952676812636875+n*(5.285800396121451+n*(9.83248571665998+n*(18.787148683275596+n*(36.61468615273698+n*(72.45292395127771+n*(145.1079577347069+n*(293.4786396308497+n*(598.385181505501+n*(1228.4200130758634+2536.5297553827645*n)))))))))))))}(c-.55):c<.7?f=function(n){return 0===n?2.0075983984243764:2.0075983984243764+n*(1.2484572312123474+n*(1.9262346570764797+n*(3.7512896400875877+n*(8.119944554932045+n*(18.665721308735552+n*(44.603924842914374+n*(109.50920543094983+n*(274.2779548232414+n*(697.5598008606327+n*(1795.7160145002472+n*(4668.38171679039+n*(12235.762468136643+n*(32290.17809718321+n*(85713.07608195965+n*(228672.1890493117+612757.2711915852*n)))))))))))))))}(c-.65):c<.8?f=function(n){return 0===n?2.1565156474996434:2.1565156474996434+n*(1.7918056418494632+n*(3.8267512874657132+n*(10.386724683637972+n*(31.403314054680703+n*(100.92370394986955+n*(337.3268282632273+n*(1158.7079305678278+n*(4060.9907421936323+n*(14454.001840343448+n*(52076.661075994045+n*(189493.65914621568+n*(695184.5762413896+n*(2567994.048255285+n*(9541921.966748387+n*(35634927.44218076+n*(133669298.46120408+n*(503352186.68662846+n*(1901975729.53866+7208915015.330104*n))))))))))))))))))}(c-.75):c<.85?f=function(n){return 0===n?2.3181226217125106:2.3181226217125106+n*(2.6169201502912327+n*(7.897935075731356+n*(30.502397154466724+n*(131.48693655235286+n*(602.9847637356492+n*(2877.024617809973+n*(14110.519919151804+n*(70621.4408815654+n*(358977.266582531+n*(1847238.2637239718+n*(9600515.416049214+n*(50307677.08502367+n*(265444188.6527128+n*(1408862325.0287027+7515687935.373775*n))))))))))))))}(c-.825):c<.9?f=function(n){return 0===n?2.473596173751344:2.473596173751344+n*(3.727624244118099+n*(15.607393035549306+n*(84.12850842805888+n*(506.98181970406137+n*(3252.2770581451236+n*(21713.242419574344+n*(149037.04518909327+n*(1043999.3310899908+n*(7427974.817042039+n*(53503839.67558661+n*(389249886.99487084+n*(2855288351.1008105+n*(21090077038.76684+n*(156699833947.7902+n*(1170222242422.44+n*(8777948323668.9375+n*(66101242752484.95+n*(499488053713388.8+0x86813c6c7adde8*n))))))))))))))))))}(c-.875):(i=function(n){return 0===n?0:0+n*(.0625+n*(.03125+n*(.0205078125+n*(.01513671875+n*(.011934280395507812+n*(.009816169738769531+n*(.008315593004226685+n*(.007199153304100037+n*(.00633745662344154+n*(.00565311038371874+n*(.005097046040418718+n*(.004636680381850056+n*(.004249547423822886+.003919665602267974*n)))))))))))))}(u=1-c),e=function(n){return 0===n?1.5910034537907922:1.5910034537907922+n*(.41600074399178694+n*(.24579151426410342+n*(.17948148291490615+n*(.14455605708755515+n*(.12320099331242772+n*(.10893881157429353+n*(.09885340987159291+n*(.09143962920174975+n*(.0858425915954139+.08154111871830322*n)))))))))}(u-.05),f=-J(i)*(.3183098861837907*e)),o?f/t(1-n):f)}(a),c=(r+f*(e-u))/e),o?c*t(1-n):c)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).ellipe=t();
//# sourceMappingURL=index.js.map
