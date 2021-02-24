const React = require("react");
const SelectInput = require('ink-select-input');
const { Text, Box } = require("ink");

const items = "test";

const Choice = ({ items }) => {
    return (

        <Box borderStyle="round" borderColor="red" width="42.5%">
            <SelectInput items={items} onSelect={handleSelect} />
        </Box>


    )
}

module.exports = Choice;