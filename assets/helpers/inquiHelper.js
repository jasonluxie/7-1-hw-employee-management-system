const inquirer = require("inquirer");
const { menu } = require("../questions/questions");
const {
    viewDataTablesOrAddToTables,
    // viewEmployeesByManagerOrDepartment,
    // viewBudgetOfDepartment,
} = require("../helpers/mysql2Helper");

const init = () => {
    inquirer
        .prompt(menu)
        .then((response) => {
            console.log(response.menuSelect);
            switch (response.menuSelect) {
                case "View departments":
                case "View roles":
                case "View employees":
                case "Add a department":
                case "Add a role":
                case "Add an employee":
                case "Update an employee role":
                case "Update an employee's manager":
                    viewDataTablesOrAddToTables(response.menuSelect, init);
                    break;
                // case "View employees by manager":
                // case "View employees by department":
                //     viewEmployeesByManagerOrDepartment(response.menuSelect, init);
                //     break;
                // case "View department total budgets":
                //     viewBudgetOfDepartment(response.menuSelect, init)
                case "Exit":
                    console.log("Bye!");
                    process.exit(0);
            }
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            }
        });
};

module.exports = init;
