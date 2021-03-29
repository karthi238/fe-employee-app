import { URLS } from "../constants/url";
import request from "../utils/request";

const getEmployees = async () =>
    request({
        method: 'get',
        url: URLS.base_url + URLS.employee_url,
    });

export default getEmployees