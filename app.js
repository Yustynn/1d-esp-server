const app   = require('express')()
const chalk = require('chalk')

app.set('port', process.env.PORT || 1337)

app.post('/fan', (req, res) => {
  temp = req.ip.split(':')
  app.fan_ip = temp[temp.length-1]
  console.log(req.ip)
  res.send('kthxbye')
})

app.get('/fan', (req, res) => {
  res.send(app.fan_ip)
})

app.listen(app.get('port'), () => {
  console.log( chalk.green(`App running on ${app.get('port')}`) )
});
