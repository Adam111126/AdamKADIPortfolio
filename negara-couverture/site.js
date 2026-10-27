"use strict";
const images=[
["toiture-renovee","Couverture en tuiles"],["toiture-ardoise","Couverture en ardoise"],["pose-liteaux","Préparation de toiture"],["renovation-en-cours","Travaux de rénovation"],["habillage-zinc","Habillage en zinc"],["faitage-tuiles","Finition du faîtage"],["equipe-chantier","Sur le chantier"],["couverture-finition","Toiture en tuiles"],["maison-toiture","Une toiture rénovée"]
];
const $=id=>document.getElementById(id);
const menu=document.querySelector(".burger"),nav=$("site-nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("opened");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"✕":"☰";});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("opened");menu.setAttribute("aria-expanded","false");menu.textContent="☰";}));
document.querySelectorAll("[data-service]").forEach(el=>el.addEventListener("click",()=>{$("prestation").value=el.dataset.service;}));
let active=-1;
function view(i){active=(i+images.length)%images.length;const [name,title]=images[active];$("gallery-image").src="assets/chantiers/"+name+".webp";$("gallery-image").alt=title;$("gallery-title").textContent=title;$("gallery-count").textContent=(active+1)+" / "+images.length;$("gallery-dialog").hidden=false;document.body.style.overflow="hidden";$("gallery-close").focus();}
function close(){active=-1;$("gallery-dialog").hidden=true;$("gallery-image").src="";document.body.style.overflow="";}
document.querySelectorAll("[data-gallery-index]").forEach(b=>b.addEventListener("click",()=>view(Number(b.dataset.galleryIndex))));
$("gallery-close").addEventListener("click",close);$("gallery-prev").addEventListener("click",()=>view(active-1));$("gallery-next").addEventListener("click",()=>view(active+1));
$("gallery-dialog").addEventListener("click",e=>{if(e.target===$("gallery-dialog"))close();});
$("legal-open").addEventListener("click",()=>{$("legal-dialog").hidden=false;});$("legal-close").addEventListener("click",()=>{$("legal-dialog").hidden=true;});
$("legal-dialog").addEventListener("click",e=>{if(e.target===$("legal-dialog"))$("legal-dialog").hidden=true;});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(active>=0)close();$("legal-dialog").hidden=true;}if(active>=0&&e.key==="ArrowLeft")view(active-1);if(active>=0&&e.key==="ArrowRight")view(active+1);});
const form=$("contact-form"),submit=form.querySelector("[type=submit]"),feedback=$("form-feedback");
form.addEventListener("submit",async e=>{
e.preventDefault();if(submit.disabled||!form.reportValidity())return;
const data=new FormData(form);if(String(data.get("_honey")||"").trim())return;
const payload={name:String(data.get("name")||"").trim(),email:String(data.get("email")||"").trim(),telephone:String(data.get("telephone")||"").trim(),prestation:String(data.get("prestation")||""),message:String(data.get("message")||"").trim(),_subject:"Demande de contact depuis le site de démonstration Negara Couverture",_template:"table",_honey:"",_url:location.href};
submit.disabled=true;submit.textContent="Envoi en cours…";feedback.hidden=true;
try{const r=await fetch("https://formsubmit.co/ajax/adamkadi.website@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(payload)});const j=await r.json();if(r.ok&&(j.success===true||j.success==="true")){feedback.textContent="Votre demande a été transmise au service d'envoi. Merci !";feedback.className="email-feedback success";form.reset();}else if(/activation|activate|confirm.*email/i.test(j.message||"")){feedback.textContent="Le formulaire doit être activé par le gestionnaire. Vous pouvez appeler l'entreprise directement.";feedback.className="email-feedback warning";}else{throw Error("Transmission non confirmée");}}
catch(e){feedback.textContent="L'envoi n'a pas pu être confirmé. Appelez le 06 07 45 60 95 ou réessayez.";feedback.className="email-feedback error";}
finally{submit.disabled=false;submit.textContent="Envoyer ma demande par e-mail →";feedback.hidden=false;}
});
