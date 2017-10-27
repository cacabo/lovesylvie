if (self.CavalryLogger) { CavalryLogger.start_js(["TpuJn"]); }

__d("messageRequestLoggerRe",["MessengerMessageRequestsTypedLogger"],(function a(b,c,d,e,f,g){"use strict";function h(i,j){new(c("MessengerMessageRequestsTypedLogger"))().setSurface("inbox").setFolderType(j).setAction("message_requests_thread_impression").addToExtraData("threads",i).log();return 0}g.logItemImpression=h}),null);