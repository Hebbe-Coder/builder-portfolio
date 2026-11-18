"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/data/navigation";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const sync = () => setDark(document.documentElement.dataset.theme === "dark");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); } };
    window.addEventListener("keydown", close);
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const system = () => { if (!localStorage.getItem("builder-theme")) document.documentElement.dataset.theme = query.matches ? "dark" : "light"; };
    query.addEventListener("change", system);
    return () => { observer.disconnect(); window.removeEventListener("keydown", close); query.removeEventListener("change", system); };
  }, []);
  function toggleTheme() { const theme = dark ? "light" : "dark"; document.documentElement.dataset.theme = theme; try { localStorage.setItem("builder-theme", theme); } catch {} setDark(!dark); }
  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="brand" aria-label="BUILDER. home" onClick={() => setOpen(false)}>BUILDER<span>.</span></Link>
    <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>{item.label}</Link>)}</nav>
    <div className="header-actions"><button className="icon-button" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><Link className="header-contact" href="/#contact">Let’s connect <ArrowUpRight size={15}/></Link><button id="menu-toggle" className="icon-button menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
    {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={20}/></Link>)}<Link href="/#contact" onClick={() => setOpen(false)}>Let’s connect<ArrowUpRight size={20}/></Link></nav>}
  </div></header>;
}
