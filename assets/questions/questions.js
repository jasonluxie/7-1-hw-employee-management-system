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
    },
    {
        type: "input",
        name: "depID", 
        message: "What is the id of the department?"
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
        message: "What department does the role belong to?",
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
        message: "What is the role of the employee?",
    },
    {
        type: "input",
        name: "empManager",
        message: "Who is the manager of the employee?",
    },
];
const updateEmp = [
    {
        type: "input",
        name: "empSelect",
        message: "Which employee would you like to update?",
    },
    {
        type: "input",
        name: "empNewRole",
        message: "What is the new role of the employee?",
    },
];
module.exports = { menu, addEmp, addDep, addRole, updateEmp };
