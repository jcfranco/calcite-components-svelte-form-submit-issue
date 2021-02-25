function rgbToHex(r){var e=r.r,n=r.g,t=r.b;return("#"+e.toString(16).padStart(2,"0")+n.toString(16).padStart(2,"0")+t.toString(16).padStart(2,"0")).toLowerCase()}var hexChar=/^[0-9A-F]{1}$/i;var shortHandHex=/^#[0-9A-F]{3}$/i;var longhandHex=/^#[0-9A-F]{6}$/i;function isValidHex(r){return isShorthandHex(r)||isLonghandHex(r)}function isShorthandHex(r){return r&&r.length===4&&shortHandHex.test(r)}function isLonghandHex(r){return r&&r.length===7&&longhandHex.test(r)}function normalizeHex(r){r=r.toLowerCase();if(!r.startsWith("#")){r="#"+r}if(isShorthandHex(r)){return rgbToHex(hexToRGB(r))}return r}function hexToRGB(r){if(!isValidHex(r)){return null}r=r.replace("#","");if(r.length===3){var e=r.split(""),n=e[0],t=e[1],o=e[2];var a=parseInt(""+n+n,16);var s=parseInt(""+t+t,16);var i=parseInt(""+o+o,16);return{r:a,g:s,b:i}}var h=parseInt(r.slice(0,2),16);var l=parseInt(r.slice(2,4),16);var S=parseInt(r.slice(4,6),16);return{r:h,g:l,b:S}}var enumify=function(r){return r};var CSSColorMode=enumify({HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"});var ObjectColorMode=enumify({RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"});function parseMode(r){if(typeof r==="string"){if(r.startsWith("#")){var e=r.length;if(e===4||e===7){return CSSColorMode.HEX}if(e===5||e===9){return CSSColorMode.HEXA}}if(r.startsWith("rgba(")){return CSSColorMode.RGBA_CSS}if(r.startsWith("rgb(")){return CSSColorMode.RGB_CSS}if(r.startsWith("hsl(")){return CSSColorMode.HSL_CSS}if(r.startsWith("hsla(")){return CSSColorMode.HSLA_CSS}}if(typeof r==="object"){if(hasChannels(r,"r","g","b")){return hasChannels(r,"a")?ObjectColorMode.RGBA:ObjectColorMode.RGB}if(hasChannels(r,"h","s","l")){return hasChannels(r,"a")?ObjectColorMode.HSLA:ObjectColorMode.HSL}if(hasChannels(r,"h","s","v")){return hasChannels(r,"a")?ObjectColorMode.HSVA:ObjectColorMode.HSV}}return null}function hasChannels(r){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}return e.every((function(e){return e&&r&&""+e in r}))}function colorEqual(r,e){return(r===null||r===void 0?void 0:r.rgbNumber())===(e===null||e===void 0?void 0:e.rgbNumber())}export{CSSColorMode as C,isLonghandHex as a,hexChar as b,colorEqual as c,hexToRGB as h,isValidHex as i,normalizeHex as n,parseMode as p,rgbToHex as r};