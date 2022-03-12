const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const id = event.body;
  const result = await fetch(
    `https://movie-details1.p.rapidapi.com/imdb_api/movie?id=${id}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'movie-details1.p.rapidapi.com',
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
