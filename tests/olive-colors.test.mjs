import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { shades,sources,candidates,sharedSwatches } from "../assets/olive-colors.js";
const get=id=>shades.find(s=>s.id===id);
test("curated data has valid formula IDs, preview chips and source links",()=>{
  assert.equal(new Set(shades.map(s=>s.id)).size,11);
  assert.equal(shades.filter(s=>s.drugstore).length,7);
  for(const s of shades){
    assert.match(s.hex,/^#[0-9a-f]{6}$/);
    assert.ok(sources[s.source]);
    for(const n of s.notes||[]){
      assert.ok(["arm","lips"].includes(n.view));
      assert.equal(new URL(sources[n.source][1]).protocol,"https:");
      assert.ok(n.profile && n.light);
    }
  }
  assert.equal(get("babydoll").formula,"Lip Base");
  assert.equal(get("babydoll").notes,undefined);
});
test("direction filters are relative and combine with brand and drugstore filters",()=>{
  const s=get("seductress");
  const filtered=candidates(shades,s,{goal:"cooler",drugstore:true});
  assert.deepEqual(filtered.map(x=>x.id),["voyager","black-cherry"]);
  assert.deepEqual(candidates(shades,s,{goal:"deep",query:"revlon",drugstore:true}).map(x=>x.id),["rum-raisin"]);
  assert.deepEqual(candidates(shades,s,{goal:"opaque"}),[]);
  assert.ok(candidates(shades,get("babydoll"),{goal:"opaque"}).every(x=>x.type==="opaque"));
  assert.ok(!candidates(shades,s).includes(s));
});
test("same-post comparisons distinguish arm swatches from lip photos",()=>{
  assert.deepEqual(sharedSwatches(get("seductress"),get("rum-raisin"),"arm"),["mutedOlive"]);
  assert.deepEqual(sharedSwatches(get("seductress"),get("rum-raisin"),"lips"),[]);
  assert.deepEqual(sharedSwatches(get("amazonian"),get("groundbreaker"),"lips"),["warmOlive"]);
  assert.deepEqual(sharedSwatches(get("babydoll"),get("seductress"),"arm"),[]);
});
test("every site entry point links to the static comparator",()=>{
  for(const name of ["index.html","olive.html","seasons.html"])assert.match(fs.readFileSync(new URL("../"+name,import.meta.url),"utf8"),/olive-color-lab\.html/);
  assert.match(fs.readFileSync(new URL("../olive-color-lab.html",import.meta.url),"utf8"),/assets\/olive-colors-ui\.js/);
});

test("UI smoke test selects, swaps, filters and switches to lip photo sources",async ()=>{
  const els=new Map;
  class El {
    value=""; checked=false; events={}; options=[]; innerHTML=""; textContent="";
    addEventListener(k,f){this.events[k]=f;}
    replaceChildren(...options){this.options=options;this.value=options[0]?.value||"";}
    append(o){if(!this.options.length)this.value=o.value;this.options.push(o);}
  }
  const $=id=>{if(!els.has(id))els.set(id,new El);return els.get(id);};
  const arm={...new El,value:"arm",addEventListener:El.prototype.addEventListener};
  const lips={...new El,value:"lips",addEventListener:El.prototype.addEventListener};
  let active=arm;
  globalThis.document={getElementById:$,querySelector:()=>active,querySelectorAll:()=>[arm,lips]};
  globalThis.Option=class{constructor(text,value){this.text=text;this.value=value;}};
  await import("../assets/olive-colors-ui.js");
  assert.equal($("reference").value,"babydoll");
  assert.equal($("comparison").value,"seductress");
  assert.match($("reports").innerHTML,/Peachy and purple/);
  $("swap").events.click();
  assert.equal($("reference").value,"seductress");
  assert.equal($("comparison").value,"babydoll");
  $("drugstore").checked=true;
  $("goal").value="cooler";
  $("goal").events.change();
  assert.deepEqual($("comparison").options.map(o=>o.value),["voyager","black-cherry"]);
  active=lips;lips.events.change();
  assert.match($("reports").innerHTML,/Liner use was not reported/);
  $("search").value="impossible";
  $("search").events.input();
  assert.match($("match-count").textContent,/No shades match/);
  assert.ok($("swap").disabled);
});
