// Add your functions here
const map = (array, func) => {
  const newArray = []
  for (const element of array) {
    newArray.push(func(element))
  }
  return newArray
}

const reduce = (array, func, start = 0) => {
  let total = start ? start : 0
  for (const element of array) {
    if (typeof element === 'number' || typeof element === 'bigint') {
      total += element
    } else {
      total = func(element, total)
    }
  }
  return total
}
