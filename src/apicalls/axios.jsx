
import axios from 'axios';

const APICALL = axios.create({
    baseUrl:"https://jsonplaceholder.typicode.com",
});


export default APICALL;
