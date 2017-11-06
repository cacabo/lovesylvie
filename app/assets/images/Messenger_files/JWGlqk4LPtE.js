if (self.CavalryLogger) { CavalryLogger.start_js(["FE1jy"]); }

__d("MercuryUnreadState",["invariant","MercuryFolders","LogHistory","KeyedCallbackManager","MercuryActionType","MercuryDispatcher","MercuryGlobalActionType","MercurySingletonProvider","MercuryThreadlistConstants","MercuryThreadIDMap","MessagingTag","MercuryServerRequests","MercuryThreadInformer","MercuryThreads","createObjectFrom"],(function a(b,c,d,e,f,g,h){"use strict";var i=(c("MercuryFolders").getSupportedFolders()||[]).filter(function(p){return p!==c("MessagingTag").ACTION_ARCHIVED}),j="unread_thread_hash",k="unseen_thread_list",l=c("MercuryThreadlistConstants").MAX_UNREAD_COUNT,m=c("LogHistory").getInstance("mercury_unread_state");n.getForFBID=function(p){return o.getForFBID(p)};n.get=function(){return o.get()};function n(p){this.$MercuryUnreadState1=p;this.$MercuryUnreadState2=c("MercuryServerRequests").getForFBID(this.$MercuryUnreadState1);this.$MercuryUnreadState3=c("MercuryThreadIDMap").getForFBID(this.$MercuryUnreadState1);this.$MercuryUnreadState4=c("MercuryThreadInformer").getForFBID(this.$MercuryUnreadState1);this.$MercuryUnreadState5=c("MercuryThreads").getForFBID(this.$MercuryUnreadState1);this.$MercuryUnreadState6=c("MercuryDispatcher").getForFBID(this.$MercuryUnreadState1);this.$MercuryUnreadState7={};this.$MercuryUnreadState8={};this.$MercuryUnreadState9={};this.$MercuryUnreadState10={};this.$MercuryUnreadState11={};i.forEach(function(q){this.$MercuryUnreadState9[q]=0;this.$MercuryUnreadState10[q]=false;this.$MercuryUnreadState11[q]=new(c("KeyedCallbackManager"))()}.bind(this));this.$MercuryUnreadState6.subscribe("update-unread",this.$MercuryUnreadState12.bind(this));this.$MercuryUnreadState6.subscribe("update-thread-ids",function(q,r){this.$MercuryUnreadState13(r)}.bind(this))}n.prototype.getUnreadCount=function(p){if(this.exceedsMaxCount(p)){m.error("unguarded_unread_count_fetch","{}");return 0}return this.$MercuryUnreadState14(p)};n.prototype.exceedsMaxCount=function(p){return this.$MercuryUnreadState10[p]||this.$MercuryUnreadState14(p)>l};n.prototype.markFolderAsRead=function(p){if(this.$MercuryUnreadState10[p]||this.$MercuryUnreadState14(p)>0)this.$MercuryUnreadState2.markFolderAsRead(p)};n.prototype.getIsThreadUnread=function(p,q){var r=q||c("MessagingTag").INBOX,s=this.$MercuryUnreadState15(r);return!!(s&&s[p])};n.prototype.$MercuryUnreadState16=function(p,q){this.$MercuryUnreadState11[p].setResource(j,q);this.$MercuryUnreadState11[p].setResource(k,Object.keys(q))};n.prototype.$MercuryUnreadState17=function(p,q){var r=this.$MercuryUnreadState11[p].executeOrEnqueue(j,q),s=this.$MercuryUnreadState11[p].getUnavailableResources(r);if(s.length)this.$MercuryUnreadState2.fetchUnreadThreadIDs(p)};n.prototype.$MercuryUnreadState15=function(p){return this.$MercuryUnreadState11[p].getResource(j)};n.prototype.$MercuryUnreadState14=function(p){var q=this.$MercuryUnreadState11[p].getResource(k);if(q)return q.length;else return this.$MercuryUnreadState9[p]};n.prototype.$MercuryUnreadState12=function(p,q){var r=void 0;(q.unread_thread_fbids||[]).forEach(function(s){r=s.folder;if(!this.$MercuryUnreadState18(r))return;var t=s.thread_fbids||[];t=t.concat(s.other_user_fbids||[]);var u=this.$MercuryUnreadState19(t);this.$MercuryUnreadState16(r,c("createObjectFrom")(u,true));if(u.length>l)this.$MercuryUnreadState10[r]=true;this.$MercuryUnreadState4.updatedUnreadState()}.bind(this));(q.message_counts||[]).forEach(function(s){if(s.unread_count===undefined)return;r=s.folder;if(s.unread_count>l){this.$MercuryUnreadState10[r]=true;this.$MercuryUnreadState16(r,{});this.$MercuryUnreadState4.updatedUnreadState()}else{this.$MercuryUnreadState9[r]=s.unread_count;if(this.$MercuryUnreadState9[r]===0)this.$MercuryUnreadState16(r,{});this.$MercuryUnreadState4.updatedUnreadState()}}.bind(this));(q.global_actions||[]).forEach(function(s){if(s.action_type===c("MercuryGlobalActionType").MARK_ALL_READ)this.$MercuryUnreadState20(s.folder,s.timestamp)}.bind(this));(q.actions||[]).forEach(function(s){var t=c("MercuryActionType"),u=s.other_user_fbid?s.other_user_fbid:s.thread_fbid,v=s.thread_id?s.thread_id:u;if(s.action_type==t.DELETE_THREAD)i.forEach(function(x){this.$MercuryUnreadState21(x,v)}.bind(this));else if(s.action_type==t.CHANGE_ARCHIVED_STATUS||s.action_type==t.CHANGE_FOLDER){var w=this.$MercuryUnreadState5.getThreadMetaNow(s.thread_id);!!w||h(0);r=c("MercuryFolders").getFromMeta(w);if(this.$MercuryUnreadState18(r)&&w.unread_count>0)this.$MercuryUnreadState22(r,v);i.forEach(function(x){if(x!=r)this.$MercuryUnreadState21(x,v)}.bind(this))}else{r=this.$MercuryUnreadState23(s);if(!this.$MercuryUnreadState18(r))return;if(s.action_type==t.CHANGE_READ_STATUS)if(s.mark_as_read)this.$MercuryUnreadState21(r,v,s.timestamp);else this.$MercuryUnreadState22(r,v,s.timestamp);else if(s.action_type==t.USER_GENERATED_MESSAGE||s.action_type==t.LOG_MESSAGE)if(s.is_unread)this.$MercuryUnreadState22(r,v,s.timestamp)}}.bind(this))};n.prototype.$MercuryUnreadState22=function(p,q,r){if(this.$MercuryUnreadState10[p])return;this.$MercuryUnreadState17(p,function(s){var t=this.$MercuryUnreadState7[p]||0,u=this.$MercuryUnreadState8[q]||0,v=r||Number.POSITIVE_INFINITY;if(v>=t&&v>=u&&!s[q]){s[q]=r||0;this.$MercuryUnreadState16(p,s);this.$MercuryUnreadState4.updatedUnreadState()}}.bind(this))};n.prototype.$MercuryUnreadState21=function(p,q,r){if(this.$MercuryUnreadState10[p])return;this.$MercuryUnreadState17(p,function(s){if(r){var t=this.$MercuryUnreadState8[q];if(!t||t<r)this.$MercuryUnreadState8[q]=r}var u=s[q];if(r&&typeof u=="number"&&r<u)return;if(q in s){delete s[q];this.$MercuryUnreadState16(p,s);this.$MercuryUnreadState4.updatedUnreadState()}}.bind(this))};n.prototype.$MercuryUnreadState20=function(p,q){this.$MercuryUnreadState10[p]=false;this.$MercuryUnreadState16(p,{});this.$MercuryUnreadState7[p]=Math.max(this.$MercuryUnreadState7[p]||0,q||0);this.$MercuryUnreadState4.updatedUnreadState()};n.prototype.$MercuryUnreadState19=function(p){return p.map(this.$MercuryUnreadState3.convertThreadIDIfAvailable,this.$MercuryUnreadState3)};n.prototype.$MercuryUnreadState13=function(p){i.forEach(function(q){var r=this.$MercuryUnreadState15(q);if(!r)return;for(var s in p){var t=p[s];if(r[s]){r[t]=r[s];delete r[s]}}this.$MercuryUnreadState16(q,r)}.bind(this))};n.prototype.$MercuryUnreadState23=function(p){var q=p.thread_id?this.$MercuryUnreadState5.getThreadMetaNow(p.thread_id):null;return q?c("MercuryFolders").getFromMeta(q):p.folder?p.folder:""};n.prototype.$MercuryUnreadState18=function(p){return!!p&&i.includes(p)};var o=new(c("MercurySingletonProvider"))(n);f.exports=n}),null);