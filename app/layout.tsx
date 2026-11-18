import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist";
import "./globals.css";
import "./react-bits.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteOrigin } from "@/lib/metadata";
const origin = siteOrigin();
export const metadata: Metadata = {
  metadataBase: new URL(origin || "http://127.0.0.1:3100"),
  title: { default: "BUILDER. — AI Product Builder", template: "%s — BUILDER." },
  description: "曾子健的产品与工程作品集。从业务问题出发，设计 AI 产品，构建全栈系统，以证据呈现个人项目实践。",
  applicationName: "BUILDER.", robots: { index: true, follow: true },
  openGraph: { title: "BUILDER. — AI Product Builder", description: "From complex problems to working AI products. Three projects, their engineering, and the evidence behind them.", siteName: "BUILDER.", locale: "zh_CN", type: "website", ...(origin ? { url: origin } : {}) },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F7F7F5" }, { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" }] };
const themeScript = `(function(){try{var t=localStorage.getItem('builder-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})()`;
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="zh-CN" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }}/></head><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>; }
