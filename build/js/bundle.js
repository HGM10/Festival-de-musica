function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrollNav(){document.querySelectorAll(".navegacion-principal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),console.log();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.ImagenId=t,n.onclick=mostrarImagen;const o=document.createElement("LI");o.appendChild(n),e.appendChild(o)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.ImagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const o=document.createElement("DIV");o.appendChild(n),o.classList.add("overlay"),o.onclick=function(){remove()};const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),o.appendChild(c),c.onclick=function(){o.remove(),a.classList.toggle("fijar-body")};const a=document.querySelector("body");a.appendChild(o),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map
