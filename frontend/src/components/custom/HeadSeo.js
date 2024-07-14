'use client';
import Fathom from "@/app/fathom";
import Script from "next/script";
import Head from "next/head";

export function HeadSeo({data}) {
    const {titel, beschrijving} = data;
// TODO Create global per page
    return (
        <Head>
            <title>{titel}</title>
            <meta name="description" content={beschrijving} />
        </Head>
    );
}