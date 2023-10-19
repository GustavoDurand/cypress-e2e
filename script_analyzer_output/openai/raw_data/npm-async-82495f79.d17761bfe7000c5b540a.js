"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8157],{51181:(e,o,t)=>{t.d(o,{Z:()=>z});var n=t(50113),i=t(34206),r=t(61048),s=t(37462),u=t(72762),a=t(79017),l=t(45003),c=t(31738),p=t(13489),d=t(18946),f=t(55820),h=t(39252),m=t(34992),v=t(94896),g=t(28507),T=t(16765),M=t.n(T);function C(e,o,t){return t?e[0]===o[0]:e[0]===o[0]&&e[1]===o[1]}var y=t(71542),D=t(81852),k=t(29190),w=t(84991);function P(e){var o=e.prefixCls,t=e.motion,n=e.animation,i=e.transitionName;return t||(n?{motionName:"".concat(o,"-").concat(n)}:i?{motionName:i}:null)}function x(e){var o=e.prefixCls,t=e.visible,r=e.zIndex,s=e.mask,u=e.maskMotion,a=e.maskAnimation,l=e.maskTransitionName;if(!s)return null;var p={};return(u||l||a)&&(p=(0,n.Z)({motionAppear:!0},P({motion:u,prefixCls:o,transitionName:l,animation:a}))),c.createElement(w.Z,(0,i.Z)({},p,{visible:t,removeOnLeave:!0}),(function(e){var t=e.className;return c.createElement("div",{style:{zIndex:r},className:M()("".concat(o,"-mask"),t)})}))}var b=t(28324),E=t(11733),O=t.n(E),Z=t(86015),N=["measure","align",null,"motion"],H=c.forwardRef((function(e,o){var t=e.visible,r=e.prefixCls,s=e.className,u=e.style,a=e.children,l=e.zIndex,p=e.stretch,f=e.destroyPopupOnHide,h=e.forceRender,m=e.align,v=e.point,g=e.getRootDomNode,T=e.getClassNameFromAlign,C=e.onAlign,D=e.onMouseEnter,k=e.onMouseLeave,x=e.onMouseDown,E=e.onTouchStart,H=(0,c.useRef)(),S=(0,c.useRef)(),A=(0,c.useState)(),V=(0,y.Z)(A,2),R=V[0],L=V[1],F=function(e){var o=c.useState({width:0,height:0}),t=(0,y.Z)(o,2),n=t[0],i=t[1];return[c.useMemo((function(){var o={};if(e){var t=n.width,i=n.height;-1!==e.indexOf("height")&&i?o.height=i:-1!==e.indexOf("minHeight")&&i&&(o.minHeight=i),-1!==e.indexOf("width")&&t?o.width=t:-1!==e.indexOf("minWidth")&&t&&(o.minWidth=t)}return o}),[e,n]),function(e){i({width:e.offsetWidth,height:e.offsetHeight})}]}(p),I=(0,y.Z)(F,2),B=I[0],_=I[1],z=function(e,o){var t=(0,c.useState)(null),n=(0,y.Z)(t,2),i=n[0],r=n[1],s=(0,c.useRef)(),u=(0,c.useRef)(!1);function a(e){u.current||r(e)}function l(){d.Z.cancel(s.current)}return(0,c.useEffect)((function(){a("measure")}),[e]),(0,c.useEffect)((function(){"measure"===i&&(p&&_(g())),i&&(s.current=(0,d.Z)((0,Z.Z)(O().mark((function e(){var o,t;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=N.indexOf(i),(t=N[o+1])&&-1!==o&&a(t);case 3:case"end":return e.stop()}}),e)})))))}),[i]),(0,c.useEffect)((function(){return function(){u.current=!0,l()}}),[]),[i,function(e){l(),s.current=(0,d.Z)((function(){a((function(e){switch(i){case"align":return"motion";case"motion":return"stable"}return e})),null==e||e()}))}]}(t),U=(0,y.Z)(z,2),W=U[0],Y=U[1],X=(0,c.useRef)();function j(){var e;null===(e=H.current)||void 0===e||e.forceAlign()}function K(e,o){var t=T(o);R!==t&&L(t),"align"===W&&(R!==t?Promise.resolve().then((function(){j()})):Y((function(){var e;null===(e=X.current)||void 0===e||e.call(X)})),null==C||C(e,o))}var Q=(0,n.Z)({},P(e));function q(){return new Promise((function(e){X.current=e}))}["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach((function(e){var o=Q[e];Q[e]=function(e,t){return Y(),null==o?void 0:o(e,t)}})),c.useEffect((function(){Q.motionName||"motion"!==W||Y()}),[Q.motionName,W]),c.useImperativeHandle(o,(function(){return{forceAlign:j,getElement:function(){return S.current}}}));var G=(0,n.Z)((0,n.Z)({},B),{},{zIndex:l,opacity:"motion"!==W&&"stable"!==W&&t?0:void 0,pointerEvents:"stable"===W?void 0:"none"},u),J=!0;!(null==m?void 0:m.points)||"align"!==W&&"stable"!==W||(J=!1);var $=a;return c.Children.count(a)>1&&($=c.createElement("div",{className:"".concat(r,"-content")},a)),c.createElement(w.Z,(0,i.Z)({visible:t,ref:S,leavedClassName:"".concat(r,"-hidden")},Q,{onAppearPrepare:q,onEnterPrepare:q,removeOnLeave:f,forceRender:h}),(function(e,o){var t=e.className,i=e.style,u=M()(r,s,R,t);return c.createElement(b.Z,{target:v||g,key:"popup",ref:H,monitorWindowResize:!0,disabled:J,align:m,onAlign:K},c.createElement("div",{ref:o,className:u,onMouseEnter:D,onMouseLeave:k,onMouseDownCapture:x,onTouchStartCapture:E,style:(0,n.Z)((0,n.Z)({},i),G)},$))}))}));H.displayName="PopupInner";const S=H;var A=c.forwardRef((function(e,o){var t=e.prefixCls,r=e.visible,s=e.zIndex,u=e.children,a=e.mobile,l=(a=void 0===a?{}:a).popupClassName,p=a.popupStyle,d=a.popupMotion,f=void 0===d?{}:d,h=a.popupRender,m=c.useRef();c.useImperativeHandle(o,(function(){return{forceAlign:function(){},getElement:function(){return m.current}}}));var v=(0,n.Z)({zIndex:s},p),g=u;return c.Children.count(u)>1&&(g=c.createElement("div",{className:"".concat(t,"-content")},u)),h&&(g=h(g)),c.createElement(w.Z,(0,i.Z)({visible:r,ref:m,removeOnLeave:!0},f),(function(e,o){var i=e.className,r=e.style,s=M()(t,l,i);return c.createElement("div",{ref:o,className:s,style:(0,n.Z)((0,n.Z)({},r),v)},g)}))}));A.displayName="MobilePopupInner";const V=A;var R=["visible","mobile"],L=c.forwardRef((function(e,o){var t=e.visible,r=e.mobile,s=(0,D.Z)(e,R),u=(0,c.useState)(t),a=(0,y.Z)(u,2),l=a[0],p=a[1],d=(0,c.useState)(!1),f=(0,y.Z)(d,2),h=f[0],m=f[1],v=(0,n.Z)((0,n.Z)({},s),{},{visible:l});(0,c.useEffect)((function(){p(t),t&&r&&m((0,k.Z)())}),[t,r]);var g=h?c.createElement(V,(0,i.Z)({},v,{mobile:r,ref:o})):c.createElement(S,(0,i.Z)({},v,{ref:o}));return c.createElement("div",null,c.createElement(x,v),g)}));L.displayName="Popup";const F=L,I=c.createContext(null);function B(){}var _=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];const z=(U=g.Z,(W=function(e){(0,a.Z)(t,e);var o=(0,l.Z)(t);function t(e){var n,s;return(0,r.Z)(this,t),(n=o.call(this,e)).popupRef=c.createRef(),n.triggerRef=c.createRef(),n.attachId=void 0,n.clickOutsideHandler=void 0,n.touchOutsideHandler=void 0,n.contextMenuOutsideHandler1=void 0,n.contextMenuOutsideHandler2=void 0,n.mouseDownTimeout=void 0,n.focusTime=void 0,n.preClickTime=void 0,n.preTouchTime=void 0,n.delayTimer=void 0,n.hasPopupMouseDown=void 0,n.onMouseEnter=function(e){var o=n.props.mouseEnterDelay;n.fireEvents("onMouseEnter",e),n.delaySetPopupVisible(!0,o,o?null:e)},n.onMouseMove=function(e){n.fireEvents("onMouseMove",e),n.setPoint(e)},n.onMouseLeave=function(e){n.fireEvents("onMouseLeave",e),n.delaySetPopupVisible(!1,n.props.mouseLeaveDelay)},n.onPopupMouseEnter=function(){n.clearDelayTimer()},n.onPopupMouseLeave=function(e){var o;e.relatedTarget&&!e.relatedTarget.setTimeout&&(0,f.Z)(null===(o=n.popupRef.current)||void 0===o?void 0:o.getElement(),e.relatedTarget)||n.delaySetPopupVisible(!1,n.props.mouseLeaveDelay)},n.onFocus=function(e){n.fireEvents("onFocus",e),n.clearDelayTimer(),n.isFocusToShow()&&(n.focusTime=Date.now(),n.delaySetPopupVisible(!0,n.props.focusDelay))},n.onMouseDown=function(e){n.fireEvents("onMouseDown",e),n.preClickTime=Date.now()},n.onTouchStart=function(e){n.fireEvents("onTouchStart",e),n.preTouchTime=Date.now()},n.onBlur=function(e){n.fireEvents("onBlur",e),n.clearDelayTimer(),n.isBlurToHide()&&n.delaySetPopupVisible(!1,n.props.blurDelay)},n.onContextMenu=function(e){e.preventDefault(),n.fireEvents("onContextMenu",e),n.setPopupVisible(!0,e)},n.onContextMenuClose=function(){n.isContextMenuToShow()&&n.close()},n.onClick=function(e){if(n.fireEvents("onClick",e),n.focusTime){var o;if(n.preClickTime&&n.preTouchTime?o=Math.min(n.preClickTime,n.preTouchTime):n.preClickTime?o=n.preClickTime:n.preTouchTime&&(o=n.preTouchTime),Math.abs(o-n.focusTime)<20)return;n.focusTime=0}n.preClickTime=0,n.preTouchTime=0,n.isClickToShow()&&(n.isClickToHide()||n.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault();var t=!n.state.popupVisible;(n.isClickToHide()&&!t||t&&n.isClickToShow())&&n.setPopupVisible(!n.state.popupVisible,e)},n.onPopupMouseDown=function(){var e;n.hasPopupMouseDown=!0,clearTimeout(n.mouseDownTimeout),n.mouseDownTimeout=window.setTimeout((function(){n.hasPopupMouseDown=!1}),0),n.context&&(e=n.context).onPopupMouseDown.apply(e,arguments)},n.onDocumentClick=function(e){if(!n.props.mask||n.props.maskClosable){var o=e.target,t=n.getRootDomNode(),i=n.getPopupDomNode();(0,f.Z)(t,o)&&!n.isContextMenuOnly()||(0,f.Z)(i,o)||n.hasPopupMouseDown||n.close()}},n.getRootDomNode=function(){var e=n.props.getTriggerDOMNode;if(e)return e(n.triggerRef.current);try{var o=(0,h.Z)(n.triggerRef.current);if(o)return o}catch(e){}return p.findDOMNode((0,u.Z)(n))},n.getPopupClassNameFromAlign=function(e){var o=[],t=n.props,i=t.popupPlacement,r=t.builtinPlacements,s=t.prefixCls,u=t.alignPoint,a=t.getPopupClassNameFromAlign;return i&&r&&o.push(function(e,o,t,n){for(var i=t.points,r=Object.keys(e),s=0;s<r.length;s+=1){var u=r[s];if(C(e[u].points,i,n))return"".concat(o,"-placement-").concat(u)}return""}(r,s,e,u)),a&&o.push(a(e)),o.join(" ")},n.getComponent=function(){var e=n.props,o=e.prefixCls,t=e.destroyPopupOnHide,r=e.popupClassName,s=e.onPopupAlign,u=e.popupMotion,a=e.popupAnimation,l=e.popupTransitionName,p=e.popupStyle,d=e.mask,f=e.maskAnimation,h=e.maskTransitionName,m=e.maskMotion,v=e.zIndex,g=e.popup,T=e.stretch,M=e.alignPoint,C=e.mobile,y=e.forceRender,D=n.state,k=D.popupVisible,w=D.point,P=n.getPopupAlign(),x={};return n.isMouseEnterToShow()&&(x.onMouseEnter=n.onPopupMouseEnter),n.isMouseLeaveToHide()&&(x.onMouseLeave=n.onPopupMouseLeave),x.onMouseDown=n.onPopupMouseDown,x.onTouchStart=n.onPopupMouseDown,c.createElement(F,(0,i.Z)({prefixCls:o,destroyPopupOnHide:t,visible:k,point:M&&w,className:r,align:P,onAlign:s,animation:a,getClassNameFromAlign:n.getPopupClassNameFromAlign},x,{stretch:T,getRootDomNode:n.getRootDomNode,style:p,mask:d,zIndex:v,transitionName:l,maskAnimation:f,maskTransitionName:h,maskMotion:m,ref:n.popupRef,motion:u,mobile:C,forceRender:y}),"function"==typeof g?g():g)},n.attachParent=function(e){d.Z.cancel(n.attachId);var o,t=n.props,i=t.getPopupContainer,r=t.getDocument,s=n.getRootDomNode();i?(s||0===i.length)&&(o=i(s)):o=r(n.getRootDomNode()).body,o?o.appendChild(e):n.attachId=(0,d.Z)((function(){n.attachParent(e)}))},n.getContainer=function(){var e=(0,n.props.getDocument)(n.getRootDomNode()).createElement("div");return e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",n.attachParent(e),e},n.setPoint=function(e){n.props.alignPoint&&e&&n.setState({point:{pageX:e.pageX,pageY:e.pageY}})},n.handlePortalUpdate=function(){n.state.prevPopupVisible!==n.state.popupVisible&&n.props.afterPopupVisibleChange(n.state.popupVisible)},n.triggerContextValue={onPopupMouseDown:n.onPopupMouseDown},s="popupVisible"in e?!!e.popupVisible:!!e.defaultPopupVisible,n.state={prevPopupVisible:s,popupVisible:s},_.forEach((function(e){n["fire".concat(e)]=function(o){n.fireEvents(e,o)}})),n}return(0,s.Z)(t,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e,o=this.props;if(this.state.popupVisible)return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(e=o.getDocument(this.getRootDomNode()),this.clickOutsideHandler=(0,v.Z)(e,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(e=e||o.getDocument(this.getRootDomNode()),this.touchOutsideHandler=(0,v.Z)(e,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(e=e||o.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=(0,v.Z)(e,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=(0,v.Z)(window,"blur",this.onContextMenuClose)));this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),d.Z.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return(null===(e=this.popupRef.current)||void 0===e?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,o=e.popupPlacement,t=e.popupAlign,i=e.builtinPlacements;return o&&i?function(e,o,t){var i=e[o]||{};return(0,n.Z)((0,n.Z)({},i),t)}(i,o,t):t}},{key:"setPopupVisible",value:function(e,o){var t=this.props.alignPoint,n=this.state.popupVisible;this.clearDelayTimer(),n!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:n}),this.props.onPopupVisibleChange(e)),t&&o&&e&&this.setPoint(o)}},{key:"delaySetPopupVisible",value:function(e,o,t){var n=this,i=1e3*o;if(this.clearDelayTimer(),i){var r=t?{pageX:t.pageX,pageY:t.pageY}:null;this.delayTimer=window.setTimeout((function(){n.setPopupVisible(e,r),n.clearDelayTimer()}),i)}else this.setPopupVisible(e,t)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var o=this.props.children.props,t=this.props;return o[e]&&t[e]?this["fire".concat(e)]:o[e]||t[e]}},{key:"isClickToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("click")||-1!==t.indexOf("click")}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return"contextMenu"===e||1===e.length&&"contextMenu"===e[0]}},{key:"isContextMenuToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("contextMenu")||-1!==t.indexOf("contextMenu")}},{key:"isClickToHide",value:function(){var e=this.props,o=e.action,t=e.hideAction;return-1!==o.indexOf("click")||-1!==t.indexOf("click")}},{key:"isMouseEnterToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("hover")||-1!==t.indexOf("mouseEnter")}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,o=e.action,t=e.hideAction;return-1!==o.indexOf("hover")||-1!==t.indexOf("mouseLeave")}},{key:"isFocusToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("focus")||-1!==t.indexOf("focus")}},{key:"isBlurToHide",value:function(){var e=this.props,o=e.action,t=e.hideAction;return-1!==o.indexOf("focus")||-1!==t.indexOf("blur")}},{key:"forcePopupAlign",value:function(){var e;this.state.popupVisible&&(null===(e=this.popupRef.current)||void 0===e||e.forceAlign())}},{key:"fireEvents",value:function(e,o){var t=this.props.children.props[e];t&&t(o);var n=this.props[e];n&&n(o)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,o=this.props,t=o.children,i=o.forceRender,r=o.alignPoint,s=o.className,u=o.autoDestroy,a=c.Children.only(t),l={key:"trigger"};this.isContextMenuToShow()?l.onContextMenu=this.onContextMenu:l.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(l.onClick=this.onClick,l.onMouseDown=this.onMouseDown,l.onTouchStart=this.onTouchStart):(l.onClick=this.createTwoChains("onClick"),l.onMouseDown=this.createTwoChains("onMouseDown"),l.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(l.onMouseEnter=this.onMouseEnter,r&&(l.onMouseMove=this.onMouseMove)):l.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?l.onMouseLeave=this.onMouseLeave:l.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(l.onFocus=this.onFocus,l.onBlur=this.onBlur):(l.onFocus=this.createTwoChains("onFocus"),l.onBlur=this.createTwoChains("onBlur"));var p=M()(a&&a.props&&a.props.className,s);p&&(l.className=p);var d=(0,n.Z)({},l);(0,m.Yr)(a)&&(d.ref=(0,m.sQ)(this.triggerRef,a.ref));var f,h=c.cloneElement(a,d);return(e||this.popupRef.current||i)&&(f=c.createElement(U,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!e&&u&&(f=null),c.createElement(I.Provider,{value:this.triggerContextValue},h,f)}}],[{key:"getDerivedStateFromProps",value:function(e,o){var t=e.popupVisible,n={};return void 0!==t&&o.popupVisible!==t&&(n.popupVisible=t,n.prevPopupVisible=o.popupVisible),n}}]),t}(c.Component)).contextType=I,W.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:function(){return""},getDocument:function(e){return e?e.ownerDocument:window.document},onPopupVisibleChange:B,afterPopupVisibleChange:B,onPopupAlign:B,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1},W);var U,W}}]);