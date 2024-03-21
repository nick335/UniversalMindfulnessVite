import { imageResponseType } from "../types/api/response";

export const splitArray = (array: imageResponseType[], numArrays: number) => {
  const result: imageResponseType[][] = Array.from({ length: numArrays }, () => []);

  for (let i = 0; i < array.length; i++) {
    const subArrayIndex = i % numArrays;
    result[subArrayIndex].push(array[i]);
  }

  return result;
};