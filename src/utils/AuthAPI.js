import axios from 'axios';
import { APIURL } from './URL';

const BaseUrl = APIURL();

export const post = async (data) => {
    try {
      const res = await axios.post(`${BaseUrl}/user/login`, data);
      if (res.data.status) {
        console.log("Response Login", res)
        return res.data;
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed.");
    }
};

export const getClubList = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/admin/get-clubs`, {
            headers: {
                Authorization: `Bearer ${authTokenExist}`
            }
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user list:", error.message || error);
        throw error;
    }
};

