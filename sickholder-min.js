// Load/Check app global space
window.app=window.app||{};window.app.sickholder=function(){"use strict";var e,t,n,r,i=[],s={init:function(s){s=s||{};t=s.className||"sick-holder-placeholder";r=s.containerClassName||"sick-holder-container";n=s.fontSize||"";e={top:s.paddingTop||0,left:s.paddingLeft||0};this.getElements("input");this.getElements("textarea");this.createPlaceHolder(i)},getElements:function(e){var t=document.getElementsByTagName(e);for(var n=0;n<t.length;n++)t[n].getAttribute("placeholder")&&i.push(t[n])},createPlaceHolder:function(i){for(var s=0;s<i.length;s++){var o=i[s].getAttribute("placeholder"),u=i[s].getAttribute("id"),a=document.createElement("label"),f=document.createElement("div");f.className=r;a.innerHTML=o;a.className=t;a.setAttribute("for",u);a.style.top=e.top+"px";a.style.left=e.left+"px";a.style.fontSize=n;this.insertInto(i[s],f);this.insertAfter(i[s],a);this.keyDownHandler(i[s]);this.keyUpHandler(i[s]);this.focusHandler(i[s]);this.blurHandler(i[s])}},focusHandler:function(e){document.addEventListener?e.addEventListener("focus",function(){this.nextSibling.className=t+" focus"}):e.attachEvent("focus",function(){this.nextSibling.className=t+" focus"});return e},blurHandler:function(e){document.addEventListener?e.addEventListener("blur",function(){this.nextSibling.className=t}):e.attachEvent("blur",function(){this.nextSibling.className=t});return e},keyDownHandler:function(e){e.onkeydown=function(t){t===undefined&&(t=window.event);var n=t.keyCode;/[^A-Za-z0-9 ]/.test(String.fromCharCode(n))||(e.nextSibling.style.display="none")};return e},keyUpHandler:function(e){e.onkeyup=function(){e.value===""&&(e.nextSibling.style.display="block")};return e},insertAfter:function(e,t){e.parentNode.insertBefore(t,e.nextSibling)},insertInto:function(e,t){this.insertAfter(e,t);t.appendChild(e)}};return s}();