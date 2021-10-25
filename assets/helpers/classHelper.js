class Department {
    constructor(depName, depID) {
        this.depName = depName;
        this.depID = depID
    }
}

class Role {
    constructor(roleName, roleSalary, roleDep) {
        this.roleName = roleName,
        this.roleSalary = roleSalary,
        this.roleDep = roleDep
    }
}

class Employee {
    constructor(empFirstName, empLastName, empRole, empManager) {
        this.empFirstName = empFirstName,
        this.empLastName = empLastName,
        this.empRole = empRole,
        this.empManager = empManager
    }
}

module.exports = { Department, Role, Employee }