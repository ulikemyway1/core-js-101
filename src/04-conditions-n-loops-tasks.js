/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = num;
  if (num % 3 === 0) {
    result = 'Fizz';
  }
  if (num % 5 === 0) {
    result = 'Buzz';
  }
  if (num % 3 === 0 && num % 5 === 0) {
    result = 'FizzBuzz';
  }
  return result;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let result = 1;
  let k = n;
  while (k > 1) {
    result *= k;
    k -= 1;
  }
  return result;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let result = 0;
  for (let i = n1; i <= n2; i += 1) {
    result += i;
  }
  return result;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  let result;
  if ((a + b > c) && (a + c > b) && (b + c) > a) {
    result = true;
  } else result = false;
  return result;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  let isOverlay = false;
  if (((rect1.top + rect1.height) >= rect2.top && (rect1.left + rect1.width) >= rect2.left)) {
    isOverlay = true;
  }
  return isOverlay;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  let isInside = false;
  if (((point.x - circle.center.x) ** 2 + (point.y
    - circle.center.y) ** 2) < circle.radius ** 2) {
    isInside = true;
  }
  return isInside;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const arr = str.split('');
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr.filter((char) => {
      if (char === arr[i]) {
        return char;
      }
      return 0;
    }));
  }
  const char = result.filter((item) => {
    if (item.length === 1) {
      return item;
    }
    return 0;
  }).flat()[0];
  if (char) {
    result = char;
  } else result = null;
  return result;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let interval = '';
  if (isStartIncluded) {
    interval += '[';
  } else {
    interval += '(';
  }

  if (a >= b) {
    interval += `${b}, `;
    interval += a;
  } else {
    interval += `${a}, `;
    interval += b;
  }
  if (isEndIncluded) {
    interval += ']';
  } else {
    interval += ')';
  }
  return interval;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  let t = num;
  const result = [];
  while (t > 10) {
    result.push(t % 10);
    t = Math.floor(t / 10);
  }
  result.push(t);
  return result.join('');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const payload = ((ccn.toString()).slice(0, (ccn.toString()).length - 1)).split('').reverse()
    .map((item) => +item);
  const doubled = payload.map((item, index) => {
    let z;
    if (index === 0 || index % 2 === 0) {
      z = item * 2;
    } else z = item;
    return z;
  });
  function getDigits(n) {
    let j;
    if (n >= 10) {
      const arr = n.toString().split('').map((item) => +item);
      j = arr.reduce((ac, cur) => ac + cur);
    } else {
      j = n;
    }
    return j;
  }
  const sum = doubled.map(getDigits).reduce((ac, cur) => ac + cur);
  const checkDigit = (10 - (sum % 10)) % 10;

  return ((ccn.toString()).split('')).slice(-1).map((item) => +item)[0] === checkDigit;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let j = num;
  function getDigits(n) {
    let t = n;
    const arr = [];
    while (t >= 10) {
      arr.push(t % 10);
      t = Math.floor(t / 10);
    }
    arr.push(t);
    return arr;
  }
  function getSum(n) {
    return n.reduce((sum, cur) => sum + cur);
  }
  while (j >= 9) {
    j = getSum(getDigits(j));
  }
  j = getSum(getDigits(j));
  return j;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  let testStr = str;
  let tempStr = ' ';
  let isBalanced = true;
  let index = 1;
  const maxIndex = str.length;
  const config = ['[]', '{}', '()', '<>'];
  while (index < maxIndex) {
    for (let i = 0; i < config.length; i += 1) {
      if (testStr.indexOf(config[i]) !== -1) {
        tempStr = '';
        for (let j = 0; j < testStr.length; j += 1) {
          if (j !== testStr.indexOf(config[i]) && (j !== (testStr.indexOf(config[i]) + 1))) {
            tempStr += testStr[j];
          }
        }
        testStr = tempStr;
        tempStr = '';
      }
    }
    index += 1;
  }
  if (testStr.length !== 0) {
    isBalanced = false;
  }
  return isBalanced;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let dec = num;
  const basis = n;
  const arr = [];
  while (Math.floor(dec / basis) !== 0) {
    arr.push(dec % basis);
    dec = Math.floor(dec / basis);
  }
  arr.push(dec % basis);
  return (arr.reverse().join('')).toString();
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const splitArr = pathes.map((path) => path.split('/').map((item) => {
    let z = item;
    if (item === '') {
      z = '/';
    }
    return z;
  }));
  let column = 0;
  const rows = pathes.length - 1;
  let isEqual = true;
  while (isEqual) {
    for (let i = 0; i <= rows; i += 1) {
      if (splitArr[i][column] !== splitArr[0][column]) {
        isEqual = false;
        break;
      }
    }
    column += 1;
  }
  const resultPath = column - 1;
  let result = '';
  splitArr[0].slice(0, resultPath).forEach((item, index) => {
    if (index !== 0) {
      result += item;
      result += '/';
    } else result += item;
  });
  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const product = [];
  const rows = m1.length - 1;
  const columns = m2.length - 1;
  for (let i = 0; i <= rows; i += 1) {
    const line = [];
    for (let j = 0; j <= rows; j += 1) {
      let sum = 0;
      for (let k = 0; k <= columns; k += 1) {
        sum += m1[i][k] * m2[k][j];
      }
      line.push(sum);
    }
    product.push(line);
  }
  return product;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */

function evaluateTicTacToePosition(position) {
  const arr1 = [];
  position.forEach((item) => {
    for (let i = 0; i < 3; i += 1) {
      if (item[i]) {
        arr1.push(item[i]);
      } else if (item[i] === 0 || item[i] === '0') {
        arr1.push('0');
      } else {
        arr1.push('space');
      }
    }
  });
  const arr = arr1;
  let result;
  let temp;
  const [i0, i1, i2, i3, i4, i5, i6, i7, i8] = arr;
  if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== 'space') {
    result = i0;
  } else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== 'space') {
    result = i3;
  } else if (arr[6] === arr[7] && arr[6] === arr[8] && arr[6] !== 'space') {
    result = i6;
  } else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== 'space') {
    result = i4;
  } else if (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== 'space') {
    result = i2;
  } else if (arr[0] === arr[3] && arr[0] === arr[6] && arr[0] !== 'space') {
    result = i3;
  } else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== 'space') {
    result = i7;
  } else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== 'space') {
    result = i5;
  } else {
    result = undefined;
    temp = i1 + i8;
  }
  if (temp > 1000) {
    temp += 1;
  }
  return result;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
