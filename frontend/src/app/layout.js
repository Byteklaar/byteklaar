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
        <Fathom/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"
                strategy="beforeInteractive"/>
        <Script src="https://dfrnc.com/lib/SplitText.min.js" strategy="beforeInteractive"/>
        <Script id="leadinfo-script" strategy="beforeInteractive">
            {`function leadinfoScript (l, e, a, d, i, n, f, o) {
                if (!l[i]) {
                    l.GlobalLeadinfoNamespace = l.GlobalLeadinfoNamespace || [];
                    l.GlobalLeadinfoNamespace.push(i);
                    l[i] = function () {
                        (l[i].q = l[i].q || []).push(arguments)
                    };
                    l[i].t = l[i].t || n;
                    l[i].q = l[i].q || [];
                    o = e.createElement(a);
                    f = e.getElementsByTagName(a)[0];
                    o.async = 1;
                    o.src = d;
                    f.parentNode.insertBefore(o, f);
                }
            }(window, document, "script", "https://cdn.leadinfo.net/ping.js", "leadinfo", "LI-66951DF07CA22");`}</Script>
        <link rel="icon" href="/icons/favicon.ico" sizes="any"/>
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
