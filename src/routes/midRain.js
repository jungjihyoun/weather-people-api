var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');

router.get('/rain', (req, res) => {
  axios
    .get(
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${process.env.WEATHER_KEY}&numOfRows=1000&pageNo=1&dataType=JSON&regId=11B00000&tmFc=202204100600`,
    )
    .then(response => {
      res.send(response.data);
    });
});

module.exports = router;
