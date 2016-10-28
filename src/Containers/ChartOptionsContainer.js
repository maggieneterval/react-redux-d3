import { connect } from 'react-redux';
import ChartOptions from '../Components/ChartOptions';
import { createRandomDataAction, CSVDataActionAsync } from '../actions';

const mapStateToProps = (state, {chartType}) => ({
  chartType
})

const mapDispatchToProps = (dispatch) => ({
  getRandomData: (chartType) => {
    if (chartType === 'scatterplot') {
      dispatch(createRandomDataAction(20, 2, 0, 75));
    } else if (chartType === 'barchart') {
      dispatch(createRandomDataAction(20, 1, 0, 75));
    } else {
      return;
    }
  },
  uploadCSV: (evt) => {
    dispatch(CSVDataActionAsync(evt))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartOptions);