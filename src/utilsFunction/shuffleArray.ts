
function shuffleArray(array: any[]): any[]{
  // Make a copy of the original array to avoid mutating the original array
  const newArray = [...array];
  
  // Start from the end of the array
  for (let i = newArray.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  
  return newArray;
}

export default shuffleArray