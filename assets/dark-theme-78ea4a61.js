(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m={headerLabel:document.querySelector(".switch"),headerInput:document.querySelector("#slider"),headerButton:document.querySelector(".header-button"),headerHamburgerIcon:document.querySelector(".header-hamburger-icon"),headerCloseIcon:document.querySelector(".header-close-icon"),headerUserIcon:document.querySelector(".header-user-icon"),openMenuBtn:document.querySelector(".js-open-menu"),mobileMenu:document.querySelector(".js-menu-container"),fixedHeader:document.querySelector(".js-header")},{headerHamburgerIcon:i,headerCloseIcon:a,fixedHeader:c,mobileMenu:d,openMenuBtn:h}=m;h.addEventListener("click",f);function f(){d.classList.toggle("is-open"),d.classList.contains("is-open")?(i.style.display="none",a.style.display="block",c.classList.remove("header"),c.classList.add("fixed-header"),document.body.classList.add("not-scrollable")):(d.classList.remove("is-open"),i.style.display="block",a.style.display="none",c.classList.add("header"),c.classList.remove("fixed-header"),document.body.classList.remove("not-scrollable"))}const y={onDOMContentLoaded:function(){const s=document.getElementById("logoList"),l=document.getElementById("toggleLogo"),r=s.querySelectorAll(".support-item");let n=!1;l.addEventListener("click",e);function e(){n=!n,document.querySelector(".btn-icon").classList.toggle("rotate-180",n);for(let o=0;o<6;o++)r[o]&&r[o+6]&&(n?(r[o].classList.add("hidden"),r[o+6].classList.remove("hidden")):(r[o].classList.remove("hidden"),r[o+6].classList.add("hidden")))}for(let t=6;t<r.length;t++)r[t].classList.add("hidden")}},g=document.getElementById("slider");g.addEventListener("change",s=>{s.preventDefault(),localStorage.getItem("theme")==="dark"?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),u()});function u(){try{localStorage.getItem("theme")==="dark"?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}catch{}}u();export{y as l};