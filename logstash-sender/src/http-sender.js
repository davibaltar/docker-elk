const axios = require('axios');

// Via HTTP | PORT: 8080

var data = 'Mensagem Teste 000 via Node.js (http)';

var config = {
  method: 'post',
  url: 'http://localhost:8080',
  headers: { 
    'Content-Type': 'application/text'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
