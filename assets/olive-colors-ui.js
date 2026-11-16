import { shades,sources,candidates,sharedSwatches } from "./olive-colors.js";
const $=id=>document.getElementById(id);
const e=s=>String(s).replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]));
const ref=$("reference"), cmp=$("comparison");
const byId=id=>shades.find(s=>s.id===id);
const title=s=>s.brand+" · "+s.name;
const option=s=>new Option(title(s),s.id);
const source=(id,label)=>`<a href="${e(sources[id][1])}" target="_blank" rel="noopener">${e(label||sources[id][0])}</a>`;
const filters=()=>({query:$("search").value,goal:$("goal").value,drugstore:$("drugstore").checked});

ref.replaceChildren(...shades.map(option));
ref.value="babydoll";

function refreshChoices(preferred=cmp.value) {
  const rows=candidates(shades,byId(ref.value),filters());
  cmp.replaceChildren(...rows.map(option));
  if (rows.some(s=>s.id===preferred)) cmp.value=preferred;
  if (!rows.length) cmp.append(new Option("No shades match these filters",""));
  cmp.disabled=!rows.length;
  $("swap").disabled=!rows.length;
  $("match-count").textContent=rows.length===0?"No shades match yet. Try loosening a filter.":`${rows.length} option${rows.length===1?"":"s"} for shade B`;
  render();
}
function resetFilters(){
  $("search").value="";
  $("goal").value="";
  $("drugstore").checked=false;
}
const coverage={sheer:"Sheer",buildable:"Buildable",opaque:"Opaque"};
const index={sheer:0,buildable:1,opaque:2};
function tile(s,letter){
  return s?`<article class="tile"><div class="ink-chip" style="background:${e(s.hex)}" aria-hidden="true"></div>
  <div class="tile-header">${letter} · ${e(s.brand)}${s.drugstore?" · Drugstore":""}</div><h3>${e(s.name)}</h3>
  <p class="hint">${e(s.formula)}</p><p>${e(s.family)} · ${coverage[s.type]}</p>
  ${s.description?`<p class="hint">${e(s.description)}</p>`:""}<p class="hint">${source(s.source,"Product listing")}</p></article>`:
  `<article class="tile"><h3>${letter} · No comparison selected</h3><p class="hint">Clear a filter to choose a second shade.</p></article>`;
}
function evidence(s,view,profile){
  if (!s) return "";
  const notes=(s.notes||[]).filter(n=>n.view===view && (!profile || n.profile.toLowerCase().includes(profile)));
  return `<article class="tile"><h3>${e(title(s))}</h3>
  ${notes.length?notes.map(n=>`<div class="report"><p class="hint">${e(n.profile)} · ${e(n.light)}</p>
    ${n.pull?`<span class="pill">${e(n.pull)}</span>`:""}${n.summary?`<p>${e(n.summary)}</p>`:""}<p class="hint">${source(n.source,"Open source photos · "+sources[n.source][0])}</p></div>`).join(""):
    `<p class="hint">No ${view==="arm"?"arm":"lip"} photo source in this catalog${profile?" for this wearer filter":""}. The preview above is an estimate.</p>`}</article>`;
}
function render(){
  const a=byId(ref.value),b=byId(cmp.value), view=document.querySelector('input[name="view"]:checked').value, profile=$("profile").value;
  $("chips").innerHTML=tile(a,"A")+tile(b,"B");
  if (b) {
    const compare=(x,y,more,less)=>x>y?more:x<y?less:"";
    const differences=[
      compare(b.warmth,a.warmth,"warmer","cooler"),
      compare(b.muted,a.muted,"more muted","less muted"),
      compare(b.depth,a.depth,"deeper","lighter"),
      compare(index[b.type],index[a.type],"more opaque","sheerer")
    ].filter(Boolean);
    $("delta").textContent=differences.length?`The catalog estimates B to be ${differences.join(", ")} than A.`:"A and B have similar catalog tags. Compare the source photos before calling them a match.";
  } else $("delta").textContent="";
  $("reports").innerHTML=evidence(a,view,profile)+evidence(b,view,profile);
  const same=b && sharedSwatches(a,b,view).filter(id=>[a,b].every(s=>s.notes.some(n=>n.view===view && n.source===id && (!profile || n.profile.toLowerCase().includes(profile)))));
  $("shared").innerHTML=same?.length?"Both shades appear in the same post. Check the photo order and lighting before comparing. "+same.map(id=>source(id)).join(" · "):"Source photos open separately. Different people, lighting, and lip color can change the result.";
}
ref.addEventListener("change",()=>refreshChoices());
cmp.addEventListener("change",render);
for (const id of ["search","goal","drugstore"]) $(id).addEventListener(id==="search"?"input":"change",()=>refreshChoices());
$("clear").addEventListener("click",()=>{resetFilters();refreshChoices();});
$("swap").addEventListener("click",()=>{const a=ref.value;if(!cmp.value)return;ref.value=cmp.value;resetFilters();refreshChoices(a);});
$("profile").addEventListener("change",render);
document.querySelectorAll('input[name="view"]').forEach(x=>x.addEventListener("change",render));

for(const side of ["a","b"]){
  const input=$("photo-"+side), img=$("image-"+side), clear=$("clear-"+side);
  let url="";
  function remove(reset=true){
    if(url)URL.revokeObjectURL(url);
    url="";img.removeAttribute("src");img.hidden=clear.hidden=true;
    if(reset)input.value="";
  }
  input.addEventListener("change",()=>{
    const file=input.files[0]; if(!file)return;
    remove(false); $("photo-status").textContent="";
    if(!file.type.startsWith("image/")){remove();$("photo-status").textContent="Choose an image file.";return;}
    url=URL.createObjectURL(file);img.src=url;img.hidden=clear.hidden=false;
  });
  img.addEventListener("error",()=>{remove();$("photo-status").textContent="That image could not be opened.";});
  clear.addEventListener("click",()=>{remove();$("photo-status").textContent="Photo "+side.toUpperCase()+" removed.";input.focus();});
}
refreshChoices("seductress");
