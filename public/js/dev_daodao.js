"use strict";function _createForOfIteratorHelper(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){i=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function DaodaoSwiper(t,e,r){this.url=t,this.bbpath=e,this.filter=r,this.init=function(){dataGetter("get",this.url,null,function(t){!function(t,e,r){var n,a=document.querySelector("#bber-talk"),o="";n=t.length<10?t.length:10;for(var i=0;i<n;i++){var l,c,u=!0,f=_createForOfIteratorHelper(r);try{for(f.s();!(l=f.n()).done;){var d=l.value;0<=t[i].content.indexOf(d)&&(u=!1)}}catch(t){f.e(t)}finally{f.f()}u&&((c=document.createElement("p")).innerHTML=t[i].content,t[i].content=c.innerText,c=null,o+='<div class=\'li-style swiper-slide\' ><a style="height=100%;weight=100%" href="'.concat(e,"#").concat(t[i]._id,'">').concat(t[i].content,"</a></div>"))}(a=document.querySelector("#bber-talk")).innerHTML=o,window.lazyLoadInstance&&window.lazyLoadInstance.update(),window.pjax&&window.pjax.refresh(a);new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!0}})}(t.data,e,r)})}}