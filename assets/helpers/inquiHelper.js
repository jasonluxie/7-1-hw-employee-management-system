const inquirer = require("inquirer");
// const mysql12 = require('mysql2')
const { menu, addEmp, addDep, addRole } = require("../questions/questions");
const { viewDataTables, addToDatabase } = require("../helpers/mysql2Helper");

const init = () => {
    console.log("hello");
    inquirer
        .prompt(menu)
        .then((response) => {
            switch (response.menuSelect) {
                case "View departments":
                    viewDataTables(response.menuSelect);
                    break;
                case "View roles":
                    viewDataTables(response.menuSelect);
                    break;
                case "View employees":
                    viewDataTables(response.menuSelect);
                    break;
                case "Add a department":
                    addToDatabase(response.menuSelect);
                    break;
                case "Add a role":
                    addToDatabase(response.menuSelect);
                    break;
                case "Add an employee":
                    addToDatabase(response.menuSelect);
                    break;
                case "Update an employee role":
                    break;
                case "Exit":
                    break;
            }
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            }
        });
};

init();

module.exports = init