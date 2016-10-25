import * as d3 from 'd3';

export const handleFiles = (event) => {
  if (window.FileReader) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    return new Promise ( (resolve, reject) => {
      reader.onload = (event) => {
        const data = event.target.result;
        const parsedCSV = d3.csvParseRows(data, d => {
          return [Number(d[0]), Number(d[1])];
        })
        resolve(parsedCSV);
      }
      reader.onerror = (event) => {
        reject(new Error (event.target.error))
      }
    })
  } else {
    alert('FileReader is not supported in this browser. Please retry with Chrome.');
  }
}

export const generateData = (numPoints, min, max) => {
  const arr = [];
  for (var i = 0; i < numPoints; i++) {
    arr.push([Math.random() * (max - min) + min, Math.random() * (max - min) + min])
  }
  return arr;
}