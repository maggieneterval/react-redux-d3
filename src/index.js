import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import store from './store';
import AppContainer from './Containers/AppContainer';
import ScatterPlotContainer from './Containers/ScatterPlotContainer';
import BarChartContainer from './Containers/BarChartContainer';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="scatterplot" />
        <Route path="scatterplot" component={ScatterPlotContainer} />
        <Route path="barchart" component={BarChartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
