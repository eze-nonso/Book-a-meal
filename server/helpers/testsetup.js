import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import responseFormat from './resformat.test';

chai.use(chaiHttp);

const requester = chai.request(app);
const { expect } = chai;
const V = process.env.VERSION;
const prefix = `/api/${V}`;
const resFormat = responseFormat.bind(null, expect);

export default {
  requester, expect, V, resFormat, prefix,
}
