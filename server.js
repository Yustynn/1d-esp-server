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


getClientAddress = function (req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0]
        || req.connection.remoteAddress;
};

app.post('/', (req, res) => {
  app.fan_ip = getClientAddress(req).split(':')[0]
  res.send(`Recieved ${app.fan_ip}`)
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
