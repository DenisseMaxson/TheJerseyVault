/* =====================================================
   CONFIGURACIÓN — edita aquí tus datos
   ===================================================== */
const CONTACT = {
  whatsapp: "5214431702339",          // número con lada país, sin + ni espacios
  whatsappLabel: "+52 1 443 170 2339",
  facebook: "https://www.facebook.com/eliseo.valadez",
  facebookLabel: "Eliseo Valadez"
};
const CURRENCY = "MXN";

const PRODUCT_FILES = [
  "ADIDAS-M-300.jpeg",
  "ADIDAS-TEMPLATE-M-400.jpeg",
  "ALEMANIA-2006-S(1)-M(1)-500.jpeg",
  "AMERICA-2007-NIKE-L-400.jpeg",
  "AMERICA-2008-NIKE-L-400.jpeg",
  "AMERICA-2015-NIKE-L-470.jpeg",
  "AMERICA-2018-NIKE-L-470.jpeg",
  "AMERICA-2020-M-NUEVACONETIQUETAS-1200.jpeg",
  "AMERICA-M-NUEVACONETIQUETAS-1300.jpeg",
  "AMERICA-NIKE-2016-L-470.jpeg",
  "BARCELONA-2017-2018-NIKE-L-450.jpeg",
  "BARCELONA-2018-2019-NIKE-NUEVACONETIQUETAS-L-950.jpeg",
  "CABEZASROJAS-M-200.jpeg",
  "CRUZAZUL-2009-M-650.jpeg",
  "CRUZAZUL-2011-M-650.jpeg",
  "CRUZAZUL-2013-L-750-FRENTE.jpeg",
  "CRUZAZUL-2013-L-750-REVERSO.jpeg",
  "CRUZAZUL-2014-M-UNDERARMOUR-450.jpeg",
  "CRUZAZUL-UMBRO-L-900.jpeg",
  "CRUZAZUL-UMBRO-S-450.jpeg",
  "CRUZAZUL-UMBRO-XL-RETRO-650.jpeg",
  "GUADALAJARA(CHIVAS)-2025-L-450.jpeg",
  "GUADALAJARA-2003-M-650.jpeg",
  "GUADALAJARA-2004-VISITA-S-550.jpeg",
  "GUADALAJARA-2005-S-500-FRENTE.jpeg",
  "GUADALAJARA-2005-S-500-REVERSO.jpeg",
  "GUADALAJARA-2006-S-550.jpeg",
  "GUADALAJARA-2006-VISITA-S-600-FRENTE.jpeg",
  "GUADALAJARA-2006-VISITA-S-600-REVERSO.jpeg",
  "GUADALAJARA-2007-S-500.jpeg",
  "GUADALAJARA-2007-S-550.jpeg",
  "GUADALAJARA-2011-S-500.jpeg",
  "INGLATERRA-M-400-SCOREDRAWOFICIAL.jpeg",
  "INGLATERRA-UMBRO-1998-M-750-.jpeg",
  "INTERMILAN-POLO-S-250.jpeg",
  "LEON-2017-M-450(2).jpeg",
  "LEON-2017-M-450.jpeg",
  "MAZATLAN-PORTERO-S-400-FRENTE.jpeg",
  "MAZATLAN-PORTERO-S-400-REVERSO.jpeg",
  "MEXICO-ATLETICA-L-550.jpeg",
  "PSG-2015-L-NUEVACONETIQUETA-900.jpeg",
  "PSG-2015-VISITANTE-L-750.jpeg",
  "PSV-UMBRO-S-400.jpeg",
  "PUMAS-PORTERO-M-600.jpeg",
  "PUMAS-XL-500.jpeg",
  "QUERETARO-PIRMA-M-250.jpeg",
  "REALMADRID-ADIDAS-L-650.jpeg",
  "REALMADRID-ADIDAS-XL-600.jpeg",
  "SANTOSLAGUNA-L-600.jpeg",
  "SANTOSLAGUNA-PORTERO-PUMA-S-400.jpeg",
  "UMBRO-TEMPLATE-XL-250.jpeg",
];

const CLUB_LABELS = {
  ADIDAS: "Adidas",
  ALEMANIA: "Alemania",
  AMERICA: "América",
  BARCELONA: "Barcelona",
  CABEZASROJAS: "Cabezas Rojas",
  CRUZAZUL: "Cruz Azul",
  "GUADALAJARA(CHIVAS)": "Guadalajara (Chivas)",
  GUADALAJARA: "Guadalajara (Chivas)",
  INGLATERRA: "Inglaterra",
  INTERMILAN: "Inter de Milán",
  LEON: "León",
  MAZATLAN: "Mazatlán",
  MEXICO: "México",
  PSG: "PSG",
  PSV: "PSV",
  PUMAS: "Pumas",
  QUERETARO: "Querétaro",
  REALMADRID: "Real Madrid",
  SANTOSLAGUNA: "Santos Laguna",
  UMBRO: "Umbro",
};
const BRAND_LABELS = {
  ADIDAS: "Adidas",
  ATLETICA: "Atlética",
  NIKE: "Nike",
  PIRMA: "Pirma",
  PUMA: "Puma",
  SCOREDRAWOFICIAL: "ScoreDraw oficial",
  UNDERARMOUR: "Under Armour",
  UMBRO: "Umbro",
};
const groupedFiles = new Map();
PRODUCT_FILES.forEach(filename => {
  const key = filename.replace(/-(FRENTE|REVERSO)(?=\.jpeg$)/i, "");
  if (!groupedFiles.has(key)) groupedFiles.set(key, []);
  groupedFiles.get(key).push(filename);
});

const JERSEYS = [...groupedFiles.entries()].map(([key, files], index) => {
  const stem = key.replace(/\.jpeg$/i, "");
  const tokens = stem.split("-");
  const club = CLUB_LABELS[tokens[0]] || tokens[0];
  const variantMatch = stem.match(/\((\d+)\)$/);
  const seasonMatch = stem.match(/(?:^|-)((?:19|20)\d{2})(?:-((?:19|20)\d{2}))?(?=-|$)/);
  const priceMatch = [...stem.matchAll(/(?:^|-)(\d+)(?:\(\d+\))?(?=-|$)/g)]
    .map(match => match[1])
    .filter(value => !seasonMatch || value !== seasonMatch[1] && value !== seasonMatch[2])
    .pop();
  const season = seasonMatch
    ? seasonMatch[2] ? `${seasonMatch[1]}/${seasonMatch[2]}` : seasonMatch[1]
    : "";
  const sizes = [...new Set(tokens.flatMap(token => {
    const match = token.match(/^(XXL|XL|S|M|L)(?:\(\d+\))?$/i);
    return match ? [match[1].toUpperCase()] : [];
  }))];
  const brandToken = tokens.find(token => BRAND_LABELS[token]);
  const brand = brandToken ? BRAND_LABELS[brandToken] : "";
  const newWithTags = tokens.includes("NUEVACONETIQUETA") || tokens.includes("NUEVACONETIQUETAS");
  const type = tokens.includes("PORTERO") ? "Portero"
    : tokens.some(token => token === "VISITA" || token === "VISITANTE") ? "Visita"
    : tokens.includes("RETRO") ? "Retro"
    : tokens.includes("POLO") ? "Polo"
    : tokens.includes("TEMPLATE") ? "Plantilla"
    : "Playera";
  const name = `${[type === "Plantilla" ? `Plantilla ${club}` : club, season].filter(Boolean).join(" ")}${variantMatch ? ` (${variantMatch[1]})` : ""}`;
  const specs = [
    brand && `Marca: ${brand}`,
    sizes.length && `Talla${sizes.length > 1 ? "s" : ""}: ${sizes.join(" / ")}`,
    type !== "Playera" && `Tipo: ${type}`,
    newWithTags && "Nueva con etiqueta",
  ].filter(Boolean);

  return {
    id: index + 1,
    club,
    name,
    season,
    type,
    brand,
    price: priceMatch ? Number(priceMatch) : 0,
    sizes,
    specs,
    tag: newWithTags ? "Nueva con etiqueta" : "",
    newWithTags,
    desc: "",
    images: files.sort((a, b) => a.includes("FRENTE") ? -1 : b.includes("FRENTE") ? 1 : 0)
      .map(filename => `imagenes/${filename}`),
  };
});

/* =====================================================
   Generador de playera en SVG
   ===================================================== */
const BODY = "M70 22 L38 34 L8 72 L34 94 L50 78 L50 186 Q100 197 150 186 L150 78 L166 94 L192 72 L162 34 L130 22 Q100 44 70 22 Z";
function jerseySVG(j, uid){
  const clip = `clip${uid}`;
  let pat = "";
  const n = 20;
  if(j.pattern==="stripes"){
    for(let x=0;x<200;x+=n*2) pat += `<rect x="${x+n/2}" y="0" width="${n}" height="200" fill="${j.c2}"/>`;
  }else if(j.pattern==="hoops"){
    for(let y=40;y<200;y+=n*2) pat += `<rect x="0" y="${y}" width="200" height="${n}" fill="${j.c2}"/>`;
  }else if(j.pattern==="sash"){
    pat = `<polygon points="30,60 80,60 200,170 200,215 150,215 30,100" fill="${j.c2}" transform="rotate(0)"/>`;
    pat = `<polygon points="0,30 55,30 200,150 200,200 150,200 0,80" fill="${j.c2}" opacity=".95"/>`;
  }else if(j.pattern==="halves"){
    pat = `<rect x="100" y="0" width="100" height="200" fill="${j.c2}"/>`;
  }
  const initials = j.club.split(" ").map(w=>w[0]).join("").slice(0,3);
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Playera ${j.club}">
    <defs>
      <clipPath id="${clip}"><path d="${BODY}"/></clipPath>
      <linearGradient id="sh${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".22"/>
        <stop offset=".5" stop-color="#fff" stop-opacity="0"/>
        <stop offset="1" stop-color="#000" stop-opacity=".32"/>
      </linearGradient>
    </defs>
    <path d="${BODY}" fill="${j.c1}"/>
    <g clip-path="url(#${clip})">${pat}
      <path d="M8 72 L34 94 L50 78 L38 34 Z" fill="${j.c3}" opacity=".9"/>
      <path d="M192 72 L166 94 L150 78 L162 34 Z" fill="${j.c3}" opacity=".9"/>
      <rect width="200" height="200" fill="url(#sh${uid})"/>
    </g>
    <path d="M70 22 Q100 44 130 22 L124 15 Q100 34 76 15 Z" fill="${j.c3}"/>
    <path d="${BODY}" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.2"/>
    <circle cx="126" cy="72" r="9" fill="${j.c3}" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>
    <text x="126" y="75.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8.5" fill="${j.c1==='#ffffff'?'#111':'#fff'}">${initials}</text>
  </svg>`;
}
const fmt = n => new Intl.NumberFormat("es-MX",{style:"currency",currency:CURRENCY,maximumFractionDigits:0}).format(n);
const visual = (j,uid)=> `<div class="product-gallery${j.images.length > 1 ? " paired" : ""}">${j.images.map((image,index)=>`<img class="product-photo" src="${image}" alt="Playera ${j.name}${j.images.length > 1 ? index === 0 ? " frente" : " reverso" : ""}">`).join("")}</div>`;
const jerseyMeta = j => [j.type, j.season, j.brand, j.sizes.join("/")].filter(Boolean).join(" · ");
const waLink = msg => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

/* =====================================================
   Render
   ===================================================== */
const $ = s => document.querySelector(s);
document.getElementById("heroJersey").innerHTML = jerseySVG({
  club: "Jersey Vault", c1: "#d71f2b", c2: "#ffffff", c3: "#111111", pattern: "stripes",
},"hero");

// marquee
const words = ["Local","Visitante","Retro","Tercera","Edición limitada","Nueva temporada"];
$("#marquee").innerHTML = [...words,...words].map(w=>`<span>${w}</span>`).join("");

// filtros
const sortedUnique = values => [...new Set(values.filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es"));
const makeFilter = (id,label,values,allLabel,includeMissing=false,missingLabel="") => `
  <label class="filter-control"><span>${label}</span><select id="${id}">
    <option value="">${allLabel}</option>
    ${values.map(value=>`<option value="${value}">${value}</option>`).join("")}
    ${includeMissing?`<option value="__none">${missingLabel}</option>`:""}
  </select></label>`;
const sizes = sortedUnique(JERSEYS.flatMap(j=>j.sizes));
$("#filters").innerHTML = `
  <summary class="filter-summary">
    <span class="filter-title">Filtros</span>
    <span id="filterCount" role="status" aria-live="polite"></span>
    <span class="filter-chevron" aria-hidden="true"></span>
  </summary>
  <div class="filter-content">
    <div class="filter-controls">
      ${makeFilter("filterTeam","Equipo",sortedUnique(JERSEYS.map(j=>j.club)),"Todos los equipos")}
      ${makeFilter("filterBrand","Marca",sortedUnique(JERSEYS.map(j=>j.brand)),"Todas las marcas",JERSEYS.some(j=>!j.brand),"Sin marca indicada")}
      ${makeFilter("filterType","Tipo",sortedUnique(JERSEYS.map(j=>j.type)),"Todos los tipos")}
      ${makeFilter("filterSize","Talla",sizes,"Todas las tallas",JERSEYS.some(j=>!j.sizes.length),"Sin talla indicada")}
      ${makeFilter("filterSeason","Temporada",sortedUnique(JERSEYS.map(j=>j.season)),"Todas las temporadas",JERSEYS.some(j=>!j.season),"Sin temporada indicada")}
      <label class="filter-control"><span>Precio</span><select id="filterPrice">
        <option value="">Cualquier precio</option>
        <option value="under400">Menos de $400</option>
        <option value="400to700">$400 - $700</option>
        <option value="701to1000">$701 - $1,000</option>
        <option value="over1000">Más de $1,000</option>
      </select></label>
      <label class="filter-control"><span>Condición</span><select id="filterCondition">
        <option value="">Todas</option>
        <option value="new">Nueva con etiqueta</option>
        <option value="other">Otras</option>
      </select></label>
    </div>
    <div class="filter-actions">
      <button type="button" id="clearFilters">Limpiar filtros</button>
    </div>
  </div>
`;

// tarjetas
$("#grid").innerHTML = JERSEYS.map((j,i)=>`
  <article class="card reveal" data-type="${j.type}" data-team="${j.club}" data-brand="${j.brand}" data-size="${j.sizes.join("|")}" data-season="${j.season}" data-price="${j.price}" data-new="${j.newWithTags}" data-id="${j.id}" style="--d:${(i%4)*.08}s" tabindex="0">
    ${j.tag?`<span class="tag ${j.newWithTags?"new":""}">${j.tag}</span>`:""}
    <div class="stage">${visual(j,"c"+j.id)}</div>
    <h3>${j.name}</h3>
    <div class="meta">${jerseyMeta(j)}</div>
    <div class="row"><span class="price">${fmt(j.price)}</span><span class="more">Ver detalles <b>→</b></span></div>
  </article>`).join("");

// contacto
$("#ctWhats").href = waLink("Hola, quiero información sobre sus playeras.");
$("#ctWhatsTxt").textContent = CONTACT.whatsappLabel;
$("#ctFb").href = CONTACT.facebook;
$("#ctFbTxt").textContent = CONTACT.facebookLabel;

/* =====================================================
   Interacciones
   ===================================================== */
// filtros
function applyFilters(){
  const selected = {
    team: $("#filterTeam").value,
    brand: $("#filterBrand").value,
    type: $("#filterType").value,
    size: $("#filterSize").value,
    season: $("#filterSeason").value,
    price: $("#filterPrice").value,
    condition: $("#filterCondition").value,
  };
  const matches = (actual,value) => !value || (value==="__none" ? !actual : actual===value);
  let visibleCount = 0;
  document.querySelectorAll(".card").forEach(card=>{
    const price = Number(card.dataset.price);
    const priceMatches = !selected.price
      || selected.price==="under400" && price<400
      || selected.price==="400to700" && price>=400 && price<=700
      || selected.price==="701to1000" && price>700 && price<=1000
      || selected.price==="over1000" && price>1000;
    const conditionMatches = !selected.condition
      || selected.condition==="new" && card.dataset.new==="true"
      || selected.condition==="other" && card.dataset.new!=="true";
    const show = matches(card.dataset.team,selected.team)
      && matches(card.dataset.brand,selected.brand)
      && matches(card.dataset.type,selected.type)
      && (!selected.size || card.dataset.size.split("|").includes(selected.size))
      && matches(card.dataset.season,selected.season)
      && priceMatches
      && conditionMatches;
    card.classList.toggle("hide",!show);
    if(show){card.classList.add("in");visibleCount++;}
  });
  $("#filterCount").textContent = `${visibleCount} ${visibleCount===1?"playera":"playeras"}`;
}
$("#filters").addEventListener("change",applyFilters);
$("#clearFilters").addEventListener("click",()=>{
  document.querySelectorAll("#filters select").forEach(select=>select.value="");
  applyFilters();
});
applyFilters();

// modal
const modal = $("#modal");
function openModal(id){
  const j = JERSEYS.find(x=>x.id==id);
  $("#mVisual").innerHTML = visual(j,"m"+j.id);
  $("#mName").textContent = j.name;
  $("#mMeta").textContent = jerseyMeta(j);
  $("#mPrice").textContent = fmt(j.price);
  $("#mDesc").textContent = j.desc;
  $("#mSizes").innerHTML = j.sizes.map(s=>`<span>${s}</span>`).join("");
  $("#mSpecs").innerHTML = j.specs.map(s=>`<li>${s}</li>`).join("");
  $("#mCta").href = waLink(`Hola, me interesa la playera ${j.name} (${jerseyMeta(j)}) de ${fmt(j.price)}. ¿Está disponible?`);
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
$("#grid").addEventListener("click",e=>{const c=e.target.closest(".card"); if(c) openModal(c.dataset.id)});
$("#grid").addEventListener("keydown",e=>{if(e.key==="Enter"){const c=e.target.closest(".card"); if(c) openModal(c.dataset.id)}});
$("#closeBtn").onclick = closeModal;
modal.addEventListener("click",e=>{if(e.target===modal) closeModal()});
addEventListener("keydown",e=>{if(e.key==="Escape") closeModal()});

// tilt 3D + brillo en tarjetas
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width, y = (e.clientY-r.top)/r.height;
    card.style.setProperty("--mx",x*100+"%"); card.style.setProperty("--my",y*100+"%");
    card.style.transform = `perspective(900px) rotateX(${(.5-y)*10}deg) rotateY(${(x-.5)*12}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave",()=>{card.style.transform=""});
});

// brillo que sigue al cursor
const glow = $("#glow");
addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

// scroll: progreso, nav, parallax
const nav=$("#nav"), prog=$("#progress"), bgText=$("#bgText"), hv=$("#heroVisual");
let ticking=false;
function onScroll(){
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  prog.style.width = (y/h*100)+"%";
  nav.classList.toggle("scrolled", y>40);
  if(y < innerHeight*1.2){
    bgText.style.transform = `translate(${-y*.45}px,-50%)`;
    hv.style.transform = `translateY(${y*.18}px) rotate(${y*.03}deg) scale(${1 - y*.0003})`;
    hv.style.opacity = Math.max(0, 1 - y/(innerHeight*.9));
  }
  ticking=false;
}
addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});
onScroll();

// reveal + contadores
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(!en.isIntersecting) return;
    en.target.classList.add("in");
    en.target.querySelectorAll("[data-count]").forEach(countUp);
    io.unobserve(en.target);
  });
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

function countUp(el){
  const target = +el.dataset.count, dur = 1400, t0 = performance.now();
  (function step(t){
    const p = Math.min((t-t0)/dur,1), eased = 1-Math.pow(1-p,3);
    el.textContent = Math.round(target*eased);
    if(p<1) requestAnimationFrame(step);
  })(t0);
}
