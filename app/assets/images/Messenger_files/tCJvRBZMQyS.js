if (self.CavalryLogger) { CavalryLogger.start_js(["FabQA"]); }

__d("MessengerFromViewerUtils",["CurrentUser","MercuryIDs"],(function a(b,c,d,e,f,g){"use strict";function h(i){return i.author===c("MercuryIDs").getParticipantIDFromUserID(c("CurrentUser").getID())}f.exports={isFromViewer:h}}),null);