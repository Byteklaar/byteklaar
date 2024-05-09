import "./globals.css";
import {getGlobalPageData, getGlobalPageMetadata} from "@/data/loaders";
import {Header} from "@/components/custom/Header";
import {Footer} from "@/components/custom/Footer";
import {FooterCTA} from "@/components/custom/FooterCTA";

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
        <body className="font-display overflow-x-hidden">
        <Header data={globalData.header}/>
        <div>{children}</div>
        <FooterCTA data={globalData.footerCta}/>
        <Footer data={globalData.footer}/>
        </body>
        </html>
    );
}
