(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d"),a("0mN4");var r=a("MPoP"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),d=a.n(s),o=a("p3AD");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2.5)}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(o.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,a.name)," ",a.summary," ",n.a.createElement("a",{href:"https://github.com/"+i.github},"Github")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(R,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},R=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,w=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,o.default)({opacity:O?1:0,transition:z?"opacity "+y+"ms":"none"},d),T="boolean"==typeof b?"lightgray":b,C={transitionDelay:y+"ms"},W=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&C,{},d,{},f),N={title:t,alt:this.state.isVisible?"":a,style:W,className:g,itemProp:v};if(m){var M=m,P=p(m);return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&C)}),P.base64&&l.default.createElement(x,{ariaHidden:!0,src:P.base64,spreadProps:N,imageVariants:M,generateSources:I}),P.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,src:P.tracedSVG,spreadProps:N,imageVariants:M,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,E(M),l.default.createElement(R,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,o.default)({alt:a,title:t,loading:w},P,{imageVariants:M}))}}))}if(h){var j=h,k=p(h),H=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},z&&C)}),k.base64&&l.default.createElement(x,{ariaHidden:!0,src:k.base64,spreadProps:N,imageVariants:j,generateSources:I}),k.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,src:k.tracedSVG,spreadProps:N,imageVariants:j,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,E(j),l.default.createElement(R,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,o.default)({alt:a,title:t,loading:w},k,{imageVariants:j}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:B,sizes:T,fixed:c.default.oneOfType([B,c.default.arrayOf(B)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=z;t.default=C},MPoP:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADxklEQVQ4y3XT7U9TVxgAcP6FffQLWRaUTOMkCyE4EeygLV1RoFgLwtQxEATB4qrgMrHgBEffhI7RQcVsASkwJbohgitFpBRkpR1QpNQWkZe20PvW+9aWWnap2SwunNzcDyfnd57nPHmeMAiC3BhGfRAMgwAAgiD0v0VtwjDs8fmof+h+GIwgtrk5y4yJwoTP58Zx6jBEXQMhAIJCbhSEYAQnnA77750ddrsdQZB3+PXCwi0uW5rOvJnF621qtBonQTeGerwk5PQsWxCbGVl3wEs20ZeZqR/vtprnUAz7L7swh2Otp+T07I8lvcW81pjIsYxYsOXafHvDOD/TXMyCi5gr/LTuE0mXInfdYMROP9NgJLmV1luMen2G+53T4ny/4S6pLA9UcxbKmFr23r8zDowx90wxIobiwu/GhffSI37LTjCNaFAiBENUCWBktUNCTncFrI/e3DlPVrA2BCzXBTZ8Ns6atnfo848mMqJGeLFaXrRtYtS9DVOVxIkV/Tg8/GvA1PWmIcfz7dHZ/GNDWfS+1ENWKn7S7jZ61A/Mw120fUttjbDXF4KDC6ASeN7n76/brM8GBKx5pfiBQlzAjHnB/dT8RWTn8YTyQl5HXropdZ99chTGSSjogxgEQJQgLBMBZZG/JnPjSspm5QmvOA8Qcr1CjruU8WcmXZWbZjwZq038cKaWT2UKBQsegmcHA4p8WFb4QpprrMxAuqsCBtWmrtVw6zt6NJ0RdbhPcFx7mT2rvAGjWAjeercbW31JNpesliUvKi4s9d/EXz4gltWopW/6vrQy+2hDaZauqdjQInS+ssBuNBQHF9V7ry2udhFed9qhvOzS1CO6n51P5YsD4hlVxUj9WX1z1dahf8Nux8EuB71+90MFUMZca7u68lBolH+lFefoGgsGChKnbstQ3wbocr1rz20YcEEYAZqNCyej58/Er7eXv7pX8Vx+ZrCS03owXN99B/NugMBOmMqHmps1p0mUr47fNcraP998Tt/0de/5pCuffDDw+BePxw/siIOVhxFyZW3sr8Gi/mraIyF7WHJKdZFRnhvR01NLEH4QBHbGEDW6mH3VOGmseKYX1F6Pbyn+TFJ4kM3a8301XaftwHDf1szugAFqrheX1erhi2Pj/EvfJHCP0Dk0Gpezv0pI+0mSoBvtxDDybfz3MHUlAoKLxjnRHxr+E3Ve++3k9JT0IzHJkupDohpaUz1TIWdZbVMoilP+PUz1OA6sj+gNgidPSzWDBZPjOXLRKQb9WKMsUSZLkUpT62riVV1Xgxj8BzoXeujp6w+2AAAAAElFTkSuQmCC","width":50,"height":50,"src":"/static/62c15bb5dd224831642b55d87b7f2cfb/8ba1e/avatar.png","srcSet":"/static/62c15bb5dd224831642b55d87b7f2cfb/8ba1e/avatar.png 1x,\\n/static/62c15bb5dd224831642b55d87b7f2cfb/f937a/avatar.png 1.5x,\\n/static/62c15bb5dd224831642b55d87b7f2cfb/71eb7/avatar.png 2x"}}},"site":{"siteMetadata":{"author":{"name":"许两会","summary":"生活和工作在深圳的前端工程师。作为一名工程师，总要表达点什么。"},"social":{"twitter":"twomeetings","github":"twomeetings"}}}}}')},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6Gk8"),d=a("Bl7J"),o=a("vrFN"),l=a("p3AD");t.default=function(e){var t=e.data,a=e.location,r=t.site.siteMetadata.title,c=t.allMarkdownRemark.edges;return i.a.createElement(d.a,{location:a,title:r},i.a.createElement(o.a,{title:"All posts"}),i.a.createElement(s.a,null),c.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("article",{key:t.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",{style:{marginBottom:Object(l.a)(1/4)}},i.a.createElement(n.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))};var c="813034310"}}]);
//# sourceMappingURL=component---src-pages-index-js-867396df767227875fb5.js.map