const base=new URL('.',import.meta.url);
const parts=await Promise.all(Array.from({length:5},(_,i)=>fetch(new URL(`app${i+1}.txt`,base)).then(r=>{if(!r.ok)throw new Error(`runtime part ${i+1} failed`);return r.text()})));
const blob=new Blob([parts.join("")],{type:"text/javascript"});
const u=URL.createObjectURL(blob);
try{await import(u)}finally{URL.revokeObjectURL(u)}
