if (self.CavalryLogger) { CavalryLogger.start_js(["AE476"]); }

__d("MercurySyncMarkFolderChangeTransformer",["MercuryActionType","MessagingTag"],(function a(b,c,d,e,f,g){"use strict";function h(i){return{action_type:c("MercuryActionType").CHANGE_FOLDER,other_user_fbid:i.threadKey.otherUserFbId,new_folder:c("MessagingTag").IRIS_MAPPING[i.folder]}}f.exports={transform:h}}),null);