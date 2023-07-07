# google-forms-data
This module allows you to get public Google Form Body Data. 
This is done by scraping & parsing the Google Forms data script.

Check out the NPM package [here](https://www.npmjs.com/package/google-forms-data)

## Example

```js
import GetGoogleFormData from "./index.js";

GetGoogleFormData("FORM-ID-HERE").then(form => {
    console.log(form);
}).catch(error => {
    console.log(error);
});
```
