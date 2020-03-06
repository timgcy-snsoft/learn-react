const getAPI = async arg => {
    let response = await fetch(arg);
    let data = await response.json();
    return data;
};

export default getAPI;