export function isOneWithLowestVision(number) {
    const digits = number.toString().split('').map((d) => +d);
    if (digits.indexOf(1) === -1) {
        return false;
    }

    const len = digits.length;
    let scores = new Array(len);
    digits.forEach(function (d, i) {
        let sum = 0;
        for (let j = Math.max(0, i - d); j < Math.min(i + d + 1, len); j++) {
            if (j !== i) sum += digits[j];
            scores[i] = sum;
        }
    });
    const minScore = Math.min(...scores);
    const iMinScore = scores.map((s, i) => {
        if (s === minScore) return i;
    });
    const minDigits = digits.filter((d, i) => iMinScore.filter(Number).includes(i));
    // const loneliest = Math.min(...minDigits);

    return Math.min(...minDigits) === 1;
}

console.log(23456, isOneWithLowestVision(23456));
console.log(42435, isOneWithLowestVision(42435));
console.log(34315, isOneWithLowestVision(34315));
console.log(212, isOneWithLowestVision(212));
