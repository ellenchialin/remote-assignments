/* ---------- Assignment 1 (Function & Array) ---------- */
function max(arr) {
  let maxNum = 0

  arr.forEach((num) => {
    maxNum = num > maxNum ? num : maxNum
  })
  return maxNum
}
max([1, 2, 4, 5])
max([5, 2, 7, 1, 6])

/* ---------- Assignment 2 (Object) ---------- */
// 1st approach - object literal
const add = {
  op: '+',
  n1: 1,
  n2: 9,
}

const subtract = {
  op: '-',
  n1: 14,
  n2: 2,
}

// 2nd approach - class
class Calc {
  constructor(n1, n2, op) {
    this.n1 = n1
    this.n2 = n2
    this.op = op
  }
}

const addWithClass = new Calc(20, 2, '+')
const subtractWithClass = new Calc(100, 2, '-')

function calculate(args) {
  let result
  if (args.op === '+') {
    result = args.n1 + args.n2
  } else if (args.op === '-') {
    result = args.n1 - args.n2
  } else {
    result = 'Not supported'
  }
  return result
}

calculate(add)
calculate(subtract)
calculate(addWithClass)
calculate(subtractWithClass)

/* ---------- Assignment 3 (Function, Array and Object) ---------- */
function avg(data) {
  const productNum = data.size

  const productsArray = data.products
  const sum = productsArray
    .map((item) => item.price)
    .reduce((prev, current) => prev + current, 0)
  
  return sum / productNum
}

avg({
  size: 3,
  products: [
    {
      name: 'Product 1',
      price: 100,
    },
    {
      name: 'Product 2',
      price: 700,
    },
    {
      name: 'Product 3',
      price: 250,
    },
  ],
})

/* ---------- Assignment 5 (Algorithm Practice) ---------- */
function twoSum(nums, target) {
  for (let x = 0; x < nums.length; x++) {
    for (let y = 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y]
      }
    }
  }
}
