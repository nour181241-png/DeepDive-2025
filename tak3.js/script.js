const student_name = "Nourhan Hassan";
console.log(student_name);

let student_age = "21";
console.log(student_age);

var is_Enolled = "true";
console.log(is_Enolled);

let grades_subjects =[15, 19, 20];
console.log(grades_subjects[2]);

// ---------------------------------------------------//

let total_grades = grades_subjects[0] + grades_subjects[1] + grades_subjects[2];
console.log(total_grades);

let average = total_grades/grades_subjects.length;
console.log(average);

// ------------------------------------------------------//

let averag = 18;
if (averag >= 25)
{
    console.log("Excellent");
}
else if (averag >=15 ) 
{
    console.log("Very Good");
}
else if (averag >= 10)
{
    console.log("Good");
}
else {
    console.log("failed");
}

// --------------------------------------------------------------//

let subject_number = 2;
let grade = 20;
switch (subject_number)
{
    case 1:
        console.log("Math: " + grade[0]);
        break;
    case 2:
        console.log("English: " + grade[1]);
        break;
    case 3:
        console.log("Scince: " + grade[2]);
        break;
    default:
        console.log("Invalid subject number")

}
// ------------------------------------------------//
//5
for (let i = 0; i < grades.length; i++) {
    console.log("Grade " + (i + 1) + ": " + grades[i]);
}


//6
function Total(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const Average = (arr) => {
    let total = Total(arr);
    return total / arr.length;
}

let totalGrades = Total(grades);
let averageGrades = Average(grades);

console.log("Total Grades:", totalGrades);     // Total Grades: 240
console.log("Average Grades:", averageGrades);


// 7, 8
let num = 10;

while (num < 10) {
    console.log("done");
}
do {
    console.log("done");
} while (num < 10);


// 9
let numbers = [1, 2, 3, 4, 5, 6];

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += numbers[i];
}
console.log("Sum using for loop:", sumFor);

let sumWhile = 0;
let j = 0;
while (j < numbers.length) {
    sumWhile += numbers[j];
    j++;
}
console.log("Sum using while loop:", sumWhile);