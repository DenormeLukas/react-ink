'use strict';
const React = require('react');
const { Text } = require('ink');

const App = ({ name = 'Mongolen! ', question = 'Hoe gaat het met jullie dikke koppen?' }) => (
	<Text>
		Hello, <Text color="green">{name}</Text>

		<Text color="green">{question}</Text>
	</Text>
);

module.exports = App;
