"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const Choice = require('components/choice.js');


const App = ({ name = 'Istanbul! ' }) => (

	<>
		<Box borderStyle="round" borderColor="red" width="42.5%">
			<Text color="yellow">
				{" "}Welkom,{" "}in kebabzaak {name}
			</Text>
		</Box>

		<Choice items={items} />

	</>

);

module.exports = App;

