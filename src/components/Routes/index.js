import { Route, Switch } from 'react-router-dom';

import { Test } from '../Test';
import { Home } from '../Home';

export const Routes = ()=> {
  return (
    <Switch>
      <Route path="/test" component={Test}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
}