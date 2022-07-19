import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://127.0.0.1:8080/employee";

class EmployeeS {
    
        
      
    

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/getAllEmployee");
    }

    AddEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/saveEmployee");
    }

    UpdateEmployee(employee, employeeId){
        return axios.post(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    DeleteEmployee(empId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + empId);
    }
    getEmployeeById(id){
        
        return axios.get(EMPLOYEE_API_BASE_URL+"/getAllEmployee");
        
        /*employee.map((e)=>{
            if(id===e.u_id){
                return e;
            }
        })*/
    }
}

export default new EmployeeS()