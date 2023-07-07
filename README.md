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

<details>
  <summary>Example Response</summary>

###
    
```js
    {
      name: 'My Super Cool Form',
      description: 'My super cool description',
      responseMessage: 'Your super cool response has been recorded',
      closedMessage: 'My super cool form is closed :(',
      questions: [
        {
          name: 'Short Text Question',
          description: null,
          type: 0,
          options: null,
          required: 1
        },
        {
          name: 'Paragraph Question',
          description: null,
          type: 1,
          options: null,
          required: 1
        },
        {
          name: 'Multiple Choice Question',
          description: null,
          type: 2,
          options: [
            [ 'Option 1', null, null, null, 0 ],
            [ 'Option 2', null, null, null, 0 ],
            [ 'Option 3', null, null, null, 0 ]
          ],
          required: 1
        },
        {
          name: 'Checkbox Question',
          description: null,
          type: 4,
          options: [
            [ 'Option 1', null, null, null, 0 ],
            [ 'Option 2', null, null, null, 0 ],
            [ 'Option 3', null, null, null, 0 ]
          ],
          required: 1
        },
        {
          name: 'Dropdown Question',
          description: null,
          type: 3,
          options: [
            [ 'Option 1', null, null, null, 0 ],
            [ 'Option 2', null, null, null, 0 ],
            [ 'Option 3', null, null, null, 0 ]
          ],
          required: 1
        },
        {
          name: 'Linear Scale Question',
          description: null,
          type: 5,
          options: [ [ '1' ], [ '2' ], [ '3' ], [ '4' ], [ '5' ] ],
          required: 1
        },
        {
          name: 'Multiple Choice Grid Question',
          description: null,
          type: 7,
          options: [ [ 'Column 1' ], [ 'Column 2' ] ],
          required: 1
        },
        {
          name: 'Checkbox Grid Question',
          description: null,
          type: 7,
          options: [ [ 'Column 1' ], [ 'Column 2' ] ],
          required: 1
        },
        {
          name: 'Date Question',
          description: null,
          type: 9,
          options: null,
          required: 1
        },
        {
          name: 'Time Question',
          description: null,
          type: 10,
          options: null,
          required: 1
        },
        {
          name: 'Not Required Question',
          description: null,
          type: 2,
          options: [
            [ 'Option 1', null, null, null, 0 ],
            [ 'Option 2', null, null, null, 0 ],
            [ 'Option 3', null, null, null, 0 ]
          ],
          required: 0
        },
        {
          name: 'Question With a Description',
          description: 'My Super Cool Question Description',
          type: 0,
          options: null,
          required: 1
        }
      ]
    }
```
    
</details>
