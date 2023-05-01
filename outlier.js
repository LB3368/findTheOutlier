const findTheOutlier = (array) => {
    //Determine if the array is odd or even
    const isEven = array.filter(num => num % 2 === 0)
    const isOdd = array.filter(num => num % 2 !== 0)
    // find the number that doesn't match the rest
    return isEven.length === 1 ? isEven[0] : isOdd[0]
}

console.log(findTheOutlier([2,4,0,100,4,11,2602,36]))
console.log(findTheOutlier([160,3,1719,19,11,13,-21]))