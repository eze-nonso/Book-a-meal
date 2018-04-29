import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';
import { resFormat as responseFormat } from '../server/helpers';

chai.use(chaiHttp);

let requester = chai.request(app).keepOpen();
const { expect } = chai;
const V = process.env.VERSION;
const prefix = `/api/${V}`;
const resFormat = responseFormat.bind(null, expect);


export default {
  requester, expect, V, resFormat, prefix,
}
