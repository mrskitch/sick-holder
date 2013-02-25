/*
 *  Sick Holder v1.0
 *
 *  Joel Griffith
 *  mrskitch@gmail.com
 *  @mrskitch
 */window.app=window.app||{};window.app.Sickholder=function(){"use strict";var e,t,n,r,i=[],s={init:function(s){s=s||{};t=s.className||"sick-holder-placeholder";n=s.containerClassName||"sick-holder-container";r=s.fontSize||"";e={top:s.nudgeTop||0,left:s.nudgeLeft||0};this.getPlaceholderElements("input").getPlaceholderElements("textarea").createSickholder(i)},getPlaceholderElements:function(e){var t=document.getElementsByTagName(e);for(var n=0;n<t.length;n++)t[n].getAttribute("placeholder")&&i.push(t[n]);return this},createSickholder:function(i){for(var s=0;s<i.length;s++){var o=i[s],u=document.createElement("label"),a=document.createElement("aside");a.className=n;u.innerHTML=o.getAttribute("placeholder");u.className=t;u.setAttribute("for",o.getAttribute("id"));u.style.cssText+="top:"+e.top+"px;"+"left:"+e.left+"px;"+"max-width:"+(o.offsetWidth-e.left)+"px;"+"font-size:"+r+";";this.insertInto(o,a).insertAfter(o,u);this.keyDownHandler(o).focusHandler(o).cutHandler(o).pasteHandler(o).blurHandler(o)}},focusHandler:function(e){this.addEvent(e,"focus",function(){this.nextSibling.className=t+" focus"});return this},blurHandler:function(e){this.addEvent(e,"blur",function(){this.nextSibling.className=t});return this},cutHandler:function(e){this.addEvent(e,"cut",function(){setTimeout(function(){e.value===""?e.nextSibling.style.display="block":e.nextSibling.style.display="none"},1)});return this},pasteHandler:function(e){this.addEvent(e,"paste",function(){setTimeout(function(){e.value===""?e.nextSibling.style.display="block":e.nextSibling.style.display="none"},1)});return this},keyDownHandler:function(e){e.onkeydown=function(){setTimeout(function(){e.value===""?e.nextSibling.style.display="block":e.nextSibling.style.display="none"},1)};return this},insertAfter:function(e,t){e.parentNode.insertBefore(t,e.nextSibling);return this},insertInto:function(e,t){this.insertAfter(e,t);t.appendChild(e);return this},addEvent:function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1);else if(e.attachEvent){e["e"+t+n]=n;e[t+n]=function(){e["e"+t+n](window.event)};e.attachEvent("on"+t,e[t+n])}else e["on"+t]=e["e"+t+n]}};return s}();