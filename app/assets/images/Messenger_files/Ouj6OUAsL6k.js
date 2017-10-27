if (self.CavalryLogger) { CavalryLogger.start_js(["c6hYs"]); }

__d("decodeEntityRanges",["UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";var h=c("UnicodeUtils").substr;function i(j,k){var l=Array(j.length).fill(null);if(k)k.forEach(function(m){var n=h(j,0,m.offset).length,o=n+h(j,m.offset,m.length).length;for(var p=n;p<o;p++)l[p]=m.key});return l}f.exports=i}),null);