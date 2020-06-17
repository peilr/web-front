import axios from 'axios'

var baseurl = 'http://localhost:9091'
export const queryWork = async(city,com,job,desc,salary_bot,salary_top)=>{
    let url = '/work';
    let payload={
        'city': city,
        'company': com,
        'job': job,
        'desc': desc,
        'salary_bot': salary_bot,
        'salary_top': salary_top,
    };
    return await getData(url, payload);
};
const getData=async (url,payload)=>{
    try {
        let uri=baseurl+url
        let rsp = await axios.request({
            method: 'POST',
            url:uri,
            data:payload
        })
        let {data} = rsp.data
        return {
            code:rsp.status,
            data:data
        }
    }catch(e) {
        console.log(e);
        return {
            code: 400,
            data:[]
        }
    }
};