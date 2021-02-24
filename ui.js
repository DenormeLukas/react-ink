'use strict';
const React = require('react');
const { Text } = require('ink');

const App = ({ name = 'allemaal! ', question = 'Hoe gaat het met jullie' }) => (
	<Text>
		Hallo, <Text color="green">{name}</Text>

		<Text color="green">{question}</Text>
	</Text>
);

module.exports = App;
