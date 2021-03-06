/**
 * @param val 
 * the value
 * @param base 
 * the logrithmic base
 * @returns Number
 * Returns the logrithim of a given val for a given base
 * 
 */
 function logx(val: number, base: number) {
    return Math.log(val) / Math.log(base);
}
/**
 * @param {number} min the minumum number
 * @param {number} max the maximum number
 * @returns {number} a random number between min and max
 */
function randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min
}
/**
 * @param {number} min the minumum number [inclusive]
 * @param {number} max the maximum number [exclusive]
 * @returns {number} a random integer between min and max 
 */
function randomInt(min: number, max: number): number {
    return Math.floor(randomBetween(min, max))
}
/**
 * 
 * @param input the input of the function
 * @param input_start the minumum value of input
 * @param input_end the maximum value of input
 * @param output_start the minumum return value
 * @param output_end the maximum return value
 * @returns a number between @param output_start and @param output_end
 */
function map(input: number, input_start: number, input_end: number, output_start: number, output_end: number):number {
    return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start);
}
/**
 * 
 * @param p1 a point with an x and y
 * @param p2 a point with an x and y
 * @param t threshold to test within
 * @returns boolean value determining if the points are in range of the threshold
 */
function threshold(p1: { x: number; y: number; }, p2: { x: number; y: number; }, t: number):boolean {
    return (Math.sqrt(((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)) - (2 * t) < 0);
}

/**
 * @param x1 X value of the first point
 * @param y1 Y value of the first point
 * @param x2 X value of the second point
 * @param y2 Y value of the second point
 * @returns the distance between these two points
 */
function distance(x1: number,y1: number,x2: number,y2: number) {
    return (((x1-x2)**2)+((y1-y2)**2))**0.5
}
/**
 * 
 * @param value A list of values
 * @returns A randomly selected value from values
 */
function randomChoice(value: any[]) {
    let i = Math.round(Math.random() * value.length)
    return value[i]
}
/**
 * 
 * @param value A list of values
 * @param not A list of values to not pick from
 * @returns A value from the list value that is not in the list not
 */
function randomChoiceNot(value: any[], not: any[]) {
    let i = randomChoice(value)
    while (i in not) {
        i = randomChoice(value)
    }
    return i
}
/**
 * 
 * @param min Minimum value
 * @param max Maximum value
 * @param not Numbers not to choose
 * @returns A number between Min and Max that is not in not
 */
function randomBetweenNot(min: number, max: number, not: number[]): number {
    let i = randomBetween(min, max)
    while (i in not) {
        i = randomBetween(min, max)
    }
    return i
}
/**
 * @param min Minumum value
 * @param max Maximum value
 * @param not Numbers not to choose
 * @returns An integer between Min and Max that is not in not
*/
function intBetweenNot(min: number, max: number, not: number[]): number {
    let i = randomInt(min, max)
    while (i in not) {
        i = randomInt(min, max)
    }
    return i
}
/**
 * 
 * @param {number} bias A number between 0 and 1 that determines the bias of the coin flip
 * @param bias bias defaults to 0.5, or half.
 * @returns true or false, weighted by bias
 */
function coinFlip(bias?: number|0.5): boolean {
    return (Math.random() > bias)
}