INSERT INTO department (name, dept_id) 
VALUES ("Bananas", 1),
       ("Pineapples", 2),
       ("Apples", 3);

INSERT INTO role (title, salary, department_id_fk)
VALUES ("Banana Tester", "1000", 1),
       ("Pineapple Tester", "1000", 2),
       ("Apple Tester", "1000", 3);

INSERT INTO employee (first_name, last_name, role_id_fk, manager_id_fk)
VALUES ("Banana", "Jones", 1, NULL),
       ("Pineapple", "Bob", 2, NULL),
       ("Apple", "Smith", 3, NULL);