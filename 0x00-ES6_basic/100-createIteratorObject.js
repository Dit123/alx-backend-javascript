const createIteratorObject = (reportObject) => {
  let currentIndex = 0;

  const iteratorObject = {
    next() {
      if (currentIndex < reportObject.employees.length) {
        return { value: reportObject.employees[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
  };

  return iteratorObject;
};

const departmentName = "Engineering";
const employeeNames = ["Alice", "Bob", "Charlie"];

const employeesObject = createEmployeesObject(departmentName, employeeNames);
const report = createReportObject(employeesObject);
const iterator = createIteratorObject(report);

console.log(iterator.next()); // Output: { value: 'Alice', done: false }
console.log(iterator.next()); // Output: { value: 'Bob', done: false }
console.log(iterator.next()); // Output: { value: 'Charlie', done: false }
console.log(iterator.next()); // Output: { done: true }

