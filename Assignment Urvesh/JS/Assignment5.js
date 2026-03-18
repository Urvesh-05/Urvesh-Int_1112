let marks = 99;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks entered");
} 
else if (marks >= 90) {
    console.log("Your grade is A");
} 
else if (marks >= 75) {
    console.log("Your grade is B");
} 
else if (marks >= 50) {
    console.log("Your grade is C");
} 
else {
    console.log("Fail");
}
