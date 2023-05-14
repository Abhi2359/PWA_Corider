import axios from "axios";

const API_URL = "http://3.111.128.67/assignment/chat";

export const fetchData = async (page) => {
    try {
      const response = await axios.get(API_URL, {
        params: { page },
      });
      return response.data.;
    } catch (error) {
      throw new Error('Error while fetching data');
    }
  };
