import{a as w,i as g,S as b}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",S="43827798-4b15de3508f50a47656d425a7";async function h(r,s,i){return(await w.get(q,{params:{key:S,q:r,image_type:"photo",per_page:i,page:s,safesearch:!0,orientation:"horizontal"}})).data}function L(r){const s=document.querySelector(".gallery"),i=r.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}" download=false>
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" width=360 onclick="return false" data-source="${t.largeImageURL}">
                <ul class="description">
                    <li>
                        <p>Likes</p>
                        <p class="description-value">${t.likes}</p>
                    </li>
                    <li>
                        <p>Views</p>
                        <p class="description-value">${t.views}</p>
                    </li>
                    <li>
                        <p>Comments</p>
                        <p class="description-value">${t.comments}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p class="description-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `).join("");s.insertAdjacentHTML("beforeend",i)}function p(r){g.show({message:r})}function v(){document.querySelector(".loader").classList.remove("visually-hidden")}function f(){document.querySelector(".loader").classList.add("visually-hidden")}const m=document.querySelector(".form"),P=document.querySelector('input[name="query"]'),$=document.querySelector(".gallery"),l=document.querySelector(".load-more");g.settings({messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let c,d="",n=1;const y=15;let a;m.addEventListener("submit",async r=>{if(r.preventDefault(),d=P.value.trim(),d===""){p("Please enter a search query.");return}l.classList.add("visually-hidden"),$.innerHTML="",n=1,v();try{if(a=await h(d,n,y),a.hits.length===0){p("Sorry, there are no images matching your search query. Please try again!"),f(),console.log("🚀 ~ form.addEventListener ~ images.hits.length:",a.hits.length);return}a.hits.length<15?l.classList.add("visually-hidden"):l.classList.remove("visually-hidden"),L(a.hits),c?c.refresh():c=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}catch(s){console.log(s)}finally{f(),m.reset()}});l.addEventListener("click",async()=>{n+=1;try{l.classList.add("visually-hidden"),v(),c.refresh(),a=await h(d,n,y),L(a.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:s*2,behavior:"smooth"}),a.total<=Math.ceil(n*y)){l.classList.add("visually-hidden"),p("We're sorry, but you've reached the end of search results.");return}l.classList.remove("visually-hidden")}catch(r){console.log(r)}finally{f()}});
//# sourceMappingURL=commonHelpers.js.map
