const inquirer = require("inquirer");
const { addEmp, addDep, addRole } = require("../questions/questions");
const { Department, Role, Employee } = require("./classHelper")

const addCase = (input) => {
    switch (input) {
        case "Add a department":
            inquirer
            .prompt(addDep)
            .then(response => {
                const newDep = new Department(response.depName, response.depID)
            })
            .catch((err) => {
                if (err) {
                    console.error(err);
                }
            });
            break;
        case "Add a role":
            inquirer
            .prompt(addRole)
            .then(response => {
                const newRole = new Role(response.roleName, response.roleSalary, response.roleDep)
            })
            .catch((err) => {
                if (err) {
                    console.error(err);
                }
            });
            break;
        case "Add an employee":
            inquirer
            .prompt(addEmp)
            .then(response => {
                const newEmp = new Employee(response.empFirstName, response.empLastName, response.empRole, response.empManager)
                console.log(newEmp)
            })
            .catch((err) => {
                if (err) {
                    console.error(err);
                }
            });
            break;
    }
};

addCase("Add an employee")

module.exports = { addCase }