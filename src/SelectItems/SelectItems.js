// const KEYS = {
//   employees: "employees",
//   employeeId: "employeeId",
// };

export const getCasteCollection = () => [
  { key: "1", listValue: "General" },
  { key: "2", listValue: "OBC" },
  { key: "3", listValue: "ST" },
  { key: "4", listValue: "SC" },
];

// export const getStandardCollection = () => [
//     { id: "1", title: "STD 1" },
//     { id: "2", title: "STD 2" },
//     { id: "3", title: "STD 3" },
//     { id: "4", title: "STD 4" },
//     { id: "5", title: "STD 5" },
//     { id: "6", title: "STD 6" },
//     { id: "7", title: "STD 7" },
//     { id: "8", title: "STD 8" },
// ];

// export function insertEmployee(data) {
//   let employees = getAllEmployees();
//   data["id"] = generateEmployeeId();
//   employees.push(data);
//   localStorage.setItem(KEYS.employees, JSON.stringify(employees));
// }

// export function generateEmployeeId() {
//   if (localStorage.getItem(KEYS.employeeId) == null)
//     localStorage.setItem(KEYS.employeeId, "0");
//   var id = parseInt(localStorage.getItem(KEYS.employeeId));
//   localStorage.setItem(KEYS.employeeId, (++id).toString());
//   return id;
// }

// export function getAllEmployees() {
//   if (localStorage.getItem(KEYS.employees) == null)
//     localStorage.setItem(KEYS.employees, JSON.stringify([]));
//   return JSON.parse(localStorage.getItem(KEYS.employees));
// }
