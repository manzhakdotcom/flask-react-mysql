import axios from 'axios'

export const getTablesList = (type) => {
    return axios
        .get('http://127.0.0.1:5000/api/tables/' + type, {
            headers: {'Content-type': 'application/json'}
        })
};

export const getListOfData = (t, table) => {
    return axios
        .get('http://127.0.0.1:5000/api/tables/items/' + t + '/' + table, {
            headers: {'Content-type': 'application/json'}
        })
};