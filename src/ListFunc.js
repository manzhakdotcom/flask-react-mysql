import axios from 'axios'

export const getList = () => {
    return axios
        .get('http://127.0.0.1:5000/api/personal', {
            headers: {'Content-type': 'application/json'}
        })
        .then(resp => {
            let data = [];
            Object.keys(resp.data).forEach((key) => {
                let val = resp.data[key];
                data.push([val.name, val.unit])
            });

            return data;
        })
};