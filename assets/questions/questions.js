const menu = [
    {
        type: "list",
        name: "menuSelect",
        message:
            "Welcome to your employee management system. What would you like to do?",
        choices: [
            "View departments",
            "View roles",
            "View employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit",
        ],
    },
];
const addDep = [
    {
        type: "input",
        name: "depName",
        message: "What is the name of the department?",
    }
];
const addRole = [
    {
        type: "input",
        name: "roleName",
        message: "What is the role you want to add?",
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the role?",
    },
    {
        type: "input",
        name: "roleDep",
        message: "What is the ID of department does the role belong to?",
    },
];
const addEmp = [
    {
        type: "input",
        name: "empFirstName",
        message: "What is the first name of the employee?",
    },
    {
        type: "input",
        name: "empLastName",
        message: "What is the last name of the employee?",
    },
    {
        type: "input",
        name: "empRole",
        message: "What is the role ID that corresponds to the role of the employee?",
    },
    {
        type: "input",
        name: "empManager",
        message: "What is the employee ID of their manager? This can be left blank."
    },
];
const updateEmp = [
    {
        type: "input",
        name: "empSelect",
        message: "What is the id of the employee you wish to update?",
    },
    {
        type: "input",
        name: "empNewRole",
        message: "What is the id of the role you want to update to?",
    },
];
module.exports = { menu, addEmp, addDep, addRole, updateEmp };
