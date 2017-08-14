const express = require('express')
const app = express()
const translate = require('google-translate-api');

app.get('/', function (req, res) {
  translate(req.query["text"], {from: req.query["from"], to: req.query["to"]}).then(tr_res => {
    res.json({translationText: tr_res.text})
  }).catch(err => {
    res.send(err);
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
