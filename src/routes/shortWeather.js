var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');
import getCoordinate from '../utils/getCoordinate';

router.get('/weather', (req, res) => {
  // TODO : 프론트에서 위도 경도 받아서 getCoordinate의 파라미터로 추가
  const result = getCoordinate();
  console.log('테스트 ===>', result.x, result.y);

  axios
    .get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.WEATHER_KEY}&numOfRows=1000&dataType=JSON&pageNo=1&base_date=20220410&base_time=0500&nx=${result.x}&ny=${result.y}`,
    )
    .then(response => {
      res.send(response.data);
    });
});

module.exports = router;
