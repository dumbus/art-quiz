(()=>{"use strict";const e=()=>{const e=document.querySelectorAll(".progress"),t=document.querySelector(".switch");e.forEach((e=>{e.addEventListener("input",(function(){let e=this.value;this.style.background=`linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`}))})),t.addEventListener("click",(()=>{t.classList.toggle("switchOn")}))},t=()=>{const e=document.querySelector(".header-default-icon"),t=document.querySelector(".header-settings-right"),s=document.querySelector(".header-default"),i=document.querySelector(".mainscreen"),d=document.querySelector(".header-settings"),n=document.querySelector(".settings");function c(e,t,s=!1){s?t.classList.add("slideFromRight"):t.classList.add("slideFromLeft"),t.addEventListener("animationend",(function(){t.classList.toggle("hidden-block"),s?t.classList.remove("slideFromRight"):t.classList.remove("slideFromLeft")})),s?e.classList.add("slideToLeft"):e.classList.add("slideToRight"),e.addEventListener("animationend",(function(){e.classList.add("hidden-block"),s?e.classList.remove("slideToLeft"):e.classList.remove("slideToRight")}))}e.addEventListener("click",(()=>{c(s,d),c(i,n)})),t.addEventListener("click",(()=>{c(d,s,!0),c(n,i,!0)}))};window.addEventListener("DOMContentLoaded",(()=>{e(),t()}))})();