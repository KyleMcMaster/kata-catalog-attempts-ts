export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }
    if (numbers.slice(0, 2).includes("//")) {
        numbers = numbers.replace("//", '');
        const index = numbers.indexOf('\n');
        const delimiter = numbers.substr(0, index);
        const regex = RegExp(delimiter, 'g');
        numbers = numbers.replace(regex, ',');
    }
    if (numbers.includes('\n')) {
        numbers = numbers.replace(/\n/g, ',');
    }
    if (numbers.includes(',')) {
        var numArray = numbers.split(",");

        let sum = 0;
        numArray.forEach(n => {
            if (n !== '') {
                sum += parseInt(n);
            }
        });
        return sum;
    }
    return parseInt(numbers);
}