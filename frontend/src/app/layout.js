import "./globals.css";
import {getGlobalPageData} from "@/data/loaders";
import {Header} from "@/components/custom/Header";
import {Footer} from "@/components/custom/Footer";
import {FooterCTA} from "@/components/custom/FooterCTA";

export const metadata = {
    title: "Byteklaar",
    description: "Jouw oplossingen in een hapklare website.",
};

export default async function RootLayout({children}) {
    const globalData = await getGlobalPageData();
    // TODO responsive

    return (
        <html lang="en">
        <body className="font-display">
        <Header data={globalData.header}/>
        <div>{children}</div>
        <FooterCTA data={globalData.footerCta}/>
        <Footer data={globalData.footer}/>
        </body>
        </html>
    );
}
