//This is a random message generator...

//Arrays containing possible sentences...
const array1 = ['I think', 'I saw before', 'A little bird told me', 'A friend told me'];
const array2 = ['you should', 'you should not', 'you have to', 'you always'];
const array3 = ['dance', 'run', 'sing', 'be happy'];

//This funtion returns the final combination made with the selected sentence pieces...
const randomMessage = (randArray1, randArray2, randArray3) => {
    return `${randArray1} ${randArray2} ${randArray3}!`
}

//This function uses a random number as the index to select and return one of the sentences pieces inside the array.
const selectRandomArray = arr => {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

//This will log the final result below: 
console.log(randomMessage(selectRandomArray(array1), selectRandomArray(array2), selectRandomArray(array3)));