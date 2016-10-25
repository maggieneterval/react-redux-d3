import { connect } from 'react-redux';
import ScatterPlot from '../Components/ScatterPlot';

const mapStateToProps = ({chartData, chartDimensions}) => ({
  chartData,
  chartDimensions
});

export default connect(
  mapStateToProps
)(ScatterPlot);
