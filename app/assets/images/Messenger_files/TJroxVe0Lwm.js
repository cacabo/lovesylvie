if (self.CavalryLogger) { CavalryLogger.start_js(["f8tpL"]); }

__d("RedditLinkMatcher",[],(function a(b,c,d,e,f,g){"use strict";var h=new RegExp("(^|\\s)(\\/[ru]\\/\\w{1,21})(?:\\b)","i"),i=function i(l){var m=h.exec(l);if(m===null)return null;return{lnk:m[2],idx:m.index+m[1].length}},j=function j(l){return h.exec(l)!==null},k={match:i,isMatch:j};f.exports=k}),null);