import fetch from 'isomorphic-unfetch';
import { format } from 'url';
import config from '../config';

export default async (endpoint, res) => {

  const payload = {};
  const query = await fetch(config.apiUrl + endpoint);
  const data = await query.json();

  if (res) {
    res.statusCode = query.status;
    console.log(query.status);

  }

  payload.data = data;
  payload.statusCode = query.status;

  return payload;
};
