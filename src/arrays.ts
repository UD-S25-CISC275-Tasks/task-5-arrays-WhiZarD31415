/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length) {
        numbers = [numbers[0], numbers[numbers.length - 1]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((x: number): number => x * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers: number[] = numbers.map((x: string): number =>
        parseInt(x) ? parseInt(x) : 0,
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    amounts = amounts.map((value: string): string =>
        value[0] === "$" ? value.slice(1) : value,
    );
    const integers: number[] = amounts.map((value: string): number =>
        parseInt(value) ? parseInt(value) : 0,
    );
    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.map((message: string): string =>
        message.slice(-1) === "!" ? message.toUpperCase() : message,
    );
    messages = messages.filter(
        (message: string): boolean => message.slice(-1) != "?",
    );
    return messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((word: string): boolean => word.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const bool: boolean = colors.every((color: string): boolean =>
        ["red", "blue", "green"].includes(color),
    );
    return bool;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (acc: number, result: number): number => acc + result,
        0,
    );
    const added: string = addends.length ? addends.join("+") : "0";
    const result: string = sum.toString() + "=" + added;
    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    var index: number = values.findIndex((num: number): boolean => num < 0);
    index = index >= 0 ? index : values.length;
    const sum: number = values
        .slice(0, index)
        .reduce((acc: number, result: number): number => acc + result, 0);
    const copy: number[] = [...values];
    copy.splice(index + 1, 0, sum);
    return copy;
}
