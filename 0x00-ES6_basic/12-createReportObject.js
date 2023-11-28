const createReportObject = (employeesList) => {
  const reportObject = {
    employees: employeesList.employeeList,
    generateReport() {
      console.log(`Report for ${employeesList.department}: ${this.employees.join(', ')}`);
    },
  };

  return reportObject;
};

const departmentName = "Engineering";
const employeeNames = ["Alice", "Bob", "Charlie"];

const employeesObject = createEmployeesObject(departmentName, employeeNames);
const report = createReportObject(employeesObject);
report.generateReport();

