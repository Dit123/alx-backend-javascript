const createEmployeesObject = (departmentName, employees) => {
  const employeesObject = {
    department: departmentName,
    employeeList: employees,
  };

  return employeesObject;
};

const departmentName = "Engineering";
const employeeNames = ["Alice", "Bob", "Charlie"];

const employeesObject = createEmployeesObject(departmentName, employeeNames);
console.log(employeesObject);

