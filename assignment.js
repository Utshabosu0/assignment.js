//  https://github.com/Utshabosu0/assignment.js




// calculate Kilometer To Meter
function kilometerToMeter(kilometer) {
    // 1 kilometer = 1000 meter
    var kilometer = kilometer * 1000;
    return kilometer;
}
var result = kilometerToMeter(5);
console.log(result);






// Budget calculator.
function budgetcalculator(num1, num2, num3) {
    // how many things need. 
    var watch = num1 * 500;
    var phone = num2 * 10000;
    var laptop = num3 * 50000;
    // total cost
    var cost = watch + phone + laptop;
    return cost;
}
var total = budgetcalculator(1, 1, 1);
console.log(total);






// Find the total cost of stay hotel
function hotelcost(stay) {
    var cost = 0;
    if (stay <= 10) {
        // if stay 10 days or less then 10 days, daily cost 200 tk
        cost = stay * 200;
    } else if (stay <= 20) {
        // if stay greater then 10 days or less then 20 days,daily cost 150 tk
        var firstpart = 10 * 200;
        var remaining = stay - 10;
        var secondpart = remaining * 150;
        cost = firstpart + secondpart;
    } else {
        // if stay greater then 20 days,daily cost 100 tk
        var firstpart = 10 * 200;
        var secondpart = 10 * 150;
        var remaining = stay - 20;
        var thirdpart = remaining * 100;
        // total cost
        cost = firstpart + secondpart + thirdpart;
    }
    return cost;
}
var total = hotelcost(11);
console.log(total);




// Find longest string of array
function megaFriend(arr) {
    var max = "";
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element.length > max.length) {
            max = element;
        }
    }
    return max;
}
var friends = ['dipon', 'newton', 'roni', 'antu', 'salman'];
var larger = megaFriend(friends);
console.log(larger);