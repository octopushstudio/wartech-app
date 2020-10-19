import api from "../api";

export const pinAuthentication = (payload, returnData) => {
  const endpoint = "/pinAuth";
  api
    .request({
      url: endpoint,
      method: "POST",
      data: JSON.stringify(payload),
    })
    .then((response) => {
      const respdata = response.data.data;
      const status = response.data.status;
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
    })
    .catch((error) => {
      returnData({ error, status: "error" });
    });
};
