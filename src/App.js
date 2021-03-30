import React, { lazy, Suspense } from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css';

const HomePage = lazy(() => import('./pages/home/index'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          {/* //switch là lựa chọn các router */}
          <Route path="/home">
            <HomePage />
          </Route>
          <Route extract path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
