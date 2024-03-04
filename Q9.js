class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    if (!this.departments.includes(department)) {
      this.departments.push(department);
      console.log(`Department '${department}' added successfully.`);
    } else {
      console.log(`Department '${department}' already exists.`);
    }
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department '${department}' removed successfully.`);
    } else {
      console.log(`Department '${department}' not found.`);
    }
  }

  displayDepartments() {
    if (this.departments.length === 0) {
      console.log("No departments available.");
    } else {
      console.log("Departments:");
      this.departments.forEach((department) => {
        console.log(`- ${department}`);
      });
    }
  }
}

// Example usage:
const myUniversity = new University("Sample University");

myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mathematics");
myUniversity.addDepartment("Physics");

myUniversity.displayDepartments();

myUniversity.removeDepartment("Mathematics");

myUniversity.displayDepartments();
