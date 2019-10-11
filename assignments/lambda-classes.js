// CODE here for your Lambda Classes
class Person{
    constructor(attr) {
    this.name = attr.name;
    this.location = attr.location;
    this.age = attr.age;
    }
    speak() {
    console.log( `${this.name} Hello my name is Fred!`, `${this.location} I am from Bedrock!`);
    
  }
}
  class Instructor extends Person{
    constructor(attr){
        super(name);
    this.favLanguage = attr.favLanguage;
    this.specialty = attr.specialty;
    this.catchPhrase = attr.catchPhrase;
  };
  demo(math) {
    return `Today we are learning about ${math}`;
}

grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
}
adjustGrade(student) {
    let points = Math.round(Math.random() * 100);
    if (student.grade >= 100) {
        student.grade -= points;
        return `${points} points are subtracted from ${student.name}'s grade.  ${student.name}'s current grade is ${student.grade}`;
    } else {
        student.grade += points;
        return `${points} points are added to ${student.name}'s grade.  ${student.name}'s current grade is ${student.grade}`;
    }
}
}

class Student extends Person{
      constructor(attr){
      super(name);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects =attr.favSubjects;
    this.grade = attr.grade;
      }
      listsSubjects() {
        this.favSubjects.map(math => console.log(math));
    }

    PRAssignment(math) {
        return `${this.name} has submitted a PR for ${math}`;
    }

    sprintChallenge(reading) {
        return `${this.name} has begun sprint challenge on ${reading}`;
    }

    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has graduated with a final grade of ${this.grade}!`;
        } else {
            let better = 70 - this.grade;
            this.grade += better;
            return `After more grading, ${better} points were earned and ${this.name} has graduated with a final grade of ${this.grade}!`;
        }
    }
}

      
  

  class ProjectManager extends Instructor{
    constructor(attr){
        super(name)
  this.previousBackground = attr.previousBackground;
  this.className = attr.className;
  this.favSubjects =attr.favSubjects;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


const ned = new Instructor({
    name: "Ned",
    location: "Philadelphia",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Sup`
});

const steve = new Instructor({
    name: "Steve",
    location: "San Diego",
    age: 38,
    gender: "male",
    favLanguage: "Ruby",
    specialty: "Fullstack",
    catchPhrase: `Yo`
});

const john = new Student({
    name: "John",
    location: "San Diego",
    age: 28,
    gender: "male",
    favSubjects: ["Javascript", "C++"],
    grade: 100
});

const jen = new Student({
    name: "Jen",
    location: "San Diego",
    age: 48,
    gender: "female",
    favSubjects: ["Ruby", "Python"],
    grade: 100
});

const shawn = new ProjectManager({
    name: "Shawn",
    location: "Toledo",
    age: 58,
    gender: "male",
    gradClassName: "CS1"
});

const tina = new ProjectManager({
    name: "Tina",
    location: "Scranton",
    age: 30,
    gender: "female",
    gradClassName: "CS2"
});


console.log(tina.speak());
console.log(jen.listsSubjects());
console.log(shawn.gender);
console.log(tina.debugsCode(jen, "Javascript"));
console.log(shawn.standUp("FSW14"));
console.log(jen.sprintChallenge("Javascript"));
console.log(ned.demo("React"));
console.log(ned.grade(jen, "CSS"));
console.log(shawn.speak());
console.log(john.PRAssignment("Responsive Design"));
console.log(steve.catchPhrase);
console.log(tina.adjustGrade(jen));
console.log(jen.graduate(ned));