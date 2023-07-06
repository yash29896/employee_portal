import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(BASE_URL, employee);
  }
  getEmployees() {
    return axios.get(BASE_URL);
  }
}

export default new EmployeeService();
