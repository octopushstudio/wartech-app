export const checkResponse = (status) => {
  switch (status) {
    case "SUCCESS":
      returnData({ response: respdata, status: "success" });
      break;

    case "NOT FOUND":
      returnData({ response: respdata, status: "failed" });
      break;

    default:
      returnData({ response: respdata, status: "error" });
      break;
  }
};
