!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function o(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,nextArrow:"<figure class='icon-arr-right'></figure>",prevArrow:"<figure class='icon-arr-left'></figure>"}),$(".slider-nav").slick({vertical:!0,verticalSwiping:!0,slidesToShow:3,asNavFor:".slider-for",dots:!1,centerMode:!0,focusOnSelect:!0}),$(".slider2").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,nextArrow:"<figure class='icon-arr-right'></figure>",prevArrow:"<figure class='icon-arr-left'></figure>"})}t.r(r),$(document).ready(()=>{$(document).ready(()=>{$(".show-popup").magnificPopup({type:"inline",removalDelay:300,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},midClick:!0})}),o()}),email.value=localStorage.getItem("email"),email.oninput=()=>{localStorage.setItem("email",email.value)},$("#toSend").on("click",(function(){var e=$("#email").val(),r=$(".error");!function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e).toLowerCase())}(e)?(r.fadeIn(),r.text("Введите почту в формате '×××@×××.××'"),$("#email").css({backgroundColor:"#FED6D6",color:"#D44544"})):(r.fadeOut(),$(".footer__message__inputs, .error").detach(),$(".footer__message__success").show());return!1}))}]);