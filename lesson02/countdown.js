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

recursiveCountDown(20);