import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import App from './Components/App';
import ScatterPlotContainer from './Containers/ScatterPlotContainer';
import BarChartContainer from './Containers/BarChartContainer';
import Home from './Components/Home';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home} />
        <Route path="scatterplot" component={ScatterPlotContainer} />
        <Route path="barchart" component={BarChartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
