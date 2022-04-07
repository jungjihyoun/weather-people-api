var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');
import getCoordinate from '../utils/getCoordinate';

router.get('/weather', (req, res) => {
  axios
    .get(
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${process.env.WEATHER_KEY}&numOfRows=10&pageNo=1&regId=11G00201&tmFc=202204070600`,
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
