'use strict';

const STATIC_KEY = process.env.STATIC_KEY;

module.exports.index = (event, context, callback) => {
    console.log('Client token:', event.authorizationToken);
    console.log('Method ARN:', event.methodArn);

    if (STATIC_KEY != event.authorizationToken) {
        callback('Unauthorized');
    }

    const tmp = event.methodArn.split(':');
    const apiGatewayArnTmp = tmp[5].split('/');
    const awsAccountId = tmp[4];
    const region = tmp[3];
    const restApiId = apiGatewayArnTmp[0];
    const stage = apiGatewayArnTmp[1];

    const policy = {
        "principalId": "SIMPLE",
        "policyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Action": "execute-api:Invoke",
                    "Effect": "Allow",
                    "Resource": `arn:aws:execute-api:${region}:${awsAccountId}:${restApiId}/${stage}/*`
                }
            ]
        }
    }

    callback(null, policy);
};
