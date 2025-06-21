(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const s={proyects:[{Img:"./img/MySQL.png",title:"Limpieza de datos en MySQL",description:`En este proyecto se realiza una breve limpieza de datos sobre un set de cerca de 20 000 registros almacenados en un archivo CSV y posteriormente cargados a una base de datos MySQL, donde se realizan tareas de limpieza como:

- Renombrado de columnas
- Eliminación de valores duplicados
- Manejo de valores faltantes
- Corrección de tipos de valores
- Formato de valores de texto
- Creación de nuevas columnas`,linkgitHub:"",urldeploy:"",document_name:"limpieza_SQL.html"},{Img:"./img/Webscraping_colegios.png",title:"Web scraping de los colegios de Bogota",description:`Este proyecto recupera mediante webscraping información específica de todos los colegios de Bogotá directamente de la página del Ministerio de Educación. 

 Recuperando para un total de 701 colegios datos como: 

 - Nombre 
 - Dirección 
 - Localidad 
 - Código DANE 
 - Nombre y código de UPZ 
 - Si es sede principal 
 - Jornadas`,linkgitHub:"",urldeploy:"",document_name:"webscraping_colegios.html"},{Img:"./img/Webscraping_store.png",title:"web scraping productos de supermercado",description:`Este proyecto extrae alrededor de 200 000 productos registrados de una famosa tienda virtual de productos para el hogar y la construcción. Para posteriormente ser modelados y cargados a una base de datos SQL.

Aquí se extrae información como:

- ID del producto
- Fabricante
- Sección de producto
- Familia de producto
- Categoría de producto
- Subcategoría de producto (si existe)`,linkgitHub:"",urldeploy:"",document_name:"webscraping_homecenter.html"},{Img:"./img/etl_fact_ia.png",title:"ETL facturas de proveedores con IA",description:`Este proyecto consiste en la extracción de información de facturas digitales en formato PDF, haciendo uso de modelos de inteligencia artificial gratuitos proporcionados por la API de OpenRouter.ai.
 
 Posteriormente, los datos extraídos se vuelcan en una base de datos SQL, en este caso SQLite, para finalmente ser visualizados en Power BI.`,linkgitHub:"https://github.com/JuanMurcia-999/ETL_Python_AI.git",urldeploy:"",document_name:"ETL_python_IA.html"},{Img:"./img/tic_cauca.png",title:"Apropiacion TIC Valle del cauca",description:`Analisis de la participación ciudadana en procesos de apropiación de Tecnologías de la Información y las Comunicaciones (TIC) en el Valle del Cauca, a través de los programas financiados por la convocatoria DigiCampus y los cursos ofrecidos por la Secretaría de Tecnologías de la Información y las Comunicaciones (SETIC),
con el fin de identificar patrones de acceso, distribución territorial, equidad y efectividad en la ejecución de estas iniciativas.`,linkgitHub:"https://github.com/JuanMurcia-999/ETL_Python_AI.git",urldeploy:"",document_name:"tic_cauca.html"}]},c={data:s};function d(t){return`
    <ul class="project-list">
      ${t.map(n=>`<li class="project-item">${n.title}</li>`).join("")}
    </ul>
  `}function l(t){return`
    <div class="project-detail">
      <h2>${t.title}</h2>
      <div class="image-container">
          <img src="${t.Img}" alt="${t.title}" />
        </div>
      <p>${t.description||"Sin descripción disponible."}</p>
      ${t.Img?`
        
      `:""}
      <div class="button-container">
        <button class="btn-doc" data-doc="${t.document_name}" style = "gap: 0.5rem; ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg> Ver documento 
</button>
<br>
        <button class="btn-repo" data-link="${t.linkgitHub}"  style = "gap: 0.5rem;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Ver repositorio</button>
      </div>
    </div>
  `}const u=document.querySelector("#app");u.innerHTML=`
<button id="theme-toggle" style="margin-bottom: 1rem;"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
</button>

  <div class="container">
    <div class="sidebar">
      ${d(c.data.proyects)}
    </div>
    <div class="viewer">
      <p>Información inicial de los proyectos</p>
    </div>
  </div>
`;document.querySelector(".viewer").innerHTML=`
  <div class="placeholder"style = " font-size: 1.3rem;" >Seleccione un proyecto para ver su detalle</div>
`;const p=document.getElementById("theme-toggle");p.addEventListener("click",()=>{document.body.classList.toggle("light-theme")});document.querySelectorAll(".project-item").forEach((t,n)=>{t.addEventListener("click",()=>{const r=c.data.proyects[n],i=document.querySelector(".viewer");function e(){i.innerHTML=l(r),i.querySelector(".btn-repo").addEventListener("click",()=>{r.linkgitHub&&window.open(r.linkgitHub,"_blank")}),i.querySelector(".btn-doc").addEventListener("click",()=>{o()})}function o(){i.innerHTML=`

     

   <button class="btn-back" style="margin-bottom: 1rem;">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       stroke-width="1.5" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
</button>
        <iframe src="./notebooks_html/${r.document_name}" style="width: 100%; height: 80vh; border: none;"></iframe>
      `,i.querySelector(".btn-back").addEventListener("click",()=>{e()})}document.querySelectorAll(".project-item").forEach(a=>a.classList.remove("active")),t.classList.add("active"),e()})});
