const mysql = require("mysql2");
const inquirer = require("inquirer");
const {
    addEmp,
    addDep,
    addRole,
    updateEmpID,
    updateEmpManager,
} = require("../questions/questions");
const cTable = require("console.table");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    databse: "employees_db",
});

const viewDataTablesOrAddToTables = (input, callback) => {
    let inputArr = input.split(" ");
    let choiceArr = inputArr[inputArr.length - 1].split("");
    let choiceWordArr = choiceArr.slice(0, choiceArr.length - 1);
    let choice = choiceWordArr.join("");
    connection.query("USE employees_db;");
    switch (input) {
        case "View departments":
        case "View roles":
        case "View employees":
            connection.query(`SELECT * FROM ${choice};`, (err, results) => {
                if (err) {
                    console.error(err);
                } else console.table(results);
                callback();
            });
            break;
        case "Add a department":
            inquirer.prompt(addDep).then((r) => {
                connection.query(
                    `insert into department(name) values ("${r.depName}");`,
                    (err, results) => {
                        if (err) {
                            console.error(err);
                        } else console.log("Department successfully added.");
                        callback();
                    }
                );
            });
            break;
        case "Add a role":
            inquirer.prompt(addRole).then((r) => {
                connection.query(
                    `insert into role(title, salary, department_id_fk) values ("${r.roleName}",${r.roleSalary},${r.roleDep})`,
                    (err, results) => {
                        if (err) {
                            console.error(err);
                        } else console.log("Role successfully added.");
                        callback();
                    }
                );
            });
            break;
        case "Add an employee":
            inquirer.prompt(addEmp).then((r) => {
                connection.query(
                    `insert into employee(first_name, last_name, role_id_fk, manager_id_fk) values ("${r.empFirstName}", "${r.empLastName}", ${r.empRole}, ${r.empManager})`,
                    (err, results) => {
                        if (err) {
                            console.error(err);
                        } else console.log("Employee successfully added");
                        callback();
                    }
                );
            });
            break;
        case "Update an employee role":
            inquirer.prompt(updateEmpID).then((r) => {
                connection.query(
                    `update employee set role_id_fk = ${r.empNewRole} where emp_id = ${r.empSelect};`,
                    (err, results) => {
                        if (err) {
                            console.error(err);
                        } else console.log("Employee successfully updated");
                        callback();
                    }
                );
            });
            break;
        case "Update an employee's manager":
            inquirer.prompt(updateEmpManager).then((r) => {
                connection.query(
                    `update employee set manager_id_fk = ${r.empManID} where emp_id = ${r.empID}`,
                    (err, results) => {
                        if (err) {
                            console.error(err);
                        } else
                            console.log(
                                "Employee manager successfully updated"
                            );
                        callback();
                    }
                );
            });
    }
};

// const viewEmployeesByManagerOrDepartment = (input, callback) => {
//     connection.query("USE employees_db;");
//     switch (input) {
//         case "View employees by manager":
//             connection.query(
//                 `select employee.manager_id_fk, emp_id from employee left join employee on manager_id_fk = emp_id;`,
//                 (err, results) => {
//                     if (err) {
//                         console.error(err);
//                     } else console.table(results);
//                     callback();
//                 }
//             );
//             break;

//         case "View employees by department":
//             connection.query(
//                 `select employee.emp_id, department.id from employee left join department on `,
//                 (err, results) => {
//                     if (err) {
//                         console.error(err);
//                     } else console.table(results);
//                     callback();
//                 }
//             );
//             break;
//     }
// };
// const viewBudgetOfDepartment = (input, callback) => {
//     connection.query("USE employees_db;");
//     switch (input) {
//         case value:
//             break;

//         default:
//             break;
//     }
// };
module.exports = {
    viewDataTablesOrAddToTables,
    // viewEmployeesByManagerOrDepartment,
    // viewBudgetOfDepartment,
};
