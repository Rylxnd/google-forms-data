import GetGoogleFormData from "./index.js";

GetGoogleFormData("FORM-ID-HERE").then(form => {
    console.log(form);
}).catch(error => {
    console.log(error);
});