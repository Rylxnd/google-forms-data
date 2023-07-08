import ScrapeGoogleFormData from './src/scraper.js'
import ParseFormData from './src/parser.js'

/**
 * 
 * @param {string} formId A form ID from a Google ViewForm link 
 * @returns a Form object that contains all form data
 */
export default async function(formId) {
    try {
        const data = await ScrapeGoogleFormData(formId);
        return ParseFormData(data);
    } catch (error) {
        throw error;
    }
}