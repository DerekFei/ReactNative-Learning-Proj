import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormRedcuer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormRedcuer,
    employees: EmployeeReducer
});