export const splitArray = (array: string[], numArrays: number) => {
  const result: string[][] = Array.from({ length: numArrays }, () => []);

  for (let i = 0; i < array.length; i++) {
    const subArrayIndex = i % numArrays;
    result[subArrayIndex].push(array[i]);
  }

  return result;
};