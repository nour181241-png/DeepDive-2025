//1

const name="Nour";
let age=20;
var enrollment=true;


//2 
let grades=[90,80,70];
let total = grades[0] + grades[1] + grades[2];
let average=total/3;
console.log("Total Grades: ", total); // Total Grades: 240
console.log("average: ",average);




//3
let grade = Number(prompt("Enter your grade:"));
if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 75) {
    console.log("Very good");
} else if ( grade >= 60) {
    console.log("Passed");
} else {
    console.log("Failed");
}




//4
let subjectNumber = Number(prompt("Enter subject number (1, 2, or 3):"));

switch (subjectNumber) {
    case 1:
        console.log("Math: " + grades[0]);
        break;
    case 2:
        console.log("Science: " + grades[1]);
        break;
    case 3:
        console.log("English: " + grades[2]);
        break;
    default:
        console.log("Invalid subject number. Please enter 1, 2, or 3.");
}





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