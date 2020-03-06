<<<<<<< HEAD
const API_HOST = `https://api.opendota.com/api`;

const callApi = async endpoint => {
  let response = await fetch(`${API_HOST}${endpoint}`);
  let data = await response.json();
  return data;
=======
const getAPI = async arg => {
    let response = await fetch(arg);
    let data = await response.json();
    return data;
>>>>>>> 5a849211450b0cb4aafbe5984deb50950de55a19
};

export default callApi;
