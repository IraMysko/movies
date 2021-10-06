import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Routes } from './constants';
import Header from './components/Header';
import withAuth from './components/withAuth';
import Movies from './components/Movies';
import Movie from './components/Movie';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={`${Routes.Movie}/:id`} component={withAuth(Movie)} />
        <Route path={Routes.Movies} component={withAuth(Movies)} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
