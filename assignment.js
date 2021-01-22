//  https://github.com/Utshabosu0/assignment.js

function kilometerToMeter(kilometer) {
    var kilometer = kilometer * 1000;
    return kilometer;
}
var result = kilometerToMeter(5);
console.log(result);



function budgetcalculator(num1, num2, num3) {
    var watch = num1 * 500;
    var phone = num2 * 10000;
    var laptop = num3 * 50000;
    var add = watch + phone + laptop;
    return add;

}
var total = budgetcalculator(1, 1, 1);
console.log(total);


function hotelcost(stay) {
    var cost = 0;
    if (stay <= 10) {
        cost = stay * 200;
    } else if (stay <= 20) {
        var firstpart = 10 * 200;
        var remaining = stay - 10;
        var secondpart = remaining * 150;
        cost = firstpart + secondpart;
    } else {
        var firstpart = 10 * 200;
        var secondpart = 10 * 150;
        var remaining = stay - 20;
        var thirdpart = remaining * 100;
        cost = firstpart + secondpart + thirdpart;
    }
    return cost;
}
var total = hotelcost(11);
console.log(total);


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