import {apiGeneralService} from '../api';

export const authenticate = (payload, returnData) => {
  const data = {
    url: '/users',
    method: 'POST',
    payload: payload,
  };
  apiGeneralService(data, async (callback) => {
    await returnData(callback);
    
  });
};
