"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const Intro = importJsx('./components/Intro.js');
const Outro = importJsx('./components/Outro.js');
const Choice = importJsx('./components/Choice.js');


const App = ({ name = 'Istanbul! ' }) => {

	return (
		<>

			<Intro name={name} />

			<Choice />

			<Outro name={name} />

		</>
	)
};


module.exports = App;
