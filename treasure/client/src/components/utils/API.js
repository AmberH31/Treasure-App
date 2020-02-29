export default {
  doGet: (endPoint, callback) => {
    const headers = { "Cache-Control": "no-cache" };
    const urlConfig = {
      method: "GET",
      mode: "cors",
      headers: headers
    };

    fetch(endPoint, urlConfig)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log("Error: " + error);
        if (typeof callback === "function") {
          callback(error);
        }
      })
      .then(data => {
        if (data) {
          callback(data);
        }
      });
  },
  doPost: (endPoint, formData, callback) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const urlConfig = {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(formData)
    };
    fetch(endPoint, urlConfig)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        callback(error);
      })
      .then(data => {
        callback(data);
      });
  },
  doPut: (endPoint, formData, callback) => {
    const headers = { "Cache-Control": "no-cache" };
    const urlConfig = {
      method: "PUT",
      mode: "cors",
      headers: headers,
      body: formData
    };
    fetch(endPoint, urlConfig)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        callback(error);
      })
      .then(data => {
        callback(data);
      });
  },
  doDelete: (endPoint, formData, callback) => {
    const headers = { "Cache-Control": "no-cache" };
    const urlConfig = {
      method: "DELETE",
      mode: "cors",
      headers: headers,
      body: formData
    };
    fetch(endPoint, urlConfig)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        callback(error);
      })
      .then(data => {
        callback(data);
      });
  }
};
