import axios from 'axios';

const getProductById = async (event, _context) => {
  try {
    const { productId } = event.pathParameters;
    const productsData = await axios
      .get('https://ra1g4phv29.execute-api.us-east-2.amazonaws.com/default/returnObject')
      .then((res) => res.data);

    const foundItem = productsData.find((x) => x.id === productId);
    if (!foundItem) {
      return {
        statusCode: 404,
        body: 'Not found',
      };
    }
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(foundItem),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal server error: ' + JSON.stringify(error),
    };
  }
};

export default getProductById;