if (self.CavalryLogger) { CavalryLogger.start_js(["hskbb"]); }

__d("randomInt",["invariant"],(function a(b,c,d,e,f,g,h){function i(j,k){var l=arguments.length;l>0&&l<=2||h(0);if(l===1){k=j;j=0}k=k;k>j||h(0);var m=this.random||Math.random;return Math.floor(j+m()*(k-j))}f.exports=i}),null);
__d("PresenceUtil",["CurrentUser","randomInt"],(function a(b,c,d,e,f,g){var h=c("randomInt")(0,4294967295)+1;function i(){return h}function j(){return c("CurrentUser").isLoggedInNow()}f.exports={getSessionID:i,hasUserCookie:j}}),null);