let students = [
    { name: "Hammad", city: "Islamabad", scores: [85, 90, 78] },
    { name: "Ali", city: "Lahore", scores: [92, 88, 95] },
    { name: "Sara", city: "Karachi", scores: [75, 80, 70] },
    { name: "Ayesha", city: "Peshawar", scores: [88, 92, 85] },
];

students.forEach(student => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    student.averageScore = total / student.scores.length;

    if (student.averageScore >= 90) {
        student.grade = "A";
    } else if (student.averageScore >= 80) {
        student.grade = "B";
    } else if (student.averageScore >= 70) {
        student.grade = "C";
    } else if (student.averageScore >= 50) {
        student.grade = "D";
    } else {
        student.grade = "F";
    }
});

const sortedStudents = [...students].sort(
    (a, b) => b.averageScore - a.averageScore
);

console.log(sortedStudents);

sortedStudents.forEach(student => {
    console.log(
        `Name: ${student.name} || City: ${student.city} || Average: ${student.averageScore.toFixed(2)} || Grade: ${student.grade}`
    );
});

const topperStudents = students.filter(student => student.averageScore >= 85);

console.log("Top students:", topperStudents);

console.log("Toppers Are");
topperStudents.forEach(student => {
    console.log(
        `Name: ${student.name} || City: ${student.city} || Average: ${student.averageScore.toFixed(2)} || Grade: ${student.grade}`
    );
});

const classAverage =
    students.reduce((sum, student) => sum + student.averageScore, 0) /
    students.length;

console.log("Class Average is: " + classAverage.toFixed(2));

console.log("Topper student is : ")
console.log(topperStudents[0])