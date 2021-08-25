import axios from "axios";

const serverLink = "http://localhost:2094";

class HttpRequest {
  requestWithAuthentication = () => {
    const headers = { ...this.headers, "content-type": "application/json" };

    return new Promise((resolve, reject) => {
      axios({
        baseURL: serverLink,
        url: this.url,
        method: this.method,
        headers: headers,
        data: this.data,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  constructor(url, method = "get", data = {}, headers = {}) {
    this.url = url;
    this.method = method;
    this.data = data;
    this.headers = headers;
  }
}
export default HttpRequest;
