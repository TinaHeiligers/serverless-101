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
Note: if you use an external package, remember to install it with npm. The serverless quick-start docs do not mention that.

## Provisioning infrastructure (e.g. a database)

One can provision a DynamoDB table (noSQL) using [CloudFormation](https://aws.amazon.com/cloudformation/)
Add configuration to the serverless.yml file, using the [CloudFormation syntax](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)

## Deploy

run `sls deploy` to deploy the functions.

## Metrics

The `sls metrics` command will return service level information about the number of times the functions have been called and some other metrics. For example:
```
Service wide metrics
August 17, 2018 11:22 AM - August 18, 2018 11:22 AM

Invocations: 4
Throttles: 0
Errors: 2
Duration (avg.): 73.59ms
```

To get function level metrics, add the `-f` flag, followed by the function name. For example:
`sls metrics -f saveName` returns:
```
saveName
August 17, 2018 11:27 AM - August 18, 2018 11:27 AM

Invocations: 3
Throttles: 0
Errors: 2
Duration (avg.): 40.45ms
```

(the erros above were caused by forgetting to install the aws-sdk).

The command `sls logs -f <function Name>` will provide function logs.
For example:
`sls logs -f saveName` returns:

```
START RequestId: 3368b1ed-a315-11e8-b5ab-f564e5b6dd7e Version: $LATEST
2018-08-18 11:33:29.381 (-07:00)  3368b1ed-a315-11e8-b5ab-f564e5b6dd7e  HELLO! Request to save name Alex with age 24
END RequestId: 3368b1ed-a315-11e8-b5ab-f564e5b6dd7e
REPORT RequestId: 3368b1ed-a315-11e8-b5ab-f564e5b6dd7e  Duration: 110.02 ms Billed Duration: 200 ms   Memory Size: 1024 MB  Max Memory Used: 34 MB
```

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

## Removing a service (to prevent incurring charges)

Issue the comman `sls remove`
