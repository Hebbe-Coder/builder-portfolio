import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt="BUILDER. — I turn complex problems into working AI products.";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{height:"100%",width:"100%",background:"#F7F7F5",color:"#111",padding:"58px 70px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}><div style={{display:"flex",justifyContent:"space-between",fontSize:22}}><span style={{fontWeight:800}}>BUILDER.</span><span style={{fontSize:15,color:"#60605c"}}>AI PRODUCT BUILDER</span></div><div style={{display:"flex",fontSize:76,letterSpacing:"-4px",lineHeight:1.08,maxWidth:1010}}>I turn complex problems into working AI products.</div><div style={{display:"flex",borderTop:"1px solid #DDDDD7",paddingTop:24,justifyContent:"space-between",fontSize:17}}><span>PRODUCT / ENGINEERING / FDE</span><span style={{color:"#2052D3"}}>Understand. Build. Validate.</span></div></div>,size);}
