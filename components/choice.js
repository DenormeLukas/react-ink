const React = require("react");
const SelectInput = require('ink-select-input');
const fetch = require('node-fetch');
const { render, Text, Box } = require("ink");
const dishes = require('./menu.json');

const Choice = () => {

    return (
        <>
        {
            dishes.map((item) => {
            // <SelectInput />
            console.log(item);
        })
        }

        {/* // <Box borderStyle="round" borderColor="red" width="42.5%">
    //<SelectInput onSelect={handleSelect} />
        // </Box> */}
        </>
    );

}

render(<Choice/>);

module.exports = Choice;
