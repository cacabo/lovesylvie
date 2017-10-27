if (self.CavalryLogger) { CavalryLogger.start_js(["dvL\/\/"]); }

__d("createCharacterList",["CharacterMetadata","immutable"],(function a(b,c,d,e,f,g){"use strict";var h=c("immutable").List;function i(j,k){var l=j.map(function(m,n){var o=k[n];return c("CharacterMetadata").create({style:m,entity:o})});return h(l)}f.exports=i}),null);