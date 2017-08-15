/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Easy element scrolling using jQuery.
 * @author Ariel Flesler
 * @version 1.4.11
 */
function(o){"function"==typeof define&&define.amd?define(["jquery"],o):o(jQuery)}(function(o){function t(t){return o.isFunction(t)||"object"==typeof t?t:{top:t,left:t}}var n=o.scrollTo=function(t,n,i){return o(window).scrollTo(t,n,i)};return n.defaults={axis:"xy",duration:parseFloat(o.fn.jquery)>=1.3?0:1,limit:!0},n.window=function(t){return o(window)._scrollable()},o.fn._scrollable=function(){return this.map(function(){var t=this;if(t.nodeName&&-1==o.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]))return t;var n=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||"BackCompat"==n.compatMode?n.body:n.documentElement})},o.fn.scrollTo=function(i,e,s){return"object"==typeof e&&(s=e,e=0),"function"==typeof s&&(s={onAfter:s}),"max"==i&&(i=9e9),s=o.extend({},n.defaults,s),e=e||s.duration,s.queue=s.queue&&s.axis.length>1,s.queue&&(e/=2),s.offset=t(s.offset),s.over=t(s.over),this._scrollable().each(function(){function d(o){p.animate(h,e,s.easing,o&&function(){o.call(this,m,s)})}if(null!=i){var a,r=this,p=o(r),m=i,h={},l=p.is("html,body");switch(typeof m){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=t(m);break}if(m=o(m,this),!m.length)return;case"object":(m.is||m.style)&&(a=(m=o(m)).offset())}var w=o.isFunction(s.offset)&&s.offset(r,m)||s.offset;o.each(s.axis.split(""),function(o,t){var i="x"==t?"Left":"Top",e=i.toLowerCase(),f="scroll"+i,z=r[f],c=n.max(r,t);if(a)h[f]=a[e]+(l?0:z-p.offset()[e]),s.margin&&(h[f]-=parseInt(m.css("margin"+i))||0,h[f]-=parseInt(m.css("border"+i+"Width"))||0),h[f]+=w[e]||0,s.over[e]&&(h[f]+=m["x"==t?"width":"height"]()*s.over[e]);else{var g=m[e];h[f]=g.slice&&"%"==g.slice(-1)?parseFloat(g)/100*c:g}s.limit&&/^\d+$/.test(h[f])&&(h[f]=h[f]<=0?0:Math.min(h[f],c)),!o&&s.queue&&(z!=h[f]&&d(s.onAfterFirst),delete h[f])}),d(s.onAfter)}}).end()},n.max=function(t,n){var i="x"==n?"Width":"Height",e="scroll"+i;if(!o(t).is("html,body"))return t[e]-o(t)[i.toLowerCase()]();var s="client"+i,d=t.ownerDocument.documentElement,a=t.ownerDocument.body;return Math.max(d[e],a[e])-Math.min(d[s],a[s])},n}),
/*!
 * jQuery.SerialScroll
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT.
 *
 * @projectDescription Animated scrolling of series.
 * @author Ariel Flesler
 * @version 1.2.4
 *
 * http://flesler.blogspot.com/2008/02/jqueryserialscroll.html
 */
function(o){var t=".serialScroll",n=o.serialScroll=function(t){return o(window).serialScroll(t)};n.defaults={duration:1e3,axis:"x",event:"click",start:0,step:1,lock:!0,cycle:!0,constant:!0},o.fn.serialScroll=function(i){return this.each(function(){function e(o){o.data+=b,s(o,this)}function s(o,t){isNaN(t)&&(t=o.data);var n,i=o.type,e=l.exclude?r().slice(0,-l.exclude):r(),s=e.length-1,m=e[t],w=l.duration;if(i&&o.preventDefault(),T&&(a(),h=setTimeout(d,l.interval)),!m){if(n=t<0?0:s,b!==n)t=n;else{if(!l.cycle)return;t=s-n}m=e[t]}!m||l.lock&&g._scrollable().is(":animated")||i&&l.onBefore&&!1===l.onBefore(o,m,g,r(),t)||(l.stop&&g._scrollable().stop(!0),l.constant&&(w=Math.abs(w/f*(b-t))),g.scrollTo(m,w,l),p("notify",t))}function d(){p("next")}function a(){clearTimeout(h)}function r(){return o(W,u)}function p(o){g.trigger(o+t,[].slice.call(arguments,1))}function m(o){if(!isNaN(o))return o;for(var t,n=r();-1===(t=n.index(o))&&o!==u;)o=o.parentNode;return t}var h,l=o.extend({},n.defaults,i),w=l.event,f=l.step,z=l.lazy,c=l.target?this:document,g=o(l.target||this,c),u=g[0],W=l.items,b=l.start,T=l.interval,y=l.navigation;u&&(z||(W=r()),(l.force||T)&&s({},b),o(l.prev||[],c).bind(w,-f,e),o(l.next||[],c).bind(w,f,e),u.ssbound||g.bind("prev"+t,-f,e).bind("next"+t,f,e).bind("goto"+t,s),T&&g.bind("start"+t,function(o){T||(a(),T=!0,d())}).bind("stop"+t,function(){a(),T=!1}),g.bind("notify"+t,function(o,t){var n=m(t);n>-1&&(b=n)}),u.ssbound=!0,l.jump&&(z?g:r()).bind(w,function(o){s(o,m(o.target))}),y&&(y=o(y,c).bind(w,function(o){o.data=Math.round(r().length/y.length)*y.index(this),s(o,this)})))})}}(jQuery),"function"!=typeof Object.create&&(Object.create=function(o){function t(){}return t.prototype=o,new t}),function(o,t,n,i){var e={init:function(t,n){var i=this;i.elem=n,i.$elem=o(n),i.imageSrc=i.$elem.data("zoom-image")?i.$elem.data("zoom-image"):i.$elem.attr("src"),i.options=o.extend({},o.fn.elevateZoom.options,t),i.options.tint&&(i.options.lensColour="none",i.options.lensOpacity="1"),"inner"==i.options.zoomType&&(i.options.showLens=!1),i.$elem.parent().removeAttr("title").removeAttr("alt"),i.zoomImage=i.imageSrc,i.refresh(1),o("#"+i.options.gallery+" a").click(function(t){return t.preventDefault(),o(this).data("zoom-image")?i.zoomImagePre=o(this).data("zoom-image"):i.zoomImagePre=o(this).data("image"),i.swaptheimage(o(this).data("image"),i.zoomImagePre),!1})},refresh:function(o){var t=this;setTimeout(function(){t.fetch(t.imageSrc)},o||t.options.refresh)},fetch:function(o){var t=this,n=new Image;n.onload=function(){t.largeWidth=n.width,t.largeHeight=n.height,t.startZoom(),t.currentImage=t.imageSrc,t.options.onZoomedImageLoaded()},n.src=o},startZoom:function(){var t=this;t.nzWidth=t.$elem.width(),t.nzHeight=t.$elem.height(),t.nzOffset=t.$elem.offset(),t.widthRatio=t.largeWidth/t.nzWidth,t.heightRatio=t.largeHeight/t.nzHeight,"window"==t.options.zoomType&&(t.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;background-color:white;text-align:center;width: "+String(t.options.zoomWindowWidth)+"px;height: "+String(t.options.zoomWindowHeight)+"px;float: left;display: none;z-index:100px;border: "+String(t.options.borderSize)+"px solid "+t.options.borderColour+";background-repeat: no-repeat;position: absolute;"),"inner"==t.options.zoomType&&(t.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;width: "+String(t.nzWidth)+"px;height: "+String(t.nzHeight)+"px;float: left;display: none;cursor:"+t.options.cursor+";px solid "+t.options.borderColour+";background-repeat: no-repeat;position: absolute;"),"window"==t.options.zoomType&&(t.nzHeight<t.options.zoomWindowWidth/t.widthRatio?lensHeight=t.nzHeight:lensHeight=String(t.options.zoomWindowHeight/t.heightRatio),t.largeWidth<t.options.zoomWindowWidth?lensWidth=t.nzHWidth:lensWidth=t.options.zoomWindowWidth/t.widthRatio,t.lensStyle="background-position: 0px 0px;width: "+String(t.options.zoomWindowWidth/t.widthRatio)+"px;height: "+String(t.options.zoomWindowHeight/t.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+t.options.lensOpacity+";filter: alpha(opacity = "+100*t.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+t.options.lensColour+";cursor:"+t.options.cursor+";border: "+t.options.lensBorder+"px solid black;background-repeat: no-repeat;position: absolute;"),t.tintStyle="display: block;position: absolute;background-color: "+t.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+t.nzWidth+"px;height: "+t.nzHeight+"px;",t.lensRound="","lens"==t.options.zoomType&&(t.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(t.options.borderSize)+"px solid "+t.options.borderColour+";width:"+String(t.options.lensSize)+"px;height:"+String(t.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),"round"==t.options.lensShape&&(t.lensRound="border-top-left-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;border-top-right-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;border-bottom-left-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;border-bottom-right-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;"),t.zoomContainer=o('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+t.nzOffset.left+"px;top:"+t.nzOffset.top+"px;height:"+t.nzHeight+"px;width:"+t.nzWidth+'px;"></div>'),o("body").append(t.zoomContainer),t.options.containLensZoom&&"lens"==t.options.zoomType&&t.zoomContainer.css("overflow","hidden"),"inner"!=t.options.zoomType&&(t.zoomLens=o("<div class='zoomLens' style='"+t.lensStyle+t.lensRound+"'>&nbsp;</div>").appendTo(t.zoomContainer).click(function(){t.$elem.trigger("click")})),t.options.tint&&(t.tintContainer=o("<div/>").addClass("tintContainer"),t.zoomTint=o("<div class='zoomTint' style='"+t.tintStyle+"'></div>"),t.zoomLens.wrap(t.tintContainer),t.zoomTintcss=t.zoomLens.after(t.zoomTint),t.zoomTintImage=o('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+t.nzWidth+"px; height: "+t.nzHeight+'px;" src="'+t.imageSrc+'">').appendTo(t.zoomLens).click(function(){t.$elem.trigger("click")})),isNaN(t.options.zoomWindowPosition)?t.zoomWindow=o("<div style='z-index:999;left:"+t.windowOffsetLeft+"px;top:"+t.windowOffsetTop+"px;"+t.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){t.$elem.trigger("click")}):t.zoomWindow=o("<div style='z-index:999;left:"+t.windowOffsetLeft+"px;top:"+t.windowOffsetTop+"px;"+t.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(t.zoomContainer).click(function(){t.$elem.trigger("click")}),t.zoomWindowContainer=o("<div/>").addClass("zoomWindowContainer").css("width",t.options.zoomWindowWidth),t.zoomWindow.wrap(t.zoomWindowContainer),t.options.tint,"lens"==t.options.zoomType&&t.zoomLens.css({backgroundImage:"url('"+t.imageSrc+"')"}),"window"==t.options.zoomType&&t.zoomWindow.css({backgroundImage:"url('"+t.imageSrc+"')"}),"inner"==t.options.zoomType&&t.zoomWindow.css({backgroundImage:"url('"+t.imageSrc+"')"}),t.$elem.bind("touchmove",function(o){o.preventDefault();var n=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];t.setPosition(n)}),t.zoomContainer.bind("touchmove",function(o){"inner"==t.options.zoomType&&(t.options.zoomWindowFadeIn?t.zoomWindow.stop(!0,!0).fadeIn(t.options.zoomWindowFadeIn):t.zoomWindow.show()),o.preventDefault();var n=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];t.setPosition(n)}),t.zoomContainer.bind("touchend",function(o){t.zoomWindow.hide(),t.options.showLens&&t.zoomLens.hide(),t.options.tint&&t.zoomTint.hide()}),t.$elem.bind("touchend",function(o){t.zoomWindow.hide(),t.options.showLens&&t.zoomLens.hide(),t.options.tint&&t.zoomTint.hide()}),t.options.showLens&&(t.zoomLens.bind("touchmove",function(o){o.preventDefault();var n=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];t.setPosition(n)}),t.zoomLens.bind("touchend",function(o){t.zoomWindow.hide(),t.options.showLens&&t.zoomLens.hide(),t.options.tint&&t.zoomTint.hide()})),t.$elem.bind("mousemove",function(o){t.lastX===o.clientX&&t.lastY===o.clientY||t.setPosition(o),t.lastX=o.clientX,t.lastY=o.clientY}),t.zoomContainer.bind("mousemove",function(o){t.lastX===o.clientX&&t.lastY===o.clientY||t.setPosition(o),t.lastX=o.clientX,t.lastY=o.clientY}),"inner"!=t.options.zoomType&&t.zoomLens.bind("mousemove",function(o){t.lastX===o.clientX&&t.lastY===o.clientY||t.setPosition(o),t.lastX=o.clientX,t.lastY=o.clientY}),t.options.tint&&t.zoomTint.bind("mousemove",function(o){t.lastX===o.clientX&&t.lastY===o.clientY||t.setPosition(o),t.lastX=o.clientX,t.lastY=o.clientY}),"inner"==t.options.zoomType&&t.zoomWindow.bind("mousemove",function(o){t.lastX===o.clientX&&t.lastY===o.clientY||t.setPosition(o),t.lastX=o.clientX,t.lastY=o.clientY}),t.zoomContainer.mouseenter(function(){"inner"==t.options.zoomType&&(t.options.zoomWindowFadeIn?t.zoomWindow.stop(!0,!0).fadeIn(t.options.zoomWindowFadeIn):t.zoomWindow.show()),"window"==t.options.zoomType&&(t.options.zoomWindowFadeIn?t.zoomWindow.stop(!0,!0).fadeIn(t.options.zoomWindowFadeIn):t.zoomWindow.show()),t.options.showLens&&(t.options.lensFadeIn?t.zoomLens.stop(!0,!0).fadeIn(t.options.lensFadeIn):t.zoomLens.show()),t.options.tint&&(t.options.zoomTintFadeIn?t.zoomTint.stop(!0,!0).fadeIn(t.options.zoomTintFadeIn):t.zoomTint.show())}).mouseleave(function(){t.zoomWindow.hide(),t.options.showLens&&t.zoomLens.hide(),t.options.tint&&t.zoomTint.hide()}),t.$elem.mouseenter(function(){"inner"==t.options.zoomType&&(t.options.zoomWindowFadeIn?t.zoomWindow.stop(!0,!0).fadeIn(t.options.zoomWindowFadeIn):t.zoomWindow.show()),"window"==t.options.zoomType&&(t.options.zoomWindowFadeIn?t.zoomWindow.stop(!0,!0).fadeIn(t.options.zoomWindowFadeIn):t.zoomWindow.show()),t.options.showLens&&(t.options.lensFadeIn?t.zoomLens.stop(!0,!0).fadeIn(t.options.lensFadeIn):t.zoomLens.show()),t.options.tint&&(t.options.zoomTintFadeIn?t.zoomTint.stop(!0,!0).fadeIn(t.options.zoomTintFadeIn):t.zoomTint.show())}).mouseleave(function(){t.zoomWindow.hide(),t.options.showLens&&t.zoomLens.hide(),t.options.tint&&t.zoomTint.hide()}),"inner"!=t.options.zoomType&&t.zoomLens.mouseenter(function(){"inner"==t.options.zoomType&&(t.options.zoomWindowFadeIn?t.zoomWindow.stop(!0,!0).fadeIn(t.options.zoomWindowFadeIn):t.zoomWindow.show()),"window"==t.options.zoomType&&t.zoomWindow.show(),t.options.showLens&&t.zoomLens.show(),t.options.tint&&t.zoomTint.show()}).mouseleave(function(){t.options.zoomWindowFadeOut?t.zoomWindow.stop(!0,!0).fadeOut(t.options.zoomWindowFadeOut):t.zoomWindow.hide(),"inner"!=t.options.zoomType&&t.zoomLens.hide(),t.options.tint&&t.zoomTint.hide()}),t.options.tint&&t.zoomTint.mouseenter(function(){"inner"==t.options.zoomType&&t.zoomWindow.show(),"window"==t.options.zoomType&&t.zoomWindow.show(),t.options.showLens&&t.zoomLens.show(),t.zoomTint.show()}).mouseleave(function(){t.zoomWindow.hide(),"inner"!=t.options.zoomType&&t.zoomLens.hide(),t.zoomTint.hide()}),"inner"==t.options.zoomType&&t.zoomWindow.mouseenter(function(){"inner"==t.options.zoomType&&t.zoomWindow.show(),"window"==t.options.zoomType&&t.zoomWindow.show(),t.options.showLens&&t.zoomLens.show()}).mouseleave(function(){t.options.zoomWindowFadeOut?t.zoomWindow.stop(!0,!0).fadeOut(t.options.zoomWindowFadeOut):t.zoomWindow.hide(),"inner"!=t.options.zoomType&&t.zoomLens.hide()})},setPosition:function(o){var t=this;if(t.nzHeight=t.$elem.height(),t.nzWidth=t.$elem.width(),t.nzOffset=t.$elem.offset(),t.options.tint&&(t.zoomTint.css({top:0}),t.zoomTint.css({left:0})),t.options.responsive&&(t.nzHeight<t.options.zoomWindowWidth/t.widthRatio?lensHeight=t.nzHeight:lensHeight=String(t.options.zoomWindowHeight/t.heightRatio),t.largeWidth<t.options.zoomWindowWidth?lensWidth=t.nzHWidth:lensWidth=t.options.zoomWindowWidth/t.widthRatio,t.widthRatio=t.largeWidth/t.nzWidth,t.heightRatio=t.largeHeight/t.nzHeight,t.zoomLens.css({width:String(t.options.zoomWindowWidth/t.widthRatio)+"px",height:String(t.options.zoomWindowHeight/t.heightRatio)+"px"})),t.zoomContainer.css({top:t.nzOffset.top}),t.zoomContainer.css({left:t.nzOffset.left}),t.mouseLeft=parseInt(o.pageX-t.nzOffset.left),t.mouseTop=parseInt(o.pageY-t.nzOffset.top),"window"==t.options.zoomType&&(t.Etoppos=t.mouseTop<t.zoomLens.height()/2,t.Eboppos=t.mouseTop>t.nzHeight-t.zoomLens.height()/2-2*t.options.lensBorder,t.Eloppos=t.mouseLeft<0+t.zoomLens.width()/2,t.Eroppos=t.mouseLeft>t.nzWidth-t.zoomLens.width()/2-2*t.options.lensBorder),"inner"==t.options.zoomType&&(t.Etoppos=t.mouseTop<t.nzHeight/2/t.heightRatio,t.Eboppos=t.mouseTop>t.nzHeight-t.nzHeight/2/t.heightRatio,t.Eloppos=t.mouseLeft<0+t.nzWidth/2/t.widthRatio,t.Eroppos=t.mouseLeft>t.nzWidth-t.nzWidth/2/t.widthRatio-2*t.options.lensBorder),t.mouseLeft<0||t.mouseTop<=0||t.mouseLeft>t.nzWidth||t.mouseTop>t.nzHeight)return t.zoomWindow.hide(),t.options.showLens&&t.zoomLens.hide(),void(t.options.tint&&t.zoomTint.hide());"window"==t.options.zoomType&&t.zoomWindow.show(),t.options.tint&&t.zoomTint.show(),t.options.showLens&&(t.zoomLens.show(),t.lensLeftPos=String(t.mouseLeft-t.zoomLens.width()/2),t.lensTopPos=String(t.mouseTop-t.zoomLens.height()/2)),t.Etoppos&&(t.lensTopPos=0),t.Eloppos&&(t.windowLeftPos=0,t.lensLeftPos=0,t.tintpos=0),"window"==t.options.zoomType&&(t.Eboppos&&(t.lensTopPos=Math.max(t.nzHeight-t.zoomLens.height()-2*t.options.lensBorder,0)),t.Eroppos&&(t.lensLeftPos=t.nzWidth-t.zoomLens.width()-2*t.options.lensBorder)),"inner"==t.options.zoomType&&(t.Eboppos&&(t.lensTopPos=Math.max(t.nzHeight-2*t.options.lensBorder,0)),t.Eroppos&&(t.lensLeftPos=t.nzWidth-t.nzWidth-2*t.options.lensBorder)),"lens"==t.options.zoomType&&(t.windowLeftPos=String(-1*((o.pageX-t.nzOffset.left)*t.widthRatio-t.zoomLens.width()/2)),t.windowTopPos=String(-1*((o.pageY-t.nzOffset.top)*t.heightRatio-t.zoomLens.height()/2)),t.zoomLens.css({backgroundPosition:t.windowLeftPos+"px "+t.windowTopPos+"px"}),t.setWindowPostition(o)),t.options.tint&&t.setTintPosition(o),"window"==t.options.zoomType&&t.setWindowPostition(o),"inner"==t.options.zoomType&&t.setWindowPostition(o),t.options.showLens&&t.zoomLens.css({left:t.lensLeftPos+"px",top:t.lensTopPos+"px"})},setLensPostition:function(o){},setWindowPostition:function(t){function n(o){var t="100%";return{top:"0px",bottom:t,left:"0px",right:t}[o]||o}var i=this;if(isNaN(i.options.zoomWindowPosition))i.externalContainer=o("#"+i.options.zoomWindowPosition),i.externalContainerWidth=i.externalContainer.width(),i.externalContainerHeight=i.externalContainer.height(),i.externalContainerOffset=i.externalContainer.offset(),i.windowOffsetTop=i.externalContainerOffset.top,i.windowOffsetLeft=i.externalContainerOffset.left;else switch(i.options.zoomWindowPosition){case 1:i.windowOffsetTop=i.options.zoomWindowOffety,i.windowOffsetLeft=+i.nzWidth;break;case 2:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=i.nzWidth);break;case 3:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=i.nzWidth;break;case 4:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth;break;case 5:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 6:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize));break;case 7:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=0;break;case 8:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 9:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 10:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize));break;case 11:i.windowOffsetTop=i.options.zoomWindowOffety,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 12:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 13:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=0;break;case 14:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize));break;case 15:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 16:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth;break;default:i.windowOffsetTop=i.options.zoomWindowOffety,i.windowOffsetLeft=i.nzWidth}if(i.windowOffsetTop=i.windowOffsetTop+i.options.zoomWindowOffety,i.windowOffsetLeft=i.windowOffsetLeft+i.options.zoomWindowOffetx,i.zoomWindow.css({top:i.windowOffsetTop}),i.zoomWindow.css({left:i.windowOffsetLeft}),"inner"==i.options.zoomType&&(i.zoomWindow.css({top:0}),i.zoomWindow.css({left:0})),i.windowLeftPos=String(-1*((t.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2)),i.windowTopPos=String(-1*((t.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2)),i.Etoppos&&(i.windowTopPos=0),i.Eloppos&&(i.windowLeftPos=0),i.Eboppos&&(i.windowTopPos=-1*(i.largeHeight-i.zoomWindow.height())),i.Eroppos&&(i.windowLeftPos=-1*(i.largeWidth-i.zoomWindow.width())),"window"==i.options.zoomType)if(i.widthRatio<=1&&(i.windowLeftPos=0),i.heightRatio<=1&&(i.windowTopPos=0),i.largeHeight<i.options.zoomWindowHeight&&(i.windowTopPos=0),i.largeWidth<i.options.zoomWindowWidth&&(i.windowLeftPos=0),i.options.easing){o.easing.zoomsmoothmove=function(o,t,n,i,e){return t==e?n+i:i*(1-Math.pow(2,-10*t/e))+n};var e=o('<div style="background-position: 3px 5px">');if(o.support.bgPos="3px 5px"===e.css("backgroundPosition"),o.support.bgPosXY="3px"===e.css("backgroundPositionX"),e=null,o.support.bgPos&&!o.support.bgPosXY){var s="background-position",d=o.camelCase;o.each(["x","y"],function(t,i){var e=d(s+"-"+i);o.cssHooks[e]={get:function(i){return n(o.css(i,s).split(/\s+/,2)[t])},set:function(i,e){var d=o.css(i,s).split(/\s+/,2);d[t]=n(e),o.style(i,s,d.join(" "))}},o.fx.step[e]=function(t){o.style(t.elem,t.prop,t.now)}}),i.zoomWindow.stop().animate({backgroundPositionY:i.windowTopPos,backgroundPositionX:i.windowLeftPos},{queue:!1,duration:i.options.easingDuration,easing:"zoomsmoothmove"})}else i.zoomWindow.animate({"background-position-x":i.windowLeftPos,"background-position-y":i.windowTopPos},{queue:!1,duration:i.options.easingDuration,easing:"zoomsmoothmove"})}else i.zoomWindow.css({backgroundPosition:i.windowLeftPos+"px "+i.windowTopPos+"px"});"inner"==i.options.zoomType&&i.zoomWindow.css({backgroundPosition:i.windowLeftPos+"px "+i.windowTopPos+"px"})},setTintPosition:function(o){var t=this;t.nzOffset=t.$elem.offset(),t.tintpos=String(-1*(o.pageX-t.nzOffset.left-t.zoomLens.width()/2)),t.tintposy=String(-1*(o.pageY-t.nzOffset.top-t.zoomLens.height()/2)),t.Etoppos&&(t.tintposy=0),t.Eloppos&&(t.tintpos=0),t.Eboppos&&(t.tintposy=-1*(t.nzHeight-t.zoomLens.height()-2*t.options.lensBorder)),t.Eroppos&&(t.tintpos=-1*(t.nzWidth-t.zoomLens.width()-2*t.options.lensBorder)),t.options.tint&&(t.zoomTint.css({opacity:t.options.tintOpacity}).animate().fadeIn("slow"),t.zoomTintImage.css({left:t.tintpos-t.options.lensBorder+"px"}),t.zoomTintImage.css({top:t.tintposy-t.options.lensBorder+"px"}))},swaptheimage:function(o,t){var n=this,i=new Image;i.onload=function(){n.largeWidth=i.width,n.largeHeight=i.height,n.zoomImage=t,n.swapAction(o,t)},i.src=t},swapAction:function(o,t){var n=this,i=new Image;i.onload=function(){n.nzHeight=i.height,n.nzWidth=i.width,n.doneCallback()},i.src=o,n.zoomWindow.css({backgroundImage:"url('"+t+"')"}),n.currentImage=t,n.$elem.attr("src",o)},doneCallback:function(){var o=this;o.options.tint&&(o.zoomTintImage.attr("src",largeimage),o.zoomTintImage.attr("height",o.$elem.height()),o.zoomTintImage.css({height:o.$elem.height()}),o.zoomTint.css({height:o.$elem.height()})),o.nzOffset=o.$elem.offset(),o.nzWidth=o.$elem.width(),o.nzHeight=o.$elem.height(),o.widthRatio=o.largeWidth/o.nzWidth,o.heightRatio=o.largeHeight/o.nzHeight,o.nzHeight<o.options.zoomWindowWidth/o.widthRatio?lensHeight=o.nzHeight:lensHeight=String(o.options.zoomWindowHeight/o.heightRatio),o.largeWidth<o.options.zoomWindowWidth?lensWidth=o.nzHWidth:lensWidth=o.options.zoomWindowWidth/o.widthRatio,o.zoomLens.css("width",lensWidth),o.zoomLens.css("height",lensHeight)},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var t=this;return t.gallerylist=[],t.options.gallery?o("#"+t.options.gallery+" a").each(function(){var n="";o(this).data("zoom-image")?n=o(this).data("zoom-image"):o(this).data("image")&&(n=o(this).data("image")),n==t.zoomImage?t.gallerylist.unshift({href:""+n,title:o(this).find("img").attr("title")}):t.gallerylist.push({href:""+n,title:o(this).find("img").attr("title")})}):t.gallerylist.push({href:""+t.zoomImage,title:o(this).find("img").attr("title")}),t.gallerylist}};o.fn.elevateZoom=function(t){return this.each(function(){var n=Object.create(e);n.init(t,this),o.data(this,"elevateZoom",n)})},o.fn.elevateZoom.options={easing:!1,easingType:"zoomdefault",easingDuration:2e3,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorder:1,lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:.4,gallery:!1,cursor:"default",responsive:!1,onComplete:o.noop,onZoomedImageLoaded:function(){}}}(jQuery,window,document),jQuery.easing.easeOutQuart=function(o,t,n,i,e){return-i*((t=t/e-1)*t*t*t-1)+n},$("#pics-slideshow").serialScroll({items:"li",prev:"#product-show a.prev",next:"#product-show a.next",offset:-30,start:1,duration:1200,force:!0,stop:!0,lock:!1,cycle:!1,easing:"easeOutQuart",jump:!1}),$("#pics-slideshow img").click(function(){var o=$(this).attr("src"),t=$("#preview-zoom");t.attr("src",o),$(".zoomContainer").remove(),t.removeData("elevateZoom"),t.data("zoom-image",o),t.elevateZoom()}),$("#preview-zoom").elevateZoom();