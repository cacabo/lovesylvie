if (self.CavalryLogger) { CavalryLogger.start_js(["javeS"]); }

__d("MessageRequestUtils",["MessagingTag"],(function a(b,c,d,e,f,g){"use strict";var h={isMessageRequest:function i(j){return(j.folder===c("MessagingTag").PENDING||j.folder===c("MessagingTag").OTHER)&&j.can_reply},isFiltered:function i(j){return j.folder===c("MessagingTag").OTHER}};f.exports=h}),null);