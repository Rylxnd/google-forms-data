import { Form, Question } from "./classes.js"

export default async function ParseFormData(data) {
    try {
        let returnObj = null;

        const formData = data[1];

        returnObj = new Form(formData[8], formData[0], formData[2] ? formData[2][0] : null, formData[7][1]);

        for (var index in formData[1])
        {
            const questionData = formData[1][index];
            let question = new Question(questionData[1], questionData[2], questionData[3], questionData[4][0][2], questionData[4][0][1]);
            returnObj.questions.push(question);
        }

        return returnObj;
    } catch (error) {
        throw error;
    }
}