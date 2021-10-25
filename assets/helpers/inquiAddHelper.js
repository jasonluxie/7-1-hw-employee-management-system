const inquirer = require("inquirer");
const { addEmp, addDep, addRole } = require("../questions/questions");

const add = (input) => {
    switch (input) {
        case "Add a department":
            inquirer
            .prompt(addEmp)
            .then()
            .catch((err) => {
                if (err) {
                    console.error(err);
                }
            });
            break;
        case "Add a role":
            inquirer
            .prompt(addDep)
            .then()
            .catch((err) => {
                if (err) {
                    console.error(err);
                }
            });
            break;
        case "Add an employee":
            inquirer
            .prompt(addRole)
            .then()
            .catch((err) => {
                if (err) {
                    console.error(err);
                }
            });
            break;
    }
};
