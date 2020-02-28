let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    try {
        let data = await translate.list_terminologies({
            MaxResults: 100
        }).promise();
        console.log("data");
                console.log(data);
    } catch (err) {
        // error handling goes here
                console.log("err");
                console.log(err);

    };

    return { "message": "Successfully executed" };
};