var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');

router.get('/rain', (req, res) => {
  axios
    .get(
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${process.env.WEATHER_KEY}&numOfRows=10&pageNo=1&regId=11B00000&tmFc=202204070600`,
    )
    .then(response => {
      // console.log(response.data);
      const xmlToJson = convert.xml2json(response.data, {
        compact: true,
        spaces: 4,
      });
      console.log(`xml to json => ${xmlToJson}`);
      res.send(xmlToJson);
    });
});

module.exports = router;
