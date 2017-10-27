if (self.CavalryLogger) { CavalryLogger.start_js(["0RleB"]); }

__d("MercurySyncThreadDeleteTransformer",["MercuryActionType"],(function a(b,c,d,e,f,g){"use strict";function h(i){return i.threadKeys.map(function(j){return{action_type:c("MercuryActionType").DELETE_THREAD,other_user_fbid:j.otherUserFbId,thread_fbid:j.threadFbId}})}f.exports={transform:h}}),null);