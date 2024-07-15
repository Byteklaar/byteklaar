import "./globals.css";
import {getGlobalPageData, getGlobalPageMetadata} from "@/data/loaders";
import {Header} from "@/components/custom/Header";
// import {HeadSeo} from "@/components/custom/HeadSeo";
import {Footer} from "@/components/custom/Footer";
import {FooterCTA} from "@/components/custom/FooterCTA";
import Fathom from "@/app/fathom";
import LeadInfo from "@/app/leadInfo";

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
        <LeadInfo/>
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
