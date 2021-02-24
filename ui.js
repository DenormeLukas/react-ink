"use strict";
const React = require("react");
const { Text, Box } = require("ink");


const App = ({ name = 'Istanbul! ' }) => (
	<Box borderStyle="round" borderColor="red" width="45%">
		<Text color="yellow">
			Welkom,{" "} in kebabzaak {name}
		</Text>
	</Box>
);

module.exports = App;
