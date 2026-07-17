(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,502996,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},882469,e=>{"use strict";let t=BigInt(0x100000000-1),r=BigInt(32);e.s(["add",0,function(e,t,r,o){let n=(t>>>0)+(o>>>0);return{h:e+r+(n/0x100000000|0)|0,l:0|n}},"add3H",0,(e,t,r,o)=>t+r+o+(e/0x100000000|0)|0,"add3L",0,(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0),"add4H",0,(e,t,r,o,n)=>t+r+o+n+(e/0x100000000|0)|0,"add4L",0,(e,t,r,o)=>(e>>>0)+(t>>>0)+(r>>>0)+(o>>>0),"add5H",0,(e,t,r,o,n,a)=>t+r+o+n+a+(e/0x100000000|0)|0,"add5L",0,(e,t,r,o,n)=>(e>>>0)+(t>>>0)+(r>>>0)+(o>>>0)+(n>>>0),"rotlBH",0,(e,t,r)=>t<<r-32|e>>>64-r,"rotlBL",0,(e,t,r)=>e<<r-32|t>>>64-r,"rotlSH",0,(e,t,r)=>e<<r|t>>>32-r,"rotlSL",0,(e,t,r)=>t<<r|e>>>32-r,"rotrBH",0,(e,t,r)=>e<<64-r|t>>>r-32,"rotrBL",0,(e,t,r)=>e>>>r-32|t<<64-r,"rotrSH",0,(e,t,r)=>e>>>r|t<<32-r,"rotrSL",0,(e,t,r)=>e<<32-r|t>>>r,"shrSH",0,(e,t,r)=>e>>>r,"shrSL",0,(e,t,r)=>e<<32-r|t>>>r,"split",0,function(e,o=!1){let n=e.length,a=new Uint32Array(n),i=new Uint32Array(n);for(let s=0;s<n;s++){let{h:n,l}=function(e,o=!1){return o?{h:Number(e&t),l:Number(e>>r&t)}:{h:0|Number(e>>r&t),l:0|Number(e&t)}}(e[s],o);[a[s],i[s]]=[n,l]}return[a,i]}])},944445,e=>{"use strict";let t="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0;function r(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&"Uint8Array"===e.constructor.name}function o(e){if(!Number.isSafeInteger(e)||e<0)throw Error("positive integer expected, got "+e)}function n(e,...t){if(!r(e))throw Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw Error("Uint8Array expected of length "+t+", got length="+e.length)}let a=68===new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]?e=>e:function(e){for(let r=0;r<e.length;r++){var t;e[r]=(t=e[r])<<24&0xff000000|t<<8&0xff0000|t>>>8&65280|t>>>24&255}return e},i="function"==typeof Uint8Array.from([]).toHex&&"function"==typeof Uint8Array.fromHex,s=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function l(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function c(e){if("string"!=typeof e)throw Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}function u(e){return"string"==typeof e&&(e=c(e)),n(e),e}e.s(["Hash",0,class{},"abytes",0,n,"aexists",0,function(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")},"ahash",0,function(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.createHasher");o(e.outputLen),o(e.blockLen)},"anumber",0,o,"aoutput",0,function(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error("digestInto() expects output buffer of length at least "+r)},"bytesToHex",0,function(e){if(n(e),i)return e.toHex();let t="";for(let r=0;r<e.length;r++)t+=s[e[r]];return t},"bytesToUtf8",0,function(e){return new TextDecoder().decode(e)},"clean",0,function(...e){for(let t=0;t<e.length;t++)e[t].fill(0)},"concatBytes",0,function(...e){let t=0;for(let r=0;r<e.length;r++){let o=e[r];n(o),t+=o.length}let r=new Uint8Array(t);for(let t=0,o=0;t<e.length;t++){let n=e[t];r.set(n,o),o+=n.length}return r},"createHasher",0,function(e){let t=t=>e().update(u(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t},"createView",0,function(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)},"createXOFer",0,function(e){let t=(t,r)=>e(r).update(u(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t},"hexToBytes",0,function(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);if(i)return Uint8Array.fromHex(e);let t=e.length,r=t/2;if(t%2)throw Error("hex string expected, got unpadded hex of length "+t);let o=new Uint8Array(r);for(let t=0,n=0;t<r;t++,n+=2){let r=l(e.charCodeAt(n)),a=l(e.charCodeAt(n+1));if(void 0===r||void 0===a)throw Error('hex string expected, got non-hex character "'+(e[n]+e[n+1])+'" at index '+n);o[t]=16*r+a}return o},"isBytes",0,r,"randomBytes",0,function(e=32){if(t&&"function"==typeof t.getRandomValues)return t.getRandomValues(new Uint8Array(e));if(t&&"function"==typeof t.randomBytes)return Uint8Array.from(t.randomBytes(e));throw Error("crypto.getRandomValues must be defined")},"rotr",0,function(e,t){return e<<32-t|e>>>t},"swap32IfBE",0,a,"toBytes",0,u,"u32",0,function(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))},"utf8ToBytes",0,c],944445)},211916,e=>{"use strict";let t=BigInt(0),r=BigInt(1);function o(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&"Uint8Array"===e.constructor.name}function n(e){if(!o(e))throw Error("Uint8Array expected")}function a(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);return""===e?t:BigInt("0x"+e)}let i="function"==typeof Uint8Array.from([]).toHex&&"function"==typeof Uint8Array.fromHex,s=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function l(e){if(n(e),i)return e.toHex();let t="";for(let r=0;r<e.length;r++)t+=s[e[r]];return t}function c(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function u(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);if(i)return Uint8Array.fromHex(e);let t=e.length,r=t/2;if(t%2)throw Error("hex string expected, got unpadded hex of length "+t);let o=new Uint8Array(r);for(let t=0,n=0;t<r;t++,n+=2){let r=c(e.charCodeAt(n)),a=c(e.charCodeAt(n+1));if(void 0===r||void 0===a)throw Error('hex string expected, got non-hex character "'+(e[n]+e[n+1])+'" at index '+n);o[t]=16*r+a}return o}function p(e,t){return u(e.toString(16).padStart(2*t,"0"))}function d(...e){let t=0;for(let r=0;r<e.length;r++){let o=e[r];n(o),t+=o.length}let r=new Uint8Array(t);for(let t=0,o=0;t<e.length;t++){let n=e[t];r.set(n,o),o+=n.length}return r}let h=e=>"bigint"==typeof e&&t<=e;function f(e,t,r){return h(e)&&h(t)&&h(r)&&t<=e&&e<r}let m=e=>new Uint8Array(e),y={bigint:e=>"bigint"==typeof e,function:e=>"function"==typeof e,boolean:e=>"boolean"==typeof e,string:e=>"string"==typeof e,stringOrUint8Array:e=>"string"==typeof e||o(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>"function"==typeof e&&Number.isSafeInteger(e.outputLen)};e.s(["aInRange",0,function(e,t,r,o){if(!f(t,r,o))throw Error("expected valid "+e+": "+r+" <= n < "+o+", got "+t)},"abool",0,function(e,t){if("boolean"!=typeof t)throw Error(e+" boolean expected, got "+t)},"abytes",0,n,"bitLen",0,function(e){let o;for(o=0;e>t;e>>=r,o+=1);return o},"bitMask",0,e=>(r<<BigInt(e))-r,"bytesToHex",0,l,"bytesToNumberBE",0,function(e){return a(l(e))},"bytesToNumberLE",0,function(e){return n(e),a(l(Uint8Array.from(e).reverse()))},"concatBytes",0,d,"createHmacDrbg",0,function(e,t,r){if("number"!=typeof e||e<2)throw Error("hashLen must be a number");if("number"!=typeof t||t<2)throw Error("qByteLen must be a number");if("function"!=typeof r)throw Error("hmacFn must be a function");let o=m(e),n=m(e),a=0,i=()=>{o.fill(1),n.fill(0),a=0},s=(...e)=>r(n,o,...e),l=(e=m(0))=>{let t;if(n=s((t=[0],Uint8Array.from(t)),e),o=s(),0!==e.length){let t;n=s((t=[1],Uint8Array.from(t)),e),o=s()}},c=()=>{if(a++>=1e3)throw Error("drbg: tried 1000 values");let e=0,r=[];for(;e<t;){let t=(o=s()).slice();r.push(t),e+=o.length}return d(...r)};return(e,t)=>{let r;for(i(),l(e);!(r=t(c()));)l();return i(),r}},"ensureBytes",0,function(e,t,r){let n;if("string"==typeof t)try{n=u(t)}catch(t){throw Error(e+" must be hex string or Uint8Array, cause: "+t)}else if(o(t))n=Uint8Array.from(t);else throw Error(e+" must be hex string or Uint8Array");let a=n.length;if("number"==typeof r&&a!==r)throw Error(e+" of length "+r+" expected, got "+a);return n},"equalBytes",0,function(e,t){if(e.length!==t.length)return!1;let r=0;for(let o=0;o<e.length;o++)r|=e[o]^t[o];return 0===r},"hexToBytes",0,u,"inRange",0,f,"isBytes",0,o,"memoized",0,function(e){let t=new WeakMap;return(r,...o)=>{let n=t.get(r);if(void 0!==n)return n;let a=e(r,...o);return t.set(r,a),a}},"numberToBytesBE",0,p,"numberToBytesLE",0,function(e,t){return p(e,t).reverse()},"numberToHexUnpadded",0,function(e){let t=e.toString(16);return 1&t.length?"0"+t:t},"utf8ToBytes",0,function(e){if("string"!=typeof e)throw Error("string expected");return new Uint8Array(new TextEncoder().encode(e))},"validateObject",0,function(e,t,r={}){let o=(t,r,o)=>{let n=y[r];if("function"!=typeof n)throw Error("invalid validator function");let a=e[t];if((!o||void 0!==a)&&!n(a,e))throw Error("param "+String(t)+" is invalid. Expected "+r+", got "+a)};for(let[e,r]of Object.entries(t))o(e,r,!1);for(let[e,t]of Object.entries(r))o(e,t,!0);return e}])},361969,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(744066)._(e.r(609133)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,o=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||i.test(o))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),n=n.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${o}${c}${n}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},527371,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(515401);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,o)),t&&(n.current=a(t,o))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},14366,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let o=e.r(105978),n=e.r(181705);function a(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},394461,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},621700,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return w},useLinkStatus:function(){return b}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(744066),i=e.r(384027),s=a._(e.r(515401)),l=e.r(361969),c=e.r(350273),u=e.r(527371),p=e.r(105978),d=e.r(869785);e.r(502996);let h=e.r(817096),f=e.r(691290),m=e.r(14366),y=e.r(352107);function w(t){var r;let o,n,a,[w,b]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),k=(0,s.useRef)(null),{href:v,as:x,children:C,prefetch:W=null,passHref:_,replace:j,shallow:P,scroll:O,onClick:I,onMouseEnter:R,onTouchStart:S,legacyBehavior:A=!1,onNavigate:E,transitionTypes:T,ref:q,unstable_dynamicOnHover:B,...N}=t;o=C,A&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let L=s.default.useContext(c.AppRouterContext),M=!1!==W,z=!1!==W&&!0===W?y.FetchStrategy.Full:y.FetchStrategy.PPR,U="string"==typeof(r=x||v)?r:(0,l.formatUrl)(r);if(A){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let D=A?n&&"object"==typeof n&&n.ref:q,$=s.default.useCallback(e=>(null!==L&&(k.current=(0,f.mountLinkInstance)(e,U,L,z,M,b)),()=>{k.current&&((0,f.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,f.unmountPrefetchableInstance)(e)}),[M,U,L,z,b]),H={ref:(0,u.useMergedRef)($,D),onClick(t){A||"function"!=typeof I||I(t),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!L||t.defaultPrevented||function(t,r,o,n,a,i,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(129385);s.default.startTransition(()=>{p(r,n?"replace":"push",!1===a?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,o.current,l)})}}(t,U,k,j,O,E,T)},onMouseEnter(e){A||"function"!=typeof R||R(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&M&&(0,f.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){A||"function"!=typeof S||S(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&M&&(0,f.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,p.isAbsoluteUrl)(U)?H.href=U:A&&!_&&("a"!==n.type||"href"in n.props)||(H.href=(0,d.addBasePath)(U)),a=A?s.default.cloneElement(n,H):(0,i.jsx)("a",{...N,...H,children:o}),(0,i.jsx)(g.Provider,{value:w,children:a})}e.r(394461);let g=(0,s.createContext)(f.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},79028,e=>{"use strict";var t=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "ready": {
      "qr_code": {
        "step1": {
          "description": "Add Ready to your home screen for faster access to your wallet.",
          "title": "Open the Ready app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ctrl": {
      "extension": {
        "step1": {
          "title": "Install the CTRL Wallet extension",
          "description": "We recommend pinning CTRL Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "meco": {
      "qr_code": {
        "step1": {
          "title": "Open the MeCo Wallet app",
          "description": "Put MeCo Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "anchorage_digital": {
      "extension": {
        "step1": {
          "title": "Install the Anchorage Digital extension",
          "description": "We recommend pinning Anchorage Digital to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Scan the QR code to login",
          "description": "Securely connect your organization's wallets to dApps with institutional-grade security."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you log in, click below to refresh the browser and load up the extension."
        }
      }
    }
  }
}
`;e.s(["en_US_default",0,t])},640907,33796,e=>{"use strict";let t=(0,e.i(406963).default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);e.s(["SendIcon",0,t],640907),e.s(["TELEGRAM_BRIDGE_PATH",0,"/eve/v1/bridge/telegram","TELEGRAM_NOT_LINKED_ERROR",0,"telegram-not-linked","TELEGRAM_SIDEBAR_SELECTION_ID",0,"telegram","getVisibleTelegramEvents",0,function(e){let t=-1;for(let[r,o]of e.entries())"action.result"===o.type&&"completed"===o.data.status&&"tool-result"===o.data.result.kind&&"clear_conversation"===o.data.result.toolName&&!0!==o.data.result.isError&&(t=r);if(-1===t)return e;let r=e.slice(t+1).findIndex(e=>"session.waiting"===e.type);return -1===r?[]:e.slice(t+r+2)}],33796)},927245,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={callServer:function(){return a.callServer},createServerReference:function(){return s.createServerReference},findSourceMapURL:function(){return i.findSourceMapURL}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(428312),i=e.r(27725),s=e.r(596545)},221301,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()])},291850,36374,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],291850),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],36374)},293752,e=>{"use strict";var t=e.i(515401),r=e.i(291850),o=e.i(36374),n=e.i(221301);let a=(0,t.createContext)({}),i=(0,t.forwardRef)(({color:e,size:i,strokeWidth:s,absoluteStrokeWidth:l,className:c="",children:u,iconNode:p,...d},h)=>{let{size:f=24,strokeWidth:m=2,absoluteStrokeWidth:y=!1,color:w="currentColor",className:g=""}=(0,t.useContext)(a)??{},b=l??y?24*Number(s??m)/Number(i??f):s??m;return(0,t.createElement)("svg",{ref:h,...r.default,width:i??f??r.default.width,height:i??f??r.default.height,stroke:e??w,strokeWidth:b,className:(0,n.mergeClasses)("lucide",g,c),...!u&&!(0,o.hasA11yProp)(d)&&{"aria-hidden":"true"},...d},[...p.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(u)?u:[u]])});e.s(["default",0,i],293752)},474795,494610,e=>{"use strict";var t=e.i(515401);function r(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function o(...e){return t=>{let o=!1,n=e.map(e=>{let n=r(e,t);return o||"function"!=typeof n||(o=!0),n});if(o)return()=>{for(let t=0;t<n.length;t++){let o=n[t];"function"==typeof o?o():r(e[t],null)}}}}e.s(["composeRefs",0,o,"useComposedRefs",0,function(...e){return t.useCallback(o(...e),e)}],494610);var n=e.i(384027);function a(e){var r;let a,i=(r=e,(a=t.forwardRef((e,r)=>{let{children:n,...a}=e;if(t.isValidElement(n)){var i;let e,s,l=(i=n,(s=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(s=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref),c=function(e,t){let r={...t};for(let o in t){let n=e[o],a=t[o];/^on[A-Z]/.test(o)?n&&a?r[o]=(...e)=>{let t=a(...e);return n(...e),t}:n&&(r[o]=n):"style"===o?r[o]={...n,...a}:"className"===o&&(r[o]=[n,a].filter(Boolean).join(" "))}return{...e,...r}}(a,n.props);return n.type!==t.Fragment&&(c.ref=r?o(r,l):l),t.cloneElement(n,c)}return t.Children.count(n)>1?t.Children.only(null):null})).displayName=`${r}.SlotClone`,a),s=t.forwardRef((e,r)=>{let{children:o,...a}=e,s=t.Children.toArray(o),l=s.find(u);if(l){let e=l.props.children,o=s.map(r=>r!==l?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,n.jsx)(i,{...a,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,n.jsx)(i,{...a,ref:r,children:o})});return s.displayName=`${e}.Slot`,s}var i=a("Slot"),s=Symbol("radix.slottable");function l(e){let t=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});return t.displayName=`${e}.Slottable`,t.__radixId=s,t}var c=l("Slottable");function u(e){return t.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===s}e.s(["Root",0,i,"Slot",0,i,"Slottable",0,c,"createSlot",0,a,"createSlottable",0,l],474795)},647163,e=>{"use strict";var t=e.i(7284),r=e.i(479656);e.s(["cn",0,function(...e){return(0,r.twMerge)((0,t.clsx)(e))}])},406963,294237,167881,e=>{"use strict";var t=e.i(515401),r=e.i(221301);let o=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var n=e.i(293752);e.s(["default",0,(e,a)=>{let i=(0,t.forwardRef)(({className:i,...s},l)=>(0,t.createElement)(n.default,{ref:l,iconNode:a,className:(0,r.mergeClasses)(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...s}));return i.displayName=o(e),i}],406963);var a=e.i(384027),i=e.i(7284);let s=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=i.clsx,c=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:n,defaultVariants:a}=t,i=Object.keys(n).map(e=>{let t=null==r?void 0:r[e],o=null==a?void 0:a[e];if(null===t)return null;let i=s(t)||s(o);return n[e][i]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return l(e,i,null==t||null==(o=t.compoundVariants)?void 0:o.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...c}[t]):({...a,...c})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)};e.s(["cva",0,c],294237);var u=e.i(474795),u=u,p=e.i(647163);let d=c("inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,opacity,box-shadow,transform] duration-150 ease-snap outline-none motion-safe:active:scale-[0.97] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",xs:"h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-xs":"size-6 rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});e.s(["Button",0,function({className:e,variant:t="default",size:r="default",asChild:o=!1,...n}){let i=o?u.Root:"button";return(0,a.jsx)(i,{"data-slot":"button","data-variant":t,"data-size":r,className:(0,p.cn)(d({variant:t,size:r,className:e})),...n})}],167881)},85555,e=>{"use strict";let t=(0,e.i(406963).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2Icon",0,t],85555)},26165,e=>{"use strict";let t=(0,e.i(406963).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["CheckIcon",0,t],26165)},889532,e=>{"use strict";e.s(["CHAT_HOME_PATH",0,"/chat"])},453419,e=>{"use strict";e.s(["CHAT_BOOTSTRAP_SYNC_EVENT",0,"eve-chat:bootstrap-sync","CHAT_ROUTE_SYNC_EVENT",0,"eve-chat:route-sync"])},331337,e=>{"use strict";var t=e.i(384027);e.s(["ClawIcon",0,function({className:e}){return(0,t.jsxs)("svg",{"aria-hidden":"true",className:e,fill:"currentColor",viewBox:"220 140 720 860",children:[(0,t.jsx)("path",{d:"M314 897C567.3 668.7 694.1 440.3 846 212C719.1 440.3 784.1 668.7 314 897Z"}),(0,t.jsx)("path",{d:"M473 940C630.9 765 758.8 590 870 415C785.6 590 819.4 765 479 940Z"}),(0,t.jsx)("path",{d:"M641 939C727.2 827.3 807.4 715.7 883 604C826.6 715.7 874.7 827.3 644 939Z"})]})}])},466083,(e,t,r)=>{"use strict";function o({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:a,objectFit:i}){let s=r?40*r:e,l=n?40*n:t,c=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return o}})},266038,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return i}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},663439,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(502996);let o=e.r(509981),n=e.r(466083),a=e.r(266038),i=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:p=!1,loading:d,className:h,quality:f,width:m,height:y,fill:w=!1,style:g,overrideSrc:b,onLoad:k,onLoadingComplete:v,placeholder:x="empty",blurDataURL:C,fetchPriority:W,decoding:_="async",layout:j,objectFit:P,objectPosition:O,lazyBoundary:I,lazyRoot:R,...S},A){var E;let T,q,B,{imgConf:N,showAltText:L,blurComplete:M,defaultLoader:z}=A,U=N||a.imageConfigDefault;if("allSizes"in U)T=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),r=U.qualities?.sort((e,t)=>e-t);T={...U,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===z)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let D=S.loader||z;delete S.loader,delete S.srcSet;let $="__next_img_default"in D;if($){if("custom"===T.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=D;D=t=>{let{config:r,...o}=t;return e(o)}}if(j){"fill"===j&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(g={...g,...e});let r={responsive:"100vw",fill:"100vw"}[j];r&&!t&&(t=r)}let H="",V=l(m),Q=l(y);if((E=e)&&"object"==typeof E&&(s(E)||void 0!==E.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(q=t.blurWidth,B=t.blurHeight,C=C||t.blurDataURL,H=t.src,!w)if(V||Q){if(V&&!Q){let e=V/t.width;Q=Math.round(t.height*e)}else if(!V&&Q){let e=Q/t.height;V=Math.round(t.width*e)}}else V=t.width,Q=t.height}let F=!u&&!p&&("lazy"===d||void 0===d);(!(e="string"==typeof e?e:H)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,F=!1),T.unoptimized&&(r=!0),$&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let K=l(f),G=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:O}:{},L?{}:{color:"transparent"},g),Y=M||"empty"===x?null:"blur"===x?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:V,heightInt:Q,blurWidth:q,blurHeight:B,blurDataURL:C||"",objectFit:G.objectFit})}")`:`url("${x}")`,Z=i.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,X=Y?{backgroundSize:Z,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},J=function({config:e,src:t,unoptimized:r,width:n,quality:a,sizes:i,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,o.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let o=new URLSearchParams(t.slice(r+1));o.get("dpl")||(o.append("dpl",e),t=t.slice(0,r)+"?"+o.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},r,o){if(o){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(o);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,i),u=l.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:l.map((r,o)=>`${s({config:e,src:t,quality:a,width:r})} ${"w"===c?r:o+1}${c}`).join(", "),src:s({config:e,src:t,quality:a,width:l[u]})}}({config:T,src:e,unoptimized:r,width:V,quality:K,sizes:t,loader:D}),ee=F?"lazy":d;return{props:{...S,loading:ee,fetchPriority:W,width:V,height:Q,decoding:_,className:h,style:{...G,...X},sizes:J.sizes,srcSet:J.srcSet,src:b||J.src},meta:{unoptimized:r,preload:p||u,placeholder:x,fill:w}}}},653690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let o=e.r(515401),n="u"<typeof window,a=n?()=>{}:o.useLayoutEffect,i=n?()=>{}:o.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},21674,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return m},defaultHead:function(){return p}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(481258),i=e.r(744066),s=e.r(384027),l=i._(e.r(515401)),c=a._(e.r(653690)),u=e.r(137458);function p(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(502996);let h=["name","httpEquiv","charSet","itemProp"];function f(e){let t,r,o,n;return e.reduce(d,[]).reverse().concat(p().reverse()).filter((t=new Set,r=new Set,o=new Set,n={},e=>{let a=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)o.has(r)?a=!1:o.add(r);else{let t=e.props[r],o=n[r]||new Set;("name"!==r||!i)&&o.has(t)?a=!1:(o.add(t),n[r]=o)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},62186,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let o=e.r(481258)._(e.r(515401)),n=e.r(266038),a=o.default.createContext(n.imageConfigDefault)},336727,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return o}});let o=e.r(481258)._(e.r(515401)).default.createContext(null)},775564,(e,t,r)=>{"use strict";function o(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return o}})},61893,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let o=e.r(775564),n=e.r(509981);function a({config:e,src:t,width:r,quality:i}){let s=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),o=r.get("dpl");if(o){s=o,r.delete("dpl");let n=r.toString();t=t.slice(0,e)+(n?"?"+n:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,o.findClosestQuality)(i,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}a.__next_img_default=!0;let i=a},280225,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return k}});let o=e.r(481258),n=e.r(744066),a=e.r(384027),i=n._(e.r(515401)),s=o._(e.r(63143)),l=o._(e.r(21674)),c=e.r(663439),u=e.r(266038),p=e.r(62186);e.r(502996);let d=e.r(336727),h=o._(e.r(61893)),f=e.r(527371),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function y(e,t,r,o,n,a,i){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}o?.current&&o.current(e)}}))}function w(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let g=(0,i.forwardRef)(({src:e,srcSet:t,sizes:r,height:o,width:n,decoding:s,className:l,style:c,fetchPriority:u,placeholder:p,loading:d,unoptimized:h,fill:m,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:k,setShowAltText:v,sizesInput:x,onLoad:C,onError:W,..._},j)=>{let P=(0,i.useCallback)(e=>{e&&(W&&(e.src=e.src),e.complete&&y(e,p,g,b,k,h,x))},[e,p,g,b,k,W,h,x]),O=(0,f.useMergedRef)(j,P);return(0,a.jsx)("img",{..._,...w(u),loading:d,width:n,height:o,decoding:s,"data-nimg":m?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:O,onLoad:e=>{y(e.currentTarget,p,g,b,k,h,x)},onError:e=>{v(!0),"empty"!==p&&k(!0),W&&W(e)}})});function b({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...w(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let k=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),o=(0,i.useContext)(p.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=m||o||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"u"<typeof window?o?.localPatterns:e.localPatterns}},[o]),{onLoad:s,onLoadingComplete:l}=e,f=(0,i.useRef)(s);(0,i.useEffect)(()=>{f.current=s},[s]);let y=(0,i.useRef)(l);(0,i.useEffect)(()=>{y.current=l},[l]);let[w,k]=(0,i.useState)(!1),[v,x]=(0,i.useState)(!1),{props:C,meta:W}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:n,blurComplete:w,showAltText:v});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{...C,unoptimized:W.unoptimized,placeholder:W.placeholder,fill:W.fill,onLoadRef:f,onLoadingCompleteRef:y,setBlurComplete:k,setShowAltText:x,sizesInput:e.sizes,ref:t}),W.preload?(0,a.jsx)(b,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},948505,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return u},getImageProps:function(){return c}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(481258),i=e.r(663439),s=e.r(280225),l=a._(e.r(61893));function c(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=s.Image},334417,(e,t,r)=>{t.exports=e.r(948505)},172020,e=>{e.v(t=>Promise.all(["static/chunks/07adaju1f9v6j.js"].map(t=>e.l(t))).then(()=>t(580263)))},313886,e=>{e.v(e=>Promise.resolve().then(()=>e(300059)))},964662,e=>{e.v(t=>Promise.all(["static/chunks/16nk3xj9b2pt5.js","static/chunks/0p.p9-67b075w.js","static/chunks/0og7gp5b8en9f.js"].map(t=>e.l(t))).then(()=>t(638354)))},734946,e=>{e.v(t=>Promise.all(["static/chunks/10lutbra2moly.js","static/chunks/05qohwd7okdyo.js"].map(t=>e.l(t))).then(()=>t(870896)))},763635,e=>{e.v(t=>Promise.all(["static/chunks/0jlkq65jpa9e1.js"].map(t=>e.l(t))).then(()=>t(739937)))},937058,e=>{e.v(t=>Promise.all(["static/chunks/002gaijxd--ct.js"].map(t=>e.l(t))).then(()=>t(199088)))},163499,e=>{e.v(t=>Promise.all(["static/chunks/0mf~z029al_85.js","static/chunks/0csrr.8fhk3rq.js"].map(t=>e.l(t))).then(()=>t(598118)))},127435,e=>{e.v(t=>Promise.all(["static/chunks/0sg367l89b5v9.js"].map(t=>e.l(t))).then(()=>t(712606)))},79824,e=>{e.v(t=>Promise.all(["static/chunks/09nyi4hytfdl4.js"].map(t=>e.l(t))).then(()=>t(414482)))},487443,e=>{e.v(t=>Promise.all(["static/chunks/0hfz1cwvf_iu2.js"].map(t=>e.l(t))).then(()=>t(418848)))},481845,e=>{e.v(t=>Promise.all(["static/chunks/0xdp7f3jgnr9t.js"].map(t=>e.l(t))).then(()=>t(22857)))},817776,e=>{e.v(t=>Promise.all(["static/chunks/0fg.kqq5.u9.g.js"].map(t=>e.l(t))).then(()=>t(169139)))},95300,e=>{e.v(t=>Promise.all(["static/chunks/08vv4.m1ai4w-.js"].map(t=>e.l(t))).then(()=>t(479678)))},394974,e=>{e.v(t=>Promise.all(["static/chunks/0h7cz2.5o0gl1.js"].map(t=>e.l(t))).then(()=>t(239536)))},356362,e=>{e.v(t=>Promise.all(["static/chunks/0y~3m~bem~qu8.js"].map(t=>e.l(t))).then(()=>t(629940)))},143431,e=>{e.v(t=>Promise.all(["static/chunks/0mvfyjfi-.1_4.js"].map(t=>e.l(t))).then(()=>t(851480)))},578179,e=>{e.v(t=>Promise.all(["static/chunks/0.c6ha_qhex0u.js"].map(t=>e.l(t))).then(()=>t(11221)))},85017,e=>{e.v(t=>Promise.all(["static/chunks/0kqe~tw-zm23i.js"].map(t=>e.l(t))).then(()=>t(795640)))},767118,e=>{e.v(t=>Promise.all(["static/chunks/0~1qszyzvlws~.js"].map(t=>e.l(t))).then(()=>t(845668)))},989897,e=>{e.v(t=>Promise.all(["static/chunks/0s8lx3e3tni5d.js"].map(t=>e.l(t))).then(()=>t(822743)))},516986,e=>{e.v(t=>Promise.all(["static/chunks/0g-e-s~gdwi2s.js"].map(t=>e.l(t))).then(()=>t(925527)))},694718,e=>{e.v(t=>Promise.all(["static/chunks/044a0dazdx9lr.js"].map(t=>e.l(t))).then(()=>t(269460)))},616885,e=>{e.v(t=>Promise.all(["static/chunks/01jx_hp8p_0kn.js"].map(t=>e.l(t))).then(()=>t(924859)))},259760,e=>{e.v(t=>Promise.all(["static/chunks/0g7tm6wma27u4.js"].map(t=>e.l(t))).then(()=>t(935058)))},605223,e=>{e.v(t=>Promise.all(["static/chunks/0kgn5rnwf~r.s.js"].map(t=>e.l(t))).then(()=>t(678760)))},650383,e=>{e.v(t=>Promise.all(["static/chunks/0vxzs6338q.hq.js"].map(t=>e.l(t))).then(()=>t(605028)))},253369,e=>{e.v(t=>Promise.all(["static/chunks/14dxd0os9env5.js"].map(t=>e.l(t))).then(()=>t(398814)))},631462,e=>{e.v(t=>Promise.all(["static/chunks/0wj5esy5_7zu8.js"].map(t=>e.l(t))).then(()=>t(298242)))},336437,e=>{e.v(t=>Promise.all(["static/chunks/0357izuyr-~mp.js"].map(t=>e.l(t))).then(()=>t(639338)))},487872,e=>{e.v(t=>Promise.all(["static/chunks/0d~26-nzu7fg5.js"].map(t=>e.l(t))).then(()=>t(65279)))},546935,e=>{e.v(t=>Promise.all(["static/chunks/1554-onsttb8e.js"].map(t=>e.l(t))).then(()=>t(765805)))},190689,e=>{e.v(t=>Promise.all(["static/chunks/18bln~s.xajrg.js"].map(t=>e.l(t))).then(()=>t(124214)))},658199,e=>{e.v(t=>Promise.all(["static/chunks/0xwdkim24~e6h.js"].map(t=>e.l(t))).then(()=>t(39002)))},249760,e=>{e.v(t=>Promise.all(["static/chunks/01u49zn39twba.js"].map(t=>e.l(t))).then(()=>t(467588)))},890688,e=>{e.v(t=>Promise.all(["static/chunks/09~xgdl9a5~51.js"].map(t=>e.l(t))).then(()=>t(896818)))},39003,e=>{e.v(t=>Promise.all(["static/chunks/16z9so1svyg_8.js"].map(t=>e.l(t))).then(()=>t(664622)))},131877,e=>{e.v(t=>Promise.all(["static/chunks/015al9hod~hji.js"].map(t=>e.l(t))).then(()=>t(799104)))},13083,e=>{e.v(t=>Promise.all(["static/chunks/02q2g7.use50y.js"].map(t=>e.l(t))).then(()=>t(752361)))},103160,e=>{e.v(t=>Promise.all(["static/chunks/15t8ly-bizv~a.js"].map(t=>e.l(t))).then(()=>t(2729)))},353521,e=>{e.v(t=>Promise.all(["static/chunks/0ch805zzm-rxy.js"].map(t=>e.l(t))).then(()=>t(685484)))},618693,e=>{e.v(t=>Promise.all(["static/chunks/06n48yfugtd1n.js"].map(t=>e.l(t))).then(()=>t(151719)))},986518,e=>{e.v(t=>Promise.all(["static/chunks/0ln.35wxm~dlc.js"].map(t=>e.l(t))).then(()=>t(358088)))},980183,e=>{e.v(t=>Promise.all(["static/chunks/15y6p33boq1nu.js"].map(t=>e.l(t))).then(()=>t(226856)))},125540,e=>{e.v(t=>Promise.all(["static/chunks/0n58f7aa20w79.js"].map(t=>e.l(t))).then(()=>t(156447)))},876440,e=>{e.v(t=>Promise.all(["static/chunks/0m7prbxr-6pxp.js"].map(t=>e.l(t))).then(()=>t(289344)))},41410,e=>{e.v(t=>Promise.all(["static/chunks/17w-qlixl9f29.js"].map(t=>e.l(t))).then(()=>t(538029)))},954714,e=>{e.v(t=>Promise.all(["static/chunks/0uihe4vu3m7ag.js"].map(t=>e.l(t))).then(()=>t(537268)))},234319,e=>{e.v(t=>Promise.all(["static/chunks/0en3qekgs5-oo.js"].map(t=>e.l(t))).then(()=>t(197939)))},747846,e=>{e.v(t=>Promise.all(["static/chunks/0hgz8ywnvtit_.js"].map(t=>e.l(t))).then(()=>t(552528)))},243693,e=>{e.v(t=>Promise.all(["static/chunks/0bdj2e7iqo677.js"].map(t=>e.l(t))).then(()=>t(977249)))},954131,e=>{e.v(t=>Promise.all(["static/chunks/0frqon4u0i8an.js"].map(t=>e.l(t))).then(()=>t(287356)))},291825,e=>{e.v(t=>Promise.all(["static/chunks/0pa09txkhwr-v.js"].map(t=>e.l(t))).then(()=>t(199499)))},655960,e=>{e.v(t=>Promise.all(["static/chunks/0o2ms2s3jgy-j.js"].map(t=>e.l(t))).then(()=>t(937061)))},910062,e=>{e.v(t=>Promise.all(["static/chunks/074ayzcw924ei.js"].map(t=>e.l(t))).then(()=>t(897883)))},936122,e=>{e.v(t=>Promise.all(["static/chunks/0q8otpprxf1qe.js"].map(t=>e.l(t))).then(()=>t(164128)))},858419,e=>{e.v(t=>Promise.all(["static/chunks/0hc2yrnr6m72z.js"].map(t=>e.l(t))).then(()=>t(838089)))},127099,e=>{e.v(t=>Promise.all(["static/chunks/0jb48_pm.hcu7.js"].map(t=>e.l(t))).then(()=>t(877618)))},738504,e=>{e.v(t=>Promise.all(["static/chunks/0fhl7l7kyrgim.js"].map(t=>e.l(t))).then(()=>t(525001)))},592875,e=>{e.v(t=>Promise.all(["static/chunks/0hxwud0-d1wlk.js"].map(t=>e.l(t))).then(()=>t(637911)))},956182,e=>{e.v(t=>Promise.all(["static/chunks/0xnax-blk6.ra.js"].map(t=>e.l(t))).then(()=>t(889778)))},761399,e=>{e.v(t=>Promise.all(["static/chunks/0me00x3rjdpn9.js"].map(t=>e.l(t))).then(()=>t(96055)))},829235,e=>{e.v(t=>Promise.all(["static/chunks/0uflc3qyl90kk.js"].map(t=>e.l(t))).then(()=>t(522353)))},769285,e=>{e.v(t=>Promise.all(["static/chunks/0r1gp68brlvq-.js"].map(t=>e.l(t))).then(()=>t(492890)))},349329,e=>{e.v(t=>Promise.all(["static/chunks/0s49tmqkyt6a9.js"].map(t=>e.l(t))).then(()=>t(989064)))},159629,e=>{e.v(t=>Promise.all(["static/chunks/0oy4nnn9kke74.js"].map(t=>e.l(t))).then(()=>t(970685)))},174309,e=>{e.v(t=>Promise.all(["static/chunks/178dl0~d4ac9~.js"].map(t=>e.l(t))).then(()=>t(590005)))},346330,e=>{e.v(t=>Promise.all(["static/chunks/11ya6lg0c5b8g.js"].map(t=>e.l(t))).then(()=>t(136591)))},757343,e=>{e.v(t=>Promise.all(["static/chunks/0s3t8l-6ml8c~.js"].map(t=>e.l(t))).then(()=>t(509668)))},334431,e=>{e.v(t=>Promise.all(["static/chunks/0lno5rxis33or.js"].map(t=>e.l(t))).then(()=>t(123485)))},653784,e=>{e.v(t=>Promise.all(["static/chunks/0ghtkq0atgguk.js"].map(t=>e.l(t))).then(()=>t(31850)))},349481,e=>{e.v(t=>Promise.all(["static/chunks/0fg9wjee6~ihc.js"].map(t=>e.l(t))).then(()=>t(548461)))},616106,e=>{e.v(t=>Promise.all(["static/chunks/0i402a5hq4g2x.js"].map(t=>e.l(t))).then(()=>t(975613)))},474918,e=>{e.v(t=>Promise.all(["static/chunks/0j5ta7js.2p.p.js"].map(t=>e.l(t))).then(()=>t(419571)))},145283,e=>{e.v(t=>Promise.all(["static/chunks/0meoeqrd~oxu~.js"].map(t=>e.l(t))).then(()=>t(292370)))},129087,e=>{e.v(t=>Promise.all(["static/chunks/17_r3i~nvwr.1.js"].map(t=>e.l(t))).then(()=>t(676212)))},946172,e=>{e.v(t=>Promise.all(["static/chunks/0qyx-uegeutz1.js"].map(t=>e.l(t))).then(()=>t(893951)))},459226,e=>{e.v(t=>Promise.all(["static/chunks/1130dxsnob.gi.js"].map(t=>e.l(t))).then(()=>t(521100)))},868787,e=>{e.v(t=>Promise.all(["static/chunks/077f3p4kp72-g.js"].map(t=>e.l(t))).then(()=>t(730638)))},896798,e=>{e.v(t=>Promise.all(["static/chunks/0d6yq7etlhepx.js"].map(t=>e.l(t))).then(()=>t(361201)))},347471,e=>{e.v(t=>Promise.all(["static/chunks/0h...m-sh7zy2.js"].map(t=>e.l(t))).then(()=>t(606897)))},43188,e=>{e.v(t=>Promise.all(["static/chunks/0h55f-vjekgfn.js"].map(t=>e.l(t))).then(()=>t(989412)))},605870,e=>{e.v(t=>Promise.all(["static/chunks/0aj0sf2t6hovn.js"].map(t=>e.l(t))).then(()=>t(306455)))}]);