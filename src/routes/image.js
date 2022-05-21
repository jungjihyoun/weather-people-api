const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');
let multerS3 = require('multer-s3');
require('dotenv').config(); // .env 파일에서 환경변수 불러오기
const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION} = process.env;
let AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'weatherpeople-s3',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, Date.now() + '.' + file.originalname.split('.').pop()); // 이름 설정
    },
  }),
  acl: 'public-read-write',
});

router.post('/', upload.array('file', 3), function (req, res, next) {
  let locations = [];
  req.files.map(e => locations.push(e.location));
  console.log(locations);
  res.status(200).send(locations);
});

module.exports = router;
