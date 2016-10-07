// licensed under the MIT license - http://opensource.org/licenses/MIT
// copyright (C) 2016 Andrew Prasetya
// version: Thu 6 Oct 12:44:15 2016
var bind=function(t,e){return function(){return t.apply(e,arguments)}};this.StackUp=function(){function t(t){this.resizeHandler=bind(this.resizeHandler,this),this.resizeComplete=bind(this.resizeComplete,this),this.setConfig(t)}return t.prototype.boundaryHeight=0,t.prototype.boundaryWidth=0,t.prototype.containerElement=void 0,t.prototype.containerHeight=0,t.prototype.containerWidth=0,t.prototype.itemElements=void 0,t.prototype.items=[],t.prototype.numberOfColumns=0,t.prototype.config={boundary:window,columnWidth:320,containerSelector:void 0,gutter:18,isFluid:!1,itemsSelector:void 0,layout:"ordinal",numberOfColumns:3,resizeDebounceDelay:350,moveItem:function(t,e,i,o){return t.style.left=e+"px",t.style.top=i+"px",o()},scaleContainer:function(t,e,i,o){return t.style.height=i+"px",t.style.width=e+"px",o()}},t.prototype.setConfig=function(t){var e,i;if(t)for(e in t)i=t[e],this.config[e]=i;return this},t.prototype.initialize=function(){return window.addEventListener("resize",this.resizeHandler),this.boundaryUpdate(),this.updateSelectors(),this.populateItems(),this.updateNumberOfColumns(),this.applyLayout(),this.draw(),this},t.prototype.boundaryUpdate=function(){var t,e,i;return this.config.boundary!==window?(e=this.config.boundary.currentStyle||window.getComputedStyle(this.config.boundary),t=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),this.boundaryHeight=this.config.boundary.offsetHeight-i,this.boundaryWidth=this.config.boundary.offsetWidth-t):(this.boundaryHeight=window.innerHeight,this.boundaryWidth=window.innerWidth),this},t.prototype.resizeDebounceTimeout=void 0,t.prototype.resizeDebounce=function(t,e){return clearTimeout(this.resizeDebounceTimeout),this.resizeDebounceTimeout=window.setTimeout(t,e),this},t.prototype.resizeComplete=function(){return this.calculateNumberOfColumns()!==this.numberOfColumns&&this.config.isFluid&&this.restack(),this},t.prototype.resizeHandler=function(){return this.boundaryUpdate(),this.resizeDebounce(this.resizeComplete,this.config.resizeDebounceDelay),this},t.prototype.updateSelectors=function(){return this.containerElement=document.querySelector(this.config.containerSelector),this.itemElements=document.querySelectorAll(this.config.containerSelector+" > "+this.config.itemsSelector),this},t.prototype.appendItem=function(t){return t.style.width=this.config.columnWidth+"px",this.items.push([t,t.offsetHeight,0,0]),this},t.prototype.populateItems=function(){var t,e,i,o,n;for(this.items=[],n=this.itemElements,t=i=0,o=n.length;i<o;t=++i)e=n[t],this.appendItem(e);return this},t.prototype.calculateNumberOfColumns=function(){var t;return t=this.config.isFluid?Math.floor((this.boundaryWidth-this.config.gutter)/(this.config.columnWidth+this.config.gutter)):this.config.numberOfColumns,t>this.items.length&&(t=this.items.length),this.items.length&&t<=0&&(t=1),t},t.prototype.updateNumberOfColumns=function(){return this.numberOfColumns=this.calculateNumberOfColumns(),this},t.prototype.draw=function(){var t,e;return this.containerWidth=(this.config.columnWidth+this.config.gutter)*this.numberOfColumns,t=this.containerHeight+this.config.gutter,e=this.containerWidth+this.config.gutter,this.config.scaleContainer(this.containerElement,e,t,function(t){return function(){var e,i,o,n,r,s,u;for(e=function(){},s=t.items,u=[],i=n=0,r=s.length;n<r;i=++n)o=s[i],u.push(t.config.moveItem(o[0],o[2],o[3],e));return u}}(this)),this},t.prototype.layout={columnPointer:0,ordinal:{stack:[],setup:function(){var t;return this.stack=function(){var e,i,o,n;for(n=[],t=e=0,i=this.context.numberOfColumns-1;0<=i?e<=i:e>=i;t=0<=i?++e:--e)n.push((o=0,t=o[0],o));return n}.call(this)},plot:function(t){var e;if(e=this.context,e.items[t][2]=e.config.gutter+(e.config.columnWidth+e.config.gutter)*e.layout.columnPointer,e.items[t][3]=e.config.gutter+this.stack[e.layout.columnPointer],this.stack[e.layout.columnPointer]+=e.items[t][1]+e.config.gutter,this.stack[e.layout.columnPointer]>e.containerHeight&&(e.containerHeight=this.stack[e.layout.columnPointer]),e.layout.columnPointer++,e.layout.columnPointer>=e.numberOfColumns)return e.layout.columnPointer=0},loop:function(){var t,e,i,o;for(o=[],t=e=0,i=this.context.items.length-1;0<=i?e<=i:e>=i;t=0<=i?++e:--e)o.push(this.plot(t));return o}},optimized:{stack:[],setup:function(){var t;return this.stack=function(){var e,i,o,n;for(n=[],t=e=0,i=this.context.numberOfColumns-1;0<=i?e<=i:e>=i;t=0<=i?++e:--e)n.push((o=[t,0],t=o[0],o));return n}.call(this)},plot:function(t){var e;if(e=this.context,e.items[t][2]=e.config.gutter+(e.config.columnWidth+e.config.gutter)*this.stack[0][0],e.items[t][3]=e.config.gutter+this.stack[0][1],this.stack[0][1]+=e.items[t][1]+e.config.gutter,this.stack[0][1]>e.containerHeight&&(e.containerHeight=this.stack[0][1]),this.stack.sort(function(t,e){return t[1]-e[1]}),e.layout.columnPointer++,e.layout.columnPointer>=e.numberOfColumns)return e.layout.columnPointer=0},loop:function(){var t,e,i,o;for(o=[],t=e=0,i=this.context.items.length-1;0<=i?e<=i:e>=i;t=0<=i?++e:--e)o.push(this.plot(t));return o}}},t.prototype.applyLayout=function(){return this.layout[this.config.layout].context=this,this.layout[this.config.layout].setup(),this.items.length&&this.layout[this.config.layout].loop(),this},t.prototype.resetLayout=function(){return this.containerHeight=0,this.layout.columnPointer=0,this},t.prototype.reset=function(){return this.containerWidth=0,this.containerHeight=0,this.items=[],this.updateSelectors().populateItems().resetLayout().restack(),this},t.prototype.append=function(t,e){var i;return i=this.items.length,this.appendItem(t),this.calculateNumberOfColumns()===this.numberOfColumns?(this.layoutType[stackgrid.config.layout].plot(i),this.draw()):this.restack(),this},t.prototype.restack=function(){return this.updateNumberOfColumns().resetLayout().applyLayout().draw(),this},t}();