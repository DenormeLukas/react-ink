"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const SelectInput = require('ink-select-input');


const App = ({ name = 'Istanbul! ' }) => (


	<>
		<Box borderStyle="round" borderColor="red" width="42.5%">
			<Text color="yellow">
				{" "}Welkom,{" "}in kebabzaak {name}
			</Text>
		</Box>


		<Box borderStyle="round" borderColor="red" width="42.5%">
			<SelectInput items={items} onSelect={handleSelect} />
		</Box>
	</>
);

module.exports = App;

