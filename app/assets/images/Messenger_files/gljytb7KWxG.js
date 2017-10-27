if (self.CavalryLogger) { CavalryLogger.start_js(["M\/70J"]); }

__d("messengerCustomColorUtilsRe",["cssVar","CurrentUser"],(function a(b,c,d,e,f,g,h){"use strict";function i(j){var k=j.custom_color,l=0;if(k==null)l=1;else if(k==="")l=1;else return k;if(l===1){var m=+c("CurrentUser").isWorkUser();if(m!==0)return"#1479fb";else return"#0084ff"}}g.customColorOrBlue=i}),null);