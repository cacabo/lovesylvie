if (self.CavalryLogger) { CavalryLogger.start_js(["1xoXr"]); }

__d("shouldNotRenderSegoe",["MessengerConfig","UserAgent"],(function a(b,c,d,e,f,g){"use strict";var h=new RegExp("[\u0530-\u05f4\u10a0-\u10ff]"),i=c("UserAgent").isBrowser("Chrome")&&c("UserAgent").isPlatform("Windows 10");f.exports=function j(k){return!c("MessengerConfig").SegoeUIDisabled&&i&&h.test(k)}}),null);