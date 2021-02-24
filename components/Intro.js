const React = require("react");
const { Text, Box } = require("ink");


const Intro = ({ name }) => {

    return (

        <Box borderStyle="round" borderColor="red" width="42.5%">
            <Text color="yellow">
                {" "}Welkom,{" "}in kebabzaak {name}
            </Text>
        </Box>

    )

}

module.exports = Intro;