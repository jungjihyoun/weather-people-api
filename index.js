import express from 'express';
import mongoose from 'mongoose';
import {graphqlHTTP} from 'express-graphql';
import axios from 'axios';
import dotenv from 'dotenv';
import graphlHTTP from 'express-graphql';
import schema from './schema';
dotenv.config();

const app = express();
const port = 3000;

const uri = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true});

app.use('/graphql', graphqlHTTP({schema: schema, graphiql: true}));

app.listen(port, () => {
  console.log(`port :  ${port}`);
});
