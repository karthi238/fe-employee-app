import React, { useEffect } from 'react';
import getEmployees from '../../services/employeeService';
import './style.css'

const Employees = (props) => {

    useEffect(() => {
        getEmployeesList()
    })

    const getEmployeesList = () => {
        getEmployees()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className="employees-container">
            Employees
        </div>
    )
}

export default Employees