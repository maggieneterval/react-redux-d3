import { connect } from 'react-redux';
import App from '../Components/App';
import {createRandomDataAction} from '../actions';

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  getRandomData: () => {
    dispatch(createRandomDataAction())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
