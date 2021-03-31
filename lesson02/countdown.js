<<<<<<< HEAD
function countDown(num) {
    for (let i = num; i > -1; i--) {
        console.log(i);
    }
}
countDown(10);

function recursiveCountDown(num) {
    if (num === 0) {
        return num;
    }
    console.log(num);
    return recursiveCountDown(num - 1);
}

=======
function countDown(num) {
    for (let i = num; i > -1; i--) {
        console.log(i);
    }
}
countDown(10);

function recursiveCountDown(num) {
    if (num === 0) {
        return num;
    }
    console.log(num);
    return recursiveCountDown(num - 1);
}

>>>>>>> e27ad118934562ed76d1324e7b1ddc2c59c535b8
recursiveCountDown(20);