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