// JS Assignment 3: (1) Employee Salary Processing

const employees = [
  { name: "Urvesh", salary: 90000 },
  { name: "Rahul", salary: 30000 },
  { name: "Mann", salary: 70000 },
  { name: "Pooja", salary: 45000 }
];

const processedEmployees = employees
  .filter(emp => emp.salary > 40000)
  .map(emp => {
    const newSalary = emp.salary * 1.10;

    return {
      ...emp,
      salary: newSalary,
      level: newSalary >= 70000 ? "Senior" : "Mid"
    };
  });

console.log(processedEmployees);