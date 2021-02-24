const React = require("react");
const SelectInput = require('ink-select-input');
const fetch = require('node-fetch');
const { Text, Box } = require("ink");
const food = require('./menu.json');

const Choice = () => {

    console.log(food)
    


    return (

        // <Box borderStyle="round" borderColor="red" width="42.5%">
            {/* <SelectInput onSelect={handleSelect} /> */}
        // </Box>

    )
}

module.exports = Choice;