function convertToNumber(num) {
    const result = [];
    for (let i = 0; i < num.length; i++) {
        const arr = Number(num[i]);
        if (Number.isNaN(arr)) {
            return new Error(
                `The value '${num[i]}' is not a valid number.`
            );
        }
        result.push(arr);
    }
    return result;
}

function findMean(num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total / num.length;
}

function findMedian(num) {
    let median = 0,
        numLength = num.length;
    num.sort((a, b) => a - b);
    if (numLength % 2 === 0) {
        median = (num[numLength / 2 - 1] + num[numLength / 2]) / 2;
    } else {
        median = num[(numLength - 1) / 2];
    }
    return median;
}

function findMode(num) {
    let mode = [],
        count = [],
        i, number, maxIdx = 0;
    for (i = 0; i < num.length; i++) {
        number = num[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIdx) {
            maxIdx = count[number];
        }
    }

    for (i in count) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIdx) {
                mode.push(Number(i));
            }
        }
    }
    return mode;
}

module.exports = {
    convertToNumber,
    findMean,
    findMedian,
    findMode
};