import Navigation from './components/Navigation';
import { Switch,Route  } from 'react-router-dom'
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Single from './pages/Single';




function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path='/blog/:title' component={Single}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/' exact component={Home}/>
        <h1>Hello !</h1>
      </Switch>
    </div>
  );
}

export default App;
