class LighthouseUser {
    constructor(name) {
      this.name = name;
    }
    printName() {
        console.log(this.name);
    }
  }

const david = new LighthouseUser("David");

// console.log(david.name); // David
david.printName(); // David

class LighthouseLabsStudent extends LighthouseUser {
    constructor(name, cohort) {
      super(name);
        this.cohort = cohort;
        this.projectsCompleted = 0;
    }
    completeProject() {
        this.projectsCompleted++;
    }
}

const student = new LighthouseLabsStudent("Rey", "17-01");
student.completeProject();
console.log(student.projectsCompleted); // 1
student.printName(); // David
