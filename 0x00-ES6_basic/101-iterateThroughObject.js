const iterateThroughObject = (reportWithIterator) => {
  let nextEmployee = reportWithIterator.next();

  while (!nextEmployee.done) {
    console.log(`Employee: ${nextEmployee.value}`);
    nextEmployee = reportWithIterator.next();
  }
};

const departmentName = "Engineering";
const employeeNames = ["Alice", "Bob", "Charlie"];

const employeesObject = createEmployeesObject(departmentName, employeeNames);
const report = createReportObject(employeesObject);
const iterator = createIteratorObject(report);

iterateThroughObject(iterator);

