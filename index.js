let welcome;
let month = parseInt(prompt("Enter a Month:"));
let today = new Date();
let daily = today.setMonth(month);
let months = today.getMonth();
if (months <= 5) {
    welcome = "It's Summer Season";
} else if (months >= 6 && months < 9) {
    welcome = "It's Fall Season";
} else {
    welcome = "It's Winter Season";
}
document.write("<h1>" + welcome);
console.log(welcome);