// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.sqrt,r=1.5707963267948966;function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var o=n();var e=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;var u="function"==typeof Symbol?Symbol:void 0,i="function"==typeof u?u.toStringTag:"";var c=o&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,u,c;if(null==t)return e.call(t);n=t[i],c=i,r=null!=(u=t)&&a.call(u,c);try{t[i]=void 0}catch(r){return e.call(t)}return o=e.call(t),r?t[i]=n:delete t[i],o}:function(t){return e.call(t)},f="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var y,v="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(f&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?v:function(){throw new Error("not implemented")};var p=y,A=n();var b=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var w="function"==typeof u?u.toStringTag:"";var g=A&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return b.call(t);n=t[w],a=w,r=null!=(e=t)&&m.call(e,a);try{t[w]=void 0}catch(r){return b.call(t)}return o=b.call(t),r?t[w]=n:delete t[w],o}:function(t){return b.call(t)},S="function"==typeof Float64Array;var d="function"==typeof Float64Array?Float64Array:null;var h,U="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof d)return!1;try{r=new d([1,3.14,-3.14,NaN]),n=r,t=(S&&n instanceof Float64Array||"[object Float64Array]"===g(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?U:function(){throw new Error("not implemented")};var s=h,N=n();var F=Object.prototype.toString;var O=Object.prototype.hasOwnProperty;var j="function"==typeof u?u.toStringTag:"";var T=N&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return F.call(t);n=t[j],a=j,r=null!=(e=t)&&O.call(e,a);try{t[j]=void 0}catch(r){return F.call(t)}return o=F.call(t),r?t[j]=n:delete t[j],o}:function(t){return F.call(t)},I="function"==typeof Uint8Array;var E="function"==typeof Uint8Array?Uint8Array:null;var P,x="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var t,r,n;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,256,257]),n=r,t=(I&&n instanceof Uint8Array||"[object Uint8Array]"===T(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?x:function(){throw new Error("not implemented")};var V=P,Y=n();var _=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var G="function"==typeof u?u.toStringTag:"";var M=Y&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return _.call(t);n=t[G],a=G,r=null!=(e=t)&&q.call(e,a);try{t[G]=void 0}catch(r){return _.call(t)}return o=_.call(t),r?t[G]=n:delete t[G],o}:function(t){return _.call(t)},k="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var B,C="function"==typeof Uint16Array?Uint16Array:void 0;B=function(){var t,r,n;if("function"!=typeof z)return!1;try{r=new z(r=[1,3.14,-3.14,65536,65537]),n=r,t=(k&&n instanceof Uint16Array||"[object Uint16Array]"===M(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?C:function(){throw new Error("not implemented")};var D,H={uint16:B,uint8:V};(D=new H.uint16(1))[0]=4660;var J=52===new H.uint8(D.buffer)[0],K=!0===J?1:0,L=new s(1),Q=new p(L.buffer);function R(t){return L[0]=t,Q[K]}var W=n();var X=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;var $="function"==typeof u?u.toStringTag:"";var tt=W&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return X.call(t);n=t[$],a=$,r=null!=(e=t)&&Z.call(e,a);try{t[$]=void 0}catch(r){return X.call(t)}return o=X.call(t),r?t[$]=n:delete t[$],o}:function(t){return X.call(t)},rt="function"==typeof Float64Array;var nt="function"==typeof Float64Array?Float64Array:null;var ot,et="function"==typeof Float64Array?Float64Array:void 0;ot=function(){var t,r,n;if("function"!=typeof nt)return!1;try{r=new nt([1,3.14,-3.14,NaN]),n=r,t=(rt&&n instanceof Float64Array||"[object Float64Array]"===tt(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var at=!0===J?1:0,ut=new ot(1),it=new p(ut.buffer);var ct=Number.NEGATIVE_INFINITY;var ft=.6931471803691238,lt=1.9082149292705877e-10;function yt(t){var r,n,o,e,a,u,i,c,f,l,y,v;return 0===t?ct:function(t){return t!=t}(t)||t<0?NaN:(a=0,(n=R(t))<1048576&&(a-=54,n=R(t*=0x40000000000000)),n>=2146435072?t+t:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,i=(t=function(t,r){return ut[0]=t,it[at]=r>>>0,ut[0]}(t,n|1072693248^c))-1,(1048575&2+n)<3?0===i?0===a?0:a*ft+a*lt:(u=i*i*(.5-.3333333333333333*i),0===a?i-u:a*ft-(u-a*lt-i)):(c=n-398458|0,f=440401-n|0,e=(y=(v=(l=i/(2+i))*l)*v)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),o=v*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=o+e,(c|=f)>0?(r=.5*i*i,0===a?i-(r-l*(r+u)):a*ft-(r-(l*(r+u)+a*lt)-i)):0===a?i-l*(i-u):a*ft-(l*(i-u)-a*lt-i))))}var vt=Number.POSITIVE_INFINITY;function pt(n){var o,e,a,u,i,c,f;return f=n,n<0&&(f=n/(n-1),o=!0),0===f?r:1===f?1:f>1?NaN:(f<.1?c=function(t){return 0===t?1.5509733517804722:1.5509733517804722+t*(t*(t*(t*(t*(t*(t*(t*(-.004809187786009338*t-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(f-.05):f<.2?c=function(t){return 0===t?1.5101218320928198:1.5101218320928198+t*(t*(t*(t*(t*(t*(t*(t*(t*(-.011197445703074968*t-.011799303775587354)-.012759847429264804)-.01426196082884252)-.016650786739707237)-.020644781177568104)-.027965493064761784)-.04372994401908431)-.09012382040477457)-.41711633390586755)}(f-.15):f<.3?c=function(t){return 0===t?1.4674622093394272:1.4674622093394272+t*(t*(t*(t*(t*(t*(t*(t*(t*(-.03478996038640416*t-.03237139531475812)-.0309169840192389)-.030527000890325277)-.031495443512532785)-.03452772850528084)-.04139162772734022)-.05737184359324173)-.10515555766694255)-.43657629094633776)}(f-.25):f<.4?c=function(t){return 0===t?1.4226911334908792:1.4226911334908792+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-.1607911206912746*t-.12705358515769605)-.102539850131046)-.084959075171781)-.07279389536257878)-.06519703281557247)-.06208433913173031)-.06471427847205)-.07813854509440948)-.12525053982206188)-.4595135196210487)}(f-.35):f<.5?c=function(t){return 0===t?1.3754019718711163:1.3754019718711163+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1.3088332057585401*t-.8605232357272398)-.5757544060278792)-.39351311430437586)-.27617433306775174)-.20049532364269734)-.15221716396203505)-.12295422312026907)-.10884095252313576)-.11184944491702783)-.15331170134854022)-.4872021832731848)}(f-.45):f<.6?c=function(t){return 0===t?1.3250244979582302:1.3250244979582302+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-11.97703130208884*t-6.446753640156048)-3.5316967730957227)-1.9767211439543984)-1.1363431218392293)-.675948400853106)-.42069845728100574)-.27879895311853475)-.20275465292641914)-.17162372682201127)-.19490643048212622)-.5217276475575667)}(f-.55):f<.7?c=function(t){return 0===t?1.2707074796501499:1.2707074796501499+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1137.38082216936*t-463.5938853480342)-191.34894807629848)-80.15895841905397)-34.18120574251449)-14.89436036517319)-6.6675959033810015)-3.089708310445187)-1.498870837987561)-.7749476413813975)-.4403978408504232)-.2922441735330774)-.2621607934324926)-.5668391682878666)}(f-.65):f<.8?c=function(t){return 0===t?1.2110560275684594:1.2110560275684594+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1104011.3443115912*t-315126.04064491636)-90799.48341621365)-26448.19586059192)-7801.945954775964)-2336.1253314403966)-712.1364793277636)-221.879685319235)-71.04099935893065)-23.55507217389693)-8.18168822157359)-3.0320566617452474)-1.23755558451305)-.5922782353119346)-.38716640952066916)-.6303064132874558)}(f-.75):f<.85?c=function(t){return 0===t?1.1613071521962828:1.1613071521962828+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1920033.4136826345*t-396650.4505013548)-83182.69029154233)-17761.7071017094)-3877.0058473132895)-869.8602699308701)-202.18187354340904)-49.25672530759985)-12.815909243378957)-3.679383613496635)-1.2436930610777865)-.5805514744654373)-.7011002845552895)}(f-.825):f<.9?c=function(t){return 0===t?1.1246173251197522:1.1246173251197522+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-36409256888.1214*t-5198725846.725541)-749380758.1942496)-109209938.52030899)-16120097.815816568)-2415611.0887010912)-368596.11674161063)-57502.51612140314)-9222.313478526092)-1532.66588382523)-267.09866751957054)-49.7490054655148)-10.239717411543843)-2.4900973094503946)-.8447940536449113)-.7708450563609095)}(f-.875):(e=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(u=.95-f),a=function(t){return 0===t?1.5509733517804722:1.5509733517804722+t*(t*(t*(t*(t*(t*(t*(t*(-.004809187786009338*t-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(u),i=function(n){var o,e,a,u,i,c;return c=n,n<0&&(c=n/(n-1),o=!0),0===c?r:1===c?vt:c>1?NaN:(c<.1?i=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(c-.05):c<.2?i=function(t){return 0===t?1.63525673226458:1.63525673226458+t*(.4711906261487323+t*(.3097284108314996+t*(.2522083117731357+t*(.22672562321968465+t*(.21577444672958598+t*(.21310877187734892+t*(.21602912460518828+t*(.2232558316330579+t*(.23418050129420992+t*(.24855768297226408+.26636380989261754*t))))))))))}(c-.15):c<.3?i=function(t){return 0===t?1.685750354812596:1.685750354812596+t*(.5417318486132803+t*(.40152443839069024+t*(.3696424734208891+t*(.37606071535458363+t*(.4052358870851259+t*(.45329438175399905+t*(.5205189476511842+t*(.609426039204995+t*(.7242635222829089+t*(.8710138477098124+1.057652872753547*t))))))))))}(c-.25):c<.4?i=function(t){return 0===t?1.7443505972256133:1.7443505972256133+t*(.6348642753719353+t*(.5398425641644455+t*(.5718927051937874+t*(.6702951362654062+t*(.8325865900109772+t*(1.0738574482479333+t*(1.4220914606754977+t*(1.9203871834023047+t*(2.6325525483316543+t*(3.6521097473190394+t*(5.115867135558866+7.224080007363877*t)))))))))))}(c-.35):c<.5?i=function(t){return 0===t?1.8138839368169826:1.8138839368169826+t*(.7631632457005573+t*(.7619286053215958+t*(.9510746536684279+t*(1.315180671703161+t*(1.9285606934774109+t*(2.9375093425313787+t*(4.594894405442878+t*(7.33007122188172+t*(11.871512597425301+t*(19.45851374822938+t*(32.20638657246427+t*(53.73749198700555+90.27388602941*t))))))))))))}(c-.45):c<.6?i=function(t){return 0===t?1.8989249102715535:1.8989249102715535+t*(.9505217946182445+t*(1.1510775899590158+t*(1.7502391069863006+t*(2.952676812636875+t*(5.285800396121451+t*(9.83248571665998+t*(18.787148683275596+t*(36.61468615273698+t*(72.45292395127771+t*(145.1079577347069+t*(293.4786396308497+t*(598.385181505501+t*(1228.4200130758634+2536.5297553827645*t)))))))))))))}(c-.55):c<.7?i=function(t){return 0===t?2.0075983984243764:2.0075983984243764+t*(1.2484572312123474+t*(1.9262346570764797+t*(3.7512896400875877+t*(8.119944554932045+t*(18.665721308735552+t*(44.603924842914374+t*(109.50920543094983+t*(274.2779548232414+t*(697.5598008606327+t*(1795.7160145002472+t*(4668.38171679039+t*(12235.762468136643+t*(32290.17809718321+t*(85713.07608195965+t*(228672.1890493117+612757.2711915852*t)))))))))))))))}(c-.65):c<.8?i=function(t){return 0===t?2.1565156474996434:2.1565156474996434+t*(1.7918056418494632+t*(3.8267512874657132+t*(10.386724683637972+t*(31.403314054680703+t*(100.92370394986955+t*(337.3268282632273+t*(1158.7079305678278+t*(4060.9907421936323+t*(14454.001840343448+t*(52076.661075994045+t*(189493.65914621568+t*(695184.5762413896+t*(2567994.048255285+t*(9541921.966748387+t*(35634927.44218076+t*(133669298.46120408+t*(503352186.68662846+t*(1901975729.53866+7208915015.330104*t))))))))))))))))))}(c-.75):c<.85?i=function(t){return 0===t?2.3181226217125106:2.3181226217125106+t*(2.6169201502912327+t*(7.897935075731356+t*(30.502397154466724+t*(131.48693655235286+t*(602.9847637356492+t*(2877.024617809973+t*(14110.519919151804+t*(70621.4408815654+t*(358977.266582531+t*(1847238.2637239718+t*(9600515.416049214+t*(50307677.08502367+t*(265444188.6527128+t*(1408862325.0287027+7515687935.373775*t))))))))))))))}(c-.825):c<.9?i=function(t){return 0===t?2.473596173751344:2.473596173751344+t*(3.727624244118099+t*(15.607393035549306+t*(84.12850842805888+t*(506.98181970406137+t*(3252.2770581451236+t*(21713.242419574344+t*(149037.04518909327+t*(1043999.3310899908+t*(7427974.817042039+t*(53503839.67558661+t*(389249886.99487084+t*(2855288351.1008105+t*(21090077038.76684+t*(156699833947.7902+t*(1170222242422.44+t*(8777948323668.9375+t*(66101242752484.95+t*(499488053713388.8+0x86813c6c7adde8*t))))))))))))))))))}(c-.875):(u=function(t){return 0===t?0:0+t*(.0625+t*(.03125+t*(.0205078125+t*(.01513671875+t*(.011934280395507812+t*(.009816169738769531+t*(.008315593004226685+t*(.007199153304100037+t*(.00633745662344154+t*(.00565311038371874+t*(.005097046040418718+t*(.004636680381850056+t*(.004249547423822886+.003919665602267974*t)))))))))))))}(a=1-c),e=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(a-.05),i=-yt(u)*(.3183098861837907*e)),o?i/t(1-n):i)}(f),c=(r+i*(e-a))/e),o?c*t(1-n):c)}export{pt as default};
//# sourceMappingURL=mod.js.map
