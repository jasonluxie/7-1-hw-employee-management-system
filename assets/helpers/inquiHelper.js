const inquirer = require("inquirer");
const { menu } = require("../questions/questions");
const  { viewDataTablesOrAddToTables } = require("../helpers/mysql2Helper");

const init = () => {
    inquirer
        .prompt(menu)
        .then((response) => {
            console.log(response.menuSelect)
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
                    break;
                case "Exit":
                    console.log("Bye!")
                    process.exit(0)
            }
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            }
        });
};

module.exports = init