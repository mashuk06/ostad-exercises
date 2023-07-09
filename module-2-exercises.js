
//Exercise 1:

const destructureExample = (obj, arr) => {
  const { name, age } = obj;
  const [value0, , value2] = arr;

  return { name, age };
}

const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 30, 40];

const result1 = destructureExample(obj, arr)
console.log("Exercise 1 result: ")
console.log(result1)

//output: { name: 'John', age: 30 }

//Exercise 2
const sumNumbers = (...numbers) => numbers.reduce((sum, number) => sum + number, 0)

const result2 = sumNumbers(1, 2, 3, 4, 5)
consoleLog(2,result2)

//output: 15

//Exercise 3
const createGreeting = name => `Hello, ${name}! Welcome to our website.`

const result3 = createGreeting('Alice')
consoleLog(3,result3)

//output: Hello, Alice! Welcome to our website.

//Exercise 4
const isEven = number => (number % 2 === 0 ? 'Even' : 'Odd')

const result4 = isEven(7)
consoleLog(4,result4)

//Output: Odd

//Exercise 5
const multiply = (a, b) => a * b

//Exercise 6
const getLargestNumber = (a, b) => (a > b ? a : b)

const result5 = getLargestNumber(10, 5)
consoleLog(6,result5)

//Output: 10

//Exercise 7
const getAddressCity = address => address?.city ?? 'Unknown'

const address = { street: '123 Main St', country: 'USA' }
const result6 = getAddressCity(address)
consoleLog(7,result6)

//Output: Unknown

//Exercise 8
const doubleNumbers = numbers => numbers.map(number => number * 2)

const result7 = doubleNumbers([1, 2, 3, 4, 5])
consoleLog(8,result7)

//Output: [ 2, 4, 6, 8, 10 ]

//Exercise 9
const filterEvenNumbers = numbers => numbers.filter(number => number % 2 === 0)

const result8 = filterEvenNumbers([1, 2, 3, 4, 5])
consoleLog(9,result8)

//Output: [2, 4]

//Exercise 10
const sumArray = numbers => numbers.reduce((sum, number) => sum + number, 0)

const result9 = sumArray([1, 2, 3, 4, 5])
consoleLog(10,result9)

//Output: 15

//Exercise 11
const sortNumbers = numbers => numbers.sort((a, b) => a - b)

const result10 = sortNumbers([5, 2, 8, 1, 4])
consoleLog(11,result10)

//Output: [1, 2, 4, 5, 8]


//common function for log data
function consoleLog(exerciseNo,result) {
  console.log(`Exercise ${exerciseNo} result: ` + result)
}

