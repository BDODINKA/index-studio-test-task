export const imgMultiplier = (
  subArraySize: number,
  img: string[],
  countSubArray: number
) => {
  const size = subArraySize;
  const array = [];

  const result = img.reduce((acc: string[][], _, i) => {
    if (i % size === 0) {
      acc.push(img.slice(i, i + size));
    }
    return acc;
  }, []);

  for (let i = 0; i < countSubArray; i++) {
    array.push(...result);
  }

  return array;
};
