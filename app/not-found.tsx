import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
export default function NotFound() {return <section className="shell not-found"><p className="eyebrow">404 / A SMALL DETOUR</p><h1>This path isn’t<br/>part of the plan<span className="accent">.</span></h1><p>The page may have moved. There’s still good work to explore.</p><div className="hero-actions"><Link href="/" className="button primary"><ArrowLeft size={16}/>Back home</Link><Link href="/projects" className="text-link">Explore work<ArrowUpRight size={18}/></Link></div></section>;}
