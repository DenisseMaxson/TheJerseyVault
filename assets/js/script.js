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

/* Cada playera. Si tienes fotos reales, agrega  img:"fotos/archivo.jpg"
   y se usará en lugar del dibujo generado.
   pattern: solid | stripes | hoops | sash | halves */
const JERSEYS = [
  {id:1,club:"Atlético Aurora",season:"2026/27",type:"Local",price:1199,tag:"Nuevo",
   c1:"#d71f2b",c2:"#ffffff",c3:"#111111",pattern:"stripes",
   desc:"Rayas verticales clásicas con corte moderno. Tela ligera con tecnología de secado rápido y escudo bordado.",
   sizes:["S","M","L","XL","XXL"],specs:["Material 100% poliéster reciclado","Corte regular (slim fit)","Escudo y número bordados"]},
  {id:2,club:"Real Costa Azul",season:"2026/27",type:"Visitante",price:1199,tag:"Nuevo",
   c1:"#0a3d91",c2:"#8fd3ff",c3:"#ffffff",pattern:"hoops",
   desc:"Franjas horizontales en degradado azul inspiradas en el mar. Ventilación en la espalda y cuello en V.",
   sizes:["S","M","L","XL"],specs:["Malla transpirable en axilas","Cuello en V","Etiqueta termosellada"]},
  {id:3,club:"Deportivo Norte",season:"2025/26",type:"Local",price:999,tag:"",
   c1:"#0b7a3b",c2:"#0b7a3b",c3:"#ffd400",pattern:"solid",
   desc:"Verde profundo con detalles amarillos en cuello y mangas. Un diseño sobrio para el día a día.",
   sizes:["M","L","XL","XXL"],specs:["Tela ligera de punto","Corte regular","Detalles contrastantes"]},
  {id:4,club:"Unión Dorada",season:"Retro 1998",type:"Retro",price:1399,tag:"Retro",
   c1:"#ffcc00",c2:"#0a8a3f",c3:"#0a8a3f",pattern:"sash",
   desc:"Réplica retro con banda diagonal y cuello de botones. Edición limitada para coleccionistas.",
   sizes:["S","M","L","XL"],specs:["Cuello polo con botones","Algodón-poliéster","Edición numerada"]},
  {id:5,club:"Sporting Medianoche",season:"2026/27",type:"Tercera",price:1299,tag:"Nuevo",
   c1:"#150f2e",c2:"#7c4dff",c3:"#c6ff3d",pattern:"halves",
   desc:"Tercera equipación bicolor en tonos noche con acentos neón. La más atrevida de la colección.",
   sizes:["S","M","L","XL"],specs:["Estampado reflejante","Corte slim","Costuras planas"]},
  {id:6,club:"Club Tricolor",season:"2025/26",type:"Visitante",price:999,tag:"",
   c1:"#ffffff",c2:"#e63946",c3:"#1d3557",pattern:"sash",
   desc:"Blanca con banda diagonal roja y detalles marino. Elegante, limpia y fácil de combinar.",
   sizes:["S","M","L","XL","XXL"],specs:["Tela suave al tacto","Cuello redondo","Lavable en máquina"]},
  {id:7,club:"Furia Naranja",season:"Retro 2010",type:"Retro",price:1349,tag:"Retro",
   c1:"#ff7a00",c2:"#ff7a00",c3:"#1b1b1b",pattern:"solid",
   desc:"Naranja vibrante con detalles negros. Inspirada en el estilo de los 2010: sencilla y llamativa.",
   sizes:["M","L","XL"],specs:["Corte clásico","Escudo bordado","Stock limitado"]},
  {id:8,club:"Atlético Cumbre",season:"2026/27",type:"Local",price:1199,tag:"Nuevo",
   c1:"#1b1b1b",c2:"#d4af37",c3:"#d4af37",pattern:"stripes",
   desc:"Rayas finas negro y dorado con aire premium. Acabado mate y detalles metálicos.",
   sizes:["S","M","L","XL","XXL"],specs:["Acabado mate premium","Detalles metálicos","Tela de secado rápido"]},
];

const PRODUCT_IMAGES = [
  "imagenes/WhatsApp Image 2026-10-03 at 3.54.49 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 3.55.51 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 3.58.09 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 3.59.23 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 3.59.43 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.01.48 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.07.06 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.10.09 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.15.51 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.23.23 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.26.27 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.27.01 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.30.02 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.32.15 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 4.36.35 PM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.00.53 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.05.11 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.06.02 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.10.12 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.11.49 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.14.57 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.15.51 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.16.52 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.17.49 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.18.54 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.19.58 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.21.17 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.23.16 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.24.57 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.28.14 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.29.19 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.33.10 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.38.40 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.40.15 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.41.34 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.48.37 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.49.32 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.50.28 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.52.18 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.53.13 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.54.27 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.55.33 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.56.45 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.57.31 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.58.39 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 8.59.17 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 9.03.03 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 9.03.58 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 9.04.51 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 9.06.18 AM.jpeg",
  "imagenes/WhatsApp Image 2026-10-03 at 9.07.39 AM.jpeg",
];

JERSEYS.forEach((jersey, index) => {
  jersey.img = PRODUCT_IMAGES[index];
});
JERSEYS.push(...PRODUCT_IMAGES.slice(JERSEYS.length).map((img, index) => {
  const id = JERSEYS.length + index + 1;
  return {
    ...JERSEYS[0],
    id,
    club: `Playera ${String(id).padStart(2, "0")}`,
    season: "Por definir",
    type: "Por definir",
    price: 0,
    tag: "",
    desc: "",
    sizes: [],
    specs: [],
    img,
  };
}));

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
const visual = (j,uid)=> j.img ? `<img src="${j.img}" alt="Playera ${j.club}" style="width:78%;border-radius:14px">` : jerseySVG(j,uid);
const waLink = msg => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

/* =====================================================
   Render
   ===================================================== */
const $ = s => document.querySelector(s);
document.getElementById("heroJersey").innerHTML = jerseySVG(JERSEYS[0],"hero");

// marquee
const words = ["Local","Visitante","Retro","Tercera","Edición limitada","Nueva temporada"];
$("#marquee").innerHTML = [...words,...words].map(w=>`<span>${w}</span>`).join("");

// filtros
const types = ["Todas",...new Set(JERSEYS.map(j=>j.type))];
$("#filters").innerHTML = types.map((t,i)=>`<button class="chip ${i===0?"active":""}" data-f="${t}">${t}</button>`).join("");

// tarjetas
$("#grid").innerHTML = JERSEYS.map((j,i)=>`
  <article class="card reveal" data-type="${j.type}" data-id="${j.id}" style="--d:${(i%4)*.08}s" tabindex="0">
    ${j.tag?`<span class="tag ${j.tag==="Nuevo"?"new":""}">${j.tag}</span>`:""}
    <div class="stage">${visual(j,"c"+j.id)}</div>
    <h3>${j.club}</h3>
    <div class="meta">${j.type} · ${j.season}</div>
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
$("#filters").addEventListener("click",e=>{
  const b = e.target.closest(".chip"); if(!b) return;
  document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c===b));
  document.querySelectorAll(".card").forEach(c=>{
    const show = b.dataset.f==="Todas" || c.dataset.type===b.dataset.f;
    c.classList.toggle("hide",!show);
    if(show) c.classList.add("in");
  });
});

// modal
const modal = $("#modal");
function openModal(id){
  const j = JERSEYS.find(x=>x.id==id);
  $("#mVisual").innerHTML = visual(j,"m"+j.id);
  $("#mName").textContent = j.club;
  $("#mMeta").textContent = `${j.type} · ${j.season}`;
  $("#mPrice").textContent = fmt(j.price);
  $("#mDesc").textContent = j.desc;
  $("#mSizes").innerHTML = j.sizes.map(s=>`<span>${s}</span>`).join("");
  $("#mSpecs").innerHTML = j.specs.map(s=>`<li>${s}</li>`).join("");
  $("#mCta").href = waLink(`Hola, me interesa la playera ${j.club} (${j.type} ${j.season}) de ${fmt(j.price)}. ¿Está disponible?`);
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
