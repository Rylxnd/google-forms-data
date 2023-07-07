import axios from "axios";
import { load } from "cheerio";
import pretty from "pretty";

export default async function ScrapeGoogleFormData(formId) {
    try {
        const { data } = await axios.get(`https://docs.google.com/forms/d/e/${formId}/viewform`);
        const $ = load(data);

        const dataString = $('script[type="text/javascript"]')
            .contents()
            .first()
            .text();

        const returnString = dataString.substring(0, dataString.length - 1).replace("var FB_PUBLIC_LOAD_DATA_ = ", "");

        return JSON.parse(returnString);
    } catch (error) {
        throw error;
    }
}