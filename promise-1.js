var request = require('request');

function getRandomPonyFooArticle () {
  return new Promise((resolve, reject) => {
    request('https://ponyfoo.com/articles/random', (err, res, body) => {
      if (err) {
        return reject(err);
      }
      resolve(body);
    });
  });
}

getRandomPonyFooArticle().then(console.log, console.log)
