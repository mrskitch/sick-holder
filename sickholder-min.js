/*
 *  Sick Holder v1.0
 *
 *  Joel Griffith
 *  mrskitch@gmail.com
 *  @mrskitch
 */window.app=window.app||{};window.app.Sickholder=function(){"use strict";var e,t,n,r,i=[],s={init:function(s){s=s||{};t=s.className||"sick-holder-placeholder";r=s.containerClassName||"sick-holder-container";n=s.fontSize||"";e={top:s.paddingTop||0,left:s.paddingLeft||0};this.getElements("input").getElements("textarea").createSickholder(i)},getElements:function(e){var t=document.getElementsByTagName(e);for(var n=0;n<t.length;n++)t[n].getAttribute("placeholder")&&i.push(t[n]);return this},createSickholder:function(i){for(var s=0;s<i.length;s++){var o=i[s],u=o.getAttribute("placeholder"),a=o.getAttribute("id"),f=o.offsetWidth,l=document.createElement("label"),c=document.createElement("div");c.className=r;l.innerHTML=u;l.className=t;l.setAttribute("for",a);l.style.cssText+="top:"+e.top+"px;"+"left:"+e.left+"px;"+"max-width:"+(f-e.left)+"px;"+"font-size:"+n+";";this.insertInto(o,c).insertAfter(o,l);this.keyDownHandler(o).keyUpHandler(o).focusHandler(o).blurHandler(o)}},focusHandler:function(e){this.addEvent(e,"focus",function(){this.nextSibling.className=t+" focus"});return this},blurHandler:function(e){this.addEvent(e,"blur",function(){this.nextSibling.className=t});return this},keyDownHandler:function(e){e.onkeydown=function(t){t=t===undefined?t=window.event:t;var n=t.keyCode;/[^A-Za-z0-9 ]/.test(String.fromCharCode(n))||(e.nextSibling.style.display="none")};return this},keyUpHandler:function(e){e.onkeyup=function(){e.value===""&&(e.nextSibling.style.display="block")};return this},insertAfter:function(e,t){e.parentNode.insertBefore(t,e.nextSibling);return this},insertInto:function(e,t){this.insertAfter(e,t);t.appendChild(e);return this},addEvent:function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1);else if(e.attachEvent){e["e"+t+n]=n;e[t+n]=function(){e["e"+t+n](window.event)};e.attachEvent("on"+t,e[t+n])}else e["on"+t]=e["e"+t+n]}};return s}();