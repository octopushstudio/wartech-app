// import api from '../api';
import {checkResponse} from '../../utils';
import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.1.30:54800/api/v1',
  baseURL: 'https://www.fakeapi.online/api/apis/okky',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiGeneralService = (objData, returnData) => {
  api
    .request({
      url: objData.url,
      method: objData.method,
      data: JSON.stringify(objData.payload),
    })
    .then((response) => {
      const objData = {
        respdata: response.data.data,
        status: response.data.status,
      };

      const result = checkResponse(objData, (callback) => callback);
      console.log("ini status : ", result);
      switch (objData.status) {
        case 'SUCCESS':
          returnData({response: objData.respdata, status: 'success'});
          break;

        case 'NOT FOUND':
          returnData({response: objData.respdata, status: 'failed'});
          break;

        default:
          returnData({response: objData.respdata, status: 'error'});
          break;
      }
    })
    .catch((error) => {
      console.log({error, status: 'error'});
    });
};
