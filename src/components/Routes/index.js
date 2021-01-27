import { Route, Switch } from 'react-router-dom';
import { Test } from '../Test';
import { Home } from '../Home';

// import TrafficLightPostTest from '../TrafficLight/TrafficLightPostTest';
import DictionaryScreen from '../Dictionary/DictionaryScreen';

import TaskScreen from '../Task/TaskScreen';
import TimerScreen from '../Timer/TimerScreen';
import AddNewTask from '../Task/AddNewTask';
import TimerWithClock from '../TimerWithClock/TimerWithClock';
import WeatherScreen from '../Weather/WeatherScreen';
import TrafficLight from '../TrafficLight/TrafficLight';
import TrafficLightPostTest from '../TrafficLight/TrafficLightPostTest';

export const Routes = ()=> {
  return (
    <Switch>
      <Route path="/traffic-light-post" component={TrafficLightPostTest}/>
      <Route path="/traffic-light" component={TrafficLight}/>
      <Route path="/task/new-task" component={AddNewTask}/>

      <Route path="/task" component={TaskScreen}/>

      <Route path="/timer" component={TimerScreen}/>
      <Route path="/dictionary" component={DictionaryScreen}/>

      <Route path="/timer-with-clock" component={TimerWithClock}/>
      <Route path="/weather" component={WeatherScreen}/>

      <Route path="/test" component={Test}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
}
