import { connect } from 'react-redux';
import Axis from '../Components/Axis';

const mapStateToProps = ({chartDimensions}, {orient, scale}) => ({
  chartDimensions,
  orient,
  scale
});

export default connect(
  mapStateToProps
)(Axis);
