var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');
import getCoordinate from '../utils/getCoordinate';

router.get('/weather', (req, res) => {
  getCoordinate();

  axios
    .get(
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${process.env.WEATHER_KEY}&numOfRows=10&pageNo=1 &regId=11D20501&tmFc=202204100600&dataType=JSON`,
    )
    .then(response => {
      res.send(response.data);
    });
});

module.exports = router;
