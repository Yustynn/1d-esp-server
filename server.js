const express = require('express');
const app = express();
const port = process.env.port || 1337

app.get('/', function (req, res) {
  if (app.fan_ip) {
    res.send(app.fan_ip);
  }
  else {
    res.send('No IP yet!');
  }
});


app.post('/', (req, res) => {
  temp = req.ip.split(':');
  app.fan_ip = temp[temp.length-1];
  console.log(req.ip);
  res.send('kthxbye');
})


app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/', (req, res) => {

});

const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
