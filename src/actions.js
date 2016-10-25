import { handleFiles, generateData } from './utilities';

//constants:
export const GET_RANDOM_DATA = 'GET_RANDOM_DATA';
export const GET_CSV_DATA = 'GET_CSV_DATA';

//sync action creators:
export const createRandomDataAction = () => ({
  type: GET_RANDOM_DATA,
  data: generateData(20, 0, 100)
})

export const CSVDataActionSync = (data) => ({
  type: GET_CSV_DATA,
  data
})

//async action creators:
export const CSVDataActionAsync = (fileUploadEvent) => {
 return (dispatch) => {
   handleFiles(fileUploadEvent)
   .then(data => dispatch(CSVDataActionSync(data)))
 }
}