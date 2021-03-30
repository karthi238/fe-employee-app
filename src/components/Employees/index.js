import React, { useEffect, useState } from 'react';
import employeeService from '../../services/employeeService';
import DeleteImage from '../../assets/images/delete.svg';
import EditImage from '../../assets/images/edit.svg';
import './style.css'

const Employees = (props) => {
    const [employeeList, setEmployeeList] = useState([])

    useEffect(() => {
        getEmployeesList()
    }, [])

    const getEmployeesList = () => {
        employeeService.getEmployees()
            .then(res => {
                if (res && res.data && Array.isArray(res.data)) setEmployeeList(res.data)
            })
            .catch(err => console.log(err))
    }

    const deleteEmployee = (e, id) => {
        e.stopPropagation()
        employeeService.deleteEmployeeByID(id)
            .then(() => {
                getEmployeesList()
            })
            .catch(err => console.log(err))
    }

    const editEmployee = (e, id) => {
        e.stopPropagation();
        props.history.push(`/editEmployee/${id}`)
    }

    return (
        <div className="employees-container">
            <div className="employees-inner-container">
                <div className="employees-head-container">
                    <div className="employees-head">EMPLOYEES</div>
                    <div className="add-button" onClick={() => props.history.push('/addEmployee')}>ADD EMPLOYEE</div>
                </div>
                {employeeList.length === 0 && <div style={{color:'#fff'}}>No Results</div>}
                <div className="employees-list">
                    {employeeList.map((item, index) => {
                        return (
                            <div className="employee-item" key={index} onClick={() => props.history.push(`/employeeDetails/${item.id}`)}>
                                <div className="left-employee-item">
                                    <div className="inner-employee-card">
                                        <div className="item-style">{item.first_name} {item.last_name}</div>
                                        <div className="item-style">{item.designation}</div>
                                    </div>
                                    <div className="inner-employee-card">
                                        <div className="item-style">{item.email}</div>
                                        <div className="item-style">{item.phone}</div>
                                    </div>
                                </div>
                                <div className="right-employee-item">
                                    <div className="delete-container" onClick={(e) => editEmployee(e, item.id)}>
                                        <img src={EditImage} className="image-style" alt="edit" />
                                    </div>
                                    <div className="delete-container" onClick={(e) => deleteEmployee(e, item.id)}>
                                        <img src={DeleteImage} className="image-style" alt="delete" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Employees