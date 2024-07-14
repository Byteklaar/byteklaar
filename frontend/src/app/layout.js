import "./globals.css";
import {getGlobalPageData, getGlobalPageMetadata} from "@/data/loaders";
import {Header} from "@/components/custom/Header";
// import {HeadSeo} from "@/components/custom/HeadSeo";
import {Footer} from "@/components/custom/Footer";
import {FooterCTA} from "@/components/custom/FooterCTA";
import Fathom from "@/app/fathom";
import Script from "next/script";

export async function generateMetadata() {
    const metadata = await getGlobalPageMetadata();
    return {
        title: metadata?.titel,
        description: metadata?.beschrijving,
    };
}

export default async function RootLayout({children}) {
    const globalData = await getGlobalPageData();
    // TODO responsive

    return (
        <html lang="en">
        <Fathom />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" strategy="beforeInteractive"/>
        <Script src="https://dfrnc.com/lib/SplitText.min.js" strategy="beforeInteractive" />
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        {/*<Head data={globalData.header}/>*/}
        <body className="font-display overflow-x-hidden">
        <Header data={globalData.header}/>
        <div>{children}</div>
        <FooterCTA data={globalData.footerCta}/>
        <Footer data={globalData.footer}/>
        </body>
        </html>
    );
}
