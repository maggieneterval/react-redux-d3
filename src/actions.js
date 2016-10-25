export const GET_RANDOM_DATA = 'GET_RANDOM_DATA';

const generateData = (numPoints, min, max) => {
  const arr = [];
  for (var i = 0; i < numPoints; i++) {
    arr.push([Math.random() * (max - min) + min, Math.random() * (max - min) + min])
  }
  return arr;
}

export const createRandomDataAction = () => ({
  type: GET_RANDOM_DATA,
  data: generateData(20, 0, 100)
})
