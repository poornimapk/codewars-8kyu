/* Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day. */

function isToday(date) {
    const today = new Date();
    return (today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear())
}

// TEST CASES

 const today = new Date();
console.log(isToday(today), true);

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(isToday(tomorrow), false);

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(isToday(yesterday), false);