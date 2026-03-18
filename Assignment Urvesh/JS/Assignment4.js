let isMember = true;
let cartValue = 1200;

if ((isMember && cartValue > 1000) || cartValue > 2000) {
    console.log("You are eligible for free delivery!");
} else {
    console.log("You are not eligible for free delivery.");
}