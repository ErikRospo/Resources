/**
 * @param val
 * the value
 * @param base
 * the logrithmic base
 * @returns Number
 * Returns the logrithim of a given val for a given base
 *
 */
 function logx(val, base) {
    return Math.log(val) / Math.log(base);
}
/**
 * @param {number} min the minumum number
 * @param {number} max the maximum number
 * @returns {number} a random number between min and max
 */
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * @param {number} min the minumum number [inclusive]
 * @param {number} max the maximum number [exclusive]
 * @returns {number} a random integer between min and max
 */
function randomInt(min, max) {
    return Math.floor(randomBetween(min, max));
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
function map(input, input_start, input_end, output_start, output_end) {
    return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start);
}
/**
 *
 * @param p1 a point with an x and y
 * @param p2 a point with an x and y
 * @param t threshold to test within
 * @returns boolean value determining if the points are in range of the threshold
 */
function threshold(p1, p2, t) {
    return (Math.sqrt(((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)) - (2 * t) < 0);
}
/**
 * @param x1 X value of the first point
 * @param y1 Y value of the first point
 * @param x2 X value of the second point
 * @param y2 Y value of the second point
 * @returns the distance between these two points
 */
function distance(x1, y1, x2, y2) {
    return (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
}
/**
 *
 * @param value A list of values
 * @returns A randomly selected value from values
 */
function randomChoice(value) {
    let i = Math.round(Math.random() * value.length);
    return value[i];
}
/**
 *
 * @param value A list of values
 * @param not A list of values to not pick from
 * @returns A value from the list value that is not in the list not
 */
function randomChoiceNot(value, not) {
    let i = randomChoice(value);
    while (i in not) {
        i = randomChoice(value);
    }
    return i;
}
/**
 *
 * @param min Minimum value
 * @param max Maximum value
 * @param not Numbers not to choose
 * @returns A number between Min and Max that is not in not
 */
function randomBetweenNot(min, max, not) {
    let i = randomBetween(min, max);
    while (i in not) {
        i = randomBetween(min, max);
    }
    return i;
}
/**
 * @param min Minumum value
 * @param max Maximum value
 * @param not Numbers not to choose
 * @returns An integer between Min and Max that is not in not
*/
function intBetweenNot(min, max, not) {
    let i = randomInt(min, max);
    while (i in not) {
        i = randomInt(min, max);
    }
    return i;
}
/**
 *
 * @param bias A number between 0 and 1 that determines the bias of the coin flip
 * @returns true or false, weighted by bias
 */
function coinFlip(bias) {
    if (bias == undefined) {
        bias = 0.5;
    }
    return (Math.random() > bias);
}

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */
function rgbToHsv(r, g, b) {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [ h, s, v ];
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return [ r * 255, g * 255, b * 255 ];
}