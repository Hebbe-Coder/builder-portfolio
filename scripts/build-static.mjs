import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const next = path.resolve('node_modules/next/dist/bin/next');
const result = spawnSync(process.execPath, [next, 'build'], {
  stdio: 'inherit', env: {...process.env, NEXT_STATIC_EXPORT:'1'},
});
if(result.error)throw result.error;
if(result.status!==0)process.exit(result.status??1);
const root=path.resolve('out');
let aliases=0;
function walk(directory){
  for(const entry of fs.readdirSync(directory,{withFileTypes:true})){
    const file=path.join(directory,entry.name);
    if(entry.isDirectory())walk(file);
    else if(entry.name.endsWith('.txt')){
      const segments=path.relative(root,file).split(path.sep);
      const first=segments.findIndex(segment=>segment.startsWith('__next.'));
      // Generic static hosting does not apply Next's dot-to-directory segment rewrite.
      if(first>=0&&first<segments.length-1){
        fs.copyFileSync(file,path.join(root,...segments.slice(0,first),segments.slice(first).join('.')));
        aliases++;
      }
    }
  }
}
walk(root);
fs.writeFileSync(path.join(root,'vercel.json'),JSON.stringify({framework:null,buildCommand:null,installCommand:null,outputDirectory:'.',cleanUrls:true,trailingSlash:false,headers:[{source:'/opengraph-image',headers:[{key:'Content-Type',value:'image/png'}]}]},null,2)+'\n');
console.log(`Static preview ready in out/: ${aliases} segment aliases. This does not authenticate or publish a deployment.`);
