import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(BASE_URL, employee);
  }
}

export default new EmployeeService();
