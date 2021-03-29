import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddEmployee from '../components/AddEmployee';
import EmployeeDetails from '../components/EmployeeDetails';
import Employees from '../components/Employees';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={Employees} path={['/', '/employees']} exact />
                <Route component={AddEmployee} path="/addEmployee" exact />
                <Route component={EmployeeDetails} path="/employeeDetails" exact />
            </Switch>
        </Router>
    )
}

export default Routes