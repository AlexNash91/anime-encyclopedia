const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://animenewsnetwork.p.rapidapi.com/reports.xml',
  params: {id: '155', nlist: '50', nskip: '50'},
  headers: {
    'X-RapidAPI-Key': 'fedebbc7demsh1c790ae5a713c61p1837b1jsnc32cc7e8f148',
    'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});