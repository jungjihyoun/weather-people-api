var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');
import getCoordinate from '../utils/getCoordinate';

router.get('/weather', (req, res) => {
  // TODO : 프론트에서 위도 경도 받아서 getCoordinate의 파라미터로 추가
  const result = getCoordinate(req.query.x, req.query.y);
  console.log('테스트 ===>', result.x, result.y, req.query.time);

  axios
    .get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.WEATHER_KEY}&numOfRows=1000&dataType=JSON&pageNo=1&base_date=${req.query.date}&base_time=0500&nx=${result.x}&ny=${result.y}`,
    )
    .then(response => {
      const data = response.data.response.body.items.item;

      const result = data.filter(e => {
        return e.fcstDate === req.query.date && e.fcstTime === req.query.time;
      });

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send(JSON.stringify('요청한 데이터가 없습니다.'));
      }
    });
});

module.exports = router;
