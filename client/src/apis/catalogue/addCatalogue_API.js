import axios from "axios";

const addCatalogue_API = async (jwtToken,catalogue) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwtToken}`, 
    },
  };
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/catalogue/add`,catalogue ,config)
    console.log(data);
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error('Error:', error);
  };
}

export default addCatalogue_API;