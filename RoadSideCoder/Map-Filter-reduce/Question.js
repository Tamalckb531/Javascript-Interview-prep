//? Return only name of students in Capital
//? Return details of students with marks more than 60.
//? Get the sum of marks of all students.
//? Return the student names who scored more than 60.
//? Return total marks for students with marks greater than 60 after 20 marks have been added to those who score less then 60.

let students = [
    { name: "Tamal", rollNumber: 45, marks: 80 },
    { name: "Dip", rollNumber: 65, marks: 69 },
    { name: "Nil", rollNumber: 12, marks: 35 },
    { name: "Ray", rollNumber: 5, marks: 55 },
];

// 1
const names = students.map(stu => stu.name.toUpperCase());
console.log(names);

//2
const details = students.filter(stu => stu.marks > 60);
console.log(details);

//3 
const total = students.reduce((prevResult, currElem) => {
    return prevResult += currElem.marks;
}, 0);
console.log(total);

//4
const stuName = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
console.log(stuName);

//5

const rankedStudent = students.map((student) => {
    if (student.marks < 60) {
        student.marks += 20;
    }

    return student;
}).filter((stu) => stu.marks > 60);

const totalMarks = rankedStudent.reduce((accum, currElem) => {
    return accum += currElem.marks;
}, 0)

console.log(totalMarks);