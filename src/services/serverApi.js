import axios from 'axios'
import {BASE_URL_PATH} from "../constants/Constants";

export const getTablesList = async type => {
    try {
        const response = await axios.get(`${BASE_URL_PATH}/tables/${type}`, {
            headers: {'Content-type': 'application/json'}
        });
        console.log(response);
        return response.data;
    } catch (e) {
        console.log(`Wrong: ${e}`);
        throw e;
    }


};

export const getListOfData = async (t, table) => {
    try {
        const response = await axios.get(`${BASE_URL_PATH}/table/items/${t}/${table}`, {
            headers: {'Content-type': 'application/json'}
        });
        console.log(response);
        return response.data;
    } catch (e) {
        console.log(`Wrong: ${e}`);
        throw e;
    }
};