drop database if exists employees_db;
create database employees_db;
use employees_db;

create table department (
    dept_id int not null primary key auto_increment,
    name varchar(30) not null
);

create table role (
    role_id int primary key not null auto_increment,
    title varchar(30) not null,
    salary decimal not null,
    department_id_fk int,
    foreign key (department_id_fk)
    references department(dept_id)
);

create table employee (
    emp_id int primary key not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id_fk int not null,
    foreign key (role_id_fk)
    references role(role_id),
    manager_id_fk int,
    foreign key (manager_id_fk)
    references employee(emp_id)
);