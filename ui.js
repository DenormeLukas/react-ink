"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { Text, Box } = require("ink");
const Intro = importJsx('./components/Intro.js');
const Choice = importJsx('./components/Choice.js');


const App = ({ name = 'Istanbul! ' }) => {

	return (
		<>

			<Intro name={name} />

			<Choice name={items} />

		</>
	)
};


module.exports = App;

