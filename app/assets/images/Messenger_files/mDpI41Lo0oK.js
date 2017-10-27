if (self.CavalryLogger) { CavalryLogger.start_js(["w762U"]); }

__d("FBRTCCallSummaryUploader",["Banzai","FBRTCCallSummary","FBRTCCallSummaryStore"],(function a(b,c,d,e,f,g){var h={init:function i(){var j=c("FBRTCCallSummaryStore").getInstance();c("Banzai").subscribe(c("Banzai").SEND,function(){c("FBRTCCallSummary").logSavedSummaries(j)})}};f.exports=h}),null);