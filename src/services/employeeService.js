import { URLS } from "../constants/url";
import request from "../utils/request";

const getEmployees = async () =>
    request({
        method: 'get',
        url: URLS.base_url + URLS.employee_url,
    });

const getEmployeeByID = async (id) =>
    request({
        method: 'get',
        url: URLS.base_url + URLS.employee_url + `/${id}`,
    });

const createEmployee = async (data) =>
    request({
        method: 'post',
        url: URLS.base_url + URLS.employee_url,
        data
    });

const updateEmployee = async (id, data) =>
    request({
        method: 'put',
        url: URLS.base_url + URLS.employee_url + `/${id}`,
        data
    });

const deleteEmployeeByID = async (id) =>
    request({
        method: 'delete',
        url: URLS.base_url + URLS.employee_url + `/${id}`,
    });

export default {
    getEmployees,
    getEmployeeByID,
    createEmployee,
    updateEmployee,
    deleteEmployeeByID
}