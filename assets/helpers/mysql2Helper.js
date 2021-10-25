const mysql = require("mysql2");
const inquirer = require("inquirer");
const { addEmp, addDep, addRole } = require("../questions/questions");
const cTable = require("console.table");
const init = require("./inquiHelper");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    databse: "employees_db",
});

const viewDataTablesOrAddToTables = (input) => {
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
            });
            break;
        case "Add a department":
            inquirer.prompt(addDep).then((response) => {
                connection.query(
                    "insert into department(dept_id, name) values (?, ?)",
                    [dept_id, dept_name],
                    (err, results) => {
                        if (err) {
                            console.error(err);
                        } else console.table(results);
                    }
                );
            });
            break;
        case "Add a role":
            connection.query(
                "insert into role(role_id, title, salary, department_id_fk) values (?, ?, ?, ?)",
                [role_id, title, salary, department_id_fk],
                (err, results) => {
                    if (err) {
                        console.error(err);
                    } else console.table(results);
                }
            );
            break;
        case "Add an employee":
            connection.query(
                "insert into role(emp_id, first_name, last_name, role_id_fk, manager_id_fk) values (?, ?, ?, ?, ?, ?)",
                [emp_id, first_name, last_name, role_id_fk, manager_id_fk],
                (err, results) => {
                    if (err) {
                        console.error(err);
                    } else console.table(results);
                }
            );
            break;
    }
};

// module.exports = { viewDataTables, addToDatabase, createDatabaseAndTables };
module.exports = { viewDataTablesOrAddToTables };
