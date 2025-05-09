// TextFieldHC.js
// A custom HTML generator for an input type=text field with MUI look

function TextFieldHC(hg, props, labelText) {
    // Create the outer div with MUI class
    const outerDiv = hg.div({ class: "mui-textfield mui-textfield--float-label" });

    // Create the input element
    const inputElement = hg.input({
        type: "text",
        ...props // Spread the properties passed to the input
    });

    // Create the label element
    const labelElement = hg.label({}, labelText);

    // Append the input and label to the outer div
    outerDiv.appendChild(inputElement);
    outerDiv.appendChild(labelElement);

    return outerDiv;
}

// Example usage:
// const hg = new HG();
// const textField = TextFieldHC(hg, { id: "myTextField", placeholder: "Enter text" }, "My Label");
// document.body.appendChild(textField);