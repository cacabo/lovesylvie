if (self.CavalryLogger) { CavalryLogger.start_js(["LJPVk"]); }

__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function a(b,c,d,e,f,g){var h=function h(event){var i=event.getTarget();c("FlipDirection").setDirection(i)};c("Event").listen(document.documentElement,{keyup:h,input:h})}),null);