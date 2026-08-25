for (let i=1;i<=4;i++) await import(`./bank${i}.js`);
const parts=await Promise.all(Array.from({length:5},(_,i)=>fetch(`./app${i+1}.txt`).then(r=>{if(!r.ok)throw new Error(`runtime part ${i+1} failed`);return r.text()})));
if((globalThis.__CIVICS_BANK||[]).length!==128) throw new Error(`Expected 128 civics questions, found ${(globalThis.__CIVICS_BANK||[]).length}`);
const blob=new Blob([parts.join("")],{type:"text/javascript"});
const u=URL.createObjectURL(blob);
try{await import(u)}finally{URL.revokeObjectURL(u)}
