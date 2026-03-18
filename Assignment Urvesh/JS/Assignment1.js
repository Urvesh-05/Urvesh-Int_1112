// 1.Smart Discount Calculator
let name = "Urvesh";
let age = 21;
let purchaseAmount = 10000;

let discount = 0;

if (age < 18) {
    discount += 10;
} else if (age >= 60) {
    discount += 20;
}

if (purchaseAmount > 5000) {
    discount += 5;
}

let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);

alert(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${finalAmount}`);

