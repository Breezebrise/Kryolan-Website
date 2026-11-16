// Preview colors and tags are editorial approximations, not measurements or photos.
// Shelf and report metadata describe the exact formula. Never transfer old formula reports to a reissue.
export const sources = {
  babydoll: ["P.Louise listing · Lip Base in Babydoll", "https://shop.tiktok.com/us/pdp/1732797840151122148"],
  ink: ["Maybelline · Super Stay Matte Ink", "https://www.maybelline.com/lip-makeup/lipstick/superstay-matte-ink-liquid-lipstick"],
  matte: ["Maybelline · Color Sensational The Mattes", "https://www.maybelline.com/lip-makeup/lipstick/color-sensational-the-mattes-matte-finish-lipstick-makeup"],
  revlon: ["Revlon · Super Lustrous Lipstick", "https://www.revlon.com/products/super-lustrous-lipstick-with-moisturizing-formula"],
  elf: ["e.l.f. · Sheer Slick Black Cherry", "https://www.elfcosmetics.com/products/sheer-slick-lipstick-black-cherry-black-cherry/"],
  clinique: ["Clinique · Almost Lipstick", "https://www.clinique.com/product/1605/4772/makeup/lipsticks/almost-lipstick-in-black-honey-pink-honey-and-nude-honey?pr_rd_page=11&shade=Black_Honey"],
  mac: ["MAC · M·A·Cximal Sleek Satin", "https://www.maccosmetics.com/products/m-a-cximal-sleek-satin-lipstick?pr_rd_page=3&shade=Truth_Be_Untold"],
  ct: ["Charlotte Tilbury · Pillow Talk Original", "https://www.charlottetilbury.com/us/product/matte-revolution-lipstick-pillowtalk"],
  warmOlive: ["r/OliveMUA · warm olive lineup", "https://www.reddit.com/r/OliveMUA/comments/1gqfkl5/my_favourite_lipsticks_as_a_warm_olive/"],
  coolOlive: ["r/OliveMUA · fair/light cool olive lineup", "https://www.reddit.com/r/OliveMUA/comments/1atlpmb"],
  mutedOlive: ["r/OliveMUA · light muted olive lineup", "https://www.reddit.com/r/OliveMUA/comments/1dm9eew/cheapdrugstore_lipsticks_on_light_neutral_muted/"],
  coolOliveDark: ["r/OliveMUA · light-medium neutral-cool olive lineup", "https://www.reddit.com/r/OliveMUA/comments/1mn7qy8"],
  affordable: ["r/OliveMUA · affordable arm and lip swatches", "https://www.reddit.com/r/OliveMUA/comments/1bio5c2"],
  raisin: ["Temptalia · Rum Raisin photos and wear review", "https://www.temptalia.com/product/revlon-super-lustrous-lipstick/rum-raisin/"]
};

export const shades = [
  {id:"babydoll",brand:"P.Louise",name:"Babydoll",formula:"Lip Base",type:"buildable",family:"Taupe beige rose",hex:"#a87972",warmth:1,muted:3,depth:1,source:"babydoll",description:"Editorial reference for a muted taupe-beige rose. No verified wearer photo in this starter catalog."},
  {id:"seductress",brand:"Maybelline",name:"65 Seductress",formula:"Super Stay Matte Ink",type:"opaque",family:"Dusty rose nude",hex:"#b57b70",warmth:2,muted:2,depth:1,drugstore:true,source:"ink",notes:[
    {source:"affordable",view:"arm",profile:"Olive depth/undertone not specified",light:"Direct overcast daylight and indirect light",pull:"Peachy and purple on one wearer",summary:"The wearer did not find it a flattering match and described an unusual peach-to-purple, greige effect."},
    {source:"affordable",view:"lips",profile:"Olive depth/undertone not specified",light:"Lip photo lighting not specified",summary:"The post includes lip photos in the same product order as the swatches. Liner use was not reported."},
    {source:"mutedOlive",view:"arm",profile:"Light, neutral-cool, very muted olive",light:"Multiple lighting conditions"}
  ]},
  {id:"amazonian",brand:"Maybelline",name:"Amazonian",formula:"Super Stay Matte Ink",type:"opaque",family:"Terracotta caramel brown",hex:"#a35d45",warmth:4,muted:1,depth:2,drugstore:true,source:"ink",notes:[
    {source:"warmOlive",view:"arm",profile:"Warm olive",light:"Indoor natural light",summary:"The wearer liked it as a dramatic brown."},
    {source:"warmOlive",view:"lips",profile:"Warm olive",light:"Indoor natural light, photographed across different days",summary:"Shown without lip liner."}
  ]},
  {id:"groundbreaker",brand:"Maybelline",name:"Ground-Breaker",formula:"Super Stay Matte Ink",type:"opaque",family:"Rust brick red",hex:"#a3483d",warmth:4,muted:0,depth:2,drugstore:true,source:"ink",notes:[
    {source:"warmOlive",view:"arm",profile:"Warm olive",light:"Indoor natural light",pull:"Warm brick, not too orange for this wearer"},
    {source:"warmOlive",view:"lips",profile:"Warm olive",light:"Indoor natural light, photographed across different days",summary:"Shown without lip liner."}
  ]},
  {id:"voyager",brand:"Maybelline",name:"50 Voyager",formula:"Super Stay Matte Ink",type:"opaque",family:"Blackened wine",hex:"#622d3d",warmth:0,muted:1,depth:4,drugstore:true,source:"ink",notes:[
    {source:"coolOliveDark",view:"arm",profile:"Light-medium, neutral-cool olive",light:"Lighting not specified"}
  ]},
  {id:"touch-of-spice",brand:"Maybelline",name:"Touch of Spice",formula:"Color Sensational The Mattes",type:"opaque",family:"Muted rosy plum",hex:"#a46a74",warmth:2,muted:2,depth:2,drugstore:true,source:"matte"},
  {id:"rum-raisin",brand:"Revlon",name:"535 Rum Raisin",formula:"Super Lustrous Lipstick",type:"buildable",family:"Warm coppery red",hex:"#934d4e",warmth:3,muted:2,depth:3,drugstore:true,source:"revlon",notes:[
    {source:"mutedOlive",view:"arm",profile:"Light, neutral-cool, very muted olive",light:"Multiple lighting conditions"},
    {source:"raisin",view:"lips",profile:"Reviewer olive undertone not stated",light:"Gallery lighting not specified",pull:"Coppery red in the editor’s review",summary:"The editor reported semi-opaque color in one layer and fuller coverage when built up."}
  ]},
  {id:"black-cherry",brand:"e.l.f.",name:"Black Cherry",formula:"Sheer Slick Lipstick",type:"sheer",family:"Sheer cherry-berry",hex:"#8e4058",warmth:1,muted:1,depth:3,drugstore:true,source:"elf",notes:[
    {source:"warmOlive",view:"arm",profile:"Warm olive",light:"Indoor natural light",summary:"This was the reviewer’s favorite of the sheer shades they compared. They only arm-swatched this group."}
  ]},
  {id:"black-honey",brand:"Clinique",name:"Black Honey",formula:"Almost Lipstick",type:"sheer",family:"Sheer berry brown",hex:"#78414a",warmth:1,muted:2,depth:3,source:"clinique",notes:[
    {source:"warmOlive",view:"arm",profile:"Warm olive",light:"Indoor natural light",pull:"Too purple for this wearer"},
    {source:"coolOliveDark",view:"arm",profile:"Light-medium, neutral-cool olive",light:"Lighting not specified"}
  ]},
  {id:"creme-coffee",brand:"MAC",name:"Crème In Your Coffee",formula:"M·A·Cximal Sleek Satin Lipstick",type:"opaque",family:"Midtone pink brown",hex:"#996463",warmth:2,muted:2,depth:2,source:"mac",description:"This entry is for the current Sleek Satin listing. Older photos of the original Cremesheen are not treated as swatches of this formula."},
  {id:"pillow-talk",brand:"Charlotte Tilbury",name:"Pillow Talk Original",formula:"Matte Revolution",type:"buildable",family:"Nude pink",hex:"#b97d75",warmth:2,muted:2,depth:1,source:"ct",notes:[
    {source:"coolOlive",view:"arm",profile:"Fair/light cool olive",light:"Indoor daylight-style LED",pull:"Pulled orange on this wearer",summary:"The post refers to Pillow Talk without a variant suffix. Check the packaging before treating this as a confirmed Original comparison."}
  ]}
];

export function candidates(items,reference,{query="",type="",drugstore=false,goal=""}={}) {
  const term=query.trim().toLowerCase();
  return items.filter(s=>s.id!==reference.id
    && (!term || [s.brand,s.name,s.formula,s.family].join(" ").toLowerCase().includes(term))
    && (!type || s.type===type) && (!drugstore || s.drugstore)
    && (!goal || (goal==="cooler" && s.warmth<reference.warmth)
      || (goal==="muted" && s.muted>reference.muted) || (goal==="deep" && s.depth>reference.depth)
      || (goal==="opaque" && ["sheer","buildable","opaque"].indexOf(s.type)>["sheer","buildable","opaque"].indexOf(reference.type))));
}

export const sharedSwatches=(a,b,view)=>[...new Set((a.notes||[]).filter(n=>n.view===view && (b.notes||[]).some(m=>m.view===view && m.source===n.source)).map(n=>n.source))];
