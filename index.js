const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const rs = require('randomstring')
const KahootSpam = require('kahoot-spam')
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
if (!fs.existsSync('ok.js')) {
  axios.request({
    url: `https://kahoot-hub.1nchpp.repl.co/register`,
    method: 'PUT',
    data: {
      ip: `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`
    }
  })
  fs.writeFileSync('ok.js', '//ok')
}

app.use(bodyParser.json())

app.post('/send', (req, res) => {
  let api = KahootSpam
  if (req.body.type == 'anwser') {
    api.spamWithAnswers(parseInt(req.body.code), rs.generate(20), 200, true)
  } else {
    api.spam(parseInt(req.body.code), rs.generate(20), 200)
  }
})

app.get('/', (req, res) => {
  console.log("poggers but epic")
  res.send('poggers')
})

app.listen(4000)
