const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    databse: "employees_db",
});

// connection.query(query with placeholder, array, function)

const viewDataTables = (input) => {
    switch (input) {
        case "View departments":
            connection.query("SELECT * FROM departments", (err, results) => {
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
            connection.query("SELECT * FROM employee", (err, results) => {
                if (err) {
                    console.error(err);
                } else console.log(results);
            });
            break;
    }
};
const addToDatabase = (input) => {
    switch (input) {
        case "Add a department":
            connection.query();
            break;
        case "Add a role":
            connection.query();
            break;
        case "Add an employee":
            connection.query();
            break;
    }
};
module.exports = { viewDataTables, addToDatabase };
