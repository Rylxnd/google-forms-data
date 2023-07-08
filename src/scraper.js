import axios from 'axios';
import { load } from 'cheerio';

export default async function ScrapeGoogleFormData(formId) {
    try {
        const { data } = await axios.get(`https://docs.google.com/forms/d/e/${formId}/viewform`);
        const $ = load(data);

        var headerUrlMatch = $('style[nonce]').contents().first().text().match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gm);

        const imgUrl = headerUrlMatch ? headerUrlMatch[0] : null;

        const dataString = $('script[type="text/javascript"]').contents().first().text();

        const returnString = dataString.substring(0, dataString.length - 1).replace('var FB_PUBLIC_LOAD_DATA_ = ', '');
        var dataObject = JSON.parse(returnString);
        dataObject[dataObject.length] = imgUrl;

        return dataObject;
    } catch (error) {
        throw error;
    }
}