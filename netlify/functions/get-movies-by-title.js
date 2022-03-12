const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const result = await fetch(
    `https://mdblist.p.rapidapi.com/?s=${event.body}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'mdblist.p.rapidapi.com',
        'x-rapidapi-key': '78f8c61870msh7a2b6a1c15ebe12p1cd3b6jsn7bb18f953ac6',
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    statusCode: 200,
    body: JSON.stringify({
      ...result,
    }),
  };
};
