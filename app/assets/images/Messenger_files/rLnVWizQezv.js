if (self.CavalryLogger) { CavalryLogger.start_js(["dlcVj"]); }

__d("MercurySyncNewMessageTransformer",["FBID","IrisProtocolMessageLifetime","MercuryActionType","MercuryConfig","MercuryIDs","MercuryMessageCustomizations","MercuryProfileRanges","MercuryTimestamp","MessagingTag","PageCommItemStatus","messengerRealtimeAttachmentTransformerRe"],(function a(b,c,d,e,f,g){"use strict";var h=function h(j){var k={};try{k=JSON.parse(j)}catch(l){}return k};function i(j,k){var l=parseInt(k.messageMetadata.timestamp,10),m=c("MercuryTimestamp").getFormatedTimestamp(l),n=k.messageMetadata.skipBumpThread,o=j!==k.messageMetadata.actorFbId,p=[];if(k.attachments)p=k.attachments.map(function(u){var v=u.mercury,w=v.extensible_attachment,x=v.blob_attachment,y=v.sticker_attachment;if(!w&&!x&&!y)return null;var z=c("FBID").isUser(j),A=[];if(w)A=c("messengerRealtimeAttachmentTransformerRe").transform(j,{extensible_attachment:w},z);else if(x)A=c("messengerRealtimeAttachmentTransformerRe").transform(j,{blob_attachments:[x]},z);else A=c("messengerRealtimeAttachmentTransformerRe").transform(j,{sticker:y});return A.length>0?A[0]:null});var q=!c("FBID").isUser(j);p=p.filter(Boolean);var r=k.messageMetadata.tags?k.messageMetadata.tags[0]:undefined,s=null;if(k.data&&k.data.adminSignatureCreatorID){var t=k.data;s={creatorID:t.adminSignatureCreatorID||null,creatorName:t.adminSignatureCreatorName||null,creatorType:t.adminSignatureCreatorType||null,labelType:t.adminSignatureLabelType||null,pageID:t.adminSignaturePageID||null,profileURI:t.adminSignatureProfileURI||null}}return{message_id:k.messageMetadata.messageId,threading_id:null,offline_threading_id:k.messageMetadata.offlineThreadingId,author:c("MercuryIDs").getParticipantIDFromUserID(k.messageMetadata.actorFbId),author_email:k.messageMetadata.actorFbId+"@facebook.com",ephemeral_ttl_mode:k.ttl?c("IrisProtocolMessageLifetime")[k.ttl]:0,timestamp:l,is_unread:o,is_filtered_content:false,is_filtered_content_bh:false,is_filtered_content_account:false,is_filtered_content_quasar:false,is_filtered_content_invalid_app:false,source:r,tags:k.messageMetadata.tags,is_spoof_warning:false,folder:c("MessagingTag").INBOX,thread_fbid:k.messageMetadata.threadKey.threadFbId,other_user_fbid:k.messageMetadata.threadKey.otherUserFbId,body:k.body!==undefined?k.body:"",html_body:null,subject:null,has_attachment:p.length>0,attachments:p,ranges:undefined,thread_id:null,action_type:c("MercuryActionType").USER_GENERATED_MESSAGE,is_from_iris:true,is_sponsored:!!(k.data&&k.data.is_sponsored&&k.data.is_sponsored==="true"),commerce_message_type:k.data?k.data.commerce_message_type:null,customizations:k.data&&k.data.customization?c("MercuryMessageCustomizations").parseCustomizations(k.data.customization):null,platform_xmd:k.data&&k.data.platform_xmd?k.data.platform_xmd:null,profile_ranges:c("MercuryProfileRanges").extractFromDelta(k),message_source:k.data&&k.data.message_source_data?h(k.data.message_source_data).message_source:null,skip_bump_thread:n,montage_reply_data:k.data&&k.data.montage_reply_data?h(k.data.montage_reply_data):null,meta_ranges:k.data&&k.data.meta_ranges?h(k.data.meta_ranges):null,creator_info:s,comm_status:q?c("PageCommItemStatus").TODO:null}}f.exports={transform:i}}),null);