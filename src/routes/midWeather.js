var express = require('express');
var router = express.Router();
import axios from 'axios';
const convert = require('xml-js');
import getCoordinate from '../utils/getCoordinate';

router.get('/weather', (req, res) => {
  getCoordinate();

  axios
    .get(
      'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=EpiznLOiv3fnT89Vi8j6mg0Fcm4R0Yf7EcHBXgOeJCjLBmrHXi6wTag1Up1wIqhSI95z3v1HR1J8TgOzm2EgSw%3D%3D&numOfRows=10&pageNo=1 &regId=11D20501&tmFc=202204100600&dataType=JSON',
    )
    .then(response => {
      res.send(response.data);
    });
});

module.exports = router;
