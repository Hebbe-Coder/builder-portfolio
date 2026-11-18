import fs from 'node:fs/promises';
import path from 'node:path';
const directories=['app','components','data','content','lib','types'];
const files=[];
async function walk(directory){for(const entry of await fs.readdir(directory,{withFileTypes:true})){const file=path.join(directory,entry.name);if(entry.isDirectory())await walk(file);else if(/\.(tsx?|mdx)$/.test(file))files.push(file);}}
await Promise.all(directories.map(walk));
const failures=[];
const forbidden=['校园外卖','取餐柜','学生端','商户端','骑手端','MySQL','Production-ready','Enterprise-grade','Used by thousands'];
for(const file of files){const text=await fs.readFile(file,'utf8');for(const word of forbidden)if(text.includes(word))failures.push(`${file}: forbidden public copy ${word}`);if(/[CD]:\\(?:Users|BUILDER)/.test(text))failures.push(`${file}: local absolute path`);if(/href=["'](?:#|\/demo|\/resume\.pdf)["']/.test(text))failures.push(`${file}: fake link`);if(text.includes('\uFFFD'))failures.push(`${file}: invalid encoding`);}
const projectData=await fs.readFile('data/projects.ts','utf8');
if((projectData.match(/screenshots: \[\], video: null/g)||[]).length!==3)failures.push('Review approved media configuration before publishing.');
const profile=await fs.readFile('data/profile.ts','utf8');
for(const field of ['email','phone','githubUrl','resumeUrl'])if(!profile.includes(`${field}: null`))failures.push(`Public selection changed: review ${field}`);
const evidence=await fs.readFile('data/evidence.ts','utf8');
for(const boundary of ['0 provider calls / 32 synthetic / 0 Human Gold','144','299','8 项迁移阻塞','4 changed files'])if(!evidence.includes(boundary))failures.push(`Missing evidence boundary: ${boundary}`);
console.log(JSON.stringify({files:files.length,failures},null,2));
if(failures.length)process.exitCode=1;
