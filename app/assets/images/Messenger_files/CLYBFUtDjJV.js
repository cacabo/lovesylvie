if (self.CavalryLogger) { CavalryLogger.start_js(["9I5Pd"]); }

__d("messengerThreadlistReact",["cx","csx","fbt","bs_array","bs_block","bs_curry","React","Parent","utilsRe","bs_caml_obj","ReactDOM","debounce","linkReact","bs_caml_array","bs_pervasives","CurrentUser","ReasonReact","bs_js_primitive","MessagingTag","MercuryConfig","MessengerView","MercuryFilters","MessengerActions","MercuryThreadInfo","KeyEventController","SubscriptionsHandler","chatSidebarSheetReact","messengerSpinnerReact","messageRequestLoggerRe","MessengerTypeaheadUtils","MessengerComposerActions","MercuryTypeaheadConstants","MessengerSearchFunnelLogger","messengerNewMessagesNoticeReact","messengerThreadlistLinkRowReact","messengerFlexScrollableAreaReact","workchatThreadListInviteRowReact","messengerMessageRequestsInfoReact","messengerThreadListGridWrapperReact","messengerGraphQLSearchTypeaheadReact","MessengerSearchFunnelLoggerConstants","messengerThreadlistRowContainerReact","messengerThreadlistNewMessageRowReact","workChatThreadlistNewsfeedActionReact","messengerThreadlistMessageRequestsRowReact"],(function aa(ba,a,ca,da,ea,b,fa,ga,c){"use strict";function d(u,v,w){if(w)if(u.length>0&&v.length>0){var x=a("bs_caml_array").caml_array_get(a("bs_caml_array").caml_array_get(u,0),0),y=a("bs_caml_array").caml_array_get(a("bs_caml_array").caml_array_get(v,0),0);if(x.unread_count>0&&x.thread_id!==w[0]&&x!==y)return+a("MercuryThreadInfo").isMuted(x);else return 0}else return 0;else return 0}function e(u,v){var w=+u.ctrlKey,x=+u.metaKey,y=+u.shiftKey,z=+a("KeyEventController").filterEventTypes(u,v),A=+a("KeyEventController").filterEventTargets(u,v),B=a("Parent").bySelector(u.target,"._150g");if(w!==0||x!==0||y!==0||!(z!==0&&A!==0&&B==null))return 0;else return 1}function f(u){return a("bs_block").__(3,[u])}function g(u,v,w){var x=w.findIndex(function(z){var A=z.length;if(A!==1)if(A!==0&&u&&a("bs_caml_array").caml_array_get(z,0).thread_id===u[0])return 1;else return 0;else{var B=z[0];if(u&&B.thread_id===u[0])return 1;else return 0}}),y=a("bs_pervasives").min(a("bs_pervasives").max(x+v|0,0),w.length-1|0);return a("bs_caml_array").caml_array_get(a("bs_caml_array").caml_array_get(w,y),0).thread_id}function h(u){return a("bs_block").__(4,[u])}function i(u,v){v.preventDefault();return a("bs_block").__(2,[u])}function j(u){u.preventDefault();return 4}function k(){a("MessengerSearchFunnelLogger").startFunnel("WWW_MESSENGER_SEARCH_SESSION_FUNNEL");return 0}function l(){a("MessengerSearchFunnelLogger").endFunnel("WWW_MESSENGER_SEARCH_SESSION_FUNNEL");return 1}function m(u){return a("bs_block").__(1,[u.target.value])}function n(u,v){var w=v[4][6];if(w){a("MessengerTypeaheadUtils").scrollEntryIntoView(u,w[0]);return 0}else return 0}function o(u){u.preventDefault();a("MessengerActions").changeFolder(a("MessagingTag").OTHER);return 0}function p(u){u.preventDefault();a("MessengerActions").changeFolder(a("MessagingTag").INBOX);a("MessengerActions").changeFilter(a("MercuryFilters").ALL);return 0}function q(u,v,w){var x=[];a("bs_array").iter(function(y){var z=v[y];if(z!==undefined){var A=z[1],B=z[0];if(B==null)return 0;else{var C=a("ReactDOM").findDOMNode(B).getBoundingClientRect();if(C.top>u.top-10&&C.bottom<u.bottom+10){x.push({threadID:A.thread_id,unread:+(A.unread_count>0)});return 0}else return 0}}else return 0},Object.keys(v));if(x.length)return a("messageRequestLoggerRe").logItemImpression(x,w);else return 0}var r=a("debounce")(function(u){var v=u[6];if(v){var w=v[0].getArea().getElement().getBoundingClientRect();q(w,u[7],a("MessagingTag").PENDING);return q(w,u[8],a("MessagingTag").OTHER)}else return 0},500);function s(u,v,w,x){var y=v[4],z=y[0],A=z&&z[0]===a("bs_caml_array").caml_array_get(x,0).thread_id?true:false;return a("ReasonReact").element([a("bs_caml_array").caml_array_get(x,0).thread_id],0,a("messengerThreadlistMessageRequestsRowReact").make(w,A,a("bs_curry")._1(v[3],f),[],x,u,[]))}function ha(u,v,w){var x=w[4];if(u.folder===a("MessagingTag").PENDING){x[7][u.thread_id]=[v,u];return 0}else if(u.folder===a("MessagingTag").OTHER){x[8][u.thread_id]=[v,u];return 0}else return 0}function ia(u,v,w,x,y,z){var A=w[4],B=u&&u[0]===z.thread_id?1:0,C=A[0],D=C?1:0,E=A[0],F=E&&E[0]===z.thread_id?1:0,G=B!==0?D!==0&&F===0?0:1:F!==0?1:0,H=+(z.folder===a("MessagingTag").PENDING||z.folder===a("MessagingTag").OTHER);return a("ReasonReact").element([z.thread_id],[H!==0?a("bs_curry")._1(w[0],function(I,J){return ha(z,I,J)}):function(){return 0}],a("messengerThreadlistRowContainerReact").make([x],[B],[F],[A[2]],[G],a("bs_curry")._1(w[3],f),a("bs_curry")._1(w[0],n),z,v,y,[]))}function ja(u){return a("bs_block").__(0,[u==null?0:[u]])}function ka(u,v){var w=u[1],x=u[0],y=w==null?a("MessengerSearchFunnelLoggerConstants").OTHER:a("bs_caml_obj").caml_equal(w,a("MercuryTypeaheadConstants").FRIEND_TYPE)?a("MessengerSearchFunnelLoggerConstants").USER_CONTACT:a("bs_caml_obj").caml_equal(w,a("MercuryTypeaheadConstants").NON_FRIEND_TYPE)?a("MessengerSearchFunnelLoggerConstants").USER_NON_CONTACT:a("bs_caml_obj").caml_equal(w,a("MercuryTypeaheadConstants").FB4C_TYPE)?a("MessengerSearchFunnelLoggerConstants").COWORKER:a("bs_caml_obj").caml_equal(w,a("MercuryTypeaheadConstants").GAME_TYPE)?a("MessengerSearchFunnelLoggerConstants").GAME:a("bs_caml_obj").caml_equal(w,a("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE)||a("bs_caml_obj").caml_equal(w,a("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE)||a("bs_caml_obj").caml_equal(w,a("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE)?a("MessengerSearchFunnelLoggerConstants").PAGE:a("MessengerSearchFunnelLoggerConstants").OTHER;a("MessengerActions").selectThread(x,w);a("MessengerSearchFunnelLogger").logResultSelection("WWW_MESSENGER_SEARCH_SESSION_FUNNEL",v[4][3],x,y);return 0}var t=a("ReasonReact").reducerComponentWithRetainedProps("MessengerThreadlistReact");function la(u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,oa){var K=function K(L,M,N){var O=N[5],G=O[0],P=typeof L==="number"?L!==0?G.length-1|0:(-G.length|0)-1|0:L[0],Q=+M.altKey,R=a("Parent").bySelector(M.target,"._4rv3"),S=N[4][0],T=a("Parent").bySelector(M.target,"._1ht1"),U=0;if(Q!==0)if(R==null)U=1;else{var V=O[4];if(V!==0)if(P===1&&G.length>0){a("MessengerActions").selectThread(a("bs_caml_array").caml_array_get(a("bs_caml_array").caml_array_get(G,0),0).thread_id,null);return 0}else return 0;else{var W=G.findIndex(function(Y){if(Y.length!==1)return 0;else{var Z=Y[0],Q=O[2];if(Q&&Q[0]===Z.thread_id)return 1;else return 0}});if(W!==-1){var X=a("bs_caml_array").caml_array_get(G,W+P|0);a("MessengerActions").selectThread(a("bs_caml_array").caml_array_get(X,0).thread_id);if(O[1]&&W===0&&P===-1)a("MessengerActions").changeDetailView(a("MessengerView").DETAIL.COMPOSE);if(W===(G.length-1|0))return a("bs_curry")._1(O[3],0);else return 0}else return 0}}else U=1;if(U===1)if(S&&!(T==null)){M.preventDefault();return a("bs_curry")._2(N[3],h,P)}else return 0},pa=function pa(){a("MessengerSearchFunnelLogger").logClearQuery("WWW_MESSENGER_SEARCH_SESSION_FUNNEL");if(v)a("bs_curry")._1(v[0],0);return 2},qa=function qa(){return 3},ra=function ra(L,oa){L.stopPropagation();a("MessengerComposerActions").exitComposeState();if(B){var M=G.find(function(N){var O=N.length;if(O!==1)if(O!==0)return+(a("bs_js_primitive").undefined_to_opt(N.find(function(M){return+(M.unread_count===0)}))===0);else return 0;else{var P=N[0];return+(P.unread_count===0)}});a("MessengerActions").selectThread(M!==undefined?a("bs_caml_array").caml_array_get(M,0).thread_id:null,null);return 0}else return 0},sa=function sa(L,oa){L.preventDefault();return a("bs_curry")._1(D,0)},ta=function ta(z,A,L){var M=0,N=0;if(J!==0)return null;else if(z)if(z[0]!==0)return null;else N=2;else N=2;if(N===2)if(A)if(A[0]!==0)return a("React").createElement("div",{className:"_19hf"},a("ReasonReact").element(0,0,a("messengerSpinnerReact").make(0,0,0,[])));else M=1;else M=1;if(M===1)return a("React").createElement("div",{className:"_19hf"},a("ReasonReact").element(0,0,a("linkReact").make(0,0,0,0,0,["#"],[a("bs_curry")._1(L[0],sa)],0,0,0,0,[-1],0,0,c._("Show Older"))))},ua=function ua(L){if(G.length)return a("ReasonReact").element(0,0,a("messengerThreadListGridWrapperReact").make(c._("Conversation List"),a("bs_array").map(function(R){if(R.length!==1)return s(H,L,I,R);else{var S=R[0];return ia(u,H,L,x,J,S)}},G)));else{var M;if(x===a("MessagingTag").INBOX){var N=+(w===a("MercuryFilters").UNREAD);M=N!==0?c._("No unread messages found."):c._("No messages found.")}else if(x===a("MessagingTag").PENDING){var O=+a("MercuryConfig").AggregationStyle;M=O!==0?c._("No Connection requests found."):c._("No Message requests found.")}else M=c._("No filtered requests found.");var P=+(x!==a("MessagingTag").INBOX||w!==a("MercuryFilters").ALL),Q=P!==0?a("ReasonReact").element(0,0,a("linkReact").make(0,0,0,0,0,0,[p],0,0,0,0,0,0,0,c._("Return to inbox."))):null;return a("React").createElement("div",{className:"_3blk"},M,a("React").createElement("div",{className:"_3bll"},Q))}};return[t[0],t[1],t[2],function(L){var M=L[4],N=M[6],O=N?+N[0].isScrolledToTop():0,P=d(G,L[5][0],u),Q=0;if(O!==0)Q=1;else if(P!==0)if(E){var R=E[0],S=M.slice(),T=+(R.length===0);S[3]=T!==0?R:M[3];S[4]=1;return S}else return M;else Q=1;if(Q===1)if(E){var U=E[0],V=M.slice(),W=+(U.length===0);V[3]=W!==0?U:M[3];V[4]=M[4]&&1-O;return V}else return M},function(L){var M=L[4],N=new(a("SubscriptionsHandler"))(),O=[-1],P=[1],Q=[-5],R=[5];N.addSubscriptions(a("KeyEventController").registerKey("UP",a("bs_curry")._1(L[0],function(S,T){return K(O,S,T)}),e),a("KeyEventController").registerKey("DOWN",a("bs_curry")._1(L[0],function(S,T){return K(P,S,T)}),e),a("KeyEventController").registerKey("PAGE_UP",a("bs_curry")._1(L[0],function(S,T){return K(Q,S,T)})),a("KeyEventController").registerKey("PAGE_DOWN",a("bs_curry")._1(L[0],function(S,T){return K(R,S,T)})),a("KeyEventController").registerKey("HOME",a("bs_curry")._1(L[0],function(S,T){return K(0,S,T)})),a("KeyEventController").registerKey("END",a("bs_curry")._1(L[0],function(S,T){return K(1,S,T)})),a("KeyEventController").registerKey("LEFT",a("bs_curry")._1(L[3],function(S){return i(0,S)})),a("KeyEventController").registerKey("RIGHT",a("bs_curry")._1(L[3],function(S){return i(1,S)})));r(M);M[5][0]=[N];return 0},function(L){var M=L[1],N=L[0],O=+(M[4][1]!==N[4][1]),P=y&&1-N[5][1],Q=M[4][6];if(O!==0&&P!==0&&Q){Q[0].scrollToTop();return 0}else return 0},function(L){var M=L[4][5][0];if(M){M[0].release();return 0}else return 0},t[7],t[8],function(L){var M=L[4],N=M[4]&&1-M[1],O=c._("Conversations"),P=E?1:0,Q=function Q(Y,Z){return a("bs_curry")._2(L[0],ka,[Y,Z])},R=+(x===a("MessagingTag").INBOX),S;if(R!==0){var T=+a("CurrentUser").isWorkUser();S=a("ReasonReact").element(0,0,a("messengerGraphQLSearchTypeaheadReact").make("_5iwm"+(M[1]||+(M[3].length>0)?" _5iwn":"")+" _150g",1,0,0,0,[+(M[3]==="")&&1-P],[P],[M[1]],a("bs_curry")._1(L[3],l),a("bs_curry")._1(L[3],m),a("bs_curry")._1(L[3],pa),a("bs_curry")._1(L[3],k),a("bs_curry")._1(L[0],n),Q,T!==0?c._("Search Workplace Chat"):c._("Search Messenger"),[M[3]],1,1,"_11_d",H,[]))}else S=null;var U=+a("CurrentUser").isWorkUser()&&1-M[1],V=+(x===a("MessagingTag").PENDING),W=+(x===a("MessagingTag").INBOX&&C.length>0),X=+(x===a("MessagingTag").PENDING);return a("React").createElement("div",{className:"_2xhi"},a("ReasonReact").element(0,0,a("chatSidebarSheetReact").make("_p0g",[])),a("ReasonReact").element(0,0,a("messengerNewMessagesNoticeReact").make(N,a("bs_curry")._1(L[3],j),0,[])),a("ReasonReact").element(0,[a("bs_curry")._1(L[3],ja)],a("messengerFlexScrollableAreaReact").make([a("bs_curry")._1(L[3],qa)],[S,U!==0?a("ReasonReact").element(0,0,a("workchatThreadListInviteRowReact").make([])):null,V!==0?a("ReasonReact").element(0,0,a("messengerMessageRequestsInfoReact").make([])):null,a("React").cloneElement(a("React").createElement("div",{className:M[1]&&1-P?"accessible_elem":"",role:"navigation"}),{"aria-label":O},W!==0?a("ReasonReact").element(0,0,a("messengerThreadlistMessageRequestsRowReact").make(I,false,a("bs_curry")._1(L[3],f),C,[],H,[])):null,y!==0?a("ReasonReact").element(0,0,a("messengerThreadlistNewMessageRowReact").make(B,a("bs_curry")._1(L[0],ra),[])):null,ua(L),X!==0?a("messengerThreadlistLinkRowReact").make(o):null,F?a("bs_curry")._1(F[0],0):ta(z,A,L))])),a("ReasonReact").element(0,0,a("workChatThreadlistNewsfeedActionReact").make([])))},function(){return[0,0,0,"",0,[0],0,{},{}]},[G,y,u,D,B],function(L,M){if(typeof L==="number")switch(L){case 0:var N=M.slice();return a("bs_block").__(0,[(N[1]=1,N)]);case 1:var O=M.slice();return a("bs_block").__(0,[(O[1]=0,O[3]="",O)]);case 2:var P=M.slice();return a("bs_block").__(0,[(P[3]="",P)]);case 3:if(M[1])return 0;else{var Q=M[6];if(Q){var R=Q[0],S=+R.isScrolledToBottom(),T=+R.isScrolledToTop(),U=M[4];if(S!==0){var V=0;if(T!==0)if(U!==0){var W=M.slice();return a("bs_block").__(3,[(W[4]=0,W),function($){a("bs_curry")._1(D,0);return r($[4])}])}else V=1;else V=1;if(V===1)return a("bs_block").__(2,[function($){a("bs_curry")._1(D,0);return r($[4])}])}else{var X=0;if(T!==0)if(U!==0){var Y=M.slice();return a("bs_block").__(3,[(Y[4]=0,Y),function($){return r($[4])}])}else X=1;else X=1;if(X===1)return a("bs_block").__(2,[function($){return r($[4])}])}}else return 0}break;case 4:var Z=M.slice();return a("bs_block").__(3,[(Z[4]=0,Z),function($){var Q=$[4][6];if(Q){Q[0].scrollToTop();return 0}else return 0}])}else switch(L.tag|0){case 0:var va=M.slice();return a("bs_block").__(1,[(va[6]=L[0],va)]);case 1:var wa=M.slice();return a("bs_block").__(0,[(wa[3]=L[0],wa)]);case 2:var xa=M.slice();return a("bs_block").__(0,[(xa[2]=L[0],xa)]);case 3:var ya=M.slice();return a("bs_block").__(0,[(ya[0]=[L[0]],ya)]);case 4:var za=M.slice();return a("bs_block").__(0,[(za[0]=[g(M[0],L[0],G)],za)])}},t[13]]}var ma=a("ReasonReact").wrapReasonForJs(t,function(u){var v=a("utilsRe").nullUndefinedBooleanToOptionBool(u.isComposing);return la(a("bs_js_primitive").null_undefined_to_opt(u.activeThreadID),a("bs_js_primitive").null_undefined_to_opt(u.clearQuery),u.filter,u.folder,v?v[0]:0,a("utilsRe").nullUndefinedBooleanToOptionBool(u.isLoaded),a("utilsRe").nullUndefinedBooleanToOptionBool(u.isLoading),+u.isNewMessageActive,u.newMessageRequestThreads,u.onLoadMoreRequest,a("bs_js_primitive").null_undefined_to_opt(u.queryString),a("bs_js_primitive").null_undefined_to_opt(u.renderLoadMore),a("bs_array").map(function(w){return[].concat(w)},u.threads),u.viewer,u.onAggregationClick,u.showAggregation,[])}),na=10;b.hasNewUnreadMessages=d;b.filterKeyEvent=e;b.handleThreadFocus=f;b.getFocusedThreadId=g;b.updateThreadFocus=h;b.handleActionsFocus=i;b.handleNewMessageNoticeClick=j;b.handleFocus=k;b.handleBlur=l;b.handleChange=m;b.handleScrollIntoView=n;b.handleFilteredRequestsClick=o;b.handleReturnToInboxClick=p;b.impressionOffset=na;b.logNodeImpressions=q;b.checkAndUpdateMessageRequestImpressions=r;b.renderAggregatedRequests=s;b.setter=ha;b.renderThread=ia;b.setScrollable=ja;b.handleSelect=ka;b.component=t;b.make=la;b.jsComponent=ma}),null);