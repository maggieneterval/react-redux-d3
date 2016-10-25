import { connect } from 'react-redux';
import App from '../Components/App';
import { createRandomDataAction, CSVDataActionAsync } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  getRandomData: () => {
    dispatch(createRandomDataAction())
  },
  uploadCSV: (evt) => {
    dispatch(CSVDataActionAsync(evt))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
