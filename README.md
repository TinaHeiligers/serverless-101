# About

Serverless function created with npm serverless.
GET request to https://u1l461m5nl.execute-api.us-east-1.amazonaws.com/dev/hello-world will return a json blob that is the full event (the 'out-of-the-box' hello-world function):

```json
{"message"{
  "message": "Go Serverless v1.0! Your function executed successfully!",
  "input": {
    "resource": "/hello-world",
    "path": "/hello-world",
    "httpMethod": "GET",
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.5",
      "CloudFront-Forwarded-Proto": "https",
      "CloudFront-Is-Desktop-Viewer": "true",
      "CloudFront-Is-Mobile-Viewer": "false",
      "CloudFront-Is-SmartTV-Viewer": "false",
      "CloudFront-Is-Tablet-Viewer": "false",
      "CloudFront-Viewer-Country": "US",
      "Host": "u1l461m5nl.execute-api.us-east-1.amazonaws.com",
      "upgrade-insecure-requests": "1",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0",
      "Via": "2.0 ad71fd218ad805257f43d37e2ed4879f.cloudfront.net (CloudFront)",
      "X-Amz-Cf-Id": "-z7z3OFSfoU2i0qtYume4gZF-zbM-pQIXzPhXFtyGOAx0SGbflw5hA==",
      "X-Amzn-Trace-Id": "Root=1-5b76f76b-0afe25381dde3e0003bcc1ba",
      "X-Forwarded-For": "98.161.244.202, 52.46.35.71",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "queryStringParameters": null,
    "pathParameters": null,
    "stageVariables": null,
    "requestContext": {
      "resourceId": "wwkzhe",
      "resourcePath": "/hello-world",
      "httpMethod": "GET",
      "extendedRequestId": "LxuYwGbIoAMFX7w=",
      "requestTime": "17/Aug/2018:16:27:23 +0000",
      "path": "/dev/hello-world",
      "accountId": "441850989636",
      "protocol": "HTTP/1.1",
      "stage": "dev",
      "requestTimeEpoch": 1534523243217,
      "requestId": "6b9ec50e-a23a-11e8-93a1-511793cf37cd",
      "identity": {
        "cognitoIdentityPoolId": null,
        "accountId": null,
        "cognitoIdentityId": null,
        "caller": null,
        "sourceIp": "98.161.244.202",
        "accessKey": null,
        "cognitoAuthenticationType": null,
        "cognitoAuthenticationProvider": null,
        "userArn": null,
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0",
        "user": null
      },
      "apiId": "u1l461m5nl"
    },
    "body": null,
    "isBase64Encoded": false
  }
}
```
## Add new function

If the current handler.js file is small, add new functions directly into the handler file.
Use the same config for each, starting with `module.exports.<functionName> = (event, context, callback) {...}`


## Provisioning infrastructure (e.g. a database)

One can provision a DynamoDB table (noSQL) using [CloudFormation](https://aws.amazon.com/cloudformation/)
Add configuration to the serverless.yml file, using the [CloudFormation syntax](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)


## Deploy

run `sls deploy` to deploy the functions.

## Current Functions

Service Information
service: hello-world
stage: dev
region: us-east-1
stack: hello-world-dev
api keys:
  None
endpoints:
  GET - https://u1l461m5nl.execute-api.us-east-1.amazonaws.com/dev/hello-world
  GET - https://u1l461m5nl.execute-api.us-east-1.amazonaws.com/dev/hello-name
functions:
  helloWorld: hello-world-dev-helloWorld
  helloName: hello-world-dev-helloName
