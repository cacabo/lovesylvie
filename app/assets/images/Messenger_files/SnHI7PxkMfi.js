if (self.CavalryLogger) { CavalryLogger.start_js(["BEnit"]); }

__d("MercurySyncMessageDeleteTransformer",["MercuryActionType"],(function a(b,c,d,e,f,g){"use strict";function h(i){return{action_type:c("MercuryActionType").DELETE_MESSAGES,message_ids:i.messageIds,other_user_fbid:i.threadKey.otherUserFbId,thread_fbid:i.threadKey.threadFbId}}f.exports={transform:h}}),null);