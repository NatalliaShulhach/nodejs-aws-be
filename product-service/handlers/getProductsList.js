import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from 'axios';

const getProductsList = async () => {
  try {
    const productsData = await axios
      .get('https://ra1g4phv29.execute-api.us-east-2.amazonaws.com/default/returnObject')
      .then((res) => res.data);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(productsData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal server error: ' + JSON.stringify(error),
    };
  }
};

export default getProductsList;