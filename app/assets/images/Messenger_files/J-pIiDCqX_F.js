if (self.CavalryLogger) { CavalryLogger.start_js(["t1KjX"]); }

__d("Number.react",["React","formatNumber"],(function a(b,c,d,e,f,g){var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.render=function(){"use strict";return c("React").createElement("span",null,c("formatNumber").withThousandDelimiters(this.props.value,this.props.decimals))};function k(){"use strict";h.apply(this,arguments)}k.defaultProps={decimals:0};k.propTypes={value:j.number.isRequired,decimals:j.number};f.exports=k}),null);