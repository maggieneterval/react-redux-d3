import { GET_RANDOM_DATA, GET_CSV_DATA } from '../actions';

const initialState = {
  chartData: [[1,10], [2,7], [9, 14]],
  chartDimensions: {
    width: 300,
    height: 300,
    padding: 25
  }
};

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_DATA:
      return Object.assign({}, state, {chartData: action.data})
    case GET_CSV_DATA:
      return Object.assign({}, state, {chartData: action.data})
    default:
      return state;
  }
}
