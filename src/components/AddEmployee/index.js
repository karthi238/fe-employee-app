import React, { useEffect, useState } from 'react';
import employeeService from '../../services/employeeService';
import './style.css';
import BackImage from '../../assets/images/back.svg'

const AddEmployee = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [designation, setDesignation] = useState('')
    const [organization, setOrganization] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [salary, setSalary] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [selectedId, setSelectedId] = useState()

    useEffect(() => {
        if (props.match && props.match.params && props.match.params.id) {
            setIsEdit(true)
            getEmployeeDetails(props.match.params.id)
        }
        else setIsEdit(false)
    }, [props?.match?.params?.id])

    const getEmployeeDetails = (id) => {
        employeeService.getEmployeeByID(id)
            .then(res => {
                if (res && res.data && Array.isArray(res.data) && res.data.length !== 0) {
                    const details = res.data[0]
                    setFirstName(details.first_name)
                    setLastName(details.last_name)
                    setDesignation(details.designation)
                    setOrganization(details.organization)
                    setEmail(details.email)
                    setPhone(details.phone)
                    setSalary(details.salary)
                    setSelectedId(details.id)
                }
            })
            .catch(err => console.log(err))
    }

    const createEmployee = () => {
        if (firstName && lastName && designation && organization && email && phone && salary) {
            const data = {
                first_name: firstName,
                last_name: lastName,
                designation,
                organization,
                email,
                phone,
                salary
            }
            employeeService.createEmployee(data)
                .then(res => {
                    props.history.push('/employees')
                })
                .catch(err => console.log(err))
        }
    }

    const updateEmployee = () => {
        if (firstName && lastName && designation && organization && email && phone && salary) {
            const data = {
                first_name: firstName,
                last_name: lastName,
                designation,
                organization,
                email,
                phone,
                salary
            }
            employeeService.updateEmployee(selectedId, data)
                .then(res => {
                    props.history.push('/employees')
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="add-employee-container">
            <div className="add-employee-inner-container">
                <div className="add-employee-head-container" onClick={() => props.history.push('/employees')}>
                    <img src={BackImage} className="image-style" alt="back" />
                    <div className="add-employee-head">{isEdit ? 'EDIT' : 'ADD'} EMPLOYEE</div>
                </div>
                <div className="add-employee-card">
                    <div className="add-each-card">
                        <div className="add-top-name">First Name</div>
                        <input type="text" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="add-each-card">
                        <div className="add-top-name">Last Name</div>
                        <input type="text" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="add-each-card">
                        <div className="add-top-name">Designation</div>
                        <input type="text" name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                    </div>
                    <div className="add-each-card">
                        <div className="add-top-name">Organization</div>
                        <input type="text" name="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
                    </div>
                    <div className="add-each-card">
                        <div className="add-top-name">Email</div>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="add-each-card">
                        <div className="add-top-name">Phone</div>
                        <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="add-each-card">
                        <div className="add-top-name">Salary($)</div>
                        <input type="number" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    </div>
                </div>
                <div className="submit-button" onClick={() => isEdit ? updateEmployee() : createEmployee()}>
                    {isEdit ? 'SAVE CHANGES' : 'ADD EMPLOYEE'}
                </div>
            </div>
        </div>
    )
}

export default AddEmployee