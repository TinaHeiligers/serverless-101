const AWS = require('aws-sdk');

const NAMES_TABLE = process.env.NAMES_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.saveName = (event, context, callback) => {
  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  };
  const name = event.queryStringParameters.name;
  const age = event.queryStringParameters.age;
  console.log(`HELLO! Request to save name ${name} with age ${age}`);

  const params = {
    TableName: NAMES_TABLE,
    Item: {
      name,
      age
    },
  }

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error);
      response.statusCode = 400;
      response.body = JSON.stringify({ error: "Could not save name" })

      callback(null, response);
    }
    response.body = JSON.stringify({ name, age })
    callback(null, response);
  });
}

module.exports.getName = (event, context, callback) => {
  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  };

  const name = event.queryStringParameters.name;
  console.log(`Request to retrieve name ${name}`);

  const params = {
    TableName: NAMES_TABLE,
    Key: {
      name
    },
  }

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error);
      response.statusCode = 400;
      response.body = JSON.stringify({ error: "Could not retrieve name" })

      callback(null, response);
    }
    if (result.Item) {
      const {name, age } = result.Item;
      response.body = JSON.stringify({ name, age })

      callback(null, response);
    } else {
      response.statusCode = 400;
      response.body = JSON.stringify({ error: "Name does not exist" })

      callback(null, response);
    }
  });
}
