import Navigation from './components/Navigation';
import { Switch,Route,Redirect  } from 'react-router-dom'
import PageRenderer from './components/PageRenderer';




function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path='/:page' component={PageRenderer}/>
        <Route path='/' exact render={()=><Redirect to='/home'/>}/>
        <Route component={()=>404}/>
        <h1>Hello !</h1>
      </Switch>
    </div>
  );
}

export default App;
