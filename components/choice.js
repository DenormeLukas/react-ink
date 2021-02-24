const SelectInput = require('ink-select-input');

const Choice = (items) => {

    <Box borderStyle="round" borderColor="red" width="42.5%">
        <SelectInput items={items} onSelect={handleSelect} />
    </Box>

}

export default Choice;