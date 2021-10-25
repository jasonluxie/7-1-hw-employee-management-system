const mysql = require("mysql2");
const inquirer = require("inquirer");
const { addEmp, addDep, addRole } = require("../questions/questions");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    databse: "employees_db",
});

// connection.query(query with placeholder, array, function)

const viewDataTablesOrAddToTables = (input) => {
    connection.query("USE employees_db;");
    switch (input) {
        case "View departments":
            connection.query("SELECT * FROM department;", (err, results) => {
                if (err) {
                    console.error(err);
                } else console.log(results);
            });
            break;
        case "View roles":
            connection.query("SELECT * FROM role", (err, results) => {
                if (err) {
                    console.error(err);
                } else console.log(results);
            });
            break;
        case "View employees":
            connection.query("SELECT * FROM employee;", (err, results) => {
                if (err) {
                    console.error(err);
                } else console.log(results);
            });
            break;
        case "Add a department":
            connection.query(
                "insert into department(dept_id, name) values (?, ?)"[
                    (dept_id, dept_name)
                ]
            );
            break;
        case "Add a role":
            connection.query();
            break;
        case "Add an employee":
            connection.query();
            break;
    }
};

// module.exports = { viewDataTables, addToDatabase, createDatabaseAndTables };
module.exports = { viewDataTablesOrAddToTables };