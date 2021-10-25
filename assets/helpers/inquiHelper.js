const inquirer = require("inquirer");
const { menu } = require("../questions/questions");
const { viewDataTablesOrAddToTables } = require("../helpers/mysql2Helper");

const init = () => {
    console.log("hello");
    inquirer
        .prompt(menu)
        .then((response) => {
            switch (response.menuSelect) {
                case "View departments":
                case "View roles":
                case "View employees":
                case "Add a department":
                case "Add a role":
                case "Add an employee":
                    viewDataTablesOrAddToTables(response.menuSelect);
                    break;
                    case "Update an employee role":
                case "Exit":
                    return console.log("Bye!")
                    break;
            }
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            }
        });
};

module.exports = init