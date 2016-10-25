import { connect } from 'react-redux';
import ScatterPlot from '../Components/ScatterPlot';

const mapStateToProps = ({chartData, chartDimensions}) => ({
  chartData,
  chartDimensions
});

const mapDispatchToProps = () => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScatterPlot);
