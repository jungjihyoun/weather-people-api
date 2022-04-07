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
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.WEATHER_KEY}&numOfRows=10&pageNo=1&base_date=20220407&base_time=0500&nx=${result.x}&ny=${result.y}`,
    )
    .then(response => {
      const xmlToJson = convert.xml2json(response.data, {
        compact: true,
        spaces: 4,
      });
      console.log(`xml to json => ${xmlToJson}`);
      res.send(xmlToJson);
    });
});

module.exports = router;
