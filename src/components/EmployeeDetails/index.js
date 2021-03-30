import moment from 'moment';
import React, { useEffect, useState } from 'react';
import employeeService from '../../services/employeeService';
import './style.css';
import BackImage from '../../assets/images/back.svg'

const EmployeeDetails = (props) => {
    const id = props?.match?.params?.id
    const [details, setDetails] = useState({})

    useEffect(() => {
        getEmployeeDetails()
    }, [props?.match?.params?.id])

    const getEmployeeDetails = () => {
        employeeService.getEmployeeByID(id)
            .then(res => {
                if (res && res.data && Array.isArray(res.data) && res.data.length !== 0) setDetails(res.data[0])
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="employee-details-container">
            <div className="employee-details-inner-container">
                <div className="employee-details-head-container" onClick={() => props.history.push('/employees')}>
                    <img src={BackImage} className="image-style" alt="back"/>
                    <div className="employee-details-head">EMPLOYEE DETAILS</div>
                </div>
                <div className="employee-details-card">
                    <div className="each-card">
                        <div className="top-name">First Name</div>
                        <div className="bottom-name">{details.first_name}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Last Name</div>
                        <div className="bottom-name">{details.last_name}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Designation</div>
                        <div className="bottom-name">{details.designation}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Organization</div>
                        <div className="bottom-name">{details.organization}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Email</div>
                        <div className="bottom-name">{details.email}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Phone</div>
                        <div className="bottom-name">{details.phone}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Salary</div>
                        <div className="bottom-name">$ {details.salary}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Joined on</div>
                        <div className="bottom-name">{moment(details.created_at).format('DD MMM YYYY')}</div>
                    </div>
                    <div className="each-card">
                        <div className="top-name">Last Updated on</div>
                        <div className="bottom-name">{moment(details.updated_at).format('DD MMM YYYY')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails