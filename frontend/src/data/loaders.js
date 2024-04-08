import qs from "qs";
import {flattenAttributes, getStrapiURL} from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url) {
    const authToken = null; // we will implement this later getAuthToken() later
    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    };

    try {
        const response = await fetch(url, authToken ? headers : {});
        const data = await response.json();
        return flattenAttributes(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // or return null;
    }
}

export async function getHomePageData() {
    const url = new URL("/api/homepagina", baseUrl);

    url.search = qs.stringify({
        populate: {
            blocks: {
                populate: {
                    image: {
                        fields: ["url", "alternativeText"],
                    },
                    link: {
                        fields: ["url", "text"],
                    },
                    titel: "",
                    beschrijving: "",
                    stap: {
                        fields: ["text"]
                    }
                },
            },
        },
    });

    return await fetchData(url.href);
}

export async function getGlobalPageData() {
    const url = new URL('/api/global', baseUrl);

    url.search = qs.stringify({
        populate: [
            "header.logoImage",
            "header.menuLink",
            "footerCta.image",
            "footerCta.titel",
            "footerCta.link",
            "footer.logoTekst",
            "footer.socialLink",
            "footer.menuLink",
            "footer.mail",
            "footer.telefoon",
            "footer.adres",
            "footer.algemeneVoorwaarden",
            "footer.privacyBeleid"
        ]
    });

    return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
    const url = new URL("/api/global", baseUrl);

    url.search = qs.stringify({
        fields: ["titel", "beschrijving"]
    })

    return await fetchData(url.href);
}

export async function getAanpakPageData() {
    const url = new URL('/api/aanpak', baseUrl);

    url.search = qs.stringify({
        populate: {
            blocks: {
                populate: {
                    tekst_2: "",
                    image: {
                        fields: ["url", "alternativeText"],
                    }
                },
            },
        },
    });

    return await fetchData(url.href);
}