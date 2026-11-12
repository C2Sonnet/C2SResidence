import fs from 'node:fs';
import path from 'node:path';
const root=new URL('../',import.meta.url).pathname;
const required=['public/index.html','public/css/app.css','public/js/main.js','public/data/project.json','app','database/schema','database/migrations','database/seed','data/project.json','docs/ARCHITECTURE.md','materials','media','nginx/c2sresidence.example.conf','scripts','tools','tests','config.example/README.md','.gitignore'];
for(const rel of required){if(!fs.existsSync(path.join(root,rel))) throw new Error(`Missing: ${rel}`)}
if(fs.existsSync(path.join(root,'site')))throw new Error('Deprecated site root');
console.log('PASS: public/ document root and functional scaffolding');
