const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const rs = require('randomstring')
const api = require('kahoot.js-updated')
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
  console.log(req.body)
  if (req.body.type == 'anwser') {
    spamWithAnswers(parseInt(req.body.code), 200, true)
  } else {
    spam(parseInt(req.body.code), 200)
  }
})

app.get('/', (req, res) => {
  console.log("poggers but epic")
  res.send('poggers')
})

app.listen(4000)

async function sleep(m) {
    return new Promise(resolve => setTimeout(resolve, m));
}


var i;
var id = 0;
var errnum = 0;
    async function spam(pin, amout) {
        if(!pin) throw new TypeError('Please Give Me A Pin')
        if(!Number(pin)) throw new TypeError('Please Use A Number For The Pin')
        if(!amout) throw new TypeError('Please Give Me An Amout')
        if(!Number(amout)) throw new TypeError('Please Use A Number For The Amout')
        
        console.log('Ok Joining...')
        try{
            for(i = 0; i < amout; i++){

                id = id + 1
                var bot = new api;
                bot.join(pin, `${rs.generate(20)}${id}`)
                bot.on("joined", () => {
                    console.log(`Bot ${rs.generate(20)}${id} has successfully joined game ${pin}`)
                })
            }

        } catch (err){
            errnum = errnum + 1
            throw new TypeError(`Um Something Went Wrong With This Bot\n err num ${errnum}`)
        }

    }

    async function spamWithAnswers(pin, amout, slee){
        if(!pin) throw new TypeError('Please Give Me A Pin')
        if(!Number(pin)) throw new TypeError('Please Use A Number For The Pin')
        if(!amout) throw new TypeError('Please Give Me An Amout')
        if(!Number(amout)) throw new TypeError('Please Use A Number For The Amout')
        if(!slee) throw new TypeError('Please Give Me How Long To Sleep In Mili Seconds')
        if(!Number(slee)) throw new TypeError('Please Use A Number For The Sleep Time')
        console.log('Ok Joining...')
        try{
            for(i = 0; i < amout; i++){

                id = id + 1
                var bot = new api;
                bot.join(pin, `${rs.generate(20)}${id}`)
                bot.on("joined", () => {
                    console.log(`Bot ${rs.generate(20)}${id} has successfully joined game ${pin}`)
                })
                bot.on("QuestionStart", question => {
                    if(slee == true){
                        let time = Math.floor(Math.random() * 10000);
                        setTimeout(() => {
                            let answer = Math.floor(Math.random() * 4);
                            question.answer(answer);
                        }, time);
                    }else if(slee == false){
                        let answer = Math.floor(Math.random() * 4);
                        question.answer(answer);
                    }else{
                        throw new TypeError ('You need to have "true" or "false" for if you want to sleep')
                    }
                });
            }
        } catch(err){
            errnum = errnum + 1
            throw new TypeError (`Um Something Went Wrong With This Bot\n err num ${errnum}`)
        }

    }
