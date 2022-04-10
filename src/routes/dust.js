var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');

router.get('/', (req, res) => {
  axios
    .get(
      `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${encodeURI(
        req.query.sidoName,
      )}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${
        process.env.WEATHER_KEY
      }&ver=1.0`,
    )
    .then(response => {
      res.send(response.data);
    });
});

module.exports = router;
