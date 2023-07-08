export class Question {
    constructor (name, description, type, required, options = null) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.options = options;
        this.required = required;
    }
}

export class Form {
    constructor(name, description, responseMessage, closedMessage, imageUrl, themeColor) {
        this.name = name;
        this.description = description;
        this.responseMessage = responseMessage;
        this.closedMessage = closedMessage
        this.headerImage = imageUrl;
        this.themeColorRGB = themeColor;

        this.questions = [];
    }
}