import express from 'express';
import mongoose from 'mongoose';
import {graphqlHTTP} from 'express-graphql';
import dotenv from 'dotenv';
import graphlHTTP from 'express-graphql';
import schema from './schema';

dotenv.config();

const app = express();
const port = 3000;

const uri = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true});

const shortWeather = require('./src/routes/shortWeather');
app.use('/short', shortWeather);

const midWeather = require('./src/routes/midWeather');
app.use('/mid', midWeather);
const midRain = require('./src/routes/midRain');
app.use('/mid', midRain);

app.use('/graphql', graphqlHTTP({schema: schema, graphiql: true}));

app.listen(port, () => {
  console.log(`서버 실행!! 포트는? ${port}`);
});
