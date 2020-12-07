export const checkResponse = (objData, returnData) => {
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
};
