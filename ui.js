'use strict';
const React = require('react');
const { Text } = require('ink');

const App = ({ name = 'Mongolen! ', question = 'Hoe gaat het met je dikke kogit?' }) => (
	<Text>
		Hello, <Text color="green">{name}</Text>

		<Text color="green">{question}</Text>
	</Text>
);

module.exports = App;
