const React = require("react");
const { Text, Box } = require("ink");


const Outro = ({ name }) => {

    return (

        <Box borderStyle="round" borderColor="red" width="42.5%">
            <Text color="yellow">
                {" "}Bedankt voor je bezoek aan kebabzaak {name}
            </Text>

            <Text color="green">
                {" "}Je moet ... betalen
            </Text>
        </Box>

    )

}

module.exports = Outro;