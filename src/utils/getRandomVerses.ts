const getRandomEntries = (arr, n) => {
    if (n > arr.length) {
    //   throw new Error("n cannot be greater than the array length");
    n = arr.length
    }
  
    const result = [];
    const usedIndices = new Set();
  
    while (result.length < n) {
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      if (!usedIndices.has(randomIndex)) {
        result.push(arr[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }
  
    return result;
  }

  export default getRandomEntries

  