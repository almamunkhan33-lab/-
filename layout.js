import './globals.css';
export const metadata={title:'নতুন দিনের বার্তা',description:'সত্যের সাথে ন্যায়ের পথে অবিচল',metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),openGraph:{siteName:'নতুন দিনের বার্তা',locale:'bn_BD',type:'website'}};
export default function RootLayout({children}){return <html lang="bn-BD"><body>{children}</body></html>}
