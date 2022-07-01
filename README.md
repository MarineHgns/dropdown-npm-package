A simple method to create a dropdown and inject a label and options into it.

## Installation

To install, you can use npm or yarn:

    $ npm install react-npm-library-dropdown
    $ yarn add react-npm-library-dropdown

## Usage

```jsx

import Dropdown from "react-npm-library-dropdown"

function handleFormChange(e) {
        setEmployeeData((employee) =>({
            ...employee,
            [e.target.id]: e.target.value,
          }));
    }

<Dropdown label="label name" options={ object containing the different options } id="same as label name" handleFormChange={handleFormChange}/>



```

You can use CSS class `.dropdown select` to customize style, for example : change the default style
( .dropdown select {
width: 200px;
margin-top: 0.8em;
margin-bottom: 0.8em;
text-align: center;
background-color: #00bc774b;
border-radius: 2px;
padding: 0.15em;
font-weight: 500;
}

).
